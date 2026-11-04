export type ScreenColor = {
  id: string
  name: string
  hex: string
  path: string
}

export const SCREEN_COLORS: readonly ScreenColor[] = [
  // White is the homepage; /white-screen/ redirects there.
  { id: 'white', name: 'White', hex: '#FFFFFF', path: '/' },
  { id: 'black', name: 'Black', hex: '#000000', path: '/black-screen' },
  { id: 'red', name: 'Red', hex: '#FF0000', path: '/red-screen' },
  { id: 'green', name: 'Green', hex: '#00FF00', path: '/green-screen' },
  { id: 'blue', name: 'Blue', hex: '#0000FF', path: '/blue-screen' },
  { id: 'yellow', name: 'Yellow', hex: '#FFFF00', path: '/yellow-screen' },
  { id: 'gray', name: 'Gray', hex: '#808080', path: '/gray-screen' },
  { id: 'orange', name: 'Orange', hex: '#FF8000', path: '/orange-screen' },
  { id: 'pink', name: 'Pink', hex: '#FF69B4', path: '/pink-screen' },
  { id: 'purple', name: 'Purple', hex: '#8000FF', path: '/purple-screen' },
  { id: 'cyan', name: 'Cyan', hex: '#00FFFF', path: '/cyan-screen' },
  { id: 'magenta', name: 'Magenta', hex: '#FF00FF', path: '/magenta-screen' },
]

export function getColorBySlug(slug: string) {
  return SCREEN_COLORS.find((color) => color.path === `/${slug}`)
}

const HEX_PATTERN = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i

export function normalizeHex(value: string): string | null {
  const match = value.trim().match(HEX_PATTERN)
  if (!match) return null
  let hex = match[1]
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }
  return `#${hex.toUpperCase()}`
}

/** True when white text would fall below 3:1 contrast (the WCAG minimum for large text), so text on this color should be dark. */
export function isLightColor(hex: string): boolean {
  const value = normalizeHex(hex) ?? '#FFFFFF'
  const [r, g, b] = [1, 3, 5].map((start) => {
    const channel = parseInt(value.slice(start, start + 2), 16) / 255
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.3
}
