'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { Maximize } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'

/**
 * Building blocks shared by every screen page (color screens and tools), so the screen, its
 * title, its controls and the gallery below always sit in the same place and at the same size.
 */

/** Stage size: tall enough to feel immersive, short enough to keep the dock and gallery above the fold. */
export const STAGE_SIZE =
  'h-[40svh] min-h-[260px] w-full rounded-2xl border sm:h-[50vh] md:h-[56vh] md:max-h-[640px] lg:h-[calc(100svh-440px)] lg:min-h-[360px] lg:max-h-[600px]'

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
}: {
  title: string
  intro?: string
  /** Tone of what is behind the title: light backgrounds get dark text. */
  tone: 'light' | 'dark'
  /** Fade behind the text, for busy tool content (solid colors don't need it). */
  scrim?: boolean
  aside?: ReactNode
}) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute left-0 top-0 flex items-start justify-between gap-3 rounded-tl-2xl px-4 pb-10 pt-4 sm:px-7 sm:pt-6',
        // Leave the top-right corner free for the stage's own fullscreen button when there is no aside.
        aside ? 'right-0 rounded-tr-2xl' : 'right-14',
        tone === 'light' ? 'text-neutral-900' : 'text-white',
        scrim && (tone === 'light' ? 'bg-gradient-to-b from-white/80 to-transparent' : 'bg-gradient-to-b from-black/60 to-transparent'),
      )}
    >
      <div className="flex min-w-0 flex-col gap-1.5">
        <h1 id="screen-heading" className="text-balance text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-tight">
          {title}
        </h1>
        {intro && <p className="hidden max-w-md text-pretty text-sm leading-relaxed opacity-90 sm:line-clamp-2 lg:text-[15px]">{intro}</p>}
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
