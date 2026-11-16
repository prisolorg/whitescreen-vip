import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Timer conto alla rovescia (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * timer conto alla rovescia / countdown → conto alla rovescia fino a una data / giorni mancanti → timer online →
 * usi → altri timer. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function CountdownTimerGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Timer conto alla rovescia: come si usa">
        <ul className={ul}>
          <li>Scegli una durata dal menu «Timer»: 1, 5, 10, 15, 25, 45 o 60 minuti.</li>
          <li>Ti serve un’altra durata? Fai clic o tocca ore, minuti o secondi sullo schermo e scrivi qualsiasi tempo, fino a 99 ore.</li>
          <li>Premi «Avvia», o la barra spaziatrice sulla tastiera, e il conto alla rovescia parte.</li>
          <li>Metti in pausa e riprendi da dove eri rimasto, oppure premi R per azzerare.</li>
          <li>Quando il tempo scade, lo schermo lampeggia di rosso e suona un segnale. Disattiva il suono in «Altro».</li>
        </ul>
        <p className={p}>Premi F o tocca «Schermo intero» per un timer conto alla rovescia enorme, leggibile dall’altra parte della stanza.</p>
      </Section>

      <Section wide id="date-heading" title="Timer conto alla rovescia fino a una data: giorni, ore, minuti">
        <p className={p}>
          Conti i giorni che mancano a un compleanno, un matrimonio, le vacanze, un esame o un lancio? Scegli{' '}
          <strong className="text-foreground">Conto alla rovescia fino a una data</strong> nel menu «Timer», scegli data e ora dal
          calendario, dai un nome all’evento se vuoi e premi «Avvia». Il conto alla rovescia mostra i giorni, le ore, i minuti e i secondi
          che mancano, e il segnale suona quando arriva il momento.
        </p>
        <ul className={ul}>
          <li>Usa l’orologio e il fuso orario del tuo dispositivo, quindi mezzanotte significa mezzanotte dove ti trovi.</li>
          <li>Il conto alla rovescia viene salvato in questo browser: chiudi la scheda e quando torni sta ancora contando.</li>
          <li>Passa a schermo intero per mostrare i giorni mancanti su una TV, un proiettore o un monitor libero.</li>
          <li>Tocca «Cambia data» per scegliere un nuovo evento in qualsiasi momento.</li>
        </ul>
      </Section>

      <Section wide id="online-heading" title="Timer conto alla rovescia online: gratis, senza app">
        <p className={p}>
          Questo timer conto alla rovescia online funziona in qualsiasi browser su computer, tablet, telefono o smart TV. È gratuito, senza
          registrazione e senza niente da installare. Sul computer puoi passare a un’altra scheda mentre è in funzione: il tempo rimanente
          appare nel titolo della scheda e il segnale suona comunque allo zero. Tieni la scheda aperta e l’audio attivo. I telefoni mettono
          in pausa le pagine che lasci, quindi lì tieni il timer sullo schermo; se un dispositivo va in standby, il conto alla rovescia si
          rimette in pari e il segnale suona al risveglio.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Idee per usare il timer conto alla rovescia">
        <Table
          caption="Modi di usare il timer conto alla rovescia"
          head={['Uso', 'Durata']}
          rows={[
            ['Attività in classe e verifiche', '10, 15 o 45 minuti sul proiettore'],
            ['Presentazioni e interventi', '5 o 10 minuti, a schermo intero dove chi parla può vederlo'],
            ['Cucina e tè', '1, 5 o 10 minuti'],
            ['Pause e allenamenti', '1, 5 o 15 minuti'],
            ['Sessioni di concentrazione', '25 minuti, poi una breve pausa'],
            ['Dolci al forno, bucato o un esame lungo', 'Un tempo personalizzato, ad esempio 1 ora e 30 minuti'],
            ['Compleanni, vacanze, viaggi e lanci', 'Conto alla rovescia fino alla data'],
          ]}
        />
      </Section>

      <Section wide id="more-heading" title="Timer conto alla rovescia, cronometro o Pomodoro?">
        <ul className={ul}>
          <li>
            Vuoi contare in avanti invece che all’indietro? Usa il <Link href="/stopwatch" className={link}>cronometro</Link>.
          </li>
          <li>
            Lavori o studi a blocchi? Il <Link href="/pomodoro-timer" className={link}>timer Pomodoro</Link> ripete sessioni di
            concentrazione da 25 minuti con pause.
          </li>
          <li>
            Vuoi solo l’ora sullo schermo? Prova il <Link href="/flip-clock-screensaver" className={link}>salvaschermo orologio a palette</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
