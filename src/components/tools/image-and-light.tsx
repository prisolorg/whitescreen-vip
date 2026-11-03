'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SCREEN_COLORS, normalizeHex } from '@/lib/screen-colors'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { ActionButton, ControlRow, Segmented, Slider } from '@/components/tool-kit/controls'

const RESOLUTIONS = [
  { label: 'HD 1280×720', width: 1280, height: 720 },
  { label: 'Full HD 1920×1080', width: 1920, height: 1080 },
  { label: 'QHD 2560×1440', width: 2560, height: 1440 },
  { label: '4K 3840×2160', width: 3840, height: 2160 },
  { label: 'Phone 1080×2400', width: 1080, height: 2400 },
  { label: 'Square 1080×1080', width: 1080, height: 1080 },
] as const

const MAX_SIZE = 8192

export function downloadSolidImage(hex: string, width: number, height: number, format: 'png' | 'jpg') {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  if (!context) return
  context.fillStyle = hex
  context.fillRect(0, 0, width, height)
  const type = format === 'png' ? 'image/png' : 'image/jpeg'
  canvas.toBlob(
    (blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `screen-${hex.slice(1).toLowerCase()}-${width}x${height}.${format}`
      link.click()
      URL.revokeObjectURL(url)
    },
    type,
    0.95,
  )
}

const clampSize = (value: number) => Math.min(MAX_SIZE, Math.max(1, Math.round(value) || 1))

