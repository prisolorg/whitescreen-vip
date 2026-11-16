import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test pixel bruciati (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * test pixel bruciati / test pixel morti / test LCD → pixel morti, bloccati o caldi → telefono, portatile, monitor,
 * TV → riparazione. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function DeadPixelGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test pixel bruciati: come controllare lo schermo">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pulisci lo schermo, così non scambi la polvere per un pixel.</li>
          <li>Tocca due volte o premi F per lo schermo intero, così il test pixel bruciati controlla ogni pixel.</li>
          <li>Tocca lo schermo o usa i tasti freccia per scorrere 9 colori: nero, bianco, rosso, verde, blu, ciano, magenta, giallo e grigio.</li>
          <li>Guarda bene ogni colore, da bordo a bordo. Oppure premi «Scorrimento automatico» per cambiare colore ogni pochi secondi.</li>
        </ol>
        <p className={p}>
          Funziona come test dei pixel morti e test LCD su qualsiasi monitor, portatile, telefono, tablet o TV con un browser. Per controllare
          un colore più a lungo, apri lo <Link href="/black-screen" className={link}>schermo nero</Link> o lo{' '}
          <Link href="/" className={link}>schermo bianco</Link>.
        </p>
      </Section>

      <Section wide id="types-heading" title="Risultati del test pixel bruciati: morto, bloccato o caldo?">
        <p className={p}>Che cos’è un pixel morto? È un pixel che non si accende più. Ecco come distinguerlo dagli altri:</p>
        <Table
          caption="Come appare un difetto dei pixel"
          head={['Cosa vedi', 'Più visibile su', 'Che cos’è']}
          rows={[
            ['Un puntino nero che non si accende mai', 'Bianco e colori chiari', 'Pixel morto'],
            ['Un puntino fisso su rosso, verde o blu', 'Nero e altri colori', 'Pixel bloccato'],
            ['Un puntino sempre bianco', 'Nero', 'Pixel caldo'],
            ['Puntini che si spostano quando pulisci', 'Qualsiasi colore', 'Polvere, non un pixel'],
          ]}
        />
        <p className={p}>
          Approfondisci nelle guide sul <Link href="/screen-problems/stuck-pixel" className={link}>pixel bloccato</Link> e sul{' '}
          <Link href="/screen-problems/hot-pixel" className={link}>pixel caldo</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Test pixel bruciati su telefono, portatile, monitor o TV">
        <ul className={ul}>
          <li>Telefono e iPhone: alza la luminosità, tocca l’icona dello schermo intero e tocca per scorrere i colori.</li>
          <li>Portatile e monitor: imposta lo schermo alla risoluzione nativa, così un pixel appare come un pixel.</li>
          <li>TV: apri la pagina nel browser della TV, oppure trasmetti una scheda del portatile, e controlla da vicino.</li>
          <li>Dispositivo nuovo? Fai subito il test pixel bruciati, finché puoi ancora restituirlo.</li>
        </ul>
      </Section>

      <Section wide id="fix-heading" title="Dopo il test pixel bruciati: si possono riparare?">
        <p className={p}>
          Un pixel davvero morto quasi mai torna, perché non riceve più corrente. Un pixel bloccato a volte sì: colori che lampeggiano
          rapidamente sopra di esso per 10–20 minuti possono risvegliarlo. Il{' '}
          <Link href="/screen-burn-in-test" className={link}>test burn-in schermo</Link> ha un correttore a ciclo di colori che puoi usare per
          questo; evitalo se la luce lampeggiante ti dà fastidio.
        </p>
        <p className={p}>
          Se lo schermo è in garanzia, controlla la politica del produttore sui pixel difettosi. Per un controllo completo anche di colori e
          uniformità, fai il <Link href="/monitor-test" className={link}>test calibrazione monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
