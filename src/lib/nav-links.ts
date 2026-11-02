/**
 * Small link lists for the site menus. They live here rather than in the big content modules so
 * the header, which loads on every page, doesn't pull in every guide, background and problem.
 * scripts/prerender.mjs checks PROBLEM_NAV_LINKS against SCREEN_PROBLEMS at build time.
 */
import type { BackgroundCategory } from './backgrounds-data'

export const HEADER_GUIDES = [
  { label: 'Dead Pixel Test', slug: 'dead-pixel-test', path: '/guides/dead-pixel-test/' },
  { label: 'Screen Color Test', slug: 'screen-color-test', path: '/guides/screen-color-test/' },
  { label: 'Screen Uniformity', slug: 'screen-uniformity-test', path: '/guides/screen-uniformity-test/' },
  { label: 'Clean Laptop Screen', slug: 'clean-laptop-screen', path: '/guides/clean-laptop-screen/' },
  { label: 'OLED Burn-In', slug: 'oled-burn-in-prevention', path: '/guides/oled-burn-in-prevention/' },
  { label: 'Monitor Test', slug: 'monitor-test', path: '/guides/monitor-test/' },
] as const

export const BACKGROUND_CATEGORIES: { id: BackgroundCategory | 'all'; label: string; description: string }[] = [
  { id: 'all', label: 'All Backgrounds', description: 'Browse our complete library of solid, gradient, and studio screen backgrounds.' },
  { id: 'solid', label: 'Solid Colors', description: 'Pure uncompressed color screens for display testing, tracing, video lighting, and clean wallpapers.' },
  { id: 'gradient', label: 'Gradients', description: 'Smooth multi-stop aesthetic gradients to evaluate display color banding and elevate creative desktops.' },
  { id: 'video-call', label: 'Video Call', description: 'Professional neutral and blurred virtual backgrounds designed for Zoom, Google Meet, and Microsoft Teams.' },
  { id: 'dark-oled', label: 'Dark & OLED', description: 'True 0% pitch black and near-black carbon shades that save battery and deliver infinite contrast on OLED panels.' },
  { id: 'minimal', label: 'Aesthetic & Minimal', description: 'Earthy, pastel, and low-contrast palettes designed to reduce eye strain during prolonged writing and reading.' },
  { id: 'neon', label: 'Neon & Glow', description: 'Vibrant cyberpunk luminescent backgrounds engineered to evaluate monitor response time, motion ghosting, and HDR pop.' },
]

export const PROBLEM_NAV_LINKS: readonly { slug: string; shortLabel: string }[] = [
  { slug: 'stuck-pixel', shortLabel: 'Stuck Pixel' },
  { slug: 'hot-pixel', shortLabel: 'Hot Pixel' },
  { slug: 'backlight-bleed', shortLabel: 'Backlight Bleed' },
  { slug: 'ips-glow', shortLabel: 'IPS Glow' },
  { slug: 'screen-burn-in', shortLabel: 'Screen Burn-In' },
  { slug: 'image-retention', shortLabel: 'Image Retention' },
  { slug: 'screen-flickering', shortLabel: 'Screen Flickering' },
  { slug: 'screen-tearing', shortLabel: 'Screen Tearing' },
  { slug: 'ghosting', shortLabel: 'Ghosting' },
  { slug: 'color-banding', shortLabel: 'Color Banding' },
  { slug: 'yellow-tint-on-screen', shortLabel: 'Yellow Tint' },
]
