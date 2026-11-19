import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the No Signal Screen page (English H1: TV Color Bars & No Signal Screen). Order follows search demand:
 * tv color bars / tv colour bars / color bar tv / 1080p tv color bars (~1.6K) → no signal tv / tv no signal (~0.4K) →
 * real "no signal" on a TV (troubleshooting).
 */
export function NoSignalGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: no signal tv screen / tv no signal / tv color screen (styles) */}
      <Section wide id="styles-heading" title="TV Color Bars & No Signal Screen: Three Styles">
        <Table
          caption="No signal screen styles"
          head={['Style', 'What it shows']}
          rows={[
            ['Color bars', 'TV color bars with a NO SIGNAL box in the middle'],
            ['Bouncing', 'A NO SIGNAL box that drifts and bounces off the edges, like an idle TV'],
            ['Blue input', 'A plain blue screen with the message, like many TVs show with no input'],
          ]}
        />
        <ul className={ul}>
          <li>Open More to change the message and the input name (HDMI 1 by default).</li>
          <li>Turn on the 1 kHz tone for the classic test-signal beep.</li>
          <li>Press F or tap Fullscreen so the no signal screen fills a TV, monitor or laptop.</li>
        </ul>
      </Section>

      {/* Cluster: tv color bars / tv colour bars / color bar tv / tv screen color bars / 1080p tv color bars (~1.6K) */}
      <Section wide id="bars-heading" title="TV Color Bars: What the Stripes Mean">
        <p className={p}>
          TV color bars are the striped test pattern broadcasters used to line up pictures. This no signal screen draws a SMPTE-style
          version in three rows:
        </p>
        <ul className={ul}>
          <li>Top: seven bars of gray, yellow, cyan, green, magenta, red and blue.</li>
          <li>Middle: a thin strip of blue, magenta, cyan and gray, alternating with black.</li>
          <li>Bottom: dark blue, white, purple and black blocks.</li>
        </ul>
        <p className={p}>
          The TV color bars scale to any screen, including 1080p and 4K TVs. They are for the look, not calibration; to check colors, use
          the <Link href="/screen-color-test" className={link}>screen color test</Link>.
        </p>
      </Section>

      {/* Cluster: no signal tv (prank and prop uses) */}
      <Section wide id="uses-heading" title="TV Color Bars & No Signal Screen Ideas">
        <ul className={ul}>
          <li>Prank: put TV color bars or the no signal TV screen on fullscreen and watch someone check every cable.</li>
          <li>Film and photo props: TV color bars make a believable TV in the background with no real broadcast.</li>
          <li>Streams and events: a &ldquo;be right back&rdquo; screen with your own message.</li>
        </ul>
        <p className={p}>
          More screen pranks: the <Link href="/hacked-screen" className={link}>hacked screen prank</Link> and the{' '}
          <Link href="/fake-windows-10-update" className={link}>fake Windows update screen</Link>.
        </p>
      </Section>

      {/* Cluster: no signal tv / tv no signal (troubleshooting a real one) */}
      <Section wide id="fix-heading" title="No Signal Screen on Your Real TV? Quick Fixes">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Press Input or Source on the remote and pick the port your device is plugged into.</li>
          <li>Check that the device (console, laptop, cable box) is on and not asleep.</li>
          <li>Unplug the HDMI cable at both ends and plug it back in, or try another port or cable.</li>
          <li>Restart the TV and the device.</li>
        </ol>
      </Section>
    </div>
  )
}
