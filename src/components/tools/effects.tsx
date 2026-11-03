'use client'

import { tx } from '@/lib/tx'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { ActionButton, ColorInput, ControlRow, Segmented, Slider, TextInput, Toggle } from '@/components/tool-kit/controls'
import { useAnimationFrame, useCanvasSize, usePrefersReducedMotion } from '@/components/tool-kit/hooks'
import { isTypingTarget } from '@/components/tool-kit/use-fullscreen'
import { downloadCanvas } from '@/components/tool-kit/download'
import { kelvinToRgb } from '@/lib/color-temperature'

function SoundButton({ isPlaying, onToggle, label = 'Sound' }: { isPlaying: boolean; onToggle: () => void; label?: string }) {
  return (
    <ActionButton onClick={onToggle} aria-pressed={isPlaying}>
      {isPlaying ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
      {(isPlaying ? tx("{label} on") : tx("{label} off")).replace("{label}", tx(label))}
    </ActionButton>
  )
}

/* ---------------- No signal ---------------- */

const SMPTE_TOP = ['#C0C0C0', '#C0C000', '#00C0C0', '#00C000', '#C000C0', '#C00000', '#0000C0']
const SMPTE_MID = ['#0000C0', '#131313', '#C000C0', '#131313', '#00C0C0', '#131313', '#C0C0C0']

export function NoSignalScreen() {
  const [style, setStyle] = useState<'bars' | 'bounce' | 'blue'>('bars')
  const [message, setMessage] = useState('NO SIGNAL')
  const [input, setInput] = useState('HDMI 1')
  const [isToneOn, setIsToneOn] = useState(false)
  const toneRef = useRef<{ context: AudioContext; oscillator: OscillatorNode } | null>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const position = useRef({ x: 40, y: 40, dx: 1.2, dy: 0.9 })
  const reducedMotion = usePrefersReducedMotion()

  const toggleTone = () => {
    if (toneRef.current) {
      toneRef.current.oscillator.stop()
      void toneRef.current.context.close()
      toneRef.current = null
      setIsToneOn(false)
      return
    }
    const context = new AudioContext()
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.frequency.value = 1000
    gain.gain.value = 0.04
    oscillator.connect(gain).connect(context.destination)
    oscillator.start()
    toneRef.current = { context, oscillator }
    setIsToneOn(true)
  }

  useEffect(() => () => {
    toneRef.current?.oscillator.stop()
    void toneRef.current?.context.close()
  }, [])

  useAnimationFrame((delta) => {
    const badge = badgeRef.current
    const parent = badge?.parentElement
    if (!badge || !parent) return
    const p = position.current
    const maxX = parent.clientWidth - badge.offsetWidth
    const maxY = parent.clientHeight - badge.offsetHeight
    p.x += p.dx * delta * 0.06
    p.y += p.dy * delta * 0.06
    if (p.x <= 0 || p.x >= maxX) p.dx *= -1
    if (p.y <= 0 || p.y >= maxY) p.dy *= -1
    p.x = Math.max(0, Math.min(maxX, p.x))
    p.y = Math.max(0, Math.min(maxY, p.y))
    badge.style.transform = `translate(${p.x}px, ${p.y}px)`
  }, style === 'bounce' && !reducedMotion)

  return (
    <ToolStage
      label="No signal screen"
      style={{ background: style === 'blue' ? '#0A2FB8' : '#000' }}
      controls={
        <>
          <ControlRow>
            <Segmented
              label="Style"
              value={style}
              onChange={setStyle}
              options={[
                { value: 'bars', label: 'Color bars' },
                { value: 'bounce', label: 'Bouncing' },
                { value: 'blue', label: 'Blue input' },
              ]}
            />
            <TextInput label="Message" value={message} onChange={setMessage} maxLength={24} />
            <TextInput label="Input name" value={input} onChange={setInput} maxLength={16} />
          </ControlRow>
          <ControlRow>
            <SoundButton isPlaying={isToneOn} onToggle={toggleTone} label="1 kHz tone" />
          </ControlRow>
        </>
      }
    >
      {style === 'bars' && (
        <div aria-hidden="true" className="absolute inset-0 flex flex-col">
          <div className="flex flex-[67]">
            {SMPTE_TOP.map((color, index) => (
              <div key={index} className="flex-1" style={{ background: color }} />
            ))}
          </div>
          <div className="flex flex-[8]">
            {SMPTE_MID.map((color, index) => (
              <div key={index} className="flex-1" style={{ background: color }} />
            ))}
          </div>
          <div className="flex flex-[25]">
            <div className="flex-[5]" style={{ background: '#00214C' }} />
            <div className="flex-[5]" style={{ background: '#FFFFFF' }} />
            <div className="flex-[5]" style={{ background: '#32006A' }} />
            <div className="flex-[13]" style={{ background: '#131313' }} />
          </div>
        </div>
      )}
      <div
        ref={badgeRef}
        className={
          style === 'bounce'
            ? 'absolute left-0 top-0 rounded-md border border-white/40 bg-black px-5 py-3 text-center'
            : 'absolute inset-0 flex items-center justify-center'
        }
      >
        <div
          className={
            style === 'bars'
              ? 'rounded bg-black/80 px-6 py-3 text-center'
              : 'text-center'
          }
        >
          <p className="font-mono text-2xl font-bold tracking-[0.2em] text-white sm:text-4xl">{message}</p>
          <p className="mt-1 font-mono text-sm tracking-widest text-white/70">{input}</p>
        </div>
      </div>
    </ToolStage>
  )
}

/* ---------------- Broken screen ---------------- */

type Impact = { x: number; y: number; seed: number; size: number }
type Pt = { x: number; y: number }

function seededRandom(seed: number) {
  let value = seed
  return () => {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}

/** Strokes one crack with a dark refraction edge, a faint glow and a bright core, like real broken glass. */
function strokeCrack(ctx: CanvasRenderingContext2D, points: Pt[], weight: number) {
  if (points.length < 2) return
  const path = new Path2D()
  path.moveTo(points[0].x, points[0].y)
  for (const p of points.slice(1)) path.lineTo(p.x, p.y)
  ctx.save()
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'
  ctx.lineWidth = weight * 5
  ctx.stroke(path)
  ctx.translate(0.8, 0.8)
  ctx.strokeStyle = 'rgba(0,0,0,0.55)'
  ctx.lineWidth = weight * 1.8
  ctx.stroke(path)
  ctx.translate(-0.8, -0.8)
  ctx.strokeStyle = 'rgba(255,255,255,0.9)'
  ctx.lineWidth = weight
  ctx.stroke(path)
  ctx.restore()
}

/**
 * Draws one impact: a crushed centre, radial cracks (some branching, the longest reaching the
 * edges), concentric rings of short cracks between them, and a few lifted shards catching light.
 */
function drawImpact(ctx: CanvasRenderingContext2D, impact: Impact, width: number, height: number, lcdDamage: boolean) {
  const random = seededRandom(impact.seed)
  const cx = impact.x * width
  const cy = impact.y * height
  const scale = Math.max(0.6, Math.min(width, height) / 700) * impact.size
  const base = 12 * scale
  const rayCount = 14 + Math.floor(random() * 9)
  const reach = Math.hypot(width, height)

  // Rays: vertices at growing distances, with a little wobble in direction.
  const rays: Pt[][] = []
  for (let r = 0; r < rayCount; r++) {
    let angle = (r / rayCount) * Math.PI * 2 + (random() - 0.5) * 0.35
    const isLong = random() < 0.45
    const vertices = isLong ? 14 : 4 + Math.floor(random() * 6)
    const points: Pt[] = [{ x: cx, y: cy }]
    let x = cx
    let y = cy
    let step = base * (0.7 + random() * 0.6)
    for (let v = 0; v < vertices; v++) {
      angle += (random() - 0.5) * 0.28
      x += Math.cos(angle) * step
      y += Math.sin(angle) * step
      points.push({ x, y })
      step *= 1.32 + random() * 0.18
      if (Math.hypot(x - cx, y - cy) > reach) break
    }
    rays.push(points)
  }

  // Lifted shards: cells between neighbouring rays and rings, lightly tinted.
  for (let r = 0; r < rays.length; r++) {
    const a = rays[r]
    const b = rays[(r + 1) % rays.length]
    for (let k = 1; k < 5; k++) {
      if (!a[k + 1] || !b[k + 1] || random() > 0.38) continue
      ctx.beginPath()
      ctx.moveTo(a[k].x, a[k].y)
      ctx.lineTo(a[k + 1].x, a[k + 1].y)
      ctx.lineTo(b[k + 1].x, b[k + 1].y)
      ctx.lineTo(b[k].x, b[k].y)
      ctx.closePath()
      ctx.fillStyle = random() < 0.7 ? `rgba(255,255,255,${0.03 + random() * 0.11})` : `rgba(0,0,0,${0.08 + random() * 0.14})`
      ctx.fill()
    }
  }

  // Concentric rings: short, slightly bowed cracks joining neighbouring rays.
  for (let k = 1; k < 6; k++) {
    const chance = [0, 0.95, 0.8, 0.6, 0.38, 0.2][k]
    for (let r = 0; r < rays.length; r++) {
      const a = rays[r][k]
      const b = rays[(r + 1) % rays.length][k]
      if (!a || !b || random() > chance) continue
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
      const bow = 0.88 + random() * 0.2
      const bent = { x: cx + (mid.x - cx) * bow, y: cy + (mid.y - cy) * bow }
      strokeCrack(ctx, [a, bent, b], Math.max(0.6, 0.9 * scale - k * 0.08))
    }
  }

  // Radial cracks and their branches.
  for (const ray of rays) {
    strokeCrack(ctx, ray, Math.max(0.7, 1.25 * scale))
    for (let v = 2; v < ray.length - 1; v++) {
      if (random() > 0.22) continue
      const from = ray[v]
      const dir = Math.atan2(ray[v + 1].y - from.y, ray[v + 1].x - from.x) + (random() < 0.5 ? -1 : 1) * (0.35 + random() * 0.45)
      const branch: Pt[] = [from]
      let x = from.x
      let y = from.y
      let step = Math.hypot(ray[v + 1].x - from.x, ray[v + 1].y - from.y) * 0.6
      let angle = dir
      for (let s = 0; s < 3 + Math.floor(random() * 4); s++) {
        angle += (random() - 0.5) * 0.4
        x += Math.cos(angle) * step
        y += Math.sin(angle) * step
        branch.push({ x, y })
        step *= 1.15
      }
      strokeCrack(ctx, branch, Math.max(0.5, 0.8 * scale))
    }
  }

  // Crushed centre: a bright, powdery spot full of tiny fractures.
  const crush = base * 2.2
  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, crush)
  glow.addColorStop(0, 'rgba(255,255,255,0.75)')
  glow.addColorStop(0.35, 'rgba(255,255,255,0.28)')
  glow.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(cx, cy, crush, 0, Math.PI * 2)
  ctx.fill()
  for (let i = 0; i < 70; i++) {
    const angle = random() * Math.PI * 2
    const dist = Math.pow(random(), 1.6) * crush
    const x = cx + Math.cos(angle) * dist
    const y = cy + Math.sin(angle) * dist
    const len = (2 + random() * 7) * scale
    const turn = random() * Math.PI
    strokeCrack(ctx, [{ x, y }, { x: x + Math.cos(turn) * len, y: y + Math.sin(turn) * len }], 0.6)
  }

  // Damaged LCD under the glass: an ink-like dead patch and stuck columns of color.
  if (lcdDamage) {
    const ink = ctx.createRadialGradient(cx, cy, 0, cx, cy, base * 5)
    ink.addColorStop(0, 'rgba(0,0,0,0.85)')
    ink.addColorStop(0.5, 'rgba(0,0,0,0.45)')
    ink.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.globalCompositeOperation = 'multiply'
    ctx.fillStyle = ink
    ctx.beginPath()
    ctx.ellipse(cx, cy, base * 5, base * 3.4, random() * Math.PI, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalCompositeOperation = 'source-over'
    const columns = ['#ff00ff', '#00ff66', '#00e5ff', '#ffffff', '#ff2d55']
    for (let i = 0; i < 3 + Math.floor(random() * 4); i++) {
      ctx.globalAlpha = 0.55 + random() * 0.35
      ctx.fillStyle = columns[Math.floor(random() * columns.length)]
      ctx.fillRect(cx + (random() - 0.5) * base * 12, 0, 1 + Math.floor(random() * 3), height)
    }
    ctx.globalAlpha = 1
  }
}

function LockScreenClock() {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), 15000)
    return () => window.clearInterval(id)
  }, [])
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[14%] text-center text-white drop-shadow">
      <p className="text-sm font-medium opacity-90 sm:text-base">
        {now ? now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' }) : ' '}
      </p>
      <p className="text-6xl font-semibold leading-none tracking-tight sm:text-8xl">
        {now ? now.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }).replace(/\s?[AP]M/i, '') : ' '}
      </p>
    </div>
  )
}

