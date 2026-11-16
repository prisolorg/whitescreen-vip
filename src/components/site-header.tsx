import { Logo } from './logo'
import { DesktopNav, HeaderSearchButton, MobileNav } from './main-nav'
import { ToolSearch } from './tool-search'
import { LanguageSelector } from './language-selector'
import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'
import { MessageSquarePlus } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

export function SiteHeader() {
  const { t } = useTranslation()

  return (
    // Solid background on purpose: a backdrop-filter here would trap the fixed menu panels inside the header.
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background">
      <div className="site-header-inner mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-1.5 md:gap-5 lg:gap-8">
          {/* Phones: the menu sits on the left, beside the logo. */}
          <div className="md:hidden">
            <MobileNav />
          </div>
          <Logo />
          <div className="hidden md:block">
            <DesktopNav />
          </div>
        </div>

        {/* Tablet and desktop: search (a box from lg, an icon below), theme and language */}
        <div className="hidden shrink-0 items-center gap-1.5 md:flex">
          <div className="hidden w-60 lg:block">
            <ToolSearch shortcut placeholder={t('searchShort', 'Search tools…')} />
          </div>
          <div className="lg:hidden">
            <HeaderSearchButton />
          </div>
          <Link
            href="/feedback"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            <MessageSquarePlus className="size-4" aria-hidden="true" />
            {t('feedback', 'Feedback')}
          </Link>
          <ThemeToggle className="size-10" />
          <LanguageSelector />
        </div>

        {/* Phones: search, language and the light/dark toggle on the right; feedback lives inside the menu. */}
        <div className="flex shrink-0 items-center gap-1 md:hidden">
          <HeaderSearchButton />
          <LanguageSelector compact />
          <ThemeToggle className="size-9" />
        </div>
      </div>
    </header>
  )
}
