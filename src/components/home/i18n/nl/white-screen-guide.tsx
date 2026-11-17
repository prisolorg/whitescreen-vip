import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Wit scherm (Nederlands, homepage). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * fel wit scherm → leeg wit scherm → wit scherm als lamp / zaklamp → witte achtergrond downloaden → schermtest.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function WhiteScreenGuideNl() {
  return (
    <>
      <Section id="bright-heading" title="Fel wit scherm: het helderste wit dat je scherm kan tonen">
        <p className={p}>
          Het felle witte scherm hierboven is puur wit (#FFFFFF) op 100%, de helderste kleur die elk scherm kan tonen. Hoe fel het er echt
          uitziet, hangt af van de helderheidsinstelling van je apparaat, want een website kan de achtergrondverlichting van de hardware niet
          voor je verhogen.
        </p>
        <h3 className={h3}>Zo maak je het witte scherm feller</h3>
        <ul className={ul}>
          <li>Houd de schuifregelaar Helderheid onder het scherm op 100% en kies Neutraal of Koel.</li>
          <li>Zet de helderheid van je apparaat helemaal omhoog (zie de tabel hieronder).</li>
          <li>Zet alles uit wat wit kleurt of dimt: Nachtlampje, Night Shift, True Tone, oogcomfort- en batterijbesparingsmodi.</li>
          <li>Dubbeltik op het scherm voor volledig scherm, zodat geen browserbalken de randen dimmen.</li>
        </ul>
        <Table
          caption="Waar je de maximale helderheid vindt op elk apparaat"
          head={['Apparaat', 'Maximale helderheid', 'Uitzetten voor puur wit']}
          rows={[
            ['Windows 10/11', 'Schuifregelaar helderheid in Snelle instellingen (Win + A)', 'Nachtlampje, batterijbesparing, op inhoud gebaseerde helderheid'],
            ['Mac', 'Helderheidstoetsen of Bedieningspaneel → Beeldscherm', 'Night Shift, True Tone, automatische helderheid'],
            ['iPhone / iPad', 'Schuifregelaar in het Bedieningspaneel', 'Night Shift, True Tone, Energiebesparingsmodus'],
            ['Android', 'Schuifregelaar in Snelle instellingen', 'Aanpasbare helderheid, oogcomfort / nachtlampje'],
            ['Smart-tv', 'Beeldmodus Levendig of Standaard, achtergrondverlichting op max', 'Eco- of energiebesparende beeldmodi'],
          ]}
        />
        <h3 className={h3}>Is een heel fel scherm veilig voor je ogen?</h3>
        <p className={p}>
          Een stilstaand wit scherm flikkert of flitst niet, maar volle helderheid in een donkere kamer kan fel aanvoelen. Zet de schuifregelaar
          lager of kies Warm als je alleen zacht licht nodig hebt, en kijk elke 20 minuten even weg als je het lang gebruikt.
        </p>
      </Section>

      <Section id="blank-heading" title="Leeg wit scherm: een effen, puur wit scherm zonder iets erop">
        <p className={p}>
          Een leeg wit scherm is precies dat: een helemaal wit scherm zonder tekst, pictogrammen of cursor. Zo’n effen wit scherm werkt als
          strakke achtergrond, als lichtpaneel of om je scherm met één tik leeg te maken.
        </p>
        <ul className={ul}>
          <li>Dubbeltik op het voorbeeld (of druk op F) voor een volledig wit scherm van rand tot rand.</li>
          <li>De cursor verdwijnt na een moment zonder beweging, zodat niets het wit onderbreekt.</li>
          <li>Druk op Esc of dubbeltik opnieuw om volledig scherm te verlaten.</li>
        </ul>
        <h3 className={h3}>Puur wit vs. warm, zacht en gebroken wit</h3>
        <Table
          caption="Tinten wit die je krijgt met de knoppen Koel, Neutraal en Warm"
          head={['Tint', 'Zo krijg je het', 'Het best voor']}
          rows={[
            ['Puur wit (#FFFFFF)', 'Neutraal, Helderheid 100%', 'Testen, schoonmaken, het felste licht'],
            ['Koel wit', 'Koel, Helderheid 100%', 'Frisse daglichtlook, productfoto’s'],
            ['Warm wit', 'Warm', 'Videogesprekken, make-up, lezen in de avond'],
            ['Zacht / gebroken wit', 'Warm + Helderheid 60–80%', 'Zacht achtergrondlicht in een donkere kamer'],
          ]}
        />
      </Section>

      <Section id="light-heading" title="Wit scherm als licht: gebruik je scherm als lamp">
        <p className={p}>
          Je scherm is een zachte, gelijkmatige lichtbron, en op volle helderheid geeft het verrassend fel wit licht. Zet de schuifregelaar
          Helderheid en de helderheid van je apparaat omhoog, kies een warmte en zet Scherm aan houden aan, zodat het licht niet midden in een
          gesprek uitgaat.
        </p>
        <Table
          caption="Aanbevolen instellingen om het witte scherm als lamp te gebruiken"
          head={['Gebruik', 'Warmte', 'Tip']}
          rows={[
            ['Videogesprekken (Zoom, Teams, Meet)', 'Warm of Neutraal', 'Zet het scherm net achter je webcam, iets boven ooghoogte'],
            ['Make-up en selfies', 'Neutraal', 'Kijk recht naar het scherm voor gelijkmatig licht zonder schaduw'],
            ['Leeslamp', 'Warm', 'Zet de schuifregelaar op 60–80% om verblinding te beperken'],
            ['Productfoto’s', 'Koel', 'Gebruik een tweede apparaat als invullicht vanaf de zijkant'],
            ['Snelle zaklamp', 'Neutraal', 'Volledig scherm op je telefoon op volle helderheid'],
          ]}
        />
        <h3 className={h3}>Gebruik je telefoon of laptop als zaklamp</h3>
        <p className={p}>
          Open dit witte scherm op je telefoon, zet de helderheid op max en dubbeltik voor volledig scherm. Dit lichtscherm is zachter dan de
          cameraflits, wat het handig maakt om in een donkere kamer iets te zoeken zonder iemand wakker te maken.
        </p>
        <p className={p}>
          Meer controle nodig? Probeer de <Link href="/ring-light" className={link}>ringlamp online</Link> voor een ronde lichtreflectie of de{' '}
          <Link href="/zoom-lighting" className={link}>verlichting voor videogesprekken</Link> voor een exacte kleurtemperatuur.
        </p>
      </Section>

      <Section id="background-heading" title="Wit scherm als achtergrond en afbeelding downloaden">
        <p className={p}>
          Heb je een wit scherm als bestand nodig? Gebruik Downloaden onder het scherm om een puur witte PNG op te slaan in het formaat dat je
          nodig hebt. De gekozen helderheid en warmte worden op de afbeelding toegepast.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Desktop en tv:</strong> 1080p, 2K en 4K.
          </li>
          <li>
            <strong className="text-foreground">Telefoon en tablet:</strong> Telefoon (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Eigen formaat:</strong> elke breedte en hoogte.
          </li>
        </ul>
        <p className={p}>
          Zoek je meer witte achtergronden en tinten? Bekijk de collectie{' '}
          <Link href="/backgrounds/white-background" className={link}>
            witte achtergronden
          </Link>
          .
        </p>
      </Section>

      <Section id="test-heading" title="Wit scherm als test: waar je op let">
        <p className={p}>
          Een volledig wit scherm is de snelste controle van je beeldscherm. Ga naar volledig scherm op volle helderheid en kijk over het hele
          paneel.
        </p>
        <Table
          caption="Wat een test met een wit scherm kan laten zien"
          head={['Wat je ziet', 'Wat het kan betekenen', 'Volgende stap']}
          rows={[
            ['Zwarte of donkere puntjes', 'Dode pixels', <Link key="d" href="/dead-pixel-test" className={link}>Dode pixel test</Link>],
            ['Vlekken, donkere hoeken of wolken', 'Ongelijke achtergrondverlichting', <Link key="u" href="/screen-uniformity-test" className={link}>Scherm uniformiteitstest</Link>],
            ['Wit ziet er geel, blauw of roze uit', 'Kleurinstellingen of zweem van het paneel', <Link key="c" href="/screen-color-test" className={link}>Scherm kleurentest</Link>],
            ['Vage vormen van oude beelden', 'Inbranden of beeldretentie', <Link key="b" href="/screen-burn-in-test" className={link}>Scherm inbrand test</Link>],
            ['Spikkels die bewegen als je veegt', 'Stof of vegen, geen pixels', 'Maak het scherm schoon en kijk opnieuw'],
          ]}
        />
        <p className={p}>
          Wissel daarna naar het <Link href="/black-screen" className={link}>zwarte scherm</Link>: vastzittende pixels en backlight bleed zie je
          het best op zwart.
        </p>
      </Section>
    </>
  )
}
