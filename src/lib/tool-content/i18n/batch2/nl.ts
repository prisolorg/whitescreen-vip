import type { ToolTranslations } from '../types'

export const nl: ToolTranslations = {
  'monitor-test': {
    glance: {
      answer:
        'Een monitortest is een reeks testbeelden op volledig scherm die controleren hoe goed je scherm kleur, contrast, scherpte en gamma weergeeft. Loop kleurverlopen, zwart- en witniveaus, tekstscherpte en geometriepatronen door om fouten te vinden of je beeld goed in te stellen.',
      features: ['Patronen voor verloop, gamma, contrast en scherpte', 'Stappen voor zwart- en witniveau', 'Controle van geometrie en tekstscherpte', 'Sneltoetsen om alle patronen te doorlopen'],
      benefits: ['Stel helderheid, contrast en scherpte goed in', 'Controleer een nieuwe of tweedehands monitor in minuten', 'Werkt in elke browser, ook op tv'],
    },
    steps: [
      'Zet je monitor op de eigen resolutie en zet browserzoom terug (Ctrl/Cmd + 0).',
      'Druk op F voor volledig scherm en wissel van patroon met de knoppen of pijltjestoetsen.',
      'Let op strepen in verlopen, rechte lijnen in rasters en scherpte of moiré in fijne patronen.',
      'Pas helderheid, contrast en scherpte van je monitor aan terwijl je elk patroon bekijkt.',
    ],
    useCases: [
      { title: 'Eerste instelling', description: 'Stel helderheid, contrast en scherpte in na het uitpakken.' },
      { title: 'Banding controleren', description: 'Vloeiende verlopen tonen stappen door een lage kleurdiepte.' },
      { title: 'Geometrie en schaal', description: 'Rasters tonen uitgerekte, bijgesneden of wazige beelden.' },
      { title: 'Kabel en ingang', description: 'Fijne patronen laten zien of een kabel of adapter het beeld verzacht.' },
    ],
    faqs: [
      { question: 'Is een online monitortest even goed als een kalibrator?', answer: 'Nee. De patronen helpen je op het oog te beoordelen en bij te stellen, maar nauwkeurige kleurkalibratie vraagt een colorimeter.' },
      {
        question: 'Waarom flikkeren fijne patronen of tonen ze moiré?',
        answer: 'Browserzoom, schaling van het systeem of een niet-eigen resolutie herschalen patronen van 1 pixel. Gebruik 100% zoom en de eigen resolutie.',
      },
      { question: 'Hoe hoort het gammapatroon eruit te zien?', answer: 'Van een afstand moeten gestreepte en effen vlakken ongeveer even helder lijken. Een groot verschil wijst op een gamma die afwijkt van de standaard 2,2.' },
    ],
  },
  'screen-resolution-test': {
    glance: {
      answer:
        'Een schermresolutietest toont de resolutie van je scherm in pixels, plus de viewport van de browser, de pixelverhouding en de kleurdiepte. De fysieke resolutie is de CSS-grootte keer de pixelverhouding: een 1920 × 1080-laptop op 125% schaal meldt 1536 × 864 CSS-pixels.',
      features: ['Scherm-, venster- en fysieke resolutie', 'Pixelverhouding en schaal', 'Kleurdiepte en oriëntatie', 'Werkt live bij als je het venster wijzigt of draait'],
      benefits: ['Controleer of je echt op 1080p, 1440p of 4K draait', 'Check de schaal van Windows of macOS', 'Direct, niets te installeren'],
    },
    steps: [
      'Open de pagina op het scherm dat je wilt controleren: de waarden werken live bij.',
      'Wijzig de venstergrootte of draai je apparaat om de waarden te zien veranderen.',
      'Druk op F voor volledig scherm om de volledige viewport te zien.',
      'Bekijk het patroon van 1 pixel: op de eigen resolutie en 100% zoom lijkt het een fijn, egaal grijs.',
    ],
    useCases: [
      { title: 'Je resolutie kennen', description: 'Vind snel je resolutie voor achtergronden of game-instellingen.' },
      { title: 'Responsive design', description: 'Ontwikkelaars controleren viewport en pixelverhouding op echte apparaten.' },
      { title: 'Schaalproblemen', description: 'Controleer of de systeemschaal de effectieve resolutie verandert.' },
      { title: 'Supportverzoeken', description: 'Deel exacte schermgegevens als je een websitefout meldt.' },
    ],
    faqs: [
      {
        question: 'Waarom is de schermgrootte kleiner dan de resolutie van mijn monitor?',
        answer: 'Browsers rekenen in CSS-pixels. Bij 150% schaal meldt een scherm van 3840 pixels breed 2560. Vermenigvuldig met de pixelverhouding voor de fysieke pixels.',
      },
      { question: 'Wat is de pixelverhouding?', answer: 'Het aantal fysieke pixels per CSS-pixel. Een waarde van 2 betekent een scherm met hoge dichtheid, zoals Retina.' },
      { question: 'Verandert browserzoom de waarden?', answer: 'Ja. Zoom verandert de viewport en de pixelverhouding. Zet hem op 100% voor exacte waarden.' },
    ],
  },
  'brown-noise-generator': {
    glance: {
      answer:
        'Een bruine-ruisgenerator speelt een diep, rommelend geluid waarvan het vermogen bij hoge tonen sterk afneemt, zoals een waterval of harde wind. Het is zachter dan witte ruis, dus veel mensen gebruiken het liever om te slapen, te focussen met ADHD en lage geluiden zoals verkeer of gesnurk te maskeren.',
      features: ['Echte bruine (Brownse) ruis, live gemaakt', 'Laagdoorlaat- en hoogdoorlaatfilter voor de klank', 'Volumeregeling en slaaptimer', 'Met één klik naar witte of roze ruis'],
      benefits: ['Zacht, basrijk geluid voor lange sessies', 'Populair voor focus en diep werk', 'Gratis, werkt offline na het laden'],
    },
    steps: [
      'Druk op Start. Er klinkt niets voordat je dat doet.',
      'Stel het volume in; bruine ruis klinkt zachter dan witte op hetzelfde niveau, dus zet het rustig hoger.',
      'Een laagdoorlaatfilter maakt het gerommel nog dieper, een hoogdoorlaatfilter haalt de diepste bas weg op kleine speakers.',
      'Kies eventueel een slaaptimer en een beeld.',
      'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Diepe focus', description: 'Veel mensen, ook met ADHD, zeggen dat bruine ruis helpt om aan het werk te komen.' },
      { title: 'Slapen', description: 'De zachte, lage toon kan urenlang aan blijven.' },
      { title: 'Lage geluiden maskeren', description: 'Dekt verkeersgerommel, voetstappen en het brommen van airco af.' },
      { title: 'Tot rust komen', description: 'Combineer het ’s avonds met een donker scherm.' },
    ],
    faqs: [
      {
        question: 'Wat is het verschil met witte en roze ruis?',
        answer: 'Bruine ruis verliest snel vermogen bij hogere frequenties (ongeveer 6 dB per octaaf) en is dus de diepste van de drie. Roze zit ertussen, wit is het helderst.',
      },
      { question: 'Waarom heet het bruine ruis?', answer: 'Naar de Brownse beweging, de willekeurige beweging van deeltjes, niet naar de kleur. Het heet ook rode ruis.' },
      { question: 'Waarom hoor ik het nauwelijks op mijn telefoon?', answer: 'Kleine speakers kunnen geen diepe bas weergeven. Gebruik een koptelefoon of grotere speakers, of een hoogdoorlaatfilter en iets meer volume.' },
    ],
  },
  'pink-noise-generator': {
    glance: {
      answer:
        'Een roze-ruisgenerator speelt geluid waarvan het vermogen per octaaf gelijkmatig afneemt, waardoor het gebalanceerd en zachter klinkt dan witte ruis, zoals gestage regen. Het wordt gebruikt om te slapen, te ontspannen en te studeren, en geluidstechnici controleren er de balans van speakers mee.',
      features: ['Echte roze ruis, gemaakt in je browser', 'Klankfilter, volume in decibel en slaaptimer', 'Live golfvorm of spectrum', 'Toetsenbord: spatiebalk voor afspelen of pauzeren'],
      benefits: ['Natuurlijk geluid als regen, fijn om bij te slapen', 'Referentiesignaal om speakers te controleren', 'Gratis en weinig reclame'],
    },
    steps: [
      'Druk op Start. Geluid begint nooit vanzelf.',
      'Stel het volume in decibel in.',
      'Verfijn de klank met het laagdoorlaat- of hoogdoorlaatfilter en de afsnijschuif.',
      'Kies eventueel een slaaptimer en een beeld.',
      'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Slapen', description: 'Een populair, minder scherp alternatief voor witte ruis voor de hele nacht.' },
      { title: 'Studeren', description: 'Een gebalanceerd achtergrondgeluid voor lange leessessies.' },
      { title: 'Speakers controleren', description: 'Roze ruis is het standaardsignaal om de balans van speakers te beluisteren.' },
      { title: 'Rustige ruimtes', description: 'Zacht achtergrondgeluid voor wachtkamers en studio’s.' },
    ],
    faqs: [
      { question: 'Wat is roze ruis?', answer: 'Roze ruis heeft in elk octaaf evenveel energie, dus elke stap omhoog klinkt iets zachter dan bij witte ruis. Het klinkt natuurlijker, zoals regen.' },
      { question: 'Helpt roze ruis bij het slapen?', answer: 'Veel mensen vinden het ontspannend en enkele kleine studies wijzen erop dat het de diepe slaap kan ondersteunen, maar het verschilt per persoon.' },
      { question: 'Kan ik er speakers mee testen?', answer: 'Voor een snelle luistertest wel. Voor nauwkeurige ruimtemetingen heb je meetsoftware en een gekalibreerde microfoon nodig.' },
    ],
  },
  'broken-screen': {
    glance: {
      answer:
        'De kapotte-schermgrap vult je beeldscherm met een realistisch beeld van gebarsten glas: inslagpunt, uitwaaierende barsten en eventueel inktvlekken in het LCD, met een glasgeluid. Laat het achter op de telefoon of computer van een vriend en onthul de grap met de sluitknop of Esc.',
      features: ['Realistische glasbarsten, telkens anders', 'Tik of klik voor extra inslagen', 'LCD-schade-effect en glasgeluid', 'Achtergronden: wallpaper, vergrendelscherm of zwart'],
      benefits: ['Klassieke, onschuldige grap die echt lijkt', 'Werkt op telefoons, tablets en pc’s', 'Geen app, er verandert niets aan het apparaat'],
    },
    steps: [
      'Kies een achtergrond: wallpaper, vergrendelscherm of zwart.',
      'Tik of klik ergens om het glas daar te laten barsten. Elke tik voegt een inslag toe.',
      'Laat het glasgeluid aan voor meer realisme, of zet het uit.',
      'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Onschuldige grappen', description: 'Een korte schrik voor een vriend, gevolgd door de onthulling.' },
      { title: 'Rekwisiet voor video', description: 'Toon een kapotte telefoon of monitor in een korte film zonder iets te breken.' },
      { title: '1 april', description: 'Een klassieke kantoorgrap die je volledig terugdraait.' },
      { title: 'Ontwerpreferentie', description: 'Bestudeer hoe inslagbarsten zich verspreiden, voor illustratie en VFX.' },
    ],
    faqs: [
      { question: 'Kan dit mijn scherm beschadigen?', answer: 'Nee. Het is alleen een afbeelding in je browser. Druk op Esc, tik op Wissen of sluit het tabblad.' },
      {
        question: 'Waarom lijkt het op echt glas?',
        answer: 'Een echte inslag geeft een verbrijzeld midden, lange stervormige barsten en ringen van korte barsten daartussen. Het effect tekent alle drie, met glans en schaduw op elke barst.',
      },
      { question: 'Hoe doe ik de grap verantwoord?', answer: 'Houd het kort, kies iemand die erom kan lachen, gebruik het nooit om geld of gegevens te krijgen en onthul de grap meteen.' },
    ],
  },
  'countdown-timer': {
    glance: {
      answer:
        'Een afteltimer telt in grote cijfers op volledig scherm af van een ingestelde tijd naar nul en waarschuwt je dan met een zachte flits en een optioneel geluid. Stel uren, minuten en seconden in voor lessen, examens, vergaderingen, presentaties, sporten of koken, en lees hem af van de andere kant van de kamer.',
      features: ['Grote cijfers op volledig scherm', 'Uren, minuten en seconden met voorinstellingen', 'Flits en optioneel geluid bij nul', 'Blijft nauwkeurig in tabbladen op de achtergrond'],
      benefits: ['Houdt vergaderingen en lessen op schema', 'Leesbaar tot achter in de zaal', 'Gratis, zonder app'],
    },
    steps: [
      'Kies een voorinstelling zoals 1, 5 of 25 minuten, of typ uren, minuten en seconden.',
      'Druk op Start of de spatiebalk. Druk opnieuw om te pauzeren, of R om te resetten.',
      'Zet het geluid aan als je dat wilt: het staat standaard uit.',
      'Druk op F voor volledig scherm zodat de hele zaal hem ziet. Esc om te stoppen.',
    ],
    useCases: [
      { title: 'In de klas', description: 'Time toetsen, opdrachten en pauzes op het digibord.' },
      { title: 'Presentaties', description: 'Houd sprekers op tijd met een zichtbare timer.' },
      { title: 'Pomodoro', description: 'Focusblokken van 25 minuten met korte pauzes.' },
      { title: 'Sporten en koken', description: 'Een grote timer die je van ver kunt lezen.' },
    ],
    faqs: [
      { question: 'Loopt de timer door in een tabblad op de achtergrond?', answer: 'Ja. Hij gaat uit van de echte tijd en blijft nauwkeurig, ook als de browser achtergrondtabbladen vertraagt.' },
      { question: 'Maakt hij geluid?', answer: 'Alleen als je het geluid aanzet. Anders flitst het scherm zacht als de tijd om is.' },
      { question: 'Wat is de maximale duur?', answer: 'Tot 99 uur, 59 minuten en 59 seconden.' },
    ],
  },
}
