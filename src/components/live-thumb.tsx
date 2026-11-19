import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import type { Tool } from '@/lib/tools'

/**
 * Live thumbnails: a tiny animated version of what each tool looks like in fullscreen, drawn with CSS only
 * (keyframes `lt-*` in index.css). Used by the related-tools gallery on tool pages. Motion stops for people
 * who prefer reduced motion. Tools without a scene return null so the caller can fall back to a still thumb.
 */

const anim = (name: string, seconds: number, rest = 'linear infinite', delay = 0): CSSProperties => ({
  animation: `${name} ${seconds}s ${rest}${delay ? ` ${delay}s` : ''}`,
})

const BARS =
  'linear-gradient(90deg, #c0c0c0 0 14%, #c0c000 14% 28%, #00c0c0 28% 42%, #00c000 42% 57%, #c000c0 57% 71%, #c00000 71% 85%, #0000c0 85%)'
const STATIC = 'repeating-linear-gradient(45deg, #8a8a8a 0 1px, #2b2b2b 1px 3px)'

/** One rolling digit (0–9). `cycle` is the seconds for a full turn; `down` counts backwards. */
function Tick({ cycle = 10, down = false }: { cycle?: number; down?: boolean }) {
  const digits = down ? '9876543210' : '0123456789'
  return (
    <span className="lt-tick">
      <span style={anim('lt-digits', cycle, 'steps(10) infinite')}>
        {[...digits].map((digit, index) => (
          <span key={index}>{digit}</span>
        ))}
      </span>
    </span>
  )
}

function Clock({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <span className={cn('font-mono font-bold tabular-nums text-white', className)} style={{ fontSize: '13cqw', ...style }}>
      {children}
    </span>
  )
}

function Bar({ seconds = 8, color = '#fff', track = 'rgba(255,255,255,.25)', width = '56%' }: { seconds?: number; color?: string; track?: string; width?: string }) {
  return (
    <span className="block overflow-hidden rounded-full" style={{ width, height: '2.2cqw', background: track }}>
      <span className="block h-full rounded-full" style={{ background: color, ...anim('lt-fill', seconds, 'ease-in-out infinite') }} />
    </span>
  )
}

function Ring({ size = '12cqw', color = '#fff', seconds = 1 }: { size?: string; color?: string; seconds?: number }) {
  return (
    <span
      className="block rounded-full"
      style={{ width: size, height: size, border: `1.3cqw solid ${color}`, borderRightColor: 'transparent', borderBottomColor: 'transparent', ...anim('lt-spin', seconds) }}
    />
  )
}

/** The spinning dots of a classic update screen. */
function Dots({ size = '13cqw' }: { size?: string }) {
  return (
    <span className="relative block" style={{ width: size, height: size }}>
      {[0, 1, 2, 3, 4].map((index) => (
        <span key={index} className="absolute inset-0" style={anim('lt-spin', 2.2, 'cubic-bezier(.6,.1,.4,.9) infinite', -index * 0.13)}>
          <span className="absolute left-1/2 top-0 block rounded-full bg-white" style={{ width: '1.8cqw', height: '1.8cqw', marginLeft: '-0.9cqw' }} />
        </span>
      ))}
    </span>
  )
}

function Line({ width, color = 'rgba(255,255,255,.75)', height = '1.8cqw' }: { width: string; color?: string; height?: string }) {
  return <span className="block rounded-full" style={{ width, height, background: color }} />
}

/** XP-style sliding blocks inside a rounded track. */
function Blocks({ color }: { color: string }) {
  return (
    <span className="relative block overflow-hidden rounded-[1cqw] border border-white/70" style={{ width: '40cqw', height: '4.5cqw', padding: '0.6cqw' }}>
      <span className="flex h-full gap-[0.6cqw]" style={{ width: '30%', ...anim('lt-slide', 2) }}>
        {[0, 1, 2].map((index) => (
          <span key={index} className="block h-full flex-1 rounded-[0.4cqw]" style={{ background: color }} />
        ))}
      </span>
    </span>
  )
}

