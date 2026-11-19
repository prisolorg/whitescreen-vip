import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schwarzer Bildschirm (Deutsch). Deutsche Suchbegriffe: schwarzer Bildschirm Vollbild → schwarzes Bild / Bild schwarz →
 * komplett schwarzer Bildschirm → leerer Bildschirm → dunkler Bildschirm für den zweiten Monitor → Bildschirmtest.
 * Schaltflächen heißen so wie in der deutschen Oberfläche: Herunterladen, Bildschirm wach halten, Vollbild.
 */
export function BlackScreenGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="howto-heading" title="Schwarzer Bildschirm im Vollbild: so geht’s">
        <ul className={ul}>
          <li>Tippe doppelt auf die Vorschau oder drücke F für einen schwarzen Bildschirm von Rand zu Rand.</li>
          <li>Am Handy tippst du auf das Vollbild-Symbol in der Ecke der Vorschau.</li>
          <li>Schalte „Bildschirm wach halten“ ein, damit sich die Anzeige nicht abdunkelt oder in den Ruhezustand geht.</li>
          <li>Mit Esc oder erneutem Doppeltippen beendest du den Vollbildmodus. Der Mauszeiger verschwindet von selbst, wenn du ihn nicht bewegst.</li>
        </ul>
      </Section>

      <Section wide id="image-heading" title="Schwarzer Bildschirm als Bild: schwarzes PNG herunterladen">
        <p className={p}>
          Du brauchst ein schwarzes Bild statt eines Live-Bildschirms? Über „Herunterladen“ unter der Vorschau speicherst du ein rein
          schwarzes PNG (#000000) in genau der Größe, die du brauchst. Die Datei ist verlustfrei, das Schwarz bleibt also ohne
          Kompressionsrauschen.
        </p>
        <Table
          caption="Bildgrößen für den schwarzen Bildschirm"
          head={['Größe', 'Pixel', 'Geeignet für']}
          rows={[
            ['1080p', '1920 × 1080', 'YouTube-Videos, Präsentationen, die meisten Monitore'],
            ['2K', '2560 × 1440', 'Gaming-Monitore und Laptops'],
            ['4K', '3840 × 2160', '4K-Videoschnitt und Fernseher'],
            ['Smartphone', '1080 × 2400', 'Handy-Hintergrund, Start- und Sperrbildschirm'],
            ['Eigene Größe', 'Beliebig, z. B. 1080 × 1920', 'Hochformat-Videos für Stories, Reels und Shorts'],
          ]}
        />
        <h3 className={h3}>Schwarzer Bildschirm für Videos und Schnitt</h3>
        <p className={p}>
          Zieh das 1080p- oder 4K-PNG in ein beliebiges Schnittprogramm und dehne es auf die gewünschte Länge. Es dient als Schwarzbild
          für Intros, Überblendungen und Pausen zwischen Clips, ganz ohne eigenen Clip zu rendern.
        </p>
        <p className={p}>
          Du suchst tieferes oder strukturiertes Schwarz? Sieh dir die{' '}
          <Link href="/backgrounds/black-background" className={link}>schwarzen Hintergründe</Link> an.
        </p>
      </Section>

      <Section wide id="pure-heading" title="Komplett schwarzer Bildschirm: reines Schwarz (#000000)">
        <p className={p}>
          Diese Seite zeigt reines Schwarz, RGB 0, 0, 0, den dunkelsten Wert, den ein Display darstellen kann. Wie schwarz es wirklich
          aussieht, hängt von deinem Panel ab.
        </p>
        <Table
          caption="So sieht reines Schwarz auf jedem Display-Typ aus"
          head={['Display', 'Was du siehst', 'Warum']}
          rows={[
            ['OLED / AMOLED', 'Echtes Tiefschwarz ohne Leuchten', 'Jedes Pixel erzeugt sein eigenes Licht und schaltet sich bei Schwarz ab'],
            ['Mini-LED', 'Sehr tiefes Schwarz', 'Lokale Dimming-Zonen regeln die Hintergrundbeleuchtung herunter'],
            ['LCD (IPS, VA, TN)', 'Sehr dunkles Grau in einem dunklen Raum', 'Die Hintergrundbeleuchtung bleibt hinter dem Panel an'],
          ]}
        />
        <p className={p}>
          Unsicher, was du hast? <Link href="/glossary/oled-vs-lcd" className={link}>OLED vs. LCD</Link> erklärt den Unterschied.
        </p>
      </Section>

      <Section wide id="blank-heading" title="Schwarzer Bildschirm als leerer Bildschirm: Anzeige verbergen">
        <p className={p}>
          Ein leerer schwarzer Bildschirm verbirgt alles auf deinem Display, ohne es auszuschalten. Apps, Downloads und Anrufe laufen also
          weiter.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Präsentationen und Beamer:</strong> den Bildschirm zwischen Folien oder während Gesprächen
            ausblenden.
          </li>
          <li>
            <strong className="text-foreground">Privatsphäre:</strong> deine Arbeit mit einem Tippen verdecken, wenn du kurz weggehst.
          </li>
          <li>
            <strong className="text-foreground">Konzentration:</strong> einen ablenkenden zweiten Monitor abdunkeln.
          </li>
        </ul>
        <h3 className={h3}>Schwarze Seite im Browser</h3>
        <p className={p}>
          Speichere diese Seite als Lesezeichen, dann hast du jederzeit eine schwarze Seite parat. Sonst wird nichts geladen, es gibt
          keine Anmeldung, und du kannst das Fenster vor dem Vollbild auf jeden beliebigen Monitor ziehen.
        </p>
      </Section>

      <Section wide id="dark-heading" title="Schwarzer Bildschirm für den zweiten Monitor: dunkel und blendfrei">
        <p className={p}>
          Du schaust auf einem Display einen Film oder spielst? Leg auf den anderen einen schwarzen Bildschirm, damit er den Raum nicht
          mehr erhellt. Zieh dieses Fenster auf den zweiten Monitor, wechsle ins Vollbild und schalte „Bildschirm wach halten“ ein.
        </p>
        <ul className={ul}>
          <li>Funktioniert wie ein schwarzer Bildschirmschoner, ohne deine Energieeinstellungen zu ändern.</li>
          <li>Auf OLED sind schwarze Pixel aus, reines Schwarz nutzt das Panel also nicht ab wie ein statisches helles Bild.</li>
          <li>Auf LCD regelst du zusätzlich die Helligkeit des Monitors herunter, um das dunkelste Ergebnis zu bekommen.</li>
        </ul>
      </Section>

      <Section wide id="check-heading" title="Schwarzer Bildschirm als Test: Lichthöfe, Glow und Pixelfehler">
        <p className={p}>
          In einem dunklen Raum macht ein schwarzer Bildschirm einige typische Fehler leicht sichtbar. Für tote Pixel und Staub prüfe
          auch den <Link href="/" className={link}>weißen Bildschirm</Link>:
        </p>
        <Table
          caption="Displayfehler, die ein schwarzer Bildschirm zeigt"
          head={['Was du siehst', 'Was es ist', 'Mehr dazu']}
          rows={[
            ['Licht dringt an den Rändern durch', 'Backlight Bleeding', <Link key="b" href="/screen-problems/backlight-bleed" className={link}>Backlight Bleeding</Link>],
            ['Leuchten, das sich mit dem Blickwinkel verschiebt', 'IPS-Glow', <Link key="g" href="/screen-problems/ips-glow" className={link}>IPS-Glow</Link>],
            ['Ein Punkt, der leuchtet', 'Hängender oder heißer Pixel', <Link key="d" href="/dead-pixel-test" className={link}>Pixelfehlertest</Link>],
            ['Streifen oder Farbstich im Fast-Schwarz', 'OLED-Gleichmäßigkeit', <Link key="o" href="/oled-gray-test" className={link}>OLED-Test</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
