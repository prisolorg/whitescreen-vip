import type { GuideTranslation } from './types'

export const de: Record<string, GuideTranslation> = {
  'dead-pixel-test': {
    slug: 'pixelfehler-test',
    navLabel: 'Pixelfehler-Test',
    title: 'Pixelfehler-Test: tote, hängende und heiße Pixel auf jedem Bildschirm finden',
    metaTitle: 'Pixelfehler-Test: tote und hängende Pixel finden',
    metaDescription:
      'So testest du unter Windows, Mac, iPhone und Android auf Pixelfehler. Finde tote, hängende und heiße Pixel mit Grundfarben im Vollbild – Schritt für Schritt.',
    readingTime: '6 Min. Lesezeit',
    category: 'Bildschirmdiagnose',
    intro:
      'Jedes moderne Panel – ob LCD, IPS, VA oder OLED – besteht aus Millionen winziger roter, grüner und blauer Subpixel, die von Mikrotransistoren gesteuert werden. Fällt ein Transistor aus oder bleibt er hängen, entsteht ein störender Fehler, der beim Lesen, bei der Bildbearbeitung und beim Spielen nervt. Ein Test mit Grundfarben im Vollbild ist der schnellste und zuverlässigste Weg, Pixelfehler noch innerhalb der Rückgabefrist oder vor Ablauf der Garantie zu finden.',
    toolLabel: 'Pixelfehler-Test öffnen',
    toolDescription: 'Wechsle im Vollbild zwischen Rot, Grün, Blau, Schwarz und Weiß, um Fehler zu entdecken.',
    sections: [
      {
        title: 'Tote, hängende und heiße Pixel: so unterscheidest du sie',
        content: [
          'Nicht jeder Pixelfehler sieht gleich aus oder verhält sich gleich. Wenn du die Art genau kennst, weißt du, ob ein Software-Durchlauf helfen kann oder ob das Panel per Garantie getauscht werden muss.',
          'Ein toter Pixel entsteht, wenn der steuernde Transistor komplett ausgeschaltet bleibt. Auf LCDs mit Hintergrundbeleuchtung erscheint er als dauerhafter schwarzer Punkt, egal welche Farbe der Rest des Bildschirms zeigt.',
          'Ein hängender Pixel entsteht, wenn ein oder zwei Subpixel (Rot, Grün oder Blau) dauerhaft leuchten, während die anderen normal arbeiten. Er erscheint als heller, farbiger Punkt auf dunklem oder kontrastreichem Hintergrund.',
          'Ein heißer Pixel entsteht, wenn alle drei Subpixel gleichzeitig voll leuchten. Das ergibt einen dauerhaften weißen Punkt, der auf Schwarz und dunklen Inhalten stark auffällt.',
        ],
        tips: [
          'Tote Pixel sind schwarze Punkte auf weißen, roten, grünen oder blauen Flächen.',
          'Hängende Pixel sind farbige Punkte (Rot, Grün oder Blau) auf dunklem Hintergrund.',
          'Heiße Pixel sind dauerhafte weiße Punkte auf dunklem Hintergrund.',
        ],
      },
      {
        title: 'Wichtiger erster Schritt: erst reinigen, dann prüfen',
        content: [
          'Erstaunlich viele vermeintliche „tote Pixel“ sind in Wahrheit mikroskopische Staubkörner, eingetrocknete Tröpfchen vom Niesen oder winzige Fettspritzer auf dem Glas.',
          'Bevor du von einem Hardwarefehler ausgehst, wische den Bildschirm bei ausgeschaltetem Monitor sanft mit einem sauberen, trockenen Mikrofasertuch ab. Kratze nie mit dem Fingernagel – das kann die entspiegelnden Polarisationsfilter dauerhaft beschädigen.',
        ],
      },
      {
        title: 'Schritt-für-Schritt-Anleitung für alle Geräte',
        content: ['Mit diesen Schritten testest du Desktop-Monitore, Laptops, Tablets und Smartphones gründlich.'],
        steps: [
          'Öffne den Pixelfehler-Test von WhiteScreen.vip und wechsle in den Vollbildmodus, damit Adressleiste, Taskleiste und andere Elemente verschwinden.',
          'Prüfe zuerst die weiße Fläche: Suche den Bildschirm langsam von oben links nach unten rechts nach festen schwarzen Punkten ab (tote Pixel).',
          'Wechsle zu Schwarz: Achte auf helle weiße Punkte (heiße Pixel) oder farbige Pünktchen (hängende Pixel).',
          'Gehe Rot, Grün und Blau durch: Jede Grundfarbe prüft einen Subpixel-Kanal. Ein defekter Subpixel zeigt sich als dunkler oder andersfarbiger Punkt.',
          'Unter Windows oder macOS: Stelle die Helligkeit auf 80–100 % und schau senkrecht auf den Bildschirm, um optische Effekte zu vermeiden.',
          'Auf iPhone oder Android: Sorge dafür, dass keine Browserränder bleiben, oder speichere die Testfarben in der Galerie und öffne sie dort im Vollbild.',
        ],
      },
      {
        title: 'Grenzen von Browser-Tests und die Wahrheit über die Garantie',
        content: [
          'Browserbasierte Tests liefern eine sofortige, genaue Sichtprüfung, weil sie jeden Pixel mit 100 % Sättigung ansteuern – ohne Kompressionsartefakte wie bei Videos.',
          'Sei aber vorsichtig bei Seiten, die behaupten, blinkende Farben oder Videoschleifen würden dauerhaft tote Pixel reparieren. Ein schneller Subpixel-Trainer kann einen trägen Transistor manchmal lösen, aber eine unterbrochene Leitung oder ein durchgebrannter Transistor lässt sich per Software nicht reparieren.',
          'Prüfe die Pixelfehlerklasse deines Herstellers (ISO 9241-307 / ISO 13406-2). Die meisten Monitorgarantien verlangen 3 bis 5 tote Subpixel oder mindestens einen toten Pixel in der Bildmitte, bevor ein kostenloser Austausch erfolgt.',
        ],
        checklist: [
          'Vergleiche die Zahl der Fehler innerhalb der 14- bis 30-tägigen Rückgabefrist mit den Garantiebedingungen.',
          'Mach ein Nahfoto des Fehlers mit dem Smartphone als Nachweis für den Support.',
          'Frag nach, ob dein Händler eine „Null-Pixelfehler“-Garantie in der ersten Zeit nach dem Kauf anbietet.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kann ein Browser-Test einen toten Pixel reparieren?',
        answer:
          'Nein. Ist ein Transistor kaputt oder durchgebrannt, hilft keine Software. Schnell blinkende Tools können hängende Subpixel manchmal lösen, aber dauerhaft tote Pixel erfordern einen Paneltausch.',
      },
      {
        question: 'Warum verschwinden hängende Pixel manchmal von selbst?',
        answer:
          'Bei Flüssigkristall-Panels entstehen hängende Pixel oft durch ein Ungleichgewicht der elektrischen Ladung oder leichte mechanische Spannung. Wenn sich der Bildschirm erwärmt oder abkühlt, können Wärmeausdehnung und Spannungswechsel die normale Ausrichtung der Kristalle wiederherstellen.',
      },
      {
        question: 'Wie unterscheide ich Staub auf dem Bildschirm von einem toten Pixel?',
        answer:
          'Ändere den Blickwinkel, indem du den Kopf etwa 15 cm nach links oder rechts bewegst. Weil das Glas eine gewisse Dicke hat, verschiebt sich Staub auf der Oberfläche leicht gegenüber der Bildebene (Parallaxe), während ein toter Pixel fest im Pixelraster bleibt.',
      },
    ],
  },
  'screen-color-test': {
    slug: 'bildschirm-farbtest',
    navLabel: 'Bildschirm-Farbtest',
    title: 'Bildschirm-Farbtest: Farbgenauigkeit und Farbbalance deines Monitors prüfen',
    metaTitle: 'Bildschirm-Farbtest: Farbgenauigkeit und Balance prüfen',
    metaDescription:
      'Prüfe deinen Monitor auf Farbstiche, Banding, Gamma-Abweichungen und Kontrast. Schritt-für-Schritt-Farbtest für PC, Mac und Smartphone.',
    readingTime: '6 Min. Lesezeit',
    category: 'Bildschirmkalibrierung',
    intro:
      'Ob du Fotos bearbeitest, Videos farbkorrigierst, Websites gestaltest oder zwei Monitore auf einem Schreibtisch angleichst – genaue Farben sind entscheidend. Leichte Farbstiche, unsaubere Gammakurven und Farbstreifen können deine Arbeit verfälschen, ohne dass du es merkst. Ein systematischer Farbtest mit Vollbild-Referenzflächen zeigt Farbstiche, Weißpunktabweichungen und abgeschnittene Sättigung – ganz ohne teure Messgeräte.',
    toolLabel: 'Bildschirm-Farbtest öffnen',
    toolDescription: 'Prüfe neutrale Grautöne, Grundfarben und Sättigungsbalance auf dem ganzen Bildschirm.',
    sections: [
      {
        title: 'Warum eine visuelle Farbprüfung vor dem Kalibrieren wichtig ist',
        content: [
          'Viele Monitore kommen ab Werk mit übertriebenem Blaustich, übersättigtem Grün und abgesoffenen Schwarztönen, damit sie im Laden knallig wirken – nicht damit sie genau sind.',
          'Bevor du in ein Kolorimeter investierst, zeigt dir ein strukturierter Sichttest, ob dein Display einen allgemeinen Farbstich hat (etwa Grün oder Magenta in den Mitteltönen), Schwarztöne verschluckt oder stark blickwinkelabhängig ist.',
        ],
        tips: [
          'Lass den Monitor mindestens 30 Minuten warmlaufen, bevor du Farben beurteilst – die Farbtemperatur der Hintergrundbeleuchtung ändert sich beim Aufwärmen.',
          'Schalte Raumlichter aus, die farbige Reflexe auf das Glas werfen.',
        ],
      },
      {
        title: 'Farbtest Schritt für Schritt',
        content: ['Diese Prüfschritte funktionieren unter Windows, macOS und an Arbeitsplätzen mit mehreren Monitoren.'],
        steps: [
          'Deaktiviere Farbfilter per Software: Nachtmodus unter Windows, True Tone und Night Shift unter macOS sowie den Augenschutz am Smartphone.',
          'Öffne den Farbtest von WhiteScreen.vip im Vollbild und wähle die neutrale 50-%-Graufläche.',
          'Beurteile das Grau: Reines neutrales Grau darf weder rosa, grünlich noch bläulich wirken. Jeder sichtbare Stich deutet auf einen verschobenen Weißpunkt hin.',
          'Gehe Rot, Grün und Blau durch: Die Farben sollten von Ecke zu Ecke gleichmäßig sein, ohne zum Rand hin dunkler zu werden oder den Farbton zu ändern.',
          'Prüfe die Sekundärfarben (Cyan, Magenta, Gelb): Sie nutzen mehrere Kanäle gleichzeitig und zeigen Ungleichgewichte zwischen ihnen.',
          'Prüfe mehrere Monitore: Ziehe das Browserfenster über die Kante zwischen zwei Bildschirmen, um Unterschiede im Weißpunkt zu erkennen.',
        ],
      },
      {
        title: 'Farbstreifen und Grenzen der Farbtiefe erkennen',
        content: [
          'Standard-8-Bit-Displays zeigen 16,7 Millionen Farben, moderne 10-Bit-Panels (8 Bit + FRC oder echte 10 Bit) über eine Milliarde Abstufungen. Verarbeiten Monitor oder Treiber Farbverläufe schlecht, werden weiche Verläufe zu sichtbaren Stufen (Banding).',
          'Sieh dir die Verläufe auf unserer Monitortest-Seite an. Wirken sie stufig oder zeigen sie falsche Farbsäume, prüfe, ob das Grafiktreiber-Menü (NVIDIA, AMD Radeon oder Intel) auf vollen RGB-Bereich (0–255) statt auf den begrenzten Videobereich (16–235) eingestellt ist.',
        ],
        checklist: [
          'Stelle den Ausgabe-Dynamikbereich in den GPU-Einstellungen auf „Voll“ (0–255).',
          'Wähle im Monitormenü (OSD) den sRGB- oder D65-Modus für normgerechte Web-Farben.',
          'Gleiche bei zwei Monitoren Bildwiederholrate und Farbtiefe an.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Warum wirkt mein weißer Bildschirm neben dem Handy leicht gelb?',
        answer:
          'Smartphones nutzen oft kühle Weißpunkte von 7000–7500 K, daneben wirkt ein auf 6500 K (D65) kalibrierter Monitor warm oder gelblich. D65 ist die Standard-Farbtemperatur für Web und Video.',
      },
      {
        question: 'Was ist der Unterschied zwischen sRGB und DCI-P3?',
        answer:
          'sRGB ist der Standardfarbraum für Webinhalte und Büroarbeit. DCI-P3 deckt ein rund 25 % größeres Spektrum ab und wird für HDR-Kino und moderne Smartphone-Displays genutzt. Für normale Webarbeit verhindert ein auf sRGB festgelegter Monitor übersättigte Farben.',
      },
    ],
  },
  'screen-uniformity-test': {
    slug: 'bildschirm-homogenitaetstest',
    navLabel: 'Bildschirm-Homogenität',
    title: 'Homogenitätstest: Backlight Bleeding, IPS-Glow und Clouding prüfen',
    metaTitle: 'Homogenitätstest: Backlight Bleeding und IPS-Glow',
    metaDescription:
      'Prüfe deinen Monitor auf Backlight Bleeding, IPS-Glow, Clouding, Vignettierung und Dirty Screen Effect (DSE) mit grauen und schwarzen Testbildern.',
    readingTime: '6 Min. Lesezeit',
    category: 'Bildschirmdiagnose',
    intro:
      'Kein Flachbildschirm verteilt die Helligkeit perfekt gleichmäßig über die ganze Fläche. Starkes Backlight Bleeding, übermäßiger IPS-Glow, dunkle Ecken oder fleckiger „Dirty Screen Effect“ (DSE) können aber dunkle Filmszenen ruinieren und auf hellen Webseiten stören. Ein strukturierter Homogenitätstest bei kontrolliertem Licht zeigt dir Panelfehler und ob sie innerhalb der Fertigungstoleranz liegen.',
    toolLabel: 'Homogenitätstest öffnen',
    toolDescription: 'Prüfe 5-%-Dunkelgrau, 50-%-Grau, Schwarz und Weiß mit optionalen Rastern.',
    sections: [
      {
        title: 'Backlight Bleeding, IPS-Glow und Clouding: der entscheidende Unterschied',
        content: [
          'Bevor du einen Monitor zurückschickst, solltest du einen echten Fertigungsfehler von typischen Eigenschaften der Paneltechnik unterscheiden.',
          'Backlight Bleeding ist ein Montagefehler: Das Panel sitzt eingeklemmt oder schief im Rahmen, und das LED-Licht tritt an den Rändern aus. Es zeigt sich als feste gelbliche oder weiße Lichtflecken am Rand, die sich nicht ändern, egal wo du sitzt.',
          'IPS-Glow ist eine natürliche optische Eigenschaft aller IPS-Panels. Weil IPS-Kristalle schräg einfallendes Licht nicht ganz blockieren, erscheint aus kurzer Entfernung ein schwacher bernsteinfarbener oder silbriger Schimmer in den Ecken. Bewegst du den Kopf oder gehst einen halben Meter zurück, verändert und verringert er sich.',
          'Clouding und Dirty Screen Effect (DSE) bezeichnen eine ungleichmäßige Lichtverteilung der Hintergrundbeleuchtung. Es entstehen fleckige graue Wolken, die man bei Schwenks über einfarbige Flächen sieht, etwa Fußballrasen oder Himmel in Spielen.',
        ],
        tips: [
          'Backlight Bleeding bleibt unabhängig vom Blickwinkel an derselben Stelle und gleich hell.',
          'IPS-Glow ändert Stärke und Position, wenn du den Kopf von links nach rechts bewegst.',
          'Dirty Screen Effect erkennst du am besten auf einer 20- oder 50-%-Graufläche.',
        ],
      },
      {
        title: 'So richtest du die Testumgebung richtig ein',
        content: [
          'In einem hellen Büro verschwindet Backlight Bleeding fast, während ein Handyfoto im Dunkeln mit Nachtmodus den Glow zehnfach übertreibt.',
        ],
        steps: [
          'Dimme das Raumlicht auf ein angenehmes Abendniveau (nicht stockdunkel).',
          'Schalte dynamischen Kontrast, Black Equalizer oder Local Dimming im Monitormenü aus.',
          'Stelle die Helligkeit auf dein normales Arbeitsniveau (etwa 120–150 Nits, meist 30–50 % im Menü).',
          'Öffne den schwarzen Bildschirm von WhiteScreen.vip im Vollbild und setz dich in deinen normalen Abstand (mindestens eine Armlänge).',
          'Achte auf die Ecken: Treten helle Lichtkegel vom Rand aus, die sich beim Kopfbewegen nicht ändern, ist das Backlight Bleeding.',
          'Wechsle zu unseren 5-%- und 50-%-Grauflächen, um Dirty Screen Effect und Vignettierung von der Mitte zum Rand zu prüfen.',
        ],
      },
      {
        title: 'So milderst du Homogenitätsprobleme im Alltag',
        content: [
          'Hat dein Bildschirm leichtes Bleeding oder IPS-Glow, der keine Rücksendung rechtfertigt, verbessern ein paar einfache Maßnahmen das Bild deutlich.',
        ],
        checklist: [
          'Installiere Bias Lighting (einen 6500-K-LED-Streifen hinter dem Monitor). Das Auge passt sich an, und Schwarz wirkt deutlich tiefer.',
          'Senke die Helligkeit: 100 % in einem dunklen Raum verstärken alle Schwächen der Hintergrundbeleuchtung.',
          'Prüfe die VESA-Schrauben: Zu fest angezogen, können sie das Gehäuse verziehen und Druck-Bleeding verursachen.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Fällt Backlight Bleeding unter die Garantie?',
        answer:
          'Leichtes Bleeding und IPS-Glow gelten bei Herstellern als normale Streuung. Starkes Bleeding mit deutlichen weißen Flecken, die bei normaler Büroarbeit im Tageslicht sichtbar sind, berechtigt meist zum Austausch.',
      },
      {
        question: 'Haben OLEDs Backlight Bleeding?',
        answer:
          'Nein. OLED-Subpixel leuchten selbst, es gibt keine Hintergrundbeleuchtung. Schwarze Pixel schalten ganz ab – unendlicher Kontrast ohne Bleeding und ohne IPS-Glow.',
      },
    ],
  },
  'clean-laptop-screen': {
    slug: 'laptop-bildschirm-reinigen',
    navLabel: 'Laptop-Bildschirm reinigen',
    title: 'Laptop-Bildschirm reinigen: sicher und ohne Kratzer oder Schlieren',
    metaTitle: 'Laptop-Bildschirm sicher reinigen – Schritt für Schritt',
    metaDescription:
      'Sichere Schritt-für-Schritt-Anleitung zum Reinigen von Laptop- oder MacBook-Bildschirmen mit Weißbild-Prüfung, Mikrofasertuch und ohne aggressive Mittel.',
    readingTime: '5 Min. Lesezeit',
    category: 'Reinigung & Pflege',
    intro:
      'Moderne Laptop-Bildschirme, MacBooks und externe Monitore haben sehr empfindliche Entspiegelungen, Polarisationsfolien und fettabweisende Schichten. Glasreiniger, Küchenpapier oder zu viel Druck können diese Schichten dauerhaft ablösen oder die Flüssigkristallschicht beschädigen. Mit einem weißen Vollbild als Prüflicht siehst du jeden Fleck, jedes Staubkorn und jeden Tastaturabdruck, bevor du richtig reinigst.',
    warning:
      'SICHERHEITSHINWEIS: Schalte Laptop oder Monitor immer aus und trenne sie vom Strom, bevor du ein Tuch oder Flüssigkeit verwendest. Sprühe nie Wasser oder Reiniger direkt auf Bildschirm, Scharniere oder Ränder. Läuft Flüssigkeit in den unteren Rand, kann sie die Hintergrundbeleuchtung zerstören.',
    toolLabel: 'Weißen Bildschirm zur Prüfung öffnen',
    toolDescription: 'Mit weißem Vollbildlicht siehst du Staub, Fingerabdrücke und Schlieren vor dem Reinigen.',
    sections: [
      {
        title: 'Warum ein weißer Bildschirm das beste Prüfwerkzeug ist',
        content: [
          'Ist der Bildschirm aus oder zeigt einen dunklen Hintergrund, verschwinden Fingerfett, Tastaturabdrücke und feiner Staub im Schwarz des Panels.',
          'WhiteScreen.vip im Vollbild leuchtet das Panel gleichmäßig und kontrastreich aus. Staub und Fettflecken zeichnen sich als dunkle Umrisse auf dem hellen Hintergrund ab – so weißt du genau, wo du wischen musst.',
        ],
      },
      {
        title: 'Sichere Reinigung Schritt für Schritt',
        content: ['Diese von Herstellern empfohlenen Schritte eignen sich für matte Laptop-Displays, glänzende Bildschirme und MacBook-Retina-Displays.'],
        steps: [
          'Prüfe den Bildschirm mit WhiteScreen.vip im Vollbild bei 100 % Helligkeit und merke dir Schmutz, Tastaturfett und eingetrocknete Tropfen.',
          'Fahre den Laptop komplett herunter und trenne Netzteil und USB-Kabel. Lass den Bildschirm 5 Minuten abkühlen (auf warmem Glas verdunstet Feuchtigkeit schlagartig und hinterlässt Schlieren).',
          'Nimm ein sauberes, dichtes Mikrofasertuch (wie für Brillen und Kameraobjektive). Nie Küchenpapier, Taschentücher oder T-Shirts.',
          'Wische sanft in sich überlappenden kreisenden oder waagerechten Bewegungen. Lass die Fasern den Staub aufnehmen, ohne auf das Panel zu drücken.',
          'Bei hartnäckigen Fettflecken: Befeuchte eine Ecke des Tuchs mit etwas destilliertem Wasser. Sie darf nur feucht sein, niemals tropfen.',
          'Wische den Fleck mit der feuchten Ecke ab und reibe die Stelle sofort mit dem trockenen Teil des Tuchs trocken.',
          'Warte 3 Minuten, bis Restfeuchtigkeit verdunstet ist, bevor du den Deckel schließt oder einschaltest.',
        ],
      },
      {
        title: 'Häufige Fehler, die Bildschirme ruinieren',
        content: ['Viele beliebte Reinigungstipps aus dem Internet richten bei modernen Bildschirmen bleibende Schäden an.'],
        checklist: [
          'Kein Glasreiniger: Ammoniak und Essig lösen die Entspiegelung ab.',
          'Kein Aceton, Nagellackentferner oder Verdünner: Lösungsmittel greifen Kunststoffschichten und Rahmen sofort an.',
          'Nie direkt auf den Bildschirm sprühen: Tropfen laufen in den unteren Rand, wo die Display-Flachbandkabel liegen.',
          'Kein Küchenpapier und keine Servietten: Zellulosefasern verursachen dauerhafte Mikrokratzer.',
          'Nicht fest mit den Fingern drücken: Zu viel Druck hinterlässt bleibende weiße Druckstellen im LCD.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Darf ich 70-prozentigen Isopropylalkohol auf dem MacBook-Bildschirm verwenden?',
        answer:
          'Apple erlaubt Tücher mit 70 % Isopropylalkohol für Außenflächen und Glasflächen mancher MacBooks, rät aber zu sanftem Wischen. Für die normale Pflege ist destilliertes Wasser auf einem Mikrofasertuch deutlich sicherer und greift die Entspiegelung nicht an.',
      },
      {
        question: 'Warum destilliertes Wasser statt Leitungswasser?',
        answer:
          'Leitungswasser enthält gelöste Mineralien wie Kalzium, Magnesium und Chlor. Beim Verdunsten bleiben Kalkschlieren zurück, die beim Wischen die empfindlichen Folien zerkratzen können.',
      },
    ],
  },
  'oled-burn-in-prevention': {
    slug: 'oled-einbrennen-vermeiden',
    navLabel: 'OLED-Einbrennen',
    title: 'OLED-Einbrennen vermeiden: testen, vorbeugen und das Display schützen',
    metaTitle: 'OLED-Einbrennen vermeiden und testen – Ratgeber',
    metaDescription:
      'Der Unterschied zwischen OLED-Einbrennen und vorübergehenden Nachbildern. Teste OLED-Monitor oder -TV mit Farbflächen und verlängere mit praktischen Tipps die Lebensdauer.',
    readingTime: '7 Min. Lesezeit',
    category: 'Bildschirmpflege',
    intro:
      'OLED- und QD-OLED-Monitore bieten unerreichten Kontrast, tiefes Schwarz und nahezu verzögerungsfreie Reaktionszeiten. Weil jedes Subpixel eine organische Leuchtdiode ist, die mit der abgegebenen Lichtmenge langsam altert, können statische Elemente (Taskleiste, Adressleiste, Spiel-HUDs) mit der Zeit ungleichmäßigen Verschleiß verursachen. Wer versteht, wie Einbrennen entsteht, wie man es testet und wie man das System einstellt, schützt seine Investition über Jahre.',
    warning:
      'EHRLICHER HINWEIS: Vorsicht vor irreführenden Tools. Keine Software, keine blinkenden Farben und kein Video kann dauerhaftes OLED-Einbrennen rückgängig machen. Haben organische Subpixel an Leuchtkraft verloren, ist der Schaden bleibend. Unsere Tools helfen dir, es zu erkennen und vorzubeugen, bevor es zu spät ist.',
    toolLabel: 'OLED-Einbrenntest öffnen',
    toolDescription: 'Wechsle zwischen Rot, Magenta, Cyan und Dunkelgrau, um schwache Umrisse statischer Elemente zu sehen.',
    sections: [
      {
        title: 'Vorübergehendes Nachbild oder dauerhaftes Einbrennen',
        content: [
          'Es ist wichtig, vorübergehende Nachbilder (Image Retention) von dauerhaftem Einbrennen zu unterscheiden.',
          'Ein vorübergehendes Nachbild ist ein elektrischer Effekt: Nach 15–30 Minuten mit einem kontrastreichen Bild bleibt Restladung in der Transistorschicht. Ein schwacher Schatten des Fensters ist einige Minuten sichtbar und verschwindet dann von selbst oder beim automatischen Pixel-Refresh.',
          'Dauerhaftes Einbrennen ist ungleichmäßiger, angesammelter Subpixel-Verschleiß. Haben die roten oder blauen Subpixel im Taskleistenbereich tausende Stunden mit voller Helligkeit geleuchtet, geben sie weniger Licht ab als ihre Nachbarn – ein dauerhafter dunkler Umriss auf einfarbigen Flächen.',
        ],
        tips: [
          'Nachbilder verschwinden nach Minuten oder nach einem kurzen 5-Minuten-Pixel-Refresh.',
          'Dauerhaftes Einbrennen ist auf Rot, Magenta und 5-%-Grau sichtbar und verschwindet nie.',
        ],
      },
      {
        title: 'So testest du dein OLED auf Einbrennen',
        content: ['Mit diesen Schritten und unseren Vollbild-Farbflächen erkennst du erste Verschleißspuren.'],
        steps: [
          'Öffne WhiteScreen.vip im Vollbild, damit Browserleisten und Taskleiste verschwinden.',
          'Wähle Rot: Rote organische Subpixel altern schneller als grüne. Suche den Bereich der Taskleiste, der Adressleiste und der HUD-Ecken nach dunklen Schatten ab.',
          'Wähle Magenta und Cyan: Mischfarben zeigen unterschiedlichen Verschleiß der Farbkanäle.',
          'Wähle 5-%-Dunkelgrau und 10-%-Grau: Fast schwarze Grautöne zeigen vertikale Streifen und ungleichen Verschleiß, die auf Weiß unsichtbar sind.',
          'Schau aus normalem Abstand: Siehst du scharfe Umrisse von Symbolen oder Symbolleisten, ist das Panel dauerhaft eingebrannt.',
        ],
      },
      {
        title: 'Die wichtigsten Regeln gegen OLED-Einbrennen',
        content: [
          'Moderne OLED-Monitore haben eingebaute Schutzfunktionen, doch einfache Gewohnheiten im Betriebssystem sind der beste Schutz vor vorzeitigem Verschleiß.',
        ],
        checklist: [
          'Aktiviere „Taskleiste automatisch ausblenden“ unter Windows (bzw. das automatische Ausblenden des Docks unter macOS).',
          'Nutze den Dunkelmodus in Windows, macOS und im Browser: Schwarze OLED-Pixel verbrauchen keinen Strom und verschleißen nicht.',
          'Stelle den Bildschirm-Ruhezustand auf 3–5 Minuten Inaktivität, damit der Desktop nicht leuchtet, wenn du weg bist.',
          'Nutze einen Vollbild-Bildschirmschoner wie unsere Klappuhr oder den schwarzen Bildschirm, wenn du den Platz verlässt.',
          'Zieh den OLED-Monitor nach dem Ausschalten nicht sofort vom Strom: Im Standby läuft eine automatische Pixelpflege.',
          'Aktiviere die Panel-Schutzfunktionen im Monitormenü: Pixel Shift, Logo-Helligkeitsbegrenzung und Temperaturmanagement.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Reparieren blinkende Pixel-Trainer OLED-Einbrennen?',
        answer:
          'Nein. Blinkende Bilder stellen gealtertes organisches Material nicht wieder her. Aggressive Blinkmuster bei voller Helligkeit belasten das Panel sogar zusätzlich durch Wärme.',
      },
      {
        question: 'Wie oft sollte ich den großen Pixel-Refresh ausführen?',
        answer:
          'Nur wenn der Hersteller dazu auffordert (meist alle 500 bis 1.500 Betriebsstunden) oder ein starkes Nachbild nicht verschwindet. Zu häufige Durchläufe beschleunigen den Verschleiß.',
      },
    ],
  },
  'monitor-test': {
    slug: 'monitortest',
    navLabel: 'Monitortest',
    title: 'Der komplette Monitortest: neue Bildschirme auf Fehler, Farbe und Tempo prüfen',
    metaTitle: 'Monitortest: so prüfst du jeden neuen Bildschirm',
    metaDescription:
      'Kompletter Ratgeber zum Testen neuer oder gebrauchter Monitore: Pixelfehler, Schärfe, Gamma, Kontrast, Backlight Bleeding und Reaktionszeit.',
    readingTime: '6 Min. Lesezeit',
    category: 'Bildschirmdiagnose',
    intro:
      'Einen neuen Monitor auszupacken macht Spaß, doch Fertigungsfehler wie tote Subpixel, starkes Backlight Bleeding, ungleichmäßige Farben oder falsches Gamma rutschen oft durch die Qualitätskontrolle. Da die meisten Händler eine Rückgabefrist von 14 bis 30 Tagen bieten, ist ein gründlicher 15-Minuten-Test direkt nach der Lieferung der beste Weg zu einem fehlerfreien Panel.',
    toolLabel: 'Kompletten Monitortest öffnen',
    toolDescription: 'Umfangreiche Testbilder: Verläufe, Gamma-Tafeln, Schärferaster und Farbbalken.',
    sections: [
      {
        title: 'Die 6-Schritte-Checkliste für neue Monitore',
        content: ['Bevor du den Karton entsorgst oder die Garantie registrierst, führe diese 6-stufige Panelprüfung durch.'],
        steps: [
          '1. Gehäuse und Kabel prüfen: Stelle sicher, dass das DisplayPort- oder HDMI-Kabel native Auflösung, Bildwiederholrate (z. B. 144–240 Hz) und 10-Bit-Farbe des Monitors unterstützt.',
          '2. Pixelfehler: Öffne Weiß, Schwarz, Rot, Grün und Blau im Vollbild und prüfe jeden Quadranten auf hängende oder tote Subpixel.',
          '3. Homogenität und Bleeding: Prüfe im abgedunkelten Raum ein schwarzes Bild auf Lichthöfe am Rand und ein 50-%-Grau auf Dirty Screen Effect.',
          '4. Gamma und Kontrast: Prüfe mit unserem Graustufenverlauf, ob die fast schwarzen (1–5 %) und fast weißen Stufen (95–99 %) unterscheidbar bleiben.',
          '5. Schärfe und Skalierung: Prüfe feine 1-Pixel-Linien in Schwarz und Weiß, damit Text scharf und ohne Farbsäume oder Moiré dargestellt wird.',
          '6. Bewegungsschärfe und Ghosting: Prüfe mit Bewegungsmustern die Reaktionszeit und stelle Overdrive so ein, dass kein inverses Ghosting entsteht.',
        ],
      },
      {
        title: 'Was bei welchem Paneltyp normal ist',
        content: [
          'Wer die Paneltechnik kennt, schickt keinen Monitor wegen Eigenschaften zurück, die normale technische Kompromisse sind.',
          'IPS-Panels: stark bei Farbgenauigkeit und weiten Blickwinkeln (178°). Normaler Kompromiss: geringerer Kontrast (1.000:1) und leichter IPS-Glow von schräg.',
          'VA-Panels: hoher Kontrast (3.000:1 bis 5.000:1) und tiefes Schwarz. Normaler Kompromiss: dunkle Schlieren in schnellen Szenen und engere Blickwinkel.',
          'OLED-/QD-OLED-Panels: unendlicher Kontrast, echtes Schwarz und 0,03 ms Reaktionszeit. Normaler Kompromiss: mögliche Nachbilder und geringere Dauerhelligkeit bei vollflächigem Weiß.',
          'TN-Panels: ältere E-Sport-Monitore mit hoher Bildwiederholrate. Normaler Kompromiss: blasse Farben und starke Farbverschiebung bei leicht schrägem Blick von oben oder unten.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Soll ich den Monitor mit oder ohne HDR testen?',
        answer:
          'Führe die Grundtests für Farbe und Homogenität mit ausgeschaltetem Windows-HDR durch, da es auf Displays ohne Local Dimming Tone-Mapping-Fehler verursachen kann. Ist SDR in Ordnung, schalte HDR ein und prüfe Spitzenhelligkeit und Dimming-Zonen.',
      },
      {
        question: 'Was ist Overdrive und wie stelle ich es ein?',
        answer:
          'Overdrive legt mehr Spannung an die Subpixel an, um Übergänge zu beschleunigen und Bewegungsunschärfe zu verringern. Zu hoch eingestellt entsteht „inverses Ghosting“ (helle Säume hinter bewegten Objekten). „Normal“ oder „Schnell“ ist meist ideal, „Extrem“ übersteuert fast immer.',
      },
    ],
  },
  'white-screen-for-video-calls-and-zoom': {
    slug: 'weisser-bildschirm-fuer-videoanrufe',
    navLabel: 'Licht für Zoom',
    title: 'Weißen Bildschirm als weiches Licht für Videoanrufe und Zoom nutzen',
    metaTitle: 'Weißer Bildschirm als Licht für Videoanrufe',
    metaDescription:
      'Mach deinen Monitor oder Laptop zu einem hellen, schmeichelnden Ringlicht-Ersatz für Zoom, Google Meet und Videokonferenzen – ganz ohne Zusatzgeräte.',
    readingTime: '5 Min. Lesezeit',
    category: 'Licht & Bild',
    intro:
      'Gutes Webcam-Bild hängt viel mehr vom Licht ab als von einer teuren 4K-Kamera. Bei wenig Licht erhöht der Sensor die digitale Verstärkung (ISO), und es entstehen Rauschen und Körnung. Öffnest du WhiteScreen.vip auf einem zweiten Monitor oder neben dem Anruffenster, wird dein Bildschirm sofort zu einer großen, weichen Lichtquelle.',
    toolLabel: 'Licht für Videoanrufe öffnen',
    toolDescription: 'Einstellbares weiches Licht von warm bis kalt, gemacht für die Webcam.',
    sections: [
      {
        title: 'Warum ein großer Bildschirm besser leuchtet als ein kleines Ringlicht',
        content: [
          'In der Fotografie gilt: Je größer die Lichtquelle im Verhältnis zum Gesicht, desto weicher und schmeichelnder die Schatten. Ein 25-cm-Ringlicht erzeugt harte Reflexe in Brillen und scharfe Schatten im Gesicht.',
          'Ein 24- oder 27-Zoll-Monitor mit weißem Bild ist eine große Lichtfläche, die die Augenpartie aufhellt, die Haut weicher wirken lässt und natürliche Lichtreflexe in die Augen zaubert.',
        ],
      },
      {
        title: 'So positionierst du dein Bildschirmlicht',
        content: ['Mit diesen Einstellungen leuchtest du dein Gesicht optimal aus.'],
        steps: [
          'Mit zwei Monitoren: Zeige das weiße Bild auf dem Bildschirm direkt hinter oder neben der Webcam.',
          'Mit einem Monitor: Teile den Bildschirm. Zoom oder Teams in die eine Hälfte, WhiteScreen.vip in die andere.',
          'Farbtemperatur: Warmweiß (etwa 5000–5500 K) für schmeichelnde Hauttöne, Tageslichtweiß (6500 K), wenn Sonnenlicht im Raum ist.',
          'Helligkeit: 70–90 %, damit du nicht blinzeln musst.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Schadet ein weißes Bild dem Monitor in langen Meetings?',
        answer:
          'Bei LCD/LED-Panels schadet ein weißes Bild nicht und verursacht kaum Verschleiß. Bei OLED solltest du die Helligkeit moderat halten (50–70 %), um Wärmestau zu vermeiden.',
      },
    ],
  },
  'fullscreen-white-screen-for-drawing-and-tracing': {
    slug: 'weisser-bildschirm-zum-abpausen-und-zeichnen',
    navLabel: 'Zeichnen & Abpausen',
    title: 'Tablet oder Monitor als digitalen Leuchttisch zum Abpausen und Zeichnen nutzen',
    metaTitle: 'Tablet oder Monitor als Leuchttisch zum Abpausen',
    metaDescription:
      'So machst du iPad, Android-Tablet oder Laptop zu einem hellen digitalen Leuchttisch zum Abpausen von Skizzen, Kalligrafie und Negativen.',
    readingTime: '5 Min. Lesezeit',
    category: 'Licht & Bild',
    intro:
      'Klassische Leuchttische und Pauskästen kosten schnell über 60 € und nehmen Platz weg. Wenn du schon ein iPad, ein Android-Tablet oder einen Laptop hast, wird daraus mit einem Klick ein heller, flimmerfreier digitaler Leuchttisch.',
    toolLabel: 'Weißen Bildschirm als Leuchttisch öffnen',
    toolDescription: 'Weißes Vollbildlicht zum Abpausen auf Papier, für Schablonen und zum Ansehen von Negativen.',
    sections: [
      {
        title: 'Abpausen Schritt für Schritt einrichten',
        content: ['Mit diesen Tipps paust du ab, ohne versehentlich den Touchscreen zu bedienen.'],
        steps: [
          'Öffne WhiteScreen.vip im Vollbild und stelle die Gerätehelligkeit auf 100 %.',
          'Touch sperren: Aktiviere auf dem iPad den Geführten Zugriff (Einstellungen > Bedienungshilfen > Geführter Zugriff), damit Berührungen beim Zeichnen ignoriert werden.',
          'Unter Android: Nutze die Bildschirmfixierung oder eine Sperr-App gegen versehentliche Berührungen.',
          'Lege die Vorlage auf den Bildschirm und darüber Transparentpapier oder leichtes Skizzenpapier (unter 90 g/m²).',
          'Zeichne die Konturen mit einem weichen Bleistift (2B bis 4B) oder Fineliner mit leichtem Druck nach.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kann Zeichnen mit Bleistift auf dem Bildschirm das Glas beschädigen?',
        answer:
          'Tablet-Glas (etwa Gorilla Glass) ist viel härter als Bleistiftmine und verkratzt bei normalem Gebrauch nicht. Vermeide aber starken Druck und achte darauf, dass kein Sand oder Krümel unter dem Papier liegt.',
      },
    ],
  },
  'best-monitor-settings-for-eye-strain': {
    slug: 'monitoreinstellungen-gegen-augenbelastung',
    navLabel: 'Einstellungen gegen müde Augen',
    title: 'Die besten Monitoreinstellungen gegen müde Augen, Kopfschmerzen und für das Lesen am Abend',
    metaTitle: 'Die besten Monitoreinstellungen gegen müde Augen',
    metaDescription:
      'Optimiere Helligkeit, Kontrast, Farbtemperatur und Raumlicht, um digitale Augenbelastung und das Computer-Vision-Syndrom zu vermeiden.',
    readingTime: '6 Min. Lesezeit',
    category: 'Bildschirmpflege',
    intro:
      'Wer täglich 8 bis 10 Stunden auf einen zu hellen, falsch eingestellten Monitor schaut, bekommt oft das Computer-Vision-Syndrom: trockene Augen, verschwommenes Sehen, Spannungskopfschmerzen und einen steifen Nacken. Die Bildschirmhelligkeit an das Raumlicht anzupassen ist die wirkungsvollste ergonomische Verbesserung überhaupt.',
    toolLabel: 'Weißen Bildschirm öffnen',
    toolDescription: 'Vergleiche die Bildschirmhelligkeit mit einem Blatt Papier im Raumlicht, um eine angenehme Helligkeit zu finden.',
    sections: [
      {
        title: 'Die wichtigsten Monitoreinstellungen für entspannte Augen',
        content: ['Mit diesen forschungsbasierten Ergonomie-Tipps verringerst du die Augenbelastung sofort.'],
        steps: [
          'Papier-Abgleich: Halte ein weißes Blatt neben den Monitor und stelle die Helligkeit so ein, dass ein weißes Vollbild genauso hell wirkt wie das Papier.',
          'Farbtemperatur: Senke sie von kühlem Blau (7500 K) auf warme 5000–6500 K.',
          'PWM-Flimmern vermeiden: Achte auf „flimmerfrei“ (Gleichstrom-Dimmung statt niederfrequenter Pulsweitenmodulation).',
          '20-20-20-Regel: Schau alle 20 Minuten mindestens 20 Sekunden lang auf etwas in 6 Metern Entfernung, um die Augenmuskeln zu entspannen.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Schont der Dunkelmodus die Augen mehr als der Hellmodus?',
        answer:
          'Im Dunkeln verringert der Dunkelmodus die gesamte Lichtmenge und damit die Blendung. Für längere Texte in hellen Räumen bietet schwarze Schrift auf sanft eingestelltem Weiß jedoch mehr Kontrast und schnelleres Lesen.',
      },
    ],
  },
  'common-monitor-display-problems-diagnostics': {
    slug: 'haeufige-monitorprobleme',
    navLabel: 'Bildschirmdiagnose',
    title: 'Häufige Monitorprobleme: Bildfehler erkennen und beheben',
    metaTitle: 'Häufige Monitorprobleme erkennen und beheben',
    metaDescription:
      'Ratgeber zu häufigen Monitorproblemen: Flimmern, Farbstreifen, Ghosting, hängende Pixel und unscharfer Text – mit schnellen Lösungsschritten.',
    readingTime: '6 Min. Lesezeit',
    category: 'Bildschirmdiagnose',
    intro:
      'Von rätselhaftem Mikroflimmern über unscharfen Text bis zu plötzlichen Farbstichen: Bildfehler können von Treiberfehlern, schlechten Kabeln, falscher Bildwiederholrate oder Panelschäden kommen. Dieser Ratgeber hilft dir, die Ursache jeder Störung Schritt für Schritt einzugrenzen.',
    toolLabel: 'Monitortest öffnen',
    toolDescription: 'Mit Diagnose-Testbildern Hardwarefehler von Kabel- oder Treiberproblemen unterscheiden.',
    sections: [
      {
        title: 'Vorgehen bei Bildfehlern',
        content: ['Gehe diese Reihenfolge durch, sobald dein Bildschirm Auffälligkeiten zeigt.'],
        steps: [
          'Kabel prüfen: Lockere oder nicht zertifizierte HDMI- bzw. DisplayPort-Kabel verursachen kurze Aussetzer, grüne Funken und Flimmern.',
          'Native Auflösung und Bildwiederholrate prüfen: Ein 4K-Display in 1080p ohne ganzzahlige Skalierung zeigt unscharfen Text.',
          'Mit einem anderen Gerät testen: Schließe einen Laptop oder eine Konsole an denselben Eingang an, um zu sehen, ob der Fehler von der Grafikkarte oder vom Monitor kommt.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Warum wird mein Monitor ab und zu für 2 Sekunden schwarz?',
        answer:
          'Kurze Aussetzer von 1–2 Sekunden kommen fast immer von einer neuen Bandbreitenaushandlung der DSC-Kompression, von elektromagnetischen Störungen (etwa ein Kühlschrank oder Ventilator, der in der Nähe anspringt) oder von einem schwachen HDMI-/DP-Kabel, das bei hohen Bildwiederholraten versagt.',
      },
    ],
  },
}
