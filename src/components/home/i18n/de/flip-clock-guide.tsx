import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Klappuhr Bildschirmschoner (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Flip Clock online / Klappuhr Vollbild → Aesthetic, digital, Sekunden → Lernuhr → Timer und Stoppuhr.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function FlipClockGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="online-heading" title="Klappuhr Bildschirmschoner online: Flip Clock im Vollbild auf jedem Bildschirm">
        <p className={p}>
          Diese Klappuhr (Flip Clock) zeigt die Uhrzeit online in großen Klappziffern, die beim Minutenwechsel umklappen, wie ein Retro-Wecker
          auf dem Nachttisch.
        </p>
        <ul className={ul}>
          <li>Tippe doppelt auf die Uhr oder drück F für den Vollbildmodus.</li>
          <li>Im Vollbild bleibt der Bildschirm in unterstützten Browsern wach, so taugt sie als Schreibtischuhr oder Bildschirmschoner.</li>
          <li>Lass sie auf einem Laptop, einem zweiten Monitor, einem alten Tablet oder im Browser eines Smart-TVs laufen.</li>
        </ul>
      </Section>

      <Section wide id="style-heading" title="Aesthetic Klappuhr Bildschirmschoner: dunkel, hell und minimal">
        <p className={p}>Mit den Reglern unter der Uhr gestaltest du sie so, wie es dir gefällt:</p>
        <Table
          caption="Einstellungen der Klappuhr"
          head={['Einstellung', 'Was sie macht']}
          rows={[
            ['Design', '„Dunkel“ für eine schlichte schwarze Uhr, „Hell“ für einen hellen, luftigen Look'],
            ['24-Stunden-Format', 'Wechselt zwischen 24-Stunden-Anzeige und 12-Stunden-Anzeige mit AM/PM'],
            ['Sekunden anzeigen', 'Eine digitale Klappuhr mit Sekunden oder nur Stunden und Minuten (unter „Mehr“)'],
            ['Datum anzeigen', 'Zeigt Wochentag und Datum unter der Uhr (unter „Mehr“)'],
          ]}
        />
        <p className={p}>Blende Sekunden und Datum aus, dann bekommst du den minimalistischsten, ästhetischsten Flip-Clock-Look.</p>
      </Section>

      <Section wide id="study-heading" title="Klappuhr Bildschirmschoner zum Lernen">
        <p className={p}>
          Groß auf einem zweiten Bildschirm wird sie zu einer ruhigen Lernuhr: Du siehst die Uhrzeit, ohne zum Handy zu greifen. Kombiniere sie
          mit dem <Link href="/pomodoro-timer" className={link}>Pomodoro-Timer</Link>, um in konzentrierten Blöcken mit Pausen zu arbeiten.
        </p>
        <p className={p}>
          Lieber etwas Verspieltes auf dem freien Bildschirm? Starte den <Link href="/dvd-screensaver" className={link}>DVD-Bildschirmschoner</Link>.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Klappuhr Bildschirmschoner als Timer und Stoppuhr?">
        <p className={p}>Suchst du einen Flip-Timer? Diese Uhr zeigt immer die aktuelle Uhrzeit. Um etwas zu stoppen, nimm eines dieser Tools:</p>
        <ul className={ul}>
          <li>
            <Link href="/countdown-timer" className={link}>Vollbild-Countdown</Link>: zählt von jeder Länge herunter, mit Vorlagen wie 5, 10 und
            25 Minuten.
          </li>
          <li>
            <Link href="/stopwatch" className={link}>Vollbild-Stoppuhr</Link>: zählt hoch und speichert Runden.
          </li>
          <li>
            <Link href="/pomodoro-timer" className={link}>Pomodoro-Timer</Link>: Fokus- und Pausenphasen fürs Lernen oder Arbeiten.
          </li>
        </ul>
      </Section>
    </div>
  )
}
