import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Neon Background page (English). Grouped by intent, in order of demand:
 * neon background / background neon / neon backgrounds / neon bg / neon background png + misspellings (~17.3K) →
 * neon light background / neon lights background / neon instagram background hd led ring light background (~600) →
 * neon color background / colorful / cool / aesthetic neon background (~90, plus the Style menu the page must name).
 * Indonesian terms (keren, gambar) are left out; no brand names. Facts match the background tool: Fullscreen button,
 * double-tap, F and Esc; Style menu from src/lib/background-shades.ts (neon is a gradient); Download PNG menu with 1080p,
 * 2K, 4K, Phone 1080×2400 and a custom size up to 8192 px; Copy CSS copies the chosen style.
 */
export function NeonBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: neon background / background neon / neon backgrounds / neon bg / neon background png + misspellings (~17.3K) */}
      <Section wide id="how-heading" title="Neon Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with neon glow', 'Press Fullscreen, double-tap the preview or press F (Esc exits)'],
            ['Pick neon colors', 'Choose a pair in the Style menu, such as Blue & Purple or Lime & Magenta'],
            ['Save it as an image file', 'Press Download PNG: 1080p, 2K, 4K, Phone (1080 × 2400) or a custom size'],
            ['Make a web page background neon', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          Each neon background is two glowing color clouds on a near-black base, so it looks like neon tubes lighting up a dark room. The
          preview, download and CSS all follow the style you pick. Every neon bg is a free, lossless PNG with no watermark. Keep text and
          icons over the darker areas, where they stay easy to read.
        </p>
      </Section>

      {/* Cluster: neon light background / neon lights background / neon instagram background hd led ring light background (~600) */}
      <Section wide id="light-heading" title="Neon Background Light for Rooms, Streams and Stories">
        <ul className={ul}>
          <li>Show the neon background full screen on a TV or monitor in a dark room for a neon light background behind a desk, stream or party.</li>
          <li>For an Instagram story or phone wallpaper, download the Phone (1080 × 2400) size; it is sharp on HD phone screens.</li>
          <li>
            Want a round glow on your face instead? The <Link href="/ring-light" className={link}>Ring Light Online</Link> turns your
            screen into a white, pink, blue or purple ring light.
          </li>
        </ul>
      </Section>

      {/* Cluster: neon color background / colorful neon background / cool / aesthetic neon backgrounds (~90) */}
      <Section wide id="colors-heading" title="Neon Background Colors">
        <Table
          caption="Neon styles in the Style menu"
          head={['Style', 'Glow colors', 'Vibe']}
          rows={[
            ['Cyan & Pink (default)', 'Electric cyan, hot pink', 'Classic retro-future'],
            ['Blue & Purple', 'Bright blue, violet', 'Cool night city'],
            ['Lime & Magenta', 'Acid green, magenta', 'Loud and playful'],
            ['Orange & Blue', 'Orange, sky blue', 'Warm sunset glow'],
            ['Red & Aqua', 'Red, aqua', 'Bold and dramatic'],
          ]}
        />
        <p className={p}>
          All five neon backgrounds share the same near-black base. For one calm color instead of a colorful neon background, try the{' '}
          <Link href="/backgrounds/purple-background" className={link}>purple background</Link> or the{' '}
          <Link href="/backgrounds/black-background" className={link}>black background</Link>.
        </p>
      </Section>
    </div>
  )
}
