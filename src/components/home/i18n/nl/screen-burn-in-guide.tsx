import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Scherm Inbrand Test (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * inbrandtest / scherm ingebrand / burn-in test → inbranden of beeldretentie → hersteller → telefoon, lcd en monitor.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function ScreenBurnInGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Scherm inbrand test: zo controleer je je scherm">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Kies Controleren op inbranden en dubbeltik voor volledig scherm. Zet de helderheid hoog.</li>
          <li>Begin op 50% grijs, het vlak waarop inbranden het duidelijkst zichtbaar is, en probeer daarna 20% grijs.</li>
          <li>
            Wissel naar wit, rood, groen, blauw en zwart (een volledig <Link href="/" className={link}>wit scherm</Link> helpt ook). Of zet
            Automatisch wisselen (4 s) aan onder Meer om het vlak elke 4 seconden te veranderen.
          </li>
          <li>Zoek naar vage vormen die er niet horen: een taakbalk, toetsenbord, app-pictogrammen, een klok of een zenderlogo.</li>
        </ol>
        <p className={p}>
          De scherm inbrand test is het makkelijkst als je weet waar je moet kijken: inbranden komt meestal overeen met wat het langst op het
          scherm staat.
        </p>
      </Section>

      <Section wide id="results-heading" title="Uitkomsten van de scherm inbrand test: inbranden of beeldretentie?">
        <p className={p}>
          Wat is inbranden? Een beeld dat in het scherm is gebrand nadat lange tijd hetzelfde beeld werd getoond. De scherm inbrand test toont
          beide soorten, en de tijd maakt het verschil duidelijk:
        </p>
        <Table
          caption="Inbranden vs. beeldretentie"
          head={['', 'Beeldretentie', 'Inbranden']}
          rows={[
            ['Wat het is', 'Een spookbeeld dat een tijdje blijft', 'Pixels die ongelijk zijn versleten, voorgoed'],
            ['Hoe lang', 'Vervaagt binnen minuten tot uren', 'Vervaagt niet'],
            ['Veel bij', 'Lcd-monitoren, tv’s, laptops', 'OLED- en AMOLED-telefoons, -tv’s en -monitoren'],
            ['Helpt de hersteller?', 'Vaak wel', 'Nee; hij kan het alleen minder zichtbaar maken'],
          ]}
        />
        <p className={p}>
          Lees meer in de gidsen over <Link href="/screen-problems/screen-burn-in" className={link}>inbranden van het scherm</Link> en{' '}
          <Link href="/screen-problems/image-retention" className={link}>beeldretentie</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Hersteller van de scherm inbrand test: is inbranden te verhelpen?">
        <p className={p}>
          Kies Inbrandhersteller, druk op Hersteller starten en laat het scherm draaien. Onder Meer kies je het Herstelpatroon en een Duur van 1
          tot 60 minuten (standaard 10):
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Witte veeg:</strong> een bewegende witte balk, zonder knipperen.
          </li>
          <li>
            <strong className="text-foreground">Kleurwissel:</strong> kleuren op volledig scherm die snel veranderen.
          </li>
          <li>
            <strong className="text-foreground">Kleurruis:</strong> willekeurige gekleurde pixels.
          </li>
        </ul>
        <p className={p}>
          Kleurwissel en Kleurruis knipperen; gebruik Witte veeg als knipperend licht je stoort. Doe daarna de scherm inbrand test opnieuw. Is
          het beeld er na meerdere rondes nog, dan is het waarschijnlijk blijvend inbranden. Om het te voorkomen verlaag je de helderheid,
          verberg je vaste balken en gebruik je een time-out voor het scherm.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Scherm inbrand test op een telefoon, lcd of monitor">
        <ul className={ul}>
          <li>
            Telefoon en iPhone: inbranden op een telefoon verschijnt als de omtrek van een toetsenbord of statusbalk. Open de scherm inbrand test
            in je browser en bekijk de grijze vlakken op volle helderheid.
          </li>
          <li>
            Lcd-monitoren en laptops: echt inbranden op lcd is zeldzaam; een inbrandtest op lcd vindt meestal beeldretentie die de hersteller
            kan wegwerken.
          </li>
          <li>
            OLED- en AMOLED-schermen slijten het snelst. Gebruik daarvoor de{' '}
            <Link href="/oled-burn-in-test" className={link}>OLED inbrandtest</Link>.
          </li>
        </ul>
        <p className={p}>
          Zie je puntjes in plaats van vormen? Probeer de <Link href="/dead-pixel-test" className={link}>dode pixel test</Link>, of de{' '}
          <Link href="/gray-screen" className={link}>scherm uniformiteitstest</Link> voor vlekken en ongelijke helderheid.
        </p>
      </Section>
    </div>
  )
}
