import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ringlicht Online (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Ringlicht online / virtuelles Ringlicht → Ringlicht-Effekt für Selfies → Schminklicht und Spiegel → Farben.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function RingLightGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Ringlicht Online: So benutzt du es">
        <p className={p}>
          Dieses Ringlicht online zeichnet einen leuchtenden Ring auf deinen Bildschirm, so wird ein Handy, Tablet oder zweiter Monitor zum
          virtuellen Ringlicht. Stell es vor dich, direkt hinter deine Kamera.
        </p>
        <ul className={ul}>
          <li>Stell die Helligkeit ein und wähle eine Farbe: Weiß, Rosa, Blau oder Lila.</li>
          <li>Öffne „Mehr“, um Ringgröße und Breite, die Farbtemperatur des Weiß, „Mitte füllen“ und den Hintergrund zu ändern.</li>
          <li>Tippe doppelt auf den Bildschirm oder drück F, damit der Ring das Display füllt.</li>
        </ul>
      </Section>

      <Section wide id="effect-heading" title="Ringlicht-Online-Effekt für Selfies, Fotos und Videos">
        <p className={p}>
          Der Ringlicht-Effekt ist der runde Reflex, den du in den Augen siehst, dazu weiches, gleichmäßiges Licht mit wenig Schatten. So bekommst
          du ihn:
        </p>
        <ul className={ul}>
          <li>Halte den Bildschirm gerade vor dein Gesicht, mit der Kamera in der Mitte des Rings.</li>
          <li>Lass „Mitte füllen“ aus, damit die Ringform als Lichtreflex in deinen Augen erscheint.</li>
          <li>Nimm einen größeren, breiteren Ring für hellere Selfies.</li>
        </ul>
      </Section>

      <Section wide id="makeup-heading" title="Ringlicht Online zum Schminken und am Spiegel">
        <p className={p}>
          Weißes Licht bei voller Helligkeit zeigt echte Farben, das macht es zu einem praktischen Schminklicht. Stell den Bildschirm auf Augenhöhe
          neben deinen Spiegel, damit dein Gesicht gleichmäßig von vorn beleuchtet wird. Es beleuchtet dein Gesicht, zeigt aber kein Kamerabild als
          Spiegel.
        </p>
      </Section>

      <Section wide id="colors-heading" title="Farben für das Ringlicht Online: Weiß, Rosa, Blau und Lila">
        <Table
          caption="Ringlicht-Farben und wann du sie nutzt"
          head={['Farbe', 'Am besten für']}
          rows={[
            ['Weiß', 'Make-up, Videocalls und natürlich wirkende Fotos; die Wärme stellst du unter „Mehr“ ein'],
            ['Rosa', 'Weiche, schmeichelnde Selfies'],
            ['Blau', 'Kühle, stimmungsvolle Fotos und Streams'],
            ['Lila', 'Party- und kreative Beleuchtung'],
          ]}
        />
        <p className={p}>
          Brauchst du flaches Licht statt eines Rings? Probier die <Link href="/zoom-lighting" className={link}>Beleuchtung für Videoanrufe</Link> oder
          den einfachen <Link href="/" className={link}>weißen Bildschirm</Link>.
        </p>
      </Section>
    </div>
  )
}
