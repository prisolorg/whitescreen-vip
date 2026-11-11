import type { GuideTranslation } from './types'

export const fr: Record<string, GuideTranslation> = {
  'dead-pixel-test': {
    slug: 'test-de-pixels-morts',
    navLabel: 'Test de pixels morts',
    title: 'Test de pixels morts : repérer les pixels morts, bloqués et chauds sur n’importe quel écran',
    metaTitle: 'Test de pixels morts : repérez pixels morts et bloqués',
    metaDescription:
      'Apprenez à faire un test de pixels morts sur Windows, Mac, iPhone et Android. Repérez pixels morts, bloqués et chauds avec des couleurs primaires en plein écran.',
    readingTime: '6 min de lecture',
    category: 'Diagnostic d’écran',
    intro:
      'Toute dalle moderne (LCD, IPS, VA ou OLED) se compose de millions de minuscules sous-pixels rouges, verts et bleus pilotés par des microtransistors. Quand un transistor lâche ou se bloque, un défaut gênant apparaît, qui perturbe la lecture, la retouche photo et le jeu. Tester l’écran avec des couleurs primaires en plein écran est la méthode la plus rapide et la plus fiable pour repérer ces défauts pendant le délai de retour ou avant la fin de la garantie.',
    toolLabel: 'Ouvrir le test de pixels morts',
    toolDescription: 'Faites défiler rouge, vert, bleu, noir et blanc en plein écran pour repérer les anomalies.',
    sections: [
      {
        title: 'Pixel mort, bloqué ou chaud : comment les distinguer',
        content: [
          'Tous les défauts de pixel n’ont pas le même aspect ni le même comportement. Identifier le type exact vous aide à savoir si un cycle logiciel peut le débloquer ou s’il faut remplacer la dalle sous garantie.',
          'Un pixel mort apparaît quand le transistor qui le commande reste complètement éteint. Sur un écran LCD rétroéclairé, il forme un point noir permanent, quelle que soit la couleur affichée autour.',
          'Un pixel bloqué apparaît quand un ou deux sous-pixels (rouge, vert ou bleu) restent allumés en permanence alors que les autres fonctionnent. Il forme un point coloré vif et fixe sur un fond sombre ou contrasté.',
          'Un pixel chaud se produit quand les trois sous-pixels restent allumés au maximum en même temps. Il forme un point blanc permanent qui ressort fortement sur le noir et les contenus sombres.',
        ],
        tips: [
          'Les pixels morts sont des points noirs visibles sur des écrans blanc, rouge, vert ou bleu.',
          'Les pixels bloqués sont des points colorés (rouge, vert ou bleu) visibles sur fond sombre.',
          'Les pixels chauds apparaissent comme des points blancs permanents sur fond sombre.',
        ],
      },
      {
        title: 'Première étape essentielle : nettoyer avant de diagnostiquer',
        content: [
          'Un nombre étonnant de « pixels morts » supposés sont en réalité des grains de poussière microscopiques, des gouttelettes séchées après un éternuement ou de minuscules projections de gras collées sur la vitre.',
          'Avant de conclure à un défaut matériel, essuyez doucement l’écran éteint avec un chiffon microfibre optique propre et sec. Ne grattez jamais avec l’ongle : vous pourriez rayer pour toujours les filtres polarisants antireflet.',
        ],
      },
      {
        title: 'Test pas à pas sur tous les appareils',
        content: ['Suivez ces instructions pour tester à fond moniteurs, ordinateurs portables, tablettes et smartphones.'],
        steps: [
          'Ouvrez le test de pixels morts de WhiteScreen.vip et passez en plein écran pour masquer la barre d’adresse, la barre des tâches et le reste de l’interface.',
          'Commencez par l’écran blanc : balayez lentement la dalle du coin supérieur gauche au coin inférieur droit à la recherche de points noirs fixes (pixels morts).',
          'Passez au noir : cherchez des points blancs lumineux (pixels chauds) ou des points colorés (pixels bloqués).',
          'Faites défiler rouge, vert et bleu purs : chaque couleur primaire teste un canal de sous-pixel. Un sous-pixel défaillant apparaît comme un point plus sombre ou d’une autre couleur.',
          'Sous Windows ou macOS : réglez la luminosité entre 80 et 100 % et regardez l’écran bien en face, à la perpendiculaire, pour éviter la diffraction optique.',
          'Sur iPhone ou Android : assurez-vous qu’il ne reste aucune marge du navigateur, ou enregistrez les couleurs dans la galerie pour les afficher en plein écran.',
        ],
      },
      {
        title: 'Limites des tests dans le navigateur et vérité sur la garantie',
        content: [
          'Les outils de test dans le navigateur donnent un diagnostic visuel immédiat et précis, car ils pilotent chaque pixel à 100 % de saturation, sans artefacts de compression vidéo.',
          'Méfiez-vous en revanche des sites qui prétendent que des couleurs clignotantes ou des vidéos en boucle réparent par magie les pixels morts. Un exerciseur rapide peut parfois débloquer un transistor paresseux, mais un circuit coupé ou un transistor grillé ne se répare pas par logiciel.',
          'Consultez la classe de défauts de pixels de votre fabricant (ISO 9241-307 / ISO 13406-2). La plupart des garanties exigent 3 à 5 sous-pixels morts, ou au moins un pixel mort au centre de l’écran, avant d’accepter un échange gratuit.',
        ],
        checklist: [
          'Comparez le nombre de défauts à la politique de garantie du fabricant pendant le délai de retour de 14 à 30 jours.',
          'Prenez une photo macro du défaut avec votre smartphone pour le service client.',
          'Vérifiez si votre revendeur propose une garantie « zéro pixel mort » pendant la période qui suit l’achat.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Un test dans le navigateur peut-il réparer un pixel mort ?',
        answer:
          'Non. Si un transistor est cassé ou grillé, aucun logiciel ne le répare. Les outils à clignotement rapide débloquent parfois des sous-pixels bloqués, mais un pixel mort permanent nécessite le remplacement de la dalle.',
      },
      {
        question: 'Pourquoi les pixels bloqués disparaissent-ils parfois tout seuls ?',
        answer:
          'Sur les dalles à cristaux liquides, un pixel bloqué vient souvent d’un déséquilibre de charge électrique ou d’une légère contrainte mécanique. En chauffant ou en refroidissant, la dilatation thermique et les cycles de tension peuvent parfois rétablir l’orientation normale des cristaux.',
      },
      {
        question: 'Comment distinguer une poussière d’un pixel mort ?',
        answer:
          'Changez d’angle en déplaçant la tête d’environ 15 cm vers la gauche ou la droite. Comme la vitre a une épaisseur, une poussière en surface se décale légèrement par rapport à la couche lumineuse (effet de parallaxe), alors qu’un pixel mort reste fixe dans la grille de pixels.',
      },
    ],
  },
  'screen-color-test': {
    slug: 'test-des-couleurs-d-ecran',
    navLabel: 'Test des couleurs',
    title: 'Test des couleurs d’écran : évaluer la fidélité et l’équilibre des couleurs de votre moniteur',
    metaTitle: 'Test des couleurs d’écran : fidélité et équilibre',
    metaDescription:
      'Vérifiez dominantes de couleur, bandes, écarts de gamma et contraste sur votre moniteur. Guide pas à pas pour PC, Mac et mobile.',
    readingTime: '6 min de lecture',
    category: 'Étalonnage d’écran',
    intro:
      'Que vous retouchiez des photos, étalonniez des vidéos, conceviez des sites ou harmonisiez deux écrans sur un même bureau, la fidélité des couleurs est essentielle. Des dominantes subtiles, des courbes de gamma irrégulières et des bandes de couleur peuvent fausser votre travail sans que vous le remarquiez. Un test méthodique avec des plages de référence en plein écran révèle dominantes, dérive du point blanc et saturation écrêtée, sans matériel coûteux.',
    toolLabel: 'Ouvrir le test des couleurs',
    toolDescription: 'Testez gris neutres, couleurs primaires et équilibre de saturation sur tout l’écran.',
    sections: [
      {
        title: 'Pourquoi tester les couleurs à l’œil avant d’étalonner',
        content: [
          'Beaucoup de moniteurs sortent d’usine avec une dominante bleue exagérée, des verts sursaturés et des noirs bouchés, pour briller en magasin plutôt que pour être fidèles.',
          'Avant d’investir dans une sonde, un test visuel méthodique vous montre si votre écran a une dominante générale (par exemple verte ou magenta dans les tons moyens), des noirs bouchés ou de forts changements selon l’angle de vision.',
        ],
        tips: [
          'Laissez chauffer le moniteur au moins 30 minutes avant de juger les couleurs : la température du rétroéclairage change pendant la chauffe.',
          'Éteignez les lumières de la pièce qui créent des reflets colorés sur la vitre.',
        ],
      },
      {
        title: 'Procédure de test des couleurs pas à pas',
        content: ['Suivez ces étapes sous Windows, macOS et sur les postes à plusieurs écrans.'],
        steps: [
          'Désactivez les filtres logiciels : éclairage nocturne sous Windows, True Tone et Night Shift sous macOS, confort des yeux sur mobile.',
          'Ouvrez le test des couleurs de WhiteScreen.vip en plein écran et choisissez le gris neutre à 50 %.',
          'Évaluez le gris : un gris neutre pur ne doit paraître ni rosé, ni verdâtre, ni bleuté. Toute dominante visible indique une dérive du point blanc.',
          'Faites défiler rouge, vert et bleu : vérifiez que les couleurs restent uniformes d’un coin à l’autre, sans s’assombrir ni changer de teinte sur les bords.',
          'Vérifiez les couleurs secondaires (cyan, magenta, jaune) : elles sollicitent plusieurs canaux à la fois et révèlent les déséquilibres.',
          'Comparez plusieurs écrans : faites glisser la fenêtre du navigateur à cheval sur deux écrans pour voir les différences de point blanc.',
        ],
      },
      {
        title: 'Repérer les bandes de couleur et les limites de profondeur',
        content: [
          'Un écran 8 bits standard affiche 16,7 millions de couleurs, une dalle moderne 10 bits (8 bits + FRC ou vrai 10 bits) plus d’un milliard de nuances. Quand le moniteur ou le pilote gère mal les dégradés, ils se transforment en paliers visibles (bandes de couleur).',
          'Observez les dégradés sur notre page de test du moniteur. S’ils paraissent en escalier ou montrent de faux halos colorés, vérifiez que le panneau de votre carte graphique (NVIDIA, AMD Radeon ou Intel) utilise la plage RGB complète (0–255) et non la plage vidéo limitée (16–235).',
        ],
        checklist: [
          'Réglez la plage dynamique de sortie sur « Complète » (0–255) dans les paramètres du GPU.',
          'Choisissez le mode sRGB ou D65 dans le menu du moniteur (OSD) pour une fidélité web standard.',
          'Harmonisez fréquence de rafraîchissement et profondeur de couleur sur une configuration à deux écrans.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Pourquoi mon écran blanc paraît-il un peu jaune à côté de mon téléphone ?',
        answer:
          'Les smartphones utilisent souvent un blanc froid de 7000 à 7500 K, si bien qu’un moniteur étalonné à 6500 K (D65) paraît chaud ou jaunâtre à côté. D65 est la température de couleur de référence pour le web et la vidéo.',
      },
      {
        question: 'Quelle différence entre les modes sRGB et DCI-P3 ?',
        answer:
          'sRGB est l’espace couleur standard du web et de la bureautique. DCI-P3 couvre un spectre environ 25 % plus large et sert au cinéma HDR et aux smartphones récents. Pour le web, bloquer le moniteur en sRGB évite la sursaturation.',
      },
    ],
  },
  'screen-uniformity-test': {
    slug: 'test-d-uniformite-d-ecran',
    navLabel: 'Uniformité de l’écran',
    title: 'Test d’uniformité d’écran : vérifier les fuites de lumière, l’IPS glow et le clouding',
    metaTitle: 'Test d’uniformité : fuites de lumière et IPS glow',
    metaDescription:
      'Vérifiez fuites de lumière, IPS glow, clouding, vignettage et effet d’écran sale (DSE) sur votre moniteur avec des mires grises et noires.',
    readingTime: '6 min de lecture',
    category: 'Diagnostic d’écran',
    intro:
      'Aucun écran plat ne répartit sa luminosité parfaitement sur toute sa surface. Mais des fuites de lumière marquées, un IPS glow excessif, des coins assombris ou un « effet d’écran sale » (DSE) peuvent gâcher les scènes sombres et créer des ombres gênantes sur les sites à fond clair. Un test d’uniformité méthodique, dans un éclairage maîtrisé, vous aide à repérer les défauts de dalle et à vérifier qu’ils restent dans les tolérances de fabrication.',
    toolLabel: 'Ouvrir le test d’uniformité',
    toolDescription: 'Inspectez gris foncé 5 %, gris 50 %, noir et blanc, avec grilles en option.',
    sections: [
      {
        title: 'Fuites de lumière, IPS glow et clouding : la vraie différence',
        content: [
          'Avant de renvoyer un moniteur, il faut distinguer un vrai défaut de fabrication des caractéristiques normales de la technologie de la dalle.',
          'Les fuites de lumière (backlight bleed) sont un défaut d’assemblage : la dalle est pincée ou mal posée dans le cadre, et la lumière des LED s’échappe par les bords. Elles forment des taches jaunâtres ou blanches fixes sur les bords, qui ne changent pas selon votre position.',
          'L’IPS glow est une caractéristique optique naturelle de toutes les dalles IPS. Comme les cristaux IPS ne bloquent pas complètement la lumière oblique, une lueur ambrée ou argentée apparaît dans les coins vue de près. Si vous bougez la tête ou reculez d’un demi-mètre, elle se déplace et diminue.',
          'Le clouding et l’effet d’écran sale (DSE) désignent une diffusion inégale du rétroéclairage, qui crée des nuages gris visibles lors des panoramiques sur des aplats, comme une pelouse de football ou un ciel dans un jeu.',
        ],
        tips: [
          'Les fuites de lumière restent au même endroit et avec la même intensité quel que soit l’angle.',
          'L’IPS glow change d’intensité et de position quand vous bougez la tête de gauche à droite.',
          'L’effet d’écran sale (DSE) se voit le mieux sur un gris uni à 20 % ou 50 %.',
        ],
      },
      {
        title: 'Bien préparer l’environnement de test',
        content: [
          'Dans un bureau très éclairé, les fuites de lumière passent inaperçues, alors qu’une photo de téléphone dans le noir en mode nuit exagère le glow dix fois.',
        ],
        steps: [
          'Baissez l’éclairage de la pièce à un niveau confortable de soirée (pas le noir complet).',
          'Désactivez contraste dynamique, égaliseur de noirs ou atténuation locale dans le menu du moniteur.',
          'Réglez la luminosité à votre niveau de travail habituel (environ 120–150 nits, souvent 30 à 50 % dans le menu).',
          'Ouvrez l’écran noir de WhiteScreen.vip en plein écran et placez-vous à votre distance habituelle (au moins une longueur de bras).',
          'Observez les coins : si des faisceaux lumineux partent des bords sans changer quand vous bougez la tête, ce sont des fuites de lumière.',
          'Passez à nos écrans gris 5 % et gris 50 % pour chercher l’effet d’écran sale et le vignettage du centre vers les bords.',
        ],
      },
      {
        title: 'Moyens pratiques d’atténuer les défauts d’uniformité',
        content: [
          'Si votre écran présente des fuites ou un IPS glow légers qui ne justifient pas un retour, quelques réglages simples améliorent nettement le confort.',
        ],
        checklist: [
          'Installez un éclairage d’ambiance (un ruban LED 6500 K derrière l’écran). L’œil s’adapte et les noirs paraissent bien plus profonds.',
          'Baissez la luminosité : 100 % dans une pièce sombre accentue tous les défauts du rétroéclairage.',
          'Vérifiez les vis VESA : trop serrées, elles peuvent déformer le boîtier et provoquer des fuites par pression.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Les fuites de lumière sont-elles couvertes par la garantie ?',
        answer:
          'Les fabricants considèrent les fuites légères et l’IPS glow comme normaux. Des fuites importantes, avec des taches blanches nettes visibles en usage bureautique en plein jour, donnent en général droit à un échange.',
      },
      {
        question: 'Les écrans OLED ont-ils des fuites de lumière ?',
        answer:
          'Non. Les sous-pixels OLED émettent leur propre lumière, sans rétroéclairage. Les pixels noirs s’éteignent complètement : contraste infini, sans fuite de lumière ni IPS glow.',
      },
    ],
  },
  'clean-laptop-screen': {
    slug: 'nettoyer-ecran-ordinateur-portable',
    navLabel: 'Nettoyer l’écran du portable',
    title: 'Comment nettoyer l’écran d’un ordinateur portable sans rayures ni traces',
    metaTitle: 'Nettoyer l’écran d’un portable en toute sécurité',
    metaDescription:
      'Guide sûr pas à pas pour nettoyer l’écran d’un ordinateur portable ou d’un MacBook avec un contrôle sur écran blanc, une microfibre et sans produit agressif.',
    readingTime: '5 min de lecture',
    category: 'Nettoyage et entretien',
    intro:
      'Les écrans des portables, MacBook et moniteurs récents ont des traitements antireflet, des films polarisants et des couches oléophobes très délicats. Un nettoyant vitres, de l’essuie-tout ou une pression excessive peuvent arracher ces couches ou abîmer les cristaux liquides. En utilisant un écran blanc en plein écran comme lumière de contrôle, vous voyez chaque trace, poussière et marque du clavier avant de nettoyer correctement.',
    warning:
      'CONSIGNES DE SÉCURITÉ : éteignez toujours le portable ou le moniteur et débranchez-le avant d’utiliser un chiffon ou un liquide. Ne vaporisez jamais d’eau ou de produit directement sur l’écran, les charnières ou les bords. Un liquide qui s’infiltre dans le bord inférieur peut détruire le rétroéclairage.',
    toolLabel: 'Ouvrir l’écran blanc pour contrôler',
    toolDescription: 'Une lumière blanche en plein écran révèle poussières, empreintes et traces avant le nettoyage.',
    sections: [
      {
        title: 'Pourquoi un écran blanc est le meilleur outil de contrôle',
        content: [
          'Écran éteint ou fond sombre, les traces de doigts, les marques du clavier et la poussière fine se fondent dans le noir de la dalle.',
          'Ouvrir WhiteScreen.vip en plein écran éclaire la dalle d’une lumière uniforme et contrastée. Poussières et traces grasses apparaissent comme des silhouettes sombres sur le fond lumineux : vous savez exactement où nettoyer.',
        ],
      },
      {
        title: 'Nettoyage sûr pas à pas',
        content: ['Suivez ces étapes recommandées par les fabricants pour les écrans mats, brillants et les écrans Retina de MacBook.'],
        steps: [
          'Contrôlez l’écran avec WhiteScreen.vip en plein écran et à 100 % de luminosité pour repérer saletés, gras du clavier et gouttes séchées.',
          'Éteignez complètement le portable et débranchez chargeur et câbles USB. Laissez l’écran refroidir 5 minutes (sur un écran chaud, l’humidité s’évapore d’un coup et laisse des traces).',
          'Utilisez un chiffon microfibre optique propre et dense (comme pour les lunettes et les objectifs). Jamais d’essuie-tout, de mouchoir ni de t-shirt.',
          'Essuyez doucement par mouvements circulaires ou horizontaux qui se chevauchent. Laissez les fibres capter la poussière sans appuyer sur la dalle.',
          'Pour les traces grasses tenaces : humidifiez un coin du chiffon avec un peu d’eau déminéralisée. Il doit être à peine humide, jamais dégoulinant.',
          'Frottez la trace avec le coin humide, puis séchez aussitôt avec la partie sèche du chiffon.',
          'Attendez 3 minutes que l’humidité restante s’évapore avant de refermer l’écran ou d’allumer.',
        ],
      },
      {
        title: 'Erreurs courantes qui abîment les écrans',
        content: ['Beaucoup d’astuces de nettoyage populaires sur internet causent des dégâts irréversibles aux écrans modernes.'],
        checklist: [
          'Pas de nettoyant vitres : l’ammoniaque et le vinaigre décapent le traitement antireflet.',
          'Pas d’acétone, de dissolvant ni de diluant : les solvants attaquent instantanément les plastiques et les cadres.',
          'Ne vaporisez jamais directement sur l’écran : les gouttes coulent vers le bord inférieur, où passent les nappes de l’écran.',
          'Pas d’essuie-tout ni de serviettes en papier : les fibres de cellulose créent des micro-rayures définitives.',
          'N’appuyez pas fort avec les doigts : la pression laisse des taches blanches définitives sur la dalle LCD.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Puis-je utiliser de l’alcool isopropylique à 70 % sur l’écran de mon MacBook ?',
        answer:
          'Apple autorise les lingettes à 70 % d’alcool isopropylique sur l’extérieur et les surfaces en verre de certains MacBook, en essuyant doucement. Pour l’entretien courant, l’eau déminéralisée sur une microfibre est bien plus sûre et ne risque pas d’attaquer l’antireflet.',
      },
      {
        question: 'Pourquoi de l’eau déminéralisée plutôt que l’eau du robinet ?',
        answer:
          'L’eau du robinet contient des minéraux dissous (calcium, magnésium, chlore). En s’évaporant, elle laisse des traces calcaires qui peuvent rayer les films optiques quand on essuie.',
      },
    ],
  },
  'oled-burn-in-prevention': {
    slug: 'prevenir-le-marquage-oled',
    navLabel: 'Marquage OLED',
    title: 'Prévenir le marquage OLED : tester, prévenir et protéger les écrans OLED',
    metaTitle: 'Prévenir et détecter le marquage OLED – guide',
    metaDescription:
      'Comprenez la différence entre marquage OLED et rémanence temporaire. Testez votre écran ou TV OLED avec des aplats de couleur et prolongez sa durée de vie.',
    readingTime: '7 min de lecture',
    category: 'Entretien d’écran',
    intro:
      'Les moniteurs OLED et QD-OLED offrent un contraste inégalé, des noirs profonds et des temps de réponse quasi instantanés. Mais chaque sous-pixel est une diode organique qui s’use peu à peu avec la lumière émise : les éléments fixes (barre des tâches, barre d’adresse, HUD de jeu) peuvent provoquer une usure inégale avec le temps. Comprendre comment le marquage apparaît, comment le tester et comment régler votre système protège votre investissement pendant des années.',
    warning:
      'AVERTISSEMENT HONNÊTE : méfiez-vous des outils trompeurs. Aucun logiciel, aucune couleur clignotante ni aucune vidéo ne peut effacer un marquage OLED permanent. Quand des sous-pixels organiques ont perdu de leur luminosité, le dommage est définitif. Nos outils vous aident à le détecter et à le prévenir avant qu’il ne soit irréversible.',
    toolLabel: 'Ouvrir le test de marquage OLED',
    toolDescription: 'Faites défiler rouge, magenta, cyan et gris foncé pour voir les contours faibles des éléments fixes.',
    sections: [
      {
        title: 'Rémanence temporaire ou marquage permanent',
        content: [
          'Il est essentiel de distinguer la rémanence temporaire du marquage permanent.',
          'La rémanence temporaire est un phénomène électrique : une charge résiduelle reste dans la couche de transistors après l’affichage d’une image très contrastée pendant 15 à 30 minutes. Un fantôme léger de la fenêtre reste visible quelques minutes, puis disparaît seul ou lors d’un cycle automatique de rafraîchissement des pixels.',
          'Le marquage permanent est une usure cumulée et inégale des sous-pixels. Si les sous-pixels rouges ou bleus de la zone de la barre des tâches ont brillé au maximum pendant des milliers d’heures, ils émettent moins de lumière que leurs voisins et laissent une silhouette sombre permanente visible sur les aplats.',
        ],
        tips: [
          'La rémanence temporaire disparaît en quelques minutes ou après un court rafraîchissement de 5 minutes.',
          'Le marquage permanent se voit sur le rouge, le magenta et le gris 5 %, et ne disparaît jamais.',
        ],
      },
      {
        title: 'Comment tester votre écran OLED',
        content: ['Suivez ces étapes avec nos aplats de couleur en plein écran pour repérer les premiers signes d’usure.'],
        steps: [
          'Ouvrez WhiteScreen.vip en plein écran pour masquer les barres du navigateur et la barre des tâches.',
          'Choisissez le rouge uni : les sous-pixels rouges s’usent plus vite que les verts. Examinez la zone de la barre des tâches, de la barre d’adresse et les coins du HUD à la recherche de fantômes sombres.',
          'Choisissez le magenta et le cyan unis : les couleurs composées révèlent les écarts d’usure entre canaux.',
          'Choisissez le gris foncé 5 % et le gris 10 % : ces gris presque noirs révèlent bandes verticales et usure inégale invisibles sur le blanc pur.',
          'Regardez à distance normale : si vous voyez des contours nets d’icônes ou de barres d’outils, la dalle est marquée de façon permanente.',
        ],
      },
      {
        title: 'Règles essentielles pour éviter le marquage OLED',
        content: [
          'Les moniteurs OLED récents intègrent des protections automatiques, mais quelques habitudes simples dans le système restent la meilleure défense contre l’usure prématurée.',
        ],
        checklist: [
          'Activez « Masquer automatiquement la barre des tâches » sous Windows (ou le masquage du Dock sous macOS).',
          'Utilisez le mode sombre sous Windows, macOS et dans le navigateur : un pixel noir OLED ne consomme rien et ne s’use pas.',
          'Réglez la mise en veille de l’écran sur 3 à 5 minutes d’inactivité pour que le bureau ne reste pas allumé en votre absence.',
          'Utilisez un écran de veille plein écran, comme notre horloge flip ou l’écran noir, quand vous quittez votre bureau.',
          'Ne débranchez pas le moniteur OLED juste après l’avoir éteint : en veille, il effectue un cycle automatique d’entretien des pixels.',
          'Activez les protections du menu du moniteur : décalage des pixels, limitation de luminosité des logos et gestion thermique.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Les exerciseurs de pixels clignotants réparent-ils le marquage OLED ?',
        answer:
          'Non. Les images clignotantes ne régénèrent pas la matière organique usée. Des motifs agressifs à pleine luminosité ajoutent même un stress thermique inutile à la dalle.',
      },
      {
        question: 'À quelle fréquence lancer le rafraîchissement complet des pixels ?',
        answer:
          'Seulement quand le fabricant le demande (en général toutes les 500 à 1 500 heures) ou si une rémanence forte persiste. L’utiliser trop souvent accélère l’usure de la dalle.',
      },
    ],
  },
  'monitor-test': {
    slug: 'test-de-moniteur',
    navLabel: 'Test de moniteur',
    title: 'Guide complet pour tester un moniteur : défauts, couleurs et vitesse',
    metaTitle: 'Guide pour tester un moniteur neuf étape par étape',
    metaDescription:
      'Guide complet pour tester un moniteur neuf ou d’occasion : pixels morts, netteté, gamma, contraste, fuites de lumière et temps de réponse.',
    readingTime: '6 min de lecture',
    category: 'Diagnostic d’écran',
    intro:
      'Déballer un nouveau moniteur est un plaisir, mais des défauts de fabrication comme des sous-pixels morts, des fuites de lumière importantes, des couleurs irrégulières ou un gamma incorrect échappent souvent au contrôle qualité. Comme la plupart des revendeurs offrent 14 à 30 jours pour un retour, un test complet de 15 minutes dès la livraison est le meilleur moyen de s’assurer d’une dalle impeccable.',
    toolLabel: 'Ouvrir le test complet du moniteur',
    toolDescription: 'Mires complètes : dégradés, chartes de gamma, grilles de netteté et barres de couleur.',
    sections: [
      {
        title: 'La liste en 6 étapes pour un moniteur neuf',
        content: ['Avant de jeter le carton ou d’enregistrer la garantie, faites cette évaluation de la dalle en 6 étapes.'],
        steps: [
          '1. Contrôle physique et câbles : vérifiez que le câble DisplayPort ou HDMI gère la définition native, la fréquence (par ex. 144–240 Hz) et la couleur 10 bits du moniteur.',
          '2. Pixels morts : ouvrez blanc, noir, rouge, vert et bleu en plein écran et inspectez chaque quart de l’écran à la recherche de sous-pixels bloqués ou morts.',
          '3. Uniformité et fuites : dans une pièce peu éclairée, examinez un écran noir pour les fuites sur les bords et un gris 50 % pour l’effet d’écran sale.',
          '4. Gamma et contraste : affichez notre rampe de gris pour vérifier que les paliers presque noirs (1–5 %) et presque blancs (95–99 %) restent distincts.',
          '5. Netteté et mise à l’échelle : examinez des lignes alternées d’un pixel noir et blanc pour vérifier un texte net, sans franges colorées ni moiré.',
          '6. Netteté en mouvement et ghosting : utilisez des mires de mouvement pour vérifier le temps de réponse et réglez l’Overdrive pour éviter le ghosting inverse.',
        ],
      },
      {
        title: 'Ce qui est normal selon le type de dalle',
        content: [
          'Connaître la technologie de votre dalle évite de renvoyer un moniteur pour des caractéristiques qui sont des compromis normaux.',
          'Dalles IPS : excellentes en fidélité des couleurs et en angles de vision (178°). Compromis normal : contraste plus faible (1 000:1) et léger IPS glow vu de biais.',
          'Dalles VA : contraste élevé (3 000:1 à 5 000:1) et noirs profonds. Compromis normal : traînées sombres dans les scènes rapides et angles de vision plus étroits.',
          'Dalles OLED / QD-OLED : contraste infini, vrais noirs et réponse de 0,03 ms. Compromis normal : rémanence possible et luminosité plein écran soutenue plus faible.',
          'Dalles TN : anciens écrans e-sport à haute fréquence. Compromis normal : couleurs délavées et fort changement de teinte vertical vu un peu d’en haut ou d’en bas.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Faut-il tester le moniteur avec ou sans HDR ?',
        answer:
          'Faites les tests de base (couleur, uniformité) avec le HDR de Windows désactivé, car il peut provoquer des erreurs de tone mapping sur les écrans sans gradation locale. Une fois le SDR validé, activez le HDR pour vérifier la luminosité de crête et les zones de gradation.',
      },
      {
        question: 'Qu’est-ce que l’Overdrive et comment le régler ?',
        answer:
          'L’Overdrive applique une tension supplémentaire aux sous-pixels pour accélérer les transitions et réduire le flou de mouvement. Trop élevé, il crée un « ghosting inverse » (halos clairs derrière les objets en mouvement). Le réglage « Normal » ou « Rapide » est en général le meilleur ; « Extrême » dépasse presque toujours.',
      },
    ],
  },
  'white-screen-for-video-calls-and-zoom': {
    slug: 'ecran-blanc-pour-visioconference',
    navLabel: 'Lumière pour Zoom',
    title: 'Utiliser un écran blanc comme lumière douce pour les visioconférences et Zoom',
    metaTitle: 'Un écran blanc comme lumière douce en visio',
    metaDescription:
      'Transformez votre moniteur ou portable en lumière flatteuse, alternative à l’anneau lumineux, pour Zoom, Google Meet et les visioconférences, sans rien acheter.',
    readingTime: '5 min de lecture',
    category: 'Éclairage et visuels',
    intro:
      'Une bonne image de webcam dépend bien plus de l’éclairage que d’une caméra 4K coûteuse. En lumière faible, le capteur augmente le gain numérique (ISO) : bruit et grain apparaissent. En ouvrant WhiteScreen.vip sur un deuxième écran ou à côté de la fenêtre d’appel, vous transformez instantanément votre écran en grande boîte à lumière diffuse.',
    toolLabel: 'Ouvrir la lumière pour visio',
    toolDescription: 'Lumière blanche douce réglable du chaud au froid, pensée pour éclairer la webcam.',
    sections: [
      {
        title: 'Pourquoi un grand écran éclaire mieux qu’un petit anneau lumineux',
        content: [
          'En photographie, plus la source de lumière est grande par rapport au visage, plus les ombres sont douces et flatteuses. Un anneau de 25 cm crée des reflets durs dans les lunettes et des ombres marquées.',
          'Un moniteur de 24 ou 27 pouces affichant un écran blanc forme une large surface lumineuse qui éclaire le contour des yeux, adoucit la peau et crée des reflets naturels dans le regard.',
        ],
      },
      {
        title: 'Comment placer votre écran blanc',
        content: ['Obtenez un éclairage du visage plus flatteur avec ces réglages.'],
        steps: [
          'Avec deux écrans : affichez l’écran blanc sur celui qui est juste derrière ou à côté de la webcam.',
          'Avec un seul écran : partagez l’écran en deux, Zoom ou Teams d’un côté et WhiteScreen.vip de l’autre.',
          'Réglez la température de couleur : un blanc chaud (environ 5000–5500 K) flatte la peau ; un blanc lumière du jour (6500 K) convient si la pièce reçoit du soleil.',
          'Réglez la luminosité : entre 70 et 90 % pour ne pas plisser les yeux.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Laisser un écran blanc ouvert pendant de longues réunions abîme-t-il le moniteur ?',
        answer:
          'Sur les dalles LCD/LED, un écran blanc ne cause aucun dommage et presque aucune usure. Sur OLED, gardez une luminosité modérée (50–70 %) pour limiter la chaleur.',
      },
    ],
  },
  'fullscreen-white-screen-for-drawing-and-tracing': {
    slug: 'ecran-blanc-pour-decalquer-et-dessiner',
    navLabel: 'Dessin et décalque',
    title: 'Utiliser une tablette ou un moniteur comme table lumineuse pour décalquer et dessiner',
    metaTitle: 'Une tablette ou un écran comme table lumineuse',
    metaDescription:
      'Transformez votre iPad, tablette Android ou portable en table lumineuse numérique pour décalquer croquis, calligraphie et négatifs.',
    readingTime: '5 min de lecture',
    category: 'Éclairage et visuels',
    intro:
      'Les tables lumineuses et boîtes à calquer classiques coûtent souvent plus de 60 € et encombrent le bureau. Si vous avez déjà un iPad, une tablette Android ou un portable, vous pouvez en faire en un clic une table lumineuse numérique très claire et sans scintillement.',
    toolLabel: 'Ouvrir l’écran blanc comme table lumineuse',
    toolDescription: 'Lumière blanche plein écran idéale pour décalquer sur papier, faire des pochoirs et regarder des négatifs.',
    sections: [
      {
        title: 'Préparer le décalque pas à pas',
        content: ['Suivez ces conseils pour décalquer sans déclencher de touches involontaires sur l’écran tactile.'],
        steps: [
          'Ouvrez WhiteScreen.vip en plein écran et montez la luminosité de l’appareil à 100 %.',
          'Bloquez le tactile : sur iPad, activez l’Accès guidé (Réglages > Accessibilité > Accès guidé) pour désactiver le toucher pendant que vous dessinez.',
          'Sur Android : utilisez l’épinglage d’écran ou une appli de verrouillage pour éviter les touches accidentelles.',
          'Posez le modèle sur l’écran, puis une feuille de papier calque ou de papier léger (moins de 90 g/m²) par-dessus.',
          'Utilisez un crayon tendre (2B à 4B) ou un feutre fin avec une pression légère pour suivre les contours facilement.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Dessiner au crayon sur l’écran peut-il abîmer la vitre ?',
        answer:
          'La vitre des tablettes (comme le Gorilla Glass) est bien plus dure que la mine de graphite et ne se raye pas en usage normal. Évitez toutefois d’appuyer fort et vérifiez qu’aucun grain de sable n’est coincé sous le papier.',
      },
    ],
  },
  'best-monitor-settings-for-eye-strain': {
    slug: 'reglages-ecran-contre-la-fatigue-visuelle',
    navLabel: 'Réglages contre la fatigue visuelle',
    title: 'Les meilleurs réglages d’écran contre la fatigue visuelle, les maux de tête et la lecture le soir',
    metaTitle: 'Meilleurs réglages d’écran contre la fatigue visuelle',
    metaDescription:
      'Optimisez luminosité, contraste, température de couleur et éclairage de la pièce pour éviter la fatigue visuelle numérique et le syndrome de vision informatique.',
    readingTime: '6 min de lecture',
    category: 'Entretien d’écran',
    intro:
      'Fixer un moniteur trop lumineux et mal réglé 8 à 10 heures par jour provoque le syndrome de vision informatique : yeux secs, vision floue, maux de tête et nuque raide. Accorder la luminosité de l’écran à l’éclairage de la pièce est l’amélioration ergonomique la plus efficace qui soit.',
    toolLabel: 'Ouvrir l’écran blanc',
    toolDescription: 'Comparez la luminosité de l’écran avec une feuille de papier sous l’éclairage ambiant pour trouver un réglage confortable.',
    sections: [
      {
        title: 'Réglages essentiels pour le confort des yeux',
        content: ['Appliquez ces règles d’ergonomie visuelle issues de la recherche pour réduire tout de suite la fatigue.'],
        steps: [
          'Le test de la feuille blanche : tenez une feuille blanche à côté de l’écran et réglez la luminosité jusqu’à ce qu’une fenêtre blanche en plein écran soit aussi claire que le papier.',
          'Température de couleur : passez d’un bleu froid à 7500 K à un ton chaud de 5000–6500 K.',
          'Évitez le scintillement PWM : vérifiez que l’écran est « Flicker-Free » (gradation en courant continu plutôt que modulation basse fréquence).',
          'Appliquez la règle 20-20-20 : toutes les 20 minutes, regardez un objet à 6 mètres pendant au moins 20 secondes pour détendre les muscles des yeux.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Le mode sombre évite-t-il mieux la fatigue visuelle que le mode clair ?',
        answer:
          'Dans une pièce sombre, le mode sombre réduit la lumière totale et donc l’éblouissement. Mais pour lire de longs textes dans une pièce bien éclairée, un texte noir sur un fond blanc doux offre plus de contraste et une lecture plus rapide.',
      },
    ],
  },
  'common-monitor-display-problems-diagnostics': {
    slug: 'problemes-courants-d-ecran',
    navLabel: 'Diagnostic d’écran',
    title: 'Problèmes courants de moniteur : diagnostiquer et résoudre les défauts d’affichage',
    metaTitle: 'Problèmes courants de moniteur et diagnostic',
    metaDescription:
      'Guide de diagnostic des problèmes courants : scintillement, bandes de couleur, ghosting, pixels bloqués et texte flou, avec des solutions rapides.',
    readingTime: '6 min de lecture',
    category: 'Diagnostic d’écran',
    intro:
      'D’un micro-scintillement mystérieux à un texte flou ou une dominante de couleur soudaine, les défauts d’affichage peuvent venir d’un bug de pilote, d’un câble défectueux, d’une mauvaise fréquence ou d’une panne de dalle. Ce guide vous aide à isoler méthodiquement l’origine de chaque anomalie.',
    toolLabel: 'Ouvrir le test du moniteur',
    toolDescription: 'Utilisez des mires de diagnostic pour séparer les défauts matériels des problèmes de câble ou de pilote.',
    sections: [
      {
        title: 'Procédure de diagnostic des défauts d’affichage',
        content: ['Suivez cet ordre dès que l’écran présente une anomalie visuelle.'],
        steps: [
          'Vérifiez le câble : un câble HDMI ou DisplayPort mal branché ou non certifié provoque coupures, étincelles vertes et scintillement.',
          'Vérifiez la définition native et la fréquence : un écran 4K en 1080p sans mise à l’échelle entière affiche un texte flou.',
          'Testez avec un autre appareil : branchez un portable ou une console sur la même entrée pour savoir si le défaut vient de la carte graphique du PC ou de la dalle.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Pourquoi mon écran devient-il noir pendant 2 secondes de temps en temps ?',
        answer:
          'Les coupures brèves d’1 à 2 secondes viennent presque toujours d’une renégociation de bande passante de la compression DSC, d’interférences électromagnétiques (un réfrigérateur ou un ventilateur qui démarre à proximité) ou d’un câble HDMI/DP de faible qualité qui décroche aux hautes fréquences.',
      },
    ],
  },
}