const BROKEN_BACKGROUNDS = {
  wallpaper:
    'radial-gradient(ellipse at 20% 15%, #60a5fa 0%, transparent 50%), radial-gradient(ellipse at 85% 80%, #a855f7 0%, transparent 55%), radial-gradient(ellipse at 60% 40%, #f472b6 0%, transparent 45%), #0f172a',
  lock: 'linear-gradient(160deg, #1e3a8a 0%, #7c3aed 45%, #db2777 75%, #f59e0b 100%)',
  black: '#030303',
}

export function BrokenScreen() {
  const [background, setBackground] = useState<keyof typeof BROKEN_BACKGROUNDS>('wallpaper')
  const [impacts, setImpacts] = useState<Impact[]>([{ x: 0.62, y: 0.58, seed: 48271, size: 1 }])
  const [withSound, setWithSound] = useState(true)
  const [lcdDamage, setLcdDamage] = useState(true)
  const { canvasRef, width, height, dpr } = useCanvasSize(2)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !width) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, height)
    impacts.forEach((impact, index) => drawImpact(ctx, impact, width, height, lcdDamage && index === 0))
  }, [impacts, width, height, dpr, lcdDamage, canvasRef])

  const addImpact = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button')) return
    const rect = event.currentTarget.getBoundingClientRect()
    setImpacts((list) => [
      ...list.slice(-7),
      {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
        seed: Math.floor(Math.random() * 2_000_000) + 1,
        size: 0.75 + Math.random() * 0.5,
      },
    ])
    if (withSound) playCrackSound()
  }

  return (
    <ToolStage
      label="Broken screen effect"
      tone="dark"
      style={{ background: BROKEN_BACKGROUNDS[background] }}
      onStageClick={addImpact}
      badge="Simulation"
      controls={
        <ControlRow>
          <Segmented
            label="Background"
            value={background}
            onChange={setBackground}
            options={[
              { value: 'wallpaper', label: 'Wallpaper' },
              { value: 'lock', label: 'Lock screen' },
              { value: 'black', label: 'Screen off' },
            ]}
          />
          <Toggle label="Crack sound" checked={withSound} onChange={setWithSound} />
          <Toggle label="Damaged display" checked={lcdDamage} onChange={setLcdDamage} />
          <ActionButton onClick={() => setImpacts([])}>
            <RotateCcw aria-hidden="true" />
            {tx('Clear')}
          </ActionButton>
        </ControlRow>
      }
    >
      {background === 'lock' && <LockScreenClock />}
      <div className="absolute inset-0 cursor-crosshair">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />
      </div>
      {impacts.length === 0 && (
        <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/85">
          {tx('Tap anywhere to crack the screen')}
        </p>
      )}
    </ToolStage>
  )
}

