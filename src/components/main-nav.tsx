'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Minus, Plus, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TOOLS, getTool, toolPath, type Tool } from '@/lib/tools'
import { getCategory, type ToolCategoryId } from '@/lib/tool-categories'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/localized-tools'
import { ToolSearch } from './tool-search'
import { ToolThumb } from './try-next-gallery'
import { GLOSSARY_NAV_LINKS, HEADER_GUIDES, PROBLEM_NAV_LINKS } from '@/lib/nav-links'
import { getMessages } from '@/lib/messages'

/**
 * Header navigation: two menus (Tools and Learn) plus a Backgrounds link. Tools opens a
 * full-width panel of tool columns; Learn groups guides, screen problems and the glossary.
 */

type ToolColumn = { titleKey: string; defaultTitle: string; href: string; slugs: string[]; more?: { key: string; label: string; href: string } }

const TOOL_COLUMNS: ToolColumn[] = [
  {
    titleKey: 'navColorScreens',
    defaultTitle: 'Color screens',
    href: '/tools#screen-tests',
    slugs: ['white-screen', 'black-screen', 'red-screen', 'green-screen', 'blue-screen'],
    more: { key: 'navAllColors', label: 'All 12 colors →', href: '/tools#screen-tests' },
  },
  {
    titleKey: 'screenTests',
    defaultTitle: 'Screen tests',
    href: '/tools#screen-tests',
    slugs: ['dead-pixel-test', 'screen-refresh-rate-test', 'touch-screen-test', 'monitor-ghosting-test', 'screen-burn-in-test', 'monitor-test'],
  },
  {
    titleKey: 'navEffectsSavers',
    defaultTitle: 'Effects & screensavers',
    href: '/tools#effects',
    slugs: ['dvd-screensaver', 'flip-clock-screensaver', 'motivational-quote-screensaver', 'white-noise-generator', 'hacked-screen', 'broken-screen'],
  },
  {
    titleKey: 'navFakeTimers',
    defaultTitle: 'Fake screens & timers',
    href: '/tools#fake-screens',
    slugs: ['fake-blue-screen-of-death', 'fake-windows-10-update', 'fake-zoom-meeting', 'fake-teams-meeting', 'fake-google-meet', 'pomodoro-timer', 'ring-light'],
  },
]

/** Categories for the mobile menu, each shown with a representative tool's thumbnail. */
const MOBILE_CATEGORIES: { id: 'colors' | ToolCategoryId; thumb: string }[] = [
  { id: 'colors', thumb: 'color-cycle' },
  { id: 'screen-tests', thumb: 'dead-pixel-test' },
  { id: 'effects', thumb: 'white-noise-generator' },
  { id: 'screensavers', thumb: 'dvd-screensaver' },
  { id: 'fake-screens', thumb: 'fake-windows-10-update' },
  { id: 'utilities', thumb: 'countdown-timer' },
]

const categoryCount = (id: 'colors' | ToolCategoryId) =>
  TOOLS.filter((tool) => (id === 'colors' ? tool.swatch : tool.category === id && !tool.swatch)).length

function useCloseOnOutside(isOpen: boolean, ref: React.RefObject<HTMLElement | null>, close: () => void) {
  useEffect(() => {
    if (!isOpen) return
    const handlePointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) close()
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, ref, close])
}

function ToolLink({ tool, onNavigate }: { tool: Tool; onNavigate: () => void }) {
  const { language } = useTranslation()
  return (
    <Link
      href={toolPath(tool.slug)}
      onClick={onNavigate}
      className="flex min-h-10 items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
    >
      <ToolThumb tool={tool} className="h-5 w-7 shrink-0 rounded-[5px] [&_span]:text-[8px]" />
      <span className="truncate">{getLocalizedTool(tool, language).name}</span>
    </Link>
  )
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <p className="px-2.5 pb-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">{children}</p>
}

