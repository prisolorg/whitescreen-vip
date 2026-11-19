import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the OLED Burn-In Test page (English). Order follows search demand:
 * oled burn in / burn in oled / oled screen burn (~13.6K) → burn in test / oled burn in test / screen burn test (~8.2K) →
 * burn in / screen burn in / monitor burn in (~6.2K, owned by the Screen Burn-In Test page, linked) →
 * fixing and preventing OLED burn-in (pixel refresh, ~0.1K). "oled test" (~2.4K) belongs to the OLED Test page and
 * "ghosting test" (~17K) to the Monitor Ghosting Test page; both are linked once. Non-English keywords are left out.
 */
export function OledBurnInGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: oled burn in / burn in oled / oled screen burn / oled burn / oled burnin / oled screen burn in / oled pixel burn (~13.6K) */}
      <Section wide id="what-heading" title="OLED Burn-In Test: What OLED Burn-In Looks Like">
        <p className={p}>
          OLED burn-in is uneven wear: each OLED pixel makes its own light and dims a little with use, so anything that stays in one place for
          hundreds of hours wears its pixels faster than the rest. On a solid color the worn area shows as a faint, slightly darker or tinted shape.
          This test fills the screen with flat colors so those shapes have nowhere to hide.
        </p>
        <Table
          caption="Where OLED screen burn usually shows up"
          head={['Device', 'Typical burn-in shape']}
          rows={[
            ['Phones', 'Status bar, navigation bar, keyboard, always-on clock'],
            ['TVs', 'Channel logos, news tickers, score bars'],
            ['Monitors and laptops', 'Taskbar, dock, app toolbars, desktop icons'],
            ['Gaming', 'Health bars, minimaps, HUD elements'],
          ]}
        />
        <p className={p}>
          Burn-in on OLED differs from color patches spread across the panel. For near-black banding, tint and mura, use the{' '}
          <Link href="/oled-gray-test" className={link}>OLED test</Link>.
        </p>
      </Section>

      {/* Cluster: burn in test / oled burn in test / burn-in test / screen burn test / oled burn in check / burn in checker / burnin test (~8.2K) */}
      <Section wide id="how-heading" title="How to Run the OLED Burn-In Test">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Set the screen to full brightness and turn off night mode, blue-light filters and auto-brightness.</li>
          <li>Press Start test to open the colors in fullscreen.</li>
          <li>Start on Mid gray, the clearest color for this burn in test, then try Dark gray.</li>
          <li>Click the screen or use the arrow keys to switch to Red, Green, Blue and White. Different subpixels wear at different rates, so a shape can show on one color only.</li>
          <li>For a hands-free check, turn on Auto-cycle in fullscreen and set the interval from 2 to 30 seconds (5 by default).</li>
        </ol>
        <Table
          caption="Which color shows what"
          head={['Color', 'What to look for']}
          rows={[
            ['Mid gray (#808080)', 'Most burn-in: darker outlines of bars, logos and icons'],
            ['Dark gray (#333333)', 'Faint shapes and patches that bright colors wash out'],
            ['Red, green, blue', 'Wear in one subpixel color, shown as a tinted shape'],
            ['White', 'Yellowish or pinkish areas where blue pixels have worn'],
          ]}
        />
        <p className={p}>
          The test works the same on a phone, iPhone, tablet, laptop or TV browser. Buying a used OLED? Run the burn-in check before
          you pay. Look from a normal distance in a dim room, and take a photo of any shape you find for a warranty claim.
        </p>
      </Section>

      {/* Cluster: burn in / screen burn in / monitor burn in / screen burn-in / burn in monitor / lcd burn in / does qled burn in (~6.2K) */}
      <Section wide id="lcd-heading" title="OLED Burn-In Test vs Screen Burn-In on LCD and QLED">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">OLED and AMOLED:</strong> the pixels themselves wear, so burn-in is permanent once it sets.
          </li>
          <li>
            <strong className="text-foreground">LCD, LED and QLED:</strong> a backlight makes the light, so true burn-in is rare. A ghost image on
            these screens is usually image retention, which fades.
          </li>
        </ul>
        <p className={p}>
          For LCD monitors, laptops and any screen burn in, use the <Link href="/screen-burn-in-test" className={link}>screen burn-in test</Link>.
          It also has a fixer that can clear temporary retention.
        </p>
      </Section>

      {/* Cluster: pixel refresh / fix oled burn in / prevent burn in (~0.1K, answered honestly) */}
      <Section wide id="fix-heading" title="OLED Burn-In Test Found Something: What Now?">
        <p className={p}>
          First, play varied content for an hour and run the test again. If the shape fades, it was image retention. If it stays, it is
          burn-in, and no website or video can reverse pixel wear. Things that do help:
        </p>
        <ul className={ul}>
          <li>Run your TV or monitor&apos;s pixel refresh (sometimes called panel care or pixel cleaning) from its settings.</li>
          <li>Lower the brightness, use dark mode and set a short screen timeout.</li>
          <li>Hide static bars, move desktop icons and turn on logo dimming if your TV has it.</li>
          <li>Check the warranty: some brands cover OLED burn-in for a few years.</li>
        </ul>
        <p className={p}>
          Seeing tiny dots instead of shapes? Try the <Link href="/dead-pixel-test" className={link}>dead pixel test</Link>. Blur behind moving
          objects is a different issue; use the <Link href="/monitor-ghosting-test" className={link}>monitor ghosting test</Link>.
        </p>
      </Section>
    </div>
  )
}
