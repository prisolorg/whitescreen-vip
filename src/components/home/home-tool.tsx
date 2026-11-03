'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Maximize,
  Minimize,
  X,
  Download,
  Check,
  Sliders,
  Sparkles,
  AlertCircle,
  RefreshCw,
  Image as ImageIcon,
  Trash2,
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { SCREEN_COLORS, isLightColor } from '@/lib/screen-colors'
import { CustomColorPicker } from '@/components/screen-tool/custom-color-picker'
import { useTranslation } from '@/lib/i18n'
import { DoubleTapHint, STAGE_SIZE, StageArrows, StageDock, StageTitle } from '@/components/screen-stage/stage-parts'
import { getLocalizedPath } from '@/lib/locale-routing'

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null
  webkitExitFullscreen?: () => Promise<void> | void
}

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void
}

function getFullscreenElement() {
  const doc = document as FullscreenDocument
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null
}

export type ResolutionPreset = {
  id: string
  label: string
  shortLabel: string
  width: number
  height: number
  description: string
}

export const RESOLUTION_PRESETS: readonly ResolutionPreset[] = [
  { id: '480p', label: '480p SD', shortLabel: '480p', width: 854, height: 480, description: '854 × 480 (16:9 SD)' },
  { id: '720p', label: '720p HD', shortLabel: '720p', width: 1280, height: 720, description: '1280 × 720 (16:9 HD)' },
  { id: '1080p', label: '1080p FHD', shortLabel: '1080p', width: 1920, height: 1080, description: '1920 × 1080 (Full HD)' },
  { id: '1440p', label: '1440p QHD', shortLabel: '1440p', width: 2560, height: 1440, description: '2560 × 1440 (Quad HD)' },
  { id: '2k', label: '2K DCI', shortLabel: '2K', width: 2048, height: 1080, description: '2048 × 1080 (Cinema 2K)' },
  { id: '4k', label: '4K UHD', shortLabel: '4K', width: 3840, height: 2160, description: '3840 × 2160 (Ultra HD)' },
  { id: '8k', label: '8K UHD', shortLabel: '8K', width: 7680, height: 4320, description: '7680 × 4320 (8K Ultra HD)' },
]

export const MIN_DIM = 1
export const MAX_DIM = 8192

function kelvinToRgb(kelvin: number): { r: number; g: number; b: number; css: string } {
  const temp = kelvin / 100
  let r: number, g: number, b: number

  if (temp <= 66) {
    r = 255
    g = 99.4708025861 * Math.log(temp) - 161.1195681661
    b = temp <= 19 ? 0 : 138.5177312231 * Math.log(temp - 10) - 305.0447927307
  } else {
    r = 329.698727446 * Math.pow(temp - 60, -0.1332047592)
    g = 288.1221695283 * Math.pow(temp - 60, -0.0755148492)
    b = 255
  }

  const clamp = (v: number) => Math.round(Math.min(255, Math.max(0, v)))
  const cr = clamp(r)
  const cg = clamp(g)
  const cb = clamp(b)
  return { r: cr, g: cg, b: cb, css: `rgb(${cr}, ${cg}, ${cb})` }
}

