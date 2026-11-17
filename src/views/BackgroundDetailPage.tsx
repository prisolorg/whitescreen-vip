'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { signalToolUsed, useSignalOnFullscreenExit } from '@/lib/ratings'
import Link from 'next/link'
import { Download, X, Check, ChevronDown, ChevronRight, Copy, Maximize } from 'lucide-react'
import { InlineAd, RailAd, ToolWithAds } from '@/components/tool-ads'
import { RatingRow, ToolRatingPrompt } from '@/components/tool-rating'
import { STUDIO_BACKGROUND_PAGES } from '@/lib/studio-layout'
import { tx } from '@/lib/tx'
import { BACKGROUND_SUBTITLE_EN, localizedBackgroundSubtitle } from '@/lib/subtitles'
import { paintBackground } from '@/lib/background-paint'
import { BACKGROUND_SHADES, shadeCss, shadeSwatch } from '@/lib/background-shades'
import { isLightColor } from '@/lib/screen-colors'
import { DoubleTapHint, STAGE_SIZE, STUDIO_BAND, TOOL_FIXED_WIDTH, TOOL_STAGE_FIXED, StageDock, StageTitle } from '@/components/screen-stage/stage-parts'
import { useTranslation } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { BackgroundToolProps } from '@/lib/article-i18n/background-props'

