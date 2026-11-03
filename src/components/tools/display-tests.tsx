'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { ActionButton, ControlRow, Segmented, Slider, Toggle } from '@/components/tool-kit/controls'
import { useAnimationFrame, useCanvasSize, usePrefersReducedMotion } from '@/components/tool-kit/hooks'
import { StageArrows } from '@/components/screen-stage/stage-parts'

/** Median frame time over recent frames, which is how the display's refresh rate shows up in a browser. */
function useFrameTimes(size = 120) {
  const timesRef = useRef<number[]>([])
  const push = (delta: number) => {
    const times = timesRef.current
    times.push(delta)
    if (times.length > size) times.shift()
  }
  const reset = () => {
    timesRef.current = []
  }
  const stats = () => {
    const times = timesRef.current
    if (times.length < 10) return null
    const sorted = [...times].sort((a, b) => a - b)
    const median = sorted[Math.floor(sorted.length / 2)]
    const hz = 1000 / median
    // Frames that took clearly longer than one refresh were dropped or late.
    const late = times.filter((t) => t > median * 1.5).length
    return { median, hz, min: sorted[0], max: sorted[sorted.length - 1], late: late / times.length, times }
  }
  return { push, stats, reset }
}

const STANDARD_RATES = [30, 50, 60, 72, 75, 90, 100, 120, 144, 165, 170, 180, 200, 240, 280, 360, 480]
const nearestRate = (hz: number) => STANDARD_RATES.reduce((best, rate) => (Math.abs(rate - hz) < Math.abs(best - hz) ? rate : best), 60)

/* ---------------- Touch screen test ---------------- */

const TOUCH_COLORS = ['#38bdf8', '#f472b6', '#a3e635', '#facc15', '#fb923c', '#c084fc', '#2dd4bf', '#f87171', '#e5e7eb', '#60a5fa']
const CELL = 44

type TouchMode = 'draw' | 'grid' | 'points'

