import type { LocalizedSubtitles } from './types'

/** German subtitles: one actionable line under each H1 (see src/lib/subtitles.ts for the English set). */
export const de: LocalizedSubtitles = {
  tools: {
    // Farbbildschirme (auch die Startseite, der weiße Bildschirm)
    'white-screen': 'Mach deinen Bildschirm hellweiß – als Licht, zum Reinigen oder für Pixeltests.',
    'black-screen': 'Schalte auf reines Schwarz, um hängende Pixel und Lichthöfe zu finden oder den Bildschirm abzudunkeln.',
    'red-screen': 'Füll deinen Bildschirm mit Rot, um rote Subpixel zu prüfen oder ein Stimmungslicht zu setzen.',
    'green-screen': 'Nutze den hellgrünen Bildschirm als Chroma-Key-Hintergrund oder zum Pixeltest.',
    'blue-screen': 'Füll deinen Bildschirm mit Blau für Chroma Keying oder einen Test der blauen Subpixel.',
    'yellow-screen': 'Mach deinen Bildschirm gelb für warmes Licht oder einen Test roter und grüner Pixel.',
    'orange-screen': 'Füll deinen Raum mit warmem orangem Licht oder nutze es als Fotohintergrund.',
    'pink-screen': 'Beleuchte dein Gesicht mit sanftem Rosa für Selfies, Calls oder Stimmungslicht.',
    'purple-screen': 'Setz ein violettes Leuchten als Raumstimmung oder Stream-Hintergrund.',
    'cyan-screen': 'Zeig Cyan, um grüne und blaue Subpixel gleichzeitig zu prüfen.',
    'magenta-screen': 'Zeig Magenta, um rote und blaue Subpixel zu prüfen und Farbstiche zu erkennen.',
    'gray-screen': 'Zeig neutrales Grau, um Clouding, Banding und den Dirty-Screen-Effekt sichtbar zu machen.',

    // Bildschirmtests
    'dead-pixel-test': 'Tippe dich durch 9 Farben, um tote, hängende oder heiße Pixel zu finden.',
    'screen-uniformity-test': 'Prüf gleichmäßige Grauflächen auf Clouding, Vignettierung und Backlight Bleeding.',
    'monitor-test': 'Geh 7 Testmuster durch, um Farbe, Gamma und Schärfe zu prüfen.',
    'oled-gray-test': 'Geh fast schwarze Graustufen durch, um OLED-Banding und Mura zu erkennen.',
    'oled-burn-in-test': 'Lass Vollfarben durchlaufen, um Einbrennen und Nachbilder auf OLED zu erkennen.',
    'screen-burn-in-test': 'Such nach Geisterbildern und starte dann den Fixer gegen Nachbilder.',
    'touch-screen-test': 'Wisch über das Raster, um tote Zonen zu finden und Multitouch-Punkte zu zählen.',
    'screen-refresh-rate-test': 'Sieh deine Bildwiederholrate in Hz, sobald die Seite geladen ist.',
    'monitor-ghosting-test': 'Erhöhe das Tempo, bis Schlieren erscheinen, und beurteile Ghosting und Overdrive.',
    'frame-rate-test': 'Vergleiche 15, 24, 30 und 60 FPS mit dem Maximum deines Bildschirms nebeneinander.',
    'screen-color-test': 'Geh Farbbalken und RGB-Verläufe durch, um Farbstiche und Banding zu prüfen.',
    'screen-resolution-test': 'Sieh sofort deine Bildschirmauflösung und dein Pixelverhältnis, ganz ohne Klick.',

    // Effekte und Sound
    'no-signal-screen': 'Wähle Farbbalken, hüpfend oder blau und schalte dann am Fernseher auf Vollbild.',
    'white-noise-generator': 'Starte gleichmäßiges weißes Rauschen und stell einen Schlaf-Timer für die Nacht.',
    'brown-noise-generator': 'Starte tiefes braunes Rauschen zum Konzentrieren oder Schlafen, mit Schlaf-Timer.',
    'pink-noise-generator': 'Starte rosa Rauschen wie Regen und forme es mit Filtern und Lautstärke.',
    'broken-screen': 'Tippe irgendwohin, um das Glas springen zu lassen, und gib das Gerät dann weiter.',
    'hacker-typer': 'Hau auf beliebige Tasten und sieh zu, wie Hacker-Code wie im Film erscheint.',
    'hacked-screen': 'Wähle Rot oder Grün, schalte auf Vollbild und lass es für einen Freund stehen.',
    'visual-noise': 'Füll den Bildschirm mit animiertem Pixelrauschen in Mono, Farbe oder Tönung.',
    'color-cycle': 'Lass deinen Bildschirm durch alle Farben gleiten oder geh sie selbst durch.',
    'gradient-screen': 'Wähle Farben und einen Winkel für einen bewegten Vollbild-Farbverlauf.',

    // Licht
    'zoom-lighting': 'Mach deinen Bildschirm zum weichen Führungslicht für deinen nächsten Videocall.',
    'ring-light': 'Beleuchte dein Gesicht mit einem leuchtenden Ring auf dem Bildschirm; Größe und Wärme einstellbar.',

    // Bildschirmschoner
    'matrix-screensaver': 'Lass digitalen Regen fallen und stell Tempo, Farbe und Zeichen ein.',
    'flip-clock-screensaver': 'Mach aus jedem freien Bildschirm eine große Klappuhr.',
    'dvd-screensaver': 'Sieh dem DVD-Logo beim Springen zu und warte auf den perfekten Ecktreffer.',
    'motivational-quote-screensaver': 'Zeig wechselnde Motivationssprüche in großer Schrift auf einem freien Bildschirm.',

    // Timer und Werkzeuge
    'countdown-timer': 'Wähle eine Vorlage oder eine eigene Zeit und drück dann Start.',
    'pomodoro-timer': 'Drück Start für 25 Minuten Fokus und mach dann 5 Minuten Pause.',
    stopwatch: 'Drück die Leertaste zum Starten und L, um eine Runde zu speichern.',

    // Simulationen
    'fake-windows-10-update': 'Schalte ein falsches Windows-10-Update auf Vollbild und leg einen Freund rein.',
    'fake-windows-11-update': 'Zeig den dunklen Windows-11-Update-Bildschirm als Streich im Vollbild.',
    'fake-blue-screen-of-death': 'Schalte einen falschen Absturzbildschirm auf Vollbild und lös den Scherz dann auf.',
    'fake-mac-update': 'Zeig ein falsches macOS-Update mit schmalem Fortschrittsbalken im Vollbild.',
    'fake-android-update': 'Öffne es auf einem Handy, um ein falsches Android-Systemupdate zu zeigen.',
    'fake-windows-xp-update': 'Hol die 2000er zurück mit einem falschen Windows-XP-Setup.',
    'fake-windows-xp-boot': 'Spiel den klassischen Windows-XP-Startbildschirm im Vollbild ab.',
    'fake-chrome-os-update': 'Zeig einen falschen Chromebook-Update-Bildschirm mit wechselnden Statusschritten.',
    'fake-ubuntu-update': 'Sieh zu, wie falsche Ubuntu-Paketlogs in einem Terminal-Upgrade durchlaufen.',
    'fake-zoom-meeting': 'Richte einen falschen Call im Zoom-Stil für einen Streich oder als Video-Requisite ein.',
    'fake-teams-meeting': 'Zeig einen Meeting-Bildschirm im Teams-Stil mit Teilnehmerkacheln.',
    'fake-google-meet': 'Zeig einen Call im Meet-Stil mit Kacheln und Sprechermarkierung.',
    'fake-slack-huddle': 'Zeig ein Huddle im Slack-Stil mit Sprechringen und laufendem Timer.',
    'fake-radar-screen': 'Lass einen Sci-Fi-Radar mit Signalen als Requisite oder Hintergrund kreisen.',
  },
  backgrounds: {
    'white-background': 'Lade einen reinweißen Hintergrund in 4K, Handy- oder eigener Größe herunter.',
    'black-background': 'Hol dir einen echt schwarzen Hintergrund als PNG oder CSS, in jeder Größe.',
    'orange-background': 'Lade einen warmen orangen Hintergrund für Handy oder Desktop herunter.',
    'gradient-background': 'Lade diesen weichen Farbverlauf als PNG herunter oder kopiere ihn als CSS.',
    'neon-background': 'Speichere dieses Neonleuchten als 4K-Hintergrundbild oder Handy-Hintergrund.',
    'red-background': 'Lade einen kräftig roten Hintergrund in jeder Größe herunter oder kopiere das CSS.',
    'yellow-background': 'Lade einen hellgelben Hintergrund für Folien, Handys oder Desktops herunter.',
    'blue-background': 'Lade einen klaren blauen Hintergrund als PNG in 4K oder Handygröße herunter.',
    'green-screen-background': 'Zeig diesen Greenscreen im Vollbild als Chroma Key oder lade ihn herunter.',
    'virtual-office': 'Lade einen virtuellen Büro-Hintergrund für deinen nächsten Videocall herunter.',
    'graph-paper': 'Lade ein Millimeterpapier-Raster als PNG herunter oder kopiere es als CSS.',
    'pink-background': 'Lade einen rosa Hintergrund für Handy, Desktop oder Storys herunter.',
    'light-pink-background': 'Lade einen sanften hellrosa Hintergrund in jeder Größe herunter.',
    'green-background': 'Lade einen frischen grünen Hintergrund als PNG herunter oder kopiere das CSS.',
    'purple-background': 'Lade einen satten violetten Hintergrund für Handy oder Desktop herunter.',
    'dark-background': 'Lade einen augenschonenden dunklen Hintergrund in jeder Größe herunter.',
    'gold-background': 'Lade einen goldenen Verlaufshintergrund für Einladungen, Folien oder Handys herunter.',
    'aesthetic-background': 'Lade einen sanften Aesthetic-Hintergrund für Handy oder Desktop herunter.',
    'beige-background': 'Lade einen warmen beigen Hintergrund als PNG herunter oder kopiere das CSS.',
    'pastel-background': 'Lade einen Pastell-Verlaufshintergrund für Handys, Folien oder Posts herunter.',
  },
}
