import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Aesthetic Background page (English). Grouped by intent, in order of demand:
 * aesthetic background / background aesthetic / aesthetic bg / backgrounds aesthetic / esthetic background + misspellings
 * (~15.5K) → background design aesthetic / aesthetically pleasing background(s) / pretty background aesthetic (~13.1K) →
 * aesthetic website background / aesthetic background portrait / for essay (~50).
 * H1 stays "Aesthetic Background": its cluster (~15.5K) beats the single phrase "background design aesthetic" (13K).
 * No brand names. Facts match the background tool: Fullscreen button, double-tap, F and Esc; Style menu from
 * src/lib/background-shades.ts (aesthetic is a gradient); Download PNG menu with 1080p, 2K, 4K, Phone 1080×2400 and a
 * custom size up to 8192 px; Copy CSS copies the chosen style's gradient.
 */
export function AestheticBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: aesthetic background / background aesthetic / aesthetic bg / backgrounds aesthetic / esthetic background + misspellings (~15.5K) */}
      <Section wide id="how-heading" title="Aesthetic Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with it', 'Press Fullscreen, double-tap the preview or press F (Esc exits)'],
            ['Pick a color mood', 'Choose one in the Style menu, such as Lavender Haze or Sage Calm'],
            ['Save it as an image file', 'Press Download PNG: 1080p, 2K, 4K, Phone (1080 × 2400) or a custom size'],
            ['Use it on a web page', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          An aesthetic background is a soft, calm image with gentle colors and no busy detail, so whatever you put on top stands out.
          Each one here is a smooth diagonal blend of three light colors. The preview, download and CSS all follow the style you pick,
          and every aesthetic bg is a free, lossless PNG with no watermark.
        </p>
      </Section>

      {/* Cluster: background design aesthetic / aesthetically pleasing backgrounds / pretty background aesthetic (~13.1K) */}
      <Section wide id="design-heading" title="Aesthetic Background Design Ideas">
        <Table
          caption="Styles in the Style menu"
          head={['Style', 'Colors', 'Great for']}
          rows={[
            ['Peach Dream (default)', 'Peach, rose pink, periwinkle', 'Phone wallpapers, stories'],
            ['Lavender Haze', 'Lavender, lilac, sky blue', 'Dreamy, calm designs'],
            ['Cotton Candy', 'Pink, blush, baby blue', 'Cute and playful posts'],
            ['Sunset Blush', 'Peach, pale orchid, pink', 'Warm, romantic looks'],
            ['Sage Calm', 'Sage, soft green, mint', 'Minimal, natural designs'],
            ['Vintage Rose', 'Dusty rose, blush, taupe', 'Muted, retro mood boards'],
          ]}
        />
        <ul className={ul}>
          <li>Use dark gray, navy or deep plum text on an aesthetic background. White text is hard to read on these light colors.</li>
          <li>Leave empty space around your words; the plain blend is what makes an aesthetic background design look aesthetically pleasing.</li>
          <li>
            For paler colors, try the <Link href="/backgrounds/pastel-background" className={link}>pastel background</Link>; for bolder
            ones, the <Link href="/backgrounds/gradient-background" className={link}>gradient background</Link>.
          </li>
        </ul>
      </Section>

      {/* Cluster: aesthetic website background / aesthetic background portrait / aesthetic background for essay (~50) */}
      <Section wide id="uses-heading" title="Aesthetic Background for Phone, Website or Essay">
        <p className={p}>
          For a portrait phone screen, download the aesthetic background in Phone size. For a website, Copy CSS gives you the gradient as code. For an essay title
          page or slide, download 1080p or 4K and place the PNG behind your text.
        </p>
      </Section>
    </div>
  )
}
