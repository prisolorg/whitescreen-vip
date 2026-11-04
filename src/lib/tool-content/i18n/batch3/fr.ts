import type { ToolTranslations } from '../types'

export const fr: ToolTranslations = {
  'screen-uniformity-test': {
    glance: {
      answer:
        'Un test d’uniformité d’écran affiche des fonds sombres et gris en plein écran pour vérifier que la luminosité et la couleur sont homogènes sur toute la dalle. Il révèle les fuites de lumière sur les bords, les nuages (clouding) des écrans LCD et IPS, l’IPS glow, le vignettage et l’effet d’écran sale des grandes TV.',
      features: ['Fonds noir, gris foncé et gris moyen', 'Paliers de luminosité pour repérer le clouding dans le noir', 'Conseils pour distinguer IPS glow et fuites de lumière', 'Plein écran sans les barres du navigateur'],
      benefits: ['Repérez les défauts de dalle couverts par la garantie', 'Comparez équitablement deux écrans ou un échange', 'Environ deux minutes dans une pièce sombre'],
    },
    steps: [
      'Baissez la lumière de la pièce et laissez l’écran chauffer quelques minutes.',
      'Appuyez sur F pour le plein écran et commencez par le gris le plus foncé pour chercher des fuites sur les bords.',
      'Passez aux gris plus clairs et cherchez taches, bandes ou coins plus sombres.',
      'Activez la grille pour comparer des zones précises de l’écran.',
    ],
    useCases: [
      { title: 'Fuites de lumière', description: 'Les fonds presque noirs révèlent la lumière qui s’échappe des bords des dalles LCD.' },
      { title: 'Effet d’écran sale', description: 'Les gris moyens montrent des bandes verticales ou des taches sur les TV lors des panoramiques.' },
      { title: 'Vignettage', description: 'Comparez les coins au centre pour repérer des bords plus sombres.' },
      { title: 'Loterie des dalles', description: 'Comparez deux exemplaires du même modèle avant d’en garder un.' },
    ],
    faqs: [
      { question: 'Pourquoi mon écran paraît-il inégal sur du gris ?', answer: 'Aucune dalle n’est parfaitement uniforme. De petites différences sont normales ; de grandes taches, de fortes bandes ou des coins clairs peuvent justifier une réclamation sur un appareil neuf.' },
      { question: 'Faut-il tester dans le noir ?', answer: 'Oui. La lumière ambiante masque les fuites et nuages discrets : une pièce sombre rend le test bien plus révélateur.' },
      { question: 'L’appareil photo montre-t-il ce que je vois ?', answer: 'Les appareils photo des téléphones exagèrent souvent fuites et nuages. Jugez à l’œil et servez-vous des photos seulement comme repère.' },
    ],
  },
  stopwatch: {
    glance: {
      answer:
        'Un chronomètre en ligne mesure le temps écoulé entre le départ et l’arrêt, au centième de seconde, en grands chiffres plein écran. Enregistrez des tours pour la course, la natation, l’entraînement ou les expériences ; le temps reste précis car il est mesuré sur l’horloge de votre appareil.',
      features: ['Départ, arrêt, tour et remise à zéro', 'Précision au centième de seconde', 'Liste des tours avec temps intermédiaires', 'Barre d’espace et raccourcis clavier'],
      benefits: ['Grand affichage pour la salle de sport et la classe', 'Temps au tour précis', 'Gratuit, fonctionne hors ligne'],
    },
    steps: [
      'Appuyez sur Démarrer ou sur espace pour lancer le chrono.',
      'Appuyez sur Tour ou L pour enregistrer un temps intermédiaire pendant qu’il continue.',
      'Espace met en pause, R remet à zéro.',
      'Appuyez sur F pour le plein écran et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Sport et course', description: 'Suivez vos temps au tour et vos intervalles.' },
      { title: 'Discours', description: 'Chronométrez exposés et répétitions avec précision.' },
      { title: 'Jeux et quiz', description: 'Minutez les manches en classe ou lors des soirées jeux.' },
      { title: 'Labo et cuisine', description: 'Mesurez réactions, temps d’infusion ou de repos.' },
    ],
    faqs: [
      { question: 'Quelle est la précision du chronomètre ?', answer: 'Il utilise l’horloge haute résolution du navigateur et affiche les centièmes. Le rafraîchissement de l’écran peut retarder l’affichage de quelques millisecondes.' },
      { question: 'Mes tours sont-ils enregistrés ?', answer: 'Les tours restent sur la page jusqu’à la remise à zéro ou la fermeture. Vous pouvez les copier dans le presse-papiers.' },
      { question: 'Fonctionne-t-il hors ligne ?', answer: 'Oui. Une fois la page chargée, le chronomètre tourne sans connexion.' },
    ],
  },
  'matrix-screensaver': {
    glance: {
      answer:
        'L’économiseur Matrix affiche des colonnes de caractères verts qui tombent, la « pluie numérique » rendue célèbre par le film Matrix (1999). Il tourne dans le navigateur en plein écran, et vous pouvez changer la couleur, la vitesse et la taille des caractères pour un bureau, une TV ou un fond de stream.',
      features: ['Katakana, chiffres et symboles qui tombent', 'Réglage de la couleur, de la vitesse et de la taille', 'Plein écran avec curseur masqué', 'Fluide sur les écrans haute fréquence'],
      benefits: ['Un look culte pour les écrans au repos et les streams', 'Aucun économiseur à installer sous Windows ou macOS', 'Gratuit'],
    },
    steps: [
      'La pluie démarre tout de suite dans l’aperçu.',
      'Réglez vitesse, densité et taille de police, ou choisissez une autre couleur.',
      'Choisissez des caractères katakana, binaires ou de style cyber.',
      'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Économiseur d’écran', description: 'Laissez-le tourner sur un moniteur inutilisé.' },
      { title: 'Ambiance tech', description: 'Visuel de fond pour streams, bureaux ou événements.' },
      { title: 'Fonds vidéo', description: 'Enregistrez un fond « cyber » pour vos vidéos.' },
      { title: 'Soirées déguisées', description: 'Plantez le décor d’une soirée science-fiction.' },
    ],
    faqs: [
      { question: 'Quels caractères utilise la pluie de Matrix ?', answer: 'L’effet original utilisait des katakana demi-chasse en miroir mêlés à des chiffres. Ici, vous choisissez ce style, le binaire ou des caractères cyber.' },
      { question: 'Puis-je en faire un vrai économiseur d’écran ?', answer: 'Les navigateurs ne peuvent pas installer d’économiseur système, mais vous pouvez l’ouvrir en plein écran en vous absentant. Le verrouillage anti-veille garde l’écran allumé.' },
      { question: 'Va-t-il ralentir mon ordinateur ?', answer: 'Il est léger. Sur un appareil ancien, baissez la densité pour une animation plus fluide.' },
    ],
  },
  'dvd-screensaver': {
    glance: {
      answer:
        'L’économiseur DVD est le logo rebondissant classique des lecteurs DVD : il traverse l’écran, change de couleur à chaque bord touché et finit parfois pile dans un coin. Cette version compte les coins touchés et permet de régler la vitesse et la taille du logo.',
      features: ['Changement de couleur à chaque rebond', 'Compteur de coins avec célébration', 'Réglage de la vitesse et de la taille du logo', 'Plein écran sur tout écran'],
      benefits: ['Nostalgique et étrangement satisfaisant', 'Super fond pour les streams et salles d’attente', 'Gratuit'],
    },
    steps: [
      'Le logo commence à rebondir tout de suite.',
      'Réglez la vitesse et la taille du logo avec les curseurs.',
      'Surveillez le compteur : chaque coin exact est célébré.',
      'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Nostalgie', description: 'Revivez le classique de la salle d’attente.' },
      { title: 'Écran au repos', description: 'Un économiseur ludique pour la TV ou l’écran du bureau.' },
      { title: 'Pauses de stream', description: 'Les spectateurs adorent attendre le coin parfait.' },
      { title: 'À plusieurs', description: 'Pariez entre amis sur le moment où il touchera le coin.' },
    ],
    faqs: [
      { question: 'Touche-t-il vraiment le coin pile ?', answer: 'Oui. Quand et à quelle fréquence dépend de la taille de l’écran, du logo et de la vitesse. Le compteur enregistre chaque coin exact.' },
      { question: 'Est-ce le logo DVD officiel ?', answer: 'Non. C’est un badge générique dans le même esprit, sans lien avec la DVD Format/Logo Licensing Corporation.' },
      { question: 'Pourquoi le logo change-t-il de couleur ?', answer: 'Comme l’économiseur classique, le logo choisit une nouvelle couleur à chaque bord touché et ne répète jamais la même deux fois de suite.' },
    ],
  },
  'fake-windows-10-update': {
    glance: {
      answer:
        'Un faux écran de mise à jour Windows 10 reproduit l’écran bleu « Mise à jour en cours » avec les points qui tournent et un pourcentage qui monte lentement. En plein écran, on dirait que le PC se met à jour : une blague classique et inoffensive. Échap pour quitter.',
      features: ['Points qui tournent et pourcentage qui monte', 'Vitesse de mise à jour réglable', 'Plein écran avec curseur masqué', 'Quittez à tout moment avec Échap'],
      benefits: ['Blague de bureau convaincante et inoffensive', 'Accessoire pour vidéos et tutoriels', 'Rien n’est installé ni modifié'],
    },
    steps: [
      'Réglez avec le curseur de vitesse la rapidité de montée du pourcentage.',
      'Cliquez sur Plein écran ou appuyez sur F pour que la simulation remplisse l’écran et masque le navigateur.',
      'Éloignez-vous et laissez la progression tourner. Appuyez sur Pause pour qu’elle semble bloquée.',
      'Appuyez sur Échap pour quitter et révéler la blague.',
    ],
    useCases: [
      { title: 'Blagues de bureau', description: 'Faites croire à un collègue que son PC se met à jour, puis dites-lui tout.' },
      { title: 'Faire une pause', description: 'Ayez l’air occupé quand vous quittez votre bureau.' },
      { title: 'Accessoire de tournage', description: 'Montrez une mise à jour Windows 10 crédible sur un plateau.' },
      { title: 'Nostalgie', description: 'Retrouvez un écran système classique, pour le plaisir.' },
    ],
    faqs: [
      { question: 'Est-ce une vraie mise à jour ou quelque chose de dangereux ?', answer: 'Non. C’est une simulation visuelle inoffensive dans un onglet normal. Elle ne modifie pas votre appareil, n’installe rien et ne demande aucune information. Échap pour quitter à tout moment.' },
      { question: 'Est-ce lié à Microsoft ?', answer: 'Non. C’est une recréation indépendante à but de divertissement, sans lien avec Microsoft ni soutien de sa part.' },
      { question: 'Puis-je régler la vitesse de progression ?', answer: 'Oui. Le curseur de vitesse règle la montée du pourcentage, et Pause le fige pour que la mise à jour semble bloquée.' },
      { question: 'Comment quitter le faux écran ?', answer: 'Appuyez sur Échap, ou bougez la souris ou touchez l’écran pour afficher le bouton fermer. Fermer l’onglet marche aussi.' },
    ],
  },
  'ring-light': {
    glance: {
      answer:
        'Un anneau lumineux en ligne affiche un anneau brillant à l’écran qui éclaire votre visage de face et de façon uniforme, comme le ring light d’un photographe. Réglez la taille, l’épaisseur, la chaleur et la luminosité de l’anneau, puis passez en plein écran pour selfies, visios, maquillage ou photos produit.',
      features: ['Taille et épaisseur de l’anneau réglables', 'Température de couleur de chaude à froide', 'Réglage de luminosité et plein écran', 'Fonctionne sur téléphone, tablette et ordinateur'],
      benefits: ['Une lumière uniforme et sans ombres, gratuite', 'Des reflets dans les yeux comme un vrai ring light', 'N’importe quel écran libre devient une lampe'],
    },
    steps: [
      'Ouvrez la page sur l’écran face à vous (portable, moniteur ou tablette) et montez sa luminosité.',
      'Réglez la taille et l’épaisseur de l’anneau ; un anneau plus épais éclaire davantage.',
      'Choisissez la température de couleur ou une teinte pour un rendu créatif.',
      'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.',
    ],
    useCases: [
      { title: 'Visioconférences', description: 'Une lumière uniforme et flatteuse sans acheter de ring light.' },
      { title: 'Selfies et portraits', description: 'Obtenez le reflet rond classique dans les yeux.' },
      { title: 'Maquillage', description: 'Voyez bien votre visage sous une lumière chaude ou de type jour.' },
      { title: 'Streaming', description: 'Une lumière principale douce depuis un écran ou une tablette libre.' },
    ],
    faqs: [
      { question: 'Un écran est-il aussi lumineux qu’un vrai ring light ?', answer: 'Non. Un vrai anneau LED est bien plus puissant. L’anneau à l’écran marche mieux dans une pièce sombre, luminosité au maximum et près du visage.' },
      { question: 'Pourquoi un anneau et pas tout l’écran ?', answer: 'Un anneau vous éclaire de tous les côtés, réduit les ombres sous le nez et les yeux et crée le reflet rond dans les yeux. Activez le remplissage du centre si vous avez besoin de toute la lumière.' },
      { question: 'Quelle température de couleur choisir ?', answer: 'Autour de 4500–5500 K, le rendu est naturel pour la plupart des carnations. Plus chaud (3000 K) le soir, plus froid (6500 K) pour s’accorder à la lumière du jour.' },
    ],
  },
}
