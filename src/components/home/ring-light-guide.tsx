import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Ring Light Online page (English). Order follows search demand:
 * ring light online / website / virtual (~800 + head) → ring light effect for selfies (~1.2K) →
 * makeup and mirror light (~1.4K) → colors (white, LED, circle ~160).
 */
export function RingLightGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: ring light online / ring light website / online ring light / virtual ring light (~800) */}
      <Section wide id="how-heading" title="Ring Light Online: How to Use It">
        <p className={p}>
          This ring light online draws a glowing ring on your screen, so a phone, tablet or second monitor becomes a virtual ringlight. Put
          it in front of you, just behind your camera.
        </p>
        <ul className={ul}>
          <li>Set Brightness and pick a color: White, Pink, Blue or Purple.</li>
          <li>Open More to change the ring size and thickness, the white color temperature, Fill center and the background.</li>
          <li>Double-tap the screen or press F to fill the display with the ring.</li>
        </ul>
      </Section>

      {/* Cluster: ring light effect / selfie ring light effect (~1K) + selfie / camera ring light (~150) */}
      <Section wide id="effect-heading" title="Ring Light Effect for Selfies, Photos and Video">
        <p className={p}>
          The ring light effect is the round reflection you see in people&apos;s eyes, plus soft, even light with few shadows. To get it:
        </p>
        <ul className={ul}>
          <li>Hold the screen straight in front of your face with the camera in the middle of the ring.</li>
          <li>Leave Fill center off so the ring shape shows up as a catchlight in your eyes.</li>
          <li>Use a bigger, thicker ring for brighter selfies.</li>
        </ul>
      </Section>

      {/* Cluster: light makeup / makeup light / selfie mirror light / mirror ring light (~1.4K) */}
      <Section wide id="makeup-heading" title="Ring Light for Makeup and Mirrors">
        <p className={p}>
          White light at full brightness shows true colors, which makes it a handy makeup light. Prop the screen next to your mirror at eye
          level so your face is lit evenly from the front. It lights your face; it does not show a camera mirror.
        </p>
      </Section>

      {/* Cluster: white ring light / LED / circle light (~160) */}
      <Section wide id="colors-heading" title="Ring Light Colors: White, Pink, Blue and Purple">
        <Table
          caption="Ring light colors and when to use them"
          head={['Color', 'Best for']}
          rows={[
            ['White', 'Makeup, video calls and natural-looking photos; adjust warmth under More'],
            ['Pink', 'Soft, flattering selfies'],
            ['Blue', 'Cool, moody photos and streams'],
            ['Purple', 'Party and creative lighting'],
          ]}
        />
        <p className={p}>
          Need flat light instead of a ring? Try <Link href="/zoom-lighting" className={link}>Zoom lighting</Link> or the plain{' '}
          <Link href="/" className={link}>white screen</Link>.
        </p>
      </Section>
    </div>
  )
}
