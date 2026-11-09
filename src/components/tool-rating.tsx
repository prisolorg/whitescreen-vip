import { useEffect, useId, useState } from 'react'
import { Star, X } from 'lucide-react'
import {
  MIN_RATINGS_SHOWN,
  RATINGS_ENABLED,
  TOOL_USED_EVENT,
  isPromptDone,
  markPromptDone,
  submitComment,
  submitRating,
  useRating,
} from '@/lib/ratings'
import { tx } from '@/lib/tx'
import { cn } from '@/lib/utils'

/** Ratings show on desktop only (the width where the rail ad appears), to keep phones clean. */
const DESKTOP_QUERY = '(min-width: 1024px)'

const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))

const formatAverage = (average: number) => {
  const lang = typeof document === 'undefined' ? 'en' : document.documentElement.lang || 'en'
  return average.toLocaleString(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
}

/** Small badge beside the page title: the average once enough people rated, otherwise an invitation. Links to #rating. */
export function RatingBadge({ tone }: { tone: 'light' | 'dark' }) {
  const rating = useRating()
  if (!RATINGS_ENABLED || !rating || rating.status !== 'ready') return null
  const shown = rating.count >= MIN_RATINGS_SHOWN

  return (
    <a
      href="#rating"
      className={cn(
        'pointer-events-auto hidden h-7 shrink-0 lg:inline-flex items-center gap-1 rounded-full px-2.5 text-xs font-semibold ring-1 transition-colors',
        tone === 'light'
          ? 'bg-amber-50/90 text-amber-950 ring-amber-300 hover:bg-amber-100'
          : 'bg-black/35 text-white ring-white/25 hover:bg-black/50',
      )}
    >
      <Star aria-hidden="true" className={cn('size-3.5', shown ? 'fill-amber-400 text-amber-400' : tone === 'light' ? 'text-amber-600' : 'text-amber-300')} />
      {shown
        ? fill(tx('{average} · {count} ratings'), { average: formatAverage(rating.average), count: rating.count.toLocaleString() })
        : tx('Rate this tool')}
    </a>
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

/** "Thanks, anything to improve?" with an optional comment, shown right after someone rates. */
function CommentForm({ tool, onDone }: { tool: string; onDone?: () => void }) {
  const id = useId()
  const [text, setText] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle')

  if (state === 'sent') return <p className="text-sm text-muted-foreground" role="status">{tx('Thanks, your comment was sent.')}</p>

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={async (event) => {
        event.preventDefault()
        if (!text.trim()) return onDone?.()
        setState('sending')
        await submitComment(tool, text)
        setState('sent')
        if (onDone) window.setTimeout(onDone, 1500)
      }}
    >
      <label htmlFor={id} className="text-sm font-medium">
        {tx('Thanks for rating! Anything we could improve?')}
      </label>
      <div className="flex gap-2">
        <input
          id={id}
          type="text"
          maxLength={500}
          value={text}
          onInput={(event) => setText((event.target as HTMLInputElement).value)}
          placeholder={tx('Optional comment')}
          className="h-10 min-w-0 flex-1 rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="h-10 shrink-0 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {tx('Send')}
        </button>
      </div>
    </form>
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
        <CommentForm tool={rating.tool} onDone={() => setOpen(false)} />
      ) : (
        <>
          <StarPicker
            size="lg"
            value={0}
            onPick={(stars) => {
              setPicked(stars)
              void submitRating(rating.tool, stars)
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

/** Rating row under the tool controls (the badge links here), plus the one-time prompt. */
export function RatingStrip({ className }: { className?: string }) {
  const rating = useRating()
  const [justRated, setJustRated] = useState(false)
  const [error, setError] = useState(false)
  if (!RATINGS_ENABLED || rating?.status === 'off') return null

  const mine = rating?.mine ?? 0
  const shown = rating && rating.count >= MIN_RATINGS_SHOWN

  return (
    <section id="rating" aria-label={tx('Rate this tool')} className={cn('hidden scroll-mt-24 rounded-2xl lg:block border border-border bg-muted/30 px-4 py-3', className)}>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-sm font-semibold">
            {mine ? fill(tx('You rated this tool {n} out of 5'), { n: mine }) : tx('Was this tool useful?')}
          </span>
          <StarPicker
            value={mine}
            disabled={!rating || rating.status !== 'ready' || Boolean(mine)}
            onPick={async (stars) => {
              setError(false)
              setJustRated(true)
              if (!rating) return
              const saved = await submitRating(rating.tool, stars)
              if (!saved) {
                setJustRated(false)
                setError(true)
              }
            }}
          />
        </div>
        <p className="flex items-center gap-1.5 text-sm" aria-live="polite">
          {shown ? (
            <>
              <Star aria-hidden="true" className="size-4 fill-amber-400 text-amber-400" />
              {fill(tx('{average} out of 5 · {count} ratings'), { average: formatAverage(rating.average), count: rating.count.toLocaleString() })}
            </>
          ) : (
            <span className="text-muted-foreground">{tx('Be one of the first to rate this tool')}</span>
          )}
        </p>
      </div>
      {error && <p className="mt-2 text-sm text-destructive" role="alert">{tx("Couldn't save your rating. Please try again.")}</p>}
      {justRated && rating && (
        <div className="mt-3 border-t border-border pt-3">
          <CommentForm tool={rating.tool} />
        </div>
      )}
      <RatingPrompt />
    </section>
  )
}
