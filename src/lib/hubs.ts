/**
 * Topic hub pages: one page per group of tools, linking every tool in the group with a short
 * answer-first introduction. They give each topic a page that can rank for the broad query
 * ("screen test", "online screensaver") and pass authority down to the individual tools.
 */
import type { LanguageCode } from './locale-routing'
import type { ToolCategoryId } from './tool-categories'
import { TOOLS, type Tool } from './tools'

export type Hub = {
  path: string
  /** The tool category the hub lists, or 'colors' for the solid color screens. */
  group: ToolCategoryId | 'colors'
  /** English H1: the plain keyword. */
  name: string
  metaTitle: string
  metaDescription: string
  /** Answer-first opening paragraph (English). */
  intro: string
  /** Longer explanation under the tool list (English). */
  details: { heading: string; text: string }[]
  faqs: { question: string; answer: string }[]
}

export const HUBS: Hub[] = [
  {
    path: '/color-screens',
    group: 'colors',
    name: 'Color Screens',
    metaTitle: 'Color Screens – Fullscreen Solid Colors in 1 Click (Free)',
    metaDescription:
      'Open a fullscreen white, black, red, green, blue or any solid color screen in one click. Test pixels, light a room or make a backdrop. Free.',
    intro:
      'Color screens fill your whole display with one solid color. Pick a color below, press F for fullscreen and every pixel shows exactly that color. They are used to find dead and stuck pixels, as a soft light source, as a chroma key backdrop and as a calm, distraction-free screen.',
    details: [
      {
        heading: 'Which color should I use?',
        text: 'Use white for light and cleaning, black to hide the screen or check backlight bleed, and pure red, green and blue to test each subpixel. Gray reveals uneven brightness, and warm orange or pink make gentle night and selfie lights.',
      },
      {
        heading: 'Exact color values',
        text: 'Every color screen uses an exact hex value (for example #FF0000 for red) so tests are reliable. You can still type any custom hex code and download any color as a PNG up to 8K.',
      },
    ],
    faqs: [
      {
        question: 'How do I make my whole screen one color?',
        answer: 'Open the color page and press F or click Fullscreen. Your browser hides its toolbars and shows only the color. Press Esc to exit.',
      },
      {
        question: 'Do color screens work on phones and TVs?',
        answer: 'Yes. They run in any modern browser, including Android, iPhone, smart TVs and game consoles. On iPhone Safari the color fills the browser window.',
      },
      {
        question: 'Can I download a solid color image?',
        answer: 'Yes. Every color page has a free PNG of that color, and the download panel makes any size from 720p to 8K.',
      },
    ],
  },
  {
    path: '/screen-tests',
    group: 'screen-tests',
    name: 'Screen Tests',
    metaTitle: 'Screen Tests – Check Your Monitor in Minutes (Free)',
    metaDescription:
      'Free online screen tests: dead pixels, refresh rate, ghosting, uniformity, burn-in, touch and color. Check any monitor, TV or phone in your browser.',
    intro:
      'Screen tests are fullscreen patterns and measurements that show how well your display works. Run them to find dead pixels, measure the real refresh rate in Hz, spot ghosting, backlight bleed and burn-in, check a touchscreen for dead zones and judge color, all in your browser with nothing to install.',
    details: [
      {
        heading: 'Which test should I run first?',
        text: 'On a new or second-hand display, start with the dead pixel test and the uniformity test: they catch the faults most often covered by a return or warranty. Gamers should add the refresh rate and ghosting tests; phone and tablet owners the touch screen test; OLED owners the burn-in tests.',
      },
      {
        heading: 'How accurate are browser tests?',
        text: 'Patterns are drawn with exact pixel values and timing comes from the browser’s frame clock, so results match what your screen really shows. They do not replace a hardware colorimeter for professional calibration.',
      },
    ],
    faqs: [
      {
        question: 'How do I test my monitor for problems?',
        answer: 'Clean the screen, then run the dead pixel test, the uniformity test in a dark room, and the refresh rate test. Together they take about five minutes.',
      },
      {
        question: 'Do these tests work on TVs and phones?',
        answer: 'Yes. Open the page in the device’s browser and go fullscreen. The touch screen test is made for phones and tablets.',
      },
      {
        question: 'Are the screen tests free?',
        answer: 'Yes. Every test is free, needs no sign-up and runs entirely on your device.',
      },
    ],
  },
  {
    path: '/screensavers',
    group: 'screensavers',
    name: 'Online Screensavers',
    metaTitle: 'Online Screensavers – Fullscreen in Your Browser (Free)',
    metaDescription:
      'Free online screensavers: Matrix digital rain, bouncing DVD logo, flip clock and motivational quotes. Run them fullscreen on any PC, TV or tablet.',
    intro:
      'Online screensavers run in your browser instead of being installed on your computer. Open one, go fullscreen and it plays on any device: a PC, Mac, Chromebook, smart TV or an old tablet on your desk. Choose the Matrix digital rain, the bouncing DVD logo, a retro flip clock or rotating motivational quotes.',
    details: [
      {
        heading: 'Why use a browser screensaver?',
        text: 'They work on devices that have no screensaver settings, such as smart TVs and Chromebooks, need no installation and keep the display awake while they run, which suits lobbies, desks and streams.',
      },
    ],
    faqs: [
      {
        question: 'Will an online screensaver stop my computer from sleeping?',
        answer: 'In fullscreen, supported browsers keep the screen awake with the Screen Wake Lock API, so the screensaver stays on until you exit.',
      },
      {
        question: 'Can I use these on a smart TV?',
        answer: 'Yes. Open the page in the TV’s browser and press the fullscreen button.',
      },
    ],
  },
  {
    path: '/prank-screens',
    group: 'fake-screens',
    name: 'Prank Screens',
    metaTitle: 'Prank Screens – Fake Update, BSOD & Meeting Screens (Free)',
    metaDescription:
      'Harmless prank screens: fake Windows and Mac updates, blue screen of death, hacked screen and fake meetings. Fullscreen, free, nothing is installed.',
    intro:
      'Prank screens are realistic, harmless fake screens that run in your browser: Windows, macOS, ChromeOS and Android update screens, the blue screen of death, a fake hacked screen and fake video meetings. Open one, go fullscreen and press Esc when the joke is over. Nothing is installed or changed on the device.',
    details: [
      {
        heading: 'Prank responsibly',
        text: 'Keep it short and reveal the joke. Never use a fake update or error screen to scare someone into paying money or giving access to a device: that is a scam, not a prank.',
      },
      {
        heading: 'Also useful as props',
        text: 'Film makers, streamers, teachers and escape rooms use these screens as believable props, because they look right on camera without touching a real system.',
      },
    ],
    faqs: [
      {
        question: 'Are prank screens safe?',
        answer: 'Yes. They are images and animations in a browser tab. They cannot install anything, read files or change settings.',
      },
      {
        question: 'How do I exit a prank screen?',
        answer: 'Press Esc, or move the mouse or tap the screen to reveal the close button. Closing the tab also works.',
      },
    ],
  },
  {
    path: '/visual-effects',
    group: 'effects',
    name: 'Visual Effects',
    metaTitle: 'Visual Effects – Static, Noise & Lighting Screens (Free)',
    metaDescription:
      'Free fullscreen visual effects: white, pink and brown noise, broken screen, hacker typer, ring light and gradients. Runs in any browser, no app.',
    intro:
      'Visual effects turn your screen into something other than a picture: a noise generator with TV static, a ring light or video call light, a cracked screen, a hacker terminal, animated noise, gradients and color cycles. Each one runs fullscreen in the browser and works on phones, computers and TVs.',
    details: [
      {
        heading: 'Light, sound and fun in one place',
        text: 'Use the ring light and Zoom lighting to light your face, the noise generators to focus or sleep, and the broken screen and hacker typer for pranks and videos.',
      },
    ],
    faqs: [
      {
        question: 'Are flashing effects safe?',
        answer: 'Fast flicker can trigger seizures in people with photosensitive epilepsy. Lower the speed or choose a calm effect if you are sensitive.',
      },
      {
        question: 'Do the noise generators use data?',
        answer: 'No. The sound is generated on your device, so nothing is streamed.',
      },
    ],
  },
  {
    path: '/online-timers',
    group: 'utilities',
    name: 'Online Timers',
    metaTitle: 'Online Timers – Big Fullscreen Timer & Stopwatch (Free)',
    metaDescription:
      'Free fullscreen online timers: countdown timer, Pomodoro timer and stopwatch with laps. Big digits you can read across a room. No app or sign-up.',
    intro:
      'Online timers show big, fullscreen digits you can read from across a room. Use the countdown timer for classes, meetings and exams, the Pomodoro timer for focused work in 25-minute blocks, and the stopwatch with laps for workouts and races. They keep accurate time even in background tabs.',
    details: [
      {
        heading: 'Accurate in the background',
        text: 'Every timer counts against your device clock rather than counting ticks, so it stays exact when the browser slows down hidden tabs, and the tab title shows the time left.',
      },
    ],
    faqs: [
      {
        question: 'Will the timer ring if the tab is in the background?',
        answer: 'Yes, as long as the tab stays open. The alarm or chime plays when time is up.',
      },
      {
        question: 'Can I show a timer on a projector or TV?',
        answer: 'Yes. Open it in the browser and press F for fullscreen.',
      },
    ],
  },
]

