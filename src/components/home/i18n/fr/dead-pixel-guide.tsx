import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test de pixels morts (français). Traduit du guide anglais, avec les recherches françaises :
 * test pixel mort / tester pixels morts / test écran LCD → types de pixels défectueux → appareils → réparation.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function DeadPixelGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test de pixels morts : comment vérifier votre écran">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Nettoyez l&apos;écran pour ne pas confondre la poussière avec un pixel.</li>
          <li>Touchez deux fois ou appuyez sur F pour le plein écran, afin que chaque pixel soit testé.</li>
          <li>Touchez l&apos;écran ou utilisez les flèches pour parcourir 9 couleurs : noir, blanc, rouge, vert, bleu, cyan, magenta, jaune et gris.</li>
          <li>Examinez chaque couleur de près, d&apos;un bord à l&apos;autre. Ou appuyez sur « Défilement automatique » pour changer de couleur toutes les quelques secondes.</li>
        </ol>
        <p className={p}>
          Il sert de test de pixels et de test d&apos;écran LCD sur tout moniteur, PC portable, téléphone, tablette ou TV doté d&apos;un
          navigateur. Pour examiner une couleur plus longtemps, ouvrez l&apos;<Link href="/black-screen" className={link}>écran noir</Link> ou
          l&apos;<Link href="/" className={link}>écran blanc</Link>.
        </p>
      </Section>

      <Section wide id="types-heading" title="Résultats du test de pixels morts : mort, bloqué ou chaud ?">
        <p className={p}>
          Qu&apos;est-ce qu&apos;un pixel mort ? Un pixel qui ne s&apos;allume plus du tout. Voici comment le distinguer des autres :
        </p>
        <Table
          caption="À quoi ressemble un pixel défectueux"
          head={['Ce que vous voyez', 'Plus visible sur', 'Ce que c’est']}
          rows={[
            ['Un point noir qui ne s’allume jamais', 'Le blanc et les couleurs claires', 'Pixel mort'],
            ['Un point bloqué sur le rouge, le vert ou le bleu', 'Le noir et les autres couleurs', 'Pixel bloqué'],
            ['Un point toujours blanc', 'Le noir', 'Pixel chaud'],
            ['Des points qui bougent quand vous essuyez', 'Toutes les couleurs', 'De la poussière, pas un pixel'],
          ]}
        />
        <p className={p}>
          En savoir plus dans les guides sur le <Link href="/screen-problems/stuck-pixel" className={link}>pixel bloqué</Link> et le{' '}
          <Link href="/screen-problems/hot-pixel" className={link}>pixel chaud</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Test de pixels morts sur téléphone, PC portable, moniteur ou TV">
        <ul className={ul}>
          <li>Téléphone et iPhone : montez la luminosité, touchez l&apos;icône plein écran et faites défiler les couleurs.</li>
          <li>PC portable et moniteur : réglez l&apos;écran sur sa résolution native pour qu&apos;un pixel s&apos;affiche comme un pixel.</li>
          <li>TV : ouvrez la page dans le navigateur de la TV, ou diffusez un onglet de PC portable, et regardez de près.</li>
          <li>Appareil neuf ? Faites le test de pixels morts tout de suite, tant que vous pouvez encore le retourner.</li>
        </ul>
      </Section>

      <Section wide id="fix-heading" title="Après le test de pixels morts : peut-on les réparer ?">
        <p className={p}>
          Vous cherchez à réparer un pixel mort ? Un vrai pixel mort ne revient presque jamais, car il n&apos;est plus alimenté. Un pixel bloqué,
          parfois : des couleurs qui clignotent rapidement dessus pendant 10 à 20 minutes peuvent le réveiller. Le{' '}
          <Link href="/screen-burn-in-test" className={link}>test de marquage d&apos;écran</Link> a un correcteur à cycle de couleurs que vous
          pouvez utiliser pour cela ; évitez-le si la lumière clignotante vous gêne.
        </p>
        <p className={p}>
          Si l&apos;écran est sous garantie, consultez la politique du fabricant sur les pixels morts. Pour vérifier aussi les couleurs et
          l&apos;uniformité, lancez la <Link href="/monitor-test" className={link}>mire de test pour moniteur</Link>.
        </p>
      </Section>
    </div>
  )
}
