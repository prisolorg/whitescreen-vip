/**
 * English H1 overrides for tool pages whose main keyword is broader than the tool's own name. The tool keeps
 * its name everywhere else (menus, galleries, hubs). Small on purpose: the hydrated tool page imports it.
 */
export const TOOL_H1_EN: Record<string, string> = {
  // Owns "fake windows update screen" (13.5K/mo); the Windows 11 and XP versions have their own pages.
  'fake-windows-10-update': 'Fake Windows Update Screen',
  // "fps test" (22.5K/mo) far outranks "frame rate test" (1K/mo).
  'frame-rate-test': 'FPS Test',
  // "hacked screen" (1.4K/mo) and "hacked screen prank"; the tool keeps its Simulator name elsewhere.
  'hacked-screen': 'Hacked Screen Prank',
  // "screen resolution" 7.9K, "my screen resolution" 5.9K, "what is my screen resolution" 4.5K vs 160 for the tool name.
  'screen-resolution-test': 'What Is My Screen Resolution?',
  // "screen test" 28.6K vs "monitor test" 6.7K.
  'monitor-test': 'Screen Test',
  // "oled test" 3.3K; "oled gray test" has no measurable volume.
  'oled-gray-test': 'OLED Test',
  // "tv color bars" 1.3K; "no signal screen" has no measurable volume.
  'no-signal-screen': 'TV Color Bars & No Signal Screen',
  // "grey screen" 5.5K vs "gray screen" 2.5K; the URL and menus keep Gray.
  'gray-screen': 'Grey Screen',
  // "matrix screen" 390 vs "matrix screensaver" 200; the tool keeps its Screensaver name elsewhere.
  'matrix-screensaver': 'Matrix Screen',
  // Plural is the natural search form ("motivational quotes"); the page also targets "motivational" (2.4K).
  'motivational-quote-screensaver': 'Motivational Quotes Screensaver',
  // Add "Screen": "update screen" and "android update screen" are how people search.
  'fake-android-update': 'Fake Android Update Screen',
  'fake-windows-xp-update': 'Fake Windows XP Update Screen',
  // "fake chromebook" 140, "chromebook update/updating screen" 220 vs "fake chrome os update" ~0.
  'fake-chrome-os-update': 'Fake Chromebook Update Screen',
}

/** English "Quick answer" headings where "What is the {H1}?" would read badly. */
export const TOOL_GLANCE_HEADING_EN: Record<string, string> = {
  'screen-resolution-test': 'What Is Screen Resolution?',
  'monitor-test': 'What Is a Screen Test?',
  'oled-gray-test': 'What Is an OLED Test?',
  'no-signal-screen': 'What Are TV Color Bars and No Signal Screens?',
}

/**
 * H1 overrides for translated tool pages: the natural search keyword the translated guide's H2s use, where the
 * tool's translated name is clunkier (e.g. "Vollbild-Stoppuhr" → "Online-Stoppuhr"). URLs and menu names stay.
 */
export const TOOL_H1_I18N: Partial<Record<string, Record<string, string>>> = {
  de: {
    stopwatch: 'Online-Stoppuhr',
    'fake-blue-screen-of-death': 'Fake Bluescreen',
  },
  es: {
    stopwatch: 'Cronómetro online',
    'broken-screen': 'Pantalla rota',
    'flip-clock-screensaver': 'Reloj flip',
    'ring-light': 'Aro de luz',
    'fake-blue-screen-of-death': 'Pantalla azul de la muerte',
    'fake-zoom-meeting': 'Reunión falsa de Zoom',
    'fake-windows-10-update': 'Actualización falsa de Windows 10',
    'fake-windows-11-update': 'Actualización falsa de Windows 11',
    'fake-mac-update': 'Actualización falsa de Mac',
  },
  fr: {
    stopwatch: 'Chronomètre en ligne',
    'countdown-timer': 'Minuteur',
    'broken-screen': 'Écran cassé',
    'flip-clock-screensaver': 'Horloge flip',
    'ring-light': 'Ring light',
    'fake-blue-screen-of-death': 'Écran bleu de la mort',
    'fake-zoom-meeting': 'Fausse réunion Zoom',
    'fake-windows-10-update': 'Fausse mise à jour Windows',
    'hacked-screen': 'Écran piraté',
    'screen-resolution-test': 'Résolution d’écran',
  },
  it: {
    'broken-screen': 'Schermo rotto',
    'fake-zoom-meeting': 'Finta riunione Zoom',
  },
  nl: {
    stopwatch: 'Online stopwatch',
    'countdown-timer': 'Aftelklok',
    'broken-screen': 'Gebroken scherm',
    'flip-clock-screensaver': 'Klapklok',
    'ring-light': 'Ringlamp',
    'fake-blue-screen-of-death': 'Blue screen of death',
    'hacked-screen': 'Gehackt scherm',
  },
  'pt-br': {
    stopwatch: 'Cronômetro online',
    'broken-screen': 'Tela quebrada',
  },
  tr: {
    'broken-screen': 'Kırık ekran',
  },
}

/** The H1 a tool page shows in a language: the English or translated override, else the tool's (translated) name. */
export const toolH1 = (slug: string, language: string, fallback: string) =>
  (language === 'en' ? TOOL_H1_EN[slug] : TOOL_H1_I18N[language]?.[slug]) || fallback
