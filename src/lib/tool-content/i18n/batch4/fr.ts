import type { LocalizedToolContent, ToolTranslations } from '../types'
import type { ToolFaq } from '../../types'

const EXIT: ToolFaq = { question: 'Comment quitter le faux écran ?', answer: 'Appuyez sur Échap, ou bougez la souris ou touchez l’écran pour afficher le bouton fermer. Fermer l’onglet marche aussi.' }
const brandFaq = (brand: string): ToolFaq => ({ question: `Est-ce lié à ${brand} ?`, answer: `Non. C’est une recréation indépendante à but de divertissement, sans lien avec ${brand} ni approbation ou parrainage de sa part. Les noms de produits appartiennent à leurs propriétaires.` })

function update(name: string, brand: string, glance: LocalizedToolContent['glance'], extra: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Réglez avec le curseur de vitesse la rapidité de montée du pourcentage.',
      'Cliquez sur Plein écran ou appuyez sur F pour que la simulation remplisse l’écran et masque le navigateur.',
      'Éloignez-vous et laissez la progression tourner. Appuyez sur Pause pour qu’elle semble bloquée.',
      'Appuyez sur Échap pour quitter et révéler la blague.',
    ],
    useCases: [
      { title: 'Blagues de bureau', description: 'Faites croire à un collègue que son appareil se met à jour, puis dites-lui tout.' },
      { title: 'Faire une pause', description: 'Ayez l’air occupé quand vous quittez votre bureau.' },
      { title: 'Accessoire de tournage', description: `Montrez une mise à jour ${name} crédible sur un plateau.` },
      { title: 'Nostalgie', description: 'Retrouvez un écran système classique, pour le plaisir.' },
    ],
    faqs: [
      { question: 'Est-ce une vraie mise à jour ou quelque chose de dangereux ?', answer: 'Non. C’est une simulation visuelle inoffensive dans un onglet normal. Elle ne modifie pas votre appareil, n’installe rien et ne demande aucune information. Échap pour quitter à tout moment.' },
      brandFaq(brand),
      extra,
      EXIT,
    ],
  }
}

function call(brand: string, glance: LocalizedToolContent['glance'], extra?: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Modifiez le titre de la réunion affiché en haut.',
      'Activez si vous voulez l’aperçu de la caméra : il reste sur votre appareil et n’est jamais enregistré ni envoyé.',
      'Appuyez sur F ou Plein écran pour un appel convaincant en plein écran.',
      'Appuyez sur Échap pour quitter à tout moment.',
    ],
    useCases: [
      { title: 'Accessoire vidéo', description: 'Tournez une scène de réunion sans vrai appel.' },
      { title: 'Maquettes d’interface', description: 'Montrez la disposition d’un appel dans une présentation ou un tutoriel.' },
      { title: 'Blagues inoffensives', description: 'Faites semblant d’être « en réunion » pour rire.' },
      { title: 'S’entraîner', description: 'Vérifiez votre allure à la caméra avant un vrai appel.' },
    ],
    faqs: [
      { question: 'Est-ce un vrai appel ou quelque chose de dangereux ?', answer: 'Non. C’est une simulation visuelle inoffensive dans un onglet normal. Elle ne se connecte à aucun service, n’installe rien et ne demande aucune information.' },
      brandFaq(brand),
      { question: 'Utilise-t-il ma caméra ou mon micro ?', answer: 'Seulement si vous activez l’aperçu caméra. La vidéo reste sur votre appareil et n’est jamais enregistrée ni envoyée. Le micro n’est jamais utilisé.' },
      EXIT,
      ...(extra ? [extra] : []),
    ],
  }
}

