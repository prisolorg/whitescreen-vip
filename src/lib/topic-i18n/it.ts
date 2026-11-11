import type { TopicTranslation } from './types'

export const it: TopicTranslation = {
  hubs: {
    '/color-screens': {
      intro:
        'Gli schermi colorati riempiono tutto il display con un unico colore pieno. Scegli un colore, premi F per lo schermo intero e ogni pixel mostra esattamente quel colore. Servono a trovare pixel morti e bloccati, come luce morbida, come sfondo per il chroma key e come schermo calmo e senza distrazioni.',
      details: [
        {
          heading: 'Quale colore usare?',
          text: 'Il bianco per illuminare e pulire, il nero per nascondere lo schermo o controllare le perdite di luce, e rosso, verde e blu puri per testare ogni subpixel. Il grigio rivela una luminosità irregolare, mentre arancione o rosa caldi diventano luce notturna o luce per selfie.',
        },
        {
          heading: 'Valori di colore esatti',
          text: 'Ogni schermo usa un valore esadecimale esatto (per esempio #FF0000 per il rosso), così i test sono affidabili. Puoi comunque inserire qualsiasi codice e scaricare qualsiasi colore in PNG fino a 8K.',
        },
      ],
      faqs: [
        { question: 'Come rendo tutto lo schermo di un colore?', answer: 'Apri la pagina del colore e premi F o fai clic su Schermo intero. Il browser nasconde le barre e mostra solo il colore. Esc per uscire.' },
        { question: 'Funzionano su smartphone e TV?', answer: 'Sì. Funzionano in ogni browser moderno, anche su Android, iPhone, Smart TV e console. In Safari su iPhone il colore riempie la finestra del browser.' },
        { question: 'Posso scaricare un’immagine a tinta unita?', answer: 'Sì. Ogni pagina colore ha un PNG gratuito di quel colore, e il pannello di download crea qualsiasi dimensione da 720p a 8K.' },
      ],
    },
    '/screen-tests': {
      intro:
        'I test dello schermo sono schermate e misure a schermo intero che mostrano se il display funziona bene. Usali per trovare pixel morti, misurare la vera frequenza in Hz, vedere ghosting, perdite di luce e burn-in, controllare le zone morte del touch screen e valutare i colori, tutto nel browser e senza installare nulla.',
      details: [
        {
          heading: 'Quale test fare per primo?',
          text: 'Su uno schermo nuovo o usato inizia con il test dei pixel morti e quello di uniformità: trovano i difetti più spesso coperti da reso o garanzia. I gamer aggiungano frequenza e ghosting, chi ha smartphone o tablet il test touch, e chi ha un OLED i test di burn-in.',
        },
        {
          heading: 'I test nel browser sono precisi?',
          text: 'Le schermate usano valori di pixel esatti e il tempo viene dal clock dei fotogrammi del browser, quindi il risultato corrisponde a ciò che lo schermo mostra davvero. Non sostituiscono un colorimetro per la calibrazione professionale.',
        },
      ],
      faqs: [
        { question: 'Come controllo se il mio monitor ha problemi?', answer: 'Pulisci lo schermo, poi fai il test dei pixel morti, quello di uniformità in una stanza buia e quello della frequenza. In tutto circa cinque minuti.' },
        { question: 'Funzionano su TV e smartphone?', answer: 'Sì. Apri la pagina nel browser del dispositivo e passa a schermo intero. Il test touch è pensato per smartphone e tablet.' },
        { question: 'I test sono gratuiti?', answer: 'Sì. Tutti sono gratuiti, senza registrazione, e funzionano solo sul tuo dispositivo.' },
      ],
    },
    '/screensavers': {
      intro:
        'Gli screensaver online funzionano nel browser invece di essere installati sul computer. Aprine uno, passa a schermo intero e gira su qualsiasi dispositivo: PC, Mac, Chromebook, Smart TV o un vecchio tablet sulla scrivania. Scegli la pioggia digitale di Matrix, il logo DVD che rimbalza, un orologio retrò a palette o citazioni motivazionali.',
      details: [
        {
          heading: 'Perché uno screensaver nel browser?',
          text: 'Funziona su dispositivi senza impostazioni per lo screensaver, come Smart TV e Chromebook, non richiede installazione e tiene acceso lo schermo mentre è attivo: ideale per reception, scrivanie e dirette.',
        },
      ],
      faqs: [
        { question: 'Uno screensaver online impedisce la sospensione del computer?', answer: 'A schermo intero, i browser compatibili tengono acceso lo schermo con l’API Screen Wake Lock, così resta attivo finché non esci.' },
        { question: 'Posso usarli su una Smart TV?', answer: 'Sì. Apri la pagina nel browser della TV e premi il pulsante dello schermo intero.' },
      ],
    },
    '/prank-screens': {
      intro:
        'Gli schermi scherzo sono schermate false, realistiche e innocue che girano nel browser: aggiornamenti di Windows, macOS, ChromeOS e Android, la schermata blu della morte, uno schermo hackerato e finte riunioni. Aprine uno, passa a schermo intero e premi Esc quando lo scherzo è finito. Non si installa né si modifica nulla.',
      details: [
        {
          heading: 'Scherzi responsabili',
          text: 'Fallo breve e svela lo scherzo. Non usare mai un finto aggiornamento o errore per spaventare qualcuno e fargli pagare o dare accesso a un dispositivo: è una truffa, non uno scherzo.',
        },
        {
          heading: 'Anche come oggetti di scena',
          text: 'Registi, streamer, insegnanti ed escape room li usano come oggetti di scena credibili, perché in camera sembrano veri senza toccare un sistema reale.',
        },
      ],
      faqs: [
        { question: 'Sono sicuri?', answer: 'Sì. Sono immagini e animazioni in una scheda del browser. Non possono installare nulla, leggere file o cambiare impostazioni.' },
        { question: 'Come esco da uno schermo scherzo?', answer: 'Premi Esc, oppure muovi il mouse o tocca lo schermo per mostrare il pulsante chiudi. Anche chiudere la scheda funziona.' },
      ],
    },
    '/visual-effects': {
      intro:
        'Gli effetti visivi trasformano lo schermo in qualcosa di più di un’immagine: un generatore di rumore con neve TV, una ring light o luce per videochiamate, uno schermo rotto, un terminale da hacker, rumore animato, sfumature e cicli di colore. Tutti funzionano a schermo intero nel browser, su smartphone, computer e TV.',
      details: [
        {
          heading: 'Luce, suono e divertimento in un unico posto',
          text: 'Usa la ring light e la luce per Zoom per illuminarti il viso, i generatori di rumore per concentrarti o dormire, e lo schermo rotto e l’Hacker Typer per scherzi e video.',
        },
      ],
      faqs: [
        { question: 'Gli effetti lampeggianti sono sicuri?', answer: 'Lo sfarfallio veloce può scatenare crisi nelle persone con epilessia fotosensibile. Riduci la velocità o scegli un effetto tranquillo se sei sensibile.' },
        { question: 'I generatori di rumore consumano dati?', answer: 'No. Il suono viene generato sul tuo dispositivo, quindi non c’è streaming.' },
      ],
    },
    '/online-timers': {
      intro:
        'I timer online mostrano grandi cifre a schermo intero leggibili dall’altra parte della stanza. Usa il conto alla rovescia per lezioni, riunioni ed esami, il Pomodoro per lavorare a blocchi di 25 minuti e il cronometro con giri per allenamenti e gare. Restano precisi anche nelle schede in background.',
      details: [
        {
          heading: 'Precisi in background',
          text: 'Ogni timer conta sull’orologio del dispositivo invece di contare gli scatti, quindi resta esatto anche quando il browser rallenta le schede nascoste, e il titolo della scheda mostra il tempo rimasto.',
        },
      ],
      faqs: [
        { question: 'Il timer suona se la scheda è in background?', answer: 'Sì, finché la scheda resta aperta. Il segnale suona allo scadere del tempo, se è attivo.' },
        { question: 'Posso mostrare un timer su un proiettore o una TV?', answer: 'Sì. Aprilo nel browser e premi F per lo schermo intero.' },
      ],
    },
  },
  colorAnswer: {
    template: '{subject} riempie tutto il display di {word} puro ({hex}). Fai clic su Schermo intero o premi F e ogni pixel mostra lo stesso colore, senza barre né distrazioni. {tail}',
    features: ['{word} puro {hex} o qualsiasi colore esadecimale', 'Schermo intero con un clic e regolazione della luminosità', 'Download PNG gratuito da 720p fino a 8K'],
    benefits: ['Funziona subito su smartphone, laptop, monitor e Smart TV', 'Nessuna app, nessuna registrazione, niente da installare'],
  },
  colors: {
    red: { subject: 'Uno schermo rosso', word: 'rosso', tail: 'Si accendono solo i subpixel rossi, così i subpixel verdi o blu morti o bloccati si vedono subito. Serve anche come luce notturna rossa che preserva la visione al buio.', feature: 'Le frecce passano da rosso a verde e blu', benefit: 'Trova in pochi secondi subpixel verdi o blu bloccati' },
    green: { subject: 'Uno schermo verde', word: 'verde', tail: 'I creator lo usano come green screen veloce, e poiché accende solo i subpixel verdi, quelli rossi o blu difettosi risaltano in un test dei pixel.', feature: 'Verde chroma brillante per OBS, Premiere o CapCut', benefit: 'Un green screen gratis quando non hai un telo verde' },
    blue: { subject: 'Uno schermo blu', word: 'blu', tail: 'Accende solo i subpixel blu per i test dei pixel e funge anche da sfondo blu per il chroma key o da luce fredda e calma per le foto.', feature: 'Blu puro per test dei subpixel e chroma key blu', benefit: 'Controlla il canale blu e rende visibili i pixel bloccati' },
    yellow: { subject: 'Uno schermo giallo', word: 'giallo', tail: 'Il giallo accende insieme i subpixel rossi e verdi, così un subpixel blu morto o una dominante di colore si vedono chiaramente. È anche una luce calda e allegra per le foto.', feature: 'Giallo esatto con rosso e verde al massimo', benefit: 'Individua subpixel blu morti e dominanti irregolari' },
    orange: { subject: 'Uno schermo arancione', word: 'arancione', tail: 'Il suo tono caldo ha meno luce blu del bianco, per questo molti lo usano come luce notturna morbida, luce d’atmosfera da tramonto o luce calda di riempimento per i video.', feature: 'Regolazione della luminosità per una luce notturna calda e tenue', benefit: 'Una luce calda con molto meno blu di uno schermo bianco' },
    pink: { subject: 'Uno schermo rosa', word: 'rosa', tail: 'Il rosa acceso dà una luce morbida e lusinghiera per selfie e trucco e crea atmosfera per feste, dirette e camere.', feature: 'Rosa acceso di default, con tonalità più chiare o scure', benefit: 'Luce morbida e lusinghiera per selfie e trucco' },
    purple: { subject: 'Uno schermo viola', word: 'viola', tail: 'Il viola mescola luce rossa e blu: è una luce d’atmosfera d’effetto per dirette, postazioni gaming e feste, e un modo rapido per verificare che il canale verde sia spento.', feature: 'Viola intenso con tonalità da lavanda a violetto', benefit: 'Luce d’atmosfera immediata per dirette e feste' },
    cyan: { subject: 'Uno schermo ciano', word: 'ciano', tail: 'Il ciano accende insieme verde e blu, così un subpixel rosso bloccato o un canale mancante si notano facilmente. È anche una luce d’accento fredda e nitida.', feature: 'Ciano puro per controllare i canali verde e blu', benefit: 'Mostra subpixel rossi difettosi e dominanti di colore' },
    magenta: { subject: 'Uno schermo magenta', word: 'magenta', tail: 'Il magenta accende rosso e blu lasciando spento il verde, così subpixel verdi bloccati e dominanti verdi risultano evidenti nei test dello schermo.', feature: 'Magenta puro per i canali rosso e blu', benefit: 'Mostra subpixel verdi bloccati e dominanti verdi' },
    gray: { subject: 'Uno schermo grigio', word: 'grigio', tail: 'Un grigio medio è il modo standard per notare effetto schermo sporco, clouding, vignettatura e banding che i colori accesi nascondono.', feature: 'Passa tra grigio chiaro, medio e scuro', benefit: 'Rivela problemi di uniformità ed effetto schermo sporco' },
  },
}
