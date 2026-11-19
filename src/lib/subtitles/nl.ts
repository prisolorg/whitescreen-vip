import type { LocalizedSubtitles } from './types'

/** Dutch subtitles: one actionable line under each H1 (see src/lib/subtitles.ts for the English set). */
export const nl: LocalizedSubtitles = {
  tools: {
    // Kleurschermen (ook de homepage, het witte scherm)
    'white-screen': 'Maak je scherm fel wit om te verlichten, schoon te maken of dode pixels te zoeken.',
    'black-screen': 'Ga puur zwart om vastzittende pixels en backlight bleed te zien of een scherm te dimmen.',
    'red-screen': 'Vul je scherm met rood om rode subpixels te controleren of als sfeerlicht.',
    'green-screen': 'Gebruik een felgroen scherm als chroma key-achtergrond of als pixelcontrole.',
    'blue-screen': 'Vul je scherm met blauw voor chroma key of om blauwe subpixels te controleren.',
    'yellow-screen': 'Maak je scherm geel voor warm licht of om rode en groene pixels te controleren.',
    'orange-screen': 'Vul je kamer met warm oranje licht, of gebruik het als foto-achtergrond.',
    'pink-screen': 'Verlicht je gezicht met zacht roze voor selfies, gesprekken of sfeer.',
    'purple-screen': 'Zet een paarse gloed aan als kamersfeer of streamingachtergrond.',
    'cyan-screen': 'Toon cyaan om groene en blauwe subpixels tegelijk te controleren.',
    'magenta-screen': 'Toon magenta om rode en blauwe subpixels te controleren en kleurzweem te zien.',
    'gray-screen': 'Toon neutraal grijs om wolken, banding en het dirty screen effect te zien.',

    // Schermtests
    'dead-pixel-test': 'Tik door 9 kleuren om dode, vastzittende of hete pixels te vinden.',
    'screen-uniformity-test': 'Bekijk egale grijze vlakken op wolken, vignettering en backlight bleed.',
    'monitor-test': 'Doorloop 7 testpatronen om kleur, gamma en scherpte te controleren.',
    'oled-gray-test': 'Doorloop grijstinten bij bijna zwart om banding en mura op OLED te zien.',
    'oled-burn-in-test': 'Wissel tussen effen kleuren om inbranden en beeldretentie op OLED te zien.',
    'screen-burn-in-test': 'Zoek naar spookbeelden en start de hersteller om nabeelden weg te werken.',
    'touch-screen-test': 'Veeg over het raster om dode zones te vinden en aanraakpunten te tellen.',
    'screen-refresh-rate-test': 'Zie je verversingssnelheid in Hz zodra de pagina geladen is.',
    'monitor-ghosting-test': 'Verhoog de snelheid tot er sporen verschijnen om ghosting en overdrive te beoordelen.',
    'frame-rate-test': 'Vergelijk 15, 24, 30 en 60 FPS naast elkaar met het maximum van je scherm.',
    'screen-color-test': 'Doorloop kleurbalken en RGB-verlopen om zweem en banding te controleren.',
    'screen-resolution-test': 'Zie meteen je schermresolutie en pixelverhouding, zonder te klikken.',

    // Effecten en geluid
    'no-signal-screen': 'Kies kleurbalken, stuiterend of blauw en ga op een tv naar volledig scherm.',
    'white-noise-generator': 'Start gelijkmatige witte ruis en stel een slaaptimer in voor de nacht.',
    'brown-noise-generator': 'Start diepe bruine ruis om te focussen of te slapen, met slaaptimer.',
    'pink-noise-generator': 'Start roze ruis als regen en vorm hem met filters en volume.',
    'broken-screen': 'Tik ergens om het glas te laten barsten en geef het apparaat dan door.',
    'hacker-typer': 'Ram op willekeurige toetsen en zie hackercode als in de film verschijnen.',
    'hacked-screen': 'Kies rood of groen, ga naar volledig scherm en laat het voor een vriend achter.',
    'visual-noise': 'Vul het scherm met bewegende pixelkorrel in zwart-wit, kleur of tint.',
    'color-cycle': 'Laat je scherm door alle kleuren glijden, of doorloop ze zelf.',
    'gradient-screen': 'Kies kleuren en een hoek voor een bewegend kleurverloop op volledig scherm.',

    // Verlichting
    'zoom-lighting': 'Maak van je scherm een zacht hoofdlicht voor je volgende videogesprek.',
    'ring-light': 'Verlicht je gezicht met een gloeiende ring op je scherm; pas grootte en warmte aan.',

    // Screensavers
    'matrix-screensaver': 'Laat digitale regen vallen en stel snelheid, kleur en tekens in.',
    'flip-clock-screensaver': 'Maak van elk vrij scherm een grote, live klapklok.',
    'dvd-screensaver': 'Kijk hoe het dvd-logo stuitert en wacht op een perfecte hoektreffer.',
    'motivational-quote-screensaver': 'Toon wisselende motiverende citaten in grote letters op een vrij scherm.',

    // Timers en hulpmiddelen
    'countdown-timer': 'Kies een voorinstelling of stel je eigen tijd in en druk op Start.',
    'pomodoro-timer': 'Druk op Start voor 25 minuten focus en neem dan 5 minuten pauze.',
    stopwatch: 'Druk op de spatiebalk om te starten en op L om een ronde op te slaan.',

    // Nepschermen
    'fake-windows-10-update': 'Ga naar volledig scherm met een nep Windows 10 update om een vriend te foppen.',
    'fake-windows-11-update': 'Toon het donkere update-scherm van Windows 11 op volledig scherm als grap.',
    'fake-blue-screen-of-death': 'Ga naar volledig scherm met een nep crashscherm en onthul dan de grap.',
    'fake-mac-update': 'Toon een nep macOS-update met een slanke voortgangsbalk op volledig scherm.',
    'fake-android-update': 'Open op een telefoon om een nep Android-systeemupdate te tonen.',
    'fake-windows-xp-update': 'Haal de jaren 2000 terug met een nep installatiescherm van Windows XP.',
    'fake-windows-xp-boot': 'Speel het klassieke opstartscherm van Windows XP af op volledig scherm.',
    'fake-chrome-os-update': 'Toon een nep update-scherm van een Chromebook met wisselende stappen.',
    'fake-ubuntu-update': 'Kijk hoe nep Ubuntu-pakketlogs door een terminal-upgrade scrollen.',
    'fake-zoom-meeting': 'Zet een nep gespreksscherm in Zoom-stijl klaar voor een grap of als rekwisiet.',
    'fake-teams-meeting': 'Toon een vergaderscherm in Teams-stijl met deelnemerstegels.',
    'fake-google-meet': 'Toon een gesprek in Meet-stijl met tegels en een rand rond de spreker.',
    'fake-slack-huddle': 'Toon een huddle in Slack-stijl met pratende ringen en een lopende timer.',
    'fake-radar-screen': 'Laat een sci-fi radar met signalen draaien als rekwisiet of achtergrond.',
  },
  backgrounds: {
    'white-background': 'Download een puur witte achtergrond in 4K, telefoon- of eigen formaat.',
    'black-background': 'Haal een echt zwarte achtergrond als PNG of als CSS, in elk formaat.',
    'orange-background': 'Download een warme oranje achtergrond voor je telefoon of desktop.',
    'gradient-background': 'Download dit vloeiende kleurverloop als PNG, of kopieer het als CSS.',
    'neon-background': 'Sla deze neongloed op als 4K-wallpaper of telefoonachtergrond.',
    'red-background': 'Download een felrode achtergrond in elk formaat, of kopieer de CSS.',
    'yellow-background': 'Download een felgele achtergrond voor presentaties, telefoons of desktops.',
    'blue-background': 'Download een strakke blauwe achtergrond als PNG in 4K of telefoonformaat.',
    'green-screen-background': 'Toon dit greenscreen op volledig scherm als chroma key, of download het.',
    'virtual-office': 'Download een virtuele kantoorachtergrond voor je volgende videogesprek.',
    'graph-paper': 'Download een ruitjespapier-raster als PNG, of kopieer het als CSS.',
    'pink-background': 'Download een roze achtergrond voor je telefoon, desktop of stories.',
    'light-pink-background': 'Download een zachte lichtroze achtergrond in elk formaat dat je nodig hebt.',
    'green-background': 'Download een frisse groene achtergrond als PNG, of kopieer de CSS.',
    'purple-background': 'Download een rijke paarse achtergrond voor je telefoon of desktop.',
    'dark-background': 'Download een donkere achtergrond die rustig is voor je ogen, in elk formaat.',
    'gold-background': 'Download een gouden verloopachtergrond voor uitnodigingen, presentaties of telefoons.',
    'aesthetic-background': 'Download een zachte aesthetic achtergrond voor je telefoon of desktop.',
    'beige-background': 'Download een warme beige achtergrond als PNG, of kopieer de CSS.',
    'pastel-background': 'Download een pastelverloop als achtergrond voor telefoons, presentaties of posts.',
  },
}
