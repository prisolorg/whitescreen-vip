import Link from 'next/link'
import { ArrowRight, BookOpen, ChevronRight, Clock } from 'lucide-react'
import { getGuides } from '@/lib/guides-content'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { WhiteScreenCta } from '@/components/white-screen-cta'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedPath } from '@/lib/locale-routing'

/** The list of guides. Rendered to static HTML: ten guides need no filter or search. */
export function GuidesIndexPage() {
  const { t, language } = useTranslation()
  const guides = getGuides(language)

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t('guidesHeading', 'Display guides & tutorials'),
    description: t('guidesIntro', 'Practical, step-by-step guides to monitor cleaning, dead pixel checks, display calibration and using your screen as a light.'),
    inLanguage: language === 'pt-br' ? 'pt-BR' : language,
    url: absoluteUrl(getLocalizedPath('/guides', language)),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: guides.map((guide, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: absoluteUrl(getLocalizedPath(guide.path, language)),
        name: guide.title,
      })),
    },
  }

  return (
    <div className="bg-background pb-12 pt-4 sm:pt-6">
      <JsonLd data={collectionSchema} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
          <Link href="/" className="transition-colors hover:text-foreground">
            {t('homeTitle', 'White Screen')}
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <span className="font-medium text-foreground">{t('guides', 'Guides')}</span>
        </nav>

        <header className="mb-8 max-w-3xl">
          <p className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <BookOpen className="size-3.5" aria-hidden="true" />
            {t('guidesBadge', 'Learning center')}
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{t('guidesHeading', 'Display guides & tutorials')}</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t('guidesIntro', 'Practical, step-by-step guides to monitor cleaning, dead pixel checks, display calibration and using your screen as a light.')}
          </p>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <article className="flex h-full flex-col justify-between rounded-2xl border bg-card p-5 shadow-xs transition-all hover:border-primary/40 hover:shadow-md">
                <div>
                  <div className="mb-2 flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-md bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">{guide.category}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Clock className="size-3.5" aria-hidden="true" />
                      {guide.readingTime}
                    </span>
                  </div>
                  <h2 className="text-base font-bold leading-snug text-foreground sm:text-lg">
                    <Link href={guide.path} className="transition-colors hover:text-primary">
                      {guide.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">{guide.metaDescription}</p>
                </div>
                <div className="mt-5 border-t pt-3 text-xs">
                  <Link href={guide.path} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                    {t('guideRead', 'Read guide')}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <WhiteScreenCta className="mt-12" />
    </div>
  )
}
