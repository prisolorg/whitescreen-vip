import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran rouge (français). Traduit du guide anglais, avec les recherches françaises :
 * écran rouge lumière / lumière rouge pour dormir → photos et reels → nuances de rouge → test sous-pixels rouges.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function RedScreenGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="night-heading" title="Écran rouge comme lumière pour la nuit et le sommeil">
        <p className={p}>
          Une lumière rouge tamisée est la plus douce pour votre vision nocturne. Les cellules de vos yeux qui voient en faible lumière
          réagissent à peine au rouge profond, c&apos;est pourquoi astronomes et pilotes l&apos;utilisent. Baissez le curseur Luminosité,
          touchez deux fois pour le plein écran et activez « Garder l’écran allumé ».
        </p>
        <Table
          caption="Réglages conseillés pour utiliser l'écran rouge la nuit"
          head={['Usage', 'Luminosité', 'Astuce']}
          rows={[
            ['Veilleuse', '20–40 %', 'Tournez l’écran vers un mur pour une lueur douce'],
            ['Lire des notes dans le noir', '30–50 %', 'Tenez le téléphone près de vous, sous le niveau des yeux'],
            ['Observation des étoiles', 'Au plus bas', 'Garde vos yeux adaptés au ciel nocturne'],
            ['Lumière rouge vive', '100 %', 'Pour des signaux, effets et photos, pas pour se détendre'],
          ]}
        />
        <h3 className={h3}>Un écran rouge aide-t-il à dormir ?</h3>
        <p className={p}>
          Un écran rouge tamisé est plus doux avant de dormir qu&apos;un <Link href="/" className={link}>écran blanc</Link> vif ou un écran
          bleu, car il n&apos;émet pas de lumière bleue. Cela reste une lumière : gardez-la faible et éteignez-la quand vous êtes prêt à dormir.
          Un écran n&apos;est pas un appareil de luminothérapie à lumière rouge : ceux-ci utilisent des longueurs d&apos;onde précises et une
          puissance bien plus élevée.
        </p>
      </Section>

      <Section wide id="photo-heading" title="Écran rouge pour photos, reels et selfies">
        <p className={p}>Un écran rouge donne aux selfies et aux reels une lueur rouge d&apos;ambiance avec un simple téléphone ou PC portable.</p>
        <ul className={ul}>
          <li>Éteignez les lumières de la pièce pour que la lumière rouge soit la seule sur votre visage.</li>
          <li>Ouvrez cet écran rouge sur un second téléphone, une tablette ou un PC portable, réglez la luminosité sur 100 % et passez en plein écran.</li>
          <li>Tenez l&apos;écran à 20–40 cm de votre visage, légèrement sur le côté, pour les ombres et la profondeur.</li>
          <li>Baissez la luminosité ou reculez l&apos;écran si votre peau paraît surexposée.</li>
        </ul>
        <p className={p}>Cela fonctionne de la même façon sur iPhone, Android et PC portable. Plus l&apos;écran est grand, plus la lumière est douce.</p>
      </Section>

      <Section wide id="shade-heading" title="Couleurs d'écran rouge : vif, foncé et rouge clair">
        <p className={p}>
          Cette page affiche du rouge pur, #FF0000 (RVB 255, 0, 0) : un écran rouge vide, sans rien d&apos;autre. Utilisez le curseur
          Luminosité pour l&apos;assombrir, avec la chaleur sur Neutre.
        </p>
        <Table
          caption="Nuances de rouge et comment les obtenir"
          head={['Nuance', 'Hex', 'Comment l’obtenir']}
          rows={[
            ['Rouge vif', '#FF0000', 'Luminosité 100 %'],
            ['Rouge foncé', '#B30000', 'Luminosité 70 %'],
            ['Rouge profond / bordeaux', '#800000', 'Luminosité 50 %'],
            ['Rouge clair / rose', '#FF69B4', <Link key="p" href="/pink-screen" className={link}>Ouvrir l’écran rose</Link>],
          ]}
        />
        <p className={p}>
          Besoin d&apos;un fichier ? « Télécharger » enregistre un PNG rouge de 1080p à 8K, ou aux tailles téléphone et personnalisées.
          D&apos;autres nuances se trouvent dans la collection <Link href="/backgrounds/red-background" className={link}>fond rouge</Link>.
        </p>
      </Section>

      <Section wide id="test-heading" title="Test d'écran rouge : sous-pixels rouges et fidélité des couleurs">
        <p className={p}>
          Le rouge pur n&apos;allume que les sous-pixels rouges. Un point sombre est un sous-pixel rouge mort, tandis qu&apos;un point jaune ou
          magenta signale un sous-pixel vert ou bleu bloqué allumé. C&apos;est aussi sur le rouge que les moniteurs bon marché tirent souvent
          vers l&apos;orange ou le rose ; comparez avec un autre appareil, ou lancez le{' '}
          <Link href="/screen-color-test" className={link}>test des couleurs d&apos;écran</Link> et le{' '}
          <Link href="/dead-pixel-test" className={link}>test de pixels morts</Link>.
        </p>
      </Section>
    </div>
  )
}
