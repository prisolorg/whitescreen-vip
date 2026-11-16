'use client'

/**
 * Studio layout (layout test pages only, see src/lib/studio-layout.ts): centered title above a
 * full-width preview, one controls card under it, working preset modes, keep-awake, brightness and
 * color temperature, and no ads in the first viewport. Other pages keep HomeTool / ScreenTool.
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { AlertCircle, Check, ChevronDown, Coffee, Download, Sun, Image as ImageIcon, Lamp, Maximize, RefreshCw, ScanSearch, Sliders, Sparkles, Trash2, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { tx } from '@/lib/tx'
import { SCREEN_COLORS, isLightColor } from '@/lib/screen-colors'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedPath } from '@/lib/locale-routing'
import { localizedToolName } from '@/lib/localized-tools'
import { signalToolUsed, useSignalOnFullscreenExit } from '@/lib/ratings'
import { CustomColorPicker } from '@/components/screen-tool/custom-color-picker'
import { RESOLUTION_PRESETS, MAX_DIM, MIN_DIM } from '@/components/home/home-tool'
import { RatingRow, ToolRatingPrompt } from '@/components/tool-rating'
import { RailAd } from '@/components/tool-ads'
import { TOOL_SUBTITLE_EN, localizedSubtitle } from '@/lib/subtitles'

type FullscreenDocument = Document & { webkitFullscreenElement?: Element | null; webkitExitFullscreen?: () => Promise<void> | void }
type FullscreenElement = HTMLElement & { webkitRequestFullscreen?: () => Promise<void> | void }
type Mode = 'normal' | 'zoom' | 'clean' | 'pixel'

const getFullscreenElement = () => {
  const doc = document as FullscreenDocument
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null
}

/** Ad C tile width: six equal columns (5 screens + Download) with 10px gaps; phones scroll sooner (64px minimum). */
const RAIL_TILE = 'w-[calc((100%-50px)/6)] min-w-[64px]'

/** Colors the Dead Pixel Test cycles through on each click (in place, no page change). */
const PIXEL_TEST_COLORS = ['#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF']
const NEUTRAL_K = 6500
const QUICK_SIZES = ['1080p', '4k', '8k']

function kelvinToRgb(kelvin: number) {
  const temp = kelvin / 100
  const r = temp <= 66 ? 255 : 329.698727446 * Math.pow(temp - 60, -0.1332047592)
  const g = temp <= 66 ? 99.4708025861 * Math.log(temp) - 161.1195681661 : 288.1221695283 * Math.pow(temp - 60, -0.0755148492)
  const b = temp >= 66 ? 255 : temp <= 19 ? 0 : 138.5177312231 * Math.log(temp - 10) - 305.0447927307
  const clamp = (v: number) => Math.min(255, Math.max(0, v))
  return { r: clamp(r), g: clamp(g), b: clamp(b) }
}

/** The color actually shown: the base color tinted by the white point (temperature) and scaled by brightness. */
function shownColor(hex: string, kelvin: number, brightness: number) {
  const base = { r: parseInt(hex.slice(1, 3), 16), g: parseInt(hex.slice(3, 5), 16), b: parseInt(hex.slice(5, 7), 16) }
  const tint = kelvin === NEUTRAL_K ? { r: 255, g: 255, b: 255 } : kelvinToRgb(kelvin)
  const k = brightness / 100
  const mix = (c: number, w: number) => Math.round(((c * w) / 255) * k)
  return `rgb(${mix(base.r, tint.r)}, ${mix(base.g, tint.g)}, ${mix(base.b, tint.b)})`
}

/**
 * `focus`: the current test design (all studio pages): a bigger preview placed higher, one actionable
 * subtitle line, 16:9 color thumbnails, and only Download PNG + Fullscreen. Without it: the first iteration.
 */
