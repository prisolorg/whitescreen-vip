import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Red Background page (English). Grouped by intent, in order of demand:
 * red background / red backgrounds / background red / red color background + misspellings (~146K) → red background
 * images / photo (~1.7K) → cool red background (~1K, answered with the Shade menu and the Fire gradient).
 * Indonesian terms (wallpaper merah, merah putih) are left to the Indonesian page.
 * Facts match the background tool: Fullscreen button, double-tap, F and Esc; Download PNG menu with 1080p, 2K, 4K, Phone
 * 1080×2400 and a custom size up to 8192 px; Copy CSS copies the chosen shade. Shades: src/lib/background-shades.ts.
 */
export function RedBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: red background / red backgrounds / background red / red color background / all red background + misspellings (~146K) */}
      <Section wide id="how-heading" title="Red Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with red', 'Press Fullscreen, double-tap the preview or press F'],
            ['Pick a shade of red', 'Choose one in the Shade menu, such as Crimson, Scarlet or Burgundy'],
            ['Save it as an image file', 'Press Download PNG, then pick a size'],
            ['Make a web page background red', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          The preview, download and CSS all use the shade you pick. Each red background PNG is solid color, with no watermark and
          no sign-up.
        </p>
      </Section>

      {/* Cluster: red background images / red photo background (~1.7K) */}
      <Section wide id="images-heading" title="Red Background Images: HD, 4K and Phone Sizes">
        <p className={p}>Save red backgrounds in any of these sizes:</p>
        <ul className={ul}>
          <li>1080p (1920 × 1080) and 2K (2560 × 1440) for slides, videos and most monitors.</li>
          <li>4K (3840 × 2160) for TVs and video editing.</li>
          <li>Phone (1080 × 2400) for a lock or home screen wallpaper.</li>
          <li>A custom size up to 8192 × 8192 for posts, banners or a photo backdrop.</li>
        </ul>
      </Section>

      {/* Cluster: cool red background / cool red backgrounds / red cool background / light red backgrounds (~1K) */}
      <Section wide id="cool-heading" title="Cool Red Background: Shades From Scarlet to Burgundy">
        <Table
          caption="Red shades in the Shade menu"
          head={['Shade', 'Hex', 'Looks']}
          rows={[
            ['Red (default)', '#DC2626', 'Strong and clean'],
            ['Pure Red', '#FF0000', 'The brightest red a screen shows'],
            ['Scarlet', '#FF2400', 'Bright, slightly orange'],
            ['Crimson', '#DC143C', 'Rich, slightly pink'],
            ['Burgundy', '#800020', 'Dark and deep'],
          ]}
        />
        <p className={p}>
          Want a red background that blends into orange and gold? Pick the Fire style on the{' '}
          <Link href="/backgrounds/gradient-background" className={link}>gradient background</Link>.
        </p>
      </Section>
    </div>
  )
}
