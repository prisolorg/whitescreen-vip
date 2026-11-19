import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test FPS (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * test FPS / test frame rate / controllo FPS → risultati → FPS e frequenza di aggiornamento → FPS nei giochi.
 * I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function FrameRateGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test FPS: confronta i frame rate fianco a fianco">
        <p className={p}>
          Questo test FPS, o test del frame rate, muove lo stesso blocco su cinque corsie, ognuna a un frame rate diverso, così vedi la
          differenza con i tuoi occhi:
        </p>
        <ul className={ul}>
          <li>Corsie a 15, 24, 30 e 60 FPS, ognuna che si muove solo sui propri fotogrammi, come un video a quella frequenza.</li>
          <li>Una corsia max che si muove a ogni fotogramma mostrato dal display, con l’etichetta dei tuoi FPS reali.</li>
          <li>«Il tuo schermo:» indica gli FPS più alti che schermo e browser riescono a mostrare, misurati in tempo reale.</li>
        </ul>
        <p className={p}>
          Usa «Velocità» (da 120 a 1.800 px/s) per rendere il movimento più veloce, premi «Pausa» per fermarlo e tocca due volte per lo schermo
          intero. Fai questo test FPS online in qualsiasi browser, senza installare nulla.
        </p>
      </Section>

      <Section wide id="results-heading" title="Risultati del test FPS: come appare ogni frame rate">
        <Table
          caption="Frame rate comuni"
          head={['Frame rate', 'Tempo per fotogramma', 'Dove lo vedi']}
          rows={[
            ['15 FPS', '66,7 ms', 'A scatti; videochiamate lente, vecchie webcam'],
            ['24 FPS', '41,7 ms', 'Film e la maggior parte delle serie in streaming'],
            ['30 FPS', '33,3 ms', 'TV, YouTube, giochi per console'],
            ['60 FPS', '16,7 ms', 'Gaming fluido e video sportivi'],
            ['120+ FPS', '8,3 ms o meno', 'Monitor e telefoni ad alta frequenza di aggiornamento'],
          ]}
        />
        <p className={p}>
          Controllo FPS rapido: se la corsia max non sembra più fluida di quella a 60, probabilmente lo schermo funziona a 60 Hz.
        </p>
      </Section>

      <Section wide id="hz-heading" title="Test FPS o test della frequenza di aggiornamento?">
        <p className={p}>
          Il frame rate (FPS) è il numero di fotogrammi disegnati ogni secondo; la frequenza di aggiornamento (Hz) indica quante volte il
          monitor può mostrarne uno nuovo. Uno schermo non può mostrare più FPS dei suoi Hz, quindi nel test FPS la corsia max è limitata
          dalla frequenza di aggiornamento.
        </p>
        <p className={p}>
          Per controllare con precisione la frequenza di aggiornamento, con tempi dei fotogrammi e fotogrammi in ritardo, fai il{' '}
          <Link href="/screen-refresh-rate-test" className={link}>test frequenza di aggiornamento</Link>. Per le scie dietro agli oggetti in
          movimento, prova il <Link href="/monitor-ghosting-test" className={link}>test ghosting monitor</Link>.
        </p>
      </Section>

      <Section wide id="games-heading" title="Test FPS per i giochi">
        <p className={p}>
          Gli strumenti online misurano il browser, non i tuoi giochi, e questo test FPS non può vedere al loro interno. Per vedere gli FPS
          in gioco, usa un overlay:
        </p>
        <ul className={ul}>
          <li>Windows: premi Win + G e apri il widget Prestazioni nella Xbox Game Bar.</li>
          <li>Steam: attiva il contatore FPS nelle impostazioni «In gioco» di Steam.</li>
          <li>NVIDIA o AMD: l’overlay delle prestazioni nell’app del driver grafico.</li>
        </ul>
      </Section>
    </div>
  )
}
