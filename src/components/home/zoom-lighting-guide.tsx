import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Zoom Lighting page (English). The set is small once virtual-background terms
 * ("zoom background", "background light", ~4.4K) are left out: zoom light / lighting and light screen (~1.9K) →
 * lighting for video calls, meetings and webcams (~720) → ring light (~140).
 */
export function ZoomLightingGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: zoom lighting / zoom light (~1K) + good lighting screen / light screen / white bright light (~850) */}
      <Section wide id="how-heading" title="Zoom Lighting: Turn Your Screen Into a Light">
        <p className={p}>
          This tool turns a spare screen into a soft, even light for your face. It works best on a second monitor, tablet or phone
          placed behind your webcam, so the light hits you from the front.
        </p>
        <ul className={ul}>
          <li>Set Brightness to 100% for a bright white light, or lower it for a softer glow.</li>
          <li>Pick Warm (3000 K), Neutral (4500 K) or Daylight (6500 K).</li>
          <li>Open More for an exact color temperature, a custom light color or Frame mode.</li>
          <li>Double-tap the screen or press F so the good lighting screen fills the whole display.</li>
        </ul>
      </Section>

      {/* Cluster: light for video calls / lighting for zoom meetings / webcam light (~720) */}
      <Section wide id="setup-heading" title="Zoom Lighting Setup for Meetings and Video Calls">
        <Table
          caption="Zoom lighting setups"
          head={['Situation', 'Try this']}
          rows={[
            ['Daytime meeting by a window', 'Daylight, so the screen matches the sunlight'],
            ['Evening video call', 'Warm, at 60–80% brightness'],
            ['Office with ceiling lights', 'Neutral, with the light screen just above your webcam'],
            ['Shadows on one side of your face', 'Add a second light screen on that side'],
          ]}
        />
        <p className={p}>
          The best light for video calls comes from the front: keep bright windows behind the camera, not behind you, and raise the light to
          about eye level. Frame mode lights only the edges of
          the screen for a gentler webcam light.
        </p>
      </Section>

      {/* Cluster: ring light online / ring light for zoom calls (~140) */}
      <Section wide id="ring-heading" title="Zoom Lighting or a Ring Light?">
        <p className={p}>
          Zoom lighting fills your face with flat, even light. For the round catchlight in your eyes that creators love, try the{' '}
          <Link href="/ring-light" className={link}>ring light online</Link>. For a plain bright light, open the{' '}
          <Link href="/" className={link}>white screen</Link> in full screen.
        </p>
      </Section>
    </div>
  )
}
