import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Nep Windows 11 Update (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * nep Windows 11 update / Windows 11 update-scherm → grap instellen → vergelijking met Windows 10 en XP.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function FakeWindows11UpdateGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Nep Windows 11 update-scherm: zo werkt het">
        <p className={p}>
          Het nep Windows 11 update-scherm neemt de moderne look over: een zwart scherm, een draaiende ring, “Bezig met updates”, een
          percentage dat oploopt en “Houd je computer aan en aangesloten op de stroom.”
        </p>
        <ul className={ul}>
          <li>Het percentage blijft stijgen en begint na 100% opnieuw, dus de update stopt nooit.</li>
          <li>Druk op Pauze om hem stil te zetten, zodat de update vast lijkt te zitten.</li>
          <li>Open Meer om hem sneller of langzamer te maken.</li>
          <li>Druk op F of tik op Volledig scherm om de browser en taakbalk te verbergen.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Nep Windows 11 update als grap: zo stel je het in">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open dit nep update-scherm op de Windows 11-pc die je wilt foppen.</li>
          <li>Druk op F of tik op Volledig scherm, zodat het hele beeld gevuld is.</li>
          <li>Laat het draaien. De ring draait en het percentage kruipt omhoog.</li>
          <li>Voor een extra draai tik je op BSOD-grap starten, zodat de update “crasht”.</li>
          <li>Druk op Esc om te stoppen. Er verandert niets aan de pc.</li>
        </ol>
      </Section>

      <Section wide id="compare-heading" title="Nep Windows 11 update vs. Windows 10 en XP">
        <Table
          caption="Welk nep Windows update-scherm je gebruikt"
          head={['Scherm', 'Ziet eruit als', 'Pagina']}
          rows={[
            ['Windows 11', 'Zwart scherm, draaiende ring, eenvoudig percentage', 'Deze pagina'],
            ['Windows 10', 'Draaiende puntjes en “Bezig met updates 14% voltooid”', <Link key="w10" href="/fake-windows-10-update" className={link}>Nep Windows 10 update</Link>],
            ['Windows XP', 'Retro installatieprogramma met voortgangsbalk', <Link key="xp" href="/fake-windows-xp-update" className={link}>Nep Windows XP installatie</Link>],
            ['Crashscherm', 'Het blue screen of death', <Link key="bsod" href="/fake-blue-screen-of-death" className={link}>Nep blue screen of death</Link>],
          ]}
        />
        <p className={p}>
          Een echt Windows 11-laadscherm of upgradescherm kan lang op één getal blijven staan. Lijkt het jouwe vast te zitten? Geef het tijd en
          houd het aangesloten op de stroom voordat je opnieuw opstart.
        </p>
      </Section>
    </div>
  )
}
