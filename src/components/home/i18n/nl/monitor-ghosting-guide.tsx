import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Monitor Ghosting Test (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * monitor ghosting test / ghosting monitor → uitkomsten → oplossen met overdrive → laptop en tv.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function MonitorGhostingGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Monitor ghosting test: zo voer je hem uit">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Zet je monitor op de hoogste verversingssnelheid en dubbeltik op de monitor ghosting test voor volledig scherm.</li>
          <li>Kijk hoe het doel over de donkere, middengrijze en lichte baan beweegt. Volg het met je ogen, staar niet naar één plek.</li>
          <li>Verhoog de Snelheid (240 tot 2.400 px/s) tot er sporen verschijnen, en druk op Pauze om een stilstaand beeld te bekijken.</li>
          <li>Verander de overdrive-instelling van je monitor en doe de ghosting test opnieuw om te vergelijken.</li>
        </ol>
        <p className={p}>
          In de monitor ghosting test helpt het verticale Referentieraster (onder Meer) je om te beoordelen hoe lang een spoor is. Elke baan heeft
          een andere achtergrond, omdat ghosting vaak erger is op donker of middengrijs.
        </p>
      </Section>

      <Section wide id="results-heading" title="Uitkomsten van de monitor ghosting test: wat de sporen betekenen">
        <p className={p}>
          Wat is ghosting op een monitor? Pixels die te langzaam van kleur veranderen, laten een vage kopie achter achter alles wat beweegt. Zo
          lees je de monitor ghosting test:
        </p>
        <Table
          caption="Ghosting, vegen en overshoot"
          head={['Wat je achter het doel ziet', 'Wat het is', 'Meestal veroorzaakt door']}
          rows={[
            ['Een vage, donkere kopie of spoor', 'Ghosting', 'Trage pixelrespons, overdrive uit of te laag'],
            ['Een donkere veeg, het ergst op de donkere baan', 'Black smearing', 'VA-panelen, trage overgangen van donker naar licht'],
            ['Een lichte of omgekeerde halo', 'Overshoot (inverse ghosting)', 'Overdrive te hoog ingesteld'],
            ['Een zachte, wazige rand zonder kopie', 'Bewegingsonscherpte', 'Normaal bij 60 Hz; minder bij hogere verversingssnelheden'],
          ]}
        />
      </Section>

      <Section wide id="fix-heading" title="Los op wat de monitor ghosting test laat zien">
        <p className={p}>Een monitor met ghosting hoeft zelden gerepareerd te worden; de juiste instellingen maken de sporen meestal korter.</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Overdrive:</strong> in het monitormenu ook Response Time, Trace Free of OD genoemd. Kies de
            instelling met het kortste spoor en geen lichte halo, meestal de middelste.
          </li>
          <li>
            <strong className="text-foreground">Verversingssnelheid:</strong> controleer met de{' '}
            <Link href="/screen-refresh-rate-test" className={link}>verversingssnelheid test</Link> of die op het maximum staat. Meer Hz betekent
            minder onscherpte.
          </li>
          <li>
            <strong className="text-foreground">Kabel en poort:</strong> gebruik DisplayPort of een kabel die de volledige verversingssnelheid van
            je monitor ondersteunt.
          </li>
          <li>
            <strong className="text-foreground">Beeldmodi:</strong> extra beeldbewerking zoals ruisonderdrukking kan sporen toevoegen; zet die uit.
          </li>
        </ul>
      </Section>

      <Section wide id="screen-heading" title="Monitor ghosting test op een laptop, tv of ander scherm">
        <p className={p}>
          Ghosting werkt op elk lcd- of OLED-scherm hetzelfde: open de monitor ghosting test op de laptop, tv of tablet die je wilt controleren
          en voer hem uit op volledig scherm. Tv’s hebben vaak een gamemodus die beeldbewerking beperkt en ghosting vermindert.
        </p>
        <p className={p}>
          Een “spookbeeld” kan ook een vaag beeld betekenen dat op het scherm blijft staan als er niets beweegt. Dat is beeldretentie of
          inbranden, geen bewegings-ghosting; controleer het met de <Link href="/screen-burn-in-test" className={link}>scherm inbrand test</Link>.
          Meer details staan in de <Link href="/screen-problems/ghosting" className={link}>gids over ghosting</Link>.
        </p>
      </Section>
    </div>
  )
}
