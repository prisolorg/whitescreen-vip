'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Search,
  ScanEye,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import type { ProblemIndexProps } from '@/lib/article-i18n/index-items'
import { getLocalizedPath } from '@/lib/locale-routing'
import { useTranslation } from '@/lib/i18n'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'

export function ScreenProblemsIndexPage({ text, items }: ProblemIndexProps) {
  const { t, language } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = items.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.heroSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortLabel.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${text.problemsTitle} | WhiteScreen.vip`,
    description: text.problemsMetaDescription,
    inLanguage: language,
    url: absoluteUrl(getLocalizedPath('/screen-problems', language)),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: absoluteUrl(getLocalizedPath(`/screen-problems/${p.slug}`, language)),
        name: p.shortLabel,
      })),
    },
  }

  return (
    <div className="min-h-screen bg-background py-6 sm:py-10">
      <JsonLd data={schema} />

      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t('homeTitle', 'White Screen')}
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <span className="font-medium text-foreground">{t('screenProblems', 'Screen Problems')}</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2.5">
            <AlertTriangle className="size-3.5" aria-hidden="true" />
            <span>{text.problemsBadge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            {text.problemsTitle}
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            {text.problemsIntro}
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder={text.problemsSearch}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-xs outline-none focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
          <span className="text-xs text-muted-foreground">{text.problemsShowing.replace('{n}', String(filtered.length))}</span>
        </div>

        {/* Problems Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-2xs transition-all hover:border-foreground/30 hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="rounded-md bg-muted px-2 py-0.5 font-semibold text-muted-foreground text-[11px]">
                    {text.diagnosticGuide}
                  </span>
                  <span className="text-[11px] font-medium text-primary flex items-center gap-1">
                    <ScanEye className="size-3" />
                    <span>{item.toolName}</span>
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/screen-problems/${item.slug}`}>{item.shortLabel}</Link>
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.heroSummary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                <Link
                  href={item.toolPath}
                  className="font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-[11px]"
                >
                  <span>{item.actionText}</span>
                  <ExternalLink className="size-3" />
                </Link>
                <Link
                  href={`/screen-problems/${item.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  <span>{text.readGuide}</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Diagnostic Reality Callout */}
        <div className="mt-16 rounded-2xl border border-border bg-muted/20 p-6 sm:p-8 space-y-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-foreground">
                {text.realityTitle}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {text.realityText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