export const fr: ToolTranslations = {
  'oled-gray-test': {
    glance: {
      answer: 'Un test de gris OLED affiche des gris très sombres proches du noir, là où les dalles OLED montrent le plus souvent des défauts. Il révèle les bandes près du noir, le mura (taches), les lignes verticales et les dégradés irréguliers que les contenus clairs masquent sur les TV, moniteurs et téléphones OLED.',
      features: ['Gris quasi noirs de 1 % à 20 %, plus une rampe', 'Fonds plein écran sans superposition', 'Passage manuel pour comparer calmement', 'Fonctionne sur téléphones, TV et moniteurs OLED'],
      benefits: ['Vérifiez un OLED neuf pendant le délai de retour', 'Repérez les bandes avant de calibrer', 'Gratuit et rapide'],
    },
    steps: ['Éteignez la lumière et réglez l’écran sur sa luminosité habituelle.', 'Appuyez sur F pour le plein écran et commencez par le palier à 5 %.', 'Descendez à 1–3 % pour voir où la dalle écrase les noirs ou se tache.', 'Essayez la rampe de gris pour repérer des sauts visibles entre teintes voisines.'],
    useCases: [
      { title: 'Uniformité près du noir', description: 'Les gris très sombres révèlent taches et lignes verticales sur les dalles OLED.' },
      { title: 'Noirs écrasés', description: 'Vérifiez si les teintes les plus basses restent visibles ou se fondent dans le noir.' },
      { title: 'Scintillement à faible luminosité', description: 'Certaines dalles scintillent avec des gris et une luminosité très bas.' },
      { title: 'Comparer des appareils', description: 'Comparez deux téléphones ou TV côte à côte avec les mêmes réglages.' },
    ],
    faqs: [
      { question: 'Pourquoi les gris presque noirs paraissent-ils tachés sur OLED ?', answer: 'Chaque pixel OLED est piloté séparément et de minuscules écarts deviennent visibles à très faible lumière. Une certaine irrégularité est normale sur tous les OLED.' },
      { question: 'Ce test sert-il pour les écrans LCD ?', answer: 'Oui, mais sur LCD les défauts près du noir apparaissent surtout comme des fuites de lumière ou du clouding. Utilisez pour cela le test d’uniformité.' },
      { question: 'Pourquoi je ne vois pas le palier à 1 % ?', answer: 'Beaucoup d’écrans et de modes d’image écrasent les teintes les plus sombres. Montez un peu la luminosité ou essayez un autre mode d’image.' },
    ],
  },
  'oled-burn-in-test': {
    glance: {
      answer: 'Un test de marquage OLED affiche des couleurs unies en plein écran pour faire apparaître logos, barres d’état, boutons ou interfaces de jeu laissés par l’usure inégale des pixels. Le marquage est permanent ; la rémanence est temporaire et disparaît. Les deux se voient mieux sur du gris, du rouge et du bleu.',
      features: ['Fonds gris, rouge, vert, bleu et blanc', 'Flèches pour changer vite de couleur', 'Conseils pour distinguer marquage et rémanence', 'Pensé pour téléphones, TV et moniteurs OLED'],
      benefits: ['Vérifiez un téléphone ou une TV OLED d’occasion', 'Repérez la rémanence tôt', 'Sans appli ni téléchargement'],
    },
    steps: ['Appuyez sur F pour le plein écran et commencez par un gris moyen, puis rouge, vert, bleu et blanc.', 'Cherchez des formes pâles comme une barre des tâches, des logos, un clavier ou un logo de chaîne.', 'Utilisez le défilement automatique si vous cherchez une rémanence temporaire.', 'Si les formes disparaissent en quelques minutes, c’était de la rémanence et non du marquage.'],
    useCases: [
      { title: 'OLED d’occasion', description: 'Vérifiez un téléphone ou une TV d’occasion avant d’acheter.' },
      { title: 'Interfaces de jeu', description: 'Cherchez barres de vie ou minicartes après de longues sessions.' },
      { title: 'Rémanence ou marquage', description: 'Aide à distinguer une rémanence temporaire d’un marquage permanent.' },
      { title: 'Garantie', description: 'Photographiez le marquage sur une couleur unie pour le SAV.' },
    ],
    faqs: [
      { question: 'Cet outil peut-il réparer le marquage ?', answer: 'Non. Le marquage permanent est une usure inégale des pixels qu’aucun site ne peut inverser. Utilisez la fonction de rafraîchissement des pixels de votre écran et suivez le fabricant.' },
      { question: 'Quelle différence entre rémanence et marquage ?', answer: 'La rémanence est temporaire et disparaît après d’autres contenus. Le marquage est permanent et reste visible sur les couleurs unies.' },
      { question: 'Quelle couleur montre le mieux le marquage ?', answer: 'Le gris moyen et le rouge le montrent souvent le plus clairement, mais vérifiez chaque couleur car l’usure varie selon le sous-pixel.' },
    ],
  },
  'screen-burn-in-test': {
    glance: {
      answer: 'Un test de marquage d’écran vous permet de chercher des images fantômes sur tout écran, puis de lancer un correcteur qui fait défiler couleurs et bruit. La rémanence temporaire disparaît souvent après 10 à 30 minutes de correcteur ; le marquage permanent dû à l’usure des pixels ne se répare pas par logiciel.',
      features: ['Mode vérification avec couleurs unies et flèches', 'Mode correcteur : balayage, cycle de couleurs et bruit', 'Minuteur qui arrête le correcteur', 'Pour écrans OLED, plasma et LCD'],
      benefits: ['Effacez la rémanence sans appli', 'Sachez s’il s’agit de rémanence ou de marquage', 'Gratuit et sans risque pour l’écran'],
    },
    steps: ['Montez la luminosité et passez en plein écran dans une pièce sombre.', 'En mode vérification, passez chaque couleur avec les flèches ou les boutons. Le gris à 50 % montre le mieux le marquage.', 'Si vous voyez des formes, passez au correcteur, choisissez le balayage blanc (ou un motif clignotant si cela ne vous gêne pas) et laissez tourner 10–30 minutes.', 'Vérifiez à nouveau. Les formes qui restent après plusieurs passages sont souvent un marquage permanent.'],
    useCases: [
      { title: 'Écran d’occasion', description: 'Repérez logos ou barres marqués avant de payer.' },
      { title: 'Après un usage statique', description: 'Vérifiez les écrans qui ont affiché tableaux de bord, bandeaux ou jeux pendant des heures.' },
      { title: 'Effacer la rémanence', description: 'Lancez le correcteur quand une image fantôme persiste.' },
      { title: 'Garantie', description: 'Photographiez le marquage sur du gris pour le SAV.' },
    ],
    faqs: [
      { question: 'Quelle différence entre rémanence et marquage ?', answer: 'La rémanence est temporaire et disparaît après des minutes ou des heures de contenus variés. Le marquage est une usure permanente des pixels.' },
      { question: 'Le correcteur répare-t-il le marquage ?', answer: 'Il aide contre la rémanence temporaire. Le marquage permanent sur OLED est une usure inégale qu’aucun motif n’annule ; le rafraîchissement des pixels de votre appareil reste la meilleure option.' },
      { question: 'Quelle couleur montre le mieux le marquage ?', answer: 'Un gris moyen ou foncé le montre le plus clairement, suivi du rouge, du vert et du bleu.' },
    ],
  },
  'monitor-ghosting-test': {
    glance: {
      answer: 'Un test de ghosting fait défiler des objets à l’écran pour voir les traînées laissées par des pixels trop lents. Les copies pâles derrière l’objet sont du ghosting ; les halos clairs ou inversés viennent d’un overdrive trop fort. Utilisez-le pour choisir le meilleur réglage d’overdrive.',
      features: ['Trois couloirs animés à vitesse réglable', 'Fonds clairs et sombres pour différentes transitions', 'Grille de référence pour juger la traînée', 'S’adapte à la vraie fréquence de votre écran'],
      benefits: ['Choisissez le bon overdrive pour jouer', 'Comparez des écrans avant achat ou retour', 'Alternative gratuite aux tests avec caméra'],
    },
    steps: ['Réglez l’écran sur sa fréquence la plus élevée et passez en plein écran.', 'Suivez la cible des yeux. Cherchez des traînées derrière et des halos sur les bords.', 'Changez la vitesse et essayez chaque réglage d’overdrive ou de temps de réponse du menu de l’écran.', 'Mettez en pause pour voir une image fixe ; la cible doit être nette.'],
    useCases: [
      { title: 'Régler l’overdrive', description: 'Choisissez le réglage à la traînée la plus courte, sans ghosting inversé.' },
      { title: 'Traînées noires des VA', description: 'Le couloir sombre montre la traînée violacée typique des dalles VA.' },
      { title: 'Comparer des écrans', description: 'Utilisez la même vitesse sur deux écrans côte à côte.' },
      { title: 'Vérifier un achat', description: 'Assurez-vous que le mouvement est conforme à la promesse.' },
    ],
    faqs: [
      { question: 'Qu’est-ce que le ghosting ?', answer: 'Une traînée pâle derrière les objets en mouvement, parce que les pixels ne changent pas de couleur assez vite avant l’image suivante.' },
      { question: 'Qu’est-ce que le ghosting inversé ?', answer: 'Un halo clair ou coloré autour des objets en mouvement, parce que l’overdrive pousse les pixels au-delà de leur cible. Baissez l’overdrive pour le corriger.' },
      { question: 'Pourquoi la cible paraît floue même sans ghosting ?', answer: 'C’est le flou de maintien : vos yeux suivent l’objet pendant que chaque image reste fixe. Une fréquence plus élevée ou un mode de rétroéclairage stroboscopique le réduit.' },
    ],
  },
  'frame-rate-test': {
    glance: {
      answer: 'Un test de FPS montre le même mouvement à différents nombres d’images par seconde côte à côte : 15, 24, 30, 60 et le maximum de votre écran. Il rend visible la différence entre un mouvement saccadé et fluide, et montre pourquoi les films à 24 FPS et les jeux à 60 FPS paraissent si différents.',
      features: ['Cinq couloirs à 15, 24, 30, 60 FPS et maximum', 'Vitesse réglable pour accentuer ou adoucir', 'Affiche votre fréquence maximale mesurée', 'Pause et plein écran'],
      benefits: ['Voyez ce qu’apporte un écran haute fréquence', 'Expliquez les FPS à des élèves ou spectateurs', 'Fonctionne dans tout navigateur récent'],
    },
    steps: ['Regardez chaque couloir ; ils avancent tous à la même vitesse.', 'Augmentez la vitesse pour mieux voir les saccades.', 'Comparez le couloir 60 FPS au couloir maximum sur un écran haute fréquence.', 'Appuyez sur F ou touchez deux fois pour le plein écran, et Échap pour quitter.'],
    useCases: [
      { title: 'Réglages de jeu', description: 'Décidez si plus de FPS vaut moins de détails graphiques.' },
      { title: 'Production vidéo', description: 'Comprenez pourquoi le cinéma utilise 24 FPS et le sport 50 ou 60.' },
      { title: 'Montrer à des amis', description: 'Tranchez le débat « l’œil ne voit pas plus de 30 FPS ».' },
      { title: 'Choisir un écran', description: 'Voyez ce qu’apporte un écran 120 ou 144 Hz.' },
    ],
    faqs: [
      { question: 'Pourquoi le couloir maximum ressemble-t-il à 60 FPS ?', answer: 'Votre écran affiche au plus une image par rafraîchissement. Sur un écran 60 Hz, les couloirs 60 FPS et maximum sont identiques.' },
      { question: 'Pourquoi 24 FPS saccade ici mais pas au cinéma ?', answer: 'Les caméras de cinéma enregistrent du flou de mouvement dans chaque image, ce qui lisse le mouvement. Ce test utilise des images nettes.' },
      { question: 'Combien de FPS faut-il pour jouer ?', answer: 'Au moins 60 FPS paraît fluide dans la plupart des jeux ; les joueurs compétitifs visent la fréquence d’un écran 144 Hz ou plus.' },
    ],
  },
  'screen-color-test': {
    glance: {
      answer: 'Un test de couleurs d’écran affiche des barres de couleur, des rampes RVB et des motifs de saturation pour juger la fidélité des couleurs de votre écran. Cherchez des bandes dans les dégradés, des hautes lumières écrêtées, des teintes manquantes et une dominante pour savoir s’il faut ajuster l’image.',
      features: ['Barres de couleur de type SMPTE', 'Rampes rouge, verte, bleue et grise', 'Motifs de saturation et de teintes de peau', 'Plein écran avec navigation au clavier'],
      benefits: ['Repérez vite bandes et dominantes', 'Comparez les modes d’image', 'Gratuit, sans sonde de calibrage'],
    },
    steps: ['Utilisez le mode d’image par défaut ou calibré de votre écran.', 'Appuyez sur F pour le plein écran et changez de motif avec les boutons ou les flèches.', 'Sur les rampes, cherchez des transitions douces, sans paliers ni écrêtage côté clair.', 'Comparez le même motif sur un autre écran.'],
    useCases: [
      { title: 'Repérer une dominante', description: 'Gris et blancs doivent paraître neutres, sans teinte rose ou verte.' },
      { title: 'Écrêtage', description: 'Vérifiez que les paliers les plus clairs de chaque canal restent distincts.' },
      { title: 'Bandes', description: 'Les rampes révèlent la postérisation des dalles 6 bits ou d’un traitement fort.' },
      { title: 'Comparaison', description: 'Comparez un portable et un écran externe.' },
    ],
    faqs: [
      { question: 'Puis-je calibrer mon écran avec ça ?', answer: 'Vous pouvez faire des réglages approximatifs à l’œil, mais un vrai calibrage demande une sonde et un logiciel dédié.' },
      { question: 'Pourquoi mes rampes montrent-elles des paliers ?', answer: 'Ils indiquent souvent une faible profondeur de couleur de la dalle ou du traitement. Les modes nuit et certains préréglages causent aussi des bandes.' },
      { question: 'Pourquoi les couleurs diffèrent entre téléphone et écran ?', answer: 'Les écrans diffèrent par leur gamut, leur point blanc et leur traitement. Certains ajustent aussi les couleurs selon la lumière ambiante.' },
    ],
  },
  'no-signal-screen': {
    glance: {
      answer: 'Un écran « Aucun signal » affiche le message bien connu d’une TV ou d’un moniteur qui ne reçoit rien par HDMI ou câble. En plein écran, avec des barres de couleur et un cadre qui se déplace, c’est une blague convaincante, un accessoire de tournage ou un écran d’attente.',
      features: ['Barres de couleur classiques ou fond bleu', 'Cadre « Aucun signal » qui se déplace comme sur une vraie TV', 'Tonalité de test 1 kHz en option et nom d’entrée modifiable', 'Plein écran avec curseur masqué'],
      benefits: ['Blague facile et inoffensive', 'Accessoire pour films, escape games et décors', 'Fonctionne sur Smart TV via le navigateur'],
    },
    steps: ['Choisissez un style : barres de couleur classiques, écran noir avec message rebondissant ou écran d’entrée bleu.', 'Modifiez le message et le nom de l’entrée, par exemple « HDMI 1 ».', 'Activez si vous voulez la tonalité de test 1 kHz : elle démarre coupée et ne joue qu’après un clic.', 'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.'],
    useCases: [
      { title: 'Accessoire photo et vidéo', description: 'Habillez un décor d’une TV débranchée crédible.' },
      { title: 'Pauses de stream', description: 'Affichez une carte « aucun signal » pendant une pause.' },
      { title: 'Esthétique rétro', description: 'Donnez une touche télé d’antan à vos vidéos ou présentations.' },
      { title: 'Blagues inoffensives', description: 'Faites croire qu’un écran est débranché, puis révélez-le.' },
    ],
    faqs: [
      { question: 'Comment s’appellent les barres colorées ?', answer: 'Ce sont les barres de couleur SMPTE, une mire de diffusion utilisée pour calibrer couleur et luminosité des TV et équipements vidéo.' },
      { question: 'Mon écran va-t-il vraiment perdre le signal ?', answer: 'Non. C’est une page web qui ressemble à un écran sans signal. Votre écran continue de fonctionner normalement.' },
      { question: 'Comment en sortir ?', answer: 'Appuyez sur Échap, ou bougez la souris et cliquez sur le bouton fermer dans le coin.' },
    ],
  },
  'hacker-typer': {
    glance: {
      answer: 'Hacker Typer transforme n’importe quelle frappe en code réaliste à l’écran : tout le monde peut ressembler à un hacker de film. Tapez au hasard et des lignes de code apparaissent ; déclenchez les alertes « Accès autorisé » ou « Accès refusé » pour compléter la scène, pour une blague, une vidéo ou pour rire.',
      features: ['Du vrai code défile quand vous tapez', 'Alertes accès autorisé et refusé', 'Vitesse de frappe et couleur du texte réglables', 'Look terminal en plein écran'],
      benefits: ['Une scène de hacker immédiate pour vidéos et blagues', 'Une façon ludique d’initier les enfants au code', 'Gratuit, rien à installer'],
    },
    steps: ['Cliquez dans le terminal puis tapez n’importe quoi, ou touchez l’écran sur mobile.', 'Changez la vitesse pour régler le nombre de caractères par touche.', 'Appuyez trois fois sur Alt pour « ACCESS GRANTED » ou trois fois sur Verr Maj pour « ACCESS DENIED ».', 'Utilisez le bouton Plein écran ou F11 pour l’effet complet, et Échap pour quitter.'],
    useCases: [
      { title: 'Impressionner ses amis', description: 'Ayez l’air d’un génie en tapant n’importe quoi.' },
      { title: 'Cinéma et streaming', description: 'Des images de « piratage » convaincantes pour vos vidéos.' },
      { title: 'En classe', description: 'Une manière ludique d’éveiller l’intérêt pour la programmation.' },
      { title: 'Fond de soirée', description: 'Laissez-le tourner sur un écran libre lors d’un événement tech.' },
    ],
    faqs: [
      { question: 'Hacker Typer pirate-t-il vraiment quelque chose ?', answer: 'Non. Il affiche seulement un texte inoffensif préparé à l’avance. Il n’exécute aucune commande, n’accède à aucun réseau et ne touche pas vos fichiers.' },
      { question: 'Pourquoi la touche F ne passe-t-elle pas en plein écran ici ?', answer: 'Dans cet outil, chaque touche tape du code : utilisez donc le bouton plein écran.' },
      { question: 'Cela marche-t-il sur téléphone ?', answer: 'Oui. Touchez le terminal plusieurs fois pour afficher plus de code.' },
    ],
  },
  'hacked-screen': {
    glance: {
      answer: 'Le simulateur d’écran piraté affiche un faux avertissement « votre système a été piraté » avec texte glitché, journaux qui défilent, barre de progression et compte à rebours. C’est une blague inoffensive : rien n’est consulté ni modifié, et à la fin du compte à rebours un message révèle la plaisanterie.',
      features: ['Styles alerte rouge et terminal vert', 'Titre, journaux et compte à rebours personnalisables', 'Sirène en option', 'Se termine par un message clair « c’était une blague »'],
      benefits: ['Blague inoffensive au look dramatique', 'Accessoire pour films, streams et escape games', 'Fonctionne hors ligne dans le navigateur'],
    },
    steps: ['Choisissez un style (alerte rouge ou terminal vert) et le texte affiché.', 'Activez ou non la sirène ; elle ne joue qu’après le démarrage.', 'Passez en plein écran et laissez l’appareil à votre ami.', 'Appuyez sur Échap ou bougez la souris pour afficher le bouton fermer.'],
    useCases: [
      { title: 'Blagues', description: 'Une petite frayeur pour un ami qui en rira ensuite.' },
      { title: 'Films et escape games', description: 'Un écran « vous avez été piraté » convaincant.' },
      { title: 'Sensibilisation à la sécurité', description: 'Montrez à quoi ressemble un scareware pour apprendre à l’ignorer.' },
      { title: 'Streams et vidéos', description: 'Un moment dramatique ou de réaction.' },
    ],
    faqs: [
      { question: 'Est-ce que cela pirate ou abîme mon appareil ?', answer: 'Non. Ce sont du texte et des animations dans un onglet normal. Rien n’est exécuté, aucun fichier n’est lu et rien ne se connecte.' },
      { question: 'Que faire si un vrai site dit que j’ai été piraté ?', answer: 'Fermez l’onglet. Les vrais outils de sécurité ne demandent jamais d’appeler un numéro ni de payer pour débloquer l’appareil ; ces fenêtres sont des arnaques.' },
      { question: 'Comment quitter ?', answer: 'Appuyez sur Échap, ou bougez la souris ou touchez l’écran pour afficher le bouton fermer. Fermer l’onglet marche aussi.' },
    ],
  },
  'zoom-lighting': {
    glance: {
      answer: 'L’éclairage pour Zoom transforme votre écran en source de lumière douce pour les visioconférences. Choisissez une température de couleur de chaude (environ 2700 K) à lumière du jour (6500 K), réglez la luminosité et remplissez l’écran ou utilisez un cadre lumineux autour de votre fenêtre Zoom, Google Meet ou Microsoft Teams.',
      features: ['Température de couleur en kelvins avec préréglages', 'Plein écran ou cadre autour de l’appel', 'Luminosité et couleur personnalisée', 'Fonctionne sur un second écran ou une tablette'],
      benefits: ['Un visage mieux éclairé sans acheter de lampe', 'Une lumière chaude qui flatte la peau', 'Gratuit et immédiat'],
    },
    steps: ['Ouvrez cette page sur un second écran ou à côté de la fenêtre de l’appel.', 'Réglez la température de couleur et la luminosité. Montez la luminosité de l’écran pour plus de lumière.', 'Choisissez la lumière pleine pour le maximum, ou le cadre pour garder une fenêtre sombre au centre pour l’appel.', 'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.'],
    useCases: [
      { title: 'Visioconférences', description: 'Éclairez et uniformisez votre visage dans une pièce sombre.' },
      { title: 'Streaming', description: 'Une lumière principale douce depuis un écran ou une tablette libre.' },
      { title: 'Selfies', description: 'Un portable ou une tablette comme source de lumière rapide et uniforme.' },
      { title: 'Maquillage', description: 'Vérifiez votre maquillage sous une lumière chaude du soir ou de jour.' },
    ],
    faqs: [
      { question: 'Quelle température de couleur choisir ?', answer: 'Celle de la pièce. Environ 3000 K pour une pièce éclairée par des lampes le soir, 4000–4500 K est neutre et 5500–6500 K correspond à la lumière d’une fenêtre.' },
      { question: 'Est-ce que cela modifie ma caméra ?', answer: 'Non. Cela éclaire seulement votre visage. Vous pouvez toujours utiliser le réglage faible lumière de votre appli de réunion.' },
      { question: 'Mon écran sera-t-il plus lumineux que d’habitude ?', answer: 'Non. Il utilise votre luminosité actuelle ; montez-la pour plus de lumière.' },
    ],
  },
  'visual-noise': {
    glance: {
      answer: 'Le bruit visuel remplit l’écran de motifs animés qui s’écoulent en douceur : brume légère, plasma coloré et grain fin. On l’utilise comme fond pour vidéos et streams, comme référence de textures en design et comme image apaisante pour se détendre.',
      features: ['Styles brume, plasma et grain fin', 'Échelle, vitesse et palette de couleurs', 'Pause pour figer une image', 'Démarre en pause si vous préférez moins d’animations'],
      benefits: ['Des fonds animés apaisants pour vidéos et streams', 'Référence de textures pour le design', 'Gratuit et léger'],
    },
    steps: ['Choisissez un style comme brume, plasma ou grain fin.', 'Réglez l’échelle, la vitesse et la palette.', 'Mettez l’animation en pause pour figer une image qui vous plaît.', 'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.'],
    useCases: [
      { title: 'Ambiance', description: 'Un mouvement doux sur une TV ou un écran en arrière-plan.' },
      { title: 'Textures de design', description: 'Référence pour des textures de grain et de dégradé.' },
      { title: 'Fonds pour VJ', description: 'Des visuels génératifs simples pour événements.' },
      { title: 'Détente', description: 'Une brume lente pour décompresser.' },
    ],
    faqs: [
      { question: 'Est-ce la même chose que la neige TV ?', answer: 'Non. La neige TV est aléatoire à chaque pixel et image. Ces motifs utilisent un bruit lissé qui s’écoule doucement.' },
      { question: 'Consomme-t-il beaucoup de batterie ?', answer: 'Il tourne sur la carte graphique. Baissez la vitesse ou mettez en pause pour économiser l’énergie sur un portable.' },
      { question: 'Respecte-t-il la préférence pour moins d’animations ?', answer: 'Oui. Si votre système préfère réduire les animations, elle démarre en pause.' },
    ],
  },
  'color-cycle': {
    glance: {
      answer: 'Un écran qui change de couleur passe en douceur par les couleurs de l’arc-en-ciel. Réglez la vitesse et la luminosité pour une ambiance de fête, un éclairage d’ambiance, la détente ou pour vérifier rapidement que votre écran affiche chaque teinte sans bandes.',
      features: ['Arc-en-ciel fluide ou mode par paliers', 'Réglages de vitesse et de luminosité', 'Plein écran avec curseur masqué', 'Respecte la préférence pour moins d’animations'],
      benefits: ['Lumière de fête ou d’ambiance immédiate', 'Vérifie la fluidité des transitions', 'Gratuit sur tout appareil'],
    },
    steps: ['Choisissez l’arc-en-ciel fluide ou un cycle par paliers entre couleurs.', 'Réglez la vitesse avec le curseur.', 'Appuyez sur espace pour mettre en pause et reprendre.', 'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.'],
    useCases: [
      { title: 'Éclairage d’ambiance', description: 'Une lueur qui change lentement pour les fêtes ou la détente.' },
      { title: 'Pixels bloqués', description: 'Un défilement rapide est parfois conseillé pour les pixels bloqués, sans garantie.' },
      { title: 'Ambiance de stream', description: 'Une lumière de fond changeante derrière vous à l’écran.' },
      { title: 'Veilleuse pour enfants', description: 'Une lumière douce qui change lentement, à faible luminosité.' },
    ],
    faqs: [
      { question: 'Le cycle de couleurs répare-t-il les pixels bloqués ?', answer: 'Changer vite de couleur aide parfois un sous-pixel bloqué à réagir, mais ce n’est pas garanti et cela ne répare pas les pixels morts.' },
      { question: 'Le cycle rapide est-il sans danger ?', answer: 'Les clignotements rapides peuvent affecter les personnes épileptiques photosensibles. La vitesse est plafonnée, démarre lentement et la préférence pour moins d’animations est respectée.' },
      { question: 'Puis-je m’arrêter sur une couleur ?', answer: 'Oui. Appuyez sur espace ou sur le bouton pause.' },
    ],
  },
  'gradient-screen': {
    glance: {
      answer: 'Un écran dégradé remplit votre écran d’un mélange doux entre les couleurs de votre choix. Réglez couleurs, angle et type, utilisez-le comme lumière d’ambiance ou fond d’écran, vérifiez les bandes de votre écran et téléchargez le dégradé en image.',
      features: ['Dégradés linéaires et radiaux', 'N’importe quelles couleurs et angle', 'Téléchargement en PNG haute résolution', 'Plein écran'],
      benefits: ['Des fonds d’écran en quelques secondes', 'Bon test de bandes pour écrans', 'Gratuit, sans logiciel de design'],
    },
    steps: ['Choisissez un préréglage ou vos propres couleurs.', 'Passez de linéaire à radial et réglez l’angle.', 'Activez l’animation pour un dégradé qui dérive lentement.', 'Appuyez sur F pour le plein écran ou téléchargez le dégradé en PNG.'],
    useCases: [
      { title: 'Fonds d’écran', description: 'Créez un fond dégradé à n’importe quelle résolution.' },
      { title: 'Lumière d’ambiance', description: 'Une lueur douce bicolore fatigue moins les yeux qu’une couleur unie.' },
      { title: 'Test de bandes', description: 'Les dégradés doux révèlent les bandes des dalles à faible profondeur.' },
      { title: 'Arrière-plans', description: 'Des fonds rapides pour présentations et vidéos.' },
    ],
    faqs: [
      { question: 'Pourquoi mon dégradé montre-t-il des rayures ?', answer: 'Ce sont des bandes, dues à la faible profondeur de couleur de la dalle ou à la compression. C’est une limite de l’écran, pas un défaut du dégradé.' },
      { question: 'Puis-je le télécharger ?', answer: 'Oui. Choisissez une résolution et téléchargez un PNG créé dans votre navigateur.' },
      { question: 'Puis-je utiliser trois couleurs ?', answer: 'Oui. Activez la couleur centrale pour ajouter un troisième point.' },
    ],
  },
  'flip-clock-screensaver': {
    glance: {
      answer: 'Un économiseur horloge à volets affiche l’heure en grands chiffres qui basculent à chaque minute, comme un réveil rétro. Choisissez le format 12 ou 24 heures, affichez secondes et date, et lancez-le en plein écran sur un écran libre, une tablette ou une TV.',
      features: ['Chiffres à volets animés', 'Format 12 et 24 heures avec secondes et date', 'Thèmes clair et sombre', 'Garde l’écran allumé en plein écran'],
      benefits: ['Transforme une vieille tablette en horloge de bureau', 'Heure grande et lisible de loin', 'Gratuit, sans appli'],
    },
    steps: ['Votre heure locale s’affiche automatiquement.', 'Basculez le format 12/24 h, les secondes et la date. Chaque chiffre bascule comme une vraie horloge à volets.', 'Choisissez un thème adapté à votre pièce.', 'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.'],
    useCases: [
      { title: 'Horloge de bureau', description: 'Transformez une tablette ou un écran en horloge de bureau ou de chevet.' },
      { title: 'Présentations', description: 'Affichez clairement l’heure pendant les événements et les pauses.' },
      { title: 'Concentration', description: 'Une horloge sobre et calme sous les yeux pendant le travail.' },
      { title: 'Streaming', description: 'Un fond élégant « on commence bientôt ».' },
    ],
    faqs: [
      { question: 'D’où vient l’heure ?', answer: 'De l’horloge et du fuseau horaire de votre appareil : elle fonctionne hors ligne une fois chargée.' },
      { question: 'Mon écran restera-t-il allumé ?', answer: 'En plein écran, sur les navigateurs compatibles, un verrou anti-veille garde l’écran allumé.' },
      { question: 'Puis-je désactiver l’animation ?', answer: 'Oui. Si votre système préfère moins d’animations, les chiffres changent sans basculer.' },
    ],
  },
  'motivational-quote-screensaver': {
    glance: {
      answer: 'Un économiseur de citations motivantes affiche une nouvelle citation inspirante toutes les quelques secondes en grands caractères lisibles, avec une horloge en option. Il convient aux accueils, salles de classe, salles de sport et écrans à la maison qu’on regarde en passant.',
      features: ['Citations de Sénèque, Marc Aurèle, Emerson et d’autres', 'Rythme, fonds et ordre aléatoire', 'Horloge en option', 'Plein écran sans mise en veille'],
      benefits: ['Un affichage positif pour les espaces partagés', 'Aucune configuration sur Smart TV', 'Gratuit'],
    },
    steps: ['Une citation au hasard s’affiche tout de suite.', 'Choisissez un fond et la durée d’affichage de chaque citation.', 'Utilisez les flèches ou les touches ← → pour changer de citation ; espace met en pause.', 'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.'],
    useCases: [
      { title: 'Bureaux et accueils', description: 'Une boucle calme et positive pour les écrans d’accueil et d’équipe.' },
      { title: 'Salles de classe', description: 'Affichez la pensée du jour à l’arrivée des élèves.' },
      { title: 'Salles de sport', description: 'Des phrases courtes lisibles de l’autre bout de la salle.' },
      { title: 'Bureau à la maison', description: 'Rendez utile un second écran ou une vieille tablette pendant que vous travaillez.' },
    ],
    faqs: [
      { question: 'D’où viennent les citations ?', answer: 'Ce sont de courtes phrases d’auteurs reconnus et de proverbes, comme Sénèque, Marc Aurèle, Confucius, Benjamin Franklin et Mark Twain. Elles sont intégrées à la page : rien n’est téléchargé pendant l’affichage.' },
      { question: 'Puis-je garder une citation à l’écran ?', answer: 'Oui. Appuyez sur Pause (ou espace) et la citation reste jusqu’à ce que vous repreniez ou appuyiez sur une flèche.' },
      { question: 'L’écran reste-t-il allumé ?', answer: 'En plein écran, sur les navigateurs compatibles, un verrou anti-veille empêche l’écran de s’éteindre.' },
    ],
  },
  'fake-windows-11-update': update('Windows 11', 'Microsoft', {
    answer: 'Un faux écran de mise à jour Windows 11 affiche l’écran sombre « Mise à jour en cours » avec l’indicateur rotatif et un pourcentage qui monte lentement. En plein écran, l’ordinateur paraît occupé à se mettre à jour, pour une blague ou un tournage. Échap pour revenir.',
    features: ['Indicateur et texte façon Windows 11', 'Vitesse réglable et pause', 'Plein écran avec curseur masqué', 'Échap pour quitter'],
    benefits: ['Blague réaliste et inoffensive', 'Accessoire propre pour enregistrements d’écran', 'Gratuit'],
  }, { question: 'Quelle différence avec la version Windows 10 ?', answer: 'Elle utilise le fond plus sombre et la mise en page plus simple des systèmes récents.' }),
  'fake-mac-update': update('macOS', 'Apple', {
    answer: 'Un faux écran de mise à jour Mac affiche l’écran noir de mise à jour de macOS avec une barre de progression et le temps restant. En plein écran, le Mac semble installer une mise à jour, pour une blague inoffensive ou un accessoire vidéo. Échap pour quitter.',
    features: ['Barre de progression et temps restant façon macOS', 'Vitesse de mise à jour réglable', 'Plein écran avec curseur masqué', 'Échap pour quitter'],
    benefits: ['Blague inoffensive pour utilisateurs de Mac', 'Accessoire propre pour vidéos', 'Gratuit'],
  }, { question: 'Utilise-t-il le vrai logo Apple ?', answer: 'Non. Il utilise un symbole générique neutre pour éviter tout usage abusif de la marque, tout en gardant la mise en page familière.' }),
  'fake-android-update': update('Android', 'Google', {
    answer: 'Un faux écran de mise à jour Android affiche une mise à jour système en cours avec une barre de progression. Ouvrez-le en plein écran sur un téléphone ou une tablette pour qu’il semble se mettre à jour, puis touchez le bouton fermer pour révéler la blague.',
    features: ['Écran et progression façon Android', 'Vitesse réglable', 'Plein écran sur téléphones et tablettes', 'Touchez pour quitter'],
    benefits: ['Blague qui marche sur tout téléphone', 'Aucune appli à installer', 'Gratuit'],
  }, { question: 'Cela marche-t-il sur téléphone ?', answer: 'Oui. Sur la plupart des navigateurs Android, le plein écran masque la barre d’adresse. Sur Safari pour iPhone, il remplit la fenêtre du navigateur.' }),
  'fake-windows-xp-update': update('Windows XP', 'Microsoft', {
    answer: 'Un faux écran de mise à jour Windows XP recrée le classique écran bleu « Installation des mises à jour » du début des années 2000 avec sa barre de progression. Idéal pour des blagues nostalgiques, des vidéos rétro et des tournages d’époque. Échap pour quitter.',
    features: ['Look classique de l’ère XP', 'Barre de progression et texte d’état', 'Plein écran avec curseur masqué', 'Échap pour quitter'],
    benefits: ['Nostalgie immédiate', 'Accessoire fidèle à l’époque', 'Gratuit'],
  }, { question: 'Pourquoi a-t-il l’air si rétro ?', answer: 'Il imite le style des boîtes de dialogue du début des années 2000 pour un rendu nostalgique et reconnaissable.' }),
  'fake-chrome-os-update': update('ChromeOS', 'Google', {
    answer: 'Un faux écran de mise à jour ChromeOS affiche une mise à jour en cours façon Chromebook. Lancez-le en plein écran sur un Chromebook ou tout ordinateur pour que le système semble se mettre à jour, en blague inoffensive ou accessoire de démo. Échap pour quitter.',
    features: ['Écran de mise à jour façon ChromeOS', 'Vitesse de progression réglable', 'Plein écran avec curseur masqué', 'Échap pour quitter'],
    benefits: ['Marche sur les Chromebooks d’école et de bureau', 'Blague inoffensive', 'Gratuit'],
  }, { question: 'Cela marche-t-il sur un Chromebook ?', answer: 'Oui. Appuyez sur la touche plein écran ou sur le bouton Plein écran pour l’effet complet.' }),
  'fake-ubuntu-update': update('Ubuntu', 'Canonical', {
    answer: 'Un faux écran de mise à jour Ubuntu affiche des mises à jour de paquets Linux qui défilent dans un terminal avec des lignes de progression. On dirait une vraie mise à niveau du système : une blague amusante pour les développeurs et un accessoire crédible pour des vidéos sur Linux.',
    features: ['Sortie de mise à jour façon apt', 'Couleurs de terminal façon Ubuntu', 'Plein écran', 'Échap pour quitter'],
    benefits: ['Blague pour développeurs', 'Accessoire de terminal réaliste', 'Gratuit'],
  }, { question: 'Les lignes du journal sont-elles de vraies commandes ?', answer: 'Non. C’est un texte préparé pour l’effet et rien n’est exécuté sur votre ordinateur.' }),
  'fake-windows-xp-boot': {
    glance: {
      answer: 'Un faux écran de démarrage Windows XP reproduit l’écran d’accueil classique avec la barre de chargement bleue qui défile sur fond noir. Un accessoire rétro rapide pour vidéos, tournages et blagues, et un économiseur nostalgique pour les fans du système de 2001.',
      features: ['Écran de démarrage classique avec barre animée', 'Tourne en boucle aussi longtemps que vous voulez', 'Plein écran avec curseur masqué', 'Échap pour quitter'],
      benefits: ['Accessoire rétro en un clic', 'Économiseur nostalgique', 'Gratuit'],
    },
    steps: ['L’écran de démarrage commence tout de suite, avec les blocs bleus qui glissent dans la barre de chargement.', 'Appuyez sur F ou Plein écran pour remplir l’écran et masquer le navigateur.', 'Laissez tourner : la barre de chargement boucle aussi longtemps que vous voulez.', 'Appuyez sur Échap pour quitter.'],
    useCases: [
      { title: 'Nostalgie', description: 'Retrouvez le démarrage d’un PC du début des années 2000.' },
      { title: 'Accessoire rétro', description: 'Habillez un ordinateur vintage pour photos ou films.' },
      { title: 'Blagues inoffensives', description: 'Faites croire qu’un PC moderne démarre sous XP.' },
      { title: 'Intros de stream', description: 'Une intro rétro « démarrage » pour vos streams.' },
    ],
    faqs: [
      { question: 'Est-ce réel ou dangereux ?', answer: 'Non. C’est une simulation visuelle inoffensive dans un onglet normal. Elle ne modifie pas votre appareil et n’installe rien.' },
      brandFaq('Microsoft'),
      { question: 'Joue-t-il le son de démarrage ?', answer: 'Non. Par respect pour vos oreilles et le droit d’auteur, il n’y a pas de son de démarrage.' },
      EXIT,
    ],
  },
  'fake-zoom-meeting': call('Zoom Video Communications', {
    answer: 'Un faux écran de réunion Zoom affiche un appel vidéo façon Zoom avec une grille de participants, une barre d’outils et l’aperçu de votre caméra. Pour les blagues, accessoires, captures et s’entraîner face caméra. Votre image reste sur votre appareil et n’est jamais enregistrée ni envoyée.',
    features: ['Grille de participants avec noms et icônes micro coupé', 'Votre caméra en direct, aussi en plein écran', 'Minuteur de réunion et barre d’outils', 'Titre de réunion modifiable'],
    benefits: ['Accessoire d’appel réaliste pour vidéos', 'Entraînez-vous à présenter face caméra', 'Privé : rien ne quitte votre appareil'],
  }, { question: 'Quelle différence avec l’écran Teams ?', answer: 'Celui-ci suit la mise en page de Zoom : une galerie de vignettes avec les commandes en bas. L’écran Teams place les commandes et un bouton rouge Quitter dans une barre supérieure avec minuteur.' }),
  'fake-teams-meeting': call('Microsoft', {
    answer: 'Un faux écran de réunion Microsoft Teams affiche un appel façon Teams avec des vignettes de participants, la barre de réunion et l’aperçu de votre caméra. Utilisez-le pour une blague, un accessoire ou répéter une présentation. L’aperçu reste dans le navigateur et n’est jamais enregistré.',
    features: ['Vignettes et commandes façon Teams', 'Caméra en direct en plein écran', 'Minuteur de réunion', 'Titre de réunion modifiable'],
    benefits: ['Accessoire de bureau crédible', 'Répétez vos appels sereinement', 'Privé et gratuit'],
  }, { question: 'Puis-je changer le nom de la réunion ?', answer: 'Oui. Tapez un nouveau nom dans le champ de titre sous l’écran. Il apparaît aussitôt dans la barre du haut, et rien n’est enregistré ni envoyé.' }),
  'fake-google-meet': call('Google', {
    answer: 'Un faux écran Google Meet affiche un appel vidéo façon Meet avec des vignettes de participants, la barre de commandes en bas et l’aperçu de votre caméra. Pour les blagues, les vidéos et l’entraînement aux présentations ; votre image ne quitte jamais votre appareil.',
    features: ['Vignettes et barre de commandes façon Meet', 'Caméra en direct en plein écran', 'Minuteur et titre de réunion modifiable', 'Aucune connexion à Google requise'],
    benefits: ['Accessoire réaliste pour films et tutoriels', 'Entraînez-vous face caméra', 'Privé et gratuit'],
  }, { question: 'Le code de réunion est-il réel ?', answer: 'Non. « abc-defg-hij » est un texte d’exemple. Personne ne peut rejoindre et la page ne se connecte jamais à Google Meet ni à un autre service.' }),
  'fake-slack-huddle': call('Slack Technologies', {
    answer: 'Un faux écran de huddle Slack affiche un appel audio et vidéo façon Slack avec participants et commandes. Utilisez-le comme blague, accessoire de capture pour présentations ou fond de tournage, sans lien avec un vrai espace de travail Slack.',
    features: ['Vue des participants façon huddle', 'Indicateurs de parole et commandes', 'Plein écran', 'Titre modifiable'],
    benefits: ['Accessoire rapide pour vidéos de télétravail', 'Blague inoffensive', 'Gratuit'],
  }),
  'fake-radar-screen': {
    glance: {
      answer: 'Un faux écran radar affiche un radar circulaire classique, appelé indicateur panoramique, avec une ligne de balayage qui tourne, des échos qui s’estompent et des cercles de distance. Les relevés et le ping en option en font un accessoire convaincant pour films, escape games, jeux et blagues de science-fiction.',
      features: ['Balayage rotatif avec rémanence', 'Échos mobiles et cercles de distance', 'Relevés de cap et de distance', 'Ping façon sonar en option'],
      benefits: ['Accessoire SF ou militaire immédiat', 'Idéal pour escape games et décors de scène', 'Gratuit et utilisable hors ligne'],
    },
    steps: ['Le radar commence à balayer tout de suite.', 'Choisissez une couleur (vert, ambre ou bleu), la vitesse de balayage et le nombre d’échos.', 'Activez le ping si vous voulez ; il ne joue qu’une fois activé.', 'Appuyez sur F ou Plein écran pour remplir l’écran, et Échap pour quitter.'],
    useCases: [
      { title: 'Accessoire de film et de théâtre', description: 'Un écran de salle de contrôle convaincant sans vrai matériel.' },
      { title: 'Escape games et jeux', description: 'Créez l’ambiance sous-marin, espace ou espionnage.' },
      { title: 'Soirées et streams', description: 'Un fond de science-fiction animé sur une TV ou un second écran.' },
      { title: 'Économiseur d’écran', description: 'Une animation calme en boucle pour un écran inutilisé.' },
    ],
    faqs: [
      { question: 'Affiche-t-il de vraies données radar ou d’avions ?', answer: 'Non. Chaque écho est généré au hasard dans votre navigateur. C’est uniquement pour le divertissement et les accessoires.' },
      { question: 'Pourquoi les points s’estompent-ils ?', answer: 'Les radars classiques utilisaient un phosphore qui restait lumineux après le passage du faisceau puis s’éteignait. L’effet imite cette rémanence.' },
      { question: 'Comment quitter ?', answer: 'Appuyez sur Échap, ou bougez la souris ou touchez l’écran pour afficher le bouton fermer. Fermer l’onglet marche aussi.' },
    ],
  },
}
