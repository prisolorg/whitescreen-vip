import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { extractLocaleAndPath, getLocalizedPath, type LanguageCode } from './locale-routing'

interface RouterContextType {
  pathname: string
  search: string
  cleanPath: string
  activeLang: LanguageCode
  push: (href: string, options?: { scroll?: boolean }) => void
  replace: (href: string, options?: { scroll?: boolean }) => void
  back: () => void
  forward: () => void
  refresh: () => void
}

const initialPath = typeof window !== 'undefined' ? window.location.pathname : '/'
const initialSearch = typeof window !== 'undefined' ? window.location.search : ''
const initialParsed = extractLocaleAndPath(initialPath)

const RouterContext = createContext<RouterContextType>({
  pathname: initialPath,
  search: initialSearch,
  cleanPath: initialParsed.cleanPath,
  activeLang: initialParsed.lang,
  push: () => {},
  replace: () => {},
  back: () => {},
  forward: () => {},
  refresh: () => {},
})

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )
  const [search, setSearch] = useState<string>(
    typeof window !== 'undefined' ? window.location.search : ''
  )

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname)
      setSearch(window.location.search)
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('app-navigation', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('app-navigation', handleLocationChange)
    }
  }, [])

  const { lang: activeLang, cleanPath } = extractLocaleAndPath(pathname)

  const push = useCallback((href: string, options?: { scroll?: boolean }) => {
    if (typeof window === 'undefined') return
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href
      return
    }

    const [path, hash] = href.split('#')
    window.history.pushState({}, '', href)
    setPathname(window.location.pathname)
    setSearch(window.location.search)
    window.dispatchEvent(new Event('app-navigation'))

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else if (options?.scroll !== false) {
      window.scrollTo(0, 0)
    }
  }, [])

  const replace = useCallback((href: string, options?: { scroll?: boolean }) => {
    if (typeof window === 'undefined') return
    window.history.replaceState({}, '', href)
    setPathname(window.location.pathname)
    setSearch(window.location.search)
    window.dispatchEvent(new Event('app-navigation'))
    if (options?.scroll !== false) {
      window.scrollTo(0, 0)
    }
  }, [])

  const back = useCallback(() => {
    if (typeof window !== 'undefined') window.history.back()
  }, [])

  const forward = useCallback(() => {
    if (typeof window !== 'undefined') window.history.forward()
  }, [])

  const refresh = useCallback(() => {
    if (typeof window !== 'undefined') window.location.reload()
  }, [])

  return (
    <RouterContext.Provider value={{ pathname, search, cleanPath, activeLang, push, replace, back, forward, refresh }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  return {
    push: ctx.push,
    replace: ctx.replace,
    back: ctx.back,
    forward: ctx.forward,
    refresh: ctx.refresh,
    pathname: ctx.pathname,
    search: ctx.search,
    cleanPath: ctx.cleanPath,
    activeLang: ctx.activeLang,
  }
}

export function usePathname(): string {
  const ctx = useContext(RouterContext)
  return ctx.pathname
}

export function useCleanPath(): string {
  const ctx = useContext(RouterContext)
  return ctx.cleanPath
}

export function useSearchParams(): URLSearchParams {
  const ctx = useContext(RouterContext)
  const [params, setParams] = useState<URLSearchParams>(
    new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
  )

  useEffect(() => {
    setParams(new URLSearchParams(typeof window !== 'undefined' ? window.location.search : ''))
  }, [ctx.search, ctx.pathname])

  useEffect(() => {
    const update = () => {
      setParams(new URLSearchParams(window.location.search))
    }
    window.addEventListener('popstate', update)
    window.addEventListener('app-navigation', update)
    return () => {
      window.removeEventListener('popstate', update)
      window.removeEventListener('app-navigation', update)
    }
  }, [])

  return params
}

export function notFound() {
  throw new Error('NEXT_NOT_FOUND')
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  scroll?: boolean
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, onClick, scroll = true, ...props }, ref) => {
    const { push, activeLang } = useRouter()

    // If internal relative path without explicit target, auto-localize with active language
    const localizedHref =
      href.startsWith('/') && !href.startsWith('//')
        ? getLocalizedPath(href, activeLang)
        : href

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e)
      if (
        !e.defaultPrevented &&
        e.button === 0 &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.shiftKey &&
        !props.target &&
        !href.startsWith('http') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:')
      ) {
        e.preventDefault()
        push(localizedHref, { scroll })
      }
    }

    return (
      <a ref={ref} href={localizedHref} onClick={handleClick} {...props}>
        {children}
      </a>
    )
  }
)
Link.displayName = 'Link'

export default Link
