import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Mire de test pour moniteur (français). Traduit du guide anglais, avec les recherches françaises :
 * mire de test écran / test écran en ligne / tester son écran → lancer le test → couleurs et étalonnage → autres défauts.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function MonitorTestGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Mires de test pour moniteur : ce que vérifie chacune">
        <p className={p}>
          Ce test d&apos;écran propose sept mires en plein écran, et chaque image de test vérifie quelque chose de différent. Pour un simple
          fond uni qui révèle la poussière et les pixels morts, ouvrez l&apos;<Link href="/" className={link}>écran blanc</Link> :
        </p>
        <Table
          caption="Mires de test pour moniteur"
          head={['Mire', 'Ce qu’elle vérifie', 'Un bon écran affiche']}
          rows={[
            ['Dégradé de gris', 'Tons progressifs, banding', 'Un seul fondu régulier, sans paliers ni teinte colorée'],
            ['Paliers de gris', 'Niveaux de noir et de blanc', 'Chaque palier visiblement différent, le plus sombre et le plus clair compris'],
            ['Grille', 'Géométrie et mise à l’échelle', 'Des lignes droites et régulières d’un bord à l’autre'],
            ['Gamma 2,2', 'Réglage du gamma', 'Le bloc central se fond dans les rayures vu de loin'],
            ['Lignes fines', 'Netteté, résolution native', 'Des lignes nettes d’un pixel, sans scintillement ni moiré'],
            ['Damier', 'Contraste et bords nets', 'Des carrés nets, sans halo ni bavure'],
            ['Barres de couleur', 'Reproduction des couleurs', 'Huit couleurs saturées bien distinctes'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Comment lancer la mire de test pour moniteur en ligne">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Réglez l&apos;écran sur sa résolution native et le zoom du navigateur sur 100 %.</li>
          <li>Touchez deux fois la mire pour passer en plein écran, sans rien d&apos;autre à l&apos;écran.</li>
          <li>Touchez l&apos;écran, utilisez les flèches ou choisissez une mire par son nom. « Défilement automatique » les fait défiler pour vous.</li>
          <li>Regardez chaque mire de face, puis de côté, pour repérer les variations d&apos;angle de vision.</li>
        </ol>
        <p className={p}>
          Ce test d&apos;écran fonctionne dans tout navigateur : il sert de test d&apos;affichage en ligne, de test d&apos;écran de PC portable,
          de test de moniteur pour un écran de PC neuf ou d&apos;occasion, ou de vérification rapide sur une TV.
        </p>
      </Section>

      <Section wide id="color-heading" title="Mire de test pour moniteur : couleurs et étalonnage">
        <p className={p}>
          Dans la mire de test, les barres de couleur et la mire gamma montrent à l&apos;œil les problèmes évidents de couleur et de gamma. Pour
          un test complet avec couleurs unies et rampes RVB, utilisez le{' '}
          <Link href="/screen-color-test" className={link}>test des couleurs d&apos;écran</Link>.
        </p>
        <p className={p}>
          Une vraie justesse des couleurs exige une sonde de calibrage matérielle ; aucun site web ne peut la mesurer. Pour un étalonnage de
          base des couleurs du moniteur, utilisez l&apos;outil intégré à votre système :
        </p>
        <ul className={ul}>
          <li>Windows : cherchez « Étalonner les couleurs de l’écran » dans Démarrer.</li>
          <li>Mac : Réglages Système → Moniteurs → Profil colorimétrique → Personnaliser → Étalonner.</li>
        </ul>
      </Section>

      <Section wide id="more-heading" title="Après la mire de test pour moniteur : pixels morts, Hz et autres défauts">
        <Table
          caption="Quel test lancer ensuite"
          head={['Pour vérifier', 'Lancez']}
          rows={[
            ['Pixels morts ou bloqués (test LCD)', <Link key="dp" href="/dead-pixel-test" className={link}>Test de pixels morts</Link>],
            ['Fréquence de rafraîchissement (Hz)', <Link key="hz" href="/screen-refresh-rate-test" className={link}>Test de fréquence de rafraîchissement</Link>],
            ['Temps de réponse et traînées', <Link key="gh" href="/monitor-ghosting-test" className={link}>Test de ghosting d’écran</Link>],
            ['Fuites de rétroéclairage et uniformité du noir', <Link key="un" href="/screen-uniformity-test" className={link}>Test d’uniformité d’écran</Link>],
            ['Images fantômes restées à l’écran', <Link key="bi" href="/screen-burn-in-test" className={link}>Test de marquage d’écran</Link>],
            ['Votre résolution d’écran', <Link key="rs" href="/screen-resolution-test" className={link}>Test de résolution d’écran</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
