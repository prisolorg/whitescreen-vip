import { TOOL_H1_EN } from '@/lib/tool-content/h1'

/**
 * Monthly search volume of each page's H1 keyword (from the keyword CSVs). Internal links favour the
 * pages whose keyword has the most demand: the footer's Popular tools, the order of Try next tiles,
 * and which related tools each page shows first.
 * Pages without keyword data yet count as UNKNOWN_VOLUME (0): measured keywords always rank first, unmeasured
 * pages keep their original order after them until their CSVs arrive.
 */
export const H1_KEYWORD_VOLUME: Record<string, number> = {
  stopwatch: 1578850, // "stopwatch"
  'black-screen': 527000,
  'pomodoro-timer': 515350,
  'white-screen': 454000,
  'hacker-typer': 158820,
  'countdown-timer': 144000,
  'broken-screen': 104000, // "broken screen"
  'dead-pixel-test': 86480,
  'dvd-screensaver': 57000,
  'flip-clock-screensaver': 40260, // "flip clock"
  'red-screen': 31000,
  'monitor-test': 28600, // "screen test"
  'pink-screen': 24000,
  'frame-rate-test': 22500, // "fps test"
  'contrast-checker': 22150, // "contrast checker"
  'screen-refresh-rate-test': 19150, // "refresh rate test"
  'monitor-ghosting-test': 16260, // "ghosting test"
  'fake-windows-10-update': 13460, // "fake windows update screen"
  'screen-color-test': 12980, // "color test"
  'touch-screen-test': 12490,
  'ring-light': 11210, // "ring light"
  'screen-resolution-test': 7890, // "screen resolution"
  'fake-blue-screen-of-death': 6940, // "blue screen of death"
  'screen-burn-in-test': 4140, // "screen burn"
  'oled-burn-in-test': 9600, // "oled burn in"
  'gray-screen': 5460, // "grey screen"
  'white-noise-generator': 385040, // "white noise"
  'brown-noise-generator': 82390, // "brown noise"
  'pink-noise-generator': 48890, // "pink noise"
  'purple-screen': 11370, // "purple screen"
  'motivational-quote-screensaver': 2450, // "motivational"
  'matrix-screensaver': 390, // "matrix screen"
  'fake-teams-meeting': 750, // "fake meeting screen"
  'fake-chrome-os-update': 140, // "fake chromebook"
  'fake-android-update': 90, // "update screen"
  'fake-windows-xp-update': 140, // "windows update prank"
  'orange-screen': 3900,
  'oled-gray-test': 3320, // "oled test"
  'yellow-screen': 3100,
  'green-screen': 6400, // CSV has no head term; "greenscreen" spelling
  'blue-screen': 1300, // CSV has no head term; "bluescreen" spelling
  'hacked-screen': 1430, // "hacked screen"
  'no-signal-screen': 1290, // "tv color bars"
  'fake-windows-11-update': 1210,
  'fake-zoom-meeting': 1000,
  'zoom-lighting': 560,
  'fake-mac-update': 20,
}

export const UNKNOWN_VOLUME = 0

export const keywordVolume = (slug: string) => H1_KEYWORD_VOLUME[slug] ?? UNKNOWN_VOLUME

/** Highest-demand first; stable for equal volumes. */
export function byKeywordVolume<T extends { slug: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => keywordVolume(b.slug) - keywordVolume(a.slug))
}

/**
 * English link text for a tool: its H1 keyword, shortened where the H1 is a full question or a long pair,
 * so every link to a page carries the keyword that page ranks for.
 */
const LINK_LABEL_EN: Record<string, string> = {
  'screen-resolution-test': 'My Screen Resolution',
  'no-signal-screen': 'TV Color Bars',
}

export function linkLabelEn(slug: string, fallback: string) {
  return LINK_LABEL_EN[slug] ?? TOOL_H1_EN[slug] ?? fallback
}