export function ScreenStudio({
  initialColorId = 'white',
  title,
  focus = false,
  rail = false,
  grown = false,
}: {
  initialColorId?: string
  title: string
  focus?: boolean
  /** "Ad C" layout (White Screen first): tool on the left with a sticky 300×600 ad beside it, clean preview, size menu. */
  rail?: boolean
  /** Layout B (trial on White Screen): taller screen cap and a one-row control bar; the page gives it a wider column. */
  grown?: boolean
}) {
  // Same width for the preview, controls card and rating row (full literal classes so Tailwind keeps them).
  const boxWidth = rail ? (grown ? 'max-w-[min(100%,calc(59vh*16/9))]' : 'max-w-[min(100%,calc(56vh*16/9))]') : focus ? 'max-w-[min(1024px,calc(58vh*16/9))]' : 'max-w-[min(854px,calc(52vh*16/9))]'
  const { t, language } = useTranslation()
  const [selectedId, setSelectedId] = useState(initialColorId)
  const [customHex, setCustomHex] = useState('#F5F5F0')
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isNative, setIsNative] = useState(false)
  const [isFallback, setIsFallback] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)
  const [mode, setMode] = useState<Mode>('normal')
  const [pixelIndex, setPixelIndex] = useState(0)
  const [brightness, setBrightness] = useState(100)
  const [kelvin, setKelvin] = useState(NEUTRAL_K)
  const [applyToExport, setApplyToExport] = useState(false)
  const [width, setWidth] = useState(1920)
  const [height, setHeight] = useState(1080)
  const [format, setFormat] = useState<'png' | 'jpeg'>('png')
  const [panel, setPanel] = useState<'none' | 'sizes' | 'tone'>('none')
  const [moreOpen, setMoreOpen] = useState(false)
  const [keepAwake, setKeepAwake] = useState(false)
  const [wakeSupported, setWakeSupported] = useState(true)
  const [downloadState, setDownloadState] = useState<'idle' | 'busy' | 'done'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const screenRef = useRef<HTMLDivElement>(null)
  const swatchRowRef = useRef<HTMLDivElement>(null)
  const [downloadMenu, setDownloadMenu] = useState(false)
  const [swatchScroll, setSwatchScroll] = useState({ left: false, right: false })
  const hintTimer = useRef<number | undefined>(undefined)

  const isFullscreen = isNative || isFallback
  useSignalOnFullscreenExit(isFullscreen)
  const preset = SCREEN_COLORS.find((color) => color.id === selectedId)
  // Preset modes show their own look and leave the visitor's saved color, brightness and tone untouched.
  const inMode = isFullscreen && mode !== 'normal'
  const baseHex = inMode && mode === 'pixel' ? PIXEL_TEST_COLORS[pixelIndex] : inMode ? '#FFFFFF' : preset ? preset.hex : customHex
  const shownKelvin = inMode ? (mode === 'zoom' ? 3500 : NEUTRAL_K) : kelvin
  const shownBrightness = inMode ? 100 : brightness
  const background = uploadedImage && !inMode ? '#000000' : shownColor(baseHex, shownKelvin, shownBrightness)
  const isLight = uploadedImage && !inMode ? false : isLightColor(baseHex) && shownBrightness > 55
  const activeSize = RESOLUTION_PRESETS.find((p) => p.width === width && p.height === height)
  const formatLabel = format === 'png' ? tx('PNG') : tx('JPG')
  const chipTone = isLight ? 'bg-black/5 text-neutral-900 ring-black/15 hover:bg-black/10' : 'bg-white/10 text-white ring-white/25 hover:bg-white/20'

  useEffect(() => setWakeSupported('wakeLock' in navigator), [])

  const revealHint = useCallback(() => {
    setHintVisible(true)
    window.clearTimeout(hintTimer.current)
    hintTimer.current = window.setTimeout(() => setHintVisible(false), 2500)
  }, [])

  const enterFullscreen = useCallback(async () => {
    const element = screenRef.current as FullscreenElement | null
    if (!element) return
    try {
      if (element.requestFullscreen) await element.requestFullscreen({ navigationUI: 'hide' })
      else if (element.webkitRequestFullscreen) await element.webkitRequestFullscreen()
      else setIsFallback(true)
    } catch {
      setIsFallback(true)
    }
    revealHint()
  }, [revealHint])

  const exitFullscreen = useCallback(async () => {
    setIsFallback(false)
    if (!getFullscreenElement()) return
    const doc = document as FullscreenDocument
    try {
      if (doc.exitFullscreen) await doc.exitFullscreen()
      else await doc.webkitExitFullscreen?.()
    } catch {
      // The browser already left fullscreen.
    }
  }, [])

  // Leaving fullscreen ends any preset mode (tone settings stay as chosen).
  useEffect(() => {
    if (!isFullscreen) setMode('normal')
  }, [isFullscreen])

  useEffect(() => {
    const onChange = () => setIsNative(getFullscreenElement() === screenRef.current)
    document.addEventListener('fullscreenchange', onChange)
    document.addEventListener('webkitfullscreenchange', onChange)
    return () => {
      document.removeEventListener('fullscreenchange', onChange)
      document.removeEventListener('webkitfullscreenchange', onChange)
    }
  }, [])

  const clearImage = useCallback(() => {
    setUploadedImage((current) => {
      if (current) URL.revokeObjectURL(current)
      return null
    })
  }, [])

  // Every color except white has its own page, so picking one opens it; in fullscreen it switches in place.
  const goToColor = useCallback(
    (id: string) => {
      const color = SCREEN_COLORS.find((item) => item.id === id)
      if (!color) return
      clearImage()
      if (isFullscreen || color.id === selectedId) {
        setSelectedId(color.id)
        return
      }
      window.location.assign(getLocalizedPath(color.path, language))
    },
    [clearImage, isFullscreen, language, selectedId],
  )

  const cycle = useCallback(
    (direction: 1 | -1) => {
      if (mode === 'pixel') {
        setPixelIndex((i) => (i + direction + PIXEL_TEST_COLORS.length) % PIXEL_TEST_COLORS.length)
        return
      }
      const index = Math.max(0, SCREEN_COLORS.findIndex((color) => color.id === selectedId))
      goToColor(SCREEN_COLORS[(index + direction + SCREEN_COLORS.length) % SCREEN_COLORS.length].id)
    },
    [goToColor, mode, selectedId],
  )

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as Element | null)?.closest?.('input, textarea, select, [contenteditable="true"]')) return
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (event.key === 'f' || event.key === 'F') {
        event.preventDefault()
        void (isFullscreen ? exitFullscreen() : enterFullscreen())
      } else if (event.key === 'Escape' && isFallback) {
        setIsFallback(false)
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault()
        cycle(event.key === 'ArrowRight' ? 1 : -1)
        if (isFullscreen && mode !== 'clean') revealHint()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cycle, enterFullscreen, exitFullscreen, isFallback, isFullscreen, mode, revealHint])

  // Screen wake lock: always while fullscreen, and outside it when "Keep screen awake" is on.
  useEffect(() => {
    if (!(isFullscreen || keepAwake) || !('wakeLock' in navigator)) return
    let sentinel: WakeLockSentinel | null = null
    let cancelled = false
    const acquire = () => {
      if (document.visibilityState !== 'visible') return
      navigator.wakeLock
        .request('screen')
        .then((lock) => {
          if (cancelled) void lock.release()
          else sentinel = lock
        })
        .catch(() => {})
    }
    acquire()
    // The browser drops the lock when the tab is hidden; take it again on return.
    document.addEventListener('visibilitychange', acquire)
    return () => {
      cancelled = true
      document.removeEventListener('visibilitychange', acquire)
      void sentinel?.release()
    }
  }, [isFullscreen, keepAwake])

  useEffect(() => {
    if (!isFallback) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isFallback])

  // Zoom Light: warm white at full brightness (the video-call light). Clean Screen: plain white, no cursor or
  // hints. Dead Pixel Test: each click shows the next test color. All three run in fullscreen and end with it.
  const startMode = (next: Mode) => {
    if (next === 'pixel') setPixelIndex(0)
    setMode(next)
    void enterFullscreen()
  }

  const handleDownload = (size?: { w: number; h: number }) => {
    if (downloadState === 'busy') return
    // Focus layout has no size picker: the image matches the visitor's own screen (physical pixels).
    const ratio = window.devicePixelRatio || 1
    const w = Math.min(MAX_DIM, Math.max(MIN_DIM, size?.w ?? (focus ? Math.round(window.screen.width * ratio) : width || 1920)))
    const h = Math.min(MAX_DIM, Math.max(MIN_DIM, size?.h ?? (focus ? Math.round(window.screen.height * ratio) : height || 1080)))
    setDownloadState('busy')
    setErrorMsg(null)
    const slug = uploadedImage ? 'image' : preset ? preset.id : 'custom'
    const finish = (canvas: HTMLCanvasElement) =>
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setErrorMsg(t('errMemory', 'Memory error: could not create the image. Try smaller dimensions.'))
            setDownloadState('idle')
            return
          }
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `${slug}-screen-${w}x${h}.${format === 'png' ? 'png' : 'jpg'}`
          document.body.appendChild(link)
          link.click()
          link.remove()
          signalToolUsed()
          window.setTimeout(() => URL.revokeObjectURL(url), 1500)
          setDownloadState('done')
          window.setTimeout(() => setDownloadState('idle'), 2500)
        },
        format === 'png' ? 'image/png' : 'image/jpeg',
        0.95,
      )
    try {
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('no canvas')
      if (uploadedImage) {
        const img = new Image()
        img.onload = () => {
          const scale = Math.min(w / img.naturalWidth, h / img.naturalHeight)
          ctx.fillStyle = '#000000'
          ctx.fillRect(0, 0, w, h)
          ctx.drawImage(img, (w - img.naturalWidth * scale) / 2, (h - img.naturalHeight * scale) / 2, img.naturalWidth * scale, img.naturalHeight * scale)
          finish(canvas)
        }
        img.src = uploadedImage
        return
      }
      ctx.fillStyle = applyToExport || rail ? shownColor(baseHex, kelvin, brightness) : baseHex
      ctx.fillRect(0, 0, w, h)
      finish(canvas)
    } catch {
      setErrorMsg(t('errGeneration', 'Image generation error. For 8K on mobile, try 4K or 1080p.'))
      setDownloadState('idle')
    }
  }

  const pickSize = (id: string) => {
    const size = RESOLUTION_PRESETS.find((p) => p.id === id)
    if (!size) return
    setWidth(size.width)
    setHeight(size.height)
    setErrorMsg(null)
  }

  // Studio focus: Black, Red, Blue, Green first, then the rest (the current color stays in the row, marked).
  const FIRST_COLORS = rail ? ['white', 'black', 'red', 'blue', 'green'] : ['black', 'red', 'blue', 'green']
  const swatchColors = rail
    ? [...FIRST_COLORS.map((id) => SCREEN_COLORS.find((c) => c.id === id)!), ...SCREEN_COLORS.filter((c) => !FIRST_COLORS.includes(c.id))]
    : focus
    ? [...FIRST_COLORS.map((id) => SCREEN_COLORS.find((c) => c.id === id)!), ...SCREEN_COLORS.filter((c) => !FIRST_COLORS.includes(c.id) && c.id !== 'white'), SCREEN_COLORS[0]]
    : SCREEN_COLORS

  const updateSwatchScroll = useCallback(() => {
    const row = swatchRowRef.current
    if (!row) return
    const left = row.scrollLeft > 4
    const right = row.scrollLeft + row.clientWidth < row.scrollWidth - 4
    setSwatchScroll((prev) => (prev.left === left && prev.right === right ? prev : { left, right }))
  }, [])

  useEffect(() => {
    updateSwatchScroll()
    window.addEventListener('resize', updateSwatchScroll)
    return () => window.removeEventListener('resize', updateSwatchScroll)
  }, [updateSwatchScroll, isFullscreen])

  const presetButtons = (className: string) => (
    <div role="group" aria-label={tx('Preset modes')} className={className}>
      {(
        [
          ['zoom', tx('Zoom Light'), Lamp],
          ['clean', tx('Clean Screen'), Sparkles],
          ['pixel', tx('Dead Pixel Test'), ScanSearch],
        ] as const
      ).map(([id, label, Icon]) => (
        <button
          key={id}
          type="button"
          onClick={() => startMode(id)}
          className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border bg-background px-3.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
          {label}
        </button>
      ))}
    </div>
  )

  const sizeControls = (
    <>
      <button
        type="button"
        aria-expanded={panel === 'sizes'}
        aria-controls="studio-sizes"
        onClick={() => setPanel((p) => (p === 'sizes' ? 'none' : 'sizes'))}
        className="inline-flex h-11 items-center justify-center gap-1 rounded-xl border bg-background px-3 text-sm font-semibold transition-colors hover:bg-accent"
      >
        {tx('Size: {size}').replace('{size}', activeSize ? tx(activeSize.shortLabel) : `${width}×${height}`)} <span aria-hidden="true">▾</span>
      </button>
      <div className="hidden items-center gap-1.5 lg:flex">
        {QUICK_SIZES.map((id) => {
          const size = RESOLUTION_PRESETS.find((p) => p.id === id)!
          const on = activeSize?.id === id
          return (
            <button
              key={id}
              type="button"
              aria-pressed={on}
              onClick={() => pickSize(id)}
              className={cn('h-9 rounded-full border px-3 text-sm font-medium transition-colors', on ? 'border-foreground bg-foreground text-background' : 'bg-background hover:bg-accent')}
            >
              {tx(size.shortLabel)}
            </button>
          )
        })}
        <button type="button" onClick={() => setPanel('sizes')} className="px-1 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400">
          {tx('More sizes')}
        </button>
      </div>
    </>
  )

  const hintText =
    mode === 'pixel' ? tx('Click the screen for the next color · Esc to exit') : t('exitHintCycle', 'Press Esc or double-click to exit · ← → to cycle color')

  const body = (
    <>
      <header className="flex flex-col items-center gap-1 text-center">
        <h1 id="screen-heading" className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          {title}
        </h1>
        {focus ? (
          <p className="text-pretty text-[13px] text-foreground/80 sm:text-[15px]">{rail ? ((language === 'en' ? TOOL_SUBTITLE_EN[`${initialColorId}-screen`] : localizedSubtitle(language, `${initialColorId}-screen`)) || tx('Double-tap the screen to go fullscreen.')) : tx('Click Fullscreen to turn your screen {color}.').replace('{color}', t(initialColorId, preset?.name ?? initialColorId).toLocaleLowerCase(language))}</p>
        ) : (
          <>
            <p className="text-pretty text-sm text-foreground/80 sm:text-[15px]">{tx('Go fullscreen in one click, switch colors, or download an image.')}</p>
            <p className="hidden text-[13px] text-muted-foreground sm:block">{tx('Press F for fullscreen · ← → to change color')}</p>
            {presetButtons('mt-2 hidden flex-wrap justify-center gap-2 lg:flex')}
          </>
        )}
      </header>

      <div
        ref={screenRef}
        role="region"
        aria-label={t('screenPreview', '{color} screen preview').replace('{color}', title)}
        onMouseMove={isFullscreen && mode !== 'clean' ? revealHint : undefined}
        onTouchStart={isFullscreen && mode !== 'clean' ? revealHint : undefined}
        onClick={isFullscreen && mode === 'pixel' ? () => cycle(1) : undefined}
        onDoubleClick={mode === 'pixel' && isFullscreen ? undefined : () => void (isFullscreen ? exitFullscreen() : enterFullscreen())}
        style={{ backgroundColor: background }}
        className={cn(
          'relative flex touch-manipulation select-none items-center justify-center overflow-hidden transition-colors duration-150',
          isFullscreen
            ? 'h-full w-full'
            : cn('mx-auto w-full rounded-2xl border', rail ? 'aspect-[4/3] sm:aspect-video' : 'aspect-video', 'border-black/10 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_40px_-12px_rgba(0,0,0,0.28)] dark:border-white/15 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_40px_-12px_rgba(0,0,0,0.7)]', boxWidth),
          isFallback && 'fixed inset-0 z-[100] h-dvh rounded-none border-0',
          isFullscreen && (mode === 'clean' || !hintVisible) && 'cursor-none',
        )}
      >
        {uploadedImage && !inMode && (
          <img
            src={uploadedImage}
            alt={t('uploadedImage', 'Uploaded Image')}
            style={brightness < 100 ? { filter: `brightness(${brightness / 100})` } : undefined}
            className="pointer-events-none absolute inset-0 size-full select-none object-contain"
          />
        )}
        {isFullscreen ? (
          mode !== 'clean' && (
            <div aria-live="polite" className={cn('pointer-events-none absolute inset-x-0 top-4 flex justify-center px-4 transition-opacity duration-300', hintVisible ? 'opacity-100' : 'opacity-0')}>
              <div className={cn('pointer-events-auto flex items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 text-xs shadow-md ring-1 backdrop-blur sm:text-sm', chipTone)}>
                <span>{hintText}</span>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    void exitFullscreen()
                  }}
                  aria-label={t('exitFullscreen', 'Exit fullscreen')}
                  className={cn('inline-flex size-8 items-center justify-center rounded-full ring-1', chipTone)}
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )
        ) : (
          <>
            <span className={cn('pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs ring-1', chipTone)}>
              {t('doubleTapHint', 'Double-tap for fullscreen')}
            </span>
            {(
              <button
                type="button"
                onClick={() => void enterFullscreen()}
                aria-label={t('fullscreen', 'Fullscreen')}
                className={cn(rail && 'lg:hidden', 'absolute bottom-3 right-3 inline-flex size-11 items-center justify-center rounded-xl ring-1 backdrop-blur transition-colors', chipTone)}
              >
                <Maximize className="size-5" aria-hidden="true" />
              </button>
            )}
          </>
        )}
      </div>

      {!isFullscreen && (
        <section aria-label={tx('Screen controls')} className={cn("mx-auto flex w-full flex-col gap-3", !focus && "rounded-2xl border bg-card p-3 text-card-foreground shadow-sm sm:p-4", boxWidth)}>
          <div className={cn("flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-x-3", focus ? "lg:flex-nowrap" : "lg:flex-wrap")}>
            {!rail && (
            /* Phones and tablets: Fullscreen first and full width. Desktop: last in the row. */ 
            <button
              type="button"
              onClick={() => void enterFullscreen()}
              className={cn("inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 lg:w-auto", focus ? "lg:order-3 lg:shrink-0" : "lg:order-1 lg:ml-auto")}
            >
              <Maximize className="size-5" aria-hidden="true" />
              {t('fullscreen', 'Fullscreen')}
            </button>
            )}

            {rail && (
              // Controls 1: the four things people come for: brightness, warmth, keep awake, download (fullscreen is double-tap).
              // Wide bars (layout B) put everything on one row. Otherwise brightness on top, the rest in one row below. On phones it shrinks to two slim rows: slider, then warmth + icon buttons.
              <div className="@container relative min-w-0 rounded-2xl bg-card px-4 py-3 max-sm:px-3 max-sm:py-2.5 text-card-foreground shadow-sm ring-1 ring-black/5 lg:flex-1 dark:ring-white/10">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3 @max-[559px]:gap-x-2 @max-[559px]:gap-y-2.5 @[900px]:flex-nowrap">
                <label className="flex w-full items-center gap-3 text-sm font-semibold @[900px]:w-auto @[900px]:min-w-0 @[900px]:flex-1">
                  <Sun className="size-4 shrink-0" aria-hidden="true" />
                  <span className="@max-[559px]:sr-only">{tx('Brightness')}</span>
                  <input type="range" min={10} max={100} value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} className="min-w-0 flex-1 cursor-pointer accent-foreground" />
                  <span className="w-9 text-right font-mono text-xs text-muted-foreground">{brightness}%</span>
                </label>
                <div role="radiogroup" aria-label={tx('Warmth')} className="flex shrink-0 rounded-xl bg-muted p-1 text-sm font-semibold @max-[559px]:min-w-0 @max-[559px]:flex-1 @max-[559px]:shrink @max-[559px]:text-xs">
                  {(
                    [
                      [t('cool', 'Cool'), 8000],
                      [tx('Neutral'), NEUTRAL_K],
                      [t('warm', 'Warm'), 3500],
                    ] as const
                  ).map(([label, value]) => (
                    <button
                      key={value}
                      type="button"
                      role="radio"
                      aria-checked={kelvin === value}
                      onClick={() => setKelvin(value)}
                      className={cn('h-9 flex-1 rounded-lg px-3 transition-colors @max-[559px]:h-8 @max-[559px]:px-1.5', kelvin === value ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground')}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <label className={cn('flex shrink-0 items-center gap-2 text-sm font-semibold whitespace-nowrap @max-[559px]:size-10 @max-[559px]:justify-center @max-[559px]:rounded-xl @max-[559px]:border @max-[559px]:has-checked:border-emerald-600 @max-[559px]:has-checked:bg-emerald-600 @max-[559px]:has-checked:text-white', wakeSupported ? 'cursor-pointer' : 'cursor-not-allowed opacity-60')} title={wakeSupported ? undefined : tx('Not supported in this browser')}>
                  <input type="checkbox" role="switch" checked={keepAwake} disabled={!wakeSupported} onChange={(event) => setKeepAwake(event.target.checked)} className="size-4 accent-emerald-600 @max-[559px]:sr-only" />
                  <Coffee className="hidden size-4 @max-[559px]:block" aria-hidden="true" />
                  <span className="@max-[559px]:sr-only">{tx('Keep screen awake')}</span>
                </label>
                <button
                  type="button"
                  onClick={() => setDownloadMenu((open) => !open)}
                  aria-haspopup="menu"
                  aria-expanded={downloadMenu}
                  disabled={downloadState === 'busy'}
                  className={cn(
                    'ml-auto inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl border px-3.5 @max-[559px]:ml-0 @max-[559px]:gap-0.5 @max-[559px]:px-2.5 text-sm font-semibold whitespace-nowrap transition-colors',
                    downloadState === 'done' ? 'border-emerald-600 bg-emerald-600 text-white' : 'bg-background hover:bg-accent',
                  )}
                >
                  {downloadState === 'busy' ? <RefreshCw className="size-4 animate-spin" aria-hidden="true" /> : downloadState === 'done' ? <Check className="size-4" aria-hidden="true" /> : <Download className="size-4" aria-hidden="true" />}
                  <span className="@max-[559px]:sr-only">{downloadState === 'done' ? t('downloaded', 'Downloaded!') : tx('Download')}</span>
                  <ChevronDown className="size-4 text-muted-foreground" aria-hidden="true" />
                </button>
                </div>
                {downloadMenu && (
                  <DownloadSizeMenu
                    onPick={(size) => {
                      setDownloadMenu(false)
                      handleDownload(size)
                    }}
                    onClose={() => setDownloadMenu(false)}
                  />
                )}
              </div>
            )}

            {!rail && (
            <div className={cn("relative min-w-0 lg:order-first", focus && "lg:flex-1")}>
              <div
                ref={swatchRowRef}
                role="group"
                aria-label={t('screenColors', 'Screen Colors')}
                onScroll={updateSwatchScroll}
                className={cn(
                  '-mx-1 flex min-w-0 snap-x overflow-x-auto px-1 py-1 pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                  focus ? 'scroll-smooth gap-2.5' : 'items-center gap-1.5 lg:gap-1 lg:pr-1',
                  rail && 'mx-0 pl-1 pr-0',
                )}
              >
                {swatchColors.map((color) => {
                  const selected = selectedId === color.id && !uploadedImage
                  const name = t(color.id, color.name)
                  const label = focus ? localizedToolName(`${color.id}-screen`, language) ?? `${name} ${t('colorScreenSuffix', 'Screen')}` : name
                  return (
                    <a
                      key={color.id}
                      href={getLocalizedPath(color.path, language)}
                      onClick={(event) => {
                        event.preventDefault()
                        goToColor(color.id)
                      }}
                      title={label}
                      aria-current={selected ? 'page' : undefined}
                      className={cn(
                        'group flex shrink-0 snap-start flex-col items-center gap-1 focus-visible:outline-none',
                        // Ad C: five screens (White, Black, Red, Blue, Green) plus the Download tile fill the row; the rest scroll.
                        rail ? RAIL_TILE : focus ? 'w-24' : 'w-12 lg:w-8',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'flex items-center justify-center ring-1 ring-inset ring-black/15 transition-transform group-focus-visible:outline-2 group-focus-visible:outline-offset-2 dark:ring-white/20',
                          // Studio focus: small 16:9 "video" thumbnails; classic: round dots.
                          focus ? 'aspect-video w-full rounded-lg shadow-sm group-hover:-translate-y-0.5' : 'size-9 rounded-full group-hover:scale-110 lg:size-7',
                          selected && 'ring-2 ring-blue-600 ring-offset-2 ring-offset-background',
                        )}
                        style={{ backgroundColor: color.hex }}
                      >
                        {selected && <Check className={cn('size-4', isLightColor(color.hex) ? 'text-black' : 'text-white')} aria-hidden="true" />}
                      </span>
                      <span className={cn('max-w-full text-[11px] font-medium', focus ? 'line-clamp-2 text-center leading-tight' : 'truncate leading-none lg:sr-only', selected ? 'text-foreground' : 'text-muted-foreground')}>{label}</span>
                    </a>
                  )
                })}
              </div>
              {/* The fade says the row scrolls: there are more colors to the right. */}
              <span aria-hidden="true" className={cn("pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l to-transparent", focus ? cn("from-[var(--band)]", !swatchScroll.right && "lg:hidden") : "from-card lg:hidden")} />
            </div>
            )}

            {!focus && presetButtons('-mx-1 flex gap-2 overflow-x-auto px-1 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden')}

            {!rail && (
            <div className={cn("grid gap-2 lg:flex lg:flex-wrap lg:items-center", focus ? "relative grid-cols-1 lg:order-1 lg:ml-auto lg:shrink-0" : "grid-cols-2 lg:order-2")}>
              <button
                type="button"
                onClick={() => (rail ? setDownloadMenu((open) => !open) : handleDownload())}
                aria-haspopup={rail ? 'menu' : undefined}
                aria-expanded={rail ? downloadMenu : undefined}
                disabled={downloadState === 'busy'}
                className={cn(
                  'inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold shadow-sm transition-colors lg:order-last',
                  downloadState === 'done' ? 'bg-emerald-600 text-white' : focus ? 'border bg-background text-foreground shadow-none hover:bg-accent' : 'bg-blue-600 text-white hover:bg-blue-700',
                )}
              >
                {downloadState === 'busy' ? <RefreshCw className="size-4 animate-spin" aria-hidden="true" /> : downloadState === 'done' ? <Check className="size-4" aria-hidden="true" /> : <Download className="size-4" aria-hidden="true" />}
                {downloadState === 'done' ? t('downloaded', 'Downloaded!') : rail ? tx('Download') : t('downloadFormat', 'Download {format}').replace('{format}', formatLabel)}
                {rail && <ChevronDown className="size-4 text-muted-foreground" aria-hidden="true" />}
              </button>
              {!focus && sizeControls}
            </div>
            )}

            <button
              type="button"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((open) => !open)}
              className={cn("hidden h-11 items-center gap-1 rounded-xl border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent lg:order-3 lg:ml-auto", !focus && "lg:inline-flex")}
            >
              {tx('More')} <span aria-hidden="true">▾</span>
            </button>

            {/* Phones and tablets: always shown. Desktop: behind "More". */}
            {!focus && (
            <div
              id={focus ? 'studio-options' : undefined}
              className={cn(
                'flex-wrap items-center gap-2 lg:order-last lg:basis-full',
                focus ? cn('rounded-2xl border bg-card p-3 text-card-foreground', moreOpen ? 'flex' : 'hidden') : moreOpen ? 'flex' : 'flex lg:hidden',
              )}
            >
              {focus && (
                <>
                  {presetButtons('flex basis-full flex-wrap gap-2')}
                  <div className="flex basis-full flex-wrap items-center gap-2">{sizeControls}</div>
                </>
              )}
              <CustomColorPicker
                value={customHex}
                isSelected={!preset && !uploadedImage}
                onChange={(hex) => {
                  clearImage()
                  setCustomHex(hex)
                  setSelectedId('custom')
                }}
                onSelect={() => {
                  clearImage()
                  setSelectedId('custom')
                }}
              />
              <label className="inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-xl border bg-background px-3 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-ring hover:bg-accent" title={t('uploadImage', 'Image')}>
                <ImageIcon className="size-4 text-muted-foreground" aria-hidden="true" />
                <span className="sr-only sm:not-sr-only">{uploadedImage ? t('changeImage', 'Change Image') : t('uploadImage', 'Image')}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(event) => {
                    const file = event.target.files?.[0]
                    if (file) {
                      clearImage()
                      setUploadedImage(URL.createObjectURL(file))
                    }
                    event.target.value = ''
                  }}
                />
              </label>
              {uploadedImage && (
                <button type="button" onClick={clearImage} aria-label={t('removeImage', 'Remove image')} className="inline-flex h-10 items-center rounded-xl border border-destructive/30 bg-destructive/10 px-2.5 text-destructive hover:bg-destructive/20">
                  <Trash2 className="size-4" aria-hidden="true" />
                </button>
              )}
              <button
                type="button"
                aria-expanded={panel === 'tone'}
                aria-controls="studio-tone"
                onClick={() => setPanel((p) => (p === 'tone' ? 'none' : 'tone'))}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                <Sliders className="size-4 text-muted-foreground" aria-hidden="true" />
                {t('brightnessTone', 'Brightness & Tone')}
              </button>
              <label className={cn('inline-flex h-10 items-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium', wakeSupported ? 'cursor-pointer' : 'cursor-not-allowed opacity-60')} title={wakeSupported ? undefined : tx('Not supported in this browser')}>
                <input type="checkbox" role="switch" checked={keepAwake} disabled={!wakeSupported} onChange={(event) => setKeepAwake(event.target.checked)} className="size-4 accent-emerald-600" />
                {tx('Keep screen awake')}
              </label>
            </div>
            )}
          </div>

          {!focus && (
            <>
          {/* Collapsed by default but in the page's HTML; it only sets options, the one Download button is above. */}
          <div id="studio-sizes" hidden={panel !== 'sizes'} className="space-y-3 rounded-xl border bg-muted/30 p-3.5 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold">{t('resolutionPresets', 'Resolution Presets')}</span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {width} × {height} px
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RESOLUTION_PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={activeSize?.id === p.id}
                  onClick={() => pickSize(p.id)}
                  className={cn('h-8 rounded-lg border px-2.5 font-medium transition-colors', activeSize?.id === p.id ? 'border-primary bg-primary text-primary-foreground' : 'bg-background hover:bg-muted')}
                >
                  {tx(p.label)}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-end gap-3 border-t pt-2">
              <label className="flex flex-col gap-0.5 text-[10px] font-medium text-muted-foreground">
                {t('width', 'Width (px)')}
                <input type="number" min={MIN_DIM} max={MAX_DIM} value={width || ''} onChange={(e) => setWidth(Math.min(MAX_DIM, Math.max(0, parseInt(e.target.value, 10) || 0)))} className="h-8 w-20 rounded-md border bg-background px-2 font-mono text-xs text-foreground" />
              </label>
              <label className="flex flex-col gap-0.5 text-[10px] font-medium text-muted-foreground">
                {t('height', 'Height (px)')}
                <input type="number" min={MIN_DIM} max={MAX_DIM} value={height || ''} onChange={(e) => setHeight(Math.min(MAX_DIM, Math.max(0, parseInt(e.target.value, 10) || 0)))} className="h-8 w-20 rounded-md border bg-background px-2 font-mono text-xs text-foreground" />
              </label>
              <label className="flex flex-col gap-0.5 text-[10px] font-medium text-muted-foreground">
                {t('format', 'Format')}
                <select value={format} onChange={(e) => setFormat(e.target.value as 'png' | 'jpeg')} className="h-8 rounded-md border bg-background px-2 font-mono text-xs text-foreground">
                  <option value="png">{t('pngLossless', 'PNG (lossless)')}</option>
                  <option value="jpeg">{tx('JPG')}</option>
                </select>
              </label>
            </div>
          </div>

          <div id="studio-tone" hidden={panel !== 'tone'} className="space-y-3 rounded-xl border bg-muted/20 p-3.5 text-xs">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5">
                <span className="flex justify-between font-medium">
                  {tx('Brightness')}
                  <span className="font-mono text-muted-foreground">{brightness}%</span>
                </span>
                <input type="range" min={10} max={100} value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} className="w-full cursor-pointer accent-primary" />
              </label>
              <label className="space-y-1.5">
                <span className="flex justify-between font-medium">
                  {tx('Color temperature')}
                  <span className="font-mono text-muted-foreground">{kelvin} K</span>
                </span>
                <input type="range" min={2700} max={9300} step={100} value={kelvin} onChange={(e) => setKelvin(Number(e.target.value))} className="w-full cursor-pointer accent-primary" />
                <span className="flex justify-between text-[10px] text-muted-foreground">
                  <span>{t('warm', 'Warm')}</span>
                  <span>{t('cool', 'Cool')}</span>
                </span>
              </label>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
              <label className="flex cursor-pointer items-center gap-1.5">
                <input type="checkbox" checked={applyToExport} onChange={(e) => setApplyToExport(e.target.checked)} className="accent-primary" />
                {t('applyToExport', 'Apply software brightness and color temperature to the downloaded image')}
              </label>
              <button
                type="button"
                onClick={() => {
                  setBrightness(100)
                  setKelvin(NEUTRAL_K)
                }}
                className="font-medium text-primary hover:underline"
              >
                {t('resetDefaults', 'Reset Defaults')}
              </button>
            </div>
          </div>

            </>
          )}

          {errorMsg && (
            <p className="flex items-center gap-1.5 text-xs text-destructive" role="alert">
              <AlertCircle className="size-3.5" aria-hidden="true" />
              {errorMsg}
            </p>
          )}
        </section>
      )}

      <RatingRow className={cn('mx-auto w-full', boxWidth)} />
      <ToolRatingPrompt />
    </>
  )

  // A soft band behind the tool (full width, no overflow) so a white or black screen stands out from the page.
  const band = 'flex flex-col gap-3 studio-band bg-[var(--band)] py-5 shadow-[0_0_0_100vmax_var(--band)] [--band:#e8ecf1] [clip-path:inset(0_-100vmax)] sm:py-6 dark:[--band:#171a20]'
  if (!rail) return <div className={cn('flex flex-col gap-3', band.replace('flex flex-col gap-3 ', ''))}>{body}</div>
  return (
    <div className={cn('grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]', band.replace('flex flex-col gap-3 ', ''))}>
      <div className="flex min-w-0 flex-col gap-3">{body}</div>
      {!isFullscreen && <RailAd />}
    </div>
  )
}

