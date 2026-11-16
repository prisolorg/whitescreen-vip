import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Beleuchtung für Videoanrufe (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Zoom Licht / Bildschirm als Licht → Beleuchtung für Meetings, Videocalls und Webcam → Ringlicht.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function ZoomLightingGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Beleuchtung für Videoanrufe: Mach deinen Bildschirm zum Licht">
        <p className={p}>
          Dieses Tool macht aus einem freien Bildschirm ein weiches, gleichmäßiges Licht für dein Gesicht. Am besten klappt es mit einem zweiten
          Monitor, Tablet oder Handy hinter deiner Webcam, damit das Licht dich von vorn trifft.
        </p>
        <ul className={ul}>
          <li>Stell die Helligkeit auf 100 % für ein helles weißes Licht oder senke sie für ein sanfteres Leuchten.</li>
          <li>Wähle „Warm“ (3000 K), „Neutral“ (4500 K) oder „Tageslicht“ (6500 K).</li>
          <li>Öffne „Mehr“ für eine genaue Farbtemperatur, eine eigene Lichtfarbe oder den Modus „Rahmen“.</li>
          <li>Tippe doppelt auf den Bildschirm oder drück F, damit das Licht das ganze Display füllt.</li>
        </ul>
      </Section>

      <Section wide id="setup-heading" title="Beleuchtung für Videoanrufe einrichten: Meetings und Zoom-Calls">
        <Table
          caption="Einstellungen für die Beleuchtung bei Videoanrufen"
          head={['Situation', 'Probier das']}
          rows={[
            ['Meeting tagsüber am Fenster', '„Tageslicht“, damit der Bildschirm zum Sonnenlicht passt'],
            ['Videocall am Abend', '„Warm“, bei 60–80 % Helligkeit'],
            ['Büro mit Deckenlicht', '„Neutral“, mit dem Lichtbildschirm knapp über deiner Webcam'],
            ['Schatten auf einer Gesichtshälfte', 'Stell einen zweiten Lichtbildschirm auf diese Seite'],
          ]}
        />
        <p className={p}>
          Das beste Licht für Videocalls kommt von vorn: Helle Fenster gehören hinter die Kamera, nicht hinter dich, und das Licht sollte etwa auf
          Augenhöhe sein. Der Modus „Rahmen“ beleuchtet nur die Ränder des Bildschirms, für ein sanfteres Webcam-Licht.
        </p>
      </Section>

      <Section wide id="ring-heading" title="Beleuchtung für Videoanrufe oder ein Ringlicht?">
        <p className={p}>
          Die Beleuchtung für Videoanrufe taucht dein Gesicht in flaches, gleichmäßiges Licht. Für den runden Lichtreflex in den Augen, den
          Creator lieben, probier das <Link href="/ring-light" className={link}>Ringlicht Online</Link>. Für ein einfaches helles Licht
          funktioniert auch der <Link href="/" className={link}>weiße Bildschirm</Link>.
        </p>
      </Section>
    </div>
  )
}
