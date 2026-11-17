import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran bleu (français). Traduit du guide anglais, avec les recherches françaises :
 * écran bleu lumière / lumière bleue → nuances de bleu → fond bleu chroma key → test lunettes anti-lumière bleue et sous-pixels.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function BlueScreenGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Écran bleu lumineux : utilisez votre écran comme éclairage bleu">
        <p className={p}>
          Un écran bleu en plein écran transforme n&apos;importe quel moniteur, PC portable ou téléphone en douce lumière bleue. Touchez deux
          fois l&apos;aperçu pour le plein écran, activez « Garder l’écran allumé » et réglez la luminosité voulue.
        </p>
        <Table
          caption="Façons d'utiliser l'écran bleu comme lumière"
          head={['Usage', 'Réglages', 'Astuce']}
          rows={[
            ['Lueur d’arrière-plan pour streams et vidéos', 'Luminosité 70–100 %', 'Placez un second écran derrière vous, hors champ'],
            ['Lumière d’appoint photo et vidéo', 'Luminosité 100 %', 'Éclairez de côté pour un liseré froid sur votre sujet'],
            ['Ambiance et éclairage de fête', 'Luminosité 40–70 %', 'Tournez l’écran vers un mur pour diffuser la lumière bleue'],
            ['Flash bleu vif', 'Luminosité 100 %, plein écran', 'Les téléphones donnent la lumière la plus forte à luminosité maximale'],
          ]}
        />
        <h3 className={h3}>Lumière bleue des écrans et sommeil</h3>
        <p className={p}>
          Une lumière bleue vive le soir peut rendre l&apos;endormissement plus difficile. Utilisez l&apos;éclairage bleu en journée ou pour vos
          prises créatives, et passez à l&apos;<Link href="/red-screen" className={link}>écran rouge</Link> ou à l&apos;
          <Link href="/orange-screen" className={link}>écran orange</Link> à faible luminosité la nuit.
        </p>
      </Section>

      <Section wide id="shade-heading" title="Couleurs d'écran bleu : vif, foncé, marine et bleu clair">
        <p className={p}>
          Cette page affiche du bleu pur, #0000FF (RVB 0, 0, 255). Utilisez le curseur Luminosité pour l&apos;assombrir, avec la chaleur sur
          Neutre.
        </p>
        <Table
          caption="Nuances de bleu et comment les obtenir"
          head={['Nuance', 'Hex', 'Comment l’obtenir']}
          rows={[
            ['Bleu vif', '#0000FF', 'Luminosité 100 %'],
            ['Bleu foncé', '#0000B3', 'Luminosité 70 %'],
            ['Bleu marine', '#000080', 'Luminosité 50 %'],
            ['Bleu clair', '#00FFFF', <Link key="c" href="/cyan-screen" className={link}>Ouvrir l’écran cyan</Link>],
          ]}
        />
        <p className={p}>
          Besoin d&apos;un fichier ? « Télécharger » enregistre un PNG bleu en 1080p, 2K, 4K ou au format téléphone, ou à toute taille personnalisée jusqu’à 8K.
          D&apos;autres options se trouvent dans la collection <Link href="/backgrounds/blue-background" className={link}>fond bleu</Link>.
        </p>
      </Section>

      <Section wide id="chroma-heading" title="Écran bleu pour chroma key, photo et montage">
        <p className={p}>Un écran bleu fonctionne comme un écran vert, et c&apos;est le meilleur choix dans quelques cas :</p>
        <ul className={ul}>
          <li>Votre sujet porte du vert ou tient des objets verts.</li>
          <li>
            Vous voulez un débordement de couleur moins visible. Le débordement bleu se cache plus facilement, mais le bleu demande plus de
            lumière pour une incrustation propre.
          </li>
        </ul>
        <p className={p}>
          Pour les petits produits et les gros plans, ouvrez cette page sur un PC portable, un moniteur ou un téléphone, réglez la luminosité
          vers 70 % et placez le sujet à 20–30 cm devant l&apos;écran. Pour le montage, téléchargez un PNG bleu et incrustez-le avec les mêmes
          outils que pour le vert : Chroma Key d&apos;OBS, Chroma key de CapCut, Ultra Key de Premiere ou 3D Keyer de DaVinci Resolve. Voir{' '}
          <Link href="/glossary/chroma-key" className={link}>chroma key</Link> pour comprendre l&apos;incrustation.
        </p>
      </Section>

      <Section wide id="test-heading" title="Test d'écran bleu : lunettes anti-lumière bleue et sous-pixels">
        <p className={p}>
          Envie d&apos;un test rapide de vos lunettes anti-lumière bleue ? Regardez cette page à pleine luminosité avec et sans elles. Des verres
          très teintés assombrissent nettement le bleu ; des verres clairs qui filtrent peu de bleu ne changent presque rien. Faites de même
          avec l&apos;<Link href="/" className={link}>écran blanc</Link> pour voir à quel point les verres teintent tout. C&apos;est une
          vérification visuelle rapide, pas une mesure de laboratoire.
        </p>
        <p className={p}>
          Le bleu pur n&apos;allume aussi que les sous-pixels bleus. Un point noir est un sous-pixel bleu mort, tandis qu&apos;un point magenta
          ou cyan signale un sous-pixel rouge ou vert bloqué allumé. Pour une vérification complète, lancez le{' '}
          <Link href="/dead-pixel-test" className={link}>test de pixels morts</Link>.
        </p>
      </Section>
    </div>
  )
}
