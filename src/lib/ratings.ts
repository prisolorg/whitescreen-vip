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
/** After answering or closing the prompt on a tool, it isn't asked again there for this long. */
const PROMPT_COOLDOWN_MS = 30 * 24 * 60 * 60 * 1000
/** Fullscreen shorter than this (a quick look, an accidental tap) doesn't count as using the tool. */
export const MIN_FULLSCREEN_MS = 10_000
/** Why a tool didn't work, offered after a thumbs down (api/rating.ts accepts the same ids). */
export const FEEDBACK_REASONS = [
  { id: 'fullscreen', label: "Fullscreen didn't work" },
  { id: 'display', label: "Didn't look right on my screen" },
  { id: 'controls', label: 'Hard to use' },
  { id: 'missing', label: 'Missing an option I need' },
  { id: 'other', label: 'Something else' },
] as const
export type FeedbackReason = (typeof FEEDBACK_REASONS)[number]['id']

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
/** `anyScreen`: also on phones (the after-use rating card); the badge and rating row stay desktop only. */
export function useRating(anyScreen = false): (RatingState & { tool: string }) | null {
  const [tool, setTool] = useState<string | null>(null)
  const [, force] = useState(0)

  useEffect(() => {
    // The badge and row show on desktop only, so phones make the request only for the after-use card.
    if (!RATINGS_ENABLED || (!anyScreen && !window.matchMedia('(min-width: 1024px)').matches)) return
    const key = currentToolKey()
    setTool(key)
    const listener = () => force((n) => n + 1)
    listeners.add(listener)
    load(key)
    return () => {
      listeners.delete(listener)
    }
  }, [anyScreen])

  if (!tool) return null
  const state = states.get(tool)
  return state ? { ...state, tool } : null
}

export async function submitRating(tool: string, stars: number): Promise<boolean> {
  const previous = states.get(tool)
  update(tool, { mine: stars })
  storageSet(`ws-rated:${tool}`, String(stars))
  markPromptDone(tool)
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

/** Sends why a tool didn't work (thumbs down). Fire and forget: the visitor sees thanks either way. */
export async function submitReason(tool: string, reason: FeedbackReason): Promise<void> {
  markPromptDone(tool)
  storageSet(`ws-reason:${tool}`, reason)
  try {
    await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ tool, reason }) })
  } catch {
    // Offline or blocked: nothing to retry for a one-tap answer.
  }
}

function sessionAsked(): boolean {
  try {
    return sessionStorage.getItem(PROMPT_KEY) === 'asked'
  } catch {
    return false
  }
}

/**
 * The "how did it work" prompt: at most once per visit, and once a visitor answers or closes it on a tool, not again
 * on that tool for 30 days. Tools they already rated are never asked.
 */
export function isPromptDone(tool: string): boolean {
  if (sessionAsked() || storageGet(`ws-rated:${tool}`) || storageGet(`ws-reason:${tool}`)) return true
  const at = Number(storageGet(`${PROMPT_KEY}:${tool}`))
  return Boolean(at) && Date.now() - at < PROMPT_COOLDOWN_MS
}

/** Called when the prompt opens: no second prompt this visit, on any tool. */
export function markPromptShown() {
  try {
    sessionStorage.setItem(PROMPT_KEY, 'asked')
  } catch {}
}

export function markPromptDone(tool: string) {
  storageSet(`${PROMPT_KEY}:${tool}`, String(Date.now()))
}

/** Tools call this after someone finishes using them; the rating prompt may follow. */
export function signalToolUsed() {
  if (!RATINGS_ENABLED || typeof window === 'undefined') return
  window.dispatchEvent(new Event(TOOL_USED_EVENT))
}

/** Signals "used" when the stage leaves fullscreen (native or in-page fallback) after at least 10 seconds in it. */
export function useSignalOnFullscreenExit(isFullscreen: boolean) {
  const [was, setWas] = useState(isFullscreen)
  const [enteredAt, setEnteredAt] = useState(0)
  useEffect(() => {
    if (!was && isFullscreen) setEnteredAt(Date.now())
    if (was && !isFullscreen && enteredAt && Date.now() - enteredAt >= MIN_FULLSCREEN_MS) signalToolUsed()
    if (was !== isFullscreen) setWas(isFullscreen)
  }, [isFullscreen, was, enteredAt])
}
