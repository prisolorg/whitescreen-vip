import type { APIRoute } from 'astro'
import { getAllRoutes, getPageSeo, ogImageKey } from '@/lib/seo'
import { ogCardPng } from '@/lib/og-image'
import { getColorBySlug } from '@/lib/screen-colors'
import { TOOLS } from '@/lib/tools'
import { getCategory } from '@/lib/tool-categories'

const SECTION_EYEBROWS: [prefix: string, label: string][] = [
  ['/guides/', 'Guide'],
  ['/backgrounds/', 'Free background'],
  ['/screen-problems/', 'Screen problem'],
  ['/glossary/', 'Display glossary'],
]

function eyebrowFor(route: string): string {
  if (route === '/' || getColorBySlug(route.slice(1))) return 'Color screen'
  const tool = TOOLS.find((item) => `/${item.slug}` === route)
  if (tool) return getCategory(tool.category).name
  return SECTION_EYEBROWS.find(([prefix]) => route.startsWith(prefix))?.[1] ?? 'WhiteScreen.vip'
}

export function getStaticPaths() {
  return getAllRoutes().map((route) => ({ params: { key: ogImageKey(route) }, props: { route } }))
}

export const GET: APIRoute = ({ props }) => {
  const route = props.route as string
  const seo = getPageSeo(route, '', 'en')
  // "Keyword – benefit | WhiteScreen.vip" → title "Keyword", subtitle "benefit".
  const [title, ...rest] = seo.title.replace(/\s*\|\s*WhiteScreen\.vip$/, '').split(/\s+[–—]\s+/)
  const color = getColorBySlug(route.slice(1))
  const png = ogCardPng({
    title,
    subtitle: rest.join(' – ') || seo.description,
    eyebrow: eyebrowFor(route),
    swatch: color?.hex,
  })
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } })
}
