import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Flip Clock Screensaver page (English). Order follows search demand:
 * flip clock online / full screen (~9.2K + head) → aesthetic, digital, seconds (~4.9K) → study clock (~2.1K) →
 * flip clock timer and stopwatch (~6.4K; answered honestly, the clock shows the time only).
 */
export function FlipClockGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: flip clock online / flipclock online / online flip clock / full screen (~9.2K) */}
      <Section wide id="online-heading" title="Flip Clock Online: Full Screen on Any Screen">
        <p className={p}>
          This flip clock online shows the time in big split-flap digits that flip over as the minutes change, like a retro bedside clock.
        </p>
        <ul className={ul}>
          <li>Double-tap the clock or press F to go full screen.</li>
          <li>In fullscreen, the screen stays awake in supported browsers, so it works as a desk clock or screensaver.</li>
          <li>Run it on a laptop, a second monitor, an old tablet or a smart TV browser.</li>
        </ul>
      </Section>

      {/* Cluster: aesthetic flip clock / cute / minimal (~2.9K) + digital flip clock / with seconds / flipping clock (~2K) */}
      <Section wide id="style-heading" title="Aesthetic Flip Clock: Dark, Light and Minimal">
        <p className={p}>Make it look the way you like with the controls under the clock:</p>
        <Table
          caption="Flip clock settings"
          head={['Setting', 'What it does']}
          rows={[
            ['Theme', 'Dark for a clean black clock, Light for a bright, airy look'],
            ['24-Hour Format', 'Switch between 24-hour time and 12-hour time with AM/PM'],
            ['Show Seconds', 'A digital flip clock with seconds, or just hours and minutes (under More)'],
            ['Show Date', 'Adds the weekday and date under the clock (under More)'],
          ]}
        />
        <p className={p}>Hide the seconds and date for the most minimal, aesthetic flipclock look.</p>
      </Section>

      {/* Cluster: study clock / clock for studying / timer clock for study (~2.1K) */}
      <Section wide id="study-heading" title="Flip Clock for Studying">
        <p className={p}>
          Shown big on a second screen, it makes a calm study clock: you can glance at the time without picking up your phone. Pair it
          with the <Link href="/pomodoro-timer" className={link}>Pomodoro timer</Link> to work in focused blocks with breaks.
        </p>
        <p className={p}>
          Want something playful on the spare screen instead? Run the <Link href="/dvd-screensaver" className={link}>DVD screensaver</Link>.
        </p>
      </Section>

      {/* Cluster: flip clock timer / flip timer / stopwatch / countdown (~6.4K) */}
      <Section wide id="timer-heading" title="Flip Clock Timer and Stopwatch">
        <p className={p}>Looking for a flip timer? This clock always shows the current time, so to time something, use one of these:</p>
        <ul className={ul}>
          <li>
            <Link href="/countdown-timer" className={link}>Countdown timer</Link>: count down from any length, with presets like 5, 10 and
            25 minutes.
          </li>
          <li>
            <Link href="/stopwatch" className={link}>Stopwatch</Link>: count up and record laps.
          </li>
          <li>
            <Link href="/pomodoro-timer" className={link}>Pomodoro timer</Link>: focus and break sessions for study or work.
          </li>
        </ul>
      </Section>
    </div>
  )
}
