import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the OLED Gray Test page (English H1: OLED Test). Order follows search demand:
 * oled test / oled test image (~3.5K) → greyscale / gray test (~0.3K) → burn-in terms (~1.4K, linked to the burn-in tests) →
 * grey screen / gray screen (~0.9K, linked to the Gray Screen page).
 */
export function OledGrayGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: oled test / oled test image / grayscale test / greyscale test / gray test (~3.8K) */}
      <Section wide id="how-heading" title="OLED Test: How to Check Near-Black">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Dim the room and set the screen to around 50% brightness.</li>
          <li>Double-tap for fullscreen so the OLED test covers the whole panel.</li>
          <li>Step through the dark gray levels: 1%, 2%, 3%, 5%, 10%, 15% and 20%. Tap the screen or use the arrow keys.</li>
          <li>End on the near-black ramp, which shows 0% to 20% gray side by side in 12 steps.</li>
        </ol>
        <p className={p}>
          Each OLED test image should look flat and even, and each ramp step should be just visibly different from the next. This OLED test
          works as a greyscale test on any phone, TV, laptop or monitor.
        </p>
      </Section>

      {/* Cluster: what the results mean (banding, mura, black crush) */}
      <Section wide id="results-heading" title="OLED Test Results: What to Look For">
        <Table
          caption="Common near-black OLED faults"
          head={['What you see', 'What it is', 'Common?']}
          rows={[
            ['Blotchy, cloudy patches on dark gray', 'Mura (uneven panel)', 'Some is normal at 1–5%'],
            ['Bands or color tints across the ramp', 'Near-black banding', 'Varies by panel and picture mode'],
            ['The first ramp steps all look black', 'Black crush', 'Check brightness and picture mode'],
            ['A green or magenta cast on dark gray', 'Near-black tint', 'Varies by panel'],
          ]}
        />
        <p className={p}>
          Judge from your normal viewing distance. In an OLED gray test, faint mura on the 1% field is common; problems you see in real movies or
          games matter more.
        </p>
      </Section>

      {/* Cluster: burn in test / burn in checker / oled burn in test / monitor burn in test (~1.4K, linked) */}
      <Section wide id="burn-heading" title="OLED Test vs Burn-In Test">
        <p className={p}>
          This OLED test checks dark tones, not burn-in. Burn-in shows up best on brighter fields like 50% gray, red and blue:
        </p>
        <ul className={ul}>
          <li>
            For an OLED burn-in check, use the <Link href="/oled-burn-in-test" className={link}>OLED burn-in test</Link>.
          </li>
          <li>
            To check, and try to clear, image retention on any screen, use the{' '}
            <Link href="/screen-burn-in-test" className={link}>screen burn-in test</Link>.
          </li>
        </ul>
      </Section>

      {/* Cluster: grey screen / gray screen (~0.9K, linked) */}
      <Section wide id="gray-heading" title="OLED Test or Plain Gray Screen?">
        <p className={p}>
          Need one solid grey screen instead of test levels? Open the <Link href="/gray-screen" className={link}>gray screen</Link>, or the{' '}
          <Link href="/black-screen" className={link}>black screen</Link> to see true OLED black. For a
          full check of color, sharpness and gamma, run the <Link href="/monitor-test" className={link}>screen test</Link>.
        </p>
      </Section>
    </div>
  )
}
