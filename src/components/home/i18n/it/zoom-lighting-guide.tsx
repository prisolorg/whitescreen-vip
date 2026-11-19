import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Luce per videochiamate (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * luce per Zoom / luce per videochiamate / schermo come luce → configurazioni per riunioni e webcam → ring light.
 * I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function ZoomLightingGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Luce per videochiamate: trasforma lo schermo in una luce">
        <p className={p}>
          Questo strumento trasforma uno schermo libero in una luce morbida e uniforme per il viso. Funziona meglio su un secondo monitor,
          un tablet o un telefono posizionato dietro la webcam, così la luce ti colpisce di fronte.
        </p>
        <ul className={ul}>
          <li>Imposta «Luminosità» al 100% per una luce bianca intensa, o abbassala per un bagliore più morbido.</li>
          <li>Scegli «Calda» (3000 K), «Neutra» (4500 K) o «Luce diurna» (6500 K).</li>
          <li>Apri «Altro» per una temperatura colore esatta, un colore della luce personalizzato o la modalità «Cornice».</li>
          <li>Tocca due volte lo schermo o premi F, così la luce per Zoom riempie tutto il display.</li>
        </ul>
      </Section>

      <Section wide id="setup-heading" title="Come impostare la luce per videochiamate e riunioni">
        <Table
          caption="Configurazioni della luce per videochiamate"
          head={['Situazione', 'Prova così']}
          rows={[
            ['Riunione di giorno vicino a una finestra', '«Luce diurna», così lo schermo si accorda con la luce del sole'],
            ['Videochiamata serale', '«Calda», al 60–80% di luminosità'],
            ['Ufficio con luci a soffitto', '«Neutra», con lo schermo luminoso appena sopra la webcam'],
            ['Ombre su un lato del viso', 'Aggiungi un secondo schermo luminoso da quel lato'],
          ]}
        />
        <p className={p}>
          La luce migliore per le videochiamate arriva da davanti: tieni le finestre luminose dietro la fotocamera, non dietro di te, e alza
          la luce circa all’altezza degli occhi. La modalità «Cornice» illumina solo i bordi dello schermo per una luce per webcam più
          delicata.
        </p>
      </Section>

      <Section wide id="ring-heading" title="Luce per videochiamate o ring light?">
        <p className={p}>
          La luce per videochiamate illumina il viso con una luce piatta e uniforme. Per il riflesso rotondo negli occhi tanto amato dai
          creator, prova il <Link href="/ring-light" className={link}>ring light online</Link>. Per una semplice luce intensa va bene anche
          lo <Link href="/" className={link}>schermo bianco</Link>.
        </p>
      </Section>
    </div>
  )
}