export function TouchScreenTest() {
  const { canvasRef, width, height, dpr } = useCanvasSize(2)
  const [mode, setMode] = useState<TouchMode>('grid')
  const [lineWidth, setLineWidth] = useState(6)
  const [active, setActive] = useState(0)
  const [maxTouches, setMaxTouches] = useState(0)
  const [coverage, setCoverage] = useState(0)
  const [supported, setSupported] = useState<number | null>(null)
  const pointersRef = useRef(new Map<number, { x: number; y: number; color: string }>())
  const cellsRef = useRef(new Set<string>())
  const colorIndex = useRef(0)

  useEffect(() => setSupported(navigator.maxTouchPoints ?? 0), [])

  const columns = Math.max(1, Math.ceil(width / CELL))
  const rows = Math.max(1, Math.ceil(height / CELL))

  const context = () => {
    const ctx = canvasRef.current?.getContext('2d')
    ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
    return ctx
  }

  // Redraw the background (and the grid of untouched cells) whenever the mode or size changes.
  const reset = () => {
    const ctx = context()
    pointersRef.current.clear()
    cellsRef.current.clear()
    setCoverage(0)
    setActive(0)
    if (!ctx || !width) return
    ctx.fillStyle = '#0b0f14'
    ctx.fillRect(0, 0, width, height)
    if (mode === 'grid') {
      ctx.strokeStyle = 'rgba(255,255,255,0.12)'
      ctx.lineWidth = 1
      for (let c = 0; c < columns; c++) for (let r = 0; r < rows; r++) ctx.strokeRect(c * CELL + 0.5, r * CELL + 0.5, CELL - 1, CELL - 1)
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(reset, [mode, width, height, dpr])

  const point = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    return { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }

  const markCell = (x: number, y: number, color: string) => {
    const c = Math.floor(x / CELL)
    const r = Math.floor(y / CELL)
    const key = `${c}:${r}`
    if (c < 0 || r < 0 || c >= columns || r >= rows || cellsRef.current.has(key)) return
    cellsRef.current.add(key)
    const ctx = context()
    if (ctx) {
      ctx.fillStyle = color
      ctx.globalAlpha = 0.75
      ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2)
      ctx.globalAlpha = 1
    }
    setCoverage(cellsRef.current.size / (columns * rows))
  }

  const onDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    const { x, y } = point(event)
    const color = TOUCH_COLORS[colorIndex.current++ % TOUCH_COLORS.length]
    pointersRef.current.set(event.pointerId, { x, y, color })
    setActive(pointersRef.current.size)
    setMaxTouches((m) => Math.max(m, pointersRef.current.size))
    if (mode === 'grid') markCell(x, y, color)
    if (mode === 'draw') {
      const ctx = context()
      if (ctx) {
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(x, y, lineWidth / 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }

  const onMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const pointer = pointersRef.current.get(event.pointerId)
    if (!pointer) return
    const { x, y } = point(event)
    if (mode === 'grid') {
      // Mark every cell along the stroke so fast swipes leave no gaps.
      const steps = Math.ceil(Math.hypot(x - pointer.x, y - pointer.y) / (CELL / 3))
      for (let i = 1; i <= steps; i++) markCell(pointer.x + ((x - pointer.x) * i) / steps, pointer.y + ((y - pointer.y) * i) / steps, pointer.color)
    } else if (mode === 'draw') {
      const ctx = context()
      if (ctx) {
        ctx.strokeStyle = pointer.color
        ctx.lineWidth = lineWidth
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(pointer.x, pointer.y)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
    }
    pointer.x = x
    pointer.y = y
  }

  const onUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    pointersRef.current.delete(event.pointerId)
    setActive(pointersRef.current.size)
  }

  // Points mode: draw a ring and coordinates for each finger currently down.
  useAnimationFrame(() => {
    if (mode !== 'points') return
    const ctx = context()
    if (!ctx || !width) return
    ctx.fillStyle = '#0b0f14'
    ctx.fillRect(0, 0, width, height)
    let n = 1
    for (const p of pointersRef.current.values()) {
      ctx.strokeStyle = p.color
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(p.x, p.y, 34, 0, Math.PI * 2)
      ctx.stroke()
      ctx.strokeStyle = 'rgba(255,255,255,0.15)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(p.x, 0)
      ctx.lineTo(p.x, height)
      ctx.moveTo(0, p.y)
      ctx.lineTo(width, p.y)
      ctx.stroke()
      ctx.fillStyle = p.color
      ctx.font = '600 13px ui-monospace, monospace'
      ctx.fillText(`#${n++}  ${Math.round(p.x)}, ${Math.round(p.y)}`, p.x + 40, p.y - 40)
    }
  })

  return (
    <ToolStage
      label="Touch screen test"
      tone="dark"
      reserveHeadingSpace
      className="bg-[#0b0f14]"
      controls={
        <ControlRow>
          <Segmented
            label="Mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: 'grid', label: 'Dead zone grid' },
              { value: 'draw', label: 'Draw' },
              { value: 'points', label: 'Multi-touch' },
            ]}
          />
          {mode === 'draw' && <Slider label="Line width" value={lineWidth} min={2} max={30} onChange={setLineWidth} format={(v) => `${v}px`} />}
          <ActionButton onClick={reset}>
            <RotateCcw aria-hidden="true" />
            Clear
          </ActionButton>
        </ControlRow>
      }
    >
      <div className="relative size-full">
        <canvas
          ref={canvasRef}
          aria-label="Touch area"
          className="absolute inset-0 size-full touch-none select-none"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        />
        <div className="pointer-events-none absolute left-3 top-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-white/85 sm:text-xs">
          <span className="rounded-full bg-black/55 px-2.5 py-1">Touches {active}</span>
          <span className="rounded-full bg-black/55 px-2.5 py-1">Max {maxTouches}</span>
          {mode === 'grid' && <span className="rounded-full bg-black/55 px-2.5 py-1">Covered {Math.round(coverage * 100)}%</span>}
          {supported !== null && <span className="rounded-full bg-black/55 px-2.5 py-1">Device supports {supported || 'no'} touch points</span>}
        </div>
      </div>
    </ToolStage>
  )
}