/** A sharp crack: a bright snap followed by a short tinkle of glass. */
function playCrackSound() {
  const Ctor = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctor) return
  const context = new Ctor()
  const length = Math.floor(context.sampleRate * 0.6)
  const buffer = context.createBuffer(1, length, context.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < length; i++) {
    const t = i / context.sampleRate
    const snap = t < 0.03 ? (Math.random() * 2 - 1) * (1 - t / 0.03) : 0
    const tinkle = Math.random() < 0.004 ? (Math.random() * 2 - 1) * 0.8 * Math.exp(-t * 6) : 0
    data[i] = snap + (Math.random() * 2 - 1) * 0.25 * Math.exp(-t * 14) + tinkle
  }
  const source = context.createBufferSource()
  const filter = context.createBiquadFilter()
  const gain = context.createGain()
  filter.type = 'highpass'
  filter.frequency.value = 1800
  gain.gain.value = 0.35
  source.buffer = buffer
  source.connect(filter).connect(gain).connect(context.destination)
  source.start()
  source.onended = () => void context.close()
}

/* ---------------- Hacker typer ---------------- */

const HACKER_CODE = `struct group_info init_groups = { .usage = ATOMIC_INIT(2) };

static int __init kernel_probe(void)
{
    int retval;
    struct net_device *dev;
    printk(KERN_INFO "[kernel] initializing secure channel...\\n");

    for (i = 0; i < nblocks; i++) {
        buffer_head *b = (void *)__get_free_page(GFP_USER);
        if (!b)
            goto out_undo_partial_alloc;
        group_info->blocks[i] = b;
    }

    dev = alloc_netdev(sizeof(struct priv), "tun%d", tun_setup);
    retval = register_netdev(dev);
    if (retval < 0)
        goto err_free_dev;

    return 0;
}

void decrypt_payload(const uint8_t *in, uint8_t *out, size_t len) {
    uint32_t key[4] = { 0xDEADBEEF, 0x8BADF00D, 0xFEEDFACE, 0xC0FFEE00 };
    for (size_t n = 0; n < len; n += 8) {
        uint32_t v0 = in[n], v1 = in[n + 4], sum = 0xC6EF3720;
        for (int r = 0; r < 32; r++) {
            v1 -= ((v0 << 4) + key[2]) ^ (v0 + sum) ^ ((v0 >> 5) + key[3]);
            v0 -= ((v1 << 4) + key[0]) ^ (v1 + sum) ^ ((v1 >> 5) + key[1]);
            sum -= 0x9E3779B9;
        }
        out[n] = v0; out[n + 4] = v1;
    }
}

> scanning ports 1-65535 ............ [ OK ]
> bypassing firewall layer 3/7 ...... [ OK ]
> injecting handshake ................ [ OK ]
> mirroring mainframe ................ [ 42% ]

`

