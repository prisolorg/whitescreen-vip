import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Purple Background page (English). Grouped by intent, in order of demand:
 * purple background / background purple / purple backgrounds / purple bg / purple colour background / purple + misspellings
 * (~131K) → violet background / violet bg / violet colour background + shades of purple, light, dark, bright, solid (~8.7K) →
 * purple background design / cool purple background (~1.9K) → purple background hd / images / free / png, story, thumbnail
 * (~1.3K). "purple and white background" (~280) is covered by the white-text tip.
 * No brand names. Facts match the background tool: Fullscreen button, double-tap, F and Esc; Shade menu from
 * src/lib/background-shades.ts; Download PNG menu with 1080p, 2K, 4K, Phone 1080×2400 and a custom size up to 8192 px;
 * Copy CSS copies the chosen shade.
 */
export function PurpleBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: purple background / background purple / purple backgrounds / purple bg / purple colour background / purple + misspellings (~131K) */}
      <Section wide id="how-heading" title="Purple Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with purple', 'Press Fullscreen, double-tap the preview or press F (Esc exits)'],
            ['Pick a shade of purple', 'Choose one in the Shade menu, such as Violet, Royal Purple or Lavender'],
            ['Save it as an image file', 'Press Download PNG, then pick a size'],
            ['Make a web page background purple', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          The preview, download and CSS all follow the shade you pick. Each PNG is a plain purple bg in one solid color, with no
          watermark and no sign-up. White text reads clearly on the darker shades; use dark text on Lilac, Mauve or Lavender.
        </p>
      </Section>

      {/* Cluster: violet background / violet bg / violet colour background / shades of purple / light, dark, bright, solid purple background (~8.7K) */}
      <Section wide id="shades-heading" title="Violet, Light and Dark Purple Background Shades">
        <Table
          caption="Purple shades in the Shade menu"
          head={['Shade', 'Hex', 'Looks']}
          rows={[
            ['Purple (default)', '#7C3AED', 'Rich and bright'],
            ['Violet', '#8F00FF', 'Vivid, the brightest purple'],
            ['Royal Purple', '#7851A9', 'Muted and classic'],
            ['Indigo', '#4B0082', 'Very dark, close to blue'],
            ['Plum / Eggplant', '#8E4585 / #614051', 'Dark and warm'],
            ['Lilac / Mauve / Lavender', '#C8A2C8 / #E0B0FF / #E6E6FA', 'Light and soft'],
          ]}
        />
        <p className={p}>
          Want a violet background? Pick Violet. For a dark purple background, pick Indigo or Eggplant; for a light one, Lavender.
        </p>
      </Section>

      {/* Cluster: purple background design / cool purple background / purple design background / cool backgrounds purple (~1.9K) */}
      <Section wide id="design-heading" title="Cool Purple Background Designs">
        <ul className={ul}>
          <li>For a cool purple background in one color, pick Indigo or Violet and add bright text or shapes on top.</li>
          <li>
            For purple that fades into pink, pick the Purple Haze style on the{' '}
            <Link href="/backgrounds/gradient-background" className={link}>gradient background</Link>.
          </li>
          <li>
            For glowing lines on black, pick Blue &amp; Purple on the{' '}
            <Link href="/backgrounds/neon-background" className={link}>neon background</Link>.
          </li>
        </ul>
      </Section>

      {/* Cluster: purple background hd / purple background images / free purple background / png / story / thumbnail (~1.3K) */}
      <Section wide id="images-heading" title="Purple Background HD Images, Free">
        <p className={p}>
          Every purple background downloads free as a lossless PNG: 1080p HD, 2K, 4K, Phone (1080 × 2400) for wallpapers and stories, or a
          custom size up to 8192 × 8192 for thumbnails and banners. Need purple light instead of an image? Use the{' '}
          <Link href="/purple-screen" className={link}>Purple Screen</Link>.
        </p>
      </Section>
    </div>
  )
}
