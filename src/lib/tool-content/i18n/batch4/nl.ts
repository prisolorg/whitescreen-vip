import type { LocalizedToolContent, ToolTranslations } from '../types'
import type { ToolFaq } from '../../types'

const EXIT: ToolFaq = { question: 'Hoe sluit ik het nepscherm?', answer: 'Druk op Esc, of beweeg de muis of tik op het scherm om de sluitknop te tonen. Het tabblad sluiten werkt ook.' }
const brandFaq = (brand: string): ToolFaq => ({ question: `Is dit verbonden aan ${brand}?`, answer: `Nee. Het is een onafhankelijke namaak voor de lol, niet verbonden aan, goedgekeurd of gesponsord door ${brand}. Productnamen zijn van hun eigenaars.` })

function update(name: string, brand: string, glance: LocalizedToolContent['glance'], extra: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Stel met de snelheidsschuif in hoe snel het percentage oploopt.',
      'Klik op Volledig scherm of druk op F zodat de simulatie het scherm vult en de browser verbergt.',
      'Loop weg en laat de voortgang lopen. Druk op Pauze om de update vast te laten lijken.',
      'Druk op Esc om te stoppen en de grap te onthullen.',
    ],
    useCases: [
      { title: 'Onschuldige kantoorgrappen', description: 'Laat een collega denken dat zijn apparaat wordt bijgewerkt en vertel het daarna.' },
      { title: 'Even pauze', description: 'Lijk bezig als je even van je bureau wegloopt.' },
      { title: 'Rekwisiet voor film en video', description: `Toon een geloofwaardige ${name}-update op de set.` },
      { title: 'Nostalgie', description: 'Bekijk een klassiek systeemscherm voor de lol.' },
    ],
    faqs: [
      { question: 'Is dit een echte update of iets schadelijks?', answer: 'Nee. Het is een onschuldige visuele simulatie in een gewoon browsertabblad. Hij verandert je apparaat niet, installeert niets en vraagt geen gegevens. Druk op Esc om op elk moment te stoppen.' },
      brandFaq(brand),
      extra,
      EXIT,
    ],
  }
}

function call(brand: string, glance: LocalizedToolContent['glance'], extra?: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Pas de vergadertitel bovenaan het gesprek aan.',
      'Zet eventueel je cameravoorbeeld aan: het blijft op je apparaat en wordt nooit opgenomen of verstuurd.',
      'Druk op F of Volledig scherm voor een overtuigend gesprek op volledig scherm.',
      'Druk op Esc om op elk moment te stoppen.',
    ],
    useCases: [
      { title: 'Rekwisiet voor video', description: 'Film een scène met een vergadering zonder echt gesprek.' },
      { title: 'UI-mockups', description: 'Gebruik een gesprekslay-out in presentaties of tutorials.' },
      { title: 'Onschuldige grappen', description: 'Doe alsof je “in een vergadering” zit, voor de lol.' },
      { title: 'Oefenen', description: 'Oefen hoe je op camera overkomt voor een echt gesprek.' },
    ],
    faqs: [
      { question: 'Is dit een echt gesprek of iets schadelijks?', answer: 'Nee. Het is een onschuldige visuele simulatie in een gewoon browsertabblad. Hij maakt geen verbinding met een dienst, installeert niets en vraagt geen gegevens.' },
      brandFaq(brand),
      { question: 'Gebruikt het mijn camera of microfoon?', answer: 'Alleen als je het cameravoorbeeld aanzet. De video blijft op je apparaat en wordt nooit opgenomen of geüpload. De microfoon wordt nooit gebruikt.' },
      EXIT,
      ...(extra ? [extra] : []),
    ],
  }
}

