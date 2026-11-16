import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Salvaschermo orologio a palette (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * orologio a palette online / flip clock a schermo intero → estetica, digitale, secondi → orologio per studiare →
 * timer e cronometro (l'orologio mostra solo l'ora). I pulsanti hanno i nomi dell'interfaccia italiana.
 */
export function FlipClockGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="online-heading" title="Salvaschermo orologio a palette online, a schermo intero su qualsiasi schermo">
        <p className={p}>
          Questo orologio a palette online, o flip clock, mostra l’ora con grandi cifre a palette che si girano al cambio dei minuti, come una
          sveglia da comodino retrò.
        </p>
        <ul className={ul}>
          <li>Tocca due volte l’orologio o premi F per lo schermo intero.</li>
          <li>A schermo intero lo schermo resta acceso nei browser supportati, quindi funziona come orologio da scrivania o salvaschermo.</li>
          <li>Usalo su un portatile, un secondo monitor, un vecchio tablet o il browser di una smart TV.</li>
        </ul>
      </Section>

      <Section wide id="style-heading" title="Salvaschermo orologio a palette estetico: scuro, chiaro e minimal">
        <p className={p}>Dagli l’aspetto che preferisci con i comandi sotto l’orologio:</p>
        <Table
          caption="Impostazioni dell’orologio a palette"
          head={['Impostazione', 'Cosa fa']}
          rows={[
            ['Tema', '«Scuro» per un orologio nero e pulito, «Chiaro» per un aspetto luminoso e arioso'],
            ['Formato 24 ore', 'Passa dall’ora in formato 24 ore a quella in formato 12 ore con AM/PM'],
            ['Mostra secondi', 'Un orologio a palette digitale con i secondi, oppure solo ore e minuti (in «Altro»)'],
            ['Mostra data', 'Aggiunge il giorno della settimana e la data sotto l’orologio (in «Altro»)'],
          ]}
        />
        <p className={p}>Nascondi secondi e data per il look di flip clock più minimal ed estetico.</p>
      </Section>

      <Section wide id="study-heading" title="Salvaschermo orologio a palette per studiare">
        <p className={p}>
          In grande su un secondo schermo diventa un orologio tranquillo per lo studio: puoi guardare l’ora senza prendere il telefono.
          Abbinalo al <Link href="/pomodoro-timer" className={link}>timer Pomodoro</Link> per lavorare a blocchi concentrati con pause.
        </p>
        <p className={p}>
          Preferisci qualcosa di più giocoso sullo schermo libero? Avvia il <Link href="/dvd-screensaver" className={link}>salvaschermo DVD</Link>.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Salvaschermo orologio a palette, timer o cronometro?">
        <p className={p}>Cerchi un timer a palette? Questo orologio mostra sempre l’ora attuale, quindi per cronometrare qualcosa usa uno di questi:</p>
        <ul className={ul}>
          <li>
            <Link href="/countdown-timer" className={link}>Timer conto alla rovescia</Link>: conta alla rovescia da qualsiasi durata, con
            preimpostazioni come 5, 10 e 25 minuti.
          </li>
          <li>
            <Link href="/stopwatch" className={link}>Cronometro</Link>: conta in avanti e registra i giri.
          </li>
          <li>
            <Link href="/pomodoro-timer" className={link}>Timer Pomodoro</Link>: sessioni di concentrazione e pause per lo studio o il lavoro.
          </li>
        </ul>
      </Section>
    </div>
  )
}
