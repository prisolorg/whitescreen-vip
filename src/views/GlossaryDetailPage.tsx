'use client'

import React from 'react'
import { WhiteScreenCta } from '@/components/white-screen-cta'
import Link from 'next/link'
import {
  ChevronRight,
  BookOpen,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Cpu,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react'
import { getGlossaryBySlug, GLOSSARY_ITEMS } from '@/lib/glossary-data'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'

export function GlossaryDetailPage({ slug }: { slug: string }) {
  const item = getGlossaryBySlug(slug)

  if (!item) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Glossary Term Not Found</h1>
        <p className="mt-3 text-muted-foreground">The requested term does not exist in our dictionary.</p>
        <Link
          href="/glossary"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          View Full Glossary
        </Link>
      </div>
    )
  }

  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: item.shortLabel,
    description: item.definition,
    url: absoluteUrl(`/glossary/${item.slug}`),
    inDefinedTermSet: absoluteUrl('/glossary'),
  }

  const otherTerms = GLOSSARY_ITEMS.filter((t) => t.slug !== item.slug)

  return (
    <article className="min-h-screen bg-background py-6 sm:py-10">
      <JsonLd data={definedTermSchema} />

      <div className="mx-auto max-w-4xl px-3 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            White Screen
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <Link href="/glossary" className="hover:text-foreground transition-colors">
            Glossary
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <span className="font-medium text-foreground truncate">{item.shortLabel}</span>
        </nav>

        {/* Title Header */}
        <header className="mb-8 border-b border-border/80 pb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            <BookOpen className="size-3.5" aria-hidden="true" />
            <span>Display Technology Term</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            {item.title}
          </h1>

          {/* Callout Definition Box */}
          <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
              Definition:
            </span>
            <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed">
              {item.definition}
            </p>
          </div>
        </header>

        {/* Related WhiteScreen.vip Tools */}
        {item.relatedTools.length > 0 && (
          <section className="mb-10 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-4" />
              <span>Related WhiteScreen.vip Inspection & Testing Tools</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {item.relatedTools.map((tool) => (
                <Link
                  key={tool.path}
                  href={tool.path}
                  className="flex items-start justify-between rounded-xl border border-border/80 bg-background p-3.5 hover:border-primary/50 transition-colors group"
                >
                  <div>
                    <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                      <span>{tool.name}</span>
                      <ExternalLink className="size-3 text-muted-foreground" />
                    </span>
                    <span className="text-xs text-muted-foreground block mt-1 leading-relaxed">
                      {tool.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* How It Works / Technical Mechanism */}
        <section className="mb-10 space-y-4">
          <div className="flex items-center gap-2">
            <Cpu className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              How It Works: The Underlying Mechanism
            </h2>
          </div>
          <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-foreground/90">
            {item.howItWorks.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        {/* Key Specifications & Industry Standards */}
        <section className="mb-10 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              Key Specifications & Technical Standards
            </h2>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {item.keySpecs.map((spec, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <strong className="font-semibold text-foreground text-sm">
                    {spec.metric}
                  </strong>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    {spec.standard}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table / Breakdown */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-foreground">
            {item.comparisons.title}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-border bg-muted/60 text-foreground font-semibold">
                <tr>
                  {item.comparisons.headers.map((header, idx) => (
                    <th key={idx} className="px-3.5 py-2.5 sm:px-4 sm:py-3 whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {item.comparisons.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-muted/30 transition-colors">
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className={`px-3.5 py-2.5 sm:px-4 sm:py-3 leading-relaxed ${
                          cellIdx === 0 ? 'font-semibold text-foreground whitespace-nowrap' : 'text-muted-foreground'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical Everyday Scenarios */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-foreground">
            Practical Everyday Scenarios
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {item.practicalExamples.map((ex, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-1.5">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span>{ex.scenario}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ex.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages & Limitations */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-foreground">
            Advantages & Real-World Limitations
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Advantages */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 sm:p-5">
              <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="size-4" />
                <span>Primary Advantages</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/90">
                {item.advantagesAndLimits.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span className="leading-relaxed">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 sm:p-5">
              <h3 className="text-sm font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                <AlertTriangle className="size-4" />
                <span>Technical Limitations & Trade-Offs</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/90">
                {item.advantagesAndLimits.limitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span className="leading-relaxed">{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Common Misunderstandings & Myths */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <Info className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              Common Misunderstandings & Myths Debunked
            </h2>
          </div>
          <div className="space-y-3.5">
            {item.misunderstandings.map((m, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-4 sm:p-5 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-foreground font-semibold mb-2">
                  <span className="rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wider shrink-0 mt-0.5">
                    Myth
                  </span>
                  <span className="text-sm sm:text-base leading-snug">"{m.myth}"</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground pl-1">
                  <span className="rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wider shrink-0 mt-0.5">
                    Reality
                  </span>
                  <p className="leading-relaxed">{m.reality}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Glossary Terms Navigation */}
        <section className="border-t border-border/80 pt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              Explore More Display Terms
            </h2>
            <Link href="/glossary" className="text-xs font-semibold text-primary hover:underline">
              View full glossary →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherTerms.map((t) => (
              <Link
                key={t.slug}
                href={`/glossary/${t.slug}`}
                className="rounded-xl border border-border bg-card p-4 hover:border-foreground/30 transition-all shadow-2xs group flex flex-col justify-between"
              >
                <div>
                  <span className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors block">
                    {t.shortLabel}
                  </span>
                  <span className="text-[11px] text-muted-foreground line-clamp-2 mt-1">
                    {t.definition}
                  </span>
                </div>
                <span className="mt-3 text-[11px] font-medium text-primary flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <WhiteScreenCta className="mt-12" />
    </article>
  )
}
