import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Screen Color Test page (English). Order follows search demand:
 * color test / colour test / test color (~22K) → color screen / screen color / display color test (~5K) →
 * color check / checker, test image, rgb test, monitor and TV (~5K) → color accuracy and screen discoloration (~0.9K).
 * "Display check / test my screen" (~6K) belongs to the Monitor Test page and is linked; other languages are left out.
 */
export function ScreenColorGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: color test / colour test / test color / color tester / color test image (~23K) */}
      <Section wide id="patterns-heading" title="Screen Color Test Patterns and What to Look For">
        <p className={p}>
          This color test (or colour test) has seven fullscreen patterns, and each color test image checks something different:
        </p>
        <Table
          caption="Screen color test patterns"
          head={['Pattern', 'What it checks', 'A good screen shows']}
          rows={[
            ['Color bars', 'Basic color reproduction', 'Eight clear, separate colors with no tint'],
            ['RGB ramps', 'Gradients and clipping', 'Smooth fades from black with no steps; the bright end doesn’t flatten out early'],
            ['Hue spectrum', 'Every hue in between', 'A smooth rainbow with no bands or jumps'],
            ['Saturation steps', 'Color intensity', 'Ten steps from gray to full red, each one different'],
            ['Red, Green, Blue', 'Each subpixel color on its own', 'One even color edge to edge, with no dark spots'],
          ]}
        />
      </Section>

      {/* Cluster: color screen / screen color / display color test / screen colour test / full screen color (~5K) */}
      <Section wide id="how-heading" title="How to Run a Screen Color Test">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Turn off night mode, blue-light filters and auto-brightness, so the screen color isn&apos;t shifted.</li>
          <li>Double-tap the screen color test for fullscreen, so only the color screen is visible.</li>
          <li>Tap the screen, use the arrow keys or pick a pattern by name. Auto-cycle steps through them for you.</li>
          <li>Look straight on, then from the side: on some panels, the display color shifts at an angle.</li>
        </ol>
        <p className={p}>
          Need one solid color screen instead? Open the <Link href="/" className={link}>white screen</Link>,{' '}
          <Link href="/red-screen" className={link}>red screen</Link> or any page in{' '}
          <Link href="/color-screens" className={link}>color screens</Link>.
        </p>
      </Section>

      {/* Cluster: color check / color checker / rgb test / monitor color test / tv color test / color lcd (~4K) */}
      <Section wide id="devices-heading" title="Screen Color Test on a Monitor, TV or Phone">
        <ul className={ul}>
          <li>Monitor: use the RGB ramps as a monitor color test, then adjust the color temperature or picture mode in its menu.</li>
          <li>TV: open the screen color test in the TV&apos;s browser or cast a laptop tab. Movie or Filmmaker modes usually show the truest color.</li>
          <li>Phone: turn brightness up and compare Natural and Vivid color modes, if your phone has them.</li>
          <li>The Red, Green and Blue fields double as an RGB test for stuck subpixels.</li>
        </ul>
      </Section>

      {/* Cluster: color accuracy test / screen discoloration / display check (linked) (~1K) */}
      <Section wide id="accuracy-heading" title="Screen Color Test Limits: Accuracy and Discoloration">
        <p className={p}>
          A screen color test is a color check by eye: it finds tints, banding and dead colors, but true color accuracy needs a hardware colorimeter; no website can
          measure it. Picking text colors for a website? Use the <Link href="/contrast-checker" className={link}>color contrast checker</Link>.
        </p>
        <Table
          caption="What a color problem may mean"
          head={['What you see', 'Try']}
          rows={[
            ['Yellow or blue tint everywhere', <Link key="y" href="/screen-problems/yellow-tint-on-screen" className={link}>Yellow tint guide</Link>],
            ['Steps or bands in the ramps', <Link key="b" href="/screen-problems/color-banding" className={link}>Color banding guide</Link>],
            ['Patches or uneven areas (screen discoloration)', <Link key="u" href="/gray-screen" className={link}>Grey screen</Link>],
            ['Faded logos or ghost images', <Link key="bi" href="/screen-burn-in-test" className={link}>Screen burn-in test</Link>],
            ['Sharpness, gamma and more (full display check)', <Link key="m" href="/monitor-test" className={link}>Screen test</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
