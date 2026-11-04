'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null
  webkitExitFullscreen?: () => Promise<void> | void
}

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void
}

function getFullscreenElement() {
  const doc = document as FullscreenDocument
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null
}

/**
 * Native Fullscreen API with an in-page fallback (e.g. iPhone Safari), screen wake lock
 * while active, and Escape handling for the fallback mode.
 */
export function useFullscreen<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [isNative, setIsNative] = useState(false)
  const [isFallback, setIsFallback] = useState(false)
  const wakeLockRef = useRef<WakeLockSentinel | null>(null)
  const isFullscreen = isNative || isFallback

  const enter = useCallback(async () => {
    const element = ref.current as FullscreenElement | null
    if (!element) return
    try {
      if (element.requestFullscreen) await element.requestFullscreen({ navigationUI: 'hide' })
      else if (element.webkitRequestFullscreen) await element.webkitRequestFullscreen()
      else setIsFallback(true)
    } catch {
      setIsFallback(true)
    }
  }, [])

  const exit = useCallback(async () => {
    setIsFallback(false)
    const doc = document as FullscreenDocument
    if (!getFullscreenElement()) return
    try {
      if (doc.exitFullscreen) await doc.exitFullscreen()
      else await doc.webkitExitFullscreen?.()
    } catch {
      // The browser already left fullscreen.
    }
  }, [])

  const toggle = useCallback(() => {
    if (isFullscreen) void exit()
    else void enter()
  }, [isFullscreen, enter, exit])

  useEffect(() => {
    const handleChange = () => setIsNative(getFullscreenElement() === ref.current)
    document.addEventListener('fullscreenchange', handleChange)
    document.addEventListener('webkitfullscreenchange', handleChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleChange)
      document.removeEventListener('webkitfullscreenchange', handleChange)
    }
  }, [])

  useEffect(() => {
    if (!isFallback) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFallback(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [isFallback])

  useEffect(() => {
    if (!isFullscreen || !('wakeLock' in navigator)) return
    let cancelled = false
    navigator.wakeLock
      .request('screen')
      .then((sentinel) => {
        if (cancelled) void sentinel.release()
        else wakeLockRef.current = sentinel
      })
      .catch(() => {})
    return () => {
      cancelled = true
      void wakeLockRef.current?.release()
      wakeLockRef.current = null
    }
  }, [isFullscreen])

  return { ref, isFullscreen, isFallback, enter, exit, toggle }
}

export function isTypingTarget(target: EventTarget | null) {
  return Boolean(
    (target as HTMLElement | null)?.closest?.('input, textarea, select, [contenteditable="true"]'),
  )
}