export const getHub = (path: string) => HUBS.find((hub) => hub.path === path)

/** The hub for a tool's category (color screens have their own hub). */
export const hubForTool = (tool: Tool) => HUBS.find((hub) => (tool.swatch ? hub.group === 'colors' : hub.group === tool.category))

export function hubTools(hub: Hub): Tool[] {
  return TOOLS.filter((tool) => (hub.group === 'colors' ? tool.swatch : tool.category === hub.group && !tool.swatch))
}

/** Localized hub name for the 'colors' hub; the others use the translated category name. */
export const COLOR_HUB_NAMES: Record<LanguageCode, [name: string, description: string]> = {
  en: ['Color Screens', 'Fullscreen solid colors for pixel tests, lighting and backdrops.'],
  es: ['Pantallas de colores', 'Colores sólidos a pantalla completa para probar píxeles, iluminar y usar de fondo.'],
  'pt-br': ['Telas coloridas', 'Cores sólidas em tela cheia para testar pixels, iluminar e usar como fundo.'],
  de: ['Farbbildschirme', 'Vollflächige Farben im Vollbild für Pixeltests, Licht und Hintergründe.'],
  fr: ['Écrans de couleur', 'Couleurs unies en plein écran pour tester les pixels, éclairer et servir de fond.'],
  it: ['Schermi colorati', 'Colori pieni a schermo intero per test dei pixel, illuminazione e sfondi.'],
  nl: ['Kleurschermen', 'Effen kleuren op volledig scherm voor pixeltests, verlichting en achtergronden.'],
  id: ['Layar warna', 'Warna solid layar penuh untuk tes piksel, penerangan, dan latar belakang.'],
  tr: ['Renkli ekranlar', 'Piksel testi, aydınlatma ve arka plan için tam ekran düz renkler.'],
}

