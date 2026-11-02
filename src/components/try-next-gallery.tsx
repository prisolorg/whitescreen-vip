'use client'

import { useId, useMemo, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { TOOLS, getTool, toolPath, type Tool } from '@/lib/tools'
import { getCategory, type ToolCategoryId } from '@/lib/tool-categories'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/tool-translations'
import { useTranslation } from '@/lib/i18n'

/** Gallery tabs: solid colors get their own tab, split out of the screen-tests category. */
export type GalleryTabId = 'colors' | ToolCategoryId

const TAB_ORDER: readonly GalleryTabId[] = ['colors', 'screen-tests', 'effects', 'screensavers', 'fake-screens', 'utilities']

const BARS =
  'linear-gradient(90deg, #c0c0c0 0 14%, #c0c000 14% 28%, #00c0c0 28% 42%, #00c000 42% 57%, #c000c0 57% 71%, #c00000 71% 85%, #0000c0 85%)'
const SNOW =
  'radial-gradient(circle at 20% 30%, #fff 0 1.5px, transparent 2.5px), radial-gradient(circle at 70% 60%, #fff 0 1.5px, transparent 2.5px), radial-gradient(circle at 45% 80%, #fff 0 1.5px, transparent 2.5px), #0f1b33'
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
  'bright-white-screen': 'radial-gradient(circle, #fff, #eef0f3)',
  'zoom-lighting': 'radial-gradient(circle at 50% 45%, #fffaf0, #ffd59a)',
  'static-screen': STATIC,
  'visual-noise': 'repeating-linear-gradient(-45deg, #5a5a5a 0 1px, #1f1f1f 1px 2px)',
  'no-signal-screen': BARS,
  'white-noise-screen': 'radial-gradient(circle at 30% 30%, #5b6b7d, transparent 60%), #2b3440',
  'pink-noise-screen': 'radial-gradient(circle at 30% 30%, #8a4f72, transparent 60%), #3a1f33',
  'brown-noise-screen': 'radial-gradient(circle at 30% 30%, #6b4a2f, transparent 60%), #24170f',
  'broken-screen': 'linear-gradient(135deg, #111 46%, #d4d4d4 47%, #111 48%), linear-gradient(60deg, #111 55%, #a3a3a3 56%, #111 57%)',
  'hacker-typer': '#02130a',
  'color-cycle': 'conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)',
  'gradient-screen': 'linear-gradient(135deg, #6d28d9, #f97316)',
  'matrix-screensaver': '#02130a',
  'flip-clock-screensaver': '#111',
  'dvd-screensaver': '#0b0b18',
  'custom-dvd-screensaver': '#111827',
  'snow-screen': SNOW,
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
  'fake-slack-huddle': '#3f0e40',
}

const GLYPHS: Record<string, string> = {
  'hacker-typer': '>_',
  'matrix-screensaver': '01',
  'flip-clock-screensaver': '12:45',
  'dvd-screensaver': 'DVD',
  'custom-dvd-screensaver': 'DVD',
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
  const glyph = GLYPHS[tool.slug]
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
    <section aria-labelledby={`${baseId}-heading`} className={cn('flex flex-col gap-3', className)}>
      <div className="flex items-baseline justify-between gap-3">
        <h2 id={`${baseId}-heading`} className="text-base font-bold tracking-tight sm:text-lg">
          {t('keepTesting', 'Keep testing your display')}
        </h2>
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

      <ul
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${tab}`}
        className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6 max-sm:[&>li:nth-child(n+10)]:hidden"
      >
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
    </section>
  )
}
