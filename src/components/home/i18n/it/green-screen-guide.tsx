import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schermo verde (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * colore green screen → computer, portatile o telefono come schermo verde → video, YouTube e montaggio →
 * controllo dei sottopixel e dell'uniformità. I pulsanti hanno i nomi dell'interfaccia italiana.
 */
export function GreenScreenGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="color-heading" title="Colore dello schermo verde: quale verde funziona meglio?">
        <p className={p}>
          Questa pagina mostra il verde puro, #00FF00 (RGB 0, 255, 0). I software di chroma key rimuovono qualsiasi verde uniforme e saturo,
          ma un verde molto brillante può riflettersi sul soggetto. Usa il cursore «Luminosità» per ottenere la tonalità che ti serve e
          lascia il tono su «Neutro».
        </p>
        <Table
          caption="Colori del green screen e come ottenerli in questa pagina"
          head={['Tonalità', 'Hex', 'Come ottenerla', 'Ideale per']}
          rows={[
            ['Verde brillante', '#00FF00', 'Luminosità 100%', 'Test dei pixel, lo sfondo più vivido'],
            ['Verde chroma key', '#00B300 (vicino allo standard #00B140)', 'Luminosità 70%', 'Chroma key nei video con meno riflessi di colore'],
            ['Verde scuro', '#008000', 'Luminosità 50%', 'Uno sfondo più morbido in stanze poco illuminate'],
          ]}
        />
        <p className={p}>
          Cerchi verde chiaro o tonalità pastello? Sfoglia la raccolta di{' '}
          <Link href="/backgrounds/green-background" className={link}>sfondi verdi</Link>.
        </p>
      </Section>

      <Section wide id="computer-heading" title="Schermo verde sul computer: portatile, monitor o telefono">
        <p className={p}>
          Uno schermo verde sul computer è uno sfondo rapido per inquadrature piccole: prodotti, mani, giocattoli e primi piani.
        </p>
        <ul className={ul}>
          <li>Apri questa pagina su un monitor, portatile, tablet o telefono e tocca due volte per lo schermo intero.</li>
          <li>Attiva «Mantieni lo schermo acceso», così il verde non si spegne a metà ripresa.</li>
          <li>Imposta la «Luminosità» intorno al 70% per un verde uniforme senza punti troppo luminosi.</li>
          <li>Tieni il soggetto 20–30 cm davanti allo schermo, così la luce verde non si riflette su di esso.</li>
          <li>Riprendi di fronte. L’angolo di visione può far sembrare lo schermo più scuro ai bordi.</li>
        </ul>
        <p className={p}>
          Uno schermo è troppo piccolo per stare dietro a una persona. Per riprese a figura intera o con la webcam sul viso, appendi un telo
          verde dietro di te o aggiungi uno sfondo verde nel programma di montaggio.
        </p>
      </Section>

      <Section wide id="video-heading" title="Schermo verde per YouTube, video e montaggio">
        <p className={p}>
          Ti serve un green screen online per il montaggio invece che su un display? Usa «Scarica» sotto l’anteprima per salvare un PNG verde in
          1080p, 4K, formato telefono o qualsiasi dimensione personalizzata, poi trascinalo nella timeline.
        </p>
        <Table
          caption="Dove rimuovere lo schermo verde"
          head={['Software', 'Strumento da usare']}
          rows={[
            ['OBS Studio', 'Filtro Chroma Key sulla sorgente della videocamera'],
            ['CapCut', 'Rimuovi sfondo → Chroma key'],
            ['Premiere Pro', 'Effetto Ultra Key'],
            ['DaVinci Resolve', '3D Keyer o Delta Keyer'],
          ]}
        />
        <h3 className={h3}>Sfondi da schermo verde per Zoom e Teams</h3>
        <p className={p}>
          Zoom e Teams offrono un effetto green screen virtuale, ma un vero telo verde dietro di te dà bordi più puliti. Per immagini pronte per
          il chroma key, guarda la raccolta di{' '}
          <Link href="/backgrounds/green-screen-background" className={link}>sfondi green screen</Link>.{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma key</Link> spiega come funziona la scontornatura.
        </p>
      </Section>

      <Section wide id="check-heading" title="Test con lo schermo verde: sottopixel e uniformità">
        <p className={p}>
          Il verde porta gran parte della luminosità che percepiamo, quindi angoli più scuri o macchie nuvolose risaltano. Un puntino scuro è un
          sottopixel verde morto, mentre un puntino giallo o ciano indica un sottopixel rosso o blu bloccato acceso. Fai il{' '}
          <Link href="/gray-screen" className={link}>test uniformità schermo</Link> o leggi la{' '}
          <Link href="/screen-problems/stuck-pixel" className={link}>guida ai pixel bloccati</Link> per i passi successivi. Un puntino nero che
          si vede anche sullo <Link href="/" className={link}>schermo bianco</Link> è un pixel completamente morto.
        </p>
      </Section>
    </div>
  )
}