/** Translated URL slugs for the hubs. */
export const HUB_SLUGS: Partial<Record<LanguageCode, Record<string, string>>> = {
  es: { 'color-screens': 'pantallas-de-colores', 'screen-tests': 'pruebas-de-pantalla', screensavers: 'salvapantallas', 'prank-screens': 'pantallas-de-broma', 'visual-effects': 'efectos-visuales', 'online-timers': 'temporizadores-online' },
  'pt-br': { 'color-screens': 'telas-coloridas', 'screen-tests': 'testes-de-tela', screensavers: 'protetores-de-tela', 'prank-screens': 'telas-de-pegadinha', 'visual-effects': 'efeitos-visuais', 'online-timers': 'temporizadores-online' },
  de: { 'color-screens': 'farbbildschirme', 'screen-tests': 'bildschirmtests', screensavers: 'bildschirmschoner', 'prank-screens': 'scherz-bildschirme', 'visual-effects': 'visuelle-effekte', 'online-timers': 'online-timer' },
  fr: { 'color-screens': 'ecrans-de-couleur', 'screen-tests': 'tests-ecran', screensavers: 'economiseurs-ecran', 'prank-screens': 'ecrans-blagues', 'visual-effects': 'effets-visuels', 'online-timers': 'minuteurs-en-ligne' },
  it: { 'color-screens': 'schermi-colorati', 'screen-tests': 'test-schermo', screensavers: 'salvaschermi', 'prank-screens': 'schermi-scherzo', 'visual-effects': 'effetti-visivi', 'online-timers': 'timer-online' },
  nl: { 'color-screens': 'kleurschermen', 'screen-tests': 'schermtests', screensavers: 'schermbeveiligingen', 'prank-screens': 'grapschermen', 'visual-effects': 'visuele-effecten', 'online-timers': 'online-timers' },
  id: { 'color-screens': 'layar-warna', 'screen-tests': 'tes-layar', screensavers: 'screensaver-online', 'prank-screens': 'layar-prank', 'visual-effects': 'efek-visual', 'online-timers': 'timer-online' },
  tr: { 'color-screens': 'renkli-ekranlar', 'screen-tests': 'ekran-testleri', screensavers: 'ekran-koruyucular', 'prank-screens': 'saka-ekranlari', 'visual-effects': 'gorsel-efektler', 'online-timers': 'online-zamanlayicilar' },
}
