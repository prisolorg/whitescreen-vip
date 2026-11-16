import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Timer Pomodoro (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * tecnica del pomodoro / metodo pomodoro → timer per studiare → impostazioni 25/5, 50/10 e personalizzate →
 * timer pomodoro online. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function PomodoroTimerGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="technique-heading" title="Timer Pomodoro e tecnica del pomodoro">
        <p className={p}>
          La tecnica del pomodoro, detta anche metodo pomodoro, è un semplice metodo di gestione del tempo ideato da Francesco Cirillo alla
          fine degli anni ’80. Lavori in sessioni brevi e concentrate, chiamate pomodori, e ti riposi tra una e l’altra. Questo timer Pomodoro
          gestisce l’intero ciclo per te:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Scegli un’attività.</li>
          <li>Concentrati su di essa per 25 minuti.</li>
          <li>Fai una pausa breve di 5 minuti.</li>
          <li>Ripeti. Dopo quattro pomodori, fai una pausa più lunga di 15 minuti.</li>
        </ol>
        <p className={p}>
          Il timer passa da solo dalla concentrazione alla pausa, suona alla fine di ogni fase e conta le sessioni che completi.
        </p>
        <h3 className={h3}>Perché si chiama «pomodoro»?</h3>
        <p className={p}>
          Cirillo cronometrava le sue prime sessioni con un timer da cucina a forma di pomodoro: per questo il metodo è noto anche come tecnica
          del timer a pomodoro, o «tomato timer» in inglese.
        </p>
      </Section>

      <Section wide id="study-heading" title="Timer Pomodoro per studiare">
        <p className={p}>
          Usare la tecnica del pomodoro per studiare lo trasforma in un ottimo timer per lo studio: i blocchi brevi sono più facili da
          iniziare e le pause mantengono viva la concentrazione durante una lunga sessione di ripasso.
        </p>
        <ul className={ul}>
          <li>Dai a ogni pomodoro un obiettivo chiaro, come un capitolo, una serie di esercizi o 20 flashcard.</li>
          <li>Metti via il telefono fino alla pausa.</li>
          <li>Annota i pensieri che ti distraggono e occupatene durante la pausa, non a metà sessione.</li>
          <li>Usa la pausa lunga per muoverti, bere acqua o prendere un po’ d’aria.</li>
          <li>Conta le sessioni completate per vedere quanto funziona per te il metodo pomodoro nello studio.</li>
        </ul>
      </Section>

      <Section wide id="settings-heading" title="Impostazioni del timer Pomodoro: 25/5, 50/10 e personalizzate">
        <p className={p}>Apri «Altro» per impostare la durata della concentrazione, le due pause e quante sessioni precedono la pausa lunga.</p>
        <Table
          caption="Impostazioni più usate del timer Pomodoro"
          head={['Configurazione', 'Concentrazione', 'Pausa breve', 'Pausa lunga', 'Ideale per']}
          rows={[
            ['Classico 25/5', '25 min', '5 min', '15 min dopo 4', 'La maggior parte del lavoro e dello studio'],
            ['Lavoro profondo 50/10', '50 min', '10 min', '20–30 min dopo 3', 'Scrittura, programmazione, letture lunghe'],
            ['Sprint brevi 15/3', '15 min', '3 min', '15 min dopo 4', 'Iniziare attività difficili'],
          ]}
        />
        <ul className={ul}>
          <li>La concentrazione può durare da 5 a 90 minuti, le pause brevi da 1 a 20 e le pause lunghe da 5 a 45.</li>
          <li>Disattiva «Avvia automaticamente la successiva» per avviare tu ogni fase.</li>
          <li>Disattiva il suono per un timer Pomodoro silenzioso in biblioteca o in ufficio.</li>
        </ul>
        <p className={p}>
          Ti serve solo un timer da 25 minuti? Il <Link href="/countdown-timer" className={link}>timer conto alla rovescia</Link> ha
          preimpostazioni a un tocco e il <Link href="/stopwatch" className={link}>cronometro</Link> mostra quanto dura davvero un’attività.
        </p>
      </Section>

      <Section wide id="online-heading" title="Timer Pomodoro online: nessuna app necessaria">
        <p className={p}>
          Questo timer Pomodoro online funziona nel browser su PC, Mac, Chromebook, tablet o telefono, senza app o estensioni da installare
          e senza account.
        </p>
        <ul className={ul}>
          <li>Il conto alla rovescia appare nella scheda del browser, così puoi continuare a lavorare in un’altra scheda.</li>
          <li>Il tempo resta preciso anche quando la scheda è in background.</li>
          <li>Premi la barra spaziatrice per avviare o mettere in pausa e F per un grande orologio Pomodoro a schermo intero.</li>
        </ul>
        <p className={p}>
          Funziona altrettanto bene come timer per la concentrazione, timer per il lavoro o timer per la produttività per qualsiasi attività
          che vuoi suddividere in sprint.
        </p>
      </Section>
    </div>
  )
}
