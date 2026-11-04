import type { ToolTranslations } from '../types'

export const de: ToolTranslations = {
  'screen-uniformity-test': {
    glance: {
      answer:
        'Ein Homogenitätstest zeigt dunkle und graue Vollbildflächen, damit du siehst, ob Helligkeit und Farbe über das ganze Panel gleichmäßig sind. Er macht Lichthöfe an den Rändern, Clouding bei LCD- und IPS-Displays, IPS-Glow, Vignettierung und den Dirty-Screen-Effekt großer Fernseher sichtbar.',
      features: ['Schwarze, dunkelgraue und mittelgraue Testflächen', 'Helligkeitsstufen für Clouding im dunklen Raum', 'Hinweise, um IPS-Glow von Lichthöfen zu unterscheiden', 'Vollbild ohne Browserleisten'],
      benefits: ['Panelfehler finden, die unter die Garantie fallen', 'Zwei Monitore oder ein Austauschgerät fair vergleichen', 'Dauert etwa zwei Minuten im dunklen Raum'],
    },
    steps: [
      'Dimme das Raumlicht und lass das Display ein paar Minuten warm werden.',
      'Drücke F für Vollbild und beginne mit dem dunkelsten Grau, um die Ränder auf Lichthöfe zu prüfen.',
      'Geh hellere Graustufen durch und achte auf Flecken, Streifen oder dunklere Ecken.',
      'Schalte das Raster ein, um bestimmte Bereiche des Bildschirms zu vergleichen.',
    ],
    useCases: [
      { title: 'Lichthöfe', description: 'Fast schwarze Flächen zeigen Licht, das an den Rändern von LCD-Panels austritt.' },
      { title: 'Dirty-Screen-Effekt', description: 'Mittleres Grau zeigt senkrechte Streifen oder Flecken auf Fernsehern bei Kameraschwenks.' },
      { title: 'Vignettierung', description: 'Vergleiche Ecken und Mitte, um dunklere Ränder zu erkennen.' },
      { title: 'Panel-Lotterie', description: 'Vergleiche zwei Geräte desselben Modells, bevor du eines behältst.' },
    ],
    faqs: [
      { question: 'Warum wirkt mein Bildschirm auf Grau ungleichmäßig?', answer: 'Kein Panel ist perfekt gleichmäßig. Kleine Helligkeitsunterschiede sind normal; große Flecken, starke Streifen oder helle Ecken können bei einem neuen Gerät eine Reklamation wert sein.' },
      { question: 'Sollte ich im dunklen Raum testen?', answer: 'Ja. Umgebungslicht verdeckt feine Lichthöfe und Clouding, im abgedunkelten Raum ist der Test viel aussagekräftiger.' },
      { question: 'Zeigt die Kamera, was ich sehe?', answer: 'Handykameras übertreiben Lichthöfe und Clouding oft. Urteile mit den eigenen Augen und nutze Fotos nur als grobe Orientierung.' },
    ],
  },
  stopwatch: {
    glance: {
      answer:
        'Eine Online-Stoppuhr misst die Zeit von Start bis Stopp auf die Hundertstelsekunde genau, in großen Vollbild-Ziffern. Stoppe Runden beim Laufen, Schwimmen, Training oder bei Experimenten. Die Zeit bleibt genau, weil sie an der Uhr deines Geräts gemessen wird.',
      features: ['Start, Stopp, Runde und Zurücksetzen', 'Genauigkeit auf Hundertstelsekunden', 'Rundenliste mit Zwischenzeiten', 'Leertaste und Tastenkürzel'],
      benefits: ['Große Anzeige für Fitnessstudio und Klassenzimmer', 'Genaue Rundenzeiten', 'Kostenlos, funktioniert offline'],
    },
    steps: [
      'Drücke Start oder die Leertaste, um die Zeitmessung zu beginnen.',
      'Drücke Runde oder L, um eine Zwischenzeit zu speichern, während die Uhr weiterläuft.',
      'Leertaste pausiert, R setzt zurück.',
      'Drücke F für Vollbild und Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Sport und Laufen', description: 'Rundenzeiten und Intervalle festhalten.' },
      { title: 'Reden', description: 'Vorträge und Proben genau stoppen.' },
      { title: 'Spiele und Quiz', description: 'Runden im Unterricht oder beim Spieleabend timen.' },
      { title: 'Labor und Küche', description: 'Reaktionen, Brüh- und Ziehzeiten messen.' },
    ],
    faqs: [
      { question: 'Wie genau ist die Stoppuhr?', answer: 'Sie nutzt die hochauflösende Uhr des Browsers und zeigt Hundertstelsekunden. Die Bildwiederholrate kann die sichtbare Anzeige um wenige Millisekunden verzögern.' },
      { question: 'Werden meine Runden gespeichert?', answer: 'Die Runden bleiben auf der Seite, bis du zurücksetzt oder sie schließt. Du kannst sie in die Zwischenablage kopieren.' },
      { question: 'Funktioniert sie offline?', answer: 'Ja. Sobald die Seite geladen ist, läuft die Stoppuhr ohne Verbindung.' },
    ],
  },
  'matrix-screensaver': {
    glance: {
      answer:
        'Der Matrix-Bildschirmschoner zeigt Spalten herabfallender grüner Zeichen, den „digitalen Regen“ aus dem Film Matrix (1999). Er läuft im Browser im Vollbild, und du kannst Farbe, Geschwindigkeit und Zeichengröße für Schreibtisch, Fernseher oder Stream-Hintergrund einstellen.',
      features: ['Fallende Katakana, Ziffern und Symbole', 'Farbe, Geschwindigkeit und Zeichengröße einstellbar', 'Vollbild mit ausgeblendetem Mauszeiger', 'Flüssig auf Bildschirmen mit hoher Bildrate'],
      benefits: ['Kultiger Look für ruhende Bildschirme und Streams', 'Kein Bildschirmschoner unter Windows oder macOS zu installieren', 'Kostenlos'],
    },
    steps: [
      'Der Regen startet sofort in der Vorschau.',
      'Passe Geschwindigkeit, Dichte und Schriftgröße an oder wähle eine andere Farbe.',
      'Wähle Katakana, Binärzeichen oder Cyber-Zeichen.',
      'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Bildschirmschoner', description: 'Lass ihn auf einem ungenutzten Monitor laufen.' },
      { title: 'Tech-Atmosphäre', description: 'Hintergrundbild für Streams, Büros oder Events.' },
      { title: 'Video-Hintergründe', description: 'Nimm einen „Cyber“-Hintergrund für Videos auf.' },
      { title: 'Kostümpartys', description: 'Die passende Kulisse für einen Sci-Fi-Abend.' },
    ],
    faqs: [
      { question: 'Welche Zeichen nutzt der Matrix-Regen?', answer: 'Der Originaleffekt nutzte gespiegelte Halbbreiten-Katakana gemischt mit Ziffern. Hier wählst du diesen Stil, Binärzeichen oder Cyber-Zeichen.' },
      { question: 'Kann ich ihn als echten Bildschirmschoner nutzen?', answer: 'Browser können keine System-Bildschirmschoner installieren, aber du kannst ihn im Vollbild öffnen, wenn du weggehst. Der Wake Lock hält das Display an.' },
      { question: 'Bremst er meinen Computer?', answer: 'Er ist sparsam. Senke auf älteren Geräten die Dichte für eine flüssigere Animation.' },
    ],
  },
  'dvd-screensaver': {
    glance: {
      answer:
        'Der DVD-Bildschirmschoner ist das klassische hüpfende Logo von DVD-Playern: Es gleitet über den Bildschirm, wechselt bei jedem Randkontakt die Farbe und landet ab und zu genau in einer Ecke. Diese Version zählt Ecktreffer und lässt dich Geschwindigkeit und Logogröße ändern.',
      features: ['Farbwechsel bei jedem Abprall', 'Ecktreffer-Zähler mit Jubel', 'Geschwindigkeit und Logogröße einstellbar', 'Vollbild auf jedem Bildschirm'],
      benefits: ['Nostalgisch und seltsam befriedigend', 'Toller Hintergrund für Streams und Wartezimmer', 'Kostenlos'],
    },
    steps: [
      'Das Logo beginnt sofort zu hüpfen.',
      'Stelle Geschwindigkeit und Logogröße mit den Reglern ein.',
      'Behalte den Ecktreffer-Zähler im Blick: Jede exakte Ecke wird gefeiert.',
      'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Nostalgie', description: 'Erlebe den Wartezimmer-Klassiker noch einmal.' },
      { title: 'Ruhebildschirm', description: 'Ein verspielter Bildschirmschoner für Fernseher oder Büromonitor.' },
      { title: 'Stream-Pausen', description: 'Zuschauer lieben das Warten auf den Ecktreffer.' },
      { title: 'Gemeinsam schauen', description: 'Wette mit Freunden, wann die Ecke getroffen wird.' },
    ],
    faqs: [
      { question: 'Trifft es wirklich genau die Ecke?', answer: 'Ja. Ob und wie oft hängt von Bildschirmgröße, Logogröße und Geschwindigkeit ab. Der Zähler erfasst jeden exakten Ecktreffer.' },
      { question: 'Ist das das offizielle DVD-Logo?', answer: 'Nein. Es ist ein allgemeines Abzeichen im selben Stil und steht in keiner Verbindung zur DVD Format/Logo Licensing Corporation.' },
      { question: 'Warum wechselt das Logo die Farbe?', answer: 'Wie beim klassischen Bildschirmschoner wählt das Logo bei jedem Randkontakt eine neue Farbe und wiederholt nie zweimal hintereinander dieselbe.' },
    ],
  },
  'fake-windows-10-update': {
    glance: {
      answer:
        'Ein gefälschter Windows-10-Update-Bildschirm kopiert den blauen Bildschirm „Updates werden bearbeitet“ mit den kreisenden Punkten und einem langsam steigenden Prozentwert. Im Vollbild sieht es aus, als würde der PC gerade aktualisiert – ein klassischer, harmloser Streich. Esc beendet ihn.',
      features: ['Kreisende Punkte und steigender Prozentwert', 'Einstellbare Update-Geschwindigkeit', 'Vollbild mit ausgeblendetem Mauszeiger', 'Jederzeit mit Esc beenden'],
      benefits: ['Überzeugender, harmloser Bürostreich', 'Requisite für Videos und Tutorials', 'Es wird nichts installiert oder verändert'],
    },
    steps: [
      'Stelle mit dem Geschwindigkeitsregler ein, wie schnell der Prozentwert steigt.',
      'Klicke auf Vollbild oder drücke F, damit die Simulation den Bildschirm füllt und den Browser verbirgt.',
      'Geh weg und lass den Fortschritt laufen. Mit Pause sieht das Update hängen geblieben aus.',
      'Drücke Esc, um es zu beenden und den Streich aufzulösen.',
    ],
    useCases: [
      { title: 'Harmlose Bürostreiche', description: 'Lass einen Kollegen glauben, sein PC macht Updates – und lös es dann auf.' },
      { title: 'Pause machen', description: 'Wirk beschäftigt, wenn du kurz vom Schreibtisch weggehst.' },
      { title: 'Requisite für Film und Video', description: 'Zeig ein glaubwürdiges Windows-10-Update am Set.' },
      { title: 'Nostalgie', description: 'Ein klassischer Systembildschirm, einfach zum Spaß.' },
    ],
    faqs: [
      { question: 'Ist das ein echtes Update oder schädlich?', answer: 'Nein. Es ist eine harmlose optische Simulation in einem normalen Browser-Tab. Sie verändert dein Gerät nicht, installiert nichts und fragt keine Daten ab. Esc beendet sie jederzeit.' },
      { question: 'Hat das etwas mit Microsoft zu tun?', answer: 'Nein. Es ist eine unabhängige Nachbildung zur Unterhaltung, nicht mit Microsoft verbunden oder von Microsoft unterstützt.' },
      { question: 'Kann ich steuern, wie schnell es vorangeht?', answer: 'Ja. Der Geschwindigkeitsregler bestimmt, wie schnell der Prozentwert steigt, und Pause hält ihn an, damit das Update hängen geblieben wirkt.' },
      { question: 'Wie beende ich den Fake-Bildschirm?', answer: 'Drücke Esc oder bewege die Maus bzw. tippe auf den Bildschirm, um die Schließen-Taste einzublenden. Den Tab zu schließen geht auch.' },
    ],
  },
  'ring-light': {
    glance: {
      answer:
        'Ein Online-Ringlicht zeigt einen hellen Ring auf deinem Bildschirm, der dein Gesicht gleichmäßig von vorn ausleuchtet, wie das Ringlicht eines Fotografen. Stelle Größe, Breite, Wärme und Helligkeit des Rings ein und wechsle ins Vollbild für Selfies, Videocalls, Make-up oder Produktfotos.',
      features: ['Ringgröße und -breite einstellbar', 'Farbtemperatur von warm bis kühl', 'Helligkeitsregler und Vollbild', 'Für Handys, Tablets und Laptops'],
      benefits: ['Gleichmäßiges, schattenfreies Licht, kostenlos', 'Lichtreflexe in den Augen wie beim echten Ringlicht', 'Jeder freie Bildschirm wird zur Lampe'],
    },
    steps: [
      'Öffne die Seite auf dem Bildschirm vor dir (Laptop, Monitor oder Tablet) und dreh die Helligkeit hoch.',
      'Stelle Größe und Breite des Rings ein; ein breiterer Ring gibt mehr Licht.',
      'Wähle die Farbtemperatur oder einen Farbton für kreative Looks.',
      'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Videocalls', description: 'Gleichmäßiges, schmeichelndes Licht im Gesicht, ohne ein Ringlicht zu kaufen.' },
      { title: 'Selfies und Porträts', description: 'Der klassische runde Lichtreflex in den Augen.' },
      { title: 'Make-up', description: 'Sieh dein Gesicht deutlich bei warmem oder tageslichtähnlichem Licht.' },
      { title: 'Streaming', description: 'Weiches Hauptlicht von einem freien Monitor oder Tablet.' },
    ],
    faqs: [
      { question: 'Ist ein Bildschirm so hell wie ein echtes Ringlicht?', answer: 'Nein. Ein echtes LED-Ringlicht ist viel heller. Das Bildschirm-Ringlicht wirkt am besten in einem abgedunkelten Raum, bei voller Helligkeit und nah am Gesicht.' },
      { question: 'Warum ein Ring und nicht der ganze Bildschirm?', answer: 'Ein Ring beleuchtet dich von allen Seiten, verringert Schatten unter Nase und Augen und erzeugt den runden Reflex in den Augen. Schalte das Füllen der Mitte ein, wenn du jedes bisschen Licht brauchst.' },
      { question: 'Welche Farbtemperatur sieht am besten aus?', answer: 'Etwa 4500–5500 K wirken bei den meisten Hauttönen natürlich. Abends wärmer (3000 K), kühler (6500 K) passend zum Tageslicht.' },
    ],
  },
}
