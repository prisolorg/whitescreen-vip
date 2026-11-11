import type { ToolTranslations } from '../types'

export const it: ToolTranslations = {
  'screen-uniformity-test': {
    glance: {
      answer:
        'Un test di uniformità dello schermo mostra campi scuri e grigi a schermo intero per vedere se luminosità e colore sono uniformi su tutto il pannello. Rivela perdite di luce ai bordi, clouding sugli schermi LCD e IPS, IPS glow, vignettatura e l’effetto schermo sporco delle TV grandi.',
      features: ['Campi nero, grigio scuro e grigio medio', 'Livelli di luminosità per vedere il clouding al buio', 'Indicazioni per distinguere IPS glow e perdite di luce', 'Schermo intero senza barre del browser'],
      benefits: ['Trova difetti del pannello coperti dalla garanzia', 'Confronta con equità due monitor o una sostituzione', 'Circa due minuti in una stanza buia'],
    },
    steps: [
      'Abbassa le luci della stanza e lascia scaldare lo schermo qualche minuto.',
      'Premi F per lo schermo intero e parti dal grigio più scuro per cercare perdite ai bordi.',
      'Passa ai grigi più chiari e cerca macchie, bande o angoli più scuri.',
      'Attiva la griglia per confrontare zone precise dello schermo.',
    ],
    useCases: [
      { title: 'Perdite di luce', description: 'I campi quasi neri rivelano la luce che sfugge dai bordi dei pannelli LCD.' },
      { title: 'Effetto schermo sporco', description: 'I grigi medi mostrano bande verticali o macchie sulle TV durante le panoramiche.' },
      { title: 'Vignettatura', description: 'Confronta gli angoli con il centro per vedere bordi più scuri.' },
      { title: 'Lotteria dei pannelli', description: 'Confronta due esemplari dello stesso modello prima di tenerne uno.' },
    ],
    faqs: [
      { question: 'Perché il mio schermo sembra irregolare sul grigio?', answer: 'Nessun pannello è perfettamente uniforme. Piccole differenze sono normali; grandi macchie, bande forti o angoli chiari possono meritare una segnalazione se il dispositivo è nuovo.' },
      { question: 'Devo fare il test al buio?', answer: 'Sì. La luce ambiente nasconde perdite e clouding leggeri, quindi una stanza buia rende il test molto più rivelatore.' },
      { question: 'La fotocamera mostra quello che vedo?', answer: 'Le fotocamere dei telefoni spesso esagerano perdite e clouding. Giudica con i tuoi occhi e usa le foto solo come riferimento.' },
    ],
  },
  stopwatch: {
    glance: {
      answer:
        'Un cronometro online misura il tempo trascorso dall’avvio allo stop, al centesimo di secondo, con grandi cifre a schermo intero. Registra i giri per corsa, nuoto, allenamenti ed esperimenti; il tempo resta preciso perché è misurato sull’orologio del tuo dispositivo.',
      features: ['Avvio, stop, giro e azzeramento', 'Precisione al centesimo di secondo', 'Elenco dei giri con tempi parziali', 'Barra spaziatrice e scorciatoie da tastiera'],
      benefits: ['Display grande per palestre e aule', 'Tempi sul giro precisi', 'Gratis, funziona offline'],
    },
    steps: [
      'Premi Avvia o la barra spaziatrice per iniziare.',
      'Premi Giro o L per salvare un parziale mentre continua a contare.',
      'La barra spaziatrice mette in pausa, R azzera.',
      'Premi F per lo schermo intero ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Sport e corsa', description: 'Registra tempi sul giro e intervalli.' },
      { title: 'Discorsi', description: 'Cronometra interventi e prove con precisione.' },
      { title: 'Giochi e quiz', description: 'Cronometra i round in classe o nelle serate giochi.' },
      { title: 'Laboratorio e cucina', description: 'Misura reazioni e tempi di infusione.' },
    ],
    faqs: [
      { question: 'Quanto è preciso il cronometro?', answer: 'Usa l’orologio ad alta risoluzione del browser e mostra i centesimi di secondo. La frequenza dello schermo può ritardare la visualizzazione di pochi millisecondi.' },
      { question: 'I giri vengono salvati?', answer: 'I giri restano sulla pagina finché non azzeri o la chiudi. Puoi copiarli negli appunti.' },
      { question: 'Funziona offline?', answer: 'Sì. Una volta caricata la pagina, il cronometro funziona senza connessione.' },
    ],
  },
  'matrix-screensaver': {
    glance: {
      answer:
        'Lo screensaver Matrix mostra colonne di caratteri verdi che cadono, la «pioggia digitale» resa famosa dal film Matrix (1999). Funziona nel browser a schermo intero e puoi cambiare colore, velocità e dimensione dei caratteri per una scrivania, una TV o lo sfondo di una diretta.',
      features: ['Katakana, numeri e simboli che cadono', 'Regolazione di colore, velocità e dimensione', 'Schermo intero con cursore nascosto', 'Fluido sugli schermi ad alta frequenza'],
      benefits: ['Un look iconico per schermi inattivi e dirette', 'Nessuno screensaver da installare su Windows o macOS', 'Gratis'],
    },
    steps: [
      'La pioggia parte subito nell’anteprima.',
      'Regola velocità, densità e dimensione del carattere, o scegli un altro colore.',
      'Scegli caratteri katakana, binari o in stile cyber.',
      'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Screensaver', description: 'Lascialo acceso su un monitor inattivo.' },
      { title: 'Atmosfera tech', description: 'Sfondo per dirette, uffici o eventi.' },
      { title: 'Sfondi video', description: 'Registra uno sfondo «cyber» per i tuoi video.' },
      { title: 'Feste in maschera', description: 'Crea l’atmosfera per una serata fantascientifica.' },
    ],
    faqs: [
      { question: 'Quali caratteri usa la pioggia di Matrix?', answer: 'L’effetto originale usava katakana a mezza larghezza specchiati e numeri. Qui puoi scegliere quello stile, il binario o caratteri cyber.' },
      { question: 'Posso usarlo come vero screensaver?', answer: 'I browser non possono installare screensaver di sistema, ma puoi aprirlo a schermo intero quando ti allontani. Il blocco della sospensione tiene acceso lo schermo.' },
      { question: 'Rallenta il computer?', answer: 'È leggero. Sui dispositivi vecchi abbassa la densità per un’animazione più fluida.' },
    ],
  },
  'dvd-screensaver': {
    glance: {
      answer:
        'Lo screensaver DVD è il classico logo che rimbalza dei lettori DVD: attraversa lo schermo, cambia colore ogni volta che tocca un bordo e ogni tanto finisce esattamente in un angolo. Questa versione conta i colpi negli angoli e ti permette di cambiare velocità e dimensione del logo.',
      features: ['Cambio colore a ogni rimbalzo', 'Contatore degli angoli con festa', 'Regolazione di velocità e dimensione del logo', 'Schermo intero su qualsiasi schermo'],
      benefits: ['Nostalgico e stranamente appagante', 'Ottimo sfondo per dirette e sale d’attesa', 'Gratis'],
    },
    steps: [
      'Il logo inizia subito a rimbalzare.',
      'Regola velocità e dimensione del logo con i cursori.',
      'Guarda il contatore degli angoli: ogni angolo preciso viene festeggiato.',
      'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Nostalgia', description: 'Rivivi il classico della sala d’attesa.' },
      { title: 'Schermo inattivo', description: 'Uno screensaver giocoso per la TV o il monitor dell’ufficio.' },
      { title: 'Pause in diretta', description: 'Il pubblico adora aspettare il colpo nell’angolo.' },
      { title: 'In compagnia', description: 'Scommetti con gli amici su quando colpirà l’angolo.' },
    ],
    faqs: [
      { question: 'Colpisce davvero l’angolo esatto?', answer: 'Sì. Quando e quanto spesso dipende da dimensione dello schermo, del logo e velocità. Il contatore registra ogni colpo esatto.' },
      { question: 'È il logo ufficiale del DVD?', answer: 'No. È un badge generico nello stesso spirito e non è collegato a DVD Format/Logo Licensing Corporation.' },
      { question: 'Perché il logo cambia colore?', answer: 'Come nello screensaver classico, il logo sceglie un nuovo colore a ogni bordo toccato e non ripete mai lo stesso due volte di fila.' },
    ],
  },
  'fake-windows-10-update': {
    glance: {
      answer:
        'Una finta schermata di aggiornamento di Windows 10 riproduce la schermata blu «Aggiornamenti in corso» con i puntini che girano e una percentuale che sale piano. A schermo intero sembra che il PC si stia aggiornando: uno scherzo classico e innocuo. Premi Esc per uscire.',
      features: ['Puntini che girano e percentuale che sale', 'Velocità dell’aggiornamento regolabile', 'Schermo intero con cursore nascosto', 'Esci quando vuoi con Esc'],
      benefits: ['Scherzo da ufficio convincente e innocuo', 'Oggetto di scena per video e tutorial', 'Non si installa né modifica nulla'],
    },
    steps: [
      'Imposta con il cursore della velocità quanto in fretta sale la percentuale.',
      'Fai clic su Schermo intero o premi F perché la simulazione riempia lo schermo e nasconda il browser.',
      'Allontanati e lascia avanzare il progresso. Premi Pausa per farlo sembrare bloccato.',
      'Premi Esc per uscire e svelare lo scherzo.',
    ],
    useCases: [
      { title: 'Scherzi in ufficio', description: 'Fai credere a un collega che il PC si stia aggiornando, poi svela tutto.' },
      { title: 'Fare una pausa', description: 'Sembra che tu sia occupato quando ti allontani dalla scrivania.' },
      { title: 'Oggetto di scena per film e video', description: 'Mostra un aggiornamento di Windows 10 credibile sul set.' },
      { title: 'Nostalgia', description: 'Rivedi una classica schermata di sistema per divertimento.' },
    ],
    faqs: [
      { question: 'È un aggiornamento reale o qualcosa di dannoso?', answer: 'No. È una simulazione visiva innocua in una normale scheda del browser. Non modifica il dispositivo, non installa nulla e non chiede dati. Premi Esc per uscire quando vuoi.' },
      { question: 'È collegato a Microsoft?', answer: 'No. È una ricostruzione indipendente a scopo di intrattenimento, non collegata né sponsorizzata da Microsoft.' },
      { question: 'Posso controllare la velocità di avanzamento?', answer: 'Sì. Il cursore della velocità regola quanto in fretta sale la percentuale, e Pausa la ferma per far sembrare bloccato l’aggiornamento.' },
      { question: 'Come esco dalla finta schermata?', answer: 'Premi Esc, oppure muovi il mouse o tocca lo schermo per mostrare il pulsante chiudi. Anche chiudere la scheda funziona.' },
    ],
  },
  'ring-light': {
    glance: {
      answer:
        'Una ring light online mostra un anello luminoso sullo schermo che illumina il viso in modo uniforme da davanti, come la ring light di un fotografo. Regola dimensione, spessore, calore e luminosità dell’anello, poi passa a schermo intero per selfie, videochiamate, trucco o foto di prodotto.',
      features: ['Dimensione e spessore dell’anello regolabili', 'Temperatura colore da calda a fredda', 'Regolazione della luminosità e schermo intero', 'Funziona su smartphone, tablet e laptop'],
      benefits: ['Luce uniforme e senza ombre, gratis', 'Riflessi negli occhi come una vera ring light', 'Qualsiasi schermo libero diventa una luce'],
    },
    steps: [
      'Apri la pagina sullo schermo davanti a te (laptop, monitor o tablet) e alza la luminosità.',
      'Regola dimensione e spessore dell’anello; un anello più spesso dà più luce.',
      'Imposta la temperatura colore o una tinta per look creativi.',
      'Premi F o Schermo intero per riempire lo schermo, ed Esc per uscire.',
    ],
    useCases: [
      { title: 'Videochiamate', description: 'Luce uniforme e lusinghiera sul viso senza comprare una ring light.' },
      { title: 'Selfie e ritratti', description: 'Ottieni il classico riflesso rotondo negli occhi.' },
      { title: 'Trucco', description: 'Vedi bene il viso con luce calda o simile al giorno.' },
      { title: 'Streaming', description: 'Luce principale morbida da un monitor o tablet libero.' },
    ],
    faqs: [
      { question: 'Uno schermo è luminoso come una vera ring light?', answer: 'No. Una vera ring light a LED è molto più potente. Quella su schermo funziona meglio in una stanza poco illuminata, con luminosità al massimo e vicino al viso.' },
      { question: 'Perché un anello e non tutto lo schermo?', answer: 'Un anello ti illumina da tutti i lati, riduce le ombre sotto naso e occhi e crea il riflesso rotondo negli occhi. Attiva il riempimento del centro se ti serve tutta la luce possibile.' },
      { question: 'Quale temperatura colore sta meglio?', answer: 'Circa 4500–5500 K appare naturale sulla maggior parte delle carnagioni. Più calda (3000 K) la sera, più fredda (6500 K) per abbinarla alla luce del giorno.' },
    ],
  },
}
