import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Blauw Scherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * blauw scherm als blauw licht → tinten blauw → chroma key → test voor blauwlichtbril en subpixels.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function BlueScreenGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Blauw scherm als lamp: gebruik je scherm voor blauw licht">
        <p className={p}>
          Een volledig blauw scherm maakt van elke monitor, laptop of telefoon een zacht blauw lichtscherm. Dubbeltik op het voorbeeld voor
          volledig scherm, zet Scherm aan houden aan en stel de helderheid in die je nodig hebt.
        </p>
        <Table
          caption="Manieren om het blauwe scherm als lamp te gebruiken"
          head={['Gebruik', 'Instellingen', 'Tip']}
          rows={[
            ['Achtergrondgloed voor streams en video’s', 'Helderheid 70–100%', 'Zet een tweede scherm achter je, buiten beeld'],
            ['Accentlicht voor foto en video', 'Helderheid 100%', 'Belicht vanaf de zijkant voor een koele rand rond je onderwerp'],
            ['Sfeer- en feestverlichting', 'Helderheid 40–70%', 'Richt het scherm op een muur om het blauwe licht te verspreiden'],
            ['Felblauwe flits', 'Helderheid 100%, volledig scherm', 'Telefoons geven het sterkste licht op maximale helderheid'],
          ]}
        />
        <h3 className={h3}>Blauw licht van schermen en slaap</h3>
        <p className={p}>
          Fel blauw licht in de avond kan het moeilijker maken om in slaap te vallen. Gebruik blauw licht overdag of voor creatieve opnames, en
          stap ’s avonds over op het <Link href="/red-screen" className={link}>rode</Link> of{' '}
          <Link href="/orange-screen" className={link}>oranje</Link> scherm op lage helderheid.
        </p>
      </Section>

      <Section wide id="shade-heading" title="Kleuren blauw scherm: fel, donker, marine en lichtblauw">
        <p className={p}>
          Deze pagina toont puur blauw, #0000FF (RGB 0, 0, 255). Gebruik de schuifregelaar Helderheid om het donkerder te maken, met de warmte op
          Neutraal.
        </p>
        <Table
          caption="Tinten blauw en hoe je ze krijgt"
          head={['Tint', 'Hex', 'Zo krijg je het']}
          rows={[
            ['Felblauw', '#0000FF', 'Helderheid 100%'],
            ['Donkerblauw', '#0000B3', 'Helderheid 70%'],
            ['Marineblauw', '#000080', 'Helderheid 50%'],
            ['Lichtblauw', '#00FFFF', <Link key="c" href="/cyan-screen" className={link}>Open het cyaan scherm</Link>],
          ]}
        />
        <p className={p}>
          Een bestand nodig? Downloaden slaat een blauwe PNG op in 1080p, 2K, 4K of telefoonformaat, of in elk eigen formaat tot 8K. Meer opties vind je in de
          collectie <Link href="/backgrounds/blue-background" className={link}>blauwe achtergronden</Link>.
        </p>
      </Section>

      <Section wide id="chroma-heading" title="Blauw scherm voor chroma key, fotografie en montage">
        <p className={p}>Een blauw scherm werkt net als een groen scherm, en in een paar gevallen is het de betere keuze:</p>
        <ul className={ul}>
          <li>Je onderwerp draagt groen of houdt groene voorwerpen vast.</li>
          <li>Je wilt minder zichtbare kleurafstraling. Blauwe afstraling is makkelijker te verbergen, al heeft blauw meer licht nodig om strak te keyen.</li>
        </ul>
        <p className={p}>
          Voor kleine producten en close-ups open je deze pagina op een laptop, computermonitor of telefoon, zet je Helderheid op ongeveer 70% en
          houd je het onderwerp 20–30 cm voor het scherm. Voor montage download je een blauwe PNG en key je die met dezelfde tools als voor
          groen: OBS Chroma Key, CapCut Chroma key, Premiere Ultra Key of de 3D Keyer van DaVinci Resolve. Zie{' '}
          <Link href="/glossary/chroma-key" className={link}>chroma key</Link> voor hoe keying werkt.
        </p>
      </Section>

      <Section wide id="test-heading" title="Blauw scherm als test: blauwlichtbrillen en subpixels">
        <p className={p}>
          Wil je snel je bril testen op blauw licht? Bekijk deze pagina op volle helderheid met en zonder bril. Sterk getinte glazen maken het
          blauw merkbaar donkerder; heldere glazen die weinig blauw tegenhouden, maken bijna geen verschil. Probeer hetzelfde met het{' '}
          <Link href="/" className={link}>witte scherm</Link> om te zien hoeveel de glazen alles kleuren. Het is een snelle visuele controle,
          geen labmeting.
        </p>
        <p className={p}>
          Puur blauw laat ook alleen de blauwe subpixels oplichten. Een zwart puntje is een dode blauwe subpixel, terwijl een magenta of cyaan
          puntje betekent dat een rode of groene subpixel aan blijft staan. Voor een volledige controle doe je de{' '}
          <Link href="/dead-pixel-test" className={link}>dode pixel test</Link>.
        </p>
      </Section>
    </div>
  )
}
