'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  Download,
  Maximize,
  X,
  Sparkles,
  ArrowRight,
  Check,
  ChevronRight,
  Layers,
  Copy,
  ExternalLink,
  HelpCircle,
  Eye,
  Palette,
  Lightbulb,
  ShieldCheck,
  Monitor,
} from 'lucide-react'
import { getBackgroundBySlug, BACKGROUND_ITEMS, type BackgroundItem } from '@/lib/backgrounds-data'
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

      if (item.type === 'gradient' && item.secondaryHex) {
        const grad = ctx.createLinearGradient(0, 0, customW, customH)
        grad.addColorStop(0, item.primaryHex)
        if (item.accentHex) {
          grad.addColorStop(0.5, item.accentHex)
        }
        grad.addColorStop(1, item.secondaryHex)
        ctx.fillStyle = grad
      } else if (item.type === 'pattern') {
        // High-res pattern simulation
        ctx.fillStyle = item.primaryHex
        ctx.fillRect(0, 0, customW, customH)
        if (item.secondaryHex) {
          ctx.strokeStyle = item.secondaryHex
          ctx.lineWidth = 1
          const step = 40
          for (let x = 0; x < customW; x += step) {
            ctx.beginPath()
            ctx.moveTo(x, 0)
            ctx.lineTo(x, customH)
            ctx.stroke()
          }
          for (let y = 0; y < customH; y += step) {
            ctx.beginPath()
            ctx.moveTo(0, y)
            ctx.lineTo(customW, y)
            ctx.stroke()
          }
        }
      } else {
        ctx.fillStyle = item.primaryHex
      }
      ctx.fillRect(0, 0, customW, customH)

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

  return (
    <article className="min-h-screen bg-background py-6 sm:py-10">
      <JsonLd data={imageSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="mx-auto max-w-5xl px-3 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
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
          <span className="font-medium text-foreground truncate">{item.title}</span>
        </nav>

        {/* Title Header */}
        <header className="mb-6">
          <div className="flex items-center gap-2 text-xs mb-2.5 flex-wrap">
            <span className="rounded-md bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
              {item.categoryLabel}
            </span>
            <span className="text-muted-foreground font-mono">{item.primaryHex}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{item.dominantColorName}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            {item.h1}
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            {item.shortDescription}
          </p>
        </header>

        {/* Live Canvas Preview */}
        <div
          ref={screenRef}
          style={{ background: item.cssBackground }}
          className={cn(
            'relative aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-sm flex items-center justify-center transition-all',
            isFullscreen && 'fixed inset-0 z-50 rounded-none border-0 aspect-auto h-screen',
          )}
        >
          {isFullscreen ? (
            <button
              type="button"
              onClick={exitFullscreen}
              className="absolute top-4 right-4 rounded-full bg-black/60 p-2.5 text-white hover:bg-black/80 transition-colors shadow-lg cursor-pointer"
              aria-label="Exit fullscreen"
            >
              <X className="size-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={enterFullscreen}
              className="inline-flex items-center gap-2 rounded-full bg-black/50 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs hover:bg-black/70 transition-colors shadow-md cursor-pointer"
            >
              <Maximize className="size-4" />
              <span>Open Fullscreen (F)</span>
            </button>
          )}

          <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 font-mono text-xs text-white backdrop-blur-xs">
            {item.primaryHex}
          </span>
        </div>

        {/* Resolution Preset Downloads Grid */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs space-y-6">
          <div>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                <Download className="size-4 text-primary" />
                <span>Export High-Resolution PNG</span>
              </h2>
              <span className="text-xs font-mono text-muted-foreground">Lossless Client-Side PNG</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Generate pixel-perfect image files in standard desktop, mobile, and cinema resolutions. Rendered in lossless 24-bit PNG.
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-4">
            {[
              { label: '1080p Full HD', dims: '1920 × 1080', w: 1920, h: 1080, tag: 'Desktop' },
              { label: '2K Quad HD', dims: '2560 × 1440', w: 2560, h: 1440, tag: 'QHD' },
              { label: '4K Ultra HD', dims: '3840 × 2160', w: 3840, h: 2160, tag: 'UHD' },
              { label: 'Mobile Portrait', dims: '1080 × 2400', w: 1080, h: 2400, tag: 'Smartphone' },
            ].map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => handleDownload(p.w, p.h)}
                disabled={isDownloading}
                className="flex flex-col justify-between rounded-xl border border-border p-3 text-left hover:border-primary/50 hover:bg-accent transition-all cursor-pointer shadow-2xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs sm:text-sm text-foreground">{p.label}</span>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono text-[11px]">{p.dims}</span>
                  <Download className="size-3.5 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </button>
            ))}
          </div>

          {/* Custom Dimension Bar */}
          <div className="flex flex-wrap items-end gap-3 pt-4 border-t border-border/50 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="flex flex-col gap-1">
                <label htmlFor="bg-w" className="text-[11px] font-medium text-muted-foreground">
                  Custom Width (px)
                </label>
                <input
                  id="bg-w"
                  type="number"
                  min={1}
                  max={8192}
                  value={width}
                  onChange={(e) => setWidth(Math.min(8192, Math.max(1, parseInt(e.target.value, 10) || 1)))}
                  className="h-9 w-24 rounded-lg border bg-background px-2.5 font-mono text-xs"
                />
              </div>
              <span className="pt-4 text-muted-foreground">×</span>
              <div className="flex flex-col gap-1">
                <label htmlFor="bg-h" className="text-[11px] font-medium text-muted-foreground">
                  Custom Height (px)
                </label>
                <input
                  id="bg-h"
                  type="number"
                  min={1}
                  max={8192}
                  value={height}
                  onChange={(e) => setHeight(Math.min(8192, Math.max(1, parseInt(e.target.value, 10) || 1)))}
                  className="h-9 w-24 rounded-lg border bg-background px-2.5 font-mono text-xs"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleDownload(width, height)}
              disabled={isDownloading}
              className="h-9 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer shadow-2xs"
            >
              <Download className="size-3.5" />
              <span>{isDownloading ? 'Generating...' : downloadSuccess ? 'Downloaded!' : 'Download Custom'}</span>
            </button>

            <button
              type="button"
              onClick={copyCss}
              className="h-9 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 font-medium text-foreground hover:bg-accent transition-colors cursor-pointer shadow-2xs ml-auto"
            >
              {isCopied ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
              <span>{isCopied ? 'CSS Copied!' : 'Copy CSS'}</span>
            </button>
          </div>
        </div>

        {/* Section 1: About This Background */}
        <section className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
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
    </article>
  )
}
