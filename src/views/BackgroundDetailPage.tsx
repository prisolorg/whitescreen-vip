'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Download, X, Check, ChevronRight, Copy } from 'lucide-react'
import { ToolWithAds } from '@/components/tool-ads'
import { paintBackground } from '@/lib/background-paint'
import { isLightColor } from '@/lib/screen-colors'
import { DoubleTapHint, STAGE_SIZE, StageDock, StageTitle } from '@/components/screen-stage/stage-parts'
import { useTranslation } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { BackgroundToolProps } from '@/lib/article-i18n/background-props'

/** The interactive part of a background page: preview, downloads and next links. The article below it is static (BackgroundBody). */
export function BackgroundDetailPage({ item, more, categories, text }: BackgroundToolProps) {
  const { t } = useTranslation()
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

  const SIZES = [
    { id: '1080p', label: '1080p · 1920×1080', w: 1920, h: 1080 },
    { id: '2k', label: '2K · 2560×1440', w: 2560, h: 1440 },
    { id: '4k', label: '4K · 3840×2160', w: 3840, h: 2160 },
    { id: 'phone', label: text.sizePhone, w: 1080, h: 2400 },
    { id: 'custom', label: text.sizeCustom, w: width, h: height },
  ]
  const size = SIZES.find((option) => option.id === sizeId) ?? SIZES[2]
  const tone = isLightColor(item.primaryHex) ? 'light' : 'dark'

  return (
    <div className="bg-background pt-3 sm:pt-4">
      {/* Same layout as the screen pages: breadcrumbs, the preview with its title, a control dock,
          then more backgrounds, so the tool and the next links are above the fold. */}
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t('homeTitle', 'White Screen')}
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <Link href="/backgrounds" className="hover:text-foreground transition-colors">
            {t('backgrounds', 'Backgrounds')}
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <Link href={`/backgrounds?category=${item.category}`} className="hover:text-foreground transition-colors">
            {item.categoryLabel}
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
          <span className="truncate font-medium text-foreground">{item.title}</span>
        </nav>

        <ToolWithAds>
        <div className="relative">
          <div
            ref={screenRef}
            role="region"
            aria-label={text.preview.replace('{title}', item.title)}
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
                aria-label={text.exitFullscreen}
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
                {text.imageSize}
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
                    {text.width}
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
                    {text.height}
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
                <span>{isDownloading ? text.generating : downloadSuccess ? text.downloaded : text.downloadPng}</span>
              </button>
              <button
                type="button"
                onClick={copyCss}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                {isCopied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
                <span>{isCopied ? text.cssCopied : text.copyCss}</span>
              </button>
            </div>
          </StageDock>
        )}
        </ToolWithAds>

        <section aria-labelledby="more-backgrounds" className="mt-2 flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <h2 id="more-backgrounds" className="text-base font-bold tracking-tight sm:text-lg">
              {text.moreBackgrounds}
            </h2>
            <Link href="/backgrounds" className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
              {text.allBackgroundsLink}
            </Link>
          </div>
          <nav aria-label={text.categoriesLabel} className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
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
            {more.map((bg) => (
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

    </div>
  )
}
