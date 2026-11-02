'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, RefreshCw, Moon, Sun } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import {
  ControlRow,
  Slider,
  Segmented,
  TextInput,
  Toggle,
  ActionButton,
} from '@/components/tool-kit/controls'
import { useCanvasSize, useAnimationFrame, useNow, usePrefersReducedMotion } from '@/components/tool-kit/hooks'

/* ---------------- Matrix Digital Rain ---------------- */

const CHAR_SETS = {
  matrix: 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ1234567890:・.=*+-<>',
  binary: '01',
  cyber: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*+-=',
}

export function MatrixScreensaver() {
  const { canvasRef, width, height, dpr } = useCanvasSize()
  const [speed, setSpeed] = useState(5)
  const [density, setDensity] = useState(3)
  const [charSet, setCharSet] = useState<'matrix' | 'binary' | 'cyber'>('matrix')
  const [isPaused, setIsPaused] = useState(false)
  const dropsRef = useRef<number[]>([])

  const chars = CHAR_SETS[charSet]

  useEffect(() => {
    if (!width) return
    const fontSize = 16 * dpr
    const columns = Math.floor((width * dpr) / fontSize)
    dropsRef.current = Array.from({ length: columns }, () => Math.floor(Math.random() * -50))
  }, [width, dpr])

  useAnimationFrame(() => {
    const canvas = canvasRef.current
    if (!canvas || !width || !height) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const fontSize = Math.max(14, Math.floor(16 * dpr))
    ctx.font = `${fontSize}px monospace`

    const drops = dropsRef.current
    for (let i = 0; i < drops.length; i++) {
      if (Math.random() > 1 - density * 0.1) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Bright white/green lead character
        ctx.fillStyle = '#C8FFC8'
        ctx.shadowColor = '#00FF41'
        ctx.shadowBlur = 8
        ctx.fillText(char, x, y)

        // Trailing classic matrix green
        ctx.fillStyle = '#00FF41'
        ctx.shadowBlur = 2
        ctx.fillText(char, x, y - fontSize)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += speed * 0.25
      }
    }
  }, !isPaused)

  return (
    <ToolStage
      label="Matrix screensaver"
      tone="dark"
      controls={
        <ControlRow>
          <Segmented
            label="Characters"
            value={charSet}
            onChange={setCharSet}
            options={[
              { value: 'matrix', label: 'Matrix Katakana' },
              { value: 'binary', label: 'Binary' },
              { value: 'cyber', label: 'Alphanumeric' },
            ]}
          />
          <Slider label="Speed" value={speed} min={1} max={10} onChange={setSpeed} />
          <Slider label="Density" value={density} min={1} max={5} onChange={setDensity} />
          <ActionButton onClick={() => setIsPaused((p) => !p)} aria-pressed={isPaused}>
            {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            {isPaused ? 'Resume' : 'Pause'}
          </ActionButton>
        </ControlRow>
      }
    >
      <canvas ref={canvasRef} className="absolute inset-0 size-full bg-black" />
    </ToolStage>
  )
}

/* ---------------- Flip Clock Screensaver ---------------- */

