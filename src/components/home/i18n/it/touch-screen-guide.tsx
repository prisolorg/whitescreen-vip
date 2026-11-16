import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test touch screen (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * test touch screen / test touch / test schermo touch → tocchi fantasma e multitouch → iPhone, Android, Samsung →
 * codice di test. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function TouchScreenGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="modes-heading" title="Test touch screen: tre modi per controllare">
        <Table
          caption="Modalità del test touch screen"
          head={['Modalità', 'Cosa controlla', 'Come']}
          rows={[
            ['Griglia zone morte', 'Punti che ignorano il tocco', 'Scorri su ogni quadrato finché «Coperto» arriva al 100%; i quadrati che restano scuri sono zone morte'],
            ['Disegna', 'Tracciamento fluido e senza interruzioni', 'Traccia linee lente sullo schermo; interruzioni o salti indicano zone deboli'],
            ['Multitouch', 'Quante dita rileva', 'Appoggia più dita; «Tocchi» e «Max» mostrano il numero'],
          ]}
        />
        <p className={p}>
          Premi «Cancella» per ricominciare e premi F o tocca «Schermo intero», così il test touch screen copre anche i bordi dello schermo.
        </p>
      </Section>

      <Section wide id="ghost-heading" title="Test touch screen per tocchi fantasma e multitouch">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Tocchi fantasma:</strong> apri «Disegna», poi appoggia il telefono e non toccarlo. Linee o
            punti che compaiono da soli sono tocchi fantasma.
          </li>
          <li>
            <strong className="text-foreground">Multitouch:</strong> la maggior parte dei telefoni rileva da 5 a 10 dita insieme. Il badge
            mostra quanti punti di contatto segnala il tuo dispositivo.
          </li>
          <li>
            <strong className="text-foreground">Sensibilità:</strong> passate leggere e rapide in «Disegna» mostrano se i tocchi delicati
            vengono registrati.
          </li>
        </ul>
      </Section>

      <Section wide id="phone-heading" title="Test touch screen su iPhone, Android e Samsung">
        <p className={p}>
          Il test touch screen funziona in Safari, Chrome o qualsiasi browser del telefono, senza installare nulla. Se i tocchi sembrano non
          essere rilevati vicino ai bordi, togli la cover spessa o la pellicola protettiva e ripeti il test.
        </p>
        <p className={p}>
          Su molti Samsung Galaxy puoi anche comporre *#0*#, un codice di test del touch screen che apre un menu di test integrato. Codici
          come questo dipendono da marca e modello, e alcuni telefoni non ne hanno.
        </p>
      </Section>

      <Section wide id="next-heading" title="Dopo il test touch screen">
        <p className={p}>
          Se il touch funziona ma l’immagine no, controlla il display: fai il{' '}
          <Link href="/dead-pixel-test" className={link}>test pixel bruciati</Link> per i puntini o il{' '}
          <Link href="/monitor-test" className={link}>test calibrazione monitor</Link> per colori e uniformità.
        </p>
      </Section>
    </div>
  )
}
