import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Vollbild-Countdown (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Countdown Timer / Countdown-Uhr → Countdown bis Datum / Tage zählen → Countdown online → Einsatzideen → verwandte Timer.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function CountdownTimerGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Vollbild-Countdown: So benutzt du ihn">
        <ul className={ul}>
          <li>Wähle im Menü „Timer“ eine Länge: 1, 5, 10, 15, 25, 45 oder 60 Minuten.</li>
          <li>Brauchst du eine andere Länge? Klicke oder tippe auf Stunden, Minuten oder Sekunden auf dem Bildschirm und gib eine beliebige Zeit ein, bis zu 99 Stunden.</li>
          <li>Drück „Start“ oder die Leertaste, und die Countdown-Uhr läuft los.</li>
          <li>Pausiere und mach dort weiter, wo du aufgehört hast, oder drück R zum Zurücksetzen.</li>
          <li>Ist die Zeit um, blinkt der Bildschirm rot und ein Signalton spielt. Den Ton schaltest du unter „Mehr“ aus.</li>
        </ul>
        <p className={p}>Drück F oder tippe auf „Vollbild“ für einen riesigen Countdown-Timer, den du quer durch den Raum lesen kannst.</p>
      </Section>

      <Section wide id="date-heading" title="Vollbild-Countdown bis zu einem Datum: Tage, Stunden, Minuten">
        <p className={p}>
          Zählst du die Tage bis zu einem Geburtstag, einer Hochzeit, dem Urlaub, einer Prüfung oder einem Launch? Wähle im Menü „Timer“{' '}
          <strong className="text-foreground">Countdown bis zu einem Datum</strong>, such Datum und Uhrzeit im Kalender aus, gib dem Ereignis
          wenn du willst einen Namen und drück „Start“. Der Tage-Countdown zeigt die verbleibenden Tage, Stunden, Minuten und Sekunden, und der
          Signalton spielt, wenn der Moment da ist.
        </p>
        <ul className={ul}>
          <li>Er nutzt Uhr und Zeitzone deines Geräts, Mitternacht heißt also Mitternacht dort, wo du bist.</li>
          <li>Dein Countdown wird in diesem Browser gespeichert: Schließ den Tab, und er zählt noch, wenn du zurückkommst.</li>
          <li>Schalte auf Vollbild, um die verbleibenden Tage auf einem Fernseher, Beamer oder freien Monitor zu zeigen.</li>
          <li>Tippe jederzeit auf „Datum ändern“, um ein neues Ereignis zu wählen.</li>
        </ul>
      </Section>

      <Section wide id="online-heading" title="Vollbild-Countdown online: kostenlos, ohne App">
        <p className={p}>
          Dieser Countdown-Timer läuft online in jedem Browser auf Computer, Tablet, Handy oder Smart-TV. Er ist kostenlos, ohne Anmeldung und
          ohne Installation. Am Computer kannst du in einen anderen Tab wechseln, während er läuft: Die Restzeit steht im Tab-Titel, und der
          Signalton spielt trotzdem bei null. Lass den Tab offen und den Ton an. Handys pausieren Seiten, von denen du wegwechselst, lass den Timer
          dort also auf dem Bildschirm. Geht ein Gerät in den Ruhezustand, holt der Countdown die Zeit auf und der Signalton spielt beim Aufwachen.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ideen für den Vollbild-Countdown">
        <Table
          caption="So kannst du den Vollbild-Countdown nutzen"
          head={['Einsatz', 'Länge']}
          rows={[
            ['Aufgaben und Tests im Unterricht', '10, 15 oder 45 Minuten am Beamer'],
            ['Präsentationen und Vorträge', '5 oder 10 Minuten, im Vollbild dort, wo die Person am Pult es sieht'],
            ['Kochen und Tee', '1, 5 oder 10 Minuten'],
            ['Pausen und Workouts', '1, 5 oder 15 Minuten'],
            ['Fokusphasen', '25 Minuten, dann eine kurze Pause'],
            ['Backen, Wäsche oder eine lange Prüfung', 'Eine eigene Zeit wie 1 Stunde 30 Minuten'],
            ['Geburtstage, Feiertage, Reisen und Launches', 'Countdown bis zum Datum'],
          ]}
        />
      </Section>

      <Section wide id="more-heading" title="Vollbild-Countdown, Stoppuhr oder Pomodoro?">
        <ul className={ul}>
          <li>
            Willst du hoch- statt herunterzählen? Nimm die <Link href="/stopwatch" className={link}>Vollbild-Stoppuhr</Link>.
          </li>
          <li>
            Arbeitest oder lernst du in Blöcken? Der <Link href="/pomodoro-timer" className={link}>Pomodoro-Timer</Link> wiederholt 25-minütige
            Fokusphasen mit Pausen.
          </li>
          <li>
            Willst du nur die Uhrzeit auf dem Bildschirm? Probier den <Link href="/flip-clock-screensaver" className={link}>Klappuhr-Bildschirmschoner</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
