'use client'

import { tx } from '@/lib/tx'
import { RatingBadge } from '@/components/tool-rating'
import { createContext, useContext, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'

/**
 * Building blocks shared by every screen page (color screens and tools), so the screen, its
 * title, its controls and the gallery below always sit in the same place and at the same size.
 */

/**
 * Stage size: tall enough to feel immersive, short enough to keep the dock and gallery above the fold.
 * The shadow (a faint glow in dark mode) keeps a white or black screen visible against the page.
 */
export const STAGE_SIZE =
  'h-[36svh] min-h-[240px] w-full rounded-2xl border border-black/10 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_10px_30px_-8px_rgba(0,0,0,0.22)] dark:border-white/10 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_36px_-6px_rgba(255,255,255,0.14)] sm:h-[46vh] md:h-[52vh] md:max-h-[600px] lg:h-[calc(100svh-480px)] lg:min-h-[340px] lg:max-h-[560px]'

/** Page heading that the stage shows on top of itself. Tool pages provide it; ToolStage reads it. */
export type StageHeading = { title: string; intro?: string }
export const StageHeadingContext = createContext<StageHeading | null>(null)
export const useStageHeading = () => useContext(StageHeadingContext)

export function StageTitle({
  title,
  intro,
  tone,
  scrim,
  aside,
  compact,
}: {
  title: string
  intro?: string
  /** Tone of what is behind the title: light backgrounds get dark text. */
  tone: 'light' | 'dark'
  /** Fade behind the text, for busy tool content (solid colors don't need it). */
  scrim?: boolean
  aside?: ReactNode
  /** Smaller heading that always fits the reserved title band, even on two lines on a phone. */
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute left-0 top-0 flex items-start justify-between gap-3 rounded-tl-2xl px-4 pb-6 pt-3 sm:px-6 sm:pt-4',
        // Leave the top-right corner free for the stage's own fullscreen button when there is no aside.
        aside ? 'right-0 rounded-tr-2xl' : 'right-14',
        tone === 'light' ? 'text-neutral-900' : 'text-white',
        scrim && (tone === 'light' ? 'bg-gradient-to-b from-white/80 to-transparent' : 'bg-gradient-to-b from-black/60 to-transparent'),
      )}
    >
      <div className="flex min-w-0 flex-col gap-1">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        <h1
          id="screen-heading"
          className={cn(
            'text-balance font-extrabold tracking-tight',
            compact ? 'text-base leading-6 sm:text-xl sm:leading-7' : 'text-lg leading-6 sm:text-2xl sm:leading-8',
          )}
        >
          {title}
        </h1>
        <RatingBadge tone={tone} />
        </div>
        {intro && <p className="hidden max-w-md text-pretty text-xs leading-snug opacity-85 sm:line-clamp-1 lg:text-[13px]">{intro}</p>}
      </div>
      {aside && <div className="flex shrink-0 flex-col items-end gap-2">{aside}</div>}
    </div>
  )
}

/** Controls row under the stage, always ending with the Fullscreen button. */
export function StageDock({ children, onFullscreen }: { children?: ReactNode; onFullscreen: () => void }) {
  const { t } = useTranslation()
  return (
    <div className="mt-3 flex flex-wrap items-center gap-3 rounded-2xl border bg-card p-2.5 shadow-sm sm:px-4">
      {children && <div className="flex min-w-0 flex-1 flex-col gap-3">{children}</div>}
      <button
        type="button"
        onClick={onFullscreen}
        className="ml-auto inline-flex h-10 shrink-0 items-center gap-2 rounded-xl bg-foreground px-4 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <Maximize className="size-4" aria-hidden="true" />
        {t('fullscreen', 'Fullscreen')}
      </button>
    </div>
  )
}

type ArrowTarget = { label: string; href?: string; onSelect: () => void }

/**
 * Previous/next arrows on the stage. With an href they are real links (crawlable, and they open the
 * neighbouring page); `onSelect` runs instead of following the link, e.g. to switch in place.
 */
export function StageArrows({
  prev,
  next,
  tone,
  hidden,
}: {
  prev: ArrowTarget
  next: ArrowTarget
  tone: 'light' | 'dark'
  /** Fade out (e.g. while the cursor is hidden in fullscreen). */
  hidden?: boolean
}) {
  const className = cn(
    'absolute top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full ring-1 backdrop-blur transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 sm:size-12',
    tone === 'light' ? 'bg-black/10 text-neutral-900 ring-black/15 hover:bg-black/20' : 'bg-white/15 text-white ring-white/25 hover:bg-white/25',
    hidden && 'pointer-events-none opacity-0',
  )
  const arrow = (target: ArrowTarget, side: 'left' | 'right') => {
    const Icon = side === 'left' ? ChevronLeft : ChevronRight
    const position = side === 'left' ? 'left-2 sm:left-4' : 'right-2 sm:right-4'
    const handle = (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      target.onSelect()
    }
    return target.href ? (
      <a href={target.href} onClick={handle} onDoubleClick={(event) => event.stopPropagation()} aria-label={tx(target.label)} title={tx(target.label)} className={cn(className, position)}>
        <Icon className="size-5 sm:size-6" aria-hidden="true" />
      </a>
    ) : (
      <button type="button" onClick={handle} onDoubleClick={(event) => event.stopPropagation()} aria-label={tx(target.label)} title={tx(target.label)} className={cn(className, position)}>
        <Icon className="size-5 sm:size-6" aria-hidden="true" />
      </button>
    )
  }
  return (
    <>
      {arrow(prev, 'left')}
      {arrow(next, 'right')}
    </>
  )
}

/** Small hint at the bottom of the stage, replacing the old center "Open fullscreen" button. */
export function DoubleTapHint({ tone }: { tone: 'light' | 'dark' }) {
  const { t } = useTranslation()
  return (
    <span
      className={cn(
        'pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ring-1',
        tone === 'light' ? 'bg-black/5 text-neutral-800 ring-black/10' : 'bg-white/10 text-white ring-white/20',
      )}
    >
      {t('doubleTapHint', 'Double-tap for fullscreen')}
    </span>
  )
}
