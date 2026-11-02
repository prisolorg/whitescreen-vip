'use client'

import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'

const STORAGE_KEY = 'whitescreen_theme'
const THEME_COLORS = { light: '#ffffff', dark: '#1b1d22' }

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? THEME_COLORS.dark : THEME_COLORS.light)
}

/**
 * Light/dark switch. The startup script in index.html applies the saved or system theme before
 * first paint; this button flips it and remembers the choice. Both icons are rendered and CSS
 * shows the right one, so server and client markup always match.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { t } = useTranslation()

  // Until the visitor picks a theme, keep following the system setting.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return
      } catch {
        // Storage unavailable: just follow the system.
      }
      applyTheme(event.matches)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const dark = !document.documentElement.classList.contains('dark')
    applyTheme(dark)
    try {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
    } catch {
      // Private mode: the choice lasts for this page view only.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('toggleTheme', 'Switch between light and dark mode')}
      title={t('toggleTheme', 'Switch between light and dark mode')}
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2',
        className,
      )}
    >
      <Moon className="size-[18px] dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-[18px] dark:block" aria-hidden="true" />
    </button>
  )
}
