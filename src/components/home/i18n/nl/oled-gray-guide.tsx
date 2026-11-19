import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * OLED Grijstest (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * OLED test / grijstest / bijna zwart → uitkomsten → verschil met inbrandtest → gewoon grijs scherm.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function OledGrayGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="OLED grijstest: zo controleer je bijna zwart">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Maak de kamer donker en zet het scherm op ongeveer 50% helderheid.</li>
          <li>Dubbeltik voor volledig scherm, zodat de OLED-test het hele paneel bedekt.</li>
          <li>Doorloop de donkergrijze niveaus: 1%, 2%, 3%, 5%, 10%, 15% en 20%. Tik op het scherm of gebruik de pijltjestoetsen.</li>
          <li>Eindig op het Verloop bij zwart, dat 0% tot 20% grijs naast elkaar toont in 12 stappen.</li>
        </ol>
        <p className={p}>
          Elk testbeeld van de OLED grijstest moet vlak en gelijkmatig ogen, en elke stap van het verloop moet net zichtbaar verschillen van de
          volgende. Deze OLED-test werkt als grijswaardentest op elke telefoon, tv, laptop of monitor.
        </p>
      </Section>

      <Section wide id="results-heading" title="Uitkomsten van de OLED grijstest: waar je op let">
        <Table
          caption="Veelvoorkomende OLED-fouten bij bijna zwart"
          head={['Wat je ziet', 'Wat het is', 'Komt het vaak voor?']}
          rows={[
            ['Vlekkerige, wolkerige plekken op donkergrijs', 'Mura (ongelijk paneel)', 'Een beetje is normaal bij 1–5%'],
            ['Banden of kleurzweem over het verloop', 'Banding bij bijna zwart', 'Verschilt per paneel en beeldmodus'],
            ['De eerste stappen van het verloop lijken allemaal zwart', 'Black crush', 'Controleer helderheid en beeldmodus'],
            ['Een groene of magenta zweem op donkergrijs', 'Zweem bij bijna zwart', 'Verschilt per paneel'],
          ]}
        />
        <p className={p}>
          Beoordeel vanaf je normale kijkafstand. In een OLED grijstest is lichte mura op het vlak van 1% gebruikelijk; problemen die je in echte
          films of games ziet, wegen zwaarder.
        </p>
      </Section>

      <Section wide id="burn-heading" title="OLED grijstest vs. inbrandtest">
        <p className={p}>
          Deze OLED grijstest controleert donkere tinten, geen inbranden. Inbranden zie je het best op lichtere vlakken zoals 50% grijs, rood en
          blauw:
        </p>
        <ul className={ul}>
          <li>
            Voor een OLED-inbrandcontrole gebruik je de <Link href="/oled-burn-in-test" className={link}>OLED inbrandtest</Link>.
          </li>
          <li>
            Om beeldretentie op elk scherm te controleren en te proberen weg te werken, gebruik je de{' '}
            <Link href="/screen-burn-in-test" className={link}>scherm inbrand test</Link>.
          </li>
        </ul>
      </Section>

      <Section wide id="gray-heading" title="OLED grijstest of een gewoon grijs scherm?">
        <p className={p}>
          Liever één effen grijs scherm in plaats van testniveaus? Open het <Link href="/gray-screen" className={link}>grijze scherm</Link>, of het{' '}
          <Link href="/black-screen" className={link}>zwarte scherm</Link> om echt OLED-zwart te zien. Voor een volledige controle van kleur,
          scherpte en gamma doe je de <Link href="/monitor-test" className={link}>monitortest</Link>.
        </p>
      </Section>
    </div>
  )
}
