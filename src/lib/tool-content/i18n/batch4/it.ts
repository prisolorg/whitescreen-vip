import type { LocalizedToolContent, ToolTranslations } from '../types'
import type { ToolFaq } from '../../types'

const EXIT: ToolFaq = { question: 'Come esco dalla finta schermata?', answer: 'Premi Esc, oppure muovi il mouse o tocca lo schermo per mostrare il pulsante chiudi. Anche chiudere la scheda funziona.' }
const brandFaq = (brand: string): ToolFaq => ({ question: `È collegato a ${brand}?`, answer: `No. È una ricostruzione indipendente a scopo di intrattenimento, non collegata, approvata o sponsorizzata da ${brand}. I nomi dei prodotti appartengono ai rispettivi proprietari.` })

function update(name: string, brand: string, glance: LocalizedToolContent['glance'], extra: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Imposta con il cursore della velocità quanto in fretta sale la percentuale.',
      'Fai clic su Schermo intero o premi F perché la simulazione riempia lo schermo e nasconda il browser.',
      'Allontanati e lascia avanzare il progresso. Premi Pausa per farlo sembrare bloccato.',
      'Premi Esc per uscire e svelare lo scherzo.',
    ],
    useCases: [
      { title: 'Scherzi in ufficio', description: 'Fai credere a un collega che il dispositivo si stia aggiornando, poi svela tutto.' },
      { title: 'Fare una pausa', description: 'Sembra che tu sia occupato quando ti allontani dalla scrivania.' },
      { title: 'Oggetto di scena per film e video', description: `Mostra un aggiornamento di ${name} credibile sul set.` },
      { title: 'Nostalgia', description: 'Rivedi una classica schermata di sistema per divertimento.' },
    ],
    faqs: [
      { question: 'È un aggiornamento reale o qualcosa di dannoso?', answer: 'No. È una simulazione visiva innocua in una normale scheda del browser. Non modifica il dispositivo, non installa nulla e non chiede dati. Premi Esc per uscire quando vuoi.' },
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
      'Modifica il titolo della riunione mostrato in alto.',
      'Se vuoi, attiva l’anteprima della fotocamera: resta sul tuo dispositivo e non viene mai registrata né inviata.',
      'Premi F o Schermo intero per una chiamata convincente a tutto schermo.',
      'Premi Esc per uscire quando vuoi.',
    ],
    useCases: [
      { title: 'Oggetti di scena video', description: 'Gira una scena con una riunione senza una vera chiamata.' },
      { title: 'Mockup di interfaccia', description: 'Usa il layout di una chiamata in presentazioni o tutorial.' },
      { title: 'Scherzi innocui', description: 'Fingi di essere «in riunione» per una risata.' },
      { title: 'Esercitarsi', description: 'Prova come appari in camera prima di una vera chiamata.' },
    ],
    faqs: [
      { question: 'È una chiamata reale o qualcosa di dannoso?', answer: 'No. È una simulazione visiva innocua in una normale scheda del browser. Non si collega a nessun servizio, non installa nulla e non chiede dati.' },
      brandFaq(brand),
      { question: 'Usa la mia fotocamera o il microfono?', answer: 'Solo se attivi l’anteprima della fotocamera. Il video resta sul tuo dispositivo e non viene mai registrato né caricato. Il microfono non viene mai usato.' },
      EXIT,
      ...(extra ? [extra] : []),
    ],
  }
}

