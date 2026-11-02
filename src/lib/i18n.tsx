'use client'

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { extractLocaleAndPath, getLocalizedPath, type LanguageCode } from './locale-routing'

export type { LanguageCode }

export type LanguageInfo = {
  code: LanguageCode
  displayCode: string
  name: string
  nativeName: string
  formattedLabel: string
  dir: 'ltr' | 'rtl'
}

export const LANGUAGES: readonly LanguageInfo[] = [
  { code: 'en', displayCode: 'EN', name: 'English', nativeName: 'English', formattedLabel: 'EN — English', dir: 'ltr' },
  { code: 'es', displayCode: 'ES', name: 'Spanish', nativeName: 'Español', formattedLabel: 'ES — Español', dir: 'ltr' },
  { code: 'pt-br', displayCode: 'PT-BR', name: 'Portuguese (Brazil)', nativeName: 'Português (Brasil)', formattedLabel: 'PT-BR — Português (Brasil)', dir: 'ltr' },
  { code: 'de', displayCode: 'DE', name: 'German', nativeName: 'Deutsch', formattedLabel: 'DE — Deutsch', dir: 'ltr' },
  { code: 'fr', displayCode: 'FR', name: 'French', nativeName: 'Français', formattedLabel: 'FR — Français', dir: 'ltr' },
  { code: 'it', displayCode: 'IT', name: 'Italian', nativeName: 'Italiano', formattedLabel: 'IT — Italiano', dir: 'ltr' },
  { code: 'nl', displayCode: 'NL', name: 'Dutch', nativeName: 'Nederlands', formattedLabel: 'NL — Nederlands', dir: 'ltr' },
  { code: 'id', displayCode: 'ID', name: 'Indonesian', nativeName: 'Bahasa Indonesia', formattedLabel: 'ID — Bahasa Indonesia', dir: 'ltr' },
  { code: 'tr', displayCode: 'TR', name: 'Turkish', nativeName: 'Türkçe', formattedLabel: 'TR — Türkçe', dir: 'ltr' },
]

