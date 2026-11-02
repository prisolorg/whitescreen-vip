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

function localizeInternalHref(href: string): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href
  return getLocalizedPath(href, extractLocaleAndPath(window.location.pathname).lang)
}

/**
 * Each Astro island gets the URL its page was built for as `initialUrl`. The first render uses it on
 * both server and client so hydration matches; the real location (e.g. a ?query) syncs after mount.
 */
export function RouterProvider({ children, initialUrl }: { children: React.ReactNode; initialUrl?: string }) {
  const [pathname, setPathname] = useState<string>(
    initialUrl !== undefined ? initialUrl.split('?')[0] : typeof window !== 'undefined' ? window.location.pathname : '/'
  )
  const [search, setSearch] = useState<string>(
    initialUrl !== undefined
      ? initialUrl.includes('?') ? `?${initialUrl.split('?')[1]}` : ''
      : typeof window !== 'undefined' ? window.location.search : ''
  )

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname)
      setSearch(window.location.search)
    }

    handleLocationChange()
    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('app-navigation', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('app-navigation', handleLocationChange)
    }
  }, [])

  const { lang: activeLang, cleanPath } = extractLocaleAndPath(pathname)

  // The site is a multi-page (Astro) site: going to another page is a normal page load. Only a
  // change of query on the same page (e.g. a ?category filter) updates in place.
  const navigate = useCallback((href: string, mode: 'push' | 'replace', options?: { scroll?: boolean }) => {
    if (typeof window === 'undefined') return
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href
      return
    }
    href = localizeInternalHref(href)
    const target = new URL(href, window.location.href)
    if (target.pathname !== window.location.pathname) {
      if (mode === 'replace') window.location.replace(target.href)
      else window.location.assign(target.href)
      return
    }
    window.history[mode === 'replace' ? 'replaceState' : 'pushState']({}, '', target.href)
    setPathname(window.location.pathname)
    setSearch(window.location.search)
    window.dispatchEvent(new Event('app-navigation'))
    if (target.hash) document.getElementById(target.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    else if (options?.scroll !== false) window.scrollTo(0, 0)
  }, [])

  const push = useCallback((href: string, options?: { scroll?: boolean }) => navigate(href, 'push', options), [navigate])
  const replace = useCallback((href: string, options?: { scroll?: boolean }) => navigate(href, 'replace', options), [navigate])

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
  // Start from the router's search (the build-time URL) so hydration matches; the effect below syncs.
  const [params, setParams] = useState<URLSearchParams>(new URLSearchParams(ctx.search))

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
