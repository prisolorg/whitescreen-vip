import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Touchscreen-Test (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Touchscreen testen / Touch Test → Geisterberührungen und Multitouch → Handy, iPhone, Android, Samsung → Testcode.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function TouchScreenGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="modes-heading" title="Touchscreen-Test: drei Wege zum Prüfen">
        <Table
          caption="Modi des Touchscreen-Tests"
          head={['Modus', 'Was er prüft', 'So geht es']}
          rows={[
            ['Raster für tote Zonen', 'Stellen, die nicht auf Berührung reagieren', 'Wisch über jedes Feld, bis „Abgedeckt“ 100 % zeigt; Felder, die dunkel bleiben, sind tote Zonen'],
            ['Zeichnen', 'Flüssige, lückenlose Erfassung', 'Zieh langsam Linien über den Bildschirm; Unterbrechungen oder Sprünge zeigen schwache Bereiche'],
            ['Multitouch', 'Wie viele Finger er erkennt', 'Leg mehrere Finger auf; „Berührungen“ und „Max.“ zeigen die Zahl'],
          ]}
        />
        <p className={p}>
          Drück „Löschen“, um neu anzufangen, und drück F oder tippe auf „Vollbild“, damit der Touchscreen-Test auch die Ränder des Bildschirms
          abdeckt.
        </p>
      </Section>

      <Section wide id="ghost-heading" title="Touchscreen-Test für Geisterberührungen und Multitouch">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Geisterberührungen (Ghost Touch):</strong> Öffne „Zeichnen“, leg das Handy hin und fass es nicht an.
            Linien oder Punkte, die von selbst erscheinen, sind Geisterberührungen.
          </li>
          <li>
            <strong className="text-foreground">Multitouch:</strong> Die meisten Handys erkennen 5 bis 10 Finger gleichzeitig. Die Anzeige zeigt,
            wie viele Berührungspunkte dein Gerät meldet.
          </li>
          <li>
            <strong className="text-foreground">Empfindlichkeit:</strong> Leichte, schnelle Wischer in „Zeichnen“ zeigen, ob sanfte Berührungen
            erkannt werden.
          </li>
        </ul>
      </Section>

      <Section wide id="phone-heading" title="Touchscreen-Test auf iPhone, Android und Samsung">
        <p className={p}>
          Der Touchscreen-Test läuft in Safari, Chrome oder jedem Handy-Browser, ohne Installation. Nimm eine dicke Hülle oder Schutzfolie ab,
          wenn Berührungen am Rand nicht ankommen, und teste dann noch einmal.
        </p>
        <p className={p}>
          Auf vielen Samsung-Galaxy-Handys kannst du auch *#0*# wählen, einen Touchscreen-Testcode, der ein eingebautes Testmenü öffnet. Solche
          Codes hängen von Marke und Modell ab, und manche Handys haben keinen.
        </p>
      </Section>

      <Section wide id="next-heading" title="Nach dem Touchscreen-Test">
        <p className={p}>
          Funktioniert die Berührung, aber das Bild nicht, prüf das Display selbst: Mach den{' '}
          <Link href="/dead-pixel-test" className={link}>Pixelfehlertest</Link> für Punkte oder den{' '}
          <Link href="/monitor-test" className={link}>Monitortest</Link> für Farbe und Gleichmäßigkeit.
        </p>
      </Section>
    </div>
  )
}
