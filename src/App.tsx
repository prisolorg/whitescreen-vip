import { useEffect, lazy, Suspense } from 'react'
import { RouterProvider, useRouter } from '@/lib/next-shim'
import { I18nProvider, useTranslation } from '@/lib/i18n'
import { SUPPORTED_LOCALES, getLocalizedPath } from '@/lib/locale-routing'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HomePage } from '@/pages/HomePage'
import { ColorPage } from '@/pages/ColorPage'
import { getColorBySlug } from '@/lib/screen-colors'
import { getColorPageContent } from '@/lib/color-pages'
import { TOOLS } from '@/lib/tools'
import { getLocalizedTool, TOOL_TRANSLATIONS } from '@/lib/tool-translations'
import { siteConfig } from '@/lib/site'
import {
  ABOUT_TRANSLATIONS,
  CONTACT_TRANSLATIONS,
  FEEDBACK_TRANSLATIONS,
  DISCLAIMER_TRANSLATIONS,
  PRIVACY_TRANSLATIONS,
  TERMS_TRANSLATIONS,
  NOT_FOUND_TRANSLATIONS,
} from '@/lib/content-pages-translations'

// Code-split secondary pages for optimal mobile performance
const ToolsPage = lazy(() => import('@/pages/ToolsPage').then(m => ({ default: m.ToolsPage })))
const ToolDetailPage = lazy(() => import('@/pages/ToolDetailPage').then(m => ({ default: m.ToolDetailPage })))
const AboutPage = lazy(() => import('@/pages/AboutPage').then(m => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then(m => ({ default: m.ContactPage })))
const FeedbackPage = lazy(() => import('@/pages/FeedbackPage').then(m => ({ default: m.FeedbackPage })))
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })))
const TermsPage = lazy(() => import('@/pages/TermsPage').then(m => ({ default: m.TermsPage })))
const DisclaimerPage = lazy(() => import('@/pages/DisclaimerPage').then(m => ({ default: m.DisclaimerPage })))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })))
const GuidesIndexPage = lazy(() => import('@/pages/GuidesIndexPage').then(m => ({ default: m.GuidesIndexPage })))
const GuideDetailPage = lazy(() => import('@/pages/GuideDetailPage').then(m => ({ default: m.GuideDetailPage })))
const BackgroundsIndexPage = lazy(() => import('@/pages/BackgroundsIndexPage').then(m => ({ default: m.BackgroundsIndexPage })))
const BackgroundDetailPage = lazy(() => import('@/pages/BackgroundDetailPage').then(m => ({ default: m.BackgroundDetailPage })))
const ScreenProblemsIndexPage = lazy(() => import('@/pages/ScreenProblemsIndexPage').then(m => ({ default: m.ScreenProblemsIndexPage })))
const ScreenProblemDetailPage = lazy(() => import('@/pages/ScreenProblemDetailPage').then(m => ({ default: m.ScreenProblemDetailPage })))
const GlossaryIndexPage = lazy(() => import('@/pages/GlossaryIndexPage').then(m => ({ default: m.GlossaryIndexPage })))
const GlossaryDetailPage = lazy(() => import('@/pages/GlossaryDetailPage').then(m => ({ default: m.GlossaryDetailPage })))
import { getGuideBySlug } from '@/lib/guides-content'
import { getBackgroundBySlug } from '@/lib/backgrounds-data'
import { getScreenProblemBySlug } from '@/lib/screen-problems-data'
import { getGlossaryBySlug } from '@/lib/glossary-data'

function PageLoading() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="mx-auto flex max-w-4xl min-h-[50vh] items-center justify-center py-16 text-xs text-muted-foreground font-mono animate-pulse"
    >
      Loading content...
    </div>
  )
}

