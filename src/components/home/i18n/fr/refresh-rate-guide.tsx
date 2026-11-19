import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test de fréquence de rafraîchissement (français). Traduit du guide anglais, avec les recherches françaises :
 * test fréquence de rafraîchissement / test Hz écran → réglages d'affichage → résultats 60, 120, 144 Hz → test de FPS.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function RefreshRateGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test de fréquence de rafraîchissement : comment ça marche">
        <p className={p}>
          Les navigateurs dessinent une nouvelle image à chaque rafraîchissement de l&apos;écran : mesurer ces images révèle donc votre
          fréquence de rafraîchissement. Ce test Hz démarre tout seul et affiche :
        </p>
        <ul className={ul}>
          <li>Votre fréquence en Hz, arrondie à la valeur courante la plus proche (60, 120, 144 Hz, etc.).</li>
          <li>La durée de chaque image en millisecondes et la part d&apos;images en retard.</li>
          <li>Les fréquences minimale et maximale observées, plus un bloc mobile qui paraît plus fluide à haute fréquence.</li>
        </ul>
        <p className={p}>
          Il permet de vérifier la fréquence d&apos;un moniteur, d&apos;un PC portable ou d&apos;un téléphone. Appuyez sur « Mesurer à nouveau »
          après avoir changé un réglage, et touchez deux fois pour passer en plein écran sur l&apos;écran à tester.
        </p>
      </Section>

      <Section wide id="check-heading" title="Test de fréquence de rafraîchissement et réglages d'affichage">
        <p className={p}>
          Le test montre la fréquence à laquelle votre écran fonctionne en ce moment. Pour voir ou changer le réglage de fréquence de votre
          moniteur :
        </p>
        <Table
          caption="Où trouver le réglage de fréquence de rafraîchissement"
          head={['Appareil', 'Où regarder']}
          rows={[
            ['Windows 11 / 10', 'Paramètres → Système → Écran → Affichage avancé → Choisir une fréquence d’actualisation'],
            ['Mac', 'Réglages Système → Moniteurs → Fréquence de rafraîchissement'],
            ['iPhone / iPad', 'Fixée par le modèle ; les modèles ProMotion montent automatiquement jusqu’à 120 Hz'],
            ['Android', 'Paramètres → Affichage → Fréquence d’actualisation (ou Fluidité des animations)'],
          ]}
        />
        <h3 className={h3}>Pourquoi le résultat peut être plus bas que prévu</h3>
        <ul className={ul}>
          <li>L&apos;écran est réglé sur 60 Hz dans les paramètres, ou le câble ou le port ne supporte pas la fréquence supérieure.</li>
          <li>Un PC portable sur batterie ou un téléphone en mode économie d&apos;énergie baisse la fréquence pour économiser l&apos;énergie.</li>
          <li>Des onglets ou applications gourmands font sauter des images au navigateur. Fermez-les et mesurez à nouveau.</li>
        </ul>
      </Section>

      <Section wide id="rates-heading" title="Résultats du test de fréquence de rafraîchissement : 60, 120 et 144 Hz">
        <Table
          caption="Fréquences de rafraîchissement courantes"
          head={['Fréquence', 'Temps par image', 'Écrans typiques']}
          rows={[
            ['60 Hz', '16,7 ms', 'La plupart des moniteurs de bureau, anciens PC portables et TV'],
            ['90 Hz', '11,1 ms', 'Beaucoup de téléphones milieu de gamme'],
            ['120 Hz', '8,3 ms', 'Téléphones gaming, iPhone Pro, TV et PC portables récents'],
            ['144 Hz', '6,9 ms', 'Moniteurs gaming'],
            ['240 Hz', '4,2 ms', 'Moniteurs e-sport'],
          ]}
        />
      </Section>

      <Section wide id="fps-heading" title="Test de fréquence de rafraîchissement ou test de FPS ?">
        <p className={p}>
          La fréquence de rafraîchissement (Hz), c&apos;est le nombre de fois où l&apos;écran se redessine ; la fréquence d&apos;images (FPS),
          c&apos;est le nombre d&apos;images que produit votre navigateur ou votre jeu. Pour vérifier le mouvement et les FPS, lancez le{' '}
          <Link href="/frame-rate-test" className={link}>test de FPS</Link>, et pour le flou et les traînées, essayez le{' '}
          <Link href="/monitor-ghosting-test" className={link}>test de ghosting d&apos;écran</Link>.
        </p>
      </Section>
    </div>
  )
}