function Equalizer({ background, color }: { background: string; color: string }) {
  return (
    <span className="lt-c" style={{ background, gap: '2cqw', flexDirection: 'row' }}>
      {[0.9, 0.5, 1.1, 0.7, 1, 0.6, 0.8].map((seconds, index) => (
        <span key={index} className="block rounded-full" style={{ width: '3.2cqw', height: '26cqw', background: color, transformOrigin: 'center', ...anim('lt-eq', seconds, 'ease-in-out infinite', -index * 0.2) }} />
      ))}
    </span>
  )
}

/** A video call: four participants, the speaker's tile lighting up in turn. */
function Meeting({ background, tile }: { background: string; tile: string }) {
  const people = ['#f59e0b', '#38bdf8', '#a78bfa', '#f472b6']
  return (
    <span className="absolute inset-0 grid grid-cols-2" style={{ background, gap: '1.5cqw', padding: '3cqw 3cqw 8cqw' }}>
      {people.map((color, index) => (
        <span key={color} className="flex items-center justify-center rounded-[1.5cqw]" style={{ background: tile, ...anim('lt-speak', 4, 'steps(1) infinite', index) }}>
          <span className="block rounded-full" style={{ width: '9cqw', height: '9cqw', background: color }} />
        </span>
      ))}
      <span className="absolute inset-x-0 bottom-[2cqw] flex justify-center gap-[2cqw]">
        {['#3f3f46', '#3f3f46', '#dc2626'].map((color, index) => (
          <span key={index} className="block rounded-full" style={{ width: '4cqw', height: '4cqw', background: color }} />
        ))}
      </span>
    </span>
  )
}

function Lanes({ rows }: { rows: { seconds: number; steps?: number; label?: string }[] }) {
  return (
    <span className="absolute inset-0 flex flex-col justify-center" style={{ background: '#0b0b12', gap: '4cqw' }}>
      {rows.map((row, index) => (
        <span key={index} className="relative block" style={{ height: '8cqw' }}>
          <span
            className="absolute left-0 top-0 block rounded-full bg-sky-400"
            style={{ width: '8cqw', height: '8cqw', ...anim('lt-x', row.seconds, row.steps ? `steps(${row.steps}) infinite` : 'linear infinite') }}
          />
          {row.label && (
            <span className="absolute right-[2cqw] top-1/2 -translate-y-1/2 font-mono font-bold text-white/60" style={{ fontSize: '4cqw' }}>
              {row.label}
            </span>
          )}
        </span>
      ))}
    </span>
  )
}

