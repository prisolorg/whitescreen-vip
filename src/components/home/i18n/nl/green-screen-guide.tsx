import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Groen Scherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * groen scherm / greenscreen kleur → computer, laptop of telefoon → YouTube en montage → subpixeltest.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function GreenScreenGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="color-heading" title="Kleur van het groene scherm: welk groen werkt het best?">
        <p className={p}>
          Deze pagina toont puur groen, #00FF00 (RGB 0, 255, 0). Keying-software verwijdert elk egaal, verzadigd groen, maar heel fel groen kan
          op je onderwerp afstralen. Gebruik de schuifregelaar Helderheid voor de tint die je nodig hebt, en houd de warmte op Neutraal.
        </p>
        <Table
          caption="Kleuren groen scherm en hoe je ze op deze pagina krijgt"
          head={['Tint', 'Hex', 'Zo krijg je het', 'Het best voor']}
          rows={[
            ['Felgroen', '#00FF00', 'Helderheid 100%', 'Pixeltests, de felste achtergrond'],
            ['Chroma key-groen', '#00B300 (dicht bij de standaard #00B140)', 'Helderheid 70%', 'Video keyen met minder kleurafstraling'],
            ['Donkergroen', '#008000', 'Helderheid 50%', 'Een zachtere achtergrond in schemerige ruimtes'],
          ]}
        />
        <p className={p}>
          Zoek je lichtgroene of pasteltinten? Bekijk de collectie{' '}
          <Link href="/backgrounds/green-background" className={link}>groene achtergronden</Link>.
        </p>
      </Section>

      <Section wide id="computer-heading" title="Groen scherm op je computer: laptop, monitor of telefoon">
        <p className={p}>
          Een groen computerscherm is een snelle achtergrond voor kleine opnames: producten, handen, speelgoed en close-ups.
        </p>
        <ul className={ul}>
          <li>Open deze pagina op een monitor, laptop, tablet of telefoon en dubbeltik voor volledig scherm.</li>
          <li>Zet Scherm aan houden aan, zodat het groen niet midden in een opname uitgaat.</li>
          <li>Zet Helderheid op ongeveer 70% voor egaal groen zonder hotspots.</li>
          <li>Houd je onderwerp 20–30 cm voor het scherm, zodat er geen groen licht op afstraalt.</li>
          <li>Film recht van voren. Door kijkhoeken kan een scherm aan de randen donkerder lijken.</li>
        </ul>
        <p className={p}>
          Een scherm is te klein om achter een persoon te zetten. Voor opnames van het hele lichaam of je gezicht hang je groene stof achter je
          of voeg je een groene achtergrond toe in je bewerkingsprogramma.
        </p>
      </Section>

      <Section wide id="video-heading" title="Groen scherm voor YouTube, video en montage">
        <p className={p}>
          Heb je een online greenscreen nodig voor je montage in plaats van op een scherm? Gebruik Downloaden onder het voorbeeld om een groene
          PNG op te slaan in 1080p, 4K, een telefoonformaat of elk eigen formaat, en zet die in je tijdlijn.
        </p>
        <Table
          caption="Waar je een groen scherm wegkeyt"
          head={['Software', 'Te gebruiken tool']}
          rows={[
            ['OBS Studio', 'Filter Chroma Key op de camerabron'],
            ['CapCut', 'Achtergrond verwijderen → Chroma key'],
            ['Premiere Pro', 'Effect Ultra Key'],
            ['DaVinci Resolve', '3D Keyer of Delta Keyer'],
          ]}
        />
        <h3 className={h3}>Groen scherm als achtergrond voor Zoom en Teams</h3>
        <p className={p}>
          Zoom en Teams hebben een virtueel greenscreen-effect, maar echte groene stof achter je geeft strakkere randen. Voor afbeeldingen die
          klaar zijn om te keyen, bekijk je de set{' '}
          <Link href="/backgrounds/green-screen-background" className={link}>greenscreen-achtergronden</Link>.{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma key</Link> legt uit hoe keying werkt.
        </p>
      </Section>

      <Section wide id="check-heading" title="Groen scherm als test: subpixels en uniformiteit">
        <p className={p}>
          Groen draagt het grootste deel van de helderheid die we zien, dus donkere hoeken of wolkerige plekken vallen erop op. Een donker
          puntje is een dode groene subpixel, terwijl een geel of cyaan puntje betekent dat een rode of blauwe subpixel aan blijft staan. Doe de{' '}
          <Link href="/screen-uniformity-test" className={link}>scherm uniformiteitstest</Link> of lees de{' '}
          <Link href="/screen-problems/stuck-pixel" className={link}>gids over vastzittende pixels</Link> voor de volgende stappen. Een zwart
          puntje dat ook op het <Link href="/" className={link}>witte scherm</Link> verschijnt, is een volledig dode pixel.
        </p>
      </Section>
    </div>
  )
}
