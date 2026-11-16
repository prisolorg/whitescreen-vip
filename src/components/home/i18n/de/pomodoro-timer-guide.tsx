import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pomodoro-Timer (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Pomodoro-Technik / Pomodoro-Methode / Tomaten-Timer → Lerntimer → Einstellungen 25/5, 50/10 → Pomodoro Timer online.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function PomodoroTimerGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="technique-heading" title="Pomodoro-Timer und die Pomodoro-Technik">
        <p className={p}>
          Die Pomodoro-Technik, auch Pomodoro-Methode genannt, ist eine einfache Zeitmanagement-Methode, die Francesco Cirillo Ende der
          1980er-Jahre entwickelt hat. Du arbeitest in kurzen, konzentrierten Sprints, den Pomodoros, und machst dazwischen Pause. Dieser
          Pomodoro-Timer steuert den ganzen Ablauf für dich:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Such dir eine Aufgabe aus.</li>
          <li>Konzentrier dich 25 Minuten darauf.</li>
          <li>Mach eine kurze Pause von 5 Minuten.</li>
          <li>Wiederhole das. Nach vier Pomodoros machst du eine längere Pause von 15 Minuten.</li>
        </ol>
        <p className={p}>
          Der Timer wechselt von selbst von Fokus zu Pause, spielt am Ende jeder Phase einen Ton und zählt die Sitzungen, die du abschließt.
        </p>
        <h3 className={h3}>Warum heißt er Tomaten-Timer?</h3>
        <p className={p}>
          „Pomodoro“ ist Italienisch für Tomate. Cirillo hat seine ersten Sitzungen mit einem Küchenwecker in Tomatenform gestoppt, deshalb kennt
          man die Methode auch als Tomaten-Timer oder Tomaten-Technik.
        </p>
      </Section>

      <Section wide id="study-heading" title="Pomodoro-Timer zum Lernen">
        <p className={p}>
          Mit der Pomodoro-Technik zum Lernen wird daraus ein guter Lerntimer: Kurze Blöcke fallen leichter, und die Pausen halten deine
          Konzentration über eine lange Lerneinheit frisch.
        </p>
        <ul className={ul}>
          <li>Gib jedem Pomodoro ein klares Ziel, etwa ein Kapitel, ein Aufgabenblatt oder 20 Karteikarten.</li>
          <li>Leg dein Handy bis zur Pause weg.</li>
          <li>Schreib abschweifende Gedanken auf und kümmere dich in der Pause darum, nicht mitten in der Sitzung.</li>
          <li>Nutze die lange Pause, um dich zu bewegen, Wasser zu trinken oder frische Luft zu schnappen.</li>
          <li>Zähl deine abgeschlossenen Sitzungen, um zu sehen, wie gut die Pomodoro-Lernmethode für dich funktioniert.</li>
        </ul>
      </Section>

      <Section wide id="settings-heading" title="Pomodoro-Timer-Einstellungen: 25/5, 50/10 und eigene">
        <p className={p}>Öffne „Mehr“, um die Fokuslänge, beide Pausen und die Zahl der Sitzungen vor der langen Pause festzulegen.</p>
        <Table
          caption="Beliebte Einstellungen für den Pomodoro-Timer"
          head={['Variante', 'Fokus', 'Kurze Pause', 'Lange Pause', 'Gut für']}
          rows={[
            ['Klassisch 25/5', '25 Min.', '5 Min.', '15 Min. nach 4', 'Die meiste Arbeit und das Lernen'],
            ['Deep Work 50/10', '50 Min.', '10 Min.', '20–30 Min. nach 3', 'Schreiben, Programmieren, langes Lesen'],
            ['Kurze Schübe 15/3', '15 Min.', '3 Min.', '15 Min. nach 4', 'Den Einstieg in schwere Aufgaben'],
          ]}
        />
        <ul className={ul}>
          <li>Der Fokus kann 5 bis 90 Minuten dauern, kurze Pausen 1 bis 20 und lange Pausen 5 bis 45.</li>
          <li>Schalte „Nächste Phase automatisch starten“ aus, um jede Phase selbst zu beginnen.</li>
          <li>Schalte den Ton aus, dann hast du einen lautlosen Pomodoro-Timer für Bibliothek oder Büro.</li>
        </ul>
        <p className={p}>
          Brauchst du nur einen einzelnen 25-Minuten-Timer? Der <Link href="/countdown-timer" className={link}>Vollbild-Countdown</Link> hat
          Vorlagen mit einem Tipp, und die <Link href="/stopwatch" className={link}>Vollbild-Stoppuhr</Link> zeigt, wie lange eine Aufgabe wirklich dauert.
        </p>
      </Section>

      <Section wide id="online-heading" title="Pomodoro-Timer online: ohne App">
        <p className={p}>
          Dieser Pomodoro-Timer läuft online in deinem Browser auf PC, Mac, Chromebook, Tablet oder Handy, ohne Pomodoro-App oder Erweiterung zum
          Installieren und ohne Konto.
        </p>
        <ul className={ul}>
          <li>Der Countdown erscheint im Browser-Tab, so kannst du in einem anderen Tab weiterarbeiten.</li>
          <li>Er zählt genau, auch wenn der Tab im Hintergrund ist.</li>
          <li>Drück die Leertaste zum Starten oder Pausieren und F für eine große Pomodoro-Uhr im Vollbild.</li>
        </ul>
        <p className={p}>Er funktioniert genauso gut als Fokus-Timer, Arbeitstimer oder Produktivitätstimer für jede Aufgabe, die du in Sprints einteilen willst.</p>
      </Section>
    </div>
  )
}
