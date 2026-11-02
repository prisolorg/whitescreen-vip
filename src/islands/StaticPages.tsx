import { Providers } from './Providers'
import { SiteFooter } from '@/components/site-footer'
import { AboutPage } from '@/views/AboutPage'
import { PrivacyPolicyPage } from '@/views/PrivacyPolicyPage'
import { TermsPage } from '@/views/TermsPage'
import { DisclaimerPage } from '@/views/DisclaimerPage'
import { GlossaryDetailPage } from '@/views/GlossaryDetailPage'
import { NotFoundPage } from '@/views/NotFoundPage'

/** Pages and parts with no interactivity. Astro renders these to HTML and ships no JavaScript for them. */
export function StaticPage({ url, kind, slug }: { url: string; kind: 'about' | 'privacy' | 'terms' | 'disclaimer' | 'term' | 'notFound'; slug?: string }) {
  return (
    <Providers url={url}>
      {kind === 'about' && <AboutPage />}
      {kind === 'privacy' && <PrivacyPolicyPage />}
      {kind === 'terms' && <TermsPage />}
      {kind === 'disclaimer' && <DisclaimerPage />}
      {kind === 'term' && <GlossaryDetailPage slug={slug ?? ''} />}
      {kind === 'notFound' && <NotFoundPage />}
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
