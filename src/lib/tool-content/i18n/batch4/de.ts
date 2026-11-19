import type { LocalizedToolContent, ToolTranslations } from '../types'
import type { ToolFaq } from '../../types'

const EXIT: ToolFaq = { question: 'Wie beende ich den Fake-Bildschirm?', answer: 'Drücke Esc oder bewege die Maus bzw. tippe auf den Bildschirm, um die Schließen-Taste einzublenden. Den Tab zu schließen geht auch.' }
const brandFaq = (brand: string): ToolFaq => ({ question: `Hat das etwas mit ${brand} zu tun?`, answer: `Nein. Es ist eine unabhängige Nachbildung zur Unterhaltung und steht in keiner Verbindung zu ${brand}, wird weder unterstützt noch gesponsert. Produktnamen gehören ihren Inhabern.` })

function update(name: string, brand: string, glance: LocalizedToolContent['glance'], extra: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Stelle mit dem Geschwindigkeitsregler ein, wie schnell der Prozentwert steigt.',
      'Klicke auf Vollbild oder drücke F, damit die Simulation den Bildschirm füllt und den Browser verbirgt.',
      'Geh weg und lass den Fortschritt laufen. Mit Pause sieht das Update hängen geblieben aus.',
      'Drücke Esc, um es zu beenden und den Streich aufzulösen.',
    ],
    useCases: [
      { title: 'Harmlose Bürostreiche', description: 'Lass einen Kollegen glauben, sein Gerät macht Updates – und lös es dann auf.' },
      { title: 'Pause machen', description: 'Wirk beschäftigt, wenn du kurz vom Schreibtisch weggehst.' },
      { title: 'Requisite für Film und Video', description: `Zeig ein glaubwürdiges ${name}-Update am Set.` },
      { title: 'Nostalgie', description: 'Ein klassischer Systembildschirm, einfach zum Spaß.' },
    ],
    faqs: [
      { question: 'Ist das ein echtes Update oder schädlich?', answer: 'Nein. Es ist eine harmlose optische Simulation in einem normalen Browser-Tab. Sie verändert dein Gerät nicht, installiert nichts und fragt keine Daten ab. Esc beendet sie jederzeit.' },
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
      'Bearbeite den Meeting-Titel oben im Call.',
      'Schalte bei Bedarf die Kameravorschau ein: Sie bleibt auf deinem Gerät und wird nie aufgenommen oder gesendet.',
      'Drücke F oder Vollbild für einen überzeugenden Call im Vollbild.',
      'Drücke jederzeit Esc zum Beenden.',
    ],
    useCases: [
      { title: 'Video-Requisite', description: 'Dreh eine Szene mit einem Meeting ohne echten Call.' },
      { title: 'UI-Mockups', description: 'Nutze ein Call-Layout in Präsentationen oder Tutorials.' },
      { title: 'Harmlose Späße', description: 'Tu so, als wärst du „im Meeting“.' },
      { title: 'Üben', description: 'Probe vor einem echten Call, wie du vor der Kamera wirkst.' },
    ],
    faqs: [
      { question: 'Ist das ein echter Call oder schädlich?', answer: 'Nein. Es ist eine harmlose optische Simulation in einem normalen Browser-Tab. Sie verbindet sich mit keinem Dienst, installiert nichts und fragt keine Daten ab.' },
      brandFaq(brand),
      { question: 'Nutzt es meine Kamera oder mein Mikrofon?', answer: 'Nur wenn du die Kameravorschau einschaltest. Das Video bleibt auf deinem Gerät und wird nie aufgenommen oder hochgeladen. Das Mikrofon wird nie genutzt.' },
      EXIT,
      ...(extra ? [extra] : []),
    ],
  }
}

