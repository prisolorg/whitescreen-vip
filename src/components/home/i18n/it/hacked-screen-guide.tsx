import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Simulatore schermo hackerato (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * schermo hackerato / computer hackerato → scherzo schermo hackerato → popup «sei stato hackerato» veri (truffe).
 * I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function HackedScreenGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Simulatore schermo hackerato: come preparare lo scherzo">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Scegli uno stile: «Allarme rosso» o «Terminale verde».</li>
          <li>Apri «Altro» per scrivere il tuo «Titolo» (SISTEMA HACKERATO di default) o nascondere la nota «è uno scherzo».</li>
          <li>Attiva «Sirena» se vuoi un allarme.</li>
          <li>Tocca due volte o premi F per lo schermo intero, poi lascia il computer al tuo amico.</li>
        </ol>
        <p className={p}>Premi Esc per uscire dallo schermo intero e chiudere lo scherzo dello schermo hackerato.</p>
      </Section>

      <Section wide id="shows-heading" title="Cosa mostra il simulatore schermo hackerato">
        <ul className={ul}>
          <li>Un avviso lampeggiante «VIOLAZIONE DELLA SICUREZZA RILEVATA» e un titolo con effetto glitch.</li>
          <li>Finti passaggi di hacking come «Aggiramento del firewall» e «Decifrazione del vault delle password».</li>
          <li>Una barra di avanzamento e un conto alla rovescia di 59 secondi che ripartono in loop, così il finto schermo hackerato non finisce mai davvero.</li>
          <li>Finti log che scorrono, linee di scansione e un bagliore rosso o verde pulsante.</li>
        </ul>
        <p className={p}>Non viene installato nulla e sul computer non si tocca niente. Il simulatore schermo hackerato è solo una pagina web.</p>
      </Section>

      <Section wide id="rules-heading" title="Simulatore schermo hackerato: che resti un gioco">
        <ul className={ul}>
          <li>Fai lo scherzo a chi ne riderà e svelalo entro un minuto.</li>
          <li>Evita i computer di lavoro, dove potrebbe allarmare il reparto IT, e chi si spaventa facilmente.</li>
          <li>Lascia attiva la nota «è uno scherzo» se non sai come reagirà.</li>
        </ul>
        <p className={p}>
          Altri scherzi sullo schermo: la <Link href="/hacker-typer" className={link}>scrittura da hacker</Link>, l’
          <Link href="/broken-screen" className={link}>effetto schermo rotto</Link> e la{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>finta schermata blu della morte</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="Non è il simulatore schermo hackerato? I popup di avviso veri">
        <p className={p}>
          Una schermata «sei stato hackerato» che non hai aperto tu e che ti chiede di chiamare un numero o di pagare è quasi sempre una truffa:
        </p>
        <ul className={ul}>
          <li>Non chiamare il numero, non pagare e non lasciare che nessuno si colleghi al tuo computer.</li>
          <li>Chiudi il browser; se non si chiude, usa Gestione attività (Ctrl + Maiusc + Esc) o Uscita forzata sul Mac.</li>
          <li>Avvia l’antivirus e, se hai inserito delle password, cambiale da un altro dispositivo.</li>
        </ul>
      </Section>
    </div>
  )
}
