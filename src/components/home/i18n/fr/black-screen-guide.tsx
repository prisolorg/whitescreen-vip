import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran noir (français). Traduit du guide anglais, avec les recherches françaises :
 * écran noir plein écran → image noire / PNG noir → noir pur #000000 → écran vide → second écran → test écran noir.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function BlackScreenGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="howto-heading" title="Comment afficher un écran noir en plein écran">
        <ul className={ul}>
          <li>Touchez deux fois l&apos;aperçu ou appuyez sur F pour un écran noir uni, d&apos;un bord à l&apos;autre.</li>
          <li>Sur un téléphone, touchez l&apos;icône plein écran dans le coin de l&apos;aperçu.</li>
          <li>Activez « Garder l’écran allumé » pour que l&apos;écran ne s&apos;assombrisse pas et ne se mette pas en veille.</li>
          <li>Appuyez sur Échap ou touchez à nouveau deux fois pour quitter. Le curseur se cache tout seul quand vous ne bougez pas.</li>
        </ul>
      </Section>

      <Section wide id="image-heading" title="Image d'écran noir : télécharger une image noire en PNG">
        <p className={p}>
          Besoin d&apos;une image d&apos;écran noir plutôt que d&apos;un écran en direct ? Utilisez « Télécharger » sous l&apos;aperçu pour
          enregistrer un PNG noir pur (#000000) à la taille exacte voulue. C&apos;est un fichier sans perte : le noir reste uni, sans bruit de
          compression.
        </p>
        <Table
          caption="Tailles d'image d'écran noir à télécharger"
          head={['Taille', 'Pixels', 'Idéal pour']}
          rows={[
            ['1080p', '1920 × 1080', 'Vidéos YouTube, diapositives, la plupart des moniteurs'],
            ['2K', '2560 × 1440', 'Moniteurs gaming et PC portables'],
            ['4K', '3840 × 2160', 'Timelines vidéo 4K et TV'],
            ['Téléphone', '1080 × 2400', 'Fond d’écran de téléphone, écran d’accueil et écran verrouillé'],
            ['Personnalisé', 'Toute taille, par ex. 1080 × 1920', 'Vidéo verticale pour Stories, Reels et Shorts'],
          ]}
        />
        <h3 className={h3}>Vidéo d&apos;écran noir et montage</h3>
        <p className={p}>
          Glissez le PNG 1080p ou 4K dans n&apos;importe quel logiciel de montage et étirez-le à la durée voulue. Il sert d&apos;image noire pour
          les intros, les fondus et les transitions entre les clips, sans avoir à générer un clip séparé.
        </p>
        <p className={p}>
          Envie de noirs plus profonds ou texturés ? Parcourez la collection{' '}
          <Link href="/backgrounds/black-background" className={link}>
            fond noir
          </Link>
          .
        </p>
      </Section>

      <Section wide id="pure-heading" title="Écran noir pur, noir absolu (#000000)">
        <p className={p}>
          Cette page affiche du noir pur, RVB 0, 0, 0, la valeur la plus sombre qu&apos;on puisse demander à un écran. Le rendu réel dépend de
          votre dalle.
        </p>
        <Table
          caption="Rendu d'un écran noir pur selon le type d'écran"
          head={['Écran', 'Ce que vous voyez', 'Pourquoi']}
          rows={[
            ['OLED / AMOLED', 'Un vrai noir absolu, sans lueur', 'Chaque pixel produit sa propre lumière et s’éteint sur le noir'],
            ['Mini-LED', 'Un noir très profond', 'Les zones de gradation locale baissent le rétroéclairage'],
            ['LCD (IPS, VA, TN)', 'Un gris très sombre dans une pièce noire', 'Le rétroéclairage reste allumé derrière la dalle'],
          ]}
        />
        <p className={p}>
          Vous ne savez pas lequel vous avez ? <Link href="/glossary/oled-vs-lcd" className={link}>OLED ou LCD</Link> explique la différence.
        </p>
      </Section>

      <Section wide id="blank-heading" title="Écran noir comme écran vide : masquer votre affichage">
        <p className={p}>
          Un écran noir vide masque tout ce qui est affiché sans éteindre l&apos;écran : applications, téléchargements et appels continuent de
          tourner.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Présentations et projecteurs :</strong> masquez l&apos;écran entre deux diapositives ou pendant
            que les gens parlent.
          </li>
          <li>
            <strong className="text-foreground">Confidentialité :</strong> cachez votre travail d&apos;un toucher quand vous vous absentez.
          </li>
          <li>
            <strong className="text-foreground">Concentration :</strong> faites disparaître un second écran qui distrait.
          </li>
        </ul>
        <h3 className={h3}>Site d&apos;écran noir : une page noire dans votre navigateur</h3>
        <p className={p}>
          Ajoutez ce site d&apos;écran noir à vos favoris pour ouvrir une page noire dès que nécessaire. Rien d&apos;autre ne se charge, pas
          d&apos;inscription, et vous pouvez glisser la fenêtre sur n&apos;importe quel écran avant de passer en plein écran.
        </p>
      </Section>

      <Section wide id="dark-heading" title="Écran noir pour un second écran : assombrir et occulter">
        <p className={p}>
          Vous regardez un film ou jouez sur un écran ? Mettez un écran noir sur l&apos;autre pour qu&apos;il n&apos;éclaire plus la pièce.
          Déplacez cette fenêtre sur le second écran, passez en plein écran et activez « Garder l’écran allumé ».
        </p>
        <ul className={ul}>
          <li>Sert d&apos;écran d&apos;occultation ou d&apos;écran de veille noir sans modifier vos réglages d&apos;alimentation.</li>
          <li>Sur OLED, les pixels noirs sont éteints : le noir pur n&apos;use pas la dalle comme une image claire et fixe.</li>
          <li>Sur LCD, baissez aussi la luminosité du moniteur pour le résultat le plus sombre.</li>
        </ul>
      </Section>

      <Section wide id="check-heading" title="Test d'écran noir : fuites, lueur et pixels bloqués">
        <p className={p}>
          Dans une pièce sombre, un écran noir complet révèle facilement quelques défauts courants. Pour les pixels morts et la poussière,
          vérifiez aussi l&apos;<Link href="/" className={link}>écran blanc</Link> :
        </p>
        <Table
          caption="Défauts d'affichage révélés par un écran noir"
          head={['Ce que vous voyez', 'Ce que c’est', 'En savoir plus']}
          rows={[
            ['De la lumière qui fuit sur les bords', 'Fuite de rétroéclairage', <Link key="b" href="/screen-problems/backlight-bleed" className={link}>Fuite de rétroéclairage</Link>],
            ['Une lueur qui bouge quand vous vous déplacez', 'IPS glow', <Link key="g" href="/screen-problems/ips-glow" className={link}>IPS glow</Link>],
            ['Un point qui reste allumé', 'Pixel bloqué ou chaud', <Link key="d" href="/dead-pixel-test" className={link}>Test de pixels morts</Link>],
            ['Du banding ou une teinte dans les quasi-noirs', 'Uniformité OLED', <Link key="o" href="/oled-gray-test" className={link}>Test gris foncé pour OLED</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
