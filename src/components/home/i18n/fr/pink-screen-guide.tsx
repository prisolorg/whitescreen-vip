import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran rose (français). Traduit du guide anglais, avec les recherches françaises :
 * écran rose lumière / lumière rose selfie → nuances de rose → fond d'écran rose.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function PinkScreenGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Écran rose comme lumière pour selfies, photos et TikTok">
        <p className={p}>
          Un écran rose est une lumière rose simple et flatteuse : elle adoucit la peau et ajoute une lueur chaude sans LED rose ni matériel
          supplémentaire. Touchez deux fois l&apos;aperçu pour le plein écran et activez « Garder l’écran allumé ». Pour une lumière neutre et
          fidèle, utilisez plutôt l&apos;<Link href="/" className={link}>écran blanc</Link>.
        </p>
        <Table
          caption="Façons d'utiliser l'écran rose comme lumière"
          head={['Usage', 'Réglages', 'Astuce']}
          rows={[
            ['Selfies et photos', 'Luminosité 100 %', 'Tenez un second téléphone ou une tablette juste à côté de votre visage'],
            ['FaceTime et appels vidéo', 'Luminosité 70–100 %', 'Placez l’écran derrière votre caméra, tourné vers vous'],
            ['TikTok et vidéos de lip sync', 'Luminosité 100 %, Chaud', 'Éteignez les lumières de la pièce pour que l’éclairage rose ressorte'],
            ['Éclairage de pièce et d’ambiance', 'Luminosité 40–70 %', 'Tournez l’écran vers un mur pour diffuser la lueur'],
          ]}
        />
      </Section>

      <Section wide id="shade-heading" title="Couleurs d'écran rose : rose vif, rose bonbon et nuances plus foncées">
        <p className={p}>
          Cet écran rose vif affiche #FF69B4 (RVB 255, 105, 180), un rose éclatant avec un peu de bleu. Ajustez la nuance avec les réglages
          sous l&apos;aperçu.
        </p>
        <Table
          caption="Nuances de rose et comment les obtenir"
          head={['Nuance', 'Comment l’obtenir', 'Rendu']}
          rows={[
            ['Rose vif / rose bonbon', 'Neutre, Luminosité 100 %', 'Éclatant et ludique (#FF69B4)'],
            ['Rose corail', 'Chaud', 'Un rose plus chaud, tirant sur la pêche (#FF4F64)'],
            ['Vieux rose', 'Froid', 'Plus froid, légèrement plus magenta (#DD5FB4)'],
            ['Rose foncé', 'Luminosité 50–70 %', 'Un rose plus profond et sourd (#80355A–#B34A7E)'],
            ['Rose clair / rose pâle', <Link key="lp" href="/backgrounds/light-pink-background" className={link}>Fond rose clair</Link>, 'Doux et pâle (#FFB6C1)'],
          ]}
        />
        <p className={p}>
          Envie d&apos;un rose néon plus intense ? Essayez l&apos;<Link href="/magenta-screen" className={link}>écran magenta</Link>.
        </p>
      </Section>

      <Section wide id="background-heading" title="Fond et fond d'écran rose">
        <p className={p}>
          Besoin d&apos;un fond rose vif en fichier ? Utilisez « Télécharger » sous l&apos;aperçu. Votre luminosité et votre chaleur sont
          appliquées à l&apos;image.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">PC portable et ordinateur :</strong> 1080p, 1440p, 4K ou 8K.
          </li>
          <li>
            <strong className="text-foreground">Fond d&apos;écran de téléphone :</strong> iPhone (1179×2556) ou Android (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Tout le reste :</strong> une largeur et une hauteur personnalisées, comme 1080×1920 pour
            TikTok et Reels.
          </li>
        </ul>
        <p className={p}>
          Vous le voulez plus doux ? Utilisez le <Link href="/backgrounds/light-pink-background" className={link}>fond rose clair</Link>{' '}
          (#FFB6C1), ou consultez la collection <Link href="/backgrounds/pink-background" className={link}>fond rose</Link>.
        </p>
      </Section>
    </div>
  )
}