export function FlipClockScreensaver() {
  const now = useNow(500)
  const [is24Hour, setIs24Hour] = useState(true)
  const [showSeconds, setShowSeconds] = useState(true)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const date = now ?? new Date()
  let hours = date.getHours()
  const isPm = hours >= 12
  if (!is24Hour) {
    hours = hours % 12 || 12
  }
  const hStr = String(hours).padStart(2, '0')
  const mStr = String(date.getMinutes()).padStart(2, '0')
  const sStr = String(date.getSeconds()).padStart(2, '0')

  const dateStr = date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  })

  return (
    <ToolStage
      label="Flip clock screensaver"
      tone={theme === 'dark' ? 'dark' : 'light'}
      className={theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-neutral-100 text-neutral-900'}
      controls={
        <ControlRow>
          <Toggle label="24-Hour Format" checked={is24Hour} onChange={setIs24Hour} />
          <Toggle label="Show Seconds" checked={showSeconds} onChange={setShowSeconds} />
          <Segmented
            label="Theme"
            value={theme}
            onChange={setTheme}
            options={[
              { value: 'dark', label: 'Dark' },
              { value: 'light', label: 'Light' },
            ]}
          />
        </ControlRow>
      }
    >
      <div className="flex h-full flex-col items-center justify-center p-6 select-none">
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Hours Card */}
          <div className="flex flex-col items-center">
            <div className="relative flex size-24 sm:size-36 md:size-44 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-800 to-neutral-900 text-4xl sm:text-7xl md:text-8xl font-bold font-mono tracking-tighter text-white shadow-2xl">
              <div className="absolute inset-x-0 top-1/2 h-px bg-black/60 shadow-inner" />
              <span>{hStr}</span>
            </div>
            <span className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Hours</span>
          </div>

          <span className="text-3xl sm:text-6xl font-mono text-muted-foreground animate-pulse">:</span>

          {/* Minutes Card */}
          <div className="flex flex-col items-center">
            <div className="relative flex size-24 sm:size-36 md:size-44 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-800 to-neutral-900 text-4xl sm:text-7xl md:text-8xl font-bold font-mono tracking-tighter text-white shadow-2xl">
              <div className="absolute inset-x-0 top-1/2 h-px bg-black/60 shadow-inner" />
              <span>{mStr}</span>
            </div>
            <span className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Minutes</span>
          </div>

          {showSeconds && (
            <>
              <span className="text-3xl sm:text-6xl font-mono text-muted-foreground animate-pulse">:</span>
              <div className="flex flex-col items-center">
                <div className="relative flex size-24 sm:size-36 md:size-44 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-800 to-neutral-900 text-4xl sm:text-7xl md:text-8xl font-bold font-mono tracking-tighter text-white shadow-2xl">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-black/60 shadow-inner" />
                  <span>{sStr}</span>
                </div>
                <span className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Seconds</span>
              </div>
            </>
          )}

          {!is24Hour && (
            <div className="ml-2 flex flex-col justify-center text-xs sm:text-base font-bold font-mono text-muted-foreground">
              <span className={!isPm ? 'text-primary font-bold' : 'opacity-40'}>AM</span>
              <span className={isPm ? 'text-primary font-bold' : 'opacity-40'}>PM</span>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm sm:text-lg font-medium text-muted-foreground">
          {dateStr}
        </div>
      </div>
    </ToolStage>
  )
}

/* ---------------- DVD Screensaver ---------------- */

const DVD_COLORS = [
  '#FF2D55', // Red
  '#FF9500', // Orange
  '#FFCC00', // Yellow
  '#4CD964', // Green
  '#5AC8FA', // Cyan
  '#007AFF', // Blue
  '#5856D6', // Indigo
  '#AF52DE', // Purple
]

export function DvdScreensaver({ customLogo = false }: { customLogo?: boolean }) {
  const { canvasRef, width, height, dpr } = useCanvasSize()
  const [speed, setSpeed] = useState(4)
  const [text, setText] = useState('DVD')
  const [colorIndex, setColorIndex] = useState(0)
  const [bounces, setBounces] = useState(0)
  const [corners, setCorners] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const posRef = useRef({ x: 100, y: 100, vx: 2, vy: 2 })
  const colorIndexRef = useRef(0)

  useEffect(() => {
    posRef.current = {
      x: Math.random() * (width ? width * dpr * 0.5 : 200),
      y: Math.random() * (height ? height * dpr * 0.5 : 200),
      vx: (Math.random() > 0.5 ? 1 : -1) * (speed * 0.6),
      vy: (Math.random() > 0.5 ? 1 : -1) * (speed * 0.6),
    }
  }, [width, height, dpr])

  useAnimationFrame(() => {
    const canvas = canvasRef.current
    if (!canvas || !width || !height) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#050505'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const boxW = Math.max(120, Math.floor(160 * dpr))
    const boxH = Math.max(60, Math.floor(80 * dpr))

    const p = posRef.current
    p.x += p.vx * (speed / 3)
    p.y += p.vy * (speed / 3)

    let hitX = false
    let hitY = false

    if (p.x <= 0) {
      p.x = 0
      p.vx = Math.abs(p.vx)
      hitX = true
    } else if (p.x + boxW >= canvas.width) {
      p.x = canvas.width - boxW
      p.vx = -Math.abs(p.vx)
      hitX = true
    }

    if (p.y <= 0) {
      p.y = 0
      p.vy = Math.abs(p.vy)
      hitY = true
    } else if (p.y + boxH >= canvas.height) {
      p.y = canvas.height - boxH
      p.vy = -Math.abs(p.vy)
      hitY = true
    }

    if (hitX || hitY) {
      colorIndexRef.current = (colorIndexRef.current + 1) % DVD_COLORS.length
      setColorIndex(colorIndexRef.current)
      setBounces((b) => b + 1)
      if (hitX && hitY) {
        setCorners((c) => c + 1)
      }
    }

    const currentColor = DVD_COLORS[colorIndexRef.current]

    // Draw DVD Badge
    ctx.save()
    ctx.translate(p.x, p.y)

    // Glowing border & background
    ctx.fillStyle = currentColor
    ctx.strokeStyle = currentColor
    ctx.lineWidth = 4 * dpr

    // Text logo
    ctx.font = `bold ${Math.floor(36 * dpr)}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.shadowColor = currentColor
    ctx.shadowBlur = 12

    if (customLogo) {
      ctx.fillText(text.slice(0, 16), boxW / 2, boxH / 2)
    } else {
      // Classic DVD Video logo rendering
      ctx.fillText('DVD', boxW / 2, boxH / 2 - 8 * dpr)
      ctx.font = `bold ${Math.floor(14 * dpr)}px sans-serif`
      ctx.letterSpacing = '3px'
      ctx.fillText('VIDEO', boxW / 2, boxH / 2 + 18 * dpr)
      // Disc ellipse
      ctx.beginPath()
      ctx.ellipse(boxW / 2, boxH / 2 + 20 * dpr, boxW * 0.45, 6 * dpr, 0, 0, Math.PI * 2)
      ctx.stroke()
    }

    ctx.restore()
  }, !isPaused)

  return (
    <ToolStage
      label={customLogo ? 'Custom DVD screensaver' : 'DVD screensaver'}
      tone="dark"
      controls={
        <ControlRow>
          {customLogo && (
            <TextInput label="Logo Text" value={text} onChange={setText} maxLength={16} />
          )}
          <Slider label="Speed" value={speed} min={1} max={10} onChange={setSpeed} />
          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground pb-2">
            <span>Bounces: <strong className="text-foreground">{bounces}</strong></span>
            <span>Corner Hits: <strong className="text-primary">{corners}</strong></span>
          </div>
          <ActionButton onClick={() => setIsPaused((p) => !p)} aria-pressed={isPaused}>
            {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            {isPaused ? 'Resume' : 'Pause'}
          </ActionButton>
        </ControlRow>
      }
    >
      <canvas ref={canvasRef} className="absolute inset-0 size-full bg-neutral-950" />
    </ToolStage>
  )
}

/* ---------------- Snow Screen ---------------- */

type Flake = { x: number; y: number; r: number; d: number; speed: number }

export function SnowScreen() {
  const { canvasRef, width, height, dpr } = useCanvasSize()
  const [density, setDensity] = useState(3)
  const [speed, setSpeed] = useState(4)
  const [wind, setWind] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const flakesRef = useRef<Flake[]>([])

  useEffect(() => {
    if (!width || !height) return
    const count = density * 75
    flakesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * (width * dpr),
      y: Math.random() * (height * dpr),
      r: Math.random() * 3 * dpr + 1,
      d: Math.random() * count,
      speed: Math.random() * 1.5 + 0.5,
    }))
  }, [width, height, dpr, density])

  useAnimationFrame(() => {
    const canvas = canvasRef.current
    if (!canvas || !width || !height) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Deep winter night gradient
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
    grad.addColorStop(0, '#0a0f1d')
    grad.addColorStop(1, '#05070e')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)'
    ctx.beginPath()

    const flakes = flakesRef.current
    for (let i = 0; i < flakes.length; i++) {
      const f = flakes[i]
      ctx.moveTo(f.x, f.y)
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true)

      // Move flake
      f.y += (f.speed * speed * 0.4)
      f.x += Math.sin(f.d) * 0.5 + (wind - 1) * 0.8

      if (f.y > canvas.height) {
        f.y = -5
        f.x = Math.random() * canvas.width
      }
      if (f.x > canvas.width) f.x = 0
      if (f.x < 0) f.x = canvas.width
      f.d += 0.01
    }
    ctx.fill()
  }, !isPaused)

  return (
    <ToolStage
      label="Falling snow screen"
      tone="dark"
      controls={
        <ControlRow>
          <Slider label="Speed" value={speed} min={1} max={10} onChange={setSpeed} />
          <Slider label="Density" value={density} min={1} max={5} onChange={setDensity} />
          <Slider label="Wind" value={wind} min={0} max={3} step={0.5} onChange={setWind} />
          <ActionButton onClick={() => setIsPaused((p) => !p)} aria-pressed={isPaused}>
            {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            {isPaused ? 'Resume' : 'Pause'}
          </ActionButton>
        </ControlRow>
      }
    >
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
    </ToolStage>
  )
}