export function HomeTool() {
  const { t, language } = useTranslation()
  const [selectedId, setSelectedId] = useState<string>('white')
  const [customHex, setCustomHex] = useState<string>('#FFFFFF')
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  // Fullscreen state
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false)
  const [isFallbackFullscreen, setIsFallbackFullscreen] = useState(false)
  const [isHintVisible, setIsHintVisible] = useState(false)

  // Display Settings: Software Brightness & Color Temperature
  const [showSettings, setShowSettings] = useState(false)
  const [brightness, setBrightness] = useState<number>(100)
  const [kelvin, setKelvin] = useState<number>(6500) // 6500K is neutral D65 daylight
  const [applySettingsToExport, setApplySettingsToExport] = useState(false)

  // Resolution & Download Controls
  const [showDownloadPanel, setShowDownloadPanel] = useState(false)
  const [width, setWidth] = useState<number>(1920)
  const [height, setHeight] = useState<number>(1080)
  const [format, setFormat] = useState<'png' | 'jpeg'>('png')
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const screenRef = useRef<HTMLDivElement>(null)
  const hintTimerRef = useRef<number | undefined>(undefined)
  const wakeLockRef = useRef<WakeLockSentinel | null>(null)

  const isFullscreen = isNativeFullscreen || isFallbackFullscreen
  const preset = SCREEN_COLORS.find((color) => color.id === selectedId)
  const activeHex = preset ? preset.hex : customHex
  const activeName = uploadedImage
    ? t('uploadImage', 'Image')
    : preset
      ? t(preset.id, preset.name)
      : t('custom', 'Custom')
  // File names stay ASCII/English regardless of UI language.
  const fileSlug = uploadedImage ? 'image' : preset ? preset.id : 'custom'
  const formatLabel = format === 'png' ? 'PNG' : 'JPG'
  const isLight = uploadedImage ? false : isLightColor(activeHex)

  // Color temperature RGB
  const tempRgb = kelvinToRgb(kelvin)
  const isNeutralTemp = kelvin === 6500

  // Active resolution preset if matching exactly
  const activePreset = RESOLUTION_PRESETS.find((p) => p.width === width && p.height === height)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (uploadedImage) URL.revokeObjectURL(uploadedImage)
      const url = URL.createObjectURL(file)
      setUploadedImage(url)
    }
    // Reset so choosing the same file again still fires onChange.
    e.target.value = ''
  }

  const clearImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage)
      setUploadedImage(null)
    }
  }

  useEffect(() => {
    return () => {
      if (uploadedImage) URL.revokeObjectURL(uploadedImage)
    }
  }, [uploadedImage])

  const revealHint = useCallback(() => {
    setIsHintVisible(true)
    window.clearTimeout(hintTimerRef.current)
    hintTimerRef.current = window.setTimeout(() => setIsHintVisible(false), 2500)
  }, [])

  const enterFullscreen = useCallback(async () => {
    const element = screenRef.current as FullscreenElement | null
    if (!element) return
    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen({ navigationUI: 'hide' })
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen()
      } else {
        setIsFallbackFullscreen(true)
      }
    } catch {
      setIsFallbackFullscreen(true)
    }
    revealHint()
  }, [revealHint])

  const exitFullscreen = useCallback(async () => {
    setIsFallbackFullscreen(false)
    const doc = document as FullscreenDocument
    if (!getFullscreenElement()) return
    try {
      if (doc.exitFullscreen) await doc.exitFullscreen()
      else await doc.webkitExitFullscreen?.()
    } catch {
      // Browser already exited
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) void exitFullscreen()
    else void enterFullscreen()
  }, [isFullscreen, enterFullscreen, exitFullscreen])

  // Every color except white has its own page, so picking one opens it (the URL follows the color).
  // In fullscreen the color switches in place instead, so fullscreen isn't interrupted.
  const goToColor = useCallback(
    (id: string) => {
      const color = SCREEN_COLORS.find((item) => item.id === id)
      if (!color) return
      if (isFullscreen || color.path === '/') {
        clearImage()
        setSelectedId(color.id)
        return
      }
      window.location.assign(getLocalizedPath(color.path, language))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isFullscreen, language, uploadedImage],
  )

  const neighbor = (direction: 1 | -1) => {
    const index = SCREEN_COLORS.findIndex((color) => color.id === selectedId)
    return SCREEN_COLORS[(Math.max(index, 0) + direction + SCREEN_COLORS.length) % SCREEN_COLORS.length]
  }

  const cycleColor = useCallback(
    (direction: 1 | -1) => {
      const index = SCREEN_COLORS.findIndex((color) => color.id === selectedId)
      goToColor(SCREEN_COLORS[(Math.max(index, 0) + direction + SCREEN_COLORS.length) % SCREEN_COLORS.length].id)
    },
    [selectedId, goToColor],
  )

  useEffect(() => {
    const handleChange = () => {
      setIsNativeFullscreen(getFullscreenElement() === screenRef.current)
    }
    document.addEventListener('fullscreenchange', handleChange)
    document.addEventListener('webkitfullscreenchange', handleChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleChange)
      document.removeEventListener('webkitfullscreenchange', handleChange)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return
      if (event.metaKey || event.ctrlKey || event.altKey) return

      const key = event.key
      if (key === 'f' || key === 'F') {
        event.preventDefault()
        toggleFullscreen()
      } else if (key === 'Escape' && isFallbackFullscreen) {
        setIsFallbackFullscreen(false)
      } else if (key === 'ArrowRight' || key === 'ArrowDown') {
        if (!isFullscreen && key === 'ArrowDown') return
        event.preventDefault()
        cycleColor(1)
        if (isFullscreen) revealHint()
      } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
        if (!isFullscreen && key === 'ArrowUp') return
        event.preventDefault()
        cycleColor(-1)
        if (isFullscreen) revealHint()
      } else if (/^[1-9]$/.test(key)) {
        const num = Number(key) - 1
        if (num < SCREEN_COLORS.length) {
          goToColor(SCREEN_COLORS[num].id)
          if (isFullscreen) revealHint()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleFullscreen, cycleColor, revealHint, isFullscreen, isFallbackFullscreen])

  // Screen WakeLock during fullscreen
  useEffect(() => {
    if (!isFullscreen || !('wakeLock' in navigator)) return
    let cancelled = false
    navigator.wakeLock
      .request('screen')
      .then((sentinel) => {
        if (cancelled) void sentinel.release()
        else wakeLockRef.current = sentinel
      })
      .catch(() => {})
    return () => {
      cancelled = true
      void wakeLockRef.current?.release()
      wakeLockRef.current = null
    }
  }, [isFullscreen])

  // Handle fallback fullscreen body overflow
  useEffect(() => {
    if (!isFallbackFullscreen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isFallbackFullscreen])

  // Image Generation & Download logic
  const handleDownload = () => {
    if (isDownloading) return

    const validW = Math.min(MAX_DIM, Math.max(MIN_DIM, width || 1920))
    const validH = Math.min(MAX_DIM, Math.max(MIN_DIM, height || 1080))

    if (validW <= 0 || validH <= 0) {
      setErrorMsg(t('errDimensions', 'Please specify dimensions between 1 and 8192 px.'))
      return
    }

    setIsDownloading(true)
    setErrorMsg(null)

    const processCanvasBlob = (canvas: HTMLCanvasElement) => {
      const mimeType = format === 'png' ? 'image/png' : 'image/jpeg'
      const ext = format === 'png' ? 'png' : 'jpg'
      const prefix = `${fileSlug}-screen`
      const filename = `${prefix}-${validW}x${validH}.${ext}`

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setErrorMsg(t('errMemory', 'Memory error: could not create the image. Try smaller dimensions.'))
            setIsDownloading(false)
            return
          }
          const blobUrl = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = blobUrl
          link.download = filename
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)

          setTimeout(() => URL.revokeObjectURL(blobUrl), 1500)
          setIsDownloading(false)
          setDownloadSuccess(true)
          setTimeout(() => setDownloadSuccess(false), 2500)
        },
        mimeType,
        0.95,
      )
    }

    try {
      const canvas = document.createElement('canvas')
      canvas.width = validW
      canvas.height = validH
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('Canvas not supported')

      if (uploadedImage) {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
          // Match the preview (object-contain on black) instead of stretching the image.
          const scale = Math.min(validW / img.naturalWidth, validH / img.naturalHeight)
          const drawW = img.naturalWidth * scale
          const drawH = img.naturalHeight * scale
          ctx.fillStyle = '#000000'
          ctx.fillRect(0, 0, validW, validH)
          ctx.drawImage(img, (validW - drawW) / 2, (validH - drawH) / 2, drawW, drawH)
          processCanvasBlob(canvas)
        }
        img.onerror = () => {
          ctx.fillStyle = activeHex
          ctx.fillRect(0, 0, validW, validH)
          processCanvasBlob(canvas)
        }
        img.src = uploadedImage
      } else {
        // Base fill color
        let fillColor = activeHex

        // If user wants temperature or brightness baked in. Scale the RGB values directly,
        // because CanvasRenderingContext2D.filter is not supported in Safari.
        if (applySettingsToExport) {
          const base =
            !isNeutralTemp && selectedId === 'white'
              ? tempRgb
              : {
                  r: parseInt(activeHex.slice(1, 3), 16),
                  g: parseInt(activeHex.slice(3, 5), 16),
                  b: parseInt(activeHex.slice(5, 7), 16),
                }
          const k = brightness / 100
          fillColor = `rgb(${Math.round(base.r * k)}, ${Math.round(base.g * k)}, ${Math.round(base.b * k)})`
        }

        ctx.fillStyle = fillColor
        ctx.fillRect(0, 0, validW, validH)
        processCanvasBlob(canvas)
      }
    } catch {
      setErrorMsg(t('errGeneration', 'Image generation error. For 8K on mobile, try 4K or 1080p.'))
      setIsDownloading(false)
    }
  }

  const overlayTextClass = isLight ? 'text-neutral-900' : 'text-white'
  const overlayChipClass = isLight
    ? 'bg-black/5 ring-black/10 text-neutral-900 hover:bg-black/10'
    : 'bg-white/10 ring-white/20 text-white hover:bg-white/20'

  // Dynamic filter style for brightness simulation & color temperature
  const filterStyle: React.CSSProperties = {
    backgroundColor: uploadedImage ? '#000000' : isNeutralTemp || selectedId !== 'white' ? activeHex : tempRgb.css,
    filter: brightness < 100 ? `brightness(${brightness / 100})` : undefined,
  }

  return (
    <section aria-labelledby="screen-heading" className="w-full pt-3 pb-4 sm:pt-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 sm:px-6">
        {/* Same height as the breadcrumb row on other screen pages, so the stage never shifts between pages. */}
        <p className="text-xs text-muted-foreground sm:text-sm">{t('freeClientSide', '100% Free · Client-Side')}</p>
        <div>
          <div className="relative">
          {/* Main White Screen Preview Area */}
          <div
            ref={screenRef}
            role="region"
            aria-label={t('screenPreview', '{color} screen preview').replace('{color}', activeName)}
            onMouseMove={isFullscreen ? revealHint : undefined}
            onTouchStart={isFullscreen ? revealHint : undefined}
            // Double-click or double-tap toggles fullscreen (it replaces the old center button).
            onDoubleClick={() => void (isFullscreen ? exitFullscreen() : enterFullscreen())}
            style={filterStyle}
            className={cn(
              'relative flex touch-manipulation select-none items-center justify-center overflow-hidden transition-colors duration-150',
              isFullscreen
                ? 'h-full w-full'
                : STAGE_SIZE,
              isFallbackFullscreen && 'fixed inset-0 z-[100] h-dvh max-h-none rounded-none border-0',
              isFullscreen && !isHintVisible && 'cursor-none',
            )}
          >
            {/* Render uploaded image if any */}
            {uploadedImage && (
              <img
                src={uploadedImage}
                alt={t('uploadedImage', 'Uploaded Image')}
                className="absolute inset-0 size-full object-contain pointer-events-none select-none"
              />
            )}

            {isFullscreen ? (
              <div
                aria-live="polite"
                className={cn(
                  'pointer-events-none absolute inset-x-0 top-4 flex justify-center px-4 transition-opacity duration-300',
                  isHintVisible ? 'opacity-100' : 'opacity-0',
                )}
              >
                <div
                  className={cn(
                    'pointer-events-auto flex items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 text-sm ring-1 backdrop-blur shadow-md',
                    overlayChipClass,
                  )}
                >
                  <span className="text-xs sm:text-sm">
                    {t('exitHintCycle', 'Press Esc or double-click to exit · ← → to cycle color')}
                  </span>
                  <button
                    type="button"
                    onClick={() => void exitFullscreen()}
                    className={cn(
                      'inline-flex size-8 items-center justify-center rounded-full ring-1',
                      overlayChipClass,
                    )}
                    aria-label={t('exitFullscreen', 'Exit fullscreen')}
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <DoubleTapHint tone={isLight ? 'light' : 'dark'} />
              </>
            )}

            <StageArrows
              tone={isLight ? 'light' : 'dark'}
              hidden={isFullscreen && !isHintVisible}
              prev={{ label: `${t('navPrev', 'Previous')}: ${t(neighbor(-1).id, neighbor(-1).name)}`, href: getLocalizedPath(neighbor(-1).path, language), onSelect: () => cycleColor(-1) }}
              next={{ label: `${t('navNext', 'Next')}: ${t(neighbor(1).id, neighbor(1).name)}`, href: getLocalizedPath(neighbor(1).path, language), onSelect: () => cycleColor(1) }}
            />
          </div>

            {!isFullscreen && (
              <StageTitle
                title={t('homeTitle', 'White Screen Online')}
                intro={t('homeSubtitle', 'Open a fullscreen white screen, switch colors, and download white screen images for free.')}
                tone={isLight ? 'light' : 'dark'}
                aside={
                  <>
                    <span className={cn('rounded-full px-3 py-1 font-mono text-xs font-semibold ring-1', overlayChipClass)}>
                      {uploadedImage ? t('customImage', 'Custom Image') : activeHex}
                      {brightness < 100 ? ` · ${brightness}%` : ''}
                    </span>
                    <span className={cn('hidden rounded-full px-3 py-1 text-xs font-medium ring-1 lg:inline', overlayChipClass)}>
                      {t('stageHint', 'F fullscreen · ← → change color')}
                    </span>
                  </>
                }
              />
            )}
          </div>

          {/* Controls dock under the stage, the same on every screen page. */}
          {!isFullscreen && (
          <StageDock onFullscreen={() => void enterFullscreen()}>
          <div className="space-y-3">
            <div className="flex flex-col gap-2.5 lg:flex-row lg:flex-wrap lg:items-center lg:gap-3">
            {/* Color dots, custom color and image upload: the same row as the color screen pages */}
            <div
              role="group"
              aria-label={t('screenColors', 'Screen Colors')}
              className="-mx-1 flex min-w-0 items-center gap-2 overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {SCREEN_COLORS.map((color, index) => {
                const isSelected = selectedId === color.id && !uploadedImage
                const name = t(color.id, color.name)
                return (
                  <a
                    key={color.id}
                    href={getLocalizedPath(color.path, language)}
                    onClick={(event) => {
                      event.preventDefault()
                      goToColor(color.id)
                    }}
                    title={`${name} (${index + 1})`}
                    aria-label={name}
                    aria-current={isSelected ? 'page' : undefined}
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-black/15 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 lg:size-8',
                      isSelected && 'ring-2 ring-offset-2 ring-blue-600 ring-offset-background',
                    )}
                    style={{ backgroundColor: color.hex }}
                  >
                    {isSelected && (
                      <Check className={cn('size-4', isLightColor(color.hex) ? 'text-black' : 'text-white')} aria-hidden="true" />
                    )}
                  </a>
                )
              })}
            </div>
            <div className="flex flex-wrap items-center gap-2">
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
              <label
                className="inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-xl border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent focus-within:ring-2 focus-within:ring-ring"
                title={uploadedImage ? t('changeImage', 'Change Image') : t('uploadImage', 'Image')}
              >
                <ImageIcon className="size-4 text-muted-foreground" aria-hidden="true" />
                <span className="sr-only xl:not-sr-only">{uploadedImage ? t('changeImage', 'Change Image') : t('uploadImage', 'Image')}</span>
                <input type="file" accept="image/*" className="sr-only" onChange={handleImageUpload} />
              </label>
              {uploadedImage && (
                <button
                  type="button"
                  onClick={clearImage}
                  className="inline-flex h-10 items-center rounded-xl border border-destructive/30 bg-destructive/10 px-2.5 text-destructive hover:bg-destructive/20"
                  aria-label={t('removeImage', 'Remove image')}
                  title={t('removeImage', 'Remove image')}
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Action Bar: Fullscreen + Download Button + Settings Toggle */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-wrap items-center gap-2">
                {/* Primary Download White Screen Button */}
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={cn(
                    'inline-flex h-9 sm:h-10 items-center justify-center gap-2 rounded-xl px-4 sm:px-5 text-xs sm:text-sm font-semibold transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer',
                    downloadSuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90',
                  )}
                >
                  {isDownloading ? (
                    <>
                      <RefreshCw className="size-4 animate-spin" aria-hidden="true" />
                      <span>{t('generatingFormat', 'Generating {format}...').replace('{format}', formatLabel)}</span>
                    </>
                  ) : downloadSuccess ? (
                    <>
                      <Check className="size-4" aria-hidden="true" />
                      <span>{t('downloaded', 'Downloaded!')}</span>
                    </>
                  ) : (
                    <>
                      <Download className="size-4" aria-hidden="true" />
                      <span>
                        {t('downloadFormat', 'Download {format}').replace('{format}', formatLabel)}
                      </span>
                    </>
                  )}
                </button>

                {/* Resolution Preset Pill / Popover Toggle */}
                <button
                  type="button"
                  onClick={() => setShowDownloadPanel((prev) => !prev)}
                  className="inline-flex h-9 sm:h-10 items-center gap-1.5 rounded-xl border border-border bg-background px-3 text-xs sm:text-sm font-medium hover:bg-accent transition-colors shadow-2xs"
                  aria-expanded={showDownloadPanel}
                >
                  <span className="font-semibold text-foreground">
                    {activePreset ? activePreset.label : `${width}×${height}px`}
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-3.5 text-muted-foreground transition-transform duration-200',
                      showDownloadPanel && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>

              </div>

              {/* Advanced Settings Toggle (Brightness & Temperature) */}
              <button
                type="button"
                onClick={() => setShowSettings((prev) => !prev)}
                className={cn(
                  'inline-flex h-9 sm:h-10 items-center gap-1.5 rounded-xl border px-3 text-xs font-medium transition-colors shadow-2xs',
                  showSettings
                    ? 'border-primary/50 bg-accent text-foreground font-semibold'
                    : 'border-border bg-background text-muted-foreground hover:text-foreground hover:bg-accent',
                )}
                aria-expanded={showSettings}
              >
                <Sliders className="size-3.5" aria-hidden="true" />
                <span>{t('brightnessTone', 'Brightness & Tone')}</span>
                {brightness < 100 && (
                  <span className="rounded-full bg-primary/10 px-1.5 py-0.2 text-[10px] font-bold text-primary">
                    {brightness}%
                  </span>
                )}
              </button>
            </div>

            </div>

            {/* Collapsible Resolution & Download Customization Panel */}
            {showDownloadPanel && (
              <div className="rounded-xl border border-border/80 bg-muted/30 p-3.5 text-xs animate-in fade-in-50 zoom-in-95 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground">
                    <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
                    <span>{t('resolutionPresets', 'Resolution Presets')}</span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {width} × {height} px ({((width * height) / 1000000).toFixed(1)} MP)
                  </span>
                </div>

                {/* Preset Buttons */}
                <div className="flex flex-wrap gap-1.5">
                  {RESOLUTION_PRESETS.map((p) => {
                    const isSelected = activePreset?.id === p.id
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          setWidth(p.width)
                          setHeight(p.height)
                          setErrorMsg(null)
                        }}
                        className={cn(
                          'h-7 sm:h-8 rounded-lg border px-2.5 text-xs font-medium transition-colors',
                          isSelected
                            ? 'border-primary bg-primary text-primary-foreground shadow-2xs'
                            : 'border-border bg-background hover:bg-muted text-foreground',
                        )}
                      >
                        {p.label}
                      </button>
                    )
                  })}
                </div>

                {/* Custom Dimensions & Format */}
                <div className="flex flex-wrap items-end gap-3 pt-2 border-t border-border/50">
                  <div className="flex items-center gap-1.5">
                    <div className="flex flex-col gap-0.5">
                      <label htmlFor="custom-w" className="text-[10px] font-medium text-muted-foreground">
                        {t('width', 'Width (px)')}
                      </label>
                      <input
                        id="custom-w"
                        type="number"
                        min={MIN_DIM}
                        max={MAX_DIM}
                        value={width || ''}
                        onChange={(e) => {
                          setErrorMsg(null)
                          setWidth(Math.min(MAX_DIM, Math.max(0, parseInt(e.target.value, 10) || 0)))
                        }}
                        className="h-8 w-20 rounded-md border bg-background px-2 font-mono text-xs outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </div>
                    <span className="pt-3 text-muted-foreground">×</span>
                    <div className="flex flex-col gap-0.5">
                      <label htmlFor="custom-h" className="text-[10px] font-medium text-muted-foreground">
                        {t('height', 'Height (px)')}
                      </label>
                      <input
                        id="custom-h"
                        type="number"
                        min={MIN_DIM}
                        max={MAX_DIM}
                        value={height || ''}
                        onChange={(e) => {
                          setErrorMsg(null)
                          setHeight(Math.min(MAX_DIM, Math.max(0, parseInt(e.target.value, 10) || 0)))
                        }}
                        className="h-8 w-20 rounded-md border bg-background px-2 font-mono text-xs outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Format */}
                  <div className="flex flex-col gap-0.5">
                    <label htmlFor="custom-fmt" className="text-[10px] font-medium text-muted-foreground">
                      {t('format', 'Format')}
                    </label>
                    <select
                      id="custom-fmt"
                      value={format}
                      onChange={(e) => setFormat(e.target.value as 'png' | 'jpeg')}
                      className="h-8 rounded-md border bg-background px-2 font-mono text-xs outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    >
                      <option value="png">{t('pngLossless', 'PNG (lossless)')}</option>
                      <option value="jpeg">JPG</option>
                    </select>
                  </div>

                  {/* Immediate Download in Panel */}
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="h-8 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-2xs"
                  >
                    <Download className="size-3.5" aria-hidden="true" />
                    <span>{t('downloadFormat', 'Download {format}').replace('{format}', formatLabel)}</span>
                  </button>
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-1.5 text-xs text-destructive pt-1">
                    <AlertCircle className="size-3.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}
              </div>
            )}

            {/* Collapsible Software Brightness & Temperature Settings */}
            {showSettings && (
              <div className="rounded-xl border border-border/80 bg-muted/20 p-3.5 text-xs animate-in fade-in-50 zoom-in-95 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1 border-b border-border/50">
                  <span className="font-semibold text-foreground">
                    {t('softwareAdjustments', 'Software Display Adjustments')}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {t('softwareAdjustmentsNote', 'Software simulation: does not alter physical monitor hardware controls.')}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {/* Brightness Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-medium">
                      <span>{t('brightnessLuminance', 'Brightness (Luminance)')}</span>
                      <span className="font-mono text-muted-foreground">{brightness}%</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={100}
                      step={1}
                      value={brightness}
                      onChange={(e) => setBrightness(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                      <span>{t('dimLabel', '10% (Dim)')}</span>
                      <span>50%</span>
                      <span>{t('fullLabel', '100% (Full)')}</span>
                    </div>
                  </div>

                  {/* Color Temperature (Kelvin) */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-medium">
                      <span>{t('whiteTone', 'White Tone (Temperature)')}</span>
                      <span className="font-mono text-muted-foreground">{kelvin}K</span>
                    </div>
                    <div className="flex gap-1.5">
                      {[
                        { label: t('warm', 'Warm'), value: 3000 },
                        { label: t('neutralD65', 'Neutral (D65)'), value: 6500 },
                        { label: t('cool', 'Cool'), value: 9000 },
                      ].map((preset) => (
                        <button
                          key={preset.value}
                          type="button"
                          onClick={() => setKelvin(preset.value)}
                          className={cn(
                            'flex-1 h-7 rounded-md border text-[11px] font-medium transition-colors',
                            kelvin === preset.value
                              ? 'border-primary bg-primary/10 text-primary font-bold'
                              : 'border-border bg-background text-muted-foreground hover:text-foreground',
                          )}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Option to apply adjustments to download */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={applySettingsToExport}
                      onChange={(e) => setApplySettingsToExport(e.target.checked)}
                      className="rounded accent-primary"
                    />
                    <span>{t('applyToExport', 'Apply software brightness and color temperature to the downloaded image')}</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setBrightness(100)
                      setKelvin(6500)
                    }}
                    className="text-primary hover:underline font-medium"
                  >
                    {t('resetDefaults', 'Reset Defaults')}
                  </button>
                </div>
              </div>
            )}
          </div>

          </StageDock>
          )}
        </div>
      </div>
    </section>
  )
}
