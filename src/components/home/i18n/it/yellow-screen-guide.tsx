import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schermo giallo (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * luce calda / luce gialla → giallo pieno → controllo dei sottopixel. I pulsanti hanno i nomi dell'interfaccia italiana.
 */
export function YellowScreenGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Schermo giallo come luce calda">
        <p className={p}>
          Uno schermo giallo emette una luce calda senza blu, ed è quindi un’accogliente luce calda per leggere, per le chiamate e per la
          sera. Tocca due volte l’anteprima per lo schermo intero e attiva «Mantieni lo schermo acceso», così la luce resta accesa.
        </p>
        <Table
          caption="Impostazioni consigliate per usare lo schermo giallo come luce"
          head={['Uso', 'Impostazioni', 'Consiglio']}
          rows={[
            ['Luce per leggere', 'Caldo, Luminosità 60–80%', 'Appoggia un tablet accanto al libro, inclinato lontano dagli occhi'],
            ['Videochiamate', 'Neutro, Luminosità 100%', 'Metti lo schermo dietro la webcam per un bagliore dorato'],
            ['Luce serale o notturna', 'Caldo, Luminosità 30–50%', 'Una luminosità più bassa la mantiene morbida in una stanza buia'],
            ['Colore per foto e video', 'Neutro o Caldo', 'Usa un secondo schermo come luce d’accento calda di lato'],
          ]}
        />
        <h3 className={h3}>Schermo giallo come torcia sul telefono</h3>
        <p className={p}>
          Apri questa pagina sul telefono, alza la luminosità e passa a schermo intero. Al buio la luce gialla calda è meno fastidiosa di una
          torcia bianca intensa, quindi è comoda per controllare i bambini o orientarti di notte.
        </p>
      </Section>

      <Section wide id="solid-heading" title="Schermo giallo pieno (#FFFF00)">
        <p className={p}>
          Questa pagina mostra il giallo pieno: rosso e verde alla massima intensità con il blu spento (RGB 255, 255, 0). È uno schermo giallo
          vuoto, senza nient’altro, e puoi cambiare la tonalità con i comandi sotto l’anteprima.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Giallo brillante:</strong> Neutro, Luminosità 100%.
          </li>
          <li>
            <strong className="text-foreground">Giallo oro:</strong> scegli Caldo.
          </li>
          <li>
            <strong className="text-foreground">Giallo senape:</strong> abbassa il cursore della Luminosità.
          </li>
        </ul>
        <p className={p}>
          Ti serve un file? «Scarica» salva un PNG giallo da 1080p a 8K, o in formati per telefono e personalizzati. Per tonalità pastello e
          giallo chiaro, sfoglia la raccolta di <Link href="/backgrounds/yellow-background" className={link}>sfondi gialli</Link>.
        </p>
      </Section>

      <Section wide id="check-heading" title="Test con lo schermo giallo: sottopixel rossi e verdi">
        <p className={p}>
          Il giallo accende insieme i sottopixel rossi e verdi. Un puntino rosso indica un sottopixel verde morto, un puntino verde uno rosso
          morto e un puntino bianco un sottopixel blu bloccato acceso. Restringi il campo con lo{' '}
          <Link href="/red-screen" className={link}>schermo rosso</Link>, lo <Link href="/green-screen" className={link}>schermo verde</Link> e lo{' '}
          <Link href="/blue-screen" className={link}>schermo blu</Link>.
        </p>
        <p className={p}>
          Se invece il tuo <Link href="/" className={link}>schermo bianco</Link> sembra giallo, leggi la{' '}
          <Link href="/screen-problems/yellow-tint-on-screen" className={link}>
            guida alla dominante gialla
          </Link>
          .
        </p>
      </Section>
    </div>
  )
}
