import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schermo blu (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * luce blu → tonalità: chiaro, scuro, blu navy → chroma key, foto e montaggio → occhiali luce blu e sottopixel.
 * I pulsanti hanno i nomi dell'interfaccia italiana.
 */
export function BlueScreenGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Schermo blu come luce: usa lo schermo per illuminare di blu">
        <p className={p}>
          Uno schermo blu pieno trasforma qualsiasi monitor, portatile o telefono in una morbida luce blu. Tocca due volte l’anteprima per lo
          schermo intero, attiva «Mantieni lo schermo acceso» e imposta la luminosità che ti serve.
        </p>
        <Table
          caption="Modi di usare lo schermo blu come luce"
          head={['Uso', 'Impostazioni', 'Consiglio']}
          rows={[
            ['Bagliore di sfondo per stream e video', 'Luminosità 70–100%', 'Metti un secondo schermo dietro di te, fuori inquadratura'],
            ['Luce d’accento per foto e video', 'Luminosità 100%', 'Illumina di lato per un contorno freddo sul soggetto'],
            ['Luci d’atmosfera e per feste', 'Luminosità 40–70%', 'Rivolgi lo schermo verso una parete per diffondere la luce blu'],
            ['Flash blu intenso', 'Luminosità 100%, schermo intero', 'I telefoni danno la luce più forte alla massima luminosità'],
          ]}
        />
        <h3 className={h3}>Schermo blu, luce blu e sonno</h3>
        <p className={p}>
          Una luce blu intensa la sera può rendere più difficile addormentarsi. Usa la luce blu di giorno o per scatti creativi, e di notte passa
          allo <Link href="/red-screen" className={link}>schermo rosso</Link> o allo{' '}
          <Link href="/orange-screen" className={link}>schermo arancione</Link> a bassa luminosità.
        </p>
      </Section>

      <Section wide id="shade-heading" title="Colori dello schermo blu: brillante, scuro, navy e azzurro">
        <p className={p}>
          Questa pagina mostra il blu puro, #0000FF (RGB 0, 0, 255). Usa il cursore «Luminosità» per scurirlo, con il tono su «Neutro».
        </p>
        <Table
          caption="Tonalità di blu e come ottenerle"
          head={['Tonalità', 'Hex', 'Come ottenerla']}
          rows={[
            ['Blu brillante', '#0000FF', 'Luminosità 100%'],
            ['Blu scuro', '#0000B3', 'Luminosità 70%'],
            ['Blu navy', '#000080', 'Luminosità 50%'],
            ['Azzurro', '#00FFFF', <Link key="c" href="/cyan-screen" className={link}>Apri lo schermo ciano</Link>],
          ]}
        />
        <p className={p}>
          Ti serve un file? «Scarica» salva un PNG blu da 1080p a 8K, o in formati per telefono e personalizzati. Altre opzioni nella raccolta
          di <Link href="/backgrounds/blue-background" className={link}>sfondi blu</Link>.
        </p>
      </Section>

      <Section wide id="chroma-heading" title="Schermo blu per chroma key, fotografia e montaggio">
        <p className={p}>Uno schermo blu funziona come un green screen, ed è la scelta migliore in alcuni casi:</p>
        <ul className={ul}>
          <li>Il soggetto indossa qualcosa di verde o tiene oggetti verdi.</li>
          <li>Vuoi riflessi di colore meno visibili. I riflessi blu sono più facili da nascondere, anche se il blu richiede più luce per una scontornatura pulita.</li>
        </ul>
        <p className={p}>
          Per piccoli prodotti e primi piani, apri questa pagina su un portatile, un monitor o un telefono, imposta la «Luminosità» intorno al
          70% e tieni il soggetto 20–30 cm davanti allo schermo. Per il montaggio, scarica un PNG blu e scontornalo con gli stessi strumenti
          che useresti per il verde: Chroma Key di OBS, Chroma key di CapCut, Ultra Key di Premiere o 3D Keyer di DaVinci Resolve. Leggi{' '}
          <Link href="/glossary/chroma-key" className={link}>chroma key</Link> per capire come funziona la scontornatura.
        </p>
      </Section>

      <Section wide id="test-heading" title="Test con lo schermo blu: occhiali luce blu e sottopixel">
        <p className={p}>
          Vuoi un rapido test della luce blu per i tuoi occhiali? Guarda questa pagina alla massima luminosità con e senza occhiali. Le lenti
          molto colorate rendono il blu visibilmente più scuro; le lenti chiare che bloccano poco blu non fanno quasi differenza. Prova lo
          stesso con lo <Link href="/" className={link}>schermo bianco</Link> per vedere quanto le lenti colorano tutto. È un rapido controllo
          visivo, non una misura di laboratorio.
        </p>
        <p className={p}>
          Il blu puro accende anche solo i sottopixel blu. Un puntino nero è un sottopixel blu morto, mentre un puntino magenta o ciano indica un
          sottopixel rosso o verde bloccato acceso. Per un controllo completo, fai il{' '}
          <Link href="/dead-pixel-test" className={link}>test pixel bruciati</Link>.
        </p>
      </Section>
    </div>
  )
}