export const nl: ToolTranslations = {
  'oled-gray-test': {
    glance: {
      answer: 'Een OLED-grijstest toont heel donkere grijstinten vlak bij zwart, waar OLED-panelen het vaakst problemen tonen. Hij laat banding bij zwart zien, mura (vlekken), verticale lijnen en ongelijke schaduwen die heldere beelden verbergen op OLED-tv’s, -monitoren en -telefoons.',
      features: ['Bijna zwarte grijstinten van 1% tot 20%, plus een verloop', 'Vlakken op volledig scherm zonder overlays', 'Handmatig doorstappen om rustig te vergelijken', 'Werkt op telefoons, tv’s en OLED-monitoren'],
      benefits: ['Controleer een nieuwe OLED binnen de retourtermijn', 'Vind banding voordat je kalibreert', 'Gratis en snel'],
    },
    steps: ['Doe het licht uit en zet het scherm op je normale helderheid.', 'Druk op F voor volledig scherm en begin bij de stap van 5%.', 'Ga omlaag naar 1–3% om te zien waar het paneel zwart dichtdrukt of vlekkerig wordt.', 'Probeer het grijsverloop om zichtbare sprongen tussen naburige tinten te zoeken.'],
    useCases: [
      { title: 'Uniformiteit bij zwart', description: 'Heel donker grijs toont vlekken en verticale lijnen op OLED-panelen.' },
      { title: 'Dichtgedrukt zwart', description: 'Kijk of de laagste tinten zichtbaar zijn of opgaan in zwart.' },
      { title: 'Flikkeren bij lage helderheid', description: 'Sommige panelen flikkeren bij heel lage grijstinten en helderheid.' },
      { title: 'Toestellen vergelijken', description: 'Vergelijk twee telefoons of tv’s naast elkaar met dezelfde instellingen.' },
    ],
    faqs: [
      { question: 'Waarom ziet bijna zwart grijs er vlekkerig uit op OLED?', answer: 'Elke OLED-pixel wordt apart aangestuurd en kleine verschillen worden zichtbaar bij heel weinig licht. Wat ongelijkheid is normaal bij alle OLED’s.' },
      { question: 'Is de test ook nuttig voor LCD-schermen?', answer: 'Ja, maar bij LCD’s zie je problemen bij zwart vooral als lichtlekken of clouding. Gebruik daarvoor de uniformiteitstest.' },
      { question: 'Waarom zie ik de stap van 1% niet?', answer: 'Veel schermen en beeldstanden drukken de donkerste tinten dicht. Verhoog de helderheid iets of probeer een andere beeldstand.' },
    ],
  },
  'oled-burn-in-test': {
    glance: {
      answer: 'Een OLED-inbrandtest toont effen kleuren op volledig scherm zodat vervaagde logo’s, statusbalken, navigatieknoppen of game-HUD’s zichtbaar worden die ongelijke pixelslijtage heeft achtergelaten. Inbranden is blijvend; beeldretentie is tijdelijk en verdwijnt. Beide zie je het best op grijs, rood en blauw.',
      features: ['Grijze, rode, groene, blauwe en witte vlakken', 'Pijltjestoetsen om snel van kleur te wisselen', 'Tips om inbranden en retentie te onderscheiden', 'Gemaakt voor OLED-telefoons, -tv’s en -monitoren'],
      benefits: ['Controleer een tweedehands OLED-telefoon of -tv voor je koopt', 'Ontdek retentie op tijd', 'Geen app of download'],
    },
    steps: ['Druk op F voor volledig scherm en begin met middengrijs, daarna rood, groen, blauw en wit.', 'Zoek naar vage vormen zoals taakbalken, logo’s, toetsenborden of zenderlogo’s.', 'Gebruik automatisch wisselen als je naar tijdelijke retentie zoekt.', 'Verdwijnen de vormen na een paar minuten, dan was het tijdelijke retentie en geen inbranden.'],
    useCases: [
      { title: 'Tweedehands OLED kopen', description: 'Controleer een gebruikte telefoon of tv op spookbeelden.' },
      { title: 'Game-HUD’s', description: 'Zoek na lange sessies naar levensbalken of minimaps.' },
      { title: 'Retentie of inbranden', description: 'Helpt tijdelijke retentie van blijvend inbranden te onderscheiden.' },
      { title: 'Garantie', description: 'Fotografeer inbranden op een effen kleur voor de support.' },
    ],
    faqs: [
      { question: 'Kan deze tool inbranden verhelpen?', answer: 'Nee. Blijvend inbranden is ongelijke pixelslijtage en geen website kan dat terugdraaien. Gebruik de pixelverversing van je scherm en volg de fabrikant.' },
      { question: 'Wat is het verschil tussen beeldretentie en inbranden?', answer: 'Retentie is tijdelijk en verdwijnt na andere beelden. Inbranden is blijvend en blijft zichtbaar op effen kleuren.' },
      { question: 'Welke kleur toont inbranden het best?', answer: 'Middengrijs en rood tonen het meestal het duidelijkst, maar controleer alle kleuren omdat de slijtage per subpixel verschilt.' },
    ],
  },
  'screen-burn-in-test': {
    glance: {
      answer: 'Met een inbrandtest controleer je elk scherm op spookbeelden en start je daarna een hersteller die kleuren en ruis over het scherm laat gaan. Tijdelijke retentie verdwijnt vaak na 10 tot 30 minuten hersteller; blijvend inbranden door versleten pixels is niet met software te repareren.',
      features: ['Controlemodus met effen kleuren en pijltjestoetsen', 'Herstelmodus: veegpatroon, kleurwissel en ruis', 'Timer die de hersteller vanzelf stopt', 'Voor OLED-, plasma- en LCD-schermen'],
      benefits: ['Wis tijdelijke retentie zonder extra apps', 'Zie of een vlek retentie of inbranden is', 'Gratis en veilig voor je scherm'],
    },
    steps: ['Zet de helderheid hoog en ga in een donkere kamer naar volledig scherm.', 'Loop in de controlemodus met de pijlen of knoppen elke kleur door. 50% grijs toont inbranden het best.', 'Zie je vormen, schakel dan naar de hersteller, kies de witte veeg (of een knipperend patroon als knipperen je niet stoort) en laat hem 10–30 minuten lopen.', 'Controleer daarna opnieuw. Wat na meerdere rondes blijft, is meestal blijvend inbranden.'],
    useCases: [
      { title: 'Tweedehands scherm kopen', description: 'Zie ingebrande logo’s of taakbalken voor je betaalt.' },
      { title: 'Na statisch gebruik', description: 'Controleer monitoren die urenlang dashboards, tickers of games toonden.' },
      { title: 'Retentie wissen', description: 'Start de hersteller als er een spookbeeld blijft hangen.' },
      { title: 'Garantie', description: 'Fotografeer inbranden op grijs voor de support.' },
    ],
    faqs: [
      { question: 'Wat is het verschil tussen beeldretentie en inbranden?', answer: 'Retentie is tijdelijk en verdwijnt na minuten of uren gevarieerd beeld. Inbranden is blijvende slijtage van de pixels.' },
      { question: 'Kan de hersteller inbranden repareren?', answer: 'Hij helpt bij tijdelijke retentie. Blijvend inbranden op OLED is ongelijke slijtage die geen patroon ongedaan maakt; de pixelverversing van je tv of monitor is de beste optie.' },
      { question: 'Welke kleur toont inbranden het best?', answer: 'Midden- of donkergrijs toont het meestal het duidelijkst, gevolgd door rood, groen en blauw.' },
    ],
  },
  'monitor-ghosting-test': {
    glance: {
      answer: 'Een ghostingtest beweegt objecten over het scherm zodat je de sporen ziet die trage pixels achterlaten. Vage kopieën achter het object zijn ghosting; heldere of omgekeerde randen zijn overshoot door te veel overdrive. Zo kies je de beste overdrive-instelling.',
      features: ['Drie bewegende banen met instelbare snelheid', 'Lichte en donkere achtergronden voor verschillende overgangen', 'Referentieraster om de spoorlengte te beoordelen', 'Volgt de echte verversingssnelheid van je scherm'],
      benefits: ['Kies de juiste overdrive-stand om te gamen', 'Vergelijk monitoren voor je koopt of retourneert', 'Gratis alternatief voor cameratests'],
    },
    steps: ['Zet je monitor op de hoogste verversingssnelheid en ga naar volledig scherm.', 'Volg het doel met je ogen. Let op sporen erachter en randen langs de kanten.', 'Verander de snelheid en probeer elke overdrive- of reactietijdstand in het menu van je monitor.', 'Pauzeer om een stilstaand beeld te bekijken; het doel zelf moet scherp zijn.'],
    useCases: [
      { title: 'Overdrive instellen', description: 'Kies de stand met het kortste spoor en zonder omgekeerde ghosting.' },
      { title: 'Zwart uitsmeren bij VA', description: 'De donkere baan toont het paarszwarte spoor dat veel VA-panelen hebben.' },
      { title: 'Monitoren vergelijken', description: 'Gebruik dezelfde snelheid op twee schermen naast elkaar.' },
      { title: 'Nieuwe aankoop checken', description: 'Kijk of beweging er zo uitziet als beloofd.' },
    ],
    faqs: [
      { question: 'Wat is monitor-ghosting?', answer: 'Een vaag spoor achter bewegende objecten, doordat pixels niet snel genoeg van kleur wisselen voor het volgende beeld.' },
      { question: 'Wat is omgekeerde ghosting?', answer: 'Een heldere of gekleurde rand rond bewegende objecten, doordat overdrive de pixels voorbij hun doel duwt. Verlaag de overdrive-stand om dit op te lossen.' },
      { question: 'Waarom ziet het doel er wazig uit zonder ghosting?', answer: 'Sample-and-hold-onscherpte: je ogen volgen het object terwijl elk beeld stilstaat. Hogere verversing of een stroboscopische backlightmodus vermindert dit.' },
    ],
  },
  'frame-rate-test': {
    glance: {
      answer: 'Een framerate-test toont dezelfde beweging met verschillende beelden per seconde naast elkaar: 15, 24, 30, 60 en het maximum van je scherm. Zo zie je het verschil tussen schokkerig en vloeiend, en waarom films op 24 FPS en games op 60 FPS zo anders aanvoelen.',
      features: ['Vijf banen op 15, 24, 30, 60 FPS en maximaal', 'Instelbare snelheid om beweging te overdrijven of te verzachten', 'Toont je gemeten maximale verversing', 'Pauze en volledig scherm'],
      benefits: ['Zie wat een snelle monitor toevoegt', 'Leg FPS uit aan leerlingen of kijkers', 'Werkt in elke moderne browser'],
    },
    steps: ['Kijk naar elke baan; ze bewegen allemaal even snel.', 'Verhoog de snelheid om haperingen beter te zien.', 'Vergelijk op een snel scherm de baan van 60 FPS met de maximale baan.', 'Druk op F of tik twee keer voor volledig scherm, en Esc om te stoppen.'],
    useCases: [
      { title: 'Game-instellingen', description: 'Bepaal of meer FPS minder grafische details waard is.' },
      { title: 'Videoproductie', description: 'Zie waarom film 24 FPS gebruikt en sport 50 of 60.' },
      { title: 'Vrienden laten zien', description: 'Beslecht de discussie of je meer dan 30 FPS ziet.' },
      { title: 'Scherm kopen', description: 'Zie wat een scherm van 120 of 144 Hz toevoegt.' },
    ],
    faqs: [
      { question: 'Waarom lijkt de maximale baan op 60 FPS?', answer: 'Je scherm toont hooguit één beeld per verversing. Op een 60Hz-scherm zien de banen van 60 FPS en maximaal er hetzelfde uit.' },
      { question: 'Waarom schokt 24 FPS hier en in de bioscoop niet?', answer: 'Filmcamera’s leggen bewegingsonscherpte vast in elk beeld, wat beweging vloeiender maakt. Deze test gebruikt scherpe beelden.' },
      { question: 'Welke framerate heb ik nodig om te gamen?', answer: 'Minstens 60 FPS voelt vloeiend in de meeste games; competitieve spelers willen een 144Hz-monitor of hoger bijhouden.' },
    ],
  },
  'screen-color-test': {
    glance: {
      answer: 'Een schermkleurtest toont kleurbalken, RGB-verlopen en verzadigingspatronen zodat je kunt beoordelen hoe nauwkeurig je scherm kleur weergeeft. Let op banding in verlopen, uitgebeten hooglichten, ontbrekende tinten en een kleurzweem om te bepalen of je beeldinstellingen moet aanpassen.',
      features: ['Kleurbalken in SMPTE-stijl', 'Rode, groene, blauwe en grijze verlopen', 'Verzadigings- en huidtintpatronen', 'Volledig scherm met toetsenbordbediening'],
      benefits: ['Zie banding en kleurzweem snel', 'Vergelijk beeldstanden', 'Gratis, zonder kalibratieapparaat'],
    },
    steps: ['Gebruik de standaard of gekalibreerde beeldstand van je scherm.', 'Druk op F voor volledig scherm en wissel van patroon met de knoppen of pijltjestoetsen.', 'Zoek in de verlopen naar vloeiende overgangen zonder stappen of uitbijten aan de lichte kant.', 'Vergelijk hetzelfde patroon op een ander scherm.'],
    useCases: [
      { title: 'Kleurzweem vinden', description: 'Grijs en wit moeten neutraal ogen, zonder roze of groene zweem.' },
      { title: 'Uitbijten controleren', description: 'Kijk of de lichtste stappen van elk kanaal te onderscheiden blijven.' },
      { title: 'Banding controleren', description: 'Verlopen tonen stappen van 6-bitpanelen of zware beeldbewerking.' },
      { title: 'Naast elkaar vergelijken', description: 'Vergelijk een laptop en een externe monitor.' },
    ],
    faqs: [
      { question: 'Kan ik hiermee mijn monitor kalibreren?', answer: 'Grove aanpassingen op het oog kunnen, maar echte kalibratie vraagt een colorimeter en kalibratiesoftware.' },
      { question: 'Waarom tonen mijn verlopen stappen?', answer: 'Meestal heeft het paneel of de beeldbewerking een beperkte kleurdiepte. Nachtstanden en sommige beeldpresets veroorzaken ook banding.' },
      { question: 'Waarom zien kleuren er op telefoon en monitor anders uit?', answer: 'Schermen verschillen in kleurbereik, witpunt en bewerking. Sommige passen kleuren ook automatisch aan op het omgevingslicht.' },
    ],
  },
  'no-signal-screen': {
    glance: {
      answer: 'Een “Geen signaal”-scherm toont de bekende melding van een tv of monitor die via HDMI of kabel niets ontvangt. Op volledig scherm met kleurbalken en een verschuivend meldingsvak is het een overtuigende grap, filmrekwisiet of plaatshouder voor een vrij scherm.',
      features: ['Klassieke kleurbalken of blauwe achtergrond', 'Verschuivend “Geen signaal”-vak zoals op een echte tv', 'Optionele testtoon van 1 kHz en eigen ingangsnaam', 'Volledig scherm met verborgen cursor'],
      benefits: ['Makkelijke, onschuldige grap', 'Rekwisiet voor films, escaperooms en decors', 'Werkt via de browser op smart-tv’s'],
    },
    steps: ['Kies een stijl: klassieke kleurbalken, een zwart scherm met stuiterende melding of een blauw ingangsscherm.', 'Pas de melding en de ingangsnaam aan, zoals “HDMI 1”.', 'Zet eventueel de testtoon van 1 kHz aan: hij begint gedempt en klinkt pas na een klik.', 'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.'],
    useCases: [
      { title: 'Film- en fotorekwisiet', description: 'Richt een set in met een geloofwaardig losgekoppelde tv.' },
      { title: 'Streampauzes', description: 'Gebruik een “geen signaal”-kaart terwijl je pauze neemt.' },
      { title: 'Retrosfeer', description: 'Geef video’s of presentaties een nostalgische tv-uitstraling.' },
      { title: 'Onschuldige grappen', description: 'Laat een scherm losgekoppeld lijken en vertel het daarna.' },
    ],
    faqs: [
      { question: 'Hoe heten de gekleurde balken?', answer: 'Dat zijn SMPTE-kleurbalken, een testbeeld uit de omroepwereld om kleur en helderheid van tv’s en videoapparatuur te kalibreren.' },
      { question: 'Verliest mijn monitor echt het signaal?', answer: 'Nee. Het is een webpagina die er alleen uitziet als een scherm zonder signaal. Je scherm blijft gewoon werken.' },
      { question: 'Hoe kom ik eruit?', answer: 'Druk op Esc, of beweeg de muis en klik op de sluitknop in de hoek.' },
    ],
  },
  'hacker-typer': {
    glance: {
      answer: 'Hacker Typer maakt van willekeurig typen realistische code op het scherm, zodat iedereen eruitziet als een filmhacker. Druk op willekeurige toetsen en er verschijnen regels echt ogende code; activeer “Access Granted”- of “Access Denied”-meldingen om de scène af te maken voor grappen, video’s of de lol.',
      features: ['Echte code verschijnt terwijl je ramt op toetsen', 'Meldingen voor toegang verleend en geweigerd', 'Instelbare typsnelheid en tekstkleur', 'Terminallook op volledig scherm'],
      benefits: ['Direct een hackerscène voor video’s en grappen', 'Leuke manier om kinderen kennis te laten maken met code', 'Gratis, niets te installeren'],
    },
    steps: ['Klik in de terminal en typ wat je wilt, of tik op het scherm op een telefoon.', 'Verander de snelheid om te bepalen hoeveel tekens per toets verschijnen.', 'Druk drie keer op Alt voor “ACCESS GRANTED” of drie keer op Caps Lock voor “ACCESS DENIED”.', 'Gebruik de knop Volledig scherm of F11 voor het volledige effect, en Esc om te stoppen.'],
    useCases: [
      { title: 'Vrienden imponeren', description: 'Lijk een genie terwijl je onzin typt.' },
      { title: 'Film en streaming', description: 'Overtuigende “hack”-beelden voor video’s.' },
      { title: 'Plezier in de klas', description: 'Een speelse manier om interesse in programmeren te wekken.' },
      { title: 'Feestachtergrond', description: 'Laat het draaien op een vrij scherm bij een tech-evenement.' },
    ],
    faqs: [
      { question: 'Hackt Hacker Typer echt iets?', answer: 'Nee. Het toont alleen vooraf geschreven, onschuldige tekst. Het voert geen commando’s uit, gebruikt geen netwerken en raakt je bestanden niet aan.' },
      { question: 'Waarom start de F-toets hier geen volledig scherm?', answer: 'In deze tool typt elke toets code, dus gebruik de knop voor volledig scherm.' },
      { question: 'Werkt het op telefoons?', answer: 'Ja. Tik herhaaldelijk op de terminal om meer code te tonen.' },
    ],
  },
  'hacked-screen': {
    glance: {
      answer: 'De gehackt-schermsimulator toont een nepwaarschuwing “je systeem is gehackt” met glitchtekst, scrollende logs, een voortgangsbalk en een aftelling. Het is een onschuldige grap: er wordt niets gelezen of veranderd, en als de aftelling klaar is onthult een bericht dat het een grap was.',
      features: ['Stijlen rood alarm en groene terminal', 'Eigen kop, logs en aftelling', 'Optionele sirene', 'Eindigt met een duidelijk “grapje”-bericht'],
      benefits: ['Onschuldige grap die dramatisch oogt', 'Rekwisiet voor films, streams en escaperooms', 'Werkt volledig offline in de browser'],
    },
    steps: ['Kies een stijl (rood alarm of groene terminal) en de tekst die je wilt tonen.', 'Zet de optionele sirene aan of uit; hij klinkt pas als je start.', 'Ga naar volledig scherm en laat het apparaat achter voor je vriend.', 'Druk op Esc of beweeg de muis om de sluitknop te tonen.'],
    useCases: [
      { title: 'Grappen', description: 'Een korte schrik voor een vriend die er later om lacht.' },
      { title: 'Films en escaperooms', description: 'Een overtuigend “je bent gehackt”-scherm als rekwisiet.' },
      { title: 'Beveiligingsbewustzijn', description: 'Laat zien hoe scareware eruitziet zodat mensen het leren negeren.' },
      { title: 'Streams en video’s', description: 'Een dramatisch tussenstuk of reactiemoment.' },
    ],
    faqs: [
      { question: 'Hackt of beschadigt dit mijn apparaat?', answer: 'Nee. Het is tekst en animatie in een gewoon browsertabblad. Het voert geen commando’s uit, leest geen bestanden en maakt nergens verbinding mee.' },
      { question: 'Wat doe ik als een echte website zegt dat ik gehackt ben?', answer: 'Sluit het tabblad. Echte beveiligingstools vragen nooit om een nummer te bellen of te betalen om je apparaat te ontgrendelen; zulke pop-ups zijn oplichting.' },
      { question: 'Hoe stop ik?', answer: 'Druk op Esc, of beweeg de muis of tik om de sluitknop te tonen. Het tabblad sluiten werkt ook.' },
    ],
  },
  'zoom-lighting': {
    glance: {
      answer: 'Zoom-verlichting maakt van je scherm een zachte lichtbron voor videogesprekken. Kies een kleurtemperatuur van warm (ongeveer 2700 K) tot daglicht (6500 K), stel de helderheid in en vul het scherm of gebruik een lichtkader rond je Zoom-, Google Meet- of Microsoft Teams-venster.',
      features: ['Kleurtemperatuurschuif in kelvin met voorinstellingen', 'Volledig vlak of kader rond je gesprek', 'Helderheid en eigen kleur', 'Werkt op een tweede monitor of tablet'],
      benefits: ['Helderder, egaler licht op je gezicht zonder lamp te kopen', 'Warm licht dat de huid flatteert', 'Gratis en direct'],
    },
    steps: ['Open deze pagina op een tweede monitor of naast je gespreksvenster.', 'Stel de kleurtemperatuur en helderheid in. Zet je schermhelderheid hoger voor meer licht.', 'Kies vol licht voor maximale helderheid, of het kader om in het midden een donker venster voor je gesprek te houden.', 'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.'],
    useCases: [
      { title: 'Videobellen', description: 'Verhelder en egaliseer je gezicht in donkere kamers.' },
      { title: 'Streaming', description: 'Een zacht hoofdlicht van een vrije monitor of tablet.' },
      { title: 'Selfies', description: 'Gebruik een laptop of tablet als snelle, egale lichtbron.' },
      { title: 'Make-up', description: 'Controleer je make-up bij warm avondlicht of daglicht.' },
    ],
    faqs: [
      { question: 'Welke kleurtemperatuur moet ik gebruiken?', answer: 'Die van de kamer. Ongeveer 3000 K past bij kamers met lampen ’s avonds, 4000–4500 K is neutraal en 5500–6500 K past bij daglicht van een raam.' },
      { question: 'Verandert dit mijn camera?', answer: 'Nee. Het belicht alleen je gezicht. Je kunt de weinig-licht-instelling van je vergaderapp gewoon blijven gebruiken.' },
      { question: 'Wordt mijn scherm feller dan normaal?', answer: 'Nee. Het gebruikt je huidige helderheid; zet die hoger voor meer licht.' },
    ],
  },
  'visual-noise': {
    glance: {
      answer: 'Visuele ruis vult het scherm met bewegende, zacht stromende patronen: zachte mist, kleurrijk plasma en fijne korrel. Het wordt gebruikt als achtergrond voor video’s en streams, als voorbeeld voor designtexturen en als rustig beeld om tot rust te komen.',
      features: ['Stijlen mist, plasma en fijne korrel', 'Schaal, snelheid en kleurenpalet', 'Pauze om een beeld vast te zetten', 'Start gepauzeerd als je minder beweging wilt'],
      benefits: ['Rustige bewegende achtergronden voor video’s en streams', 'Textuurvoorbeeld voor design', 'Gratis en licht'],
    },
    steps: ['Kies een stijl zoals mist, plasma of fijne korrel.', 'Pas schaal, snelheid en kleurenpalet aan.', 'Pauzeer de animatie om een beeld vast te zetten dat je mooi vindt.', 'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.'],
    useCases: [
      { title: 'Sfeerbeeld', description: 'Zachte beweging op een tv of monitor op de achtergrond.' },
      { title: 'Designtexturen', description: 'Voorbeeld voor korrel- en verlooptexturen.' },
      { title: 'VJ-achtergronden', description: 'Eenvoudige generatieve beelden voor evenementen.' },
      { title: 'Ontspanning', description: 'Langzame mist om tot rust te komen.' },
    ],
    faqs: [
      { question: 'Is dit hetzelfde als tv-ruis?', answer: 'Nee. Tv-ruis is per pixel en beeld willekeurig. Deze patronen gebruiken gladde ruis die rustig stroomt.' },
      { question: 'Kost het veel batterij?', answer: 'Het draait op je grafische chip. Verlaag de snelheid of pauzeer om stroom te sparen op een laptop.' },
      { question: 'Houdt het rekening met minder beweging?', answer: 'Ja. Als je systeem minder beweging wil, start de animatie gepauzeerd.' },
    ],
  },
  'color-cycle': {
    glance: {
      answer: 'Een kleurwisselend scherm laat je scherm vloeiend door de kleuren van de regenboog gaan. Stel snelheid en helderheid in voor feestverlichting, sfeerlicht, ontspanning of een snelle check of je scherm elke tint zonder banding toont.',
      features: ['Vloeiende regenboog of stapmodus', 'Snelheid en helderheid instelbaar', 'Volledig scherm met verborgen cursor', 'Houdt rekening met minder beweging'],
      benefits: ['Direct feest- of sfeerlicht', 'Controleert vloeiende kleurovergangen', 'Gratis op elk apparaat'],
    },
    steps: ['Kies een vloeiende regenboog of een stapsgewijze wissel tussen kleuren.', 'Stel de snelheid in met de schuif.', 'Druk op de spatiebalk om te pauzeren en verder te gaan.', 'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.'],
    useCases: [
      { title: 'Sfeerlicht', description: 'Een langzaam wisselende gloed voor feestjes of ontspanning.' },
      { title: 'Vastzittende pixels', description: 'Snel wisselen wordt soms aangeraden bij vastzittende pixels, zonder garantie.' },
      { title: 'Streamsfeer', description: 'Een wisselend achtergrondlicht achter je op camera.' },
      { title: 'Nachtlampje voor kinderen', description: 'Een zacht, langzaam wisselend licht op lage helderheid.' },
    ],
    faqs: [
      { question: 'Kan kleurwisseling vastzittende pixels herstellen?', answer: 'Snel van kleur wisselen helpt soms een vastzittende subpixel weer te reageren, maar dat is niet gegarandeerd en dode pixels herstel je er niet mee.' },
      { question: 'Is snel wisselen veilig?', answer: 'Snel knipperen kan mensen met fotosensitieve epilepsie raken. De snelheid is begrensd, begint langzaam en de voorkeur voor minder beweging wordt gerespecteerd.' },
      { question: 'Kan ik pauzeren op een kleur die ik mooi vind?', answer: 'Ja. Druk op de spatiebalk of de pauzeknop.' },
    ],
  },
  'gradient-screen': {
    glance: {
      answer: 'Een kleurverloopscherm vult je scherm met een zachte overgang tussen kleuren die je kiest. Stel kleuren, hoek en type in, gebruik het als zacht sfeerlicht of achtergrond, controleer je scherm op banding en download het verloop als afbeelding.',
      features: ['Lineaire en radiale verlopen', 'Elke kleur en hoek', 'Download als PNG in hoge resolutie', 'Volledig scherm'],
      benefits: ['Eigen achtergronden in seconden', 'Goede bandingtest voor monitoren', 'Gratis, geen ontwerpapp nodig'],
    },
    steps: ['Kies een voorinstelling of je eigen kleuren.', 'Wissel tussen lineair en radiaal en stel de hoek in.', 'Zet animatie aan voor een langzaam bewegend verloop.', 'Druk op F voor volledig scherm of download het verloop als PNG.'],
    useCases: [
      { title: 'Achtergronden', description: 'Maak een eigen verloopachtergrond in elke resolutie.' },
      { title: 'Sfeerlicht', description: 'Een zachte tweekleurige gloed is rustiger voor de ogen dan een effen kleur.' },
      { title: 'Bandingtest', description: 'Vloeiende verlopen tonen banding op panelen met lage kleurdiepte.' },
      { title: 'Achtergrondbeelden', description: 'Snelle achtergronden voor presentaties en video’s.' },
    ],
    faqs: [
      { question: 'Waarom toont mijn verloop strepen?', answer: 'Dat is banding, veroorzaakt door beperkte kleurdiepte van het paneel of beeldcompressie. Het is een beperking van het scherm, geen fout in het verloop.' },
      { question: 'Kan ik het downloaden?', answer: 'Ja. Kies een resolutie en download een PNG die in je browser wordt gemaakt.' },
      { question: 'Kan ik drie kleuren gebruiken?', answer: 'Ja. Zet de middenkleur aan om een derde kleurpunt toe te voegen.' },
    ],
  },
  'flip-clock-screensaver': {
    glance: {
      answer: 'Een klapklok-schermbeveiliging toont de tijd in grote cijfers die elke minuut omklappen, zoals een retrowekker. Kies 12- of 24-uursnotatie, toon seconden en datum, en draai hem op volledig scherm op een vrije monitor, tablet of tv.',
      features: ['Geanimeerde klapcijfers', '12- en 24-uursnotatie met seconden en datum', 'Licht en donker thema', 'Houdt het scherm aan op volledig scherm'],
      benefits: ['Maakt van een oude tablet een bureauklok', 'Grote, leesbare tijd door de hele kamer', 'Gratis, zonder app'],
    },
    steps: ['Je lokale tijd verschijnt automatisch.', 'Wissel 12/24-uursnotatie, seconden en datum. Elk cijfer klapt om zoals een echte klapklok.', 'Kies een thema dat bij je kamer past.', 'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.'],
    useCases: [
      { title: 'Bureauklok', description: 'Maak van een vrije tablet of monitor een bureau- of nachtkastklok.' },
      { title: 'Presentaties', description: 'Toon de tijd duidelijk tijdens evenementen en pauzes.' },
      { title: 'Focussessies', description: 'Een rustige, minimalistische klok in zicht tijdens het werk.' },
      { title: 'Streaming', description: 'Een stijlvolle “we beginnen zo”-achtergrond.' },
    ],
    faqs: [
      { question: 'Waar komt de tijd vandaan?', answer: 'Van de klok en tijdzone van je apparaat, dus na het laden werkt hij ook offline.' },
      { question: 'Blijft mijn scherm aan?', answer: 'Op volledig scherm houdt een wake lock in ondersteunde browsers het scherm aan.' },
      { question: 'Kan ik de klapanimatie uitzetten?', answer: 'Ja. Als je systeem minder beweging wil, wisselen de cijfers zonder om te klappen.' },
    ],
  },
  'motivational-quote-screensaver': {
    glance: {
      answer: 'Een schermbeveiliging met motiverende citaten toont om de paar seconden een nieuw inspirerend citaat in grote, leesbare letters, met een optionele klok. Hij past bij recepties, klaslokalen, sportscholen en schermen thuis waar mensen even naar kijken.',
      features: ['Citaten van Seneca, Marcus Aurelius, Emerson en meer', 'Wisseltempo, achtergronden en willekeurige volgorde', 'Optionele klok', 'Volledig scherm zonder uitvallen'],
      benefits: ['Een positief scherm voor gedeelde ruimtes', 'Geen instellingen nodig op smart-tv’s', 'Gratis'],
    },
    steps: ['Er verschijnt meteen een willekeurig citaat.', 'Kies een achtergrond en hoeveel seconden elk citaat blijft staan.', 'Gebruik de pijlen of de toetsen ← → om van citaat te wisselen; de spatiebalk pauzeert.', 'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.'],
    useCases: [
      { title: 'Kantoor en receptie', description: 'Een rustige, positieve lus voor receptieschermen en teamruimtes.' },
      { title: 'Klaslokalen', description: 'Toon een gedachte van de dag als leerlingen binnenkomen.' },
      { title: 'Sportscholen en studio’s', description: 'Korte, krachtige zinnen die je door de zaal kunt lezen.' },
      { title: 'Bureau thuis', description: 'Houd een tweede monitor of oude tablet nuttig terwijl je werkt.' },
    ],
    faqs: [
      { question: 'Waar komen de citaten vandaan?', answer: 'Het zijn korte zinnen van gevestigde schrijvers en spreekwoorden, zoals Seneca, Marcus Aurelius, Confucius, Benjamin Franklin en Mark Twain. Ze zitten in de pagina, dus er wordt niets opgehaald.' },
      { question: 'Kan ik één citaat laten staan?', answer: 'Ja. Druk op Pauze (of de spatiebalk) en het citaat blijft staan tot je verdergaat of een pijl indrukt.' },
      { question: 'Blijft het scherm aan?', answer: 'Op volledig scherm voorkomt een wake lock in ondersteunde browsers dat het scherm uitgaat.' },
    ],
  },
  'fake-windows-11-update': update('Windows 11', 'Microsoft', {
    answer: 'Een nep-updatescherm van Windows 11 toont het donkere scherm “Bezig met updates” met de draaiende cirkel en een langzaam oplopend percentage. Op volledig scherm lijkt de computer druk bezig met bijwerken, als grap of filmrekwisiet. Druk op Esc om terug te gaan.',
    features: ['Draaicirkel en tekst in Windows 11-stijl', 'Instelbare snelheid en pauze', 'Volledig scherm met verborgen cursor', 'Esc om te stoppen'],
    benefits: ['Realistische, onschuldige grap', 'Strak rekwisiet voor schermopnames', 'Gratis'],
  }, { question: 'Wat is het verschil met de Windows 10-versie?', answer: 'Deze gebruikt de donkerdere achtergrond en de eenvoudigere opmaak van nieuwere systemen.' }),
  'fake-mac-update': update('macOS', 'Apple', {
    answer: 'Een nep-updatescherm van de Mac toont het zwarte macOS-updatescherm met voortgangsbalk en resterende tijd. Op volledig scherm lijkt het alsof de Mac een update installeert, voor een onschuldige grap of als videorekwisiet. Druk op Esc om te stoppen.',
    features: ['Voortgangsbalk en resterende tijd in macOS-stijl', 'Instelbare updatesnelheid', 'Volledig scherm met verborgen cursor', 'Esc om te stoppen'],
    benefits: ['Onschuldige grap voor Mac-gebruikers', 'Strak rekwisiet voor video’s', 'Gratis'],
  }, { question: 'Wordt het echte Apple-logo gebruikt?', answer: 'Nee. Er wordt een neutraal algemeen symbool gebruikt om merkmisbruik te voorkomen, met behoud van de bekende opmaak.' }),
  'fake-android-update': update('Android', 'Google', {
    answer: 'Een nep-updatescherm van Android toont een systeemupdate in uitvoering met voortgangsbalk. Open het op volledig scherm op een telefoon of tablet zodat het lijkt alsof hij wordt bijgewerkt, en tik op de sluitknop om de grap te onthullen.',
    features: ['Updatescherm en voortgang in Android-stijl', 'Instelbare snelheid', 'Volledig scherm op telefoons en tablets', 'Tik om te stoppen'],
    benefits: ['Grap die op elke telefoon werkt', 'Geen app installeren', 'Gratis'],
  }, { question: 'Werkt het op telefoons?', answer: 'Ja. In de meeste Android-browsers verbergt volledig scherm de adresbalk. In Safari op de iPhone vult het in plaats daarvan het browservenster.' }),
  'fake-windows-xp-update': update('Windows XP', 'Microsoft', {
    answer: 'Een nep-updatescherm van Windows XP maakt het klassieke blauwe scherm “Updates installeren” uit de vroege jaren 2000 na, met voortgangsbalk. Gebruik het voor nostalgische grappen, retrovideo’s en filmsets uit die tijd. Druk op Esc om te stoppen.',
    features: ['Klassieke look uit het XP-tijdperk', 'Voortgangsbalk en statustekst', 'Volledig scherm met verborgen cursor', 'Esc om te stoppen'],
    benefits: ['Direct nostalgie', 'Tijdgetrouw rekwisiet', 'Gratis'],
  }, { question: 'Waarom ziet het er zo retro uit?', answer: 'Het bootst de dialoogstijl van de vroege jaren 2000 na, voor een nostalgische, herkenbare look.' }),
  'fake-chrome-os-update': update('ChromeOS', 'Google', {
    answer: 'Een nep-updatescherm van ChromeOS toont een update in Chromebook-stijl in uitvoering. Draai het op volledig scherm op een Chromebook of andere computer zodat het systeem lijkt te updaten, als onschuldige grap of demorekwisiet. Druk op Esc om te stoppen.',
    features: ['Updatescherm in ChromeOS-stijl', 'Instelbare voortgangssnelheid', 'Volledig scherm met verborgen cursor', 'Esc om te stoppen'],
    benefits: ['Werkt op Chromebooks van school en werk', 'Onschuldige grap', 'Gratis'],
  }, { question: 'Werkt het op een Chromebook?', answer: 'Ja. Druk op de toets voor volledig scherm of de knop Volledig scherm voor het volledige effect.' }),
  'fake-ubuntu-update': update('Ubuntu', 'Canonical', {
    answer: 'Een nep-updatescherm van Ubuntu toont Linux-pakketupdates die voorbij scrollen in een terminal met voortgangsregels. Het lijkt een echte systeemupgrade: een leuke grap voor ontwikkelaars en een geloofwaardig rekwisiet voor video’s over Linux.',
    features: ['Scrollende updatetekst in apt-stijl', 'Terminalkleuren in Ubuntu-stijl', 'Volledig scherm', 'Esc om te stoppen'],
    benefits: ['Grap voor ontwikkelaars', 'Realistisch terminalrekwisiet', 'Gratis'],
  }, { question: 'Zijn de logregels echte commando’s?', answer: 'Nee. Het is vooraf geschreven tekst voor de show en er wordt niets uitgevoerd op je computer.' }),
  'fake-windows-xp-boot': {
    glance: {
      answer: 'Een nep-opstartscherm van Windows XP speelt het klassieke opstartscherm met de bewegende blauwe laadbalk op zwart. Een snel retrorekwisiet voor video’s, films en grappen, en een nostalgische schermbeveiliging voor fans van het besturingssysteem uit 2001.',
      features: ['Klassiek opstartscherm met bewegende laadbalk', 'Herhaalt zo lang als je wilt', 'Volledig scherm met verborgen cursor', 'Esc om te stoppen'],
      benefits: ['Retrorekwisiet met één klik', 'Nostalgische schermbeveiliging', 'Gratis'],
    },
    steps: ['Het opstartscherm begint meteen, met blauwe blokjes die door de laadbalk schuiven.', 'Druk op F of Volledig scherm zodat het je scherm vult en de browser verbergt.', 'Laat het draaien: de laadbalk herhaalt zo lang als je wilt.', 'Druk op Esc om te stoppen.'],
    useCases: [
      { title: 'Nostalgie', description: 'Denk terug aan het opstarten van een pc uit de vroege jaren 2000.' },
      { title: 'Retrorekwisiet', description: 'Richt een vintage computer in voor foto’s of film.' },
      { title: 'Onschuldige grappen', description: 'Laat een moderne pc lijken op XP op te starten.' },
      { title: 'Streamintro’s', description: 'Een retro “bezig met opstarten”-intro voor streams.' },
    ],
    faqs: [
      { question: 'Is dit echt of schadelijk?', answer: 'Nee. Het is een onschuldige visuele simulatie in een gewoon browsertabblad. Hij verandert je apparaat niet en installeert niets.' },
      brandFaq('Microsoft'),
      { question: 'Speelt het het opstartgeluid?', answer: 'Nee. Uit respect voor je oren en het auteursrecht is er geen opstartgeluid.' },
      EXIT,
    ],
  },
  'fake-zoom-meeting': call('Zoom Video Communications', {
    answer: 'Een nep-Zoomvergaderscherm toont een videogesprek in Zoom-stijl met een raster van deelnemers, een werkbalk en je eigen cameravoorbeeld. Voor grappen, filmrekwisieten, screenshots en oefenen op camera. Je camerabeeld blijft op je apparaat en wordt nooit opgenomen of geüpload.',
    features: ['Deelnemersraster met namen en dempiconen', 'Je live camera, ook op volledig scherm', 'Vergadertimer en werkbalk', 'Bewerkbare vergadertitel'],
    benefits: ['Realistisch gespreksrekwisiet voor video’s', 'Oefen presenteren op camera', 'Privé: niets verlaat je apparaat'],
  }, { question: 'Wat is het verschil met het Teams-vergaderscherm?', answer: 'Dit scherm volgt de Zoom-opmaak: een galerij van tegels met de bediening onderaan. Het Teams-scherm zet de bediening en een rode Verlaten-knop in een bovenbalk met vergadertimer.' }),
  'fake-teams-meeting': call('Microsoft', {
    answer: 'Een nep-vergaderscherm van Microsoft Teams toont een gesprek in Teams-stijl met deelnemerstegels, de vergaderbalk en je cameravoorbeeld. Gebruik het voor grappen, rekwisieten of om een presentatie te oefenen. Het voorbeeld blijft in je browser en wordt nooit opgenomen.',
    features: ['Tegels en bediening in Teams-stijl', 'Live camera op volledig scherm', 'Vergadertimer', 'Bewerkbare vergadertitel'],
    benefits: ['Geloofwaardig kantoorrekwisiet', 'Oefen gesprekken in alle rust', 'Privé en gratis'],
  }, { question: 'Kan ik de naam van de vergadering veranderen?', answer: 'Ja. Typ een nieuwe naam in het titelveld onder het scherm. Hij verschijnt meteen in de bovenbalk en er wordt niets opgeslagen of verstuurd.' }),
  'fake-google-meet': call('Google', {
    answer: 'Een nep-Google Meet-scherm toont een videogesprek in Meet-stijl met deelnemerstegels, de bedieningsbalk onderaan en je eigen cameravoorbeeld. Geschikt voor grappen, video’s en presentatieoefening, en je camerabeeld verlaat nooit je apparaat.',
    features: ['Tegels en bedieningsbalk in Meet-stijl', 'Live camera op volledig scherm', 'Timer en bewerkbare vergadertitel', 'Geen Google-login nodig'],
    benefits: ['Realistisch rekwisiet voor films en tutorials', 'Oefen op camera', 'Privé en gratis'],
  }, { question: 'Is de vergadercode echt?', answer: 'Nee. “abc-defg-hij” is voorbeeldtekst. Niemand kan deelnemen en de pagina maakt nooit verbinding met Google Meet of een andere dienst.' }),
  'fake-slack-huddle': call('Slack Technologies', {
    answer: 'Een nep-Slack-huddlescherm toont een audio- en videohuddle in Slack-stijl met deelnemers en bediening. Gebruik het als grap, als screenshotrekwisiet voor presentaties of als filmachtergrond, zonder koppeling met een echte Slack-werkruimte.',
    features: ['Deelnemersweergave in huddle-stijl', 'Spreekindicatoren en bediening', 'Volledig scherm', 'Bewerkbare titel'],
    benefits: ['Snel rekwisiet voor thuiswerkvideo’s', 'Onschuldige grap', 'Gratis'],
  }),
  'fake-radar-screen': {
    glance: {
      answer: 'Een nep-radarscherm toont een klassieke ronde radarweergave, een zogeheten plan position indicator, met een draaiende veeglijn, vervagende contacten en afstandsringen. Uitlezingen en een optionele ping maken het een overtuigend rekwisiet voor films, escaperooms, games en sciencefictiongrappen.',
      features: ['Draaiende veeglijn met nagloeien', 'Bewegende contacten en afstandsringen', 'Uitlezing van peiling en afstand', 'Optionele sonarping'],
      benefits: ['Direct een sciencefiction- of militair rekwisiet', 'Ideaal voor escaperooms en podiumdecors', 'Gratis en offline te gebruiken'],
    },
    steps: ['De radar begint meteen te vegen.', 'Kies een kleur (groen, amber of blauw), de veegsnelheid en het aantal contacten.', 'Zet de ping aan als je wilt; hij klinkt pas als je hem inschakelt.', 'Druk op F of Volledig scherm om het scherm te vullen, en Esc om te stoppen.'],
    useCases: [
      { title: 'Film- en theaterrekwisiet', description: 'Een overtuigend controlekamerscherm zonder echte apparatuur.' },
      { title: 'Escaperooms en games', description: 'Zet de sfeer voor onderzeeër-, ruimte- of spionagethema’s.' },
      { title: 'Feestjes en streams', description: 'Een bewegende sciencefictionachtergrond op een tv of tweede monitor.' },
      { title: 'Schermbeveiliging', description: 'Een rustige, herhalende animatie voor een ongebruikt scherm.' },
    ],
    faqs: [
      { question: 'Toont dit echte radar- of vliegtuiggegevens?', answer: 'Nee. Elk contact wordt willekeurig in je browser gemaakt. Het is alleen voor vermaak en als rekwisiet.' },
      { question: 'Waarom vervagen de stippen?', answer: 'Klassieke radarschermen gebruikten fosfor dat na de straal bleef nagloeien en daarna doofde. Het vervagen bootst dat nagloeien na.' },
      { question: 'Hoe stop ik?', answer: 'Druk op Esc, of beweeg de muis of tik om de sluitknop te tonen. Het tabblad sluiten werkt ook.' },
    ],
  },
}