/* ---------------- Refresh rate test ---------------- */

export function RefreshRateTest() {
  const { canvasRef, width, height, dpr } = useCanvasSize(2)
  const frames = useFrameTimes(240)
  const [reading, setReading] = useState<ReturnType<ReturnType<typeof useFrameTimes>['stats']>>(null)
  const [range, setRange] = useState<{ low: number; high: number } | null>(null)
  const sinceUpdate = useRef(0)
  const warmup = useRef(0)
  const x = useRef(0)

  const restart = () => {
    frames.reset()
    warmup.current = 0
    setReading(null)
    setRange(null)
  }

  // Hidden tabs are throttled by the browser, so start over when the page becomes visible again.
  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === 'visible') restart()
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useAnimationFrame((delta) => {
    // Skip the first half second: the first frames after load are often slow.
    warmup.current += delta
    if (warmup.current > 500) frames.push(delta)
    sinceUpdate.current += delta
    if (sinceUpdate.current > 400) {
      sinceUpdate.current = 0
      const stats = frames.stats()
      setReading(stats)
      if (stats) {
        const hz = Math.round(stats.hz)
        setRange((r) => (r ? { low: Math.min(r.low, hz), high: Math.max(r.high, hz) } : { low: hz, high: hz }))
      }
    }
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx || !width) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, width, height)

    // Frame-time graph along the bottom: one bar per frame, red when a frame ran late.
    const stats = frames.stats()
    const graphH = Math.min(60, height * 0.22)
    if (stats) {
      const barW = width / 240
      stats.times.forEach((t, i) => {
        const h = Math.min(graphH, (t / (stats.median * 2)) * graphH)
        ctx.fillStyle = t > stats.median * 1.5 ? '#ef4444' : 'rgba(56,189,248,0.6)'
        ctx.fillRect(i * barW, height - h, Math.max(1, barW - 0.5), h)
      })
    }

    // A block that moves one step per refresh: smooth at high Hz, steppy at low Hz.
    const size = Math.min(36, height * 0.12)
    x.current = (x.current + (width / 2) * (delta / 1000)) % (width + size)
    ctx.fillStyle = '#f8fafc'
    ctx.fillRect(x.current - size, height - graphH - size - 10, size, size)
  })

  const hz = reading ? Math.round(reading.hz) : null
  return (
    <ToolStage
      label="Refresh rate test"
      tone="dark"
      reserveHeadingSpace
      doubleClickFullscreen
      className="bg-[#0a0a0a]"
      controls={
        <>
          <ControlRow>
            <ActionButton onClick={restart}>
              <RotateCcw aria-hidden="true" />
              Measure again
            </ActionButton>
            <p className="pb-2 font-mono text-xs text-muted-foreground">
              {range ? `Seen: ${range.low}–${range.high} Hz` : 'Measuring…'}
            </p>
          </ControlRow>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Browsers draw once per refresh, so frame timing shows your refresh rate. For a high-refresh reading, plug in a laptop,
            close heavy tabs and keep this window on the screen you are testing.
          </p>
        </>
      }
    >
      <div className="relative size-full">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />
        <div className="pointer-events-none relative flex h-[65%] flex-col items-center justify-center text-center text-white">
          <p className="font-mono text-5xl font-bold tabular-nums leading-none sm:text-7xl" aria-live="polite">
            {hz ? `${hz} Hz` : '…'}
          </p>
          <p className="mt-2 px-3 text-xs text-white/70 sm:text-sm">
            {reading
              ? `≈ ${nearestRate(reading.hz)} Hz display · ${reading.median.toFixed(2)} ms per frame · ${Math.round(reading.late * 100)}% late frames`
              : 'Measuring your display…'}
          </p>
        </div>
      </div>
    </ToolStage>
  )
}

/* ---------------- Monitor ghosting test ---------------- */

const GHOST_LANES = [
  { label: 'Dark', background: '#1f1f1f' },
  { label: 'Mid gray', background: '#7f7f7f' },
  { label: 'Light', background: '#cfcfcf' },
]

