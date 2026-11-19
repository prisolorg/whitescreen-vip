'use client'

import { PatternCycler, type Pattern } from '@/components/tool-kit/pattern-cycler'

const solid = (id: string, label: string, hex: string, tone: 'light' | 'dark' = 'dark'): Pattern => ({
  id,
  label,
  background: hex,
  tone,
  swatch: hex,
})

const DEAD_PIXEL_PATTERNS: Pattern[] = [
  solid('black', 'Black', '#000000'),
  solid('white', 'White', '#FFFFFF', 'light'),
  solid('red', 'Red', '#FF0000'),
  solid('green', 'Green', '#00FF00', 'light'),
  solid('blue', 'Blue', '#0000FF'),
  solid('cyan', 'Cyan', '#00FFFF', 'light'),
  solid('magenta', 'Magenta', '#FF00FF'),
  solid('yellow', 'Yellow', '#FFFF00', 'light'),
  solid('gray', 'Gray', '#808080'),
]

export function DeadPixelTest() {
  return (
    <PatternCycler
      label="Dead pixel test"
      patterns={DEAD_PIXEL_PATTERNS}
      autoCycle={{ defaultSeconds: 3, min: 1, max: 10 }}
      note="Inspect each color closely. Dark dots on bright colors suggest dead pixels; colored dots on black suggest stuck pixels."
    />
  )
}

const grayLevel = (percent: number) => {
  const value = Math.round((percent / 100) * 255)
  const hex = value.toString(16).padStart(2, '0')
  return `#${hex}${hex}${hex}`
}

const UNIFORMITY_PATTERNS: Pattern[] = [5, 10, 25, 50, 75, 100].map((percent) => ({
  id: `gray-${percent}`,
  label: `${percent}%`,
  background: grayLevel(percent),
  swatch: grayLevel(percent),
  tone: percent >= 50 ? 'light' : 'dark',
}))

export function UniformityTest() {
  return (
    <PatternCycler
      label="Screen uniformity test"
      patterns={UNIFORMITY_PATTERNS}
      showGridOption
      note="Test in a dim room. Look for blotches, bands, bright edges or darker corners on each gray level."
    />
  )
}

const OLED_PATTERNS: Pattern[] = [
  ...[1, 2, 3, 5, 10, 15, 20].map((percent) => ({
    id: `oled-${percent}`,
    label: `${percent}%`,
    background: grayLevel(percent),
    swatch: grayLevel(percent),
  })),
  {
    id: 'ramp',
    label: 'Near-black ramp',
    background: `linear-gradient(90deg, ${[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]
      .map((percent, index, list) => {
        const start = (index / list.length) * 100
        const end = ((index + 1) / list.length) * 100
        return `${grayLevel(percent)} ${start}% ${end}%`
      })
      .join(', ')})`,
  },
]

export function OledGrayTest() {
  return (
    <PatternCycler
      label="OLED near-black gray test"
      patterns={OLED_PATTERNS}
      note="Use a dark room. The ramp shows 0–20% in steps; each step should be just visibly different from the next."
    />
  )
}

const BURN_IN_PATTERNS: Pattern[] = [
  solid('gray', 'Mid gray', '#808080'),
  solid('red', 'Red', '#FF0000'),
  solid('green', 'Green', '#00FF00', 'light'),
  solid('blue', 'Blue', '#0000FF'),
  solid('white', 'White', '#FFFFFF', 'light'),
  solid('dark-gray', 'Dark gray', '#333333'),
]

export function BurnInTest() {
  return (
    <PatternCycler
      label="OLED burn-in test"
      patterns={BURN_IN_PATTERNS}
      autoCycle={{ defaultSeconds: 5, min: 2, max: 30 }}
      note="Look for faint shapes such as taskbars, logos or HUDs. This test only reveals burn-in; it cannot repair it."
    />
  )
}

const MONITOR_PATTERNS: Pattern[] = [
  { id: 'gradient', label: 'Gray gradient', background: 'linear-gradient(90deg, #000, #fff)' },
  {
    id: 'steps',
    label: 'Gray steps',
    background: `linear-gradient(90deg, ${Array.from({ length: 16 }, (_, index) => {
      const value = grayLevel((index / 15) * 100)
      return `${value} ${(index / 16) * 100}% ${((index + 1) / 16) * 100}%`
    }).join(', ')})`,
  },
  {
    id: 'grid',
    label: 'Grid',
    background:
      'repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 40px), #000',
  },
  {
    id: 'gamma',
    label: 'Gamma 2.2',
    background:
      'linear-gradient(90deg, transparent 0 33.3%, #BABABA 33.3% 66.6%, transparent 66.6%), repeating-linear-gradient(0deg, #000 0 1px, #fff 1px 2px)',
    tone: 'light',
  },
  {
    id: 'lines',
    label: 'Fine lines',
    background: 'repeating-linear-gradient(90deg, #000 0 1px, #fff 1px 2px)',
    tone: 'light',
  },
  {
    id: 'checker',
    label: 'Checkerboard',
    background: 'repeating-conic-gradient(#000 0 25%, #fff 0 50%)',
    backgroundSize: '64px 64px',
    tone: 'light',
  },
  {
    id: 'bars',
    label: 'Color bars',
    background:
      'linear-gradient(90deg, #C0C0C0 0 14.28%, #C0C000 14.28% 28.57%, #00C0C0 28.57% 42.85%, #00C000 42.85% 57.14%, #C000C0 57.14% 71.42%, #C00000 71.42% 85.71%, #0000C0 85.71%)',
  },
]

export function MonitorTest() {
  return (
    <PatternCycler
      label="Monitor test patterns"
      patterns={MONITOR_PATTERNS}
      note="Use native resolution and 100% browser zoom. In the gamma pattern, the center block should blend with the stripes from a distance."
    />
  )
}

const ramp = (color: string) => `linear-gradient(90deg, #000, ${color})`

const COLOR_PATTERNS: Pattern[] = [
  {
    id: 'bars',
    label: 'Color bars',
    background:
      'linear-gradient(90deg, #fff 0 12.5%, #ff0 12.5% 25%, #0ff 25% 37.5%, #0f0 37.5% 50%, #f0f 50% 62.5%, #f00 62.5% 75%, #00f 75% 87.5%, #000 87.5%)',
  },
  {
    id: 'rgb-ramps',
    label: 'RGB ramps',
    background: `${ramp('#f00')} 0 0 / 100% 25% no-repeat, ${ramp('#0f0')} 0 33.3% / 100% 25% no-repeat, ${ramp('#00f')} 0 66.6% / 100% 25% no-repeat, ${ramp('#fff')} 0 100% / 100% 25% no-repeat, #000`,
  },
  {
    id: 'spectrum',
    label: 'Hue spectrum',
    background:
      'linear-gradient(0deg, #808080, transparent), linear-gradient(90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)',
  },
  {
    id: 'saturation',
    label: 'Saturation steps',
    background: `linear-gradient(90deg, ${Array.from({ length: 10 }, (_, index) => {
      const color = `hsl(0 ${index * 11}% 50%)`
      return `${color} ${index * 10}% ${(index + 1) * 10}%`
    }).join(', ')})`,
  },
  solid('red', 'Red', '#FF0000'),
  solid('green', 'Green', '#00FF00', 'light'),
  solid('blue', 'Blue', '#0000FF'),
]

export function ColorTest() {
  return (
    <PatternCycler
      label="Screen color test"
      patterns={COLOR_PATTERNS}
      note="Ramps should transition smoothly with no visible steps, and the brightest end should not clip."
    />
  )
}
