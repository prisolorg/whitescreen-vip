'use client'

import { tx } from '@/lib/tx'
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Maximize, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { isTypingTarget, useFullscreen } from './use-fullscreen'
import { InRowContext } from './controls'
import { useTranslation } from '@/lib/i18n'
import { DoubleTapHint, STAGE_SIZE, TOOL_FIT_WIDTH, TOOL_STAGE, TOOL_STAGE_FIXED, StageDock, StageTitle, useStageHeading } from '@/components/screen-stage/stage-parts'

const HINT_DURATION_MS = 2500

type StageState = { isFullscreen: boolean; exit: () => void }

type ToolStageProps = {
  label: string
  /** Controls rendered in the dock under the stage. */
  controls?: ReactNode
  /** Tone of the stage content, used for overlay contrast. */
  tone?: 'light' | 'dark'
  className?: string
  style?: CSSProperties
  /** Hide the "Simulation" disclosure for non-simulation tools. */
  badge?: string
  /** Disable the F shortcut when a tool uses the keyboard for its own input. */
  disableShortcut?: boolean
  onStageClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  /**
   * For tools with their own top bar (meeting screens): keep a band at the top of the stage for the
   * page title so it never covers the tool. The band disappears in fullscreen.
   */
  reserveHeadingSpace?: boolean
  /** Double-click or double-tap toggles fullscreen; a single click still reaches onStageClick. */
  doubleClickFullscreen?: boolean
  /** Compact layout: fixed stage size (same for every tool) and the controls on one row; extras go in a MoreMenu. */
  compact?: boolean
  children: ReactNode | ((state: StageState) => ReactNode)
}

