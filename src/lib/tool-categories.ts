export type ToolCategoryId = 'screen-tests' | 'effects' | 'screensavers' | 'fake-screens' | 'utilities'

export type ToolCategory = {
  id: ToolCategoryId
  name: string
  navLabel: string
  description: string
}

export const TOOL_CATEGORIES: readonly ToolCategory[] = [
  {
    id: 'screen-tests',
    name: 'Screen Tests',
    navLabel: 'Screen Tests',
    description:
      'Test patterns for checking dead pixels, uniformity, burn-in and color accuracy.',
  },
  {
    id: 'effects',
    name: 'Visual Effects',
    navLabel: 'Effects',
    description:
      'Animated static, noise, gradients and simulated effects that run right in your browser.',
  },
  {
    id: 'screensavers',
    name: 'Screensavers',
    navLabel: 'Screensavers',
    description: 'Classic and modern screensavers for idle monitors, TVs and second screens.',
  },
  {
    id: 'fake-screens',
    name: 'Fake Screens',
    navLabel: 'Fake Screens',
    description:
      'Clearly labeled, harmless simulations of update screens and video calls for pranks, props and film sets.',
  },
  {
    id: 'utilities',
    name: 'Timers & Utilities',
    navLabel: 'Other Tools',
    description: 'Timers, a stopwatch, video-call lighting and a screen image generator.',
  },
]

export function getCategory(id: ToolCategoryId) {
  return TOOL_CATEGORIES.find((category) => category.id === id)!
}
