import type { LanguageGuides } from './types'
import { DeadPixelGuideDe } from '@/components/home/i18n/de/dead-pixel-guide'
import { StopwatchGuideDe } from '@/components/home/i18n/de/stopwatch-guide'
import { BlackScreenGuideDe } from '@/components/home/i18n/de/black-screen-guide'
import { DvdScreensaverGuideDe } from '@/components/home/i18n/de/dvd-screensaver-guide'
import { BrokenScreenGuideDe } from '@/components/home/i18n/de/broken-screen-guide'
import { FakeZoomMeetingGuideDe } from '@/components/home/i18n/de/fake-zoom-meeting-guide'
import { FakeWindowsUpdateGuideDe } from '@/components/home/i18n/de/fake-windows-update-guide'
import { FakeWindows11UpdateGuideDe } from '@/components/home/i18n/de/fake-windows-11-update-guide'
import { FakeBsodGuideDe } from '@/components/home/i18n/de/fake-bsod-guide'
import { FakeMacUpdateGuideDe } from '@/components/home/i18n/de/fake-mac-update-guide'
import { PomodoroTimerGuideDe } from '@/components/home/i18n/de/pomodoro-timer-guide'
import { FlipClockGuideDe } from '@/components/home/i18n/de/flip-clock-guide'
import { ZoomLightingGuideDe } from '@/components/home/i18n/de/zoom-lighting-guide'
import { CountdownTimerGuideDe } from '@/components/home/i18n/de/countdown-timer-guide'
import { RingLightGuideDe } from '@/components/home/i18n/de/ring-light-guide'
import { RefreshRateGuideDe } from '@/components/home/i18n/de/refresh-rate-guide'
import { TouchScreenGuideDe } from '@/components/home/i18n/de/touch-screen-guide'
import { MonitorGhostingGuideDe } from '@/components/home/i18n/de/monitor-ghosting-guide'
import { MonitorTestGuideDe } from '@/components/home/i18n/de/monitor-test-guide'
import { ScreenBurnInGuideDe } from '@/components/home/i18n/de/screen-burn-in-guide'
import { ScreenResolutionGuideDe } from '@/components/home/i18n/de/screen-resolution-guide'
import { ScreenColorGuideDe } from '@/components/home/i18n/de/screen-color-guide'
import { FrameRateGuideDe } from '@/components/home/i18n/de/frame-rate-guide'
import { OledGrayGuideDe } from '@/components/home/i18n/de/oled-gray-guide'
import { HackedScreenGuideDe } from '@/components/home/i18n/de/hacked-screen-guide'
import { NoSignalGuideDe } from '@/components/home/i18n/de/no-signal-guide'
import { YellowScreenGuideDe } from '@/components/home/i18n/de/yellow-screen-guide'
import { GreenScreenGuideDe } from '@/components/home/i18n/de/green-screen-guide'
import { BlueScreenGuideDe } from '@/components/home/i18n/de/blue-screen-guide'
import { RedScreenGuideDe } from '@/components/home/i18n/de/red-screen-guide'
import { PinkScreenGuideDe } from '@/components/home/i18n/de/pink-screen-guide'
import { WhiteScreenGuideDe } from '@/components/home/i18n/de/white-screen-guide'