/** Download sizes for the Ad C layout: the visitor's own screen, common desktop/TV, phone and tablet sizes. */
const DOWNLOAD_SIZES: { group: string; items: { label: string; w?: number; h?: number }[] }[] = [
  { group: 'Your screen', items: [{ label: 'Match this device' }] },
  {
    group: 'Desktop & TV',
    items: [
      { label: 'Full HD 1080p', w: 1920, h: 1080 },
      { label: 'QHD 1440p', w: 2560, h: 1440 },
      { label: '4K UHD', w: 3840, h: 2160 },
      { label: '8K UHD', w: 7680, h: 4320 },
    ],
  },
  { group: 'Mobile', items: [{ label: 'iPhone', w: 1179, h: 2556 }, { label: 'Android phone', w: 1080, h: 2400 }] },
  { group: 'Tablet', items: [{ label: 'iPad', w: 2048, h: 2732 }] },
]

function DownloadSizeMenu({ onPick, onClose }: { onPick: (size?: { w: number; h: number }) => void; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const [custom, setCustom] = useState({ w: 1920, h: 1080 })

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      // Clicks on the Download button itself toggle the menu there; everything else outside closes it.
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
      aria-label={tx('Download size')}
      className="absolute bottom-full right-0 z-40 mb-2 flex w-72 flex-col gap-0.5 rounded-2xl border bg-popover p-2 text-popover-foreground shadow-2xl"
    >
      {DOWNLOAD_SIZES.map((group) => (
        <div key={group.group} className="flex flex-col gap-0.5">
          <span className="px-2.5 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{tx(group.group)}</span>
          {group.items.map((item) => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              onClick={() => onPick(item.w && item.h ? { w: item.w, h: item.h } : undefined)}
              className="flex h-9 items-center justify-between rounded-lg px-2.5 text-sm hover:bg-accent"
            >
              <span className="font-medium">{tx(item.label)}</span>
              <span className="font-mono text-xs text-muted-foreground">{item.w ? `${item.w}×${item.h}` : tx('auto')}</span>
            </button>
          ))}
        </div>
      ))}
      <form
        className="mt-1 flex items-end gap-1.5 border-t px-1.5 pt-2.5"
        onSubmit={(event) => {
          event.preventDefault()
          onPick(custom)
        }}
      >
        <label className="flex flex-col gap-0.5 text-[10px] font-medium text-muted-foreground">
          {tx('Width')}
          <input type="number" min={MIN_DIM} max={MAX_DIM} value={custom.w} onChange={(e) => setCustom((c) => ({ ...c, w: Number(e.target.value) || 0 }))} className="h-8 w-20 rounded-md border bg-background px-2 font-mono text-xs text-foreground" />
        </label>
        <span className="pb-2 text-muted-foreground">×</span>
        <label className="flex flex-col gap-0.5 text-[10px] font-medium text-muted-foreground">
          {tx('Height')}
          <input type="number" min={MIN_DIM} max={MAX_DIM} value={custom.h} onChange={(e) => setCustom((c) => ({ ...c, h: Number(e.target.value) || 0 }))} className="h-8 w-20 rounded-md border bg-background px-2 font-mono text-xs text-foreground" />
        </label>
        <button type="submit" className="ml-auto h-8 rounded-md bg-foreground px-3 text-xs font-semibold text-background">
          {tx('Custom size')}
        </button>
      </form>
    </div>
  )
}
