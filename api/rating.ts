/**
 * Tool ratings: GET /api/rating/?tool=/white-screen returns { count, average };
 * POST { tool, stars } stores a rating, POST { tool, comment } adds an optional comment.
 *
 * Storage is an Upstash Redis database connected to the Vercel project (Vercel → Storage), which
 * sets KV_REST_API_URL / KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_URL / _TOKEN). Without it, every
 * request answers 503 { configured: false } and the site simply shows no rating widget.
 *
 * Only real ratings are counted: one per visitor (hashed IP, never stored in plain form) per tool;
 * rating again replaces the earlier stars instead of adding a second vote.
 */

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || ''
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ''

const TOOL_PATTERN = /^\/[a-z0-9][a-z0-9/-]{0,119}$|^\/$/
const VOTE_TTL = 60 * 60 * 24 * 365
const DAILY_WRITES_PER_VISITOR = 60
const MAX_COMMENT = 500
const KEEP_COMMENTS = 2000

type Command = (string | number)[]

async function redis(commands: Command[]): Promise<unknown[]> {
  const response = await fetch(`${REDIS_URL.replace(/\/$/, '')}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  })
  if (!response.ok) throw new Error(`redis ${response.status}`)
  const results = (await response.json()) as { result?: unknown; error?: string }[]
  return results.map((entry) => {
    if (entry.error) throw new Error(entry.error)
    return entry.result
  })
}

function json(body: unknown, status = 200, cache = 'no-store'): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': cache },
  })
}

function normalizeTool(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const tool = value.trim().toLowerCase().replace(/\/+$/, '') || '/'
  return TOOL_PATTERN.test(tool) && !tool.includes('//') ? tool : null
}

async function visitorId(request: Request): Promise<string> {
  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown'
  // Salted with the database token (a server-side secret), so the stored hash cannot be reversed to an IP.
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${REDIS_TOKEN}:${ip}`))
  return Array.from(new Uint8Array(bytes).slice(0, 12), (b) => b.toString(16).padStart(2, '0')).join('')
}

export function summarize(fields: unknown): { count: number; average: number } {
  // HGETALL comes back as a flat [field, value, …] list over REST.
  const list = Array.isArray(fields) ? (fields as string[]) : []
  let count = 0
  let total = 0
  for (let i = 0; i + 1 < list.length; i += 2) {
    const stars = Number(list[i].replace(/^s/, ''))
    const n = Math.max(0, Number(list[i + 1]) || 0)
    if (stars >= 1 && stars <= 5) {
      count += n
      total += stars * n
    }
  }
  return { count, average: count ? Math.round((total / count) * 10) / 10 : 0 }
}

export async function GET(request: Request): Promise<Response> {
  if (!REDIS_URL || !REDIS_TOKEN) return json({ configured: false }, 503)
  const tool = normalizeTool(new URL(request.url).searchParams.get('tool'))
  if (!tool) return json({ error: 'bad tool' }, 400)
  try {
    const [fields] = await redis([['HGETALL', `rating:${tool}`]])
    return json({ configured: true, ...summarize(fields) }, 200, 'public, max-age=60, s-maxage=300, stale-while-revalidate=3600')
  } catch {
    return json({ error: 'unavailable' }, 502)
  }
}

export async function POST(request: Request): Promise<Response> {
  if (!REDIS_URL || !REDIS_TOKEN) return json({ configured: false }, 503)
  let body: { tool?: unknown; stars?: unknown; comment?: unknown }
  try {
    body = await request.json()
  } catch {
    return json({ error: 'bad body' }, 400)
  }
  const tool = normalizeTool(body.tool)
  if (!tool) return json({ error: 'bad tool' }, 400)

  try {
    const visitor = await visitorId(request)
    const day = new Date().toISOString().slice(0, 10)
    const limitKey = `rl:${visitor}:${day}`
    const [writes] = await redis([['INCR', limitKey], ['EXPIRE', limitKey, 86400]])
    if (Number(writes) > DAILY_WRITES_PER_VISITOR) return json({ error: 'too many' }, 429)

    const voteKey = `rv:${tool}:${visitor}`

    if (typeof body.comment === 'string') {
      const comment = body.comment.replace(/\s+/g, ' ').trim().slice(0, MAX_COMMENT)
      if (!comment) return json({ ok: true })
      // Comments are only taken from someone who rated this tool, with the stars they gave.
      const [stars] = await redis([['GET', voteKey]])
      if (!stars) return json({ error: 'rate first' }, 409)
      await redis([
        ['LPUSH', 'rating-comments', JSON.stringify({ tool, stars: Number(stars), comment, at: new Date().toISOString() })],
        ['LTRIM', 'rating-comments', 0, KEEP_COMMENTS - 1],
      ])
      return json({ ok: true })
    }

    const stars = Number(body.stars)
    if (!Number.isInteger(stars) || stars < 1 || stars > 5) return json({ error: 'bad stars' }, 400)

    const hashKey = `rating:${tool}`
    const [previous] = await redis([['SET', voteKey, stars, 'EX', VOTE_TTL, 'GET']])
    const before = Number(previous) || 0
    const updates: Command[] = []
    if (before !== stars) {
      if (before >= 1 && before <= 5) updates.push(['HINCRBY', hashKey, `s${before}`, -1])
      updates.push(['HINCRBY', hashKey, `s${stars}`, 1])
    }
    updates.push(['HGETALL', hashKey])
    const results = await redis(updates)
    return json({ ok: true, ...summarize(results[results.length - 1]) })
  } catch {
    return json({ error: 'unavailable' }, 502)
  }
}
