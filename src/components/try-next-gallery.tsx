'use client'

import { useId, useMemo, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { TOOLS, getTool, toolPath, type Tool } from '@/lib/tools'
import { getCategory, type ToolCategoryId } from '@/lib/tool-categories'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/localized-tools'
import { useTranslation } from '@/lib/i18n'

/** Gallery tabs: solid colors get their own tab, split out of the screen-tests category. */
export type GalleryTabId = 'colors' | ToolCategoryId

const TAB_ORDER: readonly GalleryTabId[] = ['colors', 'screen-tests', 'effects', 'screensavers', 'fake-screens', 'utilities']

const BARS =
  'linear-gradient(90deg, #c0c0c0 0 14%, #c0c000 14% 28%, #00c0c0 28% 42%, #00c000 42% 57%, #c000c0 57% 71%, #c00000 71% 85%, #0000c0 85%)'
const STATIC = 'repeating-linear-gradient(45deg, #8a8a8a 0 1px, #2b2b2b 1px 3px)'

/** CSS backgrounds that hint at what each tool looks like. Tools without one fall back to their icon. */
const THUMBS: Record<string, string> = {
  'dead-pixel-test': 'radial-gradient(circle at 62% 40%, #fff 0 1.5px, transparent 2.5px), #000',
  'screen-uniformity-test': 'radial-gradient(circle at 50% 50%, #8a8a8a, #5f5f5f)',
  'monitor-test': BARS,
  'oled-gray-test': '#3f3f3f',
  'oled-burn-in-test': 'repeating-linear-gradient(90deg, #3a3a3a 0 10px, #262626 10px 20px)',
  'screen-color-test': 'linear-gradient(90deg, #f00 0 33%, #0f0 33% 66%, #00f 66%)',
  'screen-resolution-test': 'repeating-conic-gradient(#000 0 25%, #fff 0 50%) 0 0 / 6px 6px',
  'touch-screen-test': 'radial-gradient(circle at 35% 45%, #38bdf8 0 6px, transparent 7px), radial-gradient(circle at 65% 55%, #f472b6 0 6px, transparent 7px), #0b0f14',
  'screen-refresh-rate-test': 'repeating-linear-gradient(90deg, #38bdf8 0 3px, #0a0a0a 3px 8px)',
  'monitor-ghosting-test': 'linear-gradient(#1f1f1f 0 33%, #7f7f7f 33% 66%, #cfcfcf 66%)',
  'frame-rate-test': 'linear-gradient(#0b0b0f 0 50%, #111118 50%)',
  'screen-burn-in-test': '#808080',
  'zoom-lighting': 'radial-gradient(circle at 50% 45%, #fffaf0, #ffd59a)',
  'ring-light': 'radial-gradient(circle, transparent 0 30%, #fff7ea 32% 46%, transparent 48%), #111',
  'hacked-screen': 'repeating-linear-gradient(0deg, #1a0000 0 3px, #2a0000 3px 4px)',
  'pomodoro-timer': '#b91c1c',
  'fake-blue-screen-of-death': '#0078d7',
  'fake-radar-screen': 'radial-gradient(circle, transparent 0 20%, #14532d 21% 22%, transparent 23% 45%, #14532d 46% 47%, transparent 48%), conic-gradient(from 0deg, #22c55e88, transparent 25%), #021007',
  'visual-noise': 'repeating-linear-gradient(-45deg, #5a5a5a 0 1px, #1f1f1f 1px 2px)',
  'no-signal-screen': BARS,
  'white-noise-generator': STATIC,
  'pink-noise-generator': 'radial-gradient(circle at 30% 30%, #8a4f72, transparent 60%), #3a1f33',
  'brown-noise-generator': 'radial-gradient(circle at 30% 30%, #6b4a2f, transparent 60%), #24170f',
  'broken-screen': 'linear-gradient(135deg, #111 46%, #d4d4d4 47%, #111 48%), linear-gradient(60deg, #111 55%, #a3a3a3 56%, #111 57%)',
  'hacker-typer': '#02130a',
  'color-cycle': 'conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)',
  'gradient-screen': 'linear-gradient(135deg, #6d28d9, #f97316)',
  'matrix-screensaver': '#02130a',
  'flip-clock-screensaver': '#111',
  'dvd-screensaver': '#0b0b18',
  'motivational-quote-screensaver': 'linear-gradient(135deg,#0f172a,#1e1b4b)',
  'countdown-timer': '#1e3a8a',
  stopwatch: '#000',
  'fake-windows-10-update': '#0078D7',
  'fake-windows-11-update': '#1b1b1f',
  'fake-mac-update': '#000',
  'fake-android-update': '#0f172a',
  'fake-windows-xp-update': '#003399',
  'fake-windows-xp-boot': '#000',
  'fake-chrome-os-update': '#202124',
  'fake-ubuntu-update': '#300a24',
  'fake-zoom-meeting': '#1c1c1c',
  'fake-teams-meeting': '#292a4a',
  'fake-google-meet': '#202124',
  'fake-slack-huddle': '#3f0e40',
}

const GLYPHS: Record<string, string> = {
  'hacker-typer': '>_',
  'matrix-screensaver': '01',
  'flip-clock-screensaver': '12:45',
  'pomodoro-timer': '25:00',
  'screen-refresh-rate-test': 'Hz',
  'frame-rate-test': 'FPS',
  'hacked-screen': 'HACKED',
  'fake-blue-screen-of-death': ':(',
  'dvd-screensaver': 'DVD',
  'motivational-quote-screensaver': '“ ”',
  'countdown-timer': '05:00',
  stopwatch: '00:42',
  'fake-windows-10-update': '27%',
  'fake-windows-11-update': '…',
  'fake-mac-update': '▬▬▭',
  'fake-windows-xp-boot': '▮▮▮',
}

function tabOf(tool: Tool): GalleryTabId {
  return tool.swatch ? 'colors' : tool.category
}

export function defaultTabFor(slug: string): GalleryTabId {
  const tool = TOOLS.find((item) => item.slug === slug)
  // On a color page, nudge people toward the tests rather than colors they can already pick.
  if (!tool || tool.swatch) return 'screen-tests'
  return tool.category
}

/** Related tools first, then the rest of the tab, without the current tool. */
function tilesFor(tab: GalleryTabId, currentSlug: string): Tool[] {
  const current = TOOLS.find((item) => item.slug === currentSlug)
  const related = new Set((current?.related ?? []).map((slug) => getTool(slug).slug))
  return TOOLS.filter((tool) => tabOf(tool) === tab && tool.slug !== currentSlug).sort(
    (a, b) => Number(related.has(b.slug)) - Number(related.has(a.slug)),
  )
}

export function ToolThumb({ tool, className }: { tool: Tool; className?: string }) {
  const background = tool.swatch ?? THUMBS[tool.slug]
  const { t } = useTranslation()
  const glyph = tool.slug === 'hacked-screen' ? t('hackedGlyph', GLYPHS[tool.slug]) : GLYPHS[tool.slug]
  const Icon = tool.icon
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex items-center justify-center overflow-hidden rounded-lg ring-1 ring-inset ring-black/10',
        !background && 'bg-gradient-to-b from-background to-muted text-foreground',
        className,
      )}
      style={background ? { background } : undefined}
    >
      {glyph ? (
        <span className="font-mono text-[11px] font-bold text-white/90">{glyph}</span>
      ) : !background ? (
        <Icon className="size-5" />
      ) : null}
    </span>
  )
}

