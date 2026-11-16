import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Bildwiederholrate-Test (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Hz Test / Bildwiederholfrequenz testen → Bildwiederholrate prüfen unter Windows, Mac, Handy → 60, 120, 144 Hz → FPS-Test.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function RefreshRateGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Bildwiederholrate-Test: So funktioniert er">
        <p className={p}>
          Browser zeichnen pro Bildschirmaktualisierung ein neues Bild, deshalb verrät die Zeitmessung dieser Bilder deine Bildwiederholrate.
          Dieser Hz-Test startet von selbst und zeigt:
        </p>
        <ul className={ul}>
          <li>Deine Bildwiederholrate in Hz, gerundet auf die nächste übliche Rate (60, 120, 144 Hz und so weiter).</li>
          <li>Wie lange jedes Bild in Millisekunden dauert und den Anteil verspäteter Frames.</li>
          <li>Die niedrigste und höchste gemessene Rate, dazu einen bewegten Block, der bei mehr Hz flüssiger wirkt.</li>
        </ul>
        <p className={p}>
          So kannst du die Bildwiederholfrequenz von Monitoren, Laptops und Handys prüfen. Drück „Erneut messen“, nachdem du eine Einstellung
          geändert hast, und tippe doppelt für Vollbild auf dem Bildschirm, den du testen willst.
        </p>
      </Section>

      <Section wide id="check-heading" title="Bildwiederholrate-Test und deine Anzeigeeinstellungen">
        <p className={p}>Der Test zeigt, womit dein Bildschirm gerade läuft. So siehst oder änderst du die Einstellung für die Bildwiederholfrequenz deines Monitors:</p>
        <Table
          caption="Wo du die Einstellung für die Bildwiederholrate findest"
          head={['Gerät', 'Wo du schaust']}
          rows={[
            ['Windows 11 / 10', 'Einstellungen → System → Anzeige → Erweiterte Anzeige → Bildwiederholfrequenz auswählen'],
            ['Mac', 'Systemeinstellungen → Displays → Bildwiederholfrequenz'],
            ['iPhone / iPad', 'Vom Modell festgelegt; ProMotion-Modelle gehen automatisch bis 120 Hz'],
            ['Android', 'Einstellungen → Anzeige → Bildwiederholrate (oder Bewegungsglättung)'],
          ]}
        />
        <h3 className={h3}>Warum das Ergebnis niedriger sein kann als erwartet</h3>
        <ul className={ul}>
          <li>Das Display ist in den Einstellungen auf 60 Hz gestellt, oder Kabel oder Anschluss schaffen die höhere Rate nicht.</li>
          <li>Ein Laptop im Akkubetrieb oder ein Handy im Energiesparmodus senkt die Rate, um Strom zu sparen.</li>
          <li>Schwere Tabs oder Apps lassen den Browser Frames auslassen. Schließ sie und miss erneut.</li>
        </ul>
      </Section>

      <Section wide id="rates-heading" title="Ergebnisse im Bildwiederholrate-Test: 60, 120 und 144 Hz">
        <Table
          caption="Übliche Bildwiederholraten"
          head={['Rate', 'Zeit pro Bild', 'Typische Bildschirme']}
          rows={[
            ['60 Hz', '16,7 ms', 'Die meisten Büromonitore, ältere Laptops und Fernseher'],
            ['90 Hz', '11,1 ms', 'Viele Mittelklasse-Handys'],
            ['120 Hz', '8,3 ms', 'Gaming-Handys, iPhone Pro, neuere Fernseher und Laptops'],
            ['144 Hz', '6,9 ms', 'Gaming-Monitore'],
            ['240 Hz', '4,2 ms', 'E-Sport-Monitore'],
          ]}
        />
      </Section>

      <Section wide id="fps-heading" title="Bildwiederholrate-Test oder Bildrate-Test?">
        <p className={p}>
          Die Bildwiederholrate (Hz) gibt an, wie oft dein Bildschirm neu zeichnet; die Bildrate (FPS) gibt an, wie viele Bilder dein Browser oder
          Spiel erzeugt. Um Bewegung und FPS zu prüfen, mach den <Link href="/frame-rate-test" className={link}>Bildrate-Test</Link>, und für
          Unschärfe und Schlieren probier den <Link href="/monitor-ghosting-test" className={link}>Monitor-Ghosting-Test</Link>.
        </p>
      </Section>
    </div>
  )
}
