import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Monitor Ghosting Test page (English). Order follows search demand:
 * ghosting test / ghost test (~17K) → monitor ghosting / ghosting monitor / screen ghosting (~6K) →
 * ghost screen, lcd and display ghosting (~1K) → black smearing, motion blur, what is ghosting (~0.5K).
 * "UFO test" / "testufo" / "alien test" (brands, ~48K) and other languages are left out.
 */
export function MonitorGhostingGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: ghosting test / ghost test / test ghosting / ghosting check (~17K) */}
      <Section wide id="how-heading" title="Monitor Ghosting Test: How to Run It">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Set your monitor to its highest refresh rate, then double-tap the monitor ghosting test for fullscreen.</li>
          <li>Watch the target move across the dark, mid gray and light lanes. Follow it with your eyes, don&apos;t stare at one spot.</li>
          <li>Raise the Speed (240 to 2,400 px/s) until trails appear, and press Pause to look at a frozen frame.</li>
          <li>Change your monitor&apos;s overdrive setting and run the ghost test again to compare.</li>
        </ol>
        <p className={p}>
          In the monitor ghosting test, the vertical reference grid (in More) helps you judge how long a trail is. Each lane uses a different background because ghosting
          is often worse on dark or mid gray.
        </p>
      </Section>

      {/* Cluster: monitor ghosting / ghosting monitor / what is ghosting / example / black smearing / motion blur (~5K) */}
      <Section wide id="results-heading" title="Monitor Ghosting Test Results: What the Trails Mean">
        <p className={p}>
          What is ghosting on a monitor? Pixels that change color too slowly leave a faint copy behind anything that moves. Here is how to
          read the monitor ghosting test:
        </p>
        <Table
          caption="Ghosting, smearing and overshoot"
          head={['What you see behind the target', 'What it is', 'Usual cause']}
          rows={[
            ['A faint, darker copy or trail', 'Ghosting', 'Slow pixel response, overdrive off or too low'],
            ['A dark smear, worst on the dark lane', 'Black smearing', 'VA panels, slow dark-to-light changes'],
            ['A bright or inverted halo', 'Overshoot (inverse ghosting)', 'Overdrive set too high'],
            ['A soft, blurry edge with no copy', 'Motion blur', 'Normal at 60 Hz; less at higher refresh rates'],
          ]}
        />
      </Section>

      {/* Cluster: how to fix monitor ghosting (answered from the results above) */}
      <Section wide id="fix-heading" title="Fix What the Monitor Ghosting Test Shows">
        <p className={p}>A ghosting monitor rarely needs repair; the right settings usually shorten the trails.</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Overdrive:</strong> also called Response Time, Trace Free or OD in the monitor menu. Pick the
            setting with the shortest trail and no bright halo, usually the middle one.
          </li>
          <li>
            <strong className="text-foreground">Refresh rate:</strong> check it&apos;s at the maximum with the{' '}
            <Link href="/screen-refresh-rate-test" className={link}>refresh rate test</Link>. Higher Hz means less blur.
          </li>
          <li>
            <strong className="text-foreground">Cable and port:</strong> use DisplayPort or a cable that supports your monitor&apos;s full
            refresh rate.
          </li>
          <li>
            <strong className="text-foreground">Picture modes:</strong> extra processing such as noise reduction can add trails; turn it off.
          </li>
        </ul>
      </Section>

      {/* Cluster: screen ghosting / ghost screen / ghost display / lcd ghosting / display ghosting (~1.5K) */}
      <Section wide id="screen-heading" title="Monitor Ghosting Test on a Laptop, TV or Other Screen">
        <p className={p}>
          Screen ghosting is the same on any LCD or OLED display: open the monitor ghosting test on the laptop, TV or tablet you want to check and run it in
          fullscreen. TVs often have a game mode that cuts processing and reduces display ghosting.
        </p>
        <p className={p}>
          A &ldquo;ghost screen&rdquo; can also mean a faint image that stays on screen when nothing moves. That is image retention or burn-in,
          not motion ghosting; check it with the <Link href="/screen-burn-in-test" className={link}>screen burn-in test</Link>. More detail is
          in the <Link href="/screen-problems/ghosting" className={link}>ghosting guide</Link>.
        </p>
      </Section>
    </div>
  )
}
