import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Purple Screen page (English). Order follows search demand:
 * purple screen + misspellings / purple display (~11.5K) → purple light / purple light screen / purple uv light screen (~3K) →
 * violet / bright / light / dark purple screen (~0.3K). Light purple backgrounds live on /backgrounds/purple-background.
 */
export function PurpleScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: purple screen / purple screens / screen purple / a purple screen / purple display + misspellings (~11.5K) */}
      <Section wide id="use-heading" title="Purple Screen in Fullscreen, Ready in One Tap">
        <p className={p}>
          This purple screen fills your display with vivid purple (#8000FF: full blue, half red, no green). Double-tap the preview for fullscreen
          and turn on Keep screen awake so it stays on.
        </p>
        <Table
          caption="Ways to use a purple screen"
          head={['Use', 'Tip']}
          rows={[
            ['Mood and party lighting', 'Full brightness in a dark room, screen facing a wall'],
            ['Gaming and streaming backdrop', 'Put a tablet or second monitor behind you'],
            ['Wallpaper', 'Download a purple PNG at 1080p, 2K, 4K, Phone (1080×2400) or a custom size'],
            ['Display check', 'A green subpixel stuck on shows as a pale dot on purple'],
          ]}
        />
      </Section>

      {/* Cluster: purple light / purple light screen / purple uv light screen (~3K) */}
      <Section wide id="light-heading" title="Purple Screen as a Purple Light">
        <p className={p}>
          Turn Brightness to 100% and the purple screen becomes a soft purple light for photos, TikTok videos, a gaming corner or a calm room. A
          laptop or TV lights a bigger area than a phone.
        </p>
        <ul className={ul}>
          <li>Choose Warm for a redder, pinker purple glow, or Cool for a bluer violet.</li>
          <li>Hold the screen to one side of your face for a colored rim light in selfies.</li>
          <li>
            <strong className="text-foreground">Not a UV light:</strong> screens give off no ultraviolet, so a purple UV light screen cannot make
            fluorescent paint glow, show UV ink or work as a black light.
          </li>
        </ul>
      </Section>

      {/* Cluster: violet screen / bright purple screen / light purple screen / dark purple screen / plain light purple screen (~0.3K) */}
      <Section wide id="shade-heading" title="Purple Screen Shades: Violet, Bright, Dark and Light Purple">
        <Table
          caption="Purple shades and how to get them"
          head={['Shade', 'How to get it']}
          rows={[
            ['Bright purple / violet screen', 'Neutral, Brightness 100%'],
            ['Redder purple', 'Warm'],
            ['Bluer violet', 'Cool'],
            ['Dark purple', 'Lower Brightness to 30–60%'],
            [
              'Light purple, lilac, lavender',
              <Link key="pb" href="/backgrounds/purple-background" className={link}>Purple background</Link>,
            ],
          ]}
        />
        <p className={p}>
          The purple background page has lighter and deeper shades, such as Lilac, Lavender, Amethyst and Indigo, as PNG or CSS. For a louder
          pink-purple, try the <Link href="/magenta-screen" className={link}>magenta screen</Link>.
        </p>
      </Section>
    </div>
  )
}
