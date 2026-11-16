import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test d'écran tactile (français). Traduit du guide anglais, avec les recherches françaises :
 * test écran tactile / tester écran tactile → touches fantômes et multitouch → iPhone, Android, Samsung → étapes suivantes.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function TouchScreenGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="modes-heading" title="Test d'écran tactile : trois façons de vérifier">
        <Table
          caption="Modes du test d'écran tactile"
          head={['Mode', 'Ce qu’il vérifie', 'Comment']}
          rows={[
            ['Grille des zones mortes', 'Les zones qui ignorent vos touchers', 'Balayez chaque case jusqu’à ce que « Couvert » indique 100 % ; les cases qui restent sombres sont des zones mortes'],
            ['Dessiner', 'Un suivi fluide et sans trou', 'Tracez des lignes lentes sur l’écran ; les coupures ou les sauts révèlent les zones faibles'],
            ['Multitouch', 'Le nombre de doigts détectés', 'Posez plusieurs doigts ; « Contacts » et « Max. » affichent le nombre'],
          ]}
        />
        <p className={p}>
          Appuyez sur « Effacer » pour recommencer, et appuyez sur F ou touchez « Plein écran » pour que le test d&apos;écran tactile couvre
          aussi les bords de l&apos;écran.
        </p>
      </Section>

      <Section wide id="ghost-heading" title="Test d'écran tactile : touches fantômes et multitouch">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Touches fantômes :</strong> ouvrez « Dessiner », puis posez le téléphone sans le toucher. Les
            lignes ou points qui apparaissent tout seuls sont des touches fantômes.
          </li>
          <li>
            <strong className="text-foreground">Multitouch :</strong> la plupart des téléphones détectent 5 à 10 doigts à la fois. Le badge
            indique combien de points de contact votre appareil signale.
          </li>
          <li>
            <strong className="text-foreground">Sensibilité :</strong> des balayages légers et rapides dans « Dessiner » montrent si les
            touchers doux sont pris en compte.
          </li>
        </ul>
      </Section>

      <Section wide id="phone-heading" title="Test d'écran tactile sur iPhone, Android et Samsung">
        <p className={p}>
          Le test d&apos;écran tactile fonctionne dans Safari, Chrome ou tout navigateur de téléphone, sans rien installer. Retirez une coque
          épaisse ou un verre trempé si les touchers semblent manqués près des bords, puis testez à nouveau.
        </p>
        <p className={p}>
          Sur beaucoup de téléphones Samsung Galaxy, vous pouvez aussi composer *#0*#, un code de test d&apos;écran tactile qui ouvre un menu de
          test intégré. Ces codes dépendent de la marque et du modèle, et certains téléphones n&apos;en ont pas.
        </p>
      </Section>

      <Section wide id="next-heading" title="Après le test d'écran tactile">
        <p className={p}>
          Si le tactile fonctionne mais pas l&apos;image, vérifiez l&apos;écran lui-même : lancez le{' '}
          <Link href="/dead-pixel-test" className={link}>test de pixels morts</Link> pour les points ou la{' '}
          <Link href="/monitor-test" className={link}>mire de test pour moniteur</Link> pour les couleurs et l&apos;uniformité.
        </p>
      </Section>
    </div>
  )
}
