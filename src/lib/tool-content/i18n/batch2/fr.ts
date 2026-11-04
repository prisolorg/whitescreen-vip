import type { ToolTranslations } from '../types'

export const fr: ToolTranslations = {
  'monitor-test': {
    glance: {
      answer:
        'Un test d’écran est une série de mires en plein écran qui vérifient comment votre écran affiche la couleur, le contraste, la netteté et le gamma. Parcourez dégradés, niveaux de noir et de blanc, netteté du texte et mires de géométrie pour trouver les défauts ou bien régler l’image.',
      features: ['Mires de dégradé, gamma, contraste et netteté', 'Paliers de niveau de noir et de blanc', 'Contrôles de géométrie et de lisibilité du texte', 'Raccourcis clavier pour passer d’une mire à l’autre'],
      benefits: ['Réglez correctement luminosité, contraste et netteté', 'Vérifiez un écran neuf ou d’occasion en quelques minutes', 'Fonctionne dans tout navigateur, même sur TV'],
    },
    steps: [
      'Réglez l’écran sur sa résolution native et réinitialisez le zoom du navigateur (Ctrl/Cmd + 0).',
      'Appuyez sur F pour le plein écran, puis changez de mire avec les boutons ou les flèches.',
      'Cherchez des bandes dans les dégradés, des lignes droites dans les grilles et la netteté ou le moiré dans les mires fines.',
      'Ajustez luminosité, contraste et netteté de l’écran en regardant chaque mire.',
    ],
    useCases: [
      { title: 'Premier réglage', description: 'Réglez luminosité, contraste et netteté au déballage.' },
      { title: 'Effet de bandes', description: 'Les dégradés révèlent la postérisation due à une faible profondeur de couleur.' },
      { title: 'Géométrie et mise à l’échelle', description: 'Les grilles montrent une image étirée, rognée ou floue.' },
      { title: 'Câble et entrée', description: 'Les mires fines montrent si un câble ou un adaptateur adoucit l’image.' },
    ],
    faqs: [
      { question: 'Un test d’écran en ligne vaut-il une sonde de calibrage ?', answer: 'Non. Les mires aident à juger et régler à l’œil, mais un calibrage précis des couleurs demande un colorimètre.' },
      {
        question: 'Pourquoi les mires fines scintillent-elles ou font du moiré ?',
        answer: 'Le zoom du navigateur, la mise à l’échelle du système ou une résolution non native rééchantillonnent les mires d’un pixel. Utilisez un zoom à 100 % et la résolution native.',
      },
      { question: 'À quoi doit ressembler la mire de gamma ?', answer: 'De loin, les zones rayées et unies doivent avoir une luminosité proche. Un grand écart indique un gamma éloigné de la norme 2,2.' },
    ],
  },
  'screen-resolution-test': {
    glance: {
      answer:
        'Un test de résolution d’écran affiche la résolution de votre écran en pixels, la zone d’affichage du navigateur, le ratio de pixels et la profondeur de couleur. La résolution physique est la taille CSS multipliée par ce ratio : un portable 1920 × 1080 à 125 % indique 1536 × 864 pixels CSS.',
      features: ['Résolution d’écran, de fenêtre et physique', 'Ratio de pixels et mise à l’échelle', 'Profondeur de couleur et orientation', 'Mise à jour en direct au redimensionnement ou à la rotation'],
      benefits: ['Vérifiez si vous êtes vraiment en 1080p, 1440p ou 4K', 'Contrôlez la mise à l’échelle de Windows ou macOS', 'Instantané, rien à installer'],
    },
    steps: [
      'Ouvrez la page sur l’écran à vérifier : les valeurs se mettent à jour en direct.',
      'Redimensionnez la fenêtre ou tournez l’appareil pour voir les valeurs changer.',
      'Appuyez sur F pour le plein écran et voir toute la zone d’affichage.',
      'Regardez la mire d’un pixel : en résolution native et à 100 % de zoom, elle doit former un gris fin et uniforme.',
    ],
    useCases: [
      { title: 'Connaître sa résolution', description: 'Trouvez vite la résolution pour un fond d’écran ou les réglages d’un jeu.' },
      { title: 'Design responsive', description: 'Les développeurs vérifient la zone d’affichage et le ratio sur de vrais appareils.' },
      { title: 'Problèmes d’échelle', description: 'Vérifiez si la mise à l’échelle du système change la résolution effective.' },
      { title: 'Demandes d’assistance', description: 'Partagez des infos d’écran précises en signalant un bug.' },
    ],
    faqs: [
      {
        question: 'Pourquoi la taille est-elle plus petite que la résolution de mon écran ?',
        answer: 'Les navigateurs comptent en pixels CSS. À 150 %, un écran de 3840 pixels de large indique 2560. Multipliez par le ratio de pixels pour obtenir les pixels physiques.',
      },
      { question: 'Qu’est-ce que le ratio de pixels ?', answer: 'Le nombre de pixels physiques par pixel CSS. Une valeur de 2 signifie un écran haute densité, type Retina.' },
      { question: 'Le zoom du navigateur change-t-il les valeurs ?', answer: 'Oui. Le zoom modifie la zone d’affichage et le ratio. Revenez à 100 % pour des valeurs exactes.' },
    ],
  },
  'brown-noise-generator': {
    glance: {
      answer:
        'Un générateur de bruit brun diffuse un son grave et grondant dont la puissance chute fortement dans les aigus, comme une cascade ou un vent fort. Plus doux que le bruit blanc, il est préféré par beaucoup pour dormir, se concentrer avec un TDAH et masquer les bruits graves comme la circulation ou les ronflements.',
      features: ['Vrai bruit brun (brownien), généré en direct', 'Filtres passe-bas et passe-haut pour le timbre', 'Réglage du volume et minuterie de sommeil', 'Passez au bruit blanc ou rose en un clic'],
      benefits: ['Son doux et grave pour les longues sessions', 'Très utilisé pour la concentration', 'Gratuit, fonctionne hors ligne une fois chargé'],
    },
    steps: [
      'Appuyez sur Démarrer. Rien ne joue avant.',
      'Réglez le volume ; le bruit brun paraît plus faible que le blanc au même niveau, montez donc doucement.',
      'Un passe-bas rend le grondement encore plus grave, un passe-haut retire l’extrême grave sur les petits haut-parleurs.',
      'Choisissez une minuterie de sommeil et un visuel si vous voulez.',
      'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Concentration profonde', description: 'Beaucoup, y compris des personnes avec un TDAH, disent que le bruit brun les aide à se poser.' },
      { title: 'Sommeil', description: 'Son timbre grave et doux peut tourner pendant des heures.' },
      { title: 'Masquer les sons graves', description: 'Couvre le grondement de la circulation, les pas et le ronronnement de la clim.' },
      { title: 'Décompresser', description: 'Associez-le à un écran sombre le soir.' },
    ],
    faqs: [
      {
        question: 'Quelle différence avec le bruit blanc et le bruit rose ?',
        answer: 'Le bruit brun perd vite de la puissance quand la fréquence monte (environ 6 dB par octave) : c’est le plus grave des trois. Le rose est entre les deux, le blanc est le plus brillant.',
      },
      { question: 'Pourquoi l’appelle-t-on bruit brun ?', answer: 'Il doit son nom au mouvement brownien, le mouvement aléatoire des particules, et non à la couleur. On l’appelle aussi bruit rouge.' },
      { question: 'Pourquoi je l’entends à peine sur mon téléphone ?', answer: 'Les petits haut-parleurs ne restituent pas les graves. Utilisez un casque ou de plus grandes enceintes, ou ajoutez un passe-haut et montez un peu le volume.' },
    ],
  },
  'pink-noise-generator': {
    glance: {
      answer:
        'Un générateur de bruit rose diffuse un son dont la puissance baisse de façon égale à chaque octave : il sonne équilibré et plus doux que le bruit blanc, comme une pluie régulière. On l’utilise pour dormir, se détendre et étudier, et les ingénieurs du son s’en servent pour vérifier l’équilibre des enceintes.',
      features: ['Vrai bruit rose généré dans le navigateur', 'Filtre de timbre, volume en décibels et minuterie', 'Forme d’onde ou spectre en direct', 'Contrôle au clavier : espace pour lecture ou pause'],
      benefits: ['Son naturel, comme la pluie, propice au sommeil', 'Signal de référence pour vérifier des enceintes', 'Gratuit et peu de publicité'],
    },
    steps: [
      'Appuyez sur Démarrer. Le son ne se lance jamais tout seul.',
      'Réglez le volume en décibels.',
      'Affinez le timbre avec le filtre passe-bas ou passe-haut et le curseur de coupure.',
      'Choisissez une minuterie de sommeil et un visuel si vous voulez.',
      'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Sommeil', description: 'Une alternative populaire et moins agressive que le bruit blanc pour toute la nuit.' },
      { title: 'Révisions', description: 'Un fond sonore équilibré pour les longues lectures.' },
      { title: 'Vérifier des enceintes', description: 'Le bruit rose est le signal standard pour écouter l’équilibre des enceintes.' },
      { title: 'Lieux calmes', description: 'Un fond sonore doux pour salles d’attente et studios.' },
    ],
    faqs: [
      { question: 'Qu’est-ce que le bruit rose ?', answer: 'Le bruit rose a la même énergie dans chaque octave : chaque palier vers l’aigu est un peu plus faible qu’avec le bruit blanc. Il sonne plus naturel, comme la pluie.' },
      { question: 'Le bruit rose aide-t-il à dormir ?', answer: 'Beaucoup le trouvent apaisant, et quelques petites études suggèrent qu’il pourrait favoriser le sommeil profond, mais l’effet varie selon les personnes.' },
      { question: 'Puis-je l’utiliser pour tester des enceintes ?', answer: 'Oui, pour une écoute rapide. Pour mesurer une pièce avec précision, utilisez un logiciel de mesure et un micro calibré.' },
    ],
  },
  'broken-screen': {
    glance: {
      answer:
        'La blague de l’écran cassé remplit votre écran d’une image réaliste de verre brisé : point d’impact, fissures qui s’étendent et, en option, taches d’encre sur l’écran LCD, avec un bruit de verre. Laissez-la sur le téléphone ou l’ordinateur d’un ami, puis révélez la blague avec le bouton fermer ou Échap.',
      features: ['Fissures réalistes, différentes à chaque fois', 'Touchez ou cliquez pour ajouter des impacts', 'Effet d’écran LCD abîmé et bruit de verre', 'Fonds : fond d’écran, écran verrouillé ou noir'],
      benefits: ['Une blague classique et inoffensive qui paraît vraie', 'Fonctionne sur téléphone, tablette et PC', 'Sans appli, rien ne change sur l’appareil'],
    },
    steps: [
      'Choisissez un fond : fond d’écran, écran verrouillé ou noir.',
      'Touchez ou cliquez n’importe où pour fissurer le verre à cet endroit. Chaque touche ajoute un impact.',
      'Gardez le bruit de verre pour plus de réalisme, ou coupez-le.',
      'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Blagues inoffensives', description: 'Une petite frayeur pour un ami, puis la révélation.' },
      { title: 'Accessoire vidéo', description: 'Montrez un téléphone ou un écran brisé dans un court-métrage sans rien casser.' },
      { title: 'Poisson d’avril', description: 'Une blague de bureau classique, totalement réversible.' },
      { title: 'Référence graphique', description: 'Observez comment les fissures se propagent, pour l’illustration et les effets visuels.' },
    ],
    faqs: [
      { question: 'Cela peut-il abîmer mon écran ?', answer: 'Non. C’est seulement une image dessinée dans le navigateur. Appuyez sur Échap, touchez Effacer ou fermez l’onglet.' },
      {
        question: 'Pourquoi cela ressemble-t-il à du vrai verre ?',
        answer: 'Un vrai impact laisse un centre écrasé, de longues fissures en rayons et des anneaux de fissures courtes entre elles. L’effet dessine les trois, avec reflets et ombres sur chaque fissure.',
      },
      { question: 'Comment faire la blague de façon responsable ?', answer: 'Faites court, choisissez quelqu’un qui en rira, ne l’utilisez jamais pour obtenir de l’argent ou des informations et révélez vite la blague.' },
    ],
  },
  'countdown-timer': {
    glance: {
      answer:
        'Un compte à rebours décompte d’une durée choisie jusqu’à zéro en grands chiffres plein écran, puis vous prévient par un léger clignotement et un signal sonore optionnel. Réglez heures, minutes et secondes pour les cours, examens, réunions, présentations, entraînements ou la cuisine, et lisez-le de l’autre bout de la pièce.',
      features: ['Grands chiffres en plein écran', 'Heures, minutes et secondes avec préréglages', 'Clignotement et son optionnel à zéro', 'Reste précis dans les onglets en arrière-plan'],
      benefits: ['Garde réunions et cours dans les temps', 'Lisible depuis le fond de la salle', 'Gratuit, sans appli'],
    },
    steps: [
      'Choisissez un préréglage comme 1, 5 ou 25 minutes, ou saisissez heures, minutes et secondes.',
      'Appuyez sur Démarrer ou sur espace. Appuyez de nouveau pour mettre en pause, ou sur R pour réinitialiser.',
      'Activez le signal sonore si vous le voulez : il est désactivé par défaut.',
      'Appuyez sur F pour le plein écran afin que toute la salle le voie. Échap pour quitter.',
    ],
    useCases: [
      { title: 'En classe', description: 'Chronométrez examens, activités et pauses au vidéoprojecteur.' },
      { title: 'Présentations', description: 'Gardez les intervenants dans les temps avec un minuteur visible.' },
      { title: 'Pomodoro', description: 'Enchaînez des sessions de 25 minutes avec de courtes pauses.' },
      { title: 'Sport et cuisine', description: 'Un grand minuteur lisible de loin.' },
    ],
    faqs: [
      { question: 'Le minuteur continue-t-il dans un onglet en arrière-plan ?', answer: 'Oui. Il se base sur l’heure réelle et reste précis même si le navigateur ralentit les onglets en arrière-plan.' },
      { question: 'Émet-il un son ?', answer: 'Seulement si vous activez le signal sonore. Sinon, l’écran clignote doucement quand le temps est écoulé.' },
      { question: 'Quelle est la durée maximale ?', answer: 'Jusqu’à 99 heures, 59 minutes et 59 secondes.' },
    ],
  },
}
