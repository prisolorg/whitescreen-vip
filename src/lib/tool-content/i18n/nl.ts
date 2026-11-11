import type { ToolTranslations } from './types'

export const nl: ToolTranslations = {
  'white-screen': {
    glance: {
      answer:
        'Een wit scherm vult je hele beeldscherm met puur wit (#FFFFFF). Klik op Volledig scherm of druk op F en elke pixel toont dezelfde kleur, zonder balken of afleiding. Op volle helderheid is het het felste licht dat je scherm kan geven: handig als licht voor videobellen en foto’s, om je monitor schoon te maken, tekeningen over te trekken en dode pixels te vinden.',
      features: [
        'Puur wit #FFFFFF of elke hexkleur',
        'Volledig scherm met één klik en helderheidsregeling',
        'Kleurtemperatuur van 2700 K (warm) tot 9300 K (koel)',
        'Gratis PNG-download van 720p tot 8K',
      ],
      benefits: [
        'Direct zacht licht voor gesprekken, selfies en overtrekken',
        'Werkt op telefoon, laptop, monitor en smart-tv',
        'Geen app, geen account, niets te installeren',
      ],
    },
  },
  'black-screen': {
    glance: {
      answer:
        'Een zwart scherm maakt je hele beeldscherm met één klik puur zwart (#000000). Op OLED-schermen gaan de pixels helemaal uit, dus zo verberg je het snelst wat er op je scherm staat, controleer je lichtlekken of bespaar je stroom.',
      features: [
        'Puur zwart #000000 of elke eigen kleur',
        'Volledig scherm met één klik en helderheidsregeling',
        'Houdt het scherm aan in volledig scherm',
        'Gratis PNG-download van 720p tot 8K',
      ],
      benefits: ['Toont lichtlekken, IPS-glow en vastzittende pixels', 'Bespaart stroom op OLED', 'Gratis, niets te installeren'],
    },
  },
  'dead-pixel-test': {
    glance: {
      answer:
        'Een dode-pixeltest vult je scherm na elkaar met effen kleuren, zodat defecte pixels opvallen. Een dode pixel blijft zwart op elke kleur, een vastzittende pixel blijft één felle kleur en een hete pixel blijft wit. De volledige controle duurt ongeveer een minuut op elke monitor, laptop, tv of telefoon.',
      features: [
        'Volledige vlakken in wit, zwart, rood, groen, blauw en grijs',
        'Automatisch wisselen of met de pijltjestoetsen',
        'Voor LCD-, IPS-, VA-, OLED- en mini-LED-panelen',
        'Tips om dode, vastzittende en hete pixels te onderscheiden',
      ],
      benefits: [
        'Vind defecten voordat de retourtermijn verloopt',
        'Controleer een tweedehands monitor of telefoon voor je betaalt',
        'Gratis, privé, niets te installeren',
      ],
    },
    steps: [
      'Maak eerst je scherm schoon, zodat je stof niet aanziet voor een defecte pixel.',
      'Druk op F voor volledig scherm en gebruik de pijltjestoetsen, klik of zet automatisch wisselen aan.',
      'Bekijk op elke kleur rustig het hele paneel. Een vergrootglas of de camerazoom van je telefoon helpt.',
      'Donkere stipjes op lichte kleuren wijzen op dode pixels; lichte of gekleurde stipjes op zwart op vastzittende of hete pixels.',
    ],
    useCases: [
      { title: 'Nieuwe monitor', description: 'Controleer een nieuwe monitor, laptop of tv binnen de retourtermijn.' },
      { title: 'Tweedehands kopen', description: 'Test een gebruikte telefoon of laptop voordat je betaalt.' },
      { title: 'Bewijs voor garantie', description: 'Fotografeer het defect op een effen kleur voor je claim.' },
      { title: 'Periodieke controle', description: 'Controleer af en toe of er geen nieuwe defecten zijn bijgekomen.' },
    ],
    faqs: [
      {
        question: 'Wat is het verschil tussen een dode en een vastzittende pixel?',
        answer:
          'Een dode pixel blijft donker op elke kleur. Een vastzittende pixel blijft in één kleur branden, zoals een rood stipje op zwart. Een hete pixel blijft wit. Vastzittende pixels herstellen soms; dode bijna nooit.',
      },
      {
        question: 'Kan deze tool dode pixels repareren?',
        answer:
          'Nee. De test maakt defecten alleen zichtbaar. Snel wisselende kleuren worden soms aangeraden voor vastzittende pixels, maar zonder garantie, en een dode pixel is een hardwarefout.',
      },
      {
        question: 'Hoe meld ik een dode pixel?',
        answer:
          'Maak een scherpe foto van het defect op de kleur waarop het het best te zien is, noteer de plek en neem met je aankoopbewijs contact op met de fabrikant of winkel.',
      },
    ],
  },
  'screen-refresh-rate-test': {
    glance: {
      answer:
        'Een verversingssnelheidstest meet hoe vaak per seconde je scherm het beeld opnieuw tekent, in hertz (Hz). Hij timet de frames van je browser en toont 60, 75, 120, 144, 165 of 240 Hz, zodat je kunt controleren of je snelle monitor echt op de beloofde snelheid draait.',
      features: [
        'Live meting in Hz met de dichtstbijzijnde standaardwaarde',
        'Gemiddelde, minimale en maximale frametijd',
        'Opnieuw meten na het wijzigen van instellingen',
        'Voor monitoren, laptops, telefoons en tablets',
      ],
      benefits: [
        'Controleer dat je 144- of 240-Hz-monitor niet op 60 Hz staat',
        'Check kabel, poort en de instelling in Windows of macOS',
        'Resultaat in seconden, zonder download',
      ],
    },
    steps: [
      'Open de pagina en wacht een of twee seconden tot de meting stabiel is.',
      'Lees de waarde in Hz en de dichtstbijzijnde standaardwaarde af.',
      'Toont een snelle monitor 60 Hz, controleer dan de beeldscherminstellingen en de kabel en test opnieuw.',
      'Druk op F of tik twee keer voor volledig scherm, en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Nieuwe monitor', description: 'Controleer of een 144- of 240-Hz-monitor echt zo snel draait.' },
      { title: 'Kabel en poort', description: 'Oudere HDMI-kabels of -poorten beperken je soms tot 60 Hz.' },
      { title: 'Laptop op batterij', description: 'Veel laptops schakelen op batterij naar 60 Hz.' },
      { title: 'Telefoons en tablets', description: 'Kijk of adaptieve 90/120-Hz-standen actief zijn.' },
    ],
    faqs: [
      {
        question: 'Waarom toont mijn 144-Hz-monitor 60 Hz?',
        answer:
          'De verversingssnelheid stel je in bij de beeldscherminstellingen van je systeem, en de kabel moet het aankunnen (DisplayPort of HDMI 2.0 en hoger). Kijk ook of het browservenster op de juiste monitor staat.',
      },
      {
        question: 'Waarom schommelt het getal?',
        answer:
          'Drukke tabbladen, energiebesparing en variabele verversing (FreeSync, G-Sync, ProMotion) veranderen de frametiming. De meting gebruikt de mediaan van recente frames om dat af te vlakken.',
      },
      {
        question: 'Is verversingssnelheid hetzelfde als FPS?',
        answer:
          'Nee. De verversingssnelheid is hoe vaak het scherm bijwerkt; FPS is hoeveel nieuwe beelden een game of video levert. Je ziet nooit meer beelden dan je verversingssnelheid toestaat.',
      },
    ],
  },
  'touch-screen-test': {
    glance: {
      answer:
        'Een touchscreentest controleert of elk deel van je touchscreen reageert. Tik elk vakje van een raster aan om dode zones te vinden, teken lijnen om onderbrekingen of sprongen te zien en zet meerdere vingers tegelijk neer om te zien hoeveel aanraakpunten je telefoon of tablet ondersteunt.',
      features: [
        'Raster dat elk aangeraakt vakje markeert, met dekking in %',
        'Tekenmodus om gaten, sprongen en spookaanrakingen te vinden',
        'Multitouchmodus die gelijktijdige vingers telt',
        'Werkt met vinger, stylus en muis',
      ],
      benefits: ['Vind dode zones na een val of reparatie', 'Test een tweedehands telefoon of tablet voor je koopt', 'Geen app nodig'],
    },
    steps: [
      'Kies het raster en veeg langzaam over elk vakje tot de dekking 100% is.',
      'Vakjes die na meerdere pogingen niet vollopen, wijzen op een dode zone.',
      'Schakel naar Tekenen en trek langzame lijnen; onderbrekingen of sprongen betekenen gemiste aanrakingen.',
      'Gebruik Multitouch en zet meerdere vingers neer om te zien hoeveel er tegelijk worden herkend.',
    ],
    useCases: [
      { title: 'Plekken zonder reactie', description: 'Vind precies waar je telefoon of tablet aanrakingen negeert.' },
      { title: 'Na een reparatie', description: 'Test de nieuwe digitizer voordat je het toestel meeneemt.' },
      { title: 'Tweedehands kopen', description: 'Test het hele oppervlak in een minuut.' },
      { title: 'Spookaanrakingen', description: 'Let op aanraakpunten die verschijnen zonder vinger.' },
    ],
    faqs: [
      {
        question: 'Hoeveel aanraakpunten moet mijn scherm ondersteunen?',
        answer: 'De meeste telefoons en tablets volgen 5 tot 10 vingers. De pagina toont het aantal dat je browser meldt en het maximum dat tegelijk is gezien.',
      },
      {
        question: 'Werkt het met een muis of stylus?',
        answer: 'Ja. Ook muis en pen tekenen, dus je kunt een stylus op dezelfde manier testen.',
      },
      {
        question: 'Wat veroorzaakt dode zones?',
        answer: 'Gebarsten glas, een beschadigde digitizerkabel, vocht of een screenprotector met luchtbellen. Verwijder eerst de protector en test opnieuw.',
      },
    ],
  },
  'white-noise-generator': {
    glance: {
      answer:
        'Een witte-ruisgenerator speelt een constant gesis dat alle hoorbare frequenties even sterk bevat. Dat gelijkmatige geluid maskeert stemmen, verkeer en plotselinge geluiden. Daarom gebruiken mensen het om te focussen, te studeren, baby’s te kalmeren en te slapen. Zet het zacht en gebruik ’s nachts een timer.',
      features: [
        'Witte, roze en bruine ruis in één speler',
        'Klankfilter en volume in decibel',
        'Slaaptimer met zachte fade-out',
        'Optioneel beeld: tv-ruis of golfvorm',
      ],
      benefits: ['Maskeert afleiding op kantoor en thuis', 'Helpt veel mensen sneller in slaap te vallen', 'Gratis, eindeloos, zonder app'],
    },
    steps: [
      'Druk op Start. Er klinkt niets voordat je dat doet, en het begint op gemiddeld volume.',
      'Met Wit, Roze en Bruin open je elke generator; volume, filter en beeld blijven behouden.',
      'Een laagdoorlaatfilter maakt het gesis zachter, een hoogdoorlaatfilter haalt gerommel weg; stel de afsnijfrequentie in.',
      'Kies een beeld (golfvorm, tv-ruis of donker scherm) en eventueel een slaaptimer.',
      'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Slapen', description: 'Maskeer verkeer, buren en gesnurk met een gelijkmatig geluid.' },
      { title: 'Focus', description: 'Dek geklets en huishoudgeluid af tijdens werken of studeren.' },
      { title: 'Baby’s', description: 'Veel ouders kalmeren hun baby met zachte witte ruis. Houd het zacht en uit de buurt van het bedje.' },
      { title: 'Retro tv-ruis', description: 'Zet het beeld op tv-ruis voor video’s, decors of een themafeest.' },
    ],
    faqs: [
      {
        question: 'Wat is witte ruis?',
        answer: 'Witte ruis heeft op elke frequentie evenveel vermogen. Voor het oor klinkt het als een helder, gelijkmatig gesis, zoals een radio of tv die niet is afgestemd.',
      },
      {
        question: 'Wat doen het laagdoorlaat- en hoogdoorlaatfilter?',
        answer:
          'Een laagdoorlaatfilter laat frequenties onder de grens door, zodat de ruis donkerder en zachter klinkt. Een hoogdoorlaatfilter laat de hogere door, haalt gerommel weg en klinkt luchtiger.',
      },
      {
        question: 'Gebruikt het data?',
        answer: 'Nee. De ruis wordt op je apparaat gemaakt met de Web Audio API: er wordt niets gestreamd en na het laden werkt het ook offline.',
      },
      {
        question: 'Is tv-ruis veilig om naar te kijken?',
        answer: 'Snel flikkeren kan onprettig zijn en fotosensitieve epilepsie uitlokken. Ben je gevoelig, gebruik dan de golfvorm of het donkere beeld.',
      },
    ],
  },
  'fake-blue-screen-of-death': {
    glance: {
      answer:
        'Een nep blue screen of death (BSOD) bootst het foutscherm van Windows na: het droevige gezichtje, „Er is een probleem opgetreden met uw pc”, een stopcode en een voortgangsteller. Het is alleen beeld: er crasht niets en je sluit het met Esc. Kies Windows 10, Windows 11, het nieuwe zwarte scherm of klassiek XP.',
      features: ['Stijlen Windows 10, 11, zwart en klassiek XP', 'Echte stopcodes zoals CRITICAL_PROCESS_DIED', 'Oplopend percentage en QR-achtig blok', 'Volledig scherm met verborgen cursor'],
      benefits: ['De overtuigendste computergrap', 'Realistische rekwisiet voor video’s en tutorials', 'Volkomen onschuldig'],
    },
    steps: [
      'Kies een stijl: Windows 10, Windows 11, het nieuwe zwarte scherm of klassiek XP/7.',
      'Kies een stopcode en hoe lang de teller over 100% doet.',
      'Tik twee keer of druk op F voor volledig scherm. De cursor verdwijnt snel.',
      'Druk op Esc, of beweeg de muis en klik op sluiten, om te stoppen.',
    ],
    useCases: [
      { title: 'Kantoorgrap', description: 'Laat het een paar seconden op het scherm van een collega staan en onthul dan de grap.' },
      { title: 'Video’s en streams', description: 'Laat een crash zien op camera zonder een echte computer te laten crashen.' },
      { title: 'IT-training', description: 'Laat zien hoe een stopfout eruitziet en wat de code betekent.' },
      { title: 'Film en theater', description: 'Een geloofwaardig crashscherm voor een scène, op elk apparaat.' },
    ],
    faqs: [
      {
        question: 'Wat is het blue screen of death?',
        answer:
          'Dat is de schermvullende fout die Windows toont bij een probleem waarvan het niet kan herstellen, zoals een defecte driver of geheugenfout. Het noemt een stopcode, slaat crashgegevens op en start opnieuw op.',
      },
      {
        question: 'Wat betekenen de stopcodes?',
        answer:
          'Elke code noemt het soort fout: CRITICAL_PROCESS_DIED betekent dat een systeemproces stopte, IRQL_NOT_LESS_OR_EQUAL wijst meestal op een driver en MEMORY_MANAGEMENT vaak op defect RAM. Hier zijn het alleen teksten.',
      },
      {
        question: 'Kan dit mijn computer beschadigen?',
        answer: 'Nee. Het is een afbeelding in een browsertabblad. Het laat Windows niet crashen, wijzigt geen instellingen en installeert niets.',
      },
      {
        question: 'Waarom is het nieuwe crashscherm zwart?',
        answer: 'In 2025 verving Microsoft het blauwe scherm in Windows 11 door een eenvoudiger zwart scherm. Kies „Zwart (nieuw)” voor die look.',
      },
      {
        question: 'Is dit verbonden aan Microsoft?',
        answer: 'Nee. Het is een onafhankelijke namaak voor de lol, niet verbonden aan of gesponsord door Microsoft.',
      },
    ],
  },
  'pomodoro-timer': {
    glance: {
      answer:
        'Een pomodorotimer verdeelt je werk in focusblokken van 25 minuten met pauzes van 5 minuten, en een lange pauze na elke vier blokken. De methode, eind jaren 80 bedacht door Francesco Cirillo, helpt je om te beginnen, overbelasting te voorkomen en je voltooide blokken te tellen.',
      features: ['25/5-cyclus met lange pauzes', 'Instelbare duur en automatisch starten', 'Geluidssignaal en aftelling in het tabblad', 'Sessieteller en voortgangsring'],
      benefits: ['Versla uitstelgedrag met korte doelen', 'Pauzes verminderen vermoeidheid', 'Gratis, zonder account'],
    },
    steps: [
      'Druk op Start om een focusblok van 25 minuten te beginnen.',
      'Pas als je wilt de duur van focus en pauzes aan (bijvoorbeeld 50/10).',
      'Na elke fase klinkt een signaal en begint de volgende; zet automatisch starten uit om ze zelf te starten.',
      'Met Overslaan ga je verder, met Resetten begin je opnieuw. De spatiebalk start en pauzeert.',
      'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Studeren', description: 'Verdeel je stof in korte, gerichte blokken met echte pauzes.' },
      { title: 'Diep werk', description: 'Bescherm telkens 25 minuten tegen e-mail en chat.' },
      { title: 'In de klas', description: 'Toon de timer op het digibord voor werk- en pauzetijden.' },
      { title: 'Gewoontes opbouwen', description: 'Tel je sessies om je focustijd te zien.' },
    ],
    faqs: [
      {
        question: 'Wat is de pomodorotechniek?',
        answer:
          'Een timemanagementmethode van eind jaren 80: werk in gerichte blokken (traditioneel 25 minuten), neem na elk blok een korte pauze en na vier blokken een lange.',
      },
      {
        question: 'Loopt de timer door in een tabblad op de achtergrond?',
        answer: 'Ja. Hij telt met de echte klok, dus blijft nauwkeurig ook als de browser verborgen tabbladen vertraagt, en de tabbladtitel toont de resterende tijd.',
      },
      {
        question: 'Kan ik de duur aanpassen?',
        answer: 'Ja. Stel focus, korte en lange pauze in minuten in, en hoeveel sessies er voor de lange pauze komen.',
      },
    ],
  },
}