/** The interactive part of a background page: preview, downloads and next links. The article below it is static (BackgroundBody). */
export function BackgroundDetailPage({ item, more, categories, text }: BackgroundToolProps) {
  const { t, language } = useTranslation()
  const [isFullscreen, setIsFullscreen] = useState(false)
  useSignalOnFullscreenExit(isFullscreen)
  const [isCopied, setIsCopied] = useState(false)
  const [width, setWidth] = useState(1920)
  const [height, setHeight] = useState(1080)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const [downloadMenu, setDownloadMenu] = useState(false)
  // Shade menu (solid pages) or Style menu (gradients, patterns). The first entry is the page's own color, shown exactly as before.
  const shades = BACKGROUND_SHADES[item.slug]
  const [shadeIndex, setShadeIndex] = useState(0)
  const shade = shades?.[shadeIndex]
  const isDefault = !shade || shadeIndex === 0
  const cssBackground = isDefault ? item.cssBackground : shadeCss(item.slug, shade)
  const paintItem = isDefault ? item : { ...item, primaryHex: shade.hex, secondaryHex: shade.secondary, accentHex: shade.accent }
  const shadeLabel = item.type === 'solid' ? tx('Shade') : tx('Style')
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

      paintBackground(ctx, paintItem, customW, customH)

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setIsDownloading(false)
            return
          }
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `${isDefault ? item.slug : shade.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${customW}x${customH}.png`
          document.body.appendChild(link)
          link.click()
          signalToolUsed()
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
      await navigator.clipboard.writeText(`background: ${cssBackground};`)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch {}
  }

  const SIZES = [
    { id: '1080p', label: '1080p', w: 1920, h: 1080 },
    { id: '2k', label: '2K', w: 2560, h: 1440 },
    { id: '4k', label: '4K', w: 3840, h: 2160 },
    { id: 'phone', label: text.sizePhone.split(' · ')[0], w: 1080, h: 2400 },
  ]
  const tone = isLightColor(paintItem.primaryHex) ? 'light' : 'dark'

  const studio = STUDIO_BACKGROUND_PAGES

  return (
    <div className={cn('bg-background', !studio && 'pt-3 sm:pt-4')}>
      {/* Same layout as the screen pages: breadcrumbs, the preview with its title, a control dock,
          then more backgrounds, so the tool and the next links are above the fold. */}
      <div data-wide-page={studio ? '' : undefined} className={cn('mx-auto flex flex-col gap-3 px-3 sm:px-6', studio ? 'max-w-[1316px]' : 'max-w-7xl')}>
        {!studio && (
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
        )}

        <StudioFrame studio={studio} title={item.title} subtitle={language === 'en' ? BACKGROUND_SUBTITLE_EN[item.slug] : localizedBackgroundSubtitle(language, item.slug)}>
        <div className="relative">
          <div
            ref={screenRef}
            role="region"
            aria-label={text.preview.replace('{title}', item.title)}
            onDoubleClick={() => void (isFullscreen ? exitFullscreen() : enterFullscreen())}
            style={{ background: cssBackground }}
            className={cn(
              'relative touch-manipulation select-none overflow-hidden',
              isFullscreen ? 'fixed inset-0 z-50 h-dvh w-full' : studio ? TOOL_STAGE_FIXED : STAGE_SIZE,
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
              <>
                <DoubleTapHint tone={tone} />
                {studio && (
                  <button
                    type="button"
                    onClick={enterFullscreen}
                    aria-label={t('fullscreen', 'Fullscreen')}
                    className={cn(
                      'absolute bottom-3 right-3 inline-flex size-11 items-center justify-center rounded-xl ring-1 backdrop-blur transition-colors',
                      tone === 'light' ? 'bg-black/5 text-neutral-900 ring-black/15 hover:bg-black/10' : 'bg-white/10 text-white ring-white/25 hover:bg-white/20',
                    )}
                  >
                    <Maximize className="size-5" aria-hidden="true" />
                  </button>
                )}
              </>
            )}
          </div>
          {!isFullscreen && !studio && (
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
                  {paintItem.primaryHex}
                </span>
              }
            />
          )}
        </div>

        {!isFullscreen && (
          <BackgroundDock studio={studio} onFullscreen={enterFullscreen}>
            {/* One line on every device: Shade (when the page has shades), Copy CSS, Download with its size menu, and
                Fullscreen from tablets up (phones use the stage icon or double-tap). */}
            <div className="flex w-full items-center gap-2">
              {shades && (
                <MenuField
                  id="bg-shade"
                  label={shadeLabel}
                  value={String(shadeIndex)}
                  onChange={(value) => setShadeIndex(Number(value))}
                  display={
                    <>
                      <span aria-hidden="true" className="size-4 shrink-0 rounded-full ring-1 ring-black/15 dark:ring-white/25" style={{ background: shadeSwatch(item.slug, shade ?? shades[0]) }} />
                      <span className="truncate">{tx(shade?.name ?? '')}</span>
                    </>
                  }
                >
                  {shades.map((option, i) => (
                    <option key={option.name} value={i}>
                      {item.type === 'solid' ? `${tx(option.name)} · ${option.hex}` : tx(option.name)}
                    </option>
                  ))}
                </MenuField>
              )}
              <button
                type="button"
                onClick={copyCss}
                aria-label={isCopied ? text.cssCopied : text.copyCss}
                className={cn(
                  'inline-flex h-11 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border bg-background text-sm font-medium transition-colors hover:bg-accent',
                  shades ? 'w-11 sm:w-auto sm:px-3' : 'px-3',
                  !shades && 'flex-1 sm:flex-none',
                  !shades && 'sm:ml-auto',
                )}
              >
                {isCopied ? <Check className="size-4 text-emerald-500" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                <span className={shades ? 'hidden sm:inline' : ''}>{isCopied ? text.cssCopied : text.copyCss}</span>
              </button>
              <div className={cn('relative shrink-0', !shades && 'flex-1 sm:flex-none')}>
                <button
                  type="button"
                  onClick={() => setDownloadMenu((open) => !open)}
                  aria-label={text.downloadPng}
                  aria-haspopup="menu"
                  aria-expanded={downloadMenu}
                  disabled={isDownloading}
                  className={cn(
                    'inline-flex h-11 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-3 sm:px-3.5 text-sm font-semibold text-white transition-colors',
                    downloadSuccess ? 'bg-emerald-600' : 'bg-blue-600 hover:bg-blue-700',
                  )}
                >
                  {downloadSuccess ? <Check className="size-4" aria-hidden="true" /> : <Download className="size-4" aria-hidden="true" />}
                  <span className={shades ? 'hidden sm:inline' : ''}>{isDownloading ? text.generating : downloadSuccess ? text.downloaded : text.downloadPng}</span>
                  <ChevronDown className="size-4 opacity-80" aria-hidden="true" />
                </button>
                {downloadMenu && (
                  <BackgroundSizeMenu
                    label={text.imageSize}
                    sizes={SIZES}
                    custom={{ w: width, h: height }}
                    customLabel={text.sizeCustom}
                    widthLabel={text.width}
                    heightLabel={text.height}
                    onPick={(w, h) => {
                      setDownloadMenu(false)
                      setWidth(w)
                      setHeight(h)
                      handleDownload(w, h)
                    }}
                    onClose={() => setDownloadMenu(false)}
                  />
                )}
              </div>
              {studio && (
                <button
                  type="button"
                  onClick={enterFullscreen}
                  className="hidden h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-foreground px-4 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:inline-flex"
                >
                  <Maximize className="size-4" aria-hidden="true" />
                  {t('fullscreen', 'Fullscreen')}
                </button>
              )}
            </div>
          </BackgroundDock>
        )}
        </StudioFrame>

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
                  className={cn(
                    'group flex h-full flex-col transition-all',
                    studio ? 'gap-2 rounded-xl' : 'gap-1.5 rounded-xl border bg-card p-1.5 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-md',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'w-full ring-1 ring-inset ring-black/10',
                      studio ? 'aspect-video rounded-xl shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:shadow-md' : 'h-12 rounded-lg sm:h-14',
                    )}
                    style={{ background: bg.cssBackground }}
                  />
                  <span className={cn('line-clamp-2 text-xs font-semibold leading-snug sm:text-[13px]', studio ? 'px-0.5' : 'px-1 pb-0.5')}>{bg.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        {/* Studio layout: the first ad on desktop and tablet comes after the related backgrounds. */}
        {studio && <InlineAd className="mt-4 hidden md:flex" />}
      </div>

    </div>
  )
}