export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    home: 'Home',
    whiteScreen: 'White Screen',
    screenTests: 'Screen Tests',
    effects: 'Effects',
    visualEffects: 'Visual Effects',
    screensavers: 'Screensavers',
    fakeScreens: 'Fake Screens',
    otherTools: 'Other Tools',
    utilities: 'Utilities',
    guides: 'Guides',
    displayGuides: 'Display Guides & Tutorials',
    viewAllGuides: 'View all 10 guides →',
    feedback: 'Feedback',
    searchTools: 'Search tools, e.g. "dead pixel"',
    allTools: 'All Tools',
    toolsDirectory: 'Tools Directory',
    menu: 'Menu',
    closeMenu: 'Close menu',
    navigation: 'Navigation',
    selectLanguage: 'Select Language',

    openFullscreen: 'Open fullscreen',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit fullscreen',
    pressEscToExit: 'Press Esc to exit',
    customColor: 'Custom',
    custom: 'Custom',
    uploadImage: 'Image',
    changeImage: 'Change Image',
    clear: 'Clear',
    uploadedImage: 'Uploaded Image',
    resolution: 'Resolution & Download',
    customResolution: 'Custom resolution',
    width: 'Width (px)',
    height: 'Height (px)',
    format: 'Format',
    downloadImage: 'Download Image',
    downloading: 'Generating...',
    downloaded: 'Downloaded!',
    shortcuts: 'Shortcuts',
    shortcutF: 'fullscreen',
    shortcutNumbers: 'pick color',
    shortcutArrows: 'cycle',
    shortcutEsc: 'exit',
    exitHint: 'Press Esc or double-click to exit · ← → to change color',

    prevPattern: 'Previous pattern',
    nextPattern: 'Next pattern',
    autoCycle: 'Auto-cycle',
    stopAutoCycle: 'Stop auto-cycle',
    interval: 'Interval',
    gridOverlay: 'Grid overlay',
    patternCyclerHint: 'Click the screen or use the arrow keys to switch patterns.',

    white: 'White',
    black: 'Black',
    red: 'Red',
    green: 'Green',
    blue: 'Blue',
    yellow: 'Yellow',
    orange: 'Orange',
    pink: 'Pink',
    purple: 'Purple',
    cyan: 'Cyan',
    magenta: 'Magenta',
    gray: 'Gray',
    colorScreenSuffix: 'Screen',

    heroTitle: 'White Screen',
    heroIntro:
      'Turn your display into a clean, bright white screen in one click. Use it as a light source, to test for dead pixels, or to clean your monitor — or switch to any other color.',
    heroBadge: '100% Free · Clean Light Source · Pixel Test',
    featureLight: 'Video & Zoom lighting',
    featureDeadPixel: 'Dead pixel detection',
    featureCleaning: 'Monitor dust cleaning',
    featureColors: '12 pure colors & hex',

    preset480p: '480p SD',
    preset720p: '720p HD',
    preset1080p: '1080p FHD',
    preset1440p: '1440p QHD',
    preset2k: '2K DCI',
    preset4k: '4K UHD',
    preset8k: '8K UHD-2',

    benefitsTitle: 'Why use WhiteScreen.vip',
    useCasesTitle: 'Common use cases',
    howToUseTitle: 'How to use the white screen',
    faqTitle: 'Frequently asked questions',
    colorScreensTitle: 'Explore other color screens',
    colorScreensDesc: 'Each color has its own page, so you can bookmark or share a direct link.',
    moreColors: 'More colors',

    screenTestsEyebrow: 'Display testing',
    screenTestsDesc: 'Solid colors and test patterns for checking dead pixels, uniformity, burn-in and color accuracy.',
    effectsEyebrow: 'Visuals & animations',
    effectsDesc: 'Animated static, noise, gradients and simulated effects that run right in your browser.',
    otherToolsEyebrow: 'Utilities & simulations',
    otherToolsDesc: 'Timers, a stopwatch, video-call lighting and harmless simulated screens.',

    toolsCatalogTitle: 'All Screen Tools & Utilities',
    toolsCatalogDesc: 'Browse our complete catalog of 50+ free browser tools. Test your monitors, enjoy ambient visual effects, run fullscreen timers, or simulate update screens.',
    filterTools: 'Filter tools...',
    showingTools: 'Showing {count} tools',
    toolsCount: '{count} tools',
    noToolsMatch: 'No tools match “{query}”.',
    tryBroaderSearch: 'Try a broader term like “screen”, “test”, “clock” or “update”, or',
    browseAllTools: 'browse all tools',

    howToUse: 'How to use the {tool}',
    commonUses: 'Common uses',
    relatedTools: 'Related tools',

    footerDesc: 'Free screen tests, effects, screensavers and utilities that run entirely in your browser.',
    about: 'About Us',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms of Use',
    disclaimer: 'Disclaimer',
    copyright: 'WhiteScreen.vip. All rights reserved.',
    simulationsDisclaimer: 'Simulations are for entertainment only and are not affiliated with any brand shown.',
  },

  es: {
    home: 'Inicio',
    whiteScreen: 'Pantalla Blanca',
    screenTests: 'Pruebas de pantalla',
    effects: 'Efectos',
    visualEffects: 'Efectos visuales',
    screensavers: 'Salvapantallas',
    fakeScreens: 'Pantallas simuladas',
    otherTools: 'Otras herramientas',
    utilities: 'Utilidades',
    guides: 'Guías',
    feedback: 'Comentarios',
    searchTools: 'Buscar herramientas, ej. "píxel muerto"',
    allTools: 'Todas las herramientas',
    toolsDirectory: 'Directorio de herramientas',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    navigation: 'Navegación',
    selectLanguage: 'Seleccionar idioma',

    openFullscreen: 'Abrir pantalla completa',
    fullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa',
    pressEscToExit: 'Presiona Esc para salir',
    customColor: 'Personalizado',
    custom: 'Personalizado',
    resolution: 'Resolución y descarga',
    customResolution: 'Resolución personalizada',
    width: 'Ancho (px)',
    height: 'Alto (px)',
    format: 'Formato',
    downloadImage: 'Descargar imagen',
    downloading: 'Generando...',
    downloaded: '¡Descargado!',
    shortcuts: 'Atajos',
    shortcutF: 'pantalla completa',
    shortcutNumbers: 'elegir color',
    shortcutArrows: 'cambiar',
    shortcutEsc: 'salir',
    exitHint: 'Presione Esc o doble clic para salir · ← → para cambiar color',

    prevPattern: 'Patrón anterior',
    nextPattern: 'Siguiente patrón',
    autoCycle: 'Cambio automático',
    stopAutoCycle: 'Detener cambio',
    interval: 'Intervalo',
    gridOverlay: 'Cuadrícula',
    patternCyclerHint: 'Haz clic en la pantalla o usa las flechas para cambiar de patrón.',

    white: 'Blanco',
    black: 'Negro',
    red: 'Rojo',
    green: 'Verde',
    blue: 'Azul',
    yellow: 'Amarillo',
    orange: 'Naranja',
    pink: 'Rosa',
    purple: 'Púrpura',
    cyan: 'Cian',
    magenta: 'Magenta',
    gray: 'Gris',
    colorScreenSuffix: 'Pantalla',

    heroTitle: 'Pantalla Blanca (White Screen)',
    heroIntro:
      'Convierte tu pantalla en una superficie blanca, limpia y brillante con un solo clic. Ideal como fuente de luz, para detectar píxeles muertos o limpiar tu monitor.',

    preset480p: '480p SD',
    preset720p: '720p HD',
    preset1080p: '1080p FHD',
    preset1440p: '1440p QHD',
    preset2k: '2K DCI',
    preset4k: '4K UHD',
    preset8k: '8K UHD-2',

    benefitsTitle: 'Por qué usar WhiteScreen.vip',
    useCasesTitle: 'Usos comunes',
    howToUseTitle: 'Cómo usar la pantalla blanca',
    faqTitle: 'Preguntas frecuentes',
    colorScreensTitle: 'Explorar otras pantallas de colores',
    colorScreensDesc: 'Cada color tiene su propia página para guardar en marcadores o compartir.',
    moreColors: 'Más colores',

    screenTestsEyebrow: 'Pruebas de visualización',
    screenTestsDesc: 'Colores sólidos y patrones para detectar píxeles muertos, uniformidad y precisión cromática.',
    effectsEyebrow: 'Efectos y animaciones',
    effectsDesc: 'Estática animada, ruido, degradados y simulaciones que funcionan directamente en tu navegador.',
    otherToolsEyebrow: 'Utilidades y simulaciones',
    otherToolsDesc: 'Temporizadores, cronómetro, luz para videollamadas y pantallas simuladas seguras.',

    toolsCatalogTitle: 'Todas las herramientas y utilidades de pantalla',
    toolsCatalogDesc: 'Explora nuestro catálogo de más de 50 herramientas web gratuitas. Prueba monitores, disfruta de efectos y simula pantallas.',
    filterTools: 'Filtrar herramientas...',
    showingTools: 'Mostrando {count} herramientas',
    toolsCount: '{count} herramientas',
    noToolsMatch: 'No hay herramientas que coincidan con “{query}”.',
    tryBroaderSearch: 'Intenta con un término más amplio como "pantalla", "prueba", "reloj" o "actualización", o',
    browseAllTools: 'explora todas las herramientas',

    howToUse: 'Cómo usar {tool}',
    commonUses: 'Usos comunes',
    relatedTools: 'Herramientas relacionadas',

    footerDesc: 'Herramientas gratuitas de prueba de pantalla, efectos, salvapantallas y utilidades 100% en tu navegador.',
    about: 'Sobre Nosotros',
    contact: 'Contacto',
    privacyPolicy: 'Política de Privacidad',
    terms: 'Términos de Uso',
    disclaimer: 'Descargo de Responsabilidad',
    copyright: 'WhiteScreen.vip. Todos los derechos reservados.',
    simulationsDisclaimer: 'Las simulaciones son solo para entretenimiento y no están afiliadas a ninguna marca mostrada.',
  },

  'pt-br': {
    home: 'Início',
    whiteScreen: 'Tela Branca',
    screenTests: 'Testes de tela',
    effects: 'Efeitos',
    visualEffects: 'Efeitos visuais',
    screensavers: 'Protetores de tela',
    fakeScreens: 'Telas simuladas',
    otherTools: 'Outras ferramentas',
    utilities: 'Utilitários',
    guides: 'Guias',
    feedback: 'Feedback',
    searchTools: 'Pesquisar ferramentas...',
    allTools: 'Todas as ferramentas',
    toolsDirectory: 'Diretório de ferramentas',
    menu: 'Menu',
    closeMenu: 'Fechar menu',
    navigation: 'Navegação',
    selectLanguage: 'Selecionar idioma',

    openFullscreen: 'Abrir tela cheia',
    fullscreen: 'Tela cheia',
    exitFullscreen: 'Sair de tela cheia',
    pressEscToExit: 'Pressione Esc para sair',
    customColor: 'Personalizado',
    custom: 'Personalizado',
    resolution: 'Resolução e download',
    customResolution: 'Resolução personalizada',
    width: 'Largura (px)',
    height: 'Altura (px)',
    format: 'Formato',
    downloadImage: 'Baixar imagem',
    downloading: 'Gerando...',
    downloaded: 'Baixado com sucesso!',
    shortcuts: 'Atalhos',
    shortcutF: 'tela cheia',
    shortcutNumbers: 'escolher cor',
    shortcutArrows: 'alternar',
    shortcutEsc: 'sair',
    exitHint: 'Pressione Esc ou clique duas vezes para sair · ← → para mudar de cor',

    prevPattern: 'Padrão anterior',
    nextPattern: 'Próximo padrão',
    autoCycle: 'Ciclo automático',
    stopAutoCycle: 'Parar ciclo',
    interval: 'Intervalo',
    gridOverlay: 'Grade de alinhamento',
    patternCyclerHint: 'Clique na tela ou use as setas para alternar os padrões.',

    white: 'Branco',
    black: 'Preto',
    red: 'Vermelho',
    green: 'Verde',
    blue: 'Azul',
    yellow: 'Amarelo',
    orange: 'Laranja',
    pink: 'Rosa',
    purple: 'Roxo',
    cyan: 'Ciano',
    magenta: 'Magenta',
    gray: 'Cinza',
    colorScreenSuffix: 'Tela',

    heroTitle: 'Tela Branca (White Screen)',
    heroIntro:
      'Transforme sua tela em um fundo branco limpo e brilhante com apenas um clique. Use como fonte de luz, teste de pixels mortos ou limpeza de tela.',

    preset480p: '480p SD',
    preset720p: '720p HD',
    preset1080p: '1080p FHD',
    preset1440p: '1440p QHD',
    preset2k: '2K DCI',
    preset4k: '4K UHD',
    preset8k: '8K UHD-2',

    benefitsTitle: 'Por que usar o WhiteScreen.vip',
    useCasesTitle: 'Usos mais comuns',
    howToUseTitle: 'Como usar a tela branca',
    faqTitle: 'Perguntas frequentes',
    colorScreensTitle: 'Ver outras cores de tela',
    colorScreensDesc: 'Cada cor possui sua própria página para salvar nos favoritos ou compartilhar.',
    moreColors: 'Mais cores',

    screenTestsEyebrow: 'Testes de exibição',
    screenTestsDesc: 'Cores sólidas e padrões para verificar dead pixels, uniformidade, burn-in e precisão cromática.',
    effectsEyebrow: 'Efeitos e visuais',
    effectsDesc: 'Estática animada, ruído, degradês e efeitos visuais que rodam direto no navegador.',
    otherToolsEyebrow: 'Utilitários e simulações',
    otherToolsDesc: 'Temporizadores, cronômetro, luz para videochamadas e telas simuladas seguras.',

    toolsCatalogTitle: 'Todas as ferramentas e utilitários de tela',
    toolsCatalogDesc: 'Explore nosso catálogo de mais de 50 ferramentas gratuitas no navegador para testes de monitor, efeitos e timers.',
    filterTools: 'Filtrar ferramentas...',
    showingTools: 'Mostrando {count} ferramentas',
    toolsCount: '{count} ferramentas',
    noToolsMatch: 'Nenhuma ferramenta encontrada para “{query}”.',
    tryBroaderSearch: 'Tente um termo mais amplo como "tela", "teste", "relógio" ou "atualização", ou',
    browseAllTools: 'veja todas as ferramentas',

    howToUse: 'Como usar {tool}',
    commonUses: 'Usos comuns',
    relatedTools: 'Ferramentas relacionadas',

    footerDesc: 'Testes de tela, efeitos visuais e ferramentas gratuitas que rodam direto no navegador.',
    about: 'Sobre Nós',
    contact: 'Contato',
    privacyPolicy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    disclaimer: 'Aviso Legal',
    copyright: 'WhiteScreen.vip. Todos os direitos reservados.',
    simulationsDisclaimer: 'As simulações são apenas para entretenimento e não possuem afiliação com nenhuma marca exibida.',
  },

  de: {
    home: 'Startseite',
    whiteScreen: 'Weißer Bildschirm',
    screenTests: 'Bildschirmtests',
    effects: 'Effekte',
    visualEffects: 'Visuelle Effekte',
    screensavers: 'Bildschirmschoner',
    fakeScreens: 'Simulationen',
    otherTools: 'Weitere Tools',
    utilities: 'Dienstprogramme',
    guides: 'Anleitungen',
    feedback: 'Feedback',
    searchTools: 'Tools durchsuchen...',
    allTools: 'Alle Tools',
    toolsDirectory: 'Werkzeugverzeichnis',
    menu: 'Menü',
    closeMenu: 'Menü schließen',
    navigation: 'Navigation',
    selectLanguage: 'Sprache wählen',

    openFullscreen: 'Vollbild öffnen',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild beenden',
    pressEscToExit: 'Esc drücken zum Beenden',
    customColor: 'Benutzerdefiniert',
    custom: 'Eigene Farbe',
    resolution: 'Auflösung & Download',
    customResolution: 'Eigene Auflösung',
    width: 'Breite (px)',
    height: 'Höhe (px)',
    format: 'Format',
    downloadImage: 'Bild herunterladen',
    downloading: 'Wird erstellt...',
    downloaded: 'Heruntergeladen!',
    shortcuts: 'Tastenkürzel',
    shortcutF: 'Vollbild',
    shortcutNumbers: 'Farbe wählen',
    shortcutArrows: 'wechseln',
    shortcutEsc: 'beenden',
    exitHint: 'Esc drücken oder doppelklicken zum Beenden · ← → für Farbwechsel',

    prevPattern: 'Vorheriges Muster',
    nextPattern: 'Nächstes Muster',
    autoCycle: 'Automatischer Wechsel',
    stopAutoCycle: 'Wechsel stoppen',
    interval: 'Intervall',
    gridOverlay: 'Gitter-Overlay',
    patternCyclerHint: 'Klicken Sie auf den Bildschirm oder nutzen Sie die Pfeiltasten zum Wechseln.',

    white: 'Weiß',
    black: 'Schwarz',
    red: 'Rot',
    green: 'Grün',
    blue: 'Blau',
    yellow: 'Gelb',
    orange: 'Orange',
    pink: 'Rosa',
    purple: 'Lila',
    cyan: 'Cyan',
    magenta: 'Magenta',
    gray: 'Grau',
    colorScreenSuffix: 'Bildschirm',

    heroTitle: 'Weißer Bildschirm (White Screen)',
    heroIntro:
      'Verwandeln Sie Ihren Monitor mit einem Klick in einen sauberen, hellen weißen Bildschirm. Ideal als Lichtquelle, zum Erkennen von Pixelfehlern oder zum Reinigen.',

    preset480p: '480p SD',
    preset720p: '720p HD',
    preset1080p: '1080p FHD',
    preset1440p: '1440p QHD',
    preset2k: '2K DCI',
    preset4k: '4K UHD',
    preset8k: '8K UHD-2',

    benefitsTitle: 'Vorteile von WhiteScreen.vip',
    useCasesTitle: 'Typische Einsatzzwecke',
    howToUseTitle: 'Bedienungsanleitung',
    faqTitle: 'Häufig gestellte Fragen',
    colorScreensTitle: 'Weitere Farben entdecken',
    colorScreensDesc: 'Jede Farbe hat eine eigene Unterseite zum Speichern oder Teilen.',
    moreColors: 'Weitere Farben',

    screenTestsEyebrow: 'Bildschirmprüfung',
    screenTestsDesc: 'Farbfelder und Testbilder zur Erkennung von Pixelfehlern, Ausleuchtung und Farbgenauigkeit.',
    effectsEyebrow: 'Visuals & Animationen',
    effectsDesc: 'Animiertes TV-Rauschen, Verläufe und Browsereffekte ohne Installation.',
    otherToolsEyebrow: 'Dienstprogramme & Simulationen',
    otherToolsDesc: 'Timer, Stoppuhr, Videoanruf-Licht und harmlose System-Simulationen.',

    toolsCatalogTitle: 'Alle Bildschirm-Tools & Dienstprogramme',
    toolsCatalogDesc: 'Durchstöbern Sie unseren vollständigen Katalog mit über 50 kostenlosen Online-Tools.',
    filterTools: 'Tools filtern...',
    showingTools: '{count} Tools angezeigt',
    toolsCount: '{count} Tools',
    noToolsMatch: 'Keine Tools gefunden für „{query}“.',
    tryBroaderSearch: 'Versuchen Sie einen Begriff wie „Bildschirm“, „Test“, „Uhr“ oder „Update“, oder',
    browseAllTools: 'durchstöbern Sie alle Tools',

    howToUse: 'So verwenden Sie {tool}',
    commonUses: 'Einsatzzwecke',
    relatedTools: 'Ähnliche Tools',

    footerDesc: 'Kostenlose Bildschirmtests, Bildschirmschoner und Tools direkt im Webbrowser ohne Installation.',
    about: 'Über Uns',
    contact: 'Kontakt',
    privacyPolicy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    disclaimer: 'Haftungsausschluss',
    copyright: 'WhiteScreen.vip. Alle Rechte vorbehalten.',
    simulationsDisclaimer: 'Simulationen dienen nur der Unterhaltung und stehen in keiner Verbindung zu den gezeigten Marken.',
  },

  fr: {
    home: 'Accueil',
    whiteScreen: 'Écran Blanc',
    screenTests: "Tests d'écran",
    effects: 'Effets',
    visualEffects: 'Effets visuels',
    screensavers: 'Écrans de veille',
    fakeScreens: 'Écrans simulés',
    otherTools: 'Autres outils',
    utilities: 'Utilitaires',
    guides: 'Guides',
    feedback: 'Avis',
    searchTools: 'Rechercher des outils...',
    allTools: 'Tous les outils',
    toolsDirectory: 'Répertoire des outils',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
    navigation: 'Navigation',
    selectLanguage: 'Choisir la langue',

    openFullscreen: 'Plein écran',
    fullscreen: 'Plein écran',
    exitFullscreen: 'Quitter plein écran',
    pressEscToExit: 'Appuyez sur Échap pour quitter',
    customColor: 'Personnalisé',
    custom: 'Personnalisé',
    resolution: 'Résolution et téléchargement',
    customResolution: 'Résolution personnalisée',
    width: 'Largeur (px)',
    height: 'Hauteur (px)',
    format: 'Format',
    downloadImage: "Télécharger l'image",
    downloading: 'Génération...',
    downloaded: 'Téléchargé !',
    shortcuts: 'Raccourcis',
    shortcutF: 'plein écran',
    shortcutNumbers: 'choisir couleur',
    shortcutArrows: 'défiler',
    shortcutEsc: 'quitter',
    exitHint: 'Appuyez sur Échap ou double-cliquez pour quitter · ← → pour changer de couleur',

    prevPattern: 'Motif précédent',
    nextPattern: 'Motif suivant',
    autoCycle: 'Défilement automatique',
    stopAutoCycle: 'Arrêter défilement',
    interval: 'Intervalle',
    gridOverlay: 'Grille de repère',
    patternCyclerHint: 'Cliquez sur l’écran ou utilisez les flèches pour changer de motif.',

    white: 'Blanc',
    black: 'Noir',
    red: 'Rouge',
    green: 'Vert',
    blue: 'Bleu',
    yellow: 'Jaune',
    orange: 'Orange',
    pink: 'Rose',
    purple: 'Violet',
    cyan: 'Cyan',
    magenta: 'Magenta',
    gray: 'Gris',
    colorScreenSuffix: 'Écran',

    heroTitle: 'Écran Blanc (White Screen)',
    heroIntro:
      'Transformez votre écran en un fond blanc propre et lumineux en un clic. Utilisable comme source de lumière, pour repérer les pixels morts ou nettoyer votre moniteur.',

    preset480p: '480p SD',
    preset720p: '720p HD',
    preset1080p: '1080p FHD',
    preset1440p: '1440p QHD',
    preset2k: '2K DCI',
    preset4k: '4K UHD',
    preset8k: '8K UHD-2',

    benefitsTitle: 'Pourquoi choisir WhiteScreen.vip',
    useCasesTitle: 'Cas d’usage courants',
    howToUseTitle: 'Comment utiliser l’écran blanc',
    faqTitle: 'Foire aux questions',
    colorScreensTitle: 'Découvrir les autres couleurs',
    colorScreensDesc: 'Chaque couleur possède sa propre page que vous pouvez ajouter à vos favoris ou partager.',
    moreColors: 'Plus de couleurs',

    screenTestsEyebrow: 'Tests de moniteur',
    screenTestsDesc: 'Couleurs unies et mires de test pour détecter les pixels morts, l’uniformité et la colorimétrie.',
    effectsEyebrow: 'Animations et effets',
    effectsDesc: 'Neige TV, bruit visuel, dégradés et effets animés directement dans votre navigateur.',
    otherToolsEyebrow: 'Utilitaires et simulations',
    otherToolsDesc: 'Minuteurs, chronomètre, lumière vidéo et simulations d’écrans inoffensives.',

    toolsCatalogTitle: 'Tous les outils et utilitaires d’écran',
    toolsCatalogDesc: 'Consultez notre catalogue complet de plus de 50 outils web gratuits sans téléchargement.',
    filterTools: 'Filtrer les outils...',
    showingTools: 'Affichage de {count} outils',
    toolsCount: '{count} outils',
    noToolsMatch: 'Aucun outil ne correspond à « {query} ».',
    tryBroaderSearch: 'Essayez un terme comme « écran », « test », « horloge » ou « mise à jour », ou',
    browseAllTools: 'parcourez tous les outils',

    howToUse: 'Comment utiliser {tool}',
    commonUses: 'Cas d’usage',
    relatedTools: 'Outils associés',

    footerDesc: 'Outils gratuits de test d’écran, effets visuels et écrans de veille directement dans votre navigateur.',
    about: 'À Propos',
    contact: 'Contact',
    privacyPolicy: 'Politique de Confidentialité',
    terms: 'Conditions d’Utilisation',
    disclaimer: 'Avertissement',
    copyright: 'WhiteScreen.vip. Tous droits réservés.',
    simulationsDisclaimer: 'Les simulations sont uniquement destinées au divertissement et ne sont affiliées à aucune marque présentée.',
  },

  it: {
    home: 'Home',
    whiteScreen: 'Schermo Bianco',
    screenTests: 'Test dello schermo',
    effects: 'Effetti',
    visualEffects: 'Effetti visivi',
    screensavers: 'Salvaschermo',
    fakeScreens: 'Schermi simulati',
    otherTools: 'Altri strumenti',
    utilities: 'Utilità',
    guides: 'Guide',
    feedback: 'Feedback',
    searchTools: 'Cerca strumenti...',
    allTools: 'Tutti gli strumenti',
    toolsDirectory: 'Directory degli strumenti',
    menu: 'Menu',
    closeMenu: 'Chiudi menu',
    navigation: 'Navigazione',
    selectLanguage: 'Seleziona lingua',

    openFullscreen: 'Apri a schermo intero',
    fullscreen: 'Schermo intero',
    exitFullscreen: 'Esci da schermo intero',
    pressEscToExit: 'Premi Esc per uscire',
    customColor: 'Personalizzato',
    custom: 'Personalizzato',
    resolution: 'Risoluzione e download',
    customResolution: 'Risoluzione personalizzata',
    width: 'Larghezza (px)',
    height: 'Altezza (px)',
    format: 'Formato',
    downloadImage: 'Scarica immagine',
    downloading: 'Generazione...',
    downloaded: 'Scaricato!',
    shortcuts: 'Scorciatoie',
    shortcutF: 'schermo intero',
    shortcutNumbers: 'scegli colore',
    shortcutArrows: 'cambia',
    shortcutEsc: 'esci',
    exitHint: 'Premi Esc o fai doppio clic per uscire · ← → per cambiare colore',

    prevPattern: 'Motivo precedente',
    nextPattern: 'Motivo successivo',
    autoCycle: 'Scorrimento automatico',
    stopAutoCycle: 'Ferma scorrimento',
    interval: 'Intervallo',
    gridOverlay: 'Griglia di controllo',
    patternCyclerHint: 'Fai clic sullo schermo o usa i tasti freccia per cambiare motivo.',

    white: 'Bianco',
    black: 'Nero',
    red: 'Rosso',
    green: 'Verde',
    blue: 'Blu',
    yellow: 'Giallo',
    orange: 'Arancione',
    pink: 'Rosa',
    purple: 'Viola',
    cyan: 'Ciano',
    magenta: 'Magenta',
    gray: 'Grigio',
    colorScreenSuffix: 'Schermo',

    heroTitle: 'Schermo Bianco (White Screen)',
    heroIntro:
      'Trasforma il tuo display in uno schermo bianco brillante e pulito con un solo clic. Ideale come fonte di luce, per rilevare pixel bruciati o pulire il monitor.',

    preset480p: '480p SD',
    preset720p: '720p HD',
    preset1080p: '1080p FHD',
    preset1440p: '1440p QHD',
    preset2k: '2K DCI',
    preset4k: '4K UHD',
    preset8k: '8K UHD-2',

    benefitsTitle: 'Perché usare WhiteScreen.vip',
    useCasesTitle: 'Usi comuni',
    howToUseTitle: 'Come usare lo schermo bianco',
    faqTitle: 'Domande frequenti',
    colorScreensTitle: 'Esplora altri schermi colorati',
    colorScreensDesc: 'Ogni colore ha la sua pagina dedicata da salvare nei segnalibri o condividere.',
    moreColors: 'Altri colori',

    screenTestsEyebrow: 'Test per monitor',
    screenTestsDesc: 'Colori uniformi e pattern di prova per pixel bruciati, uniformità e calibrazione.',
    effectsEyebrow: 'Effetti e animazioni',
    effectsDesc: 'Neve TV, rumore visivo, gradienti ed effetti dinamici in esecuzione nel browser.',
    otherToolsEyebrow: 'Utilità e simulazioni',
    otherToolsDesc: 'Timer, cronometro, luce webcam e simulazioni sicure per registrazioni.',

    toolsCatalogTitle: 'Tutti gli strumenti e utilità per lo schermo',
    toolsCatalogDesc: 'Esplora il nostro catalogo completo con oltre 50 strumenti web gratuiti senza download.',
    filterTools: 'Filtra strumenti...',
    showingTools: 'Visualizzazione di {count} strumenti',
    toolsCount: '{count} strumenti',
    noToolsMatch: 'Nessuno strumento corrisponde a “{query}”.',
    tryBroaderSearch: 'Prova un termine come “schermo”, “test”, “orologio” o “aggiornamento”, oppure',
    browseAllTools: 'sfoglia tutti gli strumenti',

    howToUse: 'Come usare {tool}',
    commonUses: 'Usi comuni',
    relatedTools: 'Strumenti correlati',

    footerDesc: 'Test di visualizzazione, effetti visivi e utilità gratuiti eseguiti direttamente nel browser.',
    about: 'Chi Siamo',
    contact: 'Contatti',
    privacyPolicy: 'Informativa sulla Privacy',
    terms: 'Termini di Utilizzo',
    disclaimer: 'Dichiarazione di Non Responsabilità',
    copyright: 'WhiteScreen.vip. Tutti i diritti riservati.',
    simulationsDisclaimer: 'Le simulazioni sono solo a scopo di intrattenimento e non sono affiliate ad alcun marchio mostrato.',
  },

  nl: {
    home: 'Home',
    whiteScreen: 'Wit Scherm',
    screenTests: 'Schermtests',
    effects: 'Effecten',
    visualEffects: 'Visuele effecten',
    screensavers: 'Schermbeveiligingen',
    fakeScreens: 'Simulatieschermen',
    otherTools: 'Andere tools',
    utilities: 'Hulpmiddelen',
    guides: 'Gidsen',
    feedback: 'Feedback',
    searchTools: 'Zoek tools...',
    allTools: 'Alle tools',
    toolsDirectory: 'Tools overzicht',
    menu: 'Menu',
    closeMenu: 'Menu sluiten',
    navigation: 'Navigatie',
    selectLanguage: 'Kies taal',

    openFullscreen: 'Volledig scherm openen',
    fullscreen: 'Volledig scherm',
    exitFullscreen: 'Volledig scherm sluiten',
    pressEscToExit: 'Druk op Esc om te sluiten',
    customColor: 'Aangepast',
    custom: 'Aangepast',
    resolution: 'Resolutie & downloaden',
    customResolution: 'Aangepaste resolutie',
    width: 'Breedte (px)',
    height: 'Hoogte (px)',
    format: 'Formaat',
    downloadImage: 'Afbeelding downloaden',
    downloading: 'Bezig met genereren...',
    downloaded: 'Gedownload!',
    shortcuts: 'Sneltoetsen',
    shortcutF: 'volledig scherm',
    shortcutNumbers: 'kies kleur',
    shortcutArrows: 'wisselen',
    shortcutEsc: 'verlaten',
    exitHint: 'Druk op Esc of dubbelklik om te sluiten · ← → om van kleur te wisselen',

    prevPattern: 'Vorig patroon',
    nextPattern: 'Volgend patroon',
    autoCycle: 'Automatisch wisselen',
    stopAutoCycle: 'Stoppen',
    interval: 'Interval',
    gridOverlay: 'Rasterweergave',
    patternCyclerHint: 'Klik op het scherm of gebruik de pijltjestoetsen om van patroon te wisselen.',

    white: 'Wit',
    black: 'Zwart',
    red: 'Rood',
    green: 'Groen',
    blue: 'Blauw',
    yellow: 'Geel',
    orange: 'Oranje',
    pink: 'Roze',
    purple: 'Paars',
    cyan: 'Cyaan',
    magenta: 'Magenta',
    gray: 'Grijs',
    colorScreenSuffix: 'Scherm',

    heroTitle: 'Wit Scherm (White Screen)',
    heroIntro:
      'Verander je scherm in één klik in een helder, wit scherm. Ideaal als lichtbron of om dode pixels te controleren.',

    preset480p: '480p SD',
    preset720p: '720p HD',
    preset1080p: '1080p FHD',
    preset1440p: '1440p QHD',
    preset2k: '2K DCI',
    preset4k: '4K UHD',
    preset8k: '8K UHD-2',

    benefitsTitle: 'Waarom WhiteScreen.vip gebruiken',
    useCasesTitle: 'Veelvoorkomende toepassingen',
    howToUseTitle: 'Hoe het witte scherm te gebruiken',
    faqTitle: 'Veelgestelde vragen',
    colorScreensTitle: 'Ontdek andere gekleurde schermen',
    colorScreensDesc: 'Elke kleur heeft een eigen pagina om direct op te slaan of te delen.',
    moreColors: 'Meer kleuren',

    screenTestsEyebrow: 'Beeldschermcontrole',
    screenTestsDesc: 'Effen kleuren en testpatronen voor het controleren van dode pixels, uniformiteit en kleurbereik.',
    effectsEyebrow: 'Visuals & animaties',
    effectsDesc: 'TV-sneeuw, geanimeerde ruis, verlopen en simulaties die direct in uw browser draaien.',
    otherToolsEyebrow: 'Hulpmiddelen & simulaties',
    otherToolsDesc: 'Timers, stopwatch, videobelverlichting en onschadelijke simulatieschermen.',

    toolsCatalogTitle: 'Alle schermtools & hulpmiddelen',
    toolsCatalogDesc: 'Bekijk onze complete catalogus van meer dan 50 gratis online tools in de browser.',
    filterTools: 'Tools filteren...',
    showingTools: '{count} tools weergegeven',
    toolsCount: '{count} tools',
    noToolsMatch: 'Geen tools gevonden voor “{query}”.',
    tryBroaderSearch: 'Probeer een zoekterm zoals “scherm”, “test”, “klok” of “update”, of',
    browseAllTools: 'bekijk alle tools',

    howToUse: 'Hoe {tool} te gebruiken',
    commonUses: 'Toepassingen',
    relatedTools: 'Gerelateerde tools',

    footerDesc: 'Gratis schermtests, visuele effecten en utilities die volledig in uw browser draaien.',
    about: 'Over Ons',
    contact: 'Contact',
    privacyPolicy: 'Privacybeleid',
    terms: 'Gebruiksvoorwaarden',
    disclaimer: 'Disclaimer',
    copyright: 'WhiteScreen.vip. Alle rechten voorbehouden.',
    simulationsDisclaimer: 'Simulaties zijn uitsluitend bedoeld voor vermaak en zijn niet verbonden aan getoonde merken.',
  },

  id: {
    home: 'Beranda',
    whiteScreen: 'Layar Putih',
    screenTests: 'Tes Layar',
    effects: 'Efek',
    visualEffects: 'Efek Visual',
    screensavers: 'Screensaver',
    fakeScreens: 'Layar Simulasi',
    otherTools: 'Alat Lainnya',
    utilities: 'Utilitas',
    guides: 'Panduan',
    feedback: 'Masukan',
    searchTools: 'Cari alat...',
    allTools: 'Semua Alat',
    toolsDirectory: 'Direktori Alat',
    menu: 'Menu',
    closeMenu: 'Tutup Menu',
    navigation: 'Navigasi',
    selectLanguage: 'Pilih Bahasa',

    openFullscreen: 'Buka Layar Penuh',
    fullscreen: 'Layar Penuh',
    exitFullscreen: 'Keluar Layar Penuh',
    pressEscToExit: 'Tekan Esc untuk keluar',
    customColor: 'Kustom',
    custom: 'Kustom',
    resolution: 'Resolusi & Unduh',
    customResolution: 'Resolusi Kustom',
    width: 'Lebar (px)',
    height: 'Tinggi (px)',
    format: 'Format',
    downloadImage: 'Unduh Gambar',
    downloading: 'Membuat gambar...',
    downloaded: 'Berhasil Diunduh!',
    shortcuts: 'Pintasan',
    shortcutF: 'layar penuh',
    shortcutNumbers: 'pilih warna',
    shortcutArrows: 'ganti warna',
    shortcutEsc: 'keluar',
    exitHint: 'Tekan Esc atau klik dua kali untuk keluar · ← → untuk ganti warna',

    prevPattern: 'Pola sebelumnya',
    nextPattern: 'Pola berikutnya',
    autoCycle: 'Siklus otomatis',
    stopAutoCycle: 'Hentikan siklus',
    interval: 'Interval',
    gridOverlay: 'Kisi panduan',
    patternCyclerHint: 'Klik layar atau gunakan tombol panah untuk mengganti pola.',

    white: 'Putih',
    black: 'Hitam',
    red: 'Merah',
    green: 'Hijau',
    blue: 'Biru',
    yellow: 'Kuning',
    orange: 'Oranye',
    pink: 'Merah Muda',
    purple: 'Ungu',
    cyan: 'Sian',
    magenta: 'Magenta',
    gray: 'Abu-abu',
    colorScreenSuffix: 'Layar',

    heroTitle: 'Layar Putih (White Screen)',
    heroIntro:
      'Ubah layar Anda menjadi layar putih bersih dan terang hanya dengan satu klik. Bagus untuk sumber cahaya, uji piksel mati, atau membersihkan monitor.',

    preset480p: '480p SD',
    preset720p: '720p HD',
    preset1080p: '1080p FHD',
    preset1440p: '1440p QHD',
    preset2k: '2K DCI',
    preset4k: '4K UHD',
    preset8k: '8K UHD-2',

    benefitsTitle: 'Mengapa menggunakan WhiteScreen.vip',
    useCasesTitle: 'Penggunaan Umum',
    howToUseTitle: 'Cara Menggunakan Layar Putih',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    colorScreensTitle: 'Jelajahi layar warna lainnya',
    colorScreensDesc: 'Setiap warna memiliki halamannya sendiri untuk disimpan atau dibagikan.',
    moreColors: 'Warna lainnya',

    screenTestsEyebrow: 'Pengujian layar',
    screenTestsDesc: 'Warna solid dan pola uji untuk memeriksa piksel mati, keseragaman panel, dan akurasi warna.',
    effectsEyebrow: 'Visual & animasi',
    effectsDesc: 'Statik TV animasi, noise piksel, gradien dan efek visual di peramban Anda.',
    otherToolsEyebrow: 'Utilitas & simulasi',
    otherToolsDesc: 'Penghitung waktu mundur, stopwatch, lampu video call, dan simulasi layar aman.',

    toolsCatalogTitle: 'Semua Alat Layar & Utilitas',
    toolsCatalogDesc: 'Jelajahi katalog lengkap kami berisi 50+ alat peramban gratis tanpa unduhan.',
    filterTools: 'Filter alat...',
    showingTools: 'Menampilkan {count} alat',
    toolsCount: '{count} alat',
    noToolsMatch: 'Tidak ada alat yang cocok dengan “{query}”.',
    tryBroaderSearch: 'Coba kata kunci seperti "layar", "tes", "jam" atau "pembaruan", atau',
    browseAllTools: 'telusuri semua alat',

    howToUse: 'Cara menggunakan {tool}',
    commonUses: 'Penggunaan umum',
    relatedTools: 'Alat terkait',

    footerDesc: 'Uji layar gratis, efek visual, dan screensaver yang berjalan langsung di browser Anda.',
    about: 'Tentang Kami',
    contact: 'Kontak',
    privacyPolicy: 'Kebijakan Privasi',
    terms: 'Ketentuan Penggunaan',
    disclaimer: 'Penyangkalan',
    copyright: 'WhiteScreen.vip. Hak cipta dilindungi.',
    simulationsDisclaimer: 'Simulasi hanya untuk hiburan dan tidak berafiliasi dengan merek apa pun yang ditampilkan.',
  },

  tr: {
    home: 'Ana Sayfa',
    whiteScreen: 'Beyaz Ekran',
    screenTests: 'Ekran Testleri',
    effects: 'Efektler',
    visualEffects: 'Görsel Efektler',
    screensavers: 'Ekran Koruyucular',
    fakeScreens: 'Sahte Ekranlar',
    otherTools: 'Diğer Araçlar',
    utilities: 'Yardımcı Araçlar',
    guides: 'Rehberler',
    feedback: 'Geri Bildirim',
    searchTools: 'Araçları ara...',
    allTools: 'Tüm Araçlar',
    toolsDirectory: 'Araç Dizini',
    menu: 'Menü',
    closeMenu: 'Menüyü Kapat',
    navigation: 'Gezinme',
    selectLanguage: 'Dil Seçin',

    openFullscreen: 'Tam Ekran Aç',
    fullscreen: 'Tam Ekran',
    exitFullscreen: 'Tam Ekrandan Çık',
    pressEscToExit: 'Çıkmak için Esc tuşuna basın',
    customColor: 'Özel Renk',
    custom: 'Özel',
    resolution: 'Çözünürlük ve İndirme',
    customResolution: 'Özel Çözünürlük',
    width: 'Genişlik (px)',
    height: 'Yükseklik (px)',
    format: 'Biçim',
    downloadImage: 'Resmi İndir',
    downloading: 'Oluşturuluyor...',
    downloaded: 'İndirildi!',
    shortcuts: 'Kısayollar',
    shortcutF: 'tam ekran',
    shortcutNumbers: 'renk seç',
    shortcutArrows: 'değiştir',
    shortcutEsc: 'çıkış',
    exitHint: 'Çıkmak için Esc tuşuna basın veya çift tıklayın · Renk değiştirmek için ← → tuşlarını kullanın',

    prevPattern: 'Önceki desen',
    nextPattern: 'Sonraki desen',
    autoCycle: 'Otomatik döngü',
    stopAutoCycle: 'Döngüyü durdur',
    interval: 'Süre aralığı',
    gridOverlay: 'Izgara katmanı',
    patternCyclerHint: 'Desenleri değiştirmek için ekrana tıklayın veya ok tuşlarını kullanın.',

    white: 'Beyaz',
    black: 'Siyah',
    red: 'Kırmızı',
    green: 'Yeşil',
    blue: 'Mavi',
    yellow: 'Sarı',
    orange: 'Turuncu',
    pink: 'Pembe',
    purple: 'Mor',
    cyan: 'Camgöbeği',
    magenta: 'Macenta',
    gray: 'Gri',
    colorScreenSuffix: 'Ekran',

    heroTitle: 'Beyaz Ekran (White Screen)',
    heroIntro:
      'Tek tıkla ekranınızı temiz ve parlak bir beyaz ekrana dönüştürün. Ölü piksel testi, ışık kaynağı veya ekran temizliği için kullanın.',

    preset480p: '480p SD',
    preset720p: '720p HD',
    preset1080p: '1080p FHD',
    preset1440p: '1440p QHD',
    preset2k: '2K DCI',
    preset4k: '4K UHD',
    preset8k: '8K UHD-2',

    benefitsTitle: 'Neden WhiteScreen.vip',
    useCasesTitle: 'Yaygın Kullanım Alanları',
    howToUseTitle: 'Beyaz Ekran Nasıl Kullanılır',
    faqTitle: 'Sıkça Sorulan Sorular',
    colorScreensTitle: 'Diğer renkli ekranları keşfedin',
    colorScreensDesc: 'Her rengin yer işareti ekleyebileceğiniz veya paylaşabileceğiniz özel bir sayfası vardır.',
    moreColors: 'Diğer renkler',

    screenTestsEyebrow: 'Ekran testi araçları',
    screenTestsDesc: 'Ölü piksel, homojenlik, yanma ve renk doğruluğunu kontrol etmek için düz renkler ve test desenleri.',
    effectsEyebrow: 'Görsel efektler ve animasyonlar',
    effectsDesc: 'Hareketli TV karıncalanması, parazit ve gradyan efektleri doğrudan tarayıcınızda.',
    otherToolsEyebrow: 'Yardımcı araçlar ve simülasyonlar',
    otherToolsDesc: 'Zamanlayıcılar, kronometre, web kamerası ışığı ve güvenli sahte ekranlar.',

    toolsCatalogTitle: 'Tüm Ekran Araçları ve Yardımcılar',
    toolsCatalogDesc: '50’den fazla ücretsiz tarayıcı aracından oluşan eksiksiz kataloğumuza göz atın.',
    filterTools: 'Araçları filtrele...',
    showingTools: '{count} araç gösteriliyor',
    toolsCount: '{count} araç',
    noToolsMatch: '“{query}” ile eşleşen araç bulunamadı.',
    tryBroaderSearch: '"Ekran", "test", "saat" veya "güncelleme" gibi bir terim deneyin ya da',
    browseAllTools: 'tüm araçlara göz atın',

    howToUse: '{tool} nasıl kullanılır',
    commonUses: 'Yaygın kullanım alanları',
    relatedTools: 'İlgili araçlar',

    footerDesc: 'Tamamen tarayıcınızda çalışan ücretsiz ekran testleri, efektler ve ekran koruyucular.',
    about: 'Hakkımızda',
    contact: 'İletişim',
    privacyPolicy: 'Gizlilik Politikası',
    terms: 'Kullanım Koşulları',
    disclaimer: 'Sorumluluk Reddi',
    copyright: 'WhiteScreen.vip. Tüm hakları saklıdır.',
    simulationsDisclaimer: 'Simülasyonlar yalnızca eğlence amaçlıdır ve gösterilen hiçbir markayla bağlantılı değildir.',
  },
}

