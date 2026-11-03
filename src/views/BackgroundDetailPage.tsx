import { AdSlot } from '@/components/ad-slot'
'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { WhiteScreenCta } from '@/components/white-screen-cta'
import Link from 'next/link'
import {
  Download,
  Maximize,
  X,
  Sparkles,
  ArrowRight,
  Check,
  ChevronRight,
  Copy,
  ExternalLink,
  HelpCircle,
  Eye,
  Palette,
  Lightbulb,
  ShieldCheck,
  Monitor,
} from 'lucide-react'
import { getBackgroundBySlug, BACKGROUND_ITEMS, BACKGROUND_CATEGORIES, type BackgroundItem } from '@/lib/backgrounds-data'
import { paintBackground } from '@/lib/background-paint'
import { isLightColor } from '@/lib/screen-colors'
import { DoubleTapHint, STAGE_SIZE, StageDock, StageTitle } from '@/components/screen-stage/stage-parts'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { cn } from '@/lib/utils'

export function BackgroundDetailPage({ slug }: { slug: string }) {
  const item = getBackgroundBySlug(slug)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [width, setWidth] = useState(1920)
  const [height, setHeight] = useState(1080)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const [sizeId, setSizeId] = useState('4k')
  const screenRef = useRef<HTMLDivElement>(null)

  const exitFullscreen = useCallback(async () => {
    setIsFullscreen(false)
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen()
      } catch {}
    }
  }, [])

  const enterFullscreen = useCallback(async () => {
    const el = screenRef.current
    if (!el) return
    try {
      if (el.requestFullscreen) {
        await el.requestFullscreen()
      }
    } catch {}
    setIsFullscreen(true)
  }, [])

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen()
      } else if ((e.key === 'f' || e.key === 'F') && !e.metaKey && !e.ctrlKey) {
        if (!isFullscreen) enterFullscreen()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isFullscreen, enterFullscreen, exitFullscreen])

  if (!item) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Background Not Found</h1>
        <p className="mt-3 text-muted-foreground">The requested background could not be located.</p>
        <Link
          href="/backgrounds"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Browse All Backgrounds
        </Link>
      </div>
    )
  }

  const handleDownload = (customW = width, customH = height) => {
    if (isDownloading) return
    setIsDownloading(true)

    try {
      const canvas = document.createElement('canvas')
      canvas.width = customW
      canvas.height = customH
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      paintBackground(ctx, item, customW, customH)

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setIsDownloading(false)
            return
          }
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `${item.slug}-${customW}x${customH}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          setTimeout(() => URL.revokeObjectURL(url), 1000)
          setIsDownloading(false)
          setDownloadSuccess(true)
          setTimeout(() => setDownloadSuccess(false), 2500)
        },
        'image/png',
        1.0,
      )
    } catch {
      setIsDownloading(false)
    }
  }

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(`background: ${item.cssBackground};`)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch {}
  }

  const related = BACKGROUND_ITEMS.filter((b) => b.slug !== item.slug && b.category === item.category).slice(0, 3)

  const imageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: item.title,
    description: item.shortDescription,
    contentUrl: absoluteUrl(`/backgrounds/${item.slug}`),
    representativeOfPage: true,
  }

  const faqSchema =
    item.faqs && item.faqs.length > 0
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

  const SIZES = [
    { id: '1080p', label: '1080p · 1920×1080', w: 1920, h: 1080 },
    { id: '2k', label: '2K · 2560×1440', w: 2560, h: 1440 },
    { id: '4k', label: '4K · 3840×2160', w: 3840, h: 2160 },
    { id: 'phone', label: 'Phone · 1080×2400', w: 1080, h: 2400 },
    { id: 'custom', label: 'Custom size', w: width, h: height },
  ]
  const size = SIZES.find((option) => option.id === sizeId) ?? SIZES[2]
  const tone = isLightColor(item.primaryHex) ? 'light' : 'dark'
  // Same category first, then others, so there is always a full row of next steps.
  const moreBackgrounds = [
    ...BACKGROUND_ITEMS.filter((b) => b.slug !== item.slug && b.category === item.category),
    ...BACKGROUND_ITEMS.filter((b) => b.slug !== item.slug && b.category !== item.category),
  ].slice(0, 6)

  return (
    <article className="bg-background pb-8 pt-3 sm:pt-4">
      <JsonLd data={imageSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Same layout as the screen pages: breadcrumbs, the preview with its title, a control dock,
          then more backgrounds, so the tool and the next links are above the fold. */}
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
          <Link href="/" className="hover:text-foreground transition-colors">
            White Screen
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <Link href="/backgrounds" className="hover:text-foreground transition-colors">
            Backgrounds
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <Link href={`/backgrounds?category=${item.category}`} className="hover:text-foreground transition-colors">
            {item.categoryLabel}
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <span className="truncate font-medium text-foreground">{item.title}</span>
        </nav>

        <div className="relative">
          <div
            ref={screenRef}
            role="region"
            aria-label={`${item.title} preview`}
            onDoubleClick={() => void (isFullscreen ? exitFullscreen() : enterFullscreen())}
            style={{ background: item.cssBackground }}
            className={cn(
              'relative touch-manipulation select-none overflow-hidden',
              isFullscreen ? 'fixed inset-0 z-50 h-dvh w-full' : STAGE_SIZE,
            )}
          >
            {isFullscreen ? (
              <button
                type="button"
                onClick={exitFullscreen}
                className="absolute right-4 top-4 rounded-full bg-black/60 p-2.5 text-white shadow-lg transition-colors hover:bg-black/80"
                aria-label="Exit fullscreen"
              >
                <X className="size-5" />
              </button>
            ) : (
              <DoubleTapHint tone={tone} />
            )}
          </div>
          {!isFullscreen && (
            <StageTitle
              title={item.title}
              intro={item.shortDescription}
              tone={tone}
              aside={
                <span
                  className={cn(
                    'rounded-full px-3 py-1 font-mono text-xs font-semibold ring-1',
                    tone === 'light' ? 'bg-black/5 text-neutral-900 ring-black/10' : 'bg-white/10 text-white ring-white/20',
                  )}
                >
                  {item.primaryHex}
                </span>
              }
            />
          )}
        </div>

        {!isFullscreen && (
          <StageDock onFullscreen={enterFullscreen}>
            <div className="flex flex-wrap items-center gap-2">
              <label htmlFor="bg-size" className="sr-only">
                Image size
              </label>
              <select
                id="bg-size"
                value={sizeId}
                onChange={(e) => setSizeId(e.target.value)}
                className="h-10 rounded-xl border bg-background px-2.5 text-sm font-semibold"
              >
                {SIZES.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              {sizeId === 'custom' && (
                <span className="flex items-center gap-1.5 text-sm">
                  <label htmlFor="bg-w" className="sr-only">
                    Width (px)
                  </label>
                  <input
                    id="bg-w"
                    type="number"
                    min={1}
                    max={8192}
                    value={width}
                    onChange={(e) => setWidth(Math.min(8192, Math.max(1, parseInt(e.target.value, 10) || 1)))}
                    className="h-10 w-24 rounded-xl border bg-background px-2.5 font-mono text-sm"
                  />
                  ×
                  <label htmlFor="bg-h" className="sr-only">
                    Height (px)
                  </label>
                  <input
                    id="bg-h"
                    type="number"
                    min={1}
                    max={8192}
                    value={height}
                    onChange={(e) => setHeight(Math.min(8192, Math.max(1, parseInt(e.target.value, 10) || 1)))}
                    className="h-10 w-24 rounded-xl border bg-background px-2.5 font-mono text-sm"
                  />
                </span>
              )}
              <button
                type="button"
                onClick={() => handleDownload(size.w, size.h)}
                disabled={isDownloading}
                className={cn(
                  'inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-white transition-colors',
                  downloadSuccess ? 'bg-emerald-600' : 'bg-blue-600 hover:bg-blue-700',
                )}
              >
                {downloadSuccess ? <Check className="size-4" /> : <Download className="size-4" />}
                <span>{isDownloading ? 'Generating…' : downloadSuccess ? 'Downloaded!' : 'Download PNG'}</span>
              </button>
              <button
                type="button"
                onClick={copyCss}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                {isCopied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
                <span>{isCopied ? 'CSS Copied!' : 'Copy CSS'}</span>
              </button>
            </div>
          </StageDock>
        )}

        <section aria-labelledby="more-backgrounds" className="mt-2 flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <h2 id="more-backgrounds" className="text-base font-bold tracking-tight sm:text-lg">
              More backgrounds
            </h2>
            <Link href="/backgrounds" className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
              All backgrounds →
            </Link>
          </div>
          <nav aria-label="Background categories" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {BACKGROUND_CATEGORIES.filter((cat) => cat.id !== 'all').map((cat) => (
              <Link
                key={cat.id}
                href={`/backgrounds?category=${cat.id}`}
                className={cn(
                  'h-10 shrink-0 content-center rounded-full px-4 text-sm font-semibold transition-colors',
                  cat.id === item.category ? 'bg-foreground text-background' : 'border bg-background text-foreground/80 hover:bg-accent',
                )}
              >
                {cat.label}
              </Link>
            ))}
          </nav>
          <ul className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
            {moreBackgrounds.map((bg) => (
              <li key={bg.slug}>
                <Link
                  href={`/backgrounds/${bg.slug}`}
                  className="flex h-full flex-col gap-1.5 rounded-xl border bg-card p-1.5 transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-md"
                >
                  <span aria-hidden="true" className="h-12 w-full rounded-lg ring-1 ring-inset ring-black/10 sm:h-14" style={{ background: bg.cssBackground }} />
                  <span className="line-clamp-2 px-1 pb-0.5 text-xs font-semibold leading-snug sm:text-[13px]">{bg.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mx-auto max-w-5xl px-3 sm:px-6">
        {/* Section 1: About This Background */}
        <AdSlot placement="top" className="px-0 sm:px-0" />
        <section className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">About This Background</h2>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-foreground/90 leading-relaxed">
            <p>{item.about.overview}</p>
            <p>{item.about.colorCharacteristics}</p>
            <p className="text-muted-foreground italic">{item.about.aestheticTone}</p>
          </div>
        </section>

        {/* Section 2: View in Full Screen */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Eye className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">View in Full Screen</h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
            {item.fullscreenGuide.instruction}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm pt-2">
            <div className="rounded-xl border border-border/80 bg-muted/30 p-3.5">
              <span className="font-semibold text-foreground block mb-1">Optimal Uses:</span>
              <p className="text-muted-foreground">{item.fullscreenGuide.bestUsedFor}</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-muted/30 p-3.5">
              <span className="font-semibold text-foreground block mb-1">Display Inspection Tip:</span>
              <p className="text-muted-foreground">{item.fullscreenGuide.inspectionTip}</p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Use This Background */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">How to Use This Background</h2>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {item.useCases.map((uc, i) => (
              <div key={i} className="rounded-xl border border-border bg-background p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground mb-1.5">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.description}</p>
                </div>
                {uc.linkHref && uc.linkText && (
                  <div className="mt-3 pt-2.5 border-t border-border/60">
                    <Link
                      href={uc.linkHref}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>{uc.linkText}</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Choosing the Right Background */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-foreground">Choosing the Right Background</h2>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-foreground/90 leading-relaxed">
            <div className="rounded-xl border border-border/70 p-3.5 bg-muted/20">
              <strong className="text-foreground block mb-1">When to choose this background:</strong>
              <p className="text-muted-foreground">{item.selectionAdvice.whenToChoose}</p>
            </div>
            <div className="rounded-xl border border-border/70 p-3.5 bg-muted/20">
              <strong className="text-foreground block mb-1">Contrast & typography legibility:</strong>
              <p className="text-muted-foreground">{item.selectionAdvice.contrastAndReadability}</p>
            </div>
            <div className="rounded-xl border border-border/70 p-3.5 bg-muted/20">
              <strong className="text-foreground block mb-1">Alternative options to consider:</strong>
              <p className="text-muted-foreground">{item.selectionAdvice.alternativeConsiderations}</p>
            </div>
          </div>
        </section>

        {/* Authoritative Reference Link (When applicable) */}
        {item.authoritativeLink && (
          <section className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 shadow-xs">
            <div className="flex items-start gap-3">
              <ExternalLink className="size-5 text-primary shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-semibold text-foreground block">
                  Authoritative Reference: {item.authoritativeLink.title}
                </span>
                <p className="text-muted-foreground mt-1">{item.authoritativeLink.note}</p>
                <a
                  href={item.authoritativeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-2"
                >
                  <span>Read Official Guidance from {item.authoritativeLink.organization}</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Contextual Internal Links */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-foreground">Related Guides & Complementary Backgrounds</h2>
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

        {/* Section 6: Frequently Asked Questions */}
        <AdSlot placement="content" className="px-0 sm:px-0" />
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

        {/* Section 7: Related Tools */}
        {item.relatedTools && item.relatedTools.length > 0 && (
          <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Monitor className="size-5 text-primary" />
              <h2 className="text-lg sm:text-xl font-bold text-foreground">Relevant WhiteScreen.vip Tools</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {item.relatedTools.map((t, i) => (
                <Link
                  key={i}
                  href={t.path}
                  className="group rounded-xl border border-border p-3.5 hover:border-primary/50 hover:bg-accent transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.description}</p>
                  </div>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary shrink-0 ml-2" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 8: More Backgrounds in this Collection */}
        {related.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base sm:text-lg font-bold text-foreground">
                More {item.categoryLabel} Backgrounds
              </h2>
              <div className="flex items-center gap-2 text-xs">
                <Link
                  href={`/backgrounds?category=${item.category}`}
                  className="font-semibold text-primary hover:underline"
                >
                  View all {item.categoryLabel} →
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  href="/backgrounds"
                  className="text-muted-foreground hover:text-foreground hover:underline"
                >
                  All Backgrounds
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/backgrounds/${rel.slug}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-2xs transition-all hover:border-foreground/30"
                >
                  <div className="aspect-video w-full" style={{ background: rel.cssBackground }} />
                  <div className="p-3">
                    <span className="font-semibold text-xs text-foreground group-hover:text-primary transition-colors">
                      {rel.title}
                    </span>
                    <span className="block font-mono text-[10px] text-muted-foreground mt-0.5">
                      {rel.primaryHex}
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
