'use client'

import { tx } from '@/lib/tx'
import { useEffect, useId, useState } from 'react'
import { ArrowLeftRight, Check, Wand2, X } from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { ActionButton, ControlRow } from '@/components/tool-kit/controls'
import { cn } from '@/lib/utils'

/* ---------------- Color math (WCAG 2 relative luminance and contrast ratio) ---------------- */

/** Accepts "#abc", "abc", "#aabbcc" or "aabbcc"; returns "#aabbcc" in lowercase, or null. */
export function normalizeHex(input: string): string | null {
  const value = input.trim().replace(/^#/, '').toLowerCase()
  if (/^[0-9a-f]{3}$/.test(value)) return `#${value.split('').map((c) => c + c).join('')}`
  if (/^[0-9a-f]{6}$/.test(value)) return `#${value}`
  return null
}

const channel = (hex: string, index: number) => parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16) / 255
const linear = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)

export function luminance(hex: string) {
  return 0.2126 * linear(channel(hex, 0)) + 0.7152 * linear(channel(hex, 1)) + 0.0722 * linear(channel(hex, 2))
}

export function contrastRatio(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

/** Rounded down, so a ratio that fails (4.499) never shows as passing (4.5). */
const formatRatio = (ratio: number) => `${String(Math.floor(ratio * 100) / 100)}:1`

function toHsl(hex: string): [number, number, number] {
  const [r, g, b] = [0, 1, 2].map((i) => channel(hex, i))
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, l * 100]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4
  return [h * 60, s * 100, l * 100]
}

function fromHsl(h: number, s: number, l: number) {
  const a = (s / 100) * Math.min(l / 100, 1 - l / 100)
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const c = l / 100 - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))
    return Math.round(c * 255).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

/** The text color with the same hue and saturation, lightened or darkened as little as possible to reach `target`. */
export function suggestColor(text: string, background: string, target: number) {
  const [h, s, l] = toHsl(text)
  const find = (step: number) => {
    for (let next = l; next >= 0 && next <= 100; next += step) {
      const hex = fromHsl(h, s, next)
      if (contrastRatio(hex, background) >= target) return { hex, delta: Math.abs(next - l) }
    }
    return null
  }
  const options = [find(-0.5), find(0.5)].filter((option): option is { hex: string; delta: number } => option !== null)
  options.sort((a, b) => a.delta - b.delta)
  return options[0]?.hex ?? null
}

/* ---------------- Controls ---------------- */

function HexField({ label, value, onChange }: { label: string; value: string; onChange: (hex: string) => void }) {
  const id = useId()
  const [draft, setDraft] = useState(value)
  useEffect(() => setDraft(value), [value])
  const isValid = normalizeHex(draft) !== null
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="whitespace-nowrap text-sm font-semibold">
        {tx(label)}
      </label>
      <div className={cn('flex h-10 items-center gap-1.5 rounded-lg border bg-background pl-1.5 pr-2', !isValid && 'border-destructive')}>
        <input
          type="color"
          aria-label={`${tx(label)}: ${tx('color picker')}`}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="size-7 cursor-pointer rounded-md border-0 bg-transparent p-0"
        />
        <input
          id={id}
          type="text"
          inputMode="text"
          spellCheck={false}
          maxLength={7}
          value={draft}
          aria-invalid={!isValid}
          onChange={(event) => {
            setDraft(event.target.value)
            // Apply full 6-digit codes while typing; a 3-digit code could still be the start of a 6-digit one.
            const typed = event.target.value.trim().replace(/^#/, '')
            const hex = typed.length === 6 ? normalizeHex(typed) : null
            if (hex) onChange(hex)
          }}
          onBlur={() => {
            // Short codes (#333) apply when leaving the field; anything invalid reverts.
            const hex = normalizeHex(draft)
            if (hex && hex !== value) onChange(hex)
            else setDraft(value)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') event.currentTarget.blur()
          }}
          className="w-[4.5rem] bg-transparent font-mono text-sm uppercase outline-none"
        />
      </div>
    </div>
  )
}

