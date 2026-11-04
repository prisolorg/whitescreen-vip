'use client'

import { tx } from '@/lib/tx'
import { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import {
  ControlRow,
  Slider,
  Segmented,
  Toggle,
  ActionButton,
} from '@/components/tool-kit/controls'
import { useCanvasSize, useAnimationFrame, useNow, usePrefersReducedMotion } from '@/components/tool-kit/hooks'
import { StageArrows } from '@/components/screen-stage/stage-parts'

/* ---------------- Matrix Digital Rain ---------------- */

const CHAR_SETS = {
  matrix: 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ1234567890:・.=*+-<>',
  binary: '01',
  cyber: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*+-=',
}

const MATRIX_COLORS = {
  green: { label: 'Green', head: '#d7ffd9', trail: '#00ff41' },
  blue: { label: 'Blue', head: '#e0f2ff', trail: '#38bdf8' },
  red: { label: 'Red', head: '#ffe1e1', trail: '#ff3b3b' },
  gold: { label: 'Gold', head: '#fff6d6', trail: '#facc15' },
} as const

export function MatrixScreensaver() {
  const { canvasRef, width, height, dpr } = useCanvasSize()
  const reducedMotion = usePrefersReducedMotion()
  const [speed, setSpeed] = useState(6)
  const [density, setDensity] = useState(4)
  const [fontSize, setFontSize] = useState(18)
  const [charSet, setCharSet] = useState<'matrix' | 'binary' | 'cyber'>('matrix')
  const [color, setColor] = useState<keyof typeof MATRIX_COLORS>('green')
  const [isPaused, setIsPaused] = useState(false)
  // One drop per column: the row of its leading character, and whether the column is raining.
  const dropsRef = useRef<{ row: number; active: boolean }[]>([])
  const elapsedRef = useRef(0)

  const chars = CHAR_SETS[charSet]

  // New columns whenever the size or font changes; drops start spread over the screen so rain shows at once.
  useEffect(() => {
    if (!width || !height) return
    const columns = Math.ceil(width / fontSize)
    const rows = Math.ceil(height / fontSize)
    dropsRef.current = Array.from({ length: columns }, () => ({ row: Math.floor(Math.random() * rows), active: Math.random() < density / 5 }))
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, width, height)
    }
  }, [width, height, dpr, fontSize, density, canvasRef])

  useAnimationFrame((delta) => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx || !width || !height) return
    // Speed sets how often the rain moves down one row (frame-rate independent).
    const stepMs = (reducedMotion ? 160 : 110) - speed * 9
    elapsedRef.current += delta
    if (elapsedRef.current < stepMs) return
    elapsedRef.current = 0

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.09)'
    ctx.fillRect(0, 0, width, height)
    ctx.font = `${fontSize}px ui-monospace, "MS Gothic", monospace`
    ctx.textBaseline = 'top'
    const palette = MATRIX_COLORS[color]
    const rows = Math.ceil(height / fontSize)

    dropsRef.current.forEach((drop, column) => {
      if (!drop.active) {
        if (Math.random() < 0.004 * density) drop.active = true
        return
      }
      const x = column * fontSize
      const y = drop.row * fontSize
      // Re-color the previous head as trail, then draw a bright new head.
      ctx.fillStyle = palette.trail
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y - fontSize)
      ctx.fillStyle = palette.head
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y)
      drop.row++
      if (drop.row > rows && Math.random() > 0.95) {
        drop.row = 0
        drop.active = Math.random() < density / 5
      }
    })
  }, !isPaused)

  return (
    <ToolStage
      label="Matrix screensaver"
      tone="dark"
      doubleClickFullscreen
      className="bg-black"
      controls={
        <>
          <ControlRow>
            <Segmented
              label="Characters"
              value={charSet}
              onChange={setCharSet}
              options={[
                { value: 'matrix', label: 'Katakana' },
                { value: 'binary', label: 'Binary' },
                { value: 'cyber', label: 'Alphanumeric' },
              ]}
            />
            <Segmented
              label="Color"
              value={color}
              onChange={setColor}
              options={(Object.keys(MATRIX_COLORS) as (keyof typeof MATRIX_COLORS)[]).map((key) => ({ value: key, label: MATRIX_COLORS[key].label }))}
            />
          </ControlRow>
          <ControlRow>
            <Slider label="Speed" value={speed} min={1} max={10} onChange={setSpeed} />
            <Slider label="Density" value={density} min={1} max={5} onChange={setDensity} />
            <Slider label="Character size" value={fontSize} min={12} max={32} step={2} onChange={setFontSize} format={(v) => `${v}px`} />
            <ActionButton onClick={() => setIsPaused((p) => !p)} aria-pressed={isPaused}>
              {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
              {isPaused ? tx('Resume') : tx('Pause')}
            </ActionButton>
          </ControlRow>
        </>
      }
    >
      <div className="absolute inset-0">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full bg-black" />
      </div>
    </ToolStage>
  )
}

