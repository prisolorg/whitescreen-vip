/**
 * Build-time PNGs: a 1200×630 social preview card for every English page (shared by its
 * translations) and a plain 1920×1080 image of each screen color for Google Images.
 * Text is drawn with the bundled Inter font, so output is the same on every build machine.
 */
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { Resvg } from '@resvg/resvg-js'

const FONT_DIR = path.join(process.cwd(), 'scripts/fonts')
const FONT_FILES = [path.join(FONT_DIR, 'Inter-Bold.ttf'), path.join(FONT_DIR, 'Inter-Medium.ttf')]

const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Greedy word wrap by an average glyph width (Inter is close to 0.56 em per character). */
function wrap(text: string, fontSize: number, maxWidth: number, maxLines: number): string[] {
  const perLine = Math.floor(maxWidth / (fontSize * 0.56))
  const lines: string[] = []
  let line = ''
  for (const word of text.split(/\s+/)) {
    if ((line ? `${line} ${word}` : word).length > perLine && line) {
      lines.push(line)
      line = word
    } else line = line ? `${line} ${word}` : word
  }
  if (line) lines.push(line)
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines)
    kept[maxLines - 1] = `${kept[maxLines - 1].replace(/[,.;:–-]?\s*\S*$/, '')}…`
    return kept
  }
  return lines
}

const render = (svg: string, width: number) =>
  new Resvg(svg, { fitTo: { mode: 'width', value: width }, font: { fontFiles: FONT_FILES, loadSystemFonts: false, defaultFontFamily: 'Inter' } }).render().asPng()

export type OgCard = { title: string; subtitle?: string; eyebrow: string; swatch?: string }

/** Relative luminance check, to pick dark or light text on a color swatch. */
const isLight = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
  return 0.299 * r + 0.587 * g + 0.114 * b > 150
}

export function ogCardPng({ title, subtitle, eyebrow, swatch }: OgCard): Buffer {
  const titleSize = title.length > 48 ? 58 : title.length > 28 ? 68 : 84
  const titleLines = wrap(title, titleSize, swatch ? 640 : 1040, 3)
  const subLines = subtitle ? wrap(subtitle, 34, swatch ? 640 : 1000, 2) : []
  let y = 200
  const titleSvg = titleLines
    .map((line) => {
      const out = `<text x="80" y="${y}" font-size="${titleSize}" font-weight="700" fill="#111318">${escape(line)}</text>`
      y += titleSize * 1.12
      return out
    })
    .join('')
  y += 20
  const subSvg = subLines
    .map((line) => {
      const out = `<text x="80" y="${y}" font-size="34" font-weight="500" fill="#4a4f5a">${escape(line)}</text>`
      y += 46
      return out
    })
    .join('')
  const swatchSvg = swatch
    ? `<rect x="800" y="95" width="320" height="400" rx="28" fill="${swatch}" stroke="#d8dbe2" stroke-width="2"/>
       <text x="960" y="460" font-size="30" font-weight="700" text-anchor="middle" fill="${isLight(swatch) ? '#111318' : '#ffffff'}">${swatch}</text>`
    : ''
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" font-family="Inter">
    <rect width="1200" height="630" fill="#ffffff"/>
    <rect width="1200" height="12" fill="#111318"/>
    <text x="80" y="110" font-size="26" font-weight="700" fill="#6b7280" letter-spacing="3">${escape(eyebrow.toUpperCase())}</text>
    ${titleSvg}${subSvg}${swatchSvg}
    <rect x="80" y="528" width="44" height="44" rx="10" fill="#ffffff" stroke="#111318" stroke-width="3"/>
    <text x="140" y="561" font-size="30" font-weight="700" fill="#111318">WhiteScreen.vip</text>
    <text x="1120" y="561" font-size="24" font-weight="500" fill="#6b7280" text-anchor="end">Free · No sign-up · Any device</text>
  </svg>`
  return render(svg, 1200)
}

/** A solid 1920×1080 image of one color. */
export function solidColorPng(hex: string): Buffer {
  return render(`<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080"><rect width="1920" height="1080" fill="${hex}"/></svg>`, 1920)
}
