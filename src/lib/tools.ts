import type { LucideIcon } from 'lucide-react'
import {
  AudioWaveform,
  Binary,
  Blend,
  Clock,
  Contrast,
  Disc3,
  Flame,
  Grid3x3,
  Hourglass,
  Image,
  Laptop,
  Lightbulb,
  Loader,
  MessagesSquare,
  Monitor,
  MonitorCheck,
  Palette,
  Rainbow,
  RefreshCw,
  Ruler,
  ScanEye,
  Smartphone,
  Snowflake,
  Sparkles,
  Square,
  Sun,
  Terminal,
  Timer,
  Tv,
  Users,
  Video,
  Waves,
  WifiOff,
  Zap,
} from 'lucide-react'
import type { ToolCategoryId } from './tool-categories'

export type Tool = {
  slug: string
  name: string
  category: ToolCategoryId
  description: string
  icon: LucideIcon
  keywords: string[]
  related: string[]
  /** Swatch color for solid color screens. */
  swatch?: string
}

const colorKeywords = (name: string) => [
  `${name} screen`,
  `fullscreen ${name}`,
  `${name} background`,
  'color screen',
  'screen test',
]

export const TOOLS: readonly Tool[] = [
  // Screen tests
  {
    slug: 'white-screen',
    name: 'White Screen',
    category: 'screen-tests',
    description:
      'A clean fullscreen white screen for lighting, cleaning your monitor, tracing and spotting dead pixels.',
    icon: Square,
    keywords: [...colorKeywords('white'), 'blank screen', 'light source', 'lightbox'],
    related: ['black-screen', 'dead-pixel-test', 'zoom-lighting', 'screen-uniformity-test'],
    swatch: '#FFFFFF',
  },
  {
    slug: 'black-screen',
    name: 'Black Screen',
    category: 'screen-tests',
    description:
      'A pure fullscreen black screen for finding stuck pixels, checking backlight bleed and dimming a display.',
    icon: Square,
    keywords: [...colorKeywords('black'), 'backlight bleed', 'ips glow', 'dark screen'],
    related: ['white-screen', 'oled-gray-test', 'dead-pixel-test', 'screen-uniformity-test'],
    swatch: '#000000',
  },
  {
    slug: 'red-screen',
    name: 'Red Screen',
    category: 'screen-tests',
    description:
      'A solid fullscreen red screen for testing red subpixels, night-friendly light and color backdrops.',
    icon: Square,
    keywords: [...colorKeywords('red'), 'red subpixel', 'night light'],
    related: ['green-screen', 'blue-screen', 'dead-pixel-test', 'screen-color-test'],
    swatch: '#FF0000',
  },
  {
    slug: 'green-screen',
    name: 'Green Screen',
    category: 'screen-tests',
    description:
      'A bright fullscreen green screen for chroma key backdrops, green subpixel checks and uniformity tests.',
    icon: Square,
    keywords: [...colorKeywords('green'), 'chroma key', 'green subpixel'],
    related: ['blue-screen', 'red-screen', 'dead-pixel-test', 'screen-uniformity-test'],
    swatch: '#00FF00',
  },
  {
    slug: 'blue-screen',
    name: 'Blue Screen',
    category: 'screen-tests',
    description:
      'A saturated fullscreen blue screen for blue subpixel tests, chroma keying and cool ambient light.',
    icon: Square,
    keywords: [...colorKeywords('blue'), 'blue subpixel', 'chroma key'],
    related: ['red-screen', 'green-screen', 'cyan-screen', 'screen-color-test'],
    swatch: '#0000FF',
  },
  {
    slug: 'yellow-screen',
    name: 'Yellow Screen',
    category: 'screen-tests',
    description:
      'A fullscreen yellow screen that lights red and green subpixels together, or works as a warm light.',
    icon: Square,
    keywords: [...colorKeywords('yellow'), 'warm light'],
    related: ['orange-screen', 'red-screen', 'green-screen', 'dead-pixel-test'],
    swatch: '#FFFF00',
  },
  {
    slug: 'orange-screen',
    name: 'Orange Screen',
    category: 'screen-tests',
    description:
      'A warm fullscreen orange screen for cozy ambient light, sunset-toned photos and color comparisons.',
    icon: Square,
    keywords: [...colorKeywords('orange'), 'warm light', 'sunset'],
    related: ['yellow-screen', 'red-screen', 'pink-screen', 'zoom-lighting'],
    swatch: '#FF8000',
  },
  {
    slug: 'pink-screen',
    name: 'Pink Screen',
    category: 'screen-tests',
    description:
      'A soft fullscreen pink screen for flattering selfie light, mood lighting and pastel backdrops.',
    icon: Square,
    keywords: [...colorKeywords('pink'), 'selfie light', 'pastel'],
    related: ['magenta-screen', 'purple-screen', 'zoom-lighting', 'orange-screen'],
    swatch: '#FF69B4',
  },
  {
    slug: 'purple-screen',
    name: 'Purple Screen',
    category: 'screen-tests',
    description:
      'A rich fullscreen purple screen for ambient room light, streaming backdrops and color checks.',
    icon: Square,
    keywords: [...colorKeywords('purple'), 'violet', 'ambient light'],
    related: ['magenta-screen', 'pink-screen', 'blue-screen', 'color-cycle'],
    swatch: '#8000FF',
  },
  {
    slug: 'cyan-screen',
    name: 'Cyan Screen',
    category: 'screen-tests',
    description:
      'A fullscreen cyan screen that lights green and blue subpixels together to reveal channel defects.',
    icon: Square,
    keywords: [...colorKeywords('cyan'), 'aqua', 'subpixel test'],
    related: ['blue-screen', 'green-screen', 'magenta-screen', 'dead-pixel-test'],
    swatch: '#00FFFF',
  },
  {
    slug: 'magenta-screen',
    name: 'Magenta Screen',
    category: 'screen-tests',
    description:
      'A fullscreen magenta screen that lights red and blue subpixels together, ideal for spotting tints.',
    icon: Square,
    keywords: [...colorKeywords('magenta'), 'fuchsia', 'subpixel test'],
    related: ['cyan-screen', 'pink-screen', 'purple-screen', 'screen-color-test'],
    swatch: '#FF00FF',
  },
  {
    slug: 'gray-screen',
    name: 'Gray Screen',
    category: 'screen-tests',
    description:
      'A neutral fullscreen gray screen for spotting clouding, banding and dirty screen effect on panels.',
    icon: Square,
    keywords: [...colorKeywords('gray'), 'grey screen', 'dirty screen effect', 'banding'],
    related: ['screen-uniformity-test', 'oled-gray-test', 'black-screen', 'monitor-test'],
    swatch: '#808080',
  },
  {
    slug: 'dead-pixel-test',
    name: 'Dead Pixel Test',
    category: 'screen-tests',
    description:
      'Cycle full-screen solid colors to inspect your display for dead, stuck or hot pixels by eye.',
    icon: ScanEye,
    keywords: ['dead pixel', 'stuck pixel', 'hot pixel', 'pixel test', 'monitor check'],
    related: ['screen-uniformity-test', 'monitor-test', 'black-screen', 'white-screen'],
  },
  {
    slug: 'screen-uniformity-test',
    name: 'Screen Uniformity Test',
    category: 'screen-tests',
    description:
      'Even gray fields with an optional grid overlay to reveal clouding, vignetting and backlight bleed.',
    icon: Grid3x3,
    keywords: ['uniformity', 'clouding', 'backlight bleed', 'dirty screen effect', 'vignetting'],
    related: ['gray-screen', 'oled-gray-test', 'dead-pixel-test', 'monitor-test'],
  },
  {
    slug: 'monitor-test',
    name: 'Monitor Test',
    category: 'screen-tests',
    description:
      'A full set of monitor test patterns: gradients, grids, gamma, sharpness, checkerboards and color bars.',
    icon: MonitorCheck,
    keywords: ['monitor test', 'test pattern', 'gamma', 'sharpness', 'calibration', 'display test'],
    related: ['screen-color-test', 'screen-resolution-test', 'dead-pixel-test', 'screen-uniformity-test'],
  },
  {
    slug: 'oled-gray-test',
    name: 'OLED Gray Test',
    category: 'screen-tests',
    description:
      'Near-black gray steps that expose OLED banding, near-black flicker and uneven low-light uniformity.',
    icon: Contrast,
    keywords: ['oled', 'near black', 'gray uniformity', 'banding', 'black crush'],
    related: ['oled-burn-in-test', 'screen-uniformity-test', 'gray-screen', 'black-screen'],
  },
  {
    slug: 'oled-burn-in-test',
    name: 'OLED Burn-In Test',
    category: 'screen-tests',
    description:
      'Solid color fields and an auto-cycle mode to help you see image retention and burn-in on OLED panels.',
    icon: Flame,
    keywords: ['burn in', 'image retention', 'oled', 'ghosting', 'screen burn'],
    related: ['oled-gray-test', 'dead-pixel-test', 'color-cycle', 'gray-screen'],
  },
  {
    slug: 'screen-color-test',
    name: 'Screen Color Test',
    category: 'screen-tests',
    description:
      'Color bars, RGB ramps and saturation steps for checking color accuracy, banding and tint.',
    icon: Palette,
    keywords: ['color test', 'color bars', 'rgb', 'gradient', 'color accuracy', 'banding'],
    related: ['monitor-test', 'red-screen', 'gradient-screen', 'screen-uniformity-test'],
  },
  {
    slug: 'screen-resolution-test',
    name: 'Screen Resolution Test',
    category: 'screen-tests',
    description:
      'See your screen resolution, viewport size, pixel ratio and color depth, plus a 1-pixel sharpness pattern.',
    icon: Ruler,
    keywords: ['resolution', 'screen size', 'pixel ratio', 'viewport', 'dpi', 'what is my resolution'],
    related: ['monitor-test', 'white-screen-image', 'dead-pixel-test', 'screen-color-test'],
  },

  // Effects
  {
    slug: 'static-screen',
    name: 'TV Static Screen',
    category: 'effects',
    description:
      'Animated analog TV static with scanlines, adjustable intensity and optional static hiss audio.',
    icon: Tv,
    keywords: ['static', 'tv static', 'snow', 'analog noise', 'no channel'],
    related: ['no-signal-screen', 'visual-noise', 'white-noise-screen', 'broken-screen'],
  },
  {
    slug: 'no-signal-screen',
    name: 'No Signal Screen',
    category: 'effects',
    description:
      'A retro "No Signal" display with color bars or a floating message box, with your own custom text.',
    icon: WifiOff,
    keywords: ['no signal', 'color bars', 'test card', 'tv', 'input not found'],
    related: ['static-screen', 'dvd-screensaver', 'broken-screen', 'screen-color-test'],
  },
  {
    slug: 'white-noise-screen',
    name: 'White Noise Screen',
    category: 'effects',
    description:
      'Generated white noise audio with a soft animated grain visual and a sleep timer for focus or rest.',
    icon: AudioWaveform,
    keywords: ['white noise', 'sleep sound', 'focus', 'noise generator', 'ambient'],
    related: ['pink-noise-screen', 'brown-noise-screen', 'static-screen', 'countdown-timer'],
  },
  {
    slug: 'brown-noise-screen',
    name: 'Brown Noise Screen',
    category: 'effects',
    description:
      'Deep, rumbling brown noise generated live in your browser, with volume control and a calm visual.',
    icon: Waves,
    keywords: ['brown noise', 'brownian noise', 'red noise', 'sleep', 'focus', 'adhd'],
    related: ['pink-noise-screen', 'white-noise-screen', 'snow-screen', 'countdown-timer'],
  },
  {
    slug: 'pink-noise-screen',
    name: 'Pink Noise Screen',
    category: 'effects',
    description:
      'Balanced pink noise that sounds like steady rain, generated in real time with a soft pink visual.',
    icon: AudioWaveform,
    keywords: ['pink noise', 'rain sound', 'sleep', 'noise generator', 'relax'],
    related: ['brown-noise-screen', 'white-noise-screen', 'color-cycle', 'countdown-timer'],
  },
  {
    slug: 'broken-screen',
    name: 'Broken Screen Effect',
    category: 'effects',
    description:
      'Click or tap to add realistic-looking cracks to a simulated display. A harmless visual effect.',
    icon: Zap,
    keywords: ['broken screen', 'cracked screen', 'prank', 'shattered glass', 'effect'],
    related: ['static-screen', 'fake-windows-10-update', 'no-signal-screen', 'hacker-typer'],
  },
  {
    slug: 'hacker-typer',
    name: 'Hacker Typer',
    category: 'effects',
    description:
      'Mash any key to "type" convincing code like a movie hacker, or let it auto-type at your chosen speed.',
    icon: Terminal,
    keywords: ['hacker typer', 'fake code', 'hacker screen', 'typing prank', 'terminal'],
    related: ['matrix-screensaver', 'fake-ubuntu-update', 'broken-screen', 'static-screen'],
  },
  {
    slug: 'zoom-lighting',
    name: 'Zoom Lighting',
    category: 'utilities',
    description:
      'Turn a spare screen into a soft key light for video calls, with warm-to-cool tones and a ring mode.',
    icon: Lightbulb,
    keywords: ['zoom lighting', 'ring light', 'video call light', 'webcam light', 'fill light'],
    related: ['white-screen', 'fake-zoom-meeting', 'pink-screen', 'countdown-timer'],
  },
  {
    slug: 'visual-noise',
    name: 'Visual Noise',
    category: 'effects',
    description:
      'Customizable animated pixel noise in mono, color or tinted modes with adjustable grain and speed.',
    icon: Sparkles,
    keywords: ['visual noise', 'pixel noise', 'grain', 'random pixels', 'glitch'],
    related: ['static-screen', 'color-cycle', 'gradient-screen', 'white-noise-screen'],
  },
  {
    slug: 'color-cycle',
    name: 'Color Cycle',
    category: 'effects',
    description:
      'Smoothly cycle the whole screen through the color wheel, or step between colors at your own pace.',
    icon: Rainbow,
    keywords: ['color cycle', 'rainbow screen', 'rgb', 'hue', 'party light', 'mood light'],
    related: ['gradient-screen', 'oled-burn-in-test', 'purple-screen', 'visual-noise'],
  },
  {
    slug: 'gradient-screen',
    name: 'Gradient Screen',
    category: 'effects',
    description:
      'Build an animated fullscreen gradient with your own colors, angle and speed, or pick a preset.',
    icon: Blend,
    keywords: ['gradient', 'animated gradient', 'background', 'aurora', 'mood light'],
    related: ['color-cycle', 'screen-color-test', 'white-screen', 'visual-noise'],
  },

  // Screensavers
  {
    slug: 'matrix-screensaver',
    name: 'Matrix Screensaver',
    category: 'screensavers',
    description:
      'Cascading digital rain with adjustable speed, color, character set and font size.',
    icon: Binary,
    keywords: ['matrix', 'digital rain', 'code rain', 'falling characters', 'screensaver'],
    related: ['hacker-typer', 'dvd-screensaver', 'flip-clock-screensaver', 'snow-screen'],
  },
  {
    slug: 'flip-clock-screensaver',
    name: 'Flip Clock Screensaver',
    category: 'screensavers',
    description:
      'A large live flip clock with 12- or 24-hour time, optional seconds and light or dark themes.',
    icon: Clock,
    keywords: ['flip clock', 'clock', 'desk clock', 'fullscreen clock', 'time'],
    related: ['countdown-timer', 'stopwatch', 'dvd-screensaver', 'matrix-screensaver'],
  },
  {
    slug: 'dvd-screensaver',
    name: 'DVD Screensaver',
    category: 'screensavers',
    description:
      'The classic bouncing DVD logo that changes color on every bounce, with a corner-hit counter.',
    icon: Disc3,
    keywords: ['dvd', 'bouncing logo', 'screensaver', 'corner hit', 'retro'],
    related: ['custom-dvd-screensaver', 'matrix-screensaver', 'no-signal-screen', 'flip-clock-screensaver'],
  },
  {
    slug: 'custom-dvd-screensaver',
    name: 'Custom DVD Screensaver',
    category: 'screensavers',
    description:
      'Make your own bouncing screensaver with custom text, colors, size, speed and background.',
    icon: Disc3,
    keywords: ['custom dvd', 'bouncing text', 'custom screensaver', 'bouncing logo'],
    related: ['dvd-screensaver', 'gradient-screen', 'flip-clock-screensaver', 'snow-screen'],
  },
  {
    slug: 'snow-screen',
    name: 'Snow Screen',
    category: 'screensavers',
    description:
      'Gentle falling snow with adjustable density, speed and wind for a calm winter screensaver.',
    icon: Snowflake,
    keywords: ['snow', 'falling snow', 'winter', 'christmas screensaver', 'snowfall'],
    related: ['matrix-screensaver', 'brown-noise-screen', 'gradient-screen', 'flip-clock-screensaver'],
  },

  // Utilities
  {
    slug: 'countdown-timer',
    name: 'Countdown Timer',
    category: 'utilities',
    description:
      'A big fullscreen countdown timer with presets, pause and resume, and a sound and visual alert.',
    icon: Hourglass,
    keywords: ['countdown', 'timer', 'fullscreen timer', 'presentation timer', 'alarm'],
    related: ['stopwatch', 'flip-clock-screensaver', 'white-noise-screen', 'zoom-lighting'],
  },
  {
    slug: 'stopwatch',
    name: 'Stopwatch',
    category: 'utilities',
    description:
      'A precise fullscreen stopwatch with start, stop, reset and lap times you can review.',
    icon: Timer,
    keywords: ['stopwatch', 'lap timer', 'chronometer', 'timer', 'split times'],
    related: ['countdown-timer', 'flip-clock-screensaver', 'hacker-typer', 'monitor-test'],
  },

  // Fake screens
  {
    slug: 'fake-windows-10-update',
    name: 'Fake Windows 10 Update',
    category: 'fake-screens',
    description:
      'A harmless simulation of a classic blue "working on updates" screen with a configurable progress.',
    icon: Monitor,
    keywords: ['fake windows update', 'windows 10', 'update prank', 'fake update', 'blue update screen'],
    related: ['fake-windows-11-update', 'fake-windows-xp-update', 'broken-screen', 'fake-mac-update'],
  },
  {
    slug: 'fake-windows-11-update',
    name: 'Fake Windows 11 Update',
    category: 'fake-screens',
    description:
      'A simulated modern dark update screen with spinning dots and a progress percentage you control.',
    icon: Monitor,
    keywords: ['fake windows 11 update', 'windows 11', 'update prank', 'fake update'],
    related: ['fake-windows-10-update', 'fake-mac-update', 'fake-chrome-os-update', 'hacker-typer'],
  },
  {
    slug: 'fake-mac-update',
    name: 'Fake Mac Update',
    category: 'fake-screens',
    description:
      'A simulated minimalist desktop update screen with a slim progress bar and time remaining.',
    icon: Laptop,
    keywords: ['fake mac update', 'macos', 'update prank', 'fake update', 'apple'],
    related: ['fake-windows-11-update', 'fake-ubuntu-update', 'fake-android-update', 'broken-screen'],
  },
  {
    slug: 'fake-android-update',
    name: 'Fake Android Update',
    category: 'fake-screens',
    description:
      'A simulated phone system update screen with installing steps and a progress you can configure.',
    icon: Smartphone,
    keywords: ['fake android update', 'phone update', 'update prank', 'system update'],
    related: ['fake-mac-update', 'fake-chrome-os-update', 'broken-screen', 'fake-windows-11-update'],
  },
  {
    slug: 'fake-windows-xp-update',
    name: 'Fake Windows XP Update',
    category: 'fake-screens',
    description:
      'A nostalgic simulation of a 2000s-era install screen with a blocky progress bar and setup messages.',
    icon: Monitor,
    keywords: ['windows xp update', 'xp', 'retro update', 'nostalgia', 'fake update'],
    related: ['fake-windows-xp-boot', 'fake-windows-10-update', 'dvd-screensaver', 'no-signal-screen'],
  },
  {
    slug: 'fake-windows-xp-boot',
    name: 'Fake Windows XP Boot',
    category: 'fake-screens',
    description:
      'A retro boot screen simulation with the iconic sliding progress blocks on a black background.',
    icon: Loader,
    keywords: ['windows xp boot', 'boot screen', 'startup screen', 'retro', 'nostalgia'],
    related: ['fake-windows-xp-update', 'fake-windows-10-update', 'no-signal-screen', 'static-screen'],
  },
  {
    slug: 'fake-chrome-os-update',
    name: 'Fake Chrome OS Update',
    category: 'fake-screens',
    description:
      'A simulated light, friendly laptop update screen with a progress bar and changing status steps.',
    icon: Laptop,
    keywords: ['chrome os update', 'chromebook update', 'fake update', 'update prank'],
    related: ['fake-android-update', 'fake-mac-update', 'fake-windows-11-update', 'fake-ubuntu-update'],
  },
  {
    slug: 'fake-ubuntu-update',
    name: 'Fake Ubuntu Update',
    category: 'fake-screens',
    description:
      'A simulated Linux terminal upgrade that prints package logs and a text progress bar.',
    icon: Terminal,
    keywords: ['ubuntu update', 'linux update', 'apt upgrade', 'terminal', 'fake update'],
    related: ['hacker-typer', 'matrix-screensaver', 'fake-chrome-os-update', 'fake-windows-10-update'],
  },
  {
    slug: 'fake-zoom-meeting',
    name: 'Fake Zoom Meeting Screen',
    category: 'fake-screens',
    description:
      'A gallery-view meeting simulation in a dark theme with a toolbar, timer, webcam preview and active-speaker outline.',
    icon: Users,
    keywords: ['fake zoom meeting', 'fake zoom call', 'zoom meeting screen', 'gallery view', 'film prop', 'meeting simulation'],
    related: ['fake-teams-meeting', 'fake-google-meet', 'fake-slack-huddle', 'zoom-lighting'],
  },
  {
    slug: 'fake-teams-meeting',
    name: 'Fake Teams Meeting Screen',
    category: 'fake-screens',
    description:
      'A Teams-style meeting simulation with a dark stage, participant tiles, a top control bar with a Leave button and a running meeting timer.',
    icon: Users,
    keywords: ['fake teams meeting', 'fake teams call', 'teams meeting screen', 'microsoft teams', 'film prop', 'meeting simulation'],
    related: ['fake-zoom-meeting', 'fake-google-meet', 'fake-slack-huddle', 'zoom-lighting'],
  },
  {
    slug: 'fake-google-meet',
    name: 'Fake Google Meet Screen',
    category: 'fake-screens',
    description:
      'A Google Meet-style meeting simulation with rounded participant tiles, initial avatars, a blue speaking outline and round call controls.',
    icon: Users,
    keywords: ['fake google meet', 'google meet screen', 'fake meet call', 'meeting screen', 'film prop', 'meeting simulation'],
    related: ['fake-zoom-meeting', 'fake-teams-meeting', 'fake-slack-huddle', 'zoom-lighting'],
  },
  {
    slug: 'fake-slack-huddle',
    name: 'Fake Slack Huddle',
    category: 'fake-screens',
    description:
      'A compact audio huddle simulation with Slack-styled avatars, live speaking rings and an active huddle timer.',
    icon: MessagesSquare,
    keywords: ['fake slack huddle', 'huddle', 'audio call', 'film prop', 'call simulation'],
    related: ['fake-zoom-meeting', 'fake-teams-meeting', 'zoom-lighting', 'countdown-timer'],
  },
]

export const POPULAR_TOOL_SLUGS = [
  'white-screen',
  'black-screen',
  'dead-pixel-test',
  'matrix-screensaver',
  'dvd-screensaver',
  'countdown-timer',
  'broken-screen',
  'fake-windows-10-update',
] as const

export const COLOR_TOOL_SLUGS = TOOLS.filter((tool) => tool.swatch).map((tool) => tool.slug)

export function getTool(slug: string) {
  // Graceful alias for pruned tools
  if (slug === 'white-screen-image' || slug === 'bright-white-screen') return getTool('white-screen')
  // Earlier slugs for the meeting screens.
  if (slug === 'fake-zoom-call' || slug === 'fake-video-call') return getTool('fake-zoom-meeting')
  if (slug === 'fake-teams-call') return getTool('fake-teams-meeting')

  const tool = TOOLS.find((item) => item.slug === slug)
  if (!tool) throw new Error(`Unknown tool slug: ${slug}`)
  return tool
}

export function getToolsByCategory(category: ToolCategoryId) {
  return TOOLS.filter((tool) => tool.category === category)
}

export function toolPath(slug: string) {
  // The white screen lives on the homepage.
  return slug === 'white-screen' ? '/' : `/${slug}`
}
