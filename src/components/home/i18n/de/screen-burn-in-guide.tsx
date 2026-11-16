import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Bildschirm-Einbrenn-Test (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * eingebranntes Bild / Burn-in Test / Einbrennen testen → Einbrennen oder Image Retention → Fixer → Handy, LCD, Monitor.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function ScreenBurnInGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Bildschirm-Einbrenn-Test: So prüfst du deinen Bildschirm">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Wähle „Auf Einbrennen prüfen“ und tippe doppelt für Vollbild. Dreh die Helligkeit hoch.</li>
          <li>Fang mit „50 % Grau“ an, der Fläche, auf der Einbrennen am deutlichsten zu sehen ist, und probier dann „20 % Grau“.</li>
          <li>Wechsle zu Weiß, Rot, Grün, Blau und Schwarz (ein ganzer <Link href="/" className={link}>weißer Bildschirm</Link> hilft auch). Oder schalte unter „Mehr“ den automatischen Wechsel ein, der die Fläche alle 4 Sekunden ändert.</li>
          <li>Achte auf blasse Formen, die nicht dorthin gehören: eine Taskleiste, eine Tastatur, App-Symbole, eine Uhr oder ein Senderlogo.</li>
        </ol>
        <p className={p}>
          Der Bildschirm-Einbrenn-Test ist am einfachsten, wenn du weißt, wo du hinschauen musst: Einbrennen entspricht meist dem, was am längsten
          auf dem Bildschirm steht.
        </p>
      </Section>

      <Section wide id="results-heading" title="Ergebnisse im Bildschirm-Einbrenn-Test: Einbrennen oder Image Retention?">
        <p className={p}>
          Was ist Einbrennen? Ein Bild, das sich in den Bildschirm eingebrannt hat, nachdem lange dasselbe Bild zu sehen war. Der
          Bildschirm-Einbrenn-Test zeigt beide Arten, und die Zeit unterscheidet sie:
        </p>
        <Table
          caption="Einbrennen und Image Retention im Vergleich"
          head={['', 'Image Retention', 'Einbrennen']}
          rows={[
            ['Was es ist', 'Ein Geisterbild, das eine Weile bleibt', 'Ungleichmäßig abgenutzte Pixel, dauerhaft'],
            ['Wie lange', 'Verblasst in Minuten bis Stunden', 'Verblasst nicht'],
            ['Häufig bei', 'LCD-Monitoren, Fernsehern, Laptops', 'OLED- und AMOLED-Handys, -Fernsehern und -Monitoren'],
            ['Hilft der Fixer?', 'Oft ja', 'Nein; er kann es nur weniger sichtbar machen'],
          ]}
        />
        <p className={p}>
          Mehr dazu in den Ratgebern zu <Link href="/screen-problems/screen-burn-in" className={link}>eingebranntem Bild</Link> und{' '}
          <Link href="/screen-problems/image-retention" className={link}>Image Retention</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Fixer im Bildschirm-Einbrenn-Test: Lässt sich Einbrennen beheben?">
        <p className={p}>
          Wähle „Einbrenn-Fixer“, drück „Fixer starten“ und lass den Bildschirm laufen. Unter „Mehr“ wählst du das Muster und lässt es 1 bis 60
          Minuten laufen (standardmäßig 10):
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Weißer Wischer:</strong> ein wandernder weißer Balken, ohne Blinken.</li>
          <li><strong className="text-foreground">Farbwechsel:</strong> Vollbildfarben, die schnell wechseln.</li>
          <li><strong className="text-foreground">Farbrauschen:</strong> zufällige farbige Pixel.</li>
        </ul>
        <p className={p}>
          Farbwechsel und Farbrauschen blinken; nimm den weißen Wischer, wenn dich blinkendes Licht stört. Mach danach den Bildschirm-Einbrenn-Test
          noch einmal. Ist das Bild nach mehreren Durchläufen noch da, ist es wahrscheinlich dauerhaftes Einbrennen. Zur Vorbeugung senkst du die
          Helligkeit, blendest statische Leisten aus und nutzt eine automatische Bildschirmabschaltung.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Bildschirm-Einbrenn-Test am Handy, LCD oder Monitor">
        <ul className={ul}>
          <li>
            Handy und iPhone: Einbrennen zeigt sich hier als Umriss der Tastatur oder Statusleiste. Öffne den Bildschirm-Einbrenn-Test im Browser
            und prüf die grauen Flächen bei voller Helligkeit.
          </li>
          <li>LCD-Monitore und Laptops: Echtes Einbrennen ist bei LCD selten; ein Test findet meist Image Retention, die der Fixer entfernen kann.</li>
          <li>
            OLED- und AMOLED-Bildschirme nutzen sich am schnellsten ab. Für sie nimm den{' '}
            <Link href="/oled-burn-in-test" className={link}>OLED Burn-In Test</Link>.
          </li>
        </ul>
        <p className={p}>
          Siehst du Punkte statt Formen? Probier den <Link href="/dead-pixel-test" className={link}>Pixelfehlertest</Link> oder den{' '}
          <Link href="/screen-uniformity-test" className={link}>Bildschirm-Homogenitätstest</Link> für Flecken und ungleichmäßige Helligkeit.
        </p>
      </Section>
    </div>
  )
}
