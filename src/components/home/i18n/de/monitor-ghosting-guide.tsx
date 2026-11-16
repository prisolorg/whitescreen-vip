import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Monitor-Ghosting-Test (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Ghosting Test / Monitor Ghosting → Ergebnisse (Schlieren, Black Smearing, Overshoot) → Ghosting beheben → Laptop, TV.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function MonitorGhostingGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Monitor-Ghosting-Test: So führst du ihn durch">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Stell deinen Monitor auf seine höchste Bildwiederholrate und tippe dann doppelt auf den Monitor-Ghosting-Test für Vollbild.</li>
          <li>Beobachte, wie sich das Ziel über die dunkle, mittelgraue und helle Bahn bewegt. Folge ihm mit den Augen, starr nicht auf einen Punkt.</li>
          <li>Erhöhe das Tempo (240 bis 2.400 px/s), bis Schlieren erscheinen, und drück „Pause“, um ein eingefrorenes Bild anzusehen.</li>
          <li>Ändere die Overdrive-Einstellung deines Monitors und mach den Ghosting-Test noch einmal zum Vergleich.</li>
        </ol>
        <p className={p}>
          Im Monitor-Ghosting-Test hilft dir das senkrechte Referenzraster (unter „Mehr“), die Länge einer Schliere einzuschätzen. Jede Bahn hat
          einen anderen Hintergrund, weil Ghosting auf Dunkel oder Mittelgrau oft stärker ist.
        </p>
      </Section>

      <Section wide id="results-heading" title="Ergebnisse im Monitor-Ghosting-Test: Was die Schlieren bedeuten">
        <p className={p}>
          Was ist Ghosting bei einem Monitor? Pixel, die ihre Farbe zu langsam wechseln, hinterlassen eine blasse Kopie hinter allem, was sich
          bewegt. So liest du den Monitor-Ghosting-Test:
        </p>
        <Table
          caption="Ghosting, Smearing und Overshoot"
          head={['Was du hinter dem Ziel siehst', 'Was es ist', 'Übliche Ursache']}
          rows={[
            ['Eine blasse, dunklere Kopie oder Schliere', 'Ghosting', 'Langsame Reaktionszeit der Pixel, Overdrive aus oder zu niedrig'],
            ['Ein dunkler Schmier, am schlimmsten auf der dunklen Bahn', 'Black Smearing', 'VA-Panels, langsame Wechsel von Dunkel zu Hell'],
            ['Ein heller oder invertierter Lichthof', 'Overshoot (inverses Ghosting)', 'Overdrive zu hoch eingestellt'],
            ['Eine weiche, unscharfe Kante ohne Kopie', 'Bewegungsunschärfe', 'Normal bei 60 Hz; weniger bei höheren Bildwiederholraten'],
          ]}
        />
      </Section>

      <Section wide id="fix-heading" title="Beheben, was der Monitor-Ghosting-Test zeigt">
        <p className={p}>Ein Monitor mit Ghosting muss selten repariert werden; die richtigen Einstellungen verkürzen die Schlieren meistens.</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Overdrive:</strong> im Monitormenü auch Response Time, Reaktionszeit, Trace Free oder OD genannt.
            Wähle die Stufe mit der kürzesten Schliere und ohne hellen Lichthof, meistens die mittlere.
          </li>
          <li>
            <strong className="text-foreground">Bildwiederholrate:</strong> Prüf mit dem{' '}
            <Link href="/screen-refresh-rate-test" className={link}>Bildwiederholrate-Test</Link>, ob sie auf dem Maximum ist. Mehr Hz bedeutet
            weniger Unschärfe.
          </li>
          <li>
            <strong className="text-foreground">Kabel und Anschluss:</strong> Nutze DisplayPort oder ein Kabel, das die volle Bildwiederholrate
            deines Monitors unterstützt.
          </li>
          <li>
            <strong className="text-foreground">Bildmodi:</strong> Zusätzliche Verarbeitung wie Rauschunterdrückung kann Schlieren verursachen;
            schalte sie aus.
          </li>
        </ul>
      </Section>

      <Section wide id="screen-heading" title="Monitor-Ghosting-Test am Laptop, Fernseher oder anderen Bildschirm">
        <p className={p}>
          Ghosting ist auf jedem LCD- oder OLED-Display dasselbe: Öffne den Monitor-Ghosting-Test auf dem Laptop, Fernseher oder Tablet, das du
          prüfen willst, und lass ihn im Vollbild laufen. Fernseher haben oft einen Spielmodus, der die Verarbeitung reduziert und Ghosting
          verringert.
        </p>
        <p className={p}>
          Mit „Geisterbild“ kann auch ein blasses Bild gemeint sein, das stehen bleibt, wenn sich nichts bewegt. Das ist Image Retention oder
          Einbrennen, kein Bewegungs-Ghosting; prüf es mit dem <Link href="/screen-burn-in-test" className={link}>Bildschirm-Einbrenn-Test</Link>.
          Mehr dazu im <Link href="/screen-problems/ghosting" className={link}>Ratgeber zu Ghosting</Link>.
        </p>
      </Section>
    </div>
  )
}