/* ---------------- Flip Clock Screensaver ---------------- */

type FlipPalette = { card: string; cardTop: string; text: string; hinge: string; label: string }

const FLIP_PALETTES: Record<'dark' | 'light', FlipPalette> = {
  dark: { card: '#1b1b1d', cardTop: '#242427', text: '#f4f4f5', hinge: 'rgba(0,0,0,0.75)', label: 'rgba(255,255,255,0.5)' },
  light: { card: '#ffffff', cardTop: '#f7f7f8', text: '#18181b', hinge: 'rgba(0,0,0,0.14)', label: 'rgba(0,0,0,0.45)' },
}

/** One half of a flip card. The text is drawn at full card height and clipped, so both halves line up. */
function FlipHalf({
  text,
  half,
  palette,
  className,
}: {
  text: string
  half: 'top' | 'bottom'
  palette: FlipPalette
  className?: string
}) {
  const isTop = half === 'top'
  return (
    <div
      className={`absolute inset-x-0 h-1/2 overflow-hidden ${isTop ? 'top-0' : 'bottom-0'} ${className ?? ''}`}
      style={{
        background: isTop ? palette.cardTop : palette.card,
        borderRadius: isTop ? 'var(--flip-r) var(--flip-r) 0 0' : '0 0 var(--flip-r) var(--flip-r)',
      }}
    >
      <span
        className="absolute inset-x-0 flex items-center justify-center"
        style={{ height: '200%', top: isTop ? 0 : '-100%', lineHeight: 1 }}
      >
        {text}
      </span>
    </div>
  )
}

/** A two-digit card that flips like a split-flap clock whenever its value changes. */
function FlipCard({ value, label, palette, corner }: { value: string; label: string; palette: FlipPalette; corner?: string }) {
  const [previous, setPrevious] = useState(value)
  const [flipId, setFlipId] = useState(0)
  const lastRef = useRef(value)

  useEffect(() => {
    if (value === lastRef.current) return
    setPrevious(lastRef.current)
    lastRef.current = value
    setFlipId((id) => id + 1)
    const timer = window.setTimeout(() => setPrevious(value), 560)
    return () => window.clearTimeout(timer)
  }, [value])

  const isFlipping = previous !== value

  return (
    <div className="flex flex-col items-center" style={{ gap: 'calc(var(--flip-h) * 0.08)' }}>
      <div
        className="relative font-bold tabular-nums shadow-2xl"
        style={{
          width: 'calc(var(--flip-h) * 1.18)',
          height: 'var(--flip-h)',
          fontSize: 'calc(var(--flip-h) * 0.72)',
          color: palette.text,
          perspective: 'calc(var(--flip-h) * 4)',
          borderRadius: 'var(--flip-r)',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.04em',
        }}
      >
        {/* Static halves: new value on top, old value below until the flap lands. */}
        <FlipHalf text={value} half="top" palette={palette} />
        <FlipHalf text={isFlipping ? previous : value} half="bottom" palette={palette} />
        {isFlipping && (
          <>
            <FlipHalf key={`t${flipId}`} text={previous} half="top" palette={palette} className="flip-fold-top z-10" />
            <FlipHalf key={`b${flipId}`} text={value} half="bottom" palette={palette} className="flip-fold-bottom z-10" />
          </>
        )}
        <div className="absolute inset-x-0 top-1/2 z-20 h-[2px] -translate-y-1/2" style={{ background: palette.hinge }} />
        {corner && (
          <span
            className="absolute left-[6%] top-[5%] z-20 font-semibold uppercase"
            style={{ fontSize: 'calc(var(--flip-h) * 0.1)', color: palette.label, letterSpacing: '0.08em' }}
          >
            {corner}
          </span>
        )}
      </div>
      <span
        className="font-medium uppercase"
        style={{ fontSize: 'max(10px, calc(var(--flip-h) * 0.075))', color: palette.label, letterSpacing: '0.18em' }}
      >
        {tx(label)}
      </span>
    </div>
  )
}

