import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test frequenza di aggiornamento (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * test frequenza di aggiornamento / test Hz monitor → come controllare la frequenza su Windows, Mac, telefono →
 * 60, 120, 144 Hz → test FPS (linkato). I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function RefreshRateGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test frequenza di aggiornamento: come funziona">
        <p className={p}>
          I browser disegnano un nuovo fotogramma a ogni aggiornamento dello schermo, quindi misurare quei fotogrammi rivela la frequenza di
          aggiornamento. Questo test degli Hz parte da solo e mostra:
        </p>
        <ul className={ul}>
          <li>La frequenza di aggiornamento in Hz, arrotondata al valore comune più vicino (60, 120, 144 Hz e così via).</li>
          <li>Quanto dura ogni fotogramma in millisecondi e la percentuale di fotogrammi in ritardo.</li>
          <li>La frequenza più bassa e più alta rilevate, più un blocco in movimento che appare più fluido con più Hz.</li>
        </ul>
        <p className={p}>
          Funziona per controllare la frequenza di aggiornamento di monitor, portatili e telefoni. Premi «Misura di nuovo» dopo aver cambiato
          un’impostazione e tocca due volte per lo schermo intero sullo schermo che vuoi testare.
        </p>
      </Section>

      <Section wide id="check-heading" title="Test frequenza di aggiornamento e impostazioni dello schermo">
        <p className={p}>
          Il test mostra a quale frequenza funziona lo schermo in questo momento. Per vedere o cambiare l’impostazione della frequenza di
          aggiornamento del monitor:
        </p>
        <Table
          caption="Dove trovare l’impostazione della frequenza di aggiornamento"
          head={['Dispositivo', 'Dove cercare']}
          rows={[
            ['Windows 11 / 10', 'Impostazioni → Sistema → Schermo → Schermo avanzato → Scegli una frequenza di aggiornamento'],
            ['Mac', 'Impostazioni di Sistema → Monitor → Frequenza di aggiornamento'],
            ['iPhone / iPad', 'Fissa in base al modello; i modelli ProMotion arrivano automaticamente fino a 120 Hz'],
            ['Android', 'Impostazioni → Schermo → Frequenza di aggiornamento (o Fluidità movimenti)'],
          ]}
        />
        <h3 className={h3}>Perché il risultato può essere più basso del previsto</h3>
        <ul className={ul}>
          <li>Lo schermo è impostato a 60 Hz nelle impostazioni, oppure il cavo o la porta non supportano la frequenza più alta.</li>
          <li>Un portatile a batteria o un telefono in risparmio energetico abbassano la frequenza per consumare meno.</li>
          <li>Schede o app pesanti fanno saltare fotogrammi al browser. Chiudile e misura di nuovo.</li>
        </ul>
      </Section>

      <Section wide id="rates-heading" title="Risultati del test frequenza di aggiornamento: 60, 120 e 144 Hz">
        <Table
          caption="Frequenze di aggiornamento comuni"
          head={['Frequenza', 'Tempo per fotogramma', 'Schermi tipici']}
          rows={[
            ['60 Hz', '16,7 ms', 'La maggior parte dei monitor da ufficio, portatili e TV meno recenti'],
            ['90 Hz', '11,1 ms', 'Molti telefoni di fascia media'],
            ['120 Hz', '8,3 ms', 'Telefoni da gaming, iPhone Pro, TV e portatili più recenti'],
            ['144 Hz', '6,9 ms', 'Monitor da gaming'],
            ['240 Hz', '4,2 ms', 'Monitor per esport'],
          ]}
        />
      </Section>

      <Section wide id="fps-heading" title="Test frequenza di aggiornamento o test FPS?">
        <p className={p}>
          La frequenza di aggiornamento (Hz) indica quante volte lo schermo si ridisegna; il frame rate (FPS) indica quanti fotogrammi
          produce il browser o il gioco. Per controllare movimento e FPS, fai il <Link href="/frame-rate-test" className={link}>test FPS</Link>,
          e per sfocature e scie prova il <Link href="/monitor-ghosting-test" className={link}>test ghosting monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
