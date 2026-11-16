import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test calibrazione monitor (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * test monitor / test schermo online / test display → immagini di prova → colori e calibrazione →
 * pixel bruciati, Hz, risoluzione (linkati). I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function MonitorTestGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Test calibrazione monitor: le schermate di prova e cosa controllano">
        <p className={p}>
          Questo test del monitor e dello schermo ha sette schermate di prova a schermo intero, e ogni immagine controlla qualcosa di diverso.
          Per un campo uniforme con cui trovare polvere e pixel morti, apri lo <Link href="/" className={link}>schermo bianco</Link>:
        </p>
        <Table
          caption="Schermate di prova del test calibrazione monitor"
          head={['Schermata', 'Cosa controlla', 'Uno schermo buono mostra']}
          rows={[
            ['Sfumatura di grigi', 'Toni uniformi, banding dei colori', 'Una sola sfumatura continua, senza gradini né dominanti di colore'],
            ['Gradini di grigio', 'Livelli del nero e del bianco', 'Ogni gradino visibilmente diverso, compresi il più scuro e il più chiaro'],
            ['Griglia', 'Geometria e scalatura', 'Linee dritte e regolari da bordo a bordo'],
            ['Gamma 2,2', 'Impostazione gamma', 'Da lontano il blocco centrale si fonde con le strisce'],
            ['Linee sottili', 'Nitidezza, risoluzione nativa', 'Linee nette da 1 pixel senza sfarfallio né moiré'],
            ['Scacchiera', 'Contrasto e bordi puliti', 'Quadrati netti senza aloni né sbavature'],
            ['Barre di colore', 'Riproduzione dei colori', 'Otto colori saturi e ben distinti'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Come fare il test calibrazione monitor online">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Imposta lo schermo alla risoluzione nativa e lo zoom del browser al 100%.</li>
          <li>Tocca due volte il test per lo schermo intero, così sullo schermo non c’è altro.</li>
          <li>Tocca lo schermo, usa i tasti freccia o scegli una schermata per nome. «Scorrimento automatico» le fa scorrere per te.</li>
          <li>Guarda ogni schermata di fronte, poi di lato, per notare variazioni dovute all’angolo di visione.</li>
        </ol>
        <p className={p}>
          Questo test funziona in qualsiasi browser, quindi va bene come controllo del display, test dello schermo online, test dello schermo
          del portatile, test del monitor per uno schermo di PC nuovo o usato, o come rapido controllo dello schermo su una TV.
        </p>
      </Section>

      <Section wide id="color-heading" title="Test calibrazione monitor per colori e gamma">
        <p className={p}>
          Nel test, le barre di colore e la schermata gamma mostrano a occhio i problemi evidenti di colore e gamma. Per un test completo dei
          colori con tinte unite e rampe RGB, usa il <Link href="/screen-color-test" className={link}>test colori schermo</Link>.
        </p>
        <p className={p}>
          La vera precisione dei colori richiede un colorimetro hardware; nessun sito può misurarla. Per una calibrazione di base dei colori
          del monitor, usa lo strumento integrato nel tuo sistema:
        </p>
        <ul className={ul}>
          <li>Windows: cerca «Calibra colori schermo» in Start.</li>
          <li>Mac: Impostazioni di Sistema → Monitor → Profilo colore → Personalizza → Calibra.</li>
        </ul>
      </Section>

      <Section wide id="more-heading" title="Oltre il test calibrazione monitor: pixel bruciati, Hz e altri difetti">
        <Table
          caption="Quale test fare dopo"
          head={['Se vuoi controllare', 'Fai']}
          rows={[
            ['Pixel morti o bloccati (test LCD)', <Link key="dp" href="/dead-pixel-test" className={link}>Test pixel bruciati</Link>],
            ['Frequenza di aggiornamento (Hz)', <Link key="hz" href="/screen-refresh-rate-test" className={link}>Test frequenza di aggiornamento</Link>],
            ['Tempo di risposta e scie', <Link key="gh" href="/monitor-ghosting-test" className={link}>Test ghosting monitor</Link>],
            ['Fughe di retroilluminazione e uniformità del nero', <Link key="un" href="/screen-uniformity-test" className={link}>Test uniformità schermo</Link>],
            ['Immagini fantasma rimaste sullo schermo', <Link key="bi" href="/screen-burn-in-test" className={link}>Test burn-in schermo</Link>],
            ['La risoluzione del tuo schermo', <Link key="rs" href="/screen-resolution-test" className={link}>Test risoluzione schermo</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
