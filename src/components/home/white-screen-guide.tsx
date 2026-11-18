import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the White Screen page (English). Order follows search demand:
 * bright white screen → blank / pure white screen → white screen for light → background images → white screen test.
 */

export function WhiteScreenGuide() {
  return (
    <>
      {/* Cluster: bright white screen (~23.8K/mo) */}
      <Section id="bright-heading" title="Bright White Screen: Get the Brightest White Your Display Can Show">
        <p className={p}>
          The bright white screen above is pure white (#FFFFFF) at 100%, the brightest color any display can show. How bright it
          actually looks depends on your device&apos;s own brightness setting, because a website can&apos;t raise the hardware
          backlight for you.
        </p>

        <h3 className={h3}>How to Make the White Screen Brighter</h3>
        <ul className={ul}>
          <li>Keep the Brightness slider under the screen at 100% and choose Neutral or Cool.</li>
          <li>Turn your device brightness all the way up (table below).</li>
          <li>Switch off anything that tints or dims white: Night Light, Night Shift, True Tone, eye-comfort and battery-saver modes.</li>
          <li>Double-tap the screen to go fullscreen so no browser bars dim the edges.</li>
        </ul>

        <Table
          caption="Where to find maximum brightness on each device"
          head={['Device', 'Max brightness', 'Turn off for pure white']}
          rows={[
            ['Windows 10/11', 'Quick Settings (Win + A) brightness slider', 'Night light, battery saver, content-adaptive brightness'],
            ['Mac', 'Brightness keys or Control Center → Display', 'Night Shift, True Tone, auto-brightness'],
            ['iPhone / iPad', 'Control Center slider', 'Night Shift, True Tone, Low Power Mode'],
            ['Android', 'Quick Settings slider', 'Adaptive brightness, eye comfort / night light'],
            ['Smart TV', 'Picture mode Vivid or Standard, backlight to max', 'Eco / energy-saving picture modes'],
          ]}
        />

        <h3 className={h3}>Is a Very Bright Screen Safe for Your Eyes?</h3>
        <p className={p}>
          A steady white screen doesn&apos;t flicker or flash, but full brightness in a dark room can feel harsh. Lower the slider or
          pick Warm when you only need soft light, and look away for a moment every 20 minutes if you use it for a long time.
        </p>
      </Section>

      {/* Cluster: blank / plain (~13.6K) + pure / all / full white (~8.5K) */}
      <Section id="blank-heading" title="Blank White Screen: A Plain, Pure White Screen With Nothing On It">
        <p className={p}>
          A blank white screen is just that: an all white screen with no text, icons or cursor. A plain white screen like this works as a
          clean backdrop, a light panel or a way to clear your screen in one tap.
        </p>
        <ul className={ul}>
          <li>Double-tap the preview (or press F) for a completely white screen edge to edge.</li>
          <li>The cursor hides after a moment of no movement, so nothing breaks the white.</li>
          <li>Press Esc or double-tap again to leave fullscreen.</li>
        </ul>

        <h3 className={h3}>Pure White vs Warm, Soft and Off-White Screens</h3>
        <Table
          caption="Shades of white you can get with the Cool, Neutral and Warm buttons"
          head={['Shade', 'How to get it', 'Best for']}
          rows={[
            ['Pure white (#FFFFFF)', 'Neutral, Brightness 100%', 'Testing, cleaning, the brightest light'],
            ['Cool white', 'Cool, Brightness 100%', 'Crisp daylight look, product photos'],
            ['Warm white', 'Warm', 'Video calls, makeup, evening reading'],
            ['Soft / off-white', 'Warm + Brightness 60–80%', 'Gentle background light in a dark room'],
          ]}
        />
      </Section>

      {/* Cluster: white screen for light / flashlight / lighting (~10.2K) */}
      <Section id="light-heading" title="White Screen for Light: Use Your Screen as a Lamp">
        <p className={p}>
          Your screen makes a soft, even light source, and at full brightness it gives off a surprisingly bright white light. Turn the
          Brightness slider and device brightness up, choose a warmth, and switch on Keep screen awake so the light doesn&apos;t go out
          mid-call.
        </p>
        <Table
          caption="Suggested settings for using the white screen as a light"
          head={['Use', 'Warmth', 'Tip']}
          rows={[
            ['Video calls (Zoom, Teams, Meet)', 'Warm or Neutral', 'Place the screen just behind your webcam, slightly above eye level'],
            ['Makeup and selfies', 'Neutral', 'Face the screen straight on for even, shadow-free light'],
            ['Reading light', 'Warm', 'Lower the slider to 60–80% to cut glare'],
            ['Product photos', 'Cool', 'Use a second device as fill light from the side'],
            ['Quick flashlight', 'Neutral', 'Fullscreen on your phone at full brightness'],
          ]}
        />
        <h3 className={h3}>Use Your Phone or Laptop as a Flashlight</h3>
        <p className={p}>
          Open this white screen on your phone, turn brightness to max and double-tap for fullscreen. This light screen is gentler than the
          camera flash, which makes it handy for finding things in a dark room without waking anyone.
        </p>
        <p className={p}>
          Want more control? Try the <Link href="/ring-light" className={link}>Ring Light</Link> for a circular catchlight or{' '}
          <Link href="/zoom-lighting" className={link}>Zoom Lighting</Link> for exact color temperature.
        </p>
      </Section>

      {/* Cluster: white screen background / page / image (~5K) */}
      <Section id="background-heading" title="White Screen Background and Image Downloads">
        <p className={p}>
          Need a white screen as a file? Use Download under the screen to save a pure white PNG at the size you need. Your chosen
          brightness and warmth are applied to the image.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Desktop and TV:</strong> 1080p, 2K and 4K.
          </li>
          <li>
            <strong className="text-foreground">Phone and tablet:</strong> Phone (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Custom:</strong> any width and height.
          </li>
        </ul>
        <p className={p}>
          Looking for more white wallpapers and shades? Browse the{' '}
          <Link href="/backgrounds/white-background" className={link}>
            white background
          </Link>{' '}
          collection.
        </p>
      </Section>

      {/* Cluster: white screen test (~2.3K) */}
      <Section id="test-heading" title="White Screen Test: What to Look For">
        <p className={p}>
          A full white screen is the quickest display check. Go fullscreen at full brightness and look across the whole panel.
        </p>
        <Table
          caption="What a white screen test can reveal"
          head={['What you see', 'What it may mean', 'Next step']}
          rows={[
            ['Black or dark dots', 'Dead pixels', <Link key="d" href="/dead-pixel-test" className={link}>Dead pixel test</Link>],
            ['Patches, dark corners or clouds', 'Uneven backlight', <Link key="u" href="/gray-screen" className={link}>Grey screen</Link>],
            ['White looks yellow, blue or pink', 'Color settings or panel tint', <Link key="c" href="/screen-color-test" className={link}>Screen color test</Link>],
            ['Faint shapes of old images', 'Burn-in or image retention', <Link key="b" href="/screen-burn-in-test" className={link}>Burn-in test</Link>],
            ['Specks that move when you wipe', 'Dust or smudges, not pixels', 'Clean the screen and check again'],
          ]}
        />
        <p className={p}>
          Then switch to the <Link href="/black-screen" className={link}>black screen</Link>: stuck pixels and backlight bleed show up best on black.
        </p>
      </Section>
    </>
  )
}

/** FAQs for long-tail intents that have no section of their own (blank vs pure, tracing, cleaning). */
export const WHITE_SCREEN_EXTRA_FAQS = [
  {
    question: 'What is the difference between a blank white screen and a pure white screen?',
    answer:
      'They are the same thing here: a screen filled with pure white (#FFFFFF) and nothing else. Choose Warm or lower the brightness if you want a softer, off-white look.',
  },
  {
    question: 'Can I use a white screen for tracing?',
    answer:
      'Yes. A tablet or monitor at full brightness works as a simple lightbox. Tape your paper in place and trace gently without pressing hard on the screen.',
  },
  {
    question: 'Does a white screen help me clean my monitor?',
    answer:
      'A white screen makes dust, fingerprints and streaks easy to spot. Turn the display off before wiping it, then open the white screen again to check for spots you missed.',
  },
  {
    question: 'Can I use a white screen as a light for Zoom calls?',
    answer:
      'Yes. Put a laptop, tablet or second monitor in front of you at full brightness, just behind or beside your camera. Choose Warm for a softer, more natural skin tone.',
  },
  {
    question: 'Can a white screen show cracks or damage on my phone?',
    answer:
      'It helps. Hairline cracks, pressure marks and dark spots stand out against bright white. Tilt the phone under a light as well, since some cracks only show at an angle.',
  },
] as const
