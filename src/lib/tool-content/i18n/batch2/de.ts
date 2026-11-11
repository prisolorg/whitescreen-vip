import type { ToolTranslations } from '../types'

export const de: ToolTranslations = {
  'monitor-test': {
    glance: {
      answer:
        'Ein Monitortest ist eine Reihe von Vollbild-Testmustern, die prüfen, wie gut dein Display Farbe, Kontrast, Schärfe und Gamma darstellt. Geh Verläufe, Schwarz- und Weißstufen, Textschärfe und Geometriemuster durch, um Fehler zu finden oder das Bild richtig einzustellen.',
      features: ['Verlaufs-, Gamma-, Kontrast- und Schärfemuster', 'Schwarz- und Weißwert-Stufen', 'Geometrie- und Textschärfe-Checks', 'Tastenkürzel für alle Muster'],
      benefits: ['Helligkeit, Kontrast und Schärfe richtig einstellen', 'Neuen oder gebrauchten Monitor in Minuten prüfen', 'Läuft in jedem Browser, auch auf dem Fernseher'],
    },
    steps: [
      'Stelle den Monitor auf seine native Auflösung und setze den Browser-Zoom zurück (Strg/Cmd + 0).',
      'Drücke F für Vollbild und wechsle die Muster mit den Schaltflächen oder Pfeiltasten.',
      'Achte auf Streifen in Verläufen, gerade Linien in Gittern sowie Schärfe und Moiré in feinen Mustern.',
      'Passe Helligkeit, Kontrast und Schärfe des Monitors an, während du jedes Muster ansiehst.',
    ],
    useCases: [
      { title: 'Ersteinrichtung', description: 'Helligkeit, Kontrast und Schärfe nach dem Auspacken einstellen.' },
      { title: 'Banding prüfen', description: 'Weiche Verläufe zeigen Abstufungen durch geringe Farbtiefe.' },
      { title: 'Geometrie und Skalierung', description: 'Gitter zeigen gestreckte, beschnittene oder unscharfe Bilder.' },
      { title: 'Kabel und Eingang', description: 'Feine Muster zeigen, ob ein Kabel oder Adapter das Bild weichzeichnet.' },
    ],
    faqs: [
      { question: 'Ist ein Online-Monitortest so gut wie ein Kalibriergerät?', answer: 'Nein. Die Muster helfen beim Beurteilen und Einstellen nach Auge, für genaue Farbkalibrierung braucht man aber ein Colorimeter.' },
      {
        question: 'Warum flimmern feine Muster oder zeigen Moiré?',
        answer: 'Browser-Zoom, Systemskalierung oder eine nicht native Auflösung rechnen 1-Pixel-Muster um. Nutze 100 % Zoom und die native Auflösung.',
      },
      { question: 'Wie sollte das Gamma-Muster aussehen?', answer: 'Aus der Entfernung sollten gestreifte und einfarbige Flächen ähnlich hell wirken. Ein großer Unterschied deutet auf ein Gamma abweichend vom Standard 2,2 hin.' },
    ],
  },
  'screen-resolution-test': {
    glance: {
      answer:
        'Ein Bildschirmauflösungstest zeigt die Auflösung deines Bildschirms in Pixeln, dazu den Browser-Viewport, das Pixelverhältnis und die Farbtiefe. Die physische Auflösung ist die CSS-Größe mal dem Pixelverhältnis: Ein 1920 × 1080-Laptop mit 125 % Skalierung meldet 1536 × 864 CSS-Pixel.',
      features: ['Bildschirm-, Fenster- und physische Auflösung', 'Pixelverhältnis und Skalierung', 'Farbtiefe und Ausrichtung', 'Aktualisiert sich beim Ändern der Größe oder Drehen'],
      benefits: ['Prüfen, ob du wirklich 1080p, 1440p oder 4K nutzt', 'Skalierung von Windows oder macOS kontrollieren', 'Sofort, ohne Installation'],
    },
    steps: [
      'Öffne die Seite auf dem Bildschirm, den du prüfen willst: Die Werte aktualisieren sich live.',
      'Ändere die Fenstergröße oder drehe das Gerät, um die Viewport-Werte zu sehen.',
      'Drücke F für Vollbild, um den vollen Viewport zu sehen.',
      'Sieh dir das 1-Pixel-Muster an: Bei nativer Auflösung und 100 % Zoom wirkt es wie ein gleichmäßiges, feines Grau.',
    ],
    useCases: [
      { title: 'Auflösung herausfinden', description: 'Schnell die Auflösung für Hintergrundbilder oder Spieleinstellungen finden.' },
      { title: 'Responsive Design', description: 'Entwickler prüfen Viewport und Pixelverhältnis auf echten Geräten.' },
      { title: 'Skalierungsprobleme', description: 'Prüfen, ob die Systemskalierung die effektive Auflösung ändert.' },
      { title: 'Support-Anfragen', description: 'Genaue Display-Daten mitschicken, wenn du einen Website-Fehler meldest.' },
    ],
    faqs: [
      {
        question: 'Warum ist die Bildschirmgröße kleiner als die Auflösung meines Monitors?',
        answer: 'Browser melden CSS-Pixel. Bei 150 % Skalierung meldet ein 3840 Pixel breites Display 2560. Multipliziere mit dem Pixelverhältnis für die physischen Pixel.',
      },
      { question: 'Was ist das Pixelverhältnis?', answer: 'Die Zahl der physischen Pixel pro CSS-Pixel. Ein Wert von 2 bedeutet ein hochauflösendes Display, etwa Retina.' },
      { question: 'Ändert der Browser-Zoom die Werte?', answer: 'Ja. Zoom ändert Viewport und Pixelverhältnis. Stelle 100 % ein, um genaue Werte zu bekommen.' },
    ],
  },
  'brown-noise-generator': {
    glance: {
      answer:
        'Ein Generator für braunes Rauschen spielt ein tiefes, grollendes Geräusch, dessen Leistung zu hohen Frequenzen stark abfällt, wie ein Wasserfall oder starker Wind. Es ist sanfter als weißes Rauschen, deshalb nutzen es viele zum Schlafen, zur Konzentration bei ADHS und gegen tiefe Geräusche wie Verkehr oder Schnarchen.',
      features: ['Echtes braunes (Brown’sches) Rauschen, live erzeugt', 'Tiefpass- und Hochpassfilter für den Klang', 'Lautstärkeregler und Schlaf-Timer', 'Mit einem Klick zu weißem oder rosa Rauschen wechseln'],
      benefits: ['Sanfter, basslastiger Klang für lange Sitzungen', 'Beliebt für Konzentration und Deep Work', 'Kostenlos, nach dem Laden auch offline'],
    },
    steps: [
      'Drücke Start. Vorher wird nichts abgespielt.',
      'Stelle die Lautstärke ein; braunes Rauschen wirkt bei gleichem Pegel leiser als weißes, also langsam erhöhen.',
      'Ein Tiefpass macht das Grollen noch tiefer, ein Hochpass entfernt auf kleinen Lautsprechern den tiefsten Bass.',
      'Wähle optional einen Schlaf-Timer und ein Bild.',
      'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Tiefe Konzentration', description: 'Viele, auch Menschen mit ADHS, sagen, dass braunes Rauschen beim Arbeiten hilft.' },
      { title: 'Schlafen', description: 'Der weiche, tiefe Klang kann stundenlang laufen.' },
      { title: 'Tiefe Geräusche überdecken', description: 'Überdeckt Verkehrsgrollen, Schritte und das Brummen der Klimaanlage.' },
      { title: 'Abschalten', description: 'Kombiniere es abends mit einem dunklen Bildschirm.' },
    ],
    faqs: [
      {
        question: 'Wie unterscheidet sich braunes von weißem und rosa Rauschen?',
        answer: 'Braunes Rauschen verliert mit steigender Frequenz schnell an Leistung (etwa 6 dB pro Oktave) und ist daher das tiefste der drei. Rosa liegt dazwischen, weißes ist das hellste.',
      },
      { question: 'Warum heißt es braunes Rauschen?', answer: 'Es ist nach der Brown’schen Bewegung benannt, der zufälligen Bewegung von Teilchen, nicht nach der Farbe. Es heißt auch rotes Rauschen.' },
      { question: 'Warum höre ich es auf dem Handy kaum?', answer: 'Kleine Lautsprecher können keinen tiefen Bass wiedergeben. Nutze Kopfhörer oder größere Lautsprecher oder einen Hochpass und etwas mehr Lautstärke.' },
    ],
  },
  'pink-noise-generator': {
    glance: {
      answer:
        'Ein Generator für rosa Rauschen spielt ein Geräusch, dessen Leistung pro Oktave gleichmäßig abnimmt. Es klingt ausgewogen und sanfter als weißes Rauschen, wie gleichmäßiger Regen. Man nutzt es zum Schlafen, Entspannen und Lernen, und Toningenieure prüfen damit die Balance von Lautsprechern.',
      features: ['Echtes rosa Rauschen, im Browser erzeugt', 'Klangfilter, Lautstärke in Dezibel und Schlaf-Timer', 'Live-Wellenform oder Spektrum', 'Tastatursteuerung: Leertaste für Start und Pause'],
      benefits: ['Natürlicher, regenartiger Klang zum Einschlafen', 'Referenzsignal zum Prüfen von Lautsprechern', 'Kostenlos und mit wenig Werbung'],
    },
    steps: [
      'Drücke Start. Audio startet nie von selbst.',
      'Stelle die Lautstärke in Dezibel ein.',
      'Feile mit Tiefpass- oder Hochpassfilter und dem Grenzfrequenz-Regler am Klang.',
      'Wähle optional einen Schlaf-Timer und ein Bild.',
      'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Schlafen', description: 'Eine beliebte, weniger scharfe Alternative zu weißem Rauschen für die ganze Nacht.' },
      { title: 'Lernen', description: 'Ein ausgewogenes Hintergrundgeräusch für lange Lesephasen.' },
      { title: 'Lautsprecher prüfen', description: 'Rosa Rauschen ist das Standardsignal, um die Balance von Lautsprechern anzuhören.' },
      { title: 'Ruhige Räume', description: 'Sanfter Hintergrundklang für Wartezimmer und Studios.' },
    ],
    faqs: [
      { question: 'Was ist rosa Rauschen?', answer: 'Rosa Rauschen hat in jeder Oktave gleich viel Energie, jede höhere Stufe ist also etwas leiser als bei weißem Rauschen. Es klingt natürlicher, wie Regen.' },
      { question: 'Hilft rosa Rauschen beim Schlafen?', answer: 'Viele finden es entspannend, und einige kleine Studien deuten darauf hin, dass es den Tiefschlaf unterstützen kann. Die Wirkung ist aber individuell.' },
      { question: 'Kann ich damit Lautsprecher testen?', answer: 'Für einen schnellen Hörtest ja. Für genaue Raummessungen brauchst du Messsoftware und ein kalibriertes Mikrofon.' },
    ],
  },
  'broken-screen': {
    glance: {
      answer:
        'Der Broken-Screen-Streich füllt dein Display mit einem realistischen Bild von gesprungenem Glas: Einschlagpunkt, sich ausbreitende Risse und auf Wunsch LCD-Tintenflecken, dazu ein Splittergeräusch. Lass es auf dem Handy oder PC eines Freundes und löse den Spaß dann per Schließen-Button oder Esc auf.',
      features: ['Realistische Glasrisse, jedes Mal neu gezeichnet', 'Tippen oder klicken für weitere Einschläge', 'LCD-Schaden-Effekt und Splittergeräusch', 'Hintergründe: Wallpaper, Sperrbildschirm oder Schwarz'],
      benefits: ['Klassischer, harmloser Streich, der echt aussieht', 'Funktioniert auf Handys, Tablets und PCs', 'Keine App, am Gerät ändert sich nichts'],
    },
    steps: [
      'Wähle einen Hintergrund: Wallpaper, Sperrbildschirm oder Schwarz.',
      'Tippe oder klicke irgendwo hin, um das Glas dort springen zu lassen. Jeder Tipp fügt einen Einschlag hinzu.',
      'Lass das Splittergeräusch für mehr Realismus an oder schalte es aus.',
      'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Harmlose Streiche', description: 'Ein kurzer Schreck für einen Freund, dann die Auflösung.' },
      { title: 'Requisite für Videos', description: 'Zeig ein zersplittertes Handy oder einen Monitor im Kurzfilm, ohne etwas zu zerstören.' },
      { title: 'Aprilscherz', description: 'Ein klassischer, völlig rückgängig zu machender Büroscherz.' },
      { title: 'Design-Referenz', description: 'Studiere, wie sich Einschlagrisse ausbreiten, für Illustration und VFX.' },
    ],
    faqs: [
      { question: 'Kann das meinen Bildschirm beschädigen?', answer: 'Nein. Es ist nur ein Bild im Browser. Drücke Esc, tippe auf Löschen oder schließe den Tab.' },
      {
        question: 'Warum sieht es wie echtes Glas aus?',
        answer: 'Ein echter Einschlag hinterlässt ein zerbröseltes Zentrum, lange strahlenförmige Risse und Ringe kurzer Risse dazwischen. Der Effekt zeichnet alle drei, mit Lichtern und Schatten an jedem Riss.',
      },
      { question: 'Wie mache ich den Streich verantwortungsvoll?', answer: 'Kurz halten, jemanden wählen, der lacht, nie für Geld oder Daten einsetzen und den Spaß sofort auflösen.' },
    ],
  },
  'countdown-timer': {
    glance: {
      answer:
        'Ein Countdown-Timer zählt von einer eingestellten Zeit in großen Vollbild-Ziffern bis null herunter und meldet sich dann mit einem sanften Aufblinken und optionalem Signalton. Stelle Stunden, Minuten und Sekunden für Unterricht, Prüfungen, Meetings, Vorträge, Training oder Kochen ein und lies ihn quer durch den Raum.',
      features: ['Große Vollbild-Ziffern', 'Stunden, Minuten und Sekunden mit Vorgaben', 'Aufblinken und optionaler Ton bei null', 'Bleibt auch in Hintergrund-Tabs genau'],
      benefits: ['Hält Meetings und Unterricht im Zeitplan', 'Lesbar bis in die letzte Reihe', 'Kostenlos, ohne App'],
    },
    steps: [
      'Wähle eine Vorgabe wie 1, 5 oder 25 Minuten oder gib Stunden, Minuten und Sekunden ein.',
      'Drücke Start oder die Leertaste. Nochmal Leertaste pausiert, R setzt zurück.',
      'Schalte den Signalton ein, wenn du ihn willst: Er ist standardmäßig aus.',
      'Drücke F für Vollbild, damit der ganze Raum ihn sieht. Esc beendet es.',
    ],
    useCases: [
      { title: 'Unterricht', description: 'Prüfungen, Aufgaben und Pausen am Beamer timen.' },
      { title: 'Vorträge', description: 'Redner mit einem sichtbaren Timer in der Zeit halten.' },
      { title: 'Pomodoro', description: '25-minütige Fokusphasen mit kurzen Pausen.' },
      { title: 'Training und Kochen', description: 'Ein großer Timer, den du aus der Entfernung liest.' },
    ],
    faqs: [
      { question: 'Läuft der Timer in einem Hintergrund-Tab weiter?', answer: 'Ja. Er basiert auf der echten Uhrzeit und bleibt genau, auch wenn der Browser Hintergrund-Tabs verlangsamt.' },
      { question: 'Macht er ein Geräusch?', answer: 'Nur wenn du den Signalton einschaltest. Sonst blinkt der Bildschirm sanft, wenn die Zeit abgelaufen ist.' },
      { question: 'Was ist die maximale Dauer?', answer: 'Bis zu 99 Stunden, 59 Minuten und 59 Sekunden.' },
    ],
  },
}
