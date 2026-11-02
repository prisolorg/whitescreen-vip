'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)')
  query.addEventListener('change', callback)
  return () => query.removeEventListener('change', callback)
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  )
}

/** Runs `callback(deltaMs, now)` every animation frame while `running` is true. */
export function useAnimationFrame(callback: (deltaMs: number, now: number) => void, running = true) {
  const callbackRef = useRef(callback)
  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    if (!running) return
    let frame = 0
    let last = performance.now()
    const loop = (now: number) => {
      const delta = Math.min(now - last, 100)
      last = now
      callbackRef.current(delta, now)
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frame)
  }, [running])
}

/** Keeps a canvas sized to its parent at device pixel ratio (capped by `maxDpr`). */
export function useCanvasSize(maxDpr = 2) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0, dpr: 1 })

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return
    const observer = new ResizeObserver(([entry]) => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr)
      const { width, height } = entry.contentRect
      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      setSize({ width, height, dpr })
    })
    observer.observe(parent)
    return () => observer.disconnect()
  }, [maxDpr])

  return { canvasRef, ...size }
}

export function useNow(intervalMs = 1000) {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs])
  return now
}
