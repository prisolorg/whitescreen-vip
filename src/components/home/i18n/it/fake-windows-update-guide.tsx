import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Aggiornamento falso Windows 10 (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * finto aggiornamento Windows / schermata aggiornamento Windows finta → scherzo dell'aggiornamento →
 * altri sistemi → aggiornamento vero bloccato. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function FakeWindowsUpdateGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Aggiornamento falso Windows 10: come funziona la schermata">
        <p className={p}>
          Questo aggiornamento falso di Windows 10 ricrea la schermata «Aggiornamenti in corso»: sfondo scuro, un’icona di caricamento che
          gira, una percentuale che sale lentamente e il classico «Non spegnere il PC. L’operazione potrebbe richiedere un po’ di tempo.»
        </p>
        <ul className={ul}>
          <li>La percentuale sale da sola e ricomincia dopo il 100%, quindi questa finta schermata di caricamento non finisce mai.</li>
          <li>Usa «Pausa» per fermarla, così l’aggiornamento sembra bloccato.</li>
          <li>Apri «Altro» per rendere l’aggiornamento più veloce o più lento.</li>
          <li>Premi F o tocca «Schermo intero» per nascondere il browser. Il cursore sparisce quando il mouse è fermo.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Scherzo con l’aggiornamento falso di Windows: come prepararlo">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Apri questo finto aggiornamento sul computer a cui vuoi fare lo scherzo.</li>
          <li>Premi F o tocca «Schermo intero», così copre tutto lo schermo.</li>
          <li>Allontanati. La percentuale continua a salire mentre l’altra persona aspetta.</li>
          <li>Per un colpo di scena, tocca «Avvia scherzo BSOD» e l’aggiornamento «fallisce» con una schermata blu.</li>
          <li>Premi Esc per terminare. Sul computer non cambia nulla.</li>
        </ol>
        <p className={p}>
          Vuoi solo il crash? Usa la <Link href="/fake-blue-screen-of-death" className={link}>finta schermata blu della morte</Link>, oppure
          rompi il vetro con l’<Link href="/broken-screen" className={link}>effetto schermo rotto</Link>.
        </p>
      </Section>

      <Section wide id="systems-heading" title="Aggiornamento falso Windows anche per Windows 11, XP e altri sistemi">
        <Table
          caption="Finte schermate di aggiornamento per ogni sistema"
          head={['Sistema', 'Finta schermata di aggiornamento']}
          rows={[
            ['Windows 11', <Link key="w11" href="/fake-windows-11-update" className={link}>Aggiornamento falso Windows 11</Link>],
            ['Windows XP', <Link key="xp" href="/fake-windows-xp-update" className={link}>Installazione falsa Windows XP</Link>],
            ['Avvio di Windows XP', <Link key="xpb" href="/fake-windows-xp-boot" className={link}>Avvio falso Windows XP</Link>],
            ['Mac', <Link key="mac" href="/fake-mac-update" className={link}>Aggiornamento falso Mac</Link>],
            ['Chromebook', <Link key="cros" href="/fake-chrome-os-update" className={link}>Aggiornamento falso Chrome OS</Link>],
            ['Ubuntu / Linux', <Link key="ub" href="/fake-ubuntu-update" className={link}>Aggiornamento falso Ubuntu</Link>],
            ['Android', <Link key="and" href="/fake-android-update" className={link}>Aggiornamento falso Android</Link>],
          ]}
        />
      </Section>

      <Section wide id="real-heading" title="Aggiornamento falso di Windows o uno vero bloccato?">
        <p className={p}>
          Se una vera schermata di aggiornamento o di caricamento di Windows sembra bloccata, questa pagina non può risolverlo, ma di solito
          questi passaggi aiutano:
        </p>
        <ul className={ul}>
          <li>Dai tempo al sistema. Gli aggiornamenti grandi possono restare a lungo sulla stessa percentuale.</li>
          <li>Controlla l’attività del disco. Una spia del disco che lampeggia significa che sta ancora lavorando.</li>
          <li>Solo come ultima risorsa, tieni premuto il pulsante di accensione per riavviare. Di solito Windows annulla da solo un aggiornamento non riuscito.</li>
        </ul>
      </Section>
    </div>
  )
}
