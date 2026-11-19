import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Online Stopwatch page (English). Order follows search demand:
 * online stopwatch (~348K + head) → stopwatch timer and count-up timer (~867K) → digital, full screen, classroom
 * (~13.5K) → Google stopwatch comparison (~32K). Other random tools, languages and fixed-length timers are left out.
 */
export function StopwatchGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: online stopwatch / stopwatch online / online stop watch (~348K) */}
      <Section wide id="how-heading" title="Online Stopwatch: Start, Lap and Reset">
        <p className={p}>
          This stop watch online times to the hundredth of a second and keeps a list of laps.
        </p>
        <Table
          caption="Stopwatch controls"
          head={['Action', 'Button', 'Key']}
          rows={[
            ['Start or pause', 'Start / Pause', 'Space'],
            ['Record a lap', 'Lap', 'L'],
            ['Reset to zero', 'Reset', 'R'],
            ['Copy all laps', 'Copy Laps', '—'],
          ]}
        />
        <p className={p}>
          Each lap shows its own split time and the running total, so you can compare laps at a glance. Copy Laps puts them on your
          clipboard for a spreadsheet or message.
        </p>
      </Section>

      {/* Cluster: stopwatch timer / stop watch timer / timer stopwatch (~130K) + count up timer (~5K) */}
      <Section wide id="timer-heading" title="Stopwatch Timer: Count Up From Zero">
        <p className={p}>
          It counts up from zero until you stop it, so it is the online timer to use when you don&apos;t know how long something will take.
          It works as a count up timer for workouts, speeches, experiments and tasks.
        </p>
        <p className={p}>
          Need to count down from a set time instead, like 10 or 30 minutes? Use the{' '}
          <Link href="/countdown-timer" className={link}>countdown timer</Link>, or the{' '}
          <Link href="/pomodoro-timer" className={link}>Pomodoro timer</Link> for focus sessions with breaks.
        </p>
      </Section>

      {/* Cluster: digital stopwatch / online stopwatch full screen (~9.8K) + classroom / kids / study stopwatch (~3.7K) */}
      <Section wide id="fullscreen-heading" title="Digital Stopwatch in Full Screen">
        <p className={p}>
          Press F or tap Fullscreen for a huge digital stopwatch that the whole room can read. It works well as a classroom timer on a
          projector or smart board.
        </p>
        <ul className={ul}>
          <li>Classroom: time quizzes, group work and reading races.</li>
          <li>Study: track how long each topic really takes.</li>
          <li>Sports and games: time sprints, planks, rounds and puzzles.</li>
        </ul>
      </Section>

      {/* Cluster: google stopwatch / stopwatch google / google timer (~32K) */}
      <Section wide id="google-heading" title="Online Stopwatch or Google Stopwatch?">
        <p className={p}>
          Google&apos;s search results include a small built-in timer. This one adds a full lap list with split times,
          one-click Copy Laps, keyboard shortcuts and a fullscreen display, and you can bookmark it to open it straight away.
        </p>
      </Section>
    </div>
  )
}
