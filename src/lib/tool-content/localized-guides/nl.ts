import type { LanguageGuides } from './types'
import { DvdScreensaverGuideNl } from '@/components/home/i18n/nl/dvd-screensaver-guide'
import { BrokenScreenGuideNl } from '@/components/home/i18n/nl/broken-screen-guide'
import { FakeZoomMeetingGuideNl } from '@/components/home/i18n/nl/fake-zoom-meeting-guide'
import { FakeWindowsUpdateGuideNl } from '@/components/home/i18n/nl/fake-windows-update-guide'
import { FakeWindows11UpdateGuideNl } from '@/components/home/i18n/nl/fake-windows-11-update-guide'
import { FakeBsodGuideNl } from '@/components/home/i18n/nl/fake-bsod-guide'
import { FakeMacUpdateGuideNl } from '@/components/home/i18n/nl/fake-mac-update-guide'
import { PomodoroTimerGuideNl } from '@/components/home/i18n/nl/pomodoro-timer-guide'
import { FlipClockGuideNl } from '@/components/home/i18n/nl/flip-clock-guide'
import { ZoomLightingGuideNl } from '@/components/home/i18n/nl/zoom-lighting-guide'
import { CountdownTimerGuideNl } from '@/components/home/i18n/nl/countdown-timer-guide'
import { RingLightGuideNl } from '@/components/home/i18n/nl/ring-light-guide'
import { StopwatchGuideNl } from '@/components/home/i18n/nl/stopwatch-guide'
import { RefreshRateGuideNl } from '@/components/home/i18n/nl/refresh-rate-guide'
import { DeadPixelGuideNl } from '@/components/home/i18n/nl/dead-pixel-guide'
import { TouchScreenGuideNl } from '@/components/home/i18n/nl/touch-screen-guide'
import { MonitorGhostingGuideNl } from '@/components/home/i18n/nl/monitor-ghosting-guide'
import { MonitorTestGuideNl } from '@/components/home/i18n/nl/monitor-test-guide'
import { ScreenBurnInGuideNl } from '@/components/home/i18n/nl/screen-burn-in-guide'
import { ScreenResolutionGuideNl } from '@/components/home/i18n/nl/screen-resolution-guide'
import { ScreenColorGuideNl } from '@/components/home/i18n/nl/screen-color-guide'
import { FrameRateGuideNl } from '@/components/home/i18n/nl/frame-rate-guide'
import { OledGrayGuideNl } from '@/components/home/i18n/nl/oled-gray-guide'
import { HackedScreenGuideNl } from '@/components/home/i18n/nl/hacked-screen-guide'
import { NoSignalGuideNl } from '@/components/home/i18n/nl/no-signal-guide'
import { BlackScreenGuideNl } from '@/components/home/i18n/nl/black-screen-guide'
import { YellowScreenGuideNl } from '@/components/home/i18n/nl/yellow-screen-guide'
import { GreenScreenGuideNl } from '@/components/home/i18n/nl/green-screen-guide'
import { BlueScreenGuideNl } from '@/components/home/i18n/nl/blue-screen-guide'
import { RedScreenGuideNl } from '@/components/home/i18n/nl/red-screen-guide'
import { PinkScreenGuideNl } from '@/components/home/i18n/nl/pink-screen-guide'
import { WhiteScreenGuideNl } from '@/components/home/i18n/nl/white-screen-guide'

