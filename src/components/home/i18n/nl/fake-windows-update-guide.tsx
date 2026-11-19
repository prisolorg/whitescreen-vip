import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Nep Windows 10 Update (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * nep Windows update / fake update scherm → grap instellen → andere systemen → echte update vast.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function FakeWindowsUpdateGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Nep Windows 10 update-scherm: zo werkt het">
        <p className={p}>
          Dit nep Windows update-scherm bootst het Windows 10-scherm “Bezig met updates” na: een donkere achtergrond, een draaiende
          laadindicator, een percentage dat langzaam oploopt en de bekende melding “Zet de pc niet uit. Dit kan even duren.”
        </p>
        <ul className={ul}>
          <li>Het percentage stijgt vanzelf en begint na 100% opnieuw, dus dit nep laadscherm wordt nooit klaar.</li>
          <li>Met Pauze zet je het stil, zodat de update vast lijkt te zitten.</li>
          <li>Open Meer om de update sneller of langzamer te maken.</li>
          <li>Druk op F of tik op Volledig scherm om de browser te verbergen. De cursor verdwijnt als de muis stilstaat.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Nep Windows 10 update als grap: zo stel je het in">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open deze nep update op de computer die je wilt foppen.</li>
          <li>Druk op F of tik op Volledig scherm, zodat hij het hele scherm bedekt.</li>
          <li>Loop weg. Het percentage blijft oplopen terwijl de ander wacht.</li>
          <li>Voor een extra draai tik je op BSOD-grap starten en “mislukt” de update met een blauw scherm.</li>
          <li>Druk op Esc om te stoppen. Er verandert niets aan de computer.</li>
        </ol>
        <p className={p}>
          Wil je alleen de crash? Gebruik de <Link href="/fake-blue-screen-of-death" className={link}>nep blue screen of death</Link> of laat
          het glas barsten met het <Link href="/broken-screen" className={link}>gebroken scherm effect</Link>.
        </p>
      </Section>

      <Section wide id="systems-heading" title="Nep Windows update-schermen voor Windows 11, XP en andere systemen">
        <Table
          caption="Nep update-schermen per systeem"
          head={['Systeem', 'Nep update-scherm']}
          rows={[
            ['Windows 11', <Link key="w11" href="/fake-windows-11-update" className={link}>Nep Windows 11 update</Link>],
            ['Windows XP', <Link key="xp" href="/fake-windows-xp-update" className={link}>Nep Windows XP installatie</Link>],
            ['Windows XP opstarten', <Link key="xpb" href="/fake-windows-xp-boot" className={link}>Nep Windows XP opstarten</Link>],
            ['Mac', <Link key="mac" href="/fake-mac-update" className={link}>Nep Mac update</Link>],
            ['Chromebook', <Link key="cros" href="/fake-chrome-os-update" className={link}>Nep Chrome OS update</Link>],
            ['Ubuntu / Linux', <Link key="ub" href="/fake-ubuntu-update" className={link}>Nep Ubuntu update</Link>],
            ['Android', <Link key="and" href="/fake-android-update" className={link}>Nep Android update</Link>],
          ]}
        />
      </Section>

      <Section wide id="real-heading" title="Nep Windows 10 update of een echte die vastzit?">
        <p className={p}>
          Lijkt een echt Windows update-scherm of laadscherm vast te zitten? Deze pagina kan dat niet oplossen, maar deze stappen helpen
          meestal:
        </p>
        <ul className={ul}>
          <li>Geef het tijd. Grote updates kunnen lang op één percentage blijven staan.</li>
          <li>Let op schijfactiviteit. Een knipperend schijflampje betekent dat hij nog bezig is.</li>
          <li>Houd alleen als laatste redmiddel de aan/uit-knop ingedrukt om opnieuw op te starten. Windows draait een mislukte update meestal zelf terug.</li>
        </ul>
      </Section>
    </div>
  )
}
