import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Red Screen page (English). Order follows search demand and autocomplete:
 * red light for night and sleep (~640 + autocomplete light, sleep, night) → photos, reels and pics (autocomplete)
 * → shades: dark, bright, light (~770) → red screen test (~200, supporting).
 */
export function RedScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: red light / bright red light / red light screen (~640) + autocomplete light, sleep, night */}
      <Section wide id="night-heading" title="Red Screen Light for Night and Sleep">
        <p className={p}>
          Dim red light is the easiest light on your night vision. Your eyes&apos; low-light cells barely react to deep red, which is why
          astronomers and pilots use it. Turn the Brightness slider down, double-tap for fullscreen and turn on Keep screen awake.
        </p>
        <Table
          caption="Suggested settings for using the red screen at night"
          head={['Use', 'Brightness', 'Tip']}
          rows={[
            ['Night light', '20–40%', 'Face the screen at a wall for a soft glow'],
            ['Reading notes in the dark', '30–50%', 'Hold the phone close and keep it below eye level'],
            ['Stargazing', 'As low as it goes', 'Keeps your eyes adjusted to the dark sky'],
            ['Bright red light', '100%', 'For signals, effects and photos, not for winding down'],
          ]}
        />
        <h3 className={h3}>Is a Red Screen Good for Sleep?</h3>
        <p className={p}>
          A dim red light screen is gentler before bed than a bright <Link href="/" className={link}>white screen</Link> or a blue one, because it has no blue light. It&apos;s still a light,
          so keep it low and turn it off once you&apos;re ready to sleep. A screen is not a red light therapy device: those use specific
          wavelengths and much higher power.
        </p>
      </Section>

      {/* Autocomplete: photos, reels, pics, phone, iPhone, Android, laptop */}
      <Section wide id="photo-heading" title="Red Screen for Photos, Reels and Pics">
        <p className={p}>
          A red screen gives selfies and reels a moody red glow with nothing more than a phone or laptop.
        </p>
        <ul className={ul}>
          <li>Turn off the room lights so the red light is the only light on your face.</li>
          <li>Open this all red screen on a second phone, tablet or laptop, set Brightness to 100% and go fullscreen.</li>
          <li>Hold the screen 20–40 cm (8–16 in) from your face, slightly to the side, for shadows and depth.</li>
          <li>Lower the brightness or move the screen back if your skin looks blown out.</li>
        </ul>
        <p className={p}>It works the same on iPhone, Android and laptops. The bigger the screen, the softer the light.</p>
      </Section>

      {/* Cluster: dark / bright / light / neon / blood red (~770) + all / full / blank (~130) */}
      <Section wide id="shade-heading" title="Red Screen Colors: Bright, Dark and Light Red">
        <p className={p}>
          This page shows pure red, #FF0000 (RGB 255, 0, 0): a blank red screen with nothing else on it. Use the Brightness slider to darken
          it, with warmth on Neutral.
        </p>
        <Table
          caption="Red shades and how to get them"
          head={['Shade', 'Hex', 'How to get it']}
          rows={[
            ['Bright red', '#FF0000', 'Brightness 100%'],
            ['Dark red', '#B30000', 'Brightness 70%'],
            ['Deep red / maroon', '#800000', 'Brightness 50%'],
            ['Light red / pink', '#FF69B4', <Link key="p" href="/pink-screen" className={link}>Open the pink screen</Link>],
          ]}
        />
        <p className={p}>
          Need a file? Download saves a red PNG from 1080p to 8K, or phone and custom sizes. More shades are in the{' '}
          <Link href="/backgrounds/red-background" className={link}>red background</Link> collection.
        </p>
      </Section>

      {/* Cluster: red testing / monitor red (~200) — supporting */}
      <Section wide id="test-heading" title="Red Screen Test: Red Subpixels and Color Accuracy">
        <p className={p}>
          Pure red lights only the red subpixels. A dark dot is a dead red subpixel, while a yellow or magenta dot means a green or blue
          subpixel is stuck on. Red is also where cheaper monitors often look orange or pinkish; compare it with another device, or run the{' '}
          <Link href="/screen-color-test" className={link}>screen color test</Link> and the{' '}
          <Link href="/dead-pixel-test" className={link}>dead pixel test</Link>.
        </p>
      </Section>
    </div>
  )
}
