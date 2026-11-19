import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ring light online (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * ring light online / luce ad anello virtuale → effetto ring light per selfie → luce per il trucco → colori.
 * I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function RingLightGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Ring light online: come si usa">
        <p className={p}>
          Questo ring light online disegna un anello luminoso sullo schermo, così un telefono, un tablet o un secondo monitor diventa una luce
          ad anello virtuale. Mettilo davanti a te, appena dietro la fotocamera.
        </p>
        <ul className={ul}>
          <li>Imposta la «Luminosità» e scegli un colore: «Bianco», «Rosa», «Blu» o «Viola».</li>
          <li>Apri «Altro» per cambiare dimensione e spessore dell’anello, la temperatura colore del bianco, «Riempi il centro» e lo sfondo.</li>
          <li>Tocca due volte lo schermo o premi F per riempire il display con l’anello.</li>
        </ul>
      </Section>

      <Section wide id="effect-heading" title="Effetto ring light online per selfie, foto e video">
        <p className={p}>
          L’effetto ring light è il riflesso rotondo che vedi negli occhi delle persone, insieme a una luce morbida e uniforme con poche ombre.
          Per ottenerlo:
        </p>
        <ul className={ul}>
          <li>Tieni lo schermo dritto davanti al viso, con la fotocamera al centro dell’anello.</li>
          <li>Lascia disattivato «Riempi il centro», così la forma dell’anello appare come riflesso negli occhi.</li>
          <li>Usa un anello più grande e più spesso per selfie più luminosi.</li>
        </ul>
      </Section>

      <Section wide id="makeup-heading" title="Ring light online per il trucco e lo specchio">
        <p className={p}>
          La luce bianca alla massima luminosità mostra i colori reali, ed è quindi una comoda luce per il trucco. Appoggia lo schermo accanto
          allo specchio all’altezza degli occhi, così il viso è illuminato in modo uniforme da davanti. Illumina il viso; non mostra
          l’immagine della fotocamera come uno specchio.
        </p>
      </Section>

      <Section wide id="colors-heading" title="Colori del ring light online: bianco, rosa, blu e viola">
        <Table
          caption="Colori del ring light e quando usarli"
          head={['Colore', 'Ideale per']}
          rows={[
            ['Bianco', 'Trucco, videochiamate e foto dall’aspetto naturale; regola il calore in «Altro»'],
            ['Rosa', 'Selfie morbidi e lusinghieri'],
            ['Blu', 'Foto e stream freddi e suggestivi'],
            ['Viola', 'Luci per feste e creative'],
          ]}
        />
        <p className={p}>
          Ti serve una luce piatta invece di un anello? Prova la <Link href="/zoom-lighting" className={link}>luce per videochiamate</Link> o il
          semplice <Link href="/" className={link}>schermo bianco</Link>.
        </p>
      </Section>
    </div>
  )
}
