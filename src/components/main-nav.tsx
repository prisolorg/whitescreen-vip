'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Search, X, Monitor, Globe, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getToolsByCategory, toolPath, type Tool } from '@/lib/tools'
import type { ToolCategoryId } from '@/lib/tool-categories'
import { ToolIcon } from './tool-card'
import { useTranslation, LANGUAGES, type LanguageCode } from '@/lib/i18n'
import { isPillarPage } from '@/lib/locale-routing'
import { getLocalizedTool } from '@/lib/tool-translations'
import { ToolSearch } from './tool-search'
import { GUIDES, HEADER_GUIDES } from '@/lib/guides-content'
import { BACKGROUND_CATEGORIES } from '@/lib/backgrounds-data'
import { SCREEN_PROBLEMS } from '@/lib/screen-problems-data'

type DesktopNavGroup = {
  id: string
  translationKey: string
  defaultLabel: string
  href: string
  sections: { titleKey: string; defaultTitle: string; category: ToolCategoryId }[]
}

export const DESKTOP_NAV_GROUPS: DesktopNavGroup[] = [
  {
    id: 'screen-tests',
    translationKey: 'screenTests',
    defaultLabel: 'Screen Tests',
    href: '/tools#screen-tests',
    sections: [{ titleKey: 'screenTests', defaultTitle: 'Screen tests & colors', category: 'screen-tests' }],
  },
  {
    id: 'effects',
    translationKey: 'effects',
    defaultLabel: 'Effects',
    href: '/tools#effects',
    sections: [
      { titleKey: 'effects', defaultTitle: 'Visual effects', category: 'effects' },
      { titleKey: 'screensavers', defaultTitle: 'Screensavers', category: 'screensavers' },
    ],
  },
  {
    id: 'fake-screens',
    translationKey: 'fakeScreens',
    defaultLabel: 'Fake Screens',
    href: '/tools#fake-screens',
    sections: [{ titleKey: 'fakeScreens', defaultTitle: 'Simulations', category: 'fake-screens' }],
  },
]

type MobileNavCategory = {
  id: string
  translationKey: string
  defaultLabel: string
  category: ToolCategoryId
}

export const MOBILE_NAV_CATEGORIES: MobileNavCategory[] = [
  {
    id: 'screen-tests',
    translationKey: 'screenTests',
    defaultLabel: 'Screen Tests',
    category: 'screen-tests',
  },
  {
    id: 'effects',
    translationKey: 'effects',
    defaultLabel: 'Effects',
    category: 'effects',
  },
  {
    id: 'screensavers',
    translationKey: 'screensavers',
    defaultLabel: 'Screensavers',
    category: 'screensavers',
  },
  {
    id: 'fake-screens',
    translationKey: 'fakeScreens',
    defaultLabel: 'Fake Screens',
    category: 'fake-screens',
  },
]

function MenuLink({ tool, onNavigate }: { tool: Tool; onNavigate: () => void }) {
  const { language } = useTranslation()
  const localized = getLocalizedTool(tool, language)

  return (
    <Link
      href={toolPath(tool.slug)}
      onClick={onNavigate}
      className="flex items-center gap-2.5 rounded-lg p-2 text-sm transition-colors hover:bg-accent min-h-[44px]"
    >
      <ToolIcon tool={tool} className="size-7 [&_svg]:size-4 shrink-0" />
      <span className="truncate">{localized.name}</span>
    </Link>
  )
}

