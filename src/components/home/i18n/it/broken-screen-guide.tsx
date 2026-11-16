import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Effetto schermo rotto (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * schermo rotto / schermo crepato / vetro rotto → PC, portatile, Chromebook, telefono → scherzo schermo rotto →
 * immagine e sfondo schermo rotto → controllo dei danni reali. I pulsanti hanno i nomi dell'interfaccia italiana.
 */
export function BrokenScreenGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Stili dell’effetto schermo rotto: crepato, in frantumi e LCD danneggiato">
        <p className={p}>
          Scegli un tipo di crepa sotto l’anteprima, poi tocca o fai clic in un punto qualsiasi per rompere il vetro proprio lì. Ogni tocco
          aggiunge una nuova crepa, così lo schermo crepato si allarga proprio come un vetro vero.
        </p>
        <Table
          caption="Stili dell’effetto schermo rotto e il loro aspetto"
          head={['Stile', 'Aspetto']}
          rows={[
            ['Ragnatela', 'Il classico schermo crepato: lunghe crepe che partono da un unico punto d’impatto'],
            ['Colpo nell’angolo', 'Un telefono caduto e atterrato su un angolo'],
            ['In frantumi', 'Uno schermo distrutto, in frantumi, con vetro sbriciolato ovunque'],
            ['Crepa sottile', 'Una crepa fine e realistica, facile da non notare subito'],
            ['LCD che cola', 'Macchie nere e colorate simili a inchiostro di un pannello danneggiato'],
            ['Linee morte', 'Linee verticali luminose, come un display rotto che perde colonne'],
          ]}
        />
      </Section>

      <Section wide id="computer-heading" title="Effetto schermo rotto su PC, portatile o Chromebook">
        <ul className={ul}>
          <li>Per simulare lo schermo del PC rotto, apri questa pagina sul portatile, PC, Chromebook o smart TV a cui vuoi fare lo scherzo.</li>
          <li>Scegli «Schermo spento» o «Sfondo» in «Altro», così lo schermo crepato sembra il vero desktop.</li>
          <li>Premi F o tocca «Schermo intero», poi aggiungi un paio di crepe dove lo schermo potrebbe aver preso un colpo.</li>
          <li>Fai un passo indietro e aspetta. Il cursore si nasconde da solo quando nessuno muove il mouse.</li>
        </ul>
        <h3 className={h3}>Effetto schermo rotto sul telefono: iPhone, Android o iPad</h3>
        <p className={p}>
          Apri la pagina nel browser del telefono, scegli «Schermata di blocco», tocca «Schermo intero» e rompi il vetro vicino a un angolo,
          dove di solito atterrano le cadute vere. Attiva il «Rumore di vetro» per l’effetto completo.
        </p>
      </Section>

      <Section wide id="prank-heading" title="Consigli per lo scherzo con l’effetto schermo rotto">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Fallo durare poco.</strong> I migliori scherzi con uno schermo rotto finto finiscono con una
            rivelazione rapida e una risata.
          </li>
          <li>
            <strong className="text-foreground">Scegli la persona giusta.</strong> Lascia stare chi si arrabbierebbe davvero per un dispositivo
            rotto.
          </li>
          <li>
            <strong className="text-foreground">Svela subito lo scherzo.</strong> Premi Esc o chiudi la scheda e lo schermo torna normale. Sul
            dispositivo non cambia nulla.
          </li>
        </ul>
        <p className={p}>
          Ne vuoi un altro? Prova il <Link href="/hacked-screen" className={link}>simulatore schermo hackerato</Link> o la{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>finta schermata blu della morte</Link>.
        </p>
      </Section>

      <Section wide id="image-heading" title="Immagine e sfondo con l’effetto schermo rotto">
        <p className={p}>
          Preferisci un’immagine dello schermo rotto invece dell’effetto dal vivo? Rompi il vetro come vuoi, poi apri «Altro» e usa «Scarica
          PNG». Imposta l’immagine come schermata di blocco del telefono o come sfondo del computer per uno scherzo che dura tutto il giorno.
        </p>
      </Section>

      <Section wide id="real-heading" title="Schermo rotto davvero e non un effetto? Come controllare i danni">
        <p className={p}>Non sei qui per uno scherzo? Questi controlli rapidi ti aiutano a distinguere un danno reale da un problema software:</p>
        <Table
          caption="Segni di uno schermo rotto davvero"
          head={['Cosa vedi', 'Controlla con']}
          rows={[
            ['Crepe che senti al tatto o vedi a schermo spento', <Link key="w" href="/" className={link}>Schermo bianco</Link>],
            ['Macchie nere o inchiostro che si allarga', <Link key="d" href="/dead-pixel-test" className={link}>Test pixel bruciati</Link>],
            ['Zone dello schermo che ignorano il tocco', <Link key="t" href="/touch-screen-test" className={link}>Test touch screen</Link>],
            ['Linee, sfarfallio o colori strani', <Link key="s" href="/screen-problems" className={link}>Guida ai problemi dello schermo</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
