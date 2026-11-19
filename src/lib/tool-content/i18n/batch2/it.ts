import type { ToolTranslations } from '../types'

export const it: ToolTranslations = {
  'monitor-test': {
    glance: {
      answer:
        'Un test del monitor è una serie di schermate di prova a schermo intero che verificano come il display mostra colore, contrasto, nitidezza e gamma. Scorri sfumature, livelli di nero e bianco, nitidezza del testo e griglie geometriche per trovare difetti o regolare bene l’immagine.',
      features: ['Schermate di sfumature, gamma, contrasto e nitidezza', 'Scale dei livelli di nero e di bianco', 'Controlli di geometria e leggibilità del testo', 'Scorciatoie da tastiera per tutte le schermate'],
      benefits: ['Regola bene luminosità, contrasto e nitidezza', 'Controlla un monitor nuovo o usato in pochi minuti', 'Funziona in qualsiasi browser, anche sulla TV'],
    },
    steps: [
      'Imposta il monitor alla risoluzione nativa e azzera lo zoom del browser (Ctrl/Cmd + 0).',
      'Premi F per lo schermo intero e cambia schermata con i pulsanti o le frecce.',
      'Cerca bande nelle sfumature, linee dritte nelle griglie e nitidezza o effetto moiré nelle trame fini.',
      'Regola luminosità, contrasto e nitidezza del monitor guardando ogni schermata.',
    ],
    useCases: [
      { title: 'Prima configurazione', description: 'Regola luminosità, contrasto e nitidezza appena tolto dalla scatola.' },
      { title: 'Controllo del banding', description: 'Le sfumature morbide rivelano scalini dovuti a poca profondità colore.' },
      { title: 'Geometria e scala', description: 'Le griglie mostrano immagini stirate, tagliate o sfocate.' },
      { title: 'Cavo e ingresso', description: 'Le trame fini mostrano se un cavo o un adattatore ammorbidisce l’immagine.' },
    ],
    faqs: [
      { question: 'Un test del monitor online vale quanto un calibratore?', answer: 'No. Le schermate aiutano a valutare e regolare a occhio, ma una calibrazione colore precisa richiede un colorimetro.' },
      {
        question: 'Perché le trame fini sfarfallano o mostrano moiré?',
        answer: 'Zoom del browser, scala del sistema o una risoluzione non nativa ricampionano le trame da 1 pixel. Usa zoom al 100% e la risoluzione nativa.',
      },
      { question: 'Come dovrebbe apparire la schermata della gamma?', answer: 'Da lontano, le zone a righe e quelle piene dovrebbero avere una luminosità simile. Una grande differenza indica una gamma lontana dallo standard 2,2.' },
    ],
  },
  'screen-resolution-test': {
    glance: {
      answer:
        'Un test della risoluzione dello schermo mostra la risoluzione in pixel, l’area visibile del browser, il rapporto pixel e la profondità colore. La risoluzione fisica è la dimensione CSS per il rapporto pixel: un portatile 1920 × 1080 con scala al 125% indica 1536 × 864 pixel CSS.',
      features: ['Risoluzione di schermo, finestra e fisica', 'Rapporto pixel e scala', 'Profondità colore e orientamento', 'Si aggiorna se ridimensioni o ruoti'],
      benefits: ['Verifica se usi davvero 1080p, 1440p o 4K', 'Controlla la scala di Windows o macOS', 'Immediato, niente da installare'],
    },
    steps: [
      'Apri la pagina sullo schermo da controllare: i valori si aggiornano in tempo reale.',
      'Ridimensiona la finestra o ruota il dispositivo per vedere cambiare i valori.',
      'Premi F per lo schermo intero e vedere tutta l’area visibile.',
      'Guarda la trama da 1 pixel: a risoluzione nativa e zoom al 100% deve sembrare un grigio fine e uniforme.',
    ],
    useCases: [
      { title: 'Conoscere la risoluzione', description: 'Trova subito la risoluzione per sfondi o impostazioni dei giochi.' },
      { title: 'Design responsive', description: 'Gli sviluppatori controllano area visibile e rapporto pixel su dispositivi reali.' },
      { title: 'Problemi di scala', description: 'Verifica se la scala del sistema cambia la risoluzione effettiva.' },
      { title: 'Richieste di assistenza', description: 'Condividi dati esatti dello schermo quando segnali un bug.' },
    ],
    faqs: [
      {
        question: 'Perché la dimensione è minore della risoluzione del monitor?',
        answer: 'I browser usano pixel CSS. Con scala al 150%, uno schermo largo 3840 pixel indica 2560. Moltiplica per il rapporto pixel per avere i pixel fisici.',
      },
      { question: 'Cos’è il rapporto pixel?', answer: 'Il numero di pixel fisici per pixel CSS. Un valore di 2 indica uno schermo ad alta densità, tipo Retina.' },
      { question: 'Lo zoom del browser cambia i valori?', answer: 'Sì. Lo zoom cambia area visibile e rapporto pixel. Torna al 100% per valori esatti.' },
    ],
  },
  'brown-noise-generator': {
    glance: {
      answer:
        'Un generatore di rumore marrone riproduce un suono profondo e cupo la cui potenza cala molto sulle frequenze alte, come una cascata o un vento forte. È più morbido del rumore bianco, perciò molti lo preferiscono per dormire, concentrarsi con l’ADHD e coprire rumori bassi come traffico o russare.',
      features: ['Vero rumore marrone (browniano), generato al momento', 'Filtri passa-basso e passa-alto per il tono', 'Volume e timer per dormire', 'Passa al rumore bianco o rosa con un clic'],
      benefits: ['Suono morbido e grave per sessioni lunghe', 'Molto usato per la concentrazione', 'Gratis, funziona offline dopo il caricamento'],
    },
    steps: [
      'Premi Avvia. Non suona nulla prima.',
      'Regola il volume; il rumore marrone sembra più basso del bianco allo stesso livello, quindi alza piano.',
      'Un passa-basso rende il rombo ancora più profondo, un passa-alto toglie i bassi più profondi sugli altoparlanti piccoli.',
      'Scegli un timer per dormire e una grafica, se vuoi.',
      'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Concentrazione profonda', description: 'Molte persone, anche con ADHD, dicono che il rumore marrone le aiuta a concentrarsi.' },
      { title: 'Dormire', description: 'Il suo tono grave e morbido si può lasciare acceso per ore.' },
      { title: 'Coprire i rumori bassi', description: 'Copre il rombo del traffico, i passi e il ronzio del condizionatore.' },
      { title: 'Rilassarsi', description: 'Abbinalo a uno schermo scuro la sera.' },
    ],
    faqs: [
      {
        question: 'Che differenza c’è con il rumore bianco e rosa?',
        answer: 'Il rumore marrone perde potenza in fretta salendo di frequenza (circa 6 dB per ottava), quindi è il più grave dei tre. Il rosa sta nel mezzo, il bianco è il più brillante.',
      },
      { question: 'Perché si chiama rumore marrone?', answer: 'Dal moto browniano, il movimento casuale delle particelle, non dal colore. Si chiama anche rumore rosso.' },
      { question: 'Perché lo sento appena sul telefono?', answer: 'Gli altoparlanti piccoli non riproducono i bassi profondi. Usa cuffie o casse più grandi, oppure un passa-alto e un po’ più di volume.' },
    ],
  },
  'pink-noise-generator': {
    glance: {
      answer:
        'Un generatore di rumore rosa riproduce un suono la cui potenza cala in modo uguale a ogni ottava, quindi suona equilibrato e più morbido del rumore bianco, come una pioggia costante. Si usa per dormire, rilassarsi e studiare, e i tecnici audio lo usano per controllare l’equilibrio delle casse.',
      features: ['Vero rumore rosa generato nel browser', 'Filtro del tono, volume in decibel e timer', 'Forma d’onda o spettro in tempo reale', 'Controllo da tastiera: spazio per avviare o mettere in pausa'],
      benefits: ['Suono naturale, come la pioggia, facile per dormire', 'Segnale di riferimento per controllare le casse', 'Gratis e con poca pubblicità'],
    },
    steps: [
      'Premi Avvia. L’audio non parte mai da solo.',
      'Regola il volume in decibel.',
      'Affina il tono con il filtro passa-basso o passa-alto e il cursore di taglio.',
      'Scegli un timer per dormire e una grafica, se vuoi.',
      'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Dormire', description: 'Un’alternativa diffusa e meno aspra del rumore bianco per tutta la notte.' },
      { title: 'Studiare', description: 'Un sottofondo equilibrato per lunghe sessioni di lettura.' },
      { title: 'Controllare le casse', description: 'Il rumore rosa è il segnale standard per ascoltare l’equilibrio delle casse.' },
      { title: 'Ambienti calmi', description: 'Sottofondo morbido per sale d’attesa e studi.' },
    ],
    faqs: [
      { question: 'Che cos’è il rumore rosa?', answer: 'Il rumore rosa ha la stessa energia in ogni ottava, quindi ogni passo verso gli acuti è un po’ più basso che nel bianco. Suona più naturale, come la pioggia.' },
      { question: 'Il rumore rosa aiuta a dormire?', answer: 'Molti lo trovano rilassante e alcuni piccoli studi suggeriscono che possa favorire il sonno profondo, ma l’effetto varia da persona a persona.' },
      { question: 'Posso usarlo per provare le casse?', answer: 'Sì, per un ascolto veloce. Per misure precise di una stanza servono un software di misura e un microfono calibrato.' },
    ],
  },
  'broken-screen': {
    glance: {
      answer:
        'Lo scherzo dello schermo rotto riempie il display con un’immagine realistica di vetro incrinato: punto d’impatto, crepe che si allargano e, se vuoi, macchie d’inchiostro dell’LCD, con il rumore del vetro. Lascialo sul telefono o sul PC di un amico e poi svela lo scherzo con il pulsante chiudi o Esc.',
      features: ['Crepe realistiche, diverse ogni volta', 'Tocca o fai clic per aggiungere altri colpi', 'Effetto LCD danneggiato e rumore di vetro', 'Sfondi: wallpaper, schermata di blocco o nero'],
      benefits: ['Uno scherzo classico e innocuo che sembra vero', 'Funziona su telefoni, tablet e PC', 'Nessuna app, nulla cambia sul dispositivo'],
    },
    steps: [
      'Scegli uno sfondo: wallpaper, schermata di blocco o nero.',
      'Tocca o fai clic in un punto qualsiasi per rompere il vetro lì. Ogni tocco aggiunge un altro colpo.',
      'Lascia il rumore del vetro per più realismo, oppure disattivalo.',
      'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Scherzi innocui', description: 'Un piccolo spavento per un amico, poi la rivelazione.' },
      { title: 'Oggetto di scena', description: 'Mostra un telefono o un monitor rotto in un corto senza rompere nulla.' },
      { title: 'Pesce d’aprile', description: 'Uno scherzo d’ufficio classico, del tutto reversibile.' },
      { title: 'Riferimento grafico', description: 'Studia come si propagano le crepe per illustrazioni ed effetti visivi.' },
    ],
    faqs: [
      { question: 'Può danneggiare il mio schermo?', answer: 'No. È solo un’immagine disegnata nel browser. Premi Esc, tocca Cancella o chiudi la scheda.' },
      {
        question: 'Perché sembra vetro vero?',
        answer: 'Un impatto reale lascia un centro frantumato, lunghe crepe a raggiera e anelli di crepe corte in mezzo. L’effetto disegna tutti e tre, con riflessi e ombre su ogni crepa.',
      },
      { question: 'Come fare lo scherzo in modo responsabile?', answer: 'Fallo breve, scegli qualcuno che riderà, non usarlo mai per ottenere soldi o informazioni e svela subito lo scherzo.' },
    ],
  },
  'countdown-timer': {
    glance: {
      answer:
        'Un timer con conto alla rovescia conta dal tempo scelto fino a zero con grandi cifre a schermo intero, poi ti avvisa con un lampeggio leggero e un suono opzionale. Imposta ore, minuti e secondi per lezioni, esami, riunioni, presentazioni, allenamenti o cucina, e leggilo dall’altra parte della stanza.',
      features: ['Grandi cifre a schermo intero', 'Ore, minuti e secondi con preimpostazioni', 'Lampeggio e suono opzionale allo zero', 'Resta preciso anche nelle schede in background'],
      benefits: ['Tiene riunioni e lezioni nei tempi', 'Leggibile dal fondo della stanza', 'Gratis, senza app'],
    },
    steps: [
      'Scegli una preimpostazione come 1, 5 o 25 minuti, oppure inserisci ore, minuti e secondi.',
      'Premi Avvia o la barra spaziatrice. Premila di nuovo per la pausa, o R per azzerare.',
      'Attiva il suono se lo vuoi: è spento di default.',
      'Premi F per lo schermo intero così tutta la stanza lo vede. Esc per uscire.',
    ],
    useCases: [
      { title: 'In classe', description: 'Cronometra verifiche, attività e pause sul proiettore.' },
      { title: 'Presentazioni', description: 'Tieni i relatori nei tempi con un timer visibile.' },
      { title: 'Pomodoro', description: 'Sessioni di concentrazione da 25 minuti con brevi pause.' },
      { title: 'Allenamento e cucina', description: 'Un timer grande da leggere a distanza.' },
    ],
    faqs: [
      { question: 'Il timer continua in una scheda in background?', answer: 'Sì. Si basa sull’orario reale e resta preciso anche se il browser rallenta le schede in background.' },
      { question: 'Emette un suono?', answer: 'Solo se attivi il suono. Altrimenti lo schermo lampeggia leggermente allo scadere del tempo.' },
      { question: 'Qual è la durata massima?', answer: 'Fino a 99 ore, 59 minuti e 59 secondi.' },
    ],
  },
}
