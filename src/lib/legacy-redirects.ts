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
const LOCALE_PREFIXES = ['', '/es', '/pt-br', '/de', '/fr', '/it', '/nl', '/id', '/tr']
for (const [from, to] of Object.entries(REMOVED_PAGES)) {
  for (const prefix of LOCALE_PREFIXES) LEGACY_REDIRECTS[`${prefix}${from}`] = `${prefix}${to}`
}
