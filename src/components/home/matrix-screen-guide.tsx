import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Matrix Screensaver page, H1 "Matrix Screen" (English). Order follows search demand:
 * matrix screensaver / matrix screen saver / screensaver online / online screensaver / screen saver online (~660) →
 * matrix screen / matrix screens / matrix computer screen / the matrix green screen / matrix hacking screen (~450) →
 * matrix wallpaper / matrix background / matrix code / fondo matrix (~390).
 */
export function MatrixScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: matrix screensaver / matrix screen saver / screensaver online / online screensaver / screen saver online (~660) */}
      <Section wide id="saver-heading" title="Matrix Screen Saver Online">
        <p className={p}>
          This Matrix screen saver runs online in your browser, with nothing to install. Press Fullscreen and green code rains down the whole
          display until you exit. It works on Windows, Mac, Chromebooks, tablets and phones.
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pick a color: Green, Blue, Red or Gold.</li>
          <li>Open More to change the characters, speed, density and character size.</li>
          <li>Press Fullscreen. Use Pause to freeze the rain for a still shot.</li>
        </ol>
        <p className={p}>
          A browser screen saver doesn&apos;t replace your computer&apos;s own one, but it is ideal on a spare monitor, a TV or a desk display.
        </p>
      </Section>

      {/* Cluster: matrix screen / matrix screens / matrix computer screen / the matrix green screen / matrix hacking screen (~450) */}
      <Section wide id="settings-heading" title="Matrix Screen Settings">
        <Table
          caption="Options"
          head={['Option', 'Choices']}
          rows={[
            ['Color', 'Green (the classic matrix green screen), Blue, Red, Gold'],
            ['Characters (More)', 'Katakana, Binary or Alphanumeric'],
            ['Speed (More)', '1 to 10'],
            ['Density (More)', '1 (sparse) to 5 (dense)'],
            ['Character size (More)', '12 to 32 px'],
          ]}
        />
        <p className={p}>
          Want a matrix hacking screen that types code as you hit keys? Try the{' '}
          <Link href="/hacker-typer" className={link}>hacker typer</Link> or the{' '}
          <Link href="/hacked-screen" className={link}>hacked screen prank</Link>.
        </p>
      </Section>

      {/* Cluster: matrix wallpaper / matrix wallpapers / matrix background / matrix code / fondo matrix (~390) */}
      <Section wide id="background-heading" title="Matrix Screen as a Live Background">
        <ul className={ul}>
          <li><strong className="text-foreground">Second monitor or TV:</strong> run the Matrix screen in fullscreen as a moving matrix background.</li>
          <li><strong className="text-foreground">Video calls and streams:</strong> share the window as a matrix code backdrop.</li>
          <li><strong className="text-foreground">Still matrix wallpaper:</strong> press Pause, then take a screenshot in fullscreen.</li>
        </ul>
      </Section>
    </div>
  )
}
