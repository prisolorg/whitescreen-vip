import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Finta schermata blu della morte (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * schermata blu Windows / BSOD → schermata di errore, codici di arresto e messaggio → scherzo e crash →
 * cosa fare con una schermata blu vera. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function FakeBsodGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Finta schermata blu della morte: Windows 10, 11 e classica">
        <p className={p}>
          Scegli uno stile di BSOD finto dal menu «Stile» sotto l’anteprima. Ognuno riproduce una vera schermata blu di Windows:
        </p>
        <Table
          caption="Stili della finta schermata blu della morte"
          head={['Stile', 'Cosa mostra']}
          rows={[
            ['Windows 10', 'La schermata di errore blu brillante con la faccina triste :(, un contatore in percentuale, un codice QR e un codice di arresto'],
            ['Windows 11', 'Lo stesso layout nel blu più scuro di Windows 11'],
            ['Nero (nuovo)', 'La versione nera che le versioni più recenti di Windows 11 usano al posto del blu'],
            ['Classico (XP/7)', 'La vecchia schermata blu della morte, blu intenso con testo tecnico bianco'],
          ]}
        />
      </Section>

      <Section wide id="error-heading" title="Messaggio e codici di arresto della finta schermata blu della morte">
        <p className={p}>
          La schermata di errore moderna di Windows dice «Il PC ha riscontrato un problema e deve essere riavviato. Stiamo raccogliendo alcune
          informazioni sull’errore e quindi lo riavvieremo.» Sotto, un contatore sale fino al 100% e un codice di arresto indica l’errore.
        </p>
        <p className={p}>Apri «Altro» per scegliere uno di questi codici di arresto reali:</p>
        <ul className={ul}>
          <li>CRITICAL_PROCESS_DIED e SYSTEM_SERVICE_EXCEPTION</li>
          <li>IRQL_NOT_LESS_OR_EQUAL e PAGE_FAULT_IN_NONPAGED_AREA</li>
          <li>KMODE_EXCEPTION_NOT_HANDLED e MEMORY_MANAGEMENT</li>
          <li>DPC_WATCHDOG_VIOLATION e VIDEO_TDR_FAILURE</li>
        </ul>
        <p className={p}>Il cursore «Arriva al 100% in» imposta quanto tempo impiega il contatore, da circa 10 secondi a 2 minuti.</p>
      </Section>

      <Section wide id="prank-heading" title="Scherzo con la finta schermata blu della morte: come prepararlo">
        <ul className={ul}>
          <li>Apri questa finta schermata di crash sul PC a cui vuoi fare lo scherzo e scegli lo stile corrispondente.</li>
          <li>Tocca due volte lo schermo o premi F per passare a schermo intero.</li>
          <li>Allontanati. Il contatore sale e il cursore si nasconde quando il mouse è fermo.</li>
          <li>Usa «Riavvia contatore» per ricominciare e premi Esc per terminare lo scherzo. Sul computer non cambia nulla.</li>
        </ul>
        <h3 className={h3}>Inizia con un finto aggiornamento</h3>
        <p className={p}>
          Per una reazione più grande, apri prima l’<Link href="/fake-windows-10-update" className={link}>aggiornamento falso Windows 10</Link>,
          poi tocca «Avvia scherzo BSOD» così l’aggiornamento «va in crash» con una schermata di errore di Windows. Su telefono o tablet funziona
          meglio l’<Link href="/broken-screen" className={link}>effetto schermo rotto</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="Non è una finta schermata blu della morte, ma una vera?">
        <p className={p}>Una vera schermata blu significa che Windows si è fermato per proteggersi. Nella maggior parte dei casi questi passaggi la risolvono:</p>
        <ul className={ul}>
          <li>Annota il codice di arresto mostrato in fondo alla schermata.</li>
          <li>Riavvia e installa gli ultimi aggiornamenti di Windows e dei driver.</li>
          <li>Annulla le novità: un’app, un driver o un componente hardware recenti.</li>
          <li>Se continua a succedere, cerca quel codice di arresto nel supporto Microsoft.</li>
        </ul>
      </Section>
    </div>
  )
}
