import { useState, useMemo } from 'react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ToolGrid } from '@/components/tool-card'
import { TOOL_CATEGORIES, type ToolCategoryId } from '@/lib/tool-categories'
import { TOOLS, getToolsByCategory } from '@/lib/tools'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/tool-translations'

export function ToolsPage() {
  const { t, language } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<ToolCategoryId | 'all'>('all')
  const [query, setQuery] = useState('')

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
      const q = query.toLowerCase().trim()
      if (!q) return matchesCategory

      const localized = getLocalizedTool(tool, language)
      const matchesQuery =
        localized.name.toLowerCase().includes(q) ||
        localized.description.toLowerCase().includes(q) ||
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.keywords.some((k) => k.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [selectedCategory, query, language])

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <Breadcrumbs
        items={[
          { label: t('home', 'Home'), href: '/' },
          { label: t('toolsDirectory', 'Tools Directory'), href: '/tools' },
        ]}
      />

      <div className="mt-6 mb-8 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('toolsCatalogTitle', 'All Screen Tools & Utilities')}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {t(
            'toolsCatalogDesc',
            'Browse our complete catalog of 50+ free browser tools. Test your monitors, enjoy ambient visual effects, run fullscreen timers, or simulate update screens.',
          )}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-10 flex flex-col gap-4 border-b pb-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={cn(
              'rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors cursor-pointer',
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            {t('allTools', 'All Tools')} ({TOOLS.length})
          </button>
          {TOOL_CATEGORIES.map((cat) => {
            const count = getToolsByCategory(cat.id).length
            const localizedCat = getLocalizedCategory(cat, language)
            return (
              <button
                key={cat.id}
                type="button"
                id={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors cursor-pointer',
                  selectedCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                {localizedCat.navLabel} ({count})
              </button>
            )
          })}
        </div>

        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={t('filterTools', 'Filter tools...')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-10 w-full rounded-lg border bg-background pl-9 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      {/* When filtering by specific category or searching */}
      {selectedCategory !== 'all' || query ? (
        <div className="flex flex-col gap-4">
          <div className="text-sm text-muted-foreground">
            {t('showingTools', 'Showing {count} tools').replace('{count}', String(filteredTools.length))}
          </div>
          <ToolGrid tools={filteredTools} />
        </div>
      ) : (
        /* Grouped by categories */
        <div className="flex flex-col gap-14">
          {TOOL_CATEGORIES.map((cat) => {
            const categoryTools = getToolsByCategory(cat.id)
            const localizedCat = getLocalizedCategory(cat, language)
            return (
              <section key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">{localizedCat.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{localizedCat.description}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {categoryTools.length} {t('toolsCount', 'tools')}
                  </span>
                </div>
                <ToolGrid tools={categoryTools} />
              </section>
            )
          })}
        </div>
      )}

      {/* Helpful Display Guides & Testing Tutorials */}
      <section className="mt-16 border-t pt-10">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Display Guides & Testing Tutorials</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Practical guides on monitor maintenance, pixel defect testing, and creative display uses.
            </p>
          </div>
          <a
            href="/guides"
            className="text-xs font-semibold text-primary hover:underline shrink-0"
          >
            Browse all 10 guides →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/guides/clean-laptop-screen"
            className="group rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-xs"
          >
            <span className="text-[11px] font-semibold text-primary uppercase">Cleaning & Maintenance</span>
            <h3 className="mt-1 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              How to Use a White Screen for Monitor Cleaning
            </h3>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
              Inspect surface grime and dust under bright light before safely wiping your display.
            </p>
          </a>

          <a
            href="/guides/dead-pixel-test"
            className="group rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-xs"
          >
            <span className="text-[11px] font-semibold text-primary uppercase">Display Diagnostics</span>
            <h3 className="mt-1 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              How to Test Your Monitor for Dead Pixels
            </h3>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
              Identify dead, stuck, and hot subpixels with primary color cycles and diagnostic checks.
            </p>
          </a>

          <a
            href="/guides/screen-color-test"
            className="group rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-xs"
          >
            <span className="text-[11px] font-semibold text-primary uppercase">Display Calibration</span>
            <h3 className="mt-1 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              How to Test Monitor Colors and Display Uniformity
            </h3>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
              Evaluate backlight bleed, IPS glow, and quadrant luminance consistency across your screen.
            </p>
          </a>
        </div>
      </section>
    </div>
  )
}
