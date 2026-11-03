'use client'

import { tx } from '@/lib/tx'
import { useState } from 'react'
import { Download, Check, AlertCircle, RefreshCw, Sparkles } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export type ResolutionPreset = {
  id: string
  label: string
  shortLabel: string
  width: number
  height: number
  aspectRatio: string
}

export const RESOLUTION_PRESETS: readonly ResolutionPreset[] = [
  { id: '480p', label: '480p SD', shortLabel: '480p', width: 854, height: 480, aspectRatio: '16:9' },
  { id: '720p', label: '720p HD', shortLabel: '720p', width: 1280, height: 720, aspectRatio: '16:9' },
  { id: '1080p', label: '1080p FHD', shortLabel: '1080p', width: 1920, height: 1080, aspectRatio: '16:9' },
  { id: '1440p', label: '1440p QHD', shortLabel: '1440p', width: 2560, height: 1440, aspectRatio: '16:9' },
  { id: '2k', label: '2K DCI', shortLabel: '2K', width: 2048, height: 1080, aspectRatio: '17:9' },
  { id: '4k', label: '4K UHD', shortLabel: '4K', width: 3840, height: 2160, aspectRatio: '16:9' },
  { id: '8k', label: '8K UHD-2', shortLabel: '8K', width: 7680, height: 4320, aspectRatio: '16:9' },
]

export const MIN_DIMENSION = 1
export const MAX_DIMENSION = 8192

export type ResolutionControlsProps = {
  activeHex: string
  activeName: string
  uploadedImageUrl?: string | null
  className?: string
  /** Just a size picker and a download button, for the floating dock. */
  compact?: boolean
}

