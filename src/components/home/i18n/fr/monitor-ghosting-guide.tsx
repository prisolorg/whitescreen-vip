import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test de ghosting d'écran (français). Traduit du guide anglais, avec les recherches françaises :
 * test ghosting écran / test ghosting moniteur → résultats et traînées → corriger le ghosting → PC portable, TV.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function MonitorGhostingGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test de ghosting d'écran : comment le lancer">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Réglez votre moniteur sur sa fréquence de rafraîchissement maximale, puis touchez deux fois le test de ghosting pour le plein écran.</li>
          <li>Regardez la cible traverser les bandes sombre, gris moyen et claire. Suivez-la des yeux, ne fixez pas un seul point.</li>
          <li>Augmentez la « Vitesse » (240 à 2 400 px/s) jusqu&apos;à voir des traînées, et appuyez sur « Pause » pour examiner une image figée.</li>
          <li>Changez le réglage d&apos;overdrive de votre moniteur et relancez le test pour comparer.</li>
        </ol>
        <p className={p}>
          Dans le test de ghosting d&apos;écran, la grille de référence verticale (dans « Plus ») aide à juger la longueur d&apos;une traînée.
          Chaque bande a un fond différent, car le ghosting est souvent pire sur le sombre ou le gris moyen.
        </p>
      </Section>

      <Section wide id="results-heading" title="Résultats du test de ghosting d'écran : ce que signifient les traînées">
        <p className={p}>
          Qu&apos;est-ce que le ghosting sur un écran ? Des pixels qui changent de couleur trop lentement laissent une copie pâle derrière tout
          ce qui bouge. Voici comment lire le test de ghosting d&apos;écran :
        </p>
        <Table
          caption="Ghosting, traînées sombres et overshoot"
          head={['Ce que vous voyez derrière la cible', 'Ce que c’est', 'Cause habituelle']}
          rows={[
            ['Une copie ou traînée pâle et plus sombre', 'Ghosting', 'Temps de réponse lent, overdrive désactivé ou trop faible'],
            ['Une traînée sombre, pire sur la bande sombre', 'Black smearing', 'Dalles VA, transitions lentes du sombre au clair'],
            ['Un halo clair ou inversé', 'Overshoot (ghosting inverse)', 'Overdrive réglé trop haut'],
            ['Un bord doux et flou, sans copie', 'Flou de mouvement', 'Normal à 60 Hz ; moindre à plus haute fréquence'],
          ]}
        />
      </Section>

      <Section wide id="fix-heading" title="Corriger ce que montre le test de ghosting d'écran">
        <p className={p}>Un écran qui fait du ghosting a rarement besoin d&apos;une réparation ; les bons réglages raccourcissent généralement les traînées.</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Overdrive :</strong> aussi appelé Response Time, Trace Free ou OD dans le menu du moniteur.
            Choisissez le réglage avec la traînée la plus courte et sans halo clair, généralement celui du milieu.
          </li>
          <li>
            <strong className="text-foreground">Fréquence de rafraîchissement :</strong> vérifiez qu&apos;elle est au maximum avec le{' '}
            <Link href="/screen-refresh-rate-test" className={link}>test de fréquence de rafraîchissement</Link>. Plus de Hz, c&apos;est moins
            de flou.
          </li>
          <li>
            <strong className="text-foreground">Câble et port :</strong> utilisez le DisplayPort ou un câble qui prend en charge la fréquence
            maximale de votre moniteur.
          </li>
          <li>
            <strong className="text-foreground">Modes d&apos;image :</strong> un traitement supplémentaire comme la réduction du bruit peut
            ajouter des traînées ; désactivez-le.
          </li>
        </ul>
      </Section>

      <Section wide id="screen-heading" title="Test de ghosting d'écran sur un PC portable, une TV ou un autre écran">
        <p className={p}>
          Le ghosting est le même sur tout écran LCD ou OLED : ouvrez le test de ghosting d&apos;écran sur le PC portable, la TV ou la tablette
          à vérifier et lancez-le en plein écran. Les TV ont souvent un mode jeu qui réduit le traitement et le ghosting.
        </p>
        <p className={p}>
          Un « écran fantôme » peut aussi désigner une image pâle qui reste à l&apos;écran quand rien ne bouge. C&apos;est de la rémanence ou
          du marquage, pas du ghosting de mouvement ; vérifiez-le avec le{' '}
          <Link href="/screen-burn-in-test" className={link}>test de marquage d&apos;écran</Link>. Plus de détails dans le{' '}
          <Link href="/screen-problems/ghosting" className={link}>guide du ghosting</Link>.
        </p>
      </Section>
    </div>
  )
}
