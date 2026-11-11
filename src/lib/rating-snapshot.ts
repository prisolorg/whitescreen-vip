/**
 * Visitor ratings as they stand at build time, read once from the ratings database (see api/rating.ts).
 * Used for the AggregateRating structured data and the matching visible rating line, which must be in the
 * page's HTML for search engines. Server-only: it reads the database credentials from the build environment
 * and is imported only by the static (no-JS) page bodies. Without credentials (local builds) it is empty.
 *
 * The snapshot refreshes with every deploy; the live badge on the page always shows the current numbers.
 */
import { MIN_RATINGS_SHOWN } from './ratings'

export type RatingSummary = { count: number; average: number }

const URL_ = (process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '').replace(/\/$/, '')
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ''

async function redis(commands: (string | number)[][]): Promise<unknown[]> {
  const response = await fetch(`${URL_}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  })
  if (!response.ok) throw new Error(`ratings snapshot: redis ${response.status}`)
  return ((await response.json()) as { result: unknown }[]).map((entry) => entry.result)
}

function summarize(fields: unknown): RatingSummary {
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

async function loadSnapshot(): Promise<Map<string, RatingSummary>> {
  const snapshot = new Map<string, RatingSummary>()
  if (!import.meta.env.SSR || !URL_ || !TOKEN) return snapshot
  try {
    const keys: string[] = []
    let cursor = '0'
    do {
      const [result] = await redis([['SCAN', cursor, 'MATCH', 'rating:*', 'COUNT', 1000]])
      const [next, batch] = result as [string, string[]]
      keys.push(...batch)
      cursor = next
    } while (cursor !== '0')
    if (keys.length) {
      const results = await redis(keys.map((key) => ['HGETALL', key]))
      keys.forEach((key, index) => snapshot.set(key.slice('rating:'.length), summarize(results[index])))
    }
    console.log(`[ratings] snapshot: ${keys.length} rated pages`)
  } catch (error) {
    // A database hiccup must never fail the build; pages are then built without ratings.
    console.warn(`[ratings] snapshot skipped: ${(error as Error).message}`)
  }
  return snapshot
}

const snapshot = await loadSnapshot()

/** Rating for an English page path (e.g. "/dead-pixel-test", "/" for home), only once enough people rated. */
export function ratingFor(path: string): RatingSummary | undefined {
  const key = path.replace(/\/+$/, '') || '/'
  const rating = snapshot.get(key)
  return rating && rating.count >= MIN_RATINGS_SHOWN ? rating : undefined
}

/** schema.org AggregateRating for a page's WebApplication / SoftwareApplication, or nothing below the threshold. */
export function aggregateRating(path: string) {
  const rating = ratingFor(path)
  return rating
    ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: rating.average, ratingCount: rating.count, bestRating: 5, worstRating: 1 } }
    : {}
}
