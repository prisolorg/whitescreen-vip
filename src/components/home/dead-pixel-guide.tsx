import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Dead Pixel Test page (English). Order follows search demand:
 * dead pixel test / check / pixel test / lcd test (~150K) → what a dead pixel looks like, stuck pixels (~6K) →
 * phone, laptop, monitor and TV (~5K) → fixing dead pixels (~4K, answered honestly).
 * Generic "screen test / display test" terms belong to the Monitor Test page; other languages are left out.
 */
export function DeadPixelGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: dead pixel test / dead pixel check / pixel test / lcd test / dead pixel checker (~150K) */}
      <Section wide id="how-heading" title="Dead Pixel Test: How to Check Your Screen">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Clean the screen so dust isn&apos;t mistaken for a pixel.</li>
          <li>Double-tap or press F for fullscreen, so every pixel is tested.</li>
          <li>Tap the screen or use the arrow keys to step through 9 colors: black, white, red, green, blue, cyan, magenta, yellow and gray.</li>
          <li>Look closely at each color, edge to edge. Or press Auto-cycle to change color every few seconds.</li>
        </ol>
        <p className={p}>
          It works as a pixel test and LCD test on any monitor, laptop, phone, tablet or TV with a browser. To check one color for longer,
          open the <Link href="/black-screen" className={link}>black screen</Link> or the <Link href="/" className={link}>white screen</Link>.
        </p>
      </Section>

      {/* Cluster: what is a dead pixel / what does a dead pixel look like / stuck pixel / white pixel (~6K) */}
      <Section wide id="types-heading" title="Dead Pixel Test Results: Dead, Stuck or Hot?">
        <p className={p}>What is a dead pixel? It is a pixel that no longer lights up at all. Here is how to tell it from the others:</p>
        <Table
          caption="What a pixel fault looks like"
          head={['What you see', 'Most visible on', 'What it is']}
          rows={[
            ['A black dot that never lights', 'White and bright colors', 'Dead pixel'],
            ['A dot stuck on red, green or blue', 'Black and other colors', 'Stuck pixel'],
            ['A dot that is always white', 'Black', 'Hot pixel'],
            ['Specks that move when you wipe', 'Any color', 'Dust, not a pixel'],
          ]}
        />
        <p className={p}>
          Learn more in the <Link href="/screen-problems/stuck-pixel" className={link}>stuck pixel</Link> and{' '}
          <Link href="/screen-problems/hot-pixel" className={link}>hot pixel</Link> guides.
        </p>
      </Section>

      {/* Cluster: dead pixels on phone / dead pixel on monitor / laptop / iphone / tv (~5K) */}
      <Section wide id="devices-heading" title="Dead Pixel Test on a Phone, Laptop, Monitor or TV">
        <ul className={ul}>
          <li>Phone and iPhone: turn brightness up, tap the fullscreen icon and tap through the colors.</li>
          <li>Laptop and monitor: set the display to its native resolution so one pixel shows as one pixel.</li>
          <li>TV: open the page in the TV&apos;s browser, or cast a laptop tab, and check from close up.</li>
          <li>New device? Run the dead pixel check straight away, while you can still return it.</li>
        </ul>
      </Section>

      {/* Cluster: dead pixel fix / how to fix dead pixels / dead pixel fixer / repair (~4K) */}
      <Section wide id="fix-heading" title="After the Dead Pixel Test: Can It Be Fixed?">
        <p className={p}>
          Looking for a dead pixel fix? A truly dead pixel almost never comes back, because it gets no power. A stuck pixel sometimes does: rapidly flashing colors over it
          for 10 to 20 minutes can wake it up. The <Link href="/screen-burn-in-test" className={link}>screen burn-in test</Link> has a color
          cycle fixer you can use for this; skip it if flashing light bothers you.
        </p>
        <p className={p}>
          If the screen is under warranty, check the maker&apos;s dead pixel policy. For a full check of colors and uniformity too, run the{' '}
          <Link href="/monitor-test" className={link}>screen test</Link>.
        </p>
      </Section>
    </div>
  )
}
