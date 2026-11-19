import type { LanguageGuides } from './types'
import { DvdScreensaverGuideFr } from '@/components/home/i18n/fr/dvd-screensaver-guide'
import { BrokenScreenGuideFr } from '@/components/home/i18n/fr/broken-screen-guide'
import { FakeZoomMeetingGuideFr } from '@/components/home/i18n/fr/fake-zoom-meeting-guide'
import { FakeWindowsUpdateGuideFr } from '@/components/home/i18n/fr/fake-windows-update-guide'
import { FakeWindows11UpdateGuideFr } from '@/components/home/i18n/fr/fake-windows-11-update-guide'
import { FakeBsodGuideFr } from '@/components/home/i18n/fr/fake-bsod-guide'
import { FakeMacUpdateGuideFr } from '@/components/home/i18n/fr/fake-mac-update-guide'
import { PomodoroTimerGuideFr } from '@/components/home/i18n/fr/pomodoro-timer-guide'
import { FlipClockGuideFr } from '@/components/home/i18n/fr/flip-clock-guide'
import { ZoomLightingGuideFr } from '@/components/home/i18n/fr/zoom-lighting-guide'
import { CountdownTimerGuideFr } from '@/components/home/i18n/fr/countdown-timer-guide'
import { RingLightGuideFr } from '@/components/home/i18n/fr/ring-light-guide'
import { StopwatchGuideFr } from '@/components/home/i18n/fr/stopwatch-guide'
import { RefreshRateGuideFr } from '@/components/home/i18n/fr/refresh-rate-guide'
import { DeadPixelGuideFr } from '@/components/home/i18n/fr/dead-pixel-guide'
import { TouchScreenGuideFr } from '@/components/home/i18n/fr/touch-screen-guide'
import { MonitorGhostingGuideFr } from '@/components/home/i18n/fr/monitor-ghosting-guide'
import { MonitorTestGuideFr } from '@/components/home/i18n/fr/monitor-test-guide'
import { ScreenBurnInGuideFr } from '@/components/home/i18n/fr/screen-burn-in-guide'
import { ScreenResolutionGuideFr } from '@/components/home/i18n/fr/screen-resolution-guide'
import { ScreenColorGuideFr } from '@/components/home/i18n/fr/screen-color-guide'
import { FrameRateGuideFr } from '@/components/home/i18n/fr/frame-rate-guide'
import { OledGrayGuideFr } from '@/components/home/i18n/fr/oled-gray-guide'
import { HackedScreenGuideFr } from '@/components/home/i18n/fr/hacked-screen-guide'
import { NoSignalGuideFr } from '@/components/home/i18n/fr/no-signal-guide'
import { BlackScreenGuideFr } from '@/components/home/i18n/fr/black-screen-guide'
import { YellowScreenGuideFr } from '@/components/home/i18n/fr/yellow-screen-guide'
import { GreenScreenGuideFr } from '@/components/home/i18n/fr/green-screen-guide'
import { BlueScreenGuideFr } from '@/components/home/i18n/fr/blue-screen-guide'
import { RedScreenGuideFr } from '@/components/home/i18n/fr/red-screen-guide'
import { PinkScreenGuideFr } from '@/components/home/i18n/fr/pink-screen-guide'
import { WhiteScreenGuideFr } from '@/components/home/i18n/fr/white-screen-guide'