export function HackerTyper() {
  const [length, setLength] = useState(0)
  const [speed, setSpeed] = useState(4)
  const [color, setColor] = useState('#22c55e')
  const [popup, setPopup] = useState<'granted' | 'denied' | null>(null)
  const counts = useRef({ alt: 0, caps: 0 })
  const scrollRef = useRef<HTMLDivElement>(null)
  const stageActive = useRef(false)

  const typed = useMemo(() => {
    const full = Math.floor(length / HACKER_CODE.length)
    return HACKER_CODE.repeat(full) + HACKER_CODE.slice(0, length % HACKER_CODE.length)
  }, [length])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target) || !stageActive.current) return
      if (event.key === 'Escape') {
        setPopup(null)
        return
      }
      if (event.key === 'Alt') {
        counts.current.alt += 1
        counts.current.caps = 0
        if (counts.current.alt >= 3) {
          setPopup('granted')
          counts.current.alt = 0
        }
        event.preventDefault()
        return
      }
      if (event.key === 'CapsLock') {
        counts.current.caps += 1
        counts.current.alt = 0
        if (counts.current.caps >= 3) {
          setPopup('denied')
          counts.current.caps = 0
        }
        return
      }
      if (event.metaKey || event.ctrlKey) return
      counts.current = { alt: 0, caps: 0 }
      if (event.key.length === 1 || event.key === 'Enter' || event.key === 'Backspace' || event.key === 'Tab') {
        event.preventDefault()
        setPopup(null)
        setLength((value) => value + speed)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [speed])

  useEffect(() => {
    const element = scrollRef.current
    if (element) element.scrollTop = element.scrollHeight
  }, [typed])

  return (
    <ToolStage
      label="Hacker typer terminal"
      style={{ background: '#030806' }}
      disableShortcut
      onStageClick={() => {
        stageActive.current = true
        setLength((value) => value + speed * 3)
      }}
      controls={
        <>
          <ControlRow>
            <Slider label="Characters per key" value={speed} min={1} max={12} onChange={setSpeed} />
            <ColorInput label="Text color" value={color} onChange={setColor} />
            <ActionButton onClick={() => setLength(0)}>
              <RotateCcw aria-hidden="true" />
              {tx('Clear')}
            </ActionButton>
          </ControlRow>
          <p className="text-sm text-muted-foreground">
            {tx('Click the terminal, then type anything. Press Alt 3× for access granted, Caps Lock 3× for access denied. This only prints harmless text.')}
          </p>
        </>
      }
    >
      <div
        ref={scrollRef}
        tabIndex={0}
        onFocus={() => (stageActive.current = true)}
        onBlur={() => (stageActive.current = false)}
        aria-label={tx('Terminal. Type any key to print code.')}
        className="absolute inset-0 overflow-hidden p-4 font-mono text-xs leading-relaxed outline-none sm:text-sm"
        style={{ color }}
      >
        <pre className="whitespace-pre-wrap break-words">
          {typed || tx('Start typing...')}
          <span className="animate-pulse">▌</span>
        </pre>
      </div>
      {popup && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div
            role="status"
            className={
              popup === 'granted'
                ? 'border-2 border-green-500 bg-green-950/90 px-10 py-6 font-mono text-2xl font-bold tracking-widest text-green-400 sm:text-4xl'
                : 'border-2 border-red-500 bg-red-950/90 px-10 py-6 font-mono text-2xl font-bold tracking-widest text-red-400 sm:text-4xl'
            }
          >
            {popup === 'granted' ? tx('ACCESS GRANTED') : tx('ACCESS DENIED')}
          </div>
        </div>
      )}
    </ToolStage>
  )
}

