import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schermo nessun segnale (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * barre colorate TV / monoscopio → TV nessun segnale → idee d'uso → «nessun segnale» vero sulla TV.
 * I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function NoSignalGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Schermo nessun segnale e barre colorate TV: tre stili">
        <Table
          caption="Stili dello schermo nessun segnale"
          head={['Stile', 'Cosa mostra']}
          rows={[
            ['Barre di colore', 'Barre colorate TV con un riquadro NESSUN SEGNALE al centro'],
            ['Rimbalzo', 'Un riquadro NESSUN SEGNALE che scivola e rimbalza sui bordi, come una TV inattiva'],
            ['Ingresso blu', 'Un semplice schermo blu con il messaggio, come mostrano molte TV senza ingresso'],
          ]}
        />
        <ul className={ul}>
          <li>Apri «Altro» per cambiare il «Messaggio» e il «Nome dell’ingresso» (HDMI 1 di default).</li>
          <li>Attiva il tono a 1 kHz per il classico bip del segnale di prova.</li>
          <li>Premi F o tocca «Schermo intero», così lo schermo nessun segnale riempie una TV, un monitor o un portatile.</li>
        </ul>
      </Section>

      <Section wide id="bars-heading" title="Barre colorate dello schermo nessun segnale: cosa significano le strisce">
        <p className={p}>
          Le barre colorate TV sono la schermata di prova a strisce che le emittenti usavano per allineare le immagini. Questo schermo nessun
          segnale ne disegna una versione in stile SMPTE su tre file:
        </p>
        <ul className={ul}>
          <li>In alto: sette barre grigio, giallo, ciano, verde, magenta, rosso e blu.</li>
          <li>Al centro: una sottile striscia blu, magenta, ciano e grigia, alternata al nero.</li>
          <li>In basso: blocchi blu scuro, bianco, viola e nero.</li>
        </ul>
        <p className={p}>
          Le barre colorate TV si adattano a qualsiasi schermo, comprese le TV 1080p e 4K. Servono per l’aspetto, non per la calibrazione; per
          controllare i colori usa il <Link href="/screen-color-test" className={link}>test colori schermo</Link>.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Idee per usare lo schermo nessun segnale">
        <ul className={ul}>
          <li>Scherzo: metti a schermo intero le barre colorate o lo schermo TV nessun segnale e guarda qualcuno controllare ogni cavo.</li>
          <li>Oggetti di scena per film e foto: le barre colorate TV rendono credibile una TV sullo sfondo senza una vera trasmissione.</li>
          <li>Stream ed eventi: una schermata «torno subito» con il tuo messaggio.</li>
        </ul>
        <p className={p}>
          Altri scherzi sullo schermo: il <Link href="/hacked-screen" className={link}>simulatore schermo hackerato</Link> e l’
          <Link href="/fake-windows-10-update" className={link}>aggiornamento falso Windows 10</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Schermo nessun segnale sulla tua TV vera? Soluzioni rapide">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Premi Input o Source sul telecomando e scegli la porta a cui è collegato il dispositivo.</li>
          <li>Controlla che il dispositivo (console, portatile, decoder) sia acceso e non in standby.</li>
          <li>Scollega il cavo HDMI da entrambe le estremità e ricollegalo, oppure prova un’altra porta o un altro cavo.</li>
          <li>Riavvia la TV e il dispositivo.</li>
        </ol>
      </Section>
    </div>
  )
}
