'use client'

import { Children, createContext, useContext, useId, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { tx } from '@/lib/tx'

/** True inside the compact one-row control bar: controls render as slim single-line versions. */
export const InRowContext = createContext(false)
const useInRow = () => useContext(InRowContext)

export function ControlRow({ children, className }: { children: ReactNode; className?: string }) {
  const inRow = useInRow()
  return <div className={cn(inRow ? 'contents' : 'flex flex-wrap items-end gap-4', !inRow && className)}>{children}</div>
}

type SliderProps = {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (value: number) => void
  format?: (value: number) => string
  className?: string
}

export function Slider({ label, value, min, max, step = 1, onChange, format, className }: SliderProps) {
  const id = useId()
  const inRow = useInRow()
  if (inRow)
    return (
      <div className={cn('tb-slider flex min-w-[180px] flex-1 items-center gap-2.5 text-sm', className)}>
        <label htmlFor={id} className="tb-slider-label whitespace-nowrap font-semibold">
          {tx(label)}
        </label>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-2 min-w-0 flex-1 cursor-pointer accent-foreground"
        />
        <output htmlFor={id} className="tb-slider-out whitespace-nowrap font-mono text-xs text-muted-foreground">
          {format ? format(value) : value}
        </output>
      </div>
    )
  return (
    <div className={cn('flex min-w-40 flex-1 flex-col gap-1.5', className)}>
      <div className="flex items-center justify-between gap-2 text-sm">
        <label htmlFor={id} className="font-medium">
          {tx(label)}
        </label>
        <output htmlFor={id} className="font-mono text-xs text-muted-foreground">
          {format ? format(value) : value}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer accent-primary"
      />
    </div>
  )
}

type SegmentedProps<T extends string> = {
  label: string
  value: T
  options: readonly { value: T; label: string }[]
  onChange: (value: T) => void
}

export function Segmented<T extends string>({ label, value, options, onChange }: SegmentedProps<T>) {
  const inRow = useInRow()
  return (
    <fieldset className="flex flex-col gap-1.5">
      <legend className={inRow ? 'sr-only' : 'mb-1.5 text-sm font-medium'}>{tx(label)}</legend>
      <div className={cn('flex flex-wrap gap-1 rounded-lg p-1', inRow ? 'rounded-xl bg-muted' : 'border bg-muted/50')}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={option.value === value}
            onClick={() => onChange(option.value)}
            className={cn(
              'h-8 rounded-md px-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-1',
              option.value === value
                ? 'bg-background font-medium shadow-sm ring-1 ring-border'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {tx(option.label)}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

type ColorInputProps = { label: string; value: string; onChange: (value: string) => void }

export function ColorInput({ label, value, onChange }: ColorInputProps) {
  const id = useId()
  const inRow = useInRow()
  return (
    <div className={cn('flex gap-1.5', inRow ? 'items-center gap-2' : 'flex-col')}>
      <label htmlFor={id} className={cn('text-sm', inRow ? 'whitespace-nowrap font-semibold' : 'font-medium')}>
        {tx(label)}
      </label>
      <div className="flex h-10 items-center gap-2 rounded-lg border bg-background pl-1.5 pr-3">
        <input
          id={id}
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="size-7 cursor-pointer rounded-md border-0 bg-transparent p-0"
        />
        <span className="tb-hex font-mono text-xs uppercase text-muted-foreground">{value}</span>
      </div>
    </div>
  )
}

type TextInputProps = {
  label: string
  value: string
  onChange: (value: string) => void
  maxLength?: number
  placeholder?: string
  className?: string
}

export function TextInput({ label, value, onChange, maxLength, placeholder, className }: TextInputProps) {
  const id = useId()
  const inRow = useInRow()
  return (
    <div className={cn('flex min-w-48 flex-1 gap-1.5', inRow ? 'items-center gap-2' : 'flex-col', className)}>
      <label htmlFor={id} className={cn('text-sm', inRow ? 'whitespace-nowrap font-semibold' : 'font-medium')}>
        {tx(label)}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        maxLength={maxLength}
        placeholder={placeholder && tx(placeholder)}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-lg border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  )
}

type ToggleProps = { label: string; checked: boolean; onChange: (checked: boolean) => void }

export function Toggle({ label, checked, onChange }: ToggleProps) {
  const id = useId()
  return (
    <div className="flex h-10 items-center gap-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="size-4 cursor-pointer accent-primary"
      />
      <label htmlFor={id} className="cursor-pointer text-sm font-medium">
        {tx(label)}
      </label>
    </div>
  )
}

type ActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

export function ActionButton({ variant = 'outline', className, children, ...props }: ActionButtonProps) {
  return (
    <button
      type="button"
      {...props}
      aria-label={props['aria-label'] && tx(props['aria-label'])}
      title={props.title && tx(props.title)}
      className={cn(
        'inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'border bg-background hover:bg-accent',
        className,
      )}
    >
      {Children.map(children, (child) => (typeof child === 'string' ? tx(child) : child))}
    </button>
  )
}
