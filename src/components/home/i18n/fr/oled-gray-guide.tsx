import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test gris foncé pour OLED (français). Traduit du guide anglais, avec les recherches françaises :
 * test OLED / test gris OLED / test noir OLED → résultats (mura, banding) → test de marquage → écran gris.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function OledGrayGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Test gris foncé pour OLED : comment vérifier les quasi-noirs">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Baissez la lumière de la pièce et réglez l&apos;écran à environ 50 % de luminosité.</li>
          <li>Touchez deux fois pour le plein écran, afin que le test OLED couvre toute la dalle.</li>
          <li>Parcourez les niveaux de gris foncé : 1 %, 2 %, 3 %, 5 %, 10 %, 15 % et 20 %. Touchez l&apos;écran ou utilisez les flèches.</li>
          <li>Terminez par la « Rampe quasi noire », qui montre côte à côte des gris de 0 % à 20 % en 12 paliers.</li>
        </ol>
        <p className={p}>
          Chaque image du test OLED doit paraître plate et uniforme, et chaque palier de la rampe doit être à peine différent du suivant. Ce
          test OLED sert de test de niveaux de gris sur n&apos;importe quel téléphone, TV, PC portable ou moniteur.
        </p>
      </Section>

      <Section wide id="results-heading" title="Résultats du test gris foncé pour OLED : quoi regarder">
        <Table
          caption="Défauts OLED courants dans les quasi-noirs"
          head={['Ce que vous voyez', 'Ce que c’est', 'Fréquent ?']}
          rows={[
            ['Des taches nuageuses et irrégulières sur le gris foncé', 'Mura (dalle inégale)', 'Un peu est normal à 1–5 %'],
            ['Des bandes ou teintes colorées sur la rampe', 'Banding dans les quasi-noirs', 'Varie selon la dalle et le mode d’image'],
            ['Les premiers paliers de la rampe paraissent tous noirs', 'Noirs bouchés', 'Vérifiez la luminosité et le mode d’image'],
            ['Une dominante verte ou magenta sur le gris foncé', 'Teinte dans les quasi-noirs', 'Varie selon la dalle'],
          ]}
        />
        <p className={p}>
          Jugez depuis votre distance de visionnage habituelle. Dans un test gris OLED, un léger mura sur le fond à 1 % est courant ; les
          problèmes visibles dans de vrais films ou jeux comptent davantage.
        </p>
      </Section>

      <Section wide id="burn-heading" title="Test gris foncé pour OLED ou test de marquage ?">
        <p className={p}>
          Ce test OLED vérifie les tons sombres, pas le marquage. Le marquage se voit mieux sur des fonds plus clairs comme le gris 50 %, le
          rouge et le bleu :
        </p>
        <ul className={ul}>
          <li>
            Pour vérifier le marquage d&apos;un OLED, utilisez le <Link href="/oled-burn-in-test" className={link}>test de marquage OLED</Link>.
          </li>
          <li>
            Pour vérifier, et tenter d&apos;effacer, la rémanence sur n&apos;importe quel écran, utilisez le{' '}
            <Link href="/screen-burn-in-test" className={link}>test de marquage d&apos;écran</Link>.
          </li>
        </ul>
      </Section>

      <Section wide id="gray-heading" title="Test gris foncé pour OLED ou simple écran gris ?">
        <p className={p}>
          Besoin d&apos;un écran gris uni plutôt que de niveaux de test ? Ouvrez l&apos;<Link href="/gray-screen" className={link}>écran gris</Link>,
          ou l&apos;<Link href="/black-screen" className={link}>écran noir</Link> pour voir le vrai noir OLED. Pour une vérification complète
          des couleurs, de la netteté et du gamma, lancez la <Link href="/monitor-test" className={link}>mire de test pour moniteur</Link>.
        </p>
      </Section>
    </div>
  )
}
