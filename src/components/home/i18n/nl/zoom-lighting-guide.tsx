import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Verlichting voor Videogesprekken (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * verlichting voor videobellen / Zoom-verlichting / scherm als lamp → opstelling → ringlamp of niet.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function ZoomLightingGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Verlichting voor videogesprekken: maak van je scherm een lamp">
        <p className={p}>
          Deze tool maakt van een vrij scherm een zacht, gelijkmatig licht voor je gezicht. Het werkt het best op een tweede monitor, tablet of
          telefoon achter je webcam, zodat het licht je van voren raakt.
        </p>
        <ul className={ul}>
          <li>Zet Helderheid op 100% voor fel wit licht, of lager voor een zachtere gloed.</li>
          <li>Kies Warm (3000 K), Neutraal (4500 K) of Daglicht (6500 K).</li>
          <li>Open Meer voor een exacte Kleurtemperatuur, een eigen Lichtkleur of de modus Kader.</li>
          <li>Dubbeltik op het scherm of druk op F, zodat het lichtscherm het hele beeld vult.</li>
        </ul>
      </Section>

      <Section wide id="setup-heading" title="Verlichting voor videogesprekken en vergaderingen instellen">
        <Table
          caption="Opstellingen voor verlichting bij videogesprekken"
          head={['Situatie', 'Probeer dit']}
          rows={[
            ['Vergadering overdag bij een raam', 'Daglicht, zodat het scherm bij het zonlicht past'],
            ['Videogesprek ’s avonds', 'Warm, op 60–80% helderheid'],
            ['Kantoor met plafondlampen', 'Neutraal, met het lichtscherm net boven je webcam'],
            ['Schaduw aan één kant van je gezicht', 'Zet aan die kant een tweede lichtscherm'],
          ]}
        />
        <p className={p}>
          Het beste licht voor videogesprekken komt van voren: houd felle ramen achter de camera, niet achter jezelf, en zet het licht ongeveer
          op ooghoogte. De modus Kader verlicht alleen de randen van het scherm voor zachter webcamlicht.
        </p>
      </Section>

      <Section wide id="ring-heading" title="Verlichting voor videogesprekken of een ringlamp?">
        <p className={p}>
          Deze verlichting vult je gezicht met vlak, gelijkmatig licht. Voor de ronde lichtreflectie in je ogen waar makers dol op zijn,
          probeer je de <Link href="/ring-light" className={link}>ringlamp online</Link>. Voor gewoon fel licht werkt het{' '}
          <Link href="/" className={link}>witte scherm</Link> ook.
        </p>
      </Section>
    </div>
  )
}
