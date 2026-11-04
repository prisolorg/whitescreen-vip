import Link from 'next/link'
import { Logo } from './logo'
import { useTranslation } from '@/lib/i18n'
import { COLOR_HUB_NAMES, HUBS } from '@/lib/hubs'
import { getCategory } from '@/lib/tool-categories'
import { getLocalizedCategory } from '@/lib/localized-tools'
import { getMessages } from '@/lib/messages'

export function SiteFooter() {
  const { t, language } = useTranslation()

  // Topic hubs, linked from every page.
  const hubLinks = HUBS.map((hub) => ({
    name:
      language === 'en'
        ? hub.name
        : hub.group === 'colors'
          ? COLOR_HUB_NAMES[language][0]
          : getLocalizedCategory(getCategory(hub.group), language).name,
    href: hub.path,
  }))

  const screenTestLinks = [
    { name: t('homeTitle', 'White Screen'), href: '/' },
    { name: 'Dead Pixel Test', href: '/dead-pixel-test' },
    { name: 'Screen Uniformity Test', href: '/screen-uniformity-test' },
    { name: 'Screen Color Test', href: '/screen-color-test' },
    { name: 'Monitor Test', href: '/monitor-test' },
    { name: 'OLED Gray Test', href: '/oled-gray-test' },
    { name: 'OLED Burn-In Test', href: '/oled-burn-in-test' },
  ]

  // "Backgrounds Library" removed per instructions; individual background collections preserved
  const backgroundLinks = [
    { name: 'Solid Color Backgrounds', href: '/backgrounds?category=solid' },
    { name: 'Gradient Backgrounds', href: '/backgrounds?category=gradient' },
    { name: 'Video Call Backgrounds', href: '/backgrounds?category=video-call' },
    { name: 'Dark & OLED Backgrounds', href: '/backgrounds?category=dark-oled' },
    { name: 'Neon & Glow Backgrounds', href: '/backgrounds?category=neon' },
  ]

  const messages = getMessages(language)

  // "All Screen Problems" removed per instructions; individual problem guides preserved
  const screenProblemLinks = [
    { name: messages.problemLabels['stuck-pixel'] ?? 'Stuck Pixel Guide', href: '/screen-problems/stuck-pixel' },
    { name: messages.problemLabels['backlight-bleed'] ?? 'Backlight Bleed Guide', href: '/screen-problems/backlight-bleed' },
    { name: messages.problemLabels['screen-burn-in'] ?? 'Screen Burn-In Guide', href: '/screen-problems/screen-burn-in' },
    { name: messages.problemLabels['screen-flickering'] ?? 'Screen Flickering', href: '/screen-problems/screen-flickering' },
    { name: messages.problemLabels['screen-tearing'] ?? 'Screen Tearing Guide', href: '/screen-problems/screen-tearing' },
  ]

  // Moved from Header into Footer per instructions
  const glossaryLinks = [
    { name: messages.termLabels['refresh-rate'] ?? 'Refresh Rate', href: '/glossary/refresh-rate' },
    { name: messages.termLabels['oled-vs-lcd'] ?? 'OLED vs LCD', href: '/glossary/oled-vs-lcd' },
    { name: messages.termLabels['hdr'] ?? 'HDR', href: '/glossary/hdr' },
    { name: messages.termLabels['resolution'] ?? 'Resolution', href: '/glossary/resolution' },
    { name: messages.termLabels['chroma-key'] ?? 'Chroma Key (Green Screen)', href: '/glossary/chroma-key' },
  ]

  const aboutUsLinks = [
    ...hubLinks,
    { name: t('about', 'About Us'), href: '/about' },
    { name: t('contact', 'Contact'), href: '/contact' },
    { name: t('feedback', 'Feedback'), href: '/feedback' },
  ]

  const legalLinks = [
    { name: t('privacyPolicy', 'Privacy Policy'), href: '/privacy-policy' },
    { name: t('terms', 'Terms of Use'), href: '/terms' },
    { name: t('disclaimer', 'Disclaimer'), href: '/disclaimer' },
  ]

  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Brand header / summary */}
        <div className="mb-10 max-w-2xl">
          <div className="inline-block mb-3">
            <Logo />
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {t('footerAbout', 'WhiteScreen.vip is an independent online screen utility.')}
          </p>
          <Link href="/" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
            <span aria-hidden="true" className="size-4 rounded bg-white ring-1 ring-black/15" />
            {t('ctaOpenWhiteScreen', 'Open the free White Screen')} →
          </Link>
        </div>

        {/* 6 Clean Columns: Screen Tests, Backgrounds, Screen Problems, Glossary, About Us, Legal */}
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {/* Group 1: Screen Tests */}
          <div>
            <h2 className="mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-foreground">
              {t('screenTests', 'Screen Tests')}
            </h2>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              {screenTestLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2: Backgrounds */}
          <div>
            <h2 className="mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-foreground">
              {t('backgrounds', 'Backgrounds')}
            </h2>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              {backgroundLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 3: Screen Problems */}
          <div>
            <h2 className="mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-foreground">
              {t('screenProblems', 'Screen Problems')}
            </h2>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              {screenProblemLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 4: Glossary */}
          <div>
            <h2 className="mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-foreground">
              {t('glossary', 'Glossary')}
            </h2>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              {glossaryLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 5: About Us */}
          <div>
            <h2 className="mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-foreground">
              {t('footerExplore', 'Explore')}
            </h2>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              {aboutUsLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 6: Legal */}
          <div>
            <h2 className="mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-foreground">
              {t('legal', 'Legal')}
            </h2>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Single Disclaimer (No duplicate links or repeated disclaimers) */}
      <div className="border-t border-border/70 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 text-xs text-muted-foreground leading-relaxed">
          <p className="font-semibold text-foreground/90 mb-1.5">
            © {new Date().getFullYear()} WhiteScreen.vip. {t('allRightsReserved', 'All rights reserved.')}
          </p>
          <p>
            {t('footerDisclaimer', 'WhiteScreen.vip is an independent online utility.')}
          </p>
        </div>
      </div>
    </footer>
  )
}
