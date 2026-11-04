import type { GuideTranslation } from './types'

export const nl: Record<string, GuideTranslation> = {
  'dead-pixel-test': {
    slug: 'dode-pixel-test',
    navLabel: 'Dode-pixeltest',
    title: 'Dode-pixeltest: dode, vastgelopen en hete pixels vinden op elk scherm',
    metaTitle: 'Dode-pixeltest: vind dode en vastgelopen pixels',
    metaDescription:
      'Zo doe je een dode-pixeltest op Windows, Mac, iPhone en Android. Vind dode, vastgelopen en hete pixels met primaire kleuren op volledig scherm, stap voor stap.',
    readingTime: '6 min lezen',
    category: 'Schermdiagnose',
    intro:
      'Elk modern paneel – LCD, IPS, VA of OLED – bestaat uit miljoenen piepkleine rode, groene en blauwe subpixels die door microtransistors worden aangestuurd. Als een transistor uitvalt of blijft hangen, ontstaat een storend defect dat lezen, fotobewerking en gamen hindert. Een test met primaire kleuren op volledig scherm is de snelste en betrouwbaarste manier om pixelfouten te vinden binnen de retourtermijn of voordat de garantie verloopt.',
    toolLabel: 'Dode-pixeltest openen',
    toolDescription: 'Wissel op volledig scherm tussen rood, groen, blauw, zwart en wit om afwijkingen te vinden.',
    sections: [
      {
        title: 'Dode, vastgelopen en hete pixels: zo zie je het verschil',
        content: [
          'Niet elk pixeldefect ziet er hetzelfde uit of gedraagt zich hetzelfde. Als je het precieze type kent, weet je of een softwarecyclus kan helpen of dat het paneel onder garantie vervangen moet worden.',
          'Een dode pixel ontstaat als de transistor die hem aanstuurt volledig uit blijft. Op LCD-schermen met achtergrondverlichting is dat een blijvend zwart puntje, welke kleur het scherm eromheen ook toont.',
          'Een vastgelopen pixel ontstaat als één of twee subpixels (rood, groen of blauw) altijd aan blijven terwijl de rest normaal werkt. Dat is een fel, vast gekleurd puntje op een donkere of contrasterende achtergrond.',
          'Een hete pixel ontstaat als alle drie de subpixels tegelijk volledig aan blijven. Dat geeft een blijvend wit puntje dat sterk opvalt op zwart en donkere beelden.',
        ],
        tips: [
          'Dode pixels zijn zwarte puntjes op witte, rode, groene of blauwe vlakken.',
          'Vastgelopen pixels zijn gekleurde puntjes (rood, groen of blauw) op een donkere achtergrond.',
          'Hete pixels zijn blijvende witte puntjes op een donkere achtergrond.',
        ],
      },
      {
        title: 'Belangrijke eerste stap: eerst schoonmaken, dan testen',
        content: [
          'Verrassend veel vermeende „dode pixels” blijken microscopisch stof, opgedroogde druppeltjes van een nies of piepkleine vetspatjes op het glas te zijn.',
          'Voordat je concludeert dat het paneel defect is, veeg je het uitgeschakelde scherm voorzichtig af met een schone, droge optische microvezeldoek. Krab nooit met je nagel: je kunt de ontspiegelende polarisatiefilters blijvend beschadigen.',
        ],
      },
      {
        title: 'Stap-voor-stap testen op elk apparaat',
        content: ['Volg deze stappen om monitoren, laptops, tablets en smartphones grondig te testen.'],
        steps: [
          'Open de dode-pixeltest van WhiteScreen.vip en ga naar volledig scherm, zodat adresbalk, taakbalk en andere onderdelen verdwijnen.',
          'Begin met wit: scan het paneel langzaam van linksboven naar rechtsonder op vaste zwarte puntjes (dode pixels).',
          'Schakel naar zwart: zoek naar felle witte puntjes (hete pixels) of gekleurde puntjes (vastgelopen pixels).',
          'Doorloop puur rood, groen en blauw: elke primaire kleur test één subpixelkanaal. Een defecte subpixel toont zich als een donker of afwijkend gekleurd puntje.',
          'Op Windows of macOS: zet de helderheid op 80–100% en kijk recht van voren naar het scherm om optische vertekening te voorkomen.',
          'Op iPhone of Android: zorg dat er geen browserranden overblijven, of sla de testkleuren op in je galerij en bekijk ze daar op volledig scherm.',
        ],
      },
      {
        title: 'Beperkingen van browsertests en de waarheid over garantie',
        content: [
          'Browsertests geven direct een nauwkeurig visueel oordeel, omdat ze elke pixel op 100% verzadiging aansturen, zonder compressie-artefacten zoals bij video.',
          'Wees wel voorzichtig met sites die beweren dat knipperende kleuren of video’s in een lus dode pixels kunnen repareren. Een snelle subpixeltrainer kan een trage transistor soms losmaken, maar een onderbroken circuit of doorgebrande transistor herstel je niet met software.',
          'Bekijk de pixelfoutklasse van je fabrikant (ISO 9241-307 / ISO 13406-2). De meeste garanties eisen 3 tot 5 dode subpixels, of minstens één dode pixel midden in beeld, voordat je gratis een nieuw exemplaar krijgt.',
        ],
        checklist: [
          'Vergelijk het aantal defecten binnen de retourtermijn van 14 tot 30 dagen met de garantievoorwaarden.',
          'Maak met je telefoon een macrofoto van het defect als bewijs voor de klantenservice.',
          'Vraag of je winkel een „nul dode pixels”-garantie biedt in de eerste periode na aankoop.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kan een browsertest een dode pixel repareren?',
        answer:
          'Nee. Als een transistor kapot of doorgebrand is, helpt geen enkele software. Snel knipperende tools kunnen vastgelopen subpixels soms losmaken, maar blijvend dode pixels vragen om een nieuw paneel.',
      },
      {
        question: 'Waarom verdwijnen vastgelopen pixels soms vanzelf?',
        answer:
          'Bij vloeibaar-kristalpanelen ontstaan vastgelopen pixels vaak door een onbalans in elektrische lading of lichte mechanische spanning. Als het scherm opwarmt of afkoelt, kunnen uitzetting en spanningswisselingen de normale stand van de kristallen herstellen.',
      },
      {
        question: 'Hoe onderscheid ik stof op het scherm van een dode pixel?',
        answer:
          'Verander je kijkhoek door je hoofd zo’n 15 cm naar links of rechts te bewegen. Omdat glas dikte heeft, verschuift stof op het oppervlak een beetje ten opzichte van de lichtlaag (parallax), terwijl een dode pixel vast in het pixelraster blijft.',
      },
    ],
  },
  'screen-color-test': {
    slug: 'scherm-kleurentest',
    navLabel: 'Scherm-kleurentest',
    title: 'Scherm-kleurentest: kleurnauwkeurigheid en kleurbalans van je monitor beoordelen',
    metaTitle: 'Scherm-kleurentest: nauwkeurigheid en balans',
    metaDescription:
      'Test je monitor op kleurzweem, banding, gamma-afwijkingen en contrast. Stap-voor-stap kleurentest voor pc, Mac en smartphone.',
    readingTime: '6 min lezen',
    category: 'Schermkalibratie',
    intro:
      'Of je nu foto’s bewerkt, video kleurcorrigeert, websites ontwerpt of twee monitoren op één bureau gelijk wilt krijgen: nauwkeurige kleuren zijn essentieel. Een subtiele kleurzweem, ongelijke gammacurves en kleurbanden kunnen je werk vertekenen zonder dat je het merkt. Een systematische kleurentest met referentievlakken op volledig scherm laat kleurzweem, verschoven witpunt en afgekapte verzadiging zien, zonder dure apparatuur.',
    toolLabel: 'Scherm-kleurentest openen',
    toolDescription: 'Test neutraal grijs, primaire kleuren en verzadigingsbalans over het hele scherm.',
    sections: [
      {
        title: 'Waarom eerst visueel kleuren testen voordat je kalibreert',
        content: [
          'Veel monitoren komen uit de fabriek met een overdreven blauwe zweem, oververzadigd groen en dichtgelopen zwart, zodat ze in de winkel opvallen in plaats van nauwkeurig te zijn.',
          'Voordat je een colorimeter koopt, laat een gestructureerde visuele test zien of je scherm een algemene zweem heeft (bijvoorbeeld groen of magenta in de middentonen), zwart laat dichtlopen of sterk verkleurt bij een andere kijkhoek.',
        ],
        tips: [
          'Laat de monitor minstens 30 minuten opwarmen voordat je kleuren beoordeelt; de kleurtemperatuur van de achtergrondverlichting verandert tijdens het opwarmen.',
          'Doe lampen uit die gekleurde reflecties op het glas geven.',
        ],
      },
      {
        title: 'Kleurentest stap voor stap',
        content: ['Volg deze controles op Windows, macOS en werkplekken met meerdere monitoren.'],
        steps: [
          'Zet softwarefilters uit: Nachtlampje op Windows, True Tone en Night Shift op macOS en de oogcomfortstand op je telefoon.',
          'Open de kleurentest van WhiteScreen.vip op volledig scherm en kies het neutrale grijs van 50%.',
          'Beoordeel het grijs: zuiver neutraal grijs mag niet rozig, groenig of blauwig ogen. Elke zichtbare zweem wijst op een verschoven witpunt.',
          'Doorloop rood, groen en blauw: controleer of de kleuren van hoek tot hoek gelijk blijven, zonder donkerder te worden of van tint te veranderen aan de randen.',
          'Bekijk de secundaire kleuren (cyaan, magenta, geel): die gebruiken meerdere kanalen tegelijk en tonen onbalans tussen kanalen.',
          'Vergelijk meerdere monitoren: sleep het browservenster over de naad tussen twee schermen om witpuntverschillen te zien.',
        ],
      },
      {
        title: 'Kleurbanding en grenzen van de kleurdiepte herkennen',
        content: [
          'Standaard 8-bitschermen tonen 16,7 miljoen kleuren, moderne 10-bitpanelen (8 bit + FRC of echte 10 bit) meer dan een miljard tinten. Als de monitor of driver kleurverlopen slecht verwerkt, worden vloeiende verlopen zichtbare treden (banding).',
          'Bekijk de verlopen op onze monitortestpagina. Zie je treden of valse kleurranden, controleer dan of het configuratiescherm van je videokaart (NVIDIA, AMD Radeon of Intel) op het volledige RGB-bereik (0–255) staat en niet op het beperkte videobereik (16–235).',
        ],
        checklist: [
          'Zet het dynamisch uitvoerbereik in de GPU-instellingen op „Volledig” (0–255).',
          'Kies de sRGB- of D65-stand in het schermmenu (OSD) voor standaard webkleuren.',
          'Stem verversingssnelheid en kleurdiepte op elkaar af bij twee monitoren.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Waarom lijkt mijn witte scherm wat geel naast mijn telefoon?',
        answer:
          'Smartphones gebruiken vaak een koel witpunt van 7000–7500 K, waardoor een monitor die op 6500 K (D65) is gekalibreerd ernaast warm of geelachtig lijkt. D65 is de standaard kleurtemperatuur voor web en video.',
      },
      {
        question: 'Wat is het verschil tussen sRGB en DCI-P3?',
        answer:
          'sRGB is de standaard kleurruimte voor webinhoud en kantoorwerk. DCI-P3 beslaat een ongeveer 25% breder spectrum en wordt gebruikt voor HDR-film en moderne smartphoneschermen. Voor gewoon webwerk voorkomt een monitor die op sRGB staat oververzadiging.',
      },
    ],
  },
  'screen-uniformity-test': {
    slug: 'scherm-uniformiteitstest',
    navLabel: 'Schermuniformiteit',
    title: 'Uniformiteitstest: backlight bleeding, IPS-glow en clouding controleren',
    metaTitle: 'Uniformiteitstest: backlight bleeding en IPS-glow',
    metaDescription:
      'Controleer je monitor op backlight bleeding, IPS-glow, clouding, vignettering en dirty screen effect (DSE) met grijze en zwarte testbeelden.',
    readingTime: '6 min lezen',
    category: 'Schermdiagnose',
    intro:
      'Geen enkel plat scherm verdeelt de helderheid perfect over het hele oppervlak. Maar sterke backlight bleeding, overdreven IPS-glow, donkere hoeken of een vlekkerig „dirty screen effect” (DSE) kunnen donkere filmscènes bederven en storende schaduwen geven op websites met een lichte achtergrond. Een gestructureerde uniformiteitstest bij gecontroleerd licht helpt je paneelfouten te vinden en te zien of ze binnen de productietolerantie vallen.',
    toolLabel: 'Uniformiteitstest openen',
    toolDescription: 'Bekijk 5% donkergrijs, 50% grijs, zwart en wit, met optionele rasters.',
    sections: [
      {
        title: 'Backlight bleeding, IPS-glow en clouding: het echte verschil',
        content: [
          'Voordat je een monitor terugstuurt, moet je een echt productiefout kunnen onderscheiden van normale eigenschappen van de paneeltechniek.',
          'Backlight bleeding is een montagefout: het paneel zit klem of scheef in de rand, waardoor LED-licht langs de randen ontsnapt. Je ziet vaste gelige of witte lichtvlekken langs de rand, die niet veranderen waar je ook zit.',
          'IPS-glow is een natuurlijke optische eigenschap van alle IPS-panelen. Omdat IPS-kristallen schuin invallend licht niet helemaal tegenhouden, zie je van dichtbij een zwakke amberkleurige of zilverachtige gloed in de hoeken. Beweeg je je hoofd of ga je een halve meter achteruit, dan verschuift en vermindert die gloed.',
          'Clouding en dirty screen effect (DSE) beschrijven een ongelijke verdeling van de achtergrondverlichting, met vlekkerige grijze wolken die je ziet bij pannen over egale vlakken, zoals een voetbalveld of de lucht in een game.',
        ],
        tips: [
          'Backlight bleeding blijft op dezelfde plek en even fel, wat je kijkhoek ook is.',
          'IPS-glow verandert van sterkte en plek als je je hoofd van links naar rechts beweegt.',
          'Dirty screen effect (DSE) zie je het best op een egaal grijs van 20% of 50%.',
        ],
      },
      {
        title: 'Zo richt je de testomgeving goed in',
        content: [
          'In een fel verlicht kantoor valt backlight bleeding nauwelijks op, terwijl een telefoonfoto in het donker met nachtmodus de glow tien keer overdrijft.',
        ],
        steps: [
          'Dim het licht in de kamer tot een prettig avondniveau (niet aardedonker).',
          'Zet dynamisch contrast, black equalizer of local dimming uit in het schermmenu.',
          'Zet de helderheid op je normale werkniveau (ongeveer 120–150 nits, meestal 30–50% in het menu).',
          'Open het zwarte scherm van WhiteScreen.vip op volledig scherm en ga op je normale afstand zitten (minstens een armlengte).',
          'Let op de hoeken: komen er lichtbundels uit de randen die niet veranderen als je je hoofd beweegt, dan is dat backlight bleeding.',
          'Schakel naar onze 5%- en 50%-grijsschermen om dirty screen effect en vignettering van midden naar rand te zoeken.',
        ],
      },
      {
        title: 'Praktische manieren om uniformiteitsproblemen te beperken',
        content: [
          'Heeft je scherm lichte bleeding of IPS-glow die geen retour waard is, dan verbeteren een paar eenvoudige aanpassingen het beeld flink.',
        ],
        checklist: [
          'Installeer bias lighting (een led-strip van 6500 K achter de monitor). Je ogen passen zich aan en zwart lijkt veel dieper.',
          'Verlaag de helderheid: 100% in een donkere kamer versterkt alle onvolkomenheden van de achtergrondverlichting.',
          'Controleer de VESA-schroeven: te strak aandraaien kan de behuizing vervormen en drukbleeding veroorzaken.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Valt backlight bleeding onder de garantie?',
        answer:
          'Fabrikanten vinden lichte bleeding en IPS-glow normaal. Sterke bleeding met duidelijke witte vlekken die bij gewoon kantoorwerk bij daglicht zichtbaar zijn, geeft meestal recht op vervanging.',
      },
      {
        question: 'Hebben OLED-schermen backlight bleeding?',
        answer:
          'Nee. OLED-subpixels geven zelf licht en er is geen achtergrondverlichting. Zwarte pixels gaan volledig uit: oneindig contrast, zonder bleeding en zonder IPS-glow.',
      },
    ],
  },
  'clean-laptop-screen': {
    slug: 'laptopscherm-schoonmaken',
    navLabel: 'Laptopscherm schoonmaken',
    title: 'Laptopscherm schoonmaken zonder krassen of strepen',
    metaTitle: 'Laptopscherm veilig schoonmaken – stap voor stap',
    metaDescription:
      'Veilige stap-voor-stap handleiding om een laptop- of MacBook-scherm schoon te maken met een witscherm-controle, microvezel en zonder agressieve middelen.',
    readingTime: '5 min lezen',
    category: 'Schoonmaak & onderhoud',
    intro:
      'Moderne laptopschermen, MacBooks en externe monitoren hebben zeer kwetsbare antireflectielagen, polarisatiefolies en vetafstotende coatings. Glasreiniger, keukenpapier of te veel druk kan die lagen voorgoed beschadigen of de vloeibare kristallen aantasten. Met een wit scherm op volledig scherm als controlelicht zie je elke vlek, elk stofje en elke toetsenbordafdruk voordat je met de juiste techniek schoonmaakt.',
    warning:
      'VEILIGHEIDSINSTRUCTIES: zet de laptop of monitor altijd uit en haal de stekker eruit voordat je een doek of vloeistof gebruikt. Spuit nooit water of reiniger direct op het scherm, de scharnieren of de randen. Vloeistof die in de onderrand loopt, kan de achtergrondverlichting vernielen.',
    toolLabel: 'Wit scherm openen voor controle',
    toolDescription: 'Wit licht op volledig scherm toont stof, vingerafdrukken en vegen voordat je schoonmaakt.',
    sections: [
      {
        title: 'Waarom een wit scherm het beste controlemiddel is',
        content: [
          'Als het scherm uit staat of een donkere achtergrond toont, vallen vingervet, toetsenbordafdrukken en fijn stof weg in het zwart van het paneel.',
          'WhiteScreen.vip op volledig scherm verlicht het paneel gelijkmatig en met veel contrast. Stof en vetvlekken worden donkere silhouetten op de lichte achtergrond, zodat je precies ziet waar je moet poetsen.',
        ],
      },
      {
        title: 'Veilig schoonmaken stap voor stap',
        content: ['Volg deze door fabrikanten aanbevolen stappen voor matte laptopschermen, glanzende schermen en Retina-schermen van MacBooks.'],
        steps: [
          'Controleer het scherm met WhiteScreen.vip op volledig scherm en 100% helderheid en onthoud waar vuil, toetsenbordvet en opgedroogde druppels zitten.',
          'Zet de laptop helemaal uit en koppel lader en USB-kabels los. Laat het scherm 5 minuten afkoelen (op een warm scherm verdampt vocht direct en blijven er strepen achter).',
          'Gebruik een schone, dichte optische microvezeldoek (zoals voor brillen en cameralenzen). Nooit keukenpapier, tissues of een T-shirt.',
          'Veeg zacht met overlappende ronde of horizontale bewegingen. Laat de vezels het stof opnemen zonder op het paneel te drukken.',
          'Bij hardnekkige vetvlekken: bevochtig één hoek van de doek met een beetje gedestilleerd water. Hij mag net vochtig zijn, nooit druipen.',
          'Veeg de vlek met de vochtige hoek en wrijf de plek direct droog met het droge deel van de doek.',
          'Wacht 3 minuten tot het resterende vocht verdampt is voordat je de klep sluit of het apparaat aanzet.',
        ],
      },
      {
        title: 'Veelgemaakte fouten die schermen beschadigen',
        content: ['Veel populaire schoonmaaktips op internet richten onherstelbare schade aan moderne schermen aan.'],
        checklist: [
          'Geen glasreiniger: ammoniak en azijn tasten de antireflectielaag aan.',
          'Geen aceton, nagellakremover of verdunner: oplosmiddelen tasten kunststof lagen en randen direct aan.',
          'Nooit direct op het scherm spuiten: druppels lopen naar de onderrand, waar de flexkabels van het scherm zitten.',
          'Geen keukenpapier of servetten: cellulosevezels geven blijvende microkrasjes.',
          'Niet hard met je vingers drukken: te veel druk laat blijvende witte drukplekken in het LCD achter.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Mag ik 70% isopropylalcohol op mijn MacBook-scherm gebruiken?',
        answer:
          'Apple staat doekjes met 70% isopropylalcohol toe voor de buitenkant en glazen oppervlakken van sommige MacBooks, als je zacht veegt. Voor dagelijks onderhoud is gedestilleerd water op een microvezeldoek veel veiliger en tast het de antireflectielaag niet aan.',
      },
      {
        question: 'Waarom gedestilleerd water en geen kraanwater?',
        answer:
          'Kraanwater bevat opgeloste mineralen zoals calcium, magnesium en chloor. Bij het verdampen blijven kalkstrepen achter die bij het vegen de optische lagen kunnen krassen.',
      },
    ],
  },
  'oled-burn-in-prevention': {
    slug: 'oled-inbranden-voorkomen',
    navLabel: 'OLED-inbranden',
    title: 'OLED-inbranden voorkomen: testen, voorkomen en je OLED-scherm beschermen',
    metaTitle: 'OLED-inbranden voorkomen en testen – gids',
    metaDescription:
      'Begrijp het verschil tussen OLED-inbranden en tijdelijke nabeelden. Test je OLED-monitor of -tv met kleurvlakken en verleng de levensduur met praktische tips.',
    readingTime: '7 min lezen',
    category: 'Schermonderhoud',
    intro:
      'OLED- en QD-OLED-monitoren bieden ongeëvenaard contrast, diep zwart en vrijwel directe reactietijden. Maar elke subpixel is een organische led die langzaam slijt naarmate hij licht geeft, dus vaste elementen (taakbalk, adresbalk, game-HUD’s) kunnen na verloop van tijd ongelijke slijtage veroorzaken. Wie begrijpt hoe inbranden ontstaat, hoe je het test en hoe je je systeem instelt, beschermt zijn investering jarenlang.',
    warning:
      'EERLIJKE WAARSCHUWING: pas op voor misleidende tools. Geen software, knipperende kleuren of video kan blijvend OLED-inbranden ongedaan maken. Zodra organische subpixels helderheid verloren hebben, is de schade definitief. Onze tools helpen je het te herkennen en te voorkomen voordat het onomkeerbaar is.',
    toolLabel: 'OLED-inbrandtest openen',
    toolDescription: 'Wissel tussen rood, magenta, cyaan en donkergrijs om zwakke contouren van vaste elementen te zien.',
    sections: [
      {
        title: 'Tijdelijk nabeeld of blijvend inbranden',
        content: [
          'Het is essentieel om het verschil te kennen tussen tijdelijke beeldretentie en blijvend inbranden.',
          'Tijdelijke beeldretentie is een elektrisch effect: na 15–30 minuten met een beeld met veel contrast blijft er restlading in de transistorlaag. Een zwakke schim van het venster blijft een paar minuten zichtbaar en verdwijnt dan vanzelf of tijdens een automatische pixelvernieuwing.',
          'Blijvend inbranden is opgebouwde, ongelijke slijtage van subpixels. Als de rode of blauwe subpixels bij de taakbalk duizenden uren op volle helderheid hebben gebrand, geven ze minder licht dan hun buren en blijft er een donker silhouet zichtbaar op egale kleurvlakken.',
        ],
        tips: [
          'Een tijdelijk nabeeld verdwijnt binnen minuten of na een korte pixelvernieuwing van 5 minuten.',
          'Blijvend inbranden is zichtbaar op rood, magenta en 5% grijs en verdwijnt nooit.',
        ],
      },
      {
        title: 'Zo test je je OLED-scherm op inbranden',
        content: ['Volg deze stappen met onze kleurvlakken op volledig scherm om de eerste tekenen van slijtage te zien.'],
        steps: [
          'Open WhiteScreen.vip op volledig scherm zodat browserbalken en taakbalk verdwijnen.',
          'Kies egaal rood: rode subpixels slijten sneller dan groene. Bekijk goed de plek van de taakbalk, de adresbalk en de HUD-hoeken op donkere schimmen.',
          'Kies egaal magenta en cyaan: mengkleuren tonen verschillen in slijtage tussen kanalen.',
          'Kies 5% donkergrijs en 10% grijs: bijna-zwarte grijstinten tonen verticale banden en ongelijke slijtage die op puur wit onzichtbaar zijn.',
          'Kijk van normale afstand: zie je scherpe contouren van pictogrammen of werkbalken, dan is het paneel blijvend ingebrand.',
        ],
      },
      {
        title: 'De belangrijkste regels tegen OLED-inbranden',
        content: [
          'Moderne OLED-monitoren hebben ingebouwde bescherming, maar eenvoudige gewoontes in je besturingssysteem zijn de beste verdediging tegen vroegtijdige slijtage.',
        ],
        checklist: [
          'Zet „Taakbalk automatisch verbergen” aan in Windows (of het Dock automatisch verbergen in macOS).',
          'Gebruik de donkere modus in Windows, macOS en je browser: zwarte OLED-pixels verbruiken geen stroom en slijten niet.',
          'Zet de schermslaapstand op 3–5 minuten inactiviteit, zodat het bureaublad niet blijft branden als je wegloopt.',
          'Gebruik een schermbeveiliging op volledig scherm, zoals onze klapklok of het zwarte scherm, als je van je bureau wegloopt.',
          'Haal de stekker van je OLED-monitor niet direct na het uitzetten eruit: in stand-by voert hij een automatische pixelreiniging uit.',
          'Zet de paneelbescherming in het schermmenu aan: pixelverschuiving, logo-helderheidsbegrenzer en temperatuurbeheer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Herstellen knipperende pixeltrainers OLED-inbranden?',
        answer:
          'Nee. Knipperende beelden herstellen versleten organisch materiaal niet. Agressieve knipperpatronen op volle helderheid geven het paneel zelfs extra, onnodige warmtebelasting.',
      },
      {
        question: 'Hoe vaak moet ik de uitgebreide pixelvernieuwing draaien?',
        answer:
          'Alleen als de fabrikant erom vraagt (meestal elke 500 tot 1.500 gebruiksuren) of als een sterk nabeeld niet verdwijnt. Te vaak draaien versnelt de slijtage van het paneel.',
      },
    ],
  },
  'monitor-test': {
    slug: 'monitortest',
    navLabel: 'Monitortest',
    title: 'Complete monitortest: nieuwe schermen controleren op fouten, kleur en snelheid',
    metaTitle: 'Monitortest: zo controleer je elk nieuw scherm',
    metaDescription:
      'Complete gids voor het testen van een nieuwe of gebruikte monitor: dode pixels, scherpte, gamma, contrast, backlight bleeding en reactietijd.',
    readingTime: '6 min lezen',
    category: 'Schermdiagnose',
    intro:
      'Een nieuwe monitor uitpakken is leuk, maar productiefouten zoals dode subpixels, flinke backlight bleeding, ongelijke kleuren of een verkeerde gamma glippen vaak door de kwaliteitscontrole. Omdat de meeste winkels 14 tot 30 dagen retourrecht geven, is een grondige test van 15 minuten direct na levering de beste manier om zeker te zijn van een foutloos paneel.',
    toolLabel: 'Complete monitortest openen',
    toolDescription: 'Uitgebreide testbeelden: verlopen, gammakaarten, scherpterasters en kleurbalken.',
    sections: [
      {
        title: 'De checklist in 6 stappen voor een nieuwe monitor',
        content: ['Voordat je de doos weggooit of de garantie registreert, doe je deze paneelcontrole in 6 stappen.'],
        steps: [
          '1. Behuizing en kabels: controleer of de DisplayPort- of HDMI-kabel de native resolutie, verversingssnelheid (bijv. 144–240 Hz) en 10-bitkleur van de monitor ondersteunt.',
          '2. Dode pixels: open wit, zwart, rood, groen en blauw op volledig scherm en controleer elk kwadrant op vastgelopen of dode subpixels.',
          '3. Uniformiteit en bleeding: bekijk in een gedimde kamer een zwart scherm op lichtlekken langs de rand en een 50%-grijsscherm op dirty screen effect.',
          '4. Gamma en contrast: controleer met onze grijsschaal of de bijna-zwarte (1–5%) en bijna-witte stappen (95–99%) zichtbaar blijven zonder dicht te lopen.',
          '5. Scherpte en schaling: bekijk afwisselende lijnen van 1 pixel zwart en wit, zodat tekst scherp is zonder kleurranden of moiré.',
          '6. Bewegingsscherpte en ghosting: test met bewegingspatronen de reactietijd en stel overdrive zo in dat er geen omgekeerde ghosting ontstaat.',
        ],
      },
      {
        title: 'Wat normaal is per paneeltype',
        content: [
          'Wie de paneeltechniek kent, stuurt geen monitor terug voor eigenschappen die normale technische compromissen zijn.',
          'IPS-panelen: sterk in kleurnauwkeurigheid en brede kijkhoeken (178°). Normaal compromis: lager contrast (1.000:1) en lichte IPS-glow van opzij.',
          'VA-panelen: hoog contrast (3.000:1 tot 5.000:1) en diep zwart. Normaal compromis: donkere vegen in snelle scènes en smallere kijkhoeken.',
          'OLED-/QD-OLED-panelen: oneindig contrast, echt zwart en een reactietijd van 0,03 ms. Normaal compromis: mogelijke nabeelden en lagere aanhoudende helderheid bij volledig wit.',
          'TN-panelen: oudere e-sportschermen met hoge verversingssnelheid. Normaal compromis: fletse kleuren en sterke verticale kleurverschuiving als je iets van boven of onder kijkt.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Test ik de monitor met HDR aan of uit?',
        answer:
          'Doe de basistests voor kleur en uniformiteit met Windows-HDR uit, omdat HDR op schermen zonder local dimming tone-mappingfouten kan geven. Klopt SDR, zet dan HDR aan om piekhelderheid en dimzones te controleren.',
      },
      {
        question: 'Wat is overdrive en hoe stel ik het in?',
        answer:
          'Overdrive zet extra spanning op de subpixels om overgangen te versnellen en bewegingsonscherpte te verminderen. Staat het te hoog, dan krijg je „omgekeerde ghosting” (lichte randen achter bewegende objecten). „Normaal” of „Snel” is meestal het best; „Extreem” schiet bijna altijd door.',
      },
    ],
  },
  'white-screen-for-video-calls-and-zoom': {
    slug: 'wit-scherm-voor-videogesprekken',
    navLabel: 'Licht voor Zoom',
    title: 'Een wit scherm gebruiken als zacht licht voor videogesprekken en Zoom',
    metaTitle: 'Wit scherm als zacht licht voor videobellen',
    metaDescription:
      'Maak van je monitor of laptop een helder, flatterend alternatief voor een ringlamp voor Zoom, Google Meet en videovergaderingen, zonder iets te kopen.',
    readingTime: '5 min lezen',
    category: 'Licht & beeld',
    intro:
      'Goed webcambeeld hangt veel meer af van licht dan van een dure 4K-camera. Bij weinig licht verhoogt de sensor de digitale versterking (ISO) en krijg je ruis en korrel. Open je WhiteScreen.vip op een tweede scherm of naast het gespreksvenster, dan wordt je scherm meteen een grote, zachte lichtbak.',
    toolLabel: 'Licht voor videogesprekken openen',
    toolDescription: 'Instelbaar zacht wit licht van warm tot koel, gemaakt om je webcam te belichten.',
    sections: [
      {
        title: 'Waarom een groot scherm beter licht geeft dan een kleine ringlamp',
        content: [
          'In de fotografie geldt: hoe groter de lichtbron ten opzichte van het gezicht, hoe zachter en flatteuzer de schaduwen. Een ringlamp van 25 cm geeft harde reflecties in brillen en scherpe schaduwen in het gezicht.',
          'Een monitor van 24 of 27 inch met een wit scherm is een groot lichtvlak dat de oogkassen opvult, de huid zachter maakt en natuurlijke lichtpuntjes in je ogen geeft.',
        ],
      },
      {
        title: 'Zo plaats je je scherm als lamp',
        content: ['Met deze aanpassingen belicht je je gezicht het mooist.'],
        steps: [
          'Met twee schermen: zet het witte scherm op de monitor direct achter of naast je webcam.',
          'Met één scherm: verdeel het scherm in tweeën, met Zoom of Teams aan de ene kant en WhiteScreen.vip aan de andere.',
          'Kleurtemperatuur: gebruik warm wit (ongeveer 5000–5500 K) voor flatterende huidtinten, of daglichtwit (6500 K) als er zonlicht in de kamer valt.',
          'Helderheid: 70–90%, zodat je niet hoeft te knijpen.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Beschadigt een wit scherm tijdens lange vergaderingen mijn monitor?',
        answer:
          'Bij LCD/LED-panelen doet een wit scherm geen kwaad en geeft het nauwelijks slijtage. Houd bij OLED de helderheid gematigd (50–70%) om warmteopbouw te beperken.',
      },
    ],
  },
  'fullscreen-white-screen-for-drawing-and-tracing': {
    slug: 'wit-scherm-om-over-te-trekken-en-te-tekenen',
    navLabel: 'Tekenen & overtrekken',
    title: 'Je tablet of monitor gebruiken als digitale lichtbak om over te trekken en te tekenen',
    metaTitle: 'Tablet of monitor als lichtbak om over te trekken',
    metaDescription:
      'Maak van je iPad, Android-tablet of laptop een heldere digitale lichtbak om schetsen, kalligrafie en negatieven over te trekken.',
    readingTime: '5 min lezen',
    category: 'Licht & beeld',
    intro:
      'Traditionele lichtbakken en lichttafels kosten al snel meer dan € 60 en nemen ruimte in. Heb je al een iPad, Android-tablet of laptop, dan maak je er met één klik een felle, flikkervrije digitale lichtbak van.',
    toolLabel: 'Wit scherm openen als lichtbak',
    toolDescription: 'Wit licht op volledig scherm, ideaal om op papier over te trekken, voor sjablonen en om negatieven te bekijken.',
    sections: [
      {
        title: 'Overtrekken stap voor stap',
        content: ['Met deze tips trek je over zonder per ongeluk het touchscreen te bedienen.'],
        steps: [
          'Open WhiteScreen.vip op volledig scherm en zet de helderheid van je apparaat op 100%.',
          'Vergrendel aanraken: zet op een iPad Begeleide toegang aan (Instellingen > Toegankelijkheid > Begeleide toegang) zodat aanrakingen tijdens het tekenen genegeerd worden.',
          'Op Android: gebruik scherm vastzetten of een vergrendel-app om per ongeluk aanraken te voorkomen.',
          'Leg de voorbeeldtekening op het scherm en daarop een vel overtrekpapier of licht schetspapier (minder dan 90 g/m²).',
          'Trek de lijnen na met een zacht potlood (2B tot 4B) of fineliner met weinig druk.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kan tekenen met potlood op mijn scherm het glas beschadigen?',
        answer:
          'Tabletglas (zoals Gorilla Glass) is veel harder dan potloodgrafiet en krast niet bij normaal gebruik. Vermijd wel harde druk en zorg dat er geen zand of gruis onder het papier ligt.',
      },
    ],
  },
  'best-monitor-settings-for-eye-strain': {
    slug: 'monitorinstellingen-tegen-vermoeide-ogen',
    navLabel: 'Instellingen tegen vermoeide ogen',
    title: 'De beste monitorinstellingen tegen vermoeide ogen, hoofdpijn en lezen in de avond',
    metaTitle: 'De beste monitorinstellingen tegen vermoeide ogen',
    metaDescription:
      'Stem helderheid, contrast, kleurtemperatuur en kamerverlichting af om digitale oogvermoeidheid en het computer vision syndrome te voorkomen.',
    readingTime: '6 min lezen',
    category: 'Schermonderhoud',
    intro:
      'Wie dagelijks 8 tot 10 uur naar een te fel, slecht ingestelde monitor kijkt, krijgt vaak het computer vision syndrome: droge ogen, wazig zien, spanningshoofdpijn en een stijve nek. De schermhelderheid afstemmen op het licht in de kamer is de meest effectieve ergonomische verbetering die je kunt doen.',
    toolLabel: 'Wit scherm openen',
    toolDescription: 'Vergelijk de schermhelderheid met een vel papier in het kamerlicht om een prettige helderheid te vinden.',
    sections: [
      {
        title: 'De belangrijkste monitorinstellingen voor ontspannen ogen',
        content: ['Pas deze op onderzoek gebaseerde ergonomietips toe om oogvermoeidheid direct te verminderen.'],
        steps: [
          'Papiervergelijking: houd een wit vel naast de monitor en stel de helderheid zo in dat een wit venster op volledig scherm even licht is als het papier.',
          'Kleurtemperatuur: verlaag van koel blauw (7500 K) naar warm 5000–6500 K.',
          'Vermijd PWM-flikkering: controleer of je monitor „flikkervrij” is (dimmen met gelijkstroom in plaats van laagfrequente pulsbreedtemodulatie).',
          'Volg de 20-20-20-regel: kijk elke 20 minuten minstens 20 seconden naar iets op 6 meter afstand om je oogspieren te ontspannen.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is de donkere modus beter voor je ogen dan de lichte?',
        answer:
          'In een donkere kamer vermindert de donkere modus de totale hoeveelheid licht en dus verblinding. Maar voor lange teksten in een goed verlichte kamer geeft zwarte tekst op een zacht ingesteld wit meer contrast en lees je sneller.',
      },
    ],
  },
  'common-monitor-display-problems-diagnostics': {
    slug: 'veelvoorkomende-monitorproblemen',
    navLabel: 'Schermdiagnose',
    title: 'Veelvoorkomende monitorproblemen: beeldfouten opsporen en oplossen',
    metaTitle: 'Veelvoorkomende monitorproblemen opsporen',
    metaDescription:
      'Gids voor veelvoorkomende monitorproblemen: flikkeren, kleurbanding, ghosting, vastgelopen pixels en wazige tekst, met snelle oplossingen.',
    readingTime: '6 min lezen',
    category: 'Schermdiagnose',
    intro:
      'Van mysterieus microflikkeren tot wazige tekst en een plotselinge kleurzweem: beeldfouten kunnen komen door driverbugs, slechte kabels, een verkeerde verversingssnelheid of een defect paneel. Deze gids helpt je de oorzaak van elke afwijking stap voor stap te vinden.',
    toolLabel: 'Monitortest openen',
    toolDescription: 'Gebruik diagnostische testbeelden om hardwarefouten te scheiden van kabel- of driverproblemen.',
    sections: [
      {
        title: 'Stappenplan bij beeldfouten',
        content: ['Volg deze volgorde zodra je scherm vreemde dingen laat zien.'],
        steps: [
          'Controleer de kabel: losse of niet-gecertificeerde HDMI- of DisplayPort-kabels geven korte uitvallers, groene vonkjes en flikkering.',
          'Controleer native resolutie en verversingssnelheid: een 4K-scherm op 1080p zonder gehele schaling geeft wazige tekst.',
          'Test met een ander apparaat: sluit een laptop of console aan op dezelfde ingang om te zien of de fout uit de videokaart van je pc of uit het paneel komt.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Waarom wordt mijn monitor af en toe 2 seconden zwart?',
        answer:
          'Korte uitvallers van 1–2 seconden komen bijna altijd door het opnieuw afspreken van bandbreedte voor DSC-compressie, elektromagnetische storing (een koelkast of ventilator die vlakbij aanslaat) of een matige HDMI/DP-kabel die het bij hoge verversingssnelheden niet trekt.',
      },
    ],
  },
}
