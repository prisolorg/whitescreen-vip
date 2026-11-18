import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Fake Windows XP Update page, H1 "Fake Windows XP Update Screen" (English). Order follows
 * search demand: fakeupdate / fake updates (~1.8K, generic, mostly owned by the Fake Windows Update Screen page and linked) →
 * windows update prank (~140) → windows xp fake update (~40).
 */
export function FakeWindowsXpUpdateGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: fakeupdate / fake updates (~1.8K) */}
      <Section wide id="what-heading" title="Fake Windows XP Update Screen: Retro Fake Updates">
        <p className={p}>
          This fake update shows the classic early-2000s install screen: deep blue background, &quot;Please wait...&quot;, &quot;Installing update
          3 of 18...&quot; counting up, and a yellow &quot;Do not turn off or unplug your computer&quot; warning. The update number climbs at random
          and starts over after the last one, so the fake Windows XP update screen never ends.
        </p>
        <p className={p}>
          For a modern fake update, use the <Link href="/fake-windows-10-update" className={link}>fake Windows update screen</Link> or the{' '}
          <Link href="/fake-windows-11-update" className={link}>fake Windows 11 update</Link>.
        </p>
      </Section>

      {/* Cluster: windows update prank (~140) */}
      <Section wide id="prank-heading" title="Windows Update Prank With the Fake Windows XP Update Screen">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open More and set Update Speed to 1 for a slow, painful update.</li>
          <li>Press Fullscreen; the cursor hides so it looks like the computer is busy.</li>
          <li>For a bigger shock, press Trigger BSOD Prank to switch to a blue &quot;Your PC ran into a problem&quot; screen, then Restore Update.</li>
          <li>Press Esc to close the fake Windows XP update and reveal the joke.</li>
        </ol>
        <ul className={ul}>
          <li>It runs in the browser only: nothing is installed or changed on the computer.</li>
          <li>Pick someone who will laugh, and end it before they try to unplug anything.</li>
        </ul>
        <p className={p}>
          Want the XP startup instead? Try the <Link href="/fake-windows-xp-boot" className={link}>fake Windows XP boot</Link>.
        </p>
      </Section>
    </div>
  )
}