interface I18nContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (key: string, fallback?: string) => string
  dir: 'ltr' | 'rtl'
  languageInfo: LanguageInfo
}

const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback ?? key,
  dir: 'ltr',
  languageInfo: LANGUAGES[0],
})

const STORAGE_KEY = 'whitescreen_lang'

function getInitialLang(): LanguageCode {
  if (typeof window !== 'undefined') {
    const { lang } = extractLocaleAndPath(window.location.pathname)
    if (LANGUAGES.some((l) => l.code === lang)) {
      return lang
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null
      if (saved && LANGUAGES.some((l) => l.code === saved)) {
        return saved
      }
    } catch {
      // Fallback
    }
  }
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(getInitialLang)

  const currentInfo = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0]

  // Listen to browser navigation to synchronize language with the URL path
  useEffect(() => {
    const handleLocationChange = () => {
      const { lang } = extractLocaleAndPath(window.location.pathname)
      setLanguageState(lang)
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('app-navigation', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('app-navigation', handleLocationChange)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = currentInfo.dir
    }
  }, [language, currentInfo.dir])

  const setLanguage = useCallback(
    (newLang: LanguageCode) => {
      setLanguageState(newLang)
      try {
        localStorage.setItem(STORAGE_KEY, newLang)
      } catch {
        // Ignore in private mode
      }

      // Check current route and navigate to the equivalent localized path if needed
      if (typeof window !== 'undefined') {
        const { cleanPath, lang: currentUrlLang } = extractLocaleAndPath(window.location.pathname)
        if (currentUrlLang !== newLang) {
          const targetPath = getLocalizedPath(cleanPath, newLang)
          window.history.pushState({}, '', targetPath)
          window.dispatchEvent(new Event('app-navigation'))
        }
      }
    },
    [],
  )

  const t = useCallback(
    (key: string, fallback?: string) => {
      const langDict = TRANSLATIONS[language]
      if (langDict && langDict[key]) {
        return langDict[key]
      }
      const enDict = TRANSLATIONS.en
      if (enDict && enDict[key]) {
        return enDict[key]
      }
      return fallback ?? key
    },
    [language],
  )

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dir: currentInfo.dir,
        languageInfo: currentInfo,
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  return useContext(I18nContext)
}
