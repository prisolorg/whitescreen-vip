import { Logo } from './logo'
import { DesktopNav, HeaderSearchButton, MobileNav } from './main-nav'
import { ToolSearch } from './tool-search'
import { LanguageSelector } from './language-selector'
import { useTranslation } from '@/lib/i18n'

export function SiteHeader() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 lg:gap-4 px-3 sm:px-6">
        {/* Left: Logo and Desktop Navigation in one horizontal row */}
        <div className="flex items-center gap-2 lg:gap-3 xl:gap-5 min-w-0">
          <Logo />
          <div className="hidden md:block">
            <DesktopNav />
          </div>
        </div>

        {/* Right (Desktop): Search tools field & Language selector on the far right */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2 xl:gap-3 shrink-0">
          <div className="w-24 lg:w-36 xl:w-48 shrink-0">
            <ToolSearch
              placeholder={t('searchTools', 'Search tools')}
              className="w-full"
            />
          </div>
          <LanguageSelector className="shrink-0" />
        </div>

        {/* Right (Mobile only): Search icon, Language selector, Hamburger menu button */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
          <HeaderSearchButton />
          <LanguageSelector className="shrink-0" />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