/** French (vous, French UI button names, French search terms). */
export const fr: LanguageGuides = {
  tools: {
    'dvd-screensaver': {
      Guide: DvdScreensaverGuideFr,
      faqs: [
        {
          question: 'Est-ce le logo DVD officiel ?',
          answer:
            'Non. L’écran de veille DVD dessine un logo façon DVD dans votre navigateur et n’est pas affilié à DVD Format/Logo Licensing Corporation, propriétaire du logo DVD Video.',
        },
        {
          question: 'Pourquoi le logo de l’écran de veille DVD change-t-il de couleur ?',
          answer:
            'Comme sur l’écran de veille des lecteurs DVD classiques, le logo prend une nouvelle couleur chaque fois qu’il touche un bord, sans jamais répéter deux fois de suite la même couleur.',
        },
        {
          question: 'Puis-je utiliser l’écran de veille DVD comme vrai écran de veille sur Windows ou Mac ?',
          answer:
            'Il fonctionne dans votre navigateur au lieu de s’installer comme écran de veille système. Ouvrez-le en plein écran quand votre ordinateur est inactif ; l’écran de veille et la mise en veille de votre système restent actifs.',
        },
      ],
    },
    'broken-screen': {
      Guide: BrokenScreenGuideFr,
      faqs: [
        {
          question: 'La blague de l’écran cassé peut-elle abîmer mon écran ?',
          answer: 'Non. Ce n’est qu’une image dessinée dans votre navigateur. Appuyez sur Échap ou fermez l’onglet et l’écran redevient normal.',
        },
        {
          question: 'La blague de l’écran cassé fonctionne-t-elle sur un Chromebook ?',
          answer:
            'Oui. Elle fonctionne dans tout navigateur récent, y compris sur Chromebook, ordinateurs Windows et Mac, téléphones, tablettes et navigateurs de smart TV. Rien n’est installé.',
        },
        {
          question: 'Comment faire une blague d’écran fissuré de façon responsable ?',
          answer:
            'Faites court, choisissez quelqu’un qui en rira, ne l’utilisez jamais pour obtenir de l’argent ou des informations, et révélez la blague tout de suite.',
        },
      ],
    },
    'fake-zoom-meeting': {
      Guide: FakeZoomMeetingGuideFr,
      faqs: [
        {
          question: 'Cette fausse réunion Zoom est-elle connectée à Zoom ?',
          answer:
            'Non. C’est une simulation indépendante façon Zoom, sans lien avec Zoom Video Communications. Personne ne peut la rejoindre et rien n’est envoyé nulle part.',
        },
        {
          question: 'La fausse réunion Zoom utilise-t-elle ma caméra ?',
          answer:
            'Seulement si vous activez « Activer l’aperçu caméra ». Votre vidéo s’affiche dans votre propre vignette et ne quitte jamais votre appareil ; rien n’est enregistré ni envoyé. Le micro n’est jamais utilisé.',
        },
        {
          question: 'La fausse réunion Zoom a-t-elle du son ?',
          answer: 'Non, elle est silencieuse. Pour une fausse vidéo de réunion, ajoutez du son ou des conversations dans votre logiciel de montage.',
        },
      ],
    },
    'fake-windows-10-update': {
      Guide: FakeWindowsUpdateGuideFr,
      faqs: [
        {
          question: 'Un faux écran de mise à jour Windows peut-il nuire à mon ordinateur ?',
          answer: 'Non. Ce n’est qu’une page dans votre navigateur. Rien n’est installé ni modifié, et appuyer sur Échap ou fermer l’onglet y met fin.',
        },
        {
          question: 'Puis-je faire croire que la fausse mise à jour Windows est bloquée ?',
          answer: 'Oui. Appuyez sur « Pause » et le pourcentage s’arrête là où il est. Ouvrez « Plus » pour changer la vitesse à laquelle il monte.',
        },
        {
          question: 'La fausse mise à jour Windows fonctionne-t-elle sur Mac ou Chromebook ?',
          answer:
            'Oui. Elle fonctionne dans tout navigateur récent : vous pouvez aussi afficher une fausse mise à jour Windows sur un Mac, un Chromebook ou une tablette.',
        },
      ],
    },
    'fake-blue-screen-of-death': {
      Guide: FakeBsodGuideFr,
      faqs: [
        {
          question: 'Un faux écran bleu de la mort peut-il nuire à mon ordinateur ?',
          answer: 'Non. C’est une image dans votre navigateur. Votre ordinateur continue de fonctionner normalement, et appuyer sur Échap ou fermer l’onglet y met fin.',
        },
        {
          question: 'Pourquoi l’écran bleu de la mort est-il noir maintenant ?',
          answer:
            'Les versions récentes de Windows 11 affichent l’écran de plantage en noir au lieu de bleu. Choisissez « Noir (nouveau) » dans le menu « Style » pour ce look.',
        },
        {
          question: 'Puis-je changer le code d’arrêt de l’écran bleu de la mort ?',
          answer:
            'Oui. Ouvrez « Plus » et choisissez un code d’arrêt, comme CRITICAL_PROCESS_DIED ou MEMORY_MANAGEMENT. Il se met à jour à l’écran immédiatement.',
        },
      ],
    },
    'fake-windows-11-update': {
      Guide: FakeWindows11UpdateGuideFr,
      faqs: [
        {
          question: 'La fausse mise à jour Windows 11 est-elle réelle ?',
          answer:
            'Non. C’est une page dans votre navigateur qui ressemble à l’écran de mise à jour de Windows 11. Rien n’est installé, et Échap ou la fermeture de l’onglet y met fin.',
        },
        {
          question: 'Combien de temps dure la fausse mise à jour Windows 11 ?',
          answer:
            'Elle ne se termine jamais : le pourcentage repart de zéro après 100 %. Utilisez « Pause » pour le bloquer sur un chiffre, ou ouvrez « Plus » pour changer la vitesse.',
        },
        {
          question: 'Puis-je lancer la fausse mise à jour Windows 11 sur un Mac ou un Chromebook ?',
          answer:
            'Oui. Elle fonctionne dans tout navigateur récent : l’écran de mise à jour Windows 11 marche aussi sur Mac, Chromebook, tablette et téléphone.',
        },
      ],
    },
    'fake-mac-update': {
      Guide: FakeMacUpdateGuideFr,
      faqs: [
        {
          question: 'Cette fausse mise à jour Mac est-elle faite par Apple ?',
          answer:
            'Non. C’est une simulation indépendante d’un écran de mise à jour façon macOS, sans lien avec Apple. Rien n’est installé ni modifié sur votre Mac.',
        },
        {
          question: 'Puis-je faire durer la fausse mise à jour Mac des heures ?',
          answer:
            'Réglez la durée de la mise à jour sur 120 minutes dans « Plus ». Quand la barre est pleine, l’écran redémarre et la mise à jour recommence : elle peut tourner aussi longtemps que vous voulez.',
        },
      ],
    },
    'pomodoro-timer': {
      Guide: PomodoroTimerGuideFr,
      faqs: [
        {
          question: 'Qu’est-ce qu’un minuteur Pomodoro ?',
          answer:
            'Un minuteur Pomodoro découpe le travail en blocs de concentration, généralement de 25 minutes, avec une pause courte après chacun et une pause plus longue après quatre. Il suit la technique Pomodoro de Francesco Cirillo.',
        },
        {
          question: 'Combien dure un pomodoro ?',
          answer:
            'Traditionnellement 25 minutes de concentration suivies de 5 minutes de pause. Vous pouvez changer les deux, par exemple en 50 et 10 minutes, dans « Plus ».',
        },
        {
          question: 'Le minuteur Pomodoro fonctionne-t-il sur mon téléphone ?',
          answer:
            'Oui. Ouvrez-le dans le navigateur de votre téléphone et appuyez sur « Démarrer ». Gardez l’onglet ouvert pour entendre le carillon à la fin de chaque phase.',
        },
        {
          question: 'Ce minuteur Pomodoro est-il gratuit ?',
          answer: 'Oui. Il est entièrement gratuit, sans inscription, sans application et sans publicité dans le minuteur lui-même.',
        },
      ],
    },
    'flip-clock-screensaver': {
      Guide: FlipClockGuideFr,
      faqs: [
        {
          question: 'L’horloge flip garde-t-elle mon écran allumé ?',
          answer:
            'Oui, en plein écran. Les navigateurs compatibles gardent l’écran allumé tant qu’il est en plein écran : elle peut tourner toute la journée comme horloge de bureau.',
        },
        {
          question: 'Puis-je afficher l’heure au format 12 heures ?',
          answer: 'Oui. Désactivez « Format 24 heures » et l’horloge passe au format 12 heures avec la mention AM ou PM.',
        },
        {
          question: 'Puis-je l’utiliser comme écran de veille sur Windows ou Mac ?',
          answer:
            'Elle fonctionne dans votre navigateur au lieu de s’installer comme écran de veille système. Ouvrez-la en plein écran sur un écran libre ou quand votre ordinateur est inactif.',
        },
      ],
    },
    'zoom-lighting': {
      Guide: ZoomLightingGuideFr,
      faqs: [
        {
          question: 'Puis-je utiliser la lumière pour visioconférence sur le même PC portable que mon appel ?',
          answer:
            'Elle fonctionne mieux sur un second écran, une tablette ou un téléphone placé derrière votre webcam, pour que l’appel reste visible. Sur un seul PC portable, l’éclairage en plein écran couvrirait votre fenêtre Zoom.',
        },
        {
          question: 'Quelle est la meilleure température de couleur pour la visioconférence ?',
          answer:
            '« Neutre » (4500 K) convient à la plupart des pièces. Choisissez « Lumière du jour » (6500 K) pour s’accorder à la lumière d’une fenêtre, ou « Chaude » (3000 K) pour un rendu plus doux le soir.',
        },
        {
          question: 'Est-ce gratuit ?',
          answer:
            'Oui. C’est gratuit dans tout navigateur, sans application ni inscription, et cela fonctionne avec Zoom, Teams, Google Meet et tout autre appel vidéo.',
        },
      ],
    },
    'countdown-timer': {
      Guide: CountdownTimerGuideFr,
      faqs: [
        {
          question: 'Quelles durées puis-je décompter ?',
          answer:
            'N’importe quelle durée jusqu’à 99 heures, 59 minutes et 59 secondes. Choisissez 1, 5, 10, 15, 25, 45 ou 60 minutes dans le menu « Minuteur », ou cliquez sur les heures, minutes et secondes à l’écran pour saisir votre propre durée, puis appuyez sur « Démarrer ».',
        },
        {
          question: 'Y a-t-il un son quand le temps est écoulé ?',
          answer:
            'Oui. Un carillon retentit et l’écran clignote en rouge quand le temps est écoulé. Coupez le carillon dans « Plus » pour un compte à rebours silencieux.',
        },
        {
          question: 'Le minuteur peut-il faire un compte à rebours jusqu’à une date ?',
          answer:
            'Oui. Choisissez « Compte à rebours jusqu’à une date » dans le menu « Minuteur », sélectionnez la date et l’heure, ajoutez un nom d’événement si vous voulez, puis appuyez sur « Démarrer ». Il affiche les jours, heures, minutes et secondes restants, et retient votre compte à rebours dans ce navigateur quand vous revenez.',
        },
      ],
    },
    'ring-light': {
      Guide: RingLightGuideFr,
      faqs: [
        {
          question: 'Un écran peut-il remplacer un vrai ring light ?',
          answer:
            'Pour les appels vidéo, les selfies et le maquillage, un écran lumineux fonctionne étonnamment bien. Un vrai éclairage LED est plus puissant et mieux adapté pour filmer dans une pièce sombre ou de loin.',
        },
        {
          question: 'Est-ce que ça fonctionne sur mon téléphone ?',
          answer:
            'Oui. Ouvrez-le sur un téléphone ou une tablette, montez la luminosité et touchez deux fois pour le plein écran, puis orientez l’écran vers votre visage.',
        },
        {
          question: 'Quelle couleur est la meilleure pour le maquillage ?',
          answer: 'Le blanc à pleine luminosité, pour des couleurs fidèles. Ouvrez « Plus » pour rendre le blanc plus chaud ou plus froid selon votre pièce.',
        },
      ],
    },
    stopwatch: {
      Guide: StopwatchGuideFr,
      faqs: [
        {
          question: 'Quelle est sa précision ?',
          answer:
            'Il utilise l’horloge haute précision de votre navigateur et affiche le temps au centième de seconde. Si l’onglet passe en arrière-plan, le temps reste juste à votre retour.',
        },
        {
          question: 'Quels sont les raccourcis clavier ?',
          answer: 'Espace démarre et met en pause, L enregistre un tour et R remet à zéro.',
        },
        {
          question: 'Puis-je enregistrer mes tours ?',
          answer:
            'Oui. Appuyez sur « Copier les tours » pour copier chaque tour avec son temps intermédiaire et son temps total, puis collez-le dans un tableur, une note ou un message.',
        },
      ],
    },
    'screen-refresh-rate-test': {
      Guide: RefreshRateGuideFr,
      faqs: [
        {
          question: 'Quelle est la précision du test de fréquence de rafraîchissement ?',
          answer:
            'Très proche de la réalité pour la plupart des écrans. Il mesure des centaines d’images et arrondit à la fréquence courante la plus proche. Des onglets chargés, l’économie de batterie ou un ordinateur lent peuvent donner une valeur plus basse : fermez les autres applications et appuyez sur « Mesurer à nouveau ».',
        },
        {
          question: 'Pourquoi mon moniteur 144 Hz affiche-t-il 60 Hz ?',
          answer:
            'L’écran est probablement réglé sur 60 Hz. Choisissez la fréquence supérieure dans vos paramètres d’affichage et utilisez un câble et un port qui la prennent en charge, comme le DisplayPort ou un câble HDMI haut débit.',
        },
        {
          question: 'Le test de fréquence de rafraîchissement fonctionne-t-il sur téléphone ?',
          answer:
            'Oui. Ouvrez-le dans le navigateur de votre téléphone. Désactivez d’abord le mode économie d’énergie, car il limite souvent l’écran à 60 Hz.',
        },
      ],
    },
    'dead-pixel-test': {
      Guide: DeadPixelGuideFr,
      faqs: [
        {
          question: 'Combien de temps dure un test de pixels morts ?',
          answer: 'Environ une minute. Parcourez les 9 couleurs en plein écran et examinez tout l’écran sur chacune.',
        },
        {
          question: 'Un seul pixel mort, est-ce normal ?',
          answer:
            'Cela arrive, et beaucoup de fabricants ne remplacent un écran qu’au-delà d’un certain nombre de pixels défectueux. Consultez les conditions de garantie de votre moniteur, PC portable ou téléphone.',
        },
        {
          question: 'Quelle est la différence entre un pixel mort et un pixel bloqué ?',
          answer:
            'Un pixel mort ne s’allume jamais et paraît noir. Un pixel bloqué reste sur une couleur, comme le rouge, le vert ou le bleu, et peut parfois être réparé en faisant clignoter des couleurs dessus.',
        },
      ],
    },
    'touch-screen-test': {
      Guide: TouchScreenGuideFr,
      faqs: [
        {
          question: 'Comment tester les zones mortes de mon écran tactile ?',
          answer: 'Choisissez « Grille des zones mortes » et balayez chaque case. Les cases qui restent sombres après votre toucher sont des zones mortes.',
        },
        {
          question: 'Le test d’écran tactile fonctionne-t-il sur iPhone ?',
          answer:
            'Oui. Il fonctionne dans Safari et les autres navigateurs d’iPhone, ainsi que sur les téléphones Android, les tablettes et les PC portables à écran tactile.',
        },
        {
          question: 'Combien de points de contact mon téléphone doit-il gérer ?',
          answer:
            'La plupart des téléphones et tablettes en détectent 5 à 10 à la fois. Utilisez « Multitouch » et regardez le compteur « Max. » pour voir combien le vôtre en gère.',
        },
      ],
    },
    'monitor-ghosting-test': {
      Guide: MonitorGhostingGuideFr,
      faqs: [
        {
          question: 'Tous les moniteurs font-ils un peu de ghosting ?',
          answer:
            'La plupart des moniteurs LCD en montrent un peu à grande vitesse. Cela devient un problème quand la traînée est longue à vitesse normale ou qu’un halo clair apparaît. Réglez alors l’overdrive et relancez le test de ghosting d’écran.',
        },
        {
          question: 'Le ghosting est-il la même chose que l’input lag ?',
          answer:
            'Non. Le ghosting est une traînée visuelle due à des pixels lents ; l’input lag est un délai entre votre souris ou manette et l’écran. Ce test ne montre que le ghosting.',
        },
        {
          question: 'Est-ce un test anti-ghosting pour clavier ?',
          answer:
            'Non. L’anti-ghosting d’un clavier concerne la prise en compte de nombreuses touches pressées en même temps. Ce test de ghosting d’écran vérifie les traînées de mouvement sur votre écran.',
        },
      ],
    },
    'monitor-test': {
      Guide: MonitorTestGuideFr,
      faqs: [
        {
          question: 'La mire de test pour moniteur est-elle gratuite et en ligne ?',
          answer: 'Oui. Elle fonctionne dans votre navigateur sur tout moniteur, PC portable, TV ou téléphone, sans téléchargement ni inscription.',
        },
        {
          question: 'Comment tester un nouveau moniteur ?',
          answer:
            'Lancez les mires de test en plein écran à la résolution native, puis le [test de pixels morts](/dead-pixel-test) et le [test d’uniformité d’écran](/gray-screen). Le meilleur moment, c’est tant que vous pouvez encore le retourner.',
        },
        {
          question: 'Une mire de test peut-elle étalonner mon écran ?',
          answer:
            'Elle vous aide à régler à l’œil la luminosité, le contraste et le gamma. Un étalonnage précis exige une sonde de calibrage matérielle ou l’outil d’étalonnage de votre système.',
        },
      ],
    },
    'screen-burn-in-test': {
      Guide: ScreenBurnInGuideFr,
      faqs: [
        {
          question: 'Combien de temps faut-il pour qu’un écran marque ?',
          answer:
            'Généralement des centaines ou des milliers d’heures de la même image fixe, souvent à forte luminosité. La rémanence sur LCD peut apparaître après quelques heures, mais elle s’efface.',
        },
        {
          question: 'Combien de temps faire tourner le correcteur de marquage ?',
          answer:
            'Commencez par 10 à 30 minutes, puis relancez le test de marquage d’écran. Répétez plusieurs fois ; si rien ne change, le marquage est probablement permanent.',
        },
        {
          question: 'Le test de marquage d’écran fonctionne-t-il sur téléphone ?',
          answer:
            'Oui. Ouvrez-le dans le navigateur de votre téléphone, montez la luminosité et touchez deux fois pour le plein écran. Pour les téléphones OLED et AMOLED, essayez aussi le [test de marquage OLED](/oled-burn-in-test).',
        },
      ],
    },
    'screen-resolution-test': {
      Guide: ScreenResolutionGuideFr,
      faqs: [
        {
          question: 'Pourquoi ma résolution d’écran est-elle plus basse que celle de mon moniteur ?',
          answer:
            'À cause de la mise à l’échelle de l’affichage. À 150 %, un moniteur 2560 × 1440 signale 1707 × 960 au navigateur. La valeur « Pixels physiques » multiplie par le ratio de pixels pour montrer le nombre réel.',
        },
        {
          question: 'Le test de résolution d’écran est-il précis ?',
          answer: 'Il affiche exactement ce que signale votre navigateur. Gardez le zoom à 100 % pour que le nombre de pixels physiques corresponde à votre écran.',
        },
        {
          question: 'Quelle résolution dois-je utiliser ?',
          answer:
            'La résolution native de votre moniteur, marquée « Recommandé » dans les paramètres d’affichage de Windows. Toute autre résolution peut paraître floue.',
        },
      ],
    },
    'screen-color-test': {
      Guide: ScreenColorGuideFr,
      faqs: [
        {
          question: 'Le test des couleurs d’écran est-il gratuit ?',
          answer: 'Oui. Il fonctionne dans votre navigateur sur tout moniteur, PC portable, TV ou téléphone, sans téléchargement ni inscription.',
        },
        {
          question: 'Pourquoi les couleurs sont-elles différentes sur mon téléphone et mon moniteur ?',
          answer:
            'Les écrans diffèrent par le type de dalle, le mode de couleur et l’étalonnage. Lancez le test des couleurs d’écran sur les deux, mode nuit désactivé, et comparez les rampes RVB.',
        },
        {
          question: 'Un test de couleurs peut-il corriger les couleurs de mon écran ?',
          answer:
            'Non, il montre les problèmes. Corrigez les teintes avec la température de couleur ou le mode d’image de votre écran, ou avec l’outil d’étalonnage de votre système.',
        },
      ],
    },
    'frame-rate-test': {
      Guide: FrameRateGuideFr,
      faqs: [
        {
          question: 'Pourquoi le test de FPS affiche-t-il 60 sur mon moniteur 144 Hz ?',
          answer:
            'Le moniteur est probablement réglé sur 60 Hz, le câble ne supporte pas plus, ou le PC portable économise l’énergie. Vérifiez vos paramètres d’affichage et relancez le test de FPS.',
        },
        {
          question: 'L’œil humain peut-il voir plus de 60 FPS ?',
          answer:
            'Oui. La plupart des gens remarquent un mouvement plus fluide à 120 FPS et au-delà. Comparez la bande à 60 FPS avec la bande max sur un écran à haute fréquence de rafraîchissement.',
        },
        {
          question: 'Le test de FPS fonctionne-t-il sur téléphone ?',
          answer:
            'Oui. Ouvrez-le dans le navigateur de votre téléphone et touchez deux fois pour le plein écran. Les téléphones à écran 90 ou 120 Hz affichent une bande max plus fluide.',
        },
      ],
    },
    'oled-gray-test': {
      Guide: OledGrayGuideFr,
      faqs: [
        {
          question: 'Un peu de mura est-il normal sur un OLED ?',
          answer:
            'Oui. De légères taches sur les fonds de 1 % à 5 % sont courantes. Ce n’est un problème que si vous les remarquez dans des films et des jeux ordinaires.',
        },
        {
          question: 'Le test gris foncé pour OLED fonctionne-t-il sur les écrans LCD ?',
          answer:
            'Oui, mais les LCD montrent plutôt la lueur et les fuites du rétroéclairage sur le gris foncé. Pour eux, le [test d’uniformité d’écran](/gray-screen) est plus adapté.',
        },
        {
          question: 'Quelle luminosité utiliser ?',
          answer:
            'Une luminosité moyenne dans une pièce sombre. Une luminosité très élevée peut masquer les problèmes des quasi-noirs, et une très faible peut les exagérer.',
        },
      ],
    },
    'hacked-screen': {
      Guide: HackedScreenGuideFr,
      faqs: [
        {
          question: 'La blague de l’écran piraté est-elle sans danger ?',
          answer:
            'Oui. C’est une page web qui n’affiche que des animations. Elle n’installe rien et ne touche ni aux fichiers, ni à la webcam, ni au réseau.',
        },
        {
          question: 'Comment fermer l’écran piraté ?',
          answer: 'Appuyez sur Échap pour quitter le plein écran, puis fermez l’onglet.',
        },
        {
          question: 'Est-ce que ça fonctionne sur téléphone ?',
          answer:
            'Oui. Ouvrez-le dans le navigateur d’un téléphone et touchez deux fois pour le plein écran. La sirène nécessite d’abord un toucher, car les téléphones bloquent le son tant que vous n’avez pas interagi.',
        },
      ],
    },
    'no-signal-screen': {
      Guide: NoSignalGuideFr,
      faqs: [
        {
          question: 'Comment afficher l’écran Aucun signal sur ma TV ?',
          answer:
            'Ouvrez la page dans le navigateur de votre TV, ou diffusez ou branchez un PC portable, puis appuyez sur F ou touchez « Plein écran ».',
        },
        {
          question: 'Puis-je changer le texte PAS DE SIGNAL ?',
          answer:
            'Oui. Ouvrez « Plus » pour saisir votre propre message (jusqu’à 24 caractères) et le nom de l’entrée, comme HDMI 2 ou AV.',
        },
        {
          question: 'Qu’est-ce que le bip des barres de couleur TV ?',
          answer:
            'Une tonalité de test continue à 1 kHz que les diffuseurs passaient avec les barres de couleur pour caler les niveaux audio. Activez-la avec le bouton de tonalité 1 kHz.',
        },
      ],
    },
  },
  colors: {
    white: {
      Guide: WhiteScreenGuideFr,
      faqs: [
        {
          question: 'Comment rendre mon écran complètement blanc ?',
          answer: 'Ouvrez WhiteScreen.vip, sélectionnez le blanc et activez le plein écran si votre navigateur le permet.',
        },
        {
          question: 'L’écran blanc fonctionne-t-il sur mon téléphone ?',
          answer:
            'Oui. Vous pouvez ouvrir l’outil dans un navigateur mobile compatible. Le comportement du plein écran dépend de votre appareil et de votre navigateur.',
        },
        {
          question: 'Un écran blanc permet-il de détecter les pixels morts ?',
          answer:
            'Un fond blanc peut révéler les pixels sombres, tandis que les fonds noirs et de couleurs primaires aident à repérer d’autres défauts de pixels visibles. C’est une vérification visuelle, pas un diagnostic matériel complet.',
        },
        {
          question: 'Pourquoi mon écran s’éteint-il sans arrêt ?',
          answer:
            'La mise en veille de votre appareil, les réglages d’économie de batterie ou des restrictions du navigateur peuvent éteindre l’écran. Vérifiez vos réglages d’alimentation et utilisez une fonction « Garder l’écran allumé » si le site et le navigateur la prennent en charge.',
        },
        {
          question: 'Un écran blanc lumineux est-il sans risque pour les écrans OLED ?',
          answer:
            'Évitez de laisser longtemps une image fixe et lumineuse sur un écran OLED. Suivez les recommandations du fabricant sur la luminosité et l’utilisation de l’écran. Aucune fonction de navigateur ne peut garantir l’absence de marquage.',
        },
        {
          question: 'WhiteScreen.vip est-il gratuit ?',
          answer:
            'WhiteScreen.vip est entièrement gratuit en ligne, dans votre navigateur. Toutes les couleurs d’écran, tous les tests et tous les téléchargements d’images sont accessibles sans inscription, sans création de compte et sans installation de logiciel.',
        },
        {
          question: 'Quelle est la différence entre un écran blanc vide et un écran blanc pur ?',
          answer:
            'Ici, c’est la même chose : un écran rempli de blanc pur (#FFFFFF) et rien d’autre. Choisissez Chaud ou baissez la luminosité pour un rendu plus doux, blanc cassé.',
        },
        {
          question: 'Puis-je utiliser un écran blanc pour décalquer ?',
          answer:
            'Oui. Une tablette ou un moniteur à pleine luminosité sert de table lumineuse simple. Fixez votre papier avec du ruban adhésif et décalquez doucement, sans appuyer fort sur l’écran.',
        },
        {
          question: 'Un écran blanc aide-t-il à nettoyer mon moniteur ?',
          answer:
            'Un écran blanc fait ressortir la poussière, les traces de doigts et les traînées. Éteignez l’écran avant de l’essuyer, puis rouvrez l’écran blanc pour repérer les taches oubliées.',
        },
      ],
    },
    black: {
      Guide: BlackScreenGuideFr,
      faqs: [
        {
          question: 'Un écran noir économise-t-il la batterie ?',
          answer:
            'Sur les téléphones, tablettes et PC portables OLED, oui : les pixels noirs sont éteints. Sur les écrans LCD, le rétroéclairage reste allumé, donc l’économie est minime. Baisser la luminosité économise davantage sur LCD.',
        },
        {
          question: 'Un écran noir empêche-t-il mon ordinateur de se mettre en veille ?',
          answer:
            'Oui, tant que la page est ouverte avec « Garder l’écran allumé » activé, dans les navigateurs compatibles. Vos réglages de veille habituels reviennent dès que vous fermez la page ou désactivez l’option.',
        },
        {
          question: 'Un écran noir revient-il à éteindre mon moniteur ?',
          answer:
            'Non. Le moniteur reste allumé et votre ordinateur continue de tourner ; l’écran affiche simplement du noir pur. Sur OLED, il paraît éteint car les pixels sont sombres, alors qu’un LCD garde son rétroéclairage allumé.',
        },
        {
          question: 'Puis-je mettre un écran d’accueil ou un écran verrouillé noir sur mon téléphone ?',
          answer:
            'Oui. Choisissez « Téléphone » dans le menu « Télécharger », ou saisissez la taille exacte de votre téléphone dans « Taille personnalisée », et définissez l’image comme fond d’écran d’accueil ou d’écran verrouillé.',
        },
        {
          question: 'Comment faire une vidéo d’écran noir ?',
          answer:
            'Téléchargez un PNG noir en 1080p ou 4K, placez-le dans la timeline de votre logiciel de montage, puis étirez-le à la durée voulue.',
        },
        {
          question: 'Le noir ou le blanc est-il mieux pour nettoyer un moniteur ?',
          answer:
            'Le noir montre clairement les traces de doigts, les traînées et les taches, surtout avec une lumière rasante. Pour la poussière, un [écran blanc](/) fonctionne mieux. Éteignez l’écran avant de l’essuyer.',
        },
      ],
    },
    red: {
      Guide: RedScreenGuideFr,
      faqs: [
        {
          question: 'Puis-je utiliser un écran rouge sur mon iPhone ou mon téléphone Android ?',
          answer:
            'Oui. Ouvrez cette page dans le navigateur de votre téléphone, touchez l’icône plein écran et activez « Garder l’écran allumé ». Baissez le curseur Luminosité pour une veilleuse tamisée.',
        },
        {
          question: 'Pourquoi mon écran rouge paraît-il orange ?',
          answer:
            'Généralement, le mode de couleur de l’écran ou un filtre de nuit chaud (Night Shift, Éclairage nocturne) le décale. Désactivez-les et utilisez le mode standard ou sRGB, puis vérifiez à nouveau.',
        },
        {
          question: 'Un écran rouge peut-il servir de lumière inactinique de chambre noire ?',
          answer:
            'Non. Son rouge n’est pas assez filtré et il est bien trop lumineux pour la pellicule ou le papier photo. Utilisez une vraie lampe inactinique pour les matériaux photosensibles.',
        },
      ],
    },
    green: {
      Guide: GreenScreenGuideFr,
      faqs: [
        {
          question: 'Qu’est-ce que l’écran vert de la mort ?',
          answer:
            'C’est la version verte de l’écran bleu de la mort de Windows, affichée quand une build Windows Insider Preview plante. Les consoles Xbox peuvent aussi rester bloquées sur un écran de chargement vert. Envie d’en afficher un pour rire ? Essayez le [faux écran bleu de la mort](/fake-blue-screen-of-death).',
        },
        {
          question: 'Puis-je utiliser un écran vert sur mon téléphone ?',
          answer:
            'Oui, pour les petits objets et les gros plans. Ouvrez cette page, montez la luminosité, passez en plein écran et activez « Garder l’écran allumé ». Pour tout ce qui est plus grand que le téléphone, utilisez un tissu vert ou un fond dans votre logiciel de montage.',
        },
        {
          question: 'Ce site d’écran vert supprime-t-il mon arrière-plan ?',
          answer:
            'Non. Cette page affiche un vert uni et permet de télécharger des images vertes. La suppression de l’arrière-plan se fait dans votre application vidéo ou de streaming, comme OBS, CapCut, Zoom ou Teams.',
        },
      ],
    },
    blue: {
      Guide: BlueScreenGuideFr,
      faqs: [
        {
          question: 'Cet écran bleu est-il l’écran bleu de la mort de Windows ?',
          answer:
            'Non. C’est un simple écran de couleur bleue pour l’éclairage, les tests et le montage. Il n’affiche aucune erreur et n’affecte pas votre ordinateur. Vous cherchez l’écran d’erreur pour une blague ? Essayez le [faux écran bleu de la mort](/fake-blue-screen-of-death).',
        },
        {
          question: 'Puis-je utiliser un écran bleu sur mon PC portable, mon PC ou mon téléphone ?',
          answer:
            'Oui. Il fonctionne dans tout navigateur récent. Touchez deux fois pour le plein écran, activez « Garder l’écran allumé » et utilisez le curseur Luminosité pour régler la nuance.',
        },
        {
          question: 'Pourquoi un écran bleu pur paraît-il si sombre ?',
          answer:
            'Nos yeux sont moins sensibles au bleu : le bleu pur paraît donc bien plus sombre que le vert ou le rouge à luminosité égale. C’est normal, ce n’est pas un défaut.',
        },
      ],
    },
    yellow: {
      Guide: YellowScreenGuideFr,
      faqs: [
        {
          question: 'Un écran jaune est-il plus reposant pour les yeux ?',
          answer:
            'Le jaune ne contient pas de lumière bleue, ce que beaucoup trouvent plus relaxant le soir. Un jaune à pleine luminosité reste vif : baissez le curseur Luminosité pour une lumière chaude plus douce.',
        },
        {
          question: 'Puis-je rendre l’écran jaune plus chaud ou plus doux ?',
          answer: 'Oui. Choisissez Chaud pour un jaune doré et baissez le curseur Luminosité pour une lumière plus tamisée et douce.',
        },
        {
          question: 'Puis-je télécharger une image d’écran jaune ?',
          answer:
            'Oui. Utilisez « Télécharger » sous l’aperçu pour enregistrer un PNG jaune en 1080p, 2K, 4K ou au format téléphone, ou à une taille personnalisée jusqu’à 8K.',
        },
      ],
    },
    pink: {
      Guide: PinkScreenGuideFr,
      faqs: [
        {
          question: 'Quel est le code couleur de ce rose ?',
          answer:
            'C’est #FF69B4 (RVB 255, 105, 180), souvent appelé rose vif. Choisissez Chaud pour un rose corail, Froid pour un vieux rose, ou baissez le curseur Luminosité pour un rose plus foncé.',
        },
        {
          question: 'Puis-je laisser un écran rose allumé pendant 10 heures ?',
          answer:
            'Oui. Activez « Garder l’écran allumé » et l’écran reste allumé tant que la page est ouverte, dans les navigateurs compatibles. Branchez votre PC portable ou téléphone pour les longues sessions.',
        },
        {
          question: 'Pourquoi mon écran rose paraît-il violet ?',
          answer:
            'L’écran pousse trop le bleu. Choisissez Chaud sous l’aperçu, ou passez votre écran à une température de couleur plus chaude ou en mode sRGB.',
        },
      ],
    },
  },
  glanceHeadings: {
    'dvd-screensaver': 'Qu’est-ce que l’écran de veille DVD ?',
    'broken-screen': 'Qu’est-ce que l’effet écran cassé ?',
    'fake-zoom-meeting': 'Qu’est-ce qu’un faux écran de réunion Zoom ?',
    'fake-windows-10-update': 'Qu’est-ce qu’une fausse mise à jour Windows 10 ?',
    'fake-windows-11-update': 'Qu’est-ce qu’une fausse mise à jour Windows 11 ?',
    'fake-blue-screen-of-death': 'Qu’est-ce qu’un faux écran bleu de la mort ?',
    'fake-mac-update': 'Qu’est-ce qu’une fausse mise à jour Mac ?',
    'pomodoro-timer': 'Qu’est-ce qu’un minuteur Pomodoro ?',
    'flip-clock-screensaver': 'Qu’est-ce qu’un écran de veille horloge flip ?',
    'zoom-lighting': 'Qu’est-ce qu’une lumière pour visioconférence ?',
    'countdown-timer': 'Qu’est-ce qu’un minuteur plein écran ?',
    'ring-light': 'Qu’est-ce qu’un ring light en ligne ?',
    stopwatch: 'Qu’est-ce qu’un chronomètre plein écran ?',
    'screen-refresh-rate-test': 'Qu’est-ce qu’un test de fréquence de rafraîchissement ?',
    'dead-pixel-test': 'Qu’est-ce qu’un test de pixels morts ?',
    'touch-screen-test': 'Qu’est-ce qu’un test d’écran tactile ?',
    'monitor-ghosting-test': 'Qu’est-ce qu’un test de ghosting d’écran ?',
    'monitor-test': 'Qu’est-ce qu’une mire de test pour moniteur ?',
    'screen-burn-in-test': 'Qu’est-ce qu’un test de marquage d’écran ?',
    'screen-resolution-test': 'Qu’est-ce qu’un test de résolution d’écran ?',
    'screen-color-test': 'Qu’est-ce qu’un test des couleurs d’écran ?',
    'frame-rate-test': 'Qu’est-ce qu’un test de FPS ?',
    'oled-gray-test': 'Qu’est-ce qu’un test gris foncé pour OLED ?',
    'hacked-screen': 'Qu’est-ce qu’un simulateur d’écran piraté ?',
    'no-signal-screen': 'Qu’est-ce qu’un écran Aucun signal ?',
    'white-screen': 'Qu’est-ce qu’un écran blanc ?',
    'black-screen': 'Qu’est-ce qu’un écran noir ?',
    'red-screen': 'Qu’est-ce qu’un écran rouge ?',
    'green-screen': 'Qu’est-ce qu’un écran vert ?',
    'blue-screen': 'Qu’est-ce qu’un écran bleu ?',
    'yellow-screen': 'Qu’est-ce qu’un écran jaune ?',
    'pink-screen': 'Qu’est-ce qu’un écran rose ?',
  },
}
