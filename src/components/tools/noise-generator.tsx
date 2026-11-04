'use client'

import { tx } from '@/lib/tx'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Play, Square } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { ControlRow, Segmented, Slider } from '@/components/tool-kit/controls'
import { useAnimationFrame, useCanvasSize, usePrefersReducedMotion } from '@/components/tool-kit/hooks'
import { isTypingTarget } from '@/components/tool-kit/use-fullscreen'
import type { NoiseColor } from '@/components/tool-kit/audio'
import { cn } from '@/lib/utils'
import { getLocalizedPath } from '@/lib/locale-routing'
import { useTranslation } from '@/lib/i18n'

type FilterMode = 'none' | 'lowpass' | 'highpass'
type Visual = 'wave' | 'static' | 'dark'

const NOISE_PAGES: Record<NoiseColor, string> = {
  white: '/white-noise-generator',
  pink: '/pink-noise-generator',
  brown: '/brown-noise-generator',
}

/** Settings carried from one noise page to the next in this tab. */
const SETTINGS_KEY = 'whitescreen_noise_settings'

const NOISE_LOOK: Record<NoiseColor, { label: string; stage: string; line: string; glow: string }> = {
  white: { label: 'White', stage: '#0f141b', line: '#e2e8f0', glow: 'rgba(226,232,240,0.18)' },
  pink: { label: 'Pink', stage: '#1f0d19', line: '#f9a8d4', glow: 'rgba(249,168,212,0.18)' },
  brown: { label: 'Brown', stage: '#170e08', line: '#d9a571', glow: 'rgba(217,165,113,0.18)' },
}

const SLEEP_MINUTES = [0, 15, 30, 60, 90] as const

/** Four seconds of looping noise. Each color is scaled so they sound roughly equally loud. */
function createNoiseBuffer(context: AudioContext, color: NoiseColor) {
  const length = context.sampleRate * 4
  const buffer = context.createBuffer(2, length, context.sampleRate)
  for (let channel = 0; channel < 2; channel++) {
    const data = buffer.getChannelData(channel)
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1
      if (color === 'white') {
        data[i] = white * 0.35
      } else if (color === 'pink') {
        // Paul Kellet's refined pink noise filter.
        b0 = 0.99886 * b0 + white * 0.0555179
        b1 = 0.99332 * b1 + white * 0.0750759
        b2 = 0.969 * b2 + white * 0.153852
        b3 = 0.8665 * b3 + white * 0.3104856
        b4 = 0.55 * b4 + white * 0.5329522
        b5 = -0.7616 * b5 - white * 0.016898
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.1
        b6 = white * 0.115926
      } else {
        last = (last + 0.02 * white) / 1.02
        data[i] = last * 3.2
      }
    }
    // Fade the loop seam so it never clicks.
    const fade = Math.floor(context.sampleRate * 0.02)
    for (let i = 0; i < fade; i++) {
      data[i] *= i / fade
      data[length - 1 - i] *= i / fade
    }
  }
  return buffer
}

/** Slider position (0–100) to a cutoff frequency on a log scale, 30 Hz to 15 kHz. */
const cutoffFromPosition = (position: number) => Math.round(30 * Math.pow(500, position / 100))
const formatHz = (hz: number) => (hz >= 1000 ? `${(hz / 1000).toFixed(hz >= 10000 ? 0 : 1)} kHz` : `${hz} Hz`)
const dbToGain = (db: number) => (db <= -60 ? 0 : Math.pow(10, db / 20))

type Graph = {
  context: AudioContext
  filter: BiquadFilterNode
  gain: GainNode
  analyser: AnalyserNode
  source: AudioBufferSourceNode | null
  sourceGain: GainNode | null
}

