import type { TopicTranslation } from './types'

export const fr: TopicTranslation = {
  hubs: {
    '/color-screens': {
      intro:
        'Les écrans de couleur remplissent tout votre écran d’une seule couleur unie. Choisissez une couleur, appuyez sur F pour le plein écran et chaque pixel affiche exactement cette couleur. Ils servent à trouver les pixels morts et bloqués, d’éclairage doux, de fond pour incrustation (chroma key) et d’écran calme, sans distraction.',
      details: [
        {
          heading: 'Quelle couleur choisir ?',
          text: 'Le blanc pour éclairer et nettoyer, le noir pour masquer l’écran ou repérer les fuites de lumière, le rouge, le vert et le bleu purs pour tester chaque sous-pixel. Le gris révèle une luminosité inégale, et l’orange ou le rose chauds font une veilleuse ou une lumière à selfie.',
        },
        {
          heading: 'Des valeurs de couleur exactes',
          text: 'Chaque écran utilise une valeur hexadécimale exacte (par exemple #FF0000 pour le rouge) pour des tests fiables. Vous pouvez quand même saisir n’importe quel code et télécharger n’importe quelle couleur en PNG jusqu’en 8K.',
        },
      ],
      faqs: [
        { question: 'Comment mettre tout l’écran d’une seule couleur ?', answer: 'Ouvrez la page de la couleur et appuyez sur F ou cliquez sur Plein écran. Le navigateur masque ses barres et n’affiche que la couleur. Échap pour quitter.' },
        { question: 'Cela marche-t-il sur téléphone et TV ?', answer: 'Oui. Ils fonctionnent dans tout navigateur récent, y compris Android, iPhone, Smart TV et consoles. Dans Safari sur iPhone, la couleur remplit la fenêtre du navigateur.' },
        { question: 'Puis-je télécharger une image de couleur unie ?', answer: 'Oui. Chaque page propose un PNG gratuit de la couleur, et le panneau de téléchargement crée toute taille de 720p à 8K.' },
      ],
    },
    '/screen-tests': {
      intro:
        'Les tests d’écran sont des mires et des mesures en plein écran qui montrent si votre écran fonctionne bien. Ils permettent de trouver les pixels morts, de mesurer la vraie fréquence en Hz, de repérer le ghosting, les fuites de lumière et le marquage, de vérifier les zones mortes d’un écran tactile et de juger les couleurs, le tout dans le navigateur, sans rien installer.',
      details: [
        {
          heading: 'Quel test faire en premier ?',
          text: 'Sur un écran neuf ou d’occasion, commencez par le test de pixels morts et le test d’uniformité : ils repèrent les défauts le plus souvent couverts par un retour ou la garantie. Les joueurs ajouteront la fréquence et le ghosting, les possesseurs de téléphone ou tablette le test tactile, et sur OLED les tests de marquage.',
        },
        {
          heading: 'Les tests dans le navigateur sont-ils fiables ?',
          text: 'Les mires utilisent des valeurs de pixel exactes et le temps vient de l’horloge d’images du navigateur : le résultat correspond à ce que montre vraiment l’écran. Ils ne remplacent pas une sonde pour un calibrage professionnel.',
        },
      ],
      faqs: [
        { question: 'Comment vérifier si mon écran a un défaut ?', answer: 'Nettoyez l’écran, puis faites le test de pixels morts, le test d’uniformité dans une pièce sombre et le test de fréquence. Environ cinq minutes au total.' },
        { question: 'Les tests marchent-ils sur TV et téléphone ?', answer: 'Oui. Ouvrez la page dans le navigateur de l’appareil et passez en plein écran. Le test tactile est fait pour les téléphones et tablettes.' },
        { question: 'Les tests sont-ils gratuits ?', answer: 'Oui. Tous sont gratuits, sans inscription, et fonctionnent uniquement sur votre appareil.' },
      ],
    },
    '/screensavers': {
      intro:
        'Les économiseurs d’écran en ligne tournent dans le navigateur au lieu d’être installés sur l’ordinateur. Ouvrez-en un, passez en plein écran et il fonctionne sur tout appareil : PC, Mac, Chromebook, Smart TV ou vieille tablette sur le bureau. Choisissez la pluie numérique de Matrix, le logo DVD qui rebondit, une horloge à volets rétro ou des citations motivantes.',
      details: [
        {
          heading: 'Pourquoi un économiseur dans le navigateur ?',
          text: 'Il marche sur les appareils sans réglage d’économiseur, comme les Smart TV et Chromebooks, ne demande aucune installation et garde l’écran allumé tant qu’il tourne, idéal pour un accueil, un bureau ou un stream.',
        },
      ],
      faqs: [
        { question: 'Un économiseur en ligne empêche-t-il la mise en veille ?', answer: 'En plein écran, les navigateurs compatibles gardent l’écran allumé grâce à l’API Screen Wake Lock, jusqu’à ce que vous quittiez.' },
        { question: 'Puis-je les utiliser sur une Smart TV ?', answer: 'Oui. Ouvrez la page dans le navigateur de la TV et appuyez sur le bouton plein écran.' },
      ],
    },
    '/prank-screens': {
      intro:
        'Les écrans blagues sont de faux écrans réalistes et inoffensifs dans le navigateur : mises à jour Windows, macOS, ChromeOS et Android, écran bleu de la mort, écran piraté et fausses réunions vidéo. Ouvrez-en un, passez en plein écran et appuyez sur Échap quand la blague est finie. Rien n’est installé ni modifié.',
      details: [
        {
          heading: 'Une blague responsable',
          text: 'Faites court et révélez la blague. N’utilisez jamais une fausse mise à jour ou erreur pour pousser quelqu’un à payer ou à donner l’accès à un appareil : c’est une arnaque, pas une blague.',
        },
        {
          heading: 'Aussi comme accessoire',
          text: 'Cinéastes, streamers, enseignants et escape games les utilisent comme accessoires crédibles, car ils rendent bien à l’écran sans toucher à un vrai système.',
        },
      ],
      faqs: [
        { question: 'Ces écrans sont-ils sans danger ?', answer: 'Oui. Ce sont des images et animations dans un onglet. Ils ne peuvent rien installer, lire de fichiers ni modifier de réglages.' },
        { question: 'Comment quitter un écran blague ?', answer: 'Appuyez sur Échap, ou bougez la souris ou touchez l’écran pour afficher le bouton fermer. Fermer l’onglet marche aussi.' },
      ],
    },
    '/visual-effects': {
      intro:
        'Les effets visuels transforment votre écran en autre chose qu’une image : un générateur de bruit avec neige TV, un anneau lumineux ou une lumière pour visio, un écran cassé, un terminal de hacker, du bruit animé, des dégradés et des cycles de couleur. Tous tournent en plein écran dans le navigateur, sur téléphone, ordinateur et TV.',
      details: [
        {
          heading: 'Lumière, son et amusement au même endroit',
          text: 'Utilisez l’anneau lumineux et l’éclairage pour Zoom pour éclairer votre visage, les générateurs de bruit pour vous concentrer ou dormir, et l’écran cassé et le Hacker Typer pour les blagues et les vidéos.',
        },
      ],
      faqs: [
        { question: 'Les effets clignotants sont-ils sans danger ?', answer: 'Un scintillement rapide peut déclencher des crises chez les personnes atteintes d’épilepsie photosensible. Baissez la vitesse ou choisissez un effet calme si vous êtes sensible.' },
        { question: 'Les générateurs de bruit consomment-ils des données ?', answer: 'Non. Le son est généré sur votre appareil, rien n’est diffusé en streaming.' },
      ],
    },
    '/online-timers': {
      intro:
        'Les minuteurs en ligne affichent de grands chiffres plein écran lisibles depuis l’autre bout de la pièce. Utilisez le compte à rebours pour les cours, réunions et examens, le Pomodoro pour travailler par blocs de 25 minutes et le chronomètre avec tours pour le sport et les courses. Ils restent précis même dans les onglets en arrière-plan.',
      details: [
        {
          heading: 'Précis en arrière-plan',
          text: 'Chaque minuteur se base sur l’horloge de l’appareil au lieu de compter des tics, il reste donc exact quand le navigateur ralentit les onglets cachés, et le titre de l’onglet affiche le temps restant.',
        },
      ],
      faqs: [
        { question: 'Le minuteur sonne-t-il si l’onglet est en arrière-plan ?', answer: 'Oui, tant que l’onglet reste ouvert. Le signal retentit à la fin, s’il est activé.' },
        { question: 'Puis-je afficher un minuteur sur un vidéoprojecteur ou une TV ?', answer: 'Oui. Ouvrez-le dans le navigateur et appuyez sur F pour le plein écran.' },
      ],
    },
  },
  colorAnswer: {
    template: '{subject} remplit tout votre écran de {word} pur ({hex}). Cliquez sur Plein écran ou appuyez sur F et chaque pixel affiche la même couleur, sans barres ni distractions. {tail}',
    features: ['{word} pur {hex} ou n’importe quelle couleur hexadécimale', 'Plein écran en un clic avec réglage de luminosité', 'Téléchargement PNG gratuit de 720p à 8K'],
    benefits: ['Fonctionne aussitôt sur téléphone, ordinateur, moniteur et Smart TV', 'Sans appli, sans inscription, rien à installer'],
  },
  colors: {
    red: { subject: 'Un écran rouge', word: 'rouge', tail: 'Seuls les sous-pixels rouges s’allument, donc les sous-pixels verts ou bleus morts ou bloqués se repèrent facilement. Il sert aussi de veilleuse rouge qui préserve la vision nocturne.', feature: 'Les flèches passent du rouge au vert et au bleu', benefit: 'Repère en quelques secondes les sous-pixels verts ou bleus bloqués' },
    green: { subject: 'Un écran vert', word: 'vert', tail: 'Les créateurs s’en servent comme fond vert rapide, et comme seuls les sous-pixels verts s’allument, les rouges ou bleus défectueux ressortent lors d’un test de pixels.', feature: 'Vert chroma vif pour OBS, Premiere ou CapCut', benefit: 'Un fond vert gratuit quand on n’a pas de tissu vert' },
    blue: { subject: 'Un écran bleu', word: 'bleu', tail: 'Il n’allume que les sous-pixels bleus pour les tests de pixels et sert aussi de fond bleu pour incrustation ou de lumière froide et calme pour les photos.', feature: 'Bleu pur pour tester les sous-pixels et l’incrustation sur fond bleu', benefit: 'Vérifie le canal bleu et rend les pixels bloqués visibles' },
    yellow: { subject: 'Un écran jaune', word: 'jaune', tail: 'Le jaune allume ensemble les sous-pixels rouges et verts, donc un sous-pixel bleu mort ou une teinte anormale se voit nettement. C’est aussi une lumière chaude et gaie pour les photos.', feature: 'Jaune exact avec rouge et vert à fond', benefit: 'Repère les sous-pixels bleus morts et les teintes inégales' },
    orange: { subject: 'Un écran orange', word: 'orange', tail: 'Sa teinte chaude contient moins de lumière bleue que le blanc : beaucoup l’utilisent comme veilleuse douce, ambiance coucher de soleil ou lumière d’appoint chaude pour la vidéo.', feature: 'Réglage de luminosité pour une veilleuse chaude et tamisée', benefit: 'Une lumière chaude avec bien moins de bleu qu’un écran blanc' },
    pink: { subject: 'Un écran rose', word: 'rose', tail: 'Le rose vif donne une lumière douce et flatteuse pour les selfies et le maquillage, et crée l’ambiance pour les fêtes, les streams et les chambres.', feature: 'Rose vif par défaut, avec des teintes plus claires ou plus foncées', benefit: 'Une lumière douce et flatteuse pour selfies et maquillage' },
    purple: { subject: 'Un écran violet', word: 'violet', tail: 'Le violet mélange lumière rouge et bleue : une ambiance marquante pour les streams, les setups gaming et les fêtes, et un moyen rapide de vérifier que le canal vert est bien éteint.', feature: 'Violet vif avec des teintes de lavande à pourpre', benefit: 'Une ambiance immédiate pour streams et fêtes' },
    cyan: { subject: 'Un écran cyan', word: 'cyan', tail: 'Le cyan allume ensemble vert et bleu, donc un sous-pixel rouge bloqué ou un canal manquant se voit facilement. C’est aussi une lumière d’accent froide et nette.', feature: 'Cyan pur pour vérifier les canaux vert et bleu', benefit: 'Montre les sous-pixels rouges défectueux et les dominantes' },
    magenta: { subject: 'Un écran magenta', word: 'magenta', tail: 'Le magenta allume rouge et bleu en laissant le vert éteint : les sous-pixels verts bloqués et les dominantes vertes sautent aux yeux lors des tests.', feature: 'Magenta pur pour les canaux rouge et bleu', benefit: 'Montre les sous-pixels verts bloqués et les dominantes vertes' },
    gray: { subject: 'Un écran gris', word: 'gris', tail: 'Un gris moyen est la méthode standard pour repérer l’effet d’écran sale, les nuages, le vignettage et les bandes de couleur que les couleurs vives cachent.', feature: 'Passez du gris clair au gris moyen et foncé', benefit: 'Révèle les défauts d’uniformité et l’effet d’écran sale' },
  },
}