export function FlipClockScreensaver() {
  const now = useNow(250)
  const [is24Hour, setIs24Hour] = useState(true)
  const [showSeconds, setShowSeconds] = useState(true)
  const [showDate, setShowDate] = useState(true)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const palette = FLIP_PALETTES[theme]

  // `now` is null until mounted, so prerendered HTML shows placeholders rather than the build time.
  let hours = now?.getHours() ?? 0
  const isPm = hours >= 12
  if (!is24Hour) {
    hours = hours % 12 || 12
  }
  const pad = (value: number) => (now ? String(value).padStart(2, '0') : '--')
  const dateStr = now ? now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' }) : ''

  // Card height follows the stage, so the clock never overflows or runs under the title on any screen.
  const cardHeight = showSeconds ? 'min(46cqh, 24cqw)' : 'min(52cqh, 34cqw)'

  return (
    <ToolStage
      label="Flip clock screensaver"
      tone={theme}
      reserveHeadingSpace
      doubleClickFullscreen
      className={theme === 'dark' ? 'bg-neutral-950' : 'bg-neutral-200'}
      controls={
        <ControlRow>
          <Toggle label="24-Hour Format" checked={is24Hour} onChange={setIs24Hour} />
          <Toggle label="Show Seconds" checked={showSeconds} onChange={setShowSeconds} />
          <Toggle label="Show Date" checked={showDate} onChange={setShowDate} />
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
      {/* Bottom padding keeps the date clear of the double-tap hint. */}
      <div className="size-full select-none pb-10" style={{ containerType: 'size' }}>
        <div
          className="flex size-full flex-col items-center justify-center"
          style={{ ['--flip-h' as string]: cardHeight, ['--flip-r' as string]: 'calc(var(--flip-h) * 0.09)', gap: 'calc(var(--flip-h) * 0.14)' }}
        >
          <div className="flex items-start" style={{ gap: 'calc(var(--flip-h) * 0.12)' }}>
            <FlipCard value={pad(hours)} label="Hours" palette={palette} corner={!is24Hour && now ? (isPm ? tx('PM') : tx('AM')) : undefined} />
            <FlipCard value={pad(now?.getMinutes() ?? 0)} label="Minutes" palette={palette} />
            {showSeconds && <FlipCard value={pad(now?.getSeconds() ?? 0)} label="Seconds" palette={palette} />}
          </div>
          {showDate && (
            <p className="text-center font-medium" style={{ fontSize: 'max(12px, calc(var(--flip-h) * 0.12))', color: palette.label }}>
              {dateStr || ' '}
            </p>
          )}
        </div>
      </div>
    </ToolStage>
  )
}

/* ---------------- DVD Screensaver ---------------- */

/** Bright colors the logo switches between on each wall hit (never the same color twice in a row). */
const DVD_COLORS = ['#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#00c7be', '#32ade6', '#007aff', '#af52de', '#ff2d92', '#ffffff']

/** Draws the disc-style logo (bold italic "DVD" over a disc with "VIDEO" cut out of it) inside a w×h box. */
function drawDvdLogo(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
  ctx.save()
  ctx.translate(x, y)
  ctx.fillStyle = color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'alphabetic'

  // Wordmark: heavy, wide and slanted, filling the top ~62% of the box.
  ctx.save()
  ctx.translate(w / 2, h * 0.6)
  ctx.transform(1, 0, -0.22, 1, 0, 0)
  ctx.scale(1.25, 1)
  ctx.font = `900 ${Math.round(h * 0.66)}px "Arial Black", "Helvetica Neue", Arial, sans-serif`
  ctx.fillText('DVD', 0, 0, (w * 0.96) / 1.25)
  ctx.restore()

  // Disc: a flat ellipse with a small hole, with "VIDEO" knocked out of it.
  const cy = h * 0.81
  ctx.beginPath()
  ctx.ellipse(w / 2, cy, w * 0.47, h * 0.13, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalCompositeOperation = 'destination-out'
  ctx.font = `800 ${Math.round(h * 0.15)}px "Arial Black", "Helvetica Neue", Arial, sans-serif`
  ctx.textBaseline = 'middle'
  'VIDEO'.split('').forEach((letter, i) => ctx.fillText(letter, w / 2 + (i - 2) * w * 0.105, cy + h * 0.005))
  ctx.restore()
}

export function DvdScreensaver() {
  const { canvasRef, width, height, dpr } = useCanvasSize()
  const reducedMotion = usePrefersReducedMotion()
  const [speed, setSpeed] = useState(5)
  const [logoSize, setLogoSize] = useState(5)
  const [bounces, setBounces] = useState(0)
  const [corners, setCorners] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [flash, setFlash] = useState(false)

  // Position is in CSS pixels; velocity is a unit direction scaled by speed each frame.
  const stateRef = useRef({ x: -1, y: -1, dx: 1, dy: 1, color: DVD_COLORS[6] })

  useAnimationFrame((delta) => {
    const canvas = canvasRef.current
    if (!canvas || !width || !height) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Logo is sized from the screen, like the original: about a fifth of the width at the default size.
    const logoW = Math.min(width * (0.1 + logoSize * 0.022), height * 1.1)
    const logoH = logoW * 0.5
    const s = stateRef.current
    if (s.x < 0) {
      s.x = Math.random() * Math.max(1, width - logoW)
      s.y = Math.random() * Math.max(1, height - logoH)
      s.dx = Math.random() > 0.5 ? 1 : -1
      s.dy = Math.random() > 0.5 ? 1 : -1
    }

    // Pixels per second, so the speed is the same on 60 Hz and 120 Hz screens.
    const pxPerSecond = (reducedMotion ? 0.4 : 1) * (40 + speed * 28) * Math.max(1, width / 1280)
    const step = (pxPerSecond * delta) / 1000
    s.x += s.dx * step
    s.y += s.dy * step

    let hitX = false
    let hitY = false
    if (s.x <= 0) {
      s.x = 0
      s.dx = 1
      hitX = true
    } else if (s.x + logoW >= width) {
      s.x = width - logoW
      s.dx = -1
      hitX = true
    }
    if (s.y <= 0) {
      s.y = 0
      s.dy = 1
      hitY = true
    } else if (s.y + logoH >= height) {
      s.y = height - logoH
      s.dy = -1
      hitY = true
    }

    if (hitX || hitY) {
      const choices = DVD_COLORS.filter((c) => c !== s.color)
      s.color = choices[Math.floor(Math.random() * choices.length)]
      setBounces((b) => b + 1)
      if (hitX && hitY) {
        setCorners((c) => c + 1)
        setFlash(true)
        window.setTimeout(() => setFlash(false), 1200)
      }
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, width, height)
    drawDvdLogo(ctx, s.x, s.y, logoW, logoH, s.color)
  }, !isPaused)

  return (
    <ToolStage
      label="DVD screensaver"
      tone="dark"
      reserveHeadingSpace
      doubleClickFullscreen
      className="bg-black"
      controls={
        <ControlRow>
          <Slider label="Speed" value={speed} min={1} max={10} onChange={setSpeed} />
          <Slider label="Logo Size" value={logoSize} min={1} max={10} onChange={setLogoSize} />
          <div className="flex items-center gap-4 pb-2 font-mono text-xs text-muted-foreground">
            <span>
              {tx('Bounces:')}{' '}<strong className="text-foreground">{bounces}</strong>
            </span>
            <span>
              {tx('Corner hits:')}{' '}<strong className="text-primary">{corners}</strong>
            </span>
          </div>
          <ActionButton onClick={() => setIsPaused((p) => !p)} aria-pressed={isPaused}>
            {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            {isPaused ? tx('Resume') : tx('Pause')}
          </ActionButton>
        </ControlRow>
      }
    >
      {/* The logo bounces inside this box, below the page title (the whole screen in fullscreen). */}
      <div className="relative size-full">
        <canvas ref={canvasRef} className="absolute inset-0 size-full bg-black" />
      </div>
      {flash && (
        <div className="pointer-events-none absolute inset-x-0 bottom-12 z-10 text-center text-2xl font-black uppercase tracking-widest text-white drop-shadow sm:text-4xl">
          {tx('Corner hit!')}
        </div>
      )}
    </ToolStage>
  )
}

/* ---------------- Motivational Quote Screensaver ---------------- */

/** Short quotes from long-established authors and proverbs. */
const QUOTES: readonly { text: string; author: string }[] = [
  { text: 'The journey of a thousand miles begins with a single step.', author: 'Lao Tzu' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { text: 'Begin, be bold, and venture to be wise.', author: 'Horace' },
  { text: 'Well begun is half done.', author: 'Aristotle' },
  { text: 'Luck is what happens when preparation meets opportunity.', author: 'Seneca' },
  { text: 'While we wait for life, life passes.', author: 'Seneca' },
  { text: 'You have power over your mind, not outside events. Realize this, and you will find strength.', author: 'Marcus Aurelius' },
  { text: 'The best revenge is not to be like your enemy.', author: 'Marcus Aurelius' },
  { text: 'No man is free who is not master of himself.', author: 'Epictetus' },
  { text: 'First say to yourself what you would be; and then do what you have to do.', author: 'Epictetus' },
  { text: 'Well done is better than well said.', author: 'Benjamin Franklin' },
  { text: 'Energy and persistence conquer all things.', author: 'Benjamin Franklin' },
  { text: 'Do not wait to strike till the iron is hot; but make it hot by striking.', author: 'William Butler Yeats' },
  { text: 'Patience and diligence, like faith, remove mountains.', author: 'William Penn' },
  { text: 'Go confidently in the direction of your dreams. Live the life you have imagined.', author: 'Henry David Thoreau' },
  { text: 'Nothing great was ever achieved without enthusiasm.', author: 'Ralph Waldo Emerson' },
  { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
  { text: 'Believe you can and you are halfway there.', author: 'Theodore Roosevelt' },
  { text: 'Genius is one percent inspiration and ninety-nine percent perspiration.', author: 'Thomas Edison' },
  { text: 'I have not failed. I have just found ten thousand ways that will not work.', author: 'Thomas Edison' },
  { text: 'Whether you think you can, or you think you cannot, you are right.', author: 'Henry Ford' },
  { text: 'Quality is not an act, it is a habit.', author: 'Aristotle' },
  { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
  { text: 'Courage is not the absence of fear, but acting in spite of it.', author: 'Mark Twain' },
  { text: 'Knowing is not enough; we must apply. Willing is not enough; we must do.', author: 'Johann Wolfgang von Goethe' },
  { text: 'Fall seven times, stand up eight.', author: 'Japanese proverb' },
  { text: 'A smooth sea never made a skilled sailor.', author: 'English proverb' },
  { text: 'Little by little, one travels far.', author: 'Spanish proverb' },
  { text: 'Every day is a new beginning.', author: 'Proverb' },
  { text: 'Act as if what you do makes a difference. It does.', author: 'William James' },
]

const QUOTE_THEMES = {
  night: { label: 'Night', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', text: '#f8fafc', muted: 'rgba(248,250,252,0.6)', tone: 'dark' },
  sunrise: { label: 'Sunrise', background: 'linear-gradient(135deg, #f97316 0%, #db2777 55%, #7c3aed 100%)', text: '#ffffff', muted: 'rgba(255,255,255,0.75)', tone: 'dark' },
  forest: { label: 'Forest', background: 'linear-gradient(135deg, #064e3b 0%, #134e4a 100%)', text: '#ecfdf5', muted: 'rgba(236,253,245,0.65)', tone: 'dark' },
  paper: { label: 'Paper', background: '#f5f0e6', text: '#1c1917', muted: 'rgba(28,25,23,0.55)', tone: 'light' },
  black: { label: 'Black', background: '#000000', text: '#ffffff', muted: 'rgba(255,255,255,0.55)', tone: 'dark' },
} as const

type QuoteTheme = keyof typeof QUOTE_THEMES

export function MotivationalQuoteScreensaver() {
  const [index, setIndex] = useState(0)
  const [seconds, setSeconds] = useState(12)
  const [theme, setTheme] = useState<QuoteTheme>('night')
  const [isPaused, setIsPaused] = useState(false)
  const [shuffle, setShuffle] = useState(true)
  const [showClock, setShowClock] = useState(false)
  const now = useNow(1000)
  const palette = QUOTE_THEMES[theme]
  const quote = QUOTES[index]

  const go = (direction: 1 | -1) => {
    setIndex((current) => {
      if (shuffle && direction === 1) {
        let next = current
        while (next === current) next = Math.floor(Math.random() * QUOTES.length)
        return next
      }
      return (current + direction + QUOTES.length) % QUOTES.length
    })
  }

  // Start on a random quote after mount (kept fixed during prerender so hydration matches).
  useEffect(() => {
    setIndex(Math.floor(Math.random() * QUOTES.length))
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => go(1), seconds * 1000)
    return () => window.clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, seconds, shuffle])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') go(1)
      else if (event.key === 'ArrowLeft') go(-1)
      else if (event.key === ' ' && event.target === document.body) {
        event.preventDefault()
        setIsPaused((p) => !p)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shuffle])

  return (
    <ToolStage
      label="Motivational quote screensaver"
      tone={palette.tone}
      reserveHeadingSpace
      doubleClickFullscreen
      style={{ background: palette.background }}
      controls={
        <ControlRow>
          <Segmented
            label="Background"
            value={theme}
            onChange={setTheme}
            options={(Object.keys(QUOTE_THEMES) as QuoteTheme[]).map((key) => ({ value: key, label: QUOTE_THEMES[key].label }))}
          />
          <Slider label="Seconds per quote" value={seconds} min={5} max={60} onChange={setSeconds} />
          <Toggle label="Shuffle" checked={shuffle} onChange={setShuffle} />
          <Toggle label="Show Clock" checked={showClock} onChange={setShowClock} />
          <ActionButton onClick={() => setIsPaused((p) => !p)} aria-pressed={isPaused}>
            {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            {isPaused ? tx('Resume') : tx('Pause')}
          </ActionButton>
        </ControlRow>
      }
    >
      {({ isFullscreen }) => (
        <div className="relative size-full select-none" style={{ containerType: 'size', color: palette.text }}>
          <figure key={index} className="quote-fade flex size-full flex-col items-center justify-center px-14 text-center sm:px-24">
            <blockquote
              className="max-w-[24ch] font-serif font-semibold leading-tight text-balance"
              style={{ fontSize: `clamp(20px, ${quote.text.length > 70 ? 6.4 : 8}cqmin, 84px)` }}
            >
              “{tx(quote.text)}”
            </blockquote>
            <figcaption className="mt-[4cqmin] font-medium uppercase" style={{ fontSize: 'clamp(11px, 2.4cqmin, 22px)', color: palette.muted, letterSpacing: '0.16em' }}>
              — {quote.author}
            </figcaption>
          </figure>
          {showClock && now && (
            <span className="absolute bottom-3 right-4 font-mono tabular-nums" style={{ fontSize: 'clamp(12px, 3cqmin, 28px)', color: palette.muted }}>
              {now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
          <StageArrows
            tone={palette.tone}
            hidden={isFullscreen}
            prev={{ label: 'Previous quote', onSelect: () => go(-1) }}
            next={{ label: 'Next quote', onSelect: () => go(1) }}
          />
        </div>
      )}
    </ToolStage>
  )
}