export function NoiseGenerator({ initialColor }: { initialColor: NoiseColor }) {
  const { language } = useTranslation()
  const color = initialColor
  const [isPlaying, setIsPlaying] = useState(false)
  const [filterMode, setFilterMode] = useState<FilterMode>('none')
  const [cutoffPosition, setCutoffPosition] = useState(65)
  const [volumeDb, setVolumeDb] = useState(-18)
  const [visual, setVisual] = useState<Visual>('wave')
  const [sleepMinutes, setSleepMinutes] = useState<(typeof SLEEP_MINUTES)[number]>(0)
  const [endsAt, setEndsAt] = useState<number | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)
  const graphRef = useRef<Graph | null>(null)
  const buffersRef = useRef<Partial<Record<NoiseColor, AudioBuffer>>>({})
  const reducedMotion = usePrefersReducedMotion()
  const { canvasRef, width, height, dpr } = useCanvasSize(2)
  const look = NOISE_LOOK[color]
  const cutoff = cutoffFromPosition(cutoffPosition)

  const ensureGraph = () => {
    if (graphRef.current) return graphRef.current
    const Ctor = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    const context = new Ctor()
    const filter = context.createBiquadFilter()
    const gain = context.createGain()
    const analyser = context.createAnalyser()
    analyser.fftSize = 2048
    gain.gain.value = 0
    // The analyser listens before the volume control, so the visual looks the same at any volume.
    filter.connect(gain).connect(context.destination)
    filter.connect(analyser)
    graphRef.current = { context, filter, gain, analyser, source: null, sourceGain: null }
    return graphRef.current
  }

  /** Starts (or swaps to) a looping source of the given color, crossfading over the old one. */
  const playColor = useCallback((next: NoiseColor) => {
    const graph = graphRef.current
    if (!graph) return
    const { context } = graph
    const buffer = (buffersRef.current[next] ??= createNoiseBuffer(context, next))
    const source = context.createBufferSource()
    source.buffer = buffer
    source.loop = true
    const fadeIn = context.createGain()
    fadeIn.gain.setValueAtTime(0, context.currentTime)
    fadeIn.gain.linearRampToValueAtTime(1, context.currentTime + 0.25)
    source.connect(fadeIn).connect(graph.filter)
    source.start()
    const old = graph.source
    if (old && graph.sourceGain) {
      graph.sourceGain.gain.setValueAtTime(graph.sourceGain.gain.value, context.currentTime)
      graph.sourceGain.gain.linearRampToValueAtTime(0, context.currentTime + 0.25)
      window.setTimeout(() => {
        try {
          old.stop()
        } catch {
          /* already stopped */
        }
      }, 260)
    }
    graph.source = source
    graph.sourceGain = fadeIn
  }, [])

  const start = () => {
    const graph = ensureGraph()
    if (!graph) return
    void graph.context.resume()
    playColor(color)
    graph.gain.gain.cancelScheduledValues(graph.context.currentTime)
    graph.gain.gain.setTargetAtTime(dbToGain(volumeDb), graph.context.currentTime, 0.2)
    setIsPlaying(true)
    setEndsAt(sleepMinutes ? Date.now() + sleepMinutes * 60_000 : null)
  }

  const stop = useCallback((fadeSeconds = 0.15) => {
    const graph = graphRef.current
    setIsPlaying(false)
    setEndsAt(null)
    setRemaining(null)
    if (!graph?.source) return
    const source = graph.source
    graph.source = null
    graph.gain.gain.cancelScheduledValues(graph.context.currentTime)
    graph.gain.gain.setTargetAtTime(0, graph.context.currentTime, fadeSeconds)
    window.setTimeout(() => {
      try {
        source.stop()
      } catch {
        /* already stopped */
      }
    }, fadeSeconds * 5000)
  }, [])

  // Each noise color is its own page; the switch links there and the settings come along.
  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(SETTINGS_KEY) ?? 'null') as {
        volumeDb?: number
        filterMode?: FilterMode
        cutoffPosition?: number
        visual?: Visual
      } | null
      if (!saved) return
      if (typeof saved.volumeDb === 'number') setVolumeDb(saved.volumeDb)
      if (saved.filterMode) setFilterMode(saved.filterMode)
      if (typeof saved.cutoffPosition === 'number') setCutoffPosition(saved.cutoffPosition)
      if (saved.visual) setVisual(saved.visual)
    } catch {
      /* storage unavailable */
    }
  }, [])
  useEffect(() => {
    try {
      sessionStorage.setItem(SETTINGS_KEY, JSON.stringify({ volumeDb, filterMode, cutoffPosition, visual }))
    } catch {
      /* storage unavailable */
    }
  }, [volumeDb, filterMode, cutoffPosition, visual])

  // Volume, filter type and cutoff follow the controls live.
  useEffect(() => {
    const graph = graphRef.current
    if (graph && isPlaying) graph.gain.gain.setTargetAtTime(dbToGain(volumeDb), graph.context.currentTime, 0.05)
  }, [volumeDb, isPlaying])

  useEffect(() => {
    const graph = graphRef.current
    if (!graph) return
    graph.filter.type = filterMode === 'none' ? 'allpass' : filterMode
    graph.filter.Q.value = 0.7
    graph.filter.frequency.setTargetAtTime(filterMode === 'none' ? 1000 : cutoff, graph.context.currentTime, 0.03)
  }, [filterMode, cutoff, isPlaying])

  // Sleep timer: fade out slowly over the last ten seconds.
  useEffect(() => {
    if (!endsAt) return
    const id = window.setInterval(() => {
      const left = endsAt - Date.now()
      if (left <= 0) stop(3)
      else setRemaining(left)
    }, 500)
    return () => window.clearInterval(id)
  }, [endsAt, stop])

  // Space starts and stops.
  const toggleRef = useRef<() => void>(() => {})
  toggleRef.current = () => (isPlaying ? stop() : start())
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== ' ' || isTypingTarget(event.target) || (event.target as HTMLElement)?.closest?.('button')) return
      event.preventDefault()
      toggleRef.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(
    () => () => {
      graphRef.current?.source?.stop()
      void graphRef.current?.context.close()
    },
    [],
  )

  // Visuals: a live oscilloscope and spectrum, or TV static.
  const waveRef = useRef<Uint8Array<ArrayBuffer> | null>(null)
  const specRef = useRef<Uint8Array<ArrayBuffer> | null>(null)
  const staticElapsed = useRef(0)
  useAnimationFrame((delta) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !width) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    if (visual === 'static') {
      staticElapsed.current += delta
      if (staticElapsed.current < (reducedMotion ? 160 : 33)) return
      staticElapsed.current = 0
      const grain = 3
      const w = Math.ceil(width / grain)
      const h = Math.ceil(height / grain)
      const image = ctx.createImageData(w, h)
      const data = image.data
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = data[i + 1] = data[i + 2] = value
        data[i + 3] = 255
      }
      const off = new OffscreenCanvas(w, h)
      off.getContext('2d')?.putImageData(image, 0, 0)
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(off, 0, 0, width, height)
      return
    }

    ctx.fillStyle = visual === 'dark' ? '#000' : look.stage
    ctx.fillRect(0, 0, width, height)
    if (visual === 'dark') return

    const analyser = graphRef.current?.analyser
    const mid = height * 0.62
    // Spectrum bars, faint, along the bottom.
    if (analyser && isPlaying) {
      specRef.current ??= new Uint8Array(analyser.frequencyBinCount)
      analyser.getByteFrequencyData(specRef.current)
      const bars = 64
      const barW = width / bars
      ctx.fillStyle = look.glow
      for (let i = 0; i < bars; i++) {
        // Log-spaced bins so low frequencies get room, like a real analyser.
        const index = Math.min(specRef.current.length - 1, Math.floor(Math.pow(specRef.current.length, i / bars)))
        const h = Math.min(1, specRef.current[index] / 200) * height * 0.4
        ctx.fillRect(i * barW + 1, height - h, barW - 2, h)
      }
    }
    // Oscilloscope line.
    ctx.lineWidth = 2
    ctx.strokeStyle = look.line
    ctx.shadowColor = look.line
    ctx.shadowBlur = 8
    ctx.beginPath()
    if (analyser && isPlaying) {
      waveRef.current ??= new Uint8Array(analyser.fftSize)
      analyser.getByteTimeDomainData(waveRef.current)
      const samples = waveRef.current
      const step = samples.length / width
      for (let x = 0; x < width; x++) {
        const v = (samples[Math.floor(x * step)] - 128) / 128
        const y = mid + Math.max(-1, Math.min(1, v * 1.6)) * height * 0.28
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
    } else {
      ctx.moveTo(0, mid)
      ctx.lineTo(width, mid)
    }
    ctx.stroke()
    ctx.shadowBlur = 0
  })

  const formatRemaining = (ms: number) => {
    const total = Math.ceil(ms / 1000)
    return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
  }

  return (
    <ToolStage
      label={`${look.label} noise generator`}
      tone="dark"
      reserveHeadingSpace
      style={{ background: look.stage }}
      controls={
        <>
          <ControlRow>
            <Slider
              label="Volume"
              value={volumeDb}
              min={-60}
              max={0}
              onChange={setVolumeDb}
              format={(v) => (v <= -60 ? 'Muted' : `${v} dB`)}
            />
            <Segmented
              label="Filter"
              value={filterMode}
              onChange={setFilterMode}
              options={[
                { value: 'none', label: 'None' },
                { value: 'lowpass', label: 'Low pass' },
                { value: 'highpass', label: 'High pass' },
              ]}
            />
            {filterMode !== 'none' && (
              <Slider label="Cutoff" value={cutoffPosition} min={0} max={100} onChange={setCutoffPosition} format={() => formatHz(cutoff)} />
            )}
          </ControlRow>
          <ControlRow>
            <Segmented
              label="Visual"
              value={visual}
              onChange={setVisual}
              options={[
                { value: 'wave', label: 'Waveform' },
                { value: 'static', label: 'TV static' },
                { value: 'dark', label: 'Dark' },
              ]}
            />
            <Segmented
              label="Sleep timer"
              value={String(sleepMinutes)}
              onChange={(value) => {
                const minutes = Number(value) as (typeof SLEEP_MINUTES)[number]
                setSleepMinutes(minutes)
                if (isPlaying) setEndsAt(minutes ? Date.now() + minutes * 60_000 : null)
                if (!minutes) setRemaining(null)
              }}
              options={SLEEP_MINUTES.map((m) => ({ value: String(m), label: m ? `${m} min` : tx('Off') }))}
            />
          </ControlRow>
          {visual === 'static' && (
            <p className="text-xs text-muted-foreground">{tx('Photosensitivity warning: the TV static visual flickers quickly.')}</p>
          )}
        </>
      }
    >
      <div className="relative size-full">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" style={{ imageRendering: visual === 'static' ? 'pixelated' : undefined }} />
        <div className="relative flex size-full flex-col items-center justify-center gap-4 p-4 text-white">
          <nav aria-label={tx('Noise type')} className="flex gap-1 rounded-full bg-black/45 p-1 ring-1 ring-white/15 backdrop-blur">
            {(Object.keys(NOISE_LOOK) as NoiseColor[]).map((key) => (
              <a
                key={key}
                href={getLocalizedPath(NOISE_PAGES[key], language)}
                aria-current={color === key ? 'page' : undefined}
                onClick={(event) => event.stopPropagation()}
                className={cn(
                  'inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold transition-colors',
                  color === key ? 'bg-white text-neutral-900' : 'text-white/80 hover:bg-white/10',
                )}
              >
                {tx(NOISE_LOOK[key].label)}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              toggleRef.current()
            }}
            className="inline-flex h-14 items-center gap-2.5 rounded-full bg-white px-7 text-base font-bold text-neutral-900 shadow-xl transition-transform hover:scale-[1.03] active:scale-95 sm:h-16 sm:px-9 sm:text-lg"
          >
            {isPlaying ? <Square className="size-5 fill-current" aria-hidden="true" /> : <Play className="size-5 fill-current" aria-hidden="true" />}
            {isPlaying ? tx('Stop Noise') : tx('Start Noise')}
          </button>
          <p className="rounded-full bg-black/45 px-3 py-1 text-xs text-white/75 backdrop-blur sm:text-sm" aria-live="polite">
            {isPlaying
              ? `${tx(`${look.label} noise`)} · ${volumeDb} dB${filterMode !== 'none' ? ` · ${tx(filterMode === 'lowpass' ? 'Low pass' : 'High pass')} ${formatHz(cutoff)}` : ''}${remaining ? ` · ${tx('stops in {time}').replace('{time}', formatRemaining(remaining))}` : ''}`
              : tx('Press Start or Space · sound plays only after you start it')}
          </p>
        </div>
      </div>
    </ToolStage>
  )
}
