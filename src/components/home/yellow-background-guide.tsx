import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Yellow Background page (English). Grouped by intent, in order of demand:
 * yellow background / background yellow / yellow colour background / yellow bg / plain yellow + misspellings (~224K) →
 * yellow background hd, images, png (~22K) → light yellow background, soft, pale (~17K) → yellow background design,
 * yellow and white, golden, dark, deep yellow (~6K).
 * Indonesian and Hindi terms (background kuning, pila) are left out.
 * Facts match the background tool: Fullscreen button, double-tap, F and Esc; Download PNG menu with 1080p, 2K, 4K, Phone
 * 1080×2400 and a custom size up to 8192 px; Copy CSS copies the chosen shade. Shades: src/lib/background-shades.ts.
 */
export function YellowBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: yellow background / background yellow / yellow colour background / yellow bg / plain yellow + misspellings (~224K) */}
      <Section wide id="how-heading" title="Yellow Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with yellow', 'Press Fullscreen, double-tap the preview or press F'],
            ['Pick a shade of yellow', 'Choose one in the Shade menu, such as Lemon, Gold or Light Yellow'],
            ['Save it as an image file', 'Press Download PNG, then pick a size'],
            ['Make a web page background yellow', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          The preview, download and CSS all use the shade you pick. Each PNG is a plain yellow bg in one solid color, with no
          watermark and no sign-up.
        </p>
      </Section>

      {/* Cluster: yellow background hd / yellow background images / yellow png / hd images (~22K) */}
      <Section wide id="images-heading" title="Yellow Background HD Images: 1080p, 4K and Phone Sizes">
        <p className={p}>Save yellow backgrounds as lossless PNGs with clean, even color:</p>
        <ul className={ul}>
          <li>1080p HD (1920 × 1080) and 2K (2560 × 1440) for slides, thumbnails and videos.</li>
          <li>4K (3840 × 2160) for TVs and video editing.</li>
          <li>Phone (1080 × 2400) for a lock or home screen wallpaper.</li>
          <li>A custom size up to 8192 × 8192 for banners, posts or a photo editing backdrop.</li>
        </ul>
      </Section>

      {/* Cluster: light yellow background / light yellow background hd / soft, pale yellow (~17K) */}
      <Section wide id="light-heading" title="Light Yellow Background: Soft and Pale Shades">
        <p className={p}>
          For a light yellow background, open the Shade menu and pick Light Yellow (#FFFFE0), the palest, or Pastel Yellow
          (#FDFD96), a soft butter tone. Both are gentle enough to put dark text on.
        </p>
      </Section>

      {/* Cluster: yellow background design / yellow and white background / golden, dark, deep yellow background (~6K) */}
      <Section wide id="design-heading" title="Yellow Background Design: Golden, Bright and Mixed Looks">
        <Table
          caption="Yellow shades in the Shade menu"
          head={['Shade', 'Hex', 'Looks']}
          rows={[
            ['Yellow (default)', '#FACC15', 'Warm and sunny'],
            ['Pure Yellow', '#FFFF00', 'The brightest yellow a screen shows'],
            ['Lemon', '#FFF700', 'Fresh and zesty'],
            ['Gold', '#FFD700', 'Golden and rich'],
            ['Amber', '#FFBF00', 'Deeper, close to orange'],
          ]}
        />
        <p className={p}>
          Want a yellow background with white or other soft colors mixed in? Pick the Lemon Mint style on the{' '}
          <Link href="/backgrounds/pastel-background" className={link}>pastel background</Link>.
        </p>
      </Section>
    </div>
  )
}
