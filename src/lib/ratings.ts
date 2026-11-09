/**
 * Visitor ratings for each tool page, stored by /api/rating (see api/rating.ts).
 * Turned on with PUBLIC_RATINGS=1 once the ratings database is connected; until then no rating UI renders.
 */
import { useEffect, useState } from 'react'
import { extractLocaleAndPath } from './locale-routing'

export const RATINGS_ENABLED = import.meta.env.PUBLIC_RATINGS === '1'
/** The average is shown only once enough people have rated, so a handful of votes never looks like a score. */
export const MIN_RATINGS_SHOWN = 10
/** Fired by tools when someone has just used them (left fullscreen, downloaded an image). */
export const TOOL_USED_EVENT = 'ws:tool-used'

const ENDPOINT = '/api/rating/'
const PROMPT_KEY = 'ws-rating-prompt'

export type RatingState = {
  status: 'loading' | 'ready' | 'off'
  count: number
  average: number
  /** Stars this visitor gave, remembered in this browser. */
  mine: number
}

const states = new Map<string, RatingState>()
const listeners = new Set<() => void>()
const requested = new Set<string>()

function storageGet(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function storageSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Private mode or blocked storage: the prompt may simply show again later.
  }
}

/** The English path of the current page, so every language version shares one rating. */
export function currentToolKey(): string {
  return extractLocaleAndPath(window.location.pathname).cleanPath || '/'
}

function update(tool: string, patch: Partial<RatingState>) {
  const previous = states.get(tool) ?? { status: 'loading', count: 0, average: 0, mine: 0 }
  states.set(tool, { ...previous, ...patch })
  listeners.forEach((listener) => listener())
}

function load(tool: string) {
  if (requested.has(tool)) return
  requested.add(tool)
  update(tool, { mine: Number(storageGet(`ws-rated:${tool}`)) || 0 })
  fetch(`${ENDPOINT}?tool=${encodeURIComponent(tool)}`)
    .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
    .then((data: { count: number; average: number }) => update(tool, { status: 'ready', count: data.count, average: data.average }))
    .catch(() => update(tool, { status: 'off' }))
}

/** Rating summary for the current page; `null` on the server and before hydration. */
export function useRating(): (RatingState & { tool: string }) | null {
  const [tool, setTool] = useState<string | null>(null)
  const [, force] = useState(0)

  useEffect(() => {
    // Ratings show on desktop only, so phones never make the request.
    if (!RATINGS_ENABLED || !window.matchMedia('(min-width: 1024px)').matches) return
    const key = currentToolKey()
    setTool(key)
    const listener = () => force((n) => n + 1)
    listeners.add(listener)
    load(key)
    return () => {
      listeners.delete(listener)
    }
  }, [])

  if (!tool) return null
  const state = states.get(tool)
  return state ? { ...state, tool } : null
}

export async function submitRating(tool: string, stars: number): Promise<boolean> {
  const previous = states.get(tool)
  update(tool, { mine: stars })
  storageSet(`ws-rated:${tool}`, String(stars))
  markPromptDone()
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tool, stars }),
    })
    if (!response.ok) throw new Error(String(response.status))
    const data = (await response.json()) as { count: number; average: number }
    update(tool, { status: 'ready', count: data.count, average: data.average })
    return true
  } catch {
    update(tool, { mine: previous?.mine ?? 0 })
    return false
  }
}

export async function submitComment(tool: string, comment: string): Promise<boolean> {
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tool, comment }),
    })
    return response.ok
  } catch {
    return false
  }
}

/** The "how did it work" prompt shows at most until it is answered or dismissed once, on any tool. */
export function isPromptDone(): boolean {
  return storageGet(PROMPT_KEY) === 'done'
}

export function markPromptDone() {
  storageSet(PROMPT_KEY, 'done')
}

/** Tools call this after someone finishes using them; the rating prompt may follow. */
export function signalToolUsed() {
  if (!RATINGS_ENABLED || typeof window === 'undefined') return
  window.dispatchEvent(new Event(TOOL_USED_EVENT))
}

/** Signals "used" when the stage leaves fullscreen (native or in-page fallback). */
export function useSignalOnFullscreenExit(isFullscreen: boolean) {
  const [was, setWas] = useState(isFullscreen)
  useEffect(() => {
    if (was && !isFullscreen) signalToolUsed()
    if (was !== isFullscreen) setWas(isFullscreen)
  }, [isFullscreen, was])
}
