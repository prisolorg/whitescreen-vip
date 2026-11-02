'use client'

import React, { useState } from 'react'
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
import { getGuideBySlug, type GuideArticle, GUIDES } from '@/lib/guides-content'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { useTranslation } from '@/lib/i18n'

export function GuideDetailPage({ slug }: { slug: string }) {
  const { t } = useTranslation()
  const guide = getGuideBySlug(slug)
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({})

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

  const toggleStep = (stepKey: string) => {
    setCompletedSteps((prev) => ({ ...prev, [stepKey]: !prev[stepKey] }))
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    url: absoluteUrl(guide.path),
    datePublished: '2025-01-15T00:00:00+00:00',
    dateModified: `${guide.updatedAt}T00:00:00+00:00`,
    author: {
      '@type': 'Organization',
      name: 'WhiteScreen.vip',
      url: absoluteUrl('/'),
    },
    publisher: {
      '@type': 'Organization',
      name: 'WhiteScreen.vip',
      url: absoluteUrl('/'),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(guide.path),
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
    .map((s) => GUIDES.find((g) => g.slug === s))
    .filter((g): g is GuideArticle => g !== undefined)

  return (
    <article className="min-h-screen bg-background pb-16 pt-6">
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t('home', 'Home')}
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
              <span>Updated {guide.updatedAt}</span>
            </span>
          </div>

          <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            {guide.title}
          </h1>

          <p className="mt-4 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            {guide.intro}
          </p>
        </header>

        {/* Safety Warning Banner (if present) */}
        {guide.warning && (
          <div
            role="alert"
            className="mb-8 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 sm:p-5 text-amber-950 dark:text-amber-200"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="size-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-bold">Important Notice: </span>
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
                <span>Featured WhiteScreen.vip Tool</span>
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
                    Interactive Step-by-Step Checklist
                  </h3>
                  <ol className="space-y-3">
                    {section.steps.map((step, sIdx) => {
                      const stepKey = `${section.id}-step-${sIdx}`
                      const isDone = !!completedSteps[stepKey]
                      return (
                        <li
                          key={sIdx}
                          onClick={() => toggleStep(stepKey)}
                          className={`flex items-start gap-3 rounded-lg border p-3 text-sm cursor-pointer transition-all ${
                            isDone ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200' : 'border-border bg-card hover:bg-accent'
                          }`}
                        >
                          <span
                            className={`flex size-6 items-center justify-center rounded-md text-xs font-bold shrink-0 mt-0.5 ${
                              isDone ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {isDone ? '✓' : sIdx + 1}
                          </span>
                          <span className={`leading-relaxed ${isDone ? 'line-through opacity-80' : ''}`}>
                            {step}
                          </span>
                        </li>
                      )
                    })}
                  </ol>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Tap any step above to track your progress as you inspect and test.
                  </p>
                </div>
              )}

              {/* Checklist / Key takeaways */}
              {section.checklist && section.checklist.length > 0 && (
                <div className="mt-5 rounded-xl border bg-card p-4 sm:p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                    Crucial Guidelines
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
                  <span className="font-semibold text-primary block mb-1">Pro Inspection Tips:</span>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    {section.tips.map((tip, tIdx) => (
                      <li key={tIdx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* FAQ Section */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section id="faqs" className="mt-12 border-t pt-8">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="size-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Frequently Asked Questions
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
              Ready to test your display now?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Run free browser diagnostics, dead pixel checks, or explore all 12 color screens on WhiteScreen.vip.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
              <Link href="/white-screen" className="text-primary hover:underline">
                White Screen →
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
                All Screen Tools →
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
                Related Display Guides
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
                      Read guide →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
