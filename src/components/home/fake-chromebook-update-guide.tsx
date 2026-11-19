import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Fake Chrome OS Update page, H1 "Fake Chromebook Update Screen" (English). Order follows search demand:
 * fake chromebook / fake chrome update / chromebook update(ing) screen / fake chromebook update screen (~600) →
 * chromebook pranks / fake loading screen / fake screen update (~860) → broken / cracked chromebook screen prank (~280, linked).
 * Generic "fake update(r)" (~2K) belongs to the Fake Windows Update Screen page; "chromebook simulator / emulator" and hacking
 * terms are off-intent (this is not an OS emulator and does not hack anything) and are left out.
 */
export function FakeChromebookUpdateGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: chromebook pranks / fake loading screen / fake screen update / updating screen (~860) */}
      <Section wide id="prank-heading" title="Fake Chromebook Update Screen Prank">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open this page on the Chromebook.</li>
          <li>Open More and set Update Speed to 1 or 2 so the update crawls.</li>
          <li>Press Fullscreen; the cursor hides and the screen looks like a Chromebook updating.</li>
          <li>Press Esc to close the fake Chromebook update and reveal the joke.</li>
        </ol>
        <p className={p}>
          It is one of the easiest Chromebook pranks: it runs in the browser, needs no extension or admin rights, and changes nothing on the
          laptop. It also works as a fake loading screen for videos and presentations.
        </p>
      </Section>

      {/* Cluster: fake chromebook / fake chrome update / chromebook update screen / chromebook updating screen / fake chromebook update screen (~600) */}
      <Section wide id="what-heading" title="What the Fake Chromebook Update Screen Shows">
        <ul className={ul}>
          <li>A dark screen with a spinning colored ring, &quot;Updating your device&quot; and a thin blue progress bar.</li>
          <li>A percentage that rises at random and starts again after 100%, so the fake Chrome update never finishes.</li>
          <li>Pause / Resume to hold the progress at a believable number.</li>
        </ul>
      </Section>

      {/* Cluster: fake broken chromebook screen / cracked chromebook screen prank / broken screen prank chromebook (~280) */}
      <Section wide id="more-heading" title="More Pranks Beyond the Fake Chromebook Update Screen">
        <p className={p}>
          Want a fake broken Chromebook screen instead? The <Link href="/broken-screen" className={link}>broken screen prank</Link> shows cracked
          glass in fullscreen. For a classic computer fake update, try the{' '}
          <Link href="/fake-windows-10-update" className={link}>fake Windows update screen</Link>.
        </p>
      </Section>
    </div>
  )
}
