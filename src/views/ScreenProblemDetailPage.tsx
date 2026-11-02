'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Info,
  Check,
  RotateCcw,
} from 'lucide-react'
import { getScreenProblemBySlug, SCREEN_PROBLEMS, type ScreenProblemItem } from '@/lib/screen-problems-data'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { cn } from '@/lib/utils'

export function ScreenProblemDetailPage({ slug }: { slug: string }) {
  const item = getScreenProblemBySlug(slug)
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({})

  if (!item) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Problem Guide Not Found</h1>
        <p className="mt-3 text-muted-foreground">The requested screen problem guide does not exist.</p>
        <Link
          href="/screen-problems"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          View All Screen Problems
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
    headline: item.title,
    description: item.metaDescription,
    url: absoluteUrl(`/screen-problems/${item.slug}`),
    publisher: {
      '@type': 'Organization',
      name: 'WhiteScreen.vip',
      url: absoluteUrl('/'),
    },
  }

  const faqSchema =
    item.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: item.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null

  const relatedProblems = SCREEN_PROBLEMS.filter((p) => p.slug !== item.slug).slice(0, 3)

  return (
    <article className="min-h-screen bg-background py-6 sm:py-10">
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="mx-auto max-w-4xl px-3 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <Link href="/screen-problems" className="hover:text-foreground transition-colors">
            Screen Problems
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <span className="font-medium text-foreground truncate">{item.shortLabel}</span>
        </nav>

        {/* Header */}
        <header className="mb-8 border-b border-border/80 pb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300 mb-3">
            <AlertTriangle className="size-3.5" aria-hidden="true" />
            <span>Display Diagnostic Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            {item.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {item.heroSummary}
          </p>
        </header>

        {/* Quick Diagnostic Tool CTA */}
        <div className="mb-10 rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-4" />
              <span>Recommended Diagnostic Tool</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-foreground mt-1">
              Test with {item.quickDiagnostic.toolName}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              {item.quickDiagnostic.description}
            </p>
          </div>
          <Link
            href={item.quickDiagnostic.toolPath}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-2xs shrink-0"
          >
            <span>{item.quickDiagnostic.actionText}</span>
            <ExternalLink className="size-4" />
          </Link>
        </div>

        {/* Dynamically Rendered Issue-Specific Sections */}
        <div className="space-y-10">
          {item.sections.map((section, sIdx) => (
            <section key={sIdx} className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
              <div>
                {section.subheading && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block mb-1">
                    {section.subheading}
                  </span>
                )}
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  {section.heading}
                </h2>
              </div>

              {/* Paragraphs */}
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Bullets */}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 text-xs sm:text-sm text-foreground/90 pt-1">
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-muted/20 p-3">
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                        •
                      </span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Comparison Table */}
              {section.comparisonTable && (
                <div className="overflow-x-auto rounded-xl border border-border mt-3">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b bg-muted/60 text-foreground font-semibold">
                        <th className="p-3 w-1/2">{section.comparisonTable.headers[0]}</th>
                        <th className="p-3 w-1/2">{section.comparisonTable.headers[1]}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {section.comparisonTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-background' : 'bg-muted/10'}>
                          <td className="p-3 text-muted-foreground align-top">{row[0]}</td>
                          <td className="p-3 text-foreground font-medium align-top">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Callout Box */}
              {section.callout && (
                <div
                  className={cn(
                    'rounded-xl border p-4 text-xs sm:text-sm leading-relaxed mt-2',
                    section.callout.type === 'warning' && 'border-amber-500/40 bg-amber-500/10 text-amber-950 dark:text-amber-200',
                    section.callout.type === 'tip' && 'border-emerald-500/40 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200',
                    section.callout.type === 'info' && 'border-primary/40 bg-primary/10 text-foreground',
                  )}
                >
                  {section.callout.title && (
                    <strong className="block font-bold mb-1">{section.callout.title}</strong>
                  )}
                  <p>{section.callout.text}</p>
                </div>
              )}

              {/* Interactive Troubleshooting Checklist */}
              {section.checklist && section.checklist.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs text-muted-foreground block mb-2">
                    Tap to check off diagnostic steps as you complete them:
                  </span>
                  {section.checklist.map((step, cIdx) => {
                    const stepKey = `${sIdx}-${cIdx}`
                    const isDone = !!completedSteps[stepKey]
                    return (
                      <div
                        key={cIdx}
                        onClick={() => toggleStep(stepKey)}
                        className={cn(
                          'flex items-start gap-3 rounded-xl border p-3.5 text-xs sm:text-sm cursor-pointer transition-all',
                          isDone
                            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200'
                            : 'border-border bg-background hover:bg-accent',
                        )}
                      >
                        <span
                          className={cn(
                            'flex size-6 items-center justify-center rounded-md text-xs font-bold shrink-0 mt-0.5 transition-colors',
                            isDone ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground',
                          )}
                        >
                          {isDone ? <Check className="size-3.5" /> : cIdx + 1}
                        </span>
                        <span className={cn('leading-relaxed', isDone && 'line-through opacity-80')}>
                          {step}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Hardware Limitation & Warranty Reality */}
        <section className="mt-10 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 sm:p-6 text-amber-950 dark:text-amber-200 shadow-xs">
          <div className="flex items-start gap-3.5">
            <ShieldAlert className="size-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed space-y-2">
              <strong className="font-bold text-sm block">{item.hardwareReality.heading}</strong>
              <p>{item.hardwareReality.text}</p>
              <div className="pt-2 border-t border-amber-500/30">
                <span className="font-semibold block mb-0.5">Warranty & RMA Guidance:</span>
                <p className="text-amber-900 dark:text-amber-300">{item.hardwareReality.warrantyAdvice}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Authoritative Reference Link */}
        {item.authoritativeReference && (
          <section className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 shadow-xs">
            <div className="flex items-start gap-3">
              <ExternalLink className="size-5 text-primary shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-semibold text-foreground block">
                  Authoritative Industry Standard: {item.authoritativeReference.title}
                </span>
                <p className="text-muted-foreground mt-1">{item.authoritativeReference.summary}</p>
                <a
                  href={item.authoritativeReference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-2"
                >
                  <span>Official Document from {item.authoritativeReference.organization}</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Contextual Internal Links */}
        <section className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-foreground">Related Display Guides & Diagnostics</h2>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {item.contextualLinks.map((cl, i) => (
              <Link
                key={i}
                href={cl.href}
                className="group flex flex-col justify-between rounded-xl border border-border p-3.5 hover:border-primary/50 hover:bg-accent transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">
                    {cl.label}
                  </span>
                  <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{cl.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Problem-Specific FAQs */}
        {item.faqs && item.faqs.length > 0 && (
          <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="size-5 text-primary" />
              <h2 className="text-lg sm:text-xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {item.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-border/70 p-4 bg-muted/20">
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground">{faq.question}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Problems Grid & Clear Path Back */}
        <section className="mt-12 pt-8 border-t border-border/80">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h2 className="text-base sm:text-lg font-bold text-foreground">Explore Other Screen Problems</h2>
            <Link
              href="/screen-problems"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              <span>View all 11 problem guides</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {relatedProblems.map((rp) => (
              <Link
                key={rp.slug}
                href={`/screen-problems/${rp.slug}`}
                className="group rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors block">
                    {rp.shortLabel}
                  </span>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{rp.heroSummary}</p>
                </div>
                <span className="mt-3 text-xs font-medium text-primary flex items-center gap-1">
                  Read guide <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
