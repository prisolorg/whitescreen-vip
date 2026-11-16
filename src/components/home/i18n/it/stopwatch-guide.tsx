import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Cronometro a schermo intero (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * cronometro online → cronometro con giri e timer in avanti → cronometro digitale a schermo intero, in classe →
 * confronto con il cronometro di Google. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function StopwatchGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Cronometro a schermo intero online: avvia, giro e azzera">
        <p className={p}>Questo cronometro online misura il tempo al centesimo di secondo e tiene un elenco dei giri.</p>
        <Table
          caption="Comandi del cronometro"
          head={['Azione', 'Pulsante', 'Tasto']}
          rows={[
            ['Avviare o mettere in pausa', 'Avvia / Pausa', 'Barra spaziatrice'],
            ['Registrare un giro', 'Giro', 'L'],
            ['Azzerare', 'Reimposta', 'R'],
            ['Copiare tutti i giri', 'Copia giri', '—'],
          ]}
        />
        <p className={p}>
          Ogni giro mostra il proprio tempo parziale e il totale progressivo, così confronti i giri a colpo d’occhio. «Copia giri» li mette
          negli appunti per un foglio di calcolo o un messaggio.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Cronometro a schermo intero: conta in avanti da zero">
        <p className={p}>
          Conta in avanti da zero finché non lo fermi, quindi è il timer online da usare quando non sai quanto durerà qualcosa. Funziona come
          timer in avanti per allenamenti, discorsi, esperimenti e attività.
        </p>
        <p className={p}>
          Devi invece contare alla rovescia da un tempo fisso, come 10 o 30 minuti? Usa il{' '}
          <Link href="/countdown-timer" className={link}>timer conto alla rovescia</Link>, oppure il{' '}
          <Link href="/pomodoro-timer" className={link}>timer Pomodoro</Link> per sessioni di concentrazione con pause.
        </p>
      </Section>

      <Section wide id="fullscreen-heading" title="Cronometro digitale a schermo intero">
        <p className={p}>
          Premi F o tocca «Schermo intero» per un enorme cronometro digitale che tutta la stanza può leggere. Funziona bene come timer per la
          classe su un proiettore o una LIM.
        </p>
        <ul className={ul}>
          <li>In classe: cronometra quiz, lavori di gruppo e gare di lettura.</li>
          <li>Studio: controlla quanto tempo richiede davvero ogni argomento.</li>
          <li>Sport e giochi: cronometra scatti, plank, round e puzzle.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Cronometro a schermo intero o cronometro di Google?">
        <p className={p}>
          I risultati di ricerca di Google includono un piccolo timer integrato. Questo aggiunge un elenco completo dei giri con tempi parziali,
          «Copia giri» con un clic, scorciatoie da tastiera e una visualizzazione a schermo intero, e puoi salvarlo nei preferiti per aprirlo
          subito.
        </p>
      </Section>
    </div>
  )
}
