import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Test de résolution d'écran (français). Traduit du guide anglais, avec les recherches françaises :
 * quelle est ma résolution d'écran / connaître sa résolution → paramètres d'affichage → téléphone → résolutions courantes.
 * Les libellés portent les noms de l'interface française de l'outil.
 */
export function ScreenResolutionGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="read-heading" title="Test de résolution d'écran : ce que signifie chaque valeur">
        <p className={p}>
          Quelle est la résolution de mon écran ? Cette page répond toute seule, sans bouton à presser. Voici ce que montre chaque valeur :
        </p>
        <Table
          caption="Valeurs du test de résolution d'écran"
          head={['Valeur', 'Signification']}
          rows={[
            ['Résolution d’écran', 'La taille de votre écran en pixels CSS, après la mise à l’échelle de l’affichage'],
            ['Pixels physiques', 'Le nombre réel de pixels : résolution d’écran × ratio de pixels. C’est généralement la résolution native de votre moniteur'],
            ['Zone d’affichage du navigateur', 'L’espace à l’intérieur de la fenêtre du navigateur'],
            ['Zone disponible', 'L’écran moins la barre des tâches ou le Dock'],
            ['Ratio de pixels', 'Combien de pixels physiques forment un pixel CSS (1 = pas de mise à l’échelle)'],
            ['Profondeur de couleur', 'Les bits par pixel signalés par le navigateur, généralement 24 bits'],
          ]}
        />
        <p className={p}>
          Les valeurs se mettent à jour en direct quand vous redimensionnez la fenêtre ou tournez un téléphone. Gardez le zoom du navigateur à
          100 %, car le zoom modifie le ratio de pixels et le nombre de pixels physiques.
        </p>
      </Section>

      <Section wide id="check-heading" title="Résolution d'écran dans vos paramètres d'affichage">
        <p className={p}>
          Le test de résolution d&apos;écran lit ce que voit votre navigateur. Pour vérifier ou changer la résolution du moniteur dans les
          paramètres de votre système :
        </p>
        <Table
          caption="Où trouver le réglage de résolution d'affichage"
          head={['Appareil', 'Où regarder']}
          rows={[
            ['Windows 11 / 10', 'Paramètres → Système → Écran → Résolution de l’écran (celle marquée Recommandé est la native)'],
            ['Mac', 'Réglages Système → Moniteurs (un réglage mis à l’échelle peut faire différer les pixels physiques de la taille native de la dalle)'],
            ['iPhone / iPad', 'Fixée par le modèle ; utilisez la valeur des pixels physiques ci-dessus'],
            ['Android', 'Paramètres → Affichage → Résolution de l’écran (sur certains téléphones seulement)'],
          ]}
        />
        <p className={p}>
          Si le test de résolution montre moins de pixels physiques que la fiche technique de votre moniteur, l&apos;écran n&apos;est pas réglé
          sur sa résolution native et le texte peut paraître flou.
        </p>
      </Section>

      <Section wide id="phone-heading" title="Quelle est la résolution d'écran de mon téléphone ?">
        <p className={p}>
          Les téléphones signalent une petite résolution, comme 390 × 844, car ils agrandissent tout pour un texte net. La vraie résolution de
          votre téléphone est la valeur « Pixels physiques » : par exemple, 390 × 844 avec un ratio de pixels de 3 donne 1170 × 2532.
        </p>
      </Section>

      <Section wide id="common-heading" title="Résolutions d'écran courantes : de la HD à la 4K">
        <Table
          caption="Résolutions d'affichage courantes"
          head={['Nom', 'Résolution', 'Écrans typiques']}
          rows={[
            ['HD', '1280 × 720', 'Anciens PC portables et TV'],
            ['Full HD (1080p)', '1920 × 1080', 'La plupart des moniteurs et PC portables'],
            ['QHD (1440p)', '2560 × 1440', 'Moniteurs gaming et de bureau'],
            ['4K UHD', '3840 × 2160', 'Moniteurs et TV 4K'],
          ]}
        />
        <ul className={ul}>
          <li>Mon moniteur est-il 4K ? Oui, si « Pixels physiques » indique 3840 × 2160 avec un zoom de navigateur à 100 %.</li>
          <li>Un navigateur ne peut pas lire la taille de l&apos;écran en pouces ; cette page n&apos;affiche la taille qu&apos;en pixels.</li>
          <li>
            Vérifiez la netteté à votre résolution avec les lignes fines de la{' '}
            <Link href="/monitor-test" className={link}>mire de test pour moniteur</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
