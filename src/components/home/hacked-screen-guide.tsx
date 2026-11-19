import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Hacked Screen page (English H1: Hacked Screen Prank). Order follows search demand:
 * hacked screen / computer hacked screen (~1.5K) → hacked screen prank / fake hacked screen (~0.3K) →
 * "you have been hacked" screen (~0.1K, with a scam warning for real pop-ups).
 */
export function HackedScreenGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: hacked screen / hacked screen prank / fake hacked screen / hack prank website (~1.7K) */}
      <Section wide id="how-heading" title="Hacked Screen Prank: How to Set It Up">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pick a style: Red alert or Green terminal.</li>
          <li>Open More to type your own headline (SYSTEM HACKED by default) or hide the &ldquo;just kidding&rdquo; note.</li>
          <li>Turn on Siren sound if you want an alarm.</li>
          <li>Double-tap or press F for fullscreen, then leave the computer for your friend to find.</li>
        </ol>
        <p className={p}>Press Esc to leave fullscreen and end the hacked screen prank.</p>
      </Section>

      {/* Cluster: what the fake hacked screen shows (computer hacked screen / getting hacked screen) */}
      <Section wide id="shows-heading" title="What the Hacked Screen Prank Shows">
        <ul className={ul}>
          <li>A blinking &ldquo;security breach detected&rdquo; warning and a glitching headline.</li>
          <li>Fake hacking steps such as &ldquo;Bypassing firewall&rdquo; and &ldquo;Decrypting password vault&rdquo;.</li>
          <li>A progress bar and a 59-second countdown that both loop, so the fake hacked screen never really finishes.</li>
          <li>Scrolling fake logs, scanlines and a pulsing red or green glow.</li>
        </ul>
        <p className={p}>
          Nothing is installed and nothing on the computer is touched. The hacked screen prank is only a web page.
        </p>
      </Section>

      {/* Cluster: prank etiquette */}
      <Section wide id="rules-heading" title="Hacked Screen Prank: Keep It Fun">
        <ul className={ul}>
          <li>Prank people who will laugh, and reveal the joke within a minute.</li>
          <li>Skip work computers, where it could alarm the IT team, and anyone easily scared.</li>
          <li>Keep the &ldquo;just kidding&rdquo; note on if you&apos;re unsure how they&apos;ll react.</li>
        </ul>
        <p className={p}>
          More screen pranks: the <Link href="/hacker-typer" className={link}>hacker typer</Link>, the{' '}
          <Link href="/broken-screen" className={link}>broken screen prank</Link> and the{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>fake blue screen of death</Link>.
        </p>
      </Section>

      {/* Cluster: you have been hacked screen / you've been hacked screen (~0.1K) */}
      <Section wide id="real-heading" title="Not a Hacked Screen Prank? Real Warning Pop-Ups">
        <p className={p}>
          A &ldquo;you have been hacked&rdquo; screen you didn&apos;t open yourself, asking you to call a number or pay, is almost always a
          scam:
        </p>
        <ul className={ul}>
          <li>Don&apos;t call the number, pay, or let anyone connect to your computer.</li>
          <li>Close the browser; if it won&apos;t close, use Task Manager (Ctrl + Shift + Esc) or Force Quit on a Mac.</li>
          <li>Run your antivirus, and change passwords from another device if you entered any.</li>
        </ul>
      </Section>
    </div>
  )
}