/** Dutch (je-vorm, Dutch UI button names, Dutch search terms). */
export const nl: LanguageGuides = {
  tools: {
    'dvd-screensaver': {
      Guide: DvdScreensaverGuideNl,
      faqs: [
        {
          question: 'Is dit het officiële dvd-logo?',
          answer:
            'Nee. De DVD screensaver tekent een logo in dvd-stijl in je browser en is niet verbonden aan de DVD Format/Logo Licensing Corporation, die eigenaar is van het DVD Video-logo.',
        },
        {
          question: 'Waarom verandert het logo van de DVD screensaver van kleur?',
          answer:
            'Net als bij de klassieke screensaver van een dvd-speler kiest het logo een nieuwe kleur telkens als het een rand raakt, en het herhaalt nooit twee keer achter elkaar dezelfde kleur.',
        },
        {
          question: 'Kan ik de DVD screensaver als echte screensaver gebruiken op Windows of Mac?',
          answer:
            'Hij draait in je browser in plaats van als systeemscreensaver te worden geïnstalleerd. Open hem op volledig scherm wanneer je computer niet in gebruik is; de eigen screensaver- en slaapinstellingen van je systeem blijven gelden.',
        },
      ],
    },
    'broken-screen': {
      Guide: BrokenScreenGuideNl,
      faqs: [
        {
          question: 'Kan het gebroken scherm effect mijn scherm beschadigen?',
          answer: 'Nee. Het is alleen een afbeelding die in je browser wordt getekend. Druk op Esc of sluit het tabblad en het scherm is weer normaal.',
        },
        {
          question: 'Werkt de gebroken scherm grap op een Chromebook?',
          answer:
            'Ja. Hij werkt in elke moderne browser, ook op Chromebooks, Windows- en Mac-computers, telefoons, tablets en browsers van smart-tv’s. Er wordt niets geïnstalleerd.',
        },
        {
          question: 'Hoe gebruik ik een gebarsten scherm-grap op een verantwoorde manier?',
          answer: 'Houd het kort, kies iemand die erom kan lachen, gebruik het nooit om geld of informatie te krijgen en onthul de grap meteen.',
        },
      ],
    },
    'fake-zoom-meeting': {
      Guide: FakeZoomMeetingGuideNl,
      faqs: [
        {
          question: 'Is deze nep Zoom-vergadering verbonden met Zoom?',
          answer:
            'Nee. Het is een onafhankelijke simulatie in Zoom-stijl en is niet verbonden aan Zoom Video Communications. Niemand kan deelnemen en er wordt nergens iets naartoe gestuurd.',
        },
        {
          question: 'Gebruikt het nep Zoom-vergaderscherm mijn camera?',
          answer:
            'Alleen als je Cameravoorbeeld inschakelen aanzet. Je beeld verschijnt in je eigen tegel en verlaat je apparaat nooit; er wordt niets opgenomen of geüpload. De microfoon wordt nooit gebruikt.',
        },
        {
          question: 'Heeft de nep Zoom-vergadering geluid?',
          answer: 'Nee, hij is stil. Voor een nepvergadering-video voeg je geluid of geroezemoes toe in je videobewerkingsprogramma.',
        },
      ],
    },
    'fake-windows-10-update': {
      Guide: FakeWindowsUpdateGuideNl,
      faqs: [
        {
          question: 'Kan een nep Windows update-scherm mijn computer beschadigen?',
          answer: 'Nee. Het is alleen een pagina in je browser. Er wordt niets geïnstalleerd of gewijzigd, en met Esc of door het tabblad te sluiten stop je het.',
        },
        {
          question: 'Kan ik de nep Windows 10 update laten vastlopen?',
          answer: 'Ja. Druk op Pauze en het percentage blijft staan waar het is. Open Meer om te wijzigen hoe snel het oploopt.',
        },
        {
          question: 'Werkt de nep Windows 10 update op een Mac of Chromebook?',
          answer: 'Ja. Hij draait in elke moderne browser, dus je kunt een nep Windows update ook op een Mac, Chromebook of tablet laten zien.',
        },
      ],
    },
    'fake-windows-11-update': {
      Guide: FakeWindows11UpdateGuideNl,
      faqs: [
        {
          question: 'Is de nep Windows 11 update echt?',
          answer:
            'Nee. Het is een pagina in je browser die eruitziet als het update-scherm van Windows 11. Er wordt niets geïnstalleerd, en met Esc of door het tabblad te sluiten stop je het.',
        },
        {
          question: 'Hoe lang duurt de nep Windows 11 update?',
          answer: 'Hij wordt nooit klaar: het percentage begint na 100% opnieuw. Gebruik Pauze om hem op één getal te houden, of open Meer om de snelheid te wijzigen.',
        },
        {
          question: 'Kan ik de nep Windows 11 update op een Mac of Chromebook gebruiken?',
          answer: 'Ja. Hij draait in elke moderne browser, dus het update-scherm van Windows 11 werkt ook op Macs, Chromebooks, tablets en telefoons.',
        },
      ],
    },
    'fake-blue-screen-of-death': {
      Guide: FakeBsodGuideNl,
      faqs: [
        {
          question: 'Kan een nep blue screen of death mijn computer beschadigen?',
          answer: 'Nee. Het is een afbeelding in je browser. Je computer blijft normaal werken, en met Esc of door het tabblad te sluiten stop je het.',
        },
        {
          question: 'Waarom is het blue screen of death nu zwart?',
          answer: 'Nieuwere versies van Windows 11 tonen het crashscherm in zwart in plaats van blauw. Kies Zwart (nieuw) in het menu Stijl voor die look.',
        },
        {
          question: 'Kan ik de stopcode op het blue screen of death wijzigen?',
          answer: 'Ja. Open Meer en kies een stopcode, zoals CRITICAL_PROCESS_DIED of MEMORY_MANAGEMENT. Hij wordt meteen op het scherm bijgewerkt.',
        },
      ],
    },
    'fake-mac-update': {
      Guide: FakeMacUpdateGuideNl,
      faqs: [
        {
          question: 'Is deze nep Mac update gemaakt door Apple?',
          answer:
            'Nee. Het is een onafhankelijke simulatie van een update-scherm in macOS-stijl en is niet verbonden aan Apple. Er wordt niets geïnstalleerd of gewijzigd op je Mac.',
        },
        {
          question: 'Kan ik de nep Mac update uren laten duren?',
          answer:
            'Zet de Updateduur onder Meer op 120 minuten. Als de balk vol is, start het scherm opnieuw en begint de update weer, dus hij kan zo lang draaien als je wilt.',
        },
      ],
    },
    'pomodoro-timer': {
      Guide: PomodoroTimerGuideNl,
      faqs: [
        {
          question: 'Wat is een Pomodoro timer?',
          answer:
            'Een Pomodoro timer verdeelt werk in geconcentreerde blokken, meestal van 25 minuten, met een korte pauze na elk blok en een langere pauze na vier. Hij volgt de pomodoro techniek van Francesco Cirillo.',
        },
        {
          question: 'Hoe lang duurt één pomodoro?',
          answer: 'Traditioneel 25 minuten focus, gevolgd door een pauze van 5 minuten. Je kunt beide wijzigen onder Meer, bijvoorbeeld naar 50 en 10 minuten.',
        },
        {
          question: 'Werkt de Pomodoro timer op mijn telefoon?',
          answer: 'Ja. Open hem in de browser van je telefoon en druk op Start. Houd het tabblad open, zodat je het geluidje hoort als een fase eindigt.',
        },
        {
          question: 'Is deze Pomodoro timer gratis?',
          answer: 'Ja. Hij is helemaal gratis, zonder account, zonder app en zonder advertenties in de timer zelf.',
        },
      ],
    },
    'flip-clock-screensaver': {
      Guide: FlipClockGuideNl,
      faqs: [
        {
          question: 'Houdt de klapklok mijn scherm aan?',
          answer:
            'Ja, op volledig scherm. Browsers die het ondersteunen houden het scherm aan zolang het op volledig scherm staat, dus hij kan de hele dag als bureauklok draaien.',
        },
        {
          question: 'Kan ik de tijd in 12-uursnotatie tonen?',
          answer: 'Ja. Zet 24-uursnotatie uit en de klok schakelt over naar 12-uurstijd met een AM- of PM-label.',
        },
        {
          question: 'Kan ik hem als screensaver gebruiken op Windows of Mac?',
          answer:
            'Hij draait in je browser in plaats van als systeemscreensaver te worden geïnstalleerd. Open hem op volledig scherm op een vrij scherm of wanneer je computer niet in gebruik is.',
        },
      ],
    },
    'zoom-lighting': {
      Guide: ZoomLightingGuideNl,
      faqs: [
        {
          question: 'Kan ik de verlichting voor videogesprekken gebruiken op dezelfde laptop als mijn gesprek?',
          answer:
            'Het werkt het best op een tweede scherm, tablet of telefoon achter je webcam, zodat het gesprek zichtbaar blijft. Op één laptop zou verlichting op volledig scherm je Zoom-venster bedekken.',
        },
        {
          question: 'Wat is de beste kleurtemperatuur voor verlichting bij videogesprekken?',
          answer: 'Neutraal (4500 K) past bij de meeste ruimtes. Kies Daglicht (6500 K) om bij het licht van een raam te passen, of Warm (3000 K) voor een zachtere avondlook.',
        },
        {
          question: 'Is het gratis?',
          answer: 'Ja. Het is gratis in elke browser, zonder app of account, en werkt met Zoom, Teams, Google Meet en elk ander videogesprek.',
        },
      ],
    },
    'countdown-timer': {
      Guide: CountdownTimerGuideNl,
      faqs: [
        {
          question: 'Hoe lang kan ik aftellen?',
          answer:
            'Elke duur tot 99 uur, 59 minuten en 59 seconden. Kies 1, 5, 10, 15, 25, 45 of 60 minuten in het menu Timer, of klik op de uren, minuten en seconden op het scherm en typ je eigen tijd, en druk dan op Start.',
        },
        {
          question: 'Maakt de aftelklok geluid als de tijd om is?',
          answer: 'Ja. Er klinkt een geluidssignaal en het scherm knippert rood als de tijd om is. Zet het geluid uit onder Meer om stil af te tellen.',
        },
        {
          question: 'Kan de aftelklok aftellen tot een datum?',
          answer:
            'Ja. Kies Aftellen tot een datum in het menu Timer, kies de datum en tijd, voeg eventueel een naam voor het evenement toe en druk op Start. Hij toont de resterende dagen, uren, minuten en seconden en onthoudt je aftelling in deze browser als je terugkomt.',
        },
      ],
    },
    'ring-light': {
      Guide: RingLightGuideNl,
      faqs: [
        {
          question: 'Kan een scherm een echte ringlamp vervangen?',
          answer:
            'Voor videogesprekken, selfies en make-up werkt een fel scherm verrassend goed. Een echte ledlamp is feller en beter om in een donkere kamer of van ver weg te filmen.',
        },
        {
          question: 'Werkt de ringlamp online op mijn telefoon?',
          answer: 'Ja. Open hem op een telefoon of tablet, zet de helderheid hoog en dubbeltik voor volledig scherm, en richt het scherm dan op je gezicht.',
        },
        {
          question: 'Welke kleur is het best voor make-up?',
          answer: 'Wit op volle helderheid, zodat kleuren echt ogen. Open Meer om het wit warmer of koeler te maken, passend bij je kamer.',
        },
      ],
    },
    stopwatch: {
      Guide: StopwatchGuideNl,
      faqs: [
        {
          question: 'Hoe nauwkeurig is de stopwatch?',
          answer:
            'Hij gebruikt de zeer nauwkeurige klok van je browser en toont de tijd tot op een honderdste seconde. Als het tabblad naar de achtergrond gaat, klopt de tijd nog steeds als je terugkomt.',
        },
        {
          question: 'Welke sneltoetsen zijn er?',
          answer: 'De spatiebalk start en pauzeert, L slaat een ronde op en R zet terug naar nul.',
        },
        {
          question: 'Kan ik mijn rondes bewaren?',
          answer:
            'Ja. Druk op Rondes kopiëren om elke ronde met tussentijd en totaaltijd te kopiëren, en plak ze in een spreadsheet, notitie of bericht.',
        },
      ],
    },
    'screen-refresh-rate-test': {
      Guide: RefreshRateGuideNl,
      faqs: [
        {
          question: 'Hoe nauwkeurig is de verversingssnelheid test?',
          answer:
            'Voor de meeste schermen zeer nauwkeurig. Hij timet honderden frames en rondt af op de dichtstbijzijnde gangbare waarde. Drukke tabbladen, energiebesparing of een trage computer kunnen een lagere waarde geven, dus sluit andere apps en druk opnieuw op Opnieuw meten.',
        },
        {
          question: 'Waarom toont mijn 144Hz-monitor 60 Hz?',
          answer:
            'Het scherm staat waarschijnlijk op 60 Hz. Kies de hogere waarde in je beeldscherminstellingen en gebruik een kabel en poort die dat ondersteunen, zoals DisplayPort of een snelle HDMI-kabel.',
        },
        {
          question: 'Werkt de verversingssnelheid test op telefoons?',
          answer: 'Ja. Open hem in de browser van je telefoon. Zet eerst de energiebesparingsmodus uit, want die beperkt het scherm vaak tot 60 Hz.',
        },
      ],
    },
    'dead-pixel-test': {
      Guide: DeadPixelGuideNl,
      faqs: [
        {
          question: 'Hoe lang duurt een dode pixel test?',
          answer: 'Ongeveer een minuut. Doorloop alle 9 kleuren op volledig scherm en bekijk bij elke kleur het hele scherm.',
        },
        {
          question: 'Is één dode pixel normaal?',
          answer:
            'Het komt voor, en veel fabrikanten vervangen een scherm pas na een bepaald aantal defecte pixels. Bekijk de garantievoorwaarden van je monitor, laptop of telefoon.',
        },
        {
          question: 'Wat is het verschil tussen een dode pixel en een vastzittende pixel?',
          answer:
            'Een dode pixel licht nooit op en ziet er zwart uit. Een vastzittende pixel blijft op één kleur staan, zoals rood, groen of blauw, en is soms te herstellen door er knipperende kleuren overheen te laten lopen.',
        },
      ],
    },
    'touch-screen-test': {
      Guide: TouchScreenGuideNl,
      faqs: [
        {
          question: 'Hoe test ik mijn touchscreen op dode plekken?',
          answer: 'Kies Raster voor dode zones en veeg over elk vakje. Vakjes die donker blijven nadat je ze hebt aangeraakt, zijn dode plekken.',
        },
        {
          question: 'Werkt de touchscreen test op een iPhone?',
          answer: 'Ja. Hij werkt in Safari en andere browsers op de iPhone, en ook op Android-telefoons, tablets en laptops met touchscreen.',
        },
        {
          question: 'Hoeveel aanraakpunten moet mijn telefoon ondersteunen?',
          answer: 'De meeste telefoons en tablets herkennen er 5 tot 10 tegelijk. Gebruik Multitouch en kijk naar Max. om te zien hoeveel de jouwe aankan.',
        },
      ],
    },
    'monitor-ghosting-test': {
      Guide: MonitorGhostingGuideNl,
      faqs: [
        {
          question: 'Heeft elke monitor een beetje ghosting?',
          answer:
            'De meeste lcd-monitoren tonen een beetje bij hoge snelheden. Het is een probleem als het spoor bij normale snelheden lang is of als er een lichte halo verschijnt. Pas dan de overdrive aan en doe de monitor ghosting test opnieuw.',
        },
        {
          question: 'Is ghosting hetzelfde als input lag?',
          answer:
            'Nee. Ghosting is een zichtbaar spoor door trage pixels; input lag is een vertraging tussen je muis of controller en het scherm. Deze test toont alleen ghosting.',
        },
        {
          question: 'Is dit een anti-ghosting test voor toetsenborden?',
          answer:
            'Nee. Anti-ghosting bij toetsenborden gaat over het registreren van veel toetsen die tegelijk worden ingedrukt. Deze monitor ghosting test controleert bewegingssporen op je scherm.',
        },
      ],
    },
    'monitor-test': {
      Guide: MonitorTestGuideNl,
      faqs: [
        {
          question: 'Is de monitortest gratis en online?',
          answer: 'Ja. Hij draait in je browser op elke monitor, laptop, tv of telefoon, zonder download of account.',
        },
        {
          question: 'Hoe test ik een nieuwe monitor?',
          answer:
            'Doe de testpatronen van de monitortest op volledig scherm in de native resolutie, en daarna de [dode pixel test](/dead-pixel-test) en de [scherm uniformiteitstest](/screen-uniformity-test). Het beste moment is zolang je de monitor nog kunt terugsturen.',
        },
        {
          question: 'Kan een monitortest mijn scherm kalibreren?',
          answer:
            'Hij helpt je om helderheid, contrast en gamma op het oog in te stellen. Nauwkeurige kalibratie vraagt om een hardwarematige colorimeter of de kalibratietool van je systeem.',
        },
      ],
    },
    'screen-burn-in-test': {
      Guide: ScreenBurnInGuideNl,
      faqs: [
        {
          question: 'Hoe lang duurt het voordat een scherm inbrandt?',
          answer:
            'Meestal honderden of duizenden uren van hetzelfde stilstaande beeld, vaak op hoge helderheid. Beeldretentie op lcd kan na een paar uur verschijnen, maar vervaagt weer.',
        },
        {
          question: 'Hoe lang moet ik de inbrandhersteller laten draaien?',
          answer:
            'Begin met 10 tot 30 minuten en doe daarna de scherm inbrand test opnieuw. Herhaal dit een paar keer; als er niets verandert, is het inbranden waarschijnlijk blijvend.',
        },
        {
          question: 'Werkt de scherm inbrand test op telefoons?',
          answer:
            'Ja. Open hem in de browser van je telefoon, zet de helderheid hoog en dubbeltik voor volledig scherm. Probeer op OLED- en AMOLED-telefoons ook de [OLED inbrandtest](/oled-burn-in-test).',
        },
      ],
    },
    'screen-resolution-test': {
      Guide: ScreenResolutionGuideNl,
      faqs: [
        {
          question: 'Waarom is mijn schermresolutie lager dan die van mijn monitor?',
          answer:
            'Door schaling van het beeldscherm. Bij 150% schaling geeft een monitor van 2560 × 1440 aan de browser 1707 × 960 door. De waarde Fysieke pixels vermenigvuldigt met de pixelverhouding om het echte aantal te tonen.',
        },
        {
          question: 'Is de scherm resolutietest nauwkeurig?',
          answer: 'Hij toont precies wat je browser doorgeeft. Houd de zoom op 100%, zodat het aantal fysieke pixels overeenkomt met je scherm.',
        },
        {
          question: 'Welke resolutie moet ik gebruiken?',
          answer: 'De native resolutie van je monitor, gemarkeerd als Aanbevolen in de beeldscherminstellingen van Windows. Alles anders kan wazig ogen.',
        },
      ],
    },
    'screen-color-test': {
      Guide: ScreenColorGuideNl,
      faqs: [
        {
          question: 'Is de scherm kleurentest gratis?',
          answer: 'Ja. Hij draait in je browser op elke monitor, laptop, tv of telefoon, zonder download of account.',
        },
        {
          question: 'Waarom zien kleuren er anders uit op mijn telefoon en monitor?',
          answer:
            'Schermen verschillen in paneeltype, kleurmodus en kalibratie. Doe de scherm kleurentest op beide met de nachtmodus uit en vergelijk de RGB-verlopen.',
        },
        {
          question: 'Kan een kleurentest de kleuren van mijn scherm herstellen?',
          answer:
            'Nee, hij laat problemen zien. Herstel een zweem met de kleurtemperatuur of beeldmodus van je scherm, of met de kalibratietool van je systeem.',
        },
      ],
    },
    'frame-rate-test': {
      Guide: FrameRateGuideNl,
      faqs: [
        {
          question: 'Waarom toont de framerate test 60 op mijn 144Hz-monitor?',
          answer:
            'De monitor staat waarschijnlijk op 60 Hz, de kabel kan niet meer aan of de laptop bespaart energie. Controleer je beeldscherminstellingen en doe de framerate test opnieuw.',
        },
        {
          question: 'Kan het menselijk oog meer dan 60 FPS zien?',
          answer:
            'Ja. De meeste mensen merken vloeiendere beweging op bij 120 FPS en meer. Vergelijk de baan van 60 FPS met de max-baan op een scherm met hoge verversingssnelheid.',
        },
        {
          question: 'Werkt de framerate test op telefoons?',
          answer: 'Ja. Open hem in de browser van je telefoon en dubbeltik voor volledig scherm. Telefoons met een scherm van 90 of 120 Hz tonen een vloeiendere max-baan.',
        },
      ],
    },
    'oled-gray-test': {
      Guide: OledGrayGuideNl,
      faqs: [
        {
          question: 'Is een beetje mura normaal op een OLED?',
          answer: 'Ja. Lichte vlekken op de vlakken van 1% tot 5% komen vaak voor. Het is alleen een probleem als je het ziet in gewone films en games.',
        },
        {
          question: 'Werkt de OLED grijstest op lcd-schermen?',
          answer:
            'Ja, maar lcd’s tonen op donkergrijs juist gloed en lekkage van de achtergrondverlichting. Daarvoor past de [scherm uniformiteitstest](/screen-uniformity-test) beter.',
        },
        {
          question: 'Welke helderheid moet ik gebruiken?',
          answer: 'Gemiddelde helderheid in een donkere kamer. Heel hoge helderheid kan problemen bij bijna zwart verbergen, en heel lage kan ze overdrijven.',
        },
      ],
    },
    'hacked-screen': {
      Guide: HackedScreenGuideNl,
      faqs: [
        {
          question: 'Is de gehackt scherm-grap veilig?',
          answer:
            'Ja. Het is een webpagina die alleen animaties toont. Hij installeert niets en komt niet aan bestanden, de webcam of het netwerk.',
        },
        {
          question: 'Hoe sluit ik het gehackte scherm?',
          answer: 'Druk op Esc om volledig scherm te verlaten en sluit daarna het tabblad.',
        },
        {
          question: 'Werkt de gehackt scherm simulator op telefoons?',
          answer:
            'Ja. Open hem in een telefoonbrowser en dubbeltik voor volledig scherm. Voor de sirene moet je eerst tikken, want telefoons blokkeren geluid tot je iets aanraakt.',
        },
      ],
    },
    'no-signal-screen': {
      Guide: NoSignalGuideNl,
      faqs: [
        {
          question: 'Hoe toon ik het geen signaal scherm op mijn tv?',
          answer: 'Open de pagina in de browser van je tv, of cast of sluit een laptop aan, en druk dan op F of tik op Volledig scherm.',
        },
        {
          question: 'Kan ik de tekst GEEN SIGNAAL wijzigen?',
          answer: 'Ja. Open Meer om je eigen Melding (tot 24 tekens) en Ingangsnaam te typen, zoals HDMI 2 of AV.',
        },
        {
          question: 'Wat is de piep bij tv-kleurbalken?',
          answer:
            'Een constante testtoon van 1 kHz die omroepen bij kleurbalken uitzonden om de geluidsniveaus af te stemmen. Zet hem aan met de knop voor de toon van 1 kHz.',
        },
      ],
    },
  },
  colors: {
    white: {
      Guide: WhiteScreenGuideNl,
      faqs: [
        {
          question: 'Hoe maak ik mijn scherm helemaal wit?',
          answer: 'Open WhiteScreen.vip, kies wit en zet volledig scherm aan als je browser dat ondersteunt.',
        },
        {
          question: 'Werkt het witte scherm op mijn telefoon?',
          answer:
            'Ja. Je kunt de tool openen in een geschikte mobiele browser. Wat er op volledig scherm mogelijk is, hangt af van je apparaat en browser.',
        },
        {
          question: 'Kan een wit scherm dode pixels opsporen?',
          answer:
            'Een witte achtergrond kan donkere pixels laten zien, terwijl zwarte achtergronden en achtergronden in primaire kleuren andere zichtbare pixelfouten kunnen tonen. Het is een visuele controle, geen volledige hardwarediagnose.',
        },
        {
          question: 'Waarom gaat mijn scherm steeds uit?',
          answer:
            'De slaaptimer van je apparaat, batterijbesparing of beperkingen van de browser kunnen het scherm uitzetten. Controleer je energie-instellingen en gebruik een functie om het scherm aan te houden als de website en browser dat ondersteunen.',
        },
        {
          question: 'Is een fel wit scherm veilig voor OLED-schermen?',
          answer:
            'Laat een fel stilstaand beeld niet lang op een OLED-scherm staan. Volg de aanbevelingen van de fabrikant voor helderheid en schermgebruik. Geen enkele browserfunctie kan garanderen dat inbranden wordt voorkomen.',
        },
        {
          question: 'Is WhiteScreen.vip gratis?',
          answer:
            'WhiteScreen.vip is helemaal gratis online te gebruiken in je webbrowser. Alle schermkleuren, tests en downloads van afbeeldingen zijn beschikbaar zonder registratie, account of software-installatie.',
        },
        {
          question: 'Wat is het verschil tussen een leeg wit scherm en een puur wit scherm?',
          answer:
            'Hier zijn ze hetzelfde: een scherm gevuld met puur wit (#FFFFFF) en verder niets. Kies Warm of verlaag de helderheid als je een zachtere, gebroken witte look wilt.',
        },
        {
          question: 'Kan ik een wit scherm gebruiken om over te trekken?',
          answer:
            'Ja. Een tablet of monitor op volle helderheid werkt als eenvoudige lichtbak. Plak je papier vast en trek voorzichtig over zonder hard op het scherm te drukken.',
        },
        {
          question: 'Helpt een wit scherm bij het schoonmaken van mijn monitor?',
          answer:
            'Op een wit scherm zie je stof, vingerafdrukken en strepen makkelijk. Zet het scherm uit voordat je het afveegt en open daarna het witte scherm opnieuw om plekken te zoeken die je hebt gemist.',
        },
      ],
    },
    black: {
      Guide: BlackScreenGuideNl,
      faqs: [
        {
          question: 'Bespaart een zwart scherm batterij?',
          answer:
            'Op OLED-telefoons, -tablets en -laptops wel: zwarte pixels staan uit. Op lcd-schermen blijft de achtergrondverlichting aan, dus het bespaart heel weinig. Een lagere helderheid bespaart op lcd meer.',
        },
        {
          question: 'Houdt een zwart scherm mijn computer wakker?',
          answer:
            'Ja, zolang de pagina open is en Scherm aan houden aanstaat, in browsers die dat ondersteunen. Je normale slaapinstellingen gelden weer als je de pagina sluit of de optie uitzet.',
        },
        {
          question: 'Is een zwart scherm hetzelfde als mijn monitor uitzetten?',
          answer:
            'Nee. De monitor blijft aan en je computer blijft draaien; het scherm toont alleen puur zwart. Op OLED lijkt hij uit omdat de pixels donker zijn, terwijl een lcd zijn achtergrondverlichting aan houdt.',
        },
        {
          question: 'Kan ik een zwart start- of vergrendelscherm instellen op mijn telefoon?',
          answer: 'Ja. Download het iPhone- of Android-formaat via het menu Downloaden en stel het in als achtergrond voor je start- of vergrendelscherm.',
        },
        {
          question: 'Hoe maak ik een zwarte video?',
          answer: 'Download een zwarte PNG in 1080p of 4K, zet hem in de tijdlijn van je videobewerkingsprogramma en rek hem uit tot de lengte die je nodig hebt.',
        },
        {
          question: 'Is zwart of wit beter om een monitor schoon te maken?',
          answer:
            'Zwart laat vingerafdrukken, strepen en vegen duidelijk zien, vooral met licht van opzij. Voor stof werkt een [wit scherm](/) beter. Zet het scherm uit voordat je het afveegt.',
        },
      ],
    },
    red: {
      Guide: RedScreenGuideNl,
      faqs: [
        {
          question: 'Kan ik een rood scherm gebruiken op mijn iPhone of Android-telefoon?',
          answer:
            'Ja. Open deze pagina in de browser van je telefoon, tik op het pictogram voor volledig scherm en zet Scherm aan houden aan. Zet de schuifregelaar Helderheid lager voor een gedimd nachtlampje.',
        },
        {
          question: 'Waarom ziet mijn rode scherm er oranje uit?',
          answer:
            'Meestal verschuift de kleurmodus van het scherm of een warm nachtfilter (Night Shift, Nachtlampje) de kleur. Zet die uit en gebruik de standaard- of sRGB-modus, en kijk dan opnieuw.',
        },
        {
          question: 'Kan een rood scherm dienen als doka-lamp?',
          answer:
            'Nee. Het rood is niet smal genoeg gefilterd en veel te fel voor film of fotopapier. Gebruik een echte doka-lamp voor lichtgevoelige materialen.',
        },
      ],
    },
    green: {
      Guide: GreenScreenGuideNl,
      faqs: [
        {
          question: 'Wat is het green screen of death?',
          answer:
            'Het is de groene versie van het blue screen of death van Windows, die verschijnt als een Windows Insider Preview-build crasht. Xbox-consoles kunnen ook vastlopen op een groen laadscherm. Wil je er voor de grap een laten zien? Probeer de [nep blue screen of death](/fake-blue-screen-of-death).',
        },
        {
          question: 'Kan ik een groen scherm op mijn telefoon gebruiken?',
          answer:
            'Ja, voor kleine voorwerpen en close-ups. Open deze pagina, zet de helderheid hoog, ga naar volledig scherm en zet Scherm aan houden aan. Voor alles wat groter is dan de telefoon gebruik je groene stof of een achtergrond in je bewerkingsprogramma.',
        },
        {
          question: 'Verwijdert deze groen scherm-website mijn achtergrond?',
          answer:
            'Nee. Deze pagina toont effen groen en laat je groene afbeeldingen downloaden. Het verwijderen van de achtergrond gebeurt in je video- of streamingapp, zoals OBS, CapCut, Zoom of Teams.',
        },
      ],
    },
    blue: {
      Guide: BlueScreenGuideNl,
      faqs: [
        {
          question: 'Is dit blauwe scherm het blue screen of death van Windows?',
          answer:
            'Nee. Dit is een effen blauw kleurenscherm voor verlichting, testen en montage. Het toont geen fout en heeft geen invloed op je computer. Zoek je het foutscherm voor een grap? Probeer de [nep blue screen of death](/fake-blue-screen-of-death).',
        },
        {
          question: 'Kan ik een blauw scherm gebruiken op mijn laptop, pc of telefoon?',
          answer: 'Ja. Het werkt in elke moderne browser. Dubbeltik voor volledig scherm, zet Scherm aan houden aan en stel de tint in met de schuifregelaar Helderheid.',
        },
        {
          question: 'Waarom ziet een puur blauw scherm er zo donker uit?',
          answer:
            'Onze ogen zijn het minst gevoelig voor blauw, dus puur blauw ziet er veel donkerder uit dan groen of rood bij dezelfde helderheid. Dat is normaal en geen fout.',
        },
      ],
    },
    yellow: {
      Guide: YellowScreenGuideNl,
      faqs: [
        {
          question: 'Is een geel scherm prettiger voor de ogen?',
          answer:
            'Geel bevat geen blauw licht, wat veel mensen ’s avonds rustiger vinden. Geel op volle helderheid blijft fel, dus zet de schuifregelaar Helderheid lager voor zachter warm licht.',
        },
        {
          question: 'Kan ik het gele scherm warmer of zachter maken?',
          answer: 'Ja. Kies Warm voor goudgeel en zet de schuifregelaar Helderheid lager voor gedimd, zacht licht.',
        },
        {
          question: 'Kan ik een afbeelding van een geel scherm downloaden?',
          answer:
            'Ja. Gebruik Downloaden onder het voorbeeld om een gele PNG op te slaan in 1080p, 1440p, 4K of 8K, in telefoon- en tabletformaten of in een eigen formaat.',
        },
      ],
    },
    pink: {
      Guide: PinkScreenGuideNl,
      faqs: [
        {
          question: 'Welke kleurcode heeft dit roze?',
          answer:
            'Het is #FF69B4 (RGB 255, 105, 180), vaak hot pink genoemd. Kies Warm voor koraalroze, Koel voor een koeler roze, of zet de schuifregelaar Helderheid lager voor donkerroze.',
        },
        {
          question: 'Kan ik een roze scherm 10 uur aan laten staan?',
          answer:
            'Ja. Zet Scherm aan houden aan en het scherm blijft aan zolang de pagina open is, in browsers die dat ondersteunen. Sluit je laptop of telefoon aan op de stroom voor lange sessies.',
        },
        {
          question: 'Waarom ziet mijn roze scherm er paars uit?',
          answer:
            'Het scherm zet blauw te sterk aan. Kies Warm onder het voorbeeld, of zet je scherm op een warmere kleurtemperatuur of de sRGB-modus.',
        },
      ],
    },
  },
  glanceHeadings: {
    'dvd-screensaver': 'Wat is de DVD screensaver?',
    'broken-screen': 'Wat is het gebroken scherm effect?',
    'fake-zoom-meeting': 'Wat is een nep Zoom-vergaderscherm?',
    'fake-windows-10-update': 'Wat is een nep Windows 10 update?',
    'fake-windows-11-update': 'Wat is een nep Windows 11 update?',
    'fake-blue-screen-of-death': 'Wat is een nep blue screen of death?',
    'fake-mac-update': 'Wat is een nep Mac update?',
    'pomodoro-timer': 'Wat is een Pomodoro timer?',
    'flip-clock-screensaver': 'Wat is een klapklok screensaver?',
    'zoom-lighting': 'Wat is verlichting voor videogesprekken?',
    'countdown-timer': 'Wat is een aftelklok op volledig scherm?',
    'ring-light': 'Wat is een online ringlamp?',
    stopwatch: 'Wat is een stopwatch op volledig scherm?',
    'screen-refresh-rate-test': 'Wat is een verversingssnelheid test?',
    'dead-pixel-test': 'Wat is een dode pixel test?',
    'touch-screen-test': 'Wat is een touchscreen test?',
    'monitor-ghosting-test': 'Wat is een monitor ghosting test?',
    'monitor-test': 'Wat is een monitortest?',
    'screen-burn-in-test': 'Wat is een scherm inbrand test?',
    'screen-resolution-test': 'Wat is een scherm resolutietest?',
    'screen-color-test': 'Wat is een scherm kleurentest?',
    'frame-rate-test': 'Wat is een framerate test?',
    'oled-gray-test': 'Wat is een OLED grijstest?',
    'hacked-screen': 'Wat is een gehackt scherm simulator?',
    'no-signal-screen': 'Wat is een geen signaal scherm?',
    'white-screen': 'Wat is een wit scherm?',
    'black-screen': 'Wat is een zwart scherm?',
    'yellow-screen': 'Wat is een geel scherm?',
    'green-screen': 'Wat is een groen scherm?',
    'blue-screen': 'Wat is een blauw scherm?',
    'red-screen': 'Wat is een rood scherm?',
    'pink-screen': 'Wat is een roze scherm?',
  },
}
