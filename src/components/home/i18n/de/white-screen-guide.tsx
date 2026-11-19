import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Weißer Bildschirm (Deutsch, Startseite). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * heller weißer Bildschirm → leerer / komplett weißer Bildschirm → weißer Bildschirm als Licht → Hintergrundbild → Test.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function WhiteScreenGuideDe() {
  return (
    <>
      <Section id="bright-heading" title="Heller weißer Bildschirm: das hellste Weiß, das dein Display zeigen kann">
        <p className={p}>
          Der helle weiße Bildschirm oben ist reines Weiß (#FFFFFF) bei 100 %, die hellste Farbe, die ein Display zeigen kann. Wie hell er
          wirklich aussieht, hängt von der Helligkeitseinstellung deines Geräts ab, denn eine Website kann die Hintergrundbeleuchtung der Hardware
          nicht für dich hochdrehen.
        </p>

        <h3 className={h3}>So machst du den weißen Bildschirm heller</h3>
        <ul className={ul}>
          <li>Lass den Helligkeitsregler unter dem Bildschirm auf 100 % und wähle Neutral oder Kühl.</li>
          <li>Dreh die Helligkeit deines Geräts ganz hoch (Tabelle unten).</li>
          <li>Schalte alles aus, was Weiß tönt oder dimmt: Nachtmodus, Night Shift, True Tone, Augenschutz- und Energiesparmodi.</li>
          <li>Tippe doppelt auf den Bildschirm für Vollbild, damit keine Browserleisten die Ränder abdunkeln.</li>
        </ul>

        <Table
          caption="Wo du die maximale Helligkeit auf jedem Gerät findest"
          head={['Gerät', 'Maximale Helligkeit', 'Für reines Weiß ausschalten']}
          rows={[
            ['Windows 10/11', 'Helligkeitsregler in den Schnelleinstellungen (Win + A)', 'Nachtmodus, Energiesparmodus, inhaltsadaptive Helligkeit'],
            ['Mac', 'Helligkeitstasten oder Kontrollzentrum → Display', 'Night Shift, True Tone, automatische Helligkeit'],
            ['iPhone / iPad', 'Regler im Kontrollzentrum', 'Night Shift, True Tone, Stromsparmodus'],
            ['Android', 'Regler in den Schnelleinstellungen', 'Adaptive Helligkeit, Augenschutz / Nachtmodus'],
            ['Smart-TV', 'Bildmodus Lebhaft oder Standard, Hintergrundbeleuchtung auf Maximum', 'Eco- / Energiespar-Bildmodi'],
          ]}
        />

        <h3 className={h3}>Ist ein sehr heller Bildschirm gut für die Augen?</h3>
        <p className={p}>
          Ein gleichmäßiger weißer Bildschirm flackert und blinkt nicht, aber volle Helligkeit in einem dunklen Raum kann grell wirken. Senke den
          Regler oder wähle Warm, wenn du nur sanftes Licht brauchst, und schau alle 20 Minuten kurz weg, wenn du ihn lange nutzt.
        </p>
      </Section>

      <Section id="blank-heading" title="Leerer weißer Bildschirm: ein komplett weißer Bildschirm ohne alles">
        <p className={p}>
          Ein leerer weißer Bildschirm ist genau das: ein ganz weißer Bildschirm ohne Text, Symbole oder Mauszeiger. So ein schlichter weißer
          Bildschirm dient als sauberer Hintergrund, als Leuchtfläche oder als Weg, deinen Bildschirm mit einem Tipp freizuräumen.
        </p>
        <ul className={ul}>
          <li>Tippe doppelt auf die Vorschau (oder drück F) für einen komplett weißen Bildschirm von Rand zu Rand.</li>
          <li>Der Mauszeiger verschwindet nach einem Moment ohne Bewegung, damit nichts das Weiß stört.</li>
          <li>Drück Esc oder tippe noch einmal doppelt, um das Vollbild zu verlassen.</li>
        </ul>

        <h3 className={h3}>Reines Weiß oder warmer, sanfter und gebrochen weißer Bildschirm</h3>
        <Table
          caption="Weißtöne, die du mit den Knöpfen Kühl, Neutral und Warm bekommst"
          head={['Ton', 'So bekommst du ihn', 'Am besten für']}
          rows={[
            ['Reines Weiß (#FFFFFF)', 'Neutral, Helligkeit 100 %', 'Testen, Reinigen, das hellste Licht'],
            ['Kaltweiß', 'Kühl, Helligkeit 100 %', 'Klarer Tageslicht-Look, Produktfotos'],
            ['Warmweiß', 'Warm', 'Videocalls, Make-up, Lesen am Abend'],
            ['Sanftes / gebrochenes Weiß', 'Warm + Helligkeit 60–80 %', 'Sanftes Hintergrundlicht in einem dunklen Raum'],
          ]}
        />
      </Section>

      <Section id="light-heading" title="Weißer Bildschirm als Licht: dein Bildschirm als Lampe">
        <p className={p}>
          Dein Bildschirm ist eine weiche, gleichmäßige Lichtquelle, und bei voller Helligkeit gibt er ein überraschend helles weißes Licht ab.
          Dreh den Helligkeitsregler und die Gerätehelligkeit hoch, wähle eine Wärme und schalte „Bildschirm wach halten“ ein, damit das Licht nicht
          mitten im Call ausgeht.
        </p>
        <Table
          caption="Empfohlene Einstellungen, um den weißen Bildschirm als Licht zu nutzen"
          head={['Einsatz', 'Wärme', 'Tipp']}
          rows={[
            ['Videocalls (Zoom, Teams, Meet)', 'Warm oder Neutral', 'Stell den Bildschirm direkt hinter deine Webcam, leicht über Augenhöhe'],
            ['Make-up und Selfies', 'Neutral', 'Schau frontal auf den Bildschirm für gleichmäßiges, schattenfreies Licht'],
            ['Leselicht', 'Warm', 'Senke den Regler auf 60–80 %, um Blendung zu verringern'],
            ['Produktfotos', 'Kühl', 'Nutze ein zweites Gerät als Aufhelllicht von der Seite'],
            ['Schnelle Taschenlampe', 'Neutral', 'Vollbild am Handy bei voller Helligkeit'],
          ]}
        />
        <h3 className={h3}>Handy oder Laptop als Taschenlampe</h3>
        <p className={p}>
          Öffne diesen weißen Bildschirm auf deinem Handy, dreh die Helligkeit aufs Maximum und tippe doppelt für Vollbild. Dieses Licht ist sanfter
          als der Kamerablitz, praktisch, um in einem dunklen Raum etwas zu finden, ohne jemanden zu wecken.
        </p>
        <p className={p}>
          Willst du mehr Kontrolle? Probier das <Link href="/ring-light" className={link}>Ringlicht Online</Link> für einen runden Lichtreflex oder die{' '}
          <Link href="/zoom-lighting" className={link}>Beleuchtung für Videoanrufe</Link> für eine genaue Farbtemperatur.
        </p>
      </Section>

      <Section id="background-heading" title="Weißer Bildschirm als Hintergrund und Bild zum Herunterladen">
        <p className={p}>
          Brauchst du einen weißen Bildschirm als Datei? Nutze „Herunterladen“ unter dem Bildschirm, um ein reinweißes PNG in der Größe zu speichern,
          die du brauchst. Deine gewählte Helligkeit und Wärme werden auf das Bild übernommen.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Desktop & TV:</strong> 1080p, 2K und 4K.
          </li>
          <li>
            <strong className="text-foreground">Handy und Tablet:</strong> Smartphone (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Eigene Größe:</strong> jede Breite und Höhe.
          </li>
        </ul>
        <p className={p}>
          Suchst du mehr weiße Hintergrundbilder und Töne? Stöbere in der Sammlung{' '}
          <Link href="/backgrounds/white-background" className={link}>weißer Hintergrund</Link>.
        </p>
      </Section>

      <Section id="test-heading" title="Weißer Bildschirm als Test: Worauf du achtest">
        <p className={p}>
          Ein weißer Vollbildschirm ist der schnellste Display-Check. Schalte auf Vollbild bei voller Helligkeit und sieh dir das ganze Panel an.
        </p>
        <Table
          caption="Was ein Test mit dem weißen Bildschirm zeigen kann"
          head={['Was du siehst', 'Was es bedeuten kann', 'Nächster Schritt']}
          rows={[
            ['Schwarze oder dunkle Punkte', 'Tote Pixel', <Link key="d" href="/dead-pixel-test" className={link}>Pixelfehlertest</Link>],
            ['Flecken, dunkle Ecken oder Wolken', 'Ungleichmäßige Hintergrundbeleuchtung', <Link key="u" href="/gray-screen" className={link}>Bildschirm-Homogenitätstest</Link>],
            ['Weiß wirkt gelb, blau oder rosa', 'Farbeinstellungen oder Farbstich des Panels', <Link key="c" href="/screen-color-test" className={link}>Bildschirm-Farbtest</Link>],
            ['Blasse Formen alter Bilder', 'Einbrennen oder Image Retention', <Link key="b" href="/screen-burn-in-test" className={link}>Bildschirm-Einbrenn-Test</Link>],
            ['Punkte, die sich beim Wischen bewegen', 'Staub oder Schlieren, keine Pixel', 'Reinige den Bildschirm und prüf noch einmal'],
          ]}
        />
        <p className={p}>
          Wechsle dann zum <Link href="/black-screen" className={link}>schwarzen Bildschirm</Link>: Hängende Pixel und Backlight Bleeding sieht man
          auf Schwarz am besten.
        </p>
      </Section>
    </>
  )
}
