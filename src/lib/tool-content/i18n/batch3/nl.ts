import type { ToolTranslations } from '../types'

export const nl: ToolTranslations = {
  'screen-uniformity-test': {
    glance: {
      answer:
        'Een schermuniformiteitstest toont donkere en grijze vlakken op volledig scherm, zodat je ziet of helderheid en kleur over het hele paneel gelijk zijn. Hij laat lichtlekken aan de randen zien, clouding op LCD- en IPS-schermen, IPS-glow, vignettering en het dirty-screen-effect op grote tv’s.',
      features: ['Zwarte, donkergrijze en middengrijze testvlakken', 'Helderheidsstappen om clouding in het donker te zien', 'Uitleg om IPS-glow van lichtlekken te onderscheiden', 'Volledig scherm zonder browserbalken'],
      benefits: ['Vind paneelfouten die onder de garantie vallen', 'Vergelijk twee monitoren of een vervanging eerlijk', 'Duurt ongeveer twee minuten in een donkere kamer'],
    },
    steps: [
      'Dim het licht in de kamer en laat je scherm een paar minuten opwarmen.',
      'Druk op F voor volledig scherm en begin met het donkerste grijs om de randen op lichtlekken te checken.',
      'Ga door lichtere grijstinten en zoek naar vlekken, banden of donkerdere hoeken.',
      'Zet het raster aan om specifieke delen van het scherm te vergelijken.',
    ],
    useCases: [
      { title: 'Lichtlekken', description: 'Bijna zwarte vlakken tonen licht dat langs de randen van LCD-panelen ontsnapt.' },
      { title: 'Dirty-screen-effect', description: 'Middengrijs toont verticale banden of vlekken op tv’s bij camerabewegingen.' },
      { title: 'Vignettering', description: 'Vergelijk de hoeken met het midden om donkerdere randen te zien.' },
      { title: 'Paneelloterij', description: 'Vergelijk twee exemplaren van hetzelfde model voordat je er één houdt.' },
    ],
    faqs: [
      { question: 'Waarom ziet mijn scherm er ongelijk uit op grijs?', answer: 'Geen enkel paneel is perfect egaal. Kleine verschillen zijn normaal; grote vlekken, sterke banden of heldere hoeken kunnen bij een nieuw apparaat een melding waard zijn.' },
      { question: 'Moet ik in het donker testen?', answer: 'Ja. Omgevingslicht verbergt subtiele lichtlekken en clouding, dus een donkere kamer maakt de test veel duidelijker.' },
      { question: 'Laat de camera zien wat ik zie?', answer: 'Telefooncamera’s overdrijven lichtlekken en clouding vaak. Beoordeel met je eigen ogen en gebruik foto’s alleen als ruwe referentie.' },
    ],
  },
  stopwatch: {
    glance: {
      answer:
        'Een online stopwatch meet de tijd van start tot stop, tot op de honderdste seconde, in grote cijfers op volledig scherm. Leg rondetijden vast bij hardlopen, zwemmen, trainen en experimenten. De tijd blijft nauwkeurig omdat hij met de klok van je apparaat wordt gemeten.',
      features: ['Start, stop, ronde en reset', 'Nauwkeurig tot op honderdsten van een seconde', 'Rondelijst met tussentijden', 'Spatiebalk en sneltoetsen'],
      benefits: ['Groot display voor sportschool en klas', 'Nauwkeurige rondetijden', 'Gratis, werkt offline'],
    },
    steps: [
      'Druk op Start of de spatiebalk om te beginnen.',
      'Druk op Ronde of L om een tussentijd vast te leggen terwijl de stopwatch doorloopt.',
      'De spatiebalk pauzeert, R reset.',
      'Druk op F voor volledig scherm en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Sport en hardlopen', description: 'Houd rondetijden en intervallen bij.' },
      { title: 'Toespraken', description: 'Time presentaties en repetities nauwkeurig.' },
      { title: 'Spelletjes en quizzen', description: 'Time rondes in de klas of op spelletjesavonden.' },
      { title: 'Lab en keuken', description: 'Meet reacties, zet- en trektijden.' },
    ],
    faqs: [
      { question: 'Hoe nauwkeurig is de stopwatch?', answer: 'Hij gebruikt de klok met hoge resolutie van de browser en toont honderdsten van een seconde. De verversing van het scherm kan de zichtbare tijd een paar milliseconden vertragen.' },
      { question: 'Worden mijn rondes bewaard?', answer: 'Rondes blijven op de pagina tot je reset of sluit. Je kunt ze naar het klembord kopiëren.' },
      { question: 'Werkt hij offline?', answer: 'Ja. Zodra de pagina geladen is, loopt de stopwatch zonder verbinding.' },
    ],
  },
  'matrix-screensaver': {
    glance: {
      answer:
        'De Matrix-schermbeveiliging toont kolommen vallende groene tekens, de “digitale regen” uit de film The Matrix (1999). Hij draait in je browser op volledig scherm, en je kunt kleur, snelheid en tekengrootte aanpassen voor je bureau, tv of streamachtergrond.',
      features: ['Vallende katakana, cijfers en symbolen', 'Kleur, snelheid en tekengrootte instelbaar', 'Volledig scherm met verborgen cursor', 'Vloeiend op schermen met hoge verversing'],
      benefits: ['Iconische look voor inactieve schermen en streams', 'Geen schermbeveiliging installeren op Windows of macOS', 'Gratis'],
    },
    steps: [
      'De regen begint meteen in het voorbeeld.',
      'Pas snelheid, dichtheid en lettergrootte aan, of kies een andere kleur.',
      'Kies katakana, binaire of cyber-tekens.',
      'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Schermbeveiliging', description: 'Laat hem draaien op een ongebruikte monitor.' },
      { title: 'Tech-sfeer', description: 'Achtergrondbeeld voor streams, kantoren of evenementen.' },
      { title: 'Video-achtergronden', description: 'Neem een “cyber”-achtergrond op voor video’s.' },
      { title: 'Verkleedfeestjes', description: 'Zet de toon voor een sciencefictionavond.' },
    ],
    faqs: [
      { question: 'Welke tekens gebruikt de Matrix-regen?', answer: 'Het originele effect gebruikte gespiegelde katakana van halve breedte, gemengd met cijfers. Hier kies je die stijl, binair of cyber-tekens.' },
      { question: 'Kan ik er een echte schermbeveiliging van maken?', answer: 'Browsers kunnen geen systeemschermbeveiliging installeren, maar je kunt hem op volledig scherm openen als je wegloopt. De wake lock houdt het scherm aan.' },
      { question: 'Maakt hij mijn computer trager?', answer: 'Hij is licht. Verlaag op oudere apparaten de dichtheid voor een vloeiendere animatie.' },
    ],
  },
  'dvd-screensaver': {
    glance: {
      answer:
        'De dvd-schermbeveiliging is het klassieke stuiterende logo van dvd-spelers: het zweeft over het scherm, krijgt bij elke rand een nieuwe kleur en landt af en toe precies in een hoek. Deze versie telt hoektreffers en laat je snelheid en logogrootte aanpassen.',
      features: ['Nieuwe kleur bij elke botsing', 'Hoektreffer-teller met feestje', 'Snelheid en logogrootte instelbaar', 'Volledig scherm op elk scherm'],
      benefits: ['Nostalgisch en vreemd bevredigend', 'Geweldige achtergrond voor streams en wachtkamers', 'Gratis'],
    },
    steps: [
      'Het logo begint meteen te stuiteren.',
      'Stel snelheid en logogrootte in met de schuifregelaars.',
      'Let op de hoekteller: elke exacte hoek wordt gevierd.',
      'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Nostalgie', description: 'Beleef de wachtkamerklassieker opnieuw.' },
      { title: 'Inactief scherm', description: 'Een speelse schermbeveiliging voor tv of kantoormonitor.' },
      { title: 'Streampauzes', description: 'Kijkers wachten graag op de hoektreffer.' },
      { title: 'Samen kijken', description: 'Wed met vrienden wanneer hij de hoek raakt.' },
    ],
    faqs: [
      { question: 'Raakt hij ooit precies de hoek?', answer: 'Ja. Of en hoe vaak hangt af van schermgrootte, logogrootte en snelheid. De teller registreert elke exacte hoektreffer.' },
      { question: 'Is dit het officiële dvd-logo?', answer: 'Nee. Het is een algemeen badge in dezelfde stijl en heeft niets te maken met DVD Format/Logo Licensing Corporation.' },
      { question: 'Waarom verandert het logo van kleur?', answer: 'Net als de klassieke schermbeveiliging kiest het logo bij elke rand een nieuwe kleur en herhaalt het nooit twee keer achter elkaar dezelfde.' },
    ],
  },
  'fake-windows-10-update': {
    glance: {
      answer:
        'Een nep-updatescherm van Windows 10 bootst het blauwe scherm “Bezig met updates” na, met draaiende puntjes en een langzaam oplopend percentage. Op volledig scherm lijkt het alsof de pc wordt bijgewerkt: een klassieke, onschuldige grap. Druk op Esc om te stoppen.',
      features: ['Draaiende puntjes en oplopend percentage', 'Instelbare updatesnelheid', 'Volledig scherm met verborgen cursor', 'Altijd te stoppen met Esc'],
      benefits: ['Overtuigende, onschuldige kantoorgrap', 'Rekwisiet voor video’s en tutorials', 'Er wordt niets geïnstalleerd of gewijzigd'],
    },
    steps: [
      'Stel met de snelheidsschuif in hoe snel het percentage oploopt.',
      'Klik op Volledig scherm of druk op F zodat de simulatie het scherm vult en de browser verbergt.',
      'Loop weg en laat de voortgang lopen. Druk op Pauze om de update vast te laten lijken.',
      'Druk op Esc om te stoppen en de grap te onthullen.',
    ],
    useCases: [
      { title: 'Onschuldige kantoorgrappen', description: 'Laat een collega denken dat zijn pc wordt bijgewerkt en vertel het daarna.' },
      { title: 'Even pauze', description: 'Lijk bezig als je even van je bureau wegloopt.' },
      { title: 'Rekwisiet voor film en video', description: 'Toon een geloofwaardige Windows 10-update op de set.' },
      { title: 'Nostalgie', description: 'Bekijk een klassiek systeemscherm voor de lol.' },
    ],
    faqs: [
      { question: 'Is dit een echte update of iets schadelijks?', answer: 'Nee. Het is een onschuldige visuele simulatie in een gewoon browsertabblad. Hij verandert je apparaat niet, installeert niets en vraagt geen gegevens. Druk op Esc om op elk moment te stoppen.' },
      { question: 'Is dit verbonden aan Microsoft?', answer: 'Nee. Het is een onafhankelijke namaak voor de lol, niet verbonden aan of gesponsord door Microsoft.' },
      { question: 'Kan ik bepalen hoe snel het gaat?', answer: 'Ja. De snelheidsschuif bepaalt hoe snel het percentage oploopt, en Pauze houdt het vast zodat de update vast lijkt te zitten.' },
      { question: 'Hoe sluit ik het nepscherm?', answer: 'Druk op Esc, of beweeg de muis of tik op het scherm om de sluitknop te tonen. Het tabblad sluiten werkt ook.' },
    ],
  },
  'ring-light': {
    glance: {
      answer:
        'Een online ringlamp toont een felle ring op je scherm die je gezicht egaal van voren verlicht, zoals de ringlamp van een fotograaf. Pas grootte, dikte, warmte en helderheid van de ring aan en zet volledig scherm aan voor selfies, videobellen, make-up of productfoto’s.',
      features: ['Ringgrootte en -dikte instelbaar', 'Kleurtemperatuur van warm tot koel', 'Helderheidsregeling en volledig scherm', 'Werkt op telefoons, tablets en laptops'],
      benefits: ['Egaal licht zonder schaduwen, gratis', 'Lichtpuntjes in de ogen zoals bij een echte ringlamp', 'Elk vrij scherm wordt een lamp'],
    },
    steps: [
      'Open de pagina op het scherm voor je (laptop, monitor of tablet) en zet de helderheid hoog.',
      'Pas de grootte en dikte van de ring aan; een dikkere ring geeft meer licht.',
      'Kies de kleurtemperatuur of een tint voor creatieve looks.',
      'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.',
    ],
    useCases: [
      { title: 'Videobellen', description: 'Egaal, flatteus licht op je gezicht zonder een ringlamp te kopen.' },
      { title: 'Selfies en portretten', description: 'Krijg het klassieke ronde lichtpuntje in je ogen.' },
      { title: 'Make-up', description: 'Zie je gezicht goed bij warm of daglichtachtig licht.' },
      { title: 'Streaming', description: 'Zacht hoofdlicht van een vrije monitor of tablet.' },
    ],
    faqs: [
      { question: 'Is een scherm net zo fel als een echte ringlamp?', answer: 'Nee. Een echte led-ringlamp is veel feller. De schermringlamp werkt het best in een donkere kamer, met volle helderheid en dicht bij je gezicht.' },
      { question: 'Waarom een ring en niet het hele scherm?', answer: 'Een ring verlicht je van alle kanten, vermindert schaduwen onder neus en ogen en geeft het ronde lichtpuntje in je ogen. Zet het vullen van het midden aan als je al het licht nodig hebt.' },
      { question: 'Welke kleurtemperatuur staat het mooist?', answer: 'Rond 4500–5500 K oogt natuurlijk bij de meeste huidtinten. ’s Avonds warmer (3000 K), koeler (6500 K) om bij daglicht te passen.' },
    ],
  },
}
