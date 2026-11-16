import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran jaune (français). Traduit du guide anglais, avec les recherches françaises :
 * écran jaune lumière chaude / lampe de poche jaune → jaune uni #FFFF00 → test sous-pixels rouge et vert.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function YellowScreenGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Écran jaune comme lumière chaude">
        <p className={p}>
          Un écran jaune diffuse une lumière chaude sans bleu, ce qui en fait un écran de lumière chaude douillet pour lire, passer des appels
          ou se détendre le soir. Touchez deux fois l&apos;aperçu pour le plein écran et activez « Garder l’écran allumé » pour que la lumière
          reste allumée.
        </p>
        <Table
          caption="Réglages conseillés pour utiliser l'écran jaune comme lumière"
          head={['Usage', 'Réglages', 'Astuce']}
          rows={[
            ['Lampe de lecture', 'Chaud, Luminosité 60–80 %', 'Posez une tablette à côté de votre livre, orientée loin de vos yeux'],
            ['Appels vidéo', 'Neutre, Luminosité 100 %', 'Placez l’écran derrière votre webcam pour une lueur dorée'],
            ['Lumière du soir ou veilleuse', 'Chaud, Luminosité 30–50 %', 'Une luminosité plus basse la garde douce dans une pièce sombre'],
            ['Couleur en photo et vidéo', 'Neutre ou Chaud', 'Utilisez un second écran comme lumière d’appoint chaude sur le côté'],
          ]}
        />
        <h3 className={h3}>Lampe de poche jaune sur votre téléphone</h3>
        <p className={p}>
          Ouvrez cette page sur votre téléphone, montez la luminosité et passez en plein écran. Une lumière jaune chaude est moins agressive
          qu&apos;une lampe de poche blanche dans le noir : pratique pour surveiller les enfants ou trouver votre chemin la nuit.
        </p>
      </Section>

      <Section wide id="solid-heading" title="Écran jaune uni (#FFFF00)">
        <p className={p}>
          Cette page affiche du jaune uni : rouge et vert à pleine intensité, bleu éteint (RVB 255, 255, 0). C&apos;est un écran jaune vide,
          sans rien d&apos;autre, et vous pouvez ajuster la nuance avec les réglages sous l&apos;aperçu.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Jaune vif :</strong> Neutre, Luminosité 100 %.
          </li>
          <li>
            <strong className="text-foreground">Jaune doré :</strong> choisissez Chaud.
          </li>
          <li>
            <strong className="text-foreground">Jaune moutarde :</strong> baissez le curseur Luminosité.
          </li>
        </ul>
        <p className={p}>
          Besoin d&apos;un fichier ? « Télécharger » enregistre un PNG jaune de 1080p à 8K, ou aux tailles téléphone et personnalisées. Pour des
          jaunes pastel et clairs, parcourez la collection{' '}
          <Link href="/backgrounds/yellow-background" className={link}>fond jaune</Link>.
        </p>
      </Section>

      <Section wide id="check-heading" title="Test d'écran jaune : sous-pixels rouges et verts">
        <p className={p}>
          Le jaune allume ensemble les sous-pixels rouges et verts. Un point rouge signale un sous-pixel vert mort, un point vert un rouge mort,
          et un point blanc un sous-pixel bleu bloqué allumé. Affinez avec les écrans <Link href="/red-screen" className={link}>rouge</Link>,{' '}
          <Link href="/green-screen" className={link}>vert</Link> et <Link href="/blue-screen" className={link}>bleu</Link>.
        </p>
        <p className={p}>
          Si votre <Link href="/" className={link}>écran blanc</Link> paraît jaune, consultez le{' '}
          <Link href="/screen-problems/yellow-tint-on-screen" className={link}>
            guide de la teinte jaune
          </Link>
          .
        </p>
      </Section>
    </div>
  )
}
