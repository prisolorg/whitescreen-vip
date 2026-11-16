import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Grüner Bildschirm (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Greenscreen-Farbe → Computer, Laptop, Handy als Greenscreen → YouTube, Video, Schnitt → Subpixel und Gleichmäßigkeit.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function GreenScreenGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="color-heading" title="Grüner Bildschirm: Welches Grün eignet sich am besten?">
        <p className={p}>
          Diese Seite zeigt reines Grün, #00FF00 (RGB 0, 255, 0). Keying-Software entfernt jedes gleichmäßige, satte Grün, aber sehr helles Grün
          kann auf dein Motiv abstrahlen. Stell mit dem Helligkeitsregler den Ton ein, den du brauchst, und lass die Wärme auf Neutral.
        </p>
        <Table
          caption="Greenscreen-Farben und wie du sie auf dieser Seite bekommst"
          head={['Ton', 'Hex', 'So bekommst du ihn', 'Am besten für']}
          rows={[
            ['Hellgrün', '#00FF00', 'Helligkeit 100 %', 'Pixeltests, den kräftigsten Hintergrund'],
            ['Chroma-Key-Grün', '#00B300 (nahe am Standard #00B140)', 'Helligkeit 70 %', 'Video-Keying mit weniger Farbabstrahlung'],
            ['Dunkelgrün', '#008000', 'Helligkeit 50 %', 'Einen sanfteren Hintergrund in dunklen Räumen'],
          ]}
        />
        <p className={p}>
          Suchst du hellgrüne oder Pastelltöne? Stöbere in der Sammlung <Link href="/backgrounds/green-background" className={link}>grüner Hintergrund</Link>.
        </p>
      </Section>

      <Section wide id="computer-heading" title="Grüner Bildschirm am Computer: Laptop, Monitor oder Handy als Greenscreen">
        <p className={p}>Ein grüner Computerbildschirm ist ein schneller Hintergrund für kleine Aufnahmen: Produkte, Hände, Spielzeug und Nahaufnahmen.</p>
        <ul className={ul}>
          <li>Öffne diese Seite auf einem Monitor, Laptop, Tablet oder Handy und tippe doppelt für Vollbild.</li>
          <li>Schalte „Bildschirm wach halten“ ein, damit das Grün nicht mitten in der Aufnahme ausgeht.</li>
          <li>Stell die Helligkeit auf etwa 70 % für ein gleichmäßiges Grün ohne helle Stellen.</li>
          <li>Halte dein Motiv 20–30 cm vor dem Bildschirm, damit kein grünes Licht darauf fällt.</li>
          <li>Filme frontal. Blickwinkel können einen Bildschirm an den Rändern dunkler wirken lassen.</li>
        </ul>
        <p className={p}>
          Ein Bildschirm ist zu klein, um hinter einer Person zu stehen. Für Ganzkörper- oder Facecam-Aufnahmen häng lieber grünen Stoff hinter dich
          oder füge im Schnittprogramm einen grünen Hintergrund ein.
        </p>
      </Section>

      <Section wide id="video-heading" title="Grüner Bildschirm für YouTube, Video und Schnitt">
        <p className={p}>
          Brauchst du einen Greenscreen online für deinen Schnitt statt auf einem Display? Nutze „Herunterladen“ unter der Vorschau, um ein grünes
          PNG in 1080p, 4K, Handygröße oder jeder eigenen Größe zu speichern, und zieh es dann in deine Zeitleiste.
        </p>
        <Table
          caption="Wo du einen grünen Hintergrund herausrechnest"
          head={['Software', 'Werkzeug']}
          rows={[
            ['OBS Studio', 'Chroma-Key-Filter auf der Kameraquelle'],
            ['CapCut', 'Hintergrund entfernen → Chroma Key'],
            ['Premiere Pro', 'Effekt Ultra-Key'],
            ['DaVinci Resolve', '3D Keyer oder Delta Keyer'],
          ]}
        />
        <h3 className={h3}>Grüner Bildschirm als Hintergrund für Zoom und Teams</h3>
        <p className={p}>
          Zoom und Teams bieten einen virtuellen Greenscreen-Effekt, aber echter grüner Stoff hinter dir ergibt sauberere Kanten. Für Bilder, die
          bereit zum Keying sind, sieh dir die Sammlung <Link href="/backgrounds/green-screen-background" className={link}>Greenscreen-Hintergrund</Link>{' '}
          an. <Link href="/glossary/chroma-key" className={link}>Chroma Key</Link> erklärt, wie Keying funktioniert.
        </p>
      </Section>

      <Section wide id="check-heading" title="Grüner Bildschirm als Test: Subpixel und Gleichmäßigkeit">
        <p className={p}>
          Grün trägt den größten Teil der Helligkeit, die wir sehen, deshalb fallen dunklere Ecken oder wolkige Flecken darauf auf. Ein dunkler
          Punkt ist ein toter grüner Subpixel, ein gelber oder cyanfarbener Punkt bedeutet, dass ein roter oder blauer Subpixel dauerhaft an ist.
          Mach den <Link href="/screen-uniformity-test" className={link}>Bildschirm-Homogenitätstest</Link> oder lies den{' '}
          <Link href="/screen-problems/stuck-pixel" className={link}>Ratgeber zum hängenden Pixel</Link> für die nächsten Schritte. Ein schwarzer
          Punkt, der auch auf dem <Link href="/" className={link}>weißen Bildschirm</Link> erscheint, ist ein komplett toter Pixel.
        </p>
      </Section>
    </div>
  )
}
