import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Aggiornamento falso Windows 11 (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * finto aggiornamento Windows 11 / schermata aggiornamento Windows 11 → scherzo → confronto con Windows 10 e XP.
 * I termini generici («finto aggiornamento Windows») appartengono alla pagina Windows 10, linkata sotto.
 */
export function FakeWindows11UpdateGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Aggiornamento falso Windows 11: come funziona la schermata">
        <p className={p}>
          La schermata dell’aggiornamento falso di Windows 11 riprende l’aspetto moderno: schermo nero, un anello che gira, «Aggiornamenti in
          corso», una percentuale che sale e «Tieni il computer acceso e collegato alla corrente.»
        </p>
        <ul className={ul}>
          <li>La percentuale continua a salire e ricomincia dopo il 100%, quindi l’aggiornamento non finisce mai.</li>
          <li>Premi «Pausa» per fermarla e far sembrare l’aggiornamento bloccato.</li>
          <li>Apri «Altro» per renderlo più veloce o più lento.</li>
          <li>Premi F o tocca «Schermo intero» per nascondere il browser e la barra delle applicazioni.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Scherzo con l’aggiornamento falso di Windows 11: come prepararlo">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Apri questa finta schermata di aggiornamento sul PC Windows 11 a cui vuoi fare lo scherzo.</li>
          <li>Premi F o tocca «Schermo intero», così riempie il display.</li>
          <li>Lasciala andare. L’anello gira e la percentuale sale piano piano.</li>
          <li>Per un colpo di scena, tocca «Avvia scherzo BSOD» così l’aggiornamento «va in crash».</li>
          <li>Premi Esc per terminare. Sul PC non cambia nulla.</li>
        </ol>
      </Section>

      <Section wide id="compare-heading" title="Aggiornamento falso Windows 11, Windows 10 o XP?">
        <Table
          caption="Quale finta schermata di aggiornamento di Windows usare"
          head={['Schermata', 'Aspetto', 'Pagina']}
          rows={[
            ['Windows 11', 'Schermo nero, anello che gira, percentuale semplice', 'Questa pagina'],
            ['Windows 10', 'Puntini che girano e «Aggiornamenti in corso. 14% completato»', <Link key="w10" href="/fake-windows-10-update" className={link}>Aggiornamento falso Windows 10</Link>],
            ['Windows XP', 'Installer retrò con barra di avanzamento', <Link key="xp" href="/fake-windows-xp-update" className={link}>Installazione falsa Windows XP</Link>],
            ['Schermata di crash', 'La schermata blu della morte', <Link key="bsod" href="/fake-blue-screen-of-death" className={link}>Finta schermata blu della morte</Link>],
          ]}
        />
        <p className={p}>
          Una vera schermata di caricamento o di aggiornamento di Windows 11 può restare a lungo sullo stesso numero. Se la tua sembra
          bloccata, dalle tempo e tieni il PC collegato alla corrente prima di riavviare.
        </p>
      </Section>
    </div>
  )
}
