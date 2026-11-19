import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran de veille DVD (français). Traduit du guide anglais, avec les recherches françaises :
 * écran de veille DVD / logo DVD qui rebondit → easter egg Google → TV, stream, second écran →
 * logo DVD et GIF → coin et jeu DVD. Les boutons portent les noms de l'interface française de l'outil.
 */
export function DvdScreensaverGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="bounce-heading" title="Écran de veille DVD : le logo DVD qui rebondit">
        <p className={p}>
          L&apos;écran de veille DVD, c&apos;est le logo DVD qui rebondit sur les anciens lecteurs DVD laissés au repos. Le logo glisse en
          diagonale à vitesse constante et change de couleur chaque fois qu&apos;il touche un bord, en passant par 10 couleurs sans jamais
          répéter la précédente.
        </p>
        <ul className={ul}>
          <li>Touchez deux fois l&apos;écran ou appuyez sur F pour le lancer en plein écran.</li>
          <li>Ouvrez « Plus » pour changer la vitesse et la taille du logo.</li>
          <li>Les compteurs enregistrent chaque rebond et chaque coin touché pile.</li>
          <li>Utilisez « Pause » pour figer le logo, puis « Reprendre » pour continuer.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="L'easter egg Google de l'écran de veille DVD">
        <p className={p}>
          En cherchant « DVD screensaver » sur Google, le logo Google s&apos;est parfois transformé en logo façon DVD qui rebondit sur la page
          de résultats. Ce genre d&apos;easter egg va et vient, et il ne s&apos;affiche pas en plein écran.
        </p>
        <p className={p}>
          Cette page vous offre le même logo qui rebondit à tout moment, dans n&apos;importe quel navigateur, avec le plein écran, un compteur
          de coins et des réglages de vitesse et de taille.
        </p>
      </Section>

      <Section wide id="tv-heading" title="Écran de veille DVD sur une TV, un stream ou un second écran">
        <Table
          caption="Où utiliser l'écran de veille DVD"
          head={['Usage', 'Comment']}
          rows={[
            ['Smart TV', 'Ouvrez cette page dans le navigateur de la TV ou diffusez un onglet, puis passez en plein écran'],
            ['Pause de stream ou écran BRB', 'Ajoutez cette fenêtre comme capture de fenêtre dans OBS pendant votre absence'],
            ['Second écran', 'Faites glisser la fenêtre sur l’écran inutilisé et passez en plein écran'],
            ['Salle d’attente ou bureau', 'Laissez-le tourner sur un écran libre pour une touche de nostalgie'],
          ]}
        />
      </Section>

      <Section wide id="logo-heading" title="Logo et GIF de l'écran de veille DVD">
        <p className={p}>
          Le logo est dessiné en direct dans votre navigateur : un « DVD » en gras au-dessus d&apos;un disque où « VIDEO » est découpé, recoloré
          à chaque rebond. Le logo officiel DVD Video est une marque de DVD Format/Logo Licensing Corporation, il n&apos;est donc pas proposé
          en téléchargement PNG.
        </p>
        <h3 className={h3}>Créer un GIF de l&apos;écran de veille DVD</h3>
        <p className={p}>
          Lancez l&apos;écran de veille en plein écran et enregistrez votre écran avec l&apos;outil intégré (Outil Capture d&apos;écran de
          Windows, barre Capture d&apos;écran du Mac ou enregistreur d&apos;écran du téléphone), puis convertissez la vidéo en GIF DVD.
          Enregistrez jusqu&apos;à un coin touché pour une boucle parfaite.
        </p>
      </Section>

      <Section wide id="corner-heading" title="L'écran de veille DVD va-t-il toucher le coin ?">
        <p className={p}>
          Oui, mais la fréquence dépend du format de l&apos;écran, de la taille du logo et de son point de départ. Le logo ne touche un coin que
          s&apos;il atteint un côté et le haut ou le bas au même instant. Sur certaines tailles d&apos;écran, cela arrive souvent ; sur
          d&apos;autres, il faut parfois attendre longtemps. Changer la taille du logo ou redimensionner la fenêtre lui donne une nouvelle
          trajectoire.
        </p>
        <p className={p}>
          C&apos;est donc le jeu DVD idéal : chacun parie sur le prochain coin, et le compteur tranche. Pour d&apos;autres écrans au repos,
          essayez l&apos;<Link href="/flip-clock-screensaver" className={link}>écran de veille horloge flip</Link> ou l&apos;
          <Link href="/matrix-screensaver" className={link}>écran de veille Matrix</Link>.
        </p>
      </Section>
    </div>
  )
}
