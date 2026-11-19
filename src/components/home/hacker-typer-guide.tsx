import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Hacker Typer page (English). Order follows search demand:
 * hacker typer / hackertyper / hacker type / hacker typing / hack typer (~185K) → fake hacking / hacking prank / hacker prank /
 * hacker prank simulator / fake hacker / hack prank (~95K) → hacker simulator / hacking simulator / hacking game / hacker game (~45K) →
 * hacker website / hacker site / hacking website / hacking site (~25K) → hacking screen / hacker screen / fake hacking screen (~22K) →
 * hacker code / fake coding / fake coding screen / coding screen / hacker text (~10K) → look like a hacker (~650).
 * Spanish/Japanese terms (hacker broma, simulador de hacker, ハッカータイパー) belong to translated pages; generic "hacker" / "hack",
 * real hacking, hacker keyboard apps, hacked text generators and competitor names are off-intent and left out.
 * "hacked screen" (~1.5K) is owned by the Hacked Screen Prank page and linked.
 */
export function HackerTyperGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: hacker typer / hackertyper / hacker type / hacker typing / type hacker / hack typer (~185K) */}
      <Section wide id="how-heading" title="How to Use Hacker Typer">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Click the black terminal (or tap it on a phone or tablet).</li>
          <li>Type anything. Every key adds more code (4 characters by default), so random hacker typing looks fast and fluent.</li>
          <li>Press Alt three times for a green ACCESS GRANTED, or Caps Lock three times for a red ACCESS DENIED.</li>
          <li>Press the Fullscreen button for the full effect. Esc closes a pop-up or leaves fullscreen; Clear starts over.</li>
        </ol>
        <p className={p}>
          The F key does not open fullscreen here, because in Hacker Typer every key types code.
        </p>
      </Section>

      {/* Cluster: fake hacking / hacking prank / hacker prank / hacker prank simulator / fake hacker / hack prank / prank hacker (~95K) */}
      <Section wide id="prank-heading" title="Hacker Typer Prank: Fake Hacking in Seconds">
        <ul className={ul}>
          <li>Open the page on a laptop, go fullscreen and type steadily rather than mashing keys. Slow, even typing looks more like real work.</li>
          <li>When someone walks over, press Alt three times. ACCESS GRANTED fills the middle of the screen.</li>
          <li>Keep the hacking prank short and end it with a laugh. It is fake hacking: only text appears on your own screen.</li>
        </ul>
      </Section>

      {/* Cluster: hacker simulator / hacking simulator / hacking game / hacker game / hacking games / hack simulator (~45K) */}
      <Section wide id="simulator-heading" title="Is Hacker Typer a Hacking Simulator or Game?">
        <p className={p}>
          It is a hacker simulator for the look, not a game. There are no levels, scores or puzzles, and you can&apos;t win or lose. It
          simply makes your typing look like a movie hacker at work, which is why people use it for pranks, videos and a quick laugh.
        </p>
      </Section>

      {/* Cluster: hacker website / hacker site / hacking website / hacking site / hacker.com / online hacker (~25K) */}
      <Section wide id="website-heading" title="Hacker Typer Website: Works in Any Browser">
        <p className={p}>
          This hacker website runs online, with nothing to download or install. It works on Windows, Mac, Chromebooks, tablets and phones. The
          code is stored in the page, so Hacker Typer runs no commands and connects to nothing.
        </p>
      </Section>

      {/* Cluster: hacking screen / hacker screen / fake hacking screen / hack screen / green hacker screen (~22K) */}
      <Section wide id="screen-heading" title="Hacker Typer Screen Settings">
        <Table
          caption="Options"
          head={['Option', 'What it does']}
          rows={[
            ['Characters per key (More)', '1 to 12 characters for each key press (default 4)'],
            ['Text color (More)', 'Any color; the default is the classic green hacker screen'],
            ['Clear', 'Empties the terminal and starts the code from the top'],
          ]}
        />
        <p className={p}>
          Want a fake hacking screen that runs by itself? The <Link href="/hacked-screen" className={link}>Hacked Screen Prank</Link> shows
          warnings, logs and a countdown, and the <Link href="/matrix-screensaver" className={link}>Matrix Screen</Link> rains green code.
        </p>
      </Section>

      {/* Cluster: hacker code / fake coding / fake coding screen / coding screen / hacker text / fake code (~10K) */}
      <Section wide id="code-heading" title="What Code Does Hacker Typer Show?">
        <p className={p}>
          The hacker code is C-style source, written to look like low-level system code: a kernel setup routine, a decryption loop with hex
          keys, and status lines such as &quot;scanning ports ... [ OK ]&quot;. It looks real but is fake coding text that does nothing. When it
          reaches the end it starts again from the top.
        </p>
      </Section>
    </div>
  )
}
