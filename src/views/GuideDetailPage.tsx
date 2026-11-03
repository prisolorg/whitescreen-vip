import { AdSlot } from '@/components/ad-slot'
import { AUTHOR } from '@/lib/author'
'use client'

import { WhiteScreenCta } from '@/components/white-screen-cta'
import Link from 'next/link'
import {
  ChevronRight,
  Clock,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { getGuideBySlug, type GuideArticle } from '@/lib/guides-content'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedPath } from '@/lib/locale-routing'

export function GuideDetailPage({ slug }: { slug: string }) {
  const { t, language } = useTranslation()
  const guide = getGuideBySlug(slug, language)

  if (!guide) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Guide Not Found</h1>
        <p className="mt-3 text-muted-foreground">The guide you are looking for does not exist.</p>
        <Link
          href="/guides"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Browse All Guides
        </Link>
      </div>
    )
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    inLanguage: language === 'pt-br' ? 'pt-BR' : language,
    url: absoluteUrl(getLocalizedPath(guide.path, language)),
    datePublished: '2025-01-15T00:00:00+00:00',
    dateModified: `${guide.updatedAt}T00:00:00+00:00`,
    author: {
      '@type': 'Person',
      '@id': `${absoluteUrl(AUTHOR.path)}#person`,
      name: AUTHOR.name,
      url: absoluteUrl(AUTHOR.path),
      jobTitle: AUTHOR.jobTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: 'WhiteScreen.vip',
      url: absoluteUrl('/'),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(getLocalizedPath(guide.path, language)),
    },
  }

  const faqSchema = guide.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  const relatedArticles = guide.relatedSlugs
    .map((s) => getGuideBySlug(s, language))
    .filter((g): g is GuideArticle => g !== undefined)

  return (
    <article className="min-h-screen bg-background pb-16 pt-6">
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t('homeTitle', 'White Screen')}
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <Link href="/guides" className="hover:text-foreground transition-colors">
            {t('guides', 'Guides')}
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <span className="truncate font-medium text-foreground">{guide.title}</span>
        </nav>

        {/* Header Metadata */}
        <header className="mb-8 border-b pb-6">
          <div className="mb-3 flex flex-wrap items-center gap-2.5 text-xs">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
              {guide.category}
            </span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Clock className="size-3.5" aria-hidden="true" />
              <span>{guide.readingTime}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Calendar className="size-3.5" aria-hidden="true" />
              <span>{t('guideUpdated', 'Updated')} <time dateTime={guide.updatedAt}>{guide.updatedAt}</time></span>
            </span>
            <span className="text-muted-foreground">
              {t('byAuthor', 'By')}{' '}
              <Link href={AUTHOR.path} rel="author" className="font-medium text-foreground underline-offset-4 hover:underline">
                {AUTHOR.name}
              </Link>
            </span>
          </div>

          <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            {guide.title}
          </h1>

          <p className="mt-4 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            {guide.intro}
          </p>
        </header>
        <AdSlot placement="top" className="px-0 sm:px-0" />

        {/* Safety Warning Banner (if present) */}
        {guide.warning && (
          <div
            role="alert"
            className="mb-8 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 sm:p-5 text-amber-950 dark:text-amber-200"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="size-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-bold">{t('guideImportant', 'Important:')} </span>
                {guide.warning}
              </div>
            </div>
          </div>
        )}

        {/* Interactive Primary Tool Action Card */}
        <div className="mb-10 rounded-2xl border bg-gradient-to-br from-primary/5 via-card to-background p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles className="size-4" aria-hidden="true" />
                <span>{t('guideFeatured', 'Featured tool')}</span>
              </div>
              <p className="mt-1 text-sm text-foreground font-medium">
                {guide.primaryTool.description}
              </p>
            </div>
            <Link
              href={guide.primaryTool.path}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 shrink-0"
            >
              <span>{guide.primaryTool.label}</span>
              <ExternalLink className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Guide Content Sections */}
        <div className="space-y-10">
          {guide.sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <span className="inline-flex size-7 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground">
                  {idx + 1}
                </span>
                <span>{section.title}</span>
              </h2>

              {section.subtitle && (
                <p className="mt-1 text-sm font-medium text-muted-foreground">{section.subtitle}</p>
              )}

              <div className="mt-4 space-y-3.5 text-sm sm:text-base leading-relaxed text-foreground/90">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Step-by-Step Instructions */}
              {section.steps && section.steps.length > 0 && (
                <div className="mt-5 rounded-xl border bg-muted/20 p-4 sm:p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                    {t('guideSteps', 'Step-by-step checklist')}
                  </h3>
                  <ol className="space-y-3">
                    {/* Native checkboxes: ticking steps works without any JavaScript. */}
                    {section.steps.map((step, sIdx) => (
                      <li key={sIdx}>
                        <label className="group flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-card p-3 text-sm transition-colors hover:bg-accent has-[:checked]:border-emerald-500/40 has-[:checked]:bg-emerald-500/10">
                          <input type="checkbox" className="peer sr-only" />
                          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-bold text-muted-foreground peer-checked:bg-emerald-500 peer-checked:text-white">
                            {sIdx + 1}
                          </span>
                          <span className="leading-relaxed peer-checked:opacity-80 peer-checked:line-through">{step}</span>
                        </label>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {t('guideStepsHint', 'Tick each step as you go.')}
                  </p>
                </div>
              )}

              {/* Checklist / Key takeaways */}
              {section.checklist && section.checklist.length > 0 && (
                <div className="mt-5 rounded-xl border bg-card p-4 sm:p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                    {t('guideGuidelines', 'Key guidelines')}
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    {section.checklist.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pro Tips */}
              {section.tips && section.tips.length > 0 && (
                <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs sm:text-sm">
                  <span className="font-semibold text-primary block mb-1">{t('guideTips', 'Inspection tips')}</span>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    {section.tips.map((tip, tIdx) => (
                      <li key={tIdx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
              {/* The second ad follows the first section, close to the first ad and above the fold on most screens. */}
              {idx === 0 && <AdSlot placement="content" className="mt-4 px-0 sm:px-0" />}
            </section>
          ))}
        </div>

        {/* FAQ Section */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section id="faqs" className="mt-12 border-t pt-8">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="size-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {t('guideFaq', 'Frequently asked questions')}
              </h2>
            </div>
            <div className="space-y-3">
              {guide.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="rounded-xl border bg-card p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1.5">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contextual Call to Action to Tool & Pillar Pages */}
        <section className="mt-12 rounded-2xl border bg-gradient-to-r from-primary/10 via-card to-background p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-foreground">
              {t('guideReady', 'Ready to test your display now?')}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {t('guideReadyText', 'Run free browser tests, check for dead pixels, or open any of the 12 color screens.')}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
              <Link href="/" className="text-primary hover:underline">
                {t('homeTitle', 'White Screen')} →
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/black-screen" className="text-primary hover:underline">
                Black Screen →
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/dead-pixel-test" className="text-primary hover:underline">
                Dead Pixel Test →
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/tools" className="text-primary hover:underline">
                {t('guideAllTools', 'All screen tools')} →
              </Link>
            </div>
          </div>
          <Link
            href={guide.primaryTool.path}
            className="mt-4 sm:mt-0 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 shrink-0"
          >
            <span>{guide.primaryTool.label}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>

        {/* Related Guides Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-12 border-t pt-8">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="size-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {t('guideRelated', 'Related display guides')}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={rel.path}
                  className="group flex flex-col justify-between rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-sm"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h3 className="mt-1.5 text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {rel.metaDescription}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground border-t pt-2.5">
                    <span>{rel.readingTime}</span>
                    <span className="font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                      {t('guideRead', 'Read guide')} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <WhiteScreenCta className="mt-12" />
    </article>
  )
}
