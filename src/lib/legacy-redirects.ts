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
