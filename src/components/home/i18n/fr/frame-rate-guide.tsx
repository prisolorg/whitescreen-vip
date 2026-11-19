import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test de FPS (français). Traduit du guide anglais, avec les recherches françaises :
 * test FPS / test images par seconde → résultats → FPS ou fréquence de rafraîchissement → FPS dans les jeux.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function FrameRateGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test de FPS : comparez les fréquences d'images côte à côte">
        <p className={p}>
          Ce test de FPS, ou test d&apos;images par seconde, fait avancer le même bloc sur cinq bandes, chacune à une fréquence d&apos;images
          différente, pour que vous voyiez la différence par vous-même :
        </p>
        <ul className={ul}>
          <li>Des bandes à 15, 24, 30 et 60 FPS, chacune ne bougeant que sur ses propres images, comme une vidéo à cette fréquence.</li>
          <li>Une bande max qui bouge à chaque image affichée par votre écran, avec vos FPS réels.</li>
          <li>« Votre écran » indique les FPS maximum que votre écran et votre navigateur peuvent afficher, mesurés en direct.</li>
        </ul>
        <p className={p}>
          Utilisez « Vitesse » (120 à 1 800 px/s) pour accélérer le mouvement, appuyez sur « Pause » pour le figer et touchez deux fois pour le
          plein écran. Lancez ce test de FPS en ligne dans n&apos;importe quel navigateur, sans rien installer.
        </p>
      </Section>

      <Section wide id="results-heading" title="Résultats du test de FPS : à quoi ressemble chaque fréquence">
        <Table
          caption="Fréquences d'images courantes"
          head={['Fréquence d’images', 'Temps par image', 'Où on la voit']}
          rows={[
            ['15 FPS', '66,7 ms', 'Saccadé ; appels vidéo lents, anciennes webcams'],
            ['24 FPS', '41,7 ms', 'Films et la plupart des séries en streaming'],
            ['30 FPS', '33,3 ms', 'TV, YouTube, jeux sur console'],
            ['60 FPS', '16,7 ms', 'Jeux fluides et vidéos de sport'],
            ['120+ FPS', '8,3 ms ou moins', 'Moniteurs et téléphones à haute fréquence de rafraîchissement'],
          ]}
        />
        <p className={p}>
          Vérification rapide : si la bande max ne paraît pas plus fluide que celle à 60, votre écran tourne probablement à 60 Hz.
        </p>
      </Section>

      <Section wide id="hz-heading" title="Test de FPS ou test de fréquence de rafraîchissement ?">
        <p className={p}>
          La fréquence d&apos;images (FPS), c&apos;est le nombre d&apos;images dessinées chaque seconde ; la fréquence de rafraîchissement (Hz),
          c&apos;est la fréquence à laquelle votre moniteur peut en afficher une nouvelle. Un écran ne peut pas afficher plus de FPS que ses Hz,
          donc dans le test de FPS, la bande max est plafonnée par votre fréquence de rafraîchissement.
        </p>
        <p className={p}>
          Pour mesurer précisément la fréquence de rafraîchissement, avec les temps d&apos;image et les images en retard, lancez le{' '}
          <Link href="/screen-refresh-rate-test" className={link}>test de fréquence de rafraîchissement</Link>. Pour les traînées derrière les
          objets en mouvement, essayez le <Link href="/monitor-ghosting-test" className={link}>test de ghosting d&apos;écran</Link>.
        </p>
      </Section>

      <Section wide id="games-heading" title="Test de FPS pour les jeux">
        <p className={p}>
          Les outils en ligne mesurent le navigateur, pas vos jeux, et ce test de FPS ne peut pas voir à l&apos;intérieur. Pour voir les FPS en
          jeu, utilisez un overlay :
        </p>
        <ul className={ul}>
          <li>Windows : appuyez sur Win + G et ouvrez le widget Performances de la Xbox Game Bar.</li>
          <li>Steam : activez le compteur de FPS dans les paramètres En jeu de Steam.</li>
          <li>NVIDIA ou AMD : l&apos;overlay de performances dans l&apos;application du pilote graphique.</li>
        </ul>
      </Section>
    </div>
  )
}
