import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Verversingssnelheid Test (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * verversingssnelheid test / Hz test / refresh rate → beeldscherminstellingen → 60, 120 en 144 Hz → FPS-test.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function RefreshRateGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Verversingssnelheid test: zo werkt het">
        <p className={p}>
          Browsers tekenen één nieuw frame per schermverversing, dus door die frames te timen zie je je verversingssnelheid. Deze Hz-test start
          vanzelf en toont:
        </p>
        <ul className={ul}>
          <li>Je verversingssnelheid in Hz, afgerond op de dichtstbijzijnde gangbare waarde (60, 120, 144 Hz enzovoort).</li>
          <li>Hoe lang elk frame duurt in milliseconden, en het aandeel late frames.</li>
          <li>De laagste en hoogste gemeten waarde, plus een bewegend blok dat vloeiender oogt bij meer Hz.</li>
        </ul>
        <p className={p}>
          Hij werkt als refresh rate-checker voor monitoren, laptops en telefoons. Druk op Opnieuw meten nadat je een instelling hebt gewijzigd,
          en dubbeltik voor volledig scherm op het scherm dat je wilt testen.
        </p>
      </Section>

      <Section wide id="check-heading" title="Verversingssnelheid test vs. je beeldscherminstellingen">
        <p className={p}>
          De test toont waarop je scherm op dit moment draait. Zo bekijk of wijzig je de instelling voor de verversingssnelheid van je monitor:
        </p>
        <Table
          caption="Waar je de instelling voor de verversingssnelheid vindt"
          head={['Apparaat', 'Waar je kijkt']}
          rows={[
            ['Windows 11 / 10', 'Instellingen → Systeem → Beeldscherm → Geavanceerd beeldscherm → Een vernieuwingsfrequentie kiezen'],
            ['Mac', 'Systeeminstellingen → Beeldschermen → Verversingssnelheid'],
            ['iPhone / iPad', 'Vast per model; ProMotion-modellen gaan automatisch tot 120 Hz'],
            ['Android', 'Instellingen → Display → Vernieuwingsfrequentie scherm (of Vloeiende bewegingen)'],
          ]}
        />
        <h3 className={h3}>Waarom de uitkomst lager kan zijn dan verwacht</h3>
        <ul className={ul}>
          <li>Het scherm staat in de instellingen op 60 Hz, of de kabel of poort kan de hogere waarde niet aan.</li>
          <li>Een laptop op de accu of een telefoon in energiebesparingsmodus verlaagt de waarde om stroom te sparen.</li>
          <li>Zware tabbladen of apps laten de browser frames overslaan. Sluit ze en meet opnieuw.</li>
        </ul>
      </Section>

      <Section wide id="rates-heading" title="Uitkomsten van de verversingssnelheid test: 60, 120 en 144 Hz">
        <Table
          caption="Gangbare verversingssnelheden"
          head={['Waarde', 'Tijd per frame', 'Typische schermen']}
          rows={[
            ['60 Hz', '16,7 ms', 'De meeste kantoormonitoren, oudere laptops en tv’s'],
            ['90 Hz', '11,1 ms', 'Veel telefoons uit de middenklasse'],
            ['120 Hz', '8,3 ms', 'Gamingtelefoons, iPhone Pro, nieuwere tv’s en laptops'],
            ['144 Hz', '6,9 ms', 'Gamingmonitoren'],
            ['240 Hz', '4,2 ms', 'Esportsmonitoren'],
          ]}
        />
      </Section>

      <Section wide id="fps-heading" title="Verversingssnelheid test of framerate test?">
        <p className={p}>
          De verversingssnelheid (Hz) is hoe vaak je scherm opnieuw tekent; de framerate (FPS) is hoeveel frames je browser of game maakt. Om
          beweging en FPS te controleren, doe je de <Link href="/frame-rate-test" className={link}>framerate test</Link>, en voor onscherpte en
          sporen probeer je de <Link href="/monitor-ghosting-test" className={link}>monitor ghosting test</Link>.
        </p>
      </Section>
    </div>
  )
}
