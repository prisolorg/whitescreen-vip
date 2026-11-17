import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Yellow Screen page (English). Order follows search demand:
 * warm / yellow light (~1.4K) → solid yellow (~690) → subpixel check (supporting).
 */
export function YellowScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: warm / soft / reading light (~850) + yellow light / flashlight (~580) */}
      <Section wide id="light-heading" title="Yellow Screen as a Warm Light">
        <p className={p}>
          A yellow screen gives off warm light with no blue in it, which makes it a cozy warm light screen for reading, calls and evenings. Double-tap
          the preview for fullscreen and turn on Keep screen awake so the light stays on.
        </p>
        <Table
          caption="Suggested settings for using the yellow screen as a light"
          head={['Use', 'Settings', 'Tip']}
          rows={[
            ['Reading light', 'Warm, Brightness 60–80%', 'Prop a tablet beside your book, angled away from your eyes'],
            ['Video calls', 'Neutral, Brightness 100%', 'Place the screen behind your webcam for a golden glow'],
            ['Evening or night light', 'Warm, Brightness 30–50%', 'Lower brightness keeps it soft in a dark room'],
            ['Photo and video color', 'Neutral or Warm', 'Use a second screen as a warm accent light from the side'],
          ]}
        />
        <h3 className={h3}>Yellow Flashlight on Your Phone</h3>
        <p className={p}>
          Open this page on your phone, turn brightness up and go fullscreen. Warm yellow light is less harsh than a bright white
          flashlight in the dark, so it&apos;s handy for checking on kids or finding your way at night.
        </p>
      </Section>

      {/* Cluster: solid / bright / blank yellow (~690) */}
      <Section wide id="solid-heading" title="Solid Yellow Screen (#FFFF00)">
        <p className={p}>
          This page shows solid yellow: red and green at full strength with blue off (RGB 255, 255, 0). It&apos;s a blank yellow screen with
          nothing else on it, and you can shift the shade with the controls under the preview.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Bright yellow:</strong> Neutral, Brightness 100%.
          </li>
          <li>
            <strong className="text-foreground">Golden yellow:</strong> choose Warm.
          </li>
          <li>
            <strong className="text-foreground">Mustard yellow:</strong> lower the Brightness slider.
          </li>
        </ul>
        <p className={p}>
          Need a file? Download saves a yellow PNG at 1080p, 2K, 4K or phone size, or any custom size up to 8K. For pastel and light yellow shades, browse
          the <Link href="/backgrounds/yellow-background" className={link}>yellow background</Link> collection.
        </p>
      </Section>

      {/* Supporting: subpixel check (no search volume in this set, kept short) */}
      <Section wide id="check-heading" title="Yellow Screen Test: Red and Green Subpixels">
        <p className={p}>
          Yellow lights the red and green subpixels together. A red dot means a dead green subpixel, a green dot means a dead red one, and a
          white dot means a blue subpixel is stuck on. Narrow it down with the <Link href="/red-screen" className={link}>red</Link>,{' '}
          <Link href="/green-screen" className={link}>green</Link> and <Link href="/blue-screen" className={link}>blue</Link> screens.
        </p>
        <p className={p}>
          If your <Link href="/" className={link}>white screen</Link> looks yellow instead, see the{' '}
          <Link href="/screen-problems/yellow-tint-on-screen" className={link}>
            yellow tint guide
          </Link>
          .
        </p>
      </Section>
    </div>
  )
}
