import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Fake Bluescreen (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Bluescreen Windows 10/11 → Fehlermeldung und Stoppcodes → Bluescreen-Streich → echter Bluescreen.
 * Schaltflächen und Bildschirmtexte heißen so wie in der deutschen Oberfläche des Tools.
 */
export function FakeBsodGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Fake Bluescreen: Windows 10, 11 und klassisch">
        <p className={p}>Wähle unter der Vorschau im Menü „Stil“ einen Stil für den Fake Bluescreen. Jeder entspricht einem echten Windows-Bluescreen:</p>
        <Table
          caption="Stile des Fake Bluescreens"
          head={['Stil', 'Was er zeigt']}
          rows={[
            ['Windows 10', 'Den hellblauen Fehlerbildschirm mit traurigem Gesicht :(, Prozentzähler, QR-Code und Stoppcode'],
            ['Windows 11', 'Dasselbe Layout im dunkleren Blau von Windows 11'],
            ['Schwarz (neu)', 'Die schwarze Version, die neuere Windows-11-Versionen statt Blau verwenden'],
            ['Klassisch (XP/7)', 'Den Bluescreen der alten Schule in tiefem Blau mit weißem technischem Text'],
          ]}
        />
      </Section>

      <Section wide id="error-heading" title="Fake Bluescreen: Fehlermeldung und Stoppcodes">
        <p className={p}>
          Der moderne Windows-Fehlerbildschirm sagt: „Auf Ihrem PC ist ein Problem aufgetreten. Er muss neu gestartet werden. Wir sammeln nur
          einige Fehlerinformationen und starten dann für Sie neu.“ Darunter steigt ein Zähler auf 100 %, und ein Stoppcode nennt den Fehler.
        </p>
        <p className={p}>Öffne „Mehr“, um einen dieser echten Stoppcodes auszuwählen:</p>
        <ul className={ul}>
          <li>CRITICAL_PROCESS_DIED und SYSTEM_SERVICE_EXCEPTION</li>
          <li>IRQL_NOT_LESS_OR_EQUAL und PAGE_FAULT_IN_NONPAGED_AREA</li>
          <li>KMODE_EXCEPTION_NOT_HANDLED und MEMORY_MANAGEMENT</li>
          <li>DPC_WATCHDOG_VIOLATION und VIDEO_TDR_FAILURE</li>
        </ul>
        <p className={p}>Der Regler „100 % erreichen in“ legt fest, wie lange der Zähler braucht, von etwa 10 Sekunden bis 2 Minuten.</p>
      </Section>

      <Section wide id="prank-heading" title="Bluescreen-Streich mit dem Fake Bluescreen: So richtest du ihn ein">
        <ul className={ul}>
          <li>Öffne diesen falschen Absturzbildschirm auf dem PC, den du reinlegen willst, und wähle den passenden Stil.</li>
          <li>Tippe doppelt auf den Bildschirm oder drück F für den Vollbildmodus.</li>
          <li>Geh weg. Der Zähler steigt, und der Mauszeiger verschwindet, sobald die Maus stillsteht.</li>
          <li>Mit „Zähler neu starten“ läuft er noch einmal, mit Esc beendest du den Streich. Am Computer ändert sich nichts.</li>
        </ul>
        <h3 className={h3}>Fang mit einem falschen Update an</h3>
        <p className={p}>
          Für eine größere Reaktion öffnest du zuerst die <Link href="/fake-windows-10-update" className={link}>Windows 10 Update Simulation</Link>{' '}
          und tippst dann auf „BSOD-Streich auslösen“, damit das Update in einen Windows-Absturzbildschirm „abstürzt“. Auf Handy oder Tablet
          funktioniert der <Link href="/broken-screen" className={link}>Displayschaden-Effekt</Link> besser.
        </p>
      </Section>

      <Section wide id="real-heading" title="Kein Fake Bluescreen, sondern ein echter?">
        <p className={p}>Ein echter Bluescreen bedeutet, dass Windows angehalten hat, um sich zu schützen. Meistens helfen diese Schritte:</p>
        <ul className={ul}>
          <li>Schreib dir den Stoppcode unten auf dem Bildschirm auf.</li>
          <li>Starte neu und installiere die neuesten Windows- und Treiberupdates.</li>
          <li>Mach alles Neue rückgängig: eine neue App, einen Treiber oder ein Stück Hardware.</li>
          <li>Passiert es immer wieder, such beim Microsoft-Support nach diesem Stoppcode.</li>
        </ul>
      </Section>
    </div>
  )
}
