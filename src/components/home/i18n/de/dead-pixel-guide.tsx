import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pixelfehlertest (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Pixelfehler Test / Pixelfehler testen / tote Pixel finden → Pixelfehler-Arten → Geräte → Reparatur.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function DeadPixelGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Pixelfehlertest: So prüfst du deinen Bildschirm">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Reinige den Bildschirm, damit du Staub nicht für einen Pixelfehler hältst.</li>
          <li>Tippe doppelt oder drücke F für den Vollbildmodus, damit der Pixelfehlertest jedes Pixel erfasst.</li>
          <li>Tippe auf den Bildschirm oder nutze die Pfeiltasten, um 9 Farben durchzugehen: Schwarz, Weiß, Rot, Grün, Blau, Cyan, Magenta, Gelb und Grau.</li>
          <li>Sieh dir jede Farbe von Rand zu Rand genau an. Oder starte den automatischen Wechsel, der die Farbe alle paar Sekunden ändert.</li>
        </ol>
        <p className={p}>
          Mit diesem Pixelfehlertest kannst du Pixelfehler testen auf jedem Monitor, Laptop, Handy, Tablet oder Fernseher mit Browser. Um eine Farbe länger zu
          prüfen, öffne den <Link href="/black-screen" className={link}>schwarzen Bildschirm</Link> oder den{' '}
          <Link href="/" className={link}>weißen Bildschirm</Link>.
        </p>
      </Section>

      <Section wide id="types-heading" title="Pixelfehlertest-Ergebnis: tot, hängend oder heiß?">
        <p className={p}>Was ist ein toter Pixel? Ein Pixel, das gar nicht mehr leuchtet. Der Pixelfehlertest zeigt dir, welcher Fehler es ist:</p>
        <Table
          caption="So sehen Pixelfehler aus"
          head={['Was du siehst', 'Am besten sichtbar auf', 'Was es ist']}
          rows={[
            ['Ein schwarzer Punkt, der nie leuchtet', 'Weiß und hellen Farben', 'Toter Pixel'],
            ['Ein Punkt, der auf Rot, Grün oder Blau hängt', 'Schwarz und anderen Farben', 'Hängender Pixel'],
            ['Ein Punkt, der immer weiß ist', 'Schwarz', 'Heißer Pixel'],
            ['Punkte, die sich beim Wischen bewegen', 'Jeder Farbe', 'Staub, kein Pixelfehler'],
          ]}
        />
        <p className={p}>
          Mehr dazu im Ratgeber zum <Link href="/screen-problems/stuck-pixel" className={link}>hängenden Pixel</Link> und zum{' '}
          <Link href="/screen-problems/hot-pixel" className={link}>heißen Pixel</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Pixelfehlertest am Handy, Laptop, Monitor oder Fernseher">
        <ul className={ul}>
          <li>Handy und iPhone: Helligkeit hoch, auf das Vollbild-Symbol tippen und die Farben durchtippen.</li>
          <li>Laptop und Monitor: Stelle die native Auflösung ein, damit ein Pixel auch als ein Pixel angezeigt wird.</li>
          <li>Fernseher: Öffne die Seite im Browser des Fernsehers oder streame einen Laptop-Tab und prüfe aus der Nähe.</li>
          <li>Neues Gerät? Mach den Pixelfehlertest sofort, solange du es noch zurückgeben kannst.</li>
        </ul>
      </Section>

      <Section wide id="fix-heading" title="Nach dem Pixelfehlertest: Lässt sich das reparieren?">
        <p className={p}>
          Ein wirklich toter Pixel kommt fast nie zurück, weil er keinen Strom mehr bekommt. Ein hängender Pixel manchmal schon: Schnell
          wechselnde Farben über der Stelle für 10 bis 20 Minuten können ihn wieder lösen. Der{' '}
          <Link href="/screen-burn-in-test" className={link}>Bildschirm-Einbrenntest</Link> hat dafür einen Farbwechsel; lass ihn weg,
          wenn dich blinkendes Licht stört.
        </p>
        <p className={p}>
          Hat der Bildschirm noch Garantie, prüfe die Pixelfehler-Richtlinie des Herstellers. Für einen vollständigen Check von Farben und
          Gleichmäßigkeit mach den <Link href="/monitor-test" className={link}>Monitortest</Link>.
        </p>
      </Section>
    </div>
  )
}
