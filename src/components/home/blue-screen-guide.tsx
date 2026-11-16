import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Blue Screen page (English). Order follows search demand and autocomplete:
 * blue light / lighting (~3.6K) → shades: light, dark, navy (~1.6K) → chroma key, photo and editing
 * (autocomplete) → blue light glasses and subpixel test (autocomplete, supporting).
 */
export function BlueScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: blue light / lighting / blue light screen (~3.6K) */}
      <Section wide id="light-heading" title="Blue Screen Light: Use Your Screen for Blue Lighting">
        <p className={p}>
          A full blue screen turns any monitor, laptop or phone into a soft blue light screen. Double-tap the preview for fullscreen, turn on Keep
          screen awake, and set the brightness you need.
        </p>
        <Table
          caption="Ways to use the blue screen as a light"
          head={['Use', 'Settings', 'Tip']}
          rows={[
            ['Background glow for streams and videos', 'Brightness 70–100%', 'Place a second screen behind you, out of shot'],
            ['Photo and video accent light', 'Brightness 100%', 'Light from the side for a cool rim on your subject'],
            ['Mood and party lighting', 'Brightness 40–70%', 'Face the screen at a wall to spread the blue light'],
            ['Bright blue flash', 'Brightness 100%, fullscreen', 'Phones give the strongest light at max brightness'],
          ]}
        />
        <h3 className={h3}>Blue Light From Screens and Sleep</h3>
        <p className={p}>
          Bright blue light in the evening can make it harder to fall asleep. Use blue lighting during the day or for creative shots, and
          switch to the <Link href="/red-screen" className={link}>red</Link> or{' '}
          <Link href="/orange-screen" className={link}>orange</Link> screen at low brightness at night.
        </p>
      </Section>

      {/* Cluster: light / dark / navy / bright blue shades (~1.6K) */}
      <Section wide id="shade-heading" title="Blue Screen Colors: Bright, Dark, Navy and Light Blue">
        <p className={p}>
          This page shows pure blue, #0000FF (RGB 0, 0, 255). Use the Brightness slider to darken it, with warmth on Neutral.
        </p>
        <Table
          caption="Blue shades and how to get them"
          head={['Shade', 'Hex', 'How to get it']}
          rows={[
            ['Bright blue', '#0000FF', 'Brightness 100%'],
            ['Dark blue', '#0000B3', 'Brightness 70%'],
            ['Navy blue', '#000080', 'Brightness 50%'],
            ['Light blue', '#00FFFF', <Link key="c" href="/cyan-screen" className={link}>Open the cyan screen</Link>],
          ]}
        />
        <p className={p}>
          Need a file? Download saves a blue PNG from 1080p to 8K, or phone and custom sizes. More options are in the{' '}
          <Link href="/backgrounds/blue-background" className={link}>blue background</Link> collection.
        </p>
      </Section>

      {/* Autocomplete: chroma key, editing, photography, photo, laptop, monitor, phone, PC (+ editing / backdrop ~80) */}
      <Section wide id="chroma-heading" title="Blue Screen for Chroma Key, Photography and Editing">
        <p className={p}>
          A blue screen works like a green screen, and it&apos;s the better choice in a few cases:
        </p>
        <ul className={ul}>
          <li>Your subject wears green or holds green objects.</li>
          <li>You want less visible color spill. Blue spill is easier to hide, though blue needs more light to key cleanly.</li>
        </ul>
        <p className={p}>
          For small products and close-ups, open this page on a laptop, computer monitor or phone, set Brightness to about 70% and keep the
          subject 20–30 cm (8–12 in) in front of the screen. For editing, download a blue PNG and key it with the same tools you&apos;d use
          for green: OBS Chroma Key, CapCut Chroma key, Premiere Ultra Key or DaVinci Resolve&apos;s 3D Keyer. See{' '}
          <Link href="/glossary/chroma-key" className={link}>chroma key</Link> for how keying works.
        </p>
      </Section>

      {/* Autocomplete: blue light test (+ blue light test online 30) and subpixel check (supporting) */}
      <Section wide id="test-heading" title="Blue Screen Test: Blue Light Glasses and Subpixels">
        <p className={p}>
          Want a quick blue light test for your glasses? Look at this page at full brightness with and without them. Strongly tinted
          lenses make the blue look noticeably darker; clear lenses that block little blue make almost no difference. Try the same with the{' '}
          <Link href="/" className={link}>white screen</Link> to see how much the lenses tint everything. It&apos;s a quick visual check, not a lab measurement.
        </p>
        <p className={p}>
          Pure blue also lights only the blue subpixels. A black dot is a dead blue subpixel, while a magenta or cyan dot means a red or green
          subpixel is stuck on. For a full check, run the <Link href="/dead-pixel-test" className={link}>dead pixel test</Link>.
        </p>
      </Section>
    </div>
  )
}
