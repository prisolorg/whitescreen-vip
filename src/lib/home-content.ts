import type { LanguageCode } from './locale-routing'

export interface BenefitItem {
  icon: 'zap' | 'monitor' | 'palette' | 'shield'
  title: string
  description: string
}

export interface UseCaseItem {
  title: string
  description: string
}

export interface StepItem {
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export const HOME_CONTENT: Record<
  LanguageCode,
  {
    benefitsEyebrow: string
    benefitsTitle: string
    benefitsDesc: string
    benefits: BenefitItem[]
    useCasesEyebrow: string
    useCasesTitle: string
    useCases: UseCaseItem[]
    howToUseEyebrow: string
    howToUseTitle: string
    howToUseDesc: string
    steps: StepItem[]
    faqEyebrow: string
    faqTitle: string
    faqs: FaqItem[]
  }
> = {
  en: {
    benefitsEyebrow: 'Why WhiteScreen.vip',
    benefitsTitle: 'A simple screen tool that just works',
    benefitsDesc:
      'No clutter, no popups, and no setup. Just a solid, full-brightness color whenever you need it.',
    benefits: [
      {
        icon: 'zap',
        title: 'Instant and free',
        description: 'No sign-up, downloads, or ads in your way. Open the page and your screen is ready.',
      },
      {
        icon: 'monitor',
        title: 'Works on any device',
        description: 'Runs in the browser on desktops, laptops, tablets, and phones of any size.',
      },
      {
        icon: 'palette',
        title: 'Any color you need',
        description: 'Preset colors plus a custom picker for exact hex values and downloadable images.',
      },
      {
        icon: 'shield',
        title: 'Private by design',
        description: 'Everything runs locally in your browser. Nothing is uploaded or stored.',
      },
    ],
    useCasesEyebrow: 'Use cases',
    useCasesTitle: 'What you can use a white screen for',
    useCases: [
      {
        title: 'Video calls and lighting',
        description: 'Use a bright white screen as a soft fill light for webcam calls, selfies, or product photos.',
      },
      {
        title: 'Dead pixel testing',
        description: 'Cycle through solid red, green, blue, black, and white to spot dead or stuck pixels.',
      },
      {
        title: 'Cleaning your display',
        description: 'A black screen reveals dust and smudges; a white screen shows streaks after wiping.',
      },
      {
        title: 'Tracing and drawing',
        description: 'Turn a tablet into a makeshift lightbox for tracing sketches or reading film negatives.',
      },
      {
        title: 'Monitor calibration',
        description: 'Check uniformity, backlight bleed, and color tint against solid, even backgrounds.',
      },
      {
        title: 'Focus and ambience',
        description: 'Set a calm solid color for a distraction-free screen or a gentle room glow.',
      },
    ],
    howToUseEyebrow: 'How it works',
    howToUseTitle: 'How to use the white screen',
    howToUseDesc: 'Four quick steps from this page to a full-brightness screen.',
    steps: [
      {
        title: 'Pick a color',
        description: 'White is selected by default. Choose another preset or set a custom color.',
      },
      {
        title: 'Go fullscreen',
        description: 'Click “Open fullscreen” or press F on your keyboard.',
      },
      {
        title: 'Switch colors anytime',
        description: 'Use the arrow keys or number keys 1–7 to change colors while in fullscreen.',
      },
      {
        title: 'Exit when finished',
        description: 'Press Esc, double-click the screen, or tap the close button that appears.',
      },
    ],
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        question: 'What is a white screen tool?',
        answer:
          'A white screen tool fills your entire display with a solid white color. It is commonly used as a light source, for cleaning monitors, testing for dead pixels, and tracing drawings.',
      },
      {
        question: 'How do I make my screen fully white?',
        answer:
          'Keep White selected and click “Open fullscreen” or press F. Your browser will hide its toolbars and show only a solid white screen.',
      },
      {
        question: 'How do I exit fullscreen mode?',
        answer:
          'Press the Esc key on your keyboard. You can also double-click anywhere on the screen, or move your mouse or tap the screen to show the close button.',
      },
      {
        question: 'Can I use a color other than white?',
        answer:
          'Yes. Choose black, red, green, blue, yellow, or gray, or use the custom color picker to enter any hex color code.',
      },
      {
        question: 'Does it work on phones and tablets?',
        answer:
          'Yes. On browsers that support the Fullscreen API, the color fills the whole screen. On browsers that do not, such as Safari on iPhone, the color fills the browser window instead.',
      },
      {
        question: 'Will my screen turn off while using it?',
        answer:
          'On supported browsers, the tool asks your device to keep the screen awake while in fullscreen. If your device does not support this, adjust your display sleep settings.',
      },
    ],
  },

  es: {
    benefitsEyebrow: 'Por qué WhiteScreen.vip',
    benefitsTitle: 'Una herramienta de pantalla simple y eficaz',
    benefitsDesc:
      'Sin anuncios molestos, sin registro y sin descargas. Una pantalla brillante y limpia siempre lista.',
    benefits: [
      {
        icon: 'zap',
        title: 'Instantáneo y gratuito',
        description: 'Sin registros ni descargas. Abre la página y tu pantalla estará lista al instante.',
      },
      {
        icon: 'monitor',
        title: 'Funciona en cualquier dispositivo',
        description: 'Compatible con ordenadores, portátiles, tabletas y teléfonos móviles de todo tamaño.',
      },
      {
        icon: 'palette',
        title: 'Cualquier color que necesites',
        description: 'Colores preestablecidos y selector personalizado con descarga de imágenes en alta resolución.',
      },
      {
        icon: 'shield',
        title: 'Privacidad absoluta',
        description: 'Todo se ejecuta localmente en tu navegador. Ningún dato es enviado ni almacenado.',
      },
    ],
    useCasesEyebrow: 'Casos de uso',
    useCasesTitle: 'Para qué sirve una pantalla blanca',
    useCases: [
      {
        title: 'Luz para videollamadas',
        description: 'Usa la pantalla blanca como luz de relleno suave para videollamadas, selfies o fotos.',
      },
      {
        title: 'Prueba de píxeles muertos',
        description: 'Alterna entre rojo, verde, azul, blanco y negro para detectar píxeles atascados o dañados.',
      },
      {
        title: 'Limpieza de tu monitor',
        description: 'Una pantalla negra expone el polvo; una pantalla blanca revela huellas y manchas residuales.',
      },
      {
        title: 'Calco y dibujo artístico',
        description: 'Convierte tu tablet en una caja de luz para calcar bocetos o revisar negativos.',
      },
      {
        title: 'Calibración de pantalla',
        description: 'Evalúa la uniformidad del panel, fugas de luz de fondo y tintes de color con fondos puros.',
      },
      {
        title: 'Concentración y ambiente',
        description: 'Configura un color suave para evitar distracciones o crear iluminación ambiental en la sala.',
      },
    ],
    howToUseEyebrow: 'Cómo funciona',
    howToUseTitle: 'Cómo utilizar la pantalla blanca',
    howToUseDesc: 'Cuatro sencillos pasos para activar una pantalla a brillo completo.',
    steps: [
      {
        title: 'Elige un color',
        description: 'El blanco viene seleccionado por defecto. Puedes elegir otro color o personalizarlo.',
      },
      {
        title: 'Pantalla completa',
        description: 'Haz clic en "Abrir pantalla completa" o presiona la tecla F.',
      },
      {
        title: 'Cambia de color al instante',
        description: 'Usa las flechas del teclado o los números 1 al 7 para cambiar de color.',
      },
      {
        title: 'Salir al terminar',
        description: 'Presiona Esc, haz doble clic en la pantalla o toca el botón de cierre.',
      },
    ],
    faqEyebrow: 'Preguntas Frecuentes',
    faqTitle: 'Preguntas frecuentes sobre la pantalla blanca',
    faqs: [
      {
        question: '¿Qué es una herramienta de pantalla blanca?',
        answer:
          'Es una utilidad que llena tu monitor de un color blanco puro y uniforme. Se utiliza comúnmente como iluminación, para limpiar pantallas, detectar píxeles muertos y calcar dibujos.',
      },
      {
        question: '¿Cómo pongo mi pantalla totalmente en blanco?',
        answer:
          'Mantén seleccionado el color Blanco y pulsa "Abrir pantalla completa" o pulsa la tecla F en tu teclado.',
      },
      {
        question: '¿Cómo salgo del modo de pantalla completa?',
        answer:
          'Presiona la tecla Esc, haz doble clic en cualquier punto de la pantalla o pulsa el botón de cerrar.',
      },
      {
        question: '¿Puedo usar colores diferentes al blanco?',
        answer:
          'Sí. Puedes seleccionar negro, rojo, verde, azul, amarillo, rosa o introducir cualquier código hexadecimal.',
      },
      {
        question: '¿Funciona en móviles y tabletas?',
        answer:
          'Sí. En navegadores compatibles llena toda la pantalla. En iOS Safari ocupa toda la ventana del navegador.',
      },
      {
        question: '¿Se apagará la pantalla mientras la uso?',
        answer:
          'En navegadores modernos, solicitamos mantener activa la pantalla durante la sesión de pantalla completa.',
      },
    ],
  },

  'pt-br': {
    benefitsEyebrow: 'Por que o WhiteScreen.vip',
    benefitsTitle: 'Uma ferramenta simples e direta para sua tela',
    benefitsDesc:
      'Sem anúncios intrusivos, sem cadastros e sem necessidade de baixar nada. Uma tela brilhante e pura em um clique.',
    benefits: [
      {
        icon: 'zap',
        title: 'Instantâneo e gratuito',
        description: 'Abra a página e sua tela estará pronta. 100% gratuito e sem cadastros.',
      },
      {
        icon: 'monitor',
        title: 'Funciona em qualquer aparelho',
        description: 'Compatível com computadores, notebooks, tablets e smartphones de qualquer tamanho.',
      },
      {
        icon: 'palette',
        title: 'Todas as cores disponíveis',
        description: 'Cores pré-definidas e seletor personalizado com download em alta resolução.',
      },
      {
        icon: 'shield',
        title: 'Privacidade total',
        description: 'Tudo roda localmente no seu navegador. Nenhum dado é coletado ou salvo.',
      },
    ],
    useCasesEyebrow: 'Casos de uso',
    useCasesTitle: 'O que você pode fazer com uma tela branca',
    useCases: [
      {
        title: 'Iluminação para videochamadas',
        description: 'Use a tela branca como soft light para melhorar a iluminação da sua webcam ou selfies.',
      },
      {
        title: 'Teste de dead pixel',
        description: 'Alterne entre vermelho, verde, azul, preto e branco para encontrar pixels mortos ou travados.',
      },
      {
        title: 'Limpeza de tela',
        description: 'A tela preta revela poeira; a tela branca mostra manchas e marcas de dedos.',
      },
      {
        title: 'Decalque e desenho',
        description: 'Transforme seu tablet em uma mesa de luz para desenhar ou decalcar ilustrações.',
      },
      {
        title: 'Calibração de monitores',
        description: 'Verifique uniformidade, vazamento de backlight e equilíbrio de cores com facilidade.',
      },
      {
        title: 'Foco e luz ambiente',
        description: 'Crie uma iluminação suave no ambiente ou deixe a tela sem distrações.',
      },
    ],
    howToUseEyebrow: 'Como funciona',
    howToUseTitle: 'Como usar a tela branca',
    howToUseDesc: 'Quatro passos rápidos para preencher sua tela com brilho total.',
    steps: [
      {
        title: 'Escolha uma cor',
        description: 'O branco já vem selecionado. Você pode alternar para qualquer outra cor.',
      },
      {
        title: 'Entre em tela cheia',
        description: 'Clique em "Abrir tela cheia" ou aperte a tecla F no teclado.',
      },
      {
        title: 'Mude de cor quando quiser',
        description: 'Use as setas do teclado ou as teclas de 1 a 7 para trocar de cor.',
      },
      {
        title: 'Saia quando terminar',
        description: 'Pressione Esc, dê um duplo clique na tela ou toque no botão de fechar.',
      },
    ],
    faqEyebrow: 'Perguntas Frequentes',
    faqTitle: 'Dúvidas frequentes sobre tela branca',
    faqs: [
      {
        question: 'O que é uma ferramenta de tela branca?',
        answer:
          'É um utilitário que preenche todo o monitor com uma cor sólida uniforme. Muito utilizado para iluminação, limpeza de telas e teste de pixels.',
      },
      {
        question: 'Como deixar a tela totalmente branca?',
        answer:
          'Deixe a opção Branco selecionada e clique em "Abrir tela cheia" ou pressione F no seu teclado.',
      },
      {
        question: 'Como sair da tela cheia?',
        answer:
          'Pressione a tecla Esc no teclado, dê duplo clique em qualquer lugar da tela ou clique no X que aparece.',
      },
      {
        question: 'Posso usar outras cores além do branco?',
        answer:
          'Sim! Escolha entre preto, vermelho, verde, azul, amarelo, rosa ou insira qualquer código hex desejado.',
      },
      {
        question: 'Funciona no celular e no tablet?',
        answer:
          'Sim, funciona perfeitamente em todos os navegadores modernos para Android e iOS.',
      },
      {
        question: 'A tela vai apagar enquanto estiver aberta?',
        answer:
          'Em navegadores com suporte, o site solicita ao sistema operacional para manter a tela ligada.',
      },
    ],
  },

  de: {
    benefitsEyebrow: 'Warum WhiteScreen.vip',
    benefitsTitle: 'Ein einfaches Bildschirm-Werkzeug, das funktioniert',
    benefitsDesc:
      'Keine nervige Werbung, keine Registrierung und keine Downloads. Ein heller, sauberer Bildschirm mit einem Klick.',
    benefits: [
      {
        icon: 'zap',
        title: 'Sofort und kostenlos',
        description: 'Keine Anmeldung erforderlich. Seite öffnen und der Vollbildschirm ist sofort einsatzbereit.',
      },
      {
        icon: 'monitor',
        title: 'Funktioniert auf jedem Gerät',
        description: 'Läuft direkt im Browser auf PCs, Laptops, Tablets und Smartphones jeder Bildschirmgröße.',
      },
      {
        icon: 'palette',
        title: 'Jede gewünschte Farbe',
        description: 'Voreingestellte Farbfelder plus benutzerdefinierter Hex-Farbwähler mit Bild-Download.',
      },
      {
        icon: 'shield',
        title: 'Vollständiger Datenschutz',
        description: 'Alle Funktionen laufen rein lokal in Ihrem Browser. Keine Datenspeicherung.',
      },
    ],
    useCasesEyebrow: 'Anwendungsbereiche',
    useCasesTitle: 'Wofür ein weißer Bildschirm verwendet wird',
    useCases: [
      {
        title: 'Beleuchtung bei Videoanrufen',
        description: 'Nutzen Sie den hellen weißen Bildschirm als sanftes Aufhelllicht für Webcams und Videokonferenzen.',
      },
      {
        title: 'Pixelfehlertest',
        description: 'Wechseln Sie zwischen Rot, Grün, Blau, Schwarz und Weiß, um tote oder hängende Pixel zu finden.',
      },
      {
        title: 'Bildschirmreinigung',
        description: 'Ein schwarzer Bildschirm zeigt Staub; ein weißer Bildschirm deckt Schlieren und Streifen auf.',
      },
      {
        title: 'Pausen und Abzeichnen',
        description: 'Verwandeln Sie Ihr Tablet in einen praktischen Leuchttisch zum Abpausen von Skizzen.',
      },
      {
        title: 'Monitorkalibrierung',
        description: 'Prüfen Sie Ausleuchtung, Backlight Bleeding und Farbhomogenität auf gleichmäßigen Flächen.',
      },
      {
        title: 'Fokus und Raumlicht',
        description: 'Schalten Sie auf ein beruhigendes Vollbild für ablenkungsfreies Arbeiten oder sanftes Raumlicht.',
      },
    ],
    howToUseEyebrow: 'Bedienung',
    howToUseTitle: 'So verwenden Sie den weißen Bildschirm',
    howToUseDesc: 'In vier einfachen Schritten zu einem vollflächig leuchtenden Bildschirm.',
    steps: [
      {
        title: 'Farbe wählen',
        description: 'Weiß ist standardmäßig aktiviert. Wählen Sie bei Bedarf eine andere Farbe.',
      },
      {
        title: 'Vollbild aktivieren',
        description: 'Klicken Sie auf „Vollbild öffnen“ oder drücken Sie die Taste F auf der Tastatur.',
      },
      {
        title: 'Farben jederzeit wechseln',
        description: 'Nutzen Sie Pfeiltasten oder die Zahlen 1–7, um im Vollbildmodus Farben umzuschalten.',
      },
      {
        title: 'Vollbild beenden',
        description: 'Drücken Sie Esc, doppelklicken Sie auf den Bildschirm oder tippen Sie auf Schließen.',
      },
    ],
    faqEyebrow: 'Häufige Fragen',
    faqTitle: 'Häufig gestellte Fragen (FAQ)',
    faqs: [
      {
        question: 'Was ist ein weißer Bildschirm?',
        answer:
          'Ein Online-Werkzeug, das das gesamte Display mit einer reinen weißen Fläche füllt. Beliebt als Lichtquelle, zum Reinigen und zum Testen von Bildschirmen.',
      },
      {
        question: 'Wie schalte ich den Bildschirm ganz weiß?',
        answer:
          'Wählen Sie Weiß und klicken Sie auf „Vollbild öffnen“ oder drücken Sie F auf der Tastatur.',
      },
      {
        question: 'Wie verlasse ich den Vollbildmodus?',
        answer:
          'Drücken Sie die Taste Esc, doppelklicken Sie auf das Display oder tippen Sie auf die Schaltfläche.',
      },
      {
        question: 'Kann ich auch andere Farben nutzen?',
        answer:
          'Ja. Sie können Schwarz, Rot, Grün, Blau, Gelb, Grau oder beliebige Hex-Farbcodes verwenden.',
      },
      {
        question: 'Funktioniert das Tool auf Smartphones und Tablets?',
        answer:
          'Ja, vollständig kompatibel mit modernen Browsern auf iOS und Android.',
      },
      {
        question: 'Schaltet sich der Bildschirm automatisch ab?',
        answer:
          'Auf unterstützten Browsern fordert das Tool das System auf, den Ruhezustand zu verhindern.',
      },
    ],
  },

  fr: {
    benefitsEyebrow: 'Pourquoi WhiteScreen.vip',
    benefitsTitle: 'Un outil d’écran simple, rapide et efficace',
    benefitsDesc:
      'Pas de publicité intrusive, pas d’inscription et aucun logiciel à installer. Un écran lumineux et pur en un clic.',
    benefits: [
      {
        icon: 'zap',
        title: 'Instantané et gratuit',
        description: 'Sans inscription ni téléchargement. Ouvrez la page et votre écran est immédiatement prêt.',
      },
      {
        icon: 'monitor',
        title: 'Compatible tous écrans',
        description: 'Fonctionne dans votre navigateur sur ordinateurs, PC portables, tablettes et smartphones.',
      },
      {
        icon: 'palette',
        title: 'Toutes les couleurs disponibles',
        description: 'Couleurs prédéfinies et sélecteur personnalisé avec téléchargement en haute définition.',
      },
      {
        icon: 'shield',
        title: 'Respect de la vie privée',
        description: 'Tout s’exécute localement dans le navigateur. Aucune donnée n’est enregistrée.',
      },
    ],
    useCasesEyebrow: 'Cas d’usage',
    useCasesTitle: 'À quoi sert un écran blanc plein écran',
    useCases: [
      {
        title: 'Éclairage pour visioconférences',
        description: 'Utilisez l’écran blanc comme source de lumière douce pour votre webcam ou vos photos.',
      },
      {
        title: 'Détection de pixels morts',
        description: 'Basculez entre le rouge, vert, bleu, noir et blanc pour détecter les pixels défectueux.',
      },
      {
        title: 'Nettoyage de votre moniteur',
        description: 'Un écran noir révèle la poussière ; un écran blanc fait ressortir les traces de doigts.',
      },
      {
        title: 'Décalquage et dessin',
        description: 'Transformez votre tablette en table lumineuse pour décalquer ou examiner des films.',
      },
      {
        title: 'Calibrage d’écran',
        description: 'Vérifiez l’uniformité de l’éclairage, les fuites de lumière et la justesse des couleurs.',
      },
      {
        title: 'Concentration et ambiance',
        description: 'Créez une lumière d’ambiance apaisante ou travaillez sans distractions visuelles.',
      },
    ],
    howToUseEyebrow: 'Fonctionnement',
    howToUseTitle: 'Comment utiliser l’écran blanc',
    howToUseDesc: 'Quatre étapes simples pour afficher un écran entièrement lumineux.',
    steps: [
      {
        title: 'Choisissez une couleur',
        description: 'Le blanc est sélectionné par défaut. Vous pouvez choisir une autre couleur en un clic.',
      },
      {
        title: 'Passez en plein écran',
        description: 'Cliquez sur « Ouvrir en plein écran » ou appuyez sur la touche F de votre clavier.',
      },
      {
        title: 'Changez de couleur facilement',
        description: 'Utilisez les flèches du clavier ou les chiffres 1 à 7 pour basculer de couleur.',
      },
      {
        title: 'Quitter le mode plein écran',
        description: 'Appuyez sur Échap, double-cliquez sur l’écran ou cliquez sur le bouton de fermeture.',
      },
    ],
    faqEyebrow: 'Questions fréquentes',
    faqTitle: 'Foire Aux Questions (FAQ)',
    faqs: [
      {
        question: 'Qu’est-ce qu’un écran blanc en ligne ?',
        answer:
          'C’est un outil qui remplit votre écran d’une couleur blanche pure et uniforme. Utilisé pour l’éclairage, le nettoyage et le test d’écran.',
      },
      {
        question: 'Comment afficher un écran totalement blanc ?',
        answer:
          'Laissez le blanc sélectionné et cliquez sur « Ouvrir en plein écran » ou appuyez sur la touche F.',
      },
      {
        question: 'Comment quitter le mode plein écran ?',
        answer:
          'Appuyez sur Échap sur votre clavier, double-cliquez sur l’écran ou appuyez sur la croix de fermeture.',
      },
      {
        question: 'Puis-je utiliser d’autres couleurs ?',
        answer:
          'Oui. Vous pouvez choisir noir, rouge, vert, bleu, jaune ou saisir n’importe quel code couleur hexadécimal.',
      },
      {
        question: 'Est-ce compatible avec les téléphones ?',
        answer:
          'Oui, fonctionne sur tous les navigateurs récents sur iPhone, iPad et smartphones Android.',
      },
      {
        question: 'L’écran va-t-il se mettre en veille ?',
        answer:
          'Sur les navigateurs compatibles, l’outil demande au système de maintenir l’écran allumé.',
      },
    ],
  },

  it: {
    benefitsEyebrow: 'Perché WhiteScreen.vip',
    benefitsTitle: 'Uno strumento per lo schermo semplice ed efficace',
    benefitsDesc:
      'Senza pubblicità invasiva, senza registrazioni e senza download. Uno schermo bianco luminoso in un solo clic.',
    benefits: [
      {
        icon: 'zap',
        title: 'Istantaneo e gratuito',
        description: 'Nessuna registrazione o download. Apri la pagina e lo schermo è subito pronto all’uso.',
      },
      {
        icon: 'monitor',
        title: 'Funziona su qualsiasi dispositivo',
        description: 'Compatibile con PC, portatili, tablet e smartphone di qualunque risoluzione e formato.',
      },
      {
        icon: 'palette',
        title: 'Qualsiasi colore desiderato',
        description: 'Colori preimpostati e selettore personalizzato con download di immagini ad alta definizione.',
      },
      {
        icon: 'shield',
        title: 'Massima privacy',
        description: 'Tutto funziona localmente nel tuo browser. Nessun dato viene inviato o memorizzato.',
      },
    ],
    useCasesEyebrow: 'Casi d’uso',
    useCasesTitle: 'A cosa serve uno schermo bianco a pieno schermo',
    useCases: [
      {
        title: 'Luce per videochiamate',
        description: 'Usa lo schermo bianco come luce soffusa per migliorare la qualità della tua webcam.',
      },
      {
        title: 'Test dei pixel bruciati',
        description: 'Passa tra rosso, verde, blu, bianco e nero per individuare pixel morti o bloccati.',
      },
      {
        title: 'Pulizia del display',
        description: 'Lo schermo nero evidenzia la polvere; lo schermo bianco mostra aloni e impronte.',
      },
      {
        title: 'Ricalco e disegno artistico',
        description: 'Trasforma il tuo tablet in un piano luminoso per ricalcare bozzetti o leggere negativi.',
      },
      {
        title: 'Calibrazione del monitor',
        description: 'Verifica uniformità del pannello, perdite di retroilluminazione e resa cromatica.',
      },
      {
        title: 'Concentrazione e luce ambiente',
        description: 'Imposta una luce rilassante per lavorare senza distrazioni o illuminare delicatamente la stanza.',
      },
    ],
    howToUseEyebrow: 'Come funziona',
    howToUseTitle: 'Come utilizzare lo schermo bianco',
    howToUseDesc: 'Quattro rapidi passaggi per attivare uno schermo luminoso a tutto schermo.',
    steps: [
      {
        title: 'Seleziona un colore',
        description: 'Il bianco è attivo per impostazione predefinita. Puoi scegliere qualunque altra tinta.',
      },
      {
        title: 'Attiva lo schermo intero',
        description: 'Clicca su «Apri a schermo intero» oppure premi il tasto F sulla tastiera.',
      },
      {
        title: 'Cambia colore al volo',
        description: 'Usa i tasti freccia o i numeri da 1 a 7 per cambiare colore in modalità a schermo intero.',
      },
      {
        title: 'Esci quando hai finito',
        description: 'Premi Esc, fai doppio clic sullo schermo o tocca il pulsante di chiusura.',
      },
    ],
    faqEyebrow: 'Domande frequenti',
    faqTitle: 'Domande frequenti (FAQ)',
    faqs: [
      {
        question: 'Cos’è uno strumento per schermo bianco?',
        answer:
          'È un’applicazione web che riempie il monitor con una luce bianca pura e omogenea, ideale per illuminazione, pulizia e test.',
      },
      {
        question: 'Come posso rendere lo schermo completamente bianco?',
        answer:
          'Seleziona il bianco e clicca su «Apri a schermo intero» o premi il tasto F sulla tastiera.',
      },
      {
        question: 'Come si esce dalla modalità a schermo intero?',
        answer:
          'Premi Esc sulla tastiera, fai doppio clic su qualsiasi punto dello schermo o clicca sulla X.',
      },
      {
        question: 'Posso usare colori diversi dal bianco?',
        answer:
          'Certamente. Puoi scegliere nero, rosso, verde, blu, giallo o digitare un codice colore esadecimale.',
      },
      {
        question: 'Funziona su smartphone e tablet?',
        answer:
          'Sì, è pienamente compatibile con tutti i browser per iOS e Android.',
      },
      {
        question: 'Lo schermo si spegnerà durante l’uso?',
        answer:
          'Nei browser supportati, il nostro strumento richiede al sistema di mantenere lo schermo sempre attivo.',
      },
    ],
  },

  nl: {
    benefitsEyebrow: 'Waarom WhiteScreen.vip',
    benefitsTitle: 'Een eenvoudig schermhulpmiddel dat gewoon werkt',
    benefitsDesc:
      'Geen opdringerige advertenties, geen registraties en geen downloads. Een helder, zuiver scherm met één klik.',
    benefits: [
      {
        icon: 'zap',
        title: 'Direct en gratis',
        description: 'Geen registratie of installatie nodig. Open de pagina en uw scherm is direct klaar voor gebruik.',
      },
      {
        icon: 'monitor',
        title: 'Werkt op elk apparaat',
        description: 'Draait rechtstreeks in de browser op pc’s, laptops, tablets en smartphones.',
      },
      {
        icon: 'palette',
        title: 'Elke gewenste kleur',
        description: 'Vooraf ingestelde tinten plus een aangepaste kleurkiezer met afbeelding downloadfunctie.',
      },
      {
        icon: 'shield',
        title: '100% privacy',
        description: 'Alles draait lokaal in uw eigen browser. Er worden geen gegevens opgeslagen of verzonden.',
      },
    ],
    useCasesEyebrow: 'Toepassingen',
    useCasesTitle: 'Waarvoor u een wit scherm kunt gebruiken',
    useCases: [
      {
        title: 'Verlichting bij videogesprekken',
        description: 'Gebruik het witte scherm als zachte invulverlichting voor uw webcam of videoconferenties.',
      },
      {
        title: 'Dode pixel test',
        description: 'Schakel tussen rood, groen, blauw, zwart en wit om dode of vastzittende pixels te vinden.',
      },
      {
        title: 'Beeldscherm reinigen',
        description: 'Een zwart scherm toont stofjes; een wit scherm maakt vingerafdrukken en strepen zichtbaar.',
      },
      {
        title: 'Overtekenen en ontwerpen',
        description: 'Verander uw tablet in een handige lichtbak voor het overtrekken van schetsen of tekeningen.',
      },
      {
        title: 'Monitorkalibratie',
        description: 'Controleer lichtverdeling, backlight bleed en kleurbalans op een egaal oppervlak.',
      },
      {
        title: 'Rust en sfeerlicht',
        description: 'Kies een rustige egale tint voor geconcentreerd werken of als zachte omgevingsverlichting.',
      },
    ],
    howToUseEyebrow: 'Hoe het werkt',
    howToUseTitle: 'Hoe u het witte scherm gebruikt',
    howToUseDesc: 'Vier eenvoudige stappen naar een volledig helder scherm.',
    steps: [
      {
        title: 'Kies een kleur',
        description: 'Wit is standaard geselecteerd. U kunt eenvoudig een andere kleur kiezen.',
      },
      {
        title: 'Volledig scherm openen',
        description: 'Klik op "Volledig scherm openen" of druk op F op uw toetsenbord.',
      },
      {
        title: 'Wissel direct van kleur',
        description: 'Gebruik de pijltjestoetsen of de cijfers 1–7 om van kleur te wisselen.',
      },
      {
        title: 'Afsluiten als u klaar bent',
        description: 'Druk op Esc, dubbelklik op het scherm of tik op de sluitknop.',
      },
    ],
    faqEyebrow: 'Veelgestelde vragen',
    faqTitle: 'Veelgestelde vragen (FAQ)',
    faqs: [
      {
        question: 'Wat is een wit scherm tool?',
        answer:
          'Het is een handig hulpmiddel dat uw hele beeldscherm vult met egaal wit licht. Ideaal voor verlichting, schoonmaken en schermtests.',
      },
      {
        question: 'Hoe maak ik mijn scherm helemaal wit?',
        answer:
          'Laat Wit geselecteerd staan en klik op "Volledig scherm openen" of druk op F op uw toetsenbord.',
      },
      {
        question: 'Hoe sluit ik de volledig scherm weergave?',
        answer:
          'Druk op de Esc-toets, dubbelklik ergens op het scherm of klik op het kruisje.',
      },
      {
        question: 'Kan ik ook andere kleuren kiezen?',
        answer:
          'Jazeker. U kunt kiezen uit zwart, rood, groen, blauw, geel of een eigen hexadecimale kleurcode invoeren.',
      },
      {
        question: 'Werkt het op telefoons en tablets?',
        answer:
          'Ja, het werkt vlekkeloos op alle moderne browsers voor iPhone, iPad en Android.',
      },
      {
        question: 'Schakelt het scherm automatisch uit?',
        answer:
          'In ondersteunde browsers verzoekt de tool aan het apparaat om het scherm ingeschakeld te houden.',
      },
    ],
  },

  id: {
    benefitsEyebrow: 'Mengapa WhiteScreen.vip',
    benefitsTitle: 'Alat layar sederhana yang andal dan praktis',
    benefitsDesc:
      'Tanpa iklan yang mengganggu, tanpa perlu daftar, dan tanpa unduhan. Layar putih bersih dan cerah hanya dalam satu klik.',
    benefits: [
      {
        icon: 'zap',
        title: 'Instan dan Gratis',
        description: 'Tidak perlu mendaftar atau mengunduh aplikasi. Buka halaman dan layar Anda siap dipakai.',
      },
      {
        icon: 'monitor',
        title: 'Bisa di Semua Perangkat',
        description: 'Berjalan lancar di browser komputer, laptop, tablet, dan ponsel pintar semua ukuran.',
      },
      {
        icon: 'palette',
        title: 'Warna Sesuai Kebutuhan',
        description: 'Tersedia pilihan warna populer serta pemilih warna hex kustom dengan opsi unduh gambar.',
      },
      {
        icon: 'shield',
        title: 'Privasi Terjaga Penuh',
        description: 'Semua proses berjalan lokal di browser Anda. Tidak ada data yang diunggah atau disimpan.',
      },
    ],
    useCasesEyebrow: 'Manfaat & Penggunaan',
    useCasesTitle: 'Untuk apa saja layar putih bisa digunakan',
    useCases: [
      {
        title: 'Pencahayaan panggilan video',
        description: 'Gunakan layar putih terang sebagai lampu tambahan lembut saat rapat zoom atau swafoto.',
      },
      {
        title: 'Tes piksel mati (dead pixel)',
        description: 'Ganti ke warna merah, hijau, biru, hitam, dan putih untuk mendeteksi piksel rusak.',
      },
      {
        title: 'Membersihkan layar monitor',
        description: 'Layar hitam memperlihatkan debu; layar putih memudahkan melihat noda dan bekas sidik jari.',
      },
      {
        title: 'Menjiplak dan menggambar',
        description: 'Ubah tablet Anda menjadi meja lampu (lightbox) portabel untuk menjiplak sketsa.',
      },
      {
        title: 'Kalibrasi tampilan layar',
        description: 'Periksa keseragaman cahaya latar (backlight bleed) dan konsistensi warna monitor Anda.',
      },
      {
        title: 'Fokus dan lampu suasana',
        description: 'Gunakan warna tenang untuk bekerja tanpa gangguan atau pencahayaan lembut di kamar.',
      },
    ],
    howToUseEyebrow: 'Cara Penggunaan',
    howToUseTitle: 'Cara menggunakan layar putih',
    howToUseDesc: 'Empat langkah mudah untuk menampilkan layar cerah penuh.',
    steps: [
      {
        title: 'Pilih warna',
        description: 'Warna putih terpilih otomatis. Anda bisa memilih warna lain sesuai kebutuhan.',
      },
      {
        title: 'Buka layar penuh',
        description: 'Klik "Buka Layar Penuh" atau tekan tombol F pada keyboard Anda.',
      },
      {
        title: 'Ganti warna kapan saja',
        description: 'Tekan tombol panah atau angka 1–7 pada keyboard untuk beralih warna secara cepat.',
      },
      {
        title: 'Keluar saat selesai',
        description: 'Tekan tombol Esc, klik ganda pada layar, atau ketuk tombol tutup yang muncul.',
      },
    ],
    faqEyebrow: 'Pertanyaan Umum',
    faqTitle: 'Pertanyaan yang Sering Diajukan (FAQ)',
    faqs: [
      {
        question: 'Apa itu alat layar putih?',
        answer:
          'Ini adalah alat online yang menampilkan warna putih solid merata di seluruh layar monitor. Sering digunakan sebagai sumber cahaya, membersihkan layar, dan memeriksa piksel mati.',
      },
      {
        question: 'Bagaimana cara membuat layar jadi putih penuh?',
        answer:
          'Pastikan warna Putih terpilih, lalu klik "Buka Layar Penuh" atau tekan tombol F pada keyboard.',
      },
      {
        question: 'Bagaimana cara keluar dari layar penuh?',
        answer:
          'Tekan tombol Esc di keyboard, klik dua kali di mana saja pada layar, atau klik tombol silang (X).',
      },
      {
        question: 'Apakah bisa menggunakan warna selain putih?',
        answer:
          'Ya, Anda dapat memilih hitam, merah, hijau, biru, kuning, atau memasukkan kode warna hex apa saja.',
      },
      {
        question: 'Apakah alat ini berfungsi di HP dan tablet?',
        answer:
          'Ya, alat ini sepenuhnya mendukung browser modern di perangkat Android maupun iPhone dan iPad.',
      },
      {
        question: 'Apakah layar akan mati otomatis saat digunakan?',
        answer:
          'Di peramban yang mendukung, alat ini akan meminta perangkat untuk tetap menyala selama mode layar penuh.',
      },
    ],
  },

  tr: {
    benefitsEyebrow: 'Neden WhiteScreen.vip',
    benefitsTitle: 'Sorunsuz ve hızlı çalışan ekran aracı',
    benefitsDesc:
      'Rahatsız edici reklamlar yok, kayıt olma zorunluluğu yok, indirme yok. Tek tıkla parlak ve tertemiz bir ekran.',
    benefits: [
      {
        icon: 'zap',
        title: 'Anında ve Ücretsiz',
        description: 'Kayıt veya indirme gerekmez. Sayfayı açın ve tam ekranınız hemen kullanıma hazır olsun.',
      },
      {
        icon: 'monitor',
        title: 'Tüm Cihazlarda Çalışır',
        description: 'Masaüstü, dizüstü, tablet ve akıllı telefonlarda doğrudan tarayıcınızda çalışır.',
      },
      {
        icon: 'palette',
        title: 'İstediğiniz Her Renk',
        description: 'Hazır renk seçenekleri ve yüksek çözünürlüklü görsel indirme özellikli özel renk seçici.',
      },
      {
        icon: 'shield',
        title: 'Tamamen Güvenli ve Gizli',
        description: 'Her şey tamamen tarayıcınızda çalışır. Hiçbir veri kaydedilmez veya gönderilmez.',
      },
    ],
    useCasesEyebrow: 'Kullanım Alanları',
    useCasesTitle: 'Beyaz ekranı nerelerde kullanabilirsiniz',
    useCases: [
      {
        title: 'Görüntülü görüşme ışığı',
        description: 'Web kamerası veya özçekimler için beyaz ekranı yumuşak bir dolgu ışığı olarak kullanın.',
      },
      {
        title: 'Ölü piksel testi',
        description: 'Kırmızı, yeşil, mavi, siyah ve beyaz arasında geçiş yaparak ölü pikselleri kolayca tespit edin.',
      },
      {
        title: 'Ekran temizliği',
        description: 'Siyah ekran tozu gösterir; beyaz ekran ise parmak izlerini ve lekeleri ortaya çıkarır.',
      },
      {
        title: 'Çizim ve kopyalama',
        description: 'Tabletinizi çizimlerinizi kopya etmek için taşınabilir bir ışıklı masaya dönüştürün.',
      },
      {
        title: 'Monitör kalibrasyonu',
        description: 'Işık sızması, parlaklık dağılımı ve renk dengesini düz arka planlarda kontrol edin.',
      },
      {
        title: 'Odaklanma ve ortam ışığı',
        description: 'Dikkatinizi dağıtmayacak sade bir ekran açın veya odanıza hoş bir ortam ışığı verin.',
      },
    ],
    howToUseEyebrow: 'Nasıl Çalışır',
    howToUseTitle: 'Beyaz ekran nasıl kullanılır',
    howToUseDesc: 'Tam ekran parlaklığa ulaşmak için dört basit adım.',
    steps: [
      {
        title: 'Bir renk seçin',
        description: 'Varsayılan olarak beyaz seçilidir. Dilediğiniz başka bir renge geçebilirsiniz.',
      },
      {
        title: 'Tam ekrana geçin',
        description: '“Tam Ekranı Aç” düğmesine tıklayın veya klavyenizden F tuşuna basın.',
      },
      {
        title: 'İstediğiniz an renk değiştirin',
        description: 'Tam ekrandayken ok tuşlarını veya 1–7 sayı tuşlarını kullanarak rengi değiştirin.',
      },
      {
        title: 'İşiniz bittiğinde çıkın',
        description: 'Esc tuşuna basın, ekrana çift tıklayın veya beliren kapatma düğmesine dokunun.',
      },
    ],
    faqEyebrow: 'Sıkça Sorulan Sorular',
    faqTitle: 'Beyaz ekran hakkında sıkça sorulan sorular',
    faqs: [
      {
        question: 'Beyaz ekran aracı nedir?',
        answer:
          'Ekranınızı tamamen saf beyaz renkle dolduran çevrimiçi bir araçtır. Aydınlatma, ekran temizliği ve ölü piksel tespiti için yaygın olarak kullanılır.',
      },
      {
        question: 'Ekranımı nasıl tamamen beyaz yapabilirim?',
        answer:
          'Beyaz rengi seçili bırakın ve “Tam Ekranı Aç” düğmesine tıklayın ya da klavyenizden F tuşuna basın.',
      },
      {
        question: 'Tam ekran modundan nasıl çıkabilirim?',
        answer:
          'Klavyenizdeki Esc tuşuna basın, ekranın herhangi bir yerine çift tıklayın veya kapatma simgesine dokunun.',
      },
      {
        question: 'Beyazdan başka bir renk kullanabilir miyim?',
        answer:
          'Evet. Siyah, kırmızı, yeşil, mavi, sarı veya özel renk seçiciyle istediğiniz herhangi bir hex rengini seçebilirsiniz.',
      },
      {
        question: 'Telefon ve tabletlerde çalışır mı?',
        answer:
          'Evet, iPhone, iPad ve Android cihazlardaki tüm güncel mobil tarayıcılarda sorunsuz çalışır.',
      },
      {
        question: 'Kullanım sırasında ekranım kapanır mı?',
        answer:
          'Desteklenen tarayıcılarda, araç tam ekran modundayken cihazınızın ekranının açık kalmasını sağlar.',
      },
    ],
  },
}

export const benefits = HOME_CONTENT.en.benefits
export const useCases = HOME_CONTENT.en.useCases
export const steps = HOME_CONTENT.en.steps
export const faqs = HOME_CONTENT.en.faqs

export function getHomeContent(lang: LanguageCode) {
  return HOME_CONTENT[lang] ?? HOME_CONTENT.en
}
