'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Search, ArrowRight, ChevronRight, Sparkles } from 'lucide-react'
import { GLOSSARY_ITEMS, type GlossaryItem } from '@/lib/glossary-data'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'

export function GlossaryIndexPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = GLOSSARY_ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortLabel.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Display & Monitor Technology Glossary | WhiteScreen.vip',
    description:
      'Clear, beginner-friendly dictionary of essential display, monitor, and screen testing terms: refresh rates, OLED vs LCD, HDR, resolutions, and chroma key.',
    url: absoluteUrl('/glossary'),
    hasDefinedTerm: GLOSSARY_ITEMS.map((item) => ({
      '@type': 'DefinedTerm',
      name: item.shortLabel,
      description: item.definition,
      url: absoluteUrl(`/glossary/${item.slug}`),
    })),
  }

  return (
    <div className="min-h-screen bg-background py-6 sm:py-10">
      <JsonLd data={schema} />

      <div className="mx-auto max-w-5xl px-3 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            White Screen
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <span className="font-medium text-foreground">Glossary</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-2.5">
            <BookOpen className="size-3.5" aria-hidden="true" />
            <span>Screen Technology Dictionary</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Display & Monitor Glossary
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Clear, accessible explanations of core display technologies, panel engineering terms, and
            benchmarking standards. Learn how these specs relate directly to your daily screen experience.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search terms (e.g. refresh rate, HDR, OLED)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-xs outline-none focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-2xs transition-all hover:border-foreground/30 hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="rounded-md bg-muted px-2 py-0.5 font-semibold text-muted-foreground text-[11px]">
                    Technical Term
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {item.relatedTools.length} connected tools
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/glossary/${item.slug}`}>{item.shortLabel}</Link>
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.definition}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                <span className="text-[11px] text-muted-foreground">Detailed guide with tool links</span>
                <Link
                  href={`/glossary/${item.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  <span>Explore term</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 rounded-xl border bg-muted/20">
            <p className="text-sm text-muted-foreground">No glossary term matched your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
