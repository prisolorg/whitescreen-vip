import { Logo } from './logo'
import { DesktopNav, HeaderSearchButton, MobileNav } from './main-nav'
import { ToolSearch } from './tool-search'
import { LanguageSelector } from './language-selector'
import { useTranslation } from '@/lib/i18n'

export function SiteHeader() {
  const { t } = useTranslation()

  return (
    // Solid background on purpose: a backdrop-filter here would trap the fixed menu panels inside the header.
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-5 lg:gap-8">
          <Logo />
          <div className="hidden md:block">
            <DesktopNav />
          </div>
        </div>

        {/* Tablet and desktop: search (a box from lg, an icon below) and language */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <div className="hidden w-60 lg:block">
            <ToolSearch shortcut placeholder={t('searchShort', 'Search tools…')} />
          </div>
          <div className="lg:hidden">
            <HeaderSearchButton />
          </div>
          <LanguageSelector />
        </div>

        {/* Phones: search and the menu, which also holds the language switch */}
        <div className="flex shrink-0 items-center gap-1 md:hidden">
          <HeaderSearchButton />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
