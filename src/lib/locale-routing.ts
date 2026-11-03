import { englishSlug, localizeSlug } from './localized-slugs'

export type LanguageCode =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'de'
  | 'fr'
  | 'it'
  | 'nl'
  | 'id'
  | 'tr'

export const SUPPORTED_LOCALES: readonly LanguageCode[] = [
  'en',
  'es',
  'pt-br',
  'de',
  'fr',
  'it',
  'nl',
  'id',
  'tr',
]

/**
 * Extracts the locale and the clean subpath from a given URL pathname.
 * e.g.
 * - "/" -> { lang: "en", cleanPath: "/" }
 * - "/es" or "/es/" -> { lang: "es", cleanPath: "/" }
 * - "/es/dead-pixel-test" -> { lang: "es", cleanPath: "/dead-pixel-test" }
 * - "/pt-br/tools#screen-tests" -> { lang: "pt-br", cleanPath: "/tools" }
 */
export function extractLocaleAndPath(pathname: string): { lang: LanguageCode; cleanPath: string } {
  if (!pathname) return { lang: 'en', cleanPath: '/' }
  const rawPath = pathname.split('?')[0].split('#')[0].trim() || '/'
  const match = rawPath.match(/^\/(es|pt-br|de|fr|it|nl|id|tr)(?:\/|$)(.*)/i)
  if (match) {
    const lang = match[1].toLowerCase() as LanguageCode
    const rest = match[2] ? `/${match[2]}`.replace(/\/+$/, '') : '/'
    return {
      lang,
      // cleanPath is always the English path, whatever language the URL's slug is in.
      cleanPath: rest === '' ? '/' : translateFirstSegment(rest, (slug) => englishSlug(slug, lang)),
    }
  }
  const clean = rawPath.replace(/\/+$/, '') || '/'
  return {
    lang: 'en',
    cleanPath: clean,
  }
}

/** Applies `map` to the first path segment, e.g. "/white-noise-generator" or "/tools". */
function translateFirstSegment(path: string, map: (slug: string) => string) {
  const [, first, ...rest] = path.split('/')
  return ['', map(first), ...rest].join('/')
}

/**
 * Generates a localized pathname preserving anchors/hashes and query strings.
 * English ('en') uses the standard root route e.g. "/" or "/dead-pixel-test/".
 * Other locales use prefixed routes e.g. "/es/", "/es/dead-pixel-test/".
 */
export function getLocalizedPath(path: string, targetLang: LanguageCode): string {
  if (!path) return targetLang === 'en' ? '/' : `/${targetLang}/`
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path
  }

  // Preserve query and hash
  const [withoutHash, hash] = path.split('#')
  const [rawPathname, query] = withoutHash.split('?')
  const { cleanPath } = extractLocaleAndPath(rawPathname)

  // Every page URL ends with a slash, matching the URLs already indexed for whitescreen.vip.
  const localPath = cleanPath === '/' ? '/' : translateFirstSegment(cleanPath, (slug) => localizeSlug(slug, targetLang))
  const withSlash = localPath === '/' ? '/' : `${localPath}/`
  const localizedBase = targetLang === 'en' ? withSlash : `/${targetLang}${withSlash}`

  const queryPart = query ? `?${query}` : ''
  const hashPart = hash ? `#${hash}` : ''
  return `${localizedBase}${queryPart}${hashPart}`
}

export const PILLAR_ROUTES = new Set<string>([
  '/tools',
  '/guides',
  '/backgrounds',
  '/screen-problems',
  '/glossary',
  '/about',
  '/contact',
  '/feedback',
  '/privacy-policy',
  '/terms',
  '/disclaimer',
])

/**
 * Checks whether a pathname corresponds to a pillar page.
 * Regular tool pages (e.g. /black-screen, /dead-pixel-test) and the homepage (/)
 * are NOT classified as pillar pages.
 */
export function isPillarPage(pathname: string): boolean {
  if (!pathname) return false
  const { cleanPath } = extractLocaleAndPath(pathname)
  return PILLAR_ROUTES.has(cleanPath)
}

