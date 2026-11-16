import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Effet écran cassé (français). Traduit du guide anglais, avec les recherches françaises :
 * écran cassé / écran fissuré / écran brisé → ordinateur, PC portable, Chromebook, téléphone → blague écran cassé →
 * image et fond d'écran cassé → vrai écran cassé. Les boutons portent les noms de l'interface française de l'outil.
 */
export function BrokenScreenGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Styles d'écran cassé : fissuré, brisé ou LCD endommagé">
        <p className={p}>
          Choisissez un type de fissure sous l&apos;aperçu, puis touchez ou cliquez n&apos;importe où pour fissurer la vitre à cet endroit.
          Chaque toucher ajoute une fissure, et l&apos;écran fissuré s&apos;étend comme une vraie vitre.
        </p>
        <Table
          caption="Styles d'écran cassé et leur aspect"
          head={['Style', 'Ressemble à']}
          rows={[
            ['Toile d’araignée', 'L’écran fissuré classique : de longues fissures partant d’un seul impact'],
            ['Choc dans le coin', 'Un téléphone tombé sur un coin'],
            ['Brisé', 'Un écran brisé en mille morceaux, avec du verre écrasé partout'],
            ['Fissure fine', 'Une fissure fine et réaliste, facile à rater au premier coup d’œil'],
            ['LCD qui coule', 'Des taches noires et colorées, comme de l’encre, d’une dalle endommagée'],
            ['Lignes mortes', 'Des lignes verticales vives, comme un écran fissuré qui perd des colonnes'],
          ]}
        />
      </Section>

      <Section wide id="computer-heading" title="Blague écran cassé sur un ordinateur, un PC portable ou un Chromebook">
        <ul className={ul}>
          <li>Pour simuler un écran d&apos;ordinateur cassé, ouvrez cette page sur le PC portable, le PC, le Chromebook ou la smart TV à piéger.</li>
          <li>Choisissez « Écran éteint » ou « Fond d’écran » dans « Plus » pour que l&apos;écran cassé ressemble au vrai bureau.</li>
          <li>Appuyez sur F ou touchez « Plein écran », puis ajoutez quelques fissures là où l&apos;écran aurait pu prendre un coup.</li>
          <li>Reculez et attendez. Le curseur se cache tout seul quand personne ne bouge la souris.</li>
        </ul>
        <h3 className={h3}>Blague écran cassé sur iPhone, Android ou iPad</h3>
        <p className={p}>
          Ouvrez la page dans le navigateur du téléphone, choisissez « Écran verrouillé », touchez « Plein écran » et fissurez la vitre près
          d&apos;un coin, là où tombent souvent les vrais téléphones. Activez le bruit de verre pour un effet complet.
        </p>
      </Section>

      <Section wide id="prank-heading" title="Conseils pour une blague d'écran cassé réussie">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Faites court.</strong> Les meilleures blagues de faux écran cassé se terminent vite, par une
            révélation et un éclat de rire.
          </li>
          <li>
            <strong className="text-foreground">Choisissez la bonne personne.</strong> Évitez quiconque serait vraiment bouleversé par un
            appareil cassé.
          </li>
          <li>
            <strong className="text-foreground">Révélez vite la blague.</strong> Appuyez sur Échap ou fermez l&apos;onglet et l&apos;écran
            redevient normal. Rien ne change sur l&apos;appareil.
          </li>
        </ul>
        <p className={p}>
          Envie d&apos;une autre ? Essayez le <Link href="/hacked-screen" className={link}>simulateur d&apos;écran piraté</Link> ou le{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>faux écran bleu de la mort</Link>.
        </p>
      </Section>

      <Section wide id="image-heading" title="Image et fond d'écran cassé">
        <p className={p}>
          Vous préférez une image d&apos;écran cassé plutôt qu&apos;un effet en direct ? Fissurez la vitre comme vous voulez, puis ouvrez
          « Plus » et utilisez « Télécharger le PNG ». Mettez l&apos;image en écran verrouillé sur votre téléphone ou en fond d&apos;écran sur
          votre ordinateur pour une blague qui dure toute la journée.
        </p>
      </Section>

      <Section wide id="real-heading" title="Vrai écran cassé ? Comment vérifier les dégâts">
        <p className={p}>Vous n&apos;êtes pas là pour une blague ? Ces vérifications rapides aident à distinguer un vrai dégât d&apos;un problème logiciel :</p>
        <Table
          caption="Signes d'un écran vraiment cassé"
          head={['Ce que vous voyez', 'Vérifier avec']}
          rows={[
            ['Des fissures visibles ou sensibles au toucher, écran éteint', <Link key="w" href="/" className={link}>Écran blanc</Link>],
            ['Des taches noires ou de l’encre qui s’étend', <Link key="d" href="/dead-pixel-test" className={link}>Test de pixels morts</Link>],
            ['Des zones de l’écran qui ignorent vos touchers', <Link key="t" href="/touch-screen-test" className={link}>Test d’écran tactile</Link>],
            ['Des lignes, un scintillement ou des couleurs étranges', <Link key="s" href="/screen-problems" className={link}>Guide des problèmes d’écran</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
