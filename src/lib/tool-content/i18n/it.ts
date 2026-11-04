import type { ToolTranslations } from './types'

export const it: ToolTranslations = {
  'white-screen': {
    glance: {
      answer:
        'Uno schermo bianco riempie tutto il display di bianco puro (#FFFFFF). Clicca su Schermo intero o premi F e ogni pixel mostra lo stesso colore, senza barre né distrazioni. Alla massima luminosità è la luce più forte che il tuo schermo può produrre: utile per videochiamate e foto, per pulire il monitor, ricalcare disegni e trovare pixel morti.',
      features: [
        'Bianco puro #FFFFFF o qualsiasi colore esadecimale',
        'Schermo intero con un clic e regolazione della luminosità',
        'Temperatura colore da 2700 K (calda) a 9300 K (fredda)',
        'Download PNG gratuito da 720p fino a 8K',
      ],
      benefits: [
        'Luce morbida immediata per chiamate, selfie e ricalco',
        'Funziona su smartphone, laptop, monitor e Smart TV',
        'Nessuna app, nessuna registrazione, niente da installare',
      ],
    },
  },
  'black-screen': {
    glance: {
      answer:
        'Uno schermo nero rende tutto il display nero puro (#000000) con un clic. Sugli schermi OLED i pixel si spengono del tutto: è il modo più rapido per nascondere ciò che è sullo schermo, controllare le perdite di luce o risparmiare energia.',
      features: [
        'Nero puro #000000 o qualsiasi colore personalizzato',
        'Schermo intero con un clic e regolazione della luminosità',
        'Mantiene lo schermo acceso a schermo intero',
        'Download PNG gratuito da 720p fino a 8K',
      ],
      benefits: ['Rivela perdite di luce, IPS glow e pixel bloccati', 'Risparmia energia sugli OLED', 'Gratis, niente da installare'],
    },
  },
  'dead-pixel-test': {
    glance: {
      answer:
        'Un test dei pixel morti riempie lo schermo di colori pieni, uno dopo l’altro, così i pixel difettosi risaltano. Un pixel morto resta nero su ogni colore, un pixel bloccato resta di un colore acceso e un pixel caldo resta bianco. Il controllo completo richiede circa un minuto su qualsiasi monitor, laptop, TV o smartphone.',
      features: [
        'Sfondi a schermo intero bianco, nero, rosso, verde, blu e grigio',
        'Cambio automatico o con le frecce della tastiera',
        'Per pannelli LCD, IPS, VA, OLED e mini-LED',
        'Consigli per distinguere pixel morti, bloccati e caldi',
      ],
      benefits: [
        'Trova i difetti prima che scada il periodo di reso',
        'Controlla un monitor o uno smartphone usato prima di pagare',
        'Gratis, privato, niente da installare',
      ],
    },
    steps: [
      'Pulisci prima lo schermo, così la polvere non sembra un pixel difettoso.',
      'Premi F per lo schermo intero, poi usa le frecce, fai clic o attiva il cambio automatico dei colori.',
      'Osserva con calma tutto il pannello su ogni colore. Una lente o lo zoom della fotocamera aiutano.',
      'Puntini scuri sui colori chiari indicano pixel morti; puntini chiari o colorati sul nero indicano pixel bloccati o caldi.',
    ],
    useCases: [
      { title: 'Monitor nuovo', description: 'Controlla un monitor, un laptop o una TV nuovi entro il periodo di reso.' },
      { title: 'Acquisto usato', description: 'Verifica uno smartphone o un portatile usato prima di pagare.' },
      { title: 'Prova per la garanzia', description: 'Fotografa il difetto su un colore pieno per la tua richiesta.' },
      { title: 'Controllo periodico', description: 'Verifica ogni tanto che non siano comparsi nuovi difetti.' },
    ],
    faqs: [
      {
        question: 'Che differenza c’è tra un pixel morto e uno bloccato?',
        answer:
          'Un pixel morto resta scuro su ogni colore. Uno bloccato resta acceso in un colore, come un puntino rosso sul nero. Uno caldo resta bianco. I pixel bloccati a volte si sbloccano, quelli morti quasi mai.',
      },
      {
        question: 'Questo strumento ripara i pixel morti?',
        answer:
          'No. Il test serve solo a vedere i difetti. A volte si consiglia di alternare velocemente i colori per i pixel bloccati, ma senza garanzie, e un pixel morto è un guasto hardware.',
      },
      {
        question: 'Come segnalo un pixel morto?',
        answer:
          'Scatta una foto nitida del difetto sul colore dove si vede meglio, annota la posizione e contatta il produttore o il negozio con la prova d’acquisto.',
      },
    ],
  },
  'screen-refresh-rate-test': {
    glance: {
      answer:
        'Un test della frequenza di aggiornamento misura quante volte al secondo lo schermo ridisegna l’immagine, in hertz (Hz). Cronometra i fotogrammi del browser e indica 60, 75, 120, 144, 165 o 240 Hz, così puoi verificare che il tuo monitor ad alta frequenza funzioni davvero alla velocità dichiarata.',
      features: [
        'Misura in tempo reale degli Hz con la frequenza standard più vicina',
        'Tempo medio, minimo e massimo dei fotogrammi',
        'Nuova misura dopo aver cambiato le impostazioni',
        'Per monitor, laptop, smartphone e tablet',
      ],
      benefits: [
        'Verifica che il monitor da 144 o 240 Hz non sia fermo a 60 Hz',
        'Controlla cavo, porta e impostazioni di Windows o macOS',
        'Risultato in pochi secondi, senza download',
      ],
    },
    steps: [
      'Apri la pagina e attendi uno o due secondi che la lettura si stabilizzi.',
      'Leggi il valore in Hz e la frequenza standard più vicina.',
      'Se un monitor ad alta frequenza mostra 60 Hz, controlla impostazioni dello schermo e cavo e riprova.',
      'Premi F o tocca due volte per lo schermo intero, ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Monitor nuovo', description: 'Conferma che un monitor da 144 o 240 Hz giri davvero a quella frequenza.' },
      { title: 'Cavo e porta', description: 'Cavi o porte HDMI vecchi possono limitarti a 60 Hz.' },
      { title: 'Laptop a batteria', description: 'Molti portatili scendono a 60 Hz quando non sono collegati.' },
      { title: 'Smartphone e tablet', description: 'Controlla se le modalità adattive a 90/120 Hz sono attive.' },
    ],
    faqs: [
      {
        question: 'Perché il mio monitor da 144 Hz mostra 60 Hz?',
        answer:
          'La frequenza si imposta nelle impostazioni dello schermo del sistema e il cavo deve supportarla (DisplayPort o HDMI 2.0 e successivi). Controlla anche che la finestra del browser sia sul monitor giusto.',
      },
      {
        question: 'Perché il valore cambia?',
        answer:
          'Schede pesanti, risparmio energetico e frequenza variabile (FreeSync, G-Sync, ProMotion) cambiano i tempi dei fotogrammi. La lettura usa la mediana degli ultimi fotogrammi per stabilizzarla.',
      },
      {
        question: 'La frequenza di aggiornamento è uguale agli FPS?',
        answer:
          'No. La frequenza indica quante volte si aggiorna lo schermo; gli FPS quanti nuovi fotogrammi fornisce un gioco o un video. Vedi solo tanti fotogrammi quanti la frequenza consente.',
      },
    ],
  },
  'touch-screen-test': {
    glance: {
      answer:
        'Un test del touch screen controlla che ogni parte dello schermo risponda al tocco. Tocca ogni casella di una griglia per trovare le zone morte, disegna linee per vedere interruzioni o salti e appoggia più dita insieme per scoprire quanti punti di contatto gestisce il tuo smartphone o tablet.',
      features: [
        'Griglia che segna ogni casella toccata, con copertura in %',
        'Modalità disegno per trovare buchi, salti e tocchi fantasma',
        'Modalità multitouch che conta le dita simultanee',
        'Funziona con dita, pennino e mouse',
      ],
      benefits: ['Trova zone morte dopo una caduta o una riparazione', 'Prova uno smartphone o tablet usato prima di comprarlo', 'Nessuna app da installare'],
    },
    steps: [
      'Scegli la griglia e passa il dito lentamente su ogni casella finché la copertura arriva al 100%.',
      'Le caselle che non si riempiono dopo vari tentativi indicano una zona morta.',
      'Passa a Disegno e traccia linee lente: interruzioni o salti indicano tocchi persi.',
      'Usa Multitouch e appoggia più dita per vedere quante ne rileva contemporaneamente.',
    ],
    useCases: [
      { title: 'Punti che non rispondono', description: 'Individua esattamente dove smartphone o tablet ignorano il tocco.' },
      { title: 'Dopo una riparazione', description: 'Controlla il nuovo digitalizzatore prima di ritirare il dispositivo.' },
      { title: 'Acquisto usato', description: 'Prova tutta la superficie in un minuto.' },
      { title: 'Tocchi fantasma', description: 'Controlla se compaiono tocchi senza nessun dito.' },
    ],
    faqs: [
      {
        question: 'Quanti punti di contatto dovrebbe gestire il mio schermo?',
        answer: 'La maggior parte di smartphone e tablet rileva da 5 a 10 dita. La pagina mostra il numero indicato dal browser e il massimo rilevato insieme.',
      },
      {
        question: 'Funziona con mouse o pennino?',
        answer: 'Sì. Anche mouse e pennino disegnano, quindi puoi provare uno stilo allo stesso modo.',
      },
      {
        question: 'Cosa causa le zone morte?',
        answer: 'Vetro incrinato, cavo del digitalizzatore danneggiato, umidità o una pellicola con bolle d’aria. Togli prima la pellicola e riprova.',
      },
    ],
  },
  'white-noise-generator': {
    glance: {
      answer:
        'Un generatore di rumore bianco riproduce un fruscio costante che contiene tutte le frequenze udibili con la stessa intensità. Questo suono uniforme copre voci, traffico e rumori improvvisi, per questo si usa per concentrarsi, studiare, calmare i neonati e dormire. Tienilo a volume basso e usa il timer di notte.',
      features: [
        'Rumore bianco, rosa e marrone in un unico player',
        'Filtro del tono e volume in decibel',
        'Timer per dormire con dissolvenza dolce',
        'Grafica opzionale: neve TV o forma d’onda',
      ],
      benefits: ['Copre le distrazioni in ufficio e a casa', 'Aiuta molte persone ad addormentarsi prima', 'Gratis, infinito e senza app'],
    },
    steps: [
      'Premi Avvia. Non suona nulla prima, e parte a volume moderato.',
      'I pulsanti Bianco, Rosa e Marrone aprono ogni generatore; volume, filtro e grafica restano uguali.',
      'Un filtro passa-basso ammorbidisce il fruscio, un passa-alto toglie i rimbombi; regola la frequenza di taglio.',
      'Scegli una grafica (onda, neve TV o schermo scuro) e, se vuoi, un timer per dormire.',
      'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Dormire', description: 'Copri traffico, vicini e russare con un suono costante.' },
      { title: 'Concentrazione', description: 'Attenua chiacchiere e rumori di casa mentre lavori o studi.' },
      { title: 'Neonati', description: 'Molti genitori usano un rumore bianco leggero per calmare il bambino. Tienilo basso e lontano dalla culla.' },
      { title: 'Neve TV retrò', description: 'Imposta la grafica sulla neve TV per video, scenografie o feste a tema.' },
    ],
    faqs: [
      {
        question: 'Che cos’è il rumore bianco?',
        answer: 'Il rumore bianco ha la stessa potenza su tutte le frequenze. All’orecchio è un fruscio chiaro e uniforme, come una radio o una TV non sintonizzate.',
      },
      {
        question: 'A cosa servono i filtri passa-basso e passa-alto?',
        answer:
          'Il passa-basso mantiene le frequenze sotto il taglio, così il rumore è più cupo e morbido. Il passa-alto mantiene quelle sopra, toglie i rimbombi e lo rende più arioso.',
      },
      {
        question: 'Consuma dati?',
        answer: 'No. Il rumore viene generato sul tuo dispositivo con la Web Audio API: non c’è streaming e funziona anche offline dopo il caricamento.',
      },
      {
        question: 'Guardare la neve TV è sicuro?',
        answer: 'Lo sfarfallio veloce può dare fastidio e scatenare l’epilessia fotosensibile. Se sei sensibile, usa l’onda o lo schermo scuro.',
      },
    ],
  },
  'fake-blue-screen-of-death': {
    glance: {
      answer:
        'Una finta schermata blu della morte (BSOD) imita la schermata di errore di Windows: la faccina triste, «Il PC ha riscontrato un problema», un codice di arresto e un contatore di avanzamento. È solo grafica: non si blocca nulla e si esce con Esc. Scegli Windows 10, Windows 11, la nuova schermata nera o il classico XP.',
      features: ['Stili Windows 10, 11, nero e XP classico', 'Codici reali come CRITICAL_PROCESS_DIED', 'Percentuale che sale e blocco stile QR', 'Schermo intero con cursore nascosto'],
      benefits: ['Lo scherzo informatico più convincente', 'Oggetto di scena realistico per video e tutorial', 'Del tutto innocuo'],
    },
    steps: [
      'Scegli uno stile: Windows 10, Windows 11, la nuova schermata nera o il classico XP/7.',
      'Scegli un codice di arresto e quanto tempo impiega il contatore ad arrivare al 100%.',
      'Tocca due volte o premi F per lo schermo intero. Il cursore sparisce subito.',
      'Premi Esc, oppure muovi il mouse e fai clic su chiudi, per uscire.',
    ],
    useCases: [
      { title: 'Scherzi in ufficio', description: 'Lasciala sullo schermo di un collega per qualche secondo, poi svela lo scherzo.' },
      { title: 'Video e dirette', description: 'Mostra un crash in camera senza bloccare un vero computer.' },
      { title: 'Formazione IT', description: 'Mostra com’è un errore di arresto e cosa significa il codice.' },
      { title: 'Cinema e teatro', description: 'Una schermata di errore credibile per una scena, su qualsiasi dispositivo.' },
    ],
    faqs: [
      {
        question: 'Che cos’è la schermata blu della morte?',
        answer:
          'È l’errore a schermo intero che Windows mostra quando incontra un problema da cui non riesce a riprendersi, come un driver difettoso o un errore di memoria. Indica un codice di arresto, salva informazioni e riavvia.',
      },
      {
        question: 'Cosa significano i codici di arresto?',
        answer:
          'Ognuno indica il tipo di guasto: CRITICAL_PROCESS_DIED significa che un processo di sistema si è fermato, IRQL_NOT_LESS_OR_EQUAL di solito indica un driver e MEMORY_MANAGEMENT spesso la RAM. Qui sono solo testo.',
      },
      {
        question: 'Può danneggiare il mio computer?',
        answer: 'No. È un’immagine in una scheda del browser. Non blocca Windows, non cambia impostazioni e non installa nulla.',
      },
      {
        question: 'Perché la nuova schermata di errore è nera?',
        answer: 'Nel 2025 Microsoft ha sostituito la schermata blu di Windows 11 con una nera più semplice. Scegli «Nero (nuovo)» per quell’aspetto.',
      },
      {
        question: 'È collegato a Microsoft?',
        answer: 'No. È una ricostruzione indipendente a scopo di intrattenimento, non collegata né sponsorizzata da Microsoft.',
      },
    ],
  },
  'pomodoro-timer': {
    glance: {
      answer:
        'Un timer Pomodoro divide il lavoro in sessioni di 25 minuti di concentrazione separate da pause di 5 minuti, con una pausa lunga ogni quattro sessioni. Il metodo, creato da Francesco Cirillo alla fine degli anni ’80, aiuta a iniziare i compiti, evitare l’esaurimento e contare le sessioni completate.',
      features: ['Ciclo 25/5 con pause lunghe', 'Durate regolabili e avvio automatico', 'Segnale acustico e conto alla rovescia nella scheda', 'Contatore di sessioni e anello di avanzamento'],
      benefits: ['Batti la procrastinazione con obiettivi brevi', 'Le pause riducono la stanchezza', 'Gratis, senza account'],
    },
    steps: [
      'Premi Avvia per iniziare una sessione di 25 minuti.',
      'Se vuoi, cambia la durata di concentrazione e pause (per esempio 50/10).',
      'Alla fine di ogni fase suona un segnale e parte la successiva; disattiva l’avvio automatico per avviarle tu.',
      'Usa Salta per andare avanti o Reimposta per ricominciare. La barra spaziatrice avvia e mette in pausa.',
      'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Studio', description: 'Dividi il ripasso in blocchi brevi e concentrati con vere pause.' },
      { title: 'Lavoro concentrato', description: 'Proteggi 25 minuti alla volta da email e chat.' },
      { title: 'In classe', description: 'Proietta il timer per attività e pause a tempo.' },
      { title: 'Creare abitudini', description: 'Conta le sessioni per vedere quanto tempo di concentrazione accumuli.' },
    ],
    faqs: [
      {
        question: 'Che cos’è la tecnica del pomodoro?',
        answer:
          'Un metodo di gestione del tempo della fine degli anni ’80: lavora a blocchi concentrati (tradizionalmente 25 minuti), fai una pausa breve dopo ciascuno e una lunga ogni quattro.',
      },
      {
        question: 'Il timer continua in una scheda in background?',
        answer: 'Sì. Conta sull’orologio reale, quindi resta preciso anche se il browser rallenta le schede nascoste, e il titolo della scheda mostra il tempo rimasto.',
      },
      {
        question: 'Posso cambiare le durate?',
        answer: 'Sì. Imposta in minuti concentrazione, pausa breve e pausa lunga, e quante sessioni precedono la pausa lunga.',
      },
    ],
  },
}
