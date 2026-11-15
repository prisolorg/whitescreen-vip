import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Black Screen page (English). Order follows search demand:
 * how to make it fullscreen → black screen image → all / pure black → blank screen and black page →
 * dark screen / blackout → display checks (supporting).
 */
export function BlackScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: fullscreen (~2.8K) + how to make my screen black */}
      <Section wide id="howto-heading" title="How to Get a Black Screen in Full Screen">
        <ul className={ul}>
          <li>Double-tap the preview or press F for a plain black screen, edge to edge.</li>
          <li>On a phone, tap the fullscreen icon in the corner of the preview.</li>
          <li>Turn on Keep screen awake so the display doesn&apos;t dim or sleep.</li>
          <li>Press Esc or double-tap again to exit. The cursor hides on its own while you stay still.</li>
        </ul>
      </Section>

      {/* Cluster: black screen image / picture / PNG / sizes (~25K) */}
      <Section wide id="image-heading" title="Black Screen Image: Download a Black Picture or PNG">
        <p className={p}>
          Need a black screen image instead of a live screen? Use Download under the preview to save a pure black (#000000) PNG at the
          exact size you need. It&apos;s a lossless file, so the black stays solid with no compression noise.
        </p>
        <Table
          caption="Black screen image sizes you can download"
          head={['Size', 'Pixels', 'Good for']}
          rows={[
            ['Full HD 1080p', '1920 × 1080', 'YouTube videos, slides, most monitors'],
            ['QHD 1440p', '2560 × 1440', 'Gaming monitors and laptops'],
            ['4K UHD', '3840 × 2160', '4K video timelines and TVs'],
            ['8K UHD', '7680 × 4320', '8K projects and very large screens'],
            ['iPhone / Android', '1179 × 2556 / 1080 × 2400', 'Phone wallpaper, home and lock screen'],
            ['iPad', '2048 × 2732', 'Tablet wallpaper'],
            ['Custom', 'Any size, e.g. 1080 × 1920', 'Vertical video for Stories, Reels and Shorts'],
          ]}
        />
        <h3 className={h3}>Black Screen Video and Editing</h3>
        <p className={p}>
          Drop the 1080p or 4K PNG into any video editor and stretch it to the length you need. It works as a black frame for intros,
          fades and gaps between clips, and saves rendering a separate clip.
        </p>
        <p className={p}>
          Want deeper or textured blacks? Browse the{' '}
          <Link href="/backgrounds/black-background" className={link}>
            black background
          </Link>{' '}
          collection.
        </p>
      </Section>

      {/* Cluster: all / full / pure / pitch / solid black (~10.8K) */}
      <Section wide id="pure-heading" title="All Black Screen: Pure, Pitch Black (#000000)">
        <p className={p}>
          This page shows pure black, RGB 0, 0, 0, the darkest value a display can be asked to show. How black it really looks depends on
          your panel.
        </p>
        <Table
          caption="How a pure black screen looks on each type of display"
          head={['Display', 'What you see', 'Why']}
          rows={[
            ['OLED / AMOLED', 'True pitch black, no glow', 'Each pixel makes its own light and switches off on black'],
            ['Mini-LED', 'Very deep black', 'Local dimming zones turn the backlight down'],
            ['LCD (IPS, VA, TN)', 'Very dark gray in a dark room', 'The backlight stays on behind the panel'],
          ]}
        />
        <p className={p}>
          Not sure which you have? <Link href="/glossary/oled-vs-lcd" className={link}>OLED vs LCD</Link> explains the difference.
        </p>
      </Section>

      {/* Cluster: blank screen (~10.2K) + black page / website (~8K) */}
      <Section wide id="blank-heading" title="Black Screen as a Blank Screen: Hide Your Display">
        <p className={p}>
          A blank black screen hides everything on your display without turning it off, so apps, downloads and calls keep running.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Presentations and projectors:</strong> blank the screen between slides or while people
            talk.
          </li>
          <li>
            <strong className="text-foreground">Privacy:</strong> cover your work in one tap when you step away.
          </li>
          <li>
            <strong className="text-foreground">Focus:</strong> clear a distracting second monitor.
          </li>
        </ul>
        <h3 className={h3}>Black Screen Website: A Black Page in Your Browser</h3>
        <p className={p}>
          Bookmark this black screen website to open a black page whenever you need one. Nothing else loads, there&apos;s no sign-up, and
          you can drag the window to any monitor before going fullscreen.
        </p>
      </Section>

      {/* Cluster: dark screen (~5.1K) + screensaver / blackout (~1.4K) */}
      <Section wide id="dark-heading" title="Black Screen for a Second Monitor: Dark Screen and Blackout">
        <p className={p}>
          Watching a movie or gaming on one display? Put a dark screen on the other so it stops lighting up the room. Move this window to
          the second monitor, go fullscreen and turn on Keep screen awake.
        </p>
        <ul className={ul}>
          <li>Acts as a blackout screen or black screensaver without changing your power settings.</li>
          <li>On OLED, black pixels are switched off, so pure black doesn&apos;t wear the panel like a static bright image.</li>
          <li>On LCD, turn the monitor&apos;s brightness down too for the darkest result.</li>
        </ul>
      </Section>

      {/* Supporting: display checks (no search volume in this set, kept short) */}
      <Section wide id="check-heading" title="Black Screen Test: Bleed, Glow and Stuck Pixels">
        <p className={p}>In a dark room, a full black screen makes a few common faults easy to spot:</p>
        <Table
          caption="Display problems a black screen reveals"
          head={['What you see', 'What it is', 'Learn more']}
          rows={[
            ['Light leaking at the edges', 'Backlight bleed', <Link key="b" href="/screen-problems/backlight-bleed" className={link}>Backlight bleed</Link>],
            ['Glow that shifts as you move', 'IPS glow', <Link key="g" href="/screen-problems/ips-glow" className={link}>IPS glow</Link>],
            ['A dot that stays lit', 'Stuck or hot pixel', <Link key="d" href="/dead-pixel-test" className={link}>Dead pixel test</Link>],
            ['Banding or tint in near-black', 'OLED uniformity', <Link key="o" href="/oled-gray-test" className={link}>OLED gray test</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
