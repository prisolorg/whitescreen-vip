import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Gelber Bildschirm (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * warmes / gelbes Licht → reines Gelb (#FFFF00) → Subpixeltest. Schaltflächen wie in der deutschen Oberfläche.
 */
export function YellowScreenGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Gelber Bildschirm als warmes Licht">
        <p className={p}>
          Ein gelber Bildschirm gibt warmes Licht ohne Blauanteil ab, das macht ihn zu einem gemütlichen Licht zum Lesen, für Calls und für den
          Abend. Tippe doppelt auf die Vorschau für Vollbild und schalte „Bildschirm wach halten“ ein, damit das Licht anbleibt.
        </p>
        <Table
          caption="Empfohlene Einstellungen, um den gelben Bildschirm als Licht zu nutzen"
          head={['Einsatz', 'Einstellungen', 'Tipp']}
          rows={[
            ['Leselicht', 'Warm, Helligkeit 60–80 %', 'Stell ein Tablet neben dein Buch, von den Augen weg geneigt'],
            ['Videocalls', 'Neutral, Helligkeit 100 %', 'Stell den Bildschirm hinter deine Webcam für einen goldenen Schimmer'],
            ['Abend- oder Nachtlicht', 'Warm, Helligkeit 30–50 %', 'Weniger Helligkeit hält es in einem dunklen Raum weich'],
            ['Farbe für Fotos und Videos', 'Neutral oder Warm', 'Nutze einen zweiten Bildschirm als warmes Akzentlicht von der Seite'],
          ]}
        />
        <h3 className={h3}>Gelber Bildschirm als Taschenlampe am Handy</h3>
        <p className={p}>
          Öffne diese Seite auf deinem Handy, dreh die Helligkeit hoch und schalte auf Vollbild. Warmes gelbes Licht ist im Dunkeln weniger grell
          als eine helle weiße Taschenlampe, praktisch, um nachts nach den Kindern zu sehen oder den Weg zu finden.
        </p>
      </Section>

      <Section wide id="solid-heading" title="Komplett gelber Bildschirm (#FFFF00)">
        <p className={p}>
          Diese Seite zeigt reines Gelb: Rot und Grün auf voller Stärke, Blau aus (RGB 255, 255, 0). Es ist ein leerer gelber Bildschirm ohne
          alles andere, und den Farbton kannst du mit den Reglern unter der Vorschau verschieben.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Knallgelb:</strong> Neutral, Helligkeit 100 %.
          </li>
          <li>
            <strong className="text-foreground">Goldgelb:</strong> wähle Warm.
          </li>
          <li>
            <strong className="text-foreground">Senfgelb:</strong> senke den Helligkeitsregler.
          </li>
        </ul>
        <p className={p}>
          Brauchst du eine Datei? „Herunterladen“ speichert ein gelbes PNG von 1080p bis 8K oder in Handy- und eigenen Größen. Für Pastell- und
          hellgelbe Töne stöbere in der Sammlung <Link href="/backgrounds/yellow-background" className={link}>gelber Hintergrund</Link>.
        </p>
      </Section>

      <Section wide id="check-heading" title="Gelber Bildschirm als Test: rote und grüne Subpixel">
        <p className={p}>
          Gelb lässt die roten und grünen Subpixel gemeinsam leuchten. Ein roter Punkt bedeutet einen toten grünen Subpixel, ein grüner Punkt einen
          toten roten, und ein weißer Punkt heißt, dass ein blauer Subpixel dauerhaft an ist. Grenz es mit dem{' '}
          <Link href="/red-screen" className={link}>roten</Link>, <Link href="/green-screen" className={link}>grünen</Link> und{' '}
          <Link href="/blue-screen" className={link}>blauen Bildschirm</Link> ein.
        </p>
        <p className={p}>
          Sieht dein <Link href="/" className={link}>weißer Bildschirm</Link> stattdessen gelb aus, lies den{' '}
          <Link href="/screen-problems/yellow-tint-on-screen" className={link}>Ratgeber zum Gelbstich</Link>.
        </p>
      </Section>
    </div>
  )
}
