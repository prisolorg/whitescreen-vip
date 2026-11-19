import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Nep Blue Screen of Death (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * nep blue screen / blauw scherm Windows → foutmelding en stopcodes → grap instellen → echt blauw scherm.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function FakeBsodGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Nep Blue Screen of Death: Windows 10, 11 en klassiek">
        <p className={p}>Kies een nep BSOD-stijl in het menu Stijl onder het voorbeeld. Elke stijl lijkt op een echt blauw scherm van Windows:</p>
        <Table
          caption="Stijlen van de nep blue screen of death"
          head={['Stijl', 'Wat je ziet']}
          rows={[
            ['Windows 10', 'Het felblauwe foutscherm met een treurig gezicht :(, een percentageteller, een QR-code en een stopcode'],
            ['Windows 11', 'Dezelfde indeling in het donkerdere blauw van Windows 11'],
            ['Zwart (nieuw)', 'De zwarte versie die nieuwere versies van Windows 11 gebruiken in plaats van blauw'],
            ['Klassiek (XP/7)', 'Het ouderwetse diepblauwe blue screen of death met witte technische tekst'],
          ]}
        />
      </Section>

      <Section wide id="error-heading" title="Blue screen of death als nep foutscherm: melding en stopcodes">
        <p className={p}>
          Het moderne foutscherm van Windows zegt: “Er is een probleem opgetreden met je pc en deze moet opnieuw worden opgestart. We
          verzamelen alleen wat foutgegevens en daarna wordt de pc opnieuw opgestart.” Daaronder loopt een teller op naar 100% en noemt een
          stopcode de fout.
        </p>
        <p className={p}>Open Meer om een van deze echte stopcodes te kiezen:</p>
        <ul className={ul}>
          <li>CRITICAL_PROCESS_DIED en SYSTEM_SERVICE_EXCEPTION</li>
          <li>IRQL_NOT_LESS_OR_EQUAL en PAGE_FAULT_IN_NONPAGED_AREA</li>
          <li>KMODE_EXCEPTION_NOT_HANDLED en MEMORY_MANAGEMENT</li>
          <li>DPC_WATCHDOG_VIOLATION en VIDEO_TDR_FAILURE</li>
        </ul>
        <p className={p}>De schuifregelaar “100% bereiken in” bepaalt hoe lang de teller erover doet, van ongeveer 10 seconden tot 2 minuten.</p>
      </Section>

      <Section wide id="prank-heading" title="Nep blue screen of death als grap: zo stel je het in">
        <ul className={ul}>
          <li>Open dit nep crashscherm op de pc die je wilt foppen en kies de stijl die erbij past.</li>
          <li>Dubbeltik op het scherm of druk op F voor volledig scherm.</li>
          <li>Stap weg. De teller loopt op en de cursor verdwijnt zodra de muis stilstaat.</li>
          <li>Gebruik Teller herstarten om opnieuw te beginnen en druk op Esc om de grap te stoppen. Er verandert niets aan de computer.</li>
        </ul>
        <h3 className={h3}>Begin met een nep update</h3>
        <p className={p}>
          Voor een grotere reactie open je eerst de <Link href="/fake-windows-10-update" className={link}>nep Windows 10 update</Link> en tik je
          daarna op BSOD-grap starten, zodat de update “crasht” in een Windows-crashscherm. Op een telefoon of tablet werkt het{' '}
          <Link href="/broken-screen" className={link}>gebroken scherm effect</Link> beter.
        </p>
      </Section>

      <Section wide id="real-heading" title="Een echt blue screen of death in plaats van een nep?">
        <p className={p}>Een echt blauw scherm betekent dat Windows is gestopt om zichzelf te beschermen. Meestal lossen deze stappen het op:</p>
        <ul className={ul}>
          <li>Schrijf de stopcode op die onderaan het scherm staat.</li>
          <li>Start opnieuw op en installeer de nieuwste updates voor Windows en stuurprogramma’s.</li>
          <li>Maak iets nieuws ongedaan: een recente app, een stuurprogramma of een stuk hardware.</li>
          <li>Blijft het gebeuren? Zoek die stopcode op bij Microsoft Ondersteuning.</li>
        </ul>
      </Section>
    </div>
  )
}