export function ToolStage({
  label,
  controls,
  tone = 'dark',
  className,
  style,
  badge,
  disableShortcut,
  onStageClick,
  reserveHeadingSpace,
  doubleClickFullscreen,
  compact: compactProp,
  children,
}: ToolStageProps) {
  const { t } = useTranslation()
  const heading = useStageHeading()
  // Studio layout: the title sits above the stage (drawn by the page), so no title band or overlay here.
  const studio = Boolean(heading?.studio)
  // Every tool page uses the compact layout (fixed stage size, one row of controls, extras in More).
  const compact = compactProp ?? studio
  const titleBand = Boolean(reserveHeadingSpace && heading && !studio)
  // Tools with their own toolbars (meeting screens): in the studio layout keep the stage clear of our overlays.
  const clearStage = studio && Boolean(reserveHeadingSpace)
  const { ref, isFullscreen, isFallback, enter, exit, toggle } = useFullscreen()
  // Measure the control dock so the stage can leave room for it above the fold (see TOOL_STAGE).
  const dockRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const dock = dockRef.current
    if (!studio || compact || !dock || typeof ResizeObserver === 'undefined') return
    const root = document.documentElement
    const update = () => root.style.setProperty('--dock-h', `${Math.ceil(dock.getBoundingClientRect().height) + 12}px`)
    const observer = new ResizeObserver(update)
    observer.observe(dock)
    update()
    return () => {
      observer.disconnect()
      root.style.removeProperty('--dock-h')
    }
  }, [studio, compact])

  // The rating row under the tool matches the stage width (--tool-w).
  useEffect(() => {
    const stage = ref.current as HTMLElement | null
    if (!studio || !stage || typeof ResizeObserver === 'undefined') return
    const root = document.documentElement
    const update = () => {
      if (!document.fullscreenElement) root.style.setProperty('--tool-w', `${Math.round(stage.getBoundingClientRect().width)}px`)
    }
    const observer = new ResizeObserver(update)
    observer.observe(stage)
    update()
    return () => {
      observer.disconnect()
      root.style.removeProperty('--tool-w')
    }
  }, [studio, ref])
  const [isHintVisible, setIsHintVisible] = useState(false)
  const hintTimerRef = useRef<number | undefined>(undefined)

  const revealHint = useCallback(() => {
    setIsHintVisible(true)
    window.clearTimeout(hintTimerRef.current)
    hintTimerRef.current = window.setTimeout(() => setIsHintVisible(false), HINT_DURATION_MS)
  }, [])

  useEffect(() => {
    if (isFullscreen) revealHint()
  }, [isFullscreen, revealHint])

  useEffect(() => () => window.clearTimeout(hintTimerRef.current), [])

  useEffect(() => {
    if (disableShortcut) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target) || event.metaKey || event.ctrlKey || event.altKey) return
      if (event.key === 'f' || event.key === 'F') {
        event.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle, disableShortcut])

  const chipClass =
    tone === 'light'
      ? 'bg-white/70 text-neutral-900 ring-black/10 hover:bg-white/90'
      : 'bg-black/45 text-white ring-white/20 hover:bg-black/60'

  const exitStage = () => void exit()

  // With double-click fullscreen, wait briefly before treating a click as a single click.
  const clickTimerRef = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(clickTimerRef.current), [])
  const handleStageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!doubleClickFullscreen) {
      onStageClick?.(event)
      return
    }
    window.clearTimeout(clickTimerRef.current)
    if (event.detail >= 2) {
      toggle()
      return
    }
    clickTimerRef.current = window.setTimeout(() => onStageClick?.(event), 250)
  }

  return (
    <div>
      <div className="relative">
        <div
          ref={ref}
          role="region"
          aria-label={tx(label)}
          onMouseMove={isFullscreen ? revealHint : undefined}
          onTouchStart={isFullscreen ? revealHint : undefined}
          onClick={handleStageClick}
          style={style}
          className={cn(
            'relative isolate overflow-hidden',
            doubleClickFullscreen && 'touch-manipulation select-none',
            isFullscreen ? 'h-full w-full' : studio ? (compact ? TOOL_STAGE_FIXED : TOOL_STAGE) : STAGE_SIZE,
            isFallback && 'fixed inset-0 z-[100] h-dvh max-h-none rounded-none border-0',
            isFullscreen && !isHintVisible && 'cursor-none',
            className,
          )}
        >
          {/* Always the same wrapper, so entering fullscreen never remounts the tool (camera
              streams and canvases would otherwise be lost); it only drops the title padding. */}
          <div className={titleBand && !isFullscreen ? 'size-full pt-12 sm:pt-14' : 'contents'}>
            {typeof children === 'function' ? children({ isFullscreen, exit: exitStage }) : children}
          </div>

          {doubleClickFullscreen && !isFullscreen && <DoubleTapHint tone={tone} />}

          {badge && !(clearStage && !isFullscreen) && (
            <span
              className={cn(
                'pointer-events-none absolute z-20 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ring-1 opacity-70',
                // With a reserved title band the badge sits in it, clear of the tool's own controls.
                titleBand && !isFullscreen ? 'right-3 top-12' : 'bottom-2 left-2',
                chipClass,
              )}
            >
              {typeof badge === 'string' ? tx(badge) : badge}
            </span>
          )}

          <div
            className={cn(
              // Studio: the fullscreen icon sits bottom right, like the color screens.
              'absolute right-3 z-30 flex items-center gap-2 transition-opacity duration-300',
              studio && !isFullscreen ? 'bottom-3' : 'top-3',
              isFullscreen && !isHintVisible && 'pointer-events-none opacity-0',
              clearStage && !isFullscreen && 'hidden',
            )}
          >
            {isFullscreen && (
              <span className={cn('hidden rounded-full px-3 py-1.5 text-xs ring-1 backdrop-blur sm:inline', chipClass)}>
                {t('pressEscToExit', 'Press Esc to exit')}
              </span>
            )}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                toggle()
              }}
              className={cn(
                'inline-flex size-9 items-center justify-center rounded-full ring-1 backdrop-blur transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
                chipClass,
              )}
              aria-label={isFullscreen ? t('exitFullscreen', 'Exit fullscreen') : t('fullscreen', 'Fullscreen')}
            >
              {isFullscreen ? <X className="size-4" aria-hidden="true" /> : <Maximize className="size-4" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Same title placement as the color screens; it sits outside the stage so fullscreen stays clean. */}
        {heading && !studio && !isFullscreen && (
          <StageTitle title={tx(heading.title)} intro={reserveHeadingSpace ? undefined : heading.intro} tone={tone} scrim={!reserveHeadingSpace} compact={reserveHeadingSpace} />
        )}
      </div>

      {compact && studio ? (
        // Compact: one row, same width as the stage; Fullscreen is the main action, at the end.
        <div className="mx-auto mt-3 flex w-full max-w-[min(100%,calc(59vh*16/9))] flex-wrap items-center gap-x-3 gap-y-2.5 rounded-2xl bg-card px-3 py-2.5 text-card-foreground shadow-sm ring-1 ring-black/5 sm:px-4 sm:py-3 dark:ring-white/10">
          <InRowContext.Provider value={true}>{controls}</InRowContext.Provider>
          {badge && clearStage && (
            <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground max-sm:hidden">{typeof badge === 'string' ? tx(badge) : badge}</span>
          )}
          <button
            type="button"
            onClick={toggle}
            className="ml-auto inline-flex h-10 shrink-0 items-center gap-2 rounded-xl bg-foreground px-4 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <Maximize className="size-4" aria-hidden="true" />
            {t('fullscreen', 'Fullscreen')}
          </button>
        </div>
      ) : (
        <div ref={dockRef} className={studio ? cn('mx-auto w-full [--stage-chrome:186px] sm:[--stage-chrome:196px]', TOOL_FIT_WIDTH) : undefined}>
          <StageDock onFullscreen={toggle} iconOnPhone={studio && !clearStage}>
            {clearStage && badge && (
              <span className="self-start rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{typeof badge === 'string' ? tx(badge) : badge}</span>
            )}
            {controls}
          </StageDock>
        </div>
      )}
    </div>
  )
}