/* ---------------- Hacked screen ---------------- */

const HACK_STEPS = [
  'Bypassing firewall',
  'Injecting payload into kernel',
  'Disabling antivirus services',
  'Decrypting password vault',
  'Escalating privileges to root',
  'Copying /home/user/Documents',
  'Copying browser history',
  'Uploading photos to remote server',
  'Opening reverse shell',
  'Overwriting boot sector',
  'Activating webcam stream',
  'Encrypting local drives',
]

function fakeLogLine(random: () => number) {
  const ip = `10.${Math.floor(random() * 255)}.${Math.floor(random() * 255)}.${Math.floor(random() * 255)}`
  const hex = Math.floor(random() * 0xffffffff).toString(16).padStart(8, '0').toUpperCase()
  const step = HACK_STEPS[Math.floor(random() * HACK_STEPS.length)]
  const status = random() < 0.85 ? tx('OK') : tx('RETRY')
  return `[${hex}] ${step} @ ${ip} ... ${status}`
}

export function HackedScreen() {
  const [style, setStyle] = useState<'red' | 'green'>('red')
  const [headline, setHeadline] = useState('SYSTEM HACKED')
  const [siren, setSiren] = useState(false)
  const [showNote, setShowNote] = useState(true)
  const [lines, setLines] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const [countdown, setCountdown] = useState(59)
  const sirenRef = useRef<{ context: AudioContext; osc: OscillatorNode } | null>(null)
  const red = style === 'red'
  const accent = red ? '#ff1f3d' : '#22ff88'

  // Fake logs and progress, generated after mount so prerendered HTML stays stable.
  useEffect(() => {
    let seed = Date.now() % 2147483646 || 1
    const random = () => {
      seed = (seed * 16807) % 2147483647
      return (seed - 1) / 2147483646
    }
    const id = window.setInterval(() => {
      setLines((list) => [...list.slice(-40), fakeLogLine(random)])
      setProgress((value) => (value >= 100 ? 0 : value + random() * 2.2))
    }, 140)
    const tick = window.setInterval(() => setCountdown((value) => (value <= 0 ? 59 : value - 1)), 1000)
    return () => {
      window.clearInterval(id)
      window.clearInterval(tick)
    }
  }, [])

  // Optional siren: a sine wave sweeping up and down, only after the user turns it on.
  useEffect(() => {
    if (!siren) return
    const Ctor = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return
    const context = new Ctor()
    const osc = context.createOscillator()
    const lfo = context.createOscillator()
    const lfoGain = context.createGain()
    const gain = context.createGain()
    osc.type = 'sawtooth'
    osc.frequency.value = 800
    lfo.frequency.value = 0.8
    lfoGain.gain.value = 300
    gain.gain.value = 0.05
    lfo.connect(lfoGain).connect(osc.frequency)
    osc.connect(gain).connect(context.destination)
    osc.start()
    lfo.start()
    sirenRef.current = { context, osc }
    return () => {
      osc.stop()
      lfo.stop()
      void context.close()
      sirenRef.current = null
    }
  }, [siren])

  const step = HACK_STEPS[Math.floor((progress / 100) * HACK_STEPS.length) % HACK_STEPS.length]

  return (
    <ToolStage
      label="Hacked screen simulation"
      tone="dark"
      reserveHeadingSpace
      doubleClickFullscreen
      badge="Simulation"
      className="bg-black"
      controls={
        <ControlRow>
          <Segmented
            label="Style"
            value={style}
            onChange={setStyle}
            options={[
              { value: 'red', label: 'Red alert' },
              { value: 'green', label: 'Green terminal' },
            ]}
          />
          <TextInput label="Headline" value={headline} onChange={setHeadline} maxLength={24} />
          <Toggle label="Siren sound" checked={siren} onChange={setSiren} />
          <Toggle label="Show “just kidding” note" checked={showNote} onChange={setShowNote} />
        </ControlRow>
      }
    >
      <div className="relative size-full overflow-hidden font-mono" style={{ color: accent }}>
        {/* Scrolling logs behind everything. */}
        <div className="absolute inset-0 flex flex-col justify-end p-3 text-[10px] leading-snug opacity-45 sm:text-xs">
          {lines.map((line, index) => (
            <p key={index} className="truncate">
              {line}
            </p>
          ))}
        </div>
        {/* Scanlines and a pulsing vignette. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0 2px, transparent 2px 4px), radial-gradient(ellipse at center, transparent 40%, ${red ? 'rgba(120,0,0,0.65)' : 'rgba(0,60,20,0.6)'} 100%)`,
          }}
        />
        <div className="relative flex size-full flex-col items-center justify-center gap-3 px-4 pb-10 text-center sm:gap-4">
          <p className="hack-blink text-xs font-bold tracking-[0.3em] sm:text-sm">⚠ WARNING ⚠ SECURITY BREACH DETECTED ⚠</p>
          <h2
            className="hack-glitch text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl md:text-7xl"
            style={{ textShadow: `0 0 24px ${accent}` }}
          >
            {headline || 'SYSTEM HACKED'}
          </h2>
          <div className="w-full max-w-md rounded border px-3 py-2 text-left text-xs sm:text-sm" style={{ borderColor: accent, background: 'rgba(0,0,0,0.75)' }}>
            <p className="truncate">&gt; {step}…</p>
            <div className="mt-2 h-3 w-full overflow-hidden rounded-sm border" style={{ borderColor: accent }}>
              <div className="h-full" style={{ width: `${Math.min(100, progress)}%`, background: accent }} />
            </div>
            <p className="mt-1.5 flex justify-between">
              <span>{tx('{n}% complete').replace('{n}', String(Math.min(100, Math.floor(progress))))}</span>
              <span className="hack-blink">00:{String(countdown).padStart(2, '0')}</span>
            </p>
            {showNote && <p className="mt-1.5 text-[10px] opacity-60 sm:text-xs">{tx('Just kidding — this is a harmless prank screen. Press Esc to exit.')}</p>}
          </div>
        </div>
      </div>
    </ToolStage>
  )
}

/* ---------------- Zoom lighting ---------------- */

const LIGHT_PRESETS = [
  { kelvin: 3000, label: 'Warm' },
  { kelvin: 4500, label: 'Neutral' },
  { kelvin: 6500, label: 'Daylight' },
] as const

export function ZoomLighting() {
  const [kelvin, setKelvin] = useState(4500)
  const [useCustom, setUseCustom] = useState(false)
  const [custom, setCustom] = useState('#ffd1dc')
  const [brightness, setBrightness] = useState(100)
  const [mode, setMode] = useState<'full' | 'frame'>('full')
  const [frame, setFrame] = useState(14)
  const color = useCustom ? custom : kelvinToRgb(kelvin).css

  return (
    <ToolStage
      label="Video call lighting"
      tone="light"
      reserveHeadingSpace
      doubleClickFullscreen
      style={{ background: color }}
      controls={
        <>
          <ControlRow>
            <Slider
              label="Color temperature"
              value={kelvin}
              min={2700}
              max={6500}
              step={100}
              onChange={(value) => {
                setKelvin(value)
                setUseCustom(false)
              }}
              format={(v) => (useCustom ? 'Custom color' : `${v} K`)}
            />
            <div className="flex flex-wrap items-end gap-1.5">
              {LIGHT_PRESETS.map((preset) => (
                <ActionButton
                  key={preset.kelvin}
                  aria-pressed={!useCustom && kelvin === preset.kelvin}
                  onClick={() => {
                    setKelvin(preset.kelvin)
                    setUseCustom(false)
                  }}
                  className={!useCustom && kelvin === preset.kelvin ? 'ring-2 ring-primary' : undefined}
                >
                  <span className="size-3 rounded-full ring-1 ring-black/20" style={{ background: kelvinToRgb(preset.kelvin).css }} aria-hidden="true" />
                  {tx(preset.label)}
                </ActionButton>
              ))}
              <Toggle label="Custom color" checked={useCustom} onChange={setUseCustom} />
              {useCustom && <ColorInput label="Light color" value={custom} onChange={setCustom} />}
            </div>
          </ControlRow>
          <ControlRow>
            <Slider label="Brightness" value={brightness} min={20} max={100} onChange={setBrightness} format={(v) => `${v}%`} />
            <Segmented
              label="Mode"
              value={mode}
              onChange={setMode}
              options={[
                { value: 'full', label: 'Full light' },
                { value: 'frame', label: 'Frame' },
              ]}
            />
            {mode === 'frame' && <Slider label="Frame width" value={frame} min={6} max={30} onChange={setFrame} format={(v) => `${v}%`} />}
          </ControlRow>
        </>
      }
    >
      {/* Dimming is an overlay, so the page title stays readable whatever the brightness. */}
      <div className="relative size-full">
        {mode === 'frame' && (
          <div
            className="absolute flex items-center justify-center rounded-2xl bg-neutral-950 p-4 text-center text-xs text-white/55 sm:text-sm"
            style={{ inset: `${frame / 2}% ${frame}%` }}
          >
            <p className="max-w-xs">{tx('Put your call window here, or use this screen as a light facing you.')}</p>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: 1 - brightness / 100 }} />
    </ToolStage>
  )
}

/* ---------------- Ring light ---------------- */

const RING_TINTS = [
  { value: 'temp', label: 'White' },
  { value: '#ffb3c7', label: 'Pink' },
  { value: '#b3d4ff', label: 'Blue' },
  { value: '#d9b3ff', label: 'Purple' },
] as const

export function RingLight() {
  const [size, setSize] = useState(70)
  const [thickness, setThickness] = useState(12)
  const [kelvin, setKelvin] = useState(5000)
  const [tint, setTint] = useState<(typeof RING_TINTS)[number]['value']>('temp')
  const [brightness, setBrightness] = useState(100)
  const [fillCenter, setFillCenter] = useState(false)
  const [surround, setSurround] = useState<'black' | 'dim'>('black')
  const color = tint === 'temp' ? kelvinToRgb(kelvin).css : tint

  return (
    <ToolStage
      label="Ring light"
      tone="dark"
      reserveHeadingSpace
      doubleClickFullscreen
      className={surround === 'black' ? 'bg-black' : 'bg-neutral-800'}
      controls={
        <>
          <ControlRow>
            <Slider label="Ring size" value={size} min={30} max={98} onChange={setSize} format={(v) => `${v}%`} />
            <Slider label="Thickness" value={thickness} min={3} max={30} onChange={setThickness} format={(v) => `${v}%`} />
            <Slider label="Brightness" value={brightness} min={20} max={100} onChange={setBrightness} format={(v) => `${v}%`} />
          </ControlRow>
          <ControlRow>
            <Segmented label="Color" value={tint} onChange={setTint} options={RING_TINTS} />
            {tint === 'temp' && (
              <Slider label="Color temperature" value={kelvin} min={2700} max={6500} step={100} onChange={setKelvin} format={(v) => `${v} K`} />
            )}
            <Toggle label="Fill center" checked={fillCenter} onChange={setFillCenter} />
            <Segmented
              label="Background"
              value={surround}
              onChange={setSurround}
              options={[
                { value: 'black', label: 'Black' },
                { value: 'dim', label: 'Gray' },
              ]}
            />
          </ControlRow>
        </>
      }
    >
      {/* Bottom padding keeps the ring clear of the double-tap hint. */}
      <div className="flex size-full items-center justify-center pb-10" style={{ containerType: 'size' }}>
        <div
          aria-hidden="true"
          className="rounded-full"
          style={{
            width: `${size}cqmin`,
            height: `${size}cqmin`,
            border: `${(thickness / 100) * size}cqmin solid ${color}`,
            background: fillCenter ? color : 'transparent',
            boxShadow: `0 0 ${size * 0.12}cqmin ${color}, inset 0 0 ${size * 0.08}cqmin ${color}`,
            opacity: brightness / 100,
          }}
        />
      </div>
    </ToolStage>
  )
}

/* ---------------- Visual noise ---------------- */

const NOISE_PALETTES = {
  aurora: [
    [10, 20, 60],
    [20, 180, 160],
    [140, 80, 220],
  ],
  ember: [
    [20, 5, 5],
    [200, 60, 20],
    [255, 190, 80],
  ],
  mono: [
    [8, 8, 8],
    [110, 110, 110],
    [230, 230, 230],
  ],
} as const

export function VisualNoise() {
  const reducedMotion = usePrefersReducedMotion()
  const [style, setStyle] = useState<'fog' | 'plasma' | 'grain'>('fog')
  const [palette, setPalette] = useState<keyof typeof NOISE_PALETTES>('aurora')
  const [scale, setScale] = useState(3)
  const [speed, setSpeed] = useState(4)
  const [isPaused, setIsPaused] = useState(false)
  const timeRef = useRef(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const running = !isPaused && !reducedMotion

  const draw = () => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    const w = canvas.width
    const h = canvas.height
    const image = context.createImageData(w, h)
    const data = image.data
    const t = timeRef.current
    const colors = NOISE_PALETTES[palette]
    const freq = 0.02 * (6 - scale)
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        let v: number
        if (style === 'grain') {
          v = Math.random() * 0.35 + 0.5 + 0.25 * Math.sin(x * freq + t) * Math.cos(y * freq - t * 0.7)
        } else if (style === 'plasma') {
          v =
            (Math.sin(x * freq * 1.3 + t) +
              Math.sin(y * freq * 1.1 - t * 1.2) +
              Math.sin((x + y) * freq * 0.7 + t * 0.6) +
              Math.sin(Math.hypot(x - w / 2, y - h / 2) * freq + t)) /
              8 +
            0.5
        } else {
          v =
            (Math.sin(x * freq + t * 0.5) * Math.cos(y * freq * 0.8 + t * 0.3) +
              0.5 * Math.sin(x * freq * 2.1 - t * 0.4 + Math.sin(y * freq * 1.7 + t * 0.2)) +
              0.25 * Math.cos(y * freq * 3.3 + t * 0.6)) /
              3.5 +
            0.5
        }
        v = Math.max(0, Math.min(1, v))
        const [a, b] = v < 0.5 ? [colors[0], colors[1]] : [colors[1], colors[2]]
        const f = v < 0.5 ? v * 2 : (v - 0.5) * 2
        const i = (y * w + x) * 4
        data[i] = a[0] + (b[0] - a[0]) * f
        data[i + 1] = a[1] + (b[1] - a[1]) * f
        data[i + 2] = a[2] + (b[2] - a[2]) * f
        data[i + 3] = 255
      }
    }
    context.putImageData(image, 0, 0)
  }

  useAnimationFrame((delta) => {
    timeRef.current += (delta / 1000) * speed * 0.25
    draw()
  }, running)

  useEffect(() => {
    if (!running) draw()
  })

  return (
    <ToolStage
      label="Animated visual noise"
      className="bg-black"
      controls={
        <>
          <ControlRow>
            <Segmented
              label="Style"
              value={style}
              onChange={setStyle}
              options={[
                { value: 'fog', label: 'Fog' },
                { value: 'plasma', label: 'Plasma' },
                { value: 'grain', label: 'Grain' },
              ]}
            />
            <Segmented
              label="Palette"
              value={palette}
              onChange={setPalette}
              options={[
                { value: 'aurora', label: 'Aurora' },
                { value: 'ember', label: 'Ember' },
                { value: 'mono', label: 'Mono' },
              ]}
            />
          </ControlRow>
          <ControlRow>
            <Slider label="Scale" value={scale} min={1} max={5} onChange={setScale} />
            <Slider label="Speed" value={speed} min={1} max={10} onChange={setSpeed} />
            <ActionButton onClick={() => setIsPaused((value) => !value)} aria-pressed={isPaused}>
              {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
              {isPaused ? tx('Resume') : tx('Pause')}
            </ActionButton>
          </ControlRow>
        </>
      }
    >
      <canvas ref={canvasRef} width={160} height={90} aria-hidden="true" className="absolute inset-0 size-full" />
    </ToolStage>
  )
}

/* ---------------- Color cycle ---------------- */

const STEP_COLORS = ['#FF0000', '#FF8000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8000FF', '#FF00FF']

export function ColorCycle() {
  const reducedMotion = usePrefersReducedMotion()
  const [mode, setMode] = useState<'smooth' | 'step'>('smooth')
  const [speed, setSpeed] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const [hue, setHue] = useState(0)
  const [stepIndex, setStepIndex] = useState(0)
  const elapsed = useRef(0)
  const effectiveSpeed = reducedMotion ? Math.min(speed, 2) : speed

  useAnimationFrame((delta) => {
    if (mode === 'smooth') setHue((value) => (value + delta * 0.006 * effectiveSpeed) % 360)
    else {
      elapsed.current += delta
      if (elapsed.current > 3000 / effectiveSpeed) {
        elapsed.current = 0
        setStepIndex((value) => (value + 1) % STEP_COLORS.length)
      }
    }
  }, !isPaused)

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === ' ' && !isTypingTarget(event.target)) {
        event.preventDefault()
        setIsPaused((value) => !value)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const background = mode === 'smooth' ? `hsl(${hue.toFixed(1)} 100% 50%)` : STEP_COLORS[stepIndex]

  return (
    <ToolStage
      label="Color cycle"
      style={{ background, transition: mode === 'step' ? 'background 0.4s ease' : undefined }}
      controls={
        <ControlRow>
          <Segmented
            label="Mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: 'smooth', label: 'Smooth rainbow' },
              { value: 'step', label: 'Stepped colors' },
            ]}
          />
          <Slider label="Speed" value={speed} min={1} max={10} onChange={setSpeed} />
          <ActionButton onClick={() => setIsPaused((value) => !value)} aria-pressed={isPaused}>
            {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            {isPaused ? tx('Resume') : tx('Pause')}
          </ActionButton>
        </ControlRow>
      }
    >
      <span className="sr-only">{tx('Color cycling screen')}</span>
    </ToolStage>
  )
}

/* ---------------- Gradient ---------------- */

const GRADIENT_PRESETS = [
  { label: 'Sunset', colors: ['#ff7e5f', '#feb47b', '#6a3093'] },
  { label: 'Ocean', colors: ['#2193b0', '#6dd5ed', '#0f2027'] },
  { label: 'Mint', colors: ['#00b09b', '#96c93d', '#e0f7c0'] },
  { label: 'Night', colors: ['#0f0c29', '#302b63', '#24243e'] },
] as const

export function GradientScreen() {
  const reducedMotion = usePrefersReducedMotion()
  const [colors, setColors] = useState<[string, string, string]>(['#ff7e5f', '#feb47b', '#6a3093'])
  const [useMiddle, setUseMiddle] = useState(true)
  const [type, setType] = useState<'linear' | 'radial'>('linear')
  const [angle, setAngle] = useState(135)
  const [isAnimated, setIsAnimated] = useState(false)
  const [drift, setDrift] = useState(0)

  useAnimationFrame((delta) => setDrift((value) => (value + delta * 0.01) % 360), isAnimated && !reducedMotion)

  const stops = useMiddle ? colors : [colors[0], colors[2]]
  const currentAngle = (angle + drift) % 360
  const background =
    type === 'linear' ? `linear-gradient(${currentAngle}deg, ${stops.join(', ')})` : `radial-gradient(circle at center, ${stops.join(', ')})`

  const setColor = (index: 0 | 1 | 2) => (value: string) =>
    setColors((list) => {
      const next = [...list] as [string, string, string]
      next[index] = value
      return next
    })

  const download = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 1920
    canvas.height = 1080
    const context = canvas.getContext('2d')
    if (!context) return
    let gradient: CanvasGradient
    if (type === 'linear') {
      const rad = ((currentAngle - 90) * Math.PI) / 180
      const half = Math.abs(960 * Math.cos(rad)) + Math.abs(540 * Math.sin(rad))
      gradient = context.createLinearGradient(960 - Math.cos(rad) * half, 540 - Math.sin(rad) * half, 960 + Math.cos(rad) * half, 540 + Math.sin(rad) * half)
    } else {
      gradient = context.createRadialGradient(960, 540, 0, 960, 540, Math.hypot(960, 540))
    }
    stops.forEach((color, index) => gradient.addColorStop(index / (stops.length - 1), color))
    context.fillStyle = gradient
    context.fillRect(0, 0, 1920, 1080)
    downloadCanvas(canvas, 'gradient-1920x1080.png')
  }

  return (
    <ToolStage
      label="Gradient screen"
      style={{ background }}
      controls={
        <>
          <div className="flex flex-wrap gap-2" role="group" aria-label={tx('Presets')}>
            {GRADIENT_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setColors([...preset.colors])}
                className="inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm hover:bg-accent"
              >
                <span aria-hidden="true" className="size-4 rounded-full" style={{ background: `linear-gradient(135deg, ${preset.colors.join(', ')})` }} />
                {tx(preset.label)}
              </button>
            ))}
          </div>
          <ControlRow>
            <ColorInput label="Start" value={colors[0]} onChange={setColor(0)} />
            {useMiddle && <ColorInput label="Middle" value={colors[1]} onChange={setColor(1)} />}
            <ColorInput label="End" value={colors[2]} onChange={setColor(2)} />
            <Toggle label="Middle color" checked={useMiddle} onChange={setUseMiddle} />
          </ControlRow>
          <ControlRow>
            <Segmented
              label="Type"
              value={type}
              onChange={setType}
              options={[
                { value: 'linear', label: 'Linear' },
                { value: 'radial', label: 'Radial' },
              ]}
            />
            {type === 'linear' && <Slider label="Angle" value={angle} min={0} max={360} onChange={setAngle} format={(v) => `${v}°`} />}
            <Toggle label="Animate" checked={isAnimated} onChange={setIsAnimated} />
            <ActionButton onClick={download}>{tx('Download PNG')}</ActionButton>
          </ControlRow>
        </>
      }
    >
      <span className="sr-only">{tx('Gradient preview')}</span>
    </ToolStage>
  )
}
