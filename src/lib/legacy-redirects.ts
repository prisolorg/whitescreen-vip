import { SUPPORTED_LOCALES, getLocalizedPath } from './locale-routing'
import { translatedSlugPairs } from './localized-slugs'

/**
 * URLs from the previous WordPress site (whitescreen.vip page, post and category sitemaps) that
 * have no page with the same path here. Each gets a 301 to its closest equivalent.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/contact-us/': '/contact/',
  '/about-us/': '/about/',
  '/author-whitson-rao/': '/about/',
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
    LEGACY_REDIRECTS[`${prefix}${from}`] = getLocalizedPath(to, lang)
  }
}

// Translated URLs: the earlier English-slug address in each language (e.g. /es/red-screen/)
// 301s to the translated one (/es/pantalla-roja/).
for (const lang of SUPPORTED_LOCALES) {
  for (const [english, local] of translatedSlugPairs(lang)) {
    LEGACY_REDIRECTS[`/${lang}/${english}/`] = `/${lang}/${local}/`
  }
}
