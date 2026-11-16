import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Touch Screen Test page (English). Order follows search demand:
 * touch screen test / touch test / screen touch test (~30K) → ghost touch and multi-touch (~2K) →
 * phone screen test, iPhone, Android, Samsung (~8K) → test codes (~10K, answered with the dialer code) .
 * Generic "screen test / display test" terms belong to the Monitor Test page; other languages are left out.
 */
export function TouchScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: touch screen test / touchscreen test / screen touch test / touch test (~30K) */}
      <Section wide id="modes-heading" title="Touch Screen Test: Three Ways to Check">
        <Table
          caption="Touch screen test modes"
          head={['Mode', 'What it checks', 'How']}
          rows={[
            ['Dead zone grid', 'Spots that ignore your touch', 'Swipe over every square until Covered reads 100%; squares that stay dark are dead zones'],
            ['Draw', 'Smooth, gap-free tracking', 'Draw slow lines across the screen; breaks or jumps show weak areas'],
            ['Multi-touch', 'How many fingers it reads', 'Put several fingers down; Touches and Max show the count'],
          ]}
        />
        <p className={p}>
          Press Clear to start over, and press F or tap Fullscreen so the touchscreen test covers the edges of the screen too.
        </p>
      </Section>

      {/* Cluster: ghost touch test / multi touch test / touch response / sensitivity (~3K) */}
      <Section wide id="ghost-heading" title="Touch Screen Test for Ghost Touch and Multi-Touch">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Ghost touch:</strong> open Draw, then put the phone down and don&apos;t touch it. Lines or dots
            that appear on their own are ghost touches.
          </li>
          <li>
            <strong className="text-foreground">Multi-touch:</strong> most phones read 5 to 10 fingers at once. The badge shows how many touch
            points your device reports.
          </li>
          <li>
            <strong className="text-foreground">Sensitivity:</strong> light, quick swipes in Draw show whether soft touches register.
          </li>
        </ul>
      </Section>

      {/* Cluster: phone screen test / iphone screen test / android / samsung / mobile display test (~8K) */}
      <Section wide id="phone-heading" title="Touch Screen Test on iPhone, Android and Samsung">
        <p className={p}>
          The touch screen test runs in Safari, Chrome or any phone browser, with nothing to install. Remove a thick case or screen
          protector if touches seem to miss near the edges, then test again.
        </p>
        <p className={p}>
          On many Samsung Galaxy phones you can also dial *#0*#, a touch screen test code that opens a built-in test menu. Codes like this depend on the
          brand and model, and some phones don&apos;t have one.
        </p>
      </Section>

      {/* Cluster: lcd / display problems found while testing */}
      <Section wide id="next-heading" title="After the Touch Screen Test">
        <p className={p}>
          If touch is fine but the picture isn&apos;t, check the display itself: run the{' '}
          <Link href="/dead-pixel-test" className={link}>dead pixel test</Link> for dots or the{' '}
          <Link href="/monitor-test" className={link}>screen test</Link> for color and uniformity.
        </p>
      </Section>
    </div>
  )
}
