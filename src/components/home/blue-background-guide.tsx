import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Blue Background page (English). Grouped by intent, in order of demand:
 * blue background / background blue / blue bg / blue color background / blue backgrounds + misspellings (~530K) →
 * blue background images, HD, photo, pic, wallpaper (~22K) → blue background design, cool blue background, shades of blue,
 * simple / pure / bright blue (~9K, answered with the Shade menu and gradient styles).
 * Indonesian terms (background biru, biru polos) are left to the Indonesian page.
 * Facts match the background tool: Fullscreen button, double-tap, F and Esc; Download PNG menu with 1080p, 2K, 4K, Phone
 * 1080×2400 and a custom size up to 8192 px; Copy CSS copies the chosen shade. Shades: src/lib/background-shades.ts.
 */
export function BlueBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: blue background / background blue / blue bg / blue colour background / blue backgrounds + misspellings (~530K) */}
      <Section wide id="how-heading" title="Blue Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with blue', 'Press Fullscreen, double-tap the preview or press F'],
            ['Pick a shade of blue', 'Choose one in the Shade menu, such as Navy, Royal Blue or Sky Blue'],
            ['Save it as an image file', 'Press Download PNG, then pick a size'],
            ['Make a web page background blue', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          The preview, download and CSS all use the shade you pick. Each PNG is a plain blue bg in solid color, with no watermark
          and no sign-up.
        </p>
      </Section>

      {/* Cluster: blue background images / blue photo / blue pic / blue background hd / wallpaper blue background (~22K) */}
      <Section wide id="images-heading" title="Blue Background Images: HD, 4K and Phone Sizes">
        <p className={p}>Save a blue background image in any of these sizes:</p>
        <ul className={ul}>
          <li>1080p HD (1920 × 1080) and 2K (2560 × 1440) for slides, videos and most monitors.</li>
          <li>4K (3840 × 2160) for TVs, video editing and high resolution prints.</li>
          <li>Phone (1080 × 2400) for a blue background on your lock or home screen.</li>
          <li>A custom size up to 8192 × 8192 for posts, banners or a backdrop in photo editing.</li>
        </ul>
      </Section>

      {/* Cluster: blue background design / cool blue background / shades of blue background / simple, pure, bright blue (~9K) */}
      <Section wide id="design-heading" title="Cool Blue Background Designs: Shades and Gradients">
        <Table
          caption="Blue shades in the Shade menu"
          head={['Shade', 'Hex', 'Looks']}
          rows={[
            ['Blue (default)', '#0066FF', 'Bright and clean'],
            ['Pure Blue', '#0000FF', 'The most saturated blue a screen shows'],
            ['Royal Blue', '#4169E1', 'Rich and friendly'],
            ['Navy', '#000080', 'Dark and professional'],
            ['Sky Blue', '#87CEEB', 'Light and calm'],
          ]}
        />
        <p className={p}>
          Want blue backgrounds with more than one color? Pick the Ocean or Night style on the{' '}
          <Link href="/backgrounds/gradient-background" className={link}>gradient background</Link>.
        </p>
      </Section>
    </div>
  )
}
