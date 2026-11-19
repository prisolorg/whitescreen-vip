import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test risoluzione schermo (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * qual è la risoluzione del mio schermo / risoluzione schermo → controllare la risoluzione su Windows e Mac →
 * risoluzione del telefono → risoluzioni comuni, 4K. I nomi delle letture sono quelli dell'interfaccia italiana.
 */
export function ScreenResolutionGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="read-heading" title="Test risoluzione schermo: cosa significa ogni numero">
        <p className={p}>
          Qual è la risoluzione del mio schermo? Questa pagina risponde da sola, senza pulsanti da premere. Ecco cosa mostra ogni lettura:
        </p>
        <Table
          caption="Letture del test risoluzione schermo"
          head={['Lettura', 'Cosa significa']}
          rows={[
            ['Risoluzione dello schermo', 'La dimensione dello schermo in pixel CSS, dopo il ridimensionamento dello schermo'],
            ['Pixel fisici', 'Il numero reale di pixel: risoluzione dello schermo × rapporto pixel. Di solito è la risoluzione nativa del monitor'],
            ['Area visibile del browser', 'Lo spazio all’interno della finestra del browser'],
            ['Area disponibile', 'Lo schermo meno la barra delle applicazioni o il Dock'],
            ['Rapporto pixel', 'Quanti pixel fisici formano un pixel CSS (1 = nessun ridimensionamento)'],
            ['Profondità colore', 'I bit per pixel indicati dal browser, di solito 24 bit'],
          ]}
        />
        <p className={p}>
          I valori si aggiornano in tempo reale quando ridimensioni la finestra o ruoti il telefono. Tieni lo zoom del browser al 100%, perché
          lo zoom cambia il rapporto pixel e il numero di pixel fisici.
        </p>
      </Section>

      <Section wide id="check-heading" title="Test risoluzione schermo e impostazioni dello schermo">
        <p className={p}>
          Il test risoluzione schermo legge ciò che vede il browser. Per controllare la risoluzione del monitor nelle impostazioni di sistema,
          o per cambiarla:
        </p>
        <Table
          caption="Dove trovare l’impostazione della risoluzione dello schermo"
          head={['Dispositivo', 'Dove cercare']}
          rows={[
            ['Windows 11 / 10', 'Impostazioni → Sistema → Schermo → Risoluzione dello schermo (quella indicata come Consigliata è la nativa)'],
            ['Mac', 'Impostazioni di Sistema → Monitor (un’impostazione ridimensionata può far differire i pixel fisici dalla dimensione nativa del pannello)'],
            ['iPhone / iPad', 'Fissa in base al modello; usa la lettura dei pixel fisici qui sopra'],
            ['Android', 'Impostazioni → Schermo → Risoluzione schermo (solo su alcuni telefoni)'],
          ]}
        />
        <p className={p}>
          Se il controllo della risoluzione mostra meno pixel fisici rispetto alle specifiche del monitor, lo schermo non è impostato alla
          risoluzione nativa e il testo può apparire sfocato.
        </p>
      </Section>

      <Section wide id="phone-heading" title="Test risoluzione schermo sul telefono: qual è la mia risoluzione?">
        <p className={p}>
          I telefoni indicano una risoluzione piccola, come 390 × 844, perché ingrandiscono tutto per avere testo nitido. La vera risoluzione
          del telefono è la lettura «Pixel fisici»: ad esempio, 390 × 844 con un rapporto pixel di 3 corrisponde a 1170 × 2532.
        </p>
      </Section>

      <Section wide id="common-heading" title="Test risoluzione schermo: le risoluzioni comuni, da HD a 4K">
        <Table
          caption="Risoluzioni dello schermo comuni"
          head={['Nome', 'Risoluzione', 'Schermi tipici']}
          rows={[
            ['HD', '1280 × 720', 'Portatili e TV meno recenti'],
            ['Full HD (1080p)', '1920 × 1080', 'La maggior parte dei monitor e portatili'],
            ['QHD (1440p)', '2560 × 1440', 'Monitor da gaming e da ufficio'],
            ['4K UHD', '3840 × 2160', 'Monitor e TV 4K'],
          ]}
        />
        <ul className={ul}>
          <li>Il mio monitor è 4K? Sì, se «Pixel fisici» indica 3840 × 2160 con lo zoom del browser al 100%.</li>
          <li>Un browser non può leggere la dimensione dello schermo in pollici; questa pagina mostra la dimensione solo in pixel.</li>
          <li>
            Controlla la nitidezza alla tua risoluzione con le linee sottili del{' '}
            <Link href="/monitor-test" className={link}>test calibrazione monitor</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
