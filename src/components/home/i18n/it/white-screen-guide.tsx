import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schermo bianco, home page (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * schermo bianco luminoso → schermo bianco vuoto / bianco puro → schermo bianco come luce → sfondo e immagini →
 * test con lo schermo bianco. I pulsanti hanno i nomi dell'interfaccia italiana.
 */
export function WhiteScreenGuideIt() {
  return (
    <>
      <Section id="bright-heading" title="Schermo bianco luminoso: il bianco più intenso che il display può mostrare">
        <p className={p}>
          Lo schermo bianco luminoso qui sopra è bianco puro (#FFFFFF) al 100%, il colore più luminoso che qualsiasi display possa mostrare.
          Quanto appare luminoso dipende dall’impostazione di luminosità del tuo dispositivo, perché un sito web non può alzare la
          retroilluminazione hardware al posto tuo.
        </p>
        <h3 className={h3}>Come rendere lo schermo bianco più luminoso</h3>
        <ul className={ul}>
          <li>Tieni il cursore «Luminosità» sotto lo schermo al 100% e scegli «Neutro» o «Freddo».</li>
          <li>Alza al massimo la luminosità del dispositivo (vedi la tabella).</li>
          <li>Disattiva tutto ciò che colora o attenua il bianco: Luce notturna, Night Shift, True Tone, modalità comfort visivo e risparmio batteria.</li>
          <li>Tocca due volte lo schermo per passare a schermo intero, così nessuna barra del browser oscura i bordi.</li>
        </ul>
        <Table
          caption="Dove trovare la luminosità massima su ogni dispositivo"
          head={['Dispositivo', 'Luminosità massima', 'Da disattivare per un bianco puro']}
          rows={[
            ['Windows 10/11', 'Cursore della luminosità in Impostazioni rapide (Win + A)', 'Luce notturna, risparmio batteria, luminosità adattiva al contenuto'],
            ['Mac', 'Tasti della luminosità o Centro di Controllo → Monitor', 'Night Shift, True Tone, luminosità automatica'],
            ['iPhone / iPad', 'Cursore nel Centro di Controllo', 'Night Shift, True Tone, Modalità risparmio energetico'],
            ['Android', 'Cursore nelle Impostazioni rapide', 'Luminosità adattiva, comfort visivo / luce notturna'],
            ['Smart TV', 'Modalità immagine Vivida o Standard, retroilluminazione al massimo', 'Modalità immagine Eco / risparmio energetico'],
          ]}
        />
        <h3 className={h3}>Uno schermo molto luminoso fa male agli occhi?</h3>
        <p className={p}>
          Uno schermo bianco fisso non sfarfalla e non lampeggia, ma la luminosità massima in una stanza buia può risultare fastidiosa. Abbassa
          il cursore o scegli «Caldo» quando ti serve solo una luce morbida, e se lo usi a lungo distogli lo sguardo per un momento ogni 20
          minuti.
        </p>
      </Section>

      <Section id="blank-heading" title="Schermo bianco vuoto: uno schermo bianco puro, senza nient’altro">
        <p className={p}>
          Uno schermo bianco vuoto è proprio questo: uno schermo tutto bianco senza testo, icone o cursore. Uno schermo bianco semplice come
          questo funziona come sfondo pulito, come pannello luminoso o come modo per liberare lo schermo con un tocco.
        </p>
        <ul className={ul}>
          <li>Tocca due volte l’anteprima (o premi F) per uno schermo completamente bianco da bordo a bordo.</li>
          <li>Il cursore si nasconde dopo un momento senza movimento, così niente interrompe il bianco.</li>
          <li>Premi Esc o tocca di nuovo due volte per uscire dallo schermo intero.</li>
        </ul>
        <h3 className={h3}>Bianco puro o schermo bianco caldo, morbido e avorio</h3>
        <Table
          caption="Tonalità di bianco che puoi ottenere con i pulsanti Freddo, Neutro e Caldo"
          head={['Tonalità', 'Come ottenerla', 'Ideale per']}
          rows={[
            ['Bianco puro (#FFFFFF)', 'Neutro, Luminosità 100%', 'Test, pulizia, la luce più intensa'],
            ['Bianco freddo', 'Freddo, Luminosità 100%', 'Aspetto nitido da luce diurna, foto di prodotti'],
            ['Bianco caldo', 'Caldo', 'Videochiamate, trucco, lettura serale'],
            ['Bianco morbido / avorio', 'Caldo + Luminosità 60–80%', 'Luce di sfondo delicata in una stanza buia'],
          ]}
        />
      </Section>

      <Section id="light-heading" title="Schermo bianco come luce: usa lo schermo come una lampada">
        <p className={p}>
          Lo schermo è una fonte di luce morbida e uniforme, e alla massima luminosità emette una luce bianca sorprendentemente intensa. Alza il
          cursore «Luminosità» e la luminosità del dispositivo, scegli un tono e attiva «Mantieni lo schermo acceso», così la luce non si
          spegne a metà chiamata.
        </p>
        <Table
          caption="Impostazioni consigliate per usare lo schermo bianco come luce"
          head={['Uso', 'Tono', 'Consiglio']}
          rows={[
            ['Videochiamate (Zoom, Teams, Meet)', 'Caldo o Neutro', 'Metti lo schermo appena dietro la webcam, poco sopra l’altezza degli occhi'],
            ['Trucco e selfie', 'Neutro', 'Mettiti proprio di fronte allo schermo per una luce uniforme e senza ombre'],
            ['Luce per leggere', 'Caldo', 'Abbassa il cursore al 60–80% per ridurre l’abbagliamento'],
            ['Foto di prodotti', 'Freddo', 'Usa un secondo dispositivo come luce di riempimento di lato'],
            ['Torcia veloce', 'Neutro', 'Schermo intero sul telefono alla massima luminosità'],
          ]}
        />
        <h3 className={h3}>Usa il telefono o il portatile come torcia</h3>
        <p className={p}>
          Apri questo schermo bianco sul telefono, porta la luminosità al massimo e tocca due volte per lo schermo intero. Questa luce è più
          delicata del flash della fotocamera, quindi è comoda per trovare le cose in una stanza buia senza svegliare nessuno.
        </p>
        <p className={p}>
          Vuoi più controllo? Prova il <Link href="/ring-light" className={link}>ring light online</Link> per un riflesso circolare negli occhi
          o la <Link href="/zoom-lighting" className={link}>luce per videochiamate</Link> per una temperatura colore esatta.
        </p>
      </Section>

      <Section id="background-heading" title="Sfondo e immagini dello schermo bianco da scaricare">
        <p className={p}>
          Ti serve uno schermo bianco come file? Usa «Scarica» sotto lo schermo per salvare un PNG bianco puro della dimensione che ti serve.
          La luminosità e il tono scelti vengono applicati all’immagine.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Desktop e TV:</strong> 1080p, 2K e 4K.
          </li>
          <li>
            <strong className="text-foreground">Telefono e tablet:</strong> Telefono (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Dimensione personalizzata:</strong> qualsiasi larghezza e altezza.
          </li>
        </ul>
        <p className={p}>
          Cerchi altri sfondi e tonalità di bianco? Sfoglia la raccolta di{' '}
          <Link href="/backgrounds/white-background" className={link}>
            sfondi bianchi
          </Link>
          .
        </p>
      </Section>

      <Section id="test-heading" title="Test con lo schermo bianco: cosa osservare">
        <p className={p}>
          Uno schermo bianco pieno è il controllo del display più rapido. Passa a schermo intero alla massima luminosità e osserva tutto il
          pannello.
        </p>
        <Table
          caption="Cosa può rivelare un test con lo schermo bianco"
          head={['Cosa vedi', 'Cosa può significare', 'Passo successivo']}
          rows={[
            ['Puntini neri o scuri', 'Pixel morti', <Link key="d" href="/dead-pixel-test" className={link}>Test pixel bruciati</Link>],
            ['Macchie, angoli scuri o nuvole', 'Retroilluminazione non uniforme', <Link key="u" href="/screen-uniformity-test" className={link}>Test uniformità schermo</Link>],
            ['Il bianco sembra giallo, blu o rosa', 'Impostazioni colore o dominante del pannello', <Link key="c" href="/screen-color-test" className={link}>Test colori schermo</Link>],
            ['Forme sbiadite di vecchie immagini', 'Burn-in o ritenzione d’immagine', <Link key="b" href="/screen-burn-in-test" className={link}>Test burn-in schermo</Link>],
            ['Puntini che si spostano quando pulisci', 'Polvere o aloni, non pixel', 'Pulisci lo schermo e ricontrolla'],
          ]}
        />
        <p className={p}>
          Poi passa allo <Link href="/black-screen" className={link}>schermo nero</Link>: pixel bloccati e fughe di retroilluminazione si vedono
          meglio sul nero.
        </p>
      </Section>
    </>
  )
}