/** Studio layout: band, centered title and one actionable line above the stage; classic: the old ad column. */
function StudioFrame({ studio, title, subtitle, children }: { studio: boolean; title: string; subtitle?: string; children: React.ReactNode }) {
  if (!studio) return <ToolWithAds>{children}</ToolWithAds>
  // Same as the colour and tool pages: tool on the left at the fixed size, 300×600 ad beside it on desktop.
  return (
    <div className={cn('grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]', STUDIO_BAND)}>
      <div className="flex min-w-0 flex-col gap-3">
        <header className="flex flex-col items-center gap-1 text-center">
          <h1 id="screen-heading" className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
            {title}
          </h1>
          <p className="text-pretty text-[13px] text-foreground/80 sm:text-[15px]">{subtitle || tx('Click Fullscreen to show this background.')}</p>
        </header>
        {children}
        <RatingRow className={cn('mx-auto w-full', TOOL_FIXED_WIDTH)} />
        <ToolRatingPrompt />
      </div>
      <RailAd />
    </div>
  )
}

/** Studio: the card under the stage (menus, then Copy CSS, Download and Fullscreen); classic: the old dock. */
function BackgroundDock({ studio, onFullscreen, children }: { studio: boolean; onFullscreen: () => void; children: React.ReactNode }) {
  if (!studio) return <StageDock onFullscreen={onFullscreen}>{children}</StageDock>
  return (
    <div className={cn('mx-auto w-full rounded-2xl bg-card px-3 py-2.5 text-card-foreground shadow-sm ring-1 ring-black/5 sm:px-4 sm:py-3 dark:ring-white/10', TOOL_FIXED_WIDTH)}>
      {children}
    </div>
  )
}

