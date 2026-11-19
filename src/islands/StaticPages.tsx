import { Providers } from './Providers'
import { SiteFooter } from '@/components/site-footer'
import { AuthorPage } from '@/views/AuthorPage'
import { HubPage } from '@/views/HubPage'
import { ToolsGuides } from '@/components/tools-guides'
import { AboutPage } from '@/views/AboutPage'
import { PrivacyPolicyPage } from '@/views/PrivacyPolicyPage'
import { TermsPage } from '@/views/TermsPage'
import { DisclaimerPage } from '@/views/DisclaimerPage'
import { GlossaryDetailPage } from '@/views/GlossaryDetailPage'
import { ScreenProblemDetailPage } from '@/views/ScreenProblemDetailPage'
import { NotFoundPage } from '@/views/NotFoundPage'
import { GuideDetailPage } from '@/views/GuideDetailPage'
import { GuidesIndexPage } from '@/views/GuidesIndexPage'
import { ToolPageBody } from '@/components/tool-page-body'
import { WhiteScreenCta } from '@/components/white-screen-cta'
import { BackgroundBody } from '@/views/BackgroundBody'
import { ColorPageBody } from '@/views/ColorPageBody'
import { HomePageBody } from '@/views/HomePageBody'
import { SCREEN_COLORS } from '@/lib/screen-colors'

/** Pages and parts with no interactivity. Astro renders these to HTML and ships no JavaScript for them. */
export function StaticPage({ url, kind, slug }: { url: string; kind: 'problem' | 'about' | 'author' | 'hub' | 'privacy' | 'terms' | 'disclaimer' | 'term' | 'notFound' | 'guides' | 'guide'; slug?: string }) {
  return (
    <Providers url={url}>
      {kind === 'about' && <AboutPage />}
      {kind === 'author' && <AuthorPage />}
      {kind === 'hub' && <HubPage path={slug ?? ''} />}
      {kind === 'privacy' && <PrivacyPolicyPage />}
      {kind === 'terms' && <TermsPage />}
      {kind === 'disclaimer' && <DisclaimerPage />}
      {kind === 'term' && <GlossaryDetailPage slug={slug ?? ''} />}
      {kind === 'problem' && <ScreenProblemDetailPage slug={slug ?? ''} />}
      {kind === 'notFound' && <NotFoundPage />}
      {kind === 'guides' && <GuidesIndexPage />}
      {kind === 'guide' && <GuideDetailPage slug={slug ?? ''} />}
    </Providers>
  )
}

export function StaticFooter({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <SiteFooter />
    </Providers>
  )
}

/** Static (no-JS) content under a tool's interactive island. */
export function StaticToolBody({ url, slug }: { url: string; slug: string }) {
  return (
    <Providers url={url}>
      <ToolPageBody slug={slug} />
      {slug !== 'white-screen' && <WhiteScreenCta className="my-10" />}
    </Providers>
  )
}

/** Static (no-JS) article under a background's preview and download controls. */
export function StaticBackgroundBody({ url, slug }: { url: string; slug: string }) {
  return (
    <Providers url={url}>
      <BackgroundBody slug={slug} />
    </Providers>
  )
}

/** Static (no-JS) content under a color screen's interactive island. */
export function StaticColorBody({ url, colorId }: { url: string; colorId: string }) {
  return (
    <Providers url={url}>
      <ColorPageBody color={SCREEN_COLORS.find((color) => color.id === colorId)!} />
    </Providers>
  )
}

/** Static (no-JS) content under the homepage's white screen tool. */
export function StaticHomeBody({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <HomePageBody />
    </Providers>
  )
}

/** Static (no-JS) guide cards under the all-tools page. */
export function StaticToolsGuides({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <ToolsGuides />
    </Providers>
  )
}
