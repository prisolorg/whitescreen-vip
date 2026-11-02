'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type NoiseColor = 'white' | 'pink' | 'brown'

type AudioWindow = Window & { webkitAudioContext?: typeof AudioContext }

function createContext() {
  const Ctor = window.AudioContext ?? (window as AudioWindow).webkitAudioContext
  return Ctor ? new Ctor() : null
}

function createNoiseBuffer(context: AudioContext, color: NoiseColor) {
  const length = context.sampleRate * 4
  const buffer = context.createBuffer(1, length, context.sampleRate)
  const data = buffer.getChannelData(0)
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
  let last = 0
  for (let i = 0; i < length; i++) {
    const white = Math.random() * 2 - 1
    if (color === 'white') {
      data[i] = white * 0.5
    } else if (color === 'pink') {
      // Paul Kellet's refined pink noise filter.
      b0 = 0.99886 * b0 + white * 0.0555179
      b1 = 0.99332 * b1 + white * 0.0750759
      b2 = 0.969 * b2 + white * 0.153852
      b3 = 0.8665 * b3 + white * 0.3104856
      b4 = 0.55 * b4 + white * 0.5329522
      b5 = -0.7616 * b5 - white * 0.016898
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
      b6 = white * 0.115926
    } else {
      last = (last + 0.02 * white) / 1.02
      data[i] = last * 3.5
    }
  }
  return buffer
}

/** Looping generated noise with a gain node. Only starts from a user gesture. */
export function useNoise(color: NoiseColor, volume: number) {
  const contextRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const sourceRef = useRef<AudioBufferSourceNode | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const stop = useCallback(() => {
    const context = contextRef.current
    const gain = gainRef.current
    if (context && gain) {
      gain.gain.setTargetAtTime(0, context.currentTime, 0.15)
      const source = sourceRef.current
      window.setTimeout(() => source?.stop(), 600)
    }
    sourceRef.current = null
    setIsPlaying(false)
  }, [])

  const start = useCallback(() => {
    const context = contextRef.current ?? createContext()
    if (!context) return
    contextRef.current = context
    void context.resume()
    const gain = gainRef.current ?? context.createGain()
    if (!gainRef.current) {
      gain.connect(context.destination)
      gainRef.current = gain
    }
    gain.gain.cancelScheduledValues(context.currentTime)
    gain.gain.setValueAtTime(0, context.currentTime)
    gain.gain.setTargetAtTime(volume, context.currentTime, 0.3)
    const source = context.createBufferSource()
    source.buffer = createNoiseBuffer(context, color)
    source.loop = true
    source.connect(gain)
    source.start()
    sourceRef.current = source
    setIsPlaying(true)
  }, [color, volume])

  useEffect(() => {
    const context = contextRef.current
    if (context && gainRef.current && sourceRef.current) {
      gainRef.current.gain.setTargetAtTime(volume, context.currentTime, 0.1)
    }
  }, [volume])

  useEffect(
    () => () => {
      sourceRef.current?.stop()
      void contextRef.current?.close()
    },
    [],
  )

  return { isPlaying, start, stop }
}

/** Plays a short tone. Must be called from a user gesture at least once. */
export function playTone(frequency = 880, durationMs = 300, volume = 0.15) {
  const context = createContext()
  if (!context) return
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  oscillator.frequency.value = frequency
  oscillator.connect(gain)
  gain.connect(context.destination)
  gain.gain.setValueAtTime(volume, context.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + durationMs / 1000)
  oscillator.start()
  oscillator.stop(context.currentTime + durationMs / 1000)
  oscillator.onended = () => void context.close()
}
