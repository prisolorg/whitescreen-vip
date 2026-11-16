import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Salvaschermo DVD (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * salvaschermo DVD / screensaver DVD / logo DVD che rimbalza → easter egg di Google → TV, stream, secondo monitor →
 * logo DVD e GIF → colpo nell'angolo e gioco del DVD. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function DvdScreensaverGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="bounce-heading" title="Salvaschermo DVD: il logo DVD che rimbalza">
        <p className={p}>
          Il salvaschermo DVD, detto anche screensaver DVD, è il logo DVD che rimbalza sullo schermo dei vecchi lettori DVD lasciati inattivi.
          Il logo scivola in diagonale a velocità costante e cambia colore ogni volta che tocca un bordo, passando tra 10 colori senza
          ripetere l’ultimo.
        </p>
        <ul className={ul}>
          <li>Tocca due volte lo schermo o premi F per vederlo a schermo intero.</li>
          <li>Apri «Altro» per cambiare la velocità e la dimensione del logo.</li>
          <li>I contatori registrano ogni rimbalzo e ogni colpo esatto nell’angolo.</li>
          <li>Con «Pausa» fermi il logo che rimbalza, con «Riprendi» riparte.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="L’easter egg di Google sul salvaschermo DVD">
        <p className={p}>
          Cercando «DVD screensaver» su Google, in alcuni periodi il logo di Google si è trasformato in un logo in stile DVD che rimbalza sulla
          pagina dei risultati. Gli easter egg come questo vanno e vengono, e non funzionano a schermo intero.
        </p>
        <p className={p}>
          Questa pagina ti offre lo stesso logo che rimbalza in qualsiasi momento e in qualsiasi browser, con schermo intero, contatore degli
          angoli e comandi per velocità e dimensione.
        </p>
      </Section>

      <Section wide id="tv-heading" title="Salvaschermo DVD su TV, stream o secondo monitor">
        <Table
          caption="Dove usare il salvaschermo DVD"
          head={['Uso', 'Come']}
          rows={[
            ['Smart TV', 'Apri questa pagina nel browser della TV, oppure trasmetti una scheda del browser, poi passa a schermo intero'],
            ['Pausa dello stream o schermata «torno subito»', 'Aggiungi questa finestra come cattura finestra in OBS mentre ti allontani'],
            ['Secondo monitor', 'Trascina la finestra sullo schermo inutilizzato e passa a schermo intero'],
            ['Sala d’attesa o ufficio', 'Lascialo acceso su uno schermo libero per un tocco di nostalgia'],
          ]}
        />
      </Section>

      <Section wide id="logo-heading" title="Logo e GIF del salvaschermo DVD">
        <p className={p}>
          Il logo che vedi qui viene disegnato in tempo reale nel browser: una scritta «DVD» in grassetto sopra un disco con la parola
          «VIDEO» ritagliata, che cambia colore a ogni rimbalzo. Il logo ufficiale DVD Video è un marchio di DVD Format/Logo Licensing
          Corporation, quindi non è disponibile come download PNG.
        </p>
        <h3 className={h3}>Creare una GIF del salvaschermo DVD</h3>
        <p className={p}>
          Avvia il salvaschermo a schermo intero e registra lo schermo con un registratore integrato (Strumento di cattura di Windows, barra
          Istantanea schermo del Mac o il registratore dello schermo del telefono), poi converti il video in una GIF del DVD. Registra fino a
          un colpo nell’angolo per un loop perfetto.
        </p>
      </Section>

      <Section wide id="corner-heading" title="Il salvaschermo DVD colpirà l’angolo?">
        <p className={p}>
          Sì, ma la frequenza dipende dalla forma dello schermo, dalla dimensione del logo e dal punto di partenza. Il logo DVD colpisce
          l’angolo solo quando raggiunge un lato e il bordo superiore o inferiore nello stesso istante. Con alcune dimensioni dello schermo
          succede spesso; con altre può volerci molto tempo. Cambiando la dimensione del logo o ridimensionando la finestra ottieni un nuovo
          percorso.
        </p>
        <p className={p}>
          Per questo è un gioco del DVD perfetto: ognuno prova a indovinare quando arriverà il prossimo colpo nell’angolo e il contatore
          decide. Per altri schermi da lasciare accesi, prova il{' '}
          <Link href="/flip-clock-screensaver" className={link}>salvaschermo orologio a palette</Link> o il{' '}
          <Link href="/matrix-screensaver" className={link}>salvaschermo Matrix</Link>.
        </p>
      </Section>
    </div>
  )
}
