export const siteConfig = {
  name: 'WhiteScreen.vip',
  url: (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://whitescreen.vip',
  title: 'WhiteScreen.vip – Free Screen Tests, Effects & Screensavers',
  description:
    'Free browser-based screen tools: fullscreen color screens, dead pixel and monitor tests, screensavers, timers, visual effects and harmless fake update screens. No install or sign-up.',
  contactEmail: 'hello@whitescreen.vip',
} as const

export const footerNav = [
  { label: 'Guides', href: '/guides' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Feedback', href: '/feedback' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
] as const

/** Absolute URL for an internal path, with the trailing slash every page URL uses. */
export function absoluteUrl(path = '/') {
  const url = new URL(path, siteConfig.url)
  if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += '/'
  return url.toString()
}
