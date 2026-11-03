'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Download,
  Search,
  Sparkles,
  ArrowRight,
  Maximize2,
  Check,
  ChevronRight,
} from 'lucide-react'
import {
  BACKGROUND_CATEGORIES,
  BACKGROUND_ITEMS,
  type BackgroundCategory,
  type BackgroundItem,
} from '@/lib/backgrounds-data'
import { paintBackground } from '@/lib/background-paint'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { cn } from '@/lib/utils'
import { SHOW_ADS, ToolWithAds, UnderAd } from '@/components/tool-ads'
import { useRouter, useSearchParams } from '@/lib/next-shim'

const CATEGORY_META: Record<BackgroundCategory, { heading: string; description: string; badge: string }> = {
  solid: {
    heading: 'Solid Color Backgrounds',
    description:
      'Pure uncompressed color screens for display testing, physical tracing, webcam video lighting, and minimalist desktop wallpapers. Lossless PNG downloads in 1080p, 2K, and 4K.',
    badge: 'Solid Colors Collection',
  },
  gradient: {
    heading: 'Gradient Backgrounds',
    description:
      'Smooth multi-stop aesthetic gradients designed to evaluate display 8-bit vs 10-bit color banding, enrich modern battlestations, and provide colorful wallpapers.',
    badge: 'Gradients Collection',
  },
  'video-call': {
    heading: 'Video Call Backgrounds',
    description:
      'Professional virtual office backdrops, warm ambient softbox lighting, and chroma key screens optimized for Zoom, Google Meet, and Microsoft Teams meetings.',
    badge: 'Video Call Backdrops',
  },
  'dark-oled': {
    heading: 'Dark & OLED Backgrounds',
    description:
      'True 0% pitch black and near-black carbon shades that turn off pixels, conserve battery on OLED displays, and reveal backlight bleed on LCD panels.',
    badge: 'Dark & OLED Collection',
  },
  minimal: {
    heading: 'Aesthetic & Minimal Backgrounds',
    description:
      'Earthy evergreen tones, warm cream linen, and low-contrast palettes designed to reduce eye strain and bring visual calm to extended work sessions.',
    badge: 'Aesthetic & Minimal',
  },
  neon: {
    heading: 'Neon & Glow Backgrounds',
    description:
      'High-voltage electric cyan, synthwave magenta, and radiant cyberpunk glow wallpapers to test monitor response time, motion ghosting, and HDR highlight pop.',
    badge: 'Neon & Glow Collection',
  },
}