function Verdict({ label, need, ratio }: { label: string; need: number; ratio: number }) {
  const pass = ratio >= need
  return (
    <li className="flex items-center justify-between gap-1.5 py-0.5 sm:gap-2 sm:py-1">
      <span className="min-w-0 truncate">
        {tx(label)} <span className="text-neutral-500 max-sm:hidden">({need}:1)</span>
      </span>
      <span
        className={cn(
          'inline-flex shrink-0 items-center gap-1 rounded-full px-1.5 py-px text-[11px] font-bold sm:px-2 sm:py-0.5 sm:text-xs',
          pass ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
        )}
      >
        {pass ? <Check aria-hidden="true" className="size-3.5" /> : <X aria-hidden="true" className="size-3.5" />}
        <span className="max-sm:sr-only">{pass ? tx('Pass') : tx('Fail')}</span>
      </span>
    </li>
  )
}

/* ---------------- Contrast Checker ---------------- */

export function ContrastChecker() {
  const [text, setText] = useState('#767676')
  const [background, setBackground] = useState('#ffffff')
  const ratio = contrastRatio(text, background)
  const target = ratio < 4.5 ? 4.5 : ratio < 7 ? 7 : null
  const suggestion = target ? suggestColor(text, background, target) : null

  return (
    <ToolStage
      label="Color contrast checker"
      tone={luminance(background) > 0.18 ? 'light' : 'dark'}
      badge=""
      reserveHeadingSpace
      style={{ background }}
      controls={
        <ControlRow>
          <HexField label="Text" value={text} onChange={setText} />
          <HexField label="Background" value={background} onChange={setBackground} />
          <ActionButton
            onClick={() => {
              setText(background)
              setBackground(text)
            }}
          >
            <ArrowLeftRight aria-hidden="true" />
            {tx('Swap')}
          </ActionButton>
        </ControlRow>
      }
    >
      <div className="flex size-full flex-col items-stretch justify-center gap-2 px-3 py-2 sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:pb-3">
        {/* Live preview in the chosen colors. On phones it shrinks to one row so the results fit the stage. */}
        <div className="flex min-w-0 items-center gap-3 sm:block sm:flex-1 sm:space-y-3" style={{ color: text }}>
          <div className="min-w-0 flex-1 sm:flex-none">
            <p className="text-lg font-bold leading-tight sm:text-3xl">{tx('Large text sample')}</p>
            <p className="text-xs leading-snug sm:text-base sm:leading-relaxed">
              <span className="sm:hidden">{tx('Normal body text sample.')}</span>
              <span className="max-sm:hidden">
                {tx('Normal body text, the size most of a page is set in. It needs the highest contrast to stay readable.')}
              </span>
            </p>
          </div>
          <span
            className="inline-flex shrink-0 items-center rounded-md border-2 px-2.5 py-0.5 text-xs font-semibold sm:px-3 sm:py-1 sm:text-sm"
            style={{ borderColor: text }}
          >
            {tx('Button')}
          </span>
        </div>

        {/* Results, on a fixed card so they stay readable whatever the colors. */}
        <div className="w-full shrink-0 rounded-xl bg-white p-2.5 text-xs text-neutral-900 shadow-lg ring-1 ring-black/10 sm:max-w-xs sm:p-4 sm:text-sm">
          <div className="flex items-baseline justify-between gap-2 sm:block">
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500 sm:text-xs">{tx('Contrast ratio')}</p>
            <p className="font-mono text-2xl font-bold tabular-nums sm:text-4xl" aria-live="polite">
              {formatRatio(ratio)}
            </p>
          </div>
          <ul className="mt-1 grid grid-cols-2 gap-x-3 sm:block sm:divide-y sm:divide-neutral-100">
            <Verdict label="Normal text AA" need={4.5} ratio={ratio} />
            <Verdict label="Normal text AAA" need={7} ratio={ratio} />
            <Verdict label="Large text AA" need={3} ratio={ratio} />
            <Verdict label="Large text AAA" need={4.5} ratio={ratio} />
            <Verdict label="UI components" need={3} ratio={ratio} />
          </ul>
          {suggestion && (
            <button
              type="button"
              onClick={() => setText(suggestion)}
              className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-neutral-200 px-2 py-1.5 text-xs font-semibold hover:bg-neutral-50"
            >
              <Wand2 aria-hidden="true" className="size-3.5" />
              <span className="inline-block size-3 rounded-sm ring-1 ring-black/15" style={{ background: suggestion }} />
              {(target === 4.5 ? tx('Use {hex} to pass AA') : tx('Use {hex} to pass AAA')).replace('{hex}', suggestion.toUpperCase())}
            </button>
          )}
        </div>
      </div>
    </ToolStage>
  )
}
