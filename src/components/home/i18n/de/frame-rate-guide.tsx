import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Bildrate-Test (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * FPS Test / FPS testen → Bildraten im Vergleich → Bildwiederholrate (verlinkt) → FPS in Spielen.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function FrameRateGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Bildrate-Test: FPS nebeneinander vergleichen">
        <p className={p}>
          Dieser Bildrate-Test, auch FPS-Test genannt, bewegt denselben Block über fünf Bahnen, jede mit einer anderen Bildrate, damit du den
          Unterschied selbst siehst:
        </p>
        <ul className={ul}>
          <li>Bahnen mit 15, 24, 30 und 60 FPS, die sich nur in ihren eigenen Frames bewegen, wie ein Video mit dieser Rate.</li>
          <li>Eine Max-Bahn, die sich in jedem Frame bewegt, den dein Display zeigt, beschriftet mit deinen echten FPS.</li>
          <li>„Dein Display:“ zeigt die höchsten FPS, die dein Bildschirm und Browser darstellen können, live gemessen.</li>
        </ul>
        <p className={p}>
          Mit „Tempo“ (120 bis 1.800 px/s) machst du die Bewegung schneller, mit „Pause“ hältst du sie an, und doppeltes Tippen schaltet auf Vollbild.
          Der FPS-Test läuft online in jedem Browser, ohne Installation.
        </p>
      </Section>

      <Section wide id="results-heading" title="Ergebnisse im Bildrate-Test: So sieht jede Bildrate aus">
        <Table
          caption="Übliche Bildraten"
          head={['Bildrate', 'Zeit pro Bild', 'Wo du sie siehst']}
          rows={[
            ['15 FPS', '66,7 ms', 'Ruckelig; langsame Videocalls, alte Webcams'],
            ['24 FPS', '41,7 ms', 'Kinofilme und die meisten Streaming-Serien'],
            ['30 FPS', '33,3 ms', 'Fernsehen, YouTube, Konsolenspiele'],
            ['60 FPS', '16,7 ms', 'Flüssiges Gaming und Sportvideos'],
            ['120+ FPS', '8,3 ms oder weniger', 'Monitore und Handys mit hoher Bildwiederholrate'],
          ]}
        />
        <p className={p}>Schneller FPS-Check: Wirkt die Max-Bahn nicht flüssiger als 60, läuft dein Bildschirm wahrscheinlich mit 60 Hz.</p>
      </Section>

      <Section wide id="hz-heading" title="Bildrate-Test oder Bildwiederholrate-Test?">
        <p className={p}>
          Die Bildrate (FPS) gibt an, wie viele Bilder pro Sekunde gezeichnet werden; die Bildwiederholrate (Hz), wie oft dein Monitor ein neues
          zeigen kann. Ein Bildschirm kann nicht mehr FPS zeigen, als er Hz hat, deshalb ist die Max-Bahn im Bildrate-Test durch deine
          Bildwiederholrate begrenzt.
        </p>
        <p className={p}>
          Um die Bildwiederholrate genau zu prüfen, mit Frame-Zeiten und verspäteten Frames, mach den{' '}
          <Link href="/screen-refresh-rate-test" className={link}>Bildwiederholrate-Test</Link>. Für Schlieren hinter bewegten Objekten probier den{' '}
          <Link href="/monitor-ghosting-test" className={link}>Monitor-Ghosting-Test</Link>.
        </p>
      </Section>

      <Section wide id="games-heading" title="Bildrate-Test für Spiele">
        <p className={p}>
          Online-Tools messen den Browser, nicht deine Spiele, und dieser FPS-Tester kann nicht in sie hineinsehen. Für die FPS im Spiel nutzt du ein
          Overlay:
        </p>
        <ul className={ul}>
          <li>Windows: Drück Win + G und öffne das Leistungs-Widget in der Xbox Game Bar.</li>
          <li>Steam: Schalte den FPS-Zähler in den „Im Spiel“-Einstellungen von Steam ein.</li>
          <li>NVIDIA oder AMD: das Leistungs-Overlay in der App des Grafiktreibers.</li>
        </ul>
      </Section>
    </div>
  )
}
