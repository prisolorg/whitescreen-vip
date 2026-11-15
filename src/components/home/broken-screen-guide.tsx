import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Broken Screen Prank page (English). Order follows search demand:
 * cracked screen styles (~24K + shattered ~1.3K) → computer, laptop, Chromebook and TV (~9.5K) + phone (~750) →
 * broken screen prank (~7.8K) → image and wallpaper (~4.5K) → real damage check (repair intent).
 */
export function BrokenScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: cracked screen / crack screen / screen crack (~24K) + shattered / smashed / realistic (~1.3K) */}
      <Section wide id="styles-heading" title="Broken Screen Styles: Cracked, Shattered and LCD Damage">
        <p className={p}>
          Pick a crack style under the preview, then tap or click anywhere to crack the glass at that point. Every tap adds another screen crack,
          so the cracked screen spreads just like real glass.
        </p>
        <Table
          caption="Broken screen styles and what they look like"
          head={['Style', 'Looks like']}
          rows={[
            ['Spider web', 'The classic cracked screen: long cracks spreading from one impact'],
            ['Corner hit', 'A dropped phone that landed on its corner'],
            ['Shattered', 'A smashed, shattered screen with crushed glass all over'],
            ['Hairline', 'A thin, realistic crack that is easy to miss at first'],
            ['Bleeding LCD', 'Ink-like black and colored blotches from a damaged panel'],
            ['Dead lines', 'Bright vertical lines, like a cracked display losing columns'],
          ]}
        />
      </Section>

      {/* Cluster: broken computer screen / cracked computer screen / laptop / PC / Chromebook / TV (~9.5K) + phone (~750) */}
      <Section wide id="computer-heading" title="Broken Screen Prank on a Computer, Laptop or Chromebook">
        <ul className={ul}>
          <li>To fake a broken computer screen, open this page on the laptop, PC, Chromebook or smart TV you want to prank.</li>
          <li>Choose Screen off or Wallpaper under More so the cracked computer screen looks like the real desktop.</li>
          <li>Press F or tap Fullscreen, then add a couple of cracks where the screen would take a hit.</li>
          <li>Step back and wait. The cursor hides on its own when nobody moves the mouse.</li>
        </ul>
        <h3 className={h3}>Broken Phone Screen Prank on iPhone, Android or iPad</h3>
        <p className={p}>
          Open the page in the phone&apos;s browser, choose Lock screen, tap Fullscreen and crack the glass near a corner, where
          real drops usually land. Turn the crack sound on for the full effect.
        </p>
      </Section>

      {/* Cluster: broken screen prank / cracked screen prank / fake broken screen (~7.8K) */}
      <Section wide id="prank-heading" title="Broken Screen and Cracked Screen Prank Tips">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Keep it short.</strong> The best fake broken screen pranks end with a quick reveal and a laugh.
          </li>
          <li>
            <strong className="text-foreground">Pick the right person.</strong> Skip anyone who would be truly upset about a broken device.
          </li>
          <li>
            <strong className="text-foreground">Reveal it fast.</strong> Press Esc or close the tab and the screen is back to normal.
            Nothing on the device changes.
          </li>
        </ul>
        <p className={p}>
          Want another one? Try the <Link href="/hacked-screen" className={link}>hacked screen prank</Link> or the{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>fake blue screen of death</Link>.
        </p>
      </Section>

      {/* Cluster: broken screen image / picture / prank wallpaper / realistic broken screen wallpaper (~4.5K) */}
      <Section wide id="image-heading" title="Broken Screen Image and Wallpaper">
        <p className={p}>
          Want a broken screen picture instead of a live effect? Crack the glass the way you like, then open More and use Download PNG. Set
          the image as your phone&apos;s lock screen or your computer&apos;s wallpaper for a prank that lasts all day.
        </p>
      </Section>

      {/* Repair intent: broken screen / broken computer screen / damaged screen / see cracks (~190) */}
      <Section wide id="real-heading" title="Real Broken Screen? How to Check for Damage">
        <p className={p}>
          Not here for a prank? These quick checks help you tell real damage from a software problem:
        </p>
        <Table
          caption="Signs of a really broken screen"
          head={['What you see', 'Check with']}
          rows={[
            ['Cracks you can feel or see with the screen off', <Link key="w" href="/" className={link}>White screen</Link>],
            ['Black blotches or spreading ink', <Link key="d" href="/dead-pixel-test" className={link}>Dead pixel test</Link>],
            ['Parts of the screen ignore your touch', <Link key="t" href="/touch-screen-test" className={link}>Touch screen test</Link>],
            ['Lines, flicker or odd colors', <Link key="s" href="/screen-problems" className={link}>Screen problems guide</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
