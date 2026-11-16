import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for /fake-windows-10-update, which owns "fake windows update screen" (English).
 * Order follows search demand: fake windows update screen (~20K) → fake update prank setup (~6.3K generic
 * "fake update" + prank) → other systems (~6K generic) → real update or loading screen stuck (~3.9K).
 */
export function FakeWindowsUpdateGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: fake windows update screen / fake windows update / windows update fake (~20K) */}
      <Section wide id="how-heading" title="Fake Windows Update Screen: How It Works">
        <p className={p}>
          This fake Windows update screen recreates the Windows 10 &quot;Working on updates&quot; screen: a dark background, a spinning
          loader, a percentage that slowly climbs and the familiar &quot;Don&apos;t turn off your PC. This will take a while.&quot;
        </p>
        <ul className={ul}>
          <li>The percentage rises on its own and starts again after 100%, so this fake loading screen never finishes.</li>
          <li>Use Pause to freeze it, so the update looks stuck.</li>
          <li>Open More to make the update faster or slower.</li>
          <li>Press F or tap Fullscreen to hide the browser. The cursor hides when the mouse is still.</li>
        </ul>
      </Section>

      {/* Cluster: fake update / fakeupdate / fake update screen (~6.1K) + windows update prank (~200) */}
      <Section wide id="prank-heading" title="Fake Windows Update Prank: How to Set It Up">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open this fake update on the computer you want to prank.</li>
          <li>Press F or tap Fullscreen so it covers the whole screen.</li>
          <li>Walk away. The percentage keeps climbing while they wait.</li>
          <li>For a twist, tap Trigger BSOD Prank and the update &quot;fails&quot; with a blue screen.</li>
          <li>Press Esc to end it. Nothing on the computer is changed.</li>
        </ol>
        <p className={p}>
          Want the crash on its own? Use the <Link href="/fake-blue-screen-of-death" className={link}>fake blue screen of death</Link>, or
          crack the glass with the <Link href="/broken-screen" className={link}>broken screen prank</Link>.
        </p>
      </Section>

      {/* Cluster: generic fake update for other systems (part of ~6.1K) + windows 10 update screen */}
      <Section wide id="systems-heading" title="Fake Windows Update Screens for Windows 11, XP and Other Systems">
        <Table
          caption="Fake update screens for each system"
          head={['System', 'Fake update screen']}
          rows={[
            ['Windows 11', <Link key="w11" href="/fake-windows-11-update" className={link}>Fake Windows 11 update</Link>],
            ['Windows XP', <Link key="xp" href="/fake-windows-xp-update" className={link}>Fake Windows XP update</Link>],
            ['Windows XP startup', <Link key="xpb" href="/fake-windows-xp-boot" className={link}>Fake Windows XP boot</Link>],
            ['Mac', <Link key="mac" href="/fake-mac-update" className={link}>Fake Mac update</Link>],
            ['Chromebook', <Link key="cros" href="/fake-chrome-os-update" className={link}>Fake Chrome OS update</Link>],
            ['Ubuntu / Linux', <Link key="ub" href="/fake-ubuntu-update" className={link}>Fake Ubuntu update</Link>],
            ['Android', <Link key="and" href="/fake-android-update" className={link}>Fake Android update</Link>],
          ]}
        />
      </Section>

      {/* Cluster: windows update screen / updating screen (~3K) + windows loading / restart screen (~870) */}
      <Section wide id="real-heading" title="Fake Windows Update or a Real One Stuck?">
        <p className={p}>
          If a real Windows updating screen or Windows loading screen seems stuck, this page can&apos;t fix it, but these steps usually help:
        </p>
        <ul className={ul}>
          <li>Give it time. Large updates can sit on one percentage for a long while.</li>
          <li>Watch for drive activity. A blinking drive light means it is still working.</li>
          <li>Only as a last resort, hold the power button to restart. Windows usually rolls back a failed update on its own.</li>
        </ul>
      </Section>
    </div>
  )
}
