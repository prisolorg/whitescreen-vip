import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * DVD-Bildschirmschoner (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * DVD Bildschirmschoner / springendes DVD-Logo → Google-Easter-Egg → Fernseher, Stream, zweiter Monitor →
 * DVD-Logo und GIF → Ecktreffer und DVD-Spiel. Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function DvdScreensaverGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="bounce-heading" title="DVD-Bildschirmschoner: Das springende DVD-Logo">
        <p className={p}>
          Der DVD-Bildschirmschoner ist das springende DVD-Logo, das alte DVD-Player im Leerlauf gezeigt haben. Das Logo gleitet mit
          gleichmäßigem Tempo schräg über den Bildschirm und wechselt bei jeder Berührung eines Rands die Farbe. Es geht durch 10 Farben, ohne
          die letzte zu wiederholen.
        </p>
        <ul className={ul}>
          <li>Tippe doppelt auf den Bildschirm oder drücke F für den Vollbildmodus.</li>
          <li>Öffne „Mehr“, um Tempo und Logogröße zu ändern.</li>
          <li>Die Zähler erfassen jeden Abpraller und jeden exakten Ecktreffer.</li>
          <li>Mit „Pause“ hältst du das springende Logo an, mit „Fortsetzen“ geht es weiter.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Google-Easter-Egg zum DVD-Bildschirmschoner">
        <p className={p}>
          Wer bei Google nach „DVD screensaver“ gesucht hat, sah zeitweise, wie sich das Google-Logo auf der Ergebnisseite in ein springendes
          Logo im DVD-Stil verwandelte. Solche Easter Eggs kommen und gehen, und sie laufen nicht im Vollbild.
        </p>
        <p className={p}>
          Diese Seite zeigt dir dasselbe springende Logo jederzeit und in jedem Browser, mit Vollbild, Eckenzähler und Reglern für Tempo und
          Größe.
        </p>
      </Section>

      <Section wide id="tv-heading" title="DVD-Bildschirmschoner auf Fernseher, Stream oder zweitem Monitor">
        <Table
          caption="Wo du den DVD-Bildschirmschoner nutzen kannst"
          head={['Einsatz', 'So geht es']}
          rows={[
            ['Smart-TV', 'Öffne diese Seite im Browser des Fernsehers oder streame einen Browser-Tab und schalte dann auf Vollbild'],
            ['Stream-Pause oder BRB-Bildschirm', 'Füge dieses Fenster in OBS als Fensteraufnahme hinzu, während du kurz weg bist'],
            ['Zweiter Monitor', 'Zieh das Fenster auf den freien Bildschirm und schalte auf Vollbild'],
            ['Wartezimmer oder Büro', 'Lass es für ein bisschen Nostalgie auf einem freien Display laufen'],
          ]}
        />
      </Section>

      <Section wide id="logo-heading" title="Logo und GIF zum DVD-Bildschirmschoner">
        <p className={p}>
          Das Logo hier wird live in deinem Browser gezeichnet: ein fettes „DVD“ über einer Scheibe mit ausgespartem „VIDEO“, bei jedem Abprallen
          neu eingefärbt. Das offizielle DVD-Video-Logo ist eine Marke der DVD Format/Logo Licensing Corporation, deshalb gibt es es nicht als
          PNG zum Herunterladen.
        </p>
        <h3 className={h3}>So machst du ein GIF vom DVD-Bildschirmschoner</h3>
        <p className={p}>
          Lass den Bildschirmschoner im Vollbild laufen und nimm den Bildschirm mit einem eingebauten Recorder auf (Windows Snipping Tool,
          Bildschirmfoto-Leiste am Mac oder die Bildschirmaufnahme deines Handys). Wandle den Clip dann in ein DVD-GIF um. Nimm bis zu einem
          Ecktreffer auf, dann hast du die perfekte Schleife.
        </p>
      </Section>

      <Section wide id="corner-heading" title="Trifft der DVD-Bildschirmschoner die Ecke?">
        <p className={p}>
          Ja, aber wie oft, hängt von der Form des Bildschirms, der Logogröße und dem Startpunkt ab. Ein Ecktreffer passiert nur, wenn das Logo
          gleichzeitig eine Seite und den oberen oder unteren Rand erreicht. Bei manchen Bildschirmgrößen passiert das oft, bei anderen kann es
          lange dauern. Änderst du die Logogröße oder die Fenstergröße, bekommst du eine neue Bahn.
        </p>
        <p className={p}>
          Das macht es zum perfekten DVD-Spiel: Alle tippen, wann der nächste Ecktreffer kommt, und der Zähler entscheidet. Für weitere
          Bildschirme im Leerlauf probier den <Link href="/flip-clock-screensaver" className={link}>Klappuhr-Bildschirmschoner</Link> oder den{' '}
          <Link href="/matrix-screensaver" className={link}>Matrix-Bildschirmschoner</Link>.
        </p>
      </Section>
    </div>
  )
}
