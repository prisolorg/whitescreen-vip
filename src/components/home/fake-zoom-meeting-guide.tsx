import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Fake Zoom Meeting Screen page (English). Order follows search demand:
 * fake zoom meeting (screen) setup (~2.2K) → fake zoom call for videos, classes and pranks (~510 + video, class,
 * generic fake meeting ~340) → Teams and Google Meet versions (~390).
 */
export function FakeZoomMeetingGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: fake zoom meeting screen / fake zoom meeting / fake zoom (~2.2K) */}
      <Section wide id="setup-heading" title="Fake Zoom Meeting Screen: How to Set It Up">
        <p className={p}>
          The fake Zoom meeting screen shows a Zoom-style gallery with five named participants, a green outline that moves to whoever is
          &quot;speaking&quot;, a Recording badge and the familiar toolbar with a red End button.
        </p>
        <ul className={ul}>
          <li>Open More to type your own meeting title.</li>
          <li>Turn on Enable Camera Preview to put your own camera in the &quot;You&quot; tile. It stays on your device.</li>
          <li>Press F or tap Fullscreen so the fake meeting fills the whole screen.</li>
        </ul>
      </Section>

      {/* Cluster: fake zoom call (~510) + fake meeting (~220) + video / camera off (~70) + class (~50) */}
      <Section wide id="uses-heading" title="Fake Zoom Meeting for Videos, Classes and Pranks">
        <p className={p}>A fake Zoom call is handy whenever you need a believable meeting on screen without a real one:</p>
        <Table
          caption="Ways to use the fake Zoom meeting screen"
          head={['Use', 'Tip']}
          rows={[
            ['Film, TikTok and YouTube props', 'Record your screen in fullscreen for a fake meeting video'],
            ['Look busy on a call', 'Leave the fake meeting screen up with your camera off'],
            ['Fake Zoom class or practice', 'Rehearse a lesson or presentation with your camera on'],
            ['Screenshots and mockups', 'Set a meeting title, then take a screenshot'],
            ['Harmless prank', 'Show a friend a "meeting" they forgot to join, then reveal it'],
          ]}
        />
        <p className={p}>
          It&apos;s a screen, not a call: there is no audio, nobody can join, and nothing connects to Zoom.
        </p>
      </Section>

      {/* Cluster: fake teams meeting / fake google meet / fake meet (~390) */}
      <Section wide id="other-heading" title="Fake Zoom Meeting, Teams or Google Meet?">
        <p className={p}>Need a different app? Each one has its own screen:</p>
        <ul className={ul}>
          <li>
            <Link href="/fake-teams-meeting" className={link}>Fake Teams meeting</Link>: controls and a red Leave button in the top bar, with a
            running timer.
          </li>
          <li>
            <Link href="/fake-google-meet" className={link}>Fake Google Meet</Link>: rounded tiles, initials for cameras that are off and a
            meeting code.
          </li>
          <li>
            <Link href="/fake-slack-huddle" className={link}>Fake Slack huddle</Link>: a small huddle window with avatars.
          </li>
        </ul>
      </Section>
    </div>
  )
}
