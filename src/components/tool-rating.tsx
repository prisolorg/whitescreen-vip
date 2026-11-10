import { useEffect, useId, useRef, useState } from 'react'
import { Star, X } from 'lucide-react'
import {
  MIN_RATINGS_SHOWN,
  RATINGS_ENABLED,
  TOOL_USED_EVENT,
  isPromptDone,
  markPromptDone,
  submitRating,
  useRating,
} from '@/lib/ratings'
import { tx } from '@/lib/tx'
import { cn } from '@/lib/utils'

/** Ratings show on desktop only (the width where the rail ad appears), to keep phones clean. */
const DESKTOP_QUERY = '(min-width: 1024px)'

const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))

const stop = (event: { stopPropagation(): void }) => event.stopPropagation()

const formatAverage = (average: number) => {
  const lang = typeof document === 'undefined' ? 'en' : document.documentElement.lang || 'en'
  return average.toLocaleString(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
}

/**
 * Badge beside the page title: the average once enough people rated, otherwise "Rate this tool".
 * Hovering (or clicking / tapping, or Enter) opens a small rating card under it, like a tooltip.
 */
export function RatingBadge({ tone }: { tone: 'light' | 'dark' }) {
  const rating = useRating()
  const panelId = useId()
  const [open, setOpen] = useState(false)
  const [pinned, setPinned] = useState(false)
  const wrapper = useRef<HTMLSpanElement>(null)
  const closeTimer = useRef(0)

  // Clicking outside or pressing Escape closes the card.
  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) {
        setOpen(false)
        setPinned(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setPinned(false)
      }
    }
    document.addEventListener('pointerdown', onPointer)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!RATINGS_ENABLED || !rating || rating.status !== 'ready') return null
  const shown = rating.count >= MIN_RATINGS_SHOWN

  return (
    <span
      ref={wrapper}
      className="pointer-events-auto relative hidden shrink-0 lg:inline-flex"
      // Keep clicks and typing here away from the stage (tap = next color, double-click / F = fullscreen, arrows).
      onClick={stop}
      onDoubleClick={stop}
      onPointerDown={stop}
      onKeyDown={stop}
      onMouseEnter={() => {
        window.clearTimeout(closeTimer.current)
        setOpen(true)
      }}
      onMouseLeave={() => {
        // A short grace period so the pointer can travel from the badge into the card.
        if (!pinned) closeTimer.current = window.setTimeout(() => setOpen(false), 250)
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          setPinned(!(open && pinned))
          setOpen(!(open && pinned))
        }}
        className={cn(
          'inline-flex h-7 items-center gap-1 rounded-full px-2.5 text-xs font-semibold ring-1 transition-colors',
          tone === 'light'
            ? 'bg-amber-50/90 text-amber-950 ring-amber-300 hover:bg-amber-100'
            : 'bg-black/35 text-white ring-white/25 hover:bg-black/50',
        )}
      >
        <Star aria-hidden="true" className={cn('size-3.5', shown ? 'fill-amber-400 text-amber-400' : tone === 'light' ? 'text-amber-600' : 'text-amber-300')} />
        {shown
          ? fill(tx('{average} · {count} ratings'), { average: formatAverage(rating.average), count: rating.count.toLocaleString() })
          : tx('Rate this tool')}
      </button>
      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label={tx('Rate this tool')}
          className="absolute left-0 top-full z-30 pt-2"
          // Once someone clicks or tabs into the card it stays open until they close it (click outside or Escape).
          onPointerDown={() => setPinned(true)}
          onFocus={() => setPinned(true)}
        >
          <RatingCard />
        </div>
      )}
    </span>
  )
}

/** The rating card inside the badge's tooltip: stars and the average (or an invitation). */
function RatingCard() {
  const rating = useRating()
  const [error, setError] = useState(false)
  if (!rating) return null
  const mine = rating.mine
  const shown = rating.count >= MIN_RATINGS_SHOWN

  return (
    <div className="flex w-[320px] flex-col gap-2 rounded-xl border border-border bg-card p-3.5 text-left text-card-foreground shadow-xl">
      <p className="text-sm font-semibold">{mine ? fill(tx('You rated this tool {n} out of 5'), { n: mine }) : tx('Was this tool useful?')}</p>
      <StarPicker
        value={mine}
        disabled={Boolean(mine)}
        onPick={async (stars) => {
          setError(false)
          if (!(await submitRating(rating.tool, stars))) setError(true)
        }}
      />
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-live="polite">
        {shown ? (
          <>
            <Star aria-hidden="true" className="size-3.5 fill-amber-400 text-amber-400" />
            {fill(tx('{average} out of 5 · {count} ratings'), { average: formatAverage(rating.average), count: rating.count.toLocaleString() })}
          </>
        ) : (
          tx('Be one of the first to rate this tool')
        )}
      </p>
      {error && <p className="text-sm text-destructive" role="alert">{tx("Couldn't save your rating. Please try again.")}</p>}
    </div>
  )
}