export function ResolutionControls({ activeHex, activeName, uploadedImageUrl, className, compact }: ResolutionControlsProps) {
  const { t } = useTranslation()
  const [width, setWidth] = useState<number>(1920)
  const [height, setHeight] = useState<number>(1080)
  const [format, setFormat] = useState<'png' | 'jpeg'>('png')
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // Find active preset if width and height match exactly
  const activePreset = RESOLUTION_PRESETS.find((p) => p.width === width && p.height === height)

  const handlePresetSelect = (preset: ResolutionPreset) => {
    setWidth(preset.width)
    setHeight(preset.height)
    setErrorMsg(null)
  }

  const handleWidthChange = (val: string) => {
    setErrorMsg(null)
    const num = parseInt(val, 10)
    if (isNaN(num)) {
      setWidth(0)
    } else {
      setWidth(Math.min(MAX_DIMENSION, Math.max(0, num)))
    }
  }

  const handleHeightChange = (val: string) => {
    setErrorMsg(null)
    const num = parseInt(val, 10)
    if (isNaN(num)) {
      setHeight(0)
    } else {
      setHeight(Math.min(MAX_DIMENSION, Math.max(0, num)))
    }
  }

  const handleDownload = () => {
    if (isDownloading) return

    const validWidth = Math.min(MAX_DIMENSION, Math.max(MIN_DIMENSION, width || 1920))
    const validHeight = Math.min(MAX_DIMENSION, Math.max(MIN_DIMENSION, height || 1080))

    if (validWidth <= 0 || validHeight <= 0) {
      setErrorMsg(t('errDimensions', 'Please specify dimensions between 1 and 8192 px.'))
      return
    }

    setIsDownloading(true)
    setErrorMsg(null)

    const processBlob = (canvas: HTMLCanvasElement) => {
      const mimeType = format === 'png' ? 'image/png' : 'image/jpeg'
      const ext = format === 'png' ? 'png' : 'jpg'
      const safeColorName = uploadedImageUrl
        ? 'custom-image'
        : (activeName.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'color')
      const filename = `${safeColorName}-${validWidth}x${validHeight}.${ext}`

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

          setTimeout(() => {
            URL.revokeObjectURL(blobUrl)
          }, 1000)

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
      canvas.width = validWidth
      canvas.height = validHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        throw new Error('Canvas context could not be created')
      }

      if (uploadedImageUrl) {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
          // Match the preview (object-contain on black) instead of stretching the image.
          const scale = Math.min(validWidth / img.naturalWidth, validHeight / img.naturalHeight)
          const drawW = img.naturalWidth * scale
          const drawH = img.naturalHeight * scale
          ctx.fillStyle = '#000000'
          ctx.fillRect(0, 0, validWidth, validHeight)
          ctx.drawImage(img, (validWidth - drawW) / 2, (validHeight - drawH) / 2, drawW, drawH)
          processBlob(canvas)
        }
        img.onerror = () => {
          // Fallback to solid background if image fails to load
          ctx.fillStyle = activeHex
          ctx.fillRect(0, 0, validWidth, validHeight)
          processBlob(canvas)
        }
        img.src = uploadedImageUrl
      } else {
        ctx.fillStyle = activeHex
        ctx.fillRect(0, 0, validWidth, validHeight)
        processBlob(canvas)
      }
    } catch {
      setErrorMsg(t('errGeneration', 'Image generation error. For 8K on mobile, try 4K or 1080p.'))
      setIsDownloading(false)
    }
  }

  const megapixels = ((width * height) / 1000000).toFixed(1)

  if (compact) {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <label htmlFor="dock-size" className="sr-only">
          {t('resolution', 'Resolution & Download')}
        </label>
        <select
          id="dock-size"
          value={activePreset?.id ?? ''}
          onChange={(e) => {
            const preset = RESOLUTION_PRESETS.find((p) => p.id === e.target.value)
            if (preset) handlePresetSelect(preset)
          }}
          className="h-10 rounded-xl border bg-background px-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {RESOLUTION_PRESETS.map((preset) => (
            <option key={preset.id} value={preset.id}>
              {preset.shortLabel} · PNG
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          title={errorMsg ?? undefined}
          className={cn(
            'inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 lg:flex-none',
            downloadSuccess ? 'bg-emerald-600' : errorMsg ? 'bg-destructive' : 'bg-blue-600 hover:bg-blue-700',
          )}
        >
          {isDownloading ? (
            <RefreshCw className="size-4 animate-spin" aria-hidden="true" />
          ) : downloadSuccess ? (
            <Check className="size-4" aria-hidden="true" />
          ) : (
            <Download className="size-4" aria-hidden="true" />
          )}
          <span>
            {downloadSuccess
              ? t('downloaded', 'Downloaded!')
              : t('downloadFormat', 'Download {format}').replace('{format}', 'PNG')}
          </span>
        </button>
        {errorMsg && (
          <span role="alert" className="sr-only">
            {errorMsg}
          </span>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'mt-4 rounded-xl border bg-muted/30 p-3 sm:p-4 text-sm transition-colors',
        className,
      )}
    >
      <div className="flex flex-col gap-3">
        {/* Top: Preset Pills and Label */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            <span>{t('resolution', 'Resolution & Download')}</span>
            {activePreset && (
              <span className="ml-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                {activePreset.shortLabel}
              </span>
            )}
          </div>
          <div className="text-xs font-mono text-muted-foreground">
            {width > 0 && height > 0 ? `${width} × ${height} px (${megapixels} MP)` : ''}
          </div>
        </div>

        {/* Resolution Preset Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          {RESOLUTION_PRESETS.map((preset) => {
            const isSelected = activePreset?.id === preset.id
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetSelect(preset)}
                className={cn(
                  'h-8 rounded-lg border px-2.5 text-xs font-medium transition-colors',
                  isSelected
                    ? 'border-primary bg-primary text-primary-foreground shadow-xs'
                    : 'border-border bg-background hover:bg-muted text-foreground',
                )}
                aria-pressed={isSelected}
              >
                {tx(preset.label)}
              </button>
            )
          })}
        </div>

        {/* Custom Width & Height Inputs + Download Button */}
        <div className="flex flex-wrap items-end gap-3 pt-1 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="res-width" className="text-[11px] font-medium text-muted-foreground">
                {t('width', 'Width (px)')}
              </label>
              <input
                id="res-width"
                type="number"
                min={MIN_DIMENSION}
                max={MAX_DIMENSION}
                value={width || ''}
                onChange={(e) => handleWidthChange(e.target.value)}
                className="h-9 w-20 sm:w-24 rounded-lg border bg-background px-2.5 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <span className="pt-4 text-xs font-semibold text-muted-foreground" aria-hidden="true">
              ×
            </span>

            <div className="flex flex-col gap-1">
              <label htmlFor="res-height" className="text-[11px] font-medium text-muted-foreground">
                {t('height', 'Height (px)')}
              </label>
              <input
                id="res-height"
                type="number"
                min={MIN_DIMENSION}
                max={MAX_DIMENSION}
                value={height || ''}
                onChange={(e) => handleHeightChange(e.target.value)}
                className="h-9 w-20 sm:w-24 rounded-lg border bg-background px-2.5 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>

          {/* Format Selector */}
          <div className="flex flex-col gap-1">
            <label htmlFor="res-format" className="text-[11px] font-medium text-muted-foreground">
              {t('format', 'Format')}
            </label>
            <select
              id="res-format"
              value={format}
              onChange={(e) => setFormat(e.target.value as 'png' | 'jpeg')}
              className="h-9 rounded-lg border bg-background px-2 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="png">{t('pngLossless', 'PNG (lossless)')}</option>
              <option value="jpeg">{tx('JPG')}</option>
            </select>
          </div>

          {/* Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading || width <= 0 || height <= 0}
            className={cn(
              'inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-4 text-xs font-semibold transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 cursor-pointer',
              downloadSuccess
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
            )}
          >
            {isDownloading ? (
              <>
                <RefreshCw className="size-3.5 animate-spin" aria-hidden="true" />
                <span>{t('downloading', 'Generating...')}</span>
              </>
            ) : downloadSuccess ? (
              <>
                <Check className="size-3.5" aria-hidden="true" />
                <span>{t('downloaded', 'Downloaded!')}</span>
              </>
            ) : (
              <>
                <Download className="size-3.5" aria-hidden="true" />
                <span>{t('downloadImage', 'Download Image')}</span>
              </>
            )}
          </button>
        </div>

        {errorMsg && (
          <div className="flex items-center gap-1.5 text-xs text-destructive">
            <AlertCircle className="size-3.5" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>
    </div>
  )
}