function AppContent() {
  const { cleanPath, search } = useRouter()
  const { language, t } = useTranslation()

  // Dynamic SEO, title, and hreflang metadata
  useEffect(() => {
    let pageTitle = ''
    let pageDescription = ''

    if (cleanPath === '/') {
      pageTitle = t('homeMetaTitle', 'White Screen Online – Free Fullscreen White Screen Tool')
      pageDescription = t(
        'homeMetaDesc',
        'Open a free fullscreen white screen online. Switch colors, test your display, adjust brightness, and download white screen PNG images.',
      )
    } else if (cleanPath === '/tools') {
      pageTitle = `${t('allTools', 'All Tools')} | WhiteScreen.vip`
      pageDescription = t(
        'allToolsDesc',
        'Browse all free screen tools, monitor diagnostic checkups, solid color screens, and visual effects.'
      )
    } else if (cleanPath === '/about') {
      const c = ABOUT_TRANSLATIONS[language] || ABOUT_TRANSLATIONS.en
      pageTitle = `${c.title} | WhiteScreen.vip`
      pageDescription = c.description
    } else if (cleanPath === '/contact') {
      const c = CONTACT_TRANSLATIONS[language] || CONTACT_TRANSLATIONS.en
      pageTitle = `${c.title} | WhiteScreen.vip`
      pageDescription = c.description
    } else if (cleanPath === '/feedback') {
      const c = FEEDBACK_TRANSLATIONS[language] || FEEDBACK_TRANSLATIONS.en
      pageTitle = `${c.title} | WhiteScreen.vip`
      pageDescription = c.description
    } else if (cleanPath === '/privacy-policy') {
      const c = PRIVACY_TRANSLATIONS[language] || PRIVACY_TRANSLATIONS.en
      pageTitle = `${c.title} | WhiteScreen.vip`
      pageDescription = c.description
    } else if (cleanPath === '/terms') {
      const c = TERMS_TRANSLATIONS[language] || TERMS_TRANSLATIONS.en
      pageTitle = `${c.title} | WhiteScreen.vip`
      pageDescription = c.description
    } else if (cleanPath === '/disclaimer') {
      const c = DISCLAIMER_TRANSLATIONS[language] || DISCLAIMER_TRANSLATIONS.en
      pageTitle = `${c.title} | WhiteScreen.vip`
      pageDescription = c.description
    } else if (cleanPath === '/guides') {
      pageTitle = 'Screen Testing & Monitor Guides | WhiteScreen.vip'
      pageDescription = 'Comprehensive guides on monitor cleaning, dead pixel testing, screen uniformity calibration, and fullscreen lighting setups.'
    } else if (cleanPath.startsWith('/guides/')) {
      const guideSlug = cleanPath.slice('/guides/'.length).replace(/\/+$/, '')
      const guide = getGuideBySlug(guideSlug)
      if (guide) {
        pageTitle = `${guide.title} | WhiteScreen.vip`
        pageDescription = guide.metaDescription
      } else {
        const c = NOT_FOUND_TRANSLATIONS[language] || NOT_FOUND_TRANSLATIONS.en
        pageTitle = `${c.title} | WhiteScreen.vip`
        pageDescription = c.description
      }
    } else if (cleanPath === '/backgrounds') {
      const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
      const cat = searchParams.get('category')
      if (cat === 'solid') {
        pageTitle = 'Solid Color Backgrounds – Free 1080p, 2K & 4K Solid Screens | WhiteScreen.vip'
        pageDescription =
          'Browse and download pure solid color screen backgrounds: pure white, true black, royal blue, vibrant orange, red, and deep navy in lossless 4K PNG.'
      } else if (cat === 'gradient') {
        pageTitle = 'Gradient Backgrounds – Aesthetic 4K Desktop & Mobile Gradients | WhiteScreen.vip'
        pageDescription =
          'High-resolution multi-stop linear and radial gradient backgrounds. Free 1080p and 4K lossless PNG downloads for aesthetic wallpapers and banding tests.'
      } else if (cat === 'video-call') {
        pageTitle = 'Video Call Backgrounds – Virtual Backdrops for Zoom & Teams | WhiteScreen.vip'
        pageDescription =
          'Professional virtual office, soft studio lighting, and green screen backdrops for Zoom, Google Meet, and Microsoft Teams meetings.'
      } else if (cat === 'dark-oled') {
        pageTitle = 'Dark & OLED Backgrounds – True 0% Black & Dark Wallpapers | WhiteScreen.vip'
        pageDescription =
          'True 0% black and near-black dark backgrounds. Save battery on OLED screens, test backlight bleed, and download in 4K resolution.'
      } else if (cat === 'neon') {
        pageTitle = 'Neon & Glow Backgrounds – Vibrant Cyberpunk 4K Wallpapers | WhiteScreen.vip'
        pageDescription =
          'Electric cyan and hot magenta neon glow screen backgrounds for gaming battlestations, motion ghosting tests, and HDR pop.'
      } else if (cat === 'minimal') {
        pageTitle = 'Aesthetic & Minimal Backgrounds – Soothing Screen Wallpapers | WhiteScreen.vip'
        pageDescription =
          'Earthy, pastel, and low-contrast minimalist screen backgrounds designed to reduce eye strain and promote calm workspaces.'
      } else {
        pageTitle = 'Backgrounds Library – Free HD, 2K & 4K Solid & Gradient Screens | WhiteScreen.vip'
        pageDescription =
          'Browse and download free high-resolution screen backgrounds: solid colors, gradients, video call backdrops, OLED black, and neon wallpapers in 1080p and 4K.'
      }
    } else if (cleanPath.startsWith('/backgrounds/')) {
      const bgSlug = cleanPath.slice('/backgrounds/'.length).replace(/\/+$/, '')
      const bg = getBackgroundBySlug(bgSlug)
      if (bg) {
        pageTitle = bg.metaTitle
        pageDescription = bg.metaDescription
      } else {
        const c = NOT_FOUND_TRANSLATIONS[language] || NOT_FOUND_TRANSLATIONS.en
        pageTitle = `${c.title} | WhiteScreen.vip`
        pageDescription = c.description
      }
    } else if (cleanPath === '/screen-problems') {
      pageTitle = 'Screen Problems & Diagnostic Troubleshooting Guide | WhiteScreen.vip'
      pageDescription =
        'Diagnose and troubleshoot monitor display problems: stuck pixels, backlight bleed, screen flickering, tearing, burn-in, ghosting, and color banding.'
    } else if (cleanPath.startsWith('/screen-problems/')) {
      const problemSlug = cleanPath.slice('/screen-problems/'.length).replace(/\/+$/, '')
      const prob = getScreenProblemBySlug(problemSlug)
      if (prob) {
        pageTitle = prob.metaTitle
        pageDescription = prob.metaDescription
      } else {
        const c = NOT_FOUND_TRANSLATIONS[language] || NOT_FOUND_TRANSLATIONS.en
        pageTitle = `${c.title} | WhiteScreen.vip`
        pageDescription = c.description
      }
    } else if (cleanPath === '/glossary') {
      pageTitle = 'Display & Monitor Technology Glossary | WhiteScreen.vip'
      pageDescription =
        'Simple, practical explanations of display specs and monitor terms: Refresh Rate (Hz), OLED vs LCD, HDR, 1080p vs 4K Resolution, and Chroma Key.'
    } else if (cleanPath.startsWith('/glossary/')) {
      const termSlug = cleanPath.slice('/glossary/'.length).replace(/\/+$/, '')
      const term = getGlossaryBySlug(termSlug)
      if (term) {
        pageTitle = term.metaTitle
        pageDescription = term.metaDescription
      } else {
        const c = NOT_FOUND_TRANSLATIONS[language] || NOT_FOUND_TRANSLATIONS.en
        pageTitle = `${c.title} | WhiteScreen.vip`
        pageDescription = c.description
      }
    } else {
      const slug = cleanPath.slice(1)
      const color = getColorBySlug(slug)
      if (color) {
        const cContent = getColorPageContent(color.id, language)
        const colorName =
          TOOL_TRANSLATIONS[language]?.[`${color.id}-screen`]?.name ??
          `${t(color.id, color.name)} ${t('colorScreenSuffix', 'Screen')}`
        pageTitle = `${t('colorMetaTitle', '{name} – Free Fullscreen {name} Tool').replaceAll('{name}', colorName)} | WhiteScreen.vip`
        pageDescription = cContent.description
      } else {
        const rawTool = TOOLS.find((item) => item.slug === slug)
        if (rawTool) {
          const locTool = getLocalizedTool(rawTool, language)
          pageTitle = `${t('toolMetaTitle', '{name} – Free Online Screen Tool').replace('{name}', locTool.name)} | WhiteScreen.vip`
          pageDescription = locTool.description
        } else {
          const c = NOT_FOUND_TRANSLATIONS[language] || NOT_FOUND_TRANSLATIONS.en
          pageTitle = `${c.title} | WhiteScreen.vip`
          pageDescription = c.description
        }
      }
    }

    document.title = pageTitle

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', pageDescription)

    // Update OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', pageTitle)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', pageDescription)

    // Update Canonical
    const baseUrl = 'https://whitescreen.vip'
    const currentCanonicalUrl = `${baseUrl}${getLocalizedPath(cleanPath, language)}`

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = currentCanonicalUrl

    // Update hreflang alternate links
    SUPPORTED_LOCALES.forEach((locale) => {
      let hreflangLink = document.querySelector(`link[rel="alternate"][hreflang="${locale}"]`) as HTMLLinkElement | null
      if (!hreflangLink) {
        hreflangLink = document.createElement('link')
        hreflangLink.rel = 'alternate'
        hreflangLink.setAttribute('hreflang', locale)
        document.head.appendChild(hreflangLink)
      }
      hreflangLink.href = `${baseUrl}${getLocalizedPath(cleanPath, locale)}`
    })

    let xDefaultLink = document.querySelector('link[rel="alternate"][hreflang="x-default"]') as HTMLLinkElement | null
    if (!xDefaultLink) {
      xDefaultLink = document.createElement('link')
      xDefaultLink.rel = 'alternate'
      xDefaultLink.setAttribute('hreflang', 'x-default')
      document.head.appendChild(xDefaultLink)
    }
    xDefaultLink.href = `${baseUrl}${getLocalizedPath(cleanPath, 'en')}`
  }, [cleanPath, search, language, t])

  let pageContent: React.ReactNode

  if (cleanPath === '/') {
    pageContent = <HomePage />
  } else if (cleanPath === '/tools') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <ToolsPage />
      </Suspense>
    )
  } else if (cleanPath === '/about') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <AboutPage />
      </Suspense>
    )
  } else if (cleanPath === '/contact') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <ContactPage />
      </Suspense>
    )
  } else if (cleanPath === '/feedback') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <FeedbackPage />
      </Suspense>
    )
  } else if (cleanPath === '/privacy-policy') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <PrivacyPolicyPage />
      </Suspense>
    )
  } else if (cleanPath === '/terms') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <TermsPage />
      </Suspense>
    )
  } else if (cleanPath === '/disclaimer') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <DisclaimerPage />
      </Suspense>
    )
  } else if (cleanPath === '/guides') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <GuidesIndexPage />
      </Suspense>
    )
  } else if (cleanPath.startsWith('/guides/')) {
    const guideSlug = cleanPath.slice('/guides/'.length).replace(/\/+$/, '')
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <GuideDetailPage slug={guideSlug} />
      </Suspense>
    )
  } else if (cleanPath === '/backgrounds') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <BackgroundsIndexPage />
      </Suspense>
    )
  } else if (cleanPath.startsWith('/backgrounds/')) {
    const bgSlug = cleanPath.slice('/backgrounds/'.length).replace(/\/+$/, '')
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <BackgroundDetailPage slug={bgSlug} />
      </Suspense>
    )
  } else if (cleanPath === '/screen-problems') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <ScreenProblemsIndexPage />
      </Suspense>
    )
  } else if (cleanPath.startsWith('/screen-problems/')) {
    const problemSlug = cleanPath.slice('/screen-problems/'.length).replace(/\/+$/, '')
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <ScreenProblemDetailPage slug={problemSlug} />
      </Suspense>
    )
  } else if (cleanPath === '/glossary') {
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <GlossaryIndexPage />
      </Suspense>
    )
  } else if (cleanPath.startsWith('/glossary/')) {
    const termSlug = cleanPath.slice('/glossary/'.length).replace(/\/+$/, '')
    pageContent = (
      <Suspense fallback={<PageLoading />}>
        <GlossaryDetailPage slug={termSlug} />
      </Suspense>
    )
  } else {
    const slug = cleanPath.slice(1)
    const color = getColorBySlug(slug)

    if (color) {
      pageContent = <ColorPage color={color} />
    } else {
      const tool = TOOLS.find((t) => t.slug === slug)
      if (tool) {
        pageContent = (
          <Suspense fallback={<PageLoading />}>
            <ToolDetailPage slug={slug} />
          </Suspense>
        )
      } else {
        pageContent = (
          <Suspense fallback={<PageLoading />}>
            <NotFoundPage />
          </Suspense>
        )
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {pageContent}
      </main>
      <SiteFooter />
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </I18nProvider>
  )
}
