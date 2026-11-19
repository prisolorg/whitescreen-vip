import type { ToolTranslations } from './types'

export const de: ToolTranslations = {
  'white-screen': {
    glance: {
      answer:
        'Ein weißer Bildschirm füllt dein ganzes Display mit reinem Weiß (#FFFFFF). Klicke auf Vollbild oder drücke F, und jedes Pixel zeigt dieselbe Farbe, ohne Leisten oder Ablenkung. Bei voller Helligkeit ist das das hellste Licht, das dein Display erzeugen kann: als Licht für Videocalls und Fotos, zum Reinigen des Monitors, zum Abpausen und um Pixelfehler zu finden.',
      features: [
        'Reines Weiß #FFFFFF oder jede beliebige Hex-Farbe',
        'Vollbild per Klick mit Helligkeitsregler',
        'Farbtemperatur von 2700 K (warm) bis 9300 K (kühl)',
        'Kostenloser PNG-Download von 720p bis 8K',
      ],
      benefits: [
        'Sofort weiches Licht für Calls, Selfies und Abpausen',
        'Funktioniert auf Handy, Laptop, Monitor und Smart-TV',
        'Keine App, keine Anmeldung, nichts zu installieren',
      ],
    },
  },
  'black-screen': {
    glance: {
      answer:
        'Ein schwarzer Bildschirm macht dein ganzes Display mit einem Klick reinschwarz (#000000). Auf OLED-Displays schalten sich die Pixel komplett ab. So verbirgst du am schnellsten, was auf dem Bildschirm ist, prüfst Lichthöfe oder sparst Strom.',
      features: [
        'Reines Schwarz #000000 oder jede eigene Farbe',
        'Vollbild per Klick mit Helligkeitsregler',
        'Hält den Bildschirm im Vollbild wach',
        'Kostenloser PNG-Download von 720p bis 8K',
      ],
      benefits: ['Zeigt Lichthöfe, IPS-Glow und helle Pixelfehler', 'Spart Strom auf OLED-Displays', 'Kostenlos, nichts zu installieren'],
    },
  },
  'dead-pixel-test': {
    glance: {
      answer:
        'Ein Pixelfehlertest füllt den Bildschirm nacheinander mit vollflächigen Farben, damit defekte Pixel auffallen. Ein toter Pixel bleibt auf jeder Farbe schwarz, ein hängender Pixel leuchtet dauerhaft in einer Farbe und ein heißer Pixel bleibt weiß. Der komplette Check dauert etwa eine Minute, auf Monitor, Laptop, TV oder Handy.',
      features: [
        'Vollbildfelder in Weiß, Schwarz, Rot, Grün, Blau und Grau',
        'Automatischer Wechsel oder mit den Pfeiltasten',
        'Für LCD-, IPS-, VA-, OLED- und Mini-LED-Panels',
        'Tipps, um tote, hängende und heiße Pixel zu unterscheiden',
      ],
      benefits: [
        'Fehler finden, bevor die Rückgabefrist abläuft',
        'Gebrauchten Monitor oder Handy vor dem Kauf prüfen',
        'Kostenlos, privat, nichts zu installieren',
      ],
    },
    steps: [
      'Reinige zuerst den Bildschirm, damit du Staub nicht für einen Pixelfehler hältst.',
      'Drücke F für Vollbild und wechsle die Farben mit den Pfeiltasten, per Klick oder automatisch.',
      'Prüfe auf jeder Farbe in Ruhe die ganze Fläche. Eine Lupe oder der Kamerazoom des Handys hilft.',
      'Dunkle Punkte auf hellen Farben deuten auf tote Pixel hin, helle oder farbige Punkte auf Schwarz auf hängende oder heiße Pixel.',
    ],
    useCases: [
      { title: 'Neuer Monitor', description: 'Prüfe einen neuen Monitor, Laptop oder Fernseher innerhalb der Rückgabefrist.' },
      { title: 'Gebrauchtkauf', description: 'Teste ein gebrauchtes Handy oder Notebook, bevor du bezahlst.' },
      { title: 'Nachweis für die Garantie', description: 'Fotografiere den Fehler auf einer Vollfarbe für die Reklamation.' },
      { title: 'Regelmäßige Kontrolle', description: 'Prüfe ab und zu, ob neue Fehler dazugekommen sind.' },
    ],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen einem toten und einem hängenden Pixel?',
        answer:
          'Ein toter Pixel bleibt auf jeder Farbe dunkel. Ein hängender Pixel leuchtet dauerhaft in einer Farbe, etwa als roter Punkt auf Schwarz. Ein heißer Pixel bleibt weiß. Hängende Pixel erholen sich manchmal, tote fast nie.',
      },
      {
        question: 'Kann das Tool tote Pixel reparieren?',
        answer:
          'Nein. Der Test macht Fehler nur sichtbar. Schnelle Farbwechsel werden manchmal für hängende Pixel empfohlen, eine Garantie gibt es aber nicht, und tote Pixel sind Hardwarefehler.',
      },
      {
        question: 'Wie reklamiere ich einen Pixelfehler?',
        answer:
          'Mach ein scharfes Foto des Fehlers auf der Farbe, auf der er am deutlichsten ist, notiere die Position und wende dich mit dem Kaufbeleg an Hersteller oder Händler.',
      },
    ],
  },
  'screen-refresh-rate-test': {
    glance: {
      answer:
        'Ein Bildwiederholraten-Test misst, wie oft pro Sekunde dein Bildschirm das Bild neu zeichnet, in Hertz (Hz). Er stoppt die Frames des Browsers und zeigt 60, 75, 120, 144, 165 oder 240 Hz an. So prüfst du, ob dein High-Refresh-Monitor wirklich mit der beworbenen Frequenz läuft.',
      features: [
        'Live-Messung in Hz mit nächster Standardfrequenz',
        'Durchschnittliche, minimale und maximale Frame-Zeit',
        'Nach Einstellungsänderungen neu messen',
        'Für Monitore, Laptops, Handys und Tablets',
      ],
      benefits: [
        'Prüfen, ob der 144- oder 240-Hz-Monitor nicht auf 60 Hz hängt',
        'Kabel, Anschluss und Windows- oder macOS-Einstellung kontrollieren',
        'Ergebnis in Sekunden, ohne Download',
      ],
    },
    steps: [
      'Öffne die Seite und warte ein bis zwei Sekunden, bis sich der Wert stabilisiert.',
      'Lies den Hz-Wert und die nächste Standardfrequenz ab.',
      'Zeigt ein High-Refresh-Monitor nur 60 Hz, prüfe Anzeigeeinstellungen und Kabel und teste erneut.',
      'Drücke F oder tippe doppelt für Vollbild, Esc beendet es.',
    ],
    useCases: [
      { title: 'Neuer Monitor', description: 'Prüfe, ob ein 144- oder 240-Hz-Monitor wirklich so schnell läuft.' },
      { title: 'Kabel und Anschluss', description: 'Ältere HDMI-Kabel oder -Anschlüsse begrenzen oft auf 60 Hz.' },
      { title: 'Laptop im Akkubetrieb', description: 'Viele Laptops schalten ohne Netzteil auf 60 Hz.' },
      { title: 'Handys und Tablets', description: 'Sieh nach, ob adaptive 90/120-Hz-Modi aktiv sind.' },
    ],
    faqs: [
      {
        question: 'Warum zeigt mein 144-Hz-Monitor nur 60 Hz?',
        answer:
          'Die Frequenz wird in den Anzeigeeinstellungen des Systems gewählt, und das Kabel muss sie unterstützen (DisplayPort oder HDMI 2.0 und neuer). Prüfe auch, ob das Browserfenster auf dem richtigen Monitor ist.',
      },
      {
        question: 'Warum schwankt der Wert?',
        answer:
          'Ausgelastete Tabs, Energiesparen und variable Bildwiederholraten (FreeSync, G-Sync, ProMotion) verändern das Frame-Timing. Der Wert nutzt den Median der letzten Frames, um das zu glätten.',
      },
      {
        question: 'Ist die Bildwiederholrate dasselbe wie FPS?',
        answer:
          'Nein. Die Bildwiederholrate sagt, wie oft der Bildschirm aktualisiert; FPS, wie viele neue Bilder ein Spiel oder Video liefert. Du siehst nur so viele Bilder, wie die Bildwiederholrate zulässt.',
      },
    ],
  },
  'touch-screen-test': {
    glance: {
      answer:
        'Ein Touchscreen-Test prüft, ob jede Stelle deines Touchscreens reagiert. Tippe jedes Feld eines Rasters an, um tote Zonen zu finden, ziehe Linien, um Aussetzer oder Sprünge zu erkennen, und lege mehrere Finger auf, um zu sehen, wie viele Berührungspunkte Handy oder Tablet erkennen.',
      features: [
        'Raster, das jedes berührte Feld markiert, mit Abdeckung in %',
        'Zeichenmodus für Lücken, Sprünge und Geisterberührungen',
        'Multitouch-Modus zählt gleichzeitige Finger',
        'Funktioniert mit Finger, Stift und Maus',
      ],
      benefits: ['Tote Zonen nach Sturz oder Displaytausch finden', 'Gebrauchtes Handy oder Tablet vor dem Kauf prüfen', 'Keine App nötig'],
    },
    steps: [
      'Wähle das Raster und streiche langsam über jedes Feld, bis die Abdeckung 100 % erreicht.',
      'Felder, die sich auch nach mehreren Versuchen nicht füllen, zeigen eine tote Zone.',
      'Wechsle zu Zeichnen und ziehe langsame Linien; Lücken oder Sprünge bedeuten verpasste Berührungen.',
      'Nutze Multitouch und lege mehrere Finger auf, um zu sehen, wie viele gleichzeitig erkannt werden.',
    ],
    useCases: [
      { title: 'Stellen ohne Reaktion', description: 'Finde genau, wo Handy oder Tablet Berührungen ignoriert.' },
      { title: 'Nach einer Reparatur', description: 'Prüfe den neuen Digitizer, bevor du das Gerät abholst.' },
      { title: 'Gebrauchtkauf', description: 'Teste die ganze Fläche in einer Minute.' },
      { title: 'Geisterberührungen', description: 'Achte auf Berührungspunkte, die ohne Finger auftauchen.' },
    ],
    faqs: [
      {
        question: 'Wie viele Berührungspunkte sollte mein Display erkennen?',
        answer: 'Die meisten Handys und Tablets erkennen 5 bis 10 Finger. Die Seite zeigt den Wert, den dein Browser meldet, und das gemessene Maximum.',
      },
      {
        question: 'Funktioniert es mit Maus oder Stift?',
        answer: 'Ja. Auch Maus- und Stifteingaben werden gezeichnet, so kannst du einen Eingabestift genauso testen.',
      },
      {
        question: 'Was verursacht tote Zonen?',
        answer: 'Gesprungenes Glas, ein beschädigtes Digitizer-Kabel, Feuchtigkeit oder eine Schutzfolie mit Luftblasen. Entferne zuerst die Folie und teste erneut.',
      },
    ],
  },
  'white-noise-generator': {
    glance: {
      answer:
        'Ein Generator für weißes Rauschen spielt ein gleichmäßiges Rauschen, das alle hörbaren Frequenzen gleich stark enthält. Dieses Geräusch überdeckt Stimmen, Verkehr und plötzlichen Lärm. Deshalb nutzen es viele zum Konzentrieren, Lernen, Beruhigen von Babys und Einschlafen. Stell es leise und nutze nachts den Timer.',
      features: [
        'Weißes, rosa und braunes Rauschen in einem Player',
        'Klangfilter und Lautstärke in Dezibel',
        'Schlaf-Timer mit sanftem Ausblenden',
        'Optional: TV-Rauschen oder Wellenform als Bild',
      ],
      benefits: ['Überdeckt Ablenkung im Großraumbüro und zu Hause', 'Hilft vielen, schneller einzuschlafen', 'Kostenlos, endlos, ohne App'],
    },
    steps: [
      'Drücke Start. Vorher wird nichts abgespielt, und es beginnt mit mittlerer Lautstärke.',
      'Mit Weiß, Rosa und Braun öffnest du die jeweiligen Generatoren; Lautstärke, Filter und Bild bleiben erhalten.',
      'Ein Tiefpass macht das Rauschen weicher, ein Hochpass entfernt Brummen; stelle die Grenzfrequenz ein.',
      'Wähle ein Bild (Wellenform, TV-Rauschen oder dunkel) und optional einen Schlaf-Timer.',
      'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Schlafen', description: 'Überdecke Verkehr, Nachbarn und Schnarchen mit einem gleichmäßigen Geräusch.' },
      { title: 'Konzentration', description: 'Dämpfe Gespräche und Haushaltslärm beim Arbeiten oder Lernen.' },
      { title: 'Babys', description: 'Viele Eltern beruhigen Babys mit leisem weißem Rauschen. Halte es leise und fern vom Bett.' },
      { title: 'Retro-TV-Rauschen', description: 'Stelle das Bild auf TV-Rauschen für Videos, Requisiten oder Mottopartys.' },
    ],
    faqs: [
      {
        question: 'Was ist weißes Rauschen?',
        answer: 'Weißes Rauschen hat auf allen Frequenzen die gleiche Leistung. Es klingt wie ein helles, gleichmäßiges Zischen, wie ein nicht eingestelltes Radio oder ein Fernseher ohne Sender.',
      },
      {
        question: 'Was machen Tiefpass- und Hochpassfilter?',
        answer:
          'Ein Tiefpass lässt Frequenzen unterhalb der Grenze durch, das Rauschen klingt dunkler und weicher. Ein Hochpass lässt die oberen durch, entfernt Brummen und klingt luftiger.',
      },
      {
        question: 'Verbraucht es Daten?',
        answer: 'Nein. Das Rauschen wird mit der Web Audio API auf deinem Gerät erzeugt, nichts wird gestreamt, und es läuft nach dem Laden auch offline.',
      },
      {
        question: 'Ist das TV-Rauschen bedenkenlos anzuschauen?',
        answer: 'Schnelles Flackern kann unangenehm sein und fotosensitive Epilepsie auslösen. Wenn du empfindlich bist, nutze die Wellenform oder das dunkle Bild.',
      },
    ],
  },
  'fake-blue-screen-of-death': {
    glance: {
      answer:
        'Ein gefälschter Bluescreen (BSOD) imitiert den Windows-Fehlerbildschirm: das traurige Gesicht, „Auf Ihrem PC ist ein Problem aufgetreten“, einen Stoppcode und einen Fortschrittszähler. Er ist rein optisch: Nichts stürzt ab, und Esc beendet ihn. Wähle Windows 10, Windows 11, den neuen schwarzen Bildschirm oder klassisches XP.',
      features: ['Stile Windows 10, 11, Schwarz und klassisches XP', 'Echte Stoppcodes wie CRITICAL_PROCESS_DIED', 'Steigender Prozentwert und QR-Block', 'Vollbild mit ausgeblendetem Mauszeiger'],
      benefits: ['Der überzeugendste Computerstreich', 'Realistische Requisite für Videos und Tutorials', 'Völlig harmlos'],
    },
    steps: [
      'Wähle einen Stil: Windows 10, Windows 11, der neue schwarze Bildschirm oder klassisches XP/7.',
      'Wähle einen Stoppcode und wie lange der Zähler bis 100 % braucht.',
      'Tippe doppelt oder drücke F für Vollbild. Der Mauszeiger verschwindet kurz danach.',
      'Drücke Esc oder bewege die Maus und klicke auf Schließen, um ihn zu beenden.',
    ],
    useCases: [
      { title: 'Bürostreich', description: 'Zeig ihn ein paar Sekunden auf dem Bildschirm eines Kollegen und lös den Spaß dann auf.' },
      { title: 'Videos und Streams', description: 'Zeig einen Absturz vor der Kamera, ohne einen echten PC abstürzen zu lassen.' },
      { title: 'IT-Schulung', description: 'Zeig, wie ein Stoppfehler aussieht und was der Code bedeutet.' },
      { title: 'Film und Theater', description: 'Ein glaubwürdiger Absturzbildschirm für eine Szene, auf jedem Gerät.' },
    ],
    faqs: [
      {
        question: 'Was ist der Bluescreen?',
        answer:
          'Das ist der Vollbild-Fehler, den Windows zeigt, wenn ein Problem auftritt, von dem es sich nicht erholen kann, etwa ein fehlerhafter Treiber oder ein Speicherfehler. Er nennt einen Stoppcode, speichert Absturzdaten und startet neu.',
      },
      {
        question: 'Was bedeuten die Stoppcodes?',
        answer:
          'Jeder nennt die Art des Fehlers: CRITICAL_PROCESS_DIED bedeutet, dass ein Systemprozess beendet wurde, IRQL_NOT_LESS_OR_EQUAL deutet meist auf einen Treiber hin, MEMORY_MANAGEMENT oft auf defekten RAM. Hier sind sie nur Text.',
      },
      {
        question: 'Kann das meinem Computer schaden?',
        answer: 'Nein. Es ist ein Bild in einem Browser-Tab. Es bringt Windows nicht zum Absturz, ändert keine Einstellungen und installiert nichts.',
      },
      {
        question: 'Warum ist der neue Absturzbildschirm schwarz?',
        answer: '2025 hat Microsoft den Bluescreen in Windows 11 durch einen einfacheren schwarzen ersetzt. Wähle „Schwarz (neu)“ für diesen Look.',
      },
      {
        question: 'Hat das etwas mit Microsoft zu tun?',
        answer: 'Nein. Es ist eine unabhängige Nachbildung zur Unterhaltung, nicht mit Microsoft verbunden oder von Microsoft unterstützt.',
      },
    ],
  },
  'pomodoro-timer': {
    glance: {
      answer:
        'Ein Pomodoro-Timer teilt die Arbeit in 25-minütige Fokusphasen mit 5 Minuten Pause und einer langen Pause nach vier Phasen. Die Methode von Francesco Cirillo aus den späten 1980ern hilft, Aufgaben anzufangen, Erschöpfung zu vermeiden und erledigte Fokusblöcke zu zählen.',
      features: ['25/5-Zyklus mit langen Pausen', 'Einstellbare Längen und Autostart', 'Signalton und Countdown im Browser-Tab', 'Sitzungszähler und Fortschrittsring'],
      benefits: ['Aufschieben besiegen mit kurzen Zielen', 'Pausen beugen Ermüdung vor', 'Kostenlos, ohne Konto'],
    },
    steps: [
      'Drücke Start, um eine 25-minütige Fokusphase zu beginnen.',
      'Ändere bei Bedarf die Länge von Fokus und Pausen (zum Beispiel 50/10).',
      'Am Ende jeder Phase ertönt ein Signal und die nächste beginnt; schalte Autostart aus, um jede selbst zu starten.',
      'Mit Überspringen gehst du weiter, mit Zurücksetzen fängst du neu an. Die Leertaste startet und pausiert.',
      'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Lernen', description: 'Teile den Stoff in kurze, konzentrierte Blöcke mit echten Pausen.' },
      { title: 'Konzentriertes Arbeiten', description: 'Schütze jeweils 25 Minuten vor E-Mail und Chat.' },
      { title: 'Unterricht', description: 'Zeig den Timer am Beamer für Arbeits- und Pausenzeiten.' },
      { title: 'Gewohnheiten aufbauen', description: 'Zähle Sitzungen, um deine Fokuszeit zu sehen.' },
    ],
    faqs: [
      {
        question: 'Was ist die Pomodoro-Technik?',
        answer:
          'Eine Zeitmanagement-Methode aus den späten 1980ern: Arbeite in konzentrierten Blöcken (klassisch 25 Minuten), mache nach jedem eine kurze Pause und nach vier eine lange.',
      },
      {
        question: 'Läuft der Timer in einem Hintergrund-Tab weiter?',
        answer: 'Ja. Er zählt mit der echten Uhrzeit, bleibt also genau, auch wenn der Browser versteckte Tabs verlangsamt, und der Tab-Titel zeigt die Restzeit.',
      },
      {
        question: 'Kann ich die Längen ändern?',
        answer: 'Ja. Stelle Fokus, kurze und lange Pause in Minuten ein und wie viele Sitzungen vor der langen Pause kommen.',
      },
    ],
  },
}
