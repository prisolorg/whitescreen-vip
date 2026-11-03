import type { TopicTranslation } from './types'

export const de: TopicTranslation = {
  hubs: {
    '/color-screens': {
      intro:
        'Farbbildschirme füllen dein ganzes Display mit einer einzigen Vollfarbe. Wähle eine Farbe, drücke F für Vollbild, und jedes Pixel zeigt genau diese Farbe. Sie helfen, tote und hängende Pixel zu finden, dienen als weiches Licht, als Chroma-Key-Hintergrund und als ruhiger, ablenkungsfreier Bildschirm.',
      details: [
        {
          heading: 'Welche Farbe sollte ich nehmen?',
          text: 'Weiß für Licht und zum Reinigen, Schwarz zum Verbergen des Bildschirms oder zum Prüfen von Lichthöfen, reines Rot, Grün und Blau zum Testen jedes Subpixels. Grau zeigt ungleichmäßige Helligkeit, warmes Orange oder Rosa eignen sich als Nacht- oder Selfie-Licht.',
        },
        {
          heading: 'Exakte Farbwerte',
          text: 'Jeder Farbbildschirm nutzt einen exakten Hexwert (zum Beispiel #FF0000 für Rot), damit Tests zuverlässig sind. Du kannst trotzdem jeden eigenen Hexcode eingeben und jede Farbe als PNG bis 8K herunterladen.',
        },
      ],
      faqs: [
        { question: 'Wie mache ich den ganzen Bildschirm einfarbig?', answer: 'Öffne die Farbseite und drücke F oder klicke auf Vollbild. Der Browser blendet seine Leisten aus und zeigt nur die Farbe. Esc beendet es.' },
        { question: 'Funktionieren Farbbildschirme auf Handys und Fernsehern?', answer: 'Ja. Sie laufen in jedem modernen Browser, auch auf Android, iPhone, Smart-TVs und Spielkonsolen. In Safari auf dem iPhone füllt die Farbe das Browserfenster.' },
        { question: 'Kann ich ein einfarbiges Bild herunterladen?', answer: 'Ja. Jede Farbseite bietet ein kostenloses PNG der Farbe, und im Download-Bereich bekommst du jede Größe von 720p bis 8K.' },
      ],
    },
    '/screen-tests': {
      intro:
        'Bildschirmtests sind Vollbild-Muster und Messungen, die zeigen, wie gut dein Display funktioniert. Damit findest du tote Pixel, misst die echte Bildwiederholrate in Hz, erkennst Ghosting, Lichthöfe und Einbrennen, prüfst einen Touchscreen auf tote Zonen und beurteilst die Farben, alles im Browser und ohne Installation.',
      details: [
        {
          heading: 'Welchen Test zuerst?',
          text: 'Bei einem neuen oder gebrauchten Display beginnst du mit dem Pixelfehlertest und dem Homogenitätstest: Sie finden die Fehler, die am häufigsten von Rückgabe oder Garantie abgedeckt sind. Gamer ergänzen Bildwiederholrate und Ghosting, Handy- und Tablet-Besitzer den Touchscreen-Test, OLED-Besitzer die Einbrenntests.',
        },
        {
          heading: 'Wie genau sind Browsertests?',
          text: 'Die Muster nutzen exakte Pixelwerte, und die Zeitmessung kommt vom Frame-Takt des Browsers. Das Ergebnis entspricht also dem, was dein Bildschirm wirklich zeigt. Ein Colorimeter für professionelle Kalibrierung ersetzen sie nicht.',
        },
      ],
      faqs: [
        { question: 'Wie prüfe ich meinen Monitor auf Fehler?', answer: 'Reinige den Bildschirm, mach dann den Pixelfehlertest, den Homogenitätstest im dunklen Raum und den Bildwiederholraten-Test. Zusammen etwa fünf Minuten.' },
        { question: 'Funktionieren die Tests auf Fernsehern und Handys?', answer: 'Ja. Öffne die Seite im Browser des Geräts und wechsle ins Vollbild. Der Touchscreen-Test ist für Handys und Tablets gemacht.' },
        { question: 'Sind die Bildschirmtests kostenlos?', answer: 'Ja. Jeder Test ist kostenlos, ohne Anmeldung, und läuft komplett auf deinem Gerät.' },
      ],
    },
    '/screensavers': {
      intro:
        'Online-Bildschirmschoner laufen im Browser, statt auf dem Computer installiert zu werden. Öffne einen, wechsle ins Vollbild, und er läuft auf jedem Gerät: PC, Mac, Chromebook, Smart-TV oder ein altes Tablet auf dem Schreibtisch. Wähle den digitalen Regen aus Matrix, das hüpfende DVD-Logo, eine Retro-Klappzahluhr oder motivierende Zitate.',
      details: [
        {
          heading: 'Warum ein Bildschirmschoner im Browser?',
          text: 'Er funktioniert auf Geräten ohne Bildschirmschoner-Einstellungen wie Smart-TVs und Chromebooks, braucht keine Installation und hält das Display wach, solange er läuft – ideal für Empfang, Schreibtisch und Streams.',
        },
      ],
      faqs: [
        { question: 'Verhindert ein Online-Bildschirmschoner den Ruhezustand?', answer: 'Im Vollbild halten unterstützte Browser den Bildschirm mit der Screen-Wake-Lock-API wach, sodass er läuft, bis du ihn beendest.' },
        { question: 'Kann ich sie auf einem Smart-TV nutzen?', answer: 'Ja. Öffne die Seite im Browser des Fernsehers und drücke die Vollbild-Taste.' },
      ],
    },
    '/prank-screens': {
      intro:
        'Scherz-Bildschirme sind realistische, harmlose Fake-Screens im Browser: Update-Bildschirme von Windows, macOS, ChromeOS und Android, der Bluescreen, ein gehackter Bildschirm und gefälschte Videomeetings. Öffne einen, wechsle ins Vollbild und drücke Esc, wenn der Spaß vorbei ist. Es wird nichts installiert oder verändert.',
      details: [
        {
          heading: 'Streiche mit Verantwortung',
          text: 'Halte es kurz und lös den Scherz auf. Nutze ein gefälschtes Update oder einen Fehler nie, um jemanden zu Zahlungen oder zum Zugriff auf ein Gerät zu drängen: Das ist Betrug, kein Streich.',
        },
        {
          heading: 'Auch als Requisite',
          text: 'Filmemacher, Streamer, Lehrkräfte und Escape Rooms nutzen diese Bildschirme als glaubwürdige Requisite, weil sie vor der Kamera echt wirken, ohne ein echtes System anzufassen.',
        },
      ],
      faqs: [
        { question: 'Sind Scherz-Bildschirme sicher?', answer: 'Ja. Es sind Bilder und Animationen in einem Browser-Tab. Sie können nichts installieren, keine Dateien lesen und keine Einstellungen ändern.' },
        { question: 'Wie beende ich einen Scherz-Bildschirm?', answer: 'Drücke Esc oder bewege die Maus bzw. tippe auf den Bildschirm, um die Schließen-Taste einzublenden. Den Tab zu schließen geht auch.' },
      ],
    },
    '/visual-effects': {
      intro:
        'Visuelle Effekte machen aus deinem Bildschirm mehr als ein Bild: einen Rauschgenerator mit TV-Rauschen, ein Ringlicht oder Videocall-Licht, einen kaputten Bildschirm, ein Hacker-Terminal, animiertes Rauschen, Farbverläufe und Farbwechsel. Alle laufen im Vollbild im Browser, auf Handys, Computern und Fernsehern.',
      details: [
        {
          heading: 'Licht, Klang und Spaß an einem Ort',
          text: 'Nutze Ringlicht und Zoom-Beleuchtung, um dein Gesicht auszuleuchten, die Rauschgeneratoren zum Konzentrieren oder Schlafen und den kaputten Bildschirm und Hacker Typer für Streiche und Videos.',
        },
      ],
      faqs: [
        { question: 'Sind blinkende Effekte sicher?', answer: 'Schnelles Flackern kann bei Menschen mit fotosensitiver Epilepsie Anfälle auslösen. Verringere die Geschwindigkeit oder wähle einen ruhigen Effekt, wenn du empfindlich bist.' },
        { question: 'Verbrauchen die Rauschgeneratoren Daten?', answer: 'Nein. Der Klang wird auf deinem Gerät erzeugt, es wird nichts gestreamt.' },
      ],
    },
    '/online-timers': {
      intro:
        'Online-Timer zeigen große Vollbild-Ziffern, die du quer durch den Raum lesen kannst. Nutze den Countdown für Unterricht, Meetings und Prüfungen, den Pomodoro-Timer für konzentrierte 25-Minuten-Blöcke und die Stoppuhr mit Runden für Training und Wettkämpfe. Sie bleiben auch in Hintergrund-Tabs genau.',
      details: [
        {
          heading: 'Genau im Hintergrund',
          text: 'Jeder Timer rechnet mit der Uhr deines Geräts statt Takte zu zählen. So bleibt er genau, auch wenn der Browser versteckte Tabs verlangsamt, und der Tab-Titel zeigt die Restzeit.',
        },
      ],
      faqs: [
        { question: 'Klingelt der Timer, wenn der Tab im Hintergrund ist?', answer: 'Ja, solange der Tab geöffnet bleibt. Der Signalton spielt, wenn die Zeit um ist und er eingeschaltet ist.' },
        { question: 'Kann ich einen Timer am Beamer oder Fernseher zeigen?', answer: 'Ja. Öffne ihn im Browser und drücke F für Vollbild.' },
      ],
    },
  },
  colorAnswer: {
    template: '{subject} füllt dein ganzes Display mit reinem {word} ({hex}). Klicke auf Vollbild oder drücke F, und jedes Pixel zeigt dieselbe Farbe, ohne Leisten oder Ablenkung. {tail}',
    features: ['Reines {word} {hex} oder jede Hex-Farbe', 'Vollbild per Klick mit Helligkeitsregler', 'Kostenloser PNG-Download von 720p bis 8K'],
    benefits: ['Funktioniert sofort auf Handy, Laptop, Monitor und Smart-TV', 'Keine App, keine Anmeldung, nichts zu installieren'],
  },
  colors: {
    red: { subject: 'Ein roter Bildschirm', word: 'Rot', tail: 'Nur die roten Subpixel leuchten, sodass tote oder hängende grüne und blaue Subpixel leicht auffallen. Er dient auch als rotes Nachtlicht, das die Dunkelanpassung der Augen schont.', feature: 'Pfeiltasten wechseln zwischen Rot, Grün und Blau', benefit: 'Findet hängende grüne oder blaue Subpixel in Sekunden' },
    green: { subject: 'Ein grüner Bildschirm', word: 'Grün', tail: 'Creator nutzen ihn als schnellen Chroma-Key-Hintergrund, und weil nur die grünen Subpixel leuchten, fallen defekte rote oder blaue Subpixel beim Pixeltest auf.', feature: 'Leuchtendes Chroma-Grün für OBS, Premiere oder CapCut', benefit: 'Ein kostenloser Greenscreen, wenn kein grünes Tuch da ist' },
    blue: { subject: 'Ein blauer Bildschirm', word: 'Blau', tail: 'Er lässt nur die blauen Subpixel leuchten, für Pixeltests, und dient auch als Bluescreen-Hintergrund oder ruhiges, kühles Licht für Fotos.', feature: 'Reines Blau für Subpixel-Tests und Bluescreen-Keying', benefit: 'Prüft den Blaukanal und macht hängende Pixel sichtbar' },
    yellow: { subject: 'Ein gelber Bildschirm', word: 'Gelb', tail: 'Gelb lässt rote und grüne Subpixel zusammen leuchten, sodass ein toter blauer Subpixel oder ein Farbstich deutlich zu sehen ist. Außerdem ein warmes, fröhliches Licht für Fotos.', feature: 'Exaktes Gelb aus Rot und Grün in voller Stärke', benefit: 'Zeigt tote blaue Subpixel und ungleichmäßige Farbstiche' },
    orange: { subject: 'Ein oranger Bildschirm', word: 'Orange', tail: 'Sein warmer Ton hat weniger Blauanteil als Weiß, deshalb nutzen ihn viele als sanftes Nachtlicht, Sonnenuntergangs-Stimmungslicht oder warmes Fülllicht für Videos.', feature: 'Helligkeitsregler für ein gedämpftes, warmes Nachtlicht', benefit: 'Warmes Licht mit viel weniger Blau als ein weißer Bildschirm' },
    pink: { subject: 'Ein pinker Bildschirm', word: 'Pink', tail: 'Kräftiges Pink gibt weiches, schmeichelndes Licht für Selfies und Make-up und sorgt für Stimmung bei Partys, Streams und im Zimmer.', feature: 'Kräftiges Pink als Standard, hellere oder dunklere Töne möglich', benefit: 'Weiches, schmeichelndes Licht für Selfies und Make-up' },
    purple: { subject: 'Ein lila Bildschirm', word: 'Lila', tail: 'Lila mischt rotes und blaues Licht: ein auffälliges Stimmungslicht für Streams, Gaming-Setups und Partys und ein schneller Check, ob der Grünkanal wirklich aus ist.', feature: 'Kräftiges Lila mit Tönen von Lavendel bis Violett', benefit: 'Sofortiges Stimmungslicht für Streams und Partys' },
    cyan: { subject: 'Ein cyanfarbener Bildschirm', word: 'Cyan', tail: 'Cyan lässt Grün und Blau zusammen leuchten, sodass ein hängender roter Subpixel oder ein fehlender Kanal leicht zu sehen ist. Außerdem ein kühles, klares Akzentlicht.', feature: 'Reines Cyan zum Prüfen von Grün- und Blaukanal', benefit: 'Zeigt defekte rote Subpixel und Farbstiche' },
    magenta: { subject: 'Ein Magenta-Bildschirm', word: 'Magenta', tail: 'Magenta lässt Rot und Blau leuchten, während Grün aus bleibt. So fallen hängende grüne Subpixel und Grünstiche bei Displaytests sofort auf.', feature: 'Reines Magenta für den Rot- und Blaukanal', benefit: 'Zeigt hängende grüne Subpixel und Grünstiche' },
    gray: { subject: 'Ein grauer Bildschirm', word: 'Grau', tail: 'Ein mittleres Grau ist der Standard, um Dirty-Screen-Effekt, Clouding, Vignettierung und Banding zu erkennen, die helle Farben verbergen.', feature: 'Wechsel zwischen hellem, mittlerem und dunklem Grau', benefit: 'Zeigt Homogenitätsprobleme und Dirty-Screen-Effekt' },
  },
}
