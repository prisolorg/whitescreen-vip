'use client'

import { tx } from '@/lib/tx'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Play, Pause, RotateCcw, Flag, Copy, Check, Volume2, VolumeX, SkipForward, CalendarDays } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { CompactSelect, MoreMenu } from '@/components/tool-kit/compact'
import { ControlRow, ActionButton, Slider, Toggle } from '@/components/tool-kit/controls'
import { playTone, unlockAudio } from '@/components/tool-kit/audio'
import { isTypingTarget } from '@/components/tool-kit/use-fullscreen'
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

const MAX_TIMER_SECONDS = 99 * 3600 + 59 * 60 + 59
/** setTimeout fires at once for delays over 2^31-1 ms (~24.8 days), so long countdowns re-arm in steps. */
const MAX_TIMEOUT_MS = 2_000_000_000
const COUNTDOWN_STORAGE_KEY = 'wsv:countdown-timer'

type CountdownMode = 'timer' | 'date'
type SavedCountdown = { mode?: CountdownMode; total?: number; date?: string; name?: string; running?: boolean }

const pad2 = (value: number) => String(value).padStart(2, '0')

/** "YYYY-MM-DDTHH:mm" in local time, the value format of <input type="datetime-local">. */
function toLocalInputValue(date: Date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}T${pad2(date.getHours())}:${pad2(date.getMinutes())}`
}

/** A datetime-local value without an offset is parsed as local time. */
function parseLocalInputValue(value: string) {
  const time = value ? new Date(value).getTime() : NaN
  return Number.isFinite(time) ? time : null
}

function readSavedCountdown(): SavedCountdown {
  try {
    return JSON.parse(window.localStorage.getItem(COUNTDOWN_STORAGE_KEY) ?? '{}') as SavedCountdown
  } catch {
    return {}
  }
}

/** "1:30:05", "90:00" or "013005" → seconds (right-aligned: the last pair is seconds). Null if not a time. */
function parseTypedTime(text: string) {
  const groups = text.includes(':') ? text.split(':').map((g) => g.replace(/\D/g, '')) : (text.replace(/\D/g, '').match(/\d{1,2}(?=(?:\d{2})*$)/g) ?? [])
  if (!groups.length || groups.length > 3 || groups.some((g) => !g)) return null
  const [s = 0, m = 0, h = 0] = groups.map(Number).reverse()
  return h * 3600 + m * 60 + s
}

function playChime() {
  playTone(880, 200, 0.2)
  playTone(880, 200, 0.2, 250)
  playTone(1174, 500, 0.25, 500)
}

/** Two editable digits on the stage (hours, minutes or seconds). Typing two digits moves to the next field. */
function DigitField({
  label,
  value,
  max,
  onCommit,
  onCommitAll,
  onEnter,
  inputRef,
  nextRef,
}: {
  label: string
  value: number
  max: number
  onCommit: (value: number) => void
  /** A whole time typed or pasted at once ("1:30:05") sets all three fields. */
  onCommitAll: (seconds: number) => void
  onEnter: () => void
  inputRef: { current: HTMLInputElement | null }
  nextRef?: { current: HTMLInputElement | null }
}) {
  const [draft, setDraft] = useState<string | null>(null)
  return (
    <input
      ref={(element) => {
        inputRef.current = element
      }}
      type="text"
      inputMode="numeric"
      autoComplete="off"
      aria-label={tx(label)}
      value={draft ?? pad2(value)}
      onFocus={(event) => {
        setDraft(pad2(value))
        event.currentTarget.select()
      }}
      onBlur={() => setDraft(null)}
      onInput={(event) => {
        const inserted = (event as unknown as InputEvent).data ?? ''
        const whole = inserted.length > 2 || inserted.includes(':') ? parseTypedTime(inserted) : null
        if (whole !== null) {
          setDraft(null)
          onCommitAll(whole)
          event.currentTarget.blur()
          return
        }
        const digits = event.currentTarget.value.replace(/\D/g, '').slice(-2)
        setDraft(digits)
        onCommit(Math.min(max, Number(digits || 0)))
        if (digits.length === 2 && nextRef?.current) nextRef.current.focus()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          event.currentTarget.blur()
          onEnter()
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          event.preventDefault()
          const next = Math.max(0, Math.min(max, value + (event.key === 'ArrowUp' ? 1 : -1)))
          setDraft(pad2(next))
          onCommit(next)
        }
      }}
      className="w-[1.2em] cursor-text rounded-[0.12em] bg-transparent p-0 text-center text-inherit outline-none transition-colors hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-primary"
    />
  )
}

export function CountdownTimer() {
  const [mode, setMode] = useState<CountdownMode>('timer')
  const [totalSeconds, setTotalSeconds] = useState(300)
  const [timeLeft, setTimeLeft] = useState(300)
  const [isRunning, setIsRunning] = useState(false)
  const [hasSound, setHasSound] = useState(true)
  const [isFinished, setIsFinished] = useState(false)
  const [dateValue, setDateValue] = useState('')
  const [eventName, setEventName] = useState('')
  const [now, setNow] = useState(() => Date.now())
  const [restored, setRestored] = useState(false)

  // Wall-clock end time (Date.now based, so it survives sleep and background tabs).
  const endAtRef = useRef<number | null>(null)
  const finishedRef = useRef(false)
  const hasSoundRef = useRef(hasSound)
  hasSoundRef.current = hasSound
  // Latest time left, updated synchronously so quick typing across the digit fields never reads a stale value.
  const timeLeftRef = useRef(timeLeft)
  timeLeftRef.current = timeLeft
  const hoursRef = useRef<HTMLInputElement | null>(null)
  const minutesRef = useRef<HTMLInputElement | null>(null)
  const secondsRef = useRef<HTMLInputElement | null>(null)

  const targetTime = parseLocalInputValue(dateValue)
  const dateIsValid = targetTime !== null && targetTime > now

  // Restore the last countdown; a date countdown that is still ahead keeps running.
  useEffect(() => {
    const saved = readSavedCountdown()
    const nextYear = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0)
    setDateValue(saved.date && parseLocalInputValue(saved.date) !== null ? saved.date : toLocalInputValue(nextYear))
    if (saved.name) setEventName(saved.name.slice(0, 60))
    if (saved.total && saved.total > 0 && saved.total <= MAX_TIMER_SECONDS) {
      setTotalSeconds(saved.total)
      setTimeLeft(saved.total)
    }
    if (saved.mode === 'date') {
      setMode('date')
      const target = saved.date ? parseLocalInputValue(saved.date) : null
      if (saved.running && target && target > Date.now()) {
        endAtRef.current = target
        finishedRef.current = false
        setTimeLeft(Math.ceil((target - Date.now()) / 1000))
        setIsRunning(true)
      }
    }
    setRestored(true)
  }, [])

  useEffect(() => {
    if (!restored) return
    try {
      const saved: SavedCountdown = { mode, total: totalSeconds, date: dateValue, name: eventName, running: mode === 'date' && isRunning }
      window.localStorage.setItem(COUNTDOWN_STORAGE_KEY, JSON.stringify(saved))
    } catch {
      /* storage unavailable: nothing to remember */
    }
  }, [restored, mode, totalSeconds, dateValue, eventName, isRunning])

  // While editing a date, keep "now" fresh so a time that has just passed can't be started.
  useEffect(() => {
    if (mode !== 'date' || isRunning) return
    const interval = window.setInterval(() => setNow(Date.now()), 15_000)
    return () => window.clearInterval(interval)
  }, [mode, isRunning])

  const stopTimer = () => {
    setIsRunning(false)
    endAtRef.current = null
  }

  const handleStart = useCallback(() => {
    if (isRunning) return
    unlockAudio()
    let endAt: number
    if (mode === 'date') {
      const target = parseLocalInputValue(dateValue)
      if (target === null || target <= Date.now()) {
        setNow(Date.now())
        return
      }
      endAt = target
    } else {
      if (timeLeft <= 0) return
      endAt = Date.now() + timeLeft * 1000
    }
    endAtRef.current = endAt
    finishedRef.current = false
    setIsFinished(false)
    setTimeLeft(Math.ceil((endAt - Date.now()) / 1000))
    setIsRunning(true)
  }, [isRunning, mode, dateValue, timeLeft])

  // Timer: pause keeps the time left. Date: the date doesn't stop, so this goes back to editing it.
  const handlePause = useCallback(() => {
    stopTimer()
    if (mode === 'date') {
      setIsFinished(false)
      setNow(Date.now())
    }
  }, [mode])

  const handleReset = useCallback(() => {
    stopTimer()
    setIsFinished(false)
    setTimeLeft(totalSeconds)
  }, [totalSeconds])

  const setTimerLength = (sec: number) => {
    const clamped = Math.max(0, Math.min(MAX_TIMER_SECONDS, sec))
    timeLeftRef.current = clamped
    stopTimer()
    setIsFinished(false)
    setTotalSeconds(clamped)
    setTimeLeft(clamped)
  }

  const handleSelect = (value: string) => {
    if (value === 'date') {
      stopTimer()
      setIsFinished(false)
      setNow(Date.now())
      setMode('date')
      return
    }
    if (mode === 'date') {
      stopTimer()
      setIsFinished(false)
      setTimeLeft(totalSeconds)
      setMode('timer')
    }
    if (value === 'custom') {
      // Focus after the stage has re-rendered with the editable digits.
      window.setTimeout(() => hoursRef.current?.focus(), 0)
    } else {
      setTimerLength(Number(value))
    }
  }

  // Tick: an interval updates the display, and one timeout aimed at the end time fires the chime. Browsers
  // pause requestAnimationFrame in hidden tabs and throttle chained timers, but a single timeout still fires.
  useEffect(() => {
    if (!isRunning || endAtRef.current === null) return
    const endAt = endAtRef.current
    let alarm: number | undefined

    const update = () => {
      const remaining = Math.max(0, Math.ceil((endAt - Date.now()) / 1000))
      setTimeLeft(remaining)
      if (remaining > 0 || finishedRef.current) return
      finishedRef.current = true
      endAtRef.current = null
      setIsRunning(false)
      setIsFinished(true)
      if (hasSoundRef.current) playChime()
    }
    const arm = () => {
      const wait = endAt - Date.now()
      alarm = window.setTimeout(
        () => {
          update()
          if (!finishedRef.current) arm()
        },
        Math.min(MAX_TIMEOUT_MS, Math.max(0, wait) + 20),
      )
    }

    update()
    arm()
    const interval = window.setInterval(update, 250)
    document.addEventListener('visibilitychange', update)
    return () => {
      window.clearTimeout(alarm)
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', update)
    }
  }, [isRunning])

  // Show the time left in the tab title, so it can be read from a background tab.
  const baseTitleRef = useRef<string | null>(null)
  useEffect(() => {
    if (baseTitleRef.current === null) baseTitleRef.current = document.title
    const base = baseTitleRef.current
    if (!isRunning) {
      document.title = isFinished ? `${tx('Time is up!')} · ${base}` : base
      return
    }
    const d = Math.floor(timeLeft / 86400)
    const h = Math.floor((timeLeft % 86400) / 3600)
    const clock = `${h > 0 || d > 0 ? `${pad2(h)}:` : ''}${pad2(Math.floor((timeLeft % 3600) / 60))}:${pad2(timeLeft % 60)}`
    document.title = `${d > 0 ? `${d}d ` : ''}${clock} · ${base}`
  }, [isRunning, isFinished, timeLeft])
  useEffect(
    () => () => {
      if (baseTitleRef.current !== null) document.title = baseTitleRef.current
    },
    [],
  )

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        if (isRunning || (mode === 'date' && isFinished)) handlePause()
        else handleStart()
      } else if ((e.key === 'r' || e.key === 'R') && mode === 'timer') {
        e.preventDefault()
        handleReset()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isRunning, isFinished, mode, handlePause, handleStart, handleReset])

  const days = Math.floor(timeLeft / 86400)
  const hours = mode === 'date' ? Math.floor((timeLeft % 86400) / 3600) : Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60
  const progress = totalSeconds > 0 ? (timeLeft / totalSeconds) * 100 : 0
  const isPreset = PRESETS.some((p) => p.seconds === totalSeconds)
  const selectValue = mode === 'date' ? 'date' : isPreset ? String(totalSeconds) : 'custom'
  const canEditDigits = mode === 'timer' && !isRunning

  const setPart = (part: 'h' | 'm' | 's', value: number) => {
    const current = timeLeftRef.current
    const h = part === 'h' ? value : Math.floor(current / 3600)
    const m = part === 'm' ? value : Math.floor((current % 3600) / 60)
    const s = part === 's' ? value : current % 60
    setTimerLength(h * 3600 + m * 60 + s)
  }

  const targetLabel =
    targetTime !== null
      ? new Intl.DateTimeFormat(document.documentElement.lang || undefined, { dateStyle: 'full', timeStyle: 'short' }).format(targetTime)
      : ''

  const stageInput =
    'h-11 rounded-xl bg-white/10 px-3 text-base text-white ring-1 ring-white/20 outline-none [color-scheme:dark] placeholder:text-white/40 focus:ring-2 focus:ring-primary'

  return (
    <ToolStage
      label="Countdown timer"
      tone="dark"
      className={cn(
        'transition-colors duration-500',
        isFinished ? 'bg-red-950/80 animate-pulse text-white' : 'bg-neutral-950 text-white',
      )}
      controls={
        <>
          <CompactSelect
            label="Timer"
            value={selectValue}
            onChange={handleSelect}
            options={[
              ...PRESETS.map((p) => ({ value: String(p.seconds), label: p.label })),
              { value: 'custom', label: 'Custom time' },
              { value: 'date', label: 'Count down to a date' },
            ]}
          />
          {mode === 'date' && (isRunning || isFinished) ? (
            <ActionButton variant="primary" onClick={handlePause}>
              <CalendarDays aria-hidden="true" />
              {tx('Change date')}
            </ActionButton>
          ) : (
            <ActionButton
              variant="primary"
              onClick={isRunning ? handlePause : handleStart}
              disabled={mode === 'date' ? !dateIsValid : !isRunning && timeLeft <= 0}
              className="w-28"
            >
              {isRunning ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
              {isRunning ? tx('Pause') : tx('Start')}
            </ActionButton>
          )}
          {mode === 'timer' && (
            <ActionButton onClick={handleReset}>
              <RotateCcw aria-hidden="true" />
              {tx('Reset')}
            </ActionButton>
          )}
          <MoreMenu>
            <Toggle label="Chime Alert" checked={hasSound} onChange={setHasSound} />
          </MoreMenu>
        </>
      }
    >
      <div className="@container relative flex size-full flex-col items-center justify-center p-4 select-none sm:p-6">
        {mode === 'timer' && (
          <div className="absolute top-0 inset-x-0 h-1.5 bg-neutral-800">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        )}

        {mode === 'timer' ? (
          <div className="flex flex-col items-center">
            <div
              className={cn(
                'flex items-center font-mono font-bold tracking-tighter tabular-nums leading-none text-[min(15cqw,34cqh)] transition-transform duration-200',
                isFinished && 'scale-105 text-red-400',
              )}
            >
              {canEditDigits ? (
                <>
                  <DigitField label="Hours" value={Math.floor(timeLeft / 3600)} max={99} onCommit={(v) => setPart('h', v)} onCommitAll={setTimerLength} onEnter={handleStart} inputRef={hoursRef} nextRef={minutesRef} />
                  <span aria-hidden="true">:</span>
                  <DigitField label="Minutes" value={minutes} max={59} onCommit={(v) => setPart('m', v)} onCommitAll={setTimerLength} onEnter={handleStart} inputRef={minutesRef} nextRef={secondsRef} />
                  <span aria-hidden="true">:</span>
                  <DigitField label="Seconds" value={seconds} max={59} onCommit={(v) => setPart('s', v)} onCommitAll={setTimerLength} onEnter={handleStart} inputRef={secondsRef} />
                </>
              ) : (
                <span role="timer">{`${pad2(Math.floor(timeLeft / 3600))}:${pad2(minutes)}:${pad2(seconds)}`}</span>
              )}
            </div>
            {isFinished ? (
              <div className="mt-4 text-xl sm:text-2xl font-bold tracking-wide uppercase text-red-300">{tx('Time is up!')}</div>
            ) : (
              canEditDigits && <div className="mt-3 text-xs text-white/50 sm:mt-4 sm:text-sm">{tx('Click or tap the numbers to set any time.')}</div>
            )}
          </div>
        ) : isRunning || isFinished ? (
          <div className="flex w-full flex-col items-center gap-[2cqh]">
            {eventName && <div className="max-w-full truncate text-center text-[min(5cqw,9cqh)] font-semibold text-white/85">{eventName}</div>}
            {isFinished ? (
              <div className="text-[min(8cqw,16cqh)] font-bold tracking-wide uppercase text-red-300">{tx('Time is up!')}</div>
            ) : (
              <div role="timer" className="flex items-start justify-center gap-[3cqw] font-mono tabular-nums">
                {[
                  { value: String(days), label: 'Days' },
                  { value: pad2(hours), label: 'Hours' },
                  { value: pad2(minutes), label: 'Minutes' },
                  { value: pad2(seconds), label: 'Seconds' },
                ].map((part) => (
                  <div key={part.label} className="flex flex-col items-center">
                    <span className="text-[min(11cqw,28cqh)] font-bold leading-none tracking-tighter">{part.value}</span>
                    <span className="mt-[1cqh] font-sans text-[min(2.4cqw,4.5cqh)] font-semibold uppercase tracking-widest text-white/55">{tx(part.label)}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="max-w-full truncate text-center text-[min(2.6cqw,5cqh)] text-white/55">{targetLabel}</div>
          </div>
        ) : (
          <form
            className="flex w-full max-w-sm flex-col gap-3 select-text"
            onSubmit={(event) => {
              event.preventDefault()
              handleStart()
            }}
          >
            <div className="text-center text-lg font-bold sm:text-2xl">{tx('Count down to')}</div>
            <input
              type="text"
              value={eventName}
              maxLength={60}
              aria-label={tx('Event name')}
              placeholder={tx('Event name (optional)')}
              onInput={(event) => setEventName(event.currentTarget.value)}
              className={stageInput}
            />
            <input
              type="datetime-local"
              required
              value={dateValue}
              aria-label={tx('Date and time')}
              onInput={(event) => {
                setDateValue(event.currentTarget.value)
                setNow(Date.now())
              }}
              className={cn(stageInput, 'w-full')}
            />
            <p className={cn('text-center text-xs sm:text-sm', dateIsValid ? 'text-white/50' : 'text-red-300')}>
              {dateIsValid ? tx('Shows days, hours, minutes and seconds. Press Start.') : tx('Pick a date and time in the future.')}
            </p>
            <button type="submit" hidden />
          </form>
        )}
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
      .map((l) => tx('Lap {n}: {split} (Total: {total})').replace('{n}', String(l.id)).replace('{split}', formatStopwatch(l.splitMs)).replace('{total}', formatStopwatch(l.totalMs)))
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
        <>
          <ControlRow>
            <>
              <ActionButton
                variant="primary"
                onClick={isRunning ? handlePause : handleStart}
                className="w-28"
              >
                {isRunning ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                {isRunning ? tx('Pause') : tx('Start')}
              </ActionButton>
              <ActionButton onClick={handleLap} disabled={!isRunning && elapsedMs === 0}>
                <Flag aria-hidden="true" />
                {tx('Lap')}
              </ActionButton>
              <ActionButton onClick={handleReset} disabled={isRunning || elapsedMs === 0}>
                <RotateCcw aria-hidden="true" />
                {tx('Reset')}
              </ActionButton>
            </>
            {laps.length > 0 && (
              <ActionButton onClick={copyLaps}>
                {copied ? <Check aria-hidden="true" className="text-green-500" /> : <Copy aria-hidden="true" />}
                {copied ? tx('Copied') : tx('Copy Laps')}
              </ActionButton>
            )}
          </ControlRow>
        </>
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
              <span>{tx('Lap')}</span>
              <span className="text-right">{tx('Split')}</span>
              <span className="text-right">{tx('Total')}</span>
            </div>
            {laps.map((lap) => (
              <div
                key={lap.id}
                className="grid grid-cols-3 px-3 py-1.5 transition-colors hover:bg-white/5"
              >
                <span className="text-neutral-400">{tx('Lap')}{' '}{lap.id}</span>
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
    if (isRunning) document.title = `${mm}:${ss} · ${tx(PHASES[phase].label)}`
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
              {isRunning ? 'Pause' : timeLeft < total ? tx('Resume') : tx('Start')}
            </ActionButton>
            <ActionButton onClick={advance}>
              <SkipForward aria-hidden="true" />
              {tx('Skip')}
            </ActionButton>
            <ActionButton
              onClick={() => {
                setCompleted(0)
                goTo('focus', false)
              }}
            >
              <RotateCcw aria-hidden="true" />
              {tx('Reset')}
            </ActionButton>
            <MoreMenu>
            <Toggle label="Auto-start next" checked={autoStart} onChange={setAutoStart} />
            <ActionButton onClick={() => setHasSound((value) => !value)} aria-pressed={hasSound}>
              {hasSound ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
              {hasSound ? tx('Chime on') : tx('Chime off')}
            </ActionButton>
            <Slider label="Focus" value={minutes.focus} min={5} max={90} step={5} onChange={(v) => setLength('focus', v)} format={(v) => `${v} min`} />
            <Slider label="Short break" value={minutes.short} min={1} max={20} onChange={(v) => setLength('short', v)} format={(v) => `${v} min`} />
            <Slider label="Long break" value={minutes.long} min={5} max={45} step={5} onChange={(v) => setLength('long', v)} format={(v) => `${v} min`} />
            <Slider label="Sessions before long break" value={rounds} min={2} max={8} onChange={setRounds} />
            </MoreMenu>
          </ControlRow>
        </>
      }
    >
      <div className="flex size-full flex-col items-center justify-center gap-3 text-white sm:gap-5" style={{ containerType: 'size' }}>
        <div role="tablist" aria-label={tx('Phase')} className="flex gap-1 rounded-full bg-black/25 p-1">
          {(Object.keys(PHASES) as PomodoroPhase[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={phase === key}
              onClick={() => goTo(key, false)}
              className={cn('h-8 rounded-full px-3 text-xs font-semibold transition-colors sm:h-9 sm:px-4 sm:text-sm', phase === key ? 'bg-white text-neutral-900' : 'text-white/85 hover:bg-white/10')}
            >
              {tx(PHASES[key].label)}
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
              {phase === 'focus' ? tx('Session {n} of {total}').replace('{n}', String((completed % rounds) + 1)).replace('{total}', String(rounds)) : tx(look.label)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5" aria-label={tx('{n} sessions completed').replace('{n}', String(completed))}>
          {Array.from({ length: rounds }, (_, i) => (
            <span key={i} className={cn('size-2.5 rounded-full', i < completed % rounds || (completed > 0 && completed % rounds === 0 && phase === 'long') ? 'bg-white' : 'bg-white/30')} />
          ))}
          <span className="ml-2 text-xs text-white/75">{tx('{n} done').replace('{n}', String(completed))}</span>
        </div>
      </div>
    </ToolStage>
  )
}
