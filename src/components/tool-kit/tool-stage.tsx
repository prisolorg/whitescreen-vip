'use client'

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import Link from 'next/link'
import { LayoutGrid, Maximize, Minimize, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { isTypingTarget, useFullscreen } from './use-fullscreen'
import { useTranslation } from '@/lib/i18n'

const HINT_DURATION_MS = 2500

type StageState = { isFullscreen: boolean; exit: () => void }

type ToolStageProps = {
  label: string
  /** Controls rendered under the stage. */
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
  children,
}: ToolStageProps) {
  const { t } = useTranslation()
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

  return (
    <div className="rounded-2xl border bg-card p-3 shadow-sm sm:p-4">
      <div
        ref={ref}
        role="region"
        aria-label={label}
        onMouseMove={isFullscreen ? revealHint : undefined}
        onTouchStart={isFullscreen ? revealHint : undefined}
        onClick={onStageClick}
        style={style}
        className={cn(
          'relative isolate overflow-hidden',
          isFullscreen
            ? 'h-full w-full'
            : 'h-[56vh] min-h-72 max-h-[640px] w-full rounded-xl border',
          isFallback && 'fixed inset-0 z-[100] h-dvh rounded-none border-0',
          isFullscreen && !isHintVisible && 'cursor-none',
          className,
        )}
      >
        {typeof children === 'function' ? children({ isFullscreen, exit: exitStage }) : children}

        {badge && (
          <span
            className={cn(
              'pointer-events-none absolute bottom-2 left-2 z-20 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ring-1 opacity-70',
              chipClass,
            )}
          >
            {badge}
          </span>
        )}

        <div
          className={cn(
            'absolute right-3 top-3 z-30 flex items-center gap-2 transition-opacity duration-300',
            isFullscreen && !isHintVisible && 'pointer-events-none opacity-0',
          )}
        >
          {isFullscreen && (
            <span
              className={cn(
                'hidden rounded-full px-3 py-1.5 text-xs ring-1 backdrop-blur sm:inline',
                chipClass,
              )}
            >
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
            {isFullscreen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Maximize className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-1 pt-4">
        {controls && <div className="flex flex-col gap-4">{controls}</div>}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4">
          <p className="text-xs text-muted-foreground">
            <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">F</kbd> {t('shortcutF', 'fullscreen')} ·{' '}
            <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">Esc</kbd> {t('shortcutEsc', 'exit')}
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="/tools"
              className="inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <LayoutGrid className="size-4" aria-hidden="true" />
              {t('allTools', 'All Tools')}
            </Link>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {isFullscreen ? (
                <Minimize className="size-4" aria-hidden="true" />
              ) : (
                <Maximize className="size-4" aria-hidden="true" />
              )}
              {t('fullscreen', 'Fullscreen')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
