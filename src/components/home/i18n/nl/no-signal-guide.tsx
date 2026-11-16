import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Geen Signaal Scherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * geen signaal scherm / tv kleurbalken / testbeeld → betekenis van de strepen → ideeën → echte tv zonder signaal.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function NoSignalGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Geen signaal scherm en tv-kleurbalken: drie stijlen">
        <Table
          caption="Stijlen van het geen signaal scherm"
          head={['Stijl', 'Wat je ziet']}
          rows={[
            ['Kleurbalken', 'Tv-kleurbalken met een vak GEEN SIGNAAL in het midden'],
            ['Stuiterend', 'Een vak GEEN SIGNAAL dat rondzweeft en tegen de randen stuitert, zoals een tv zonder beeld'],
            ['Blauwe ingang', 'Een effen blauw scherm met de melding, zoals veel tv’s tonen zonder ingang'],
          ]}
        />
        <ul className={ul}>
          <li>Open Meer om de Melding en de Ingangsnaam (standaard HDMI 1) te wijzigen.</li>
          <li>Zet de toon van 1 kHz aan voor de klassieke piep van een testsignaal.</li>
          <li>Druk op F of tik op Volledig scherm, zodat het geen signaal scherm een tv, monitor of laptop vult.</li>
        </ul>
      </Section>

      <Section wide id="bars-heading" title="Tv-kleurbalken op het geen signaal scherm: wat de strepen betekenen">
        <p className={p}>
          Tv-kleurbalken zijn het gestreepte testbeeld dat omroepen gebruikten om beelden af te stemmen. Dit geen signaal scherm tekent een
          versie in SMPTE-stijl in drie rijen:
        </p>
        <ul className={ul}>
          <li>Boven: zeven balken in grijs, geel, cyaan, groen, magenta, rood en blauw.</li>
          <li>Midden: een smalle strook blauw, magenta, cyaan en grijs, afgewisseld met zwart.</li>
          <li>Onder: donkerblauwe, witte, paarse en zwarte blokken.</li>
        </ul>
        <p className={p}>
          De tv-kleurbalken schalen mee met elk scherm, ook 1080p- en 4K-tv’s. Ze zijn voor de look, niet voor kalibratie; om kleuren te
          controleren gebruik je de <Link href="/screen-color-test" className={link}>scherm kleurentest</Link>.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ideeën voor het geen signaal scherm en tv-kleurbalken">
        <ul className={ul}>
          <li>Grap: zet tv-kleurbalken of het tv-scherm zonder signaal op volledig scherm en kijk hoe iemand elke kabel controleert.</li>
          <li>Rekwisiet voor film en foto: tv-kleurbalken maken een geloofwaardige tv op de achtergrond zonder echte uitzending.</li>
          <li>Streams en evenementen: een “zo terug”-scherm met je eigen melding.</li>
        </ul>
        <p className={p}>
          Meer schermgrappen: de <Link href="/hacked-screen" className={link}>gehackt scherm simulator</Link> en de{' '}
          <Link href="/fake-windows-10-update" className={link}>nep Windows 10 update</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Geen signaal scherm op je echte tv? Snelle oplossingen">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Druk op Input of Source op de afstandsbediening en kies de poort waarop je apparaat is aangesloten.</li>
          <li>Controleer of het apparaat (console, laptop, kabelbox) aan staat en niet in slaapstand is.</li>
          <li>Haal de HDMI-kabel aan beide kanten los en sluit hem opnieuw aan, of probeer een andere poort of kabel.</li>
          <li>Start de tv en het apparaat opnieuw op.</li>
        </ol>
      </Section>
    </div>
  )
}
