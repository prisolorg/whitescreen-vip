import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Dark Background page (English). Grouped by intent, in order of demand:
 * dark background / dark backgrounds / background dark / dark bg / backgrounds dark / simple, very dark + misspellings (~101K) →
 * black background design / design black background / cool black background / dark background design / cool, cute dark (~6.7K) →
 * background black / black background / black background png, pics / dark black / black dark (~5.1K; "black background" is
 * owned by the Black Background page and linked) → dark background hd / dark png / high resolution (~2.3K) →
 * dark colour / color background + dark theme background / dark page (~2K) → dark background for editing / photography /
 * instagram story / thumbnail / website / zoom (~1.1K).
 * Bengali, Arabic, Hindi and Portuguese terms are left out; no brand names. Facts match the background tool: Fullscreen button,
 * double-tap, F and Esc; Shade menu from src/lib/background-shades.ts; Download PNG menu with 1080p, 2K, 4K, Phone 1080×2400
 * and a custom size up to 8192 px; Copy CSS copies the chosen shade.
 */
export function DarkBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: dark background / dark backgrounds / background dark / dark bg / backgrounds dark / simple dark background + misspellings (~101K) */}
      <Section wide id="how-heading" title="Dark Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with a dark color', 'Press Fullscreen, double-tap the preview or press F (Esc exits)'],
            ['Pick how dark', 'Choose a shade in the Shade menu, such as Charcoal, Gunmetal or Jet'],
            ['Save it as an image file', 'Press Download PNG, then pick a size'],
            ['Make a web page background dark', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          Each dark background is one flat, simple color. The preview, download and CSS all follow the shade you pick, and every dark bg is
          a free PNG with no watermark. It dims a second monitor at night, keeps a desktop calm and makes light text and photos stand out.
        </p>
      </Section>

      {/* Cluster: black background design / design black background / cool black background / dark background design / cool, cute dark backgrounds (~6.7K) */}
      <Section wide id="design-heading" title="Cool Dark Background Designs">
        <ul className={ul}>
          <li>For a black background design, start from a plain dark shade and add one bright element: white or gold text, a logo or a thin colored line.</li>
          <li>Charcoal and Gunmetal have a hint of blue, which looks modern next to cyan, teal or white.</li>
          <li>
            For glow on a dark base, the <Link href="/backgrounds/neon-background" className={link}>neon background</Link> lights up
            black with cyan, pink, purple or lime.
          </li>
        </ul>
      </Section>

      {/* Cluster: background black / black background / black background png, pics / dark black / black dark (~5.1K) */}
      <Section wide id="black-heading" title="Dark Background or Black Background?">
        <p className={p}>
          A dark background here is a very dark gray, from #121212 to #36454F, not pure black. Gray keeps shadows, borders and dark photos
          visible, and white text does not glare as hard. For true #000000 black, where OLED pixels switch off completely, use the{' '}
          <Link href="/backgrounds/black-background" className={link}>Black Background</Link>.
        </p>
      </Section>

      {/* Cluster: dark background hd / dark png / dark background png / high resolution dark background / hd dark (~2.3K) */}
      <Section wide id="hd-heading" title="Dark Background HD and 4K PNG">
        <p className={p}>
          Download PNG offers 1080p HD, 2K, 4K, Phone (1080 × 2400) or a custom size up to 8192 × 8192. The file is lossless, so a dark
          background PNG stays clean without the blotchy blocks that compressed dark images often show.
        </p>
      </Section>

      {/* Cluster: dark colour background / dark color background / dark theme background / dark page / black shade background (~2K) */}
      <Section wide id="shades-heading" title="Dark Background Colors and Dark Theme Gray">
        <Table
          caption="Dark shades in the Shade menu"
          head={['Shade', 'Hex', 'Looks']}
          rows={[
            ['Dark Mode Gray (default)', '#121212', 'The dark theme gray many apps use'],
            ['Eerie Black / Raisin Black', '#1B1B1B / #242124', 'Almost black, soft'],
            ['Jet / Onyx', '#343434 / #353839', 'Deep neutral gray'],
            ['Gunmetal / Charcoal', '#2A3439 / #36454F', 'Dark gray with a cool blue tint'],
            ['Dark Slate Gray', '#2F4F4F', 'Dark gray-green'],
          ]}
        />
      </Section>

      {/* Cluster: dark background for editing / photography dark background / dark background for instagram story / thumbnail / website / zoom (~1.1K) */}
      <Section wide id="uses-heading" title="Dark Background for Editing, Stories and Thumbnails">
        <ul className={ul}>
          <li>Photo editing: a dark background behind a product or portrait cut-out makes colors and edges easy to judge.</li>
          <li>Instagram story or phone wallpaper: download the Phone (1080 × 2400) size.</li>
          <li>Thumbnails, banners and slides: download 1080p or 4K and add bold light text on top.</li>
        </ul>
      </Section>
    </div>
  )
}
