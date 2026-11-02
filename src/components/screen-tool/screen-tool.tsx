'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Check, Maximize, X, Image as ImageIcon, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SCREEN_COLORS, isLightColor } from '@/lib/screen-colors'
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
  title: string
  intro?: string
}

export function ScreenTool({ initialColorId = 'white', title, intro }: ScreenToolProps) {
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
      } else if (/^[1-9]$/.test(key)) {
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
    <div className="relative">
      {/* The stage: a large live preview that also becomes the fullscreen element. */}
      <div
        ref={screenRef}
        role="region"
        aria-label={t('screenPreview', '{color} screen preview').replace('{color}', activeLabel)}
        onMouseMove={isFullscreen ? revealHint : undefined}
        onTouchStart={isFullscreen ? revealHint : undefined}
        onDoubleClick={isFullscreen ? () => void exitFullscreen() : undefined}
        style={{ backgroundColor: uploadedImage ? '#000000' : activeHex }}
        className={cn(
          'relative flex items-center justify-center overflow-hidden transition-colors duration-150',
          isFullscreen
            ? 'h-full w-full'
            : 'h-[40svh] min-h-[260px] w-full rounded-2xl border sm:h-[52vh] md:h-[58vh] md:max-h-[680px] lg:h-[calc(100svh-370px)] lg:min-h-[420px] lg:max-h-[620px]',
          isFallbackFullscreen && 'fixed inset-0 z-[100] h-dvh max-h-none rounded-none border-0',
          isFullscreen && !isHintVisible && 'cursor-none',
        )}
      >
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
                'pointer-events-auto flex items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 text-sm ring-1 backdrop-blur',
                overlayChipClass,
              )}
            >
              <span>{t('exitHint', 'Press Esc or double-click to exit · ← → to change color')}</span>
              <button
                type="button"
                onClick={() => void exitFullscreen()}
                className={cn('inline-flex size-8 items-center justify-center rounded-full ring-1', overlayChipClass)}
                aria-label={t('exitFullscreen', 'Exit fullscreen')}
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => void enterFullscreen()}
            className={cn(
              'inline-flex h-14 items-center gap-2.5 rounded-full px-7 text-base font-bold shadow-xl transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none md:-translate-y-8 md:h-16 md:px-8 md:text-lg',
              isLight ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900',
            )}
          >
            <Maximize className="size-5" aria-hidden="true" />
            <span>{t('openFullscreen', 'Open fullscreen')}</span>
          </button>
        )}
      </div>

      {!isFullscreen && (
        <>
          {/* Title and intro sit on the stage so the screen itself starts at the top of the page. */}
          <div
            className={cn(
              'pointer-events-none absolute left-4 right-4 top-4 flex items-start justify-between gap-3 sm:left-7 sm:right-7 sm:top-6',
              overlayTextClass,
              uploadedImage && '[text-shadow:0_1px_3px_rgb(0_0_0/0.6)]',
            )}
          >
            <div className="flex min-w-0 flex-col gap-1.5">
              <h1 id="hero-heading" className="text-balance text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-tight">
                {title}
              </h1>
              {intro && <p className="hidden max-w-md text-pretty text-sm leading-relaxed opacity-85 sm:block lg:text-[15px]">{intro}</p>}
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <span className={cn('rounded-full px-3 py-1 font-mono text-xs font-semibold ring-1', overlayChipClass)}>
                {uploadedImage ? t('uploadedImage', 'Uploaded Image') : activeHex}
              </span>
              <span className={cn('hidden rounded-full px-3 py-1 text-xs font-medium ring-1 lg:inline', overlayChipClass)}>
                {t('stageHint', 'F fullscreen · ← → change color')}
              </span>
            </div>
          </div>

          {/* Control dock: floats on the stage from tablet up, sits under it on phones. */}
          <div className="mt-3 flex flex-col gap-2.5 rounded-2xl border bg-background/95 p-2.5 shadow-lg backdrop-blur md:absolute md:inset-x-4 md:bottom-4 md:mt-0 lg:inset-x-auto lg:left-1/2 lg:w-max lg:max-w-[calc(100%-2rem)] lg:-translate-x-1/2 lg:flex-row lg:items-center lg:gap-3 lg:pl-4">
            <div
              role="group"
              aria-label={t('screenColors', 'Screen Colors')}
              className="-mx-1 flex min-w-0 items-center gap-2 overflow-x-auto px-1 py-1 [scrollbar-width:none] md:justify-between lg:justify-start [&::-webkit-scrollbar]:hidden"
            >
              {SCREEN_COLORS.map((color, index) => {
                const isSelected = !uploadedImage && color.id === selectedId
                const name = t(color.id, color.name)
                return (
                  <Link
                    key={color.id}
                    href={color.path}
                    scroll={false}
                    onClick={() => {
                      clearImage()
                      setSelectedId(color.id)
                    }}
                    aria-label={name}
                    aria-current={isSelected ? 'page' : undefined}
                    title={`${name} (${index + 1})`}
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-full ring-1 ring-inset ring-black/15 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 lg:size-8',
                      isSelected && 'ring-2 ring-offset-2 ring-blue-600 ring-offset-background',
                    )}
                    style={{ backgroundColor: color.hex }}
                  >
                    {isSelected && (
                      <Check className={cn('size-4', isLightColor(color.hex) ? 'text-black' : 'text-white')} aria-hidden="true" />
                    )}
                  </Link>
                )
              })}
            </div>

            <span aria-hidden="true" className="hidden h-8 w-px bg-border lg:block" />

            <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap">
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
              <ResolutionControls
                compact
                className="min-w-[220px] flex-1 lg:min-w-0"
                activeHex={activeHex}
                activeName={uploadedImage ? 'image' : activeName}
                uploadedImageUrl={uploadedImage}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
