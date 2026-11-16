import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Countdown Timer page (English). The tool counts down presets (1–60 min), any custom
 * time up to 99:59:59, and to a chosen date and time (days, hours, minutes, seconds). Widget and embed countdowns are
 * not offered, so the copy does not promise them.
 * Order: countdown timer / countdown clock (~316K) → countdown to date / countdown days / day countdown / countdown
 * calendar (~41K) → online countdown timer (~40K) → uses (classroom, presentations, cooking) → related timers.
 * World-time, anime-release and brand (TickCounter) terms are left out.
 */
export function CountdownTimerGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: countdown timer / timer countdown / countdown clock / count down timer (~316K) */}
      <Section wide id="how-heading" title="Countdown Timer: How to Use It">
        <ul className={ul}>
          <li>Pick a length from the Timer menu: 1, 5, 10, 15, 25, 45 or 60 minutes.</li>
          <li>Need another length? Click or tap the hours, minutes or seconds on the screen and type any time, up to 99 hours.</li>
          <li>Press Start, or Space on a keyboard, and the countdown clock begins.</li>
          <li>Pause and pick up where you left off, or press R to reset.</li>
          <li>When time is up, the screen flashes red and a chime plays. Turn the chime off under More.</li>
        </ul>
        <p className={p}>
          Press F or tap Fullscreen for a huge count down timer you can read from across the room.
        </p>
      </Section>

      {/* Cluster: countdown to date / countdown days / day countdown / countdown calendar (~41K) */}
      <Section wide id="date-heading" title="Countdown to a Date: Days, Hours, Minutes">
        <p className={p}>
          Counting the days to a birthday, wedding, holiday, exam or launch? Choose <strong className="text-foreground">Count down to a date</strong> in the Timer
          menu, pick the date and time from the calendar, give the event a name if you like, and press Start. The day countdown shows
          the days, hours, minutes and seconds left, and the chime plays when the moment arrives.
        </p>
        <ul className={ul}>
          <li>It uses your device's clock and time zone, so midnight means midnight where you are.</li>
          <li>Your countdown is saved in this browser: close the tab and it's still counting when you come back.</li>
          <li>Go fullscreen to put the countdown days on a TV, projector or spare monitor.</li>
          <li>Tap Change date to pick a new event at any time.</li>
        </ul>
      </Section>

      {/* Cluster: countdown timer online / online countdown timer / online timer / free countdown timer (~40K) */}
      <Section wide id="online-heading" title="Online Countdown Timer: Free, No App">
        <p className={p}>
          This countdown timer online runs in any browser on a computer, tablet, phone or smart TV. It's a free countdown timer with no
          sign-up and nothing to install. On a computer you can switch to another tab while it runs: the time left shows in the tab title, and the
          chime still plays at zero. Keep the tab open and your sound on. Phones pause pages you switch away from, so keep the timer on
          screen there; if a device sleeps, the countdown catches up and the chime plays when it wakes.
        </p>
      </Section>

      {/* Uses for the countdown clock (generic timer intent) */}
      <Section wide id="uses-heading" title="Countdown Timer Ideas">
        <Table
          caption="Ways to use the countdown timer"
          head={['Use', 'Length']}
          rows={[
            ['Classroom activities and tests', '10, 15 or 45 minutes on the projector'],
            ['Presentations and talks', '5 or 10 minutes, fullscreen where the speaker can see it'],
            ['Cooking and tea', '1, 5 or 10 minutes'],
            ['Breaks and workouts', '1, 5 or 15 minutes'],
            ['Focus sessions', '25 minutes, then a short break'],
            ['Baking, laundry or a long exam', 'A custom time such as 1 hour 30 minutes'],
            ['Birthdays, holidays, trips and launches', 'Count down to the date'],
          ]}
        />
      </Section>

      {/* Cluster: timer / clock / stopwatch alternatives */}
      <Section wide id="more-heading" title="Countdown Timer, Stopwatch or Pomodoro?">
        <ul className={ul}>
          <li>
            Counting up instead of down? Use the <Link href="/stopwatch" className={link}>stopwatch</Link>.
          </li>
          <li>
            Working or studying in blocks? The <Link href="/pomodoro-timer" className={link}>Pomodoro timer</Link> repeats 25-minute focus
            sessions with breaks.
          </li>
          <li>
            Just want the time on screen? Try the <Link href="/flip-clock-screensaver" className={link}>flip clock</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