export function DesktopNav() {
  const [openId, setOpenId] = useState<'tools' | 'learn' | null>(null)
  const pathname = usePathname()
  const { t, language } = useTranslation()
  const navRef = useRef<HTMLElement>(null)
  const close = () => setOpenId(null)

  useEffect(() => setOpenId(null), [pathname])
  useCloseOnOutside(openId !== null, navRef, close)

  const menuButton = (id: 'tools' | 'learn', label: string) => (
    <button
      type="button"
      onClick={() => setOpenId((current) => (current === id ? null : id))}
      aria-expanded={openId === id}
      aria-controls={`nav-panel-${id}`}
      className={cn(
        'inline-flex h-10 items-center gap-1.5 rounded-lg px-3.5 text-[15px] font-semibold transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2',
        openId === id ? 'bg-accent text-foreground' : 'text-foreground/80',
      )}
    >
      {label}
      <ChevronDown className={cn('size-3.5 transition-transform', openId === id && 'rotate-180')} aria-hidden="true" />
    </button>
  )

  return (
    <nav ref={navRef} aria-label={t('navigation', 'Navigation')} className="flex items-center gap-1">
      {menuButton('tools', t('navTools', 'Tools'))}
      {menuButton('learn', t('navLearn', 'Learn'))}
      <Link
        href="/backgrounds"
        className="inline-flex h-10 items-center rounded-lg px-3.5 text-[15px] font-semibold text-foreground/80 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {t('backgrounds', 'Backgrounds')}
      </Link>

      {openId && (
        <>
          <div aria-hidden="true" className="fixed inset-x-0 bottom-0 top-16 -z-10 bg-black/30" onPointerDown={close} />
          <div
            id={`nav-panel-${openId}`}
            className="absolute inset-x-0 top-full border-b bg-background shadow-xl animate-in fade-in-50"
          >
            {openId === 'tools' ? (
              <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-4 gap-6 pt-6">
                  {TOOL_COLUMNS.map((column) => (
                    <div key={column.titleKey} className="flex flex-col">
                      <ColumnTitle>
                        <Link href={column.href} onClick={close} className="hover:text-foreground">
                          {t(column.titleKey, column.defaultTitle)}
                        </Link>
                      </ColumnTitle>
                      {column.slugs.map((slug) => (
                        <ToolLink key={slug} tool={getTool(slug)} onNavigate={close} />
                      ))}
                      {column.more && (
                        <Link href={column.more.href} onClick={close} className="px-2.5 py-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
                          {t(column.more.key, column.more.label)}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t py-3.5 text-sm">
                  <span className="text-muted-foreground">{t('navTagline', '50+ free tools. No sign-up, runs in your browser.')}</span>
                  <Link href="/tools" onClick={close} className="font-semibold text-blue-600 hover:underline dark:text-blue-400">
                    {t('navBrowseAll', 'Browse all tools →')}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-6 py-6">
                <div className="flex flex-col">
                  <ColumnTitle>{t('guides', 'Guides')}</ColumnTitle>
                  {HEADER_GUIDES.slice(0, 5).map((guide) => (
                    <Link key={guide.slug} href={guide.path} onClick={close} className="rounded-lg px-2.5 py-2 text-sm font-medium hover:bg-accent">
                      {getMessages(language).guideLabels[guide.slug] ?? guide.label}
                    </Link>
                  ))}
                  <Link href="/guides" onClick={close} className="px-2.5 py-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
                    {t('navAllGuides', 'All guides →')}
                  </Link>
                </div>
                <div className="flex flex-col">
                  <ColumnTitle>{t('screenProblems', 'Screen Problems')}</ColumnTitle>
                  {PROBLEM_NAV_LINKS.slice(0, 5).map((problem) => (
                    <Link key={problem.slug} href={`/screen-problems/${problem.slug}`} onClick={close} className="rounded-lg px-2.5 py-2 text-sm font-medium hover:bg-accent">
                      {problem.shortLabel}
                    </Link>
                  ))}
                  <Link href="/screen-problems" onClick={close} className="px-2.5 py-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
                    {t('viewAllProblems', 'View All Problems →')}
                  </Link>
                </div>
                <div className="flex flex-col">
                  <ColumnTitle>{t('glossary', 'Glossary')}</ColumnTitle>
                  {GLOSSARY_NAV_LINKS.map((term) => (
                    <Link key={term.slug} href={`/glossary/${term.slug}`} onClick={close} className="rounded-lg px-2.5 py-2 text-sm font-medium hover:bg-accent">
                      {term.shortLabel}
                    </Link>
                  ))}
                  <Link href="/glossary" onClick={close} className="px-2.5 py-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
                    {t('navFullGlossary', 'Full glossary →')}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  )
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [section, setSection] = useState<'tools' | 'learn' | null>('tools')
  const pathname = usePathname()
  const { t, language } = useTranslation()
  const menuRef = useRef<HTMLDivElement>(null)
  const close = () => setIsOpen(false)

  useEffect(() => setIsOpen(false), [pathname])
  useCloseOnOutside(isOpen, menuRef, close)

  // The sheet covers the page, so stop the page underneath from scrolling.
  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  const sectionButton = (id: 'tools' | 'learn', label: string) => (
    <button
      type="button"
      onClick={() => setSection((current) => (current === id ? null : id))}
      aria-expanded={section === id}
      className="flex h-13 w-full items-center justify-between px-1 text-[17px] font-bold"
    >
      {label}
      {section === id ? <Minus className="size-5 text-muted-foreground" aria-hidden="true" /> : <Plus className="size-5 text-muted-foreground" aria-hidden="true" />}
    </button>
  )

  return (
    <div ref={menuRef} className="shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className={cn(
          'inline-flex size-9 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 sm:size-10',
          isOpen && 'bg-accent',
        )}
        aria-label={isOpen ? t('closeMenu', 'Close menu') : t('menu', 'Menu')}
      >
        {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label={t('navigation', 'Navigation')}
          className="fixed inset-x-0 bottom-0 top-16 z-50 flex flex-col bg-background"
        >
          <nav className="flex-1 overflow-y-auto px-4 py-2">
            {sectionButton('tools', t('navTools', 'Tools'))}
            {section === 'tools' && (
              <ul className="pb-2">
                {MOBILE_CATEGORIES.map((item) => {
                  const label =
                    item.id === 'colors' ? t('navColorScreens', 'Color screens') : getLocalizedCategory(getCategory(item.id), language).name
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/tools#${item.id === 'colors' ? 'screen-tests' : item.id}`}
                        onClick={close}
                        className="flex min-h-12 items-center gap-3 rounded-xl px-1.5 hover:bg-accent"
                      >
                        <ToolThumb tool={getTool(item.thumb)} className="h-6.5 w-9 shrink-0 rounded-md" />
                        <span className="flex-1 text-[15px] font-medium">{label}</span>
                        <span className="text-sm text-muted-foreground">{categoryCount(item.id)}</span>
                      </Link>
                    </li>
                  )
                })}
                <li>
                  <Link href="/tools" onClick={close} className="flex min-h-12 items-center px-1.5 text-[15px] font-semibold text-blue-600 dark:text-blue-400">
                    {t('navBrowseAll', 'Browse all tools →')}
                  </Link>
                </li>
              </ul>
            )}
            <div className="h-px bg-border" />
            {sectionButton('learn', t('navLearn', 'Learn'))}
            {section === 'learn' && (
              <ul className="pb-2">
                {[
                  { href: '/guides', label: t('guides', 'Guides') },
                  { href: '/screen-problems', label: t('screenProblems', 'Screen Problems') },
                  { href: '/glossary', label: t('glossary', 'Glossary') },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={close} className="flex min-h-12 items-center rounded-xl px-1.5 text-[15px] font-medium hover:bg-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="h-px bg-border" />
            <Link href="/backgrounds" onClick={close} className="flex h-13 items-center px-1 text-[17px] font-bold">
              {t('backgrounds', 'Backgrounds')}
            </Link>
          </nav>

          <div className="flex items-center gap-3 border-t px-4 py-3">
            <div className="flex min-w-0 flex-wrap gap-x-4 gap-y-1 whitespace-nowrap text-sm text-muted-foreground">
              <Link href="/about" onClick={close} className="hover:text-foreground">{t('about', 'About')}</Link>
              <Link href="/feedback" onClick={close} className="hover:text-foreground">{t('feedback', 'Feedback')}</Link>
              <Link href="/contact" onClick={close} className="hover:text-foreground">{t('contact', 'Contact')}</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/** Search for small screens: an icon that opens the tool search in a dropdown. */
export function HeaderSearchButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const searchRef = useRef<HTMLDivElement>(null)
  const close = () => setIsOpen(false)
  useCloseOnOutside(isOpen, searchRef, close)

  return (
    <div ref={searchRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'inline-flex size-9 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 sm:size-10',
          isOpen && 'bg-accent',
        )}
        aria-label={isOpen ? t('closeSearch', 'Close search') : t('searchTools', 'Search tools')}
        aria-expanded={isOpen}
      >
        <Search className="size-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="fixed inset-x-3 top-16 z-50 rounded-2xl border bg-popover p-3 shadow-xl sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-96">
          <ToolSearch autoFocus onNavigate={close} placeholder={t('searchTools', 'Search tools...')} />
        </div>
      )}
    </div>
  )
}

export const HeaderSearchLink = HeaderSearchButton
