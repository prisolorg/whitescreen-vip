'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Play, Pause, RotateCcw, Flag, Copy, Check, Volume2, VolumeX } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { ControlRow, ActionButton, Toggle } from '@/components/tool-kit/controls'
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
