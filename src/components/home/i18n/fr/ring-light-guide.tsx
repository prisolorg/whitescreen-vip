import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ring light en ligne (français). Traduit du guide anglais, avec les recherches françaises :
 * ring light en ligne / anneau lumineux → effet ring light pour selfies → maquillage → couleurs.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function RingLightGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Ring light en ligne : mode d'emploi">
        <p className={p}>
          Ce ring light en ligne dessine un anneau lumineux sur votre écran : un téléphone, une tablette ou un second écran devient un ring light
          virtuel. Placez-le devant vous, juste derrière votre caméra.
        </p>
        <ul className={ul}>
          <li>Réglez la « Luminosité » et choisissez une couleur : Blanc, Rose, Bleu ou Violet.</li>
          <li>Ouvrez « Plus » pour changer la taille et l&apos;épaisseur de l&apos;anneau, la température du blanc, « Remplir le centre » et l&apos;arrière-plan.</li>
          <li>Touchez deux fois l&apos;écran ou appuyez sur F pour que l&apos;anneau remplisse l&apos;écran.</li>
        </ul>
      </Section>

      <Section wide id="effect-heading" title="Effet ring light pour selfies, photos et vidéos">
        <p className={p}>
          L&apos;effet ring light, c&apos;est le reflet rond que l&apos;on voit dans les yeux, plus une lumière douce et homogène avec peu
          d&apos;ombres. Pour l&apos;obtenir :
        </p>
        <ul className={ul}>
          <li>Tenez l&apos;écran bien en face de votre visage, avec la caméra au milieu de l&apos;anneau.</li>
          <li>Laissez « Remplir le centre » désactivé pour que la forme de l&apos;anneau se reflète dans vos yeux.</li>
          <li>Utilisez un anneau plus grand et plus épais pour des selfies plus lumineux.</li>
        </ul>
      </Section>

      <Section wide id="makeup-heading" title="Ring light pour le maquillage et le miroir">
        <p className={p}>
          Une lumière blanche à pleine luminosité restitue les vraies couleurs, ce qui en fait une lumière pratique pour le maquillage. Posez
          l&apos;écran à côté de votre miroir, à hauteur des yeux, pour éclairer votre visage uniformément de face. Il éclaire votre visage ;
          il n&apos;affiche pas de miroir caméra.
        </p>
      </Section>

      <Section wide id="colors-heading" title="Couleurs du ring light : blanc, rose, bleu et violet">
        <Table
          caption="Couleurs du ring light et quand les utiliser"
          head={['Couleur', 'Idéal pour']}
          rows={[
            ['Blanc', 'Maquillage, appels vidéo et photos naturelles ; réglez la chaleur dans « Plus »'],
            ['Rose', 'Des selfies doux et flatteurs'],
            ['Bleu', 'Des photos et streams froids et atmosphériques'],
            ['Violet', 'Éclairage de fête et créatif'],
          ]}
        />
        <p className={p}>
          Besoin d&apos;une lumière plate plutôt qu&apos;un anneau ? Essayez la{' '}
          <Link href="/zoom-lighting" className={link}>lumière pour visioconférence</Link> ou le simple{' '}
          <Link href="/" className={link}>écran blanc</Link>.
        </p>
      </Section>
    </div>
  )
}
