import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Displayschaden-Effekt (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * gesprungenes Display / kaputter Bildschirm → Computer, Laptop, Chromebook, Handy → Display-kaputt-Streich →
 * Bild und Hintergrund → echter Schaden. Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function BrokenScreenGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Displayschaden-Effekt: gesprungen, zersplittert oder LCD-Schaden">
        <p className={p}>
          Wähle unter der Vorschau einen Riss-Stil und tippe oder klicke dann irgendwo hin, um das Glas an dieser Stelle springen zu lassen.
          Jeder Tipp fügt einen weiteren Riss hinzu, so breitet sich das gesprungene Display aus wie echtes Glas.
        </p>
        <Table
          caption="Stile des Displayschaden-Effekts und wie sie aussehen"
          head={['Stil', 'Sieht aus wie']}
          rows={[
            ['Spinnennetz', 'Das klassische gesprungene Display: lange Risse, die von einem Aufprall ausgehen'],
            ['Ecke getroffen', 'Ein heruntergefallenes Handy, das auf der Ecke gelandet ist'],
            ['Zersplittert', 'Ein zertrümmerter, zersplitterter Bildschirm mit zerbröseltem Glas überall'],
            ['Haarriss', 'Ein feiner, realistischer Riss, den man zuerst leicht übersieht'],
            ['Auslaufendes LCD', 'Tintenartige schwarze und farbige Flecken von einem beschädigten Panel'],
            ['Tote Linien', 'Helle senkrechte Linien, wie bei einem gesprungenen Display, das Spalten verliert'],
          ]}
        />
      </Section>

      <Section wide id="computer-heading" title="Displayschaden-Effekt am Computer, Laptop oder Chromebook">
        <ul className={ul}>
          <li>Für einen falschen kaputten Computerbildschirm öffnest du diese Seite auf dem Laptop, PC, Chromebook oder Smart-TV, den du reinlegen willst.</li>
          <li>Wähle unter „Mehr“ die Option „Bildschirm aus“ oder „Hintergrundbild“, damit der kaputte Bildschirm wie der echte Desktop aussieht.</li>
          <li>Drück F oder tippe auf „Vollbild“ und setz dann ein paar Risse dorthin, wo der Bildschirm einen Schlag abbekommen würde.</li>
          <li>Tritt zurück und warte. Der Mauszeiger verschwindet von selbst, wenn niemand die Maus bewegt.</li>
        </ul>
        <h3 className={h3}>Displayschaden-Effekt als Handy-Streich auf iPhone, Android oder iPad</h3>
        <p className={p}>
          Öffne die Seite im Browser des Handys, wähle „Sperrbildschirm“, tippe auf „Vollbild“ und lass das Glas in der Nähe einer Ecke springen,
          wo echte Stürze meistens landen. Schalte das Splittergeräusch für den vollen Effekt ein.
        </p>
      </Section>

      <Section wide id="prank-heading" title="Tipps für den Streich mit dem Displayschaden-Effekt">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Mach es kurz.</strong> Die besten Streiche mit einem falschen kaputten Bildschirm enden mit einer
            schnellen Auflösung und einem Lacher.
          </li>
          <li>
            <strong className="text-foreground">Wähl die richtige Person.</strong> Lass alle aus, die sich über ein kaputtes Gerät wirklich aufregen würden.
          </li>
          <li>
            <strong className="text-foreground">Lös es schnell auf.</strong> Drück Esc oder schließ den Tab, und der Bildschirm ist wieder normal.
            Am Gerät ändert sich nichts.
          </li>
        </ul>
        <p className={p}>
          Lust auf noch einen? Probier den <Link href="/hacked-screen" className={link}>Gehackter-Bildschirm-Simulator</Link> oder den{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>Fake Bluescreen</Link>.
        </p>
      </Section>

      <Section wide id="image-heading" title="Displayschaden-Effekt als Bild und Hintergrund">
        <p className={p}>
          Lieber ein Bild vom kaputten Bildschirm statt eines Live-Effekts? Lass das Glas so springen, wie du willst, öffne dann „Mehr“ und nutze
          „PNG herunterladen“. Leg das Bild als Sperrbildschirm deines Handys oder als Hintergrundbild deines Computers fest, dann hält der Streich
          den ganzen Tag.
        </p>
      </Section>

      <Section wide id="real-heading" title="Kein Displayschaden-Effekt, sondern echt kaputt? So prüfst du den Schaden">
        <p className={p}>Bist du nicht für einen Streich hier? Diese schnellen Checks helfen dir, echten Schaden von einem Softwareproblem zu unterscheiden:</p>
        <Table
          caption="Anzeichen für einen wirklich kaputten Bildschirm"
          head={['Was du siehst', 'Prüfen mit']}
          rows={[
            ['Risse, die du fühlen oder bei ausgeschaltetem Bildschirm sehen kannst', <Link key="w" href="/" className={link}>Weißer Bildschirm</Link>],
            ['Schwarze Flecken oder sich ausbreitende Tinte', <Link key="d" href="/dead-pixel-test" className={link}>Pixelfehlertest</Link>],
            ['Teile des Bildschirms reagieren nicht auf Berührung', <Link key="t" href="/touch-screen-test" className={link}>Touchscreen-Test</Link>],
            ['Linien, Flackern oder seltsame Farben', <Link key="s" href="/screen-problems" className={link}>Ratgeber zu Bildschirmproblemen</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
