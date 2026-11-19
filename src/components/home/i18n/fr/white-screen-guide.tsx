import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran blanc, page d'accueil (français). Traduit du guide anglais, avec les recherches françaises :
 * écran blanc lumineux → écran blanc vide / blanc pur → écran blanc comme lumière / lampe de poche →
 * fond et image blanche → test d'écran blanc. Les boutons portent les noms de l'interface française de l'outil.
 */
export function WhiteScreenGuideFr() {
  return (
    <>
      <Section id="bright-heading" title="Écran blanc lumineux : le blanc le plus éclatant de votre écran">
        <p className={p}>
          L&apos;écran blanc lumineux ci-dessus est un blanc pur (#FFFFFF) à 100 %, la couleur la plus lumineuse qu&apos;un écran puisse
          afficher. Son éclat réel dépend du réglage de luminosité de votre appareil, car un site web ne peut pas augmenter le rétroéclairage
          matériel à votre place.
        </p>

        <h3 className={h3}>Comment rendre l&apos;écran blanc plus lumineux</h3>
        <ul className={ul}>
          <li>Gardez le curseur Luminosité sous l&apos;écran à 100 % et choisissez Neutre ou Froid.</li>
          <li>Montez la luminosité de votre appareil au maximum (tableau ci-dessous).</li>
          <li>Désactivez tout ce qui teinte ou assombrit le blanc : Éclairage nocturne, Night Shift, True Tone, modes confort des yeux et économie de batterie.</li>
          <li>Touchez deux fois l&apos;écran pour passer en plein écran, sans barres du navigateur qui assombrissent les bords.</li>
        </ul>

        <Table
          caption="Où trouver la luminosité maximale sur chaque appareil"
          head={['Appareil', 'Luminosité max.', 'À désactiver pour un blanc pur']}
          rows={[
            ['Windows 10/11', 'Curseur de luminosité des paramètres rapides (Win + A)', 'Éclairage nocturne, économiseur de batterie, luminosité adaptative au contenu'],
            ['Mac', 'Touches de luminosité ou Centre de contrôle → Écran', 'Night Shift, True Tone, luminosité automatique'],
            ['iPhone / iPad', 'Curseur du Centre de contrôle', 'Night Shift, True Tone, mode Économie d’énergie'],
            ['Android', 'Curseur des paramètres rapides', 'Luminosité adaptative, confort des yeux / éclairage nocturne'],
            ['Smart TV', 'Mode d’image Vif ou Standard, rétroéclairage au maximum', 'Modes d’image Éco / économie d’énergie'],
          ]}
        />

        <h3 className={h3}>Un écran très lumineux est-il sans danger pour les yeux ?</h3>
        <p className={p}>
          Un écran blanc fixe ne scintille pas et ne clignote pas, mais la pleine luminosité dans une pièce sombre peut paraître agressive.
          Baissez le curseur ou choisissez Chaud si vous n&apos;avez besoin que d&apos;une lumière douce, et détournez le regard un instant
          toutes les 20 minutes si vous l&apos;utilisez longtemps.
        </p>
      </Section>

      <Section id="blank-heading" title="Écran blanc vide : un écran blanc pur, sans rien dessus">
        <p className={p}>
          Un écran blanc vide, c&apos;est exactement ça : un écran entièrement blanc, sans texte, icônes ni curseur. Un écran blanc uni comme
          celui-ci sert de fond propre, de panneau lumineux ou de moyen de vider votre écran d&apos;un toucher.
        </p>
        <ul className={ul}>
          <li>Touchez deux fois l&apos;aperçu (ou appuyez sur F) pour un écran complètement blanc, d&apos;un bord à l&apos;autre.</li>
          <li>Le curseur disparaît après un moment sans mouvement, pour que rien ne vienne rompre le blanc.</li>
          <li>Appuyez sur Échap ou touchez à nouveau deux fois pour quitter le plein écran.</li>
        </ul>

        <h3 className={h3}>Blanc pur, blanc chaud, doux ou blanc cassé</h3>
        <Table
          caption="Nuances de blanc obtenues avec les boutons Froid, Neutre et Chaud"
          head={['Nuance', 'Comment l’obtenir', 'Idéal pour']}
          rows={[
            ['Blanc pur (#FFFFFF)', 'Neutre, Luminosité 100 %', 'Tests, nettoyage, la lumière la plus vive'],
            ['Blanc froid', 'Froid, Luminosité 100 %', 'Look lumière du jour net, photos de produits'],
            ['Blanc chaud', 'Chaud', 'Appels vidéo, maquillage, lecture le soir'],
            ['Blanc doux / cassé', 'Chaud + Luminosité 60–80 %', 'Lumière d’ambiance douce dans une pièce sombre'],
          ]}
        />
      </Section>

      <Section id="light-heading" title="Écran blanc comme lumière : utilisez votre écran comme lampe">
        <p className={p}>
          Votre écran fait une source de lumière douce et homogène, et à pleine luminosité il diffuse une lumière blanche étonnamment vive.
          Montez le curseur Luminosité et la luminosité de l&apos;appareil, choisissez une chaleur et activez « Garder l’écran allumé » pour
          que la lumière ne s&apos;éteigne pas en plein appel.
        </p>
        <Table
          caption="Réglages conseillés pour utiliser l'écran blanc comme lumière"
          head={['Usage', 'Chaleur', 'Astuce']}
          rows={[
            ['Appels vidéo (Zoom, Teams, Meet)', 'Chaud ou Neutre', 'Placez l’écran juste derrière votre webcam, un peu au-dessus des yeux'],
            ['Maquillage et selfies', 'Neutre', 'Placez-vous bien face à l’écran pour une lumière homogène sans ombres'],
            ['Lampe de lecture', 'Chaud', 'Baissez le curseur à 60–80 % pour réduire l’éblouissement'],
            ['Photos de produits', 'Froid', 'Utilisez un second appareil comme lumière d’appoint sur le côté'],
            ['Lampe de poche express', 'Neutre', 'Plein écran sur votre téléphone, à pleine luminosité'],
          ]}
        />
        <h3 className={h3}>Utiliser votre téléphone ou PC portable comme lampe de poche</h3>
        <p className={p}>
          Ouvrez cet écran blanc sur votre téléphone, montez la luminosité au maximum et touchez deux fois pour le plein écran. Cette lumière
          est plus douce que le flash de l&apos;appareil photo, pratique pour retrouver des objets dans une pièce sombre sans réveiller
          personne.
        </p>
        <p className={p}>
          Envie de plus de contrôle ? Essayez le <Link href="/ring-light" className={link}>ring light en ligne</Link> pour un reflet circulaire
          ou la <Link href="/zoom-lighting" className={link}>lumière pour visioconférence</Link> pour une température de couleur précise.
        </p>
      </Section>

      <Section id="background-heading" title="Fond d'écran blanc et téléchargement d'images">
        <p className={p}>
          Besoin d&apos;un écran blanc en fichier ? Utilisez « Télécharger » sous l&apos;écran pour enregistrer un PNG blanc pur à la taille
          voulue. La luminosité et la chaleur choisies sont appliquées à l&apos;image.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Ordinateur et TV :</strong> 1080p, 2K et 4K.
          </li>
          <li>
            <strong className="text-foreground">Téléphone et tablette :</strong> Téléphone (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Personnalisé :</strong> toute largeur et hauteur.
          </li>
        </ul>
        <p className={p}>
          Vous cherchez d&apos;autres fonds d&apos;écran et nuances de blanc ? Parcourez la collection{' '}
          <Link href="/backgrounds/white-background" className={link}>
            fond blanc
          </Link>
          .
        </p>
      </Section>

      <Section id="test-heading" title="Test d'écran blanc : ce qu'il faut regarder">
        <p className={p}>
          Un écran blanc complet est la vérification d&apos;affichage la plus rapide. Passez en plein écran à pleine luminosité et examinez
          toute la dalle.
        </p>
        <Table
          caption="Ce que peut révéler un test d'écran blanc"
          head={['Ce que vous voyez', 'Ce que cela peut signifier', 'Étape suivante']}
          rows={[
            ['Des points noirs ou sombres', 'Des pixels morts', <Link key="d" href="/dead-pixel-test" className={link}>Test de pixels morts</Link>],
            ['Des taches, coins sombres ou nuages', 'Un rétroéclairage inégal', <Link key="u" href="/gray-screen" className={link}>Test d’uniformité d’écran</Link>],
            ['Le blanc paraît jaune, bleu ou rose', 'Réglages de couleur ou teinte de la dalle', <Link key="c" href="/screen-color-test" className={link}>Test des couleurs d’écran</Link>],
            ['Des formes pâles d’anciennes images', 'Marquage ou rémanence', <Link key="b" href="/screen-burn-in-test" className={link}>Test de marquage d’écran</Link>],
            ['Des points qui bougent quand vous essuyez', 'De la poussière ou des traces, pas des pixels', 'Nettoyez l’écran et vérifiez à nouveau'],
          ]}
        />
        <p className={p}>
          Passez ensuite à l&apos;<Link href="/black-screen" className={link}>écran noir</Link> : les pixels bloqués et les fuites de
          rétroéclairage se voient mieux sur le noir.
        </p>
      </Section>
    </>
  )
}
