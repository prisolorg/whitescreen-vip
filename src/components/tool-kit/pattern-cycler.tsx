'use client'

import { tx } from '@/lib/tx'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ToolStage } from './tool-stage'
import { StageArrows } from '@/components/screen-stage/stage-parts'
import { ActionButton, ControlRow, Slider, Toggle } from './controls'
import { isTypingTarget } from './use-fullscreen'
import { useTranslation } from '@/lib/i18n'

export type Pattern = {
  id: string
  label: string
  /** Any CSS `background` value. */
  background: string
  backgroundSize?: string
  tone?: 'light' | 'dark'
  /** Optional chip color for the picker. */
  swatch?: string
}

type PatternCyclerProps = {
  label: string
  patterns: readonly Pattern[]
  autoCycle?: { defaultSeconds: number; min: number; max: number; step?: number }
  showGridOption?: boolean
  note?: string
}

const GRID_OVERLAY =
  'repeating-linear-gradient(0deg, rgba(255,0,0,.55) 0 1px, transparent 1px 12.5%), repeating-linear-gradient(90deg, rgba(255,0,0,.55) 0 1px, transparent 1px 12.5%)'

export function PatternCycler({ label, patterns, autoCycle, showGridOption, note }: PatternCyclerProps) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const [isCycling, setIsCycling] = useState(false)
  const [seconds, setSeconds] = useState(autoCycle?.defaultSeconds ?? 2)
  const [showGrid, setShowGrid] = useState(false)
  const current = patterns[index]

  const step = useCallback(
    (direction: 1 | -1) => setIndex((value) => (value + direction + patterns.length) % patterns.length),
    [patterns.length],
  )

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        step(1)
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        step(-1)
      } else if (event.key === ' ' && autoCycle) {
        event.preventDefault()
        setIsCycling((value) => !value)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [step, autoCycle])

  useEffect(() => {
    if (!isCycling) return
    const id = window.setInterval(() => step(1), seconds * 1000)
    return () => window.clearInterval(id)
  }, [isCycling, seconds, step])

  return (
    <ToolStage
      label={`${label}: ${tx(current.label)}`}
      tone={current.tone ?? 'dark'}
      onStageClick={() => step(1)}
      doubleClickFullscreen
      style={{ background: current.background, backgroundSize: current.backgroundSize }}
      controls={
        <>
          <div className="-mx-1 flex items-center gap-2 overflow-x-auto px-1 py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:shrink-0" role="group" aria-label={tx('Patterns')}>
            <ActionButton onClick={() => step(-1)} aria-label={t('prevPattern', 'Previous pattern')} className="px-2.5">
              <ChevronLeft aria-hidden="true" />
            </ActionButton>
            {patterns.map((pattern, patternIndex) => (
              <button
                key={pattern.id}
                type="button"
                aria-pressed={patternIndex === index}
                onClick={() => setIndex(patternIndex)}
                className={cn(
                  'inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2',
                  patternIndex === index && 'border-foreground bg-accent font-medium',
                )}
              >
                {pattern.swatch && (
                  <span
                    aria-hidden="true"
                    className="size-3.5 rounded-full ring-1 ring-black/15"
                    style={{ background: pattern.swatch }}
                  />
                )}
                {tx(pattern.label)}
              </button>
            ))}
            <ActionButton onClick={() => step(1)} aria-label={t('nextPattern', 'Next pattern')} className="px-2.5">
              <ChevronRight aria-hidden="true" />
            </ActionButton>
          </div>
          {(autoCycle || showGridOption) && (
            <ControlRow>
              {autoCycle && (
                <>
                  <ActionButton onClick={() => setIsCycling((value) => !value)} aria-pressed={isCycling}>
                    {isCycling ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                    {isCycling ? t('stopAutoCycle', 'Stop auto-cycle') : t('autoCycle', 'Auto-cycle')}
                  </ActionButton>
                  <Slider
                    label={t('interval', 'Interval')}
                    value={seconds}
                    min={autoCycle.min}
                    max={autoCycle.max}
                    step={autoCycle.step ?? 1}
                    onChange={setSeconds}
                    format={(value) => `${value}s`}
                    className="max-w-72"
                  />
                </>
              )}
              {showGridOption && <Toggle label={t('gridOverlay', 'Grid overlay')} checked={showGrid} onChange={setShowGrid} />}
            </ControlRow>
          )}
          <p className="hidden text-sm text-muted-foreground sm:block">
            {note ? tx(note) : t('patternCyclerHint', 'Click the screen or use the arrow keys to switch patterns.')}
          </p>
        </>
      }
    >
      <StageArrows
        tone={current.tone ?? 'dark'}
        prev={{ label: `${t('prevPattern', 'Previous pattern')}: ${tx(patterns[(index - 1 + patterns.length) % patterns.length].label)}`, onSelect: () => step(-1) }}
        next={{ label: `${t('nextPattern', 'Next pattern')}: ${tx(patterns[(index + 1) % patterns.length].label)}`, onSelect: () => step(1) }}
      />
      {showGrid && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: GRID_OVERLAY }} />
      )}
      <span className="sr-only" aria-live="polite">
        {tx(current.label)}
      </span>
    </ToolStage>
  )
}
