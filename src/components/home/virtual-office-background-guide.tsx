import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Office Background for Zoom page (slug virtual-office, English). Grouped by intent, in order
 * of demand:
 * office background for zoom / zoom background office / zoom office background / office zoom background / zoom backgrounds
 * office / office background zoom / zoom office backgrounds (~28K) → virtual office background / office virtual background /
 * zoom virtual background office + office background for teams / google meet (~4.7K) → background zoom formal / best zoom
 * backgrounds for work / professional, corporate, business office background / interview (~2.8K) → home office background
 * for zoom / home office realistic zoom virtual background (~2.3K) → free / hd office background for zoom (~1.6K).
 * Left out: TV-show terms ("the office zoom background", ~2.5K, a brand), Indonesian, Thai and Spanish terms.
 * Honest scope: the page is a soft studio-style backdrop (radial gradient), not a photo of a room.
 * Facts match the background tool: Style menu from src/lib/background-shades.ts; Download PNG menu with 1080p, 2K, 4K,
 * Phone 1080×2400 and a custom size up to 8192 px; Fullscreen button, double-tap, F and Esc; Copy CSS.
 */
export function VirtualOfficeBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: office background for zoom / zoom background office / zoom office background / office zoom background / zoom backgrounds office / office background zoom (~28K) */}
      <Section wide id="how-heading" title="Office Background for Zoom: Download and Add It">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pick a color in the Style menu, such as Slate, Warm Wood or Navy Studio.</li>
          <li>Press Download PNG and choose 1080p. It matches the 16:9 shape of a webcam picture.</li>
          <li>In your video app, open the background settings, add an image and select the PNG.</li>
        </ol>
        <p className={p}>
          This zoom office background is a clean studio-style backdrop, not a photo of a room: a soft pool of light behind your head that
          fades to darker edges. With no shelves, plants or windows, there is nothing for the virtual background effect to cut through
          around your hair and shoulders, so it looks tidy on any call.
        </p>
      </Section>

      {/* Cluster: virtual office background / office virtual background / zoom virtual background office / office background for teams / google meet (~4.7K) */}
      <Section wide id="virtual-heading" title="Virtual Office Background for Zoom, Teams and Meet">
        <p className={p}>
          The same PNG works as a virtual office background in every app that lets you upload your own image, including Teams and Google
          Meet. For the cleanest edges, sit in front of a plain wall with light on your face; a{' '}
          <Link href="/backgrounds/green-screen-background" className={link}>green screen background</Link> behind you gives the sharpest
          cut-out of all.
        </p>
      </Section>

      {/* Cluster: background zoom formal / best zoom backgrounds for work / professional office / corporate / business / interview background (~2.8K) */}
      <Section wide id="professional-heading" title="Professional Office Background for Zoom Meetings">
        <Table
          caption="Styles in the Style menu"
          head={['Style', 'Looks', 'Good for']}
          rows={[
            ['Slate (default)', 'Charcoal gray, soft center', 'Formal meetings, interviews'],
            ['Soft Gray', 'Light gray', 'Bright, friendly calls'],
            ['Warm Wood', 'Warm brown, like a wood-paneled room', 'Client calls, cozy office look'],
            ['Navy Studio', 'Deep blue', 'Corporate and finance meetings'],
            ['Forest Green', 'Muted green', 'Calm team calls'],
            ['Plum', 'Muted purple', 'Creative work'],
          ]}
        />
        <ul className={ul}>
          <li>For a job interview or formal background, Slate or Navy Studio looks the most serious.</li>
          <li>Wear a color that differs from the background, so the edge around you stays crisp.</li>
        </ul>
      </Section>

      {/* Cluster: home office background for zoom / home office realistic zoom virtual background / zoom background home office (~2.3K) */}
      <Section wide id="home-heading" title="Home Office Background for Zoom">
        <p className={p}>
          Working from home? This office background for Zoom hides the laundry, the kitchen and the hallway behind you. Light makes the
          biggest difference to how real it looks: put a lamp or a window in front of you, or use{' '}
          <Link href="/zoom-lighting" className={link}>Zoom Lighting</Link> on a second screen to brighten your face.
        </p>
      </Section>

      {/* Cluster: free office background for zoom / zoom office backgrounds free / office zoom background hd / download (~1.6K) */}
      <Section wide id="free-heading" title="Free HD Office Background for Zoom">
        <p className={p}>
          Every style downloads free as a lossless PNG, with no sign-up and no watermark: 1080p HD, 2K, 4K, or a custom size up to 8192 ×
          8192. Press Copy CSS to use the same office backdrop on a web page.
        </p>
      </Section>
    </div>
  )
}
