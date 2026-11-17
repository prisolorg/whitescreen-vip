import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Rood Scherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * rood scherm als nachtlicht / rood licht slapen → foto’s en reels → tinten rood → subpixeltest.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function RedScreenGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="night-heading" title="Rood scherm als licht voor de nacht en het slapen">
        <p className={p}>
          Gedimd rood licht is het vriendelijkst voor je nachtzicht. De cellen in je ogen voor weinig licht reageren nauwelijks op diep rood,
          daarom gebruiken sterrenkundigen en piloten het. Zet de schuifregelaar Helderheid lager, dubbeltik voor volledig scherm en zet Scherm
          aan houden aan.
        </p>
        <Table
          caption="Aanbevolen instellingen om het rode scherm ’s nachts te gebruiken"
          head={['Gebruik', 'Helderheid', 'Tip']}
          rows={[
            ['Nachtlampje', '20–40%', 'Richt het scherm op een muur voor een zachte gloed'],
            ['Aantekeningen lezen in het donker', '30–50%', 'Houd de telefoon dichtbij en onder ooghoogte'],
            ['Sterrenkijken', 'Zo laag als het gaat', 'Houdt je ogen gewend aan de donkere hemel'],
            ['Fel rood licht', '100%', 'Voor signalen, effecten en foto’s, niet om tot rust te komen'],
          ]}
        />
        <h3 className={h3}>Is een rood scherm goed om te slapen?</h3>
        <p className={p}>
          Een gedimd rood lichtscherm is voor het slapengaan zachter dan een fel <Link href="/" className={link}>wit scherm</Link> of een blauw
          scherm, omdat het geen blauw licht heeft. Het blijft wel een lamp, dus houd het laag en zet het uit zodra je gaat slapen. Een scherm
          is geen apparaat voor roodlichttherapie: die gebruiken specifieke golflengtes en een veel hoger vermogen.
        </p>
      </Section>

      <Section wide id="photo-heading" title="Rood scherm voor foto’s, reels en selfies">
        <p className={p}>Een rood scherm geeft selfies en reels een sfeervolle rode gloed met niets meer dan een telefoon of laptop.</p>
        <ul className={ul}>
          <li>Doe de lampen in de kamer uit, zodat het rode licht het enige licht op je gezicht is.</li>
          <li>Open dit volledig rode scherm op een tweede telefoon, tablet of laptop, zet Helderheid op 100% en ga naar volledig scherm.</li>
          <li>Houd het scherm 20–40 cm van je gezicht, iets naar de zijkant, voor schaduw en diepte.</li>
          <li>Verlaag de helderheid of zet het scherm verder weg als je huid overbelicht lijkt.</li>
        </ul>
        <p className={p}>Het werkt hetzelfde op iPhone, Android en laptops. Hoe groter het scherm, hoe zachter het licht.</p>
      </Section>

      <Section wide id="shade-heading" title="Kleuren rood scherm: fel, donker en lichtrood">
        <p className={p}>
          Deze pagina toont puur rood, #FF0000 (RGB 255, 0, 0): een leeg rood scherm zonder iets anders erop. Gebruik de schuifregelaar
          Helderheid om het donkerder te maken, met de warmte op Neutraal.
        </p>
        <Table
          caption="Tinten rood en hoe je ze krijgt"
          head={['Tint', 'Hex', 'Zo krijg je het']}
          rows={[
            ['Felrood', '#FF0000', 'Helderheid 100%'],
            ['Donkerrood', '#B30000', 'Helderheid 70%'],
            ['Dieprood / bordeaux', '#800000', 'Helderheid 50%'],
            ['Lichtrood / roze', '#FF69B4', <Link key="p" href="/pink-screen" className={link}>Open het roze scherm</Link>],
          ]}
        />
        <p className={p}>
          Een bestand nodig? Downloaden slaat een rode PNG op in 1080p, 2K, 4K of telefoonformaat, of in elk eigen formaat tot 8K. Meer tinten vind je in de
          collectie <Link href="/backgrounds/red-background" className={link}>rode achtergronden</Link>.
        </p>
      </Section>

      <Section wide id="test-heading" title="Rood scherm als test: rode subpixels en kleurnauwkeurigheid">
        <p className={p}>
          Puur rood laat alleen de rode subpixels oplichten. Een donker puntje is een dode rode subpixel, terwijl een geel of magenta puntje
          betekent dat een groene of blauwe subpixel aan blijft staan. Bij rood zien goedkopere monitoren er ook vaak oranje of rozig uit;
          vergelijk het met een ander apparaat, of doe de <Link href="/screen-color-test" className={link}>scherm kleurentest</Link> en de{' '}
          <Link href="/dead-pixel-test" className={link}>dode pixel test</Link>.
        </p>
      </Section>
    </div>
  )
}