export function TryNextGallery({
  currentSlug,
  defaultTab,
  className,
}: {
  currentSlug: string
  defaultTab?: GalleryTabId
  className?: string
}) {
  const { t, language } = useTranslation()
  const [tab, setTab] = useState<GalleryTabId>(defaultTab ?? defaultTabFor(currentSlug))
  const baseId = useId()
  const tiles = useMemo(() => tilesFor(tab, currentSlug).slice(0, 12), [tab, currentSlug])

  const tabLabel = (id: GalleryTabId) =>
    id === 'colors' ? t('colorsTab', 'Colors') : getLocalizedCategory(getCategory(id), language).navLabel

  return (
    // A labelled navigation block with a styled label, not an H2: the same on every page, so each page's
    // first H2 stays its own content. Screen readers still announce it as a named navigation landmark.
    <nav aria-labelledby={`${baseId}-heading`} className={cn('flex flex-col gap-3', className)}>
      <div className="flex items-baseline justify-between gap-3">
        <p id={`${baseId}-heading`} className="text-base font-bold tracking-tight sm:text-lg">
          {defaultTabFor(currentSlug) === 'screen-tests' ? t('keepTesting', 'Keep testing your display') : t('tryNext', 'Try next')}
        </p>
        <Link href="/tools" className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
          {t('allToolsLink', 'All 50+ tools →')}
        </Link>
      </div>

      <div
        role="tablist"
        aria-label={t('toolCategories', 'Tool categories')}
        className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TAB_ORDER.map((id) => {
          const selected = id === tab
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              onClick={() => setTab(id)}
              className={cn(
                'h-10 shrink-0 rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
                selected
                  ? 'bg-foreground text-background'
                  : 'border border-border bg-background text-foreground/80 hover:bg-accent',
              )}
            >
              {tabLabel(id)}
            </button>
          )
        })}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${tab}`}>
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6 max-sm:[&>li:nth-child(n+10)]:hidden">
          {tiles.map((tool) => (
            <li key={tool.slug}>
              <Link
                href={toolPath(tool.slug)}
                className="group flex h-full flex-col gap-1.5 rounded-xl border bg-card p-1.5 transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <ToolThumb tool={tool} className="h-12 w-full sm:h-14" />
                <span className="line-clamp-2 px-1 pb-0.5 text-xs font-semibold leading-snug sm:text-[13px]">
                  {getLocalizedTool(tool, language).name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
