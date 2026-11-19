import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test ghosting monitor (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * test ghosting / ghosting monitor → cosa significano le scie → come correggerlo → portatile, TV e altri schermi.
 * I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function MonitorGhostingGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test ghosting monitor: come eseguirlo">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Imposta il monitor alla frequenza di aggiornamento più alta, poi tocca due volte il test ghosting monitor per lo schermo intero.</li>
          <li>Guarda il bersaglio muoversi sulle corsie scura, grigio medio e chiara. Seguilo con gli occhi, non fissare un punto.</li>
          <li>Aumenta la «Velocità» (da 240 a 2.400 px/s) finché compaiono le scie, e premi «Pausa» per guardare un fotogramma fermo.</li>
          <li>Cambia l’impostazione overdrive del monitor e ripeti il test per confrontare.</li>
        </ol>
        <p className={p}>
          Nel test ghosting monitor, la griglia di riferimento verticale (in «Altro») ti aiuta a valutare quanto è lunga una scia. Ogni corsia
          usa uno sfondo diverso perché il ghosting è spesso peggiore sul scuro o sul grigio medio.
        </p>
      </Section>

      <Section wide id="results-heading" title="Risultati del test ghosting monitor: cosa significano le scie">
        <p className={p}>
          Che cos’è il ghosting su un monitor? I pixel che cambiano colore troppo lentamente lasciano una copia sbiadita dietro a tutto ciò che
          si muove. Ecco come leggere il test ghosting monitor:
        </p>
        <Table
          caption="Ghosting, smearing e overshoot"
          head={['Cosa vedi dietro il bersaglio', 'Che cos’è', 'Causa abituale']}
          rows={[
            ['Una copia o scia sbiadita e più scura', 'Ghosting', 'Risposta dei pixel lenta, overdrive disattivato o troppo basso'],
            ['Una sbavatura scura, peggiore sulla corsia scura', 'Black smearing', 'Pannelli VA, passaggi lenti da scuro a chiaro'],
            ['Un alone chiaro o invertito', 'Overshoot (ghosting inverso)', 'Overdrive impostato troppo alto'],
            ['Un bordo morbido e sfocato senza copia', 'Motion blur', 'Normale a 60 Hz; minore a frequenze più alte'],
          ]}
        />
      </Section>

      <Section wide id="fix-heading" title="Correggere ciò che mostra il test ghosting monitor">
        <p className={p}>Un monitor con ghosting raramente va riparato; di solito le impostazioni giuste accorciano le scie.</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Overdrive:</strong> chiamato anche Response Time, Trace Free o OD nel menu del monitor. Scegli
            l’impostazione con la scia più corta e senza alone chiaro, di solito quella intermedia.
          </li>
          <li>
            <strong className="text-foreground">Frequenza di aggiornamento:</strong> controlla che sia al massimo con il{' '}
            <Link href="/screen-refresh-rate-test" className={link}>test frequenza di aggiornamento</Link>. Più Hz significano meno sfocatura.
          </li>
          <li>
            <strong className="text-foreground">Cavo e porta:</strong> usa DisplayPort o un cavo che supporti la frequenza di aggiornamento
            massima del monitor.
          </li>
          <li>
            <strong className="text-foreground">Modalità immagine:</strong> elaborazioni extra come la riduzione del rumore possono aggiungere
            scie; disattivale.
          </li>
        </ul>
      </Section>

      <Section wide id="screen-heading" title="Test ghosting monitor su portatile, TV o altri schermi">
        <p className={p}>
          Il ghosting dello schermo è lo stesso su qualsiasi display LCD o OLED: apri il test ghosting monitor sul portatile, la TV o il tablet
          che vuoi controllare ed eseguilo a schermo intero. Le TV hanno spesso una modalità gioco che riduce l’elaborazione e il ghosting.
        </p>
        <p className={p}>
          Per «schermo fantasma» si può intendere anche un’immagine sbiadita che resta sullo schermo quando nulla si muove. Quella è
          ritenzione d’immagine o burn-in, non ghosting da movimento; controllala con il{' '}
          <Link href="/screen-burn-in-test" className={link}>test burn-in schermo</Link>. Più dettagli nella{' '}
          <Link href="/screen-problems/ghosting" className={link}>guida al ghosting</Link>.
        </p>
      </Section>
    </div>
  )
}
