import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Pink Screen page (English). Order follows search demand and autocomplete:
 * pink light / lighting (~4.8K + autocomplete selfie, photo, FaceTime, TikTok, lip sync) → bright / hot pink
 * shades (~8K) → hot pink background and wallpaper (~4.4K + autocomplete wallpaper, laptop).
 * Light pink backgrounds (~19K) live on /backgrounds/light-pink-background, linked from the shade table and background section.
 */
export function PinkScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: pink light / pink lighting / pink LED (~4.8K) + autocomplete photo, selfie, lighting, FaceTime, TikTok, lip sync */}
      <Section wide id="light-heading" title="Pink Screen Light for Selfies, Photos and TikTok">
        <p className={p}>
          A pink screen is an easy, flattering pink light: it softens skin and adds a warm glow without a pink LED or any extra gear. Double-tap the
          preview for fullscreen and turn on Keep screen awake. For neutral, true-to-life light, use <Link href="/" className={link}>this bright white light tool</Link> instead.
        </p>
        <Table
          caption="Ways to use the pink screen as a light"
          head={['Use', 'Settings', 'Tip']}
          rows={[
            ['Selfies and photos', 'Brightness 100%', 'Hold a second phone or tablet just off to the side of your face'],
            ['FaceTime and video calls', 'Brightness 70–100%', 'Place the screen behind your camera, facing you'],
            ['TikTok and lip sync videos', 'Brightness 100%, Warm', 'Turn off room lights so the pink lighting stands out'],
            ['Room and mood lighting', 'Brightness 40–70%', 'Point the screen at a wall to spread the glow'],
          ]}
        />
      </Section>

      {/* Cluster: bright pink (~7.3K) + hot / bright / dark / neon pink screen shades (~760) */}
      <Section wide id="shade-heading" title="Pink Screen Colors: Hot Pink, Bright Pink and Deeper Shades">
        <p className={p}>
          This hot pink screen shows #FF69B4 (RGB 255, 105, 180), a bright pink with a little blue in it. Shift the shade with the controls
          under the preview.
        </p>
        <Table
          caption="Pink shades and how to get them"
          head={['Shade', 'How to get it', 'Looks']}
          rows={[
            ['Hot pink / bright pink', 'Neutral, Brightness 100%', 'Vivid and playful (#FF69B4)'],
            ['Coral pink', 'Warm', 'Warmer, peachy pink (#FF4F64)'],
            ['Rose pink', 'Cool', 'Cooler, slightly more magenta (#DD5FB4)'],
            ['Dark pink', 'Brightness 50–70%', 'Deeper, dusky pink (#80355A–#B34A7E)'],
            ['Light / baby pink', <Link key="lp" href="/backgrounds/light-pink-background" className={link}>Light pink background</Link>, 'Soft and pale (#FFB6C1)'],
          ]}
        />
        <p className={p}>
          Want a stronger neon pink? Try the <Link href="/magenta-screen" className={link}>magenta screen</Link>.
        </p>
      </Section>

      {/* Cluster: hot pink background (~4.1K) + background pink / pink bg + autocomplete wallpaper, laptop */}
      <Section wide id="background-heading" title="Pink Screen Background and Wallpaper">
        <p className={p}>
          Need a hot pink background as a file? Use Download under the preview. Your brightness and warmth are applied to the image.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Laptop and desktop:</strong> 1080p, 2K or 4K.
          </li>
          <li>
            <strong className="text-foreground">Phone wallpaper:</strong> Phone (1080×2400), or your phone&apos;s exact size as a custom size.
          </li>
          <li>
            <strong className="text-foreground">Anything else:</strong> a custom width and height up to 8K, like 1080×1920 for TikTok and Reels.
          </li>
        </ul>
        <p className={p}>
          Want it softer? Use the <Link href="/backgrounds/light-pink-background" className={link}>light pink background</Link> (#FFB6C1), or
          see the <Link href="/backgrounds/pink-background" className={link}>pink background</Link> collection.
        </p>
      </Section>
    </div>
  )
}
