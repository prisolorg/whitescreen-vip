import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Bildschirm-Farbtest (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Farbtest / Monitor Farbtest → Bildschirmfarbe testen → Monitor, Fernseher, Handy, RGB-Test → Farbgenauigkeit und Verfärbung.
 * Muster heißen so wie in der deutschen Oberfläche des Tools.
 */
export function ScreenColorGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Bildschirm-Farbtest: Muster und worauf du achtest">
        <p className={p}>Dieser Farbtest hat sieben Vollbild-Muster, und jedes Testbild prüft etwas anderes:</p>
        <Table
          caption="Muster im Bildschirm-Farbtest"
          head={['Muster', 'Was es prüft', 'Ein guter Bildschirm zeigt']}
          rows={[
            ['Farbbalken', 'Grundlegende Farbwiedergabe', 'Acht klare, getrennte Farben ohne Farbstich'],
            ['RGB-Verläufe', 'Verläufe und Clipping', 'Gleichmäßige Verläufe aus Schwarz ohne Stufen; das helle Ende wird nicht zu früh flach'],
            ['Farbtonspektrum', 'Jeden Farbton dazwischen', 'Einen gleichmäßigen Regenbogen ohne Streifen oder Sprünge'],
            ['Sättigungsstufen', 'Farbintensität', 'Zehn Stufen von Grau bis volles Rot, jede anders'],
            ['Rot, Grün, Blau', 'Jede Subpixelfarbe einzeln', 'Eine gleichmäßige Farbe von Rand zu Rand, ohne dunkle Stellen'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="So machst du den Bildschirm-Farbtest">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Schalte Nachtmodus, Blaulichtfilter und automatische Helligkeit aus, damit die Bildschirmfarbe nicht verschoben ist.</li>
          <li>Tippe doppelt auf den Bildschirm-Farbtest für Vollbild, damit nur der Farbbildschirm zu sehen ist.</li>
          <li>Tippe auf den Bildschirm, nutze die Pfeiltasten oder wähle ein Muster nach Namen. „Automatischer Wechsel“ geht sie für dich durch.</li>
          <li>Schau frontal und dann von der Seite: Bei manchen Panels verschiebt sich die Farbe im Winkel.</li>
        </ol>
        <p className={p}>
          Brauchst du stattdessen eine einzelne Vollfarbe? Öffne den <Link href="/" className={link}>weißen Bildschirm</Link>, den{' '}
          <Link href="/red-screen" className={link}>roten Bildschirm</Link> oder eine Seite unter{' '}
          <Link href="/color-screens" className={link}>Farbbildschirme</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Bildschirm-Farbtest am Monitor, Fernseher oder Handy">
        <ul className={ul}>
          <li>Monitor: Nutze die RGB-Verläufe als Monitor-Farbtest und passe dann Farbtemperatur oder Bildmodus im Monitormenü an.</li>
          <li>Fernseher: Öffne den Bildschirm-Farbtest im Browser des Fernsehers oder streame einen Laptop-Tab. Film- oder Filmmaker-Modus zeigen meist die echtesten Farben.</li>
          <li>Handy: Dreh die Helligkeit hoch und vergleiche die Farbmodi „Natürlich“ und „Lebendig“, falls dein Handy sie hat.</li>
          <li>Die Flächen Rot, Grün und Blau dienen auch als RGB-Test für hängende Subpixel.</li>
        </ul>
      </Section>

      <Section wide id="accuracy-heading" title="Grenzen des Bildschirm-Farbtests: Genauigkeit und Verfärbung">
        <p className={p}>
          Ein Bildschirm-Farbtest ist ein Farbcheck mit bloßem Auge: Er findet Farbstiche, Streifen und ausgefallene Farben, aber echte
          Farbgenauigkeit braucht ein Hardware-Kolorimeter; keine Website kann sie messen. Suchst du Textfarben für eine Website? Nimm den{' '}
          <Link href="/contrast-checker" className={link}>Farbkontrast-Prüfer</Link>.
        </p>
        <Table
          caption="Was ein Farbproblem bedeuten kann"
          head={['Was du siehst', 'Probier']}
          rows={[
            ['Gelb- oder Blaustich überall', <Link key="y" href="/screen-problems/yellow-tint-on-screen" className={link}>Ratgeber zum Gelbstich</Link>],
            ['Stufen oder Streifen in den Verläufen', <Link key="b" href="/screen-problems/color-banding" className={link}>Ratgeber zu Color Banding</Link>],
            ['Flecken oder ungleichmäßige Bereiche (Verfärbung)', <Link key="u" href="/screen-uniformity-test" className={link}>Bildschirm-Homogenitätstest</Link>],
            ['Verblasste Logos oder Geisterbilder', <Link key="bi" href="/screen-burn-in-test" className={link}>Bildschirm-Einbrenn-Test</Link>],
            ['Schärfe, Gamma und mehr (vollständiger Display-Check)', <Link key="m" href="/monitor-test" className={link}>Monitortest</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