/** A sharp-edged target: light body with dark bars, so smearing and overshoot halos are easy to see. */
function drawTarget(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(x, y, size * 1.6, size)
  ctx.fillStyle = '#000000'
  const bar = size * 0.16
  for (let i = 0; i < 3; i++) ctx.fillRect(x + size * 0.25 + i * bar * 2.2, y + size * 0.2, bar, size * 0.6)
  ctx.fillStyle = '#00a2ff'
  ctx.fillRect(x + size * 1.15, y + size * 0.2, size * 0.25, size * 0.6)
}

export function MonitorGhostingTest() {
  const { canvasRef, width, height, dpr } = useCanvasSize(2)
  const [speed, setSpeed] = useState(960)
  const [isPaused, setIsPaused] = useState(false)
  const [grid, setGrid] = useState(true)
  const offset = useRef(0)

  useAnimationFrame((delta) => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx || !width) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const laneH = height / GHOST_LANES.length
    const size = Math.min(56, laneH * 0.5)
    const travel = width + size * 2
    offset.current = (offset.current + speed * (delta / 1000)) % travel
    GHOST_LANES.forEach((lane, i) => {
      const y = i * laneH
      ctx.fillStyle = lane.background
      ctx.fillRect(0, y, width, laneH)
      if (grid) {
        ctx.fillStyle = i === 2 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.08)'
        for (let gx = 0; gx < width; gx += 40) ctx.fillRect(gx, y, 1, laneH)
      }
      ctx.fillStyle = i === 2 ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.65)'
      ctx.font = '600 11px ui-monospace, monospace'
      ctx.fillText(lane.label.toUpperCase(), 10, y + 16)
      drawTarget(ctx, offset.current - size * 1.6, y + (laneH - size) / 2, size)
    })
  }, !isPaused)

  return (
    <ToolStage
      label="Monitor ghosting test"
      tone="dark"
      reserveHeadingSpace
      doubleClickFullscreen
      className="bg-[#1f1f1f]"
      controls={
        <ControlRow>
          <Slider label="Speed" value={speed} min={240} max={2400} step={120} onChange={setSpeed} format={(v) => `${v} px/s`} />
          <Toggle label="Reference grid" checked={grid} onChange={setGrid} />
          <ActionButton onClick={() => setIsPaused((p) => !p)} aria-pressed={isPaused}>
            {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            {isPaused ? 'Resume' : 'Pause'}
          </ActionButton>
        </ControlRow>
      }
    >
      {/* Lanes stop above the double-tap hint so it never covers the bottom lane. */}
      <div className="relative h-[calc(100%-2.5rem)] w-full">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />
      </div>
    </ToolStage>
  )
}

/* ---------------- Frame rate test ---------------- */

const FPS_LANES = [15, 24, 30, 60, 0] as const // 0 = every display refresh

