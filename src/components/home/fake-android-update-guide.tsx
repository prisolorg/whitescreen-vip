import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Fake Android Update page, H1 "Fake Android Update Screen" (English). Order follows search demand:
 * fakeupdate / fake update / update screen / android update screen / fake software update android (~210) →
 * phone system update screen / fake android (~70). "fake windows update screen" (~1.5K) belongs to the Fake Windows Update
 * Screen page and is linked; phone brand names are left out.
 */
export function FakeAndroidUpdateGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: fakeupdate / fake update / update screen / android update screen / fake software update android (~210) */}
      <Section wide id="what-heading" title="Fake Android Update Screen: What It Shows">
        <p className={p}>
          The fake Android update screen shows a black screen with a spinning icon, &quot;Installing system update&quot;, a green progress bar
          and a percentage that creeps up at random. It never finishes: after 100% it starts again, so the phone looks stuck updating for as
          long as you like. Nothing is installed and nothing on the phone changes.
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Pause / Resume:</strong> freeze the progress at a believable number.</li>
          <li><strong className="text-foreground">Update Speed (More):</strong> 1 for a painfully slow update, 10 for a fast one.</li>
        </ul>
      </Section>

      {/* Cluster: phone system update screen / fake android / samsung-style update screen (~70) */}
      <Section wide id="prank-heading" title="How to Use the Fake Android Update Screen as a Prank">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open the fake Android update on the phone or tablet you want to prank.</li>
          <li>Open More and set Update Speed to 1 or 2 so it crawls.</li>
          <li>Tap Fullscreen, then hand the phone back or leave it on the table.</li>
          <li>Reveal the joke before anyone tries to restart the phone. Swipe or press back to exit fullscreen.</li>
        </ol>
        <p className={p}>
          Pranking a computer instead? Use the <Link href="/fake-windows-10-update" className={link}>fake Windows update screen</Link> or the{' '}
          <Link href="/fake-mac-update" className={link}>fake Mac update</Link>.
        </p>
      </Section>
    </div>
  )
}