export const de: ToolTranslations = {
  'oled-gray-test': {
    glance: {
      answer: 'Ein OLED-Grautest zeigt sehr dunkle Graustufen nahe Schwarz, wo OLED-Panels am häufigsten Probleme zeigen. Er macht Banding nahe Schwarz, Mura (fleckige Stellen), senkrechte Linien und ungleichmäßige Schattierung sichtbar, die helle Inhalte auf OLED-Fernsehern, -Monitoren und -Handys verbergen.',
      features: ['Graustufen nahe Schwarz von 1 % bis 20 %, plus Verlauf', 'Vollbildflächen ohne Einblendungen', 'Manuelles Weiterschalten zum ruhigen Vergleich', 'Für Handys, Fernseher und OLED-Monitore'],
      benefits: ['Neues OLED innerhalb der Rückgabefrist prüfen', 'Banding vor dem Kalibrieren finden', 'Kostenlos und schnell'],
    },
    steps: ['Mach das Licht aus und stelle das Display auf seine übliche Helligkeit.', 'Drücke F für Vollbild und beginne mit der 5-%-Stufe.', 'Geh auf 1–3 % herunter, um zu sehen, wo das Panel Schwarz verschluckt oder fleckig wird.', 'Prüfe den Grauverlauf auf sichtbare Stufen zwischen benachbarten Tönen.'],
    useCases: [
      { title: 'Homogenität nahe Schwarz', description: 'Sehr dunkles Grau zeigt Flecken und senkrechte Linien auf OLED-Panels.' },
      { title: 'Verschluckte Schwarztöne', description: 'Prüfe, ob die dunkelsten Stufen sichtbar sind oder mit Schwarz verschmelzen.' },
      { title: 'Flimmern bei wenig Helligkeit', description: 'Manche Panels flimmern bei sehr dunklem Grau und niedriger Helligkeit.' },
      { title: 'Geräte vergleichen', description: 'Vergleiche zwei Handys oder Fernseher mit gleichen Einstellungen.' },
    ],
    faqs: [
      { question: 'Warum wirkt fast schwarzes Grau auf OLED fleckig?', answer: 'Jedes OLED-Pixel wird einzeln angesteuert, und winzige Unterschiede werden bei sehr wenig Licht sichtbar. Etwas Ungleichmäßigkeit ist bei allen OLEDs normal.' },
      { question: 'Ist der Test auch für LCDs sinnvoll?', answer: 'Ja, aber bei LCDs zeigen sich Probleme nahe Schwarz meist als Lichthöfe oder Clouding. Dafür ist der Homogenitätstest da.' },
      { question: 'Warum sehe ich die 1-%-Stufe nicht?', answer: 'Viele Displays und Bildmodi verschlucken die dunkelsten Töne. Erhöhe die Helligkeit leicht oder probiere einen anderen Bildmodus.' },
    ],
  },
  'oled-burn-in-test': {
    glance: {
      answer: 'Ein OLED-Einbrenntest zeigt Vollfarben im Vollbild, damit verblasste Logos, Statusleisten, Navigationstasten oder Spiel-HUDs sichtbar werden, die ungleichmäßiger Pixelverschleiß hinterlassen hat. Einbrennen ist dauerhaft, Nachbilder sind vorübergehend. Beides sieht man am besten auf Grau, Rot und Blau.',
      features: ['Graue, rote, grüne, blaue und weiße Flächen', 'Pfeiltasten zum schnellen Farbwechsel', 'Tipps, um Einbrennen von Nachbildern zu unterscheiden', 'Für OLED-Handys, -Fernseher und -Monitore'],
      benefits: ['Gebrauchtes OLED-Handy oder -TV vor dem Kauf prüfen', 'Nachbilder früh erkennen', 'Keine App, kein Download'],
    },
    steps: ['Drücke F für Vollbild und beginne mit mittlerem Grau, dann Rot, Grün, Blau und Weiß.', 'Achte auf schwache Formen wie Taskleisten, Logos, Tastaturen oder Senderlogos.', 'Nutze den automatischen Wechsel, wenn du nach vorübergehenden Nachbildern suchst.', 'Verschwinden die Formen nach ein paar Minuten, war es ein Nachbild und kein Einbrennen.'],
    useCases: [
      { title: 'Gebrauchtes OLED kaufen', description: 'Prüfe ein gebrauchtes Handy oder einen Fernseher auf Geisterbilder.' },
      { title: 'Spiel-HUDs', description: 'Achte nach langen Sessions auf Lebensbalken oder Minikarten.' },
      { title: 'Nachbild oder Einbrennen', description: 'Hilft, vorübergehende Nachbilder von dauerhaftem Einbrennen zu unterscheiden.' },
      { title: 'Garantiefälle', description: 'Fotografiere das Einbrennen auf einer Vollfarbe für den Support.' },
    ],
    faqs: [
      { question: 'Kann das Tool Einbrennen beheben?', answer: 'Nein. Dauerhaftes Einbrennen ist ungleichmäßiger Pixelverschleiß und lässt sich von keiner Website rückgängig machen. Nutze die Pixel-Auffrischung deines Displays und die Hinweise des Herstellers.' },
      { question: 'Was ist der Unterschied zwischen Nachbild und Einbrennen?', answer: 'Ein Nachbild ist vorübergehend und verschwindet nach anderen Inhalten. Einbrennen ist dauerhaft und bleibt auf Vollfarben sichtbar.' },
      { question: 'Welche Farbe zeigt Einbrennen am besten?', answer: 'Mittleres Grau und Rot zeigen es meist am deutlichsten, prüfe aber alle Farben, weil der Verschleiß je Subpixel unterschiedlich ist.' },
    ],
  },
  'screen-burn-in-test': {
    glance: {
      answer: 'Ein Einbrenntest lässt dich jedes Display auf Geisterbilder prüfen und dann einen Fixer laufen lassen, der Farben und Rauschen über den Bildschirm schickt. Vorübergehende Nachbilder verschwinden oft nach 10 bis 30 Minuten Fixer; dauerhaftes Einbrennen durch verschlissene Pixel lässt sich per Software nicht reparieren.',
      features: ['Prüfmodus mit Vollfarben und Pfeiltasten', 'Fixer-Modus: Farbwischer, Farbwechsel und Rauschen', 'Timer, der den Fixer automatisch stoppt', 'Für OLED-, Plasma- und LCD-Bildschirme'],
      benefits: ['Nachbilder ohne zusätzliche Apps entfernen', 'Erkennen, ob ein Fleck Nachbild oder Einbrennen ist', 'Kostenlos und schonend fürs Display'],
    },
    steps: ['Dreh die Helligkeit hoch und wechsle im abgedunkelten Raum ins Vollbild.', 'Geh im Prüfmodus mit den Pfeilen oder Feldtasten durch alle Farben. 50 % Grau zeigt Einbrennen am besten.', 'Siehst du Formen, wechsle zum Fixer, wähle den weißen Wischer (oder ein blinkendes Muster, wenn dich Blinken nicht stört) und lass ihn 10–30 Minuten laufen.', 'Prüfe danach erneut. Was nach mehreren Durchläufen bleibt, ist meist dauerhaftes Einbrennen.'],
    useCases: [
      { title: 'Gebrauchtes Display kaufen', description: 'Eingebrannte Logos oder Taskleisten vor dem Bezahlen erkennen.' },
      { title: 'Nach statischer Nutzung', description: 'Monitore prüfen, die stundenlang Dashboards, Ticker oder Spiele zeigten.' },
      { title: 'Nachbilder entfernen', description: 'Den Fixer starten, wenn ein Geisterbild bleibt.' },
      { title: 'Garantiefälle', description: 'Einbrennen auf grauer Fläche für den Support fotografieren.' },
    ],
    faqs: [
      { question: 'Was ist der Unterschied zwischen Nachbild und Einbrennen?', answer: 'Ein Nachbild ist vorübergehend und verschwindet nach Minuten oder Stunden wechselnder Inhalte. Einbrennen ist dauerhafter Pixelverschleiß.' },
      { question: 'Kann der Fixer Einbrennen reparieren?', answer: 'Er hilft bei vorübergehenden Nachbildern. Dauerhaftes Einbrennen bei OLED ist ungleichmäßiger Verschleiß, den kein Muster rückgängig macht; die Pixel-Auffrischung deines Geräts ist die beste Option.' },
      { question: 'Welche Farbe zeigt Einbrennen am besten?', answer: 'Mittleres oder dunkles Grau zeigt es meist am deutlichsten, danach Rot, Grün und Blau.' },
    ],
  },
  'monitor-ghosting-test': {
    glance: {
      answer: 'Ein Ghosting-Test bewegt Objekte über den Bildschirm, damit du die Schlieren langsamer Pixel siehst. Schwache Kopien hinter dem Objekt sind Ghosting; helle oder invertierte Säume sind Überschwingen durch zu viel Overdrive. So findest du die beste Overdrive-Einstellung.',
      features: ['Drei bewegte Bahnen mit einstellbarem Tempo', 'Helle und dunkle Hintergründe für verschiedene Übergänge', 'Referenzraster zum Beurteilen der Schlierenlänge', 'Passt sich deiner echten Bildwiederholrate an'],
      benefits: ['Den richtigen Overdrive-Modus fürs Gaming wählen', 'Monitore vor Kauf oder Rückgabe vergleichen', 'Kostenlose Alternative zu Kamera-Tests'],
    },
    steps: ['Stell den Monitor auf seine höchste Bildwiederholrate und wechsle ins Vollbild.', 'Folge dem Ziel mit den Augen. Achte auf Schlieren dahinter und Säume an den Kanten.', 'Ändere das Tempo und probiere jede Overdrive- bzw. Reaktionszeit-Stufe im Monitormenü.', 'Pausiere für ein Standbild; das Ziel selbst sollte scharf sein.'],
    useCases: [
      { title: 'Overdrive einstellen', description: 'Wähle die Stufe mit der kürzesten Schliere ohne inverses Ghosting.' },
      { title: 'Schwarzschlieren bei VA', description: 'Die dunkle Bahn zeigt die lila-schwarzen Schlieren typischer VA-Panels.' },
      { title: 'Monitore vergleichen', description: 'Nutze dasselbe Tempo auf zwei Bildschirmen nebeneinander.' },
      { title: 'Neukauf prüfen', description: 'Prüfe, ob Bewegung so aussieht wie beworben.' },
    ],
    faqs: [
      { question: 'Was ist Monitor-Ghosting?', answer: 'Eine schwache Schliere hinter bewegten Objekten, weil Pixel ihre Farbe nicht schnell genug vor dem nächsten Bild wechseln.' },
      { question: 'Was ist inverses Ghosting?', answer: 'Ein heller oder farbiger Saum um bewegte Objekte, weil Overdrive die Pixel über ihr Ziel hinaustreibt. Senke die Overdrive-Stufe.' },
      { question: 'Warum wirkt das Ziel auch ohne Ghosting unscharf?', answer: 'Sample-and-Hold-Unschärfe: Deine Augen folgen dem Objekt, während jedes Bild stillsteht. Höhere Bildraten oder ein Backlight-Strobing-Modus verringern sie.' },
    ],
  },
  'frame-rate-test': {
    glance: {
      answer: 'Ein Bildratentest zeigt dieselbe Bewegung mit verschiedenen Bildern pro Sekunde nebeneinander: 15, 24, 30, 60 und dem Maximum deines Bildschirms. Er macht den Unterschied zwischen ruckelig und flüssig sichtbar und zeigt, warum sich Filme mit 24 FPS und Spiele mit 60 FPS so anders anfühlen.',
      features: ['Fünf Bahnen mit 15, 24, 30, 60 FPS und Maximum', 'Einstellbares Tempo, um Bewegung zu übertreiben oder abzumildern', 'Zeigt deine gemessene maximale Bildrate', 'Pause und Vollbild'],
      benefits: ['Sehen, was ein High-Refresh-Monitor bringt', 'FPS für Schüler oder Zuschauer erklären', 'Läuft in jedem modernen Browser'],
    },
    steps: ['Beobachte jede Bahn; alle bewegen sich gleich schnell.', 'Erhöhe das Tempo, um Ruckeln besser zu sehen.', 'Vergleiche auf einem High-Refresh-Display die 60-FPS-Bahn mit der Maximum-Bahn.', 'Drücke F oder tippe doppelt für Vollbild, Esc beendet es.'],
    useCases: [
      { title: 'Spieleinstellungen', description: 'Entscheide, ob mehr FPS weniger Grafikdetails wert sind.' },
      { title: 'Videoproduktion', description: 'Sieh, warum Filme 24 FPS und Sport 50 oder 60 nutzen.' },
      { title: 'Freunden zeigen', description: 'Beende die Debatte, ob man mehr als 30 FPS sieht.' },
      { title: 'Monitorkauf', description: 'Sieh, was ein 120- oder 144-Hz-Bildschirm bringt.' },
    ],
    faqs: [
      { question: 'Warum sieht die Maximum-Bahn wie 60 FPS aus?', answer: 'Dein Display zeigt höchstens ein Bild pro Aktualisierung. Auf einem 60-Hz-Bildschirm sehen die 60-FPS- und die Maximum-Bahn gleich aus.' },
      { question: 'Warum ruckeln 24 FPS hier, im Kino aber nicht?', answer: 'Filmkameras nehmen in jedem Bild Bewegungsunschärfe auf, die Bewegung glättet. Dieser Test nutzt scharfe Bilder, daher ist jeder Schritt sichtbar.' },
      { question: 'Welche Bildrate brauche ich zum Spielen?', answer: 'Ab 60 FPS wirken die meisten Spiele flüssig; kompetitive Spieler wollen die Bildrate eines 144-Hz-Monitors oder höher erreichen.' },
    ],
  },
  'screen-color-test': {
    glance: {
      answer: 'Ein Bildschirm-Farbtest zeigt Farbbalken, RGB-Verläufe und Sättigungsmuster, damit du beurteilst, wie genau dein Display Farben wiedergibt. Achte auf Banding in Verläufen, ausgefressene Lichter, fehlende Abstufungen und Farbstiche, um zu entscheiden, ob du die Bildeinstellungen anpassen solltest.',
      features: ['Farbbalken im SMPTE-Stil', 'Rot-, Grün-, Blau- und Grauverläufe', 'Sättigungs- und Hauttonmuster', 'Vollbild mit Tastatursteuerung'],
      benefits: ['Banding und Farbstiche schnell erkennen', 'Bildmodi vergleichen', 'Kostenlos, ohne Kalibriergerät'],
    },
    steps: ['Nutze den Standard- oder kalibrierten Bildmodus deines Displays.', 'Drücke F für Vollbild und wechsle die Muster mit den Schaltflächen oder Pfeiltasten.', 'Achte in den Verläufen auf weiche Übergänge ohne Stufen oder Abriss am hellen Ende.', 'Vergleiche dasselbe Muster auf einem anderen Bildschirm.'],
    useCases: [
      { title: 'Farbstiche finden', description: 'Grau und Weiß sollten neutral wirken, ohne Rosa- oder Grünstich.' },
      { title: 'Abriss prüfen', description: 'Sieh, ob die hellsten Stufen jedes Kanals unterscheidbar bleiben.' },
      { title: 'Banding prüfen', description: 'Verläufe zeigen Abstufungen von 6-Bit-Panels oder starker Bildverarbeitung.' },
      { title: 'Direktvergleich', description: 'Vergleiche Laptop und externen Monitor auf Farbtreue.' },
    ],
    faqs: [
      { question: 'Kann ich damit meinen Monitor kalibrieren?', answer: 'Grobe Einstellungen nach Auge ja, eine echte Kalibrierung braucht aber ein Colorimeter und Kalibriersoftware.' },
      { question: 'Warum zeigen meine Verläufe Stufen?', answer: 'Meist hat das Panel oder seine Verarbeitung eine geringe Farbtiefe. Auch Nachtmodi und manche Bildvoreinstellungen verursachen Banding.' },
      { question: 'Warum sehen Farben auf Handy und Monitor anders aus?', answer: 'Displays unterscheiden sich in Farbraum, Weißpunkt und Verarbeitung. Manche passen die Farben auch automatisch ans Umgebungslicht an.' },
    ],
  },
  'no-signal-screen': {
    glance: {
      answer: 'Ein „Kein Signal“-Bildschirm zeigt die bekannte Meldung eines Fernsehers oder Monitors, der über HDMI oder Kabel nichts empfängt. Im Vollbild mit Farbbalken und wanderndem Meldungsfeld ist er ein überzeugender Streich, eine Filmrequisite oder ein Platzhalter für ein freies Display.',
      features: ['Klassische Farbbalken oder blauer Hintergrund', 'Wanderndes „Kein Signal“-Feld wie bei einem echten TV', 'Optionaler 1-kHz-Testton und eigener Eingangsname', 'Vollbild mit ausgeblendetem Mauszeiger'],
      benefits: ['Einfacher, harmloser Streich', 'Requisite für Filme, Escape Rooms und Sets', 'Läuft über den Browser auf Smart-TVs'],
    },
    steps: ['Wähle einen Stil: klassische Farbbalken, schwarzer Bildschirm mit hüpfender Meldung oder blauer Eingangsbildschirm.', 'Bearbeite die Meldung und den Eingangsnamen, etwa „HDMI 1“.', 'Schalte bei Bedarf den 1-kHz-Testton ein – er startet stumm und spielt erst nach einem Klick.', 'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.'],
    useCases: [
      { title: 'Film- und Fotorequisite', description: 'Statte ein Set mit einem glaubwürdig abgesteckten Fernseher aus.' },
      { title: 'Stream-Pausen', description: 'Nutze eine „Kein Signal“-Karte, während du Pause machst.' },
      { title: 'Retro-Look', description: 'Verleih Videos oder Präsentationen nostalgisches Fernsehflair.' },
      { title: 'Harmlose Streiche', description: 'Lass einen Bildschirm getrennt aussehen – und lös es danach auf.' },
    ],
    faqs: [
      { question: 'Wie heißen die farbigen Balken?', answer: 'Das sind SMPTE-Farbbalken, ein Testbild aus dem Rundfunk zum Kalibrieren von Farbe und Helligkeit bei Fernsehern und Videotechnik.' },
      { question: 'Verliert mein Monitor dadurch wirklich das Signal?', answer: 'Nein. Es ist eine Webseite, die nur wie ein Bildschirm ohne Signal aussieht. Dein Display funktioniert ganz normal weiter.' },
      { question: 'Wie komme ich wieder raus?', answer: 'Drücke Esc oder bewege die Maus und klicke auf die Schließen-Taste in der Ecke.' },
    ],
  },
  'hacker-typer': {
    glance: {
      answer: 'Hacker Typer verwandelt beliebiges Tippen in realistischen Code auf dem Bildschirm, sodass jeder wie ein Film-Hacker aussieht. Drück beliebige Tasten und es erscheinen Zeilen echt wirkenden Codes; löse „Access Granted“- oder „Access Denied“-Meldungen aus, um die Szene für Streiche, Videos oder einen Lacher abzurunden.',
      features: ['Echter Code erscheint beim wilden Tippen', 'Meldungen für Zugriff gewährt und verweigert', 'Einstellbares Tipptempo und Textfarbe', 'Terminal-Look im Vollbild'],
      benefits: ['Sofortige Hacker-Szene für Videos und Streiche', 'Spielerischer Einstieg ins Programmieren für Kinder', 'Kostenlos, nichts zu installieren'],
    },
    steps: ['Klicke ins Terminal und tippe irgendetwas, oder tippe auf dem Handy auf den Bildschirm.', 'Ändere das Tempo, um festzulegen, wie viele Zeichen pro Tastendruck erscheinen.', 'Drücke dreimal Alt für „ACCESS GRANTED“ oder dreimal die Feststelltaste für „ACCESS DENIED“.', 'Nutze die Vollbild-Taste oder F11 für den vollen Effekt und Esc zum Beenden.'],
    useCases: [
      { title: 'Freunde beeindrucken', description: 'Wirk wie ein Genie, während du Unsinn tippst.' },
      { title: 'Film und Streaming', description: 'Überzeugende „Hacking“-Aufnahmen für Videos.' },
      { title: 'Spaß im Unterricht', description: 'Ein spielerischer Weg, Interesse am Programmieren zu wecken.' },
      { title: 'Party-Hintergrund', description: 'Lass es auf einem freien Bildschirm bei einem Tech-Event laufen.' },
    ],
    faqs: [
      { question: 'Hackt Hacker Typer wirklich etwas?', answer: 'Nein. Es zeigt nur vorgefertigten, harmlosen Text an. Es führt keine Befehle aus, greift auf keine Netzwerke zu und berührt keine Dateien.' },
      { question: 'Warum startet die Taste F hier nicht das Vollbild?', answer: 'In diesem Tool tippt jede Taste Code, daher nutzt du die Vollbild-Schaltfläche.' },
      { question: 'Funktioniert es auf dem Handy?', answer: 'Ja. Tippe wiederholt aufs Terminal, um mehr Code anzuzeigen.' },
    ],
  },
  'hacked-screen': {
    glance: {
      answer: 'Der Hacked-Screen-Simulator zeigt eine gefälschte Warnung „Ihr System wurde gehackt“ mit Glitch-Text, laufenden Logs, Fortschrittsbalken und Countdown. Es ist ein harmloser Streich: Nichts wird ausgelesen oder verändert, und am Ende des Countdowns verrät eine Meldung, dass es ein Scherz war.',
      features: ['Stile Rot-Alarm und grünes Terminal', 'Eigene Überschrift, Logs und Countdown', 'Optionale Sirene', 'Endet mit einer klaren „War nur Spaß“-Meldung'],
      benefits: ['Harmloser Streich mit dramatischem Look', 'Requisite für Filme, Streams und Escape Rooms', 'Läuft komplett offline im Browser'],
    },
    steps: ['Wähle einen Stil (Rot-Alarm oder grünes Terminal) und den angezeigten Text.', 'Schalte die optionale Sirene ein oder aus; sie spielt erst, wenn du startest.', 'Wechsle ins Vollbild und lass das Gerät für deinen Freund liegen.', 'Drücke Esc oder bewege die Maus, um die Schließen-Taste einzublenden.'],
    useCases: [
      { title: 'Streiche', description: 'Ein kurzer Schreck für einen Freund, der hinterher darüber lacht.' },
      { title: 'Filme und Escape Rooms', description: 'Eine überzeugende „Du wurdest gehackt“-Requisite.' },
      { title: 'Sicherheitsbewusstsein', description: 'Zeig, wie Scareware aussieht, damit man sie ignorieren lernt.' },
      { title: 'Streams und Videos', description: 'Ein dramatischer Moment oder eine Reaktionsszene.' },
    ],
    faqs: [
      { question: 'Hackt oder schadet das meinem Gerät?', answer: 'Nein. Es ist Text und Animation in einem normalen Browser-Tab. Es führt keine Befehle aus, liest keine Dateien und verbindet sich mit nichts.' },
      { question: 'Was tun, wenn eine echte Website sagt, ich sei gehackt?', answer: 'Schließe den Tab. Echte Sicherheitstools verlangen nie, eine Nummer anzurufen oder für das Entsperren zu zahlen; solche Pop-ups sind Betrug.' },
      { question: 'Wie beende ich es?', answer: 'Drücke Esc oder bewege die Maus bzw. tippe, um die Schließen-Taste einzublenden. Den Tab zu schließen geht auch.' },
    ],
  },
  'zoom-lighting': {
    glance: {
      answer: 'Zoom-Beleuchtung macht deinen Bildschirm zu einer weichen Lichtquelle für Videocalls. Wähle eine Farbtemperatur von warm (etwa 2700 K) bis Tageslicht (6500 K), stelle die Helligkeit ein und fülle den Bildschirm oder nutze einen Lichtrahmen um dein Zoom-, Google-Meet- oder Microsoft-Teams-Fenster.',
      features: ['Farbtemperatur-Regler in Kelvin mit Vorgaben', 'Vollfläche oder Rahmen um den Call', 'Helligkeit und eigene Farbe', 'Für Zweitmonitor oder Tablet'],
      benefits: ['Hellere, gleichmäßigere Gesichtsbeleuchtung ohne Lampe', 'Warmes Licht, das der Haut schmeichelt', 'Kostenlos und sofort'],
    },
    steps: ['Öffne diese Seite auf einem Zweitmonitor oder neben deinem Call-Fenster.', 'Stelle Farbtemperatur und Helligkeit ein. Dreh die Bildschirmhelligkeit für mehr Licht hoch.', 'Wähle volles Licht für maximale Helligkeit oder den Rahmen, der in der Mitte ein dunkles Fenster für den Call frei lässt.', 'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.'],
    useCases: [
      { title: 'Videocalls', description: 'Das Gesicht in dunklen Räumen aufhellen und gleichmäßig ausleuchten.' },
      { title: 'Streaming', description: 'Weiches Hauptlicht von einem freien Monitor oder Tablet.' },
      { title: 'Selfies', description: 'Laptop oder Tablet als schnelle, gleichmäßige Lichtquelle.' },
      { title: 'Make-up', description: 'Make-up bei warmem Abend- oder tageslichtähnlichem Licht prüfen.' },
    ],
    faqs: [
      { question: 'Welche Farbtemperatur sollte ich nehmen?', answer: 'Die des Raums. Etwa 3000 K passt zu lampenbeleuchteten Abendräumen, 4000–4500 K ist neutral, 5500–6500 K passt zu Tageslicht vom Fenster.' },
      { question: 'Verändert das meine Kamera?', answer: 'Nein. Es beleuchtet nur dein Gesicht. Die Schwachlicht-Einstellung deiner Meeting-App kannst du weiter nutzen.' },
      { question: 'Wird mein Bildschirm heller als sonst?', answer: 'Nein. Es nutzt deine aktuelle Helligkeit; dreh die Bildschirmhelligkeit für mehr Licht hoch.' },
    ],
  },
  'visual-noise': {
    glance: {
      answer: 'Visuelles Rauschen füllt den Bildschirm mit animierten, weich fließenden Mustern: sanfter Nebel, farbiges Plasma und feine Körnung. Es dient als Hintergrund für Videos und Streams, als Vorlage für Design-Texturen und als ruhiges Bild zum Entspannen.',
      features: ['Stile Nebel, Plasma und feine Körnung', 'Skalierung, Tempo und Farbpalette', 'Pause, um ein Bild einzufrieren', 'Startet pausiert, wenn du weniger Bewegung bevorzugst'],
      benefits: ['Ruhige bewegte Hintergründe für Videos und Streams', 'Textur-Vorlage für Design', 'Kostenlos und leichtgewichtig'],
    },
    steps: ['Wähle einen Stil wie Nebel, Plasma oder feine Körnung.', 'Passe Skalierung, Tempo und Farbpalette an.', 'Pausiere die Animation, um ein Bild einzufrieren, das dir gefällt.', 'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.'],
    useCases: [
      { title: 'Atmosphäre', description: 'Sanfte Bewegung auf einem Fernseher oder Monitor im Hintergrund.' },
      { title: 'Design-Texturen', description: 'Vorlage für Körnungs- und Verlaufstexturen.' },
      { title: 'VJ-Hintergründe', description: 'Einfache generative Visuals für Events.' },
      { title: 'Entspannung', description: 'Langsamer Nebel zum Abschalten.' },
    ],
    faqs: [
      { question: 'Ist das dasselbe wie TV-Rauschen?', answer: 'Nein. TV-Rauschen ist pro Pixel und Bild zufällig. Diese Muster nutzen geglättetes Rauschen, das sanft fließt.' },
      { question: 'Verbraucht es viel Akku?', answer: 'Es läuft auf der Grafikhardware. Senke das Tempo oder pausiere, um am Laptop Strom zu sparen.' },
      { question: 'Berücksichtigt es reduzierte Bewegung?', answer: 'Ja. Bevorzugt dein System reduzierte Bewegung, startet die Animation pausiert.' },
    ],
  },
  'color-cycle': {
    glance: {
      answer: 'Ein Farbwechsel-Bildschirm blendet sanft durch die Farben des Regenbogens. Stelle Tempo und Helligkeit ein für Partylicht, Stimmungslicht, entspannte Atmosphäre oder einen schnellen Check, ob dein Display jeden Farbton ohne Banding zeigt.',
      features: ['Sanfter Regenbogen oder Stufenmodus', 'Tempo- und Helligkeitsregler', 'Vollbild mit ausgeblendetem Mauszeiger', 'Berücksichtigt reduzierte Bewegung'],
      benefits: ['Sofortiges Party- oder Stimmungslicht', 'Prüft weiche Farbübergänge', 'Kostenlos auf jedem Gerät'],
    },
    steps: ['Wähle sanftes Regenbogen-Überblenden oder einen Stufenwechsel durch Farben.', 'Stelle das Tempo mit dem Regler ein.', 'Leertaste pausiert und setzt fort.', 'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.'],
    useCases: [
      { title: 'Stimmungslicht', description: 'Langsam wechselndes Leuchten für Partys oder zum Entspannen.' },
      { title: 'Hängende Pixel', description: 'Schneller Farbwechsel wird manchmal bei hängenden Pixeln empfohlen, ohne Garantie.' },
      { title: 'Stream-Atmosphäre', description: 'Wechselndes Hintergrundlicht hinter dir vor der Kamera.' },
      { title: 'Nachtlicht für Kinder', description: 'Ein sanftes, langsam wechselndes Licht bei geringer Helligkeit.' },
    ],
    faqs: [
      { question: 'Kann Farbwechsel hängende Pixel reparieren?', answer: 'Schneller Farbwechsel hilft manchmal, dass ein hängendes Subpixel wieder reagiert, garantiert ist das aber nicht, und tote Pixel lassen sich so nicht reparieren.' },
      { question: 'Ist schneller Farbwechsel sicher?', answer: 'Schnelles Blinken kann Menschen mit fotosensitiver Epilepsie gefährden. Das Tempo ist begrenzt, startet langsam, und reduzierte Bewegung wird berücksichtigt.' },
      { question: 'Kann ich bei einer Farbe anhalten?', answer: 'Ja. Drücke die Leertaste oder die Pause-Schaltfläche.' },
    ],
  },
  'gradient-screen': {
    glance: {
      answer: 'Ein Farbverlauf-Bildschirm füllt dein Display mit einem weichen Übergang zwischen Farben deiner Wahl. Lege Farben, Winkel und Art fest, nutze ihn als sanftes Raumlicht oder Hintergrundbild, prüfe dein Display auf Banding und lade den Verlauf als Bild herunter.',
      features: ['Lineare und radiale Verläufe', 'Beliebige Farben und Winkel', 'Download als hochauflösendes PNG', 'Vollbild'],
      benefits: ['Eigene Hintergrundbilder in Sekunden', 'Guter Banding-Test für Monitore', 'Kostenlos, keine Design-App nötig'],
    },
    steps: ['Wähle eine Vorlage oder eigene Farben.', 'Wechsle zwischen linear und radial und stelle den Winkel ein.', 'Schalte die Animation für einen langsam wandernden Verlauf ein.', 'Drücke F für Vollbild oder lade den Verlauf als PNG herunter.'],
    useCases: [
      { title: 'Hintergrundbilder', description: 'Ein eigenes Verlaufs-Wallpaper in jeder Auflösung.' },
      { title: 'Raumlicht', description: 'Ein weiches Zweiton-Leuchten schont die Augen mehr als eine Vollfarbe.' },
      { title: 'Banding-Test', description: 'Weiche Verläufe zeigen Banding bei Panels mit geringer Farbtiefe.' },
      { title: 'Hintergründe', description: 'Schnelle Hintergründe für Präsentationen und Videos.' },
    ],
    faqs: [
      { question: 'Warum zeigt mein Verlauf Streifen?', answer: 'Das ist Banding, verursacht durch geringe Farbtiefe des Panels oder Bildkompression. Es ist eine Grenze des Displays, kein Fehler im Verlauf.' },
      { question: 'Kann ich ihn herunterladen?', answer: 'Ja. Wähle eine Auflösung und lade ein im Browser erzeugtes PNG herunter.' },
      { question: 'Kann ich drei Farben nutzen?', answer: 'Ja. Schalte die mittlere Farbe ein, um einen dritten Farbpunkt hinzuzufügen.' },
    ],
  },
  'flip-clock-screensaver': {
    glance: {
      answer: 'Ein Klappzahluhr-Bildschirmschoner zeigt die Zeit in großen Ziffern, die jede Minute umklappen, wie bei einem Retro-Wecker. Wähle 12- oder 24-Stunden-Format, zeige Sekunden und Datum an und lass ihn im Vollbild auf einem freien Monitor, Tablet oder Fernseher laufen.',
      features: ['Animierte Klappziffern', '12- und 24-Stunden-Format mit Sekunden und Datum', 'Helles und dunkles Design', 'Hält den Bildschirm im Vollbild wach'],
      benefits: ['Macht ein altes Tablet zur Tischuhr', 'Große, gut lesbare Uhrzeit quer durch den Raum', 'Kostenlos, ohne App'],
    },
    steps: ['Deine Ortszeit erscheint automatisch.', 'Schalte 12/24-Stunden-Format, Sekunden und Datum um. Jede Ziffer klappt wie bei einer echten Klappzahluhr.', 'Wähle ein Design, das zu deinem Raum passt.', 'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.'],
    useCases: [
      { title: 'Tischuhr', description: 'Mach ein freies Tablet oder einen Monitor zur Tisch- oder Nachttischuhr.' },
      { title: 'Präsentationen', description: 'Zeig die Uhrzeit bei Events und Pausen gut sichtbar.' },
      { title: 'Konzentration', description: 'Eine ruhige, schlichte Uhr im Blick beim Arbeiten.' },
      { title: 'Streaming', description: 'Ein stilvoller „Gleich geht’s los“-Hintergrund.' },
    ],
    faqs: [
      { question: 'Woher kommt die Uhrzeit?', answer: 'Von der Uhr und Zeitzone deines Geräts, daher funktioniert sie nach dem Laden auch offline.' },
      { question: 'Bleibt mein Bildschirm an?', answer: 'Im Vollbild hält ein Wake Lock in unterstützten Browsern das Display wach.' },
      { question: 'Kann ich die Klappanimation abschalten?', answer: 'Ja. Bevorzugt dein System reduzierte Bewegung, wechseln die Ziffern ohne Umklappen.' },
    ],
  },
  'motivational-quote-screensaver': {
    glance: {
      answer: 'Ein Bildschirmschoner mit Motivationszitaten zeigt alle paar Sekunden ein neues inspirierendes Zitat in großer, gut lesbarer Schrift, mit optionaler Uhr. Er passt zu Empfangsbereichen, Klassenzimmern, Fitnessstudios und Bildschirmen zu Hause, auf die man im Vorbeigehen schaut.',
      features: ['Zitate von Seneca, Mark Aurel, Emerson und mehr', 'Wechseltempo, Hintergründe und Zufallsreihenfolge', 'Optionale Uhr', 'Vollbild ohne Abschalten'],
      benefits: ['Positive Anzeige für gemeinsame Räume', 'Keine Einrichtung auf Smart-TVs', 'Kostenlos'],
    },
    steps: ['Ein zufälliges Zitat erscheint sofort.', 'Wähle einen Hintergrund und wie viele Sekunden jedes Zitat stehen bleibt.', 'Wechsle mit den Pfeilen oder den Tasten ← → zwischen Zitaten; die Leertaste pausiert.', 'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.'],
    useCases: [
      { title: 'Büro und Empfang', description: 'Eine ruhige, positive Schleife für Empfangsfernseher und Teambereiche.' },
      { title: 'Klassenzimmer', description: 'Zeig einen Gedanken des Tages, wenn die Schüler ankommen.' },
      { title: 'Fitnessstudios', description: 'Kurze, knackige Sätze, lesbar quer durch den Raum.' },
      { title: 'Schreibtisch zu Hause', description: 'Halte einen Zweitmonitor oder ein altes Tablet beim Arbeiten nützlich.' },
    ],
    faqs: [
      { question: 'Woher stammen die Zitate?', answer: 'Es sind kurze Sätze bekannter Autoren und Sprichwörter, etwa von Seneca, Mark Aurel, Konfuzius, Benjamin Franklin und Mark Twain. Sie sind in die Seite eingebaut, es wird also nichts nachgeladen.' },
      { question: 'Kann ich ein Zitat stehen lassen?', answer: 'Ja. Drück Pause (oder die Leertaste), dann bleibt das Zitat, bis du fortsetzt oder einen Pfeil drückst.' },
      { question: 'Bleibt der Bildschirm an?', answer: 'Im Vollbild verhindert ein Wake Lock in unterstützten Browsern, dass das Display ausgeht.' },
    ],
  },
  'fake-windows-11-update': update('Windows 11', 'Microsoft', {
    answer: 'Ein gefälschter Windows-11-Update-Bildschirm zeigt den dunklen Bildschirm „Updates werden bearbeitet“ mit Ladekreis und langsam steigendem Prozentwert. Im Vollbild wirkt der Computer beschäftigt – als Streich oder Filmrequisite. Esc bringt dich zurück.',
    features: ['Ladekreis und Text im Stil von Windows 11', 'Einstellbares Tempo und Pause', 'Vollbild mit ausgeblendetem Mauszeiger', 'Esc zum Beenden'],
    benefits: ['Realistischer, harmloser Streich', 'Saubere Requisite für Bildschirmaufnahmen', 'Kostenlos'],
  }, { question: 'Was ist anders als bei der Windows-10-Version?', answer: 'Sie nutzt den dunkleren Hintergrund und das schlichtere Layout neuerer Systeme.' }),
  'fake-mac-update': update('macOS', 'Apple', {
    answer: 'Ein gefälschter Mac-Update-Bildschirm zeigt den schwarzen macOS-Update-Bildschirm mit Fortschrittsbalken und Restzeit. Im Vollbild sieht es aus, als installiere der Mac ein Update – als harmloser Streich oder Videorequisite. Esc beendet ihn.',
    features: ['Fortschrittsbalken und Restzeit im macOS-Stil', 'Einstellbare Update-Geschwindigkeit', 'Vollbild mit ausgeblendetem Mauszeiger', 'Esc zum Beenden'],
    benefits: ['Harmloser Streich für Mac-Nutzer', 'Saubere Requisite für Videos', 'Kostenlos'],
  }, { question: 'Wird das echte Apple-Logo verwendet?', answer: 'Nein. Es nutzt ein neutrales, allgemeines Zeichen, um Markenmissbrauch zu vermeiden, behält aber das bekannte Layout.' }),
  'fake-android-update': update('Android', 'Google', {
    answer: 'Ein gefälschter Android-Update-Bildschirm zeigt ein laufendes Systemupdate mit Fortschrittsbalken. Öffne ihn im Vollbild auf einem Handy oder Tablet, damit es wie ein Update aussieht, und tippe auf die Schließen-Taste, um den Streich aufzulösen.',
    features: ['Update-Bildschirm und Fortschritt im Android-Stil', 'Einstellbares Tempo', 'Vollbild auf Handys und Tablets', 'Zum Beenden tippen'],
    benefits: ['Streich, der auf jedem Handy klappt', 'Keine App-Installation', 'Kostenlos'],
  }, { question: 'Funktioniert es auf Handys?', answer: 'Ja. In den meisten Android-Browsern blendet das Vollbild die Adressleiste aus. In Safari auf dem iPhone füllt es stattdessen das Browserfenster.' }),
  'fake-windows-xp-update': update('Windows XP', 'Microsoft', {
    answer: 'Ein gefälschter Windows-XP-Update-Bildschirm stellt den klassischen blauen Bildschirm „Updates werden installiert“ aus den frühen 2000ern samt Fortschrittsbalken nach. Ideal für nostalgische Streiche, Retro-Videos und Filmsets dieser Zeit. Esc beendet ihn.',
    features: ['Klassischer Look der XP-Ära', 'Fortschrittsbalken und Statustext', 'Vollbild mit ausgeblendetem Mauszeiger', 'Esc zum Beenden'],
    benefits: ['Sofortige Nostalgie', 'Zeitgetreue Requisite', 'Kostenlos'],
  }, { question: 'Warum sieht es so retro aus?', answer: 'Es ahmt den Dialogstil der frühen 2000er nach, für einen nostalgischen, wiedererkennbaren Look.' }),
  'fake-chrome-os-update': update('ChromeOS', 'Google', {
    answer: 'Ein gefälschter ChromeOS-Update-Bildschirm zeigt ein laufendes Update im Chromebook-Stil. Lass ihn im Vollbild auf einem Chromebook oder einem anderen Computer laufen, damit das System sich scheinbar aktualisiert – als harmloser Streich oder Demo-Requisite. Esc beendet ihn.',
    features: ['Update-Bildschirm im ChromeOS-Stil', 'Einstellbare Fortschrittsgeschwindigkeit', 'Vollbild mit ausgeblendetem Mauszeiger', 'Esc zum Beenden'],
    benefits: ['Klappt auf Schul- und Arbeits-Chromebooks', 'Harmloser Streich', 'Kostenlos'],
  }, { question: 'Funktioniert es auf einem Chromebook?', answer: 'Ja. Drücke die Vollbildtaste oder die Vollbild-Schaltfläche für den vollen Effekt.' }),
  'fake-ubuntu-update': update('Ubuntu', 'Canonical', {
    answer: 'Ein gefälschter Ubuntu-Update-Bildschirm zeigt Linux-Paketupdates, die in einem Terminal mit Fortschrittszeilen durchlaufen. Es sieht aus wie ein echtes Systemupgrade – ein lustiger Streich für Entwickler und eine glaubwürdige Requisite für Videos über Linux.',
    features: ['Durchlaufende Update-Ausgabe im apt-Stil', 'Terminalfarben im Ubuntu-Stil', 'Vollbild', 'Esc zum Beenden'],
    benefits: ['Streich für Entwickler', 'Realistische Terminal-Requisite', 'Kostenlos'],
  }, { question: 'Sind die Logzeilen echte Befehle?', answer: 'Nein. Es ist vorgefertigter Text zur Schau, auf deinem Computer wird nichts ausgeführt.' }),
  'fake-windows-xp-boot': {
    glance: {
      answer: 'Ein gefälschter Windows-XP-Startbildschirm zeigt den klassischen Bootbildschirm mit dem wandernden blauen Ladebalken auf Schwarz. Eine schnelle Retro-Requisite für Videos, Filme und Streiche und ein nostalgischer Bildschirmschoner für Fans des Systems von 2001.',
      features: ['Klassischer Bootbildschirm mit animiertem Ladebalken', 'Läuft in Schleife, so lange du willst', 'Vollbild mit ausgeblendetem Mauszeiger', 'Esc zum Beenden'],
      benefits: ['Retro-Requisite mit einem Klick', 'Nostalgischer Bildschirmschoner', 'Kostenlos'],
    },
    steps: ['Der Bootbildschirm startet sofort, die blauen Blöcke wandern durch den Ladebalken.', 'Drücke F oder Vollbild, damit er den Bildschirm füllt und den Browser verbirgt.', 'Lass ihn laufen: Der Ladebalken wiederholt sich, so lange du willst.', 'Drücke Esc zum Beenden.'],
    useCases: [
      { title: 'Nostalgie', description: 'Erinnere dich an den Start eines PCs aus den frühen 2000ern.' },
      { title: 'Retro-Requisite', description: 'Stelle einen Vintage-Computer für Fotos oder Film dar.' },
      { title: 'Harmlose Streiche', description: 'Lass einen modernen PC aussehen, als starte er XP.' },
      { title: 'Stream-Intros', description: 'Ein Retro-Intro „Wird gestartet“ für Streams.' },
    ],
    faqs: [
      { question: 'Ist das echt oder schädlich?', answer: 'Nein. Es ist eine harmlose optische Simulation in einem normalen Browser-Tab. Sie verändert dein Gerät nicht und installiert nichts.' },
      brandFaq('Microsoft'),
      { question: 'Spielt es den Startsound?', answer: 'Nein. Aus Rücksicht auf deine Ohren und das Urheberrecht gibt es keinen Startsound.' },
      EXIT,
    ],
  },
  'fake-zoom-meeting': call('Zoom Video Communications', {
    answer: 'Ein gefälschter Zoom-Meeting-Bildschirm zeigt einen Videocall im Zoom-Stil mit Teilnehmerraster, Werkzeugleiste und deiner eigenen Kameravorschau. Für Streiche, Filmrequisiten, Screenshots und Üben vor der Kamera. Dein Kamerabild bleibt auf deinem Gerät und wird nie aufgenommen oder hochgeladen.',
    features: ['Teilnehmerraster mit Namen und Stumm-Symbolen', 'Deine Live-Kamera, auch im Vollbild', 'Meeting-Timer und Werkzeugleiste', 'Bearbeitbarer Meeting-Titel'],
    benefits: ['Realistische Call-Requisite für Videos', 'Präsentieren vor der Kamera üben', 'Privat: nichts verlässt dein Gerät'],
  }, { question: 'Was ist anders als beim Teams-Meeting-Bildschirm?', answer: 'Dieser folgt dem Zoom-Layout: eine Galerie aus Kacheln mit den Steuerelementen unten. Der Teams-Bildschirm hat Steuerelemente und eine rote Verlassen-Taste in einer oberen Leiste mit Meeting-Timer.' }),
  'fake-teams-meeting': call('Microsoft', {
    answer: 'Ein gefälschter Microsoft-Teams-Meeting-Bildschirm zeigt einen Call im Teams-Stil mit Teilnehmerkacheln, Meeting-Leiste und deiner Kameravorschau. Nutze ihn für Streiche, Requisiten oder zum Proben einer Präsentation. Die Vorschau bleibt im Browser und wird nie aufgenommen.',
    features: ['Kacheln und Steuerelemente im Teams-Stil', 'Live-Kamera im Vollbild', 'Meeting-Timer', 'Bearbeitbarer Meeting-Titel'],
    benefits: ['Glaubwürdige Büro-Requisite', 'Calls in Ruhe proben', 'Privat und kostenlos'],
  }, { question: 'Kann ich den Meeting-Namen ändern?', answer: 'Ja. Tippe einen neuen Namen in das Titelfeld unter dem Bildschirm. Er erscheint sofort in der oberen Leiste, und nichts wird gespeichert oder gesendet.' }),
  'fake-google-meet': call('Google', {
    answer: 'Ein gefälschter Google-Meet-Bildschirm zeigt einen Videocall im Meet-Stil mit Teilnehmerkacheln, unterer Steuerleiste und deiner eigenen Kameravorschau. Für Streiche, Videos und Präsentationsübungen – dein Kamerabild verlässt nie dein Gerät.',
    features: ['Kacheln und Steuerleiste im Meet-Stil', 'Live-Kamera im Vollbild', 'Call-Timer und bearbeitbarer Meeting-Titel', 'Keine Google-Anmeldung nötig'],
    benefits: ['Realistische Requisite für Filme und Tutorials', 'Vor der Kamera üben', 'Privat und kostenlos'],
  }, { question: 'Ist der Meeting-Code echt?', answer: 'Nein. „abc-defg-hij“ ist Platzhaltertext. Niemand kann beitreten, und die Seite verbindet sich nie mit Google Meet oder einem anderen Dienst.' }),
  'fake-slack-huddle': call('Slack Technologies', {
    answer: 'Ein gefälschter Slack-Huddle-Bildschirm zeigt einen Audio- und Video-Huddle im Slack-Stil mit Teilnehmern und Steuerelementen. Nutze ihn als Streich, als Screenshot-Requisite für Präsentationen oder als Filmhintergrund – ohne Verbindung zu einem echten Slack-Workspace.',
    features: ['Teilnehmeransicht im Huddle-Stil', 'Sprechanzeigen und Steuerelemente', 'Vollbild', 'Bearbeitbarer Titel'],
    benefits: ['Schnelle Requisite für Remote-Work-Videos', 'Harmloser Streich', 'Kostenlos'],
  }),
  'fake-radar-screen': {
    glance: {
      answer: 'Ein gefälschter Radarbildschirm zeigt eine klassische runde Radaranzeige, ein sogenanntes Rundsichtgerät, mit rotierender Abtastlinie, verblassenden Kontakten und Entfernungsringen. Anzeigen und ein optionaler Ping machen ihn zu einer überzeugenden Requisite für Filme, Escape Rooms, Spiele und Sci-Fi-Streiche.',
      features: ['Rotierende Abtastlinie mit Nachleuchten', 'Bewegte Kontakte und Entfernungsringe', 'Anzeigen für Peilung und Entfernung', 'Optionaler Sonar-Ping'],
      benefits: ['Sofortige Sci-Fi- oder Militär-Requisite', 'Ideal für Escape Rooms und Bühnenbilder', 'Kostenlos und offlinefähig'],
    },
    steps: ['Das Radar beginnt sofort zu kreisen.', 'Wähle eine Farbe (Grün, Bernstein oder Blau), die Abtastgeschwindigkeit und die Anzahl der Kontakte.', 'Schalte den Ping ein, wenn du willst; er spielt erst nach dem Einschalten.', 'Drücke F oder Vollbild, um den Bildschirm zu füllen, und Esc zum Beenden.'],
    useCases: [
      { title: 'Film- und Theaterrequisite', description: 'Ein überzeugender Kontrollraum-Bildschirm ohne echte Technik.' },
      { title: 'Escape Rooms und Spiele', description: 'Die passende Stimmung für U-Boot-, Weltraum- oder Spionage-Themen.' },
      { title: 'Partys und Streams', description: 'Ein bewegter Sci-Fi-Hintergrund auf Fernseher oder Zweitmonitor.' },
      { title: 'Bildschirmschoner', description: 'Eine ruhige Endlosanimation für ein ungenutztes Display.' },
    ],
    faqs: [
      { question: 'Zeigt das echte Radar- oder Flugdaten?', answer: 'Nein. Jeder Kontakt wird zufällig im Browser erzeugt. Es dient nur der Unterhaltung und als Requisite.' },
      { question: 'Warum verblassen die Punkte?', answer: 'Klassische Radarschirme nutzten Phosphor, der nach dem Durchlauf des Strahls nachleuchtete und dann verblasste. Das Verblassen ahmt dieses Nachglühen nach.' },
      { question: 'Wie beende ich es?', answer: 'Drücke Esc oder bewege die Maus bzw. tippe, um die Schließen-Taste einzublenden. Den Tab zu schließen geht auch.' },
    ],
  },
}
