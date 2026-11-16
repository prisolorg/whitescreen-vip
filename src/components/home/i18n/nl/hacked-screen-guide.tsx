import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Gehackt Scherm Simulator (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * gehackt scherm grap / nep hack scherm → wat je ziet → houd het leuk → echte waarschuwingen.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function HackedScreenGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Gehackt scherm als grap: zo stel je het in">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Kies een stijl: Rood alarm of Groene terminal.</li>
          <li>Open Meer om je eigen Kop te typen (standaard SYSTEEM GEHACKT) of de melding “grapje” te verbergen.</li>
          <li>Zet Sirene aan als je een alarm wilt.</li>
          <li>Dubbeltik of druk op F voor volledig scherm en laat de computer achter zodat je vriend hem vindt.</li>
        </ol>
        <p className={p}>Druk op Esc om volledig scherm te verlaten en de gehackt scherm-grap te beëindigen.</p>
      </Section>

      <Section wide id="shows-heading" title="Wat de gehackt scherm simulator laat zien">
        <ul className={ul}>
          <li>Een knipperende waarschuwing “BEVEILIGINGSLEK GEDETECTEERD” en een haperende kop.</li>
          <li>Nep hackstappen zoals “Firewall omzeilen” en “Wachtwoordkluis ontsleutelen”.</li>
          <li>Een voortgangsbalk en een aftelling van 59 seconden die allebei herhalen, zodat het nep gehackte scherm nooit echt klaar is.</li>
          <li>Scrollende neplogs, scanlijnen en een pulserende rode of groene gloed.</li>
        </ul>
        <p className={p}>Er wordt niets geïnstalleerd en niets op de computer aangeraakt. Het gehackte scherm is alleen een webpagina.</p>
      </Section>

      <Section wide id="rules-heading" title="Gehackt scherm als grap: houd het leuk">
        <ul className={ul}>
          <li>Fop mensen die erom kunnen lachen, en onthul de grap binnen een minuut.</li>
          <li>Sla werkcomputers over, waar het de IT-afdeling kan alarmeren, en iedereen die snel schrikt.</li>
          <li>Laat de melding “grapje” aan als je niet zeker weet hoe iemand reageert.</li>
        </ul>
        <p className={p}>
          Meer schermgrappen: de <Link href="/hacker-typer" className={link}>Hacker Typer</Link>, het{' '}
          <Link href="/broken-screen" className={link}>gebroken scherm effect</Link> en de{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>nep blue screen of death</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="Geen grap maar een echt gehackt scherm? Echte waarschuwingspop-ups">
        <p className={p}>
          Een scherm met “je bent gehackt” dat je niet zelf hebt geopend en dat vraagt om een nummer te bellen of te betalen, is bijna altijd
          oplichting:
        </p>
        <ul className={ul}>
          <li>Bel het nummer niet, betaal niet en laat niemand verbinding maken met je computer.</li>
          <li>Sluit de browser; lukt dat niet, gebruik dan Taakbeheer (Ctrl + Shift + Esc) of Forceer stop op een Mac.</li>
          <li>Voer je antivirus uit en wijzig je wachtwoorden vanaf een ander apparaat als je er een hebt ingevoerd.</li>
        </ul>
      </Section>
    </div>
  )
}
