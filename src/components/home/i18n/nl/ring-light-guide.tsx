import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ringlamp Online (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * ringlamp online / ringlicht → ringlamp-effect voor selfies → make-up → kleuren.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function RingLightGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Ringlamp online: zo gebruik je hem">
        <p className={p}>
          Deze online ringlamp tekent een gloeiende ring op je scherm, zodat een telefoon, tablet of tweede monitor een virtuele ringlamp
          wordt. Zet hem voor je, net achter je camera.
        </p>
        <ul className={ul}>
          <li>Stel de Helderheid in en kies een kleur: Wit, Roze, Blauw of Paars.</li>
          <li>Open Meer om de Ringgrootte en Dikte, de kleurtemperatuur van wit, Midden vullen en de Achtergrond aan te passen.</li>
          <li>Dubbeltik op het scherm of druk op F om het hele scherm met de ring te vullen.</li>
        </ul>
      </Section>

      <Section wide id="effect-heading" title="Ringlamp-effect voor selfies, foto’s en video">
        <p className={p}>
          Het ringlamp-effect is de ronde reflectie die je in iemands ogen ziet, plus zacht, gelijkmatig licht met weinig schaduw. Zo krijg je
          het:
        </p>
        <ul className={ul}>
          <li>Houd het scherm recht voor je gezicht met de camera in het midden van de ring.</li>
          <li>Laat Midden vullen uit, zodat de ringvorm als lichtreflectie in je ogen verschijnt.</li>
          <li>Gebruik een grotere, dikkere ring voor lichtere selfies.</li>
        </ul>
      </Section>

      <Section wide id="makeup-heading" title="Ringlamp voor make-up en spiegels">
        <p className={p}>
          Wit licht op volle helderheid toont echte kleuren, wat het een handige make-uplamp maakt. Zet het scherm naast je spiegel op ooghoogte,
          zodat je gezicht gelijkmatig van voren wordt verlicht. Het verlicht je gezicht; het toont geen camerabeeld als spiegel.
        </p>
      </Section>

      <Section wide id="colors-heading" title="Kleuren van de ringlamp: wit, roze, blauw en paars">
        <Table
          caption="Kleuren van de ringlamp en wanneer je ze gebruikt"
          head={['Kleur', 'Het best voor']}
          rows={[
            ['Wit', 'Make-up, videogesprekken en natuurlijk ogende foto’s; pas de warmte aan onder Meer'],
            ['Roze', 'Zachte, flatterende selfies'],
            ['Blauw', 'Koele, sfeervolle foto’s en streams'],
            ['Paars', 'Feest- en creatieve verlichting'],
          ]}
        />
        <p className={p}>
          Vlak licht nodig in plaats van een ring? Probeer de{' '}
          <Link href="/zoom-lighting" className={link}>verlichting voor videogesprekken</Link> of het gewone{' '}
          <Link href="/" className={link}>witte scherm</Link>.
        </p>
      </Section>
    </div>
  )
}
