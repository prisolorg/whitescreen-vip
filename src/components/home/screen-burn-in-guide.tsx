import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Screen Burn-In Test page (English). Order follows search demand:
 * screen burn / screen burn in / burn in test / screen burn test (~12K) → image burned into screen, what is screen burn (~0.5K) →
 * fixing burn-in (answered honestly) → phone, LCD and monitor burn-in (~0.6K).
 * OLED / AMOLED burn-in terms (~8K) belong to the OLED Burn-In Test page and are linked; other languages are left out.
 */
export function ScreenBurnInGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: screen burn / screen burn in / burn in test / screen burn test / check for screen burn (~12K) */}
      <Section wide id="how-heading" title="Screen Burn-In Test: How to Check Your Screen">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Choose Check for burn-in and double-tap for fullscreen. Turn the brightness up.</li>
          <li>Start on 50% gray, the field where screen burn shows most clearly, then try 20% gray.</li>
          <li>Switch to white, red, green, blue and black (a full <Link href="/" className={link}>white screen</Link> helps too). Or turn on Auto-cycle in More to change the field every 4 seconds.</li>
          <li>Look for faint shapes that don&apos;t belong: a taskbar, keyboard, app icons, a clock or a channel logo.</li>
        </ol>
        <p className={p}>
          The screen burn-in test is easiest when you know where to look: burn-in usually matches whatever stays on screen the longest.
        </p>
      </Section>

      {/* Cluster: image burned into screen / burned into screen / what is screen burn / burnt screen (~0.5K) */}
      <Section wide id="results-heading" title="Screen Burn-In Test Results: Burn-In or Image Retention?">
        <p className={p}>
          What is screen burn? It is an image burned into the screen after showing the same picture for a long time. The screen burn-in test shows
          both kinds, and time tells them apart:
        </p>
        <Table
          caption="Burn-in vs image retention"
          head={['', 'Image retention', 'Burn-in']}
          rows={[
            ['What it is', 'A ghost image that stays for a while', 'Pixels worn unevenly, for good'],
            ['How long', 'Fades in minutes to hours', 'Does not fade'],
            ['Common on', 'LCD monitors, TVs, laptops', 'OLED and AMOLED phones, TVs and monitors'],
            ['Can the fixer help?', 'Often, yes', 'No; it can only make it less visible'],
          ]}
        />
        <p className={p}>
          Read more in the <Link href="/screen-problems/screen-burn-in" className={link}>screen burn-in</Link> and{' '}
          <Link href="/screen-problems/image-retention" className={link}>image retention</Link> guides.
        </p>
      </Section>

      {/* Cluster: burn-in fixer / fix screen burn / how to remove burn-in (answered honestly) */}
      <Section wide id="fix-heading" title="Screen Burn-In Test Fixer: Can Screen Burn Be Fixed?">
        <p className={p}>
          Choose Burn-in fixer, press Start fixer and leave the screen running. In More you can pick the pattern and run it for 1 to 60
          minutes (10 by default):
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">White sweep:</strong> a moving white bar, with no flashing.</li>
          <li><strong className="text-foreground">Color cycle:</strong> full-screen colors that change quickly.</li>
          <li><strong className="text-foreground">Color noise:</strong> random colored pixels.</li>
        </ul>
        <p className={p}>
          Color cycle and color noise flash; use White sweep if flashing light bothers you. Afterwards, run the screen burn-in test again. If the image is
          still there after several runs, it is likely permanent burn-in. To prevent it, lower the brightness, hide static bars and use a
          screen timeout.
        </p>
      </Section>

      {/* Cluster: phone screen burn / screen burn in mobile / iphone burn in test / lcd burn in / monitor burn in (~0.6K) */}
      <Section wide id="devices-heading" title="Screen Burn-In Test on a Phone, LCD or Monitor">
        <ul className={ul}>
          <li>
            Phone and iPhone: phone screen burn shows up as a keyboard or status bar outline. Open the screen burn-in test in your browser and check the gray
            fields at full brightness.
          </li>
          <li>LCD monitors and laptops: true LCD burn in is rare; an LCD screen burn test usually finds image retention that the fixer can clear.</li>
          <li>
            OLED and AMOLED screens wear fastest. For those, use the{' '}
            <Link href="/oled-burn-in-test" className={link}>OLED burn-in test</Link>.
          </li>
        </ul>
        <p className={p}>
          Seeing spots instead of shapes? Try the <Link href="/dead-pixel-test" className={link}>dead pixel test</Link>, or the{' '}
          <Link href="/screen-uniformity-test" className={link}>screen uniformity test</Link> for patches and uneven brightness.
        </p>
      </Section>
    </div>
  )
}