export const it: ToolTranslations = {
  'oled-gray-test': {
    glance: {
      answer: 'Un test del grigio OLED mostra grigi molto scuri vicino al nero, dove i pannelli OLED mostrano più spesso problemi. Rivela banding vicino al nero, mura (macchie), linee verticali e sfumature irregolari che i contenuti chiari nascondono su TV, monitor e smartphone OLED.',
      features: ['Grigi quasi neri dall’1% al 20%, più una rampa', 'Campi a schermo intero senza sovrapposizioni', 'Avanzamento manuale per confrontare con calma', 'Funziona su smartphone, TV e monitor OLED'],
      benefits: ['Controlla un OLED nuovo entro il periodo di reso', 'Trova il banding prima di calibrare', 'Gratis e veloce'],
    },
    steps: ['Spegni le luci e imposta lo schermo sulla luminosità abituale.', 'Premi F per lo schermo intero e parti dal livello 5%.', 'Scendi all’1–3% per vedere dove il pannello schiaccia i neri o si macchia.', 'Prova la rampa di grigi per cercare salti visibili tra tonalità vicine.'],
    useCases: [
      { title: 'Uniformità vicino al nero', description: 'I grigi molto scuri mostrano macchie e linee verticali sui pannelli OLED.' },
      { title: 'Neri schiacciati', description: 'Verifica se le tonalità più basse si vedono o si fondono col nero.' },
      { title: 'Sfarfallio a bassa luminosità', description: 'Alcuni pannelli sfarfallano con grigi e luminosità molto bassi.' },
      { title: 'Confrontare dispositivi', description: 'Confronta due smartphone o TV affiancati con le stesse impostazioni.' },
    ],
    faqs: [
      { question: 'Perché i grigi quasi neri sembrano macchiati sugli OLED?', answer: 'Ogni pixel OLED è pilotato singolarmente e piccole differenze diventano visibili con pochissima luce. Un po’ di irregolarità è normale su tutti gli OLED.' },
      { question: 'Il test serve anche per gli LCD?', answer: 'Sì, ma sugli LCD i problemi vicino al nero appaiono soprattutto come perdite di luce o clouding. Per quelli usa il test di uniformità.' },
      { question: 'Perché non vedo il livello 1%?', answer: 'Molti schermi e modalità immagine schiacciano le tonalità più scure. Alza un po’ la luminosità o prova un’altra modalità.' },
    ],
  },
  'oled-burn-in-test': {
    glance: {
      answer: 'Un test di burn-in OLED mostra colori pieni a schermo intero per far emergere loghi sbiaditi, barre di stato, tasti di navigazione o HUD di gioco lasciati dall’usura irregolare dei pixel. Il burn-in è permanente; la ritenzione d’immagine è temporanea e sparisce. Entrambi si vedono meglio su grigio, rosso e blu.',
      features: ['Campi grigio, rosso, verde, blu e bianco', 'Frecce per cambiare colore in fretta', 'Consigli per distinguere burn-in e ritenzione', 'Pensato per smartphone, TV e monitor OLED'],
      benefits: ['Controlla uno smartphone o una TV OLED usati', 'Individua la ritenzione per tempo', 'Nessuna app o download'],
    },
    steps: ['Premi F per lo schermo intero e parti da un grigio medio, poi prova rosso, verde, blu e bianco.', 'Cerca forme tenui come barre delle applicazioni, loghi, tastiere o loghi dei canali.', 'Usa il cambio automatico se cerchi una ritenzione temporanea.', 'Se le forme spariscono in pochi minuti, era ritenzione temporanea e non burn-in.'],
    useCases: [
      { title: 'Comprare un OLED usato', description: 'Controlla uno smartphone o una TV di seconda mano prima di comprarli.' },
      { title: 'HUD dei giochi', description: 'Cerca barre della vita o minimappe dopo lunghe sessioni.' },
      { title: 'Ritenzione o burn-in', description: 'Aiuta a distinguere la ritenzione temporanea dal burn-in permanente.' },
      { title: 'Garanzia', description: 'Fotografa il burn-in su un colore pieno per l’assistenza.' },
    ],
    faqs: [
      { question: 'Questo strumento ripara il burn-in?', answer: 'No. Il burn-in permanente è usura irregolare dei pixel e nessun sito può invertirla. Usa la funzione di refresh dei pixel dello schermo e segui il produttore.' },
      { question: 'Che differenza c’è tra ritenzione e burn-in?', answer: 'La ritenzione è temporanea e sparisce dopo altri contenuti. Il burn-in è permanente e resta visibile sui colori pieni.' },
      { question: 'Quale colore mostra meglio il burn-in?', answer: 'Il grigio medio e il rosso di solito lo mostrano più chiaramente, ma controlla tutti i colori perché l’usura varia per subpixel.' },
    ],
  },
  'screen-burn-in-test': {
    glance: {
      answer: 'Un test di burn-in dello schermo ti permette di cercare immagini fantasma su qualsiasi display e poi avviare un correttore che fa scorrere colori e rumore. La ritenzione temporanea spesso sparisce dopo 10–30 minuti di correttore; il burn-in permanente dovuto a pixel usurati non si ripara via software.',
      features: ['Modalità controllo con colori pieni e frecce', 'Modalità correttore: passata, ciclo di colori e rumore', 'Timer che ferma il correttore da solo', 'Per schermi OLED, plasma e LCD'],
      benefits: ['Elimina la ritenzione temporanea senza app', 'Capisci se è ritenzione o burn-in', 'Gratis e sicuro per lo schermo'],
    },
    steps: ['Alza la luminosità e passa a schermo intero in una stanza poco illuminata.', 'In modalità controllo scorri i colori con le frecce o i pulsanti. Il grigio al 50% mostra meglio il burn-in.', 'Se vedi forme, passa al correttore, scegli la passata bianca (o un motivo lampeggiante se non ti disturba) e lascialo 10–30 minuti.', 'Ricontrolla. Le forme che restano dopo più passate sono di solito burn-in permanente.'],
    useCases: [
      { title: 'Comprare uno schermo usato', description: 'Trova loghi o barre impressi prima di pagare.' },
      { title: 'Dopo un uso statico', description: 'Controlla monitor che hanno mostrato dashboard, ticker o giochi per ore.' },
      { title: 'Eliminare la ritenzione', description: 'Avvia il correttore quando resta un’immagine fantasma.' },
      { title: 'Garanzia', description: 'Fotografa il burn-in su grigio per l’assistenza.' },
    ],
    faqs: [
      { question: 'Che differenza c’è tra ritenzione e burn-in?', answer: 'La ritenzione è temporanea e sparisce dopo minuti o ore di contenuti vari. Il burn-in è usura permanente dei pixel.' },
      { question: 'Il correttore ripara il burn-in?', answer: 'Aiuta con la ritenzione temporanea. Il burn-in permanente sugli OLED è usura irregolare che nessun motivo annulla; il refresh dei pixel del tuo dispositivo è l’opzione migliore.' },
      { question: 'Quale colore mostra meglio il burn-in?', answer: 'Un grigio medio o scuro lo mostra di solito più chiaramente, seguito da rosso, verde e blu.' },
    ],
  },
  'monitor-ghosting-test': {
    glance: {
      answer: 'Un test di ghosting fa scorrere oggetti sullo schermo per vedere le scie lasciate da pixel lenti. Copie tenui dietro l’oggetto sono ghosting; aloni chiari o invertiti sono overshoot da overdrive eccessivo. Usalo per scegliere l’impostazione di overdrive migliore.',
      features: ['Tre corsie in movimento con velocità regolabile', 'Sfondi chiari e scuri per transizioni diverse', 'Griglia di riferimento per valutare la scia', 'Si adatta alla frequenza reale dello schermo'],
      benefits: ['Scegli l’overdrive giusto per giocare', 'Confronta monitor prima di comprare o rendere', 'Alternativa gratuita ai test con fotocamera'],
    },
    steps: ['Imposta il monitor alla frequenza più alta e passa a schermo intero.', 'Segui il bersaglio con lo sguardo. Cerca scie dietro e aloni sui bordi.', 'Cambia velocità e prova ogni livello di overdrive o tempo di risposta nel menu del monitor.', 'Metti in pausa per vedere un fotogramma fermo; il bersaglio deve essere nitido.'],
    useCases: [
      { title: 'Regolare l’overdrive', description: 'Scegli il livello con la scia più corta e senza ghosting inverso.' },
      { title: 'Scie nere sui VA', description: 'La corsia scura mostra la scia violacea tipica dei pannelli VA.' },
      { title: 'Confrontare monitor', description: 'Usa la stessa velocità su due schermi affiancati.' },
      { title: 'Controllare un acquisto', description: 'Verifica che il movimento sia come promesso.' },
    ],
    faqs: [
      { question: 'Che cos’è il ghosting?', answer: 'Una scia tenue dietro gli oggetti in movimento, perché i pixel non cambiano colore abbastanza in fretta prima del fotogramma successivo.' },
      { question: 'Che cos’è il ghosting inverso?', answer: 'Un alone chiaro o colorato attorno agli oggetti, perché l’overdrive spinge i pixel oltre il loro obiettivo. Abbassa l’overdrive per correggerlo.' },
      { question: 'Perché il bersaglio sembra sfocato anche senza ghosting?', answer: 'È la sfocatura sample-and-hold: gli occhi seguono l’oggetto mentre ogni fotogramma resta fermo. Frequenze più alte o una modalità di retroilluminazione stroboscopica la riducono.' },
    ],
  },
  'frame-rate-test': {
    glance: {
      answer: 'Un test degli FPS mostra lo stesso movimento a diversi fotogrammi al secondo affiancati: 15, 24, 30, 60 e il massimo del tuo schermo. Rende visibile la differenza tra movimento a scatti e fluido e mostra perché i film a 24 FPS e i giochi a 60 FPS sembrano così diversi.',
      features: ['Cinque corsie a 15, 24, 30, 60 FPS e massimo', 'Velocità regolabile per accentuare o ammorbidire', 'Mostra la frequenza massima misurata', 'Pausa e schermo intero'],
      benefits: ['Vedi cosa aggiunge un monitor ad alta frequenza', 'Spiega gli FPS a studenti o spettatori', 'Funziona in ogni browser moderno'],
    },
    steps: ['Guarda ogni corsia; si muovono tutte alla stessa velocità.', 'Alza la velocità per vedere meglio gli scatti.', 'Confronta la corsia a 60 FPS con quella massima su uno schermo ad alta frequenza.', 'Premi F o tocca due volte per lo schermo intero, ed Esc per uscire.'],
    useCases: [
      { title: 'Impostazioni dei giochi', description: 'Decidi se più FPS valgono meno dettagli grafici.' },
      { title: 'Produzione video', description: 'Capisci perché il cinema usa 24 FPS e lo sport 50 o 60.' },
      { title: 'Mostrarlo agli amici', description: 'Chiudi il dibattito «l’occhio non vede oltre 30 FPS».' },
      { title: 'Scegliere uno schermo', description: 'Vedi cosa aggiunge uno schermo a 120 o 144 Hz.' },
    ],
    faqs: [
      { question: 'Perché la corsia massima sembra a 60 FPS?', answer: 'Lo schermo mostra al massimo un fotogramma per aggiornamento. Su uno schermo a 60 Hz le corsie a 60 FPS e massima sono uguali.' },
      { question: 'Perché 24 FPS qui scatta e al cinema no?', answer: 'Le cineprese registrano sfocatura di movimento in ogni fotogramma, che ammorbidisce il movimento. Questo test usa fotogrammi nitidi.' },
      { question: 'Quanti FPS servono per giocare?', answer: 'Almeno 60 FPS sono fluidi nella maggior parte dei giochi; i giocatori competitivi puntano alla frequenza di un monitor a 144 Hz o più.' },
    ],
  },
  'screen-color-test': {
    glance: {
      answer: 'Un test dei colori dello schermo mostra barre di colore, rampe RGB e schermate di saturazione per valutare quanto il display riproduce fedelmente i colori. Cerca banding nelle sfumature, luci bruciate, tonalità mancanti e dominanti per decidere se regolare l’immagine.',
      features: ['Barre di colore in stile SMPTE', 'Rampe di rosso, verde, blu e grigio', 'Schermate di saturazione e incarnato', 'Schermo intero con navigazione da tastiera'],
      benefits: ['Trova subito banding e dominanti', 'Confronta le modalità immagine', 'Gratis, senza colorimetro'],
    },
    steps: ['Usa la modalità immagine predefinita o calibrata.', 'Premi F per lo schermo intero e cambia schermata con i pulsanti o le frecce.', 'Nelle rampe cerca passaggi morbidi senza gradini né perdita di dettaglio nelle zone chiare.', 'Confronta la stessa schermata su un altro display.'],
    useCases: [
      { title: 'Trovare dominanti', description: 'Grigi e bianchi devono sembrare neutri, senza tinta rosa o verde.' },
      { title: 'Luci bruciate', description: 'Verifica che i gradini più chiari di ogni canale restino distinguibili.' },
      { title: 'Banding', description: 'Le rampe rivelano scalini da pannelli a 6 bit o elaborazione pesante.' },
      { title: 'Confronto diretto', description: 'Confronta un portatile e un monitor esterno.' },
    ],
    faqs: [
      { question: 'Posso calibrare il monitor con questo?', answer: 'Puoi fare regolazioni approssimative a occhio, ma una vera calibrazione richiede un colorimetro e un software dedicato.' },
      { question: 'Perché le rampe mostrano gradini?', answer: 'Di solito indicano poca profondità colore del pannello o dell’elaborazione. Anche le modalità notte e alcuni preset causano banding.' },
      { question: 'Perché i colori cambiano tra smartphone e monitor?', answer: 'I display differiscono per gamut, punto di bianco ed elaborazione. Alcuni regolano anche i colori in base alla luce ambiente.' },
    ],
  },
  'no-signal-screen': {
    glance: {
      answer: 'Uno schermo «Nessun segnale» mostra il messaggio tipico di una TV o di un monitor che non riceve nulla da HDMI o cavo. A schermo intero, con barre di colore e un riquadro che si sposta, è uno scherzo convincente, un oggetto di scena o una schermata d’attesa.',
      features: ['Barre di colore classiche o sfondo blu', 'Riquadro «Nessun segnale» che si sposta come su una vera TV', 'Tono di prova da 1 kHz opzionale e nome ingresso modificabile', 'Schermo intero con cursore nascosto'],
      benefits: ['Scherzo facile e innocuo', 'Oggetto di scena per film, escape room e set', 'Funziona sulle Smart TV dal browser'],
    },
    steps: ['Scegli uno stile: barre di colore classiche, schermo nero con messaggio che rimbalza o schermata d’ingresso blu.', 'Modifica il messaggio e il nome dell’ingresso, come «HDMI 1».', 'Attiva se vuoi il tono di prova da 1 kHz: parte in muto e suona solo dopo un clic.', 'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.'],
    useCases: [
      { title: 'Oggetto di scena per foto e film', description: 'Allestisci un set con una TV scollegata credibile.' },
      { title: 'Pause in diretta', description: 'Usa una schermata «nessun segnale» mentre fai una pausa.' },
      { title: 'Estetica retrò', description: 'Dai un tocco di vecchia TV a video e presentazioni.' },
      { title: 'Scherzi innocui', description: 'Fai sembrare scollegato uno schermo, poi rivelalo.' },
    ],
    faqs: [
      { question: 'Come si chiamano le barre colorate?', answer: 'Sono le barre di colore SMPTE, un monoscopio televisivo usato per calibrare colore e luminosità di TV e apparecchiature video.' },
      { question: 'Il monitor perderà davvero il segnale?', answer: 'No. È una pagina web che sembra solo uno schermo senza segnale. Il display continua a funzionare normalmente.' },
      { question: 'Come esco?', answer: 'Premi Esc, oppure muovi il mouse e fai clic sul pulsante chiudi nell’angolo.' },
    ],
  },
  'hacker-typer': {
    glance: {
      answer: 'Hacker Typer trasforma qualsiasi digitazione in codice realistico sullo schermo, così chiunque sembra un hacker da film. Premi tasti a caso e compaiono righe di codice; attiva gli avvisi «Accesso consentito» o «Accesso negato» per completare la scena in scherzi, video o per una risata.',
      features: ['Codice vero che scorre mentre digiti', 'Avvisi di accesso consentito e negato', 'Velocità e colore del testo regolabili', 'Aspetto da terminale a schermo intero'],
      benefits: ['Scena da hacker immediata per video e scherzi', 'Un modo divertente per avvicinare i bambini al codice', 'Gratis, niente da installare'],
    },
    steps: ['Fai clic sul terminale e digita qualsiasi cosa, o tocca lo schermo da smartphone.', 'Cambia la velocità per decidere quanti caratteri compaiono per tasto.', 'Premi Alt tre volte per «ACCESS GRANTED» o Bloc Maiusc tre volte per «ACCESS DENIED».', 'Usa il pulsante Schermo intero o F11 per l’effetto completo, ed Esc per uscire.'],
    useCases: [
      { title: 'Stupire gli amici', description: 'Sembra un genio mentre digiti a caso.' },
      { title: 'Film e streaming', description: 'Riprese di «hacking» convincenti per i video.' },
      { title: 'In classe', description: 'Un modo giocoso per suscitare interesse per la programmazione.' },
      { title: 'Sfondo per feste', description: 'Lascialo su uno schermo libero a un evento tech.' },
    ],
    faqs: [
      { question: 'Hacker Typer hackera davvero qualcosa?', answer: 'No. Mostra solo testo innocuo già scritto. Non esegue comandi, non accede a reti e non tocca i tuoi file.' },
      { question: 'Perché qui il tasto F non attiva lo schermo intero?', answer: 'In questo strumento ogni tasto scrive codice, quindi usa il pulsante dello schermo intero.' },
      { question: 'Funziona su smartphone?', answer: 'Sì. Tocca ripetutamente il terminale per far comparire altro codice.' },
    ],
  },
  'hacked-screen': {
    glance: {
      answer: 'Il simulatore di schermo hackerato mostra un finto avviso «il tuo sistema è stato hackerato» con testo glitch, log che scorrono, barra di avanzamento e conto alla rovescia. È uno scherzo innocuo: nulla viene letto o modificato, e alla fine del conto alla rovescia un messaggio svela che era una burla.',
      features: ['Stili allarme rosso e terminale verde', 'Titolo, log e conto alla rovescia personalizzabili', 'Sirena opzionale', 'Termina con un chiaro messaggio «era uno scherzo»'],
      benefits: ['Scherzo innocuo dall’aspetto drammatico', 'Oggetto di scena per film, dirette ed escape room', 'Funziona offline nel browser'],
    },
    steps: ['Scegli uno stile (allarme rosso o terminale verde) e il testo da mostrare.', 'Attiva o disattiva la sirena; suona solo dopo l’avvio.', 'Passa a schermo intero e lascia il dispositivo al tuo amico.', 'Premi Esc o muovi il mouse per mostrare il pulsante chiudi.'],
    useCases: [
      { title: 'Scherzi', description: 'Un piccolo spavento per un amico che poi ci riderà su.' },
      { title: 'Film ed escape room', description: 'Una schermata «sei stato hackerato» convincente.' },
      { title: 'Sensibilizzazione alla sicurezza', description: 'Mostra com’è uno scareware così le persone imparano a ignorarlo.' },
      { title: 'Dirette e video', description: 'Un momento drammatico o di reazione.' },
    ],
    faqs: [
      { question: 'Hackera o danneggia il mio dispositivo?', answer: 'No. Sono testo e animazioni in una normale scheda. Non esegue comandi, non legge file e non si collega a nulla.' },
      { question: 'Cosa faccio se un sito vero dice che sono stato hackerato?', answer: 'Chiudi la scheda. I veri strumenti di sicurezza non chiedono mai di chiamare un numero o pagare per sbloccare il dispositivo; quei pop-up sono truffe.' },
      { question: 'Come esco?', answer: 'Premi Esc, oppure muovi il mouse o tocca lo schermo per mostrare il pulsante chiudi. Anche chiudere la scheda funziona.' },
    ],
  },
  'zoom-lighting': {
    glance: {
      answer: 'La luce per Zoom trasforma lo schermo in una sorgente di luce morbida per le videochiamate. Scegli una temperatura colore da calda (circa 2700 K) a luce diurna (6500 K), regola la luminosità e riempi lo schermo o usa una cornice di luce attorno alla finestra di Zoom, Google Meet o Microsoft Teams.',
      features: ['Temperatura colore in Kelvin con preimpostazioni', 'Schermo pieno o cornice attorno alla chiamata', 'Luminosità e colore personalizzato', 'Funziona su un secondo monitor o tablet'],
      benefits: ['Viso più illuminato senza comprare luci', 'Luce calda che valorizza la pelle', 'Gratis e immediato'],
    },
    steps: ['Apri questa pagina su un secondo monitor o accanto alla finestra della chiamata.', 'Regola temperatura colore e luminosità. Alza la luminosità dello schermo per avere più luce.', 'Scegli la luce piena per la massima luminosità, o la cornice per lasciare al centro una finestra scura per la chiamata.', 'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.'],
    useCases: [
      { title: 'Videochiamate', description: 'Illumina e uniforma il viso in stanze buie.' },
      { title: 'Streaming', description: 'Una luce principale morbida da un monitor o tablet libero.' },
      { title: 'Selfie', description: 'Usa un portatile o un tablet come luce rapida e uniforme.' },
      { title: 'Trucco', description: 'Controlla il trucco con luce calda serale o simile al giorno.' },
    ],
    faqs: [
      { question: 'Quale temperatura colore uso?', answer: 'Quella della stanza. Circa 3000 K per stanze illuminate da lampade la sera, 4000–4500 K è neutra e 5500–6500 K corrisponde alla luce di una finestra.' },
      { question: 'Modifica la mia fotocamera?', answer: 'No. Illumina solo il viso. Puoi continuare a usare l’impostazione per scarsa luce della tua app per riunioni.' },
      { question: 'Lo schermo diventerà più luminoso del solito?', answer: 'No. Usa la luminosità attuale; alzala per avere più luce.' },
    ],
  },
  'visual-noise': {
    glance: {
      answer: 'Il rumore visivo riempie lo schermo di motivi animati che scorrono con dolcezza: nebbia morbida, plasma colorato e grana fine. Si usa come sfondo per video e dirette, come riferimento per texture di design e come immagine calma per rilassarsi.',
      features: ['Stili nebbia, plasma e grana fine', 'Scala, velocità e tavolozza colori', 'Pausa per bloccare un fotogramma', 'Parte in pausa se preferisci meno animazioni'],
      benefits: ['Sfondi in movimento rilassanti per video e dirette', 'Riferimento di texture per il design', 'Gratis e leggero'],
    },
    steps: ['Scegli uno stile come nebbia, plasma o grana fine.', 'Regola scala, velocità e tavolozza colori.', 'Metti in pausa l’animazione per bloccare un fotogramma che ti piace.', 'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.'],
    useCases: [
      { title: 'Atmosfera', description: 'Movimento morbido su una TV o un monitor sullo sfondo.' },
      { title: 'Texture di design', description: 'Riferimento per texture di grana e sfumature.' },
      { title: 'Sfondi per VJ', description: 'Visual generativi semplici per eventi.' },
      { title: 'Relax', description: 'Nebbia lenta per staccare.' },
    ],
    faqs: [
      { question: 'È uguale alla neve della TV?', answer: 'No. La neve TV è casuale per ogni pixel e fotogramma. Questi motivi usano rumore levigato che scorre piano.' },
      { question: 'Consuma molta batteria?', answer: 'Funziona sulla scheda grafica. Abbassa la velocità o mettilo in pausa per risparmiare energia sul portatile.' },
      { question: 'Rispetta la preferenza per meno animazioni?', answer: 'Sì. Se il sistema preferisce ridurre il movimento, l’animazione parte in pausa.' },
    ],
  },
  'color-cycle': {
    glance: {
      answer: 'Uno schermo che cambia colore attraversa dolcemente i colori dell’arcobaleno. Regola velocità e luminosità per luci da festa, luce d’atmosfera, relax o per controllare in fretta che lo schermo mostri ogni tonalità senza banding.',
      features: ['Arcobaleno morbido o modalità a passi', 'Regolazione di velocità e luminosità', 'Schermo intero con cursore nascosto', 'Rispetta la preferenza per meno animazioni'],
      benefits: ['Luce da festa o d’atmosfera immediata', 'Controlla transizioni di colore morbide', 'Gratis su ogni dispositivo'],
    },
    steps: ['Scegli l’arcobaleno morbido o un ciclo a passi tra i colori.', 'Regola la velocità con il cursore.', 'Premi la barra spaziatrice per mettere in pausa e riprendere.', 'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.'],
    useCases: [
      { title: 'Luce d’atmosfera', description: 'Un bagliore che cambia lentamente per feste o relax.' },
      { title: 'Pixel bloccati', description: 'Il cambio rapido di colori è a volte consigliato per i pixel bloccati, senza garanzie.' },
      { title: 'Atmosfera in diretta', description: 'Una luce di sfondo che cambia dietro di te in camera.' },
      { title: 'Luce notturna per bambini', description: 'Una luce morbida che cambia piano a bassa luminosità.' },
    ],
    faqs: [
      { question: 'Il ciclo di colori ripara i pixel bloccati?', answer: 'A volte cambiare colore velocemente aiuta un subpixel bloccato a rispondere di nuovo, ma non è garantito e non ripara i pixel morti.' },
      { question: 'Il ciclo veloce è sicuro?', answer: 'I lampeggi rapidi possono colpire chi soffre di epilessia fotosensibile. La velocità è limitata, parte lenta e la preferenza per meno animazioni è rispettata.' },
      { question: 'Posso fermarmi su un colore?', answer: 'Sì. Premi la barra spaziatrice o il pulsante di pausa.' },
    ],
  },
  'gradient-screen': {
    glance: {
      answer: 'Uno schermo sfumato riempie il display con un passaggio morbido tra i colori che scegli. Imposta colori, angolo e tipo, usalo come luce d’ambiente o sfondo, controlla il banding del tuo schermo e scarica la sfumatura come immagine.',
      features: ['Sfumature lineari e radiali', 'Qualsiasi colore e angolo', 'Download in PNG ad alta risoluzione', 'Schermo intero'],
      benefits: ['Sfondi personalizzati in pochi secondi', 'Buon test di banding per monitor', 'Gratis, senza programmi di grafica'],
    },
    steps: ['Scegli una preimpostazione o i tuoi colori.', 'Passa tra lineare e radiale e regola l’angolo.', 'Attiva l’animazione per una sfumatura che si muove lentamente.', 'Premi F per lo schermo intero o scarica la sfumatura in PNG.'],
    useCases: [
      { title: 'Sfondi', description: 'Crea uno sfondo sfumato a qualsiasi risoluzione.' },
      { title: 'Luce d’ambiente', description: 'Un bagliore morbido a due toni stanca meno di un colore pieno.' },
      { title: 'Test di banding', description: 'Le sfumature morbide rivelano il banding su pannelli con poca profondità.' },
      { title: 'Fondali', description: 'Fondali rapidi per presentazioni e video.' },
    ],
    faqs: [
      { question: 'Perché la mia sfumatura mostra righe?', answer: 'È banding, causato dalla poca profondità colore del pannello o dalla compressione. È un limite dello schermo, non un difetto della sfumatura.' },
      { question: 'Posso scaricarla?', answer: 'Sì. Scegli una risoluzione e scarica un PNG creato nel browser.' },
      { question: 'Posso usare tre colori?', answer: 'Sì. Attiva il colore centrale per aggiungere un terzo punto.' },
    ],
  },
  'flip-clock-screensaver': {
    glance: {
      answer: 'Uno screensaver con orologio a palette mostra l’ora in grandi cifre che girano a ogni minuto, come una sveglia retrò. Scegli il formato 12 o 24 ore, mostra secondi e data, e avvialo a schermo intero su un monitor libero, un tablet o una TV.',
      features: ['Cifre a palette animate', 'Formato 12 e 24 ore con secondi e data', 'Temi chiaro e scuro', 'Tiene acceso lo schermo a schermo intero'],
      benefits: ['Trasforma un vecchio tablet in orologio da scrivania', 'Ora grande e leggibile da lontano', 'Gratis, senza app'],
    },
    steps: ['L’ora locale compare automaticamente.', 'Cambia formato 12/24 ore, secondi e data. Ogni cifra gira come un vero orologio a palette.', 'Scegli il tema adatto alla tua stanza.', 'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.'],
    useCases: [
      { title: 'Orologio da scrivania', description: 'Trasforma un tablet o un monitor in orologio da scrivania o da comodino.' },
      { title: 'Presentazioni', description: 'Mostra l’ora chiaramente durante eventi e pause.' },
      { title: 'Concentrazione', description: 'Un orologio calmo e minimale in vista mentre lavori.' },
      { title: 'Streaming', description: 'Uno sfondo elegante «stiamo per iniziare».' },
    ],
    faqs: [
      { question: 'Da dove prende l’ora?', answer: 'Dall’orologio e dal fuso orario del dispositivo, quindi funziona offline dopo il caricamento.' },
      { question: 'Lo schermo resterà acceso?', answer: 'A schermo intero, nei browser compatibili, un blocco della sospensione tiene acceso il display.' },
      { question: 'Posso disattivare l’animazione?', answer: 'Sì. Se il sistema preferisce meno movimento, le cifre cambiano senza girare.' },
    ],
  },
  'motivational-quote-screensaver': {
    glance: {
      answer: 'Uno screensaver di frasi motivazionali mostra una nuova citazione ispiratrice ogni pochi secondi in caratteri grandi e leggibili, con orologio opzionale. È adatto a reception, aule, palestre e schermi di casa che si guardano di passaggio.',
      features: ['Citazioni di Seneca, Marco Aurelio, Emerson e altri', 'Ritmo, sfondi e ordine casuale', 'Orologio opzionale', 'Schermo intero senza spegnimento'],
      benefits: ['Uno schermo positivo per gli spazi comuni', 'Nessuna configurazione sulle Smart TV', 'Gratis'],
    },
    steps: ['Compare subito una citazione a caso.', 'Scegli uno sfondo e per quanti secondi resta ogni citazione.', 'Usa le frecce o i tasti ← → per cambiare citazione; la barra spaziatrice mette in pausa.', 'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.'],
    useCases: [
      { title: 'Uffici e reception', description: 'Un ciclo calmo e positivo per le TV di reception e le aree team.' },
      { title: 'Aule', description: 'Mostra il pensiero del giorno all’arrivo degli studenti.' },
      { title: 'Palestre e studi', description: 'Frasi brevi leggibili da un capo all’altro della sala.' },
      { title: 'Scrivania di casa', description: 'Rendi utile un secondo monitor o un vecchio tablet mentre lavori.' },
    ],
    faqs: [
      { question: 'Da dove vengono le citazioni?', answer: 'Sono frasi brevi di autori classici e proverbi, come Seneca, Marco Aurelio, Confucio, Benjamin Franklin e Mark Twain. Sono incluse nella pagina, quindi non viene scaricato nulla mentre gira.' },
      { question: 'Posso tenere ferma una citazione?', answer: 'Sì. Premi Pausa (o la barra spaziatrice) e la citazione resta finché non riprendi o premi una freccia.' },
      { question: 'Tiene acceso lo schermo?', answer: 'A schermo intero, nei browser compatibili, un blocco della sospensione impedisce allo schermo di spegnersi.' },
    ],
  },
  'fake-windows-11-update': update('Windows 11', 'Microsoft', {
    answer: 'Una finta schermata di aggiornamento di Windows 11 mostra la schermata scura «Aggiornamenti in corso» con l’indicatore rotante e una percentuale che sale piano. A schermo intero il computer sembra impegnato ad aggiornarsi, per uno scherzo o un oggetto di scena. Premi Esc per tornare.',
    features: ['Indicatore e testo in stile Windows 11', 'Velocità regolabile e pausa', 'Schermo intero con cursore nascosto', 'Esc per uscire'],
    benefits: ['Scherzo realistico e innocuo', 'Oggetto di scena pulito per registrazioni dello schermo', 'Gratis'],
  }, { question: 'Che differenza c’è con la versione di Windows 10?', answer: 'Usa lo sfondo più scuro e il layout più semplice dei sistemi recenti.' }),
  'fake-mac-update': update('macOS', 'Apple', {
    answer: 'Una finta schermata di aggiornamento del Mac mostra la schermata nera di aggiornamento di macOS con barra di avanzamento e tempo rimanente. A schermo intero sembra che il Mac stia installando un aggiornamento, per uno scherzo innocuo o un oggetto di scena video. Premi Esc per uscire.',
    features: ['Barra di avanzamento e tempo rimanente in stile macOS', 'Velocità di aggiornamento regolabile', 'Schermo intero con cursore nascosto', 'Esc per uscire'],
    benefits: ['Scherzo innocuo per chi usa il Mac', 'Oggetto di scena pulito per video', 'Gratis'],
  }, { question: 'Usa il vero logo Apple?', answer: 'No. Usa un simbolo generico neutro per evitare l’uso improprio del marchio, mantenendo il layout familiare.' }),
  'fake-android-update': update('Android', 'Google', {
    answer: 'Una finta schermata di aggiornamento di Android mostra un aggiornamento di sistema in corso con barra di avanzamento. Aprila a schermo intero su uno smartphone o tablet perché sembri in aggiornamento, poi tocca il pulsante chiudi per svelare lo scherzo.',
    features: ['Schermata di aggiornamento e avanzamento in stile Android', 'Velocità regolabile', 'Schermo intero su smartphone e tablet', 'Tocca per uscire'],
    benefits: ['Scherzo che funziona su ogni telefono', 'Nessuna app da installare', 'Gratis'],
  }, { question: 'Funziona sugli smartphone?', answer: 'Sì. Nella maggior parte dei browser Android lo schermo intero nasconde la barra degli indirizzi. In Safari su iPhone riempie invece la finestra del browser.' }),
  'fake-windows-xp-update': update('Windows XP', 'Microsoft', {
    answer: 'Una finta schermata di aggiornamento di Windows XP ricrea la classica schermata blu «Installazione aggiornamenti» dei primi anni 2000 con la sua barra di avanzamento. Usala per scherzi nostalgici, video retrò e set ambientati in quell’epoca. Premi Esc per uscire.',
    features: ['Aspetto classico dell’era XP', 'Barra di avanzamento e testo di stato', 'Schermo intero con cursore nascosto', 'Esc per uscire'],
    benefits: ['Nostalgia immediata', 'Oggetto di scena fedele all’epoca', 'Gratis'],
  }, { question: 'Perché sembra così retrò?', answer: 'Imita lo stile delle finestre dei primi anni 2000 per un aspetto nostalgico e riconoscibile.' }),
  'fake-chrome-os-update': update('ChromeOS', 'Google', {
    answer: 'Una finta schermata di aggiornamento di ChromeOS mostra un aggiornamento in corso in stile Chromebook. Avviala a schermo intero su un Chromebook o qualsiasi computer perché il sistema sembri in aggiornamento, come scherzo innocuo o oggetto di scena per demo. Premi Esc per uscire.',
    features: ['Schermata di aggiornamento in stile ChromeOS', 'Velocità di avanzamento regolabile', 'Schermo intero con cursore nascosto', 'Esc per uscire'],
    benefits: ['Funziona sui Chromebook di scuola e lavoro', 'Scherzo innocuo', 'Gratis'],
  }, { question: 'Funziona su un Chromebook?', answer: 'Sì. Premi il tasto schermo intero o il pulsante Schermo intero per l’effetto completo.' }),
  'fake-ubuntu-update': update('Ubuntu', 'Canonical', {
    answer: 'Una finta schermata di aggiornamento di Ubuntu mostra aggiornamenti di pacchetti Linux che scorrono in un terminale con righe di avanzamento. Sembra un vero aggiornamento di sistema: uno scherzo divertente per sviluppatori e un oggetto di scena credibile per video su Linux.',
    features: ['Output di aggiornamento in stile apt', 'Colori del terminale in stile Ubuntu', 'Schermo intero', 'Esc per uscire'],
    benefits: ['Scherzo per sviluppatori', 'Oggetto di scena da terminale realistico', 'Gratis'],
  }, { question: 'Le righe del log sono comandi veri?', answer: 'No. Sono testo già scritto per l’effetto e sul tuo computer non viene eseguito nulla.' }),
  'fake-windows-xp-boot': {
    glance: {
      answer: 'Una finta schermata di avvio di Windows XP riproduce la classica schermata iniziale con la barra di caricamento blu che scorre sul nero. È un oggetto di scena retrò rapido per video, film e scherzi, e uno screensaver nostalgico per i fan del sistema del 2001.',
      features: ['Schermata di avvio classica con barra animata', 'Si ripete finché vuoi', 'Schermo intero con cursore nascosto', 'Esc per uscire'],
      benefits: ['Oggetto di scena retrò in un clic', 'Screensaver nostalgico', 'Gratis'],
    },
    steps: ['La schermata di avvio parte subito, con i blocchi blu che scorrono nella barra di caricamento.', 'Premi F o Schermo intero per riempire lo schermo e nascondere il browser.', 'Lasciala andare: la barra di caricamento si ripete finché vuoi.', 'Premi Esc per uscire.'],
    useCases: [
      { title: 'Nostalgia', description: 'Ricorda l’avvio di un PC dei primi anni 2000.' },
      { title: 'Oggetto di scena retrò', description: 'Allestisci un computer d’epoca per foto o film.' },
      { title: 'Scherzi innocui', description: 'Fai sembrare che un PC moderno stia avviando XP.' },
      { title: 'Intro per dirette', description: 'Un’intro retrò «avvio in corso» per le tue dirette.' },
    ],
    faqs: [
      { question: 'È reale o dannoso?', answer: 'No. È una simulazione visiva innocua in una normale scheda. Non modifica il dispositivo e non installa nulla.' },
      brandFaq('Microsoft'),
      { question: 'Riproduce il suono di avvio?', answer: 'No. Per rispetto delle tue orecchie e del diritto d’autore, non c’è il suono di avvio.' },
      EXIT,
    ],
  },
  'fake-zoom-meeting': call('Zoom Video Communications', {
    answer: 'Una finta schermata di riunione Zoom mostra una videochiamata in stile Zoom con una griglia di partecipanti, una barra degli strumenti e l’anteprima della tua fotocamera. Serve per scherzi, oggetti di scena, screenshot e per esercitarsi in camera. La tua immagine resta sul dispositivo e non viene mai registrata né caricata.',
    features: ['Griglia di partecipanti con nomi e icone del microfono', 'La tua fotocamera dal vivo, anche a schermo intero', 'Timer della riunione e barra degli strumenti', 'Titolo della riunione modificabile'],
    benefits: ['Oggetto di scena realistico per video', 'Esercitati a presentare in camera', 'Privato: nulla lascia il dispositivo'],
  }, { question: 'Che differenza c’è con la schermata di Teams?', answer: 'Questa segue il layout di Zoom: una galleria di riquadri con i controlli in basso. Quella di Teams mette i controlli e un pulsante rosso Esci in una barra in alto con il timer.' }),
  'fake-teams-meeting': call('Microsoft', {
    answer: 'Una finta schermata di riunione Microsoft Teams mostra una chiamata in stile Teams con riquadri dei partecipanti, la barra della riunione e l’anteprima della fotocamera. Usala per scherzi, oggetti di scena o per provare una presentazione. L’anteprima resta nel browser e non viene mai registrata.',
    features: ['Riquadri e controlli in stile Teams', 'Fotocamera dal vivo a schermo intero', 'Timer della riunione', 'Titolo della riunione modificabile'],
    benefits: ['Oggetto di scena d’ufficio credibile', 'Prova le chiamate con calma', 'Privato e gratis'],
  }, { question: 'Posso cambiare il nome della riunione?', answer: 'Sì. Scrivi un nuovo nome nel campo del titolo sotto lo schermo. Compare subito in alto e nulla viene salvato o inviato.' }),
  'fake-google-meet': call('Google', {
    answer: 'Una finta schermata di Google Meet mostra una videochiamata in stile Meet con riquadri dei partecipanti, la barra dei controlli in basso e l’anteprima della tua fotocamera. Va bene per scherzi, video ed esercitazioni, e la tua immagine non lascia mai il dispositivo.',
    features: ['Riquadri e barra dei controlli in stile Meet', 'Fotocamera dal vivo a schermo intero', 'Timer e titolo della riunione modificabile', 'Nessun accesso a Google richiesto'],
    benefits: ['Oggetto di scena realistico per film e tutorial', 'Esercitati in camera', 'Privato e gratis'],
  }, { question: 'Il codice della riunione è vero?', answer: 'No. «abc-defg-hij» è un testo segnaposto. Nessuno può partecipare e la pagina non si collega mai a Google Meet o ad altri servizi.' }),
  'fake-slack-huddle': call('Slack Technologies', {
    answer: 'Una finta schermata di huddle Slack mostra una chiamata audio e video in stile Slack con partecipanti e controlli. Usala come scherzo, oggetto di scena per screenshot nelle presentazioni o sfondo per un set, senza collegamento a uno spazio di lavoro Slack reale.',
    features: ['Vista dei partecipanti in stile huddle', 'Indicatori di chi parla e controlli', 'Schermo intero', 'Titolo modificabile'],
    benefits: ['Oggetto di scena rapido per video sul lavoro da remoto', 'Scherzo innocuo', 'Gratis'],
  }),
  'fake-radar-screen': {
    glance: {
      answer: 'Una finta schermata radar mostra un classico radar circolare, detto indicatore di posizione in piano, con una linea di scansione che ruota, contatti che svaniscono e anelli di distanza. Letture e ping opzionale ne fanno un oggetto di scena convincente per film, escape room, giochi e scherzi fantascientifici.',
      features: ['Scansione rotante con scia', 'Contatti in movimento e anelli di distanza', 'Letture di rilevamento e distanza', 'Ping tipo sonar opzionale'],
      benefits: ['Oggetto di scena fantascientifico o militare immediato', 'Ideale per escape room e scenografie', 'Gratis e utilizzabile offline'],
    },
    steps: ['Il radar inizia subito la scansione.', 'Scegli un colore (verde, ambra o blu), la velocità di scansione e il numero di contatti.', 'Attiva il ping se vuoi; suona solo dopo averlo attivato.', 'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.'],
    useCases: [
      { title: 'Oggetto di scena per film e teatro', description: 'Uno schermo da sala di controllo convincente senza vere apparecchiature.' },
      { title: 'Escape room e giochi', description: 'Crea l’atmosfera per temi di sottomarini, spazio o spionaggio.' },
      { title: 'Feste e dirette', description: 'Uno sfondo fantascientifico in movimento su una TV o un secondo monitor.' },
      { title: 'Screensaver', description: 'Un’animazione calma in loop per uno schermo inattivo.' },
    ],
    faqs: [
      { question: 'Mostra dati radar o di aerei reali?', answer: 'No. Ogni contatto è generato a caso nel browser. Serve solo per intrattenimento e oggetti di scena.' },
      { question: 'Perché i punti svaniscono?', answer: 'I radar classici usavano fosfori che restavano accesi dopo il passaggio del fascio e poi si affievolivano. La dissolvenza imita quel bagliore residuo.' },
      { question: 'Come esco?', answer: 'Premi Esc, oppure muovi il mouse o tocca lo schermo per mostrare il pulsante chiudi. Anche chiudere la scheda funziona.' },
    ],
  },
}
