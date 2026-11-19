import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Black Background page (English). Grouped by intent, in order of demand:
 * black background / background black / black bg + misspellings (~425K) → all / full / pure / completely black
 * background (~4.4K) → light black / blackish / subtle black background (~0.2K, linked to the dark background).
 * Facts match the background tool: Fullscreen button, double-tap, F and Esc; PNG at 1080p, 2K, 4K, phone 1080×2400 or a
 * custom size up to 8192 px; Copy CSS copies the chosen shade (Pure Black #000000 by default). Shades: src/lib/background-shades.ts.
 */
export function BlackBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: black background / background black / black bg / a black background / black back ground + misspellings (~425K) */}
      <Section wide id="how-heading" title="Black Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with black', 'Press Fullscreen, double-tap the preview or press F'],
            ['Pick a shade of black', 'Choose one in the Shade menu (Pure Black is the default)'],
            ['Leave full screen', 'Press Esc or the X in the corner'],
            ['Save it as an image file', 'Press Download PNG, then pick 1080p, 2K, 4K, Phone or a custom size'],
            ['Use black in a web page or app', 'Press Copy CSS to copy background: #000000;'],
          ]}
        />
        <p className={p}>
          Every download is a lossless PNG of solid black, with no noise or watermark. To keep a black screen on for hours, use
          the <Link href="/black-screen" className={link}>black screen</Link>, which can stop your display from sleeping.
        </p>
        <p className={p}>No install and no sign-up. Bookmark the page and a black bg is one tap away on any device.</p>
      </Section>

      {/* Cluster: all black background / full black background / pure black background / completely black background /
          large, big, plain black background (~4.4K) */}
      <Section wide id="pure-heading" title="All Black Background: Pure #000000, Edge to Edge">
        <p className={p}>
          The color is pure black, the darkest value a display can show. In full screen, a pure black background covers every
          pixel with no bars or tabs.
        </p>
        <Table
          caption="Pure black color codes"
          head={['Format', 'Value']}
          rows={[
            ['HEX', '#000000'],
            ['RGB', 'rgb(0, 0, 0)'],
            ['HSL', 'hsl(0, 0%, 0%)'],
          ]}
        />
        <p className={p}>How dark a full black background looks depends on your screen:</p>
        <ul className={ul}>
          <li><strong className="text-foreground">OLED and AMOLED:</strong> completely black, because the pixels switch off.</li>
          <li><strong className="text-foreground">LCD:</strong> very dark gray in a dark room, because the backlight stays on.</li>
        </ul>
      </Section>

      {/* Cluster: light black background / blackish background / subtle black background (~0.2K) */}
      <Section wide id="light-heading" title="Light Black Background: A Softer Near-Black">
        <p className={p}>
          Want a black background that is easier on the eyes? Open the Shade menu and pick a near-black such as Eerie Black (#1B1B1B) or
          Charcoal (#36454F). The preview, download and CSS all use the shade you pick. For more soft dark shades, see the{' '}
          <Link href="/backgrounds/dark-background" className={link}>dark background</Link>.
        </p>
      </Section>
    </div>
  )
}
