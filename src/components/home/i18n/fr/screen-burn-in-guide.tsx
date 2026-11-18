import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test de marquage d'écran (français). Traduit du guide anglais, avec les recherches françaises :
 * test marquage écran / test burn-in → marquage ou rémanence → correcteur de marquage → téléphone, LCD, moniteur.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function ScreenBurnInGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test de marquage d'écran : comment vérifier votre écran">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Choisissez « Vérifier le marquage » et touchez deux fois pour le plein écran. Montez la luminosité.</li>
          <li>Commencez par « Gris 50 % », le fond où le marquage se voit le mieux, puis essayez « Gris 20 % ».</li>
          <li>
            Passez au blanc, au rouge, au vert, au bleu et au noir (un <Link href="/" className={link}>écran blanc</Link> complet aide aussi). Ou
            activez « Défilement auto (4 s) » dans « Plus » pour changer de fond toutes les 4 secondes.
          </li>
          <li>Cherchez des formes pâles qui n&apos;ont rien à faire là : une barre des tâches, un clavier, des icônes, une horloge ou un logo de chaîne.</li>
        </ol>
        <p className={p}>
          Le test de marquage d&apos;écran est plus facile quand on sait où regarder : le marquage correspond généralement à ce qui reste le
          plus longtemps à l&apos;écran.
        </p>
      </Section>

      <Section wide id="results-heading" title="Résultats du test de marquage d'écran : marquage ou rémanence ?">
        <p className={p}>
          Qu&apos;est-ce que le marquage d&apos;écran ? Une image incrustée dans l&apos;écran après avoir affiché la même image pendant
          longtemps. Le test de marquage d&apos;écran montre les deux types, et le temps permet de les distinguer :
        </p>
        <Table
          caption="Marquage ou rémanence d'image"
          head={['', 'Rémanence d’image', 'Marquage']}
          rows={[
            ['Ce que c’est', 'Une image fantôme qui reste un moment', 'Des pixels usés de façon inégale, définitivement'],
            ['Combien de temps', 'S’efface en quelques minutes ou heures', 'Ne s’efface pas'],
            ['Fréquent sur', 'Moniteurs LCD, TV, PC portables', 'Téléphones, TV et moniteurs OLED et AMOLED'],
            ['Le correcteur peut-il aider ?', 'Souvent, oui', 'Non ; il peut seulement le rendre moins visible'],
          ]}
        />
        <p className={p}>
          En savoir plus dans les guides sur le <Link href="/screen-problems/screen-burn-in" className={link}>marquage d&apos;écran</Link> et la{' '}
          <Link href="/screen-problems/image-retention" className={link}>rémanence d&apos;image</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Correcteur du test de marquage d'écran : peut-on réparer le marquage ?">
        <p className={p}>
          Choisissez « Correcteur de marquage », appuyez sur « Lancer le correcteur » et laissez l&apos;écran tourner. Dans « Plus », vous
          pouvez choisir le motif et le faire tourner de 1 à 60 minutes (10 par défaut) :
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Balayage blanc :</strong> une barre blanche mobile, sans clignotement.</li>
          <li><strong className="text-foreground">Cycle de couleurs :</strong> des couleurs plein écran qui changent rapidement.</li>
          <li><strong className="text-foreground">Bruit coloré :</strong> des pixels colorés aléatoires.</li>
        </ul>
        <p className={p}>
          « Cycle de couleurs » et « Bruit coloré » clignotent ; utilisez « Balayage blanc » si la lumière clignotante vous gêne. Ensuite,
          relancez le test de marquage d&apos;écran. Si l&apos;image est toujours là après plusieurs passages, il s&apos;agit probablement
          d&apos;un marquage permanent. Pour l&apos;éviter, baissez la luminosité, masquez les barres fixes et utilisez une mise en veille
          automatique de l&apos;écran.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Test de marquage d'écran sur un téléphone, un LCD ou un moniteur">
        <ul className={ul}>
          <li>
            Téléphone et iPhone : le marquage d&apos;un téléphone apparaît sous forme de contour du clavier ou de la barre d&apos;état. Ouvrez le
            test de marquage d&apos;écran dans votre navigateur et vérifiez les fonds gris à pleine luminosité.
          </li>
          <li>
            Moniteurs LCD et PC portables : un vrai marquage LCD est rare ; un test de marquage sur LCD trouve généralement une rémanence que le
            correcteur peut effacer.
          </li>
          <li>
            Les écrans OLED et AMOLED s&apos;usent le plus vite. Pour eux, utilisez le{' '}
            <Link href="/oled-burn-in-test" className={link}>test de marquage OLED</Link>.
          </li>
        </ul>
        <p className={p}>
          Vous voyez des points plutôt que des formes ? Essayez le <Link href="/dead-pixel-test" className={link}>test de pixels morts</Link>,
          ou le <Link href="/gray-screen" className={link}>test d&apos;uniformité d&apos;écran</Link> pour les taches et une luminosité
          inégale.
        </p>
      </Section>
    </div>
  )
}
