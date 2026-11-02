'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { ActionButton, ColorInput, ControlRow, Segmented, Slider, TextInput, Toggle } from '@/components/tool-kit/controls'
import { useAnimationFrame, useCanvasSize, usePrefersReducedMotion } from '@/components/tool-kit/hooks'
import { isTypingTarget } from '@/components/tool-kit/use-fullscreen'
import { useNoise, type NoiseColor } from '@/components/tool-kit/audio'
import { downloadCanvas } from '@/components/tool-kit/download'

function SoundButton({ isPlaying, onToggle, label = 'Sound' }: { isPlaying: boolean; onToggle: () => void; label?: string }) {
  return (
    <ActionButton onClick={onToggle} aria-pressed={isPlaying}>
      {isPlaying ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
      {isPlaying ? `${label} on` : `${label} off`}
    </ActionButton>
  )
}

/* ---------------- Static screen ---------------- */

export function StaticScreen() {
  const reducedMotion = usePrefersReducedMotion()
  const [grain, setGrain] = useState(3)
  const [speed, setSpeed] = useState(30)
  const [contrast, setContrast] = useState(100)
  const [isColor, setIsColor] = useState(false)
  const [volume, setVolume] = useState(0.08)
  const noise = useNoise('white', volume)
  const { canvasRef, width, height } = useCanvasSize(1)
  const elapsedRef = useRef(0)
  const fps = reducedMotion ? Math.min(speed, 6) : speed

  useAnimationFrame((delta) => {
    elapsedRef.current += delta
    if (elapsedRef.current < 1000 / fps) return
    elapsedRef.current = 0
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context || !width) return
    const w = Math.ceil(width / grain)
    const h = Math.ceil(height / grain)
    const image = context.createImageData(w, h)
    const data = image.data
    for (let i = 0; i < data.length; i += 4) {
      if (isColor) {
        data[i] = Math.random() * 255
        data[i + 1] = Math.random() * 255
        data[i + 2] = Math.random() * 255
      } else {
        const value = Math.random() * 255
        data[i] = data[i + 1] = data[i + 2] = value
      }
      data[i + 3] = 255
    }
    const off = new OffscreenCanvas(w, h)
    off.getContext('2d')?.putImageData(image, 0, 0)
    context.imageSmoothingEnabled = false
    context.drawImage(off, 0, 0, canvas.width, canvas.height)
  })

  return (
    <ToolStage
      label="TV static"
      className="bg-black"
      controls={
        <>
          <ControlRow>
            <Slider label="Grain size" value={grain} min={1} max={8} onChange={setGrain} format={(v) => `${v}px`} />
            <Slider label="Speed" value={speed} min={2} max={60} onChange={setSpeed} format={(v) => `${v} fps`} />
            <Slider label="Contrast" value={contrast} min={40} max={200} onChange={setContrast} format={(v) => `${v}%`} />
          </ControlRow>
          <ControlRow>
            <Toggle label="Color static" checked={isColor} onChange={setIsColor} />
            <SoundButton isPlaying={noise.isPlaying} onToggle={noise.isPlaying ? noise.stop : noise.start} />
            <Slider label="Volume" value={volume} min={0} max={0.4} step={0.01} onChange={setVolume} format={(v) => `${Math.round(v * 250)}%`} className="max-w-60" />
          </ControlRow>
          <p className="text-xs text-muted-foreground">
            Photosensitivity warning: this effect flickers. Lower the speed if it is uncomfortable.
          </p>
        </>
      }
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 size-full"
        style={{ filter: `contrast(${contrast}%)`, imageRendering: 'pixelated' }}
      />
    </ToolStage>
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

/* ---------------- Noise screens ---------------- */

const NOISE_THEMES: Record<NoiseColor, { label: string; colors: [string, string] }> = {
  white: { label: 'White noise', colors: ['#2b3440', '#5b6b7d'] },
  pink: { label: 'Pink noise', colors: ['#3a1f33', '#8a4f72'] },
  brown: { label: 'Brown noise', colors: ['#24170f', '#6b4a2f'] },
}

const SLEEP_OPTIONS = [0, 15, 30, 60] as const

export function NoiseScreen({ color }: { color: NoiseColor }) {
  const theme = NOISE_THEMES[color]
  const [volume, setVolume] = useState(0.15)
  const [visual, setVisual] = useState<'waves' | 'dark'>('waves')
  const [sleepMinutes, setSleepMinutes] = useState<(typeof SLEEP_OPTIONS)[number]>(0)
  const [endsAt, setEndsAt] = useState<number | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)
  const noise = useNoise(color, volume)
  const reducedMotion = usePrefersReducedMotion()

  const play = () => {
    noise.start()
    setEndsAt(sleepMinutes ? Date.now() + sleepMinutes * 60_000 : null)
  }
  const stop = () => {
    noise.stop()
    setEndsAt(null)
    setRemaining(null)
  }

  useEffect(() => {
    if (!endsAt) return
    const id = window.setInterval(() => {
      const left = endsAt - Date.now()
      if (left <= 0) {
        noise.stop()
        setEndsAt(null)
        setRemaining(null)
      } else setRemaining(left)
    }, 1000)
    return () => window.clearInterval(id)
  }, [endsAt, noise])

  const formatRemaining = (ms: number) => {
    const total = Math.ceil(ms / 1000)
    return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
  }

  return (
    <ToolStage
      label={theme.label}
      style={{
        // Longhand properties only: mixing the `background` shorthand with `backgroundSize` breaks on toggle.
        backgroundColor: visual === 'dark' ? '#000' : theme.colors[0],
        backgroundImage:
          visual === 'dark'
            ? 'none'
            : `radial-gradient(circle at 30% 30%, ${theme.colors[1]}, transparent 60%), radial-gradient(circle at 70% 70%, ${theme.colors[1]}aa, transparent 55%)`,
        backgroundSize: '200% 200%',
        animation: visual === 'waves' && noise.isPlaying && !reducedMotion ? 'noise-drift 18s ease-in-out infinite alternate' : undefined,
      }}
      controls={
        <>
          <ControlRow>
            <ActionButton variant="primary" onClick={noise.isPlaying ? stop : play}>
              {noise.isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
              {noise.isPlaying ? 'Stop' : 'Play'}
            </ActionButton>
            <Slider label="Volume" value={volume} min={0} max={0.6} step={0.01} onChange={setVolume} format={(v) => `${Math.round((v / 0.6) * 100)}%`} />
          </ControlRow>
          <ControlRow>
            <Segmented
              label="Visual"
              value={visual}
              onChange={setVisual}
              options={[
                { value: 'waves', label: 'Soft glow' },
                { value: 'dark', label: 'Dark screen' },
              ]}
            />
            <Segmented
              label="Sleep timer"
              value={String(sleepMinutes)}
              onChange={(value) => setSleepMinutes(Number(value) as (typeof SLEEP_OPTIONS)[number])}
              options={SLEEP_OPTIONS.map((minutes) => ({ value: String(minutes), label: minutes ? `${minutes} min` : 'Off' }))}
            />
          </ControlRow>
        </>
      }
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-white/85">
        {visual === 'waves' && <p className="text-xl font-medium tracking-wide sm:text-2xl">{theme.label}</p>}
        <p className="text-sm text-white/60" aria-live="polite">
          {noise.isPlaying ? (remaining ? `Fading out in ${formatRemaining(remaining)}` : 'Playing') : 'Press Play to start'}
        </p>
      </div>
    </ToolStage>
  )
}

/* ---------------- Broken screen ---------------- */

type Crack = { x: number; y: number; seed: number; size: number }

function seededRandom(seed: number) {
  let value = seed
  return () => {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}

function crackPaths(crack: Crack, scale: number) {
  const random = seededRandom(crack.seed)
  const paths: string[] = []
  const rays = 9 + Math.floor(random() * 6)
  for (let r = 0; r < rays; r++) {
    const angle = (r / rays) * Math.PI * 2 + random() * 0.5
    const length = (120 + random() * 380) * crack.size * scale
    let x = crack.x
    let y = crack.y
    let d = `M${x.toFixed(1)} ${y.toFixed(1)}`
    const segments = 6 + Math.floor(random() * 5)
    for (let s = 0; s < segments; s++) {
      const a = angle + (random() - 0.5) * 0.6
      const step = length / segments
      x += Math.cos(a) * step
      y += Math.sin(a) * step
      d += ` L${x.toFixed(1)} ${y.toFixed(1)}`
    }
    paths.push(d)
  }
  for (let ring = 1; ring <= 3; ring++) {
    const radius = ring * (22 + random() * 18) * crack.size * scale
    let d = ''
    const points = 10
    for (let p = 0; p <= points; p++) {
      if (random() < 0.25 && p !== 0) {
        continue
      }
      const a = (p / points) * Math.PI * 2
      const rr = radius * (0.8 + random() * 0.4)
      d += `${d ? ' L' : 'M'}${(crack.x + Math.cos(a) * rr).toFixed(1)} ${(crack.y + Math.sin(a) * rr).toFixed(1)}`
    }
    paths.push(d)
  }
  return paths
}

export function BrokenScreen() {
  const [background, setBackground] = useState<'black' | 'wallpaper' | 'white'>('wallpaper')
  const [cracks, setCracks] = useState<Crack[]>([{ x: 0.42, y: 0.45, seed: 12345, size: 1.2 }])
  const [withSound, setWithSound] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ width: 1000, height: 600 })

  useEffect(() => {
    const element = stageRef.current
    if (!element) return
    const observer = new ResizeObserver(([entry]) => setBox({ width: entry.contentRect.width, height: entry.contentRect.height }))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const addCrack = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.closest('button')) return
    const rect = event.currentTarget.getBoundingClientRect()
    setCracks((list) => [
      ...list.slice(-11),
      {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
        seed: Math.floor(Math.random() * 2_000_000) + 1,
        size: 0.7 + Math.random() * 0.6,
      },
    ])
    if (withSound) playCrackSound()
  }

  const scale = Math.max(0.5, Math.min(box.width, box.height) / 600)
  const backgrounds = {
    black: '#050505',
    white: '#f4f4f4',
    wallpaper: 'radial-gradient(ellipse at 20% 20%, #3b82f6 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, #7c3aed 0%, transparent 55%), #0f172a',
  }
  const stroke = background === 'white' ? 'rgba(40,40,40,0.75)' : 'rgba(255,255,255,0.8)'

  return (
    <ToolStage
      label="Broken screen effect"
      tone={background === 'white' ? 'light' : 'dark'}
      style={{ background: backgrounds[background] }}
      onStageClick={addCrack}
      badge="Simulation"
      controls={
        <ControlRow>
          <Segmented
            label="Background"
            value={background}
            onChange={setBackground}
            options={[
              { value: 'wallpaper', label: 'Wallpaper' },
              { value: 'black', label: 'Black' },
              { value: 'white', label: 'White' },
            ]}
          />
          <Toggle label="Glass sound on click" checked={withSound} onChange={setWithSound} />
          <ActionButton onClick={() => setCracks([])}>
            <RotateCcw aria-hidden="true" />
            Clear cracks
          </ActionButton>
        </ControlRow>
      }
    >
      <div ref={stageRef} className="absolute inset-0 cursor-crosshair">
        <svg aria-hidden="true" className="size-full" viewBox={`0 0 ${box.width} ${box.height}`}>
          {cracks.map((crack, index) => {
            const positioned = { ...crack, x: crack.x * box.width, y: crack.y * box.height }
            return (
              <g key={`${crack.seed}-${index}`} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx={positioned.x} cy={positioned.y} r={10 * crack.size * scale} fill={stroke} opacity={0.35} />
                {crackPaths(positioned, scale).map((d, pathIndex) => (
                  <g key={pathIndex}>
                    <path d={d} stroke="rgba(0,0,0,0.5)" strokeWidth={2.5} />
                    <path d={d} stroke={stroke} strokeWidth={pathIndex % 3 === 0 ? 1.4 : 0.9} />
                  </g>
                ))}
              </g>
            )
          })}
        </svg>
        <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded bg-black/40 px-2 py-1 text-xs text-white/80">
          Click to add cracks
        </p>
      </div>
    </ToolStage>
  )
}

function playCrackSound() {
  const context = new AudioContext()
  const length = context.sampleRate * 0.35
  const buffer = context.createBuffer(1, length, context.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 4)
  const source = context.createBufferSource()
  const filter = context.createBiquadFilter()
  const gain = context.createGain()
  filter.type = 'highpass'
  filter.frequency.value = 2500
  gain.gain.value = 0.25
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
              Clear
            </ActionButton>
          </ControlRow>
          <p className="text-sm text-muted-foreground">
            Click the terminal, then type anything. Press Alt 3× for access granted, Caps Lock 3× for access denied. This
            only prints harmless text.
          </p>
        </>
      }
    >
      <div
        ref={scrollRef}
        tabIndex={0}
        onFocus={() => (stageActive.current = true)}
        onBlur={() => (stageActive.current = false)}
        aria-label="Terminal. Type any key to print code."
        className="absolute inset-0 overflow-hidden p-4 font-mono text-xs leading-relaxed outline-none sm:text-sm"
        style={{ color }}
      >
        <pre className="whitespace-pre-wrap break-words">
          {typed || 'Start typing...'}
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
            {popup === 'granted' ? 'ACCESS GRANTED' : 'ACCESS DENIED'}
          </div>
        </div>
      )}
    </ToolStage>
  )
}