export function BackgroundsIndexPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  // Validate and read category from URL search params
  const activeCategory: BackgroundCategory | 'all' = useMemo(() => {
    if (
      categoryParam &&
      categoryParam !== 'all' &&
      BACKGROUND_CATEGORIES.some((c) => c.id === categoryParam)
    ) {
      return categoryParam as BackgroundCategory
    }
    return 'all'
  }, [categoryParam])

  const [searchQuery, setSearchQuery] = useState('')
  const [downloadingSlug, setDownloadingSlug] = useState<string | null>(null)

  // Filter items strictly by URL activeCategory and search query
  const filteredItems = useMemo(() => {
    return BACKGROUND_ITEMS.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCat && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const handleCategoryClick = (catId: BackgroundCategory | 'all') => {
    if (catId === 'all') {
      router.push('/backgrounds')
    } else {
      router.push(`/backgrounds?category=${catId}`)
    }
  }

  const quickDownload = (item: BackgroundItem, width = 1920, height = 1080, label = '1080p') => {
    if (downloadingSlug) return
    setDownloadingSlug(`${item.slug}-${label}`)

    try {
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      paintBackground(ctx, item, width, height)

      canvas.toBlob(
        (blob) => {
          if (!blob) return
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `${item.slug}-${width}x${height}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          setTimeout(() => URL.revokeObjectURL(url), 1000)
          setTimeout(() => setDownloadingSlug(null), 1000)
        },
        'image/png',
        1.0,
      )
    } catch {
      setDownloadingSlug(null)
    }
  }

  const activeMeta = activeCategory !== 'all' ? CATEGORY_META[activeCategory] : null
  const currentCategoryObj = BACKGROUND_CATEGORIES.find((c) => c.id === activeCategory)

  const pageHeading = activeMeta ? activeMeta.heading : 'Backgrounds Library'
  const pageDescription = activeMeta
    ? activeMeta.description
    : 'Free high-resolution solid colors, modern gradients, video call backdrops, and dark OLED screens. Preview in fullscreen or export lossless PNG wallpapers in 1080p, 2K, and 4K.'

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${pageHeading} | WhiteScreen.vip`,
    description: pageDescription,
    url: absoluteUrl(
      activeCategory === 'all' ? '/backgrounds' : `/backgrounds?category=${activeCategory}`,
    ),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: filteredItems.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: absoluteUrl(`/backgrounds/${item.slug}`),
        name: item.title,
      })),
    },
  }

  return (
    <div className="min-h-screen bg-background pb-10 pt-3 sm:pt-4">
      <JsonLd data={collectionSchema} />

      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            White Screen
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          {activeCategory === 'all' ? (
            <span className="font-medium text-foreground">Backgrounds</span>
          ) : (
            <>
              <Link href="/backgrounds" className="hover:text-foreground transition-colors">
                Backgrounds
              </Link>
              <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
              <span className="font-medium text-foreground">{pageHeading}</span>
            </>
          )}
        </nav>

        {/* Compact header so the category chips and the grid are above the fold on every device. */}
        <div className="mb-3 flex flex-col gap-1 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div className="min-w-0">
            <h1 className="text-xl font-extrabold leading-tight tracking-tight text-foreground sm:text-2xl md:text-3xl">
              {pageHeading}
            </h1>
            <p className="mt-1 line-clamp-2 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {pageDescription}
            </p>
          </div>
          <span className="hidden shrink-0 text-xs text-muted-foreground lg:block">
            {filteredItems.length} backgrounds · free PNG up to 8K
          </span>
        </div>

        <div className="sticky top-16 z-10 -mx-3 mb-4 flex flex-col gap-2 bg-background/95 px-3 py-2 backdrop-blur sm:-mx-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div
            role="tablist"
            aria-label="Background categories"
            className="-mx-1 flex items-center gap-1.5 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {BACKGROUND_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={cn(
                    'h-9 shrink-0 cursor-pointer whitespace-nowrap rounded-full px-3.5 text-sm font-semibold transition-colors',
                    isSelected ? 'bg-foreground text-background' : 'border bg-background text-foreground/80 hover:bg-accent',
                  )}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          <div className="relative w-full sm:w-60 sm:shrink-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              aria-label="Search backgrounds"
              placeholder={`Search ${activeCategory === 'all' ? 'backgrounds' : currentCategoryObj?.label || 'collection'}…`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-full border border-border bg-background pl-9 pr-3 text-sm outline-none focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Backgrounds Cards Grid: Every card links directly to its own unique URL */}
        {/* Ads: a sticky 300×600 beside the grid on desktop; on tablets and phones a banner after the
            first row of cards (dense flow fills the row on 3 columns), above the fold without pushing the grid down. */}
        <ToolWithAds under={false}>
        <div className={cn('grid grid-flow-row-dense grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3', SHOW_ADS ? 'lg:grid-cols-3' : 'lg:grid-cols-4')}>
          {filteredItems.map((item, index) => {
            const isDownloading = downloadingSlug?.startsWith(item.slug)
            const itemUrl = `/backgrounds/${item.slug}`
            return (
              <React.Fragment key={item.slug}>
              {index === 2 && <UnderAd className="col-span-full" />}
              <article
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-2xs transition-all hover:border-foreground/30 hover:shadow-sm"
              >
                {/* Visual Swatch Preview Link */}
                <Link
                  href={itemUrl}
                  className="relative aspect-video w-full overflow-hidden border-b border-border/60 transition-transform group-hover:opacity-95"
                  style={{ background: item.cssBackground }}
                  aria-label={`Open ${item.title}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                      <Maximize2 className="size-3.5" />
                      <span>Preview Fullscreen</span>
                    </span>
                  </div>
                  <span className="absolute bottom-2 left-2 rounded-md bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-xs">
                    {item.primaryHex}
                  </span>
                </Link>

                {/* Card Info */}
                <div className="flex flex-1 flex-col justify-between gap-2 p-2.5 sm:p-3.5">
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <button
                        type="button"
                        onClick={() => handleCategoryClick(item.category)}
                        className="rounded-md bg-muted px-2 py-0.5 font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        {item.categoryLabel}
                      </button>
                      <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">PNG · Lossless</span>
                    </div>

                    <h2 className="text-[13px] leading-snug sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      <Link href={itemUrl}>{item.title}</Link>
                    </h2>

                    <p className="mt-1 hidden text-xs text-muted-foreground line-clamp-2 leading-relaxed sm:block">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 border-t border-border/50 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => quickDownload(item, 1920, 1080, '1080p')}
                        disabled={isDownloading}
                        className="rounded-md border border-border px-2 py-1 text-[11px] font-medium text-foreground hover:bg-accent transition-colors cursor-pointer"
                        title="Download 1080p (1920×1080) PNG"
                      >
                        1080p
                      </button>
                      <button
                        type="button"
                        onClick={() => quickDownload(item, 3840, 2160, '4K')}
                        disabled={isDownloading}
                        className="rounded-md border border-border px-2 py-1 text-[11px] font-medium text-foreground hover:bg-accent transition-colors cursor-pointer"
                        title="Download 4K UHD (3840×2160) PNG"
                      >
                        4K
                      </button>
                    </div>

                    <Link
                      href={itemUrl}
                      className="hidden items-center gap-1 font-semibold text-primary hover:underline text-xs sm:inline-flex"
                    >
                      <span>Custom specs</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </article>
              </React.Fragment>
            )
          })}
        </div>

        {/* Empty state when no matches */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 rounded-xl border bg-muted/20">
            <p className="text-sm text-muted-foreground">No backgrounds match your search or filter.</p>
            <button
              type="button"
              onClick={() => {
                handleCategoryClick('all')
                setSearchQuery('')
              }}
              className="mt-2 text-xs font-semibold text-primary underline cursor-pointer"
            >
              Reset to all backgrounds
            </button>
          </div>
        )}
        </ToolWithAds>

        {/* Educational Content & Category Context */}
        <section className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              About WhiteScreen.vip Backgrounds
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every background in our library is rendered dynamically on your device using client-side
              HTML5 Canvas algorithms. This guarantees 100% loss-free color accuracy without JPEG
              compression banding, mosquito noise, or watermarks.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs leading-relaxed text-muted-foreground">
            <div className="rounded-xl border bg-muted/20 p-4">
              <h3 className="font-semibold text-foreground text-sm mb-1">
                <Link
                  href="/backgrounds?category=solid"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Solid Colors</span>
                  <ArrowRight className="size-3" />
                </Link>
              </h3>
              <p>
                Pure reference colors including pure white, true black, vibrant orange, red, green, and deep
                navy for lighting, tracing, display testing, and minimal aesthetics.
              </p>
            </div>
            <div className="rounded-xl border bg-muted/20 p-4">
              <h3 className="font-semibold text-foreground text-sm mb-1">
                <Link
                  href="/backgrounds?category=gradient"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Gradients & Glows</span>
                  <ArrowRight className="size-3" />
                </Link>
              </h3>
              <p>
                Multi-stop linear and radial transitions from twilight sunsets to deep ocean blues and
                cyberpunk neons, designed for modern desktop and mobile wallpapers.
              </p>
            </div>
            <div className="rounded-xl border bg-muted/20 p-4">
              <h3 className="font-semibold text-foreground text-sm mb-1">
                <Link
                  href="/backgrounds?category=video-call"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Video Call Backdrops</span>
                  <ArrowRight className="size-3" />
                </Link>
              </h3>
              <p>
                Clean virtual office gradients, soft warm studio lighting, and chroma key green screens
                for Zoom, Microsoft Teams, and Google Meet meetings.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
