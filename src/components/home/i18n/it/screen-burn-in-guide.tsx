import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test burn-in schermo (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * test burn-in / schermo bruciato / immagine impressa → burn-in o ritenzione d'immagine → correttore →
 * telefono, LCD e monitor. I termini OLED appartengono alla pagina Test burn-in OLED, linkata.
 */
export function ScreenBurnInGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test burn-in schermo: come controllare lo schermo">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Scegli «Controlla burn-in» e tocca due volte per lo schermo intero. Alza la luminosità.</li>
          <li>Inizia da «Grigio 50%», il campo dove il burn-in si vede meglio, poi prova «Grigio 20%».</li>
          <li>
            Passa a bianco, rosso, verde, blu e nero (aiuta anche uno <Link href="/" className={link}>schermo bianco</Link> pieno). Oppure
            attiva «Cambio automatico (4 s)» in «Altro» per cambiare campo ogni 4 secondi.
          </li>
          <li>Cerca forme sbiadite fuori posto: una barra delle applicazioni, una tastiera, icone di app, un orologio o il logo di un canale.</li>
        </ol>
        <p className={p}>
          Il test burn-in schermo è più facile se sai dove guardare: di solito il burn-in corrisponde a ciò che resta sullo schermo più a lungo.
        </p>
      </Section>

      <Section wide id="results-heading" title="Risultati del test burn-in schermo: burn-in o ritenzione d’immagine?">
        <p className={p}>
          Che cos’è il burn-in? È un’immagine impressa nello schermo dopo aver mostrato a lungo la stessa immagine. Il test burn-in schermo
          mostra entrambi i tipi, e il tempo li distingue:
        </p>
        <Table
          caption="Burn-in o ritenzione d’immagine"
          head={['', 'Ritenzione d’immagine', 'Burn-in']}
          rows={[
            ['Che cos’è', 'Un’immagine fantasma che resta per un po’', 'Pixel consumati in modo non uniforme, per sempre'],
            ['Quanto dura', 'Svanisce in minuti od ore', 'Non svanisce'],
            ['Frequente su', 'Monitor LCD, TV, portatili', 'Telefoni, TV e monitor OLED e AMOLED'],
            ['Il correttore può aiutare?', 'Spesso sì', 'No; può solo renderlo meno visibile'],
          ]}
        />
        <p className={p}>
          Approfondisci nelle guide sul <Link href="/screen-problems/screen-burn-in" className={link}>burn-in dello schermo</Link> e sulla{' '}
          <Link href="/screen-problems/image-retention" className={link}>ritenzione d’immagine</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Correttore del test burn-in schermo: il burn-in si può eliminare?">
        <p className={p}>
          Scegli «Correttore di burn-in», premi «Avvia correttore» e lascia lo schermo acceso. In «Altro» puoi scegliere il motivo e farlo
          andare da 1 a 60 minuti (10 di default):
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Passata bianca:</strong> una barra bianca in movimento, senza lampeggi.</li>
          <li><strong className="text-foreground">Ciclo di colori:</strong> colori a tutto schermo che cambiano rapidamente.</li>
          <li><strong className="text-foreground">Rumore colorato:</strong> pixel colorati casuali.</li>
        </ul>
        <p className={p}>
          «Ciclo di colori» e «Rumore colorato» lampeggiano; usa «Passata bianca» se la luce lampeggiante ti dà fastidio. Dopo, ripeti il test
          burn-in schermo. Se l’immagine c’è ancora dopo vari cicli, probabilmente è un burn-in permanente. Per prevenirlo, abbassa la
          luminosità, nascondi le barre fisse e usa lo spegnimento automatico dello schermo.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Test burn-in schermo su telefono, LCD o monitor">
        <ul className={ul}>
          <li>
            Telefono e iPhone: il burn-in sul telefono appare come il contorno della tastiera o della barra di stato. Apri il test burn-in
            schermo nel browser e controlla i campi grigi alla massima luminosità.
          </li>
          <li>
            Monitor LCD e portatili: il vero burn-in sugli LCD è raro; un test burn-in su LCD di solito trova ritenzione d’immagine che il
            correttore può eliminare.
          </li>
          <li>
            Gli schermi OLED e AMOLED si consumano più in fretta. Per questi usa il{' '}
            <Link href="/oled-burn-in-test" className={link}>test burn-in OLED</Link>.
          </li>
        </ul>
        <p className={p}>
          Vedi puntini invece di forme? Prova il <Link href="/dead-pixel-test" className={link}>test pixel bruciati</Link>, oppure il{' '}
          <Link href="/screen-uniformity-test" className={link}>test uniformità schermo</Link> per macchie e luminosità non uniforme.
        </p>
      </Section>
    </div>
  )
}
