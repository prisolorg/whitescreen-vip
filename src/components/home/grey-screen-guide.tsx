import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Grey Screen page (/gray-screen, English). Order follows search demand:
 * grey screen / gray screen / greyscreen / blank grey screen (~8.1K) → dark grey / dark gray / light grey / light gray /
 * black grey screen (~0.8K) → grey test / grayscale test pattern / grey monitor (~0.1K, plus the merged screen uniformity
 * test page). "grey loading screen" and "grey home screen" (device errors) are off-intent and left out.
 */
export function GreyScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: grey screen / gray screen / greyscreen / blank grey screen / blank gray screen / grey blank screen (~8.1K) */}
      <Section wide id="use-heading" title="Grey Screen: A Blank Gray Screen in Fullscreen">
        <p className={p}>
          This grey screen fills your display with plain, neutral gray (#808080 by default). Double-tap the preview for a blank grey screen in
          fullscreen, and turn on Keep screen awake so the display doesn&apos;t sleep.
        </p>
        <Table
          caption="What people use a gray screen for"
          head={['Use', 'Why gray works']}
          rows={[
            ['Checking a monitor or TV', 'Patches, bands and tints stand out on a flat gray that white and black hide'],
            ['Neutral light or backdrop', 'Gray adds no color cast to products, prints or your face'],
            ['Resting the eyes', 'A dimmed gray screen is calmer than white for a second screen or a break'],
            ['Background image', 'Download a gray PNG at 1080p, 2K, 4K, Phone (1080×2400) or a custom size'],
          ]}
        />
        <p className={p}>
          Grey or gray? Same color: grey is the British spelling, gray the American one.
        </p>
      </Section>

      {/* Cluster: dark grey screen / dark gray screen / black grey screen / light grey screen / light gray screen (~0.8K) */}
      <Section wide id="levels-heading" title="Grey Screen Shades: Dark Grey, Mid Gray and Light Gray">
        <p className={p}>
          Pick a Gray level under the preview, then fine-tune it with Brightness and Cool, Neutral or Warm. Downloads use the level you pick.
        </p>
        <Table
          caption="Gray levels on this page"
          head={['Gray level', 'Color', 'Best for']}
          rows={[
            ['5% and 10%', 'Near-black grey (#0D0D0D, #1A1A1A)', 'Backlight bleed, clouding and IPS glow in a dark room'],
            ['25%', 'Dark grey (#404040)', 'A dark gray screen that is easy on the eyes; dark patches'],
            ['50%', 'Mid gray (#808080)', 'Dirty screen effect, vertical bands and tint'],
            ['75%', 'Light gray (#BFBFBF)', 'Dark corners, smudges and dust while cleaning'],
          ]}
        />
        <p className={p}>
          Want it darker still? Lower Brightness on the 5% level for an almost black gray, or open the{' '}
          <Link href="/black-screen" className={link}>black screen</Link>. For bright light, use the <Link href="/" className={link}>full-screen white light</Link>.
        </p>
      </Section>

      {/* Cluster: grey test / grey monitor / grayscale test pattern + screen uniformity test (merged page) (~0.1K+) */}
      <Section wide id="test-heading" title="Grey Screen Uniformity Test for Monitors and TVs">
        <p className={p}>
          A flat gray field is the standard screen uniformity test: on a perfect panel every gray level looks equally even from edge to edge. To check
          yours:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Dim the room, set Brightness to 100% and open fullscreen.</li>
          <li>Step through the gray levels from 5% to 75%, looking at the whole screen from a normal distance.</li>
          <li>Note anything that changes across the panel rather than staying put.</li>
        </ol>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Bright edges or corners on 5–10%:</strong>{' '}
            <Link href="/screen-problems/backlight-bleed" className={link}>backlight bleed</Link>, or{' '}
            <Link href="/screen-problems/ips-glow" className={link}>IPS glow</Link> if it shifts when you move your head.
          </li>
          <li><strong className="text-foreground">Cloudy blotches on dark grey:</strong> clouding, common on LCD TVs.</li>
          <li><strong className="text-foreground">Vertical bands or a dirty look on 50%:</strong> dirty screen effect.</li>
          <li><strong className="text-foreground">Pink or green areas:</strong> uneven tint across the panel.</li>
          <li><strong className="text-foreground">Darker corners on 75%:</strong> vignetting.</li>
        </ul>
        <p className={p}>
          Some unevenness is normal on large panels. The{' '}
          <Link href="/guides/screen-uniformity-test" className={link}>screen uniformity test guide</Link> explains what counts as a defect. On
          OLED, use the <Link href="/oled-gray-test" className={link}>OLED test</Link> for near-black banding and the{' '}
          <Link href="/oled-burn-in-test" className={link}>OLED burn-in test</Link> for faint logos and bars.
        </p>
      </Section>
    </div>
  )
}
