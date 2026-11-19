import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Lumière pour visioconférence (français). Traduit du guide anglais, avec les recherches françaises :
 * lumière pour visio / éclairage Zoom / éclairage webcam → réglages pour réunions → ring light ou écran.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function ZoomLightingGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Lumière pour visioconférence : transformez votre écran en éclairage">
        <p className={p}>
          Cet outil transforme un écran libre en lumière douce et homogène pour votre visage. Il fonctionne le mieux sur un second écran, une
          tablette ou un téléphone placé derrière votre webcam, pour que la lumière vous éclaire de face.
        </p>
        <ul className={ul}>
          <li>Réglez « Luminosité » sur 100 % pour une lumière blanche vive, ou baissez-la pour une lueur plus douce.</li>
          <li>Choisissez « Chaude » (3000 K), « Neutre » (4500 K) ou « Lumière du jour » (6500 K).</li>
          <li>Ouvrez « Plus » pour une température de couleur précise, une couleur de lumière personnalisée ou le mode « Cadre ».</li>
          <li>Touchez deux fois l&apos;écran ou appuyez sur F pour que l&apos;éclairage remplisse tout l&apos;écran.</li>
        </ul>
      </Section>

      <Section wide id="setup-heading" title="Régler la lumière pour visioconférence en réunion et en appel vidéo">
        <Table
          caption="Réglages de lumière pour visioconférence"
          head={['Situation', 'Essayez']}
          rows={[
            ['Réunion en journée près d’une fenêtre', 'Lumière du jour, pour que l’écran s’accorde au soleil'],
            ['Appel vidéo en soirée', 'Chaude, à 60–80 % de luminosité'],
            ['Bureau avec plafonniers', 'Neutre, avec l’écran lumineux juste au-dessus de la webcam'],
            ['Ombres d’un côté du visage', 'Ajoutez un second écran lumineux de ce côté'],
          ]}
        />
        <p className={p}>
          La meilleure lumière pour les appels vidéo vient de face : gardez les fenêtres lumineuses derrière la caméra, pas derrière vous, et
          placez la lumière à peu près à hauteur des yeux. Le mode « Cadre » n&apos;éclaire que les bords de l&apos;écran, pour une lumière de
          webcam plus douce.
        </p>
      </Section>

      <Section wide id="ring-heading" title="Lumière pour visioconférence ou ring light ?">
        <p className={p}>
          La lumière pour visioconférence éclaire votre visage de façon plate et homogène. Pour le reflet rond dans les yeux qu&apos;adorent les
          créateurs, essayez le <Link href="/ring-light" className={link}>ring light en ligne</Link>. Pour une simple lumière vive,
          l&apos;<Link href="/" className={link}>écran blanc</Link> fonctionne aussi.
        </p>
      </Section>
    </div>
  )
}
