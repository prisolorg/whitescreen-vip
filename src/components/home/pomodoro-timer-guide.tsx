import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Pomodoro Timer page (English). Order follows search demand:
 * pomodoro technique / method (~242K) + tomato timer (~26K) → study timer (~89K) →
 * settings: 25-minute timer, 50/10 and custom (~14K) → online, focus and productivity timer (~68K).
 * Brand names (Pomofocus, studywithme.io) and other languages are left out on purpose.
 */
export function PomodoroTimerGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: pomodoro technique / pomodoro method / what is a pomodoro timer (~242K) */}
      <Section wide id="technique-heading" title="Pomodoro Timer and the Pomodoro Technique">
        <p className={p}>
          The Pomodoro Technique, also called the Pomodoro method, is a simple time management method created by Francesco Cirillo in the late 1980s. You work in short,
          focused sprints called pomodoros and rest between them. This Pomodoro timer runs the whole cycle for you:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pick one task.</li>
          <li>Focus on it for 25 minutes.</li>
          <li>Take a 5-minute short break.</li>
          <li>Repeat. After four pomodoros, take a longer 15-minute break.</li>
        </ol>
        <p className={p}>
          The timer moves from focus to break on its own, plays a chime when each phase ends and counts the sessions you finish.
        </p>
        <h3 className={h3}>Why Is It Called a Tomato Timer?</h3>
        <p className={p}>
          &quot;Pomodoro&quot; is Italian for tomato. Cirillo timed his first sessions with a tomato-shaped kitchen timer, which is why the
          method is also known as the tomato timer or tomato clock technique.
        </p>
      </Section>

      {/* Cluster: study timer / timer for studying / pomodoro technique for studying (~89K) */}
      <Section wide id="study-heading" title="Pomodoro Timer for Studying">
        <p className={p}>
          Using the Pomodoro technique for studying turns this into a great study timer: short blocks are easier to start, and the breaks keep your focus fresh through a long
          revision session.
        </p>
        <ul className={ul}>
          <li>Give each pomodoro one clear goal, like a chapter, a problem set or 20 flashcards.</li>
          <li>Put your phone away until the break.</li>
          <li>Write down stray thoughts and deal with them in the break, not mid-session.</li>
          <li>Use the long break to move around, drink water or get some fresh air.</li>
          <li>Count your finished sessions to see how well the Pomodoro study method works for you.</li>
        </ul>
      </Section>

      {/* Cluster: 25 min timer / 25 minute timer / pomodoro 25 5 / 50 minutes / custom (~14K) */}
      <Section wide id="settings-heading" title="Pomodoro Timer Settings: 25/5, 50/10 and Custom">
        <p className={p}>Open More to set the focus length, both breaks and how many sessions come before a long break.</p>
        <Table
          caption="Popular Pomodoro timer settings"
          head={['Setup', 'Focus', 'Short break', 'Long break', 'Good for']}
          rows={[
            ['Classic 25/5', '25 min', '5 min', '15 min after 4', 'Most work and studying'],
            ['Deep work 50/10', '50 min', '10 min', '20–30 min after 3', 'Writing, coding, long reading'],
            ['Short bursts 15/3', '15 min', '3 min', '15 min after 4', 'Getting started on hard tasks'],
          ]}
        />
        <ul className={ul}>
          <li>Focus can be 5 to 90 minutes, short breaks 1 to 20 and long breaks 5 to 45.</li>
          <li>Turn off Auto-start next to begin each phase yourself.</li>
          <li>Turn the chime off for a silent Pomodoro timer in a library or office.</li>
        </ul>
        <p className={p}>
          Just need a single 25 min timer? The <Link href="/countdown-timer" className={link}>countdown timer</Link> has one-tap presets, and the{' '}
          <Link href="/stopwatch" className={link}>stopwatch</Link> shows how long a task really takes.
        </p>
      </Section>

      {/* Cluster: pomodoro online / online pomodoro timer / pomodoro clock (~26K) + focus / productivity / work timer (~28K) + app / extension (~14K) */}
      <Section wide id="online-heading" title="Online Pomodoro Timer: No App Needed">
        <p className={p}>
          This Pomodoro online timer runs in your browser on a PC, Mac, Chromebook, tablet or phone, with no Pomodoro app or extension to
          install and no account.
        </p>
        <ul className={ul}>
          <li>The countdown shows in the browser tab, so you can keep working in another tab.</li>
          <li>It keeps accurate time even when the tab is in the background.</li>
          <li>Press Space to start or pause, and F for a big fullscreen Pomodoro clock.</li>
        </ul>
        <p className={p}>
          It works just as well as a focus timer, work timer or productivity timer for any task you want to box into sprints.
        </p>
      </Section>
    </div>
  )
}