export function ImageGenerator({ defaultHex = '#FFFFFF' }: { defaultHex?: string }) {
  const [hex, setHex] = useState(defaultHex)
  const [hexDraft, setHexDraft] = useState(defaultHex)
  const [width, setWidth] = useState(1920)
  const [height, setHeight] = useState(1080)
  const [format, setFormat] = useState<'png' | 'jpg'>('png')

  const applyHex = (value: string) => {
    setHexDraft(value)
    const normalized = normalizeHex(value)
    if (normalized) setHex(normalized)
  }

  return (
    <div className="grid gap-6 rounded-2xl border bg-card p-4 shadow-sm sm:p-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="flex items-center justify-center rounded-xl border bg-muted/50 p-6">
        <div
          role="img"
          aria-label={`Preview of a ${hex} image at ${width} by ${height} pixels`}
          className="max-h-72 w-full max-w-full rounded-md shadow-sm ring-1 ring-black/10"
          style={{ background: hex, aspectRatio: `${width} / ${height}`, maxWidth: width < height ? '12rem' : undefined }}
        />
      </div>
      <div className="flex flex-col gap-5">
        <fieldset>
          <legend className="mb-2 text-sm font-medium">Color</legend>
          <div className="flex flex-wrap gap-2">
            {SCREEN_COLORS.map((color) => (
              <button
                key={color.id}
                type="button"
                aria-label={color.name}
                aria-pressed={hex === color.hex}
                onClick={() => applyHex(color.hex)}
                className={cn(
                  'size-8 rounded-full ring-1 ring-black/15 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2',
                  hex === color.hex && 'outline-2 outline-offset-2 outline-foreground',
                )}
                style={{ background: color.hex }}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <input
              type="color"
              aria-label="Custom color"
              value={hex}
              onChange={(event) => applyHex(event.target.value.toUpperCase())}
              className="size-10 cursor-pointer rounded-lg border bg-transparent p-1"
            />
            <input
              type="text"
              aria-label="Hex code"
              value={hexDraft}
              onChange={(event) => applyHex(event.target.value)}
              className="h-10 w-32 rounded-lg border bg-background px-3 font-mono text-sm uppercase outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-2 text-sm font-medium">Resolution</legend>
          <div className="flex flex-wrap gap-2">
            {RESOLUTIONS.map((resolution) => {
              const active = resolution.width === width && resolution.height === height
              return (
                <button
                  key={resolution.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setWidth(resolution.width)
                    setHeight(resolution.height)
                  }}
                  className={cn(
                    'h-9 rounded-lg border px-3 text-sm transition-colors hover:bg-accent',
                    active && 'border-foreground bg-accent font-medium',
                  )}
                >
                  {resolution.label}
                </button>
              )
            })}
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <label className="flex items-center gap-2">
              <span className="sr-only">Width</span>
              <input
                type="number"
                min={1}
                max={MAX_SIZE}
                value={width}
                onChange={(event) => setWidth(clampSize(Number(event.target.value)))}
                className="h-10 w-24 rounded-lg border bg-background px-3 font-mono outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <span aria-hidden="true">×</span>
            <label className="flex items-center gap-2">
              <span className="sr-only">Height</span>
              <input
                type="number"
                min={1}
                max={MAX_SIZE}
                value={height}
                onChange={(event) => setHeight(clampSize(Number(event.target.value)))}
                className="h-10 w-24 rounded-lg border bg-background px-3 font-mono outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <span className="text-muted-foreground">px</span>
          </div>
        </fieldset>
        <ControlRow>
          <Segmented
            label="Format"
            value={format}
            onChange={setFormat}
            options={[
              { value: 'png', label: 'PNG' },
              { value: 'jpg', label: 'JPG' },
            ]}
          />
          <ActionButton variant="primary" onClick={() => downloadSolidImage(hex, width, height, format)}>
            <Download aria-hidden="true" />
            Download image
          </ActionButton>
        </ControlRow>
      </div>
    </div>
  )
}

/** Approximate RGB for a black-body color temperature (Tanner Helland's approximation). */
function kelvinToRgb(kelvin: number) {
  const temp = kelvin / 100
  const clamp = (value: number) => Math.round(Math.min(255, Math.max(0, value)))
  const red = temp <= 66 ? 255 : 329.698727446 * Math.pow(temp - 60, -0.1332047592)
  const green =
    temp <= 66 ? 99.4708025861 * Math.log(temp) - 161.1195681661 : 288.1221695283 * Math.pow(temp - 60, -0.0755148492)
  const blue = temp >= 66 ? 255 : temp <= 19 ? 0 : 138.5177312231 * Math.log(temp - 10) - 305.0447927307
  return `rgb(${clamp(red)} ${clamp(green)} ${clamp(blue)})`
}


function subscribeResize(callback: () => void) {
  window.addEventListener('resize', callback)
  window.addEventListener('orientationchange', callback)
  return () => {
    window.removeEventListener('resize', callback)
    window.removeEventListener('orientationchange', callback)
  }
}

function readDisplayInfo() {
  return JSON.stringify({
    screen: `${window.screen.width} × ${window.screen.height}`,
    physical: `${Math.round(window.screen.width * window.devicePixelRatio)} × ${Math.round(window.screen.height * window.devicePixelRatio)}`,
    viewport: `${window.innerWidth} × ${window.innerHeight}`,
    available: `${window.screen.availWidth} × ${window.screen.availHeight}`,
    dpr: window.devicePixelRatio.toFixed(2).replace(/\.?0+$/, ''),
    depth: `${window.screen.colorDepth}-bit`,
    orientation: window.innerWidth >= window.innerHeight ? 'Landscape' : 'Portrait',
  })
}

export function ResolutionTest() {
  const raw = useSyncExternalStore(subscribeResize, readDisplayInfo, () => '')
  const [info, setInfo] = useState<Record<string, string> | null>(null)
  useEffect(() => setInfo(raw ? JSON.parse(raw) : null), [raw])

  const rows: [string, string][] = [
    ['Physical pixels', 'physical'],
    ['Browser viewport', 'viewport'],
    ['Available area', 'available'],
    ['Pixel ratio', 'dpr'],
    ['Color depth', 'depth'],
    ['Orientation', 'orientation'],
  ]

  // The headline resolution sits below the page title, with the other readings in a compact grid,
  // so nothing overlaps at any stage size.
  return (
    <ToolStage
      label="Screen resolution test"
      tone="light"
      reserveHeadingSpace
      className="bg-neutral-100"
      controls={
        <p className="text-sm text-muted-foreground">
          Values update live as you resize or rotate. The checkerboard square should look like even gray at 100% zoom; visible
          stripes or moiré mean the image is being scaled.
        </p>
      }
    >
      <div className="flex size-full flex-col items-center justify-center gap-3 px-3 pb-3 text-neutral-900 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <span
            aria-hidden="true"
            title="1-pixel checkerboard"
            className="size-10 shrink-0 rounded-md ring-1 ring-black/15 sm:size-14"
            style={{ background: 'repeating-conic-gradient(#000 0 25%, #fff 0 50%) 0 0 / 2px 2px' }}
          />
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500 sm:text-xs">Screen resolution</p>
            <p className="font-mono text-3xl font-bold tabular-nums leading-tight sm:text-5xl">{info?.screen ?? '—'}</p>
          </div>
        </div>
        <dl className="grid w-full max-w-2xl grid-cols-3 gap-1.5 sm:gap-2">
          {rows.map(([label, key]) => (
            <div key={key} className="min-w-0 rounded-lg bg-white px-2 py-1.5 shadow-sm ring-1 ring-black/5 sm:px-3 sm:py-2">
              <dt className="truncate text-[10px] text-neutral-500 sm:text-xs">{label}</dt>
              <dd className="truncate font-mono text-xs font-semibold tabular-nums sm:text-sm">{info?.[key] ?? '—'}</dd>
            </div>
          ))}
        </dl>
      </div>
    </ToolStage>
  )
}
