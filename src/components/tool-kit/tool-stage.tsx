'use client'

import { tx } from '@/lib/tx'
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Maximize, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { isTypingTarget, useFullscreen } from './use-fullscreen'
import { useTranslation } from '@/lib/i18n'
import { DoubleTapHint, STAGE_SIZE, StageDock, StageTitle, useStageHeading } from '@/components/screen-stage/stage-parts'

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
  children,
}: ToolStageProps) {
  const { t } = useTranslation()
  const heading = useStageHeading()
  const { ref, isFullscreen, isFallback, enter, exit, toggle } = useFullscreen()
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
            isFullscreen ? 'h-full w-full' : STAGE_SIZE,
            isFallback && 'fixed inset-0 z-[100] h-dvh max-h-none rounded-none border-0',
            isFullscreen && !isHintVisible && 'cursor-none',
            className,
          )}
        >
          {/* Always the same wrapper, so entering fullscreen never remounts the tool (camera
              streams and canvases would otherwise be lost); it only drops the title padding. */}
          <div className={reserveHeadingSpace && heading && !isFullscreen ? 'size-full pt-20 sm:pt-24' : 'contents'}>
            {typeof children === 'function' ? children({ isFullscreen, exit: exitStage }) : children}
          </div>

          {doubleClickFullscreen && !isFullscreen && <DoubleTapHint tone={tone} />}

          {badge && (
            <span
              className={cn(
                'pointer-events-none absolute z-20 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ring-1 opacity-70',
                // With a reserved title band the badge sits in it, clear of the tool's own controls.
                reserveHeadingSpace && heading && !isFullscreen ? 'right-3 top-14' : 'bottom-2 left-2',
                chipClass,
              )}
            >
              {typeof badge === 'string' ? tx(badge) : badge}
            </span>
          )}

          <div
            className={cn(
              'absolute right-3 top-3 z-30 flex items-center gap-2 transition-opacity duration-300',
              isFullscreen && !isHintVisible && 'pointer-events-none opacity-0',
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
        {heading && !isFullscreen && (
          <StageTitle title={tx(heading.title)} intro={reserveHeadingSpace ? undefined : heading.intro} tone={tone} scrim={!reserveHeadingSpace} compact={reserveHeadingSpace} />
        )}
      </div>

      <StageDock onFullscreen={toggle}>{controls}</StageDock>
    </div>
  )
}
