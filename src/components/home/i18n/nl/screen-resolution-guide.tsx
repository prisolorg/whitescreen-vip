import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Scherm Resolutietest (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * wat is mijn schermresolutie / schermresolutie test → beeldscherminstellingen → telefoon → gangbare resoluties.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function ScreenResolutionGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="read-heading" title="Scherm resolutietest: wat elk getal betekent">
        <p className={p}>
          Wat is mijn schermresolutie? Deze pagina geeft vanzelf antwoord, zonder dat je op een knop hoeft te drukken. Dit laat elke waarde zien:
        </p>
        <Table
          caption="Waarden van de scherm resolutietest"
          head={['Waarde', 'Wat het betekent']}
          rows={[
            ['Schermresolutie', 'De grootte van je scherm in CSS-pixels, na schaling van het beeldscherm'],
            ['Fysieke pixels', 'Het echte aantal pixels: schermresolutie × pixelverhouding. Dit is meestal de native resolutie van je monitor'],
            ['Browserviewport', 'De ruimte binnen het browservenster'],
            ['Beschikbaar gebied', 'Het scherm min de taakbalk of het Dock'],
            ['Pixelverhouding', 'Hoeveel fysieke pixels één CSS-pixel vormen (1 = geen schaling)'],
            ['Kleurdiepte', 'Bits per pixel die de browser doorgeeft, meestal 24-bit'],
          ]}
        />
        <p className={p}>
          De waarden worden live bijgewerkt als je het venster groter of kleiner maakt of een telefoon draait. Houd de zoom van de browser op
          100%, want zoomen verandert de pixelverhouding en het aantal fysieke pixels.
        </p>
      </Section>

      <Section wide id="check-heading" title="Scherm resolutietest vs. je beeldscherminstellingen">
        <p className={p}>
          De scherm resolutietest leest wat je browser ziet. Zo controleer of wijzig je de resolutie van je monitor in je systeeminstellingen:
        </p>
        <Table
          caption="Waar je de instelling voor de schermresolutie vindt"
          head={['Apparaat', 'Waar je kijkt']}
          rows={[
            ['Windows 11 / 10', 'Instellingen → Systeem → Beeldscherm → Schermresolutie (de waarde met Aanbevolen is native)'],
            ['Mac', 'Systeeminstellingen → Beeldschermen (een geschaalde instelling kan Fysieke pixels laten afwijken van de native grootte van het paneel)'],
            ['iPhone / iPad', 'Vast per model; gebruik de waarde Fysieke pixels hierboven'],
            ['Android', 'Instellingen → Display → Schermresolutie (alleen op sommige telefoons)'],
          ]}
        />
        <p className={p}>
          Toont de controle minder fysieke pixels dan de specificatie van je monitor? Dan staat het scherm niet op de native resolutie, en kan
          tekst wazig lijken.
        </p>
      </Section>

      <Section wide id="phone-heading" title="Scherm resolutietest op een telefoon: wat is mijn resolutie?">
        <p className={p}>
          Telefoons geven een kleine resolutie door, zoals 390 × 844, omdat ze alles opschalen voor scherpe tekst. De echte resolutie van je
          telefoon is de waarde Fysieke pixels: 390 × 844 bij een pixelverhouding van 3 is bijvoorbeeld 1170 × 2532.
        </p>
      </Section>

      <Section wide id="common-heading" title="Gangbare resoluties in de scherm resolutietest: HD tot 4K">
        <Table
          caption="Gangbare schermresoluties"
          head={['Naam', 'Resolutie', 'Typische schermen']}
          rows={[
            ['HD', '1280 × 720', 'Oudere laptops en tv’s'],
            ['Full HD (1080p)', '1920 × 1080', 'De meeste monitoren en laptops'],
            ['QHD (1440p)', '2560 × 1440', 'Gaming- en kantoormonitoren'],
            ['4K UHD', '3840 × 2160', '4K-monitoren en -tv’s'],
          ]}
        />
        <ul className={ul}>
          <li>Is mijn monitor 4K? Ja, als Fysieke pixels 3840 × 2160 aangeeft bij 100% browserzoom.</li>
          <li>Een browser kan de schermgrootte in inches niet lezen; deze pagina toont de schermgrootte alleen in pixels.</li>
          <li>
            Controleer de scherpte bij jouw resolutie met de fijne lijnen in de <Link href="/monitor-test" className={link}>monitortest</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
