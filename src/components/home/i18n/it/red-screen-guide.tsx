import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schermo rosso (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * luce rossa per la notte e il sonno → foto, reel e selfie → tonalità: scuro, brillante, chiaro → test dei sottopixel rossi.
 * I pulsanti hanno i nomi dell'interfaccia italiana.
 */
export function RedScreenGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="night-heading" title="Schermo rosso come luce per la notte e il sonno">
        <p className={p}>
          Una luce rossa tenue è la più delicata per la visione notturna. Le cellule degli occhi che lavorano con poca luce reagiscono appena al
          rosso intenso, ed è per questo che la usano astronomi e piloti. Abbassa il cursore «Luminosità», tocca due volte per lo schermo
          intero e attiva «Mantieni lo schermo acceso».
        </p>
        <Table
          caption="Impostazioni consigliate per usare lo schermo rosso di notte"
          head={['Uso', 'Luminosità', 'Consiglio']}
          rows={[
            ['Luce notturna', '20–40%', 'Rivolgi lo schermo verso una parete per un bagliore morbido'],
            ['Leggere appunti al buio', '30–50%', 'Tieni il telefono vicino e sotto il livello degli occhi'],
            ['Osservare le stelle', 'Al minimo', 'Mantiene gli occhi abituati al cielo buio'],
            ['Luce rossa intensa', '100%', 'Per segnali, effetti e foto, non per rilassarti'],
          ]}
        />
        <h3 className={h3}>Lo schermo rosso aiuta a dormire?</h3>
        <p className={p}>
          Uno schermo rosso tenue è più delicato prima di dormire di uno <Link href="/" className={link}>schermo bianco</Link> luminoso o di uno
          blu, perché non contiene luce blu. Resta comunque una luce, quindi tienila bassa e spegnila quando sei pronto per dormire. Uno schermo
          non è un dispositivo per la terapia a luce rossa: quelli usano lunghezze d’onda specifiche e una potenza molto più alta.
        </p>
      </Section>

      <Section wide id="photo-heading" title="Schermo rosso per foto, reel e selfie">
        <p className={p}>Uno schermo rosso dà a selfie e reel un bagliore rosso d’atmosfera, con nient’altro che un telefono o un portatile.</p>
        <ul className={ul}>
          <li>Spegni le luci della stanza, così la luce rossa è l’unica sul tuo viso.</li>
          <li>Apri questo schermo tutto rosso su un secondo telefono, tablet o portatile, imposta la «Luminosità» al 100% e passa a schermo intero.</li>
          <li>Tieni lo schermo a 20–40 cm dal viso, leggermente di lato, per ombre e profondità.</li>
          <li>Abbassa la luminosità o allontana lo schermo se la pelle appare bruciata.</li>
        </ul>
        <p className={p}>Funziona allo stesso modo su iPhone, Android e portatili. Più grande è lo schermo, più morbida è la luce.</p>
      </Section>

      <Section wide id="shade-heading" title="Colori dello schermo rosso: brillante, scuro e rosso chiaro">
        <p className={p}>
          Questa pagina mostra il rosso puro, #FF0000 (RGB 255, 0, 0): uno schermo rosso vuoto, senza nient’altro. Usa il cursore «Luminosità»
          per scurirlo, con il tono su «Neutro».
        </p>
        <Table
          caption="Tonalità di rosso e come ottenerle"
          head={['Tonalità', 'Hex', 'Come ottenerla']}
          rows={[
            ['Rosso brillante', '#FF0000', 'Luminosità 100%'],
            ['Rosso scuro', '#B30000', 'Luminosità 70%'],
            ['Rosso intenso / bordeaux', '#800000', 'Luminosità 50%'],
            ['Rosso chiaro / rosa', '#FF69B4', <Link key="p" href="/pink-screen" className={link}>Apri lo schermo rosa</Link>],
          ]}
        />
        <p className={p}>
          Ti serve un file? «Scarica» salva un PNG rosso da 1080p a 8K, o in formati per telefono e personalizzati. Altre tonalità nella
          raccolta di <Link href="/backgrounds/red-background" className={link}>sfondi rossi</Link>.
        </p>
      </Section>

      <Section wide id="test-heading" title="Test con lo schermo rosso: sottopixel rossi e fedeltà del colore">
        <p className={p}>
          Il rosso puro accende solo i sottopixel rossi. Un puntino scuro è un sottopixel rosso morto, mentre un puntino giallo o magenta indica
          un sottopixel verde o blu bloccato acceso. Il rosso è anche il colore in cui i monitor più economici tendono all’arancione o al rosato;
          confrontalo con un altro dispositivo, oppure fai il <Link href="/screen-color-test" className={link}>test colori schermo</Link> e il{' '}
          <Link href="/dead-pixel-test" className={link}>test pixel bruciati</Link>.
        </p>
      </Section>
    </div>
  )
}
