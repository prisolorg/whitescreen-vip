import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Geel Scherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * geel scherm als warm licht / gele zaklamp → effen geel → test van rode en groene subpixels.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function YellowScreenGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Geel scherm als warm licht">
        <p className={p}>
          Een geel scherm geeft warm licht zonder blauw erin, wat het een knus warm lichtscherm maakt om te lezen, te bellen en voor ’s avonds.
          Dubbeltik op het voorbeeld voor volledig scherm en zet Scherm aan houden aan, zodat het licht blijft branden.
        </p>
        <Table
          caption="Aanbevolen instellingen om het gele scherm als lamp te gebruiken"
          head={['Gebruik', 'Instellingen', 'Tip']}
          rows={[
            ['Leeslamp', 'Warm, Helderheid 60–80%', 'Zet een tablet naast je boek, van je ogen af gericht'],
            ['Videogesprekken', 'Neutraal, Helderheid 100%', 'Zet het scherm achter je webcam voor een gouden gloed'],
            ['Avond- of nachtlampje', 'Warm, Helderheid 30–50%', 'Een lagere helderheid houdt het zacht in een donkere kamer'],
            ['Kleur voor foto en video', 'Neutraal of Warm', 'Gebruik een tweede scherm als warm accentlicht vanaf de zijkant'],
          ]}
        />
        <h3 className={h3}>Gele zaklamp op je telefoon</h3>
        <p className={p}>
          Open deze pagina op je telefoon, zet de helderheid hoog en ga naar volledig scherm. Warm geel licht is minder fel dan een witte
          zaklamp in het donker, dus het is handig om bij de kinderen te kijken of ’s nachts je weg te vinden.
        </p>
      </Section>

      <Section wide id="solid-heading" title="Effen geel scherm (#FFFF00)">
        <p className={p}>
          Deze pagina toont effen geel: rood en groen op volle sterkte en blauw uit (RGB 255, 255, 0). Het is een leeg geel scherm zonder iets
          anders erop, en je kunt de tint aanpassen met de knoppen onder het voorbeeld.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Felgeel:</strong> Neutraal, Helderheid 100%.
          </li>
          <li>
            <strong className="text-foreground">Goudgeel:</strong> kies Warm.
          </li>
          <li>
            <strong className="text-foreground">Mosterdgeel:</strong> zet de schuifregelaar Helderheid lager.
          </li>
        </ul>
        <p className={p}>
          Een bestand nodig? Downloaden slaat een gele PNG op in 1080p, 2K, 4K of telefoonformaat, of in elk eigen formaat tot 8K. Voor pastel- en lichtgele
          tinten bekijk je de collectie <Link href="/backgrounds/yellow-background" className={link}>gele achtergronden</Link>.
        </p>
      </Section>

      <Section wide id="check-heading" title="Geel scherm als test: rode en groene subpixels">
        <p className={p}>
          Geel laat de rode en groene subpixels samen oplichten. Een rood puntje betekent een dode groene subpixel, een groen puntje een dode
          rode, en een wit puntje betekent dat een blauwe subpixel aan blijft staan. Zoek het verder uit met het{' '}
          <Link href="/red-screen" className={link}>rode</Link>, <Link href="/green-screen" className={link}>groene</Link> en{' '}
          <Link href="/blue-screen" className={link}>blauwe</Link> scherm.
        </p>
        <p className={p}>
          Ziet je <Link href="/" className={link}>witte scherm</Link> er juist geel uit? Lees dan de{' '}
          <Link href="/screen-problems/yellow-tint-on-screen" className={link}>
            gids over een gele zweem
          </Link>
          .
        </p>
      </Section>
    </div>
  )
}
