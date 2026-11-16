import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Zwart Scherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * zwart scherm volledig scherm → zwarte afbeelding downloaden → puur zwart → leeg scherm → tweede monitor → schermtest.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function BlackScreenGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="howto-heading" title="Zo krijg je een zwart scherm op volledig scherm">
        <ul className={ul}>
          <li>Dubbeltik op het voorbeeld of druk op F voor een effen zwart scherm, van rand tot rand.</li>
          <li>Tik op een telefoon op het pictogram voor volledig scherm in de hoek van het voorbeeld.</li>
          <li>Zet Scherm aan houden aan, zodat het scherm niet dimt of in slaap valt.</li>
          <li>Druk op Esc of dubbeltik opnieuw om te sluiten. De cursor verdwijnt vanzelf zolang je stil blijft.</li>
        </ul>
      </Section>

      <Section wide id="image-heading" title="Zwart scherm als afbeelding: download een zwarte foto of PNG">
        <p className={p}>
          Heb je een afbeelding van een zwart scherm nodig in plaats van een live scherm? Gebruik Downloaden onder het voorbeeld om een puur
          zwarte (#000000) PNG op te slaan in precies het formaat dat je nodig hebt. Het is een verliesvrij bestand, dus het zwart blijft egaal
          zonder compressieruis.
        </p>
        <Table
          caption="Formaten van het zwarte scherm die je kunt downloaden"
          head={['Formaat', 'Pixels', 'Goed voor']}
          rows={[
            ['Full HD 1080p', '1920 × 1080', 'YouTube-video’s, presentaties, de meeste monitoren'],
            ['QHD 1440p', '2560 × 1440', 'Gamingmonitoren en laptops'],
            ['4K UHD', '3840 × 2160', '4K-videotijdlijnen en tv’s'],
            ['8K UHD', '7680 × 4320', '8K-projecten en heel grote schermen'],
            ['iPhone / Android', '1179 × 2556 / 1080 × 2400', 'Achtergrond voor telefoon, start- en vergrendelscherm'],
            ['iPad', '2048 × 2732', 'Achtergrond voor tablet'],
            ['Eigen formaat', 'Elk formaat, bijv. 1080 × 1920', 'Verticale video voor Stories, Reels en Shorts'],
          ]}
        />
        <h3 className={h3}>Zwart scherm voor video en montage</h3>
        <p className={p}>
          Zet de PNG in 1080p of 4K in elk videobewerkingsprogramma en rek hem uit tot de lengte die je nodig hebt. Hij werkt als zwart beeld
          voor intro’s, overgangen en pauzes tussen clips, en je hoeft geen aparte clip te renderen.
        </p>
        <p className={p}>
          Zoek je dieper of getextureerd zwart? Bekijk de collectie{' '}
          <Link href="/backgrounds/black-background" className={link}>
            zwarte achtergronden
          </Link>
          .
        </p>
      </Section>

      <Section wide id="pure-heading" title="Helemaal zwart scherm: puur, pikzwart (#000000)">
        <p className={p}>
          Deze pagina toont puur zwart, RGB 0, 0, 0, de donkerste waarde die je een scherm kunt laten tonen. Hoe zwart het echt oogt, hangt af
          van je paneel.
        </p>
        <Table
          caption="Hoe een puur zwart scherm eruitziet op elk type scherm"
          head={['Scherm', 'Wat je ziet', 'Waarom']}
          rows={[
            ['OLED / AMOLED', 'Echt pikzwart, geen gloed', 'Elke pixel maakt zijn eigen licht en gaat uit bij zwart'],
            ['Mini-LED', 'Heel diep zwart', 'Zones met local dimming dimmen de achtergrondverlichting'],
            ['Lcd (IPS, VA, TN)', 'Heel donkergrijs in een donkere kamer', 'De achtergrondverlichting blijft aan achter het paneel'],
          ]}
        />
        <p className={p}>
          Weet je niet welk scherm je hebt? <Link href="/glossary/oled-vs-lcd" className={link}>OLED vs. lcd</Link> legt het verschil uit.
        </p>
      </Section>

      <Section wide id="blank-heading" title="Zwart scherm als leeg scherm: verberg je beeld">
        <p className={p}>
          Een leeg zwart scherm verbergt alles op je scherm zonder het uit te zetten, dus apps, downloads en gesprekken lopen gewoon door.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Presentaties en beamers:</strong> maak het scherm leeg tussen dia’s of terwijl mensen praten.
          </li>
          <li>
            <strong className="text-foreground">Privacy:</strong> bedek je werk met één tik als je even wegloopt.
          </li>
          <li>
            <strong className="text-foreground">Focus:</strong> maak een afleidende tweede monitor leeg.
          </li>
        </ul>
        <h3 className={h3}>Website met een zwart scherm: een zwarte pagina in je browser</h3>
        <p className={p}>
          Sla deze zwart scherm-website op als bladwijzer om een zwarte pagina te openen wanneer je die nodig hebt. Er laadt niets anders, je
          hebt geen account nodig en je kunt het venster naar elke monitor slepen voordat je naar volledig scherm gaat.
        </p>
      </Section>

      <Section wide id="dark-heading" title="Zwart scherm voor een tweede monitor: donker scherm en verduistering">
        <p className={p}>
          Kijk je een film of speel je een game op één scherm? Zet een donker scherm op het andere, zodat het de kamer niet meer verlicht. Verplaats dit
          venster naar de tweede monitor, ga naar volledig scherm en zet Scherm aan houden aan.
        </p>
        <ul className={ul}>
          <li>Werkt als verduisteringsscherm of zwarte screensaver zonder je energie-instellingen te wijzigen.</li>
          <li>Op OLED staan zwarte pixels uit, dus puur zwart slijt het paneel niet zoals een stilstaand fel beeld.</li>
          <li>Zet op lcd ook de helderheid van de monitor lager voor het donkerste resultaat.</li>
        </ul>
      </Section>

      <Section wide id="check-heading" title="Zwart scherm als test: lichtlekkage, gloed en vastzittende pixels">
        <p className={p}>
          In een donkere kamer maakt een volledig zwart scherm een paar veelvoorkomende fouten makkelijk zichtbaar. Controleer voor dode pixels
          en stof ook het <Link href="/" className={link}>witte scherm</Link>:
        </p>
        <Table
          caption="Schermproblemen die een zwart scherm laat zien"
          head={['Wat je ziet', 'Wat het is', 'Meer weten']}
          rows={[
            ['Licht dat aan de randen lekt', 'Backlight bleed', <Link key="b" href="/screen-problems/backlight-bleed" className={link}>Backlight bleed</Link>],
            ['Gloed die verschuift als je beweegt', 'IPS-glow', <Link key="g" href="/screen-problems/ips-glow" className={link}>IPS-glow</Link>],
            ['Een puntje dat blijft branden', 'Vastzittende of hete pixel', <Link key="d" href="/dead-pixel-test" className={link}>Dode pixel test</Link>],
            ['Banding of zweem bij bijna zwart', 'OLED-uniformiteit', <Link key="o" href="/oled-gray-test" className={link}>OLED grijstest</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
