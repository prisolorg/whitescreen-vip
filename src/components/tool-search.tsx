'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TOOLS, toolPath, type Tool } from '@/lib/tools'
import { getCategory } from '@/lib/tool-categories'
import { ToolIcon } from './tool-card'
import { useTranslation, type LanguageCode } from '@/lib/i18n'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/localized-tools'

const MAX_RESULTS = 8

export function searchTools(query: string, language: LanguageCode = 'en'): Tool[] {
  const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return []
  const scored = TOOLS.map((tool) => {
    // Match both the English and the localized text so searches work in every language.
    const localized = getLocalizedTool(tool, language)
    const localizedCategory = getLocalizedCategory(getCategory(tool.category), language)
    const name = `${localized.name} ${tool.name}`.toLocaleLowerCase()
    const category = `${localizedCategory.name} ${getCategory(tool.category).name}`.toLocaleLowerCase()
    const keywords = tool.keywords.join(' ').toLocaleLowerCase()
    const description = `${localized.description} ${tool.description}`.toLocaleLowerCase()
    let score = 0
    for (const term of terms) {
      if (name.includes(term)) score += name.startsWith(term) ? 6 : 4
      else if (keywords.includes(term)) score += 3
      else if (category.includes(term)) score += 2
      else if (description.includes(term)) score += 1
      else return { tool, score: 0 }
    }
    return { tool, score }
  })
  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.tool)
}

type ToolSearchProps = {
  size?: 'default' | 'large'
  placeholder?: string
  className?: string
  onNavigate?: () => void
  autoFocus?: boolean
  /** Focus this box with ⌘K / Ctrl+K and show the hint. Use on one search box per page. */
  shortcut?: boolean
}

export function ToolSearch({
  size = 'default',
  placeholder,
  className,
  onNavigate,
  autoFocus,
  shortcut,
}: ToolSearchProps) {
  const { t, language } = useTranslation()
  const router = useRouter()
  const listId = useId()
  const inputId = useId()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!shortcut) return
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [shortcut])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close the results panel when the user clicks or taps outside the search box.
  useEffect(() => {
    if (!isOpen) return
    const handlePointer = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    document.addEventListener('pointerdown', handlePointer)
    return () => document.removeEventListener('pointerdown', handlePointer)
  }, [isOpen])

  const resolvedPlaceholder = placeholder ?? t('searchTools', 'Search tools, e.g. "dead pixel"')

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchTools(query, language).slice(0, MAX_RESULTS)
  }, [query, language])

  const showPanel = isOpen && query.trim().length > 0

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!showPanel || results.length === 0) return
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((prev) => (prev + 1) % results.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const selected = results[activeIndex]
      if (selected) {
        setIsOpen(false)
        setQuery('')
        router.push(toolPath(selected.slug))
        onNavigate?.()
      }
    } else if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const noMatchText = t('noToolsMatch', 'No tools match “{query}”.').replace('{query}', query.trim())

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <div className="relative">
        <label htmlFor={inputId} className="sr-only">
          {resolvedPlaceholder}
        </label>
        <Search
          className={cn(
            'pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground',
            size === 'large' ? 'size-5' : 'size-4',
          )}
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={showPanel ? listId : undefined}
          aria-activedescendant={
            showPanel && results[activeIndex] ? `${listId}-${results[activeIndex].slug}` : undefined
          }
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          autoFocus={autoFocus}
          placeholder={resolvedPlaceholder}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setIsOpen(true)
            setActiveIndex(0)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className={cn(
            'w-full rounded-xl border bg-background pr-10 shadow-sm outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-search-cancel-button]:hidden',
            size === 'large' ? 'h-14 pl-11 text-base' : 'h-10 pl-10 text-sm',
            shortcut && 'bg-muted/50 pr-14',
          )}
        />
        {shortcut && !query && (
          <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md border bg-background px-1.5 py-0.5 font-sans text-[11px] font-semibold text-muted-foreground">
            ⌘K
          </kbd>
        )}
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-2 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
            aria-label={t('clearSearch', 'Clear search')}
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {showPanel && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-xl border bg-popover text-left shadow-lg">
          {results.length > 0 ? (
            <ul id={listId} role="listbox" aria-label={t('matchingTools', 'Matching tools')} className="max-h-96 overflow-y-auto p-1.5">
              {results.map((tool, index) => {
                const localizedTool = getLocalizedTool(tool, language)
                const localizedCat = getLocalizedCategory(getCategory(tool.category), language)
                return (
                  <li
                    key={tool.slug}
                    id={`${listId}-${tool.slug}`}
                    role="option"
                    aria-selected={index === activeIndex}
                  >
                    <Link
                      href={toolPath(tool.slug)}
                      tabIndex={-1}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => {
                        setIsOpen(false)
                        setQuery('')
                        onNavigate?.()
                      }}
                      className={cn(
                        'flex items-center gap-3 rounded-lg p-2 text-sm',
                        index === activeIndex && 'bg-accent',
                      )}
                    >
                      <ToolIcon tool={tool} className="size-8" />
                      <span className="min-w-0">
                        <span className="block font-medium">{localizedTool.name}</span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {localizedCat.name}
                        </span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div id={listId} className="p-5 text-sm">
              <p className="font-medium">{noMatchText}</p>
              <p className="mt-1 text-muted-foreground">
                {t('tryBroaderSearch', 'Try a broader term like “screen”, “test”, “clock” or “update”, or')}{' '}
                <Link href="/tools" className="font-medium text-foreground underline underline-offset-4">
                  {t('browseAllTools', 'browse all tools')}
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
