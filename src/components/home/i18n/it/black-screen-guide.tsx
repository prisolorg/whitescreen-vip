import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schermo nero (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * schermo nero a schermo intero → immagine schermo nero → nero puro → schermo vuoto e pagina nera →
 * secondo monitor → test con lo schermo nero. I pulsanti hanno i nomi dell'interfaccia italiana.
 */
export function BlackScreenGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="howto-heading" title="Come avere uno schermo nero a schermo intero">
        <ul className={ul}>
          <li>Tocca due volte l’anteprima o premi F per uno schermo nero uniforme, da bordo a bordo.</li>
          <li>Sul telefono, tocca l’icona dello schermo intero nell’angolo dell’anteprima.</li>
          <li>Attiva «Mantieni lo schermo acceso», così il display non si oscura e non va in standby.</li>
          <li>Premi Esc o tocca di nuovo due volte per uscire. Il cursore si nasconde da solo mentre resti fermo.</li>
        </ul>
      </Section>

      <Section wide id="image-heading" title="Immagine schermo nero: scarica una foto o un PNG nero">
        <p className={p}>
          Ti serve un’immagine dello schermo nero invece dello schermo dal vivo? Usa «Scarica» sotto l’anteprima per salvare un PNG nero puro
          (#000000) esattamente della dimensione che ti serve. È un file senza perdita, quindi il nero resta pieno, senza rumore di
          compressione.
        </p>
        <Table
          caption="Dimensioni dell’immagine schermo nero che puoi scaricare"
          head={['Dimensione', 'Pixel', 'Ideale per']}
          rows={[
            ['Full HD 1080p', '1920 × 1080', 'Video YouTube, slide, la maggior parte dei monitor'],
            ['QHD 1440p', '2560 × 1440', 'Monitor da gaming e portatili'],
            ['4K UHD', '3840 × 2160', 'Timeline video 4K e TV'],
            ['8K UHD', '7680 × 4320', 'Progetti 8K e schermi molto grandi'],
            ['iPhone / Android', '1179 × 2556 / 1080 × 2400', 'Sfondo del telefono, schermata home e di blocco'],
            ['iPad', '2048 × 2732', 'Sfondo del tablet'],
            ['Dimensione personalizzata', 'Qualsiasi dimensione, ad es. 1080 × 1920', 'Video verticali per Storie, Reel e Shorts'],
          ]}
        />
        <h3 className={h3}>Schermo nero per video e montaggio</h3>
        <p className={p}>
          Trascina il PNG 1080p o 4K in qualsiasi programma di montaggio e allungalo per la durata che ti serve. Funziona come fotogramma nero
          per intro, dissolvenze e pause tra le clip, e ti evita di renderizzare una clip separata.
        </p>
        <p className={p}>
          Vuoi neri più profondi o con texture? Sfoglia la raccolta di{' '}
          <Link href="/backgrounds/black-background" className={link}>
            sfondi neri
          </Link>
          .
        </p>
      </Section>

      <Section wide id="pure-heading" title="Schermo nero puro, nero assoluto (#000000)">
        <p className={p}>
          Questa pagina mostra il nero puro, RGB 0, 0, 0, il valore più scuro che si può chiedere a un display. Quanto appare nero davvero
          dipende dal pannello.
        </p>
        <Table
          caption="Come appare uno schermo nero puro su ogni tipo di display"
          head={['Display', 'Cosa vedi', 'Perché']}
          rows={[
            ['OLED / AMOLED', 'Nero assoluto, senza bagliore', 'Ogni pixel produce la propria luce e si spegne sul nero'],
            ['Mini-LED', 'Nero molto profondo', 'Le zone di local dimming abbassano la retroilluminazione'],
            ['LCD (IPS, VA, TN)', 'Grigio molto scuro in una stanza buia', 'La retroilluminazione resta accesa dietro il pannello'],
          ]}
        />
        <p className={p}>
          Non sai quale hai? <Link href="/glossary/oled-vs-lcd" className={link}>OLED o LCD</Link> spiega la differenza.
        </p>
      </Section>

      <Section wide id="blank-heading" title="Schermo nero come schermo vuoto: nascondi il display">
        <p className={p}>
          Uno schermo nero vuoto nasconde tutto ciò che c’è sul display senza spegnerlo, così app, download e chiamate continuano a funzionare.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Presentazioni e proiettori:</strong> oscura lo schermo tra una slide e l’altra o mentre
            qualcuno parla.
          </li>
          <li>
            <strong className="text-foreground">Privacy:</strong> copri il tuo lavoro con un tocco quando ti allontani.
          </li>
          <li>
            <strong className="text-foreground">Concentrazione:</strong> spegni la distrazione di un secondo monitor.
          </li>
        </ul>
        <h3 className={h3}>Sito con schermo nero: una pagina nera nel browser</h3>
        <p className={p}>
          Salva nei preferiti questo sito con lo schermo nero per aprire una pagina nera ogni volta che ti serve. Non si carica nient’altro, non
          serve registrarsi e puoi trascinare la finestra su qualsiasi monitor prima di passare a schermo intero.
        </p>
      </Section>

      <Section wide id="dark-heading" title="Schermo nero per un secondo monitor: oscurare e fare buio">
        <p className={p}>
          Guardi un film o giochi su uno schermo? Metti uno schermo scuro sull’altro, così smette di illuminare la stanza. Sposta questa finestra
          sul secondo monitor, passa a schermo intero e attiva «Mantieni lo schermo acceso».
        </p>
        <ul className={ul}>
          <li>Funziona come schermo oscurante o salvaschermo nero senza cambiare le impostazioni di risparmio energetico.</li>
          <li>Sugli OLED i pixel neri sono spenti, quindi il nero puro non consuma il pannello come un’immagine chiara fissa.</li>
          <li>Sugli LCD abbassa anche la luminosità del monitor per il risultato più scuro.</li>
        </ul>
      </Section>

      <Section wide id="check-heading" title="Test con lo schermo nero: fughe di luce, bagliore e pixel bloccati">
        <p className={p}>
          In una stanza buia, uno schermo nero pieno rende facili da notare alcuni difetti comuni. Per pixel morti e polvere, controlla anche lo{' '}
          <Link href="/" className={link}>schermo bianco</Link>:
        </p>
        <Table
          caption="Problemi del display che uno schermo nero rivela"
          head={['Cosa vedi', 'Che cos’è', 'Approfondisci']}
          rows={[
            ['Luce che filtra dai bordi', 'Fuga di retroilluminazione', <Link key="b" href="/screen-problems/backlight-bleed" className={link}>Backlight bleed</Link>],
            ['Bagliore che cambia quando ti muovi', 'IPS glow', <Link key="g" href="/screen-problems/ips-glow" className={link}>IPS glow</Link>],
            ['Un puntino che resta acceso', 'Pixel bloccato o caldo', <Link key="d" href="/dead-pixel-test" className={link}>Test pixel bruciati</Link>],
            ['Bande o dominanti sui quasi neri', 'Uniformità OLED', <Link key="o" href="/oled-gray-test" className={link}>Test grigi per OLED</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