/* ---------------- Zoom lighting ---------------- */

const LIGHT_TONES = [
  { value: 'warm', label: 'Warm', color: '#FFD9A8' },
  { value: 'neutral', label: 'Neutral', color: '#FFF6EC' },
  { value: 'cool', label: 'Cool', color: '#E6F0FF' },
  { value: 'custom', label: 'Custom', color: '' },
] as const

export function ZoomLighting() {
  const [tone, setTone] = useState<(typeof LIGHT_TONES)[number]['value']>('neutral')
  const [custom, setCustom] = useState('#ffd1dc')
  const [brightness, setBrightness] = useState(100)
  const [mode, setMode] = useState<'ring' | 'full'>('ring')
  const [ringSize, setRingSize] = useState(18)
  const color = tone === 'custom' ? custom : LIGHT_TONES.find((item) => item.value === tone)!.color

  return (
    <ToolStage
      label="Video call lighting"
      tone="light"
      style={{ background: color, filter: `brightness(${brightness / 100})` }}
      controls={
        <>
          <ControlRow>
            <Segmented label="Tone" value={tone} onChange={setTone} options={LIGHT_TONES} />
            {tone === 'custom' && <ColorInput label="Custom light" value={custom} onChange={setCustom} />}
            <Segmented
              label="Mode"
              value={mode}
              onChange={setMode}
              options={[
                { value: 'ring', label: 'Ring light' },
                { value: 'full', label: 'Full screen' },
              ]}
            />
          </ControlRow>
          <ControlRow>
            <Slider label="Brightness" value={brightness} min={30} max={100} onChange={setBrightness} format={(v) => `${v}%`} />
            {mode === 'ring' && (
              <Slider label="Ring thickness" value={ringSize} min={6} max={35} onChange={setRingSize} format={(v) => `${v}%`} />
            )}
          </ControlRow>
        </>
      }
    >
      {mode === 'ring' && (
        <div
          className="absolute flex items-center justify-center rounded-[2rem] bg-neutral-950 text-center text-sm text-white/60"
          style={{ inset: `${ringSize / 2}%` }}
        >
          <p className="max-w-xs px-4">Place your call window here, or use this on a second screen facing you.</p>
        </div>
      )}
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
              {isPaused ? 'Resume' : 'Pause'}
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
            {isPaused ? 'Resume' : 'Pause'}
          </ActionButton>
        </ControlRow>
      }
    >
      <span className="sr-only">Color cycling screen</span>
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
          <div className="flex flex-wrap gap-2" role="group" aria-label="Presets">
            {GRADIENT_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setColors([...preset.colors])}
                className="inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm hover:bg-accent"
              >
                <span aria-hidden="true" className="size-4 rounded-full" style={{ background: `linear-gradient(135deg, ${preset.colors.join(', ')})` }} />
                {preset.label}
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
            <ActionButton onClick={download}>Download PNG</ActionButton>
          </ControlRow>
        </>
      }
    >
      <span className="sr-only">Gradient preview</span>
    </ToolStage>
  )
}