export function DesktopNav() {
  const [openId, setOpenId] = useState<string | null>(null)
  const pathname = usePathname()
  const { t } = useTranslation()
  const navRef = useRef<HTMLElement>(null)

  // Show White Screen link ONLY on pillar pages.
  // Never show on homepage or regular tool pages.
  const showWhiteScreen = isPillarPage(pathname)

  useEffect(() => setOpenId(null), [pathname])

  useEffect(() => {
    if (!openId) return
    const handlePointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenId(null)
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenId(null)
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [openId])

  const close = () => setOpenId(null)

  return (
    <nav ref={navRef} aria-label="Main" className="relative block">
      <ul className="flex items-center gap-0.5 lg:gap-1 xl:gap-1.5 text-xs lg:text-[13px] xl:text-sm whitespace-nowrap">
        {showWhiteScreen && (
          <li>
            <Link
              href="/"
              className="rounded-md px-1.5 py-1.5 lg:px-2 lg:py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-foreground font-medium"
            >
              {t('whiteScreen', 'White Screen')}
            </Link>
          </li>
        )}

        {DESKTOP_NAV_GROUPS.map((group) => {
          const isOpen = openId === group.id
          const label = t(group.translationKey, group.defaultLabel)
          const columns = group.sections.flatMap((section) => getToolsByCategory(section.category))
          return (
            <li key={group.id} className="relative">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`menu-${group.id}`}
                onClick={() => setOpenId(isOpen ? null : group.id)}
                className={cn(
                  'inline-flex items-center gap-1 rounded-md px-1.5 py-1.5 lg:px-2 lg:py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-foreground font-medium',
                  isOpen && 'bg-accent text-foreground font-semibold',
                )}
              >
                {label}
                <ChevronDown
                  className={cn('size-3.5 transition-transform duration-200', isOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div
                  id={`menu-${group.id}`}
                  className={cn(
                    'absolute left-0 top-full z-50 mt-2 rounded-2xl border border-border bg-popover p-4 shadow-xl max-w-[calc(100vw-2rem)]',
                    columns.length > 12 ? 'w-[42rem]' : 'w-[32rem]',
                  )}
                >
                  <div className="flex flex-col gap-4">
                    {group.sections.map((section) => (
                      <div key={section.category}>
                        <p className="mb-2 px-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {t(section.titleKey, section.defaultTitle)}
                        </p>
                        <ul
                          className={cn(
                            'grid gap-0.5',
                            columns.length > 12 ? 'grid-cols-3' : 'grid-cols-2',
                          )}
                        >
                          {getToolsByCategory(section.category).map((tool) => (
                            <li key={tool.slug}>
                              <MenuLink tool={tool} onNavigate={close} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          )
        })}

        {/* Guides Dropdown */}
        <li className="relative">
          <button
            type="button"
            aria-expanded={openId === 'guides'}
            aria-controls="menu-guides"
            onClick={() => setOpenId(openId === 'guides' ? null : 'guides')}
            className={cn(
              'inline-flex items-center gap-1 rounded-md px-1.5 py-1.5 lg:px-2 lg:py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-foreground font-medium',
              openId === 'guides' && 'bg-accent text-foreground font-semibold',
            )}
          >
            {t('guides', 'Guides')}
            <ChevronDown
              className={cn('size-3.5 transition-transform duration-200', openId === 'guides' && 'rotate-180')}
              aria-hidden="true"
            />
          </button>
          {openId === 'guides' && (
            <div
              id="menu-guides"
              className="absolute left-0 top-full z-50 mt-2 w-56 rounded-2xl border border-border bg-popover p-2 shadow-xl animate-in fade-in-50 zoom-in-95"
            >
              <ul className="flex flex-col gap-0.5">
                {HEADER_GUIDES.map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      href={guide.path}
                      onClick={close}
                      className="block rounded-lg px-3 py-2 text-xs lg:text-sm font-medium text-foreground/90 transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {guide.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        {/* Backgrounds Dropdown */}
        <li className="relative">
          <button
            type="button"
            aria-expanded={openId === 'backgrounds'}
            aria-controls="menu-backgrounds"
            onClick={() => setOpenId(openId === 'backgrounds' ? null : 'backgrounds')}
            className={cn(
              'inline-flex items-center gap-1 rounded-md px-1.5 py-1.5 lg:px-2 lg:py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-foreground font-medium',
              openId === 'backgrounds' && 'bg-accent text-foreground font-semibold',
            )}
          >
            {t('backgrounds', 'Backgrounds')}
            <ChevronDown
              className={cn('size-3.5 transition-transform duration-200', openId === 'backgrounds' && 'rotate-180')}
              aria-hidden="true"
            />
          </button>
          {openId === 'backgrounds' && (
            <div
              id="menu-backgrounds"
              className="absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl border border-border bg-popover p-2.5 shadow-xl animate-in fade-in-50 zoom-in-95"
            >
              <div className="flex items-center justify-between mb-1.5 px-2 py-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Collections
                </span>
                <Link
                  href="/backgrounds"
                  onClick={close}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  All Backgrounds →
                </Link>
              </div>
              <ul className="flex flex-col gap-0.5">
                {BACKGROUND_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/backgrounds?category=${cat.id}`}
                      onClick={close}
                      className="block rounded-lg px-2.5 py-1.5 text-xs lg:text-sm font-medium text-foreground/90 transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        {/* Screen Problems Dropdown */}
        <li className="relative">
          <button
            type="button"
            aria-expanded={openId === 'screen-problems'}
            aria-controls="menu-screen-problems"
            onClick={() => setOpenId(openId === 'screen-problems' ? null : 'screen-problems')}
            className={cn(
              'inline-flex items-center gap-1 rounded-md px-1.5 py-1.5 lg:px-2 lg:py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-foreground font-medium',
              openId === 'screen-problems' && 'bg-accent text-foreground font-semibold',
            )}
          >
            {t('screenProblems', 'Screen Problems')}
            <ChevronDown
              className={cn('size-3.5 transition-transform duration-200', openId === 'screen-problems' && 'rotate-180')}
              aria-hidden="true"
            />
          </button>
          {openId === 'screen-problems' && (
            <div
              id="menu-screen-problems"
              className="absolute -left-16 lg:left-0 top-full z-50 mt-2 w-[28rem] rounded-2xl border border-border bg-popover p-3 shadow-xl animate-in fade-in-50 zoom-in-95"
            >
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Troubleshooting Guides
                </span>
                <Link
                  href="/screen-problems"
                  onClick={close}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  View All Problems →
                </Link>
              </div>
              <ul className="grid grid-cols-2 gap-0.5">
                {SCREEN_PROBLEMS.map((prob) => (
                  <li key={prob.slug}>
                    <Link
                      href={`/screen-problems/${prob.slug}`}
                      onClick={close}
                      className="block rounded-lg px-2.5 py-1.5 text-xs lg:text-[13px] font-medium text-foreground/90 transition-colors hover:bg-accent hover:text-foreground truncate"
                    >
                      {prob.shortLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>



        <li>
          <Link
            href="/feedback"
            className={cn(
              'rounded-md px-2 py-1.5 lg:px-2.5 lg:py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-foreground font-medium',
              pathname.includes('/feedback') && 'bg-accent text-foreground font-semibold',
            )}
          >
            {t('feedback', 'Feedback')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const pathname = usePathname()
  const { t } = useTranslation()
  const menuRef = useRef<HTMLDivElement>(null)

  // Show White Screen link ONLY on pillar pages.
  // Never show on homepage or regular tool pages.
  const showWhiteScreen = isPillarPage(pathname)

  const close = () => {
    setIsOpen(false)
    setOpenGroup(null)
  }

  useEffect(() => {
    close()
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return
    const handlePointer = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        close()
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  const toggleGroup = (id: string) => {
    setOpenGroup((prev) => (prev === id ? null : id))
  }

  return (
    <div ref={menuRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-dropdown-menu"
        className={cn(
          'inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2',
          isOpen && 'border-primary/50 bg-accent text-foreground shadow-xs ring-1 ring-primary/20',
        )}
        aria-label={isOpen ? t('closeMenu', 'Close navigation menu') : t('menu', 'Open navigation menu')}
      >
        {isOpen ? (
          <X className="size-4 sm:size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-4 sm:size-5" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-dropdown-menu"
          role="dialog"
          aria-modal="false"
          aria-label="Navigation menu"
          className="absolute right-0 top-full z-50 mt-2 w-[calc(100vw-1.25rem)] sm:w-80 max-w-sm rounded-2xl border border-border bg-popover p-3.5 sm:p-4 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in-50 zoom-in-95"
        >
          {/* Dropdown Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-border/80">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t('navigation', 'Navigation')}
            </span>
            <button
              type="button"
              onClick={close}
              className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              aria-label={t('closeMenu', 'Close menu')}
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          {/* Conditional White Screen navigation link: Display ONLY on pillar pages, navigate to / */}
          {showWhiteScreen && (
            <div className="mb-2">
              <Link
                href="/"
                onClick={close}
                className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/5 px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-primary/10 text-foreground"
              >
                <span className="flex items-center gap-2">
                  <Monitor className="size-4 text-primary" />
                  {t('whiteScreen', 'White Screen')}
                </span>
                <span className="text-xs text-primary font-medium">{t('home', 'Home')} →</span>
              </Link>
            </div>
          )}

          {/* Mobile hamburger menu: exactly these 6 navigation sections in this exact order:
              1. Screen Tests
              2. Effects
              3. Screensavers
              4. Fake Screens
              5. Other Tools
              6. Feedback
              (No duplicate language selector in the drawer)
          */}
          <nav aria-label="Mobile Navigation Menu" className="flex flex-col gap-1.5">
            {MOBILE_NAV_CATEGORIES.map((item) => {
              const label = t(item.translationKey, item.defaultLabel)
              const isExpanded = openGroup === item.id
              const tools = getToolsByCategory(item.category)

              return (
                <div key={item.id} className="rounded-xl border border-border bg-card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleGroup(item.id)}
                    aria-expanded={isExpanded}
                    aria-label={`Toggle ${label} list`}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-accent/60 transition-colors text-left"
                  >
                    <span>{label}</span>
                    <ChevronDown
                      className={cn('size-4 text-muted-foreground transition-transform duration-200', isExpanded && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border/80 bg-muted/40 p-2 animate-in fade-in-50 duration-150">
                      <ul className="flex flex-col gap-0.5">
                        {tools.map((tool) => (
                          <li key={tool.slug}>
                            <MenuLink tool={tool} onNavigate={close} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}

            {/* 6. Guides */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                type="button"
                onClick={() => toggleGroup('guides')}
                aria-expanded={openGroup === 'guides'}
                aria-label={`Toggle ${t('guides', 'Guides')} list`}
                className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-accent/60 transition-colors text-left"
              >
                <span>{t('guides', 'Guides')}</span>
                <ChevronDown
                  className={cn('size-4 text-muted-foreground transition-transform duration-200', openGroup === 'guides' && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>

              {openGroup === 'guides' && (
                <div className="border-t border-border/80 bg-muted/40 p-2 animate-in fade-in-50 duration-150">
                  <ul className="flex flex-col gap-0.5">
                    {HEADER_GUIDES.map((guide) => (
                      <li key={guide.slug}>
                        <Link
                          href={guide.path}
                          onClick={close}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/90 transition-colors hover:bg-accent hover:text-foreground"
                        >
                          <span>{guide.label}</span>
                          <span className="text-xs text-muted-foreground">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Backgrounds */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                type="button"
                onClick={() => toggleGroup('backgrounds')}
                aria-expanded={openGroup === 'backgrounds'}
                aria-label={`Toggle ${t('backgrounds', 'Backgrounds')} list`}
                className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-accent/60 transition-colors text-left"
              >
                <span>{t('backgrounds', 'Backgrounds')}</span>
                <ChevronDown
                  className={cn('size-4 text-muted-foreground transition-transform duration-200', openGroup === 'backgrounds' && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>

              {openGroup === 'backgrounds' && (
                <div className="border-t border-border/80 bg-muted/40 p-2 animate-in fade-in-50 duration-150">
                  <ul className="flex flex-col gap-0.5">
                    <li>
                      <Link
                        href="/backgrounds"
                        onClick={close}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                      >
                        <span>All Backgrounds</span>
                        <span className="text-xs">→</span>
                      </Link>
                    </li>
                    {BACKGROUND_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`/backgrounds?category=${cat.id}`}
                          onClick={close}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/90 transition-colors hover:bg-accent hover:text-foreground"
                        >
                          <span>{cat.label}</span>
                          <span className="text-xs text-muted-foreground">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Screen Problems */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                type="button"
                onClick={() => toggleGroup('screen-problems')}
                aria-expanded={openGroup === 'screen-problems'}
                aria-label={`Toggle ${t('screenProblems', 'Screen Problems')} list`}
                className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-accent/60 transition-colors text-left"
              >
                <span>{t('screenProblems', 'Screen Problems')}</span>
                <ChevronDown
                  className={cn('size-4 text-muted-foreground transition-transform duration-200', openGroup === 'screen-problems' && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>

              {openGroup === 'screen-problems' && (
                <div className="border-t border-border/80 bg-muted/40 p-2 animate-in fade-in-50 duration-150">
                  <ul className="flex flex-col gap-0.5">
                    <li>
                      <Link
                        href="/screen-problems"
                        onClick={close}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                      >
                        <span>View All Screen Problems</span>
                        <span className="text-xs">→</span>
                      </Link>
                    </li>
                    {SCREEN_PROBLEMS.map((prob) => (
                      <li key={prob.slug}>
                        <Link
                          href={`/screen-problems/${prob.slug}`}
                          onClick={close}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/90 transition-colors hover:bg-accent hover:text-foreground"
                        >
                          <span>{prob.shortLabel}</span>
                          <span className="text-xs text-muted-foreground">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>



            {/* Feedback */}
            <Link
              href="/feedback"
              onClick={close}
              className={cn(
                'flex items-center justify-between rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent transition-colors',
                pathname.includes('/feedback') && 'border-primary/50 bg-primary/5 text-primary',
              )}
            >
              <span>{t('feedback', 'Feedback')}</span>
              <span className="text-xs text-muted-foreground">→</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export function HeaderSearchButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handlePointer = (event: PointerEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  return (
    <div ref={searchRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2',
          isOpen && 'border-primary/50 bg-accent text-foreground shadow-xs ring-1 ring-primary/20',
        )}
        aria-label={isOpen ? t('closeSearch', 'Close search') : t('searchTools', 'Search tools')}
        aria-expanded={isOpen}
      >
        <Search className="size-4" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-[calc(100vw-1.25rem)] sm:w-80 rounded-2xl border border-border bg-popover p-3 shadow-xl">
          <ToolSearch
            autoFocus
            size="default"
            onNavigate={() => setIsOpen(false)}
            placeholder={t('searchTools', 'Search tools...')}
          />
        </div>
      )}
    </div>
  )
}

export const HeaderSearchLink = HeaderSearchButton

