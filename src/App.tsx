import { useEffect, lazy, Suspense } from 'react'
import { RouterProvider, useRouter } from '@/lib/next-shim'
import { I18nProvider, useTranslation } from '@/lib/i18n'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HomePage } from '@/pages/HomePage'
import { ColorPage } from '@/pages/ColorPage'
import { getColorBySlug } from '@/lib/screen-colors'
import { TOOLS } from '@/lib/tools'
import { getPageSeo, jsonLdText, type PageSeo } from '@/lib/seo'

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

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function applySeo(seo: PageSeo) {
  document.title = seo.title
  setMeta('meta[name="description"]', 'name', 'description', seo.description)
  setMeta('meta[name="robots"]', 'name', 'robots', seo.robots)
  setMeta('meta[property="og:type"]', 'property', 'og:type', seo.ogType)
  setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title)
  setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description)
  setMeta('meta[property="og:url"]', 'property', 'og:url', seo.canonical)
  setMeta('meta[property="og:image"]', 'property', 'og:image', seo.ogImage)
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title)
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description)

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = seo.canonical

  document.head.querySelectorAll('link[rel="alternate"][hreflang], script[data-seo]').forEach((el) => el.remove())
  for (const alt of seo.alternates) {
    const link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = alt.hreflang
    link.href = alt.href
    document.head.appendChild(link)
  }
  for (const data of seo.jsonLd) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seo = ''
    script.textContent = jsonLdText(data)
    document.head.appendChild(script)
  }
}

function AppContent() {
  const { cleanPath, search } = useRouter()
  const { language } = useTranslation()

  // Keep <head> in sync on client-side navigation; the prerendered HTML already has it for the first load.
  useEffect(() => {
    applySeo(getPageSeo(cleanPath, search, language))
  }, [cleanPath, search, language])

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

export default function App({ url }: { url?: string }) {
  return (
    <I18nProvider initialUrl={url}>
      <RouterProvider initialUrl={url}>
        <AppContent />
      </RouterProvider>
    </I18nProvider>
  )
}
