import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Fake Blue Screen of Death page (English). Order follows search demand:
 * Windows blue screen styles (~4.1K + head) → error screen, stop codes and message (~4.5K) →
 * prank and crash screen (~2.3K) → what to do about a real one (head-term repair intent).
 */
export function FakeBsodGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: windows blue screen / windows bsod / blue screen windows 11 (~4.1K) + blue screen of death (~6.9K) */}
      <Section wide id="styles-heading" title="Fake Blue Screen of Death: Windows 10, 11 and Classic">
        <p className={p}>
          Pick a fake BSOD style from the Style menu under the preview. Each one matches a real Windows blue screen:
        </p>
        <Table
          caption="Fake blue screen of death styles"
          head={['Style', 'What it shows']}
          rows={[
            ['Windows 10', 'The bright blue error screen with a sad face :(, a percentage counter, a QR code and a stop code'],
            ['Windows 11', 'The same layout in the darker Windows 11 blue'],
            ['Black (new)', 'The black version that newer Windows 11 releases use instead of blue'],
            ['Classic (XP/7)', 'The old-school deep blue screen of death with white technical text'],
          ]}
        />
      </Section>

      {/* Cluster: error screen / windows error screen / blue error screen (~4.3K) + text / image / "your pc ran into a problem" */}
      <Section wide id="error-heading" title="Blue Screen of Death Error Screen: Message and Stop Codes">
        <p className={p}>
          The modern Windows error screen reads &quot;Your PC ran into a problem and needs to restart. We&apos;re just collecting some error info,
          and then we&apos;ll restart for you.&quot; Below it, a counter climbs to 100% and a stop code names the error.
        </p>
        <p className={p}>Open More to pick one of these real stop codes:</p>
        <ul className={ul}>
          <li>CRITICAL_PROCESS_DIED and SYSTEM_SERVICE_EXCEPTION</li>
          <li>IRQL_NOT_LESS_OR_EQUAL and PAGE_FAULT_IN_NONPAGED_AREA</li>
          <li>KMODE_EXCEPTION_NOT_HANDLED and MEMORY_MANAGEMENT</li>
          <li>DPC_WATCHDOG_VIOLATION and VIDEO_TDR_FAILURE</li>
        </ul>
        <p className={p}>The &quot;Reach 100% in&quot; slider sets how long the counter takes, from about 10 seconds to 2 minutes.</p>
      </Section>

      {/* Cluster: blue screen of death prank / bsod prank (~790) + computer / windows crash screen (~1.5K) */}
      <Section wide id="prank-heading" title="Blue Screen of Death Prank: How to Set It Up">
        <ul className={ul}>
          <li>Open this fake computer crash screen on the PC you want to prank and choose the style that matches it.</li>
          <li>Double-tap the screen or press F to go fullscreen.</li>
          <li>Step away. The counter climbs and the cursor hides once the mouse is still.</li>
          <li>Use Restart counter to run it again, and press Esc to end the prank. Nothing on the computer changes.</li>
        </ul>
        <h3 className={h3}>Start With a Fake Update</h3>
        <p className={p}>
          For a bigger reaction, open the <Link href="/fake-windows-10-update" className={link}>fake Windows update screen</Link> first,
          then tap Trigger BSOD Prank so the update &quot;crashes&quot; into a Windows crash screen. On a phone or tablet, the{' '}
          <Link href="/broken-screen" className={link}>broken screen prank</Link> works better.
        </p>
      </Section>

      {/* Head-term repair intent: blue screen of death / screen of death (~890) */}
      <Section wide id="real-heading" title="Got a Real Blue Screen of Death?">
        <p className={p}>A real blue screen means Windows stopped to protect itself. Most of the time, these steps fix it:</p>
        <ul className={ul}>
          <li>Write down the stop code shown at the bottom of the screen.</li>
          <li>Restart and install the latest Windows and driver updates.</li>
          <li>Undo anything new: a recent app, driver or piece of hardware.</li>
          <li>If it keeps happening, search Microsoft support for that stop code.</li>
        </ul>
      </Section>
    </div>
  )
}
