import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Gold Background page (English). Grouped by intent, in order of demand:
 * gold background / background gold / gold bg / gold colour background / gold backgrounds / free + misspellings (~115K) →
 * golden background / golden bg / golden colour background / golden backgrounds + misspellings (~73K) →
 * gold background hd / golden background hd / png (~9.5K) → light golden, yellow gold, light, dark, shiny, gold silver (~1.1K) →
 * gold background design / golden design / elegant gold background (~1.1K).
 * Indonesian and Arabic terms and "bonanza" are left out; no brand names. Facts match the background tool: Fullscreen
 * button, double-tap, F and Esc; Style menu from src/lib/background-shades.ts (gold is a gradient); Download PNG menu with
 * 1080p, 2K, 4K, Phone 1080×2400 and a custom size up to 8192 px; Copy CSS copies the chosen style's gradient.
 */
export function GoldBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: gold background / background gold / gold bg / gold colour background / gold backgrounds / free gold background + misspellings (~115K) */}
      <Section wide id="how-heading" title="Gold Background: Show It Full Screen or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with gold', 'Press Fullscreen, double-tap the preview or press F (Esc exits)'],
            ['Pick a kind of gold', 'Choose one in the Style menu, such as Bright Gold, Rose Gold or White Gold'],
            ['Save it as an image file', 'Press Download PNG, then pick a size'],
            ['Make a web page background gold', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          A flat gold bg looks like mustard, so each gold background here is a diagonal gradient from shadow to a bright sheen and back.
          That change in light is what makes it read as metal. The preview, download and CSS all follow the style you pick, free and with
          no watermark.
        </p>
      </Section>

      {/* Cluster: golden background / golden bg / golden colour background / golden backgrounds / background golden + misspellings (~73K) */}
      <Section wide id="golden-heading" title="Golden Background or Gold Background?">
        <p className={p}>
          They are the same thing: &quot;golden&quot; and &quot;gold&quot; both mean the warm, shiny color of the metal. Every style on
          this page works as a golden background for invitations, certificates, celebration slides and party screens. Dark brown or
          black text reads best on top.
        </p>
      </Section>

      {/* Cluster: gold background hd / golden background hd / background gold hd / gold background png (~9.5K) */}
      <Section wide id="hd-heading" title="Gold Background HD and 4K PNG">
        <p className={p}>
          Every gold background downloads in 1080p HD, 2K, 4K, Phone (1080 × 2400) or a custom size up to 8192 × 8192. The PNG is
          lossless, so a golden background stays smooth when you scale it up for a banner or print.
        </p>
      </Section>

      {/* Cluster: light golden background / yellow gold / light gold / dark gold / shiny gold / gold silver background (~1.1K) */}
      <Section wide id="styles-heading" title="Light, Dark and Rose Gold Background Styles">
        <Table
          caption="Gold styles in the Style menu"
          head={['Style', 'Looks', 'Good for']}
          rows={[
            ['Classic Gold (default)', 'Deep gold with a pale sheen', 'Most designs'],
            ['Bright Gold', 'Yellow gold, the shiniest', 'Party and award screens'],
            ['Champagne Gold', 'Light golden and soft', 'Weddings, elegant cards'],
            ['Antique Gold', 'Dark gold, brown edges', 'Vintage and formal looks'],
            ['Rose Gold', 'Gold with a pink tint', 'Beauty, fashion, birthdays'],
            ['White Gold', 'Pale gold, close to silver', 'Clean, modern designs'],
          ]}
        />
      </Section>

      {/* Cluster: gold background design / golden design background / elegant gold background / cool gold background (~1.1K) */}
      <Section wide id="design-heading" title="Elegant Gold Background Design Ideas">
        <ul className={ul}>
          <li>Put dark text on Champagne Gold for an elegant invitation or certificate.</li>
          <li>Use Antique Gold behind a white logo; white reads well on its darker corners.</li>
          <li>
            For flat, bright color instead of metal, try the <Link href="/backgrounds/yellow-background" className={link}>yellow background</Link>{' '}
            or the softer <Link href="/backgrounds/beige-background" className={link}>beige background</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
