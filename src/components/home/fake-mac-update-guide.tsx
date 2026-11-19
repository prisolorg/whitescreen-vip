import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Fake Mac Update page (English). Small keyword set (~360 Mac-specific searches):
 * mac / apple update and loading screen → prank setup → iPad, iPhone and other systems.
 */
export function FakeMacUpdateGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: apple loading screen / apple update screen / mac update screen / fake mac update (~260) */}
      <Section wide id="how-heading" title="Fake Mac Update Screen: How It Works">
        <p className={p}>
          The fake Mac update screen recreates the macOS install screen: the logo above a thin progress bar and a line like &quot;About 30
          minutes remaining&quot;. When the bar fills, the screen goes dark, shows the logo like a real Apple loading screen, and the update starts
          again.
        </p>
        <ul className={ul}>
          <li>Choose a black or white screen to match the Mac.</li>
          <li>Open More to set how long the update takes (5 to 120 minutes) and where the bar starts.</li>
          <li>Turn off Time remaining for a bar that gives nothing away.</li>
        </ul>
      </Section>

      {/* Cluster: fake apple update / apple fake update + prank intent */}
      <Section wide id="prank-heading" title="Fake Mac Update Prank: How to Set It Up">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open this page on the MacBook or iMac you want to prank.</li>
          <li>Set a long update time, like 120 minutes, so the bar barely moves.</li>
          <li>Press F or tap Fullscreen to hide the menu bar and Dock.</li>
          <li>Walk away, then press Esc to end the joke. Nothing on the Mac changes.</li>
        </ol>
      </Section>

      {/* Cluster: ipad update screen / ios update screen / ipad updating screen (~70) */}
      <Section wide id="devices-heading" title="Fake Mac Update on an iPad, iPhone or Other Computer">
        <p className={p}>
          It works in any browser, so the same Apple update screen also works as a fake iPad update screen or on an iPhone in Safari. Tap
          Fullscreen and it fills the screen.
        </p>
        <p className={p}>
          Pranking a different computer? Use the <Link href="/fake-windows-10-update" className={link}>fake Windows update screen</Link>,
          the <Link href="/fake-chrome-os-update" className={link}>fake Chrome OS update</Link> for Chromebooks, or the{' '}
          <Link href="/fake-ubuntu-update" className={link}>fake Ubuntu update</Link>. For phones, try the{' '}
          <Link href="/broken-screen" className={link}>broken screen prank</Link>.
        </p>
      </Section>
    </div>
  )
}