/**
 * A menu that stays readable at any width: a small caption over the chosen value, with the native select laid invisibly on
 * top so tapping opens the phone's own picker and the keyboard works as usual.
 */
function MenuField({ id, label, value, onChange, display, children }: { id: string; label: string; value: string; onChange: (value: string) => void; display: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative min-w-0 flex-1 rounded-xl border bg-background transition-colors hover:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring">
      <div aria-hidden="true" className="pointer-events-none flex h-11 flex-col justify-center pl-3 pr-8 leading-tight">
        <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
        <span className="flex min-w-0 items-center gap-1.5 text-sm font-semibold">{display}</span>
      </div>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <select id={id} aria-label={label} value={value} onChange={(e) => onChange(e.target.value)} className="absolute inset-0 size-full cursor-pointer appearance-none rounded-xl opacity-0">
        {children}
      </select>
    </div>
  )
}

/** The Download button's menu, same pattern as the screen tools: preset sizes, then a custom width × height. */
function BackgroundSizeMenu({ label, sizes, custom, customLabel, widthLabel, heightLabel, onPick, onClose }: {
  label: string
  sizes: { id: string; label: string; w: number; h: number }[]
  custom: { w: number; h: number }
  customLabel: string
  widthLabel: string
  heightLabel: string
  onPick: (w: number, h: number) => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(custom)
  const clamp = (n: number) => Math.min(8192, Math.max(1, Math.round(n) || 1))

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      // Clicks on the Download button toggle the menu there; anything else outside closes it.
      if (!ref.current?.parentElement?.contains(event.target as Node)) onClose()
    }
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('pointerdown', onPointer)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      ref={ref}
      role="menu"
      aria-label={label}
      className="absolute bottom-full right-0 z-40 mb-2 flex w-64 flex-col gap-0.5 rounded-2xl border bg-popover p-2 text-popover-foreground shadow-2xl"
    >
      <span className="px-2.5 pb-1 pt-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      {sizes.map((item) => (
        <button
          key={item.id}
          type="button"
          role="menuitem"
          onClick={() => onPick(item.w, item.h)}
          className="flex h-10 items-center justify-between rounded-lg px-2.5 text-sm hover:bg-accent"
        >
          <span className="font-semibold">{item.label}</span>
          <span className="font-mono text-xs text-muted-foreground">
            {item.w}×{item.h}
          </span>
        </button>
      ))}
      <form
        className="mt-1 flex flex-col gap-2 border-t px-1.5 pb-0.5 pt-2.5"
        onSubmit={(event) => {
          event.preventDefault()
          onPick(clamp(size.w), clamp(size.h))
        }}
      >
        <div className="flex items-end gap-1.5">
          <label className="flex min-w-0 flex-1 flex-col gap-0.5 text-[10px] font-medium text-muted-foreground">
            {widthLabel}
            <input type="number" min={1} max={8192} value={size.w} onChange={(e) => setSize((c) => ({ ...c, w: Number(e.target.value) || 0 }))} className="h-9 w-full min-w-0 rounded-md border bg-background px-2 font-mono text-xs text-foreground" />
          </label>
          <span className="pb-2 text-muted-foreground">×</span>
          <label className="flex min-w-0 flex-1 flex-col gap-0.5 text-[10px] font-medium text-muted-foreground">
            {heightLabel}
            <input type="number" min={1} max={8192} value={size.h} onChange={(e) => setSize((c) => ({ ...c, h: Number(e.target.value) || 0 }))} className="h-9 w-full min-w-0 rounded-md border bg-background px-2 font-mono text-xs text-foreground" />
          </label>
        </div>
        <button type="submit" className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-md bg-foreground px-2.5 text-xs font-semibold text-background">
          <Download className="size-3.5" aria-hidden="true" />
          {customLabel}
        </button>
      </form>
    </div>
  )
}
