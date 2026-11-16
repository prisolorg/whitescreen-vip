import type { LucideIcon } from 'lucide-react'
import {
  AudioWaveform,
  Binary,
  Blend,
  Clock,
  Contrast,
  Disc3,
  Quote,
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
  ShieldAlert,
  Frown,
  Hand,
  Gauge,
  Ghost,
  Film,
  CircleDot,
  Radar,
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
    related: ['black-screen', 'dead-pixel-test', 'monitor-test', 'ring-light'],
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
    related: ['white-screen', 'dead-pixel-test', 'monitor-test', 'oled-gray-test'],
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
    related: ['pink-screen', 'dead-pixel-test', 'green-screen', 'blue-screen'],
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
    related: ['black-screen', 'dead-pixel-test', 'red-screen', 'blue-screen'],
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
    related: ['fake-blue-screen-of-death', 'red-screen', 'dead-pixel-test', 'green-screen'],
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
    related: ['red-screen', 'dead-pixel-test', 'orange-screen', 'green-screen'],
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
    related: ['red-screen', 'pink-screen', 'ring-light', 'yellow-screen'],
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
    related: ['red-screen', 'ring-light', 'magenta-screen', 'purple-screen'],
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
    related: ['black-screen', 'monitor-test', 'oled-gray-test', 'screen-uniformity-test'],
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
    related: ['black-screen', 'white-screen', 'monitor-test', 'touch-screen-test', 'screen-uniformity-test'],
  },
  {
    slug: 'screen-uniformity-test',
    name: 'Screen Uniformity Test',
    category: 'screen-tests',
    description:
      'Even gray fields with an optional grid overlay to reveal clouding, vignetting and backlight bleed.',
    icon: Grid3x3,
    keywords: ['uniformity', 'clouding', 'backlight bleed', 'dirty screen effect', 'vignetting'],
    related: ['black-screen', 'dead-pixel-test', 'monitor-test', 'gray-screen'],
  },
  {
    slug: 'monitor-test',
    name: 'Monitor Test',
    category: 'screen-tests',
    description:
      'A full set of monitor test patterns: gradients, grids, gamma, sharpness, checkerboards and color bars.',
    icon: MonitorCheck,
    keywords: ['monitor test', 'test pattern', 'gamma', 'sharpness', 'calibration', 'display test'],
    related: ['dead-pixel-test', 'frame-rate-test', 'screen-refresh-rate-test', 'screen-color-test', 'screen-resolution-test'],
  },
  {
    slug: 'oled-gray-test',
    name: 'OLED Gray Test',
    category: 'screen-tests',
    description:
      'Near-black gray steps that expose OLED banding, near-black flicker and uneven low-light uniformity.',
    icon: Contrast,
    keywords: ['oled', 'near black', 'gray uniformity', 'banding', 'black crush'],
    related: ['black-screen', 'dead-pixel-test', 'screen-burn-in-test', 'oled-burn-in-test'],
  },
  {
    slug: 'oled-burn-in-test',
    name: 'OLED Burn-In Test',
    category: 'screen-tests',
    description:
      'Solid color fields and an auto-cycle mode to help you see image retention and burn-in on OLED panels.',
    icon: Flame,
    keywords: ['burn in', 'image retention', 'oled', 'ghosting', 'screen burn'],
    related: ['black-screen', 'dead-pixel-test', 'screen-burn-in-test', 'oled-gray-test'],
  },  {
    slug: 'screen-burn-in-test',
    name: 'Screen Burn-In Test',
    category: 'screen-tests',
    description:
      'Check any LCD, OLED or plasma screen for burn-in and image retention, then run a white-sweep or color fixer to clear it.',
    icon: Flame,
    keywords: ['screen burn test', 'burn in test', 'image retention', 'burn in fixer', 'ghost image'],
    related: ['dead-pixel-test', 'monitor-test', 'oled-gray-test', 'oled-burn-in-test'],
  },
  {
    slug: 'touch-screen-test',
    name: 'Touch Screen Test',
    category: 'screen-tests',
    description:
      'Find dead zones and test multi-touch: fill a grid with your finger, draw freely, or see every touch point live.',
    icon: Hand,
    keywords: ['touch screen test', 'touchscreen test', 'dead zone', 'multi touch test', 'digitizer test'],
    related: ['dead-pixel-test', 'monitor-test', 'screen-refresh-rate-test', 'screen-resolution-test'],
  },
  {
    slug: 'screen-refresh-rate-test',
    name: 'Screen Refresh Rate Test',
    category: 'screen-tests',
    description:
      'Measure your display\'s refresh rate in Hz live in the browser, with frame times, late frames and a motion check.',
    icon: Gauge,
    keywords: ['refresh rate test', 'hz test', 'monitor hz', '144hz test', 'screen refresh rate'],
    related: ['monitor-test', 'frame-rate-test', 'monitor-ghosting-test', 'dead-pixel-test'],
  },
  {
    slug: 'monitor-ghosting-test',
    name: 'Monitor Ghosting Test',
    category: 'screen-tests',
    description:
      'Moving targets on dark, mid-gray and light backgrounds reveal ghosting, smearing and overshoot on your monitor.',
    icon: Ghost,
    keywords: ['ghosting test', 'monitor ghosting', 'response time test', 'motion blur test', 'overdrive test'],
    related: ['monitor-test', 'frame-rate-test', 'screen-refresh-rate-test', 'dead-pixel-test'],
  },
  {
    slug: 'frame-rate-test',
    name: 'Frame Rate Test',
    category: 'screen-tests',
    description:
      'Compare 15, 24, 30, 60 FPS and your display\'s maximum side by side to see how frame rate changes motion.',
    icon: Film,
    keywords: ['frame rate test', 'fps test', '30 vs 60 fps', 'fps comparison', 'framerate'],
    related: ['monitor-test', 'screen-refresh-rate-test', 'monitor-ghosting-test', 'stopwatch'],
  },

  {
    slug: 'screen-color-test',
    name: 'Screen Color Test',
    category: 'screen-tests',
    description:
      'Color bars, RGB ramps and saturation steps for checking color accuracy, banding and tint.',
    icon: Palette,
    keywords: ['color test', 'color bars', 'rgb', 'gradient', 'color accuracy', 'banding'],
    related: ['dead-pixel-test', 'monitor-test', 'contrast-checker', 'red-screen'],
  },
  {
    slug: 'screen-resolution-test',
    name: 'Screen Resolution Test',
    category: 'screen-tests',
    description:
      'See your screen resolution, viewport size, pixel ratio and color depth, plus a 1-pixel sharpness pattern.',
    icon: Ruler,
    keywords: ['resolution', 'screen size', 'pixel ratio', 'viewport', 'dpi', 'what is my resolution'],
    related: ['dead-pixel-test', 'monitor-test', 'screen-refresh-rate-test', 'screen-color-test'],
  },

  // Effects
  {
    slug: 'no-signal-screen',
    name: 'No Signal Screen',
    category: 'effects',
    description:
      'A retro "No Signal" display with color bars or a floating message box, with your own custom text.',
    icon: WifiOff,
    keywords: ['no signal', 'color bars', 'test card', 'tv', 'input not found'],
    related: ['broken-screen', 'dvd-screensaver', 'fake-blue-screen-of-death', 'white-noise-generator'],
  },
  {
    slug: 'white-noise-generator',
    name: 'White Noise Generator',
    category: 'effects',
    description:
      'Free online white noise generator with filters, volume, a sleep timer and a live waveform or TV static visual.',
    icon: AudioWaveform,
    keywords: ['white noise', 'white noise generator', 'tv static', 'static noise', 'sleep sound', 'focus', 'noise generator'],
    related: ['pomodoro-timer', 'countdown-timer', 'brown-noise-generator', 'pink-noise-generator'],
  },
  {
    slug: 'brown-noise-generator',
    name: 'Brown Noise Generator',
    category: 'effects',
    description:
      'Deep, rumbling brown noise generated live in your browser, with filters, volume, a sleep timer and a live waveform.',
    icon: Waves,
    keywords: ['brown noise', 'brown noise generator', 'brownian noise', 'red noise', 'sleep', 'focus', 'adhd'],
    related: ['pomodoro-timer', 'countdown-timer', 'white-noise-generator', 'pink-noise-generator'],
  },
  {
    slug: 'pink-noise-generator',
    name: 'Pink Noise Generator',
    category: 'effects',
    description:
      'Balanced pink noise that sounds like steady rain, with filters, volume, a sleep timer and a live waveform.',
    icon: AudioWaveform,
    keywords: ['pink noise', 'pink noise generator', 'rain sound', 'sleep', 'noise generator', 'relax'],
    related: ['pomodoro-timer', 'countdown-timer', 'brown-noise-generator', 'white-noise-generator'],
  },
  {
    slug: 'broken-screen',
    name: 'Broken Screen Prank',
    category: 'effects',
    description:
      'Tap to shatter a realistic glass screen, with spider-web cracks, glass shards and a crack sound. A harmless prank.',
    icon: Zap,
    keywords: ['broken screen', 'cracked screen', 'prank', 'shattered glass', 'effect'],
    related: ['fake-windows-10-update', 'fake-blue-screen-of-death', 'hacked-screen', 'hacker-typer'],
  },
  {
    slug: 'hacker-typer',
    name: 'Hacker Typer',
    category: 'effects',
    description:
      'Mash any key to "type" convincing code like a movie hacker, or let it auto-type at your chosen speed.',
    icon: Terminal,
    keywords: ['hacker typer', 'fake code', 'hacker screen', 'typing prank', 'terminal'],
    related: ['broken-screen', 'fake-blue-screen-of-death', 'hacked-screen', 'matrix-screensaver'],
  },
  {
    slug: 'hacked-screen',
    name: 'Hacked Screen Simulator',
    category: 'effects',
    description:
      'A fake "system breached" screen with glitching text, scrolling logs, a fake progress bar and a warning siren. A harmless prank.',
    icon: ShieldAlert,
    keywords: ['hacked screen', 'hacked screen prank', 'fake virus screen', 'hacker screen', 'system breached'],
    related: ['broken-screen', 'fake-blue-screen-of-death', 'hacker-typer', 'matrix-screensaver'],
  },
  {
    slug: 'zoom-lighting',
    name: 'Zoom Lighting',
    category: 'utilities',
    description:
      'Turn your screen into a soft key light for video calls, with color temperature in Kelvin, brightness and a frame mode.',
    icon: Lightbulb,
    keywords: ['zoom lighting', 'video call light', 'webcam light', 'fill light', 'screen light'],
    related: ['white-screen', 'ring-light', 'pink-screen', 'fake-zoom-meeting'],
  },
  {
    slug: 'ring-light',
    name: 'Ring Light Online',
    category: 'utilities',
    description:
      'A free online ring light: a glowing ring on your screen with adjustable size, thickness, brightness and color temperature.',
    icon: CircleDot,
    keywords: ['ring light', 'ring light online', 'online ring light', 'selfie light', 'webcam light'],
    related: ['white-screen', 'pink-screen', 'zoom-lighting', 'fake-zoom-meeting'],
  },
  {
    slug: 'visual-noise',
    name: 'Visual Noise',
    category: 'effects',
    description:
      'Customizable animated pixel noise in mono, color or tinted modes with adjustable grain and speed.',
    icon: Sparkles,
    keywords: ['visual noise', 'pixel noise', 'grain', 'random pixels', 'glitch'],
    related: ['white-noise-generator', 'color-cycle', 'gradient-screen', 'white-screen'],
  },
  {
    slug: 'color-cycle',
    name: 'Color Changing Screen',
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
    related: ['dvd-screensaver', 'flip-clock-screensaver', 'hacker-typer', 'motivational-quote-screensaver'],
  },
  {
    slug: 'flip-clock-screensaver',
    name: 'Flip Clock Screensaver',
    category: 'screensavers',
    description:
      'A large live flip clock with 12- or 24-hour time, optional seconds and light or dark themes.',
    icon: Clock,
    keywords: ['flip clock', 'clock', 'desk clock', 'fullscreen clock', 'time'],
    related: ['stopwatch', 'pomodoro-timer', 'countdown-timer', 'dvd-screensaver'],
  },
  {
    slug: 'dvd-screensaver',
    name: 'DVD Screensaver',
    category: 'screensavers',
    description:
      'The classic bouncing DVD logo that changes color on every bounce, with a corner-hit counter.',
    icon: Disc3,
    keywords: ['dvd', 'bouncing logo', 'screensaver', 'corner hit', 'retro'],
    related: ['flip-clock-screensaver', 'matrix-screensaver', 'no-signal-screen', 'motivational-quote-screensaver'],
  },
  {
    slug: 'motivational-quote-screensaver',
    name: 'Motivational Quote Screensaver',
    category: 'screensavers',
    description:
      'Rotating inspirational quotes in large type on calm backgrounds, with a timer, shuffle and an optional clock.',
    icon: Quote,
    keywords: ['motivational quotes', 'inspirational quotes', 'quote screensaver', 'quote of the day', 'office display'],
    related: ['pomodoro-timer', 'countdown-timer', 'flip-clock-screensaver', 'dvd-screensaver'],
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
    related: ['stopwatch', 'pomodoro-timer', 'flip-clock-screensaver', 'white-noise-generator'],
  },
  {
    slug: 'pomodoro-timer',
    name: 'Pomodoro Timer',
    category: 'utilities',
    description:
      'A fullscreen Pomodoro timer: 25-minute focus sessions, short and long breaks, a session counter and gentle alerts.',
    icon: Timer,
    keywords: ['pomodoro', 'pomodoro timer', 'focus timer', 'study timer', 'tomato timer', 'productivity'],
    related: ['stopwatch', 'countdown-timer', 'flip-clock-screensaver', 'brown-noise-generator', 'white-noise-generator'],
  },
  {
    slug: 'contrast-checker',
    name: 'Color Contrast Checker',
    category: 'utilities',
    description:
      'Check the contrast ratio between text and background colors against WCAG AA and AAA, with a passing color suggestion.',
    icon: Contrast,
    keywords: ['contrast checker', 'color contrast checker', 'wcag contrast', 'contrast ratio', 'accessibility colors'],
    related: ['screen-color-test', 'monitor-test', 'gradient-screen', 'white-screen-image'],
  },
  {
    slug: 'stopwatch',
    name: 'Online Stopwatch',
    category: 'utilities',
    description:
      'A precise fullscreen stopwatch with start, stop, reset and lap times you can review.',
    icon: Timer,
    keywords: ['stopwatch', 'lap timer', 'chronometer', 'timer', 'split times'],
    related: ['pomodoro-timer', 'countdown-timer', 'flip-clock-screensaver', 'frame-rate-test'],
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
    related: ['broken-screen', 'fake-blue-screen-of-death', 'fake-windows-11-update', 'fake-mac-update'],
  },
  {
    slug: 'fake-windows-11-update',
    name: 'Fake Windows 11 Update',
    category: 'fake-screens',
    description:
      'A simulated modern dark update screen with spinning dots and a progress percentage you control.',
    icon: Monitor,
    keywords: ['fake windows 11 update', 'windows 11', 'update prank', 'fake update'],
    related: ['broken-screen', 'fake-windows-10-update', 'fake-blue-screen-of-death', 'fake-mac-update'],
  },  {
    slug: 'fake-blue-screen-of-death',
    name: 'Fake Blue Screen of Death',
    category: 'fake-screens',
    description:
      'A realistic Windows Blue Screen of Death prank with the :( face, a rising percentage, stop codes, and Windows 10, 11, black and classic XP styles.',
    icon: Frown,
    keywords: ['fake blue screen of death', 'fake bsod', 'blue screen prank', 'windows crash screen', 'bsod simulator'],
    related: ['broken-screen', 'fake-windows-10-update', 'hacked-screen', 'blue-screen'],
  },

  {
    slug: 'fake-mac-update',
    name: 'Fake Mac Update',
    category: 'fake-screens',
    description:
      'A simulated minimalist desktop update screen with a slim progress bar and time remaining.',
    icon: Laptop,
    keywords: ['fake mac update', 'macos', 'update prank', 'fake update', 'apple'],
    related: ['broken-screen', 'fake-windows-10-update', 'fake-windows-11-update', 'fake-android-update'],
  },
  {
    slug: 'fake-android-update',
    name: 'Fake Android Update',
    category: 'fake-screens',
    description:
      'A simulated phone system update screen with installing steps and a progress you can configure.',
    icon: Smartphone,
    keywords: ['fake android update', 'phone update', 'update prank', 'system update'],
    related: ['broken-screen', 'fake-windows-10-update', 'fake-mac-update', 'fake-chrome-os-update'],
  },
  {
    slug: 'fake-windows-xp-update',
    name: 'Fake Windows XP Update',
    category: 'fake-screens',
    description:
      'A nostalgic simulation of a 2000s-era install screen with a blocky progress bar and setup messages.',
    icon: Monitor,
    keywords: ['windows xp update', 'xp', 'retro update', 'nostalgia', 'fake update'],
    related: ['fake-windows-10-update', 'fake-blue-screen-of-death', 'fake-windows-xp-boot', 'dvd-screensaver'],
  },
  {
    slug: 'fake-windows-xp-boot',
    name: 'Fake Windows XP Boot',
    category: 'fake-screens',
    description:
      'A retro boot screen simulation with the iconic sliding progress blocks on a black background.',
    icon: Loader,
    keywords: ['windows xp boot', 'boot screen', 'startup screen', 'retro', 'nostalgia'],
    related: ['fake-windows-10-update', 'fake-blue-screen-of-death', 'fake-windows-xp-update', 'no-signal-screen'],
  },
  {
    slug: 'fake-chrome-os-update',
    name: 'Fake Chrome OS Update',
    category: 'fake-screens',
    description:
      'A simulated light, friendly laptop update screen with a progress bar and changing status steps.',
    icon: Laptop,
    keywords: ['chrome os update', 'chromebook update', 'fake update', 'update prank'],
    related: ['broken-screen', 'fake-windows-10-update', 'fake-android-update', 'fake-mac-update'],
  },
  {
    slug: 'fake-ubuntu-update',
    name: 'Fake Ubuntu Update',
    category: 'fake-screens',
    description:
      'A simulated Linux terminal upgrade that prints package logs and a text progress bar.',
    icon: Terminal,
    keywords: ['ubuntu update', 'linux update', 'apt upgrade', 'terminal', 'fake update'],
    related: ['fake-windows-10-update', 'hacker-typer', 'matrix-screensaver', 'fake-chrome-os-update'],
  },
  {
    slug: 'fake-zoom-meeting',
    name: 'Fake Zoom Meeting Screen',
    category: 'fake-screens',
    description:
      'A gallery-view meeting simulation in a dark theme with a toolbar, timer, webcam preview and active-speaker outline.',
    icon: Users,
    keywords: ['fake zoom meeting', 'fake zoom call', 'zoom meeting screen', 'gallery view', 'film prop', 'meeting simulation'],
    related: ['ring-light', 'fake-teams-meeting', 'fake-google-meet', 'zoom-lighting'],
  },
  {
    slug: 'fake-teams-meeting',
    name: 'Fake Teams Meeting Screen',
    category: 'fake-screens',
    description:
      'A Teams-style meeting simulation with a dark stage, participant tiles, a top control bar with a Leave button and a running meeting timer.',
    icon: Users,
    keywords: ['fake teams meeting', 'fake teams call', 'teams meeting screen', 'microsoft teams', 'film prop', 'meeting simulation'],
    related: ['ring-light', 'fake-zoom-meeting', 'fake-google-meet', 'fake-slack-huddle'],
  },
  {
    slug: 'fake-google-meet',
    name: 'Fake Google Meet Screen',
    category: 'fake-screens',
    description:
      'A Google Meet-style meeting simulation with rounded participant tiles, initial avatars, a blue speaking outline and round call controls.',
    icon: Users,
    keywords: ['fake google meet', 'google meet screen', 'fake meet call', 'meeting screen', 'film prop', 'meeting simulation'],
    related: ['ring-light', 'fake-zoom-meeting', 'fake-teams-meeting', 'fake-slack-huddle'],
  },
  {
    slug: 'fake-slack-huddle',
    name: 'Fake Slack Huddle',
    category: 'fake-screens',
    description:
      'A compact audio huddle simulation with Slack-styled avatars, live speaking rings and an active huddle timer.',
    icon: MessagesSquare,
    keywords: ['fake slack huddle', 'huddle', 'audio call', 'film prop', 'call simulation'],
    related: ['countdown-timer', 'fake-zoom-meeting', 'fake-teams-meeting', 'fake-google-meet'],
  },
  {
    slug: 'fake-radar-screen',
    name: 'Fake Radar Screen',
    category: 'fake-screens',
    description:
      'A fullscreen sci-fi radar with a rotating sweep, fading blips, range rings and live coordinates. Pure simulation.',
    icon: Radar,
    keywords: ['fake radar', 'radar screen', 'radar sweep', 'sonar screen', 'sci-fi display'],
    related: ['broken-screen', 'hacked-screen', 'hacker-typer', 'matrix-screensaver'],
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

/** The tools of a category. Solid color screens aren't included: they are listed as their own group. */
export function getToolsByCategory(category: ToolCategoryId) {
  return TOOLS.filter((tool) => tool.category === category && !tool.swatch)
}

export function getColorScreens() {
  return TOOLS.filter((tool) => tool.swatch)
}

export function toolPath(slug: string) {
  // The white screen lives on the homepage.
  return slug === 'white-screen' ? '/' : `/${slug}`
}
