'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Clock, ArrowRight, Sparkles, Search, CheckCircle2 } from 'lucide-react'
import { GUIDES } from '@/lib/guides-content'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { useTranslation } from '@/lib/i18n'

export function GuidesIndexPage() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = ['All', 'Cleaning & Maintenance', 'Display Diagnostics', 'Lighting & Visuals', 'Display Calibration']

  const filteredGuides = GUIDES.filter((guide) => {
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.metaDescription.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Screen Testing & Monitor Guides | WhiteScreen.vip',
    description:
      'Comprehensive guides on monitor cleaning, dead pixel testing, screen uniformity calibration, and fullscreen lighting setups.',
    url: absoluteUrl('/guides'),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: GUIDES.map((guide, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: absoluteUrl(guide.path),
        name: guide.title,
      })),
    },
  }

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <JsonLd data={collectionSchema} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            <BookOpen className="size-3.5" aria-hidden="true" />
            <span>WhiteScreen.vip Learning Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Display Guides & Tutorials
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Practical, step-by-step guides on monitor cleaning, dead pixel diagnostics, display calibration, and creative screen lighting setups.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Filter guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-lg border bg-background pl-9 pr-3 text-xs outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide, idx) => (
            <article
              key={guide.slug}
              className="flex flex-col justify-between rounded-2xl border bg-card p-5 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                    {guide.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Clock className="size-3.5" aria-hidden="true" />
                    <span>{guide.readingTime}</span>
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                  <Link href={guide.path} className="hover:text-primary transition-colors">
                    {guide.title}
                  </Link>
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {guide.metaDescription}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-mono">Guide #{idx + 1}</span>
                <Link
                  href={guide.path}
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  <span>Read guide</span>
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-sm">No guides matched your search or category filter.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All')
                setSearchQuery('')
              }}
              className="mt-3 text-xs font-semibold text-primary underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Pillar Page & Tool Cross Links */}
        <section className="mt-16 rounded-2xl border bg-muted/30 p-6 sm:p-8">
          <div className="max-w-2xl">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />
              <span>Explore Interactive Screen Tools</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every guide on WhiteScreen.vip connects directly to our free, browser-based display testing tools. Test pixels, check uniformity, simulate fake screens, or generate solid color wallpapers.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <Link href="/" className="rounded-lg border bg-background px-3 py-1.5 font-medium hover:bg-accent transition-colors">
                White Screen
              </Link>
              <Link href="/black-screen" className="rounded-lg border bg-background px-3 py-1.5 font-medium hover:bg-accent transition-colors">
                Black Screen
              </Link>
              <Link href="/dead-pixel-test" className="rounded-lg border bg-background px-3 py-1.5 font-medium hover:bg-accent transition-colors">
                Dead Pixel Test
              </Link>
              <Link href="/screen-uniformity-test" className="rounded-lg border bg-background px-3 py-1.5 font-medium hover:bg-accent transition-colors">
                Uniformity Test
              </Link>
              <Link href="/tools" className="rounded-lg border bg-background px-3 py-1.5 font-medium hover:bg-accent transition-colors">
                All Screen Tools
              </Link>
              <Link href="/about" className="rounded-lg border bg-background px-3 py-1.5 font-medium hover:bg-accent transition-colors">
                About WhiteScreen.vip
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
