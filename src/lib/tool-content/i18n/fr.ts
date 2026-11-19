import type { ToolTranslations } from './types'

export const fr: ToolTranslations = {
  'white-screen': {
    glance: {
      answer:
        'Un écran blanc remplit tout votre écran de blanc pur (#FFFFFF). Cliquez sur Plein écran ou appuyez sur F et chaque pixel affiche la même couleur, sans barres ni distractions. À luminosité maximale, c’est la lumière la plus forte que votre écran peut produire : éclairage pour visioconférences et photos, nettoyage du moniteur, calque de dessins et recherche de pixels morts.',
      features: [
        'Blanc pur #FFFFFF ou n’importe quelle couleur hexadécimale',
        'Plein écran en un clic avec réglage de luminosité',
        'Température de couleur de 2700 K (chaude) à 9300 K (froide)',
        'Téléchargement PNG gratuit de 720p à 8K',
      ],
      benefits: [
        'Une lumière douce immédiate pour appels, selfies et calques',
        'Fonctionne sur mobile, ordinateur, moniteur et Smart TV',
        'Sans appli, sans inscription, rien à installer',
      ],
    },
  },
  'black-screen': {
    glance: {
      answer:
        'Un écran noir rend tout votre écran noir pur (#000000) en un clic. Sur un écran OLED, les pixels s’éteignent complètement : c’est le moyen le plus rapide de masquer l’écran, de repérer les fuites de lumière ou d’économiser de l’énergie.',
      features: [
        'Noir pur #000000 ou toute couleur personnalisée',
        'Plein écran en un clic avec réglage de luminosité',
        'Garde l’écran allumé en plein écran',
        'Téléchargement PNG gratuit de 720p à 8K',
      ],
      benefits: ['Révèle fuites de lumière, IPS glow et pixels bloqués', 'Économise l’énergie sur OLED', 'Gratuit, rien à installer'],
    },
  },
  'dead-pixel-test': {
    glance: {
      answer:
        'Un test de pixels morts affiche des couleurs unies en plein écran, l’une après l’autre, pour faire ressortir les pixels défectueux. Un pixel mort reste noir sur toutes les couleurs, un pixel bloqué reste d’une couleur vive et un pixel chaud reste blanc. Le contrôle complet prend environ une minute sur tout moniteur, ordinateur portable, TV ou smartphone.',
      features: [
        'Fonds plein écran blanc, noir, rouge, vert, bleu et gris',
        'Défilement automatique ou avec les flèches',
        'Compatible dalles LCD, IPS, VA, OLED et mini-LED',
        'Conseils pour distinguer pixels morts, bloqués et chauds',
      ],
      benefits: [
        'Repérez les défauts avant la fin du délai de retour',
        'Vérifiez un écran ou un téléphone d’occasion avant de payer',
        'Gratuit, privé, rien à installer',
      ],
    },
    steps: [
      'Nettoyez d’abord l’écran pour ne pas confondre la poussière avec un pixel défectueux.',
      'Appuyez sur F pour le plein écran, puis utilisez les flèches, cliquez ou activez le défilement automatique.',
      'Examinez toute la dalle sur chaque couleur. Une loupe ou le zoom de l’appareil photo aide.',
      'Des points sombres sur les couleurs claires signalent des pixels morts ; des points clairs ou colorés sur le noir, des pixels bloqués ou chauds.',
    ],
    useCases: [
      { title: 'Nouvel écran', description: 'Contrôlez un moniteur, un portable ou une TV neufs pendant le délai de retour.' },
      { title: 'Achat d’occasion', description: 'Vérifiez un téléphone ou un portable d’occasion avant de payer.' },
      { title: 'Preuve pour la garantie', description: 'Photographiez le défaut sur une couleur unie pour votre réclamation.' },
      { title: 'Contrôle régulier', description: 'Vérifiez de temps en temps qu’aucun nouveau défaut n’est apparu.' },
    ],
    faqs: [
      {
        question: 'Quelle différence entre un pixel mort et un pixel bloqué ?',
        answer:
          'Un pixel mort reste sombre sur toutes les couleurs. Un pixel bloqué reste allumé d’une couleur, comme un point rouge sur noir. Un pixel chaud reste blanc. Les pixels bloqués se rétablissent parfois ; les pixels morts presque jamais.',
      },
      {
        question: 'Cet outil répare-t-il les pixels morts ?',
        answer:
          'Non. Le test sert seulement à voir les défauts. Faire défiler vite les couleurs est parfois conseillé pour les pixels bloqués, sans garantie, et un pixel mort est une panne matérielle.',
      },
      {
        question: 'Comment signaler un pixel mort ?',
        answer:
          'Prenez une photo nette du défaut sur la couleur où il se voit le mieux, notez sa position et contactez le fabricant ou le vendeur avec votre preuve d’achat.',
      },
    ],
  },
  'screen-refresh-rate-test': {
    glance: {
      answer:
        'Un test de fréquence de rafraîchissement mesure combien de fois par seconde votre écran redessine l’image, en hertz (Hz). Il chronomètre les images du navigateur et indique 60, 75, 120, 144, 165 ou 240 Hz, pour confirmer que votre écran haute fréquence tourne bien à la vitesse annoncée.',
      features: [
        'Mesure en direct des Hz avec la fréquence standard la plus proche',
        'Temps d’image moyen, minimum et maximum',
        'Nouvelle mesure après un changement de réglage',
        'Fonctionne sur moniteurs, portables, smartphones et tablettes',
      ],
      benefits: [
        'Vérifiez que votre écran 144 ou 240 Hz n’est pas bloqué à 60 Hz',
        'Contrôlez câble, port et réglage Windows ou macOS',
        'Résultat en quelques secondes, sans téléchargement',
      ],
    },
    steps: [
      'Ouvrez la page et attendez une ou deux secondes que la mesure se stabilise.',
      'Lisez la valeur en Hz et la fréquence standard la plus proche.',
      'Si un écran haute fréquence affiche 60 Hz, vérifiez les réglages d’affichage et le câble, puis testez à nouveau.',
      'Appuyez sur F ou touchez deux fois pour le plein écran, et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Nouvel écran', description: 'Confirmez qu’un écran 144 ou 240 Hz tourne vraiment à cette fréquence.' },
      { title: 'Câble et port', description: 'Les anciens câbles ou ports HDMI peuvent limiter à 60 Hz.' },
      { title: 'Portable sur batterie', description: 'Beaucoup de portables passent à 60 Hz sur batterie.' },
      { title: 'Smartphones et tablettes', description: 'Vérifiez si les modes adaptatifs 90/120 Hz sont actifs.' },
    ],
    faqs: [
      {
        question: 'Pourquoi mon écran 144 Hz affiche-t-il 60 Hz ?',
        answer:
          'La fréquence se règle dans les paramètres d’affichage du système, et le câble doit la prendre en charge (DisplayPort ou HDMI 2.0 et plus). Vérifiez aussi que la fenêtre du navigateur est sur le bon écran.',
      },
      {
        question: 'Pourquoi la valeur varie-t-elle ?',
        answer:
          'Les onglets chargés, l’économie d’énergie et le rafraîchissement variable (FreeSync, G-Sync, ProMotion) modifient le rythme des images. La mesure utilise la médiane des dernières images pour lisser.',
      },
      {
        question: 'La fréquence de rafraîchissement, c’est la même chose que les FPS ?',
        answer:
          'Non. La fréquence indique combien de fois l’écran se met à jour ; les FPS, combien de nouvelles images un jeu ou une vidéo fournit. Vous ne voyez que le nombre d’images permis par la fréquence.',
      },
    ],
  },
  'touch-screen-test': {
    glance: {
      answer:
        'Un test d’écran tactile vérifie que chaque zone de votre écran réagit. Touchez chaque case d’une grille pour trouver les zones mortes, tracez des lignes pour repérer coupures et sauts, et posez plusieurs doigts pour voir combien de points tactiles votre téléphone ou tablette gère.',
      features: [
        'Grille qui marque chaque case touchée, avec couverture en %',
        'Mode dessin pour repérer trous, sauts et touches fantômes',
        'Mode multitouch qui compte les doigts simultanés',
        'Fonctionne au doigt, au stylet et à la souris',
      ],
      benefits: ['Trouvez les zones mortes après une chute ou une réparation', 'Testez un téléphone ou une tablette d’occasion avant l’achat', 'Aucune appli à installer'],
    },
    steps: [
      'Choisissez la grille et glissez lentement le doigt sur chaque case jusqu’à 100 % de couverture.',
      'Les cases qui ne se remplissent pas après plusieurs essais signalent une zone morte.',
      'Passez en mode Dessin et tracez des lignes lentes ; coupures ou sauts indiquent des touches manquées.',
      'Utilisez Multitouch et posez plusieurs doigts pour voir combien sont détectés en même temps.',
    ],
    useCases: [
      { title: 'Zones qui ne répondent pas', description: 'Localisez précisément où le téléphone ou la tablette ignore les touches.' },
      { title: 'Après une réparation', description: 'Testez la nouvelle vitre tactile avant de récupérer l’appareil.' },
      { title: 'Achat d’occasion', description: 'Testez toute la surface en une minute.' },
      { title: 'Touches fantômes', description: 'Repérez les points qui apparaissent sans doigt.' },
    ],
    faqs: [
      {
        question: 'Combien de points tactiles mon écran doit-il gérer ?',
        answer: 'La plupart des smartphones et tablettes suivent 5 à 10 doigts. La page affiche le nombre indiqué par le navigateur et le maximum vu en même temps.',
      },
      {
        question: 'Cela marche-t-il avec une souris ou un stylet ?',
        answer: 'Oui. La souris et le stylet dessinent aussi, vous pouvez donc tester un stylet de la même façon.',
      },
      {
        question: 'Qu’est-ce qui cause les zones mortes ?',
        answer: 'Une vitre fissurée, une nappe de la dalle tactile abîmée, l’humidité ou un film de protection avec des bulles. Retirez d’abord le film et testez à nouveau.',
      },
    ],
  },
  'white-noise-generator': {
    glance: {
      answer:
        'Un générateur de bruit blanc diffuse un souffle continu qui contient toutes les fréquences audibles à la même intensité. Ce son régulier masque les voix, la circulation et les bruits soudains : on l’utilise pour se concentrer, étudier, apaiser les bébés et dormir. Gardez un volume bas et ajoutez une minuterie le soir.',
      features: [
        'Bruit blanc, rose et brun dans un seul lecteur',
        'Filtre de timbre et volume en décibels',
        'Minuterie de sommeil avec fondu doux',
        'Visuels en option : neige TV ou forme d’onde',
      ],
      benefits: ['Masque les distractions au bureau et à la maison', 'Aide beaucoup de gens à s’endormir plus vite', 'Gratuit, sans fin, sans appli'],
    },
    steps: [
      'Appuyez sur Démarrer. Rien ne joue avant, et le son démarre à volume modéré.',
      'Les boutons Blanc, Rose et Brun ouvrent chaque générateur ; volume, filtre et visuel sont conservés.',
      'Un filtre passe-bas adoucit le souffle, un passe-haut supprime les grondements ; réglez la fréquence de coupure.',
      'Choisissez un visuel (onde, neige TV ou écran sombre) et une minuterie de sommeil.',
      'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Sommeil', description: 'Masquez la circulation, les voisins et les ronflements avec un son régulier.' },
      { title: 'Concentration', description: 'Couvrez les conversations et les bruits de la maison pendant le travail ou les révisions.' },
      { title: 'Bébés', description: 'Beaucoup de parents apaisent bébé avec un bruit blanc doux. Gardez-le bas et loin du lit.' },
      { title: 'Neige TV rétro', description: 'Passez le visuel en neige TV pour des vidéos, des décors ou une soirée à thème.' },
    ],
    faqs: [
      {
        question: 'Qu’est-ce que le bruit blanc ?',
        answer: 'Le bruit blanc a la même puissance à toutes les fréquences. À l’oreille, c’est un souffle clair et régulier, comme une radio ou une TV mal réglée.',
      },
      {
        question: 'À quoi servent les filtres passe-bas et passe-haut ?',
        answer:
          'Le passe-bas garde les fréquences sous la coupure : le bruit devient plus sombre et plus doux. Le passe-haut garde celles au-dessus : il retire les grondements et rend le son plus aérien.',
      },
      {
        question: 'Est-ce que cela consomme des données ?',
        answer: 'Non. Le bruit est généré sur votre appareil avec la Web Audio API : rien n’est diffusé en streaming et cela marche hors ligne une fois chargé.',
      },
      {
        question: 'Regarder la neige TV est-il sans danger ?',
        answer: 'Le scintillement rapide peut gêner et déclencher une épilepsie photosensible. Si vous êtes sensible, choisissez l’onde ou l’écran sombre.',
      },
    ],
  },
  'fake-blue-screen-of-death': {
    glance: {
      answer:
        'Un faux écran bleu de la mort (BSOD) imite l’écran d’erreur de Windows : le smiley triste, « Votre PC a rencontré un problème », un code d’arrêt et un compteur de progression. C’est purement visuel : rien ne plante et Échap le ferme. Choisissez Windows 10, Windows 11, le nouvel écran noir ou le XP classique.',
      features: ['Styles Windows 10, 11, noir et XP classique', 'Vrais codes d’arrêt comme CRITICAL_PROCESS_DIED', 'Pourcentage qui grimpe et bloc façon QR', 'Plein écran avec curseur masqué'],
      benefits: ['La blague informatique la plus convaincante', 'Accessoire réaliste pour vidéos et tutoriels', 'Totalement inoffensif'],
    },
    steps: [
      'Choisissez un style : Windows 10, Windows 11, le nouvel écran noir ou le XP/7 classique.',
      'Choisissez un code d’arrêt et le temps mis par le compteur pour atteindre 100 %.',
      'Touchez deux fois ou appuyez sur F pour le plein écran. Le curseur disparaît vite.',
      'Appuyez sur Échap, ou bougez la souris et cliquez sur fermer, pour quitter.',
    ],
    useCases: [
      { title: 'Blague au bureau', description: 'Laissez-le sur l’écran d’un collègue quelques secondes, puis révélez la blague.' },
      { title: 'Vidéos et streams', description: 'Montrez un plantage à l’écran sans planter un vrai PC.' },
      { title: 'Formation informatique', description: 'Montrez à quoi ressemble une erreur d’arrêt et ce que signifie son code.' },
      { title: 'Cinéma et théâtre', description: 'Un écran de plantage crédible pour une scène, sur n’importe quel appareil.' },
    ],
    faqs: [
      {
        question: 'Qu’est-ce que l’écran bleu de la mort ?',
        answer:
          'C’est l’erreur plein écran que Windows affiche face à un problème dont il ne peut pas se remettre, comme un pilote défaillant ou une erreur mémoire. Il indique un code d’arrêt, enregistre des informations puis redémarre.',
      },
      {
        question: 'Que signifient les codes d’arrêt ?',
        answer:
          'Chacun désigne un type de panne : CRITICAL_PROCESS_DIED signifie qu’un processus système s’est arrêté, IRQL_NOT_LESS_OR_EQUAL pointe souvent vers un pilote et MEMORY_MANAGEMENT vers la RAM. Ici, ce n’est que du texte.',
      },
      {
        question: 'Cela peut-il endommager mon ordinateur ?',
        answer: 'Non. C’est une image dans un onglet du navigateur. Cela ne fait pas planter Windows, ne modifie aucun réglage et n’installe rien.',
      },
      {
        question: 'Pourquoi le nouvel écran de plantage est-il noir ?',
        answer: 'En 2025, Microsoft a remplacé l’écran bleu de Windows 11 par un écran noir plus simple. Choisissez « Noir (nouveau) » pour ce style.',
      },
      {
        question: 'Est-ce lié à Microsoft ?',
        answer: 'Non. C’est une recréation indépendante à but de divertissement, sans lien avec Microsoft ni soutien de sa part.',
      },
    ],
  },
  'pomodoro-timer': {
    glance: {
      answer:
        'Un minuteur Pomodoro découpe le travail en sessions de 25 minutes de concentration séparées par 5 minutes de pause, avec une pause longue toutes les quatre sessions. La méthode, créée par Francesco Cirillo à la fin des années 1980, aide à se lancer, à éviter l’épuisement et à compter ses sessions.',
      features: ['Cycle 25/5 avec pauses longues', 'Durées réglables et démarrage automatique', 'Signal sonore et compte à rebours dans l’onglet', 'Compteur de sessions et anneau de progression'],
      benefits: ['Vaincre la procrastination avec des objectifs courts', 'Les pauses limitent la fatigue', 'Gratuit, sans compte'],
    },
    steps: [
      'Appuyez sur Démarrer pour lancer une session de 25 minutes.',
      'Modifiez si besoin la durée du travail et des pauses (par exemple 50/10).',
      'À la fin de chaque phase un signal retentit et la suivante démarre ; désactivez le démarrage automatique pour les lancer vous-même.',
      'Passer saute une phase, Réinitialiser recommence. La barre d’espace lance et met en pause.',
      'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Révisions', description: 'Découpez vos révisions en blocs courts avec de vraies pauses.' },
      { title: 'Travail concentré', description: 'Protégez 25 minutes d’affilée des e-mails et du chat.' },
      { title: 'En classe', description: 'Projetez le minuteur pour les exercices et les pauses.' },
      { title: 'Prendre de bonnes habitudes', description: 'Comptez vos sessions pour voir votre temps de concentration.' },
    ],
    faqs: [
      {
        question: 'Qu’est-ce que la technique Pomodoro ?',
        answer:
          'Une méthode de gestion du temps de la fin des années 1980 : travaillez par blocs concentrés (traditionnellement 25 minutes), faites une courte pause après chacun et une longue toutes les quatre.',
      },
      {
        question: 'Le minuteur continue-t-il dans un onglet en arrière-plan ?',
        answer: 'Oui. Il se base sur l’horloge réelle, il reste donc précis même si le navigateur ralentit les onglets cachés, et le titre de l’onglet affiche le temps restant.',
      },
      {
        question: 'Puis-je changer les durées ?',
        answer: 'Oui. Réglez en minutes le travail, la pause courte et la pause longue, ainsi que le nombre de sessions avant la pause longue.',
      },
    ],
  },
}
