import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Frame Rate Test page (English H1: FPS Test). Order follows search demand:
 * fps test / fps tester / test fps / fps check (~25K) → frame rate test / framerate (~1.7K) →
 * fps monitor / screen fps test / online (~0.6K) → refresh rate and Hz terms (~1K, linked). Other languages are left out.
 */
export function FrameRateGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: fps test / fps tester / test fps / fps check / fps test online (~25K) */}
      <Section wide id="how-heading" title="FPS Test: Compare Frame Rates Side by Side">
        <p className={p}>
          This FPS test, or frame rate test, moves the same block across five lanes, each at a different frame rate, so you can see the difference for yourself:
        </p>
        <ul className={ul}>
          <li>15, 24, 30 and 60 FPS lanes, each moving only on its own frames, like a video at that rate.</li>
          <li>A max lane that moves on every frame your display shows, labeled with your real FPS.</li>
          <li>&ldquo;Your display&rdquo; reads the highest FPS your screen and browser can show, measured live.</li>
        </ul>
        <p className={p}>
          Use Speed (120 to 1,800 px/s) to make motion faster, press Pause to freeze it, and double-tap for fullscreen. Run this FPS test online in any browser,
          with nothing to install.
        </p>
      </Section>

      {/* Cluster: frame rate test / test frame rate / framerate / frames per second test (~1.7K) */}
      <Section wide id="results-heading" title="FPS Test Results: What Each Frame Rate Looks Like">
        <Table
          caption="Common frame rates"
          head={['Frame rate', 'Time per frame', 'Where you see it']}
          rows={[
            ['15 FPS', '66.7 ms', 'Choppy; slow video calls, old webcams'],
            ['24 FPS', '41.7 ms', 'Movies and most streaming shows'],
            ['30 FPS', '33.3 ms', 'TV, YouTube, console games'],
            ['60 FPS', '16.7 ms', 'Smooth gaming and sports video'],
            ['120+ FPS', '8.3 ms or less', 'High refresh rate monitors and phones'],
          ]}
        />
        <p className={p}>
          Quick FPS check: if the max lane looks no smoother than 60, your screen is likely running at 60 Hz.
        </p>
      </Section>

      {/* Cluster: fps monitor / screen fps test / monitor fps test / refresh rate check / monitor hz test (~1.3K) */}
      <Section wide id="hz-heading" title="FPS Test vs Refresh Rate Test">
        <p className={p}>
          Frame rate (FPS) is how many frames are drawn each second; refresh rate (Hz) is how often your monitor can show a new one. A
          screen can&apos;t show more FPS than its Hz, so in the FPS test the max lane is capped by your refresh rate.
        </p>
        <p className={p}>
          To check refresh rate exactly, with frame times and late frames, run the{' '}
          <Link href="/screen-refresh-rate-test" className={link}>refresh rate test</Link>. For trails behind moving objects, try the{' '}
          <Link href="/monitor-ghosting-test" className={link}>monitor ghosting test</Link>.
        </p>
      </Section>

      {/* Cluster: fps check in games (answered: the browser can't see game FPS) */}
      <Section wide id="games-heading" title="FPS Test for Games">
        <p className={p}>
          Online tools measure the browser, not your games, and this FPS tester can&apos;t see inside them. To see in-game FPS, use an overlay:
        </p>
        <ul className={ul}>
          <li>Windows: press Win + G and open the Performance widget in Xbox Game Bar.</li>
          <li>Steam: turn on the FPS counter in Steam&apos;s In Game settings.</li>
          <li>NVIDIA or AMD: the performance overlay in the graphics driver app.</li>
        </ul>
      </Section>
    </div>
  )
}