export function FrameRateTest() {
  const { canvasRef, width, height, dpr } = useCanvasSize(2)
  const [speed, setSpeed] = useState(600)
  const [isPaused, setIsPaused] = useState(false)
  const frames = useFrameTimes(120)
  const [displayHz, setDisplayHz] = useState<number | null>(null)
  const clock = useRef(0)
  const sinceUpdate = useRef(0)

  useAnimationFrame((delta) => {
    frames.push(delta)
    sinceUpdate.current += delta
    if (sinceUpdate.current > 500) {
      sinceUpdate.current = 0
      const s = frames.stats()
      if (s) setDisplayHz(Math.round(s.hz))
    }
    if (isPaused) return
    clock.current += delta / 1000
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx || !width) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#0b0b0f'
    ctx.fillRect(0, 0, width, height)
    const laneH = height / FPS_LANES.length
    const size = Math.min(36, laneH * 0.5)
    const travel = width + size
    FPS_LANES.forEach((fps, i) => {
      const y = i * laneH
      ctx.fillStyle = i % 2 ? '#111118' : '#0b0b0f'
      ctx.fillRect(0, y, width, laneH)
      // Each lane only moves on its own frame ticks, like a video at that frame rate.
      const t = fps ? Math.floor(clock.current * fps) / fps : clock.current
      const x = ((t * speed) % travel) - size
      ctx.fillStyle = ['#f87171', '#fb923c', '#facc15', '#4ade80', '#38bdf8'][i]
      ctx.beginPath()
      ctx.roundRect(x, y + (laneH - size) / 2, size, size, size * 0.25)
      ctx.fill()
      ctx.fillStyle = 'rgba(255,255,255,0.8)'
      ctx.font = '600 12px ui-monospace, monospace'
      ctx.fillText(fps ? `${fps} FPS` : `${displayHz ?? '…'} FPS (max)`, 10, y + 18)
    })
  })

  return (
    <ToolStage
      label="Frame rate test"
      tone="dark"
      reserveHeadingSpace
      doubleClickFullscreen
      className="bg-[#0b0b0f]"
      controls={
        <ControlRow>
          <Slider label="Speed" value={speed} min={120} max={1800} step={60} onChange={setSpeed} format={(v) => `${v} px/s`} />
          <ActionButton onClick={() => setIsPaused((p) => !p)} aria-pressed={isPaused}>
            {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            {isPaused ? 'Resume' : 'Pause'}
          </ActionButton>
          <p className="pb-2 font-mono text-xs text-muted-foreground">Your display: {displayHz ? `${displayHz} FPS` : 'measuring…'}</p>
        </ControlRow>
      }
    >
      {/* Lanes stop above the double-tap hint so it never covers the bottom lane. */}
      <div className="relative h-[calc(100%-2.5rem)] w-full">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />
      </div>
    </ToolStage>
  )
}

/* ---------------- Screen burn-in test ---------------- */

const BURN_FIELDS = [
  { label: '50% gray', color: '#808080' },
  { label: '20% gray', color: '#333333' },
  { label: 'White', color: '#ffffff' },
  { label: 'Red', color: '#ff0000' },
  { label: 'Green', color: '#00ff00' },
  { label: 'Blue', color: '#0000ff' },
  { label: 'Black', color: '#000000' },
] as const

type FixMode = 'sweep' | 'colors' | 'noise'

