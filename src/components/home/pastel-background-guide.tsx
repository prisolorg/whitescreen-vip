import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Pastel Background page (English). Grouped by intent, in order of demand:
 * pastel background / background pastel / pastel backgrounds / pastel bg / bg pastel + misspellings (~24.3K) →
 * pastel color background / pastel colors background / pastel colour background / colorful pastel background (~4K) →
 * pastel plain background / plain pastel background / pastel plain color background / solid pastel (~330).
 * "pastel abstract / cool / paint background" (~50) is too small for its own section. No brand names.
 * Facts match the background tool: Fullscreen button, double-tap, F and Esc; Style menu from src/lib/background-shades.ts
 * (pastel is a gradient); Download PNG menu with 1080p, 2K, 4K, Phone 1080×2400 and a custom size up to 8192 px;
 * Copy CSS copies the chosen style's gradient.
 */
export function PastelBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: pastel background / background pastel / pastel backgrounds / pastel bg / bg pastel / pastels background + misspellings (~24.3K) */}
      <Section wide id="how-heading" title="Pastel Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with pastel', 'Press Fullscreen, double-tap the preview or press F (Esc exits)'],
            ['Pick a pastel mix', 'Choose one in the Style menu, such as Baby Blue Mix or Rose Sky'],
            ['Save it as an image file', 'Press Download PNG: 1080p, 2K, 4K, Phone (1080 × 2400) or a custom size'],
            ['Make a web page background pastel', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          Each pastel background is a soft diagonal blend of three pale colors. The preview, download and CSS all follow the style you
          pick, and every PNG is free, lossless and without a watermark. Dark gray or navy text reads well on top, which makes a pastel bg
          easy to use for planners, invitations, slides and wallpapers.
        </p>
      </Section>

      {/* Cluster: pastel color background / pastel colors background / pastel colour background / background pastel colors / colorful pastel background (~4K) */}
      <Section wide id="colors-heading" title="Pastel Background Colors and Mixes">
        <Table
          caption="Pastel styles in the Style menu"
          head={['Style', 'Pastel colors', 'Feels']}
          rows={[
            ['Mint Mix (default)', 'Mint, lavender, peach', 'Fresh and balanced'],
            ['Baby Blue Mix', 'Baby blue, lilac, blush', 'Calm and airy'],
            ['Lemon Mint', 'Lemon, mint, pale blue', 'Bright and sunny'],
            ['Peach Lilac', 'Peach, lilac, seafoam', 'Warm and gentle'],
            ['Rose Sky', 'Pastel pink, cream, powder blue', 'Sweet and soft'],
          ]}
        />
        <p className={p}>
          Pastel colors are hues mixed with plenty of white: bright, but low in saturation. Each pastel background below blends three of them into one pastel color background. For a colorful pastel background with more
          pink, try the Cotton Candy or Peach Dream style on the{' '}
          <Link href="/backgrounds/aesthetic-background" className={link}>aesthetic background</Link>.
        </p>
      </Section>

      {/* Cluster: pastel plain background / plain pastel background / pastel plain color background / solid pastel background (~330) */}
      <Section wide id="plain-heading" title="Plain Pastel Background in One Color">
        <p className={p}>Want a plain pastel background with no blend? These single shades are on the solid color pages:</p>
        <ul className={ul}>
          <li>
            Pastel Pink or Baby Pink on the <Link href="/backgrounds/pink-background" className={link}>pink background</Link>
          </li>
          <li>
            Pastel Yellow or Light Yellow on the <Link href="/backgrounds/yellow-background" className={link}>yellow background</Link>
          </li>
          <li>
            Lavender or Lilac on the <Link href="/backgrounds/purple-background" className={link}>purple background</Link>
          </li>
          <li>
            Baby Blue or Sky Blue on the <Link href="/backgrounds/blue-background" className={link}>blue background</Link>
          </li>
        </ul>
      </Section>
    </div>
  )
}
