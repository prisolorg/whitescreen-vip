import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test colori schermo (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * test colori / test colore schermo → come farlo → monitor, TV e telefono, test RGB → limiti: precisione e
 * scolorimento. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function ScreenColorGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Test colori schermo: le schermate e cosa osservare">
        <p className={p}>
          Questo test dei colori ha sette schermate a schermo intero, e ogni immagine di prova controlla qualcosa di diverso:
        </p>
        <Table
          caption="Schermate del test colori schermo"
          head={['Schermata', 'Cosa controlla', 'Uno schermo buono mostra']}
          rows={[
            ['Barre di colore', 'Riproduzione di base dei colori', 'Otto colori netti e separati, senza dominanti'],
            ['Rampe RGB', 'Sfumature e clipping', 'Sfumature continue dal nero senza gradini; l’estremo chiaro non si appiattisce prima del tempo'],
            ['Spettro delle tonalità', 'Tutte le tonalità intermedie', 'Un arcobaleno continuo senza bande né salti'],
            ['Gradini di saturazione', 'Intensità del colore', 'Dieci gradini dal grigio al rosso pieno, tutti diversi'],
            ['Rosso, Verde, Blu', 'Ogni colore dei sottopixel da solo', 'Un colore uniforme da bordo a bordo, senza punti scuri'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Come fare il test colori schermo">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Disattiva la modalità notturna, i filtri luce blu e la luminosità automatica, così i colori dello schermo non sono alterati.</li>
          <li>Tocca due volte il test colori schermo per lo schermo intero, così vedi solo il colore.</li>
          <li>Tocca lo schermo, usa i tasti freccia o scegli una schermata per nome. «Scorrimento automatico» le fa scorrere per te.</li>
          <li>Guarda di fronte, poi di lato: su alcuni pannelli i colori cambiano con l’angolo.</li>
        </ol>
        <p className={p}>
          Ti serve invece un solo colore pieno? Apri lo <Link href="/" className={link}>schermo bianco</Link>, lo{' '}
          <Link href="/red-screen" className={link}>schermo rosso</Link> o qualsiasi pagina degli{' '}
          <Link href="/color-screens" className={link}>schermi a colori</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Test colori schermo su monitor, TV o telefono">
        <ul className={ul}>
          <li>Monitor: usa le rampe RGB come test dei colori del monitor, poi regola la temperatura colore o la modalità immagine nel suo menu.</li>
          <li>TV: apri il test colori schermo nel browser della TV o trasmetti una scheda del portatile. Le modalità Film o Filmmaker di solito mostrano i colori più fedeli.</li>
          <li>Telefono: alza la luminosità e confronta le modalità colore Naturale e Vivida, se il telefono le ha.</li>
          <li>I campi Rosso, Verde e Blu fanno anche da test RGB per i sottopixel bloccati.</li>
        </ul>
      </Section>

      <Section wide id="accuracy-heading" title="Limiti del test colori schermo: precisione e scolorimento">
        <p className={p}>
          Un test colori schermo è un controllo a occhio: trova dominanti, banding e colori mancanti, ma la vera precisione dei colori richiede
          un colorimetro hardware; nessun sito può misurarla. Devi scegliere i colori del testo per un sito? Usa il{' '}
          <Link href="/contrast-checker" className={link}>contrast checker</Link>.
        </p>
        <Table
          caption="Cosa può significare un problema di colore"
          head={['Cosa vedi', 'Prova']}
          rows={[
            ['Dominante gialla o blu ovunque', <Link key="y" href="/screen-problems/yellow-tint-on-screen" className={link}>Guida alla dominante gialla</Link>],
            ['Gradini o bande nelle rampe', <Link key="b" href="/screen-problems/color-banding" className={link}>Guida al banding dei colori</Link>],
            ['Macchie o zone non uniformi (scolorimento dello schermo)', <Link key="u" href="/screen-uniformity-test" className={link}>Test uniformità schermo</Link>],
            ['Loghi sbiaditi o immagini fantasma', <Link key="bi" href="/screen-burn-in-test" className={link}>Test burn-in schermo</Link>],
            ['Nitidezza, gamma e altro (controllo completo)', <Link key="m" href="/monitor-test" className={link}>Test calibrazione monitor</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
