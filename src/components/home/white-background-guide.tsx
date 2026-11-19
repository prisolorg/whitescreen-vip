import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the White Background page (English). Order follows search demand, grouped by intent:
 * white background / background white / white bg + misspellings (~610K) → white screen background / white screen (~16K,
 * owned by the home page, so linked) → full / all / pure / bright white background (~11K) → images, HD, wallpaper (~2K).
 * Facts match the background tool: Fullscreen button, double-tap, F and Esc; PNG at 1080p, 2K, 4K, phone 1080×2400 or a
 * custom size up to 8192 px; Copy CSS copies the chosen shade (Pure White #FFFFFF by default). Shades: src/lib/background-shades.ts.
 */
export function WhiteBackgroundGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: white background / background white / white bg / a white background / white back ground + misspellings (~610K) */}
      <Section wide id="how-heading" title="White Background: Show It Full Screen or Download It">
        <p className={p}>
          This page gives you a plain white background in two ways: live on your screen, or as an image file. Both are pure
          #FFFFFF with nothing on top.
        </p>
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with white', 'Press Fullscreen, double-tap the preview or press F'],
            ['Pick a shade of white', 'Choose one in the Shade menu, such as Ivory or Cream (Pure White is the default)'],
            ['Leave full screen', 'Press Esc or the X in the corner'],
            ['Save it as an image file', 'Press Download PNG, then pick a size'],
            ['Use white in a web page or app', 'Press Copy CSS to copy background: #FFFFFF;'],
          ]}
        />
        <p className={p}>
          Nothing to install and no sign-up. Bookmark the page and a white bg is one tap away on any phone, tablet, laptop or
          TV browser.
        </p>
      </Section>

      {/* Cluster: white screen background / white screen / white screen wallpaper (~16K). The home page owns "white screen". */}
      <Section wide id="screen-heading" title="White Background or White Screen: Which Do You Need?">
        <p className={p}>Both show the same pure white. The difference is the controls:</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">This page:</strong> a full screen view plus a PNG download and CSS
            code, for images, wallpapers and designs.
          </li>
          <li>
            <strong className="text-foreground"><Link href="/" className={link}>White screen</Link>:</strong> a white screen
            background with brightness and warmth controls plus keep-awake, for light, tracing and screen checks.
          </li>
        </ul>
        <p className={p}>
          Want a white screen image to show, not save? Use the white screen, which keeps your display awake.
        </p>
      </Section>

      {/* Cluster: full white background / all white background / pure white background / bright white background / full white /
          large white background (~11K) */}
      <Section wide id="pure-heading" title="Full White Background: Pure, Bright #FFFFFF">
        <p className={p}>
          A full white background covers every pixel edge to edge, with no browser bars once you go full screen. The color is
          pure white, the brightest value a display can show:
        </p>
        <Table
          caption="Pure white color codes"
          head={['Format', 'Value']}
          rows={[
            ['HEX', '#FFFFFF'],
            ['RGB', 'rgb(255, 255, 255)'],
            ['HSL', 'hsl(0, 0%, 100%)'],
          ]}
        />
        <p className={p}>To make a pure white background look its brightest:</p>
        <ul className={ul}>
          <li>Turn the screen brightness to maximum.</li>
          <li>Switch off night mode or blue light filters, which tint white yellow.</li>
          <li>Go full screen so no menus or tabs break the all white background.</li>
        </ul>
      </Section>

      {/* Cluster: white background images / white screen image / white wallpaper / white background hd / white screen 1920x1080 (~2K) */}
      <Section wide id="images-heading" title="White Background Images: HD, 4K and Phone Sizes">
        <p className={p}>
          Every download is a lossless PNG, so the white background image has no compression noise or off-white edges.
        </p>
        <Table
          caption="Image sizes"
          head={['Size', 'Pixels', 'Good for']}
          rows={[
            ['1080p HD', '1920 × 1080', 'Slides, videos and most monitors'],
            ['2K', '2560 × 1440', 'Laptops and gaming monitors'],
            ['4K', '3840 × 2160', '4K TVs, monitors and video editing'],
            ['Phone', '1080 × 2400', 'A white wallpaper for your lock or home screen'],
            ['Custom', 'Up to 8192 × 8192', 'Square posts, stories or any exact size'],
          ]}
        />
      </Section>
    </div>
  )
}
