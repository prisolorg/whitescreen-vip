import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Screen Refresh Rate Test page (English). Order follows search demand:
 * refresh rate test / hz test / monitor refresh rate (~70K) → how to check refresh rate on Windows, Mac, phone (~6K) →
 * 60, 120, 144 Hz (~4K) → frame rate / fps test (~3K, linked). "UFO test" (a brand) and other languages are left out.
 */
export function RefreshRateGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: refresh rate test / hz test / screen refresh rate test / hz checker / monitor hz test (~45K) */}
      <Section wide id="how-heading" title="Refresh Rate Test: How It Works">
        <p className={p}>
          Browsers draw a new frame once per screen refresh, so timing those frames reveals your refresh rate. This Hz test starts on its
          own and shows:
        </p>
        <ul className={ul}>
          <li>Your refresh rate in Hz, rounded to the nearest common rate (60, 120, 144 Hz and so on).</li>
          <li>How long each frame takes in milliseconds, and the share of late frames.</li>
          <li>The lowest and highest rates seen, plus a moving block that looks smoother at higher Hz.</li>
        </ul>
        <p className={p}>
          It works as a refresh rate checker for monitors, laptops and phones. Press Measure again after changing a setting, and double-tap
          for fullscreen on the screen you want to test.
        </p>
      </Section>

      {/* Cluster: how to check monitor refresh rate / what is my refresh rate / phone refresh rate (~6K) */}
      <Section wide id="check-heading" title="Refresh Rate Test vs Your Display Settings">
        <p className={p}>The test shows what your screen is running at right now. To see or change your monitor refresh rate setting:</p>
        <Table
          caption="Where to find the refresh rate setting"
          head={['Device', 'Where to look']}
          rows={[
            ['Windows 11 / 10', 'Settings → System → Display → Advanced display → Choose a refresh rate'],
            ['Mac', 'System Settings → Displays → Refresh Rate'],
            ['iPhone / iPad', 'Fixed by the model; ProMotion models go up to 120 Hz automatically'],
            ['Android', 'Settings → Display → Screen refresh rate (or Motion smoothness)'],
          ]}
        />
        <h3 className={h3}>Why the Result Can Be Lower Than Expected</h3>
        <ul className={ul}>
          <li>The display is set to 60 Hz in settings, or the cable or port can&apos;t carry the higher rate.</li>
          <li>A laptop on battery or a phone in power-saving mode lowers the rate to save power.</li>
          <li>Heavy tabs or apps make the browser skip frames. Close them and measure again.</li>
        </ul>
      </Section>

      {/* Cluster: 120hz refresh rate / 120hz test / 144hz test / high refresh rate (~4K) */}
      <Section wide id="rates-heading" title="Refresh Rate Test Results: 60, 120 and 144 Hz">
        <Table
          caption="Common refresh rates"
          head={['Rate', 'Time per frame', 'Typical screens']}
          rows={[
            ['60 Hz', '16.7 ms', 'Most office monitors, older laptops and TVs'],
            ['90 Hz', '11.1 ms', 'Many mid-range phones'],
            ['120 Hz', '8.3 ms', 'Gaming phones, iPhone Pro, newer TVs and laptops'],
            ['144 Hz', '6.9 ms', 'Gaming monitors'],
            ['240 Hz', '4.2 ms', 'Esports monitors'],
          ]}
        />
      </Section>

      {/* Cluster: frame rate test / fps test (~3K) */}
      <Section wide id="fps-heading" title="Refresh Rate Test or Frame Rate Test?">
        <p className={p}>
          Refresh rate (Hz) is how often your screen redraws; frame rate (FPS) is how many frames your browser or game produces. To check
          motion and FPS, run the <Link href="/frame-rate-test" className={link}>FPS test</Link>, and for blur and trails try the{' '}
          <Link href="/monitor-ghosting-test" className={link}>monitor ghosting test</Link>.
        </p>
      </Section>
    </div>
  )
}