function scene(slug: string, hacked: string): ReactNode {
  switch (slug) {
    case 'dead-pixel-test':
      return (
        <span className="absolute inset-0" style={anim('lt-pixel', 5, 'steps(1) infinite')}>
          <span className="absolute block bg-lime-400" style={{ left: '62%', top: '40%', width: '1.4cqw', height: '1.4cqw' }} />
        </span>
      )
    case 'oled-gray-test':
      return (
        <span className="absolute inset-0" style={anim('lt-gray', 4, 'steps(1) infinite')}>
        </span>
      )
    case 'monitor-test':
      return (
        <span className="absolute inset-0" style={{ background: BARS }}>
          <span className="absolute inset-x-0 bottom-0 block" style={{ height: '22%', background: 'linear-gradient(90deg,#000,#fff)' }} />
          <span className="absolute inset-y-0 block w-[10cqw]" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)', ...anim('lt-x', 2.5) }} />
        </span>
      )
    case 'oled-burn-in-test':
    case 'screen-burn-in-test':
      return <span className="absolute inset-0" style={anim('lt-rgbw', 2, 'steps(1) infinite')} />
    case 'screen-color-test':
      return (
        <span className="absolute inset-0" style={anim('lt-rgbw', 4, 'steps(1) infinite')}>
          <span className="absolute inset-x-[10%] bottom-[10%] block rounded-[1cqw]" style={{ height: '8%', background: 'linear-gradient(90deg,#f00,#ff0,#0f0,#0ff,#00f,#f0f)' }} />
        </span>
      )
    case 'screen-resolution-test':
      return (
        <span className="absolute inset-0 bg-white">
          <span className="absolute inset-0" style={{ background: 'repeating-conic-gradient(#000 0 25%, #fff 0 50%) 0 0 / 6px 6px', ...anim('lt-zoom', 4, 'ease-in-out infinite') }} />
        </span>
      )
    case 'touch-screen-test':
      return (
        <span className="absolute inset-0" style={{ background: '#0b0f14' }}>
          {[
            ['30%', '40%', '#38bdf8', 0],
            ['65%', '60%', '#f472b6', 0.6],
            ['50%', '25%', '#a3e635', 1.2],
          ].map(([left, top, color, delay]) => (
            <span
              key={String(color)}
              className="absolute block rounded-full"
              style={{ left: left as string, top: top as string, width: '10cqw', height: '10cqw', margin: '-5cqw', border: `0.8cqw solid ${color}`, ...anim('lt-ripple', 1.8, 'ease-out infinite', delay as number) }}
            />
          ))}
        </span>
      )
    case 'screen-refresh-rate-test':
      return <Lanes rows={[{ seconds: 1.4, label: '120' }, { seconds: 1.4, steps: 24, label: '60' }, { seconds: 1.4, steps: 12, label: '30' }]} />
    case 'frame-rate-test':
      return <Lanes rows={[{ seconds: 1.6, label: '60 FPS' }, { seconds: 1.6, steps: 10, label: '30 FPS' }]} />
    case 'monitor-ghosting-test':
      return (
        <span className="absolute inset-0 flex flex-col">
          {['#1f1f1f', '#7f7f7f', '#cfcfcf'].map((color) => (
            <span key={color} className="relative flex flex-1 items-center" style={{ background: color }}>
              <span className="block rounded-[0.8cqw] bg-sky-500" style={{ width: '10cqw', height: '8cqw', boxShadow: '-4cqw 0 3cqw -1cqw rgba(14,165,233,.45)', ...anim('lt-x', 1.8) }} />
            </span>
          ))}
        </span>
      )
    case 'no-signal-screen':
      return (
        <span className="lt-c" style={{ background: BARS }}>
          <span className="rounded-[1cqw] bg-black px-[3cqw] py-[2cqw] font-mono font-bold text-white" style={{ fontSize: '6cqw', ...anim('lt-blink', 1.6, 'steps(1) infinite') }}>
            NO SIGNAL
          </span>
        </span>
      )
    case 'white-noise-generator':
      return <Equalizer background="#262626" color="#f5f5f5" />
    case 'pink-noise-generator':
      return <Equalizer background="radial-gradient(circle at 30% 30%, #8a4f72, transparent 60%), #3a1f33" color="#f9a8d4" />
    case 'brown-noise-generator':
      return <Equalizer background="radial-gradient(circle at 30% 30%, #6b4a2f, transparent 60%), #24170f" color="#d6a77a" />
    case 'visual-noise':
      return <span className="absolute inset-0" style={{ background: STATIC, ...anim('lt-noise', 0.3, 'steps(1) infinite') }} />
    case 'broken-screen':
      return (
        <span className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #111 46%, #d4d4d4 47%, #111 48%), linear-gradient(60deg, #111 55%, #a3a3a3 56%, #111 57%)' }}>
          <span className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 46%, #d4d4d4 47%, transparent 48%), linear-gradient(25deg, transparent 60%, #bdbdbd 61%, transparent 62%), linear-gradient(110deg, transparent 30%, #9a9a9a 31%, transparent 32%)' }} />
          <span className="absolute inset-x-0 block" style={{ height: '3cqw', background: 'linear-gradient(90deg,#f0f8,#0ff8,#ff08)', mixBlendMode: 'screen', ...anim('lt-glitch', 2.4, 'steps(6) infinite') }} />
        </span>
      )
    case 'hacker-typer':
      return (
        <span className="absolute inset-0 flex flex-col justify-center" style={{ background: '#02130a', gap: '2.4cqw', padding: '0 8cqw' }}>
          {['70%', '45%', '82%', '58%', '36%'].map((width, index) => (
            <span key={index} className="block overflow-hidden" style={{ height: '2.6cqw' }}>
              <span
                className="block h-full rounded-[0.5cqw] bg-green-500/90"
                style={{ '--w': width, ...anim('lt-type', 5, 'steps(9) infinite', index * 0.5) } as CSSProperties}
              />
            </span>
          ))}
          <span className="block bg-green-400" style={{ width: '2cqw', height: '3.4cqw', ...anim('lt-blink', 1, 'steps(1) infinite') }} />
        </span>
      )
    case 'hacked-screen':
      return (
        <span className="lt-c" style={{ background: 'repeating-linear-gradient(0deg, #1a0000 0 3px, #2a0000 3px 4px)' }}>
          <span className="font-mono font-black tracking-wider text-red-500" style={{ fontSize: '11cqw', textShadow: '0 0 3cqw #ef4444', ...anim('lt-blink', 0.9, 'steps(1) infinite') }}>
            {hacked}
          </span>
        </span>
      )
    case 'zoom-lighting':
      return (
        <span className="absolute inset-0" style={{ background: '#ffd59a' }}>
          <span className="absolute inset-[-20%] block" style={{ background: 'radial-gradient(circle at 50% 45%, #fffaf0 0 30%, transparent 70%)', ...anim('lt-pulse', 3, 'ease-in-out infinite') }} />
        </span>
      )
    case 'ring-light':
      return (
        <span className="lt-c" style={{ background: '#111' }}>
          <span className="block rounded-full" style={{ width: '36cqw', height: '36cqw', border: '5cqw solid #fff7ea', boxShadow: '0 0 6cqw #fff3d6, inset 0 0 4cqw #fff3d6', ...anim('lt-pulse', 2.6, 'ease-in-out infinite') }} />
        </span>
      )
    case 'color-cycle':
      return <span className="absolute inset-0" style={{ background: '#ff2d2d', ...anim('lt-hue', 6) }} />
    case 'gradient-screen':
      return <span className="absolute inset-0" style={{ background: 'linear-gradient(120deg,#6d28d9,#f97316,#ec4899,#0ea5e9)', backgroundSize: '300% 300%', ...anim('lt-grad', 6, 'ease-in-out infinite') }} />
    case 'matrix-screensaver':
      return (
        <span className="absolute inset-0 flex justify-around font-mono font-bold text-green-500" style={{ background: '#02130a', fontSize: '4.6cqw' }}>
          {[1.8, 2.6, 1.4, 2.2, 3, 1.6, 2.4, 2, 2.8].map((seconds, index) => (
            <span key={index} className="flex flex-col items-center" style={{ ...anim('lt-fall', seconds, 'linear infinite', -index * 0.7), maskImage: 'linear-gradient(transparent, #000)' }}>
              {'10110100'.split('').map((digit, row) => (
                <span key={row} className={row === 7 ? 'text-green-200' : undefined}>
                  {(Number(digit) + index + row) % 2}
                </span>
              ))}
            </span>
          ))}
        </span>
      )
    case 'flip-clock-screensaver':
      return (
        <span className="lt-c" style={{ background: '#111', gap: '2cqw', flexDirection: 'row' }}>
          {[<>12</>, <>4<Tick /></>].map((digits, index) => (
            <span key={index} className="relative flex items-center justify-center rounded-[2cqw] bg-neutral-800" style={{ width: '28cqw', height: '28cqw' }}>
              <Clock style={{ fontSize: '17cqw' }}>{digits}</Clock>
              <span className="absolute inset-x-0 top-1/2 block h-[0.6cqw] bg-black/70" />
            </span>
          ))}
        </span>
      )
    case 'dvd-screensaver':
      return (
        <span className="absolute inset-0" style={{ background: '#0b0b18' }}>
          <span className="absolute left-[2cqw] top-[2cqw] block" style={anim('lt-dvd-x', 3.4, 'linear infinite alternate')}>
            <span className="block" style={anim('lt-dvd-y', 2.3, 'linear infinite alternate')}>
              <span className="flex items-center justify-center rounded-[50%] font-black italic text-violet-400" style={{ width: '22cqw', height: '10cqw', fontSize: '7cqw', ...anim('lt-hue', 5) }}>
                DVD
              </span>
            </span>
          </span>
        </span>
      )
    case 'motivational-quote-screensaver':
      return (
        <span className="absolute inset-0" style={{ background: 'linear-gradient(135deg,#0f172a,#1e1b4b)' }}>
          <span className="lt-c" style={anim('lt-fade', 4, 'ease-in-out infinite')}>
          <span className="font-serif text-white/80" style={{ fontSize: '12cqw', height: '6cqw' }}>“</span>
          <Line width="60cqw" color="rgba(255,255,255,.8)" />
          <Line width="44cqw" color="rgba(255,255,255,.8)" />
          <Line width="20cqw" color="rgba(255,255,255,.45)" height="1.4cqw" />
          </span>
        </span>
      )
    case 'countdown-timer':
      return (
        <span className="lt-c" style={{ background: '#1e3a8a' }}>
          <Clock>04:5<Tick down /></Clock>
        </span>
      )
    case 'pomodoro-timer':
      return (
        <span className="lt-c" style={{ background: '#b91c1c' }}>
          <Clock>24:5<Tick down /></Clock>
          <Bar seconds={10} />
        </span>
      )
    case 'stopwatch':
      return (
        <span className="lt-c" style={{ background: '#000' }}>
          <Clock>
            00:0<Tick />.<Tick cycle={1} />
          </Clock>
        </span>
      )
    case 'contrast-checker':
      return (
        <span className="absolute inset-0 flex">
          <span className="flex flex-1 items-center justify-center bg-neutral-900 font-bold text-white" style={{ fontSize: '12cqw' }}>Aa</span>
          <span className="flex flex-1 items-center justify-center bg-white font-bold text-neutral-900" style={{ fontSize: '12cqw' }}>Aa</span>
          <span className="absolute bottom-[4cqw] left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-[2cqw] py-[1cqw] font-bold text-white" style={{ fontSize: '4cqw', ...anim('lt-pulse', 2, 'ease-in-out infinite') }}>
            21:1
          </span>
        </span>
      )
    case 'fake-windows-10-update':
      return (
        <span className="lt-c" style={{ background: '#0078D7' }}>
          <Dots />
          <span className="text-white" style={{ fontSize: '4.4cqw' }}>
            2<Tick cycle={20} />% complete
          </span>
        </span>
      )
    case 'fake-windows-11-update':
      return (
        <span className="lt-c" style={{ background: '#1b1b1f' }}>
          <Ring />
          <Line width="40cqw" color="rgba(255,255,255,.7)" />
          <Line width="28cqw" color="rgba(255,255,255,.4)" height="1.4cqw" />
        </span>
      )
    case 'fake-blue-screen-of-death':
      return (
        <span className="absolute inset-0 flex flex-col items-start justify-center text-white" style={{ background: '#0078d7', padding: '0 12cqw', gap: '3cqw' }}>
          <span style={{ fontSize: '16cqw' }}>:(</span>
          <Line width="56cqw" color="rgba(255,255,255,.8)" />
          <span style={{ fontSize: '4cqw' }}>
            <Tick cycle={6} />0% complete
          </span>
        </span>
      )
    case 'fake-mac-update':
      return (
        <span className="lt-c" style={{ background: '#000' }}>
          <span className="block rounded-full bg-white/90" style={{ width: '8cqw', height: '8cqw' }} />
          <Bar seconds={9} track="rgba(255,255,255,.2)" width="40%" />
        </span>
      )
    case 'fake-android-update':
      return (
        <span className="lt-c" style={{ background: '#0f172a' }}>
          <Ring color="#4ade80" seconds={1.4} />
          <Bar seconds={7} color="#4ade80" width="46%" />
        </span>
      )
    case 'fake-windows-xp-update':
      return (
        <span className="lt-c" style={{ background: '#003399' }}>
          <Line width="38cqw" color="rgba(255,255,255,.8)" />
          <Blocks color="#4ade80" />
        </span>
      )
    case 'fake-windows-xp-boot':
      return (
        <span className="lt-c" style={{ background: '#000' }}>
          <Line width="30cqw" color="rgba(255,255,255,.75)" />
          <Blocks color="#3b82f6" />
        </span>
      )
    case 'fake-chrome-os-update':
      return (
        <span className="lt-c" style={{ background: '#202124' }}>
          <Line width="34cqw" color="rgba(255,255,255,.7)" />
          <Bar seconds={8} color="#8ab4f8" width="50%" />
        </span>
      )
    case 'fake-ubuntu-update':
      return (
        <span className="lt-c" style={{ background: '#300a24' }}>
          <span className="flex" style={{ gap: '2.4cqw' }}>
            {[0, 1, 2, 3, 4].map((index) => (
              <span key={index} className="block rounded-full bg-white" style={{ width: '2.6cqw', height: '2.6cqw', ...anim('lt-dot', 1.5, 'ease-in-out infinite', index * 0.25) }} />
            ))}
          </span>
        </span>
      )
    case 'fake-zoom-meeting':
      return <Meeting background="#1c1c1c" tile="#2d2d2d" />
    case 'fake-teams-meeting':
      return <Meeting background="#292a4a" tile="#3b3d6b" />
    case 'fake-google-meet':
      return <Meeting background="#202124" tile="#3c4043" />
    case 'fake-slack-huddle':
      return <Meeting background="#3f0e40" tile="#5b1d5d" />
    case 'fake-radar-screen':
      return (
        <span className="lt-c" style={{ background: '#021007' }}>
          <span className="relative block rounded-full" style={{ width: '50cqw', height: '50cqw', background: 'radial-gradient(circle, transparent 0 24%, #166534 25% 26%, transparent 27% 49%, #166534 50% 51%, transparent 52% 69%, #166534 70% 71%, transparent 72%)' }}>
            <span className="absolute inset-0 block rounded-full" style={{ background: 'conic-gradient(from 0deg, rgba(34,197,94,.6), transparent 22%)', ...anim('lt-spin', 2.4) }} />
            <span className="absolute block rounded-full bg-green-300" style={{ left: '66%', top: '30%', width: '2cqw', height: '2cqw', ...anim('lt-dot', 2.4, 'ease-in-out infinite') }} />
            <span className="absolute block rounded-full bg-green-300" style={{ left: '30%', top: '62%', width: '2cqw', height: '2cqw', ...anim('lt-dot', 2.4, 'ease-in-out infinite', 1.2) }} />
          </span>
        </span>
      )
    default:
      return null
  }
}

/** Whether a tool has an animated scene (solid colours do not: they use the still swatch). */
export function hasLiveThumb(slug: string) {
  return scene(slug, '') !== null
}

export function LiveThumb({ tool, className }: { tool: Tool; className?: string }) {
  const { t } = useTranslation()
  const content = scene(tool.slug, t('hackedGlyph', 'HACKED'))
  if (!content) return null
  return (
    <span aria-hidden="true" className={cn('lt block ring-1 ring-inset ring-black/10', className)}>
      {content}
    </span>
  )
}
