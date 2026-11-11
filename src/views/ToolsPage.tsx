import { useState, useMemo } from 'react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ToolGrid } from '@/components/tool-card'
import { TOOL_CATEGORIES, type ToolCategoryId } from '@/lib/tool-categories'
import { TOOLS, getColorScreens, getToolsByCategory } from '@/lib/tools'
import { COLOR_HUB_NAMES } from '@/lib/hubs'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/localized-tools'

export function ToolsPage() {
  const { t, language } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<ToolCategoryId | 'all' | 'colors'>('all')
  const [query, setQuery] = useState('')

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchesCategory =
        selectedCategory === 'all' || (selectedCategory === 'colors' ? Boolean(tool.swatch) : tool.category === selectedCategory && !tool.swatch)
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

  const colorScreens = getColorScreens()
  const [colorsName, colorsDescription] = COLOR_HUB_NAMES[language]

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
          <button
            type="button"
            onClick={() => setSelectedCategory('colors')}
            className={cn(
              'rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors cursor-pointer',
              selectedCategory === 'colors'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            {colorsName} ({colorScreens.length})
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
          <section id="color-screens" className="scroll-mt-24">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{colorsName}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{colorsDescription}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {colorScreens.length} {t('toolsCount', 'tools')}
              </span>
            </div>
            <ToolGrid tools={colorScreens} />
          </section>
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

    </div>
  )
}
