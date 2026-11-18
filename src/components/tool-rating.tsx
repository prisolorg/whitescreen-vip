import { useEffect, useId, useRef, useState } from 'react'
import { Star, ThumbsDown, ThumbsUp, X } from 'lucide-react'
import {
  MIN_RATINGS_SHOWN,
  RATINGS_ENABLED,
  FEEDBACK_REASONS,
  TOOL_USED_EVENT,
  isPromptDone,
  markPromptDone,
  markPromptShown,
  submitRating,
  submitReason,
  useRating,
} from '@/lib/ratings'
import { tx } from '@/lib/tx'
import { cn } from '@/lib/utils'

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
          <RatingCard
            onRated={() => {
              setOpen(false)
              setPinned(false)
            }}
          />
        </div>
      )}
    </span>
  )
}

/** The rating card inside the badge's tooltip: stars and the average (or an invitation). It closes once someone rates. */
function RatingCard({ onRated }: { onRated: () => void }) {
  const rating = useRating()
  if (!rating) return null
  const mine = rating.mine
  const shown = rating.count >= MIN_RATINGS_SHOWN

  return (
    <div className="flex w-[320px] flex-col gap-2 rounded-xl border border-border bg-card p-3.5 text-left text-card-foreground shadow-xl">
      <p className="text-sm font-semibold">{mine ? fill(tx('You rated this tool {n} out of 5'), { n: mine }) : tx('Was this tool useful?')}</p>
      <StarPicker
        value={mine}
        disabled={Boolean(mine)}
        onPick={(stars) => {
          onRated()
          rateAndThank(rating.tool, stars)
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

/**
 * A small note at the bottom of the screen for ~2 s: "Thanks for rating!" (or the error if saving failed).
 * It never takes clicks or covers controls, so it does not interrupt whatever the visitor does next.
 */
function showToast(message: string) {
  document.getElementById('ws-rating-toast')?.remove()
  const toast = document.createElement('div')
  toast.id = 'ws-rating-toast'
  toast.setAttribute('role', 'status')
  toast.className =
    'pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background shadow-lg transition-opacity duration-300 opacity-0'
  toast.textContent = message
  document.body.appendChild(toast)
  requestAnimationFrame(() => toast.classList.replace('opacity-0', 'opacity-100'))
  window.setTimeout(() => toast.classList.replace('opacity-100', 'opacity-0'), 2000)
  window.setTimeout(() => toast.remove(), 2400)
}

/** Saves the rating, then thanks the visitor (the card or prompt has already closed). */
function rateAndThank(tool: string, stars: number) {
  showToast(tx('Thanks for rating!'))
  void submitRating(tool, stars).then((saved) => {
    if (!saved) showToast(tx("Couldn't save your rating. Please try again."))
  })
}

/** Only one prompt acts per page, even where a layout mounts ToolRatingPrompt twice. */
let promptOwner: symbol | null = null
/** The card hides itself after this long unless the visitor touches, hovers or focuses it. */
const AUTO_HIDE_MS = 8000

type Placement = { left: number; bottom: number; width: number } | null

/** Where the card sits: over the bottom of the tool's screen (the stage), centred, while that screen is in view. */
function placeOverStage(): Placement {
  const anchor = [...document.querySelectorAll<HTMLElement>('[data-rating-anchor]')].find((el) => el.offsetWidth > 0)
  if (!anchor) return null
  const box = anchor.getBoundingClientRect()
  // At least 140px of the screen must be on view for the card to sit on it.
  if (box.bottom < 140 || box.top > window.innerHeight - 140) return null
  const width = Math.min(340, box.width - 24)
  if (width < 240) return null
  const bottomEdge = Math.min(box.bottom, window.innerHeight)
  return { left: box.left + (box.width - width) / 2, bottom: window.innerHeight - bottomEdge + 12, width }
}

/**
 * "How did it work?" after someone really used a tool (10+ s in fullscreen, a finished download), on every device.
 * It sits on the tool's own screen right where they were looking: 👍 / 👎 first (one tap), then stars after 👍 or a
 * reason after 👎. At most once per visit, and not again on that tool for 30 days once answered or closed.
 */
function RatingPrompt() {
  const rating = useRating(true)
  const titleId = useId()
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<'ask' | 'stars' | 'reasons'>('ask')
  const [toolName, setToolName] = useState('')
  const [place, setPlace] = useState<Placement>(null)
  const touched = useRef(false)
  const [owner] = useState(() => Symbol('rating-prompt'))

  const ready = rating?.status === 'ready' && !rating.mine
  const tool = rating?.tool ?? ''

  useEffect(() => {
    if (!promptOwner) promptOwner = owner
    return () => {
      if (promptOwner === owner) promptOwner = null
    }
  }, [owner])

  function close(answered: boolean) {
    if (answered || touched.current) markPromptDone(tool)
    setOpen(false)
  }

  useEffect(() => {
    if (!ready) return
    let timer = 0
    const show = () => {
      // Claimed here, not on mount: a layout that swaps after hydration may unmount the copy that mounted first.
      if (!promptOwner) promptOwner = owner
      if (promptOwner !== owner || isPromptDone(tool)) return
      window.clearTimeout(timer)
      // A short pause so the card never appears during the exit animation or the download dialog.
      timer = window.setTimeout(() => {
        const spot = placeOverStage()
        // Phones: only on the tool's screen, never floating over the page text or the ads.
        if (!spot && !window.matchMedia('(min-width: 1024px)').matches) return
        setToolName(document.getElementById('screen-heading')?.textContent?.trim() || '')
        setPlace(spot)
        setStep('ask')
        touched.current = false
        markPromptShown()
        setOpen(true)
      }, 700)
    }
    window.addEventListener(TOOL_USED_EVENT, show)
    return () => {
      window.removeEventListener(TOOL_USED_EVENT, show)
      window.clearTimeout(timer)
    }
  }, [ready, tool, owner])

  // Follows the screen while the page scrolls or resizes; falls back to the corner when the screen leaves view.
  useEffect(() => {
    if (!open) return
    let frame = 0
    const follow = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setPlace(placeOverStage()))
    }
    window.addEventListener('scroll', follow, { passive: true })
    window.addEventListener('resize', follow)
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && close(false)
    window.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', follow)
      window.removeEventListener('resize', follow)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Auto-hide unless the visitor engages with it.
  useEffect(() => {
    if (!open) return
    const id = window.setTimeout(() => !touched.current && setOpen(false), AUTO_HIDE_MS)
    return () => window.clearTimeout(id)
  }, [open])

  if (!open || !rating) return null

  const engage = () => {
    touched.current = true
  }

  return (
    <div
      role="dialog"
      aria-labelledby={titleId}
      onPointerEnter={engage}
      onPointerDown={engage}
      onFocusCapture={engage}
      onClick={stop}
      style={place ? { left: place.left, bottom: place.bottom, width: place.width } : undefined}
      className={cn(
        'fixed z-50 flex flex-col gap-3 rounded-2xl border border-border bg-card/95 p-4 text-card-foreground shadow-2xl backdrop-blur rating-pop',
        !place && 'bottom-6 right-6 w-[340px]',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p id={titleId} className="text-[15px] font-bold leading-snug">
          {step === 'reasons'
            ? tx('What went wrong?')
            : step === 'stars'
              ? tx('Great! How many stars?')
              : toolName
                ? fill(tx('How did the {tool} work for you?'), { tool: toolName })
                : tx('Was this tool useful?')}
        </p>
        <button
          type="button"
          onClick={() => close(false)}
          aria-label={tx('Close')}
          className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted hover:bg-muted/70 pointer-coarse:size-11"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>

      {step === 'ask' && (
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              engage()
              setStep('stars')
            }}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border bg-background text-sm font-semibold hover:bg-accent"
          >
            <ThumbsUp aria-hidden="true" className="size-4" />
            {tx('It worked')}
          </button>
          <button
            type="button"
            onClick={() => {
              engage()
              setStep('reasons')
            }}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border bg-background text-sm font-semibold hover:bg-accent"
          >
            <ThumbsDown aria-hidden="true" className="size-4" />
            {tx('Not really')}
          </button>
        </div>
      )}

      {step === 'stars' && (
        <StarPicker
          size="lg"
          value={0}
          onPick={(stars) => {
            close(true)
            rateAndThank(tool, stars)
          }}
        />
      )}

      {step === 'reasons' && (
        <div className="flex flex-wrap gap-2">
          {FEEDBACK_REASONS.map((reason) => (
            <button
              key={reason.id}
              type="button"
              onClick={() => {
                close(true)
                void submitReason(tool, reason.id)
                showToast(tx('Thanks, that helps us fix it.'))
              }}
              className="inline-flex min-h-10 items-center rounded-full border bg-background px-3 text-sm font-medium hover:bg-accent pointer-coarse:min-h-11"
            >
              {tx(reason.label)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * Rating row under the tool (studio layout test pages, desktop only): stars on the left, the real
 * average (10+ ratings) or an invitation on the right. Tapping a star saves it and shows the thank-you note.
 */
export function RatingRow({ className }: { className?: string }) {
  const rating = useRating()
  if (!RATINGS_ENABLED || rating?.status === 'off') return null
  const mine = rating?.mine ?? 0
  const shown = rating && rating.count >= MIN_RATINGS_SHOWN
  return (
    <section aria-label={tx('Rate this tool')} className={cn('hidden min-h-12 flex-wrap items-center justify-between gap-x-6 gap-y-1 px-1 lg:flex', className)}>
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold">{mine ? fill(tx('You rated this tool {n} out of 5'), { n: mine }) : tx('Was this tool useful?')}</span>
        <StarPicker value={mine} disabled={!rating || rating.status !== 'ready' || Boolean(mine)} onPick={(stars) => rating && rateAndThank(rating.tool, stars)} />
      </div>
      <p className="flex items-center gap-1.5 text-sm text-muted-foreground" aria-live="polite">
        {shown ? (
          <>
            <Star aria-hidden="true" className="size-4 fill-amber-400 text-amber-400" />
            {fill(tx('{average} out of 5 · {count} ratings'), { average: formatAverage(rating.average), count: rating.count.toLocaleString() })}
          </>
        ) : (
          tx('Be one of the first to rate this tool')
        )}
      </p>
    </section>
  )
}

/** The one-time "how did it work" prompt, mounted once per tool page (by ToolWithAds) so it is there after fullscreen. */
export function ToolRatingPrompt() {
  if (!RATINGS_ENABLED) return null
  return <RatingPrompt />
}
