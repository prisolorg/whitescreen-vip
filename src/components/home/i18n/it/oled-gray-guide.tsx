import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test grigi per OLED (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * test OLED / immagine test OLED → scala di grigi → burn-in (linkato ai test burn-in) → schermo grigio.
 * I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function OledGrayGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test grigi per OLED: come controllare i quasi neri">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Abbassa le luci della stanza e imposta lo schermo intorno al 50% di luminosità.</li>
          <li>Tocca due volte per lo schermo intero, così il test OLED copre tutto il pannello.</li>
          <li>Scorri i livelli di grigio scuro: 1%, 2%, 3%, 5%, 10%, 15% e 20%. Tocca lo schermo o usa i tasti freccia.</li>
          <li>Finisci sulla «Rampa quasi nera», che mostra i grigi dallo 0% al 20% affiancati in 12 gradini.</li>
        </ol>
        <p className={p}>
          Ogni immagine del test OLED dovrebbe apparire piatta e uniforme, e ogni gradino della rampa appena distinguibile dal successivo. Questo
          test grigi per OLED funziona come test della scala di grigi su qualsiasi telefono, TV, portatile o monitor.
        </p>
      </Section>

      <Section wide id="results-heading" title="Risultati del test grigi per OLED: cosa osservare">
        <Table
          caption="Difetti comuni degli OLED sui quasi neri"
          head={['Cosa vedi', 'Che cos’è', 'È comune?']}
          rows={[
            ['Macchie nuvolose e irregolari sul grigio scuro', 'Mura (pannello non uniforme)', 'Un po’ è normale all’1–5%'],
            ['Bande o dominanti di colore lungo la rampa', 'Banding sui quasi neri', 'Dipende da pannello e modalità immagine'],
            ['I primi gradini della rampa sembrano tutti neri', 'Black crush', 'Controlla luminosità e modalità immagine'],
            ['Una dominante verde o magenta sul grigio scuro', 'Dominante sui quasi neri', 'Dipende dal pannello'],
          ]}
        />
        <p className={p}>
          Giudica dalla tua normale distanza di visione. In un test grigi per OLED, un leggero mura sul campo all’1% è comune; contano di più i
          problemi che vedi in film o giochi reali.
        </p>
      </Section>

      <Section wide id="burn-heading" title="Test grigi per OLED o test burn-in?">
        <p className={p}>
          Questo test OLED controlla i toni scuri, non il burn-in. Il burn-in si vede meglio su campi più chiari come il grigio 50%, il rosso
          e il blu:
        </p>
        <ul className={ul}>
          <li>
            Per controllare il burn-in su un OLED, usa il <Link href="/oled-burn-in-test" className={link}>test burn-in OLED</Link>.
          </li>
          <li>
            Per controllare, e provare a eliminare, la ritenzione d’immagine su qualsiasi schermo, usa il{' '}
            <Link href="/screen-burn-in-test" className={link}>test burn-in schermo</Link>.
          </li>
        </ul>
      </Section>

      <Section wide id="gray-heading" title="Test grigi per OLED o semplice schermo grigio?">
        <p className={p}>
          Ti serve un unico schermo grigio invece dei livelli di prova? Apri lo <Link href="/gray-screen" className={link}>schermo grigio</Link>,
          oppure lo <Link href="/black-screen" className={link}>schermo nero</Link> per vedere il vero nero OLED. Per un controllo completo di
          colori, nitidezza e gamma, fai il <Link href="/monitor-test" className={link}>test calibrazione monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
