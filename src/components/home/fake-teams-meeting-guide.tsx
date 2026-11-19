import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Fake Teams Meeting Screen page (English). Order follows search demand:
 * fake meeting screen / meeting screen (~780) → fake teams meeting screen / fake teams meeting / video (~210) →
 * teams call screenshot / teams call screen / teams screen (~190). "fake zoom screen" (~40) is linked to the Zoom version.
 */
export function FakeTeamsMeetingGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: fake meeting screen / meeting screen (~780) */}
      <Section wide id="what-heading" title="A Fake Teams Meeting Screen That Looks Busy">
        <p className={p}>
          This fake meeting screen looks like a Teams call in progress: a dark window with your meeting title at the top, five named
          participants, a highlight that moves to whoever is &quot;speaking&quot;, and a toolbar with Chat, People, Raise, React, Camera, Mic,
          Share and a red Leave button. Nobody is really on the call, and nothing connects to Teams.
        </p>
        <ul className={ul}>
          <li>Look busy at your desk or on a shared screen.</li>
          <li>Prank a friend or coworker who walks past.</li>
          <li>Use it as a prop in a video, a class demo or a slide.</li>
        </ul>
      </Section>

      {/* Cluster: fake teams meeting screen / fake teams meeting / fake teams meeting video (~210) */}
      <Section wide id="setup-heading" title="How to Set Up the Fake Teams Meeting">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open More and type your own Meeting Title, such as &quot;Q4 Planning&quot;.</li>
          <li>Turn on Enable Camera Preview to put your real camera in your own tile. The video stays on your device and is never uploaded.</li>
          <li>Press Fullscreen so the fake Teams meeting fills the screen and the cursor hides.</li>
          <li>Click Mic or Camera to toggle them, just like a real call. Press Esc to leave the fake Teams meeting.</li>
        </ol>
      </Section>

      {/* Cluster: teams call screenshot / teams call screen / teams screen (~190) */}
      <Section wide id="screenshot-heading" title="Fake Teams Meeting Screenshot or Recording">
        <p className={p}>
          Need a Teams call screenshot for a slide, a meme or a video? Open fullscreen, wait for the highlight to land on the tile you want, then
          take a screenshot or a screen recording with your device&apos;s own tools. Change the meeting title first so it fits your story.
        </p>
        <p className={p}>
          Want a different app? Try the <Link href="/fake-zoom-meeting" className={link}>fake Zoom meeting screen</Link> or the{' '}
          <Link href="/fake-google-meet" className={link}>fake Google Meet screen</Link>.
        </p>
      </Section>
    </div>
  )
}
