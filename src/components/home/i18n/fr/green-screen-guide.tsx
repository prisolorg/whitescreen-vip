import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran vert (français). Traduit du guide anglais, avec les recherches françaises :
 * écran vert / fond vert / vert incrustation → écran vert sur ordinateur → YouTube et montage → test sous-pixels.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function GreenScreenGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="color-heading" title="Couleur d'écran vert : quel vert fonctionne le mieux ?">
        <p className={p}>
          Cette page affiche du vert pur, #00FF00 (RVB 0, 255, 0). Les logiciels d&apos;incrustation suppriment tout vert uniforme et saturé,
          mais un vert très vif peut déborder sur votre sujet. Utilisez le curseur Luminosité pour obtenir la nuance voulue, et gardez la
          chaleur sur Neutre.
        </p>
        <Table
          caption="Couleurs d'écran vert et comment les obtenir sur cette page"
          head={['Nuance', 'Hex', 'Comment l’obtenir', 'Idéal pour']}
          rows={[
            ['Vert vif', '#00FF00', 'Luminosité 100 %', 'Tests de pixels, le fond le plus éclatant'],
            ['Vert chroma key', '#00B300 (proche du standard #00B140)', 'Luminosité 70 %', 'Incrustation vidéo avec moins de débordement'],
            ['Vert foncé', '#008000', 'Luminosité 50 %', 'Un fond plus doux dans une pièce sombre'],
          ]}
        />
        <p className={p}>
          Vous cherchez des verts clairs ou pastel ? Parcourez la collection{' '}
          <Link href="/backgrounds/green-background" className={link}>fond vert</Link>.
        </p>
      </Section>

      <Section wide id="computer-heading" title="Écran vert sur ordinateur : PC portable, moniteur ou téléphone">
        <p className={p}>
          Un écran d&apos;ordinateur vert fait un fond rapide pour les petits plans : produits, mains, jouets et gros plans.
        </p>
        <ul className={ul}>
          <li>Ouvrez cette page sur un moniteur, un PC portable, une tablette ou un téléphone et touchez deux fois pour le plein écran.</li>
          <li>Activez « Garder l’écran allumé » pour que le vert ne s&apos;éteigne pas en pleine prise.</li>
          <li>Réglez la luminosité vers 70 % pour un vert uniforme sans points chauds.</li>
          <li>Placez votre sujet à 20–30 cm devant l&apos;écran pour que la lumière verte ne déborde pas dessus.</li>
          <li>Filmez bien en face. Les angles de vision peuvent assombrir les bords de l&apos;écran.</li>
        </ul>
        <p className={p}>
          Un écran est trop petit pour se placer derrière une personne. Pour des plans en pied ou face caméra, accrochez un tissu vert derrière
          vous ou ajoutez plutôt un fond vert dans votre logiciel de montage.
        </p>
      </Section>

      <Section wide id="video-heading" title="Écran vert pour YouTube, la vidéo et le montage">
        <p className={p}>
          Besoin d&apos;un écran vert en ligne pour votre montage plutôt que sur un écran ? Utilisez « Télécharger » sous l&apos;aperçu pour
          enregistrer un PNG vert en 1080p, en 4K, en taille téléphone ou en taille personnalisée, puis glissez-le dans votre timeline.
        </p>
        <Table
          caption="Où incruster un écran vert"
          head={['Logiciel', 'Outil à utiliser']}
          rows={[
            ['OBS Studio', 'Filtre Chroma Key sur la source caméra'],
            ['CapCut', 'Supprimer l’arrière-plan → Chroma key'],
            ['Premiere Pro', 'Effet Ultra Key'],
            ['DaVinci Resolve', '3D Keyer ou Delta Keyer'],
          ]}
        />
        <h3 className={h3}>Fonds d&apos;écran vert pour Zoom et Teams</h3>
        <p className={p}>
          Zoom et Teams proposent un effet d&apos;écran vert virtuel, mais un vrai tissu vert derrière vous donne des contours plus nets. Pour
          des images prêtes à incruster, voir la série{' '}
          <Link href="/backgrounds/green-screen-background" className={link}>fond d&apos;écran vert</Link>.{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma key</Link> explique comment fonctionne l&apos;incrustation.
        </p>
      </Section>

      <Section wide id="check-heading" title="Test d'écran vert : sous-pixels et uniformité">
        <p className={p}>
          Le vert porte l&apos;essentiel de la luminosité que nous percevons : les coins plus sombres ou les taches nuageuses y ressortent. Un
          point sombre est un sous-pixel vert mort, tandis qu&apos;un point jaune ou cyan signale un sous-pixel rouge ou bleu bloqué allumé.
          Lancez le <Link href="/gray-screen" className={link}>test d&apos;uniformité d&apos;écran</Link> ou lisez le{' '}
          <Link href="/screen-problems/stuck-pixel" className={link}>guide du pixel bloqué</Link> pour la suite. Un point noir visible aussi
          sur l&apos;<Link href="/" className={link}>écran blanc</Link> est un pixel entièrement mort.
        </p>
      </Section>
    </div>
  )
}
