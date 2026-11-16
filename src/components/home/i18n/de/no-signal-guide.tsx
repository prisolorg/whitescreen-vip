import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Kein Signal Bildschirm (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * TV-Farbbalken / Testbild → Fernseher „kein Signal“ → Ideen → echtes „Kein Signal“ am Fernseher beheben.
 * Schaltflächen und Bildschirmtexte heißen so wie in der deutschen Oberfläche des Tools.
 */
export function NoSignalGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Kein Signal Bildschirm mit TV-Farbbalken: drei Stile">
        <Table
          caption="Stile des Kein-Signal-Bildschirms"
          head={['Stil', 'Was er zeigt']}
          rows={[
            ['Farbbalken', 'TV-Farbbalken mit einer KEIN-SIGNAL-Box in der Mitte'],
            ['Hüpfend', 'Eine KEIN-SIGNAL-Box, die wie bei einem Fernseher im Leerlauf umherwandert und von den Rändern abprallt'],
            ['Blauer Eingang', 'Ein schlichter blauer Bildschirm mit der Meldung, wie ihn viele Fernseher ohne Eingangssignal zeigen'],
          ]}
        />
        <ul className={ul}>
          <li>Öffne „Mehr“, um die Meldung und den Eingangsnamen (standardmäßig HDMI 1) zu ändern.</li>
          <li>Schalte den 1-kHz-Ton für den klassischen Testsignal-Piepton ein.</li>
          <li>Drück F oder tippe auf „Vollbild“, damit der Kein-Signal-Bildschirm einen Fernseher, Monitor oder Laptop füllt.</li>
        </ul>
      </Section>

      <Section wide id="bars-heading" title="TV-Farbbalken im Kein Signal Bildschirm: Was die Streifen bedeuten">
        <p className={p}>
          TV-Farbbalken sind das gestreifte Testbild, mit dem Sender ihre Bilder abgeglichen haben. Dieser Kein-Signal-Bildschirm zeichnet eine
          Version im SMPTE-Stil in drei Reihen:
        </p>
        <ul className={ul}>
          <li>Oben: sieben Balken in Grau, Gelb, Cyan, Grün, Magenta, Rot und Blau.</li>
          <li>Mitte: ein schmaler Streifen aus Blau, Magenta, Cyan und Grau, abwechselnd mit Schwarz.</li>
          <li>Unten: dunkelblaue, weiße, violette und schwarze Blöcke.</li>
        </ul>
        <p className={p}>
          Die TV-Farbbalken passen sich jedem Bildschirm an, auch 1080p- und 4K-Fernsehern. Sie sind für den Look gedacht, nicht zur Kalibrierung;
          um Farben zu prüfen, nimm den <Link href="/screen-color-test" className={link}>Bildschirm-Farbtest</Link>.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ideen für den Kein Signal Bildschirm und TV-Farbbalken">
        <ul className={ul}>
          <li>Streich: Zeig die TV-Farbbalken oder den Kein-Signal-Bildschirm im Vollbild und sieh zu, wie jemand jedes Kabel prüft.</li>
          <li>Requisite für Film und Foto: TV-Farbbalken ergeben einen glaubwürdigen Fernseher im Hintergrund, ohne echte Sendung.</li>
          <li>Streams und Events: ein „Gleich zurück“-Bildschirm mit deiner eigenen Meldung.</li>
        </ul>
        <p className={p}>
          Weitere Bildschirm-Streiche: der <Link href="/hacked-screen" className={link}>Gehackter-Bildschirm-Simulator</Link> und die{' '}
          <Link href="/fake-windows-10-update" className={link}>Windows 10 Update Simulation</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Kein Signal Bildschirm am echten Fernseher? Schnelle Lösungen">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Drück „Input“ oder „Source“ auf der Fernbedienung und wähle den Anschluss, an dem dein Gerät steckt.</li>
          <li>Prüf, ob das Gerät (Konsole, Laptop, Receiver) eingeschaltet ist und nicht schläft.</li>
          <li>Zieh das HDMI-Kabel an beiden Enden ab und steck es wieder ein, oder probier einen anderen Anschluss oder ein anderes Kabel.</li>
          <li>Starte Fernseher und Gerät neu.</li>
        </ol>
      </Section>
    </div>
  )
}
