import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test des couleurs d'écran (français). Traduit du guide anglais, avec les recherches françaises :
 * test couleur écran / mire de couleurs → lancer le test → moniteur, TV, téléphone → limites et décoloration.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function ScreenColorGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Mires du test des couleurs d'écran : quoi regarder">
        <p className={p}>
          Ce test de couleurs propose sept mires en plein écran, et chaque image de test vérifie quelque chose de différent :
        </p>
        <Table
          caption="Mires du test des couleurs d'écran"
          head={['Mire', 'Ce qu’elle vérifie', 'Un bon écran affiche']}
          rows={[
            ['Barres de couleur', 'Reproduction de base des couleurs', 'Huit couleurs nettes et distinctes, sans teinte parasite'],
            ['Rampes RVB', 'Dégradés et écrêtage', 'Des fondus réguliers depuis le noir, sans paliers ; l’extrémité claire ne s’aplatit pas trop tôt'],
            ['Spectre de teintes', 'Toutes les teintes intermédiaires', 'Un arc-en-ciel régulier, sans bandes ni sauts'],
            ['Paliers de saturation', 'Intensité des couleurs', 'Dix paliers du gris au rouge pur, tous différents'],
            ['Rouge, Vert, Bleu', 'Chaque couleur de sous-pixel séparément', 'Une couleur uniforme d’un bord à l’autre, sans taches sombres'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Comment lancer un test des couleurs d'écran">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Désactivez le mode nuit, les filtres de lumière bleue et la luminosité automatique, pour que les couleurs ne soient pas décalées.</li>
          <li>Touchez deux fois le test des couleurs d&apos;écran pour le plein écran, afin de ne voir que l&apos;écran de couleur.</li>
          <li>Touchez l&apos;écran, utilisez les flèches ou choisissez une mire par son nom. « Défilement automatique » les fait défiler pour vous.</li>
          <li>Regardez de face, puis de côté : sur certaines dalles, les couleurs changent selon l&apos;angle.</li>
        </ol>
        <p className={p}>
          Besoin plutôt d&apos;un écran d&apos;une seule couleur ? Ouvrez l&apos;<Link href="/" className={link}>écran blanc</Link>, l&apos;
          <Link href="/red-screen" className={link}>écran rouge</Link> ou n&apos;importe quelle page des{' '}
          <Link href="/color-screens" className={link}>écrans de couleur</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Test des couleurs d'écran sur un moniteur, une TV ou un téléphone">
        <ul className={ul}>
          <li>Moniteur : utilisez les rampes RVB comme test de couleurs, puis réglez la température de couleur ou le mode d&apos;image dans son menu.</li>
          <li>TV : ouvrez le test des couleurs d&apos;écran dans le navigateur de la TV ou diffusez un onglet de PC portable. Les modes Cinéma ou Filmmaker affichent généralement les couleurs les plus fidèles.</li>
          <li>Téléphone : montez la luminosité et comparez les modes de couleur Naturel et Intense, si votre téléphone les propose.</li>
          <li>Les fonds Rouge, Vert et Bleu servent aussi de test RVB pour repérer les sous-pixels bloqués.</li>
        </ul>
      </Section>

      <Section wide id="accuracy-heading" title="Limites du test des couleurs d'écran : justesse et décoloration">
        <p className={p}>
          Un test des couleurs d&apos;écran est une vérification à l&apos;œil : il repère les teintes parasites, le banding et les couleurs
          mortes, mais une vraie justesse des couleurs exige une sonde de calibrage matérielle ; aucun site web ne peut la mesurer. Vous
          choisissez les couleurs du texte d&apos;un site ? Utilisez le{' '}
          <Link href="/contrast-checker" className={link}>vérificateur de contraste des couleurs</Link>.
        </p>
        <Table
          caption="Ce que peut signifier un problème de couleur"
          head={['Ce que vous voyez', 'Essayez']}
          rows={[
            ['Une teinte jaune ou bleue partout', <Link key="y" href="/screen-problems/yellow-tint-on-screen" className={link}>Guide de la teinte jaune</Link>],
            ['Des paliers ou bandes dans les rampes', <Link key="b" href="/screen-problems/color-banding" className={link}>Guide du banding</Link>],
            ['Des taches ou zones inégales (décoloration de l’écran)', <Link key="u" href="/gray-screen" className={link}>Test d’uniformité d’écran</Link>],
            ['Des logos pâles ou images fantômes', <Link key="bi" href="/screen-burn-in-test" className={link}>Test de marquage d’écran</Link>],
            ['Netteté, gamma et plus (vérification complète)', <Link key="m" href="/monitor-test" className={link}>Mire de test pour moniteur</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
