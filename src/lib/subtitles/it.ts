import type { LocalizedSubtitles } from './types'

/** Italian subtitles: one actionable line under each H1 (see src/lib/subtitles.ts for the English set). */
export const it: LocalizedSubtitles = {
  tools: {
    // Schermi colorati (anche la home, che è lo schermo bianco)
    'white-screen': 'Rendi lo schermo bianco brillante per illuminare, pulire o cercare pixel morti.',
    'black-screen': 'Passa al nero puro per trovare pixel bloccati, fughe di luce o oscurare uno schermo.',
    'red-screen': 'Riempi lo schermo di rosso per controllare i sottopixel rossi o creare una luce d’atmosfera.',
    'green-screen': 'Usa uno schermo verde brillante come sfondo chroma key o per controllare i pixel.',
    'blue-screen': 'Riempi lo schermo di blu per il chroma key o per controllare i sottopixel blu.',
    'yellow-screen': 'Rendi lo schermo giallo per una luce calda o per controllare i pixel rossi e verdi.',
    'orange-screen': 'Riempi la stanza di una calda luce arancione o usala come sfondo per le foto.',
    'pink-screen': 'Illumina il viso con un rosa morbido per selfie, chiamate o luci d’atmosfera.',
    'purple-screen': 'Crea un bagliore viola per l’atmosfera della stanza o come sfondo per lo streaming.',
    'cyan-screen': 'Mostra il ciano per controllare insieme i sottopixel verdi e blu.',
    'magenta-screen': 'Mostra il magenta per controllare i sottopixel rossi e blu e scoprire dominanti di colore.',
    'gray-screen': 'Mostra un grigio neutro per rivelare macchie, banding e dirty screen effect.',

    // Test dello schermo
    'dead-pixel-test': 'Scorri 9 colori per trovare pixel morti, bloccati o caldi.',
    'screen-uniformity-test': 'Controlla campi grigi uniformi per macchie, vignettatura e fughe di retroilluminazione.',
    'monitor-test': 'Scorri 7 schermate di prova per controllare colori, gamma e nitidezza.',
    'oled-gray-test': 'Scorri i grigi quasi neri per scoprire banding e mura sugli OLED.',
    'oled-burn-in-test': 'Fai scorrere colori pieni per scoprire burn-in e ritenzione d’immagine sugli OLED.',
    'screen-burn-in-test': 'Cerca immagini fantasma, poi avvia il correttore per eliminare la ritenzione.',
    'touch-screen-test': 'Scorri sulla griglia per trovare zone morte e contare i punti multitouch.',
    'screen-refresh-rate-test': 'Vedi la frequenza di aggiornamento in Hz appena si carica la pagina.',
    'monitor-ghosting-test': 'Aumenta la velocità finché compaiono le scie per valutare ghosting e overdrive.',
    'frame-rate-test': 'Confronta 15, 24, 30 e 60 FPS con il massimo del tuo schermo, fianco a fianco.',
    'screen-color-test': 'Scorri barre di colore e rampe RGB per controllare dominanti e banding.',
    'screen-resolution-test': 'Vedi subito risoluzione e rapporto pixel del tuo schermo, senza clic.',

    // Effetti e suoni
    'no-signal-screen': 'Scegli barre di colore, rimbalzo o blu, poi passa a schermo intero su una TV.',
    'white-noise-generator': 'Avvia un rumore bianco costante e imposta un timer per dormire.',
    'brown-noise-generator': 'Avvia un rumore marrone profondo per concentrarti o dormire, con timer.',
    'pink-noise-generator': 'Avvia un rumore rosa simile alla pioggia e regolalo con filtri e volume.',
    'broken-screen': 'Tocca un punto qualsiasi per rompere il vetro, poi passa il dispositivo.',
    'hacker-typer': 'Premi tasti a caso e guarda comparire codice da hacker come nei film.',
    'hacked-screen': 'Scegli rosso o verde, passa a schermo intero e lascialo trovare a un amico.',
    'visual-noise': 'Riempi lo schermo di grana animata in mono, a colori o con una tinta.',
    'color-cycle': 'Lascia scorrere lo schermo tra tutti i colori, o passa da uno all’altro tu.',
    'gradient-screen': 'Scegli colori e angolo per creare una sfumatura animata a schermo intero.',

    // Luci
    'zoom-lighting': 'Trasforma lo schermo in una luce morbida per la tua prossima videochiamata.',
    'ring-light': 'Illumina il viso con un anello luminoso sullo schermo; regola dimensione e calore.',

    // Salvaschermi
    'matrix-screensaver': 'Avvia la pioggia digitale e regolane velocità, colore e caratteri.',
    'flip-clock-screensaver': 'Trasforma qualsiasi schermo libero in un grande orologio a palette.',
    'dvd-screensaver': 'Guarda il logo DVD rimbalzare e aspetta il colpo perfetto nell’angolo.',
    'motivational-quote-screensaver': 'Mostra citazioni motivazionali a rotazione a caratteri grandi su uno schermo libero.',

    // Timer e utilità
    'countdown-timer': 'Scegli una preimpostazione o imposta il tuo tempo, poi premi Avvia.',
    'pomodoro-timer': 'Premi Avvia per 25 minuti di concentrazione, poi fai una pausa di 5 minuti.',
    stopwatch: 'Premi la barra spaziatrice per avviare e L per registrare un giro.',

    // Schermi finti
    'fake-windows-10-update': 'Passa a schermo intero con un finto aggiornamento di Windows 10 per ingannare un amico.',
    'fake-windows-11-update': 'Mostra a schermo intero la schermata scura di aggiornamento di Windows 11 per uno scherzo.',
    'fake-blue-screen-of-death': 'Passa a schermo intero con una finta schermata di crash, poi svela lo scherzo.',
    'fake-mac-update': 'Mostra a schermo intero un finto aggiornamento macOS con una sottile barra di avanzamento.',
    'fake-android-update': 'Aprilo su un telefono per mostrare un finto aggiornamento di sistema Android.',
    'fake-windows-xp-update': 'Torna agli anni 2000 con una finta schermata di installazione di Windows XP.',
    'fake-windows-xp-boot': 'Mostra a schermo intero la classica schermata di avvio di Windows XP.',
    'fake-chrome-os-update': 'Mostra una finta schermata di aggiornamento del Chromebook con stati che cambiano.',
    'fake-ubuntu-update': 'Guarda scorrere finti log dei pacchetti Ubuntu in un aggiornamento da terminale.',
    'fake-zoom-meeting': 'Prepara una finta chiamata in stile Zoom per uno scherzo o come oggetto di scena.',
    'fake-teams-meeting': 'Mostra una riunione in stile Teams con i riquadri dei partecipanti.',
    'fake-google-meet': 'Mostra una chiamata in stile Meet con riquadri e il contorno di chi parla.',
    'fake-slack-huddle': 'Mostra un huddle in stile Slack con anelli di chi parla e un timer attivo.',
    'fake-radar-screen': 'Avvia una scansione radar fantascientifica con segnali, come oggetto di scena o sfondo.',
  },
  backgrounds: {
    'white-background': 'Scarica uno sfondo bianco puro in 4K, per telefono o in dimensione personalizzata.',
    'black-background': 'Ottieni uno sfondo nero assoluto in PNG o come CSS, in qualsiasi dimensione.',
    'orange-background': 'Scarica uno sfondo arancione caldo per il telefono o il desktop.',
    'gradient-background': 'Scarica questa sfumatura morbida in PNG o copiala come CSS.',
    'neon-background': 'Salva questo bagliore neon come wallpaper 4K o sfondo per il telefono.',
    'red-background': 'Scarica uno sfondo rosso deciso in qualsiasi dimensione, o copia il CSS.',
    'yellow-background': 'Scarica uno sfondo giallo brillante per slide, telefoni o desktop.',
    'blue-background': 'Scarica uno sfondo blu pulito in PNG, in 4K o formato telefono.',
    'green-screen-background': 'Mostra questo green screen a schermo intero come chroma key, o scaricalo.',
    'virtual-office': 'Scarica uno sfondo da ufficio virtuale per la tua prossima videochiamata.',
    'graph-paper': 'Scarica una griglia di carta millimetrata in PNG, o copiala come CSS.',
    'pink-background': 'Scarica uno sfondo rosa per il telefono, il desktop o le storie.',
    'light-pink-background': 'Scarica uno sfondo rosa chiaro e morbido nella dimensione che ti serve.',
    'green-background': 'Scarica uno sfondo verde fresco in PNG, o copia il CSS.',
    'purple-background': 'Scarica uno sfondo viola intenso per il telefono o il desktop.',
    'dark-background': 'Scarica uno sfondo scuro che riposa gli occhi, in qualsiasi dimensione.',
    'gold-background': 'Scarica uno sfondo dorato sfumato per inviti, slide o telefoni.',
    'aesthetic-background': 'Scarica uno sfondo estetico e delicato per il telefono o il desktop.',
    'beige-background': 'Scarica uno sfondo beige caldo in PNG, o copia il CSS.',
    'pastel-background': 'Scarica uno sfondo pastello sfumato per telefoni, slide o post.',
  },
}
