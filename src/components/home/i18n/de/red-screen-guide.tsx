import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Roter Bildschirm (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Rotlicht für Nacht und Schlaf → Fotos und Reels → Rottöne → Rot-Test für Subpixel.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function RedScreenGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="night-heading" title="Roter Bildschirm als Licht für Nacht und Schlaf">
        <p className={p}>
          Gedimmtes rotes Licht schont deine Nachtsicht am meisten. Die Zellen deiner Augen für schwaches Licht reagieren kaum auf tiefes Rot,
          deshalb nutzen es Astronomen und Piloten. Dreh den Helligkeitsregler herunter, tippe doppelt für Vollbild und schalte „Bildschirm wach
          halten“ ein.
        </p>
        <Table
          caption="Empfohlene Einstellungen, um den roten Bildschirm nachts zu nutzen"
          head={['Einsatz', 'Helligkeit', 'Tipp']}
          rows={[
            ['Nachtlicht', '20–40 %', 'Richte den Bildschirm auf eine Wand für ein sanftes Leuchten'],
            ['Notizen im Dunkeln lesen', '30–50 %', 'Halte das Handy nah und unter Augenhöhe'],
            ['Sterne beobachten', 'So niedrig wie möglich', 'Deine Augen bleiben an den dunklen Himmel gewöhnt'],
            ['Helles rotes Licht', '100 %', 'Für Signale, Effekte und Fotos, nicht zum Runterkommen'],
          ]}
        />
        <h3 className={h3}>Ist ein roter Bildschirm gut zum Schlafen?</h3>
        <p className={p}>
          Ein gedimmtes rotes Licht ist vor dem Schlafengehen sanfter als ein heller <Link href="/" className={link}>weißer Bildschirm</Link> oder ein
          blauer, weil es kein blaues Licht enthält. Es bleibt aber ein Licht, also halte es niedrig und schalte es aus, sobald du schlafen willst.
          Ein Bildschirm ist kein Rotlichttherapie-Gerät: Solche Geräte nutzen bestimmte Wellenlängen und viel höhere Leistung.
        </p>
      </Section>

      <Section wide id="photo-heading" title="Roter Bildschirm für Fotos, Reels und Bilder">
        <p className={p}>Ein roter Bildschirm gibt Selfies und Reels ein stimmungsvolles rotes Leuchten, mit nichts weiter als einem Handy oder Laptop.</p>
        <ul className={ul}>
          <li>Schalte das Raumlicht aus, damit das rote Licht das einzige Licht auf deinem Gesicht ist.</li>
          <li>Öffne diesen komplett roten Bildschirm auf einem zweiten Handy, Tablet oder Laptop, stell die Helligkeit auf 100 % und schalte auf Vollbild.</li>
          <li>Halte den Bildschirm 20–40 cm von deinem Gesicht entfernt, leicht seitlich, für Schatten und Tiefe.</li>
          <li>Senke die Helligkeit oder rück den Bildschirm weg, wenn deine Haut überbelichtet aussieht.</li>
        </ul>
        <p className={p}>Es funktioniert genauso auf iPhone, Android und Laptops. Je größer der Bildschirm, desto weicher das Licht.</p>
      </Section>

      <Section wide id="shade-heading" title="Roter Bildschirm in Hellrot, Dunkelrot und Knallrot">
        <p className={p}>
          Diese Seite zeigt reines Rot, #FF0000 (RGB 255, 0, 0): ein leerer roter Bildschirm ohne alles andere. Dunkle ihn mit dem
          Helligkeitsregler ab, mit der Wärme auf Neutral.
        </p>
        <Table
          caption="Rottöne und wie du sie bekommst"
          head={['Ton', 'Hex', 'So bekommst du ihn']}
          rows={[
            ['Knallrot', '#FF0000', 'Helligkeit 100 %'],
            ['Dunkelrot', '#B30000', 'Helligkeit 70 %'],
            ['Tiefrot / Kastanienbraun', '#800000', 'Helligkeit 50 %'],
            ['Hellrot / Rosa', '#FF69B4', <Link key="p" href="/pink-screen" className={link}>Rosa Bildschirm öffnen</Link>],
          ]}
        />
        <p className={p}>
          Brauchst du eine Datei? „Herunterladen“ speichert ein rotes PNG von 1080p bis 8K oder in Handy- und eigenen Größen. Mehr Töne gibt es in
          der Sammlung <Link href="/backgrounds/red-background" className={link}>roter Hintergrund</Link>.
        </p>
      </Section>

      <Section wide id="test-heading" title="Roter Bildschirm als Test: rote Subpixel und Farbtreue">
        <p className={p}>
          Reines Rot lässt nur die roten Subpixel leuchten. Ein dunkler Punkt ist ein toter roter Subpixel, ein gelber oder magentafarbener Punkt
          bedeutet, dass ein grüner oder blauer Subpixel dauerhaft an ist. Bei Rot wirken günstigere Monitore außerdem oft orange oder rosa;
          vergleiche mit einem anderen Gerät oder mach den <Link href="/screen-color-test" className={link}>Bildschirm-Farbtest</Link> und den{' '}
          <Link href="/dead-pixel-test" className={link}>Pixelfehlertest</Link>.
        </p>
      </Section>
    </div>
  )
}
