export type ToolCategoryId = 'screen-tests' | 'effects' | 'screensavers' | 'fake-screens' | 'utilities' | 'light-sound'

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
      'Animated noise, color cycles and gradients that run fullscreen in your browser.',
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
      'Harmless prank screens: fake updates and crashes, hacked and broken screens, TV color bars and fake video calls.',
  },
  {
    id: 'utilities',
    name: 'Online Timers',
    navLabel: 'Timers',
    description: 'A countdown timer, Pomodoro timer and stopwatch in big fullscreen digits.',
  },
  {
    id: 'light-sound',
    name: 'Light & Sound',
    navLabel: 'Light & Sound',
    description: 'Screen lights for video calls and selfies, plus white, pink and brown noise for focus and sleep.',
  },
]

export function getCategory(id: ToolCategoryId) {
  return TOOL_CATEGORIES.find((category) => category.id === id)!
}
