import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Green Screen page (English). Order follows search demand and autocomplete:
 * green screen color (~1.4K) → computer / laptop / phone as a green screen (~520 + autocomplete) →
 * video, YouTube and editing (~550 + autocomplete) → subpixel and uniformity check (supporting).
 */
export function GreenScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: green screen color / what color is a green screen (~1.4K) + light / bright / dark shades (~390) */}
      <Section wide id="color-heading" title="Green Screen Color: Which Green Works Best?">
        <p className={p}>
          This page shows pure green, #00FF00 (RGB 0, 255, 0). Keying software removes any even, saturated green, but very bright green
          can spill onto your subject. Use the Brightness slider to get the shade you need, and keep the warmth on Neutral.
        </p>
        <Table
          caption="Green screen colors and how to get them on this page"
          head={['Shade', 'Hex', 'How to get it', 'Best for']}
          rows={[
            ['Bright green', '#00FF00', 'Brightness 100%', 'Pixel tests, the most vivid backdrop'],
            ['Chroma key green', '#00B300 (close to the #00B140 standard)', 'Brightness 70%', 'Keying video with less color spill'],
            ['Dark green', '#008000', 'Brightness 50%', 'A softer backdrop in dim rooms'],
          ]}
        />
        <p className={p}>
          Looking for light green or pastel shades? Browse the <Link href="/backgrounds/green-background" className={link}>green background</Link>{' '}
          collection.
        </p>
      </Section>

      {/* Cluster: computer / monitor / laptop / Windows (~520) + autocomplete laptop, windows, phone */}
      <Section wide id="computer-heading" title="Green Screen Computer Setup: Laptop, Monitor or Phone">
        <p className={p}>
          A green computer screen makes a quick backdrop for small shots: products, hands, toys and close-ups.
        </p>
        <ul className={ul}>
          <li>Open this page on a monitor, laptop, tablet or phone and double-tap for fullscreen.</li>
          <li>Turn on Keep screen awake so the green doesn&apos;t switch off mid-take.</li>
          <li>Set Brightness to about 70% for an even green without hotspots.</li>
          <li>Keep your subject 20–30 cm (8–12 in) in front of the screen so green light doesn&apos;t spill onto it.</li>
          <li>Film straight on. Viewing angles can make a screen look darker at the edges.</li>
        </ul>
        <p className={p}>
          A screen is too small to sit behind a person. For full-body or face-cam shots, hang green fabric behind you or add a green
          background in your editor instead.
        </p>
      </Section>

      {/* Cluster: website / online / virtual / digital (~550) + autocomplete youtube, video, editing, background */}
      <Section wide id="video-heading" title="Green Screen for YouTube, Video and Editing">
        <p className={p}>
          Need a green screen online for your edit rather than on a display? Use Download under the preview to save a green PNG at 1080p, 4K, a
          phone size or any custom size, then drop it into your timeline.
        </p>
        <Table
          caption="Where to key out a green screen"
          head={['Software', 'Tool to use']}
          rows={[
            ['OBS Studio', 'Chroma Key filter on the camera source'],
            ['CapCut', 'Remove background → Chroma key'],
            ['Premiere Pro', 'Ultra Key effect'],
            ['DaVinci Resolve', '3D Keyer or Delta Keyer'],
          ]}
        />
        <h3 className={h3}>Green Screen Backgrounds for Zoom and Teams</h3>
        <p className={p}>
          Zoom and Teams offer a virtual green screen effect, but real green fabric behind you gives cleaner edges. For chroma-ready
          images to key in, see the <Link href="/backgrounds/green-screen-background" className={link}>green screen background</Link> set.{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma key</Link> explains how keying works.
        </p>
      </Section>

      {/* Supporting: subpixel and uniformity check (very low volume in this set, kept short) */}
      <Section wide id="check-heading" title="Green Screen Test: Subpixels and Uniformity">
        <p className={p}>
          Green carries most of the brightness we see, so darker corners or cloudy patches stand out on it. A dark dot is a dead green
          subpixel, while a yellow or cyan dot means a red or blue subpixel is stuck on. Run the{' '}
          <Link href="/screen-uniformity-test" className={link}>uniformity test</Link> or read the{' '}
          <Link href="/screen-problems/stuck-pixel" className={link}>stuck pixel guide</Link> for next steps. A black dot that shows on the{' '}
          <Link href="/" className={link}>white screen</Link> as well is a fully dead pixel.
        </p>
      </Section>
    </div>
  )
}