/** German (du-form, German UI button names, German search terms). */
export const de: LanguageGuides = {
  tools: {
    'dead-pixel-test': {
      Guide: DeadPixelGuideDe,
      faqs: [
        {
          question: 'Wie lange dauert ein Pixelfehlertest?',
          answer: 'Etwa eine Minute. Geh im Vollbild alle 9 Farben durch und sieh dir bei jeder den ganzen Bildschirm an.',
        },
        {
          question: 'Ist ein einzelner toter Pixel normal?',
          answer:
            'Das kommt vor. Viele Hersteller tauschen einen Bildschirm erst ab einer bestimmten Anzahl fehlerhafter Pixel. Prüfe die Garantiebedingungen deines Monitors, Laptops oder Handys.',
        },
        {
          question: 'Was ist der Unterschied zwischen einem toten und einem hängenden Pixel?',
          answer:
            'Ein toter Pixel leuchtet nie und wirkt schwarz. Ein hängender Pixel bleibt auf einer Farbe wie Rot, Grün oder Blau stehen und lässt sich manchmal mit schnell wechselnden Farben wieder lösen.',
        },
      ],
    },
    stopwatch: {
      Guide: StopwatchGuideDe,
      faqs: [
        {
          question: 'Wie genau ist die Stoppuhr?',
          answer:
            'Sie nutzt die hochgenaue Uhr deines Browsers und zeigt die Zeit auf die Hundertstelsekunde. Läuft der Tab im Hintergrund, stimmt die Zeit trotzdem, wenn du zurückkommst.',
        },
        {
          question: 'Welche Tastenkürzel gibt es?',
          answer: 'Die Leertaste startet und pausiert, L speichert eine Runde und R setzt auf null zurück.',
        },
        {
          question: 'Kann ich meine Runden speichern?',
          answer:
            'Ja. Mit „Runden kopieren“ kopierst du jede Runde mit Rundenzeit und Gesamtzeit und fügst sie in eine Tabelle, Notiz oder Nachricht ein.',
        },
      ],
    },
    'dvd-screensaver': {
      Guide: DvdScreensaverGuideDe,
      faqs: [
        {
          question: 'Ist das das offizielle DVD-Logo?',
          answer:
            'Nein. Der DVD-Bildschirmschoner zeichnet ein Logo im DVD-Stil in deinem Browser und steht in keiner Verbindung zur DVD Format/Logo Licensing Corporation, der das DVD-Video-Logo gehört.',
        },
        {
          question: 'Warum wechselt das Logo im DVD-Bildschirmschoner die Farbe?',
          answer:
            'Wie beim klassischen Bildschirmschoner des DVD-Players wählt das Logo bei jeder Berührung eines Rands eine neue Farbe und wiederholt nie zweimal hintereinander dieselbe.',
        },
        {
          question: 'Kann ich den DVD-Bildschirmschoner als echten Bildschirmschoner unter Windows oder Mac nutzen?',
          answer:
            'Er läuft in deinem Browser, statt als System-Bildschirmschoner installiert zu werden. Öffne ihn im Vollbild, wann immer dein Computer im Leerlauf ist; die eigenen Bildschirmschoner- und Ruhezustand-Einstellungen deines Systems gelten weiterhin.',
        },
      ],
    },
    'broken-screen': {
      Guide: BrokenScreenGuideDe,
      faqs: [
        {
          question: 'Kann der Displayschaden-Effekt meinen Bildschirm beschädigen?',
          answer: 'Nein. Es ist nur ein Bild, das in deinem Browser gezeichnet wird. Drück Esc oder schließ den Tab, und der Bildschirm ist wieder normal.',
        },
        {
          question: 'Funktioniert der Displayschaden-Effekt auf einem Chromebook?',
          answer:
            'Ja. Er funktioniert in jedem modernen Browser, auch auf Chromebooks, Windows- und Mac-Computern, Handys, Tablets und im Browser von Smart-TVs. Es wird nichts installiert.',
        },
        {
          question: 'Wie nutze ich den Streich mit dem gesprungenen Display verantwortungsvoll?',
          answer:
            'Mach es kurz, wähle jemanden, der darüber lacht, nutze es nie, um an Geld oder Informationen zu kommen, und lös den Scherz sofort auf.',
        },
      ],
    },
    'fake-zoom-meeting': {
      Guide: FakeZoomMeetingGuideDe,
      faqs: [
        {
          question: 'Ist dieses falsche Zoom-Meeting mit Zoom verbunden?',
          answer:
            'Nein. Es ist eine unabhängige Simulation im Zoom-Stil und steht in keiner Verbindung zu Zoom Video Communications. Niemand kann beitreten, und nichts wird irgendwohin gesendet.',
        },
        {
          question: 'Nutzt der Fake-Zoom-Meeting-Bildschirm meine Kamera?',
          answer:
            'Nur wenn du „Kameravorschau aktivieren“ einschaltest. Dein Video erscheint in deiner eigenen Kachel und verlässt nie dein Gerät; nichts wird aufgenommen oder hochgeladen. Das Mikrofon wird nie verwendet.',
        },
        {
          question: 'Hat das falsche Zoom-Meeting Ton?',
          answer: 'Nein, es ist stumm. Für ein falsches Meeting-Video fügst du Ton oder Gemurmel in deinem Schnittprogramm hinzu.',
        },
      ],
    },
    'fake-windows-10-update': {
      Guide: FakeWindowsUpdateGuideDe,
      faqs: [
        {
          question: 'Kann ein falscher Windows-Update-Bildschirm meinem Computer schaden?',
          answer: 'Nein. Es ist nur eine Seite in deinem Browser. Nichts wird installiert oder verändert, und Esc oder das Schließen des Tabs beendet sie.',
        },
        {
          question: 'Kann ich das falsche Windows-Update hängen lassen?',
          answer: 'Ja. Drück „Pause“, und die Prozentzahl bleibt stehen. Öffne „Mehr“, um zu ändern, wie schnell sie steigt.',
        },
        {
          question: 'Funktioniert die Windows 10 Update Simulation auf einem Mac oder Chromebook?',
          answer: 'Ja. Sie läuft in jedem modernen Browser, du kannst ein falsches Windows-Update also auch auf einem Mac, Chromebook oder Tablet zeigen.',
        },
      ],
    },
    'fake-windows-11-update': {
      Guide: FakeWindows11UpdateGuideDe,
      faqs: [
        {
          question: 'Ist das Windows-11-Update echt?',
          answer:
            'Nein. Es ist eine Seite in deinem Browser, die wie der Update-Bildschirm von Windows 11 aussieht. Nichts wird installiert, und Esc oder das Schließen des Tabs beendet sie.',
        },
        {
          question: 'Wie lange dauert die Windows 11 Update Simulation?',
          answer: 'Sie wird nie fertig: Die Prozentzahl beginnt nach 100 % von vorn. Halte sie mit „Pause“ auf einer Zahl an oder öffne „Mehr“, um das Tempo zu ändern.',
        },
        {
          question: 'Kann ich die Windows 11 Update Simulation auf einem Mac oder Chromebook laufen lassen?',
          answer: 'Ja. Sie läuft in jedem modernen Browser, deshalb funktioniert der Windows-11-Update-Bildschirm auch auf Macs, Chromebooks, Tablets und Handys.',
        },
      ],
    },
    'fake-blue-screen-of-death': {
      Guide: FakeBsodGuideDe,
      faqs: [
        {
          question: 'Kann ein Fake Bluescreen meinem Computer schaden?',
          answer: 'Nein. Es ist ein Bild in deinem Browser. Dein Computer läuft normal weiter, und Esc oder das Schließen des Tabs beendet ihn.',
        },
        {
          question: 'Warum ist der Bluescreen jetzt schwarz?',
          answer: 'Neuere Windows-11-Versionen zeigen den Absturzbildschirm in Schwarz statt Blau. Wähle im Menü „Stil“ die Option „Schwarz (neu)“ für diesen Look.',
        },
        {
          question: 'Kann ich den Stoppcode auf dem Bluescreen ändern?',
          answer: 'Ja. Öffne „Mehr“ und wähle einen Stoppcode wie CRITICAL_PROCESS_DIED oder MEMORY_MANAGEMENT. Er ändert sich sofort auf dem Bildschirm.',
        },
      ],
    },
    'fake-mac-update': {
      Guide: FakeMacUpdateGuideDe,
      faqs: [
        {
          question: 'Ist diese Mac Update Simulation von Apple?',
          answer:
            'Nein. Es ist eine unabhängige Simulation eines Update-Bildschirms im macOS-Stil und steht in keiner Verbindung zu Apple. An deinem Mac wird nichts installiert oder verändert.',
        },
        {
          question: 'Kann das falsche Mac-Update Stunden dauern?',
          answer:
            'Stell die Update-Dauer unter „Mehr“ auf 120 Minuten. Ist der Balken voll, startet der Bildschirm neu und das Update beginnt von vorn, es kann also so lange laufen, wie du willst.',
        },
      ],
    },
    'pomodoro-timer': {
      Guide: PomodoroTimerGuideDe,
      faqs: [
        {
          question: 'Was ist ein Pomodoro-Timer?',
          answer:
            'Ein Pomodoro-Timer teilt die Arbeit in konzentrierte Blöcke, meist 25 Minuten, mit einer kurzen Pause nach jedem und einer längeren nach vier. Er folgt der Pomodoro-Technik von Francesco Cirillo.',
        },
        {
          question: 'Wie lang ist ein Pomodoro?',
          answer: 'Traditionell 25 Minuten Fokus, gefolgt von 5 Minuten Pause. Beides kannst du unter „Mehr“ ändern, zum Beispiel auf 50 und 10 Minuten.',
        },
        {
          question: 'Funktioniert der Pomodoro-Timer auf meinem Handy?',
          answer: 'Ja. Öffne ihn im Browser deines Handys und drück „Start“. Lass den Tab offen, damit du den Ton hörst, wenn eine Phase endet.',
        },
        {
          question: 'Ist dieser Pomodoro-Timer kostenlos?',
          answer: 'Ja. Er ist komplett kostenlos, ohne Anmeldung, ohne App und ohne Werbung im Timer selbst.',
        },
      ],
    },
    'flip-clock-screensaver': {
      Guide: FlipClockGuideDe,
      faqs: [
        {
          question: 'Hält die Klappuhr meinen Bildschirm an?',
          answer: 'Ja, im Vollbild. Unterstützte Browser halten den Bildschirm im Vollbild wach, so kann sie den ganzen Tag als Schreibtischuhr laufen.',
        },
        {
          question: 'Kann ich die 12-Stunden-Anzeige nutzen?',
          answer: 'Ja. Schalte „24-Stunden-Format“ aus, und die Uhr wechselt zur 12-Stunden-Anzeige mit AM oder PM.',
        },
        {
          question: 'Kann ich den Klappuhr Bildschirmschoner unter Windows oder Mac nutzen?',
          answer:
            'Er läuft in deinem Browser, statt als System-Bildschirmschoner installiert zu werden. Öffne ihn im Vollbild auf einem freien Bildschirm oder wann immer dein Computer im Leerlauf ist.',
        },
      ],
    },
    'zoom-lighting': {
      Guide: ZoomLightingGuideDe,
      faqs: [
        {
          question: 'Kann ich die Beleuchtung für Videoanrufe auf demselben Laptop wie meinen Call nutzen?',
          answer:
            'Am besten funktioniert sie auf einem zweiten Bildschirm, Tablet oder Handy hinter deiner Webcam, damit der Call sichtbar bleibt. Auf einem einzelnen Laptop würde das Licht im Vollbild dein Zoom-Fenster verdecken.',
        },
        {
          question: 'Welche Farbtemperatur ist die beste für Videocalls?',
          answer: '„Neutral“ (4500 K) passt in die meisten Räume. Wähle „Tageslicht“ (6500 K) passend zum Fensterlicht oder „Warm“ (3000 K) für einen sanfteren Abend-Look.',
        },
        {
          question: 'Ist das kostenlos?',
          answer: 'Ja. Es ist kostenlos in jedem Browser, ohne App oder Anmeldung, und funktioniert mit Zoom, Teams, Google Meet und jedem anderen Videocall.',
        },
      ],
    },
    'countdown-timer': {
      Guide: CountdownTimerGuideDe,
      faqs: [
        {
          question: 'Welche Längen kann ich herunterzählen?',
          answer:
            'Jede Länge bis 99 Stunden, 59 Minuten und 59 Sekunden. Wähle 1, 5, 10, 15, 25, 45 oder 60 Minuten im Menü „Timer“ oder klicke auf Stunden, Minuten und Sekunden auf dem Bildschirm, gib deine eigene Zeit ein und drück dann „Start“.',
        },
        {
          question: 'Gibt es einen Ton, wenn die Zeit um ist?',
          answer: 'Ja. Ein Signalton spielt und der Bildschirm blinkt rot, wenn die Zeit abläuft. Schalte den Ton unter „Mehr“ aus für einen lautlosen Countdown.',
        },
        {
          question: 'Kann der Countdown bis zu einem Datum zählen?',
          answer:
            'Ja. Wähle im Menü „Timer“ die Option „Countdown bis zu einem Datum“, such Datum und Uhrzeit aus, gib wenn du willst einen Namen für das Ereignis ein und drück „Start“. Er zeigt die verbleibenden Tage, Stunden, Minuten und Sekunden und merkt sich deinen Countdown in diesem Browser, wenn du zurückkommst.',
        },
      ],
    },
    'ring-light': {
      Guide: RingLightGuideDe,
      faqs: [
        {
          question: 'Kann ein Bildschirm ein echtes Ringlicht ersetzen?',
          answer:
            'Für Videocalls, Selfies und Make-up funktioniert ein heller Bildschirm überraschend gut. Eine echte LED-Leuchte ist heller und besser zum Filmen in einem dunklen Raum oder aus größerer Entfernung.',
        },
        {
          question: 'Funktioniert das Ringlicht Online auf meinem Handy?',
          answer: 'Ja. Öffne es auf einem Handy oder Tablet, dreh die Helligkeit hoch und tippe doppelt für Vollbild, dann richte den Bildschirm auf dein Gesicht.',
        },
        {
          question: 'Welche Farbe ist die beste zum Schminken?',
          answer: 'Weiß bei voller Helligkeit, damit die Farben echt aussehen. Öffne „Mehr“, um das Weiß wärmer oder kühler an deinen Raum anzupassen.',
        },
      ],
    },
    'screen-refresh-rate-test': {
      Guide: RefreshRateGuideDe,
      faqs: [
        {
          question: 'Wie genau ist der Bildwiederholrate-Test?',
          answer:
            'Bei den meisten Bildschirmen sehr genau. Er misst Hunderte Frames und rundet auf die nächste übliche Rate. Volle Tabs, Energiesparen oder ein langsamer Computer können den Wert senken, also schließ andere Apps und drück „Erneut messen“.',
        },
        {
          question: 'Warum zeigt mein 144-Hz-Monitor 60 Hz?',
          answer:
            'Das Display ist wahrscheinlich auf 60 Hz eingestellt. Wähle die höhere Rate in deinen Anzeigeeinstellungen und nutze Kabel und Anschluss, die sie unterstützen, etwa DisplayPort oder ein High-Speed-HDMI-Kabel.',
        },
        {
          question: 'Funktioniert der Bildwiederholrate-Test auf Handys?',
          answer: 'Ja. Öffne ihn im Browser deines Handys. Schalte vorher den Energiesparmodus aus, denn er begrenzt den Bildschirm oft auf 60 Hz.',
        },
      ],
    },
    'touch-screen-test': {
      Guide: TouchScreenGuideDe,
      faqs: [
        {
          question: 'Wie teste ich meinen Touchscreen auf tote Stellen?',
          answer: 'Wähle „Raster für tote Zonen“ und wisch über jedes Feld. Felder, die nach der Berührung dunkel bleiben, sind tote Stellen.',
        },
        {
          question: 'Funktioniert der Touchscreen-Test auf dem iPhone?',
          answer: 'Ja. Er funktioniert in Safari und anderen iPhone-Browsern sowie auf Android-Handys, Tablets und Laptops mit Touchscreen.',
        },
        {
          question: 'Wie viele Berührungspunkte sollte mein Handy erkennen?',
          answer: 'Die meisten Handys und Tablets erkennen 5 bis 10 gleichzeitig. Nutze „Multitouch“ und achte auf den Wert „Max.“, um zu sehen, wie viele deines schafft.',
        },
      ],
    },
    'monitor-ghosting-test': {
      Guide: MonitorGhostingGuideDe,
      faqs: [
        {
          question: 'Zeigt jeder Monitor etwas Ghosting?',
          answer:
            'Die meisten LCD-Monitore zeigen bei hohem Tempo ein wenig. Ein Problem ist es, wenn die Schliere bei normalem Tempo lang ist oder ein heller Lichthof erscheint. Dann stell den Overdrive ein und mach den Monitor-Ghosting-Test noch einmal.',
        },
        {
          question: 'Ist Ghosting dasselbe wie Input Lag?',
          answer:
            'Nein. Ghosting ist eine sichtbare Schliere durch langsame Pixel; Input Lag ist eine Verzögerung zwischen Maus oder Controller und dem Bildschirm. Dieser Test zeigt nur Ghosting.',
        },
        {
          question: 'Ist das ein Anti-Ghosting-Test für Tastaturen?',
          answer:
            'Nein. Anti-Ghosting bei Tastaturen bedeutet, dass viele gleichzeitig gedrückte Tasten erkannt werden. Dieser Monitor-Ghosting-Test prüft Bewegungsschlieren auf deinem Display.',
        },
      ],
    },
    'monitor-test': {
      Guide: MonitorTestGuideDe,
      faqs: [
        {
          question: 'Ist der Monitortest kostenlos und online?',
          answer: 'Ja. Er läuft in deinem Browser auf jedem Monitor, Laptop, Fernseher oder Handy, ohne Download oder Anmeldung.',
        },
        {
          question: 'Wie teste ich einen neuen Monitor?',
          answer:
            'Lass die Muster des Monitortests im Vollbild bei nativer Auflösung laufen, dann den Pixelfehlertest und den Homogenitätstest. Am besten machst du das, solange du ihn noch zurückgeben kannst.',
        },
        {
          question: 'Kann ein Monitortest meinen Bildschirm kalibrieren?',
          answer:
            'Er hilft dir, Helligkeit, Kontrast und Gamma nach Auge einzustellen. Eine genaue Kalibrierung braucht ein Hardware-Kolorimeter oder das Kalibrierungstool deines Systems.',
        },
      ],
    },
    'screen-burn-in-test': {
      Guide: ScreenBurnInGuideDe,
      faqs: [
        {
          question: 'Wie lange dauert es, bis sich ein Bild einbrennt?',
          answer:
            'Meist Hunderte oder Tausende Stunden mit demselben statischen Bild, oft bei hoher Helligkeit. Image Retention bei LCD kann schon nach ein paar Stunden auftreten, verblasst aber.',
        },
        {
          question: 'Wie lange sollte ich den Einbrenn-Fixer laufen lassen?',
          answer:
            'Fang mit 10 bis 30 Minuten an und mach dann den Bildschirm-Einbrenn-Test noch einmal. Wiederhole das ein paar Mal; ändert sich nichts, ist das Einbrennen wahrscheinlich dauerhaft.',
        },
        {
          question: 'Funktioniert der Bildschirm-Einbrenn-Test auf Handys?',
          answer:
            'Ja. Öffne ihn im Browser deines Handys, dreh die Helligkeit hoch und tippe doppelt für Vollbild. Für OLED- und AMOLED-Handys probier auch den [OLED Burn-In Test](/oled-burn-in-test).',
        },
      ],
    },
    'screen-resolution-test': {
      Guide: ScreenResolutionGuideDe,
      faqs: [
        {
          question: 'Warum ist meine Bildschirmauflösung niedriger als die meines Monitors?',
          answer:
            'Wegen der Anzeigeskalierung. Bei 150 % Skalierung meldet ein Monitor mit 2560 × 1440 dem Browser 1707 × 960. Der Wert „Physische Pixel“ multipliziert mit dem Pixelverhältnis und zeigt die echte Zahl.',
        },
        {
          question: 'Ist der Bildschirm-Auflösungstest genau?',
          answer: 'Er zeigt genau, was dein Browser meldet. Lass den Zoom auf 100 %, damit die Zahl der physischen Pixel zu deinem Display passt.',
        },
        {
          question: 'Welche Auflösung sollte ich einstellen?',
          answer: 'Die native Auflösung deines Monitors, in den Windows-Anzeigeeinstellungen als „Empfohlen“ markiert. Alles andere kann unscharf aussehen.',
        },
      ],
    },
    'screen-color-test': {
      Guide: ScreenColorGuideDe,
      faqs: [
        {
          question: 'Ist der Bildschirm-Farbtest kostenlos?',
          answer: 'Ja. Er läuft in deinem Browser auf jedem Monitor, Laptop, Fernseher oder Handy, ohne Download oder Anmeldung.',
        },
        {
          question: 'Warum sehen Farben auf meinem Handy und Monitor unterschiedlich aus?',
          answer:
            'Bildschirme unterscheiden sich in Paneltyp, Farbmodus und Kalibrierung. Mach den Bildschirm-Farbtest auf beiden mit ausgeschaltetem Nachtmodus und vergleiche die RGB-Verläufe.',
        },
        {
          question: 'Kann ein Farbtest die Farben meines Bildschirms reparieren?',
          answer:
            'Nein, er zeigt Probleme. Farbstiche behebst du über Farbtemperatur oder Bildmodus deines Displays oder mit dem Kalibrierungstool deines Systems.',
        },
      ],
    },
    'frame-rate-test': {
      Guide: FrameRateGuideDe,
      faqs: [
        {
          question: 'Warum zeigt der FPS-Test auf meinem 144-Hz-Monitor 60?',
          answer:
            'Der Monitor ist wahrscheinlich auf 60 Hz eingestellt, das Kabel schafft nicht mehr, oder der Laptop spart Strom. Prüf deine Anzeigeeinstellungen und mach den Bildrate-Test noch einmal.',
        },
        {
          question: 'Kann das menschliche Auge mehr als 60 FPS sehen?',
          answer: 'Ja. Die meisten Menschen bemerken bei 120 FPS und mehr eine flüssigere Bewegung. Vergleiche auf einem Bildschirm mit hoher Bildwiederholrate die 60-FPS-Bahn mit der Max-Bahn.',
        },
        {
          question: 'Funktioniert der Bildrate-Test auf Handys?',
          answer: 'Ja. Öffne ihn im Browser deines Handys und tippe doppelt für Vollbild. Handys mit 90- oder 120-Hz-Bildschirm zeigen eine flüssigere Max-Bahn.',
        },
      ],
    },
    'oled-gray-test': {
      Guide: OledGrayGuideDe,
      faqs: [
        {
          question: 'Ist etwas Mura bei einem OLED normal?',
          answer: 'Ja. Leichte Flecken auf den Flächen mit 1 % bis 5 % sind üblich. Ein Problem ist es nur, wenn du sie in normalen Filmen und Spielen bemerkst.',
        },
        {
          question: 'Funktioniert der OLED-Grautest auf LCD-Bildschirmen?',
          answer:
            'Ja, aber LCDs zeigen auf Dunkelgrau stattdessen Leuchten und Lichthöfe der Hintergrundbeleuchtung. Dafür passt der [Bildschirm-Homogenitätstest](/gray-screen) besser.',
        },
        {
          question: 'Welche Helligkeit sollte ich nutzen?',
          answer: 'Mittlere Helligkeit in einem dunklen Raum. Sehr hohe Helligkeit kann Probleme nahe Schwarz verstecken, sehr niedrige kann sie übertreiben.',
        },
      ],
    },
    'hacked-screen': {
      Guide: HackedScreenGuideDe,
      faqs: [
        {
          question: 'Ist der Gehackter Bildschirm Simulator sicher?',
          answer: 'Ja. Es ist eine Webseite, die nur Animationen zeigt. Sie installiert nichts und berührt weder Dateien noch Webcam oder Netzwerk.',
        },
        {
          question: 'Wie schließe ich den gehackten Bildschirm?',
          answer: 'Drück Esc, um das Vollbild zu verlassen, und schließ dann den Tab.',
        },
        {
          question: 'Funktioniert er auf Handys?',
          answer:
            'Ja. Öffne ihn im Browser eines Handys und tippe doppelt für Vollbild. Die Sirene braucht zuerst einen Tipp, weil Handys Ton blockieren, bis du mit der Seite interagierst.',
        },
      ],
    },
    'no-signal-screen': {
      Guide: NoSignalGuideDe,
      faqs: [
        {
          question: 'Wie zeige ich den Kein Signal Bildschirm auf meinem Fernseher?',
          answer: 'Öffne die Seite im Browser deines Fernsehers oder streame bzw. schließ einen Laptop an und drück dann F oder tippe auf „Vollbild“.',
        },
        {
          question: 'Kann ich den Text KEIN SIGNAL ändern?',
          answer: 'Ja. Öffne „Mehr“, um deine eigene Meldung (bis zu 24 Zeichen) und einen Eingangsnamen wie HDMI 2 oder AV einzugeben.',
        },
        {
          question: 'Was ist der Piepton bei TV-Farbbalken?',
          answer:
            'Ein gleichmäßiger 1-kHz-Testton, den Sender zusammen mit den Farbbalken abspielten, um die Tonpegel abzugleichen. Schalte ihn mit der Taste für den 1-kHz-Ton ein.',
        },
      ],
    },
  },
  colors: {
    black: {
      Guide: BlackScreenGuideDe,
      faqs: [
        {
          question: 'Spart ein schwarzer Bildschirm Akku?',
          answer:
            'Auf OLED-Handys, -Tablets und -Laptops ja: Schwarze Pixel sind ausgeschaltet. Bei LCD-Bildschirmen bleibt die Hintergrundbeleuchtung an, das spart kaum etwas. Weniger Helligkeit spart bei LCD mehr.',
        },
        {
          question: 'Hält ein schwarzer Bildschirm meinen Computer wach?',
          answer:
            'Ja, solange die Seite geöffnet ist und „Bildschirm wach halten“ eingeschaltet ist, in Browsern, die das unterstützen. Deine normalen Energieeinstellungen gelten wieder, sobald du die Seite schließt oder die Option ausschaltest.',
        },
        {
          question: 'Ist ein schwarzer Bildschirm dasselbe wie den Monitor auszuschalten?',
          answer:
            'Nein. Der Monitor bleibt an und dein Computer läuft weiter; der Bildschirm zeigt nur reines Schwarz. Auf OLED wirkt er aus, weil die Pixel dunkel sind, ein LCD leuchtet dagegen weiter mit seiner Hintergrundbeleuchtung.',
        },
        {
          question: 'Kann ich einen schwarzen Start- oder Sperrbildschirm am Handy einstellen?',
          answer: 'Ja. Wähle „Smartphone“ im Menü „Herunterladen“ oder gib unter „Eigene Größe“ die genaue Größe deines Handys ein, und lege das Bild als Hintergrund für Start- oder Sperrbildschirm fest.',
        },
        {
          question: 'Wie mache ich ein schwarzes Video?',
          answer: 'Lade ein schwarzes PNG in 1080p oder 4K herunter, leg es in die Zeitleiste deines Schnittprogramms und dehne es auf die gewünschte Länge.',
        },
        {
          question: 'Ist Schwarz oder Weiß besser, um einen Monitor zu reinigen?',
          answer:
            'Schwarz zeigt Fingerabdrücke, Schlieren und Flecken deutlich, besonders mit seitlichem Licht. Für Staub eignet sich ein [weißer Bildschirm](/) besser. Schalte das Display vor dem Abwischen aus.',
        },
      ],
    },
    white: {
      Guide: WhiteScreenGuideDe,
      faqs: [
        {
          question: 'Wie mache ich meinen Bildschirm komplett weiß?',
          answer: 'Öffne WhiteScreen.vip, wähle Weiß und aktiviere den Vollbildmodus, sofern dein Browser ihn unterstützt.',
        },
        {
          question: 'Funktioniert der weiße Bildschirm auf meinem Handy?',
          answer:
            'Ja. Du kannst das Tool in einem kompatiblen mobilen Browser öffnen. Wie sich der Vollbildmodus verhält, hängt von deinem Gerät und Browser ab.',
        },
        {
          question: 'Kann ein weißer Bildschirm tote Pixel aufdecken?',
          answer:
            'Ein weißer Hintergrund kann dunkle Pixel zeigen, während schwarze Hintergründe und Grundfarben helfen, andere sichtbare Pixelfehler aufzudecken. Das ist eine Sichtprüfung, keine vollständige Hardwarediagnose.',
        },
        {
          question: 'Warum schaltet sich mein Bildschirm immer wieder aus?',
          answer:
            'Der Ruhezustand-Timer deines Geräts, Energiespareinstellungen oder Browser-Einschränkungen können das Display ausschalten. Prüf deine Energieeinstellungen und nutze „Bildschirm wach halten“, wenn Website und Browser das unterstützen.',
        },
        {
          question: 'Ist ein heller weißer Bildschirm sicher für OLED-Displays?',
          answer:
            'Lass kein helles statisches Bild lange auf einem OLED-Display stehen. Folge den Empfehlungen des Herstellers zu Helligkeit und Nutzung. Keine Browserfunktion kann garantieren, dass Einbrennen verhindert wird.',
        },
        {
          question: 'Ist WhiteScreen.vip kostenlos?',
          answer:
            'WhiteScreen.vip ist online in deinem Webbrowser komplett kostenlos. Alle Bildschirmfarben, Tests und Bild-Downloads sind ohne Registrierung, Konto oder Softwareinstallation nutzbar.',
        },
        {
          question: 'Was ist der Unterschied zwischen einem leeren und einem reinweißen Bildschirm?',
          answer:
            'Hier ist es dasselbe: ein Bildschirm, der mit reinem Weiß (#FFFFFF) gefüllt ist, sonst nichts. Wähle Warm oder senke die Helligkeit, wenn du einen sanfteren, gebrochen weißen Look willst.',
        },
        {
          question: 'Kann ich einen weißen Bildschirm zum Abpausen nutzen?',
          answer:
            'Ja. Ein Tablet oder Monitor bei voller Helligkeit funktioniert als einfacher Leuchttisch. Kleb dein Papier fest und pause sanft ab, ohne fest auf den Bildschirm zu drücken.',
        },
        {
          question: 'Hilft ein weißer Bildschirm beim Reinigen meines Monitors?',
          answer:
            'Auf einem weißen Bildschirm siehst du Staub, Fingerabdrücke und Schlieren leicht. Schalte das Display vor dem Abwischen aus und öffne dann den weißen Bildschirm wieder, um übersehene Stellen zu finden.',
        },
      ],
    },
    yellow: {
      Guide: YellowScreenGuideDe,
      faqs: [
        {
          question: 'Ist ein gelber Bildschirm angenehmer für die Augen?',
          answer:
            'Gelb enthält kein blaues Licht, was viele am Abend entspannter finden. Gelb bei voller Helligkeit ist trotzdem hell, senke also den Helligkeitsregler für ein sanfteres warmes Licht.',
        },
        {
          question: 'Kann ich den gelben Bildschirm wärmer oder sanfter machen?',
          answer: 'Ja. Wähle Warm für ein Goldgelb und senke den Helligkeitsregler für ein gedämpfteres, sanftes Licht.',
        },
        {
          question: 'Kann ich ein Bild vom gelben Bildschirm herunterladen?',
          answer:
            'Ja. Nutze „Herunterladen“ unter der Vorschau, um ein gelbes PNG in 1080p, 2K, 4K oder Handygröße oder in einer eigenen Größe bis 8K zu speichern.',
        },
      ],
    },
    green: {
      Guide: GreenScreenGuideDe,
      faqs: [
        {
          question: 'Was ist der Green Screen of Death?',
          answer:
            'Die grüne Version des Windows-Bluescreens, die erscheint, wenn eine Windows-Insider-Preview-Version abstürzt. Auch Xbox-Konsolen können auf einem grünen Ladebildschirm hängen bleiben. Willst du zum Spaß einen zeigen? Probier den [Fake Bluescreen](/fake-blue-screen-of-death).',
        },
        {
          question: 'Kann ich einen grünen Bildschirm auf meinem Handy nutzen?',
          answer:
            'Ja, für kleine Gegenstände und Nahaufnahmen. Öffne diese Seite, dreh die Helligkeit hoch, schalte auf Vollbild und schalte „Bildschirm wach halten“ ein. Für alles, was größer als das Handy ist, nimm grünen Stoff oder einen Hintergrund im Schnittprogramm.',
        },
        {
          question: 'Entfernt diese Greenscreen-Website meinen Hintergrund?',
          answer:
            'Nein. Diese Seite zeigt reines Grün und lässt dich grüne Bilder herunterladen. Das Entfernen des Hintergrunds passiert in deiner Video- oder Streaming-App, etwa OBS, CapCut, Zoom oder Teams.',
        },
      ],
    },
    blue: {
      Guide: BlueScreenGuideDe,
      faqs: [
        {
          question: 'Ist dieser blaue Bildschirm der Windows-Bluescreen?',
          answer:
            'Nein. Das ist ein einfacher blauer Farbbildschirm für Licht, Tests und Schnitt. Er zeigt keinen Fehler und beeinflusst deinen Computer nicht. Suchst du den Fehlerbildschirm als Streich? Probier den [Fake Bluescreen](/fake-blue-screen-of-death).',
        },
        {
          question: 'Kann ich einen blauen Bildschirm auf meinem Laptop, PC oder Handy nutzen?',
          answer:
            'Ja. Er funktioniert in jedem modernen Browser. Tippe doppelt für Vollbild, schalte „Bildschirm wach halten“ ein und stell den Ton mit dem Helligkeitsregler ein.',
        },
        {
          question: 'Warum wirkt ein rein blauer Bildschirm so dunkel?',
          answer:
            'Unsere Augen sind für Blau am wenigsten empfindlich, deshalb wirkt reines Blau bei gleicher Helligkeit viel dunkler als Grün oder Rot. Das ist normal und kein Fehler.',
        },
      ],
    },
    red: {
      Guide: RedScreenGuideDe,
      faqs: [
        {
          question: 'Kann ich einen roten Bildschirm auf meinem iPhone oder Android-Handy nutzen?',
          answer:
            'Ja. Öffne diese Seite im Browser deines Handys, tippe auf das Vollbild-Symbol und schalte „Bildschirm wach halten“ ein. Senke den Helligkeitsregler für ein gedämpftes Nachtlicht.',
        },
        {
          question: 'Warum sieht mein roter Bildschirm orange aus?',
          answer:
            'Meist verschiebt ihn der Farbmodus des Displays oder ein warmer Nachtfilter (Night Shift, Nachtmodus). Schalte diese aus, nutze den Standard- oder sRGB-Modus und prüf dann noch einmal.',
        },
        {
          question: 'Taugt ein roter Bildschirm als Dunkelkammerlicht?',
          answer:
            'Nein. Sein Rot ist nicht schmal genug gefiltert und viel zu hell für Film oder Fotopapier. Nutze für lichtempfindliche Materialien eine richtige Dunkelkammerleuchte.',
        },
      ],
    },
    pink: {
      Guide: PinkScreenGuideDe,
      faqs: [
        {
          question: 'Welchen Farbcode hat dieses Rosa?',
          answer:
            'Es ist #FF69B4 (RGB 255, 105, 180), oft Hot Pink genannt. Wähle Warm für ein Korallrosa, Kühl für ein kühleres Rosé oder senke den Helligkeitsregler für ein dunkleres Pink.',
        },
        {
          question: 'Kann ich einen rosa Bildschirm 10 Stunden anlassen?',
          answer:
            'Ja. Schalte „Bildschirm wach halten“ ein, und das Display bleibt an, solange die Seite offen ist, in Browsern, die das unterstützen. Schließ Laptop oder Handy für lange Sitzungen ans Ladegerät an.',
        },
        {
          question: 'Warum sieht mein rosa Bildschirm lila aus?',
          answer:
            'Das Display betont Blau zu stark. Wähle Warm unter der Vorschau oder stell dein Display auf eine wärmere Farbtemperatur oder den sRGB-Modus.',
        },
      ],
    },
  },
  glanceHeadings: {
    'dead-pixel-test': 'Was ist ein Pixelfehlertest?',
    stopwatch: 'Was ist eine Online-Stoppuhr?',
    'black-screen': 'Was ist ein schwarzer Bildschirm?',
    'dvd-screensaver': 'Was ist ein DVD-Bildschirmschoner?',
    'broken-screen': 'Was ist ein Displayschaden-Effekt?',
    'fake-zoom-meeting': 'Was ist ein Fake-Zoom-Meeting-Bildschirm?',
    'fake-windows-10-update': 'Was ist eine Windows 10 Update Simulation?',
    'fake-windows-11-update': 'Was ist eine Windows 11 Update Simulation?',
    'fake-blue-screen-of-death': 'Was ist ein Fake Bluescreen?',
    'fake-mac-update': 'Was ist eine Mac Update Simulation?',
    'pomodoro-timer': 'Was ist ein Pomodoro-Timer?',
    'flip-clock-screensaver': 'Was ist ein Klappuhr-Bildschirmschoner?',
    'zoom-lighting': 'Was ist eine Beleuchtung für Videoanrufe?',
    'countdown-timer': 'Was ist ein Vollbild-Countdown?',
    'ring-light': 'Was ist ein Online-Ringlicht?',
    'screen-refresh-rate-test': 'Was ist ein Bildwiederholrate-Test?',
    'touch-screen-test': 'Was ist ein Touchscreen-Test?',
    'monitor-ghosting-test': 'Was ist ein Monitor-Ghosting-Test?',
    'monitor-test': 'Was ist ein Monitortest?',
    'screen-burn-in-test': 'Was ist ein Bildschirm-Einbrenn-Test?',
    'screen-resolution-test': 'Was ist ein Bildschirm-Auflösungstest?',
    'screen-color-test': 'Was ist ein Bildschirm-Farbtest?',
    'frame-rate-test': 'Was ist ein Bildrate-Test?',
    'oled-gray-test': 'Was ist ein OLED-Grautest?',
    'hacked-screen': 'Was ist ein Gehackter-Bildschirm-Simulator?',
    'no-signal-screen': 'Was ist ein Kein-Signal-Bildschirm?',
    'white-screen': 'Was ist ein weißer Bildschirm?',
    'yellow-screen': 'Was ist ein gelber Bildschirm?',
    'green-screen': 'Was ist ein grüner Bildschirm?',
    'blue-screen': 'Was ist ein blauer Bildschirm?',
    'red-screen': 'Was ist ein roter Bildschirm?',
    'pink-screen': 'Was ist ein rosa Bildschirm?',
  },
}
