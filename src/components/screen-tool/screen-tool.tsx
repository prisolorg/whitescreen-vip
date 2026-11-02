'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Maximize, Minimize, X, Image as ImageIcon, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SCREEN_COLORS, isLightColor } from '@/lib/screen-colors'
import { ColorSwatches } from './color-swatches'
import { CustomColorPicker } from './custom-color-picker'
import { ResolutionControls } from './resolution-controls'
import { useTranslation } from '@/lib/i18n'

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null
  webkitExitFullscreen?: () => Promise<void> | void
}

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void
}

const HINT_DURATION_MS = 2500

function getFullscreenElement() {
  const doc = document as FullscreenDocument
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null
}

type ScreenToolProps = {
  initialColorId?: string
}

export function ScreenTool({ initialColorId = 'white' }: ScreenToolProps) {
  const router = useRouter()
  const { t } = useTranslation()
  const [selectedId, setSelectedId] = useState<string>(initialColorId)
  const [customHex, setCustomHex] = useState('#F5F5F0')
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false)
  const [isFallbackFullscreen, setIsFallbackFullscreen] = useState(false)
  const [isHintVisible, setIsHintVisible] = useState(false)

  const screenRef = useRef<HTMLDivElement>(null)
  const hintTimerRef = useRef<number | undefined>(undefined)
  const wakeLockRef = useRef<WakeLockSentinel | null>(null)

  const isFullscreen = isNativeFullscreen || isFallbackFullscreen
  const preset = SCREEN_COLORS.find((color) => color.id === selectedId)
  const activeHex = preset ? preset.hex : customHex
  // English name feeds the download file name; the localized label is for display.
  const activeName = uploadedImage ? 'Image' : (preset ? preset.name : 'Custom')
  const activeLabel = uploadedImage
    ? t('uploadImage', 'Image')
    : preset
      ? t(preset.id, preset.name)
      : t('custom', 'Custom')
  const isLight = uploadedImage ? false : isLightColor(activeHex)

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
    hintTimerRef.current = window.setTimeout(() => setIsHintVisible(false), HINT_DURATION_MS)
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
      // The browser already left fullscreen.
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) void exitFullscreen()
    else void enterFullscreen()
  }, [isFullscreen, enterFullscreen, exitFullscreen])

  // Navigating remounts the tool and would drop fullscreen, so colors only change the URL outside it.
  const selectPreset = useCallback(
    (index: number) => {
      clearImage()
      const color = SCREEN_COLORS[index]
      setSelectedId(color.id)
      if (!isFullscreen) router.push(color.path, { scroll: false })
    },
    [isFullscreen, router],
  )

  const cycleColor = useCallback(
    (direction: 1 | -1) => {
      const index = SCREEN_COLORS.findIndex((color) => color.id === selectedId)
      const nextIndex =
        index === -1 ? 0 : (index + direction + SCREEN_COLORS.length) % SCREEN_COLORS.length
      selectPreset(nextIndex)
    },
    [selectedId, selectPreset],
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
      } else if (/^[1-7]$/.test(key)) {
        selectPreset(Number(key) - 1)
        if (isFullscreen) revealHint()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleFullscreen, cycleColor, selectPreset, revealHint, isFullscreen, isFallbackFullscreen])

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

  useEffect(() => {
    if (!isFallbackFullscreen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isFallbackFullscreen])

  useEffect(() => () => window.clearTimeout(hintTimerRef.current), [])

  const overlayTextClass = isLight ? 'text-neutral-900' : 'text-white'
  const overlayChipClass = isLight
    ? 'bg-black/5 ring-black/10 text-neutral-900'
    : 'bg-white/10 ring-white/20 text-white'

  return (
    <div className="rounded-2xl border bg-card p-3 shadow-sm sm:p-4">
      {/* Visual Screen Preview (Large, immediate, focused) */}
      <div
        ref={screenRef}
        role="region"
        aria-label={t('screenPreview', '{color} screen preview').replace('{color}', activeLabel)}
        onMouseMove={isFullscreen ? revealHint : undefined}
        onTouchStart={isFullscreen ? revealHint : undefined}
        onDoubleClick={isFullscreen ? () => void exitFullscreen() : undefined}
        style={{ backgroundColor: uploadedImage ? '#000000' : activeHex }}
        className={cn(
          'relative flex items-center justify-center overflow-hidden transition-all duration-150',
          isFullscreen
            ? 'h-full w-full'
            : 'h-[36vh] sm:h-[42vh] lg:h-[380px] xl:h-[420px] min-h-[260px] sm:min-h-[300px] max-h-[500px] w-full rounded-xl border',
          isFallbackFullscreen && 'fixed inset-0 z-[100] h-dvh rounded-none border-0',
          isFullscreen && !isHintVisible && 'cursor-none',
        )}
      >
        {/* Render uploaded image if active */}
        {uploadedImage && (
          <img
            src={uploadedImage}
            alt="Uploaded screen preview"
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
                'pointer-events-auto flex items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 text-sm ring-1 backdrop-blur',
                overlayChipClass,
              )}
            >
              <span>{t('exitHint', 'Press Esc or double-click to exit · ← → to change color')}</span>
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
            {/* Centered Open Fullscreen Button */}
            <button
              type="button"
              onClick={() => void enterFullscreen()}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ring-1 transition-all shadow-md focus-visible:outline-2 focus-visible:outline-offset-2',
                overlayChipClass,
                isLight ? 'hover:bg-black/15 bg-white/70 backdrop-blur-sm' : 'hover:bg-white/25 bg-black/60 backdrop-blur-sm',
              )}
            >
              <Maximize className="size-4" aria-hidden="true" />
              <span>{t('openFullscreen', 'Open fullscreen')}</span>
            </button>

            {/* Bottom info tag */}
            <p
              className={cn(
                'absolute bottom-3 left-4 font-mono text-xs opacity-75 backdrop-blur-xs px-2 py-0.5 rounded',
                overlayTextClass,
              )}
            >
              {uploadedImage ? t('uploadedImage', 'Uploaded Image') : `${activeLabel} · ${activeHex}`}
            </p>
          </>
        )}
      </div>

      {/* Primary Responsive Controls */}
      <div className="flex flex-col gap-2.5 px-1 pt-3">
        {/* Row 1: 12 Color Swatches */}
        <div className="overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ColorSwatches
            selectedId={uploadedImage ? '' : selectedId}
            onSelect={(id) => {
              clearImage()
              setSelectedId(id)
            }}
          />
        </div>

        {/* Row 2: Custom Color + Image Upload + Fullscreen Button */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-border/50">
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

            {/* Image Selection / Upload Option */}
            <div className="flex items-center gap-1">
              <label className="inline-flex h-8 sm:h-9 items-center gap-1.5 rounded-lg border bg-background px-2.5 sm:px-3 text-xs sm:text-sm font-medium transition-colors hover:bg-accent cursor-pointer shadow-xs focus-within:ring-2 focus-within:ring-ring">
                <ImageIcon className="size-4 text-muted-foreground" aria-hidden="true" />
                <span>{uploadedImage ? t('changeImage', 'Change Image') : t('uploadImage', 'Image')}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleImageUpload}
                />
              </label>

              {uploadedImage && (
                <button
                  type="button"
                  onClick={clearImage}
                  className="inline-flex h-8 sm:h-9 items-center gap-1 rounded-lg border border-destructive/30 bg-destructive/10 px-2 text-xs font-medium text-destructive hover:bg-destructive/20 transition-colors"
                  title={t('removeImage', 'Clear Image')}
                >
                  <Trash2 className="size-3.5" aria-hidden="true" />
                  <span className="sr-only sm:not-sr-only sm:text-[11px]">{t('clear', 'Clear')}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Resolution Panel & Download functionality */}
      <ResolutionControls
        activeHex={activeHex}
        activeName={uploadedImage ? 'image' : activeName}
        uploadedImageUrl={uploadedImage}
      />

      <p className="px-1 pt-3 text-xs leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">{t('shortcuts', 'Shortcuts')}:</span>{' '}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">F</kbd> {t('shortcutF', 'fullscreen')} ·{' '}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">1</kbd>–
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">7</kbd> {t('shortcutNumbers', 'pick color')} ·{' '}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">←</kbd>
        <kbd className="ml-0.5 rounded border bg-muted px-1.5 py-0.5 font-mono">→</kbd> {t('shortcutArrows', 'cycle')} ·{' '}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">Esc</kbd> {t('shortcutEsc', 'exit')}
      </p>
    </div>
  )
}
