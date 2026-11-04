import type { TopicTranslation } from './types'

export const nl: TopicTranslation = {
  hubs: {
    '/color-screens': {
      intro:
        'Kleurschermen vullen je hele beeldscherm met één effen kleur. Kies een kleur, druk op F voor volledig scherm en elke pixel toont precies die kleur. Ze helpen dode en vastzittende pixels te vinden en dienen als zacht licht, als chroma-key-achtergrond en als rustig scherm zonder afleiding.',
      details: [
        {
          heading: 'Welke kleur moet ik gebruiken?',
          text: 'Wit voor licht en schoonmaken, zwart om het scherm te verbergen of lichtlekken te zien, en puur rood, groen en blauw om elke subpixel te testen. Grijs toont ongelijke helderheid, en warm oranje of roze zijn fijn als nachtlampje of selfielicht.',
        },
        {
          heading: 'Exacte kleurwaarden',
          text: 'Elk kleurscherm gebruikt een exacte hexwaarde (bijvoorbeeld #FF0000 voor rood), zodat tests betrouwbaar zijn. Je kunt toch elke eigen hexcode invoeren en elke kleur als PNG tot 8K downloaden.',
        },
      ],
      faqs: [
        { question: 'Hoe maak ik mijn hele scherm één kleur?', answer: 'Open de kleurpagina en druk op F of klik op Volledig scherm. De browser verbergt zijn balken en toont alleen de kleur. Esc om te stoppen.' },
        { question: 'Werken kleurschermen op telefoons en tv’s?', answer: 'Ja. Ze werken in elke moderne browser, ook op Android, iPhone, smart-tv’s en spelconsoles. In Safari op de iPhone vult de kleur het browservenster.' },
        { question: 'Kan ik een effen kleurafbeelding downloaden?', answer: 'Ja. Elke kleurpagina heeft een gratis PNG van die kleur, en het downloadpaneel maakt elk formaat van 720p tot 8K.' },
      ],
    },
    '/screen-tests': {
      intro:
        'Schermtests zijn patronen en metingen op volledig scherm die laten zien hoe goed je beeldscherm werkt. Vind dode pixels, meet de echte verversingssnelheid in Hz, zie ghosting, lichtlekken en inbranden, controleer een touchscreen op dode zones en beoordeel kleuren, allemaal in je browser zonder iets te installeren.',
      details: [
        {
          heading: 'Welke test eerst?',
          text: 'Begin bij een nieuw of tweedehands scherm met de dode-pixeltest en de uniformiteitstest: die vinden de fouten die het vaakst onder retour of garantie vallen. Gamers voegen verversingssnelheid en ghosting toe, telefoon- en tabletbezitters de touchscreentest en OLED-bezitters de inbrandtests.',
        },
        {
          heading: 'Hoe nauwkeurig zijn browsertests?',
          text: 'De patronen gebruiken exacte pixelwaarden en de timing komt van de beeldklok van de browser, dus de uitkomst klopt met wat je scherm echt toont. Ze vervangen geen colorimeter voor professionele kalibratie.',
        },
      ],
      faqs: [
        { question: 'Hoe controleer ik mijn monitor op problemen?', answer: 'Maak het scherm schoon en doe de dode-pixeltest, de uniformiteitstest in een donkere kamer en de verversingssnelheidstest. Samen ongeveer vijf minuten.' },
        { question: 'Werken de tests op tv’s en telefoons?', answer: 'Ja. Open de pagina in de browser van het apparaat en zet volledig scherm aan. De touchscreentest is gemaakt voor telefoons en tablets.' },
        { question: 'Zijn de schermtests gratis?', answer: 'Ja. Elke test is gratis, zonder account, en draait volledig op je eigen apparaat.' },
      ],
    },
    '/screensavers': {
      intro:
        'Online schermbeveiligingen draaien in je browser in plaats van op je computer te worden geïnstalleerd. Open er een, zet volledig scherm aan en hij draait op elk apparaat: pc, Mac, Chromebook, smart-tv of een oude tablet op je bureau. Kies de digitale regen uit The Matrix, het stuiterende dvd-logo, een retro klapklok of motiverende citaten.',
      details: [
        {
          heading: 'Waarom een schermbeveiliging in de browser?',
          text: 'Hij werkt op apparaten zonder schermbeveiligingsinstellingen, zoals smart-tv’s en Chromebooks, hoeft niet geïnstalleerd te worden en houdt het scherm aan zolang hij draait: ideaal voor recepties, bureaus en streams.',
        },
      ],
      faqs: [
        { question: 'Voorkomt een online schermbeveiliging dat mijn computer in slaap valt?', answer: 'Op volledig scherm houden ondersteunde browsers het scherm aan met de Screen Wake Lock API, dus hij blijft draaien tot je stopt.' },
        { question: 'Kan ik ze op een smart-tv gebruiken?', answer: 'Ja. Open de pagina in de browser van de tv en druk op de knop voor volledig scherm.' },
      ],
    },
    '/prank-screens': {
      intro:
        'Grapschermen zijn realistische, onschuldige nepschermen in je browser: updateschermen van Windows, macOS, ChromeOS en Android, het blue screen of death, een gehackt scherm en nepvergaderingen. Open er een, zet volledig scherm aan en druk op Esc als de grap voorbij is. Er wordt niets geïnstalleerd of gewijzigd.',
      details: [
        {
          heading: 'Verantwoord grappen maken',
          text: 'Houd het kort en onthul de grap. Gebruik een nepupdate of nepfout nooit om iemand bang te maken zodat die betaalt of toegang tot een apparaat geeft: dat is oplichting, geen grap.',
        },
        {
          heading: 'Ook als rekwisiet',
          text: 'Filmmakers, streamers, docenten en escaperooms gebruiken deze schermen als geloofwaardig rekwisiet, omdat ze er op camera echt uitzien zonder een echt systeem aan te raken.',
        },
      ],
      faqs: [
        { question: 'Zijn grapschermen veilig?', answer: 'Ja. Het zijn afbeeldingen en animaties in een browsertabblad. Ze kunnen niets installeren, geen bestanden lezen en geen instellingen wijzigen.' },
        { question: 'Hoe sluit ik een grapscherm?', answer: 'Druk op Esc, of beweeg de muis of tik op het scherm om de sluitknop te tonen. Het tabblad sluiten werkt ook.' },
      ],
    },
    '/visual-effects': {
      intro:
        'Visuele effecten maken van je scherm meer dan een plaatje: een ruisgenerator met tv-ruis, een ringlamp of videobellicht, een kapot scherm, een hackerterminal, bewegende ruis, kleurverlopen en kleurwisselingen. Alles draait op volledig scherm in de browser, op telefoons, computers en tv’s.',
      details: [
        {
          heading: 'Licht, geluid en plezier op één plek',
          text: 'Gebruik de ringlamp en Zoom-verlichting om je gezicht te belichten, de ruisgeneratoren om te focussen of te slapen, en het kapotte scherm en de Hacker Typer voor grappen en video’s.',
        },
      ],
      faqs: [
        { question: 'Zijn knipperende effecten veilig?', answer: 'Snel flikkeren kan aanvallen uitlokken bij mensen met fotosensitieve epilepsie. Verlaag de snelheid of kies een rustig effect als je gevoelig bent.' },
        { question: 'Gebruiken de ruisgeneratoren data?', answer: 'Nee. Het geluid wordt op je apparaat gemaakt, er wordt niets gestreamd.' },
      ],
    },
    '/online-timers': {
      intro:
        'Online timers tonen grote cijfers op volledig scherm die je van de andere kant van de kamer kunt lezen. Gebruik de afteltimer voor lessen, vergaderingen en examens, de pomodorotimer voor blokken van 25 minuten en de stopwatch met rondetijden voor sport en wedstrijden. Ze blijven nauwkeurig, ook in tabbladen op de achtergrond.',
      details: [
        {
          heading: 'Nauwkeurig op de achtergrond',
          text: 'Elke timer rekent met de klok van je apparaat in plaats van tikken te tellen. Zo blijft hij exact als de browser verborgen tabbladen vertraagt, en de tabbladtitel toont de resterende tijd.',
        },
      ],
      faqs: [
        { question: 'Gaat de timer af als het tabblad op de achtergrond staat?', answer: 'Ja, zolang het tabblad open blijft. Het signaal klinkt als de tijd om is, als het aanstaat.' },
        { question: 'Kan ik een timer op een beamer of tv tonen?', answer: 'Ja. Open hem in de browser en druk op F voor volledig scherm.' },
      ],
    },
  },
  colorAnswer: {
    template: '{subject} vult je hele beeldscherm met puur {word} ({hex}). Klik op Volledig scherm of druk op F en elke pixel toont dezelfde kleur, zonder balken of afleiding. {tail}',
    features: ['Puur {word} {hex} of elke hexkleur', 'Volledig scherm met één klik en helderheidsregeling', 'Gratis PNG-download van 720p tot 8K'],
    benefits: ['Werkt direct op telefoon, laptop, monitor en smart-tv', 'Geen app, geen account, niets te installeren'],
  },
  colors: {
    red: { subject: 'Een rood scherm', word: 'rood', tail: 'Alleen de rode subpixels branden, dus dode of vastzittende groene en blauwe subpixels vallen meteen op. Het werkt ook als rood nachtlampje dat je nachtzicht spaart.', feature: 'Pijltjestoetsen wisselen tussen rood, groen en blauw', benefit: 'Vindt vastzittende groene of blauwe subpixels in seconden' },
    green: { subject: 'Een groen scherm', word: 'groen', tail: 'Makers gebruiken het als snelle green screen, en omdat alleen de groene subpixels branden, vallen defecte rode of blauwe subpixels op bij een pixeltest.', feature: 'Fel chroma-groen voor OBS, Premiere of CapCut', benefit: 'Een gratis green screen als je geen groen doek hebt' },
    blue: { subject: 'Een blauw scherm', word: 'blauw', tail: 'Het laat alleen de blauwe subpixels branden voor pixeltests en dient ook als blauwe chroma-achtergrond of rustig, koel licht voor foto’s.', feature: 'Puur blauw voor subpixeltests en bluescreen-keying', benefit: 'Controleert het blauwe kanaal en maakt vastzittende pixels zichtbaar' },
    yellow: { subject: 'Een geel scherm', word: 'geel', tail: 'Geel laat rode en groene subpixels samen branden, zodat een dode blauwe subpixel of een kleurzweem duidelijk te zien is. Ook een warm, vrolijk licht voor foto’s.', feature: 'Exact geel met rood en groen op volle sterkte', benefit: 'Toont dode blauwe subpixels en ongelijke kleurzweem' },
    orange: { subject: 'Een oranje scherm', word: 'oranje', tail: 'De warme tint bevat minder blauw licht dan wit, daarom gebruiken veel mensen het als zacht nachtlampje, zonsondergangsfeer of warm opvullicht voor video.', feature: 'Helderheidsregeling voor een gedempt, warm nachtlampje', benefit: 'Warm licht met veel minder blauw dan een wit scherm' },
    pink: { subject: 'Een roze scherm', word: 'roze', tail: 'Felroze geeft zacht, flatteus licht voor selfies en make-up en zorgt voor sfeer bij feestjes, streams en in je kamer.', feature: 'Felroze als standaard, met lichtere of donkerdere tinten', benefit: 'Zacht, flatteus licht voor selfies en make-up' },
    purple: { subject: 'Een paars scherm', word: 'paars', tail: 'Paars mengt rood en blauw licht: een opvallend sfeerlicht voor streams, gamesetups en feestjes, en een snelle check of het groene kanaal echt uit is.', feature: 'Fel paars met tinten van lavendel tot violet', benefit: 'Direct sfeerlicht voor streams en feestjes' },
    cyan: { subject: 'Een cyaan scherm', word: 'cyaan', tail: 'Cyaan laat groen en blauw samen branden, zodat een vastzittende rode subpixel of een ontbrekend kanaal snel opvalt. Ook een koel, helder accentlicht.', feature: 'Puur cyaan om het groene en blauwe kanaal te controleren', benefit: 'Toont defecte rode subpixels en kleurzweem' },
    magenta: { subject: 'Een magenta scherm', word: 'magenta', tail: 'Magenta laat rood en blauw branden terwijl groen uit blijft, zodat vastzittende groene subpixels en een groene zweem bij schermtests direct opvallen.', feature: 'Puur magenta voor het rode en blauwe kanaal', benefit: 'Toont vastzittende groene subpixels en groene zweem' },
    gray: { subject: 'Een grijs scherm', word: 'grijs', tail: 'Middengrijs is de standaardmanier om het dirty-screen-effect, clouding, vignettering en banding te zien die felle kleuren verbergen.', feature: 'Wissel tussen licht-, midden- en donkergrijs', benefit: 'Toont uniformiteitsproblemen en dirty-screen-effect' },
  },
}