function StarPicker({
  value,
  onPick,
  size = 'md',
  disabled,
}: {
  value: number
  onPick: (stars: number) => void
  size?: 'md' | 'lg'
  disabled?: boolean
}) {
  const [hover, setHover] = useState(0)
  const active = hover || value
  return (
    <div className="flex" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((stars) => (
        <button
          key={stars}
          type="button"
          disabled={disabled}
          aria-label={fill(tx('Rate {n} out of 5'), { n: stars })}
          aria-pressed={value === stars}
          onMouseEnter={() => setHover(stars)}
          onFocus={() => setHover(stars)}
          onBlur={() => setHover(0)}
          onClick={() => onPick(stars)}
          className={cn(
            'flex items-center justify-center rounded-lg transition-transform focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring enabled:hover:scale-110 disabled:cursor-default',
            size === 'lg' ? 'size-11' : 'size-10',
          )}
        >
          <Star
            aria-hidden="true"
            strokeWidth={1.6}
            className={cn(size === 'lg' ? 'size-8' : 'size-7', stars <= active ? 'fill-amber-400 text-amber-500' : 'text-muted-foreground/60')}
          />
        </button>
      ))}
    </div>
  )
}

/** One-time prompt after someone finishes using a tool (left fullscreen or downloaded). Never shown again once answered or dismissed. */
function RatingPrompt() {
  const rating = useRating()
  const titleId = useId()
  const [open, setOpen] = useState(false)
  const [picked, setPicked] = useState(0)
  const [toolName, setToolName] = useState('')

  const ready = rating?.status === 'ready' && !rating.mine

  function close() {
    markPromptDone()
    setOpen(false)
  }

  useEffect(() => {
    if (!ready) return
    let timer = 0
    const show = () => {
      // Desktop only: on phones the prompt would sit over the content and ads.
      if (isPromptDone() || !window.matchMedia(DESKTOP_QUERY).matches) return
      window.clearTimeout(timer)
      // A short pause so the prompt never appears during the exit animation or the download dialog.
      timer = window.setTimeout(() => {
        setToolName(document.getElementById('screen-heading')?.textContent?.trim() || '')
        setOpen(true)
      }, 900)
    }
    window.addEventListener(TOOL_USED_EVENT, show)
    return () => {
      window.removeEventListener(TOOL_USED_EVENT, show)
      window.clearTimeout(timer)
    }
  }, [ready])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open || !rating) return null

  return (
    <div
      role="dialog"
      aria-labelledby={titleId}
      className="fixed inset-x-4 bottom-4 z-50 flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-2xl sm:left-auto sm:right-6 sm:bottom-6 sm:w-[360px]"
    >
      <div className="flex items-start justify-between gap-3">
        <p id={titleId} className="text-[15px] font-bold leading-snug">
          {toolName ? fill(tx('How did the {tool} work for you?'), { tool: toolName }) : tx('Was this tool useful?')}
        </p>
        <button
          type="button"
          onClick={close}
          aria-label={tx('Close')}
          className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted hover:bg-muted/70"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>
      {picked ? (
        <p className="text-sm text-muted-foreground" role="status">
          {fill(tx('You rated this tool {n} out of 5'), { n: picked })}
        </p>
      ) : (
        <>
          <StarPicker
            size="lg"
            value={0}
            onPick={(stars) => {
              setPicked(stars)
              void submitRating(rating.tool, stars)
              window.setTimeout(() => setOpen(false), 1600)
            }}
          />
          <button type="button" onClick={close} className="self-start px-1 text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground">
            {tx('Not now')}
          </button>
        </>
      )}
    </div>
  )
}

/** The one-time "how did it work" prompt, mounted once per tool page (by ToolWithAds) so it is there after fullscreen. */
export function ToolRatingPrompt() {
  if (!RATINGS_ENABLED) return null
  return <RatingPrompt />
}
