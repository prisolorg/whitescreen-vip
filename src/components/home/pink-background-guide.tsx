import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Pink Background page (English). Grouped by intent, in order of demand:
 * pink background / background pink / pink backgrounds / pink bg / plain pink + misspellings (~322K) → wallpaper pink /
 * pink wallpaper / pink background wallpaper (~50K) → light pink, hot pink, baby pink, soft and pale pink (~37K; light pink
 * is owned by the Light Pink page and linked) → pink background aesthetic, cute pink background (~26K) → pink background
 * hd, images, design (~13K).
 * Arabic and Indonesian terms are left out; no brand names.
 * Facts match the background tool: Fullscreen button, double-tap, F and Esc; Download PNG menu with 1080p, 2K, 4K, Phone
 * 1080×2400 and a custom size up to 8192 px; Copy CSS copies the chosen shade. Shades: src/lib/background-shades.ts.
 */
export function PinkBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: pink background / background pink / pink backgrounds / pink bg / pink colour background / plain pink + misspellings (~322K) */}
      <Section wide id="how-heading" title="Pink Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with pink', 'Press Fullscreen, double-tap the preview or press F'],
            ['Pick a shade of pink', 'Choose one in the Shade menu, such as Hot Pink, Baby Pink or Pastel Pink'],
            ['Save it as an image file', 'Press Download PNG, then pick a size'],
            ['Make a web page background pink', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          The preview, download and CSS all use the shade you pick. Each PNG is a plain pink bg in one solid color, with no
          watermark and no sign-up.
        </p>
      </Section>

      {/* Cluster: wallpaper pink / pink wallpaper / pink background wallpaper / pink colour wallpaper (~50K) */}
      <Section wide id="wallpaper-heading" title="Pink Background Wallpaper for Phone and Desktop">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pick your shade in the Shade menu.</li>
          <li>Press Download PNG and choose Phone (1080 × 2400), or 1080p or 4K for a computer.</li>
          <li>Set it as your pink wallpaper in your device&apos;s display or wallpaper settings.</li>
        </ol>
      </Section>

      {/* Cluster: light pink background / hot pink background / baby pink background / soft, pale, bright pink (~37K) */}
      <Section wide id="shades-heading" title="Hot, Baby and Light Pink Background Shades">
        <Table
          caption="Pink shades in the Shade menu"
          head={['Shade', 'Hex', 'Looks']}
          rows={[
            ['Pink (default)', '#F472B6', 'Bright and friendly'],
            ['Hot Pink', '#FF69B4', 'Bold and playful'],
            ['Deep Pink', '#FF1493', 'Vivid, close to magenta'],
            ['Baby Pink', '#F4C2C2', 'Soft and gentle'],
            ['Pastel Pink', '#FFD1DC', 'Pale and calm'],
          ]}
        />
        <p className={p}>
          For an even paler page, the <Link href="/backgrounds/light-pink-background" className={link}>light pink background</Link>{' '}
          has its own set of soft shades.
        </p>
      </Section>

      {/* Cluster: pink background aesthetic / aesthetic pink background / cute pink background / pretty pink (~26K) */}
      <Section wide id="aesthetic-heading" title="Aesthetic Pink Background: Cute and Soft Looks">
        <ul className={ul}>
          <li>For a cute pink background aesthetic in one color, pick Baby Pink, Pastel Pink or Blush.</li>
          <li>
            For pink that fades into peach or lavender, pick the Cotton Candy or Peach Dream style on the{' '}
            <Link href="/backgrounds/aesthetic-background" className={link}>aesthetic background</Link>.
          </li>
        </ul>
      </Section>

      {/* Cluster: pink background hd / high resolution / pink background images / pink background design (~13K) */}
      <Section wide id="images-heading" title="Pink Background HD Images and Designs">
        <p className={p}>
          All pink backgrounds download as lossless PNGs, sharp at any size: 1080p HD, 2K, 4K, Phone, or a custom size up to 8192 × 8192 for
          stories, banners and slides. Add your own text or shapes on top in any design app.
        </p>
      </Section>
    </div>
  )
}
