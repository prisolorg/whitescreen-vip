'use client'

import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import { tx } from '@/lib/tx'
import { cn } from '@/lib/utils'
import { InRowContext } from './controls'

/**
 * Compact tool controls (one row under a fixed-size stage): only what visitors come for stays in the row,
 * everything else sits in a "More" pop-up.
 */

/** A labelled dropdown that fits in one row. */
export function CompactSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (value: T) => void
}) {
  const id = useId()
  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      <label htmlFor={id} className="whitespace-nowrap max-sm:sr-only">
        {tx(label)}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value as T)}
          className="h-10 cursor-pointer appearance-none rounded-xl border bg-background py-0 pl-3 pr-9 text-sm font-semibold hover:bg-accent"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {tx(option.label)}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      </div>
    </div>
  )
}

/** "More" button with a pop-up panel above it for the less used options. */
export function MoreMenu({ children, label = 'More options' }: { children: ReactNode; label?: string }) {
  const [open, setOpen] = useState(false)
  // Which edge of the button the panel lines up with, so it opens towards the room on screen.
  const [alignRight, setAlignRight] = useState(false)
  // Sideways nudge (px) that keeps the open panel inside the screen.
  const [shift, setShift] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useLayoutEffect(() => {
    const panel = panelRef.current
    if (!open || !panel) return setShift(0)
    const box = panel.getBoundingClientRect()
    const left = box.left - shift
    const right = box.right - shift
    const margin = 8
    setShift(left < margin ? margin - left : right > window.innerWidth - margin ? window.innerWidth - margin - right : 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, alignRight])

  const toggle = () => {
    const box = ref.current?.getBoundingClientRect()
    if (box) setAlignRight(box.left + box.width / 2 > window.innerWidth / 2)
    setOpen((value) => !value)
  }

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        className={cn('inline-flex h-10 items-center gap-1.5 rounded-xl border px-3 text-sm font-semibold whitespace-nowrap transition-colors', open ? 'bg-accent' : 'bg-background hover:bg-accent')}
      >
        <SlidersHorizontal className="size-4" aria-hidden="true" />
        {tx('More')}
      </button>
      {open && (
        <div
          id={panelId}
          ref={panelRef}
          style={shift ? { transform: `translateX(${shift}px)` } : undefined}
          role="group"
          aria-label={tx(label)}
          // data-popover: the control bar's one-row tightening (index.css, ToolStage) leaves this panel alone.
          data-popover=""
          className={cn('absolute bottom-full z-40 mb-2 flex w-72 max-w-[calc(100vw-2rem)]', alignRight ? 'right-0' : 'left-0', 'flex-col gap-4 rounded-2xl border bg-popover p-4 text-popover-foreground shadow-xl')}
        >
          <InRowContext.Provider value={false}>{children}</InRowContext.Provider>
        </div>
      )}
    </div>
  )
}
