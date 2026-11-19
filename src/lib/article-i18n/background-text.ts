import type { LanguageCode } from '../locale-routing'

type Category = { label: string; heading: string; description: string }

/** Headings and labels around the background pages, split by who needs them so each page embeds only its part. */
export type BackgroundText = {
  tool: {
    preview: string
    exitFullscreen: string
    imageSize: string
    width: string
    height: string
    sizePhone: string
    sizeCustom: string
    generating: string
    downloaded: string
    downloadPng: string
    cssCopied: string
    copyCss: string
    moreBackgrounds: string
    allBackgroundsLink: string
    categoriesLabel: string
  }
  body: {
    about: string
    viewFullscreen: string
    optimalUses: string
    inspectionTip: string
    howToUse: string
    choosing: string
    whenToChoose: string
    contrast: string
    alternatives: string
    reference: string
    officialGuidance: string
    relatedGuides: string
    faq: string
    relevantTools: string
    moreInCategory: string
    viewAllCategory: string
    allBackgrounds: string
  }
  index: {
    metaTitle: string
    metaDescription: string
    library: string
    libraryDescription: string
    count: string
    searchLabel: string
    searchAll: string
    searchIn: string
    open: string
    previewFullscreen: string
    pngLossless: string
    download1080: string
    download4k: string
    customSpecs: string
    noMatch: string
    reset: string
    aboutTitle: string
    aboutText: string
    solidTitle: string
    solidText: string
    gradientsTitle: string
    gradientsText: string
    videoTitle: string
    videoText: string
  }
  allLabel: string
  categories: Record<'solid' | 'gradient' | 'video-call' | 'dark-oled' | 'minimal' | 'neon', Category>
}

const EN: BackgroundText = {
  tool: {
    preview: '{title} preview',
    exitFullscreen: 'Exit fullscreen',
    imageSize: 'Image size',
    width: 'Width (px)',
    height: 'Height (px)',
    sizePhone: 'Phone · 1080×2400',
    sizeCustom: 'Custom size',
    generating: 'Generating…',
    downloaded: 'Downloaded!',
    downloadPng: 'Download PNG',
    cssCopied: 'CSS Copied!',
    copyCss: 'Copy CSS',
    moreBackgrounds: 'More backgrounds',
    allBackgroundsLink: 'All backgrounds →',
    categoriesLabel: 'Background categories',
  },
  body: {
    about: 'About This Background',
    viewFullscreen: 'View in Full Screen',
    optimalUses: 'Optimal Uses:',
    inspectionTip: 'Display Inspection Tip:',
    howToUse: 'How to Use This Background',
    choosing: 'Choosing the Right Background',
    whenToChoose: 'When to choose this background:',
    contrast: 'Contrast & typography legibility:',
    alternatives: 'Alternative options to consider:',
    reference: 'Authoritative Reference: {title}',
    officialGuidance: 'Read Official Guidance from {org}',
    relatedGuides: 'Related Guides & Complementary Backgrounds',
    faq: 'Frequently Asked Questions',
    relevantTools: 'Relevant WhiteScreen.vip Tools',
    moreInCategory: 'More {category} Backgrounds',
    viewAllCategory: 'View all {category} →',
    allBackgrounds: 'All Backgrounds',
  },
  index: {
    metaTitle: 'Free Screen Backgrounds – Solid, Gradient & 4K Wallpapers',
    metaDescription: 'Download free high-resolution backgrounds: solid colors, gradients, video call backdrops, OLED black and neon wallpapers in 1080p and 4K.',
    library: 'Backgrounds Library',
    libraryDescription: 'Free high-resolution solid colors, modern gradients, video call backdrops, and dark OLED screens. Preview in fullscreen or export lossless PNG wallpapers in 1080p, 2K, and 4K.',
    count: '{n} backgrounds · free PNG up to 8K',
    searchLabel: 'Search backgrounds',
    searchAll: 'Search backgrounds…',
    searchIn: 'Search {x}…',
    open: 'Open {title}',
    previewFullscreen: 'Preview Fullscreen',
    pngLossless: 'PNG · Lossless',
    download1080: 'Download 1080p (1920×1080) PNG',
    download4k: 'Download 4K UHD (3840×2160) PNG',
    customSpecs: 'Custom specs',
    noMatch: 'No backgrounds match your search or filter.',
    reset: 'Reset to all backgrounds',
    aboutTitle: 'About WhiteScreen.vip Backgrounds',
    aboutText: 'Every background in our library is rendered dynamically on your device using client-side HTML5 Canvas algorithms. This guarantees 100% loss-free color accuracy without JPEG compression banding, mosquito noise, or watermarks.',
    solidTitle: 'Solid Colors',
    solidText: 'Pure reference colors including pure white, true black, vibrant orange, red, green, and deep navy for lighting, tracing, display testing, and minimal aesthetics.',
    gradientsTitle: 'Gradients & Glows',
    gradientsText: 'Multi-stop linear and radial transitions from twilight sunsets to deep ocean blues and cyberpunk neons, designed for modern desktop and mobile wallpapers.',
    videoTitle: 'Video Call Backdrops',
    videoText: 'Clean virtual office gradients, soft warm studio lighting, and chroma key green screens for Zoom, Microsoft Teams, and Google Meet meetings.',
  },
  allLabel: 'All Backgrounds',
  categories: {
    solid: { label: 'Solid Colors', heading: 'Solid Color Backgrounds', description: 'Pure uncompressed color screens for display testing, physical tracing, webcam video lighting, and minimalist desktop wallpapers. Lossless PNG downloads in 1080p, 2K, and 4K.' },
    gradient: { label: 'Gradients', heading: 'Gradient Backgrounds', description: 'Smooth multi-stop aesthetic gradients designed to evaluate display 8-bit vs 10-bit color banding, enrich modern battlestations, and provide colorful wallpapers.' },
    'video-call': { label: 'Video Call', heading: 'Video Call Backgrounds', description: 'Professional virtual office backdrops, warm ambient softbox lighting, and chroma key screens optimized for Zoom, Google Meet, and Microsoft Teams meetings.' },
    'dark-oled': { label: 'Dark & OLED', heading: 'Dark & OLED Backgrounds', description: 'True 0% pitch black and near-black carbon shades that turn off pixels, conserve battery on OLED displays, and reveal backlight bleed on LCD panels.' },
    minimal: { label: 'Aesthetic & Minimal', heading: 'Aesthetic & Minimal Backgrounds', description: 'Earthy evergreen tones, warm cream linen, and low-contrast palettes designed to reduce eye strain and bring visual calm to extended work sessions.' },
    neon: { label: 'Neon & Glow', heading: 'Neon & Glow Backgrounds', description: 'High-voltage electric cyan, synthwave magenta, and radiant cyberpunk glow wallpapers to test monitor response time, motion ghosting, and HDR highlight pop.' },
  },
}

