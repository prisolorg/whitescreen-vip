import type { LocalizedSubtitles } from './types'

/** French subtitles: one actionable line under each H1 (see src/lib/subtitles.ts for the English set). */
export const fr: LocalizedSubtitles = {
  tools: {
    // Écrans de couleur (dont la page d'accueil, l'écran blanc)
    'white-screen': 'Passez votre écran en blanc éclatant pour éclairer, nettoyer ou chercher des pixels morts.',
    'black-screen': 'Passez au noir pur pour repérer pixels bloqués et fuites de lumière, ou masquer un écran.',
    'red-screen': 'Remplissez l’écran de rouge pour vérifier les sous-pixels rouges ou créer une ambiance.',
    'green-screen': 'Utilisez un écran vert vif comme fond d’incrustation ou pour tester les pixels.',
    'blue-screen': 'Remplissez l’écran de bleu pour l’incrustation ou pour tester les sous-pixels bleus.',
    'yellow-screen': 'Passez votre écran en jaune pour une lumière chaude ou un test des pixels rouges et verts.',
    'orange-screen': 'Baignez la pièce d’une lumière orange chaude, ou utilisez-la comme fond photo.',
    'pink-screen': 'Éclairez votre visage d’un rose doux pour vos selfies, appels ou ambiances.',
    'purple-screen': 'Créez une lueur violette pour l’ambiance d’une pièce ou un décor de stream.',
    'cyan-screen': 'Affichez du cyan pour tester en même temps les sous-pixels verts et bleus.',
    'magenta-screen': 'Affichez du magenta pour tester les sous-pixels rouges et bleus et repérer les teintes.',
    'gray-screen': 'Affichez un gris neutre pour révéler nuages, banding et effet d’écran sale.',

    // Tests d'écran
    'dead-pixel-test': 'Faites défiler 9 couleurs pour trouver les pixels morts, bloqués ou chauds.',
    'screen-uniformity-test': 'Examinez des fonds gris unis pour repérer nuages, vignettage et fuites de lumière.',
    'monitor-test': 'Parcourez 7 mires pour vérifier couleurs, gamma et netteté.',
    'oled-gray-test': 'Parcourez des gris quasi noirs pour repérer le banding et le mura des OLED.',
    'oled-burn-in-test': 'Faites défiler des couleurs unies pour repérer marquage et rémanence sur OLED.',
    'screen-burn-in-test': 'Cherchez les images fantômes, puis lancez le correcteur pour effacer la rémanence.',
    'touch-screen-test': 'Balayez la grille pour trouver les zones mortes et compter les points multitouch.',
    'screen-refresh-rate-test': 'Voyez votre fréquence de rafraîchissement en Hz dès le chargement de la page.',
    'monitor-ghosting-test': 'Augmentez la vitesse jusqu’aux traînées pour juger le ghosting et l’overdrive.',
    'frame-rate-test': 'Comparez côte à côte 15, 24, 30 et 60 FPS avec le maximum de votre écran.',
    'screen-color-test': 'Parcourez barres de couleur et rampes RVB pour vérifier teintes et banding.',
    'screen-resolution-test': 'Voyez aussitôt votre résolution d’écran et votre ratio de pixels, sans cliquer.',

    // Effets et sons
    'no-signal-screen': 'Choisissez barres de couleur, rebond ou bleu, puis passez en plein écran sur une TV.',
    'white-noise-generator': 'Lancez un bruit blanc régulier et réglez une minuterie de sommeil pour la nuit.',
    'brown-noise-generator': 'Lancez un bruit brun grave pour vous concentrer ou dormir, avec minuterie.',
    'pink-noise-generator': 'Lancez un bruit rose façon pluie et ajustez-le avec les filtres et le volume.',
    'broken-screen': 'Touchez n’importe où pour briser la vitre, puis tendez l’appareil.',
    'hacker-typer': 'Tapez sur n’importe quelle touche et regardez défiler du code de hacker de film.',
    'hacked-screen': 'Choisissez rouge ou vert, passez en plein écran et laissez un ami le découvrir.',
    'visual-noise': 'Remplissez l’écran d’un grain de pixels animé, en mono, en couleur ou teinté.',
    'color-cycle': 'Laissez l’écran glisser à travers toutes les couleurs, ou passez-les vous-même.',
    'gradient-screen': 'Choisissez des couleurs et un angle pour créer un dégradé animé en plein écran.',

    // Éclairage
    'zoom-lighting': 'Transformez votre écran en lumière douce pour votre prochain appel vidéo.',
    'ring-light': 'Éclairez votre visage avec un anneau lumineux à l’écran ; réglez taille et chaleur.',

    // Écrans de veille
    'matrix-screensaver': 'Lancez la pluie numérique et réglez sa vitesse, sa couleur et ses caractères.',
    'flip-clock-screensaver': 'Transformez n’importe quel écran libre en grande horloge flip en direct.',
    'dvd-screensaver': 'Regardez le logo DVD rebondir et attendez qu’il touche pile un coin.',
    'motivational-quote-screensaver': 'Affichez des citations motivantes en grands caractères sur un écran libre.',

    // Minuteurs et utilitaires
    'countdown-timer': 'Choisissez un préréglage ou votre propre durée, puis appuyez sur Démarrer.',
    'pomodoro-timer': 'Appuyez sur Démarrer pour 25 minutes de concentration, puis 5 minutes de pause.',
    stopwatch: 'Appuyez sur Espace pour lancer le chrono et sur L pour enregistrer un tour.',

    // Faux écrans
    'fake-windows-10-update': 'Passez en plein écran avec une fausse mise à jour Windows 10 pour piéger un ami.',
    'fake-windows-11-update': 'Affichez en plein écran le sombre écran de mise à jour Windows 11 pour une blague.',
    'fake-blue-screen-of-death': 'Passez en plein écran avec un faux écran de plantage, puis révélez la blague.',
    'fake-mac-update': 'Affichez en plein écran une fausse mise à jour macOS avec sa fine barre de progression.',
    'fake-android-update': 'Ouvrez-la sur un téléphone pour afficher une fausse mise à jour système Android.',
    'fake-windows-xp-update': 'Revivez les années 2000 avec un faux écran d’installation de Windows XP.',
    'fake-windows-xp-boot': 'Affichez en plein écran le célèbre écran de démarrage de Windows XP.',
    'fake-chrome-os-update': 'Affichez un faux écran de mise à jour Chromebook avec des étapes qui changent.',
    'fake-ubuntu-update': 'Regardez défiler de faux journaux de paquets Ubuntu dans un terminal.',
    'fake-zoom-meeting': 'Préparez un faux écran d’appel façon Zoom pour une blague ou un tournage.',
    'fake-teams-meeting': 'Affichez un écran de réunion façon Teams avec les vignettes des participants.',
    'fake-google-meet': 'Affichez un appel façon Meet avec vignettes et contour de l’orateur.',
    'fake-slack-huddle': 'Affichez un huddle façon Slack avec anneaux de parole et minuteur en direct.',
    'fake-radar-screen': 'Lancez un balayage radar de science-fiction avec échos, pour un décor ou un tournage.',
  },
  backgrounds: {
    'white-background': 'Téléchargez un fond blanc pur en 4K, en taille téléphone ou personnalisée.',
    'black-background': 'Obtenez un vrai fond noir en PNG ou en CSS, à n’importe quelle taille.',
    'orange-background': 'Téléchargez un fond orange chaleureux pour votre téléphone ou votre ordinateur.',
    'gradient-background': 'Téléchargez ce dégradé doux en PNG, ou copiez-le en CSS.',
    'neon-background': 'Enregistrez cette lueur néon en fond d’écran 4K ou pour téléphone.',
    'red-background': 'Téléchargez un fond rouge vif à toute taille, ou copiez le CSS.',
    'yellow-background': 'Téléchargez un fond jaune vif pour vos diapositives, téléphones ou ordinateurs.',
    'blue-background': 'Téléchargez un fond bleu épuré en PNG, en 4K ou en taille téléphone.',
    'green-screen-background': 'Affichez ce fond vert en plein écran pour l’incrustation, ou téléchargez-le.',
    'virtual-office': 'Téléchargez un fond de bureau virtuel pour votre prochain appel vidéo.',
    'graph-paper': 'Téléchargez une grille de papier millimétré en PNG, ou copiez-la en CSS.',
    'pink-background': 'Téléchargez un fond rose pour votre téléphone, votre ordinateur ou vos stories.',
    'light-pink-background': 'Téléchargez un fond rose clair et doux à la taille de votre choix.',
    'green-background': 'Téléchargez un fond vert frais en PNG, ou copiez le CSS.',
    'purple-background': 'Téléchargez un fond violet intense pour votre téléphone ou votre ordinateur.',
    'dark-background': 'Téléchargez un fond sombre reposant pour les yeux, à toute taille.',
    'gold-background': 'Téléchargez un fond dégradé doré pour invitations, diapositives ou téléphones.',
    'aesthetic-background': 'Téléchargez un fond esthétique et doux pour votre téléphone ou votre ordinateur.',
    'beige-background': 'Téléchargez un fond beige chaleureux en PNG, ou copiez le CSS.',
    'pastel-background': 'Téléchargez un fond dégradé pastel pour téléphones, diapositives ou publications.',
  },
}
