import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Blauer Bildschirm (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * blaues Licht → Blautöne (hell, dunkel, marine) → Chroma Key, Foto, Schnitt → Blaulichtbrille und Subpixeltest.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function BlueScreenGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Blauer Bildschirm als Licht: blaue Beleuchtung vom Bildschirm">
        <p className={p}>
          Ein blauer Vollbildschirm macht jeden Monitor, Laptop oder jedes Handy zu einem sanften blauen Licht. Tippe doppelt auf die Vorschau für
          Vollbild, schalte „Bildschirm wach halten“ ein und stell die Helligkeit ein, die du brauchst.
        </p>
        <Table
          caption="So kannst du den blauen Bildschirm als Licht nutzen"
          head={['Einsatz', 'Einstellungen', 'Tipp']}
          rows={[
            ['Hintergrundleuchten für Streams und Videos', 'Helligkeit 70–100 %', 'Stell einen zweiten Bildschirm hinter dich, außerhalb des Bildes'],
            ['Akzentlicht für Fotos und Videos', 'Helligkeit 100 %', 'Licht von der Seite gibt deinem Motiv einen kühlen Rand'],
            ['Stimmungs- und Partylicht', 'Helligkeit 40–70 %', 'Richte den Bildschirm auf eine Wand, um das blaue Licht zu verteilen'],
            ['Heller blauer Blitz', 'Helligkeit 100 %, Vollbild', 'Handys geben bei maximaler Helligkeit das stärkste Licht'],
          ]}
        />
        <h3 className={h3}>Blaues Licht vom Bildschirm und Schlaf</h3>
        <p className={p}>
          Helles blaues Licht am Abend kann das Einschlafen erschweren. Nutze blaue Beleuchtung tagsüber oder für kreative Aufnahmen und wechsle
          nachts zum <Link href="/red-screen" className={link}>roten</Link> oder{' '}
          <Link href="/orange-screen" className={link}>orangen Bildschirm</Link> bei geringer Helligkeit.
        </p>
      </Section>

      <Section wide id="shade-heading" title="Blauer Bildschirm in Hellblau, Dunkelblau, Marineblau und Knallblau">
        <p className={p}>Diese Seite zeigt reines Blau, #0000FF (RGB 0, 0, 255). Dunkle es mit dem Helligkeitsregler ab, mit der Wärme auf Neutral.</p>
        <Table
          caption="Blautöne und wie du sie bekommst"
          head={['Ton', 'Hex', 'So bekommst du ihn']}
          rows={[
            ['Knallblau', '#0000FF', 'Helligkeit 100 %'],
            ['Dunkelblau', '#0000B3', 'Helligkeit 70 %'],
            ['Marineblau', '#000080', 'Helligkeit 50 %'],
            ['Hellblau', '#00FFFF', <Link key="c" href="/cyan-screen" className={link}>Cyan Bildschirm öffnen</Link>],
          ]}
        />
        <p className={p}>
          Brauchst du eine Datei? „Herunterladen“ speichert ein blaues PNG in 1080p, 2K, 4K oder Handygröße oder in einer eigenen Größe bis 8K. Mehr Auswahl gibt es
          in der Sammlung <Link href="/backgrounds/blue-background" className={link}>blauer Hintergrund</Link>.
        </p>
      </Section>

      <Section wide id="chroma-heading" title="Blauer Bildschirm für Chroma Key, Fotografie und Schnitt">
        <p className={p}>Ein Bluescreen funktioniert wie ein Greenscreen und ist in einigen Fällen die bessere Wahl:</p>
        <ul className={ul}>
          <li>Dein Motiv trägt Grün oder hält grüne Gegenstände.</li>
          <li>Du willst weniger sichtbare Farbabstrahlung. Blaue Abstrahlung lässt sich leichter verstecken, aber Blau braucht mehr Licht für ein sauberes Keying.</li>
        </ul>
        <p className={p}>
          Für kleine Produkte und Nahaufnahmen öffnest du diese Seite auf einem Laptop, Computermonitor oder Handy, stellst die Helligkeit auf etwa
          70 % und hältst das Motiv 20–30 cm vor dem Bildschirm. Für den Schnitt lädst du ein blaues PNG herunter und keyst es mit denselben
          Werkzeugen wie bei Grün: OBS Chroma Key, CapCut Chroma Key, Premiere Ultra-Key oder der 3D Keyer von DaVinci Resolve. Unter{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma Key</Link> erfährst du, wie Keying funktioniert.
        </p>
      </Section>

      <Section wide id="test-heading" title="Blauer Bildschirm als Test: Blaulichtbrille und Subpixel">
        <p className={p}>
          Willst du deine Blaulichtbrille schnell testen? Sieh dir diese Seite bei voller Helligkeit mit und ohne Brille an. Stark getönte Gläser
          lassen das Blau deutlich dunkler wirken; klare Gläser, die wenig Blau filtern, machen kaum einen Unterschied. Probier dasselbe mit dem{' '}
          <Link href="/" className={link}>weißen Bildschirm</Link>, um zu sehen, wie stark die Gläser alles tönen. Das ist ein schneller Sichttest,
          keine Labormessung.
        </p>
        <p className={p}>
          Reines Blau lässt außerdem nur die blauen Subpixel leuchten. Ein schwarzer Punkt ist ein toter blauer Subpixel, ein magentafarbener oder
          cyanfarbener Punkt bedeutet, dass ein roter oder grüner Subpixel dauerhaft an ist. Für einen vollständigen Check mach den{' '}
          <Link href="/dead-pixel-test" className={link}>Pixelfehlertest</Link>.
        </p>
      </Section>
    </div>
  )
}