const TEXT: Partial<Record<LanguageCode, BackgroundText>> = {
  es: {
    tool: { preview: 'Vista previa de {title}', exitFullscreen: 'Salir de pantalla completa', imageSize: 'Tamaño de imagen', width: 'Ancho (px)', height: 'Alto (px)', sizePhone: 'Teléfono · 1080×2400', sizeCustom: 'Tamaño personalizado', generating: 'Generando…', downloaded: '¡Descargado!', downloadPng: 'Descargar PNG', cssCopied: '¡CSS copiado!', copyCss: 'Copiar CSS', moreBackgrounds: 'Más fondos', allBackgroundsLink: 'Todos los fondos →', categoriesLabel: 'Categorías de fondos' },
    body: { about: 'Sobre este fondo', viewFullscreen: 'Ver en pantalla completa', optimalUses: 'Usos ideales:', inspectionTip: 'Consejo para revisar la pantalla:', howToUse: 'Cómo usar este fondo', choosing: 'Cómo elegir el fondo adecuado', whenToChoose: 'Cuándo elegir este fondo:', contrast: 'Contraste y legibilidad del texto:', alternatives: 'Alternativas a considerar:', reference: 'Referencia autorizada: {title}', officialGuidance: 'Leer la guía oficial de {org}', relatedGuides: 'Guías relacionadas y fondos complementarios', faq: 'Preguntas frecuentes', relevantTools: 'Herramientas de WhiteScreen.vip relacionadas', moreInCategory: 'Más fondos: {category}', viewAllCategory: 'Ver todo en {category} →', allBackgrounds: 'Todos los fondos' },
    index: { metaTitle: 'Fondos de pantalla gratis: colores sólidos, degradados y 4K', metaDescription: 'Descarga gratis fondos en alta resolución: colores sólidos, degradados, fondos para videollamadas, negro OLED y neón en 1080p y 4K.', library: 'Biblioteca de fondos', libraryDescription: 'Colores sólidos en alta resolución, degradados modernos, fondos para videollamadas y pantallas oscuras OLED, gratis. Míralos en pantalla completa o exporta PNG sin pérdida en 1080p, 2K y 4K.', count: '{n} fondos · PNG gratis hasta 8K', searchLabel: 'Buscar fondos', searchAll: 'Buscar fondos…', searchIn: 'Buscar en {x}…', open: 'Abrir {title}', previewFullscreen: 'Ver en pantalla completa', pngLossless: 'PNG · Sin pérdida', download1080: 'Descargar PNG 1080p (1920×1080)', download4k: 'Descargar PNG 4K UHD (3840×2160)', customSpecs: 'Tamaño a medida', noMatch: 'Ningún fondo coincide con tu búsqueda o filtro.', reset: 'Ver todos los fondos', aboutTitle: 'Sobre los fondos de WhiteScreen.vip', aboutText: 'Cada fondo de la biblioteca se genera en tu dispositivo con HTML5 Canvas. Así el color es exacto y sin pérdida, sin bandas de compresión JPEG, ruido ni marcas de agua.', solidTitle: 'Colores sólidos', solidText: 'Colores de referencia puros, como blanco, negro real, naranja vivo, rojo, verde y azul marino, para iluminar, calcar, probar pantallas y lograr un estilo minimalista.', gradientsTitle: 'Degradados y brillos', gradientsText: 'Transiciones lineales y radiales de varios colores, de atardeceres a azules de océano y neones cyberpunk, pensadas para fondos modernos de ordenador y móvil.', videoTitle: 'Fondos para videollamadas', videoText: 'Degradados limpios de oficina virtual, luz cálida de estudio y pantallas verdes de chroma key para reuniones en Zoom, Microsoft Teams y Google Meet.' },
    allLabel: 'Todos los fondos',
    categories: {
      solid: { label: 'Colores sólidos', heading: 'Fondos de color sólido', description: 'Pantallas de color puro sin compresión para probar pantallas, calcar, iluminar la webcam y crear fondos minimalistas. Descargas PNG sin pérdida en 1080p, 2K y 4K.' },
      gradient: { label: 'Degradados', heading: 'Fondos degradados', description: 'Degradados suaves de varios colores para comprobar las bandas de color en 8 y 10 bits, dar vida a tu escritorio y disfrutar de fondos coloridos.' },
      'video-call': { label: 'Videollamada', heading: 'Fondos para videollamadas', description: 'Fondos profesionales de oficina virtual, luz ambiental cálida y pantallas de chroma key para reuniones en Zoom, Google Meet y Microsoft Teams.' },
      'dark-oled': { label: 'Oscuro y OLED', heading: 'Fondos oscuros y OLED', description: 'Negro real al 0 % y tonos casi negros que apagan los píxeles, ahorran batería en pantallas OLED y revelan fugas de luz en paneles LCD.' },
      minimal: { label: 'Estético y minimalista', heading: 'Fondos estéticos y minimalistas', description: 'Tonos terrosos, crema cálido y paletas de bajo contraste pensados para reducir la fatiga visual y dar calma en largas sesiones de trabajo.' },
      neon: { label: 'Neón y brillo', heading: 'Fondos de neón y brillo', description: 'Cian eléctrico, magenta synthwave y brillos cyberpunk para probar el tiempo de respuesta, el ghosting y los picos de brillo HDR del monitor.' },
    },
  },
  'pt-br': {
    tool: { preview: 'Prévia de {title}', exitFullscreen: 'Sair da tela cheia', imageSize: 'Tamanho da imagem', width: 'Largura (px)', height: 'Altura (px)', sizePhone: 'Celular · 1080×2400', sizeCustom: 'Tamanho personalizado', generating: 'Gerando…', downloaded: 'Baixado!', downloadPng: 'Baixar PNG', cssCopied: 'CSS copiado!', copyCss: 'Copiar CSS', moreBackgrounds: 'Mais fundos', allBackgroundsLink: 'Todos os fundos →', categoriesLabel: 'Categorias de fundos' },
    body: { about: 'Sobre este fundo', viewFullscreen: 'Ver em tela cheia', optimalUses: 'Melhores usos:', inspectionTip: 'Dica para inspecionar a tela:', howToUse: 'Como usar este fundo', choosing: 'Como escolher o fundo certo', whenToChoose: 'Quando escolher este fundo:', contrast: 'Contraste e legibilidade do texto:', alternatives: 'Alternativas a considerar:', reference: 'Referência oficial: {title}', officialGuidance: 'Ler o guia oficial de {org}', relatedGuides: 'Guias relacionados e fundos complementares', faq: 'Perguntas frequentes', relevantTools: 'Ferramentas relacionadas do WhiteScreen.vip', moreInCategory: 'Mais fundos: {category}', viewAllCategory: 'Ver tudo em {category} →', allBackgrounds: 'Todos os fundos' },
    index: { metaTitle: 'Fundos de tela grátis: cores sólidas, gradientes e 4K', metaDescription: 'Baixe grátis fundos em alta resolução: cores sólidas, gradientes, fundos para videochamadas, preto OLED e neon em 1080p e 4K.', library: 'Biblioteca de fundos', libraryDescription: 'Cores sólidas em alta resolução, gradientes modernos, fundos para videochamadas e telas escuras OLED, grátis. Veja em tela cheia ou exporte PNG sem perdas em 1080p, 2K e 4K.', count: '{n} fundos · PNG grátis até 8K', searchLabel: 'Buscar fundos', searchAll: 'Buscar fundos…', searchIn: 'Buscar em {x}…', open: 'Abrir {title}', previewFullscreen: 'Ver em tela cheia', pngLossless: 'PNG · Sem perdas', download1080: 'Baixar PNG 1080p (1920×1080)', download4k: 'Baixar PNG 4K UHD (3840×2160)', customSpecs: 'Tamanho sob medida', noMatch: 'Nenhum fundo corresponde à sua busca ou filtro.', reset: 'Ver todos os fundos', aboutTitle: 'Sobre os fundos do WhiteScreen.vip', aboutText: 'Cada fundo da biblioteca é gerado no seu dispositivo com HTML5 Canvas. Assim a cor é exata e sem perdas, sem faixas de compressão JPEG, ruído nem marcas-d’água.', solidTitle: 'Cores sólidas', solidText: 'Cores de referência puras, como branco, preto real, laranja vivo, vermelho, verde e azul-marinho, para iluminar, decalcar, testar telas e criar um visual minimalista.', gradientsTitle: 'Gradientes e brilhos', gradientsText: 'Transições lineares e radiais de várias cores, de pores do sol a azuis de oceano e neons cyberpunk, feitas para papéis de parede modernos de computador e celular.', videoTitle: 'Fundos para videochamadas', videoText: 'Gradientes limpos de escritório virtual, luz quente de estúdio e telas verdes de chroma key para reuniões no Zoom, Microsoft Teams e Google Meet.' },
    allLabel: 'Todos os fundos',
    categories: {
      solid: { label: 'Cores sólidas', heading: 'Fundos de cor sólida', description: 'Telas de cor pura sem compressão para testar telas, decalcar, iluminar a webcam e criar papéis de parede minimalistas. Downloads PNG sem perdas em 1080p, 2K e 4K.' },
      gradient: { label: 'Gradientes', heading: 'Fundos em degradê', description: 'Gradientes suaves de várias cores para verificar faixas de cor em 8 e 10 bits, valorizar seu setup e ter papéis de parede coloridos.' },
      'video-call': { label: 'Videochamada', heading: 'Fundos para videochamadas', description: 'Fundos profissionais de escritório virtual, luz ambiente quente e telas de chroma key para reuniões no Zoom, Google Meet e Microsoft Teams.' },
      'dark-oled': { label: 'Escuro e OLED', heading: 'Fundos escuros e OLED', description: 'Preto real de 0% e tons quase pretos que apagam os pixels, economizam bateria em telas OLED e revelam vazamento de luz em painéis LCD.' },
      minimal: { label: 'Estético e minimalista', heading: 'Fundos estéticos e minimalistas', description: 'Tons terrosos, creme quente e paletas de baixo contraste feitos para reduzir o cansaço visual e trazer calma em longas sessões de trabalho.' },
      neon: { label: 'Neon e brilho', heading: 'Fundos de neon e brilho', description: 'Ciano elétrico, magenta synthwave e brilhos cyberpunk para testar o tempo de resposta, o ghosting e os picos de brilho HDR do monitor.' },
    },
  },
  de: {
    tool: { preview: 'Vorschau: {title}', exitFullscreen: 'Vollbild beenden', imageSize: 'Bildgröße', width: 'Breite (px)', height: 'Höhe (px)', sizePhone: 'Smartphone · 1080×2400', sizeCustom: 'Eigene Größe', generating: 'Wird erstellt…', downloaded: 'Heruntergeladen!', downloadPng: 'PNG herunterladen', cssCopied: 'CSS kopiert!', copyCss: 'CSS kopieren', moreBackgrounds: 'Weitere Hintergründe', allBackgroundsLink: 'Alle Hintergründe →', categoriesLabel: 'Hintergrund-Kategorien' },
    body: { about: 'Über diesen Hintergrund', viewFullscreen: 'Im Vollbild ansehen', optimalUses: 'Beste Einsatzzwecke:', inspectionTip: 'Tipp zur Bildschirmprüfung:', howToUse: 'So nutzt du diesen Hintergrund', choosing: 'Den richtigen Hintergrund wählen', whenToChoose: 'Wann dieser Hintergrund passt:', contrast: 'Kontrast und Lesbarkeit:', alternatives: 'Alternativen:', reference: 'Maßgebliche Quelle: {title}', officialGuidance: 'Offizielle Informationen von {org} lesen', relatedGuides: 'Passende Ratgeber und ergänzende Hintergründe', faq: 'Häufige Fragen', relevantTools: 'Passende Tools von WhiteScreen.vip', moreInCategory: 'Mehr Hintergründe: {category}', viewAllCategory: 'Alle in {category} ansehen →', allBackgrounds: 'Alle Hintergründe' },
    index: { metaTitle: 'Kostenlose Hintergründe: Volltonfarben, Verläufe und 4K', metaDescription: 'Lade kostenlose Hintergründe in hoher Auflösung herunter: Volltonfarben, Verläufe, Videocall-Hintergründe, OLED-Schwarz und Neon in 1080p und 4K.', library: 'Hintergrund-Bibliothek', libraryDescription: 'Kostenlose Volltonfarben in hoher Auflösung, moderne Verläufe, Videocall-Hintergründe und dunkle OLED-Bildschirme. Im Vollbild ansehen oder als verlustfreies PNG in 1080p, 2K und 4K exportieren.', count: '{n} Hintergründe · kostenloses PNG bis 8K', searchLabel: 'Hintergründe suchen', searchAll: 'Hintergründe suchen…', searchIn: 'In {x} suchen…', open: '{title} öffnen', previewFullscreen: 'Vollbild-Vorschau', pngLossless: 'PNG · Verlustfrei', download1080: 'PNG in 1080p (1920×1080) herunterladen', download4k: 'PNG in 4K UHD (3840×2160) herunterladen', customSpecs: 'Eigene Größe', noMatch: 'Kein Hintergrund passt zu deiner Suche oder deinem Filter.', reset: 'Alle Hintergründe anzeigen', aboutTitle: 'Über die Hintergründe von WhiteScreen.vip', aboutText: 'Jeder Hintergrund wird direkt auf deinem Gerät mit HTML5 Canvas erzeugt. So bleibt die Farbe exakt und verlustfrei, ohne JPEG-Banding, Bildrauschen oder Wasserzeichen.', solidTitle: 'Volltonfarben', solidText: 'Reine Referenzfarben wie Weiß, echtes Schwarz, kräftiges Orange, Rot, Grün und Marineblau zum Beleuchten, Abpausen, Testen von Bildschirmen und für einen minimalistischen Look.', gradientsTitle: 'Verläufe und Glüheffekte', gradientsText: 'Lineare und radiale Übergänge aus mehreren Farben, von Abendrot über Ozeanblau bis Cyberpunk-Neon, gemacht für moderne Hintergründe auf Desktop und Smartphone.', videoTitle: 'Hintergründe für Videocalls', videoText: 'Klare Verläufe fürs virtuelle Büro, warmes Studiolicht und Chroma-Key-Greenscreens für Meetings in Zoom, Microsoft Teams und Google Meet.' },
    allLabel: 'Alle Hintergründe',
    categories: {
      solid: { label: 'Volltonfarben', heading: 'Hintergründe in Volltonfarben', description: 'Reine, unkomprimierte Farbflächen zum Testen von Bildschirmen, Abpausen, Beleuchten der Webcam und für minimalistische Hintergründe. Verlustfreie PNG-Downloads in 1080p, 2K und 4K.' },
      gradient: { label: 'Verläufe', heading: 'Verlaufshintergründe', description: 'Weiche Verläufe aus mehreren Farben, um Banding bei 8 und 10 Bit zu prüfen, dein Setup aufzuwerten und farbenfrohe Hintergründe zu nutzen.' },
      'video-call': { label: 'Videocall', heading: 'Hintergründe für Videocalls', description: 'Professionelle Hintergründe fürs virtuelle Büro, warmes Umgebungslicht und Chroma-Key-Flächen für Meetings in Zoom, Google Meet und Microsoft Teams.' },
      'dark-oled': { label: 'Dunkel und OLED', heading: 'Dunkle und OLED-Hintergründe', description: 'Echtes Schwarz mit 0 % und fast schwarze Töne, die Pixel abschalten, auf OLED-Displays Akku sparen und auf LCD-Panels Backlight Bleeding zeigen.' },
      minimal: { label: 'Ästhetisch und minimal', heading: 'Ästhetische und minimalistische Hintergründe', description: 'Erdige Töne, warmes Creme und kontrastarme Paletten, die die Augen entlasten und bei langen Arbeitssitzungen für Ruhe sorgen.' },
      neon: { label: 'Neon und Glühen', heading: 'Neon- und Glüh-Hintergründe', description: 'Elektrisches Cyan, Synthwave-Magenta und Cyberpunk-Glühen, um Reaktionszeit, Ghosting und HDR-Spitzenhelligkeit des Monitors zu testen.' },
    },
  },
  fr: {
    tool: { preview: 'Aperçu : {title}', exitFullscreen: 'Quitter le plein écran', imageSize: 'Taille de l’image', width: 'Largeur (px)', height: 'Hauteur (px)', sizePhone: 'Téléphone · 1080×2400', sizeCustom: 'Taille personnalisée', generating: 'Création…', downloaded: 'Téléchargé !', downloadPng: 'Télécharger le PNG', cssCopied: 'CSS copié !', copyCss: 'Copier le CSS', moreBackgrounds: 'Autres fonds', allBackgroundsLink: 'Tous les fonds →', categoriesLabel: 'Catégories de fonds' },
    body: { about: 'À propos de ce fond', viewFullscreen: 'Voir en plein écran', optimalUses: 'Meilleurs usages :', inspectionTip: 'Conseil pour contrôler l’écran :', howToUse: 'Comment utiliser ce fond', choosing: 'Choisir le bon fond', whenToChoose: 'Quand choisir ce fond :', contrast: 'Contraste et lisibilité du texte :', alternatives: 'Autres options à envisager :', reference: 'Référence faisant autorité : {title}', officialGuidance: 'Lire les informations officielles de {org}', relatedGuides: 'Guides associés et fonds complémentaires', faq: 'Questions fréquentes', relevantTools: 'Outils WhiteScreen.vip associés', moreInCategory: 'Autres fonds : {category}', viewAllCategory: 'Tout voir dans {category} →', allBackgrounds: 'Tous les fonds' },
    index: { metaTitle: 'Fonds d’écran gratuits : couleurs unies, dégradés et 4K', metaDescription: 'Téléchargez gratuitement des fonds haute résolution : couleurs unies, dégradés, fonds pour visioconférence, noir OLED et néon en 1080p et 4K.', library: 'Bibliothèque de fonds', libraryDescription: 'Couleurs unies en haute résolution, dégradés modernes, fonds pour visioconférence et écrans sombres OLED, gratuits. Affichez-les en plein écran ou exportez des PNG sans perte en 1080p, 2K et 4K.', count: '{n} fonds · PNG gratuit jusqu’en 8K', searchLabel: 'Rechercher des fonds', searchAll: 'Rechercher des fonds…', searchIn: 'Rechercher dans {x}…', open: 'Ouvrir {title}', previewFullscreen: 'Aperçu plein écran', pngLossless: 'PNG · Sans perte', download1080: 'Télécharger le PNG 1080p (1920×1080)', download4k: 'Télécharger le PNG 4K UHD (3840×2160)', customSpecs: 'Taille sur mesure', noMatch: 'Aucun fond ne correspond à votre recherche ou à votre filtre.', reset: 'Afficher tous les fonds', aboutTitle: 'À propos des fonds de WhiteScreen.vip', aboutText: 'Chaque fond de la bibliothèque est généré sur votre appareil avec HTML5 Canvas. La couleur reste ainsi exacte et sans perte, sans bandes de compression JPEG, bruit ni filigrane.', solidTitle: 'Couleurs unies', solidText: 'Couleurs de référence pures, comme le blanc, le vrai noir, l’orange vif, le rouge, le vert et le bleu marine, pour éclairer, décalquer, tester l’écran et créer un style minimaliste.', gradientsTitle: 'Dégradés et lueurs', gradientsText: 'Transitions linéaires et radiales à plusieurs couleurs, du coucher de soleil aux bleus d’océan et aux néons cyberpunk, conçues pour les fonds d’écran modernes sur ordinateur et mobile.', videoTitle: 'Fonds pour visioconférence', videoText: 'Dégradés épurés de bureau virtuel, douce lumière chaude de studio et écrans verts chroma key pour les réunions sur Zoom, Microsoft Teams et Google Meet.' },
    allLabel: 'Tous les fonds',
    categories: {
      solid: { label: 'Couleurs unies', heading: 'Fonds de couleur unie', description: 'Écrans de couleur pure non compressée pour tester l’écran, décalquer, éclairer la webcam et créer des fonds minimalistes. Téléchargements PNG sans perte en 1080p, 2K et 4K.' },
      gradient: { label: 'Dégradés', heading: 'Fonds dégradés', description: 'Dégradés doux à plusieurs couleurs pour vérifier le banding en 8 et 10 bits, mettre en valeur votre setup et profiter de fonds colorés.' },
      'video-call': { label: 'Visioconférence', heading: 'Fonds pour visioconférence', description: 'Fonds professionnels de bureau virtuel, lumière d’ambiance chaude et écrans chroma key pour les réunions sur Zoom, Google Meet et Microsoft Teams.' },
      'dark-oled': { label: 'Sombre et OLED', heading: 'Fonds sombres et OLED', description: 'Vrai noir à 0 % et tons presque noirs qui éteignent les pixels, économisent la batterie des écrans OLED et révèlent les fuites de lumière sur les dalles LCD.' },
      minimal: { label: 'Esthétique et minimal', heading: 'Fonds esthétiques et minimalistes', description: 'Tons terreux, crème chaud et palettes à faible contraste, conçus pour réduire la fatigue visuelle et apporter du calme lors des longues sessions de travail.' },
      neon: { label: 'Néon et lueur', heading: 'Fonds néon et lueur', description: 'Cyan électrique, magenta synthwave et lueurs cyberpunk pour tester le temps de réponse, le ghosting et les pics de luminosité HDR du moniteur.' },
    },
  },
  it: {
    tool: { preview: 'Anteprima di {title}', exitFullscreen: 'Esci da schermo intero', imageSize: 'Dimensione immagine', width: 'Larghezza (px)', height: 'Altezza (px)', sizePhone: 'Telefono · 1080×2400', sizeCustom: 'Dimensione personalizzata', generating: 'Creazione…', downloaded: 'Scaricato!', downloadPng: 'Scarica PNG', cssCopied: 'CSS copiato!', copyCss: 'Copia CSS', moreBackgrounds: 'Altri sfondi', allBackgroundsLink: 'Tutti gli sfondi →', categoriesLabel: 'Categorie di sfondi' },
    body: { about: 'Informazioni su questo sfondo', viewFullscreen: 'Guarda a tutto schermo', optimalUses: 'Usi migliori:', inspectionTip: 'Consiglio per controllare lo schermo:', howToUse: 'Come usare questo sfondo', choosing: 'Come scegliere lo sfondo giusto', whenToChoose: 'Quando scegliere questo sfondo:', contrast: 'Contrasto e leggibilità del testo:', alternatives: 'Alternative da valutare:', reference: 'Riferimento autorevole: {title}', officialGuidance: 'Leggi le indicazioni ufficiali di {org}', relatedGuides: 'Guide correlate e sfondi complementari', faq: 'Domande frequenti', relevantTools: 'Strumenti WhiteScreen.vip correlati', moreInCategory: 'Altri sfondi: {category}', viewAllCategory: 'Vedi tutto in {category} →', allBackgrounds: 'Tutti gli sfondi' },
    index: { metaTitle: 'Sfondi gratuiti: tinte unite, sfumature e 4K', metaDescription: 'Scarica gratis sfondi ad alta risoluzione: tinte unite, sfumature, sfondi per videochiamate, nero OLED e neon in 1080p e 4K.', library: 'Libreria di sfondi', libraryDescription: 'Tinte unite ad alta risoluzione, sfumature moderne, sfondi per videochiamate e schermi scuri OLED, gratis. Guardali a tutto schermo o esporta PNG senza perdita in 1080p, 2K e 4K.', count: '{n} sfondi · PNG gratis fino a 8K', searchLabel: 'Cerca sfondi', searchAll: 'Cerca sfondi…', searchIn: 'Cerca in {x}…', open: 'Apri {title}', previewFullscreen: 'Anteprima a tutto schermo', pngLossless: 'PNG · Senza perdita', download1080: 'Scarica PNG 1080p (1920×1080)', download4k: 'Scarica PNG 4K UHD (3840×2160)', customSpecs: 'Dimensione su misura', noMatch: 'Nessuno sfondo corrisponde alla ricerca o al filtro.', reset: 'Mostra tutti gli sfondi', aboutTitle: 'Informazioni sugli sfondi di WhiteScreen.vip', aboutText: 'Ogni sfondo della libreria viene generato sul tuo dispositivo con HTML5 Canvas. Così il colore resta esatto e senza perdita, senza bande di compressione JPEG, rumore o filigrane.', solidTitle: 'Tinte unite', solidText: 'Colori di riferimento puri, come bianco, nero reale, arancione vivace, rosso, verde e blu navy, per illuminare, ricalcare, provare gli schermi e creare uno stile minimale.', gradientsTitle: 'Sfumature e bagliori', gradientsText: 'Passaggi lineari e radiali a più colori, dai tramonti ai blu oceano e ai neon cyberpunk, pensati per sfondi moderni su computer e telefono.', videoTitle: 'Sfondi per videochiamate', videoText: 'Sfumature pulite da ufficio virtuale, morbida luce calda da studio e green screen chroma key per riunioni su Zoom, Microsoft Teams e Google Meet.' },
    allLabel: 'Tutti gli sfondi',
    categories: {
      solid: { label: 'Tinte unite', heading: 'Sfondi in tinta unita', description: 'Schermate di colore puro non compresso per provare gli schermi, ricalcare, illuminare la webcam e creare sfondi minimalisti. Download PNG senza perdita in 1080p, 2K e 4K.' },
      gradient: { label: 'Sfumature', heading: 'Sfondi sfumati', description: 'Sfumature morbide a più colori per controllare le bande di colore a 8 e 10 bit, valorizzare la tua postazione e usare sfondi colorati.' },
      'video-call': { label: 'Videochiamata', heading: 'Sfondi per videochiamate', description: 'Sfondi professionali da ufficio virtuale, calda luce ambientale e schermi chroma key per riunioni su Zoom, Google Meet e Microsoft Teams.' },
      'dark-oled': { label: 'Scuro e OLED', heading: 'Sfondi scuri e OLED', description: 'Nero reale allo 0% e toni quasi neri che spengono i pixel, risparmiano batteria sugli OLED e rivelano le perdite di luce sui pannelli LCD.' },
      minimal: { label: 'Estetico e minimale', heading: 'Sfondi estetici e minimali', description: 'Toni terrosi, crema caldo e palette a basso contrasto, pensati per ridurre l’affaticamento visivo e portare calma nelle lunghe sessioni di lavoro.' },
      neon: { label: 'Neon e bagliore', heading: 'Sfondi neon e bagliore', description: 'Ciano elettrico, magenta synthwave e bagliori cyberpunk per provare tempo di risposta, ghosting e picchi di luminosità HDR del monitor.' },
    },
  },
  nl: {
    tool: { preview: 'Voorbeeld van {title}', exitFullscreen: 'Volledig scherm sluiten', imageSize: 'Afbeeldingsgrootte', width: 'Breedte (px)', height: 'Hoogte (px)', sizePhone: 'Telefoon · 1080×2400', sizeCustom: 'Eigen formaat', generating: 'Bezig met maken…', downloaded: 'Gedownload!', downloadPng: 'PNG downloaden', cssCopied: 'CSS gekopieerd!', copyCss: 'CSS kopiëren', moreBackgrounds: 'Meer achtergronden', allBackgroundsLink: 'Alle achtergronden →', categoriesLabel: 'Categorieën achtergronden' },
    body: { about: 'Over deze achtergrond', viewFullscreen: 'Bekijken op volledig scherm', optimalUses: 'Beste toepassingen:', inspectionTip: 'Tip om je scherm te controleren:', howToUse: 'Zo gebruik je deze achtergrond', choosing: 'De juiste achtergrond kiezen', whenToChoose: 'Wanneer kies je deze achtergrond:', contrast: 'Contrast en leesbaarheid:', alternatives: 'Alternatieven om te overwegen:', reference: 'Gezaghebbende bron: {title}', officialGuidance: 'Officiële informatie van {org} lezen', relatedGuides: 'Verwante gidsen en aanvullende achtergronden', faq: 'Veelgestelde vragen', relevantTools: 'Verwante tools van WhiteScreen.vip', moreInCategory: 'Meer achtergronden: {category}', viewAllCategory: 'Alles in {category} bekijken →', allBackgrounds: 'Alle achtergronden' },
    index: { metaTitle: 'Gratis achtergronden: effen kleuren, verlopen en 4K', metaDescription: 'Download gratis achtergronden in hoge resolutie: effen kleuren, verlopen, achtergronden voor videobellen, OLED-zwart en neon in 1080p en 4K.', library: 'Achtergrondbibliotheek', libraryDescription: 'Gratis effen kleuren in hoge resolutie, moderne verlopen, achtergronden voor videobellen en donkere OLED-schermen. Bekijk ze op volledig scherm of exporteer verliesvrije PNG’s in 1080p, 2K en 4K.', count: '{n} achtergronden · gratis PNG tot 8K', searchLabel: 'Achtergronden zoeken', searchAll: 'Achtergronden zoeken…', searchIn: 'Zoeken in {x}…', open: '{title} openen', previewFullscreen: 'Voorbeeld op volledig scherm', pngLossless: 'PNG · Verliesvrij', download1080: 'PNG in 1080p (1920×1080) downloaden', download4k: 'PNG in 4K UHD (3840×2160) downloaden', customSpecs: 'Eigen formaat', noMatch: 'Geen achtergronden gevonden voor je zoekopdracht of filter.', reset: 'Alle achtergronden tonen', aboutTitle: 'Over de achtergronden van WhiteScreen.vip', aboutText: 'Elke achtergrond wordt op je eigen apparaat gemaakt met HTML5 Canvas. Zo blijft de kleur exact en verliesvrij, zonder JPEG-banding, ruis of watermerken.', solidTitle: 'Effen kleuren', solidText: 'Pure referentiekleuren zoals wit, echt zwart, fel oranje, rood, groen en marineblauw om te belichten, over te trekken, schermen te testen en voor een minimalistische look.', gradientsTitle: 'Verlopen en gloed', gradientsText: 'Lineaire en radiale overgangen in meerdere kleuren, van zonsondergangen tot oceaanblauw en cyberpunk-neon, gemaakt voor moderne achtergronden op computer en telefoon.', videoTitle: 'Achtergronden voor videobellen', videoText: 'Strakke verlopen voor een virtueel kantoor, zacht warm studiolicht en chroma key-greenscreens voor vergaderingen in Zoom, Microsoft Teams en Google Meet.' },
    allLabel: 'Alle achtergronden',
    categories: {
      solid: { label: 'Effen kleuren', heading: 'Achtergronden in effen kleur', description: 'Pure, ongecomprimeerde kleurvlakken om schermen te testen, over te trekken, je webcam te belichten en voor minimalistische achtergronden. Verliesvrije PNG-downloads in 1080p, 2K en 4K.' },
      gradient: { label: 'Verlopen', heading: 'Verloopachtergronden', description: 'Zachte verlopen in meerdere kleuren om kleurbanden op 8 en 10 bit te controleren, je setup op te waarderen en kleurrijke achtergronden te gebruiken.' },
      'video-call': { label: 'Videobellen', heading: 'Achtergronden voor videobellen', description: 'Professionele achtergronden voor een virtueel kantoor, warm omgevingslicht en chroma key-schermen voor vergaderingen in Zoom, Google Meet en Microsoft Teams.' },
      'dark-oled': { label: 'Donker en OLED', heading: 'Donkere en OLED-achtergronden', description: 'Echt zwart van 0% en bijna zwarte tinten die pixels uitzetten, batterij besparen op OLED-schermen en lichtlekken op lcd-panelen laten zien.' },
      minimal: { label: 'Esthetisch en minimaal', heading: 'Esthetische en minimalistische achtergronden', description: 'Aardetinten, warm crème en paletten met weinig contrast, gemaakt om vermoeide ogen te beperken en rust te brengen tijdens lange werksessies.' },
      neon: { label: 'Neon en gloed', heading: 'Neon- en gloedachtergronden', description: 'Elektrisch cyaan, synthwave-magenta en cyberpunkgloed om de reactietijd, ghosting en HDR-pieken van je monitor te testen.' },
    },
  },
  id: {
    tool: { preview: 'Pratinjau {title}', exitFullscreen: 'Keluar dari layar penuh', imageSize: 'Ukuran gambar', width: 'Lebar (px)', height: 'Tinggi (px)', sizePhone: 'Ponsel · 1080×2400', sizeCustom: 'Ukuran khusus', generating: 'Membuat…', downloaded: 'Terunduh!', downloadPng: 'Unduh PNG', cssCopied: 'CSS disalin!', copyCss: 'Salin CSS', moreBackgrounds: 'Latar belakang lainnya', allBackgroundsLink: 'Semua latar belakang →', categoriesLabel: 'Kategori latar belakang' },
    body: { about: 'Tentang latar belakang ini', viewFullscreen: 'Lihat di layar penuh', optimalUses: 'Kegunaan terbaik:', inspectionTip: 'Tips memeriksa layar:', howToUse: 'Cara memakai latar belakang ini', choosing: 'Memilih latar belakang yang tepat', whenToChoose: 'Kapan memilih latar belakang ini:', contrast: 'Kontras dan keterbacaan teks:', alternatives: 'Alternatif yang bisa dipertimbangkan:', reference: 'Referensi tepercaya: {title}', officialGuidance: 'Baca panduan resmi dari {org}', relatedGuides: 'Panduan terkait dan latar belakang pelengkap', faq: 'Pertanyaan umum', relevantTools: 'Alat WhiteScreen.vip terkait', moreInCategory: 'Latar belakang lainnya: {category}', viewAllCategory: 'Lihat semua {category} →', allBackgrounds: 'Semua latar belakang' },
    index: { metaTitle: 'Latar belakang gratis: warna solid, gradien, dan 4K', metaDescription: 'Unduh gratis latar belakang resolusi tinggi: warna solid, gradien, latar panggilan video, hitam OLED, dan neon dalam 1080p dan 4K.', library: 'Pustaka latar belakang', libraryDescription: 'Warna solid resolusi tinggi, gradien modern, latar panggilan video, dan layar gelap OLED, gratis. Lihat di layar penuh atau ekspor PNG lossless dalam 1080p, 2K, dan 4K.', count: '{n} latar belakang · PNG gratis hingga 8K', searchLabel: 'Cari latar belakang', searchAll: 'Cari latar belakang…', searchIn: 'Cari di {x}…', open: 'Buka {title}', previewFullscreen: 'Pratinjau layar penuh', pngLossless: 'PNG · Lossless', download1080: 'Unduh PNG 1080p (1920×1080)', download4k: 'Unduh PNG 4K UHD (3840×2160)', customSpecs: 'Ukuran khusus', noMatch: 'Tidak ada latar belakang yang cocok dengan pencarian atau filter Anda.', reset: 'Tampilkan semua latar belakang', aboutTitle: 'Tentang latar belakang WhiteScreen.vip', aboutText: 'Setiap latar belakang dibuat langsung di perangkat Anda dengan HTML5 Canvas. Warnanya tetap akurat dan tanpa kehilangan kualitas, tanpa banding kompresi JPEG, derau, atau tanda air.', solidTitle: 'Warna solid', solidText: 'Warna acuan murni seperti putih, hitam pekat, oranye cerah, merah, hijau, dan biru navy untuk penerangan, menjiplak, menguji layar, dan gaya minimalis.', gradientsTitle: 'Gradien dan cahaya', gradientsText: 'Transisi linear dan radial multi-warna, dari senja hingga biru laut dan neon cyberpunk, dirancang untuk wallpaper modern di komputer dan ponsel.', videoTitle: 'Latar panggilan video', videoText: 'Gradien bersih kantor virtual, cahaya studio yang hangat dan lembut, serta green screen chroma key untuk rapat di Zoom, Microsoft Teams, dan Google Meet.' },
    allLabel: 'Semua latar belakang',
    categories: {
      solid: { label: 'Warna solid', heading: 'Latar belakang warna solid', description: 'Layar warna murni tanpa kompresi untuk menguji layar, menjiplak, menerangi webcam, dan wallpaper minimalis. Unduhan PNG lossless dalam 1080p, 2K, dan 4K.' },
      gradient: { label: 'Gradien', heading: 'Latar belakang gradien', description: 'Gradien lembut multi-warna untuk memeriksa banding warna 8 dan 10 bit, mempercantik setup Anda, dan menyediakan wallpaper berwarna.' },
      'video-call': { label: 'Panggilan video', heading: 'Latar belakang panggilan video', description: 'Latar kantor virtual profesional, cahaya suasana hangat, dan layar chroma key untuk rapat di Zoom, Google Meet, dan Microsoft Teams.' },
      'dark-oled': { label: 'Gelap dan OLED', heading: 'Latar belakang gelap dan OLED', description: 'Hitam pekat 0% dan warna hampir hitam yang mematikan piksel, menghemat baterai pada layar OLED, dan memperlihatkan kebocoran cahaya pada panel LCD.' },
      minimal: { label: 'Estetik dan minimal', heading: 'Latar belakang estetik dan minimal', description: 'Warna tanah, krem hangat, dan palet berkontras rendah yang dirancang untuk mengurangi kelelahan mata dan memberi ketenangan saat bekerja lama.' },
      neon: { label: 'Neon dan cahaya', heading: 'Latar belakang neon dan cahaya', description: 'Cyan elektrik, magenta synthwave, dan cahaya cyberpunk untuk menguji waktu respons, ghosting, dan puncak kecerahan HDR monitor.' },
    },
  },
  tr: {
    tool: { preview: '{title} önizlemesi', exitFullscreen: 'Tam ekrandan çık', imageSize: 'Görsel boyutu', width: 'Genişlik (px)', height: 'Yükseklik (px)', sizePhone: 'Telefon · 1080×2400', sizeCustom: 'Özel boyut', generating: 'Oluşturuluyor…', downloaded: 'İndirildi!', downloadPng: 'PNG indir', cssCopied: 'CSS kopyalandı!', copyCss: 'CSS kopyala', moreBackgrounds: 'Diğer arka planlar', allBackgroundsLink: 'Tüm arka planlar →', categoriesLabel: 'Arka plan kategorileri' },
    body: { about: 'Bu arka plan hakkında', viewFullscreen: 'Tam ekranda görüntüle', optimalUses: 'En iyi kullanım alanları:', inspectionTip: 'Ekran kontrolü ipucu:', howToUse: 'Bu arka plan nasıl kullanılır', choosing: 'Doğru arka planı seçmek', whenToChoose: 'Bu arka plan ne zaman seçilmeli:', contrast: 'Kontrast ve metin okunabilirliği:', alternatives: 'Değerlendirilecek alternatifler:', reference: 'Güvenilir kaynak: {title}', officialGuidance: '{org} resmî bilgilerini okuyun', relatedGuides: 'İlgili rehberler ve tamamlayıcı arka planlar', faq: 'Sık sorulan sorular', relevantTools: 'İlgili WhiteScreen.vip araçları', moreInCategory: 'Diğer arka planlar: {category}', viewAllCategory: '{category} kategorisinin tümü →', allBackgrounds: 'Tüm arka planlar' },
    index: { metaTitle: 'Ücretsiz arka planlar: düz renkler, gradyanlar ve 4K', metaDescription: 'Yüksek çözünürlüklü ücretsiz arka planlar indirin: düz renkler, gradyanlar, görüntülü görüşme arka planları, OLED siyahı ve neon, 1080p ve 4K olarak.', library: 'Arka plan kitaplığı', libraryDescription: 'Yüksek çözünürlüklü düz renkler, modern gradyanlar, görüntülü görüşme arka planları ve koyu OLED ekranlar, ücretsiz. Tam ekranda görüntüleyin veya 1080p, 2K ve 4K kayıpsız PNG olarak dışa aktarın.', count: '{n} arka plan · 8K’ya kadar ücretsiz PNG', searchLabel: 'Arka plan ara', searchAll: 'Arka plan ara…', searchIn: '{x} içinde ara…', open: '{title} aç', previewFullscreen: 'Tam ekran önizleme', pngLossless: 'PNG · Kayıpsız', download1080: '1080p (1920×1080) PNG indir', download4k: '4K UHD (3840×2160) PNG indir', customSpecs: 'Özel boyut', noMatch: 'Aramanız veya filtrenizle eşleşen arka plan yok.', reset: 'Tüm arka planları göster', aboutTitle: 'WhiteScreen.vip arka planları hakkında', aboutText: 'Kitaplıktaki her arka plan, HTML5 Canvas ile doğrudan cihazınızda oluşturulur. Böylece renk kayıpsız ve doğru kalır; JPEG sıkıştırma bantları, gürültü veya filigran olmaz.', solidTitle: 'Düz renkler', solidText: 'Aydınlatma, çizim kopyalama, ekran testi ve minimal görünüm için saf beyaz, gerçek siyah, canlı turuncu, kırmızı, yeşil ve lacivert gibi saf referans renkleri.', gradientsTitle: 'Gradyanlar ve parıltılar', gradientsText: 'Gün batımından okyanus mavisine ve cyberpunk neonlara uzanan çok renkli doğrusal ve dairesel geçişler; modern bilgisayar ve telefon duvar kâğıtları için tasarlandı.', videoTitle: 'Görüntülü görüşme arka planları', videoText: 'Zoom, Microsoft Teams ve Google Meet toplantıları için temiz sanal ofis gradyanları, yumuşak sıcak stüdyo ışığı ve chroma key yeşil ekranlar.' },
    allLabel: 'Tüm arka planlar',
    categories: {
      solid: { label: 'Düz renkler', heading: 'Düz renk arka planlar', description: 'Ekran testi, çizim kopyalama, web kamerası aydınlatması ve minimalist duvar kâğıtları için sıkıştırılmamış saf renk ekranları. 1080p, 2K ve 4K kayıpsız PNG indirme.' },
      gradient: { label: 'Gradyanlar', heading: 'Gradyan arka planlar', description: '8 ve 10 bit renk bantlanmasını kontrol etmek, kurulumunuzu güzelleştirmek ve renkli duvar kâğıtları için yumuşak, çok renkli gradyanlar.' },
      'video-call': { label: 'Görüntülü görüşme', heading: 'Görüntülü görüşme arka planları', description: 'Zoom, Google Meet ve Microsoft Teams toplantıları için profesyonel sanal ofis arka planları, sıcak ortam ışığı ve chroma key ekranları.' },
      'dark-oled': { label: 'Karanlık ve OLED', heading: 'Karanlık ve OLED arka planlar', description: 'Pikselleri kapatan, OLED ekranlarda pil tasarrufu sağlayan ve LCD panellerde ışık sızıntısını gösteren %0 gerçek siyah ve siyaha yakın tonlar.' },
      minimal: { label: 'Estetik ve minimal', heading: 'Estetik ve minimal arka planlar', description: 'Uzun çalışma oturumlarında göz yorgunluğunu azaltmak ve sakinlik katmak için toprak tonları, sıcak krem ve düşük kontrastlı paletler.' },
      neon: { label: 'Neon ve parıltı', heading: 'Neon ve parıltı arka planları', description: 'Monitörün tepki süresini, hayalet görüntüsünü ve HDR parlaklık tepelerini test etmek için elektrik camgöbeği, synthwave macenta ve cyberpunk parıltılar.' },
    },
  },
}

export const backgroundText = (lang: LanguageCode): BackgroundText => TEXT[lang] ?? EN
