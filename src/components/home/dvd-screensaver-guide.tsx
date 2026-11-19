import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the DVD Screensaver page (English). Order follows search demand:
 * bouncing DVD logo (~5.4K) → Google easter egg (~4.7K) → TV, stream and second monitor (~1.6K) →
 * DVD logo and GIF (~7K, answered honestly) → corner hits and the DVD game (~600).
 */
export function DvdScreensaverGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: dvd bouncing logo / bouncing dvd logo / dvd logo bouncing (~5.4K) */}
      <Section wide id="bounce-heading" title="DVD Screensaver: The Bouncing DVD Logo">
        <p className={p}>
          The DVD screensaver, also called the DVD screen saver, is the DVD bouncing logo that old DVD players showed when left idle. The logo drifts diagonally at a steady
          speed and switches to a new color every time it touches an edge, cycling through 10 colors without repeating the last one.
        </p>
        <ul className={ul}>
          <li>Double-tap the screen or press F to run it fullscreen.</li>
          <li>Open More to change the speed and the logo size.</li>
          <li>The counters track every bounce and every exact corner hit.</li>
          <li>Use Pause to freeze the bouncing logo, and Resume to carry on.</li>
        </ul>
      </Section>

      {/* Cluster: google dvd screensaver / dvd screensaver easter egg / google dvd (~4.7K) */}
      <Section wide id="google-heading" title="Google DVD Screensaver Easter Egg">
        <p className={p}>
          Searching &quot;DVD screensaver&quot; on Google has at times turned the Google logo into a bouncing DVD-style logo on the results
          page. Easter eggs like this come and go, and they don&apos;t run fullscreen.
        </p>
        <p className={p}>
          This page gives you the same bouncing logo any time, in any browser, with fullscreen, a corner counter and controls for speed
          and size.
        </p>
      </Section>

      {/* Cluster: dvd screen / dvd screen player / dvd player screen / dvd background (~1.6K) */}
      <Section wide id="tv-heading" title="DVD Screensaver on a TV, Stream or Second Monitor">
        <Table
          caption="Where to use the DVD screensaver"
          head={['Use', 'How']}
          rows={[
            ['Smart TV', "Open this page in the TV's browser, or cast a browser tab, then go fullscreen"],
            ['Stream break or BRB screen', 'Add this window as a window capture in OBS while you step away'],
            ['Second monitor', 'Drag the window to the idle screen and go fullscreen'],
            ['Waiting room or office', 'Leave it running on a spare display for a bit of nostalgia'],
          ]}
        />
      </Section>

      {/* Cluster: dvd logo / dvd video logo / png / icon (~5.4K) + dvd screensaver gif / dvd gif (~1.6K) */}
      <Section wide id="logo-heading" title="DVD Screensaver Logo and GIF">
        <p className={p}>
          The logo here is drawn live in your browser: a bold &quot;DVD&quot; over a disc with &quot;VIDEO&quot; cut out, recolored on every
          bounce. The official DVD Video logo is a trademark of the DVD Format/Logo Licensing Corporation, so it isn&apos;t offered as a PNG
          download.
        </p>
        <h3 className={h3}>Make a DVD Screensaver GIF</h3>
        <p className={p}>
          Run the screensaver fullscreen and record your screen with a built-in recorder (Windows Snipping Tool, Mac Screenshot toolbar,
          or the screen recorder on your phone), then convert the clip into a DVD GIF. Record until a corner hit for the perfect loop.
        </p>
      </Section>

      {/* Cluster: dvd logo hits corner / dvd corner (~270) + dvd game / simulator (~600) */}
      <Section wide id="corner-heading" title="Will the DVD Screensaver Hit the Corner?">
        <p className={p}>
          Yes, but how often depends on the shape of the screen, the logo size and where it starts. A DVD corner hit only happens when the logo
          reaches a side and the top or bottom at the same moment. On some screen sizes that happens often; on others it can take a long
          time. Changing the logo size or resizing the window gives you a new path.
        </p>
        <p className={p}>
          That makes it a perfect DVD game: everyone guesses when the next corner hit will land, and the counter settles it. For more idle
          screens, try the <Link href="/flip-clock-screensaver" className={link}>flip clock screensaver</Link> or the{' '}
          <Link href="/matrix-screensaver" className={link}>Matrix screensaver</Link>.
        </p>
      </Section>
    </div>
  )
}
