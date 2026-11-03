'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Play, Pause, RotateCcw, Flag, Copy, Check, Volume2, VolumeX, SkipForward } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { ControlRow, ActionButton, Slider, Toggle } from '@/components/tool-kit/controls'
import { playTone } from '@/components/tool-kit/audio'
import { cn } from '@/lib/utils'

/* ---------------- Countdown Timer ---------------- */

const PRESETS = [
  { label: '1 min', seconds: 60 },
  { label: '5 min', seconds: 300 },
  { label: '10 min', seconds: 600 },
  { label: '15 min', seconds: 900 },
  { label: '25 min (Pomodoro)', seconds: 1500 },
  { label: '45 min', seconds: 2700 },
  { label: '60 min', seconds: 3600 },
]

export function CountdownTimer() {
  const [totalSeconds, setTotalSeconds] = useState(300)
  const [timeLeft, setTimeLeft] = useState(300)
  const [isRunning, setIsRunning] = useState(false)
  const [hasSound, setHasSound] = useState(true)
  const [isFinished, setIsFinished] = useState(false)

  const endTimeRef = useRef<number | null>(null)
  const timerRef = useRef<number | null>(null)

  const handleStart = useCallback(() => {
    if (timeLeft <= 0) return
    setIsRunning(true)
    setIsFinished(false)
    endTimeRef.current = performance.now() + timeLeft * 1000
  }, [timeLeft])

  const handlePause = useCallback(() => {
    setIsRunning(false)
    if (timerRef.current) cancelAnimationFrame(timerRef.current)
  }, [])

  const handleReset = useCallback(() => {
    setIsRunning(false)
    setIsFinished(false)
    setTimeLeft(totalSeconds)
    if (timerRef.current) cancelAnimationFrame(timerRef.current)
  }, [totalSeconds])

  const setPreset = (sec: number) => {
    setIsRunning(false)
    setIsFinished(false)
    setTotalSeconds(sec)
    setTimeLeft(sec)
    if (timerRef.current) cancelAnimationFrame(timerRef.current)
  }

  useEffect(() => {
    if (!isRunning) return

    const tick = () => {
      if (!endTimeRef.current) return
      const remainingMs = Math.max(0, endTimeRef.current - performance.now())
      const remainingSec = Math.ceil(remainingMs / 1000)
      setTimeLeft(remainingSec)

      if (remainingSec <= 0) {
        setIsRunning(false)
        setIsFinished(true)
        if (hasSound) {
          playTone(880, 200, 0.2)
          setTimeout(() => playTone(880, 200, 0.2), 250)
          setTimeout(() => playTone(1174, 500, 0.25), 500)
        }
        return
      }
      timerRef.current = requestAnimationFrame(tick)
    }

    timerRef.current = requestAnimationFrame(tick)
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current)
    }
  }, [isRunning, hasSound])

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        if (isRunning) handlePause()
        else handleStart()
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault()
        handleReset()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isRunning, handlePause, handleStart, handleReset])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  const timeFormatted =
    hours > 0
      ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  const progress = totalSeconds > 0 ? (timeLeft / totalSeconds) * 100 : 0

  return (
    <ToolStage
      label="Countdown timer"
      tone="dark"
      className={cn(
        'transition-colors duration-500',
        isFinished ? 'bg-red-950/80 animate-pulse text-white' : 'bg-neutral-950 text-white',
      )}
      controls={
        <div className="flex flex-col gap-4 w-full">
          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setPreset(p.seconds)}
                className={cn(
                  'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors',
                  totalSeconds === p.seconds && !isRunning
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-background hover:bg-muted text-foreground',
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          <ControlRow className="justify-between">
            <div className="flex items-center gap-3">
              <ActionButton
                variant="primary"
                onClick={isRunning ? handlePause : handleStart}
                className="w-28"
              >
                {isRunning ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                {isRunning ? 'Pause' : 'Start'}
              </ActionButton>
              <ActionButton onClick={handleReset}>
                <RotateCcw aria-hidden="true" />
                Reset
              </ActionButton>
            </div>
            <Toggle label="Chime Alert" checked={hasSound} onChange={setHasSound} />
          </ControlRow>
        </div>
      }
    >
      <div className="relative flex size-full flex-col items-center justify-center p-6 select-none">
        {/* Progress bar line */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-neutral-800">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-col items-center">
          <div
            className={cn(
              'font-mono font-bold tracking-tighter text-6xl sm:text-8xl md:text-9xl transition-transform duration-200',
              isFinished && 'scale-105 text-red-400',
            )}
          >
            {timeFormatted}
          </div>
          {isFinished && (
            <div className="mt-4 text-xl sm:text-2xl font-bold tracking-wide uppercase text-red-300">
              Time is up!
            </div>
          )}
        </div>
      </div>
    </ToolStage>
  )
}

/* ---------------- Stopwatch ---------------- */

type Lap = {
  id: number
  splitMs: number
  totalMs: number
}

function formatStopwatch(ms: number) {
  const m = Math.floor(ms / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  const hundredths = Math.floor((ms % 1000) / 10)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(hundredths).padStart(2, '0')}`
}

export function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedMs, setElapsedMs] = useState(0)
  const [laps, setLaps] = useState<Lap[]>([])
  const [copied, setCopied] = useState(false)

  const startTimeRef = useRef(0)
  const accumulatedRef = useRef(0)
  const frameRef = useRef<number | null>(null)

  const handleStart = () => {
    setIsRunning(true)
    startTimeRef.current = performance.now()
  }

  const handlePause = () => {
    setIsRunning(false)
    accumulatedRef.current += performance.now() - startTimeRef.current
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
  }

  const handleReset = () => {
    setIsRunning(false)
    accumulatedRef.current = 0
    setElapsedMs(0)
    setLaps([])
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
  }

  const handleLap = () => {
    if (!isRunning && elapsedMs === 0) return
    const currentTotal = accumulatedRef.current + (isRunning ? performance.now() - startTimeRef.current : 0)
    const prevTotal = laps.length > 0 ? laps[0].totalMs : 0
    const split = currentTotal - prevTotal

    setLaps((prev) => [
      {
        id: prev.length + 1,
        splitMs: split,
        totalMs: currentTotal,
      },
      ...prev,
    ])
  }

  useEffect(() => {
    if (!isRunning) return
    const loop = () => {
      setElapsedMs(accumulatedRef.current + (performance.now() - startTimeRef.current))
      frameRef.current = requestAnimationFrame(loop)
    }
    frameRef.current = requestAnimationFrame(loop)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isRunning])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        if (isRunning) handlePause()
        else handleStart()
      } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault()
        handleLap()
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault()
        handleReset()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isRunning])

  const copyLaps = () => {
    if (laps.length === 0) return
    const text = laps
      .map((l) => `Lap ${l.id}: ${formatStopwatch(l.splitMs)} (Total: ${formatStopwatch(l.totalMs)})`)
      .join('\n')
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <ToolStage
      label="Stopwatch"
      tone="dark"
      className="bg-neutral-950 text-white"
      controls={
        <div className="flex flex-col gap-4 w-full">
          <ControlRow className="justify-between">
            <div className="flex items-center gap-3">
              <ActionButton
                variant="primary"
                onClick={isRunning ? handlePause : handleStart}
                className="w-28"
              >
                {isRunning ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                {isRunning ? 'Pause' : 'Start'}
              </ActionButton>
              <ActionButton onClick={handleLap} disabled={!isRunning && elapsedMs === 0}>
                <Flag aria-hidden="true" />
                Lap
              </ActionButton>
              <ActionButton onClick={handleReset} disabled={isRunning || elapsedMs === 0}>
                <RotateCcw aria-hidden="true" />
                Reset
              </ActionButton>
            </div>
            {laps.length > 0 && (
              <ActionButton onClick={copyLaps}>
                {copied ? <Check aria-hidden="true" className="text-green-500" /> : <Copy aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy Laps'}
              </ActionButton>
            )}
          </ControlRow>
        </div>
      }
    >
      <div className="flex size-full flex-col items-center justify-center p-6 select-none">
        <div className="font-mono font-bold tracking-tighter text-6xl sm:text-8xl md:text-9xl">
          {formatStopwatch(elapsedMs)}
        </div>

        {/* Laps List */}
        {laps.length > 0 && (
          <div className="mt-6 max-h-40 w-full max-w-md overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-2 text-sm font-mono backdrop-blur">
            <div className="grid grid-cols-3 px-3 py-1 font-semibold text-xs uppercase text-muted-foreground border-b border-white/10">
              <span>Lap</span>
              <span className="text-right">Split</span>
              <span className="text-right">Total</span>
            </div>
            {laps.map((lap) => (
              <div
                key={lap.id}
                className="grid grid-cols-3 px-3 py-1.5 transition-colors hover:bg-white/5"
              >
                <span className="text-neutral-400">Lap {lap.id}</span>
                <span className="text-right font-medium text-white">{formatStopwatch(lap.splitMs)}</span>
                <span className="text-right text-neutral-400">{formatStopwatch(lap.totalMs)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolStage>
  )
}

/* ---------------- Pomodoro Timer ---------------- */

type PomodoroPhase = 'focus' | 'short' | 'long'

const PHASES: Record<PomodoroPhase, { label: string; background: string; ring: string }> = {
  focus: { label: 'Focus', background: 'linear-gradient(160deg, #b91c1c 0%, #7f1d1d 100%)', ring: '#fecaca' },
  short: { label: 'Short break', background: 'linear-gradient(160deg, #0f766e 0%, #134e4a 100%)', ring: '#99f6e4' },
  long: { label: 'Long break', background: 'linear-gradient(160deg, #1d4ed8 0%, #1e3a8a 100%)', ring: '#bfdbfe' },
}

export function PomodoroTimer() {
  const [minutes, setMinutes] = useState<Record<PomodoroPhase, number>>({ focus: 25, short: 5, long: 15 })
  const [rounds, setRounds] = useState(4)
  const [phase, setPhase] = useState<PomodoroPhase>('focus')
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [completed, setCompleted] = useState(0)
  const [autoStart, setAutoStart] = useState(true)
  const [hasSound, setHasSound] = useState(true)
  const endRef = useRef<number | null>(null)
  const total = minutes[phase] * 60

  const goTo = useCallback(
    (next: PomodoroPhase, run: boolean) => {
      setPhase(next)
      const seconds = minutes[next] * 60
      setTimeLeft(seconds)
      endRef.current = run ? Date.now() + seconds * 1000 : null
      setIsRunning(run)
    },
    [minutes],
  )

  // Which phase follows this one: every `rounds`-th focus session earns a long break.
  const advance = useCallback(() => {
    if (phase === 'focus') {
      const done = completed + 1
      setCompleted(done)
      goTo(done % rounds === 0 ? 'long' : 'short', autoStart)
    } else {
      goTo('focus', autoStart)
    }
  }, [phase, completed, rounds, autoStart, goTo])

  // Counts against the real clock, so background tabs stay accurate.
  useEffect(() => {
    if (!isRunning) return
    const id = window.setInterval(() => {
      const left = Math.max(0, Math.round(((endRef.current ?? Date.now()) - Date.now()) / 1000))
      setTimeLeft(left)
      if (left <= 0) {
        if (hasSound) {
          playTone(660, 220, 0.2)
          window.setTimeout(() => playTone(880, 220, 0.2), 260)
          window.setTimeout(() => playTone(990, 450, 0.22), 520)
        }
        advance()
      }
    }, 250)
    return () => window.clearInterval(id)
  }, [isRunning, hasSound, advance])

  const toggle = useCallback(() => {
    if (isRunning) {
      setIsRunning(false)
      endRef.current = null
    } else {
      endRef.current = Date.now() + timeLeft * 1000
      setIsRunning(true)
    }
  }, [isRunning, timeLeft])

  // Changing a length resets the current phase if it is not running.
  const setLength = (key: PomodoroPhase, value: number) => {
    setMinutes((current) => ({ ...current, [key]: value }))
    if (key === phase && !isRunning) setTimeLeft(value * 60)
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (event.key !== ' ' || target.closest('input, textarea, button, select')) return
      event.preventDefault()
      toggle()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggle])

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const ss = String(timeLeft % 60).padStart(2, '0')

  // Time left in the tab title while running.
  useEffect(() => {
    const original = document.title
    return () => {
      document.title = original
    }
  }, [])
  useEffect(() => {
    if (isRunning) document.title = `${mm}:${ss} · ${PHASES[phase].label}`
  }, [isRunning, mm, ss, phase])

  const progress = total ? 1 - timeLeft / total : 0
  const look = PHASES[phase]

  return (
    <ToolStage
      label="Pomodoro timer"
      tone="dark"
      reserveHeadingSpace
      style={{ background: look.background }}
      controls={
        <>
          <ControlRow>
            <ActionButton variant="primary" onClick={toggle}>
              {isRunning ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
              {isRunning ? 'Pause' : timeLeft < total ? 'Resume' : 'Start'}
            </ActionButton>
            <ActionButton onClick={advance}>
              <SkipForward aria-hidden="true" />
              Skip
            </ActionButton>
            <ActionButton
              onClick={() => {
                setCompleted(0)
                goTo('focus', false)
              }}
            >
              <RotateCcw aria-hidden="true" />
              Reset
            </ActionButton>
            <Toggle label="Auto-start next" checked={autoStart} onChange={setAutoStart} />
            <ActionButton onClick={() => setHasSound((value) => !value)} aria-pressed={hasSound}>
              {hasSound ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
              {hasSound ? 'Chime on' : 'Chime off'}
            </ActionButton>
          </ControlRow>
          <ControlRow>
            <Slider label="Focus" value={minutes.focus} min={5} max={90} step={5} onChange={(v) => setLength('focus', v)} format={(v) => `${v} min`} />
            <Slider label="Short break" value={minutes.short} min={1} max={20} onChange={(v) => setLength('short', v)} format={(v) => `${v} min`} />
            <Slider label="Long break" value={minutes.long} min={5} max={45} step={5} onChange={(v) => setLength('long', v)} format={(v) => `${v} min`} />
            <Slider label="Sessions before long break" value={rounds} min={2} max={8} onChange={setRounds} />
          </ControlRow>
        </>
      }
    >
      <div className="flex size-full flex-col items-center justify-center gap-3 text-white sm:gap-5" style={{ containerType: 'size' }}>
        <div role="tablist" aria-label="Phase" className="flex gap-1 rounded-full bg-black/25 p-1">
          {(Object.keys(PHASES) as PomodoroPhase[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={phase === key}
              onClick={() => goTo(key, false)}
              className={cn('h-8 rounded-full px-3 text-xs font-semibold transition-colors sm:h-9 sm:px-4 sm:text-sm', phase === key ? 'bg-white text-neutral-900' : 'text-white/85 hover:bg-white/10')}
            >
              {PHASES[key].label}
            </button>
          ))}
        </div>
        <div className="relative flex items-center justify-center" style={{ width: '62cqmin', height: '62cqmin' }}>
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="3" />
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke={look.ring}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 46}
              strokeDashoffset={2 * Math.PI * 46 * (1 - progress)}
              style={{ transition: 'stroke-dashoffset 0.3s linear' }}
            />
          </svg>
          <div className="text-center">
            <p className="font-bold tabular-nums leading-none tracking-tight" style={{ fontSize: '17cqmin' }} aria-live="off">
              {mm}:{ss}
            </p>
            <p className="mt-[1.5cqmin] font-medium text-white/80" style={{ fontSize: 'max(12px, 3.6cqmin)' }}>
              {phase === 'focus' ? `Session ${(completed % rounds) + 1} of ${rounds}` : look.label}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5" aria-label={`${completed} sessions completed`}>
          {Array.from({ length: rounds }, (_, i) => (
            <span key={i} className={cn('size-2.5 rounded-full', i < completed % rounds || (completed > 0 && completed % rounds === 0 && phase === 'long') ? 'bg-white' : 'bg-white/30')} />
          ))}
          <span className="ml-2 text-xs text-white/75">{completed} done</span>
        </div>
      </div>
    </ToolStage>
  )
}
