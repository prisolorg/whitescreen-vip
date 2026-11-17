import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Orange Background page (English). Grouped by intent, in order of demand:
 * orange background / background orange / orange backgrounds + misspellings (~29K) → orange background images (~0.2K) →
 * cool orange background (~0.2K, answered with the Shade menu and the Fire gradient).
 * Facts match the background tool: Fullscreen button, double-tap, F and Esc; Download PNG menu with 1080p, 2K, 4K, Phone
 * 1080×2400 and a custom size up to 8192 px; Copy CSS copies the chosen shade. Shades: src/lib/background-shades.ts.
 */
export function OrangeBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: orange background / background orange / orange backgrounds / orange backround + misspellings (~29K) */}
      <Section wide id="how-heading" title="Orange Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with orange', 'Press Fullscreen, double-tap the preview or press F'],
            ['Pick a shade of orange', 'Choose one in the Shade menu, such as Tangerine or Burnt Orange'],
            ['Save it as an image file', 'Press Download PNG, then pick a size'],
            ['Use orange in a web page or app', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          The preview, download and CSS all use the shade you pick. Each orange background PNG is solid color, with no watermark and no sign-up.
        </p>
      </Section>

      {/* Cluster: orange background images (~0.2K) */}
      <Section wide id="images-heading" title="Orange Background Images: HD, 4K and Phone Sizes">
        <p className={p}>Save orange backgrounds in any of these sizes:</p>
        <ul className={ul}>
          <li>1080p (1920 × 1080) and 2K (2560 × 1440) for slides, videos and most monitors.</li>
          <li>4K (3840 × 2160) for TVs and video editing.</li>
          <li>Phone (1080 × 2400) for a lock or home screen wallpaper.</li>
          <li>A custom size up to 8192 × 8192 for posts, stories or banners.</li>
        </ul>
      </Section>

      {/* Cluster: cool orange background / cool orange backgrounds / orange cool background (~0.2K) */}
      <Section wide id="cool-heading" title="Cool Orange Background: Shades From Peach to Burnt Orange">
        <Table
          caption="Orange shades in the Shade menu"
          head={['Shade', 'Hex', 'Looks']}
          rows={[
            ['Orange (default)', '#FF7A00', 'Bright and bold'],
            ['Tangerine', '#F28500', 'Warm, slightly golden'],
            ['Coral', '#FF7F50', 'Soft and pinkish'],
            ['Burnt Orange', '#CC5500', 'Deep and earthy'],
            ['Peach', '#FFE5B4', 'Pale and calm'],
          ]}
        />
        <p className={p}>
          Want an orange background that blends into red and gold? Pick the Fire style on the{' '}
          <Link href="/backgrounds/gradient-background" className={link}>gradient background</Link>.
        </p>
      </Section>
    </div>
  )
}
