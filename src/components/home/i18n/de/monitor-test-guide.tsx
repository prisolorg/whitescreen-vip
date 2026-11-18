import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Monitortest (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Monitortest / Bildschirmtest / Display Test online → Testbild → Farbtest und Monitor kalibrieren → Pixelfehler, Hz, Auflösung.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function MonitorTestGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Monitortest-Muster und was jedes prüft">
        <p className={p}>
          Dieser Monitortest und Bildschirmtest hat sieben Vollbild-Muster, und jedes Testbild prüft etwas anderes. Für eine einfarbige Fläche,
          auf der du Staub und tote Pixel findest, öffne den <Link href="/" className={link}>weißen Bildschirm</Link>:
        </p>
        <Table
          caption="Muster im Monitortest"
          head={['Muster', 'Was es prüft', 'Ein guter Bildschirm zeigt']}
          rows={[
            ['Grauverlauf', 'Weiche Übergänge, Farbstreifen (Banding)', 'Einen gleichmäßigen Verlauf ohne Stufen oder Farbstich'],
            ['Graustufen', 'Schwarz- und Weißwerte', 'Jede Stufe sichtbar verschieden, auch die dunkelste und hellste'],
            ['Raster', 'Geometrie und Skalierung', 'Gerade, gleichmäßig verteilte Linien von Rand zu Rand'],
            ['Gamma 2,2', 'Gamma-Einstellung', 'Der mittlere Block verschmilzt aus der Entfernung mit den Streifen'],
            ['Feine Linien', 'Schärfe, native Auflösung', 'Klare 1-Pixel-Linien ohne Flimmern oder Moiré'],
            ['Schachbrett', 'Kontrast und saubere Kanten', 'Scharfe Quadrate ohne Leuchten oder Schmieren'],
            ['Farbbalken', 'Farbwiedergabe', 'Acht klar getrennte, satte Farben'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="So machst du den Monitortest online">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Stell das Display auf seine native Auflösung und den Browser-Zoom auf 100 %.</li>
          <li>Tippe doppelt auf den Monitortest für Vollbild, damit nichts anderes auf dem Bildschirm ist.</li>
          <li>Tippe auf den Bildschirm, nutze die Pfeiltasten oder wähle ein Muster nach Namen. „Automatischer Wechsel“ geht sie für dich durch.</li>
          <li>Sieh dir jedes Muster frontal und dann von der Seite an, um Veränderungen beim Blickwinkel zu erkennen.</li>
        </ol>
        <p className={p}>
          Dieser Monitortest läuft in jedem Browser, deshalb taugt er als Display-Check, Bildschirmtest online, Laptop-Bildschirmtest, Test für
          einen neuen oder gebrauchten PC-Monitor oder als schneller Check am Fernseher.
        </p>
      </Section>

      <Section wide id="color-heading" title="Monitortest für Farbe und Kalibrierung">
        <p className={p}>
          Im Monitortest zeigen Farbbalken und das Gamma-Muster deutliche Farb- und Gamma-Probleme mit bloßem Auge. Für einen vollständigen
          Farbtest mit Vollfarben und RGB-Verläufen nimm den <Link href="/screen-color-test" className={link}>Bildschirm-Farbtest</Link>.
        </p>
        <p className={p}>
          Echte Farbgenauigkeit braucht ein Hardware-Kolorimeter; keine Website kann sie messen. Für eine einfache Farbkalibrierung des Monitors
          nimm das Tool, das in dein System eingebaut ist:
        </p>
        <ul className={ul}>
          <li>Windows: Such im Startmenü nach „Bildschirmfarbe kalibrieren“.</li>
          <li>Mac: Systemeinstellungen → Displays → Farbprofil → Anpassen → Kalibrieren.</li>
        </ul>
      </Section>

      <Section wide id="more-heading" title="Monitortest für Pixelfehler, Hz und andere Fehler">
        <Table
          caption="Welchen Test du als Nächstes machst"
          head={['Wenn du prüfen willst', 'Mach den']}
          rows={[
            ['Tote oder hängende Pixel (LCD-Test)', <Link key="dp" href="/dead-pixel-test" className={link}>Pixelfehlertest</Link>],
            ['Bildwiederholrate (Hz)', <Link key="hz" href="/screen-refresh-rate-test" className={link}>Bildwiederholrate-Test</Link>],
            ['Reaktionszeit und Schlieren', <Link key="gh" href="/monitor-ghosting-test" className={link}>Monitor-Ghosting-Test</Link>],
            ['Backlight Bleeding und Schwarz-Gleichmäßigkeit', <Link key="un" href="/gray-screen" className={link}>Bildschirm-Homogenitätstest</Link>],
            ['Geisterbilder, die auf dem Bildschirm bleiben', <Link key="bi" href="/screen-burn-in-test" className={link}>Bildschirm-Einbrenn-Test</Link>],
            ['Deine Bildschirmauflösung', <Link key="rs" href="/screen-resolution-test" className={link}>Bildschirm-Auflösungstest</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