export function ScreenBurnInTest() {
  const [mode, setMode] = useState<'check' | 'fix'>('check')
  const [field, setField] = useState(0)
  const [autoCycle, setAutoCycle] = useState(false)
  const [fixMode, setFixMode] = useState<FixMode>('sweep')
  const [minutes, setMinutes] = useState(10)
  const [fixEndsAt, setFixEndsAt] = useState<number | null>(null)
  const [left, setLeft] = useState(0)
  const reducedMotion = usePrefersReducedMotion()
  const { canvasRef, width, height, dpr } = useCanvasSize(1)
  const sweep = useRef(0)
  const colorTimer = useRef(0)
  const colorStep = useRef(0)

  useEffect(() => {
    if (!autoCycle || mode !== 'check') return
    const id = window.setInterval(() => setField((f) => (f + 1) % BURN_FIELDS.length), 4000)
    return () => window.clearInterval(id)
  }, [autoCycle, mode])

  useEffect(() => {
    if (!fixEndsAt) return
    const id = window.setInterval(() => {
      const remaining = fixEndsAt - Date.now()
      if (remaining <= 0) setFixEndsAt(null)
      setLeft(Math.max(0, remaining))
    }, 500)
    return () => window.clearInterval(id)
  }, [fixEndsAt])

  const fixing = mode === 'fix' && fixEndsAt !== null

  // Fixer visuals: a white bar sweeping over black, full-screen color steps, or color noise.
  useAnimationFrame((delta) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !width) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    if (fixMode === 'sweep') {
      sweep.current = (sweep.current + width * 0.5 * (delta / 1000)) % (width + 120)
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = '#fff'
      ctx.fillRect(sweep.current - 120, 0, 120, height)
    } else if (fixMode === 'colors') {
      colorTimer.current += delta
      if (colorTimer.current > (reducedMotion ? 1000 : 250)) {
        colorTimer.current = 0
        colorStep.current = (colorStep.current + 1) % 5
      }
      ctx.fillStyle = ['#ff0000', '#00ff00', '#0000ff', '#ffffff', '#000000'][colorStep.current]
      ctx.fillRect(0, 0, width, height)
    } else {
      const w = Math.ceil(width / 4)
      const h = Math.ceil(height / 4)
      const image = ctx.createImageData(w, h)
      for (let i = 0; i < image.data.length; i += 4) {
        image.data[i] = Math.random() * 255
        image.data[i + 1] = Math.random() * 255
        image.data[i + 2] = Math.random() * 255
        image.data[i + 3] = 255
      }
      const off = new OffscreenCanvas(w, h)
      off.getContext('2d')?.putImageData(image, 0, 0)
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(off, 0, 0, width, height)
    }
  }, fixing)

  const current = BURN_FIELDS[field]
  const tone = mode === 'check' && ['#ffffff', '#00ff00', '#808080'].includes(current.color) ? 'light' : 'dark'
  const move = (dir: 1 | -1) => setField((f) => (f + dir + BURN_FIELDS.length) % BURN_FIELDS.length)

  return (
    <ToolStage
      label="Screen burn-in test"
      tone={tone}
      doubleClickFullscreen
      style={{ background: mode === 'check' ? current.color : '#000' }}
      controls={
        <>
          <ControlRow>
            <Segmented
              label="Mode"
              value={mode}
              onChange={(value) => {
                setMode(value)
                setFixEndsAt(null)
              }}
              options={[
                { value: 'check', label: 'Check for burn-in' },
                { value: 'fix', label: 'Burn-in fixer' },
              ]}
            />
            {mode === 'check' ? (
              <>
                <Segmented
                  label="Field"
                  value={String(field)}
                  onChange={(value) => setField(Number(value))}
                  options={BURN_FIELDS.map((f, i) => ({ value: String(i), label: f.label }))}
                />
                <Toggle label="Auto-cycle (4 s)" checked={autoCycle} onChange={setAutoCycle} />
              </>
            ) : (
              <>
                <Segmented
                  label="Fixer pattern"
                  value={fixMode}
                  onChange={setFixMode}
                  options={[
                    { value: 'sweep', label: 'White sweep' },
                    { value: 'colors', label: 'Color cycle' },
                    { value: 'noise', label: 'Color noise' },
                  ]}
                />
                <Slider label="Run for" value={minutes} min={1} max={60} onChange={setMinutes} format={(v) => `${v} min`} />
                <ActionButton variant="primary" onClick={() => setFixEndsAt(fixing ? null : Date.now() + minutes * 60_000)}>
                  {fixing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                  {fixing ? 'Stop' : 'Start fixer'}
                </ActionButton>
              </>
            )}
          </ControlRow>
          {mode === 'fix' && fixMode !== 'sweep' && (
            <p className="text-xs text-muted-foreground">Photosensitivity warning: this pattern flashes. Use White sweep if flashing bothers you.</p>
          )}
        </>
      }
    >
      {({ isFullscreen }) => (
        <>
          {/* The canvas stays mounted in both modes so its size tracking keeps working. */}
          <div className={mode === 'check' ? 'invisible absolute inset-0' : 'absolute inset-0'}>
            <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" style={{ imageRendering: 'pixelated' }} />
            {mode === 'fix' && !fixing && (
              <p className="absolute inset-x-0 bottom-12 text-center text-sm text-white/80">Choose a pattern and press Start fixer.</p>
            )}
            {fixing && (
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 font-mono text-xs text-white">
                {Math.floor(left / 60000)}:{String(Math.floor((left % 60000) / 1000)).padStart(2, '0')} left
              </span>
            )}
          </div>
          {mode === 'check' && (
            <>
              <StageArrows
                tone={tone}
                hidden={isFullscreen}
                prev={{ label: 'Previous field', onSelect: () => move(-1) }}
                next={{ label: 'Next field', onSelect: () => move(1) }}
              />
              <span className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white">
                {current.label}
              </span>
            </>
          )}
        </>
      )}
    </ToolStage>
  )
}
