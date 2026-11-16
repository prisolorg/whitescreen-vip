import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Monitor Test page (English H1: Screen Test). Order follows search demand:
 * screen test / display test / display check / monitor test, online and laptop (~78K) → test image / pattern (~2.5K) →
 * color test / monitor calibration (~13K, linked to the Screen Color Test) → dead pixel / lcd test, Hz, resolution (linked).
 * "EIZO monitor test" (a brand, ~11K) and other languages are left out.
 */
export function MonitorTestGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: screen test / display test / display check / monitor test / test image / test pattern (~70K) */}
      <Section wide id="patterns-heading" title="Screen Test Patterns and What Each Checks">
        <p className={p}>
          This screen test and display test has seven fullscreen patterns, and each test image checks something different. For one
          plain field to spot dust and dead pixels, open the <Link href="/" className={link}>white screen</Link>:
        </p>
        <Table
          caption="Screen test patterns"
          head={['Pattern', 'What it checks', 'A good screen shows']}
          rows={[
            ['Gray gradient', 'Smooth tones, color banding', 'One smooth fade with no steps or color tint'],
            ['Gray steps', 'Black and white levels', 'Every step visibly different, darkest and lightest included'],
            ['Grid', 'Geometry and scaling', 'Straight, evenly spaced lines edge to edge'],
            ['Gamma 2.2', 'Gamma setting', 'The center block blends with the stripes from a distance'],
            ['Fine lines', 'Sharpness, native resolution', 'Crisp 1-pixel lines with no shimmer or moiré'],
            ['Checkerboard', 'Contrast and clean edges', 'Sharp squares with no glow or smearing'],
            ['Color bars', 'Color reproduction', 'Eight clearly separate, saturated colors'],
          ]}
        />
      </Section>

      {/* Cluster: display test online / screen test online / display check / test my screen / laptop screen test (~12K) */}
      <Section wide id="how-heading" title="How to Run a Screen Test Online">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Set the display to its native resolution and the browser zoom to 100%.</li>
          <li>Double-tap the screen test for fullscreen, so nothing else is on screen.</li>
          <li>Tap the screen, use the arrow keys or pick a pattern by name. Auto-cycle steps through them for you.</li>
          <li>View each pattern head-on, then from the side, to spot viewing-angle shifts.</li>
        </ol>
        <p className={p}>
          This screen test runs in any browser, so it works as a display check, a display test online, a laptop screen test, a monitor test for a new or used PC screen, or a
          quick test my screen check on a TV.
        </p>
      </Section>

      {/* Cluster: color test / monitor color calibration / color accuracy / rgb test / gamma (~13K) */}
      <Section wide id="color-heading" title="Screen Test for Color and Calibration">
        <p className={p}>
          In the screen test, color bars and the gamma pattern show obvious color and gamma problems by eye. For a full color test with solid colors and RGB ramps,
          use the <Link href="/screen-color-test" className={link}>screen color test</Link>.
        </p>
        <p className={p}>
          True color accuracy needs a hardware colorimeter; no website can measure it. For basic monitor color calibration, use the tool built
          into your system:
        </p>
        <ul className={ul}>
          <li>Windows: search for &ldquo;Calibrate display color&rdquo; in Start.</li>
          <li>Mac: System Settings → Displays → Color Profile → Customize → Calibrate.</li>
        </ul>
      </Section>

      {/* Cluster: lcd test / dead pixel / refresh rate / hz / response time / black test / resolution (linked pages) */}
      <Section wide id="more-heading" title="Screen Test for Dead Pixels, Hz and Other Faults">
        <Table
          caption="Which test to run next"
          head={['If you want to check', 'Run']}
          rows={[
            ['Dead or stuck pixels (LCD test)', <Link key="dp" href="/dead-pixel-test" className={link}>Dead pixel test</Link>],
            ['Refresh rate (Hz)', <Link key="hz" href="/screen-refresh-rate-test" className={link}>Refresh rate test</Link>],
            ['Response time and trails', <Link key="gh" href="/monitor-ghosting-test" className={link}>Monitor ghosting test</Link>],
            ['Backlight bleed and black uniformity', <Link key="un" href="/screen-uniformity-test" className={link}>Screen uniformity test</Link>],
            ['Ghost images left on screen', <Link key="bi" href="/screen-burn-in-test" className={link}>Screen burn-in test</Link>],
            ['Your screen resolution', <Link key="rs" href="/screen-resolution-test" className={link}>What is my screen resolution?</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
