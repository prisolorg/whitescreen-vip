import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Beige Background page (English). Grouped by intent, in order of demand:
 * beige background / background beige / beige backgrounds / beige bg / beige png + misspellings (~21.8K) →
 * beige color background / background beige color / light beige / cream beige / aesthetic beige background (~1.1K) →
 * plain beige background / beige plain background / plain beige / solid beige / beige and white or black (~330).
 * Arabic, Finnish and French terms are left out; no brand names. Facts match the background tool: Fullscreen button,
 * double-tap, F and Esc; Shade menu from src/lib/background-shades.ts; Download PNG menu with 1080p, 2K, 4K,
 * Phone 1080×2400 and a custom size up to 8192 px; Copy CSS copies the chosen shade.
 */
export function BeigeBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: beige background / background beige / beige backgrounds / beige bg / beige png + misspellings (~21.8K) */}
      <Section wide id="how-heading" title="Beige Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with beige', 'Press Fullscreen, double-tap the preview or press F (Esc exits)'],
            ['Pick a shade of beige', 'Choose one in the Shade menu, such as Cream, Champagne or Tan'],
            ['Save it as an image file', 'Press Download PNG: 1080p, 2K, 4K, Phone (1080 × 2400) or a custom size'],
            ['Make a web page background beige', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          The preview, download and CSS all follow the shade you pick. Each beige background is one flat color, saved as a free, lossless
          PNG with no watermark. Its warm, paper-like tone feels softer than pure white, which makes a beige bg a calm base for reading,
          wallpapers and designs.
        </p>
      </Section>

      {/* Cluster: beige color background / background beige color / light beige background / cream beige / aesthetic beige background (~1.1K) */}
      <Section wide id="shades-heading" title="Beige Background Colors: Light, Cream and Tan">
        <Table
          caption="Beige shades in the Shade menu"
          head={['Shade', 'Hex', 'Looks']}
          rows={[
            ['Beige (default)', '#EADBC8', 'Warm sand, like paper'],
            ['Classic Beige', '#F5F5DC', 'Very light, slightly green'],
            ['Champagne / Almond', '#F7E7CE / #EFDECD', 'Light beige, soft and warm'],
            ['Cream', '#FFFDD0', 'Pale and buttery'],
            ['Tan', '#D2B48C', 'Deeper, light brown'],
            ['Khaki / Sand', '#C3B091 / #C2B280', 'Earthy and muted'],
          ]}
        />
        <p className={p}>
          Every beige color background here is one flat shade. For a light beige background, pick Champagne or Cream. For an aesthetic beige background, Almond and Tan pair well with dark
          brown text and simple line art; for a soft blend of colors, see the{' '}
          <Link href="/backgrounds/aesthetic-background" className={link}>aesthetic background</Link>.
        </p>
      </Section>

      {/* Cluster: plain beige background / beige plain background / plain beige / solid beige / beige and white or black background (~330) */}
      <Section wide id="plain-heading" title="Plain Beige Background Uses">
        <ul className={ul}>
          <li>Reading and writing: a plain beige background behind a document can feel gentler than bright white.</li>
          <li>Text on top: black, charcoal and dark brown read clearly; white text is hard to see.</li>
          <li>Design base: solid beige suits invitations, menus, quotes and minimalist wallpapers.</li>
        </ul>
        <p className={p}>
          Need a crisper neutral? Use the <Link href="/backgrounds/white-background" className={link}>white background</Link>, or the{' '}
          <Link href="/" className={link}>White Screen</Link> for bright white light.
        </p>
      </Section>
    </div>
  )
}
