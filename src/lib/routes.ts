import { getColorBySlug } from './screen-colors'
import { TOOLS } from './tools'
import { getHub } from './hubs'

/** Which page a locale-free path renders. Detail pages get their slug and show "not found" themselves. */
export type PageRoute =
  | { kind: 'home' | 'tools' | 'about' | 'author' | 'contact' | 'feedback' | 'privacy' | 'terms' | 'disclaimer' }
  | { kind: 'guides' | 'backgrounds' | 'problems' | 'glossary' | 'notFound' }
  | { kind: 'guide' | 'background' | 'problem' | 'term' | 'tool'; slug: string }
  | { kind: 'color'; colorId: string }
  | { kind: 'hub'; path: string }

const STATIC_PAGES: Record<string, PageRoute['kind']> = {
  '/': 'home',
  '/tools': 'tools',
  '/about': 'about',
  '/author-whitson-rao': 'author',
  '/contact': 'contact',
  '/feedback': 'feedback',
  '/privacy-policy': 'privacy',
  '/terms': 'terms',
  '/disclaimer': 'disclaimer',
  '/guides': 'guides',
  '/backgrounds': 'backgrounds',
  '/screen-problems': 'problems',
  '/glossary': 'glossary',
}

const DETAIL_SECTIONS: [prefix: string, kind: 'guide' | 'background' | 'problem' | 'term'][] = [
  ['/guides/', 'guide'],
  ['/backgrounds/', 'background'],
  ['/screen-problems/', 'problem'],
  ['/glossary/', 'term'],
]

export function resolvePage(cleanPath: string): PageRoute {
  const known = STATIC_PAGES[cleanPath]
  if (known) return { kind: known } as PageRoute
  if (getHub(cleanPath)) return { kind: 'hub', path: cleanPath }
  for (const [prefix, kind] of DETAIL_SECTIONS) {
    if (cleanPath.startsWith(prefix)) return { kind, slug: cleanPath.slice(prefix.length).replace(/\/+$/, '') }
  }
  const slug = cleanPath.slice(1)
  const color = getColorBySlug(slug)
  if (color) return { kind: 'color', colorId: color.id }
  if (TOOLS.some((tool) => tool.slug === slug)) return { kind: 'tool', slug }
  return { kind: 'notFound' }
}
