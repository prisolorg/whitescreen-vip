import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Green Screen Background page (English). Grouped by intent, in order of demand:
 * green screen background / background green screen / greenscreen background / background for green screen / green screen bg
 * + misspellings (~25.7K) → green screen backgrounds / free, best, cool, fun, realistic green screen backgrounds / backgrounds
 * for green screen video / chroma key backgrounds / office green screen background / ideas / download (~8.4K) →
 * green screen backdrop / background screen / green screen hd (~920).
 * No brand names. Facts match the background tool: Fullscreen button, double-tap, F and Esc; Shade menu from
 * src/lib/background-shades.ts (Digital Green #00FF00, Chroma Green #00B140); Download PNG menu with 1080p, 2K, 4K,
 * Phone 1080×2400 and a custom size up to 8192 px; Copy CSS copies the chosen shade.
 */
export function GreenScreenBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: green screen background / background green screen / greenscreen background / background for green screen / green screen bg (~25.7K) */}
      <Section wide id="how-heading" title="Green Screen Background: Show It or Download It">
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Turn a screen into a green screen', 'Press Fullscreen, double-tap the preview or press F (Esc exits)'],
            ['Pick the green', 'Choose Digital Green (#00FF00) or Chroma Green (#00B140) in the Shade menu'],
            ['A green image for video editing', 'Press Download PNG: 1080p, 2K, 4K, Phone (1080 × 2400) or a custom size'],
            ['A green web page or overlay', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>
          A green screen background, also called a greenscreen background or chroma key background, is one even green that video software can find and replace. Digital Green is the brightest and works
          best on screens and in editing; Chroma Green is the darker green used on studio cloth and paint. The download is a free,
          lossless PNG of the exact green, with no watermark.
        </p>
      </Section>

      {/* Cluster: green screen backgrounds / free, best, cool, fun, realistic green screen backgrounds / chroma key backgrounds / office green screen background (~8.4K) */}
      <Section wide id="backgrounds-heading" title="Green Screen Backgrounds to Put Behind You">
        <p className={p}>
          Once the green screen background is keyed out, you need a picture to show in its place. Every image in the{' '}
          <Link href="/backgrounds" className={link}>Backgrounds Library</Link> downloads free as a PNG you can drop in behind you:
        </p>
        <ul className={ul}>
          <li>
            Office green screen background: the <Link href="/backgrounds/virtual-office" className={link}>Office Background for Zoom</Link>,
            in slate, warm wood or navy.
          </li>
          <li>
            Cool green screen backgrounds: the <Link href="/backgrounds/neon-background" className={link}>neon background</Link> glow or a
            bright gradient.
          </li>
          <li>Simple and clean: any plain color, such as white, beige or dark gray.</li>
        </ul>
        <p className={p}>
          In your video or streaming app, turn on its green screen or chroma key setting, pick the green and choose the image.{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma key</Link> explains how the keying works.
        </p>
      </Section>

      {/* Cluster: green screen backdrop / background screen / green screen hd (~920) */}
      <Section wide id="backdrop-heading" title="Use a TV or Monitor as a Green Screen Background Backdrop">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Place a TV, monitor or tablet behind a small product or behind your head and shoulders.</li>
          <li>Open this page on it and show the green screen background full screen in Digital Green.</li>
          <li>Light the subject from the front, and keep it a little away from the screen so green light does not spill onto it.</li>
          <li>Avoid green clothes or props; use the <Link href="/blue-screen" className={link}>Blue Screen</Link> instead if you can&apos;t.</li>
        </ol>
        <p className={p}>
          A screen-sized green screen backdrop suits close-ups, product shots and webcam framing; for a full-body shot you still need a
          large cloth or wall.
        </p>
      </Section>
    </div>
  )
}
