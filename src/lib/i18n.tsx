'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { extractLocaleAndPath, getLocalizedPath, isEnglishOnlyPath, type LanguageCode } from './locale-routing'
import { getMessages } from './messages'

export type { LanguageCode }

export type LanguageInfo = {
  code: LanguageCode
  displayCode: string
  name: string
  nativeName: string
  formattedLabel: string
  dir: 'ltr' | 'rtl'
}

export const LANGUAGES: readonly LanguageInfo[] = [
  { code: 'en', displayCode: 'EN', name: 'English', nativeName: 'English', formattedLabel: 'EN — English', dir: 'ltr' },
  { code: 'es', displayCode: 'ES', name: 'Spanish', nativeName: 'Español', formattedLabel: 'ES — Español', dir: 'ltr' },
  { code: 'pt-br', displayCode: 'PT-BR', name: 'Portuguese (Brazil)', nativeName: 'Português (Brasil)', formattedLabel: 'PT-BR — Português (Brasil)', dir: 'ltr' },
  { code: 'de', displayCode: 'DE', name: 'German', nativeName: 'Deutsch', formattedLabel: 'DE — Deutsch', dir: 'ltr' },
  { code: 'fr', displayCode: 'FR', name: 'French', nativeName: 'Français', formattedLabel: 'FR — Français', dir: 'ltr' },
  { code: 'it', displayCode: 'IT', name: 'Italian', nativeName: 'Italiano', formattedLabel: 'IT — Italiano', dir: 'ltr' },
  { code: 'nl', displayCode: 'NL', name: 'Dutch', nativeName: 'Nederlands', formattedLabel: 'NL — Nederlands', dir: 'ltr' },
  { code: 'id', displayCode: 'ID', name: 'Indonesian', nativeName: 'Bahasa Indonesia', formattedLabel: 'ID — Bahasa Indonesia', dir: 'ltr' },
  { code: 'tr', displayCode: 'TR', name: 'Turkish', nativeName: 'Türkçe', formattedLabel: 'TR — Türkçe', dir: 'ltr' },
]



interface I18nContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (key: string, fallback?: string) => string
  dir: 'ltr' | 'rtl'
  languageInfo: LanguageInfo
}

const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback ?? key,
  dir: 'ltr',
  languageInfo: LANGUAGES[0],
})

const STORAGE_KEY = 'whitescreen_lang'

function getInitialLang(): LanguageCode {
  if (typeof window !== 'undefined') {
    const { lang } = extractLocaleAndPath(window.location.pathname)
    if (LANGUAGES.some((l) => l.code === lang)) {
      return lang
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null
      if (saved && LANGUAGES.some((l) => l.code === saved)) {
        return saved
      }
    } catch {
      // Fallback
    }
  }
  return 'en'
}

export function I18nProvider({ children, initialUrl }: { children: React.ReactNode; initialUrl?: string }) {
  // Islands get the URL their page was built for, so server and client start in the same language.
  const [language, setLanguageState] = useState<LanguageCode>(() =>
    initialUrl !== undefined ? extractLocaleAndPath(initialUrl).lang : getInitialLang(),
  )

  const currentInfo = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0]

  // Listen to browser navigation to synchronize language with the URL path
  useEffect(() => {
    const handleLocationChange = () => {
      const { lang } = extractLocaleAndPath(window.location.pathname)
      setLanguageState(lang)
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('app-navigation', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('app-navigation', handleLocationChange)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = currentInfo.dir
    }
  }, [language, currentInfo.dir])

  const setLanguage = useCallback(
    (newLang: LanguageCode) => {
      setLanguageState(newLang)
      try {
        localStorage.setItem(STORAGE_KEY, newLang)
      } catch {
        // Ignore in private mode
      }

      // Check current route and navigate to the equivalent localized path if needed
      if (typeof window !== 'undefined') {
        const { cleanPath, lang: currentUrlLang } = extractLocaleAndPath(window.location.pathname)
        if (currentUrlLang !== newLang) {
          // Every language version is its own page. Its translated URL is in the page's hreflang links;
          // fall back to the English slug, which redirects to the translated one.
          const alternate = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${newLang === 'pt-br' ? 'pt-BR' : newLang}" i]`)
          // English-only articles have no other version, so those go to the homepage in the new language.
          const target = alternate
            ? new URL(alternate.href).pathname
            : getLocalizedPath(isEnglishOnlyPath(cleanPath) ? '/' : cleanPath, newLang)
          window.location.assign(target + window.location.search + window.location.hash)
        }
      }
    },
    [],
  )

  const t = useCallback(
    (key: string, fallback?: string) => {
      // Only this page's language is loaded in the browser; code fallbacks are the English text.
      return getMessages(language).ui[key] || fallback || key
    },
    [language],
  )

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dir: currentInfo.dir,
        languageInfo: currentInfo,
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  return useContext(I18nContext)
}
