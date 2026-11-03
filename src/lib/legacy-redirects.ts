import { ENGLISH_ONLY_PREFIXES as ENGLISH_ONLY_PREFIX_LIST, SUPPORTED_LOCALES, isEnglishOnlyPath } from './locale-routing'
import { buildSlugMap, translatedSlugPairs } from './localized-slugs'

/** Localized URL for an English path, using the build-time slug maps (this file also loads in astro.config). */
function localized(path: string, lang: (typeof SUPPORTED_LOCALES)[number]) {
  if (lang === 'en' || isEnglishOnlyPath(path.replace(/\/$/, ''))) return path
  const [, first, ...rest] = path.split('/')
  return ['', lang, buildSlugMap(lang).get(first) ?? first, ...rest].join('/').replace(/\/\/$/, '/')
}

/**
 * URLs from the previous WordPress site (whitescreen.vip page, post and category sitemaps) that
 * have no page with the same path here. Each gets a 301 to its closest equivalent.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/contact-us/': '/contact/',
  '/about-us/': '/about/',
  '/windows-10-fake-update-screen/': '/fake-windows-10-update/',
  '/fake-broken-screen/': '/broken-screen/',
  '/how-to-check-dead-pixels-on-any-device/': '/guides/dead-pixel-test/',
  '/category/blog/': '/guides/',
  // Off-white shade pages: the homepage white screen (with its custom color picker) replaces them.
  ...Object.fromEntries(
    ['linen', 'oldlace', 'mint-cream', 'lavender-blush', 'ivory', 'honeydew', 'ghost-white', 'floralwhite', 'beige', 'azure', 'alice-blue', 'seashell', 'snow-white', 'white-smoke', 'white-solid'].map(
      (slug) => [`/${slug}/`, '/'],
    ),
  ),
}

/** Pages removed from this site; each language version 301s to the replacement. */
const REMOVED_PAGES: Record<string, string> = {
  '/white-screen/': '/',
  '/bright-white-screen/': '/',
  '/custom-dvd-screensaver/': '/dvd-screensaver/',
  '/snow-screen/': '/matrix-screensaver/',
  // TV static merged into the white noise generator; noise pages renamed to "generator".
  '/static-screen/': '/white-noise-generator/',
  '/white-noise-screen/': '/white-noise-generator/',
  '/brown-noise-screen/': '/brown-noise-generator/',
  '/pink-noise-screen/': '/pink-noise-generator/',
  // Retired background pages go to the closest page that replaced them.
  '/backgrounds/warm-beige/': '/backgrounds/beige-background/',
  '/backgrounds/soft-lavender/': '/backgrounds/pastel-background/',
  '/backgrounds/purple-dream/': '/backgrounds/purple-background/',
  '/backgrounds/midnight-cosmic-purple/': '/backgrounds/purple-background/',
  '/backgrounds/carbon-dark/': '/backgrounds/dark-background/',
  '/backgrounds/deep-navy/': '/backgrounds/dark-background/',
  '/backgrounds/forest-background/': '/backgrounds/green-background/',
  '/backgrounds/sunset-glow/': '/backgrounds/aesthetic-background/',
  '/backgrounds/ocean-breeze/': '/backgrounds/gradient-background/',
  '/backgrounds/blurred-studio/': '/backgrounds/virtual-office/',
  '/backgrounds/matrix-code/': '/matrix-screensaver/',
}
for (const [from, to] of Object.entries(REMOVED_PAGES)) {
  for (const lang of SUPPORTED_LOCALES) {
    const prefix = lang === 'en' ? '' : `/${lang}`
    LEGACY_REDIRECTS[`${prefix}${from}`] = localized(to, lang)
  }
}

// Translated URLs: the earlier English-slug address in each language (e.g. /es/red-screen/)
// 301s to the translated one (/es/pantalla-roja/).
for (const lang of SUPPORTED_LOCALES) {
  const map = buildSlugMap(lang)
  for (const [english, local] of translatedSlugPairs(lang)) {
    if (english.includes('/')) {
      // A guide: /es/guides/dead-pixel-test/ → /es/guias/prueba-de-pixeles-muertos/
      const [section] = english.split('/')
      LEGACY_REDIRECTS[`/${lang}/${english}/`] = `/${lang}/${map.get(section) ?? section}/${local}/`
    } else if (isEnglishOnlyPath(`/${english}`)) {
      // Legal pages used to have a translated copy; it now 301s to the single English page.
      LEGACY_REDIRECTS[`/${lang}/${local}/`] = `/${english}/`
      LEGACY_REDIRECTS[`/${lang}/${english}/`] = `/${english}/`
    } else {
      LEGACY_REDIRECTS[`/${lang}/${english}/`] = `/${lang}/${local}/`
    }
  }
}

/** /es/backgrounds/* → /backgrounds/* and so on: English-only sections have one URL. Host rules only (no stub pages). */
export const ENGLISH_ONLY_WILDCARDS: [from: string, to: string][] = SUPPORTED_LOCALES.filter((lang) => lang !== 'en').flatMap((lang) =>
  ENGLISH_ONLY_PREFIX_LIST.map((prefix) => [`/${lang}${prefix}/*`, `${prefix}/:splat`] as [string, string]),
)
