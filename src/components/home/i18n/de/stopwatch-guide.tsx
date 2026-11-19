import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Vollbild-Stoppuhr (Deutsch). Deutsche Suchbegriffe: Stoppuhr / Online-Stoppuhr / Stoppuhr online →
 * Stoppuhr mit Runden / Zeit stoppen → Vollbild, digital, Schule → Google-Stoppuhr.
 * Schaltflächen heißen so wie in der deutschen Oberfläche: Start, Pause, Runde, Zurücksetzen, Runden kopieren.
 */
export function StopwatchGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Stoppuhr online: starten, Runde, zurücksetzen">
        <p className={p}>Diese Online-Stoppuhr misst auf die Hundertstelsekunde genau und speichert eine Liste deiner Runden.</p>
        <Table
          caption="Bedienung"
          head={['Aktion', 'Schaltfläche', 'Taste']}
          rows={[
            ['Starten oder pausieren', 'Start / Pause', 'Leertaste'],
            ['Runde speichern', 'Runde', 'L'],
            ['Auf null setzen', 'Zurücksetzen', 'R'],
            ['Alle Runden kopieren', 'Runden kopieren', '—'],
          ]}
        />
        <p className={p}>
          Jede Runde zeigt ihre eigene Zeit und die Gesamtzeit, so vergleichst du Runden auf einen Blick. Mit „Runden kopieren“ landen sie
          in der Zwischenablage, bereit für eine Tabelle oder Nachricht.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Stoppuhr zum Zeit stoppen: zählt von null hoch">
        <p className={p}>
          Sie zählt von null aufwärts, bis du sie anhältst. Damit ist sie das richtige Werkzeug, wenn du nicht weißt, wie lange
          etwas dauert: für Training, Vorträge, Experimente und Aufgaben.
        </p>
        <p className={p}>
          Du willst stattdessen von einer festen Zeit herunterzählen, etwa 10 oder 30 Minuten? Nimm den{' '}
          <Link href="/countdown-timer" className={link}>Countdown-Timer</Link> oder den{' '}
          <Link href="/pomodoro-timer" className={link}>Pomodoro-Timer</Link> für Fokusphasen mit Pausen.
        </p>
      </Section>

      <Section wide id="fullscreen-heading" title="Digitale Stoppuhr im Vollbild">
        <p className={p}>
          Drücke F oder tippe auf Vollbild für eine riesige digitale Stoppuhr, die der ganze Raum lesen kann. Auf Beamer oder Smartboard
          eignet sie sich gut als Stoppuhr für die Schule.
        </p>
        <ul className={ul}>
          <li>Schule: Quizze, Gruppenarbeit und Lesewettbewerbe stoppen.</li>
          <li>Lernen: messen, wie lange jedes Thema wirklich dauert.</li>
          <li>Sport und Spiele: Sprints, Planks, Runden und Rätsel stoppen.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Online-Stoppuhr oder Google-Stoppuhr?">
        <p className={p}>
          Die Google-Suche zeigt einen kleinen eingebauten Timer. Diese hier bietet zusätzlich eine Rundenliste mit Zwischenzeiten,
          „Runden kopieren“ mit einem Klick, Tastenkürzel und eine Vollbildanzeige. Speichere sie als Lesezeichen, dann ist sie sofort da.
        </p>
      </Section>
    </div>
  )
}
