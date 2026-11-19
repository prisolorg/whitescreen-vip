import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Fake Windows 11 Update page (English). It targets the Windows 11 keywords
 * (~2.5K); the generic "fake windows update screen" terms belong to /fake-windows-10-update, linked below.
 */
export function FakeWindows11UpdateGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: fake windows 11 update / fake windows update screen windows 11 / windows 11 update screen (~2.2K) */}
      <Section wide id="how-heading" title="Fake Windows 11 Update Screen: How It Works">
        <p className={p}>
          The fake Windows 11 update screen copies the modern look: a black screen, a spinning ring, &quot;Working on updates&quot;, a
          percentage that climbs and &quot;Please keep your computer on and plugged in.&quot;
        </p>
        <ul className={ul}>
          <li>The percentage keeps rising and starts again after 100%, so the update never ends.</li>
          <li>Press Pause to freeze it and make the update look stuck.</li>
          <li>Open More to make it faster or slower.</li>
          <li>Press F or tap Fullscreen to hide the browser and taskbar.</li>
        </ul>
      </Section>

      {/* Cluster: fake update screen windows 11 / fake update windows 11 / screen prank windows 11 (~310) */}
      <Section wide id="prank-heading" title="Fake Windows 11 Update Prank: How to Set It Up">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open this fake update screen on the Windows 11 PC you want to prank.</li>
          <li>Press F or tap Fullscreen so it fills the display.</li>
          <li>Leave it running. The ring spins and the percentage creeps up.</li>
          <li>For a twist, tap Trigger BSOD Prank so the update &quot;crashes&quot;.</li>
          <li>Press Esc to end it. Nothing on the PC changes.</li>
        </ol>
      </Section>

      {/* Cluster: windows 11 loading / upgrade screen (~40) + links for the generic terms */}
      <Section wide id="compare-heading" title="Fake Windows 11 Update vs Windows 10 and XP">
        <Table
          caption="Which fake Windows update screen to use"
          head={['Screen', 'Looks like', 'Page']}
          rows={[
            ['Windows 11', 'Black screen, spinning ring, plain percentage', 'This page'],
            ['Windows 10', 'Spinning dots and "Working on updates 14% complete"', <Link key="w10" href="/fake-windows-10-update" className={link}>Fake Windows update screen</Link>],
            ['Windows XP', 'Retro installer with a progress bar', <Link key="xp" href="/fake-windows-xp-update" className={link}>Fake Windows XP update</Link>],
            ['Crash screen', 'The blue screen of death', <Link key="bsod" href="/fake-blue-screen-of-death" className={link}>Fake blue screen of death</Link>],
          ]}
        />
        <p className={p}>
          A real Windows 11 loading screen or upgrade screen can sit on one number for a long time. If yours seems stuck, give it time and keep it
          plugged in before restarting.
        </p>
      </Section>
    </div>
  )
}
