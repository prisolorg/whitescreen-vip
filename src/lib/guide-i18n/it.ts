import type { GuideTranslation } from './types'

export const it: Record<string, GuideTranslation> = {
  'dead-pixel-test': {
    slug: 'test-pixel-morti',
    navLabel: 'Test pixel morti',
    title: 'Test dei pixel morti: come trovare pixel morti, bloccati e caldi su qualsiasi schermo',
    metaTitle: 'Test pixel morti: trova pixel morti e bloccati',
    metaDescription:
      'Scopri come fare un test dei pixel morti su Windows, Mac, iPhone e Android. Trova pixel morti, bloccati e caldi con i colori primari a schermo intero, passo dopo passo.',
    readingTime: '6 min di lettura',
    category: 'Diagnostica dello schermo',
    intro:
      'Ogni pannello moderno (LCD, IPS, VA o OLED) è formato da milioni di minuscoli subpixel rossi, verdi e blu comandati da microtransistor. Quando un transistor si guasta o si blocca, compare un difetto fastidioso che disturba la lettura, il fotoritocco e il gioco. Testare lo schermo con i colori primari a schermo intero è il metodo più rapido e affidabile per trovare i difetti entro il periodo di reso o prima della scadenza della garanzia.',
    toolLabel: 'Apri il test dei pixel morti',
    toolDescription: 'Scorri schermate rosse, verdi, blu, nere e bianche a schermo intero per trovare le anomalie.',
    sections: [
      {
        title: 'Pixel morti, bloccati e caldi: come distinguerli',
        content: [
          'Non tutti i difetti dei pixel hanno lo stesso aspetto o lo stesso comportamento. Capire il tipo esatto ti aiuta a sapere se un ciclo software può sbloccarlo o se serve sostituire il pannello in garanzia.',
          'Un pixel morto si ha quando il transistor che lo comanda resta completamente spento. Sugli LCD retroilluminati appare come un punto nero fisso, qualunque sia il colore mostrato intorno.',
          'Un pixel bloccato si ha quando uno o due subpixel (rosso, verde o blu) restano sempre accesi mentre gli altri funzionano. Appare come un punto colorato brillante e fisso su sfondi scuri o contrastati.',
          'Un pixel caldo si ha quando tutti e tre i subpixel restano accesi al massimo insieme, creando un punto bianco permanente che risalta molto sul nero e sui contenuti scuri.',
        ],
        tips: [
          'I pixel morti sono punti neri visibili su schermate bianche, rosse, verdi o blu.',
          'I pixel bloccati sono punti colorati (rosso, verde o blu) visibili su sfondi scuri.',
          'I pixel caldi appaiono come puntini bianchi permanenti su sfondi scuri.',
        ],
      },
      {
        title: 'Primo passo fondamentale: pulisci prima di diagnosticare',
        content: [
          'Un numero sorprendente di presunti «pixel morti» si rivela essere polvere microscopica, goccioline secche di uno starnuto o minuscoli schizzi di grasso sul vetro.',
          'Prima di concludere che il pannello è difettoso, pulisci delicatamente lo schermo spento con un panno in microfibra ottica pulito e asciutto. Non grattare mai con le unghie: potresti rigare per sempre i filtri polarizzatori antiriflesso.',
        ],
      },
      {
        title: 'Guida passo passo per tutti i dispositivi',
        content: ['Segui queste istruzioni per testare a fondo monitor, portatili, tablet e smartphone.'],
        steps: [
          'Apri il test dei pixel morti di WhiteScreen.vip e passa a schermo intero per nascondere barra degli indirizzi, barra delle applicazioni e altri elementi.',
          'Controlla prima la schermata bianca: scorri lentamente il pannello dall’angolo in alto a sinistra a quello in basso a destra cercando punti neri fissi (pixel morti).',
          'Passa al nero: cerca punti bianchi luminosi (pixel caldi) o puntini colorati (pixel bloccati).',
          'Scorri rosso, verde e blu puri: ogni colore primario prova un canale di subpixel. Un subpixel difettoso appare come un punto più scuro o di un altro colore.',
          'Su Windows o macOS: imposta la luminosità all’80–100% e guarda lo schermo frontalmente, in perpendicolare, per evitare la diffrazione ottica.',
          'Su iPhone o Android: assicurati che non restino margini del browser, oppure salva i colori nella galleria e aprili a schermo intero.',
        ],
      },
      {
        title: 'Limiti dei test nel browser e verità sulla garanzia',
        content: [
          'Gli strumenti di test nel browser danno una diagnosi visiva immediata e precisa, perché accendono ogni pixel al 100% di saturazione senza artefatti di compressione video.',
          'Diffida però dei siti che promettono che colori lampeggianti o video in loop riparano per magia i pixel morti. Un esercitatore rapido può a volte sbloccare un transistor pigro, ma un circuito interrotto o un transistor bruciato non si aggiustano via software.',
          'Controlla la classe di difetti dei pixel del produttore (ISO 9241-307 / ISO 13406-2). La maggior parte delle garanzie richiede da 3 a 5 subpixel morti, o almeno un pixel morto al centro, prima di concedere la sostituzione gratuita.',
        ],
        checklist: [
          'Confronta il numero di difetti con la garanzia del produttore entro il periodo di reso di 14–30 giorni.',
          'Scatta una foto macro del difetto con lo smartphone come prova per l’assistenza.',
          'Verifica se il negozio offre una garanzia «zero pixel morti» nel primo periodo dopo l’acquisto.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Un test nel browser può riparare un pixel morto?',
        answer:
          'No. Se un transistor è rotto o bruciato, nessun software può ripararlo. Le utility a lampeggio rapido a volte sbloccano subpixel bloccati, ma i pixel morti permanenti richiedono la sostituzione del pannello.',
      },
      {
        question: 'Perché a volte i pixel bloccati spariscono da soli?',
        answer:
          'Nei pannelli a cristalli liquidi, i pixel bloccati nascono spesso da uno squilibrio di carica elettrica o da una leggera tensione meccanica. Quando lo schermo si scalda o si raffredda, la dilatazione termica e i cicli di tensione possono ripristinare l’orientamento normale dei cristalli.',
      },
      {
        question: 'Come distinguo la polvere sullo schermo da un pixel morto?',
        answer:
          'Cambia angolo di visione spostando la testa di circa 15 cm a destra o a sinistra. Poiché il vetro ha uno spessore, la polvere in superficie si sposta leggermente rispetto allo strato luminoso (effetto parallasse), mentre un pixel morto resta fermo nella griglia.',
      },
    ],
  },
  'screen-color-test': {
    slug: 'test-colori-schermo',
    navLabel: 'Test colori schermo',
    title: 'Test dei colori dello schermo: come valutare precisione ed equilibrio dei colori del monitor',
    metaTitle: 'Test colori schermo: precisione ed equilibrio',
    metaDescription:
      'Controlla dominanti di colore, banding, scostamenti del gamma e contrasto del monitor. Guida passo passo al test dei colori per PC, Mac e smartphone.',
    readingTime: '6 min di lettura',
    category: 'Calibrazione dello schermo',
    intro:
      'Che tu ritocchi foto, faccia color grading, progetti siti o debba abbinare due monitor sulla stessa scrivania, la precisione dei colori è fondamentale. Dominanti leggere, curve di gamma irregolari e bande di colore possono falsare il lavoro senza che te ne accorga. Un test sistematico con campi di riferimento a schermo intero rivela dominanti, deriva del punto di bianco e saturazione tagliata senza strumenti costosi.',
    toolLabel: 'Apri il test dei colori',
    toolDescription: 'Prova grigi neutri, colori primari ed equilibrio della saturazione su tutto lo schermo.',
    sections: [
      {
        title: 'Perché fare un test visivo dei colori prima di calibrare',
        content: [
          'Molti monitor escono di fabbrica con una dominante blu esagerata, verdi ipersaturi e neri chiusi, per colpire in negozio più che per essere precisi.',
          'Prima di comprare un colorimetro, un test visivo strutturato ti mostra se lo schermo ha una dominante generale (ad esempio verde o magenta nei mezzitoni), neri chiusi o forti cambi di colore con l’angolo di visione.',
        ],
        tips: [
          'Lascia scaldare il monitor almeno 30 minuti prima di valutare i colori: la temperatura della retroilluminazione cambia durante il riscaldamento.',
          'Spegni le luci della stanza che creano riflessi colorati sul vetro.',
        ],
      },
      {
        title: 'Procedura di test dei colori passo passo',
        content: ['Segui questi passaggi su Windows, macOS e postazioni con più monitor.'],
        steps: [
          'Disattiva i filtri software: Luce notturna su Windows, True Tone e Night Shift su macOS e la protezione occhi sullo smartphone.',
          'Apri il test dei colori di WhiteScreen.vip a schermo intero e scegli il grigio neutro al 50%.',
          'Valuta il grigio: un grigio neutro puro non deve sembrare rosato, verdastro o bluastro. Ogni dominante visibile indica una deriva del punto di bianco.',
          'Scorri rosso, verde e blu: verifica che i colori siano uniformi da un angolo all’altro, senza scurirsi o cambiare tono ai bordi.',
          'Controlla i colori secondari (ciano, magenta, giallo): usano più canali insieme e rivelano squilibri tra di essi.',
          'Confronta più monitor: trascina la finestra del browser sul confine tra due schermi per vedere le differenze di punto di bianco.',
        ],
      },
      {
        title: 'Come riconoscere il banding e i limiti di profondità di colore',
        content: [
          'Gli schermi standard a 8 bit mostrano 16,7 milioni di colori, i pannelli moderni a 10 bit (8 bit + FRC o 10 bit reali) oltre un miliardo di sfumature. Quando monitor o driver gestiscono male le sfumature, i gradienti morbidi diventano gradini visibili (banding).',
          'Osserva i gradienti nella nostra pagina di test del monitor. Se appaiono a gradini o con falsi aloni di colore, controlla che il pannello della scheda video (NVIDIA, AMD Radeon o Intel) usi la gamma RGB completa (0–255) e non quella video limitata (16–235).',
        ],
        checklist: [
          'Imposta la gamma dinamica di uscita su «Completa» (0–255) nelle impostazioni della GPU.',
          'Scegli la modalità sRGB o D65 nel menu del monitor (OSD) per una precisione web standard.',
          'Allinea frequenza di aggiornamento e profondità di colore nelle configurazioni a due monitor.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Perché il mio schermo bianco sembra un po’ giallo accanto al telefono?',
        answer:
          'Gli smartphone usano spesso un bianco freddo di 7000–7500 K, così un monitor calibrato a 6500 K (D65) sembra caldo o giallastro al confronto. D65 è la temperatura colore standard per web e video.',
      },
      {
        question: 'Che differenza c’è tra le modalità sRGB e DCI-P3?',
        answer:
          'sRGB è lo spazio colore standard per web e ufficio. DCI-P3 copre uno spettro circa del 25% più ampio ed è usato nel cinema HDR e negli smartphone moderni. Per il lavoro web, bloccare il monitor in sRGB evita la sovrasaturazione.',
      },
    ],
  },
  'screen-uniformity-test': {
    slug: 'test-uniformita-schermo',
    navLabel: 'Uniformità dello schermo',
    title: 'Test di uniformità dello schermo: come controllare backlight bleeding, IPS glow e clouding',
    metaTitle: 'Test di uniformità: backlight bleeding e IPS glow',
    metaDescription:
      'Controlla backlight bleeding, IPS glow, clouding, vignettatura ed effetto schermo sporco (DSE) del monitor con schermate grigie e nere.',
    readingTime: '6 min di lettura',
    category: 'Diagnostica dello schermo',
    intro:
      'Nessuno schermo piatto distribuisce la luminosità in modo perfetto su tutta la superficie. Ma un forte backlight bleeding, un IPS glow eccessivo, angoli scuri o l’«effetto schermo sporco» (DSE) possono rovinare le scene scure e creare ombre fastidiose sui siti con sfondo chiaro. Un test di uniformità strutturato, con illuminazione controllata, ti aiuta a individuare i difetti del pannello e a capire se rientrano nelle tolleranze di produzione.',
    toolLabel: 'Apri il test di uniformità',
    toolDescription: 'Esamina grigio scuro 5%, grigio 50%, nero e bianco con griglie opzionali.',
    sections: [
      {
        title: 'Backlight bleeding, IPS glow e clouding: la differenza decisiva',
        content: [
          'Prima di restituire un monitor è essenziale distinguere un vero difetto di produzione dalle caratteristiche tipiche della tecnologia del pannello.',
          'Il backlight bleeding è un difetto di assemblaggio: il pannello è schiacciato o montato male nella cornice e la luce dei LED fuoriesce dai bordi. Appare come macchie giallastre o bianche fisse sui bordi, che non cambiano da dove guardi.',
          'L’IPS glow è una caratteristica ottica naturale di tutti i pannelli IPS. Poiché i cristalli IPS non bloccano del tutto la luce obliqua, da vicino compare un leggero bagliore ambrato o argentato negli angoli. Se muovi la testa o ti allontani di mezzo metro, cambia e si attenua.',
          'Il clouding e l’effetto schermo sporco (DSE) indicano una diffusione irregolare della retroilluminazione, con nuvole grigie visibili nelle panoramiche su campi uniformi, come il prato di una partita o il cielo in un videogioco.',
        ],
        tips: [
          'Il backlight bleeding resta nello stesso punto e con la stessa intensità da qualsiasi angolo.',
          'L’IPS glow cambia intensità e posizione quando muovi la testa da sinistra a destra.',
          'L’effetto schermo sporco (DSE) si vede meglio su un grigio uniforme al 20% o al 50%.',
        ],
      },
      {
        title: 'Come preparare bene l’ambiente di test',
        content: [
          'In un ufficio luminoso il backlight bleeding quasi sparisce, mentre una foto col telefono al buio in modalità notte esagera il glow di dieci volte.',
        ],
        steps: [
          'Abbassa le luci della stanza a un livello serale confortevole (non buio totale).',
          'Disattiva contrasto dinamico, equalizzatore del nero o local dimming nel menu del monitor.',
          'Imposta la luminosità al tuo livello di lavoro abituale (circa 120–150 nit, di solito 30–50% nel menu).',
          'Apri la schermata nera di WhiteScreen.vip a schermo intero e siediti alla tua distanza normale (almeno un braccio).',
          'Osserva gli angoli: se dai bordi escono fasci di luce che non cambiano muovendo la testa, è backlight bleeding.',
          'Passa alle nostre schermate grigio 5% e grigio 50% per cercare effetto schermo sporco e vignettatura dal centro ai bordi.',
        ],
      },
      {
        title: 'Rimedi pratici per i problemi di uniformità',
        content: [
          'Se lo schermo ha un leggero bleeding o IPS glow che non giustifica il reso, alcuni accorgimenti semplici migliorano molto la visione.',
        ],
        checklist: [
          'Installa una luce d’ambiente dietro il monitor (una striscia LED a 6500 K). L’occhio si adatta e i neri sembrano molto più profondi.',
          'Abbassa la luminosità: il 100% in una stanza buia accentua ogni difetto della retroilluminazione.',
          'Controlla le viti VESA: se troppo strette possono deformare la scocca e causare bleeding da pressione.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Il backlight bleeding è coperto dalla garanzia?',
        answer:
          'I produttori considerano normali un bleeding leggero e l’IPS glow. Un bleeding forte, con macchie bianche nette visibili nel normale lavoro d’ufficio alla luce del giorno, di solito dà diritto alla sostituzione.',
      },
      {
        question: 'Gli schermi OLED hanno backlight bleeding?',
        answer:
          'No. Gli OLED hanno subpixel che emettono luce propria e non usano retroilluminazione. I pixel neri si spengono del tutto: contrasto infinito, senza bleeding né IPS glow.',
      },
    ],
  },
  'clean-laptop-screen': {
    slug: 'pulire-schermo-portatile',
    navLabel: 'Pulire lo schermo del portatile',
    title: 'Come pulire lo schermo del portatile in sicurezza, senza graffi né aloni',
    metaTitle: 'Come pulire lo schermo del portatile in sicurezza',
    metaDescription:
      'Guida sicura passo passo per pulire lo schermo del portatile o del MacBook con un controllo su schermo bianco, microfibra e senza prodotti aggressivi.',
    readingTime: '5 min di lettura',
    category: 'Pulizia e manutenzione',
    intro:
      'Gli schermi di portatili, MacBook e monitor moderni hanno rivestimenti antiriflesso, pellicole polarizzatrici e strati oleofobici molto delicati. Detergenti per vetri, carta da cucina o troppa pressione possono rimuovere questi strati per sempre o danneggiare i cristalli liquidi. Usando uno schermo bianco a tutto schermo come luce di controllo vedi ogni macchia, granello di polvere e segno della tastiera prima di pulire con la tecnica giusta.',
    warning:
      'ISTRUZIONI DI SICUREZZA: spegni sempre il portatile o il monitor e scollegalo dalla corrente prima di usare un panno o un liquido. Non spruzzare mai acqua o detergente direttamente su schermo, cerniere o bordi. Il liquido che finisce nel bordo inferiore può distruggere la retroilluminazione.',
    toolLabel: 'Apri lo schermo bianco per il controllo',
    toolDescription: 'La luce bianca a tutto schermo mostra polvere, impronte e aloni prima della pulizia.',
    sections: [
      {
        title: 'Perché lo schermo bianco è il miglior strumento di controllo',
        content: [
          'Con lo schermo spento o uno sfondo scuro, il grasso delle dita, i segni della tastiera e la polvere fine si confondono con il nero del pannello.',
          'Aprire WhiteScreen.vip a tutto schermo illumina il pannello con una luce uniforme e contrastata. Polvere e macchie di grasso diventano sagome scure sullo sfondo chiaro: sai esattamente dove pulire.',
        ],
      },
      {
        title: 'Pulizia sicura passo passo',
        content: ['Segui questi passaggi, approvati dai produttori, per schermi opachi, lucidi e Retina di MacBook.'],
        steps: [
          'Controlla lo schermo con WhiteScreen.vip a tutto schermo e luminosità al 100% per individuare sporco, grasso della tastiera e gocce secche.',
          'Spegni del tutto il portatile e scollega caricatore e cavi USB. Lascia raffreddare lo schermo 5 minuti (su uno schermo caldo l’umidità evapora di colpo e lascia aloni).',
          'Usa un panno in microfibra ottica pulito e fitto (come quelli per occhiali e obiettivi). Mai carta da cucina, fazzoletti o magliette.',
          'Passa il panno con delicatezza con movimenti circolari o orizzontali sovrapposti. Lascia che le fibre raccolgano la polvere senza premere sul pannello.',
          'Per le impronte grasse ostinate: inumidisci un angolo del panno con un po’ di acqua distillata. Deve essere appena umido, mai gocciolante.',
          'Strofina la macchia con l’angolo umido e asciuga subito la zona con la parte asciutta del panno.',
          'Aspetta 3 minuti che l’umidità residua evapori prima di chiudere il coperchio o accendere.',
        ],
      },
      {
        title: 'Errori comuni che rovinano gli schermi',
        content: ['Molti trucchi di pulizia popolari online causano danni irreversibili agli schermi moderni.'],
        checklist: [
          'Mai detergenti per vetri: ammoniaca e aceto rimuovono il trattamento antiriflesso.',
          'Mai acetone, solvente per smalto o diluenti: sciolgono all’istante plastiche e cornici.',
          'Mai spruzzare liquidi direttamente sullo schermo: le gocce scendono nel bordo inferiore, dove passano i cavi flessibili del display.',
          'Mai carta da cucina o tovaglioli: le fibre di cellulosa causano micrograffi permanenti.',
          'Mai premere forte con le dita: la pressione lascia macchie bianche permanenti sul pannello LCD.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Posso usare alcol isopropilico al 70% sullo schermo del MacBook?',
        answer:
          'Apple consente salviette con alcol isopropilico al 70% sulle superfici esterne e in vetro di alcuni MacBook, passandole con delicatezza. Per la manutenzione quotidiana, l’acqua distillata su una microfibra è molto più sicura e non rischia di sciogliere l’antiriflesso.',
      },
      {
        question: 'Perché acqua distillata e non quella del rubinetto?',
        answer:
          'L’acqua del rubinetto contiene minerali disciolti come calcio, magnesio e cloro. Evaporando lascia aloni calcarei che possono graffiare le pellicole ottiche quando si strofina.',
      },
    ],
  },
  'oled-burn-in-prevention': {
    slug: 'prevenire-burn-in-oled',
    navLabel: 'Burn-in OLED',
    title: 'Prevenire il burn-in OLED: come testare, prevenire e proteggere gli schermi OLED',
    metaTitle: 'Prevenire e testare il burn-in OLED – guida',
    metaDescription:
      'Capisci la differenza tra burn-in OLED e ritenzione temporanea. Testa il tuo monitor o TV OLED con schermate a colori e allungane la vita con consigli pratici.',
    readingTime: '7 min di lettura',
    category: 'Manutenzione dello schermo',
    intro:
      'I monitor OLED e QD-OLED offrono un contrasto senza pari, neri profondi e tempi di risposta quasi istantanei. Ma ogni subpixel è un diodo organico che si consuma lentamente con la luce emessa, quindi gli elementi fissi (barra delle applicazioni, barra degli indirizzi, HUD dei giochi) possono causare un’usura irregolare nel tempo. Capire come nasce il burn-in, come testarlo e come impostare il sistema protegge il tuo investimento per anni.',
    warning:
      'AVVISO ONESTO: diffida degli strumenti ingannevoli. Nessun software, colore lampeggiante o video può annullare un burn-in OLED permanente. Quando i subpixel organici hanno perso luminosità, il danno è definitivo. I nostri strumenti ti aiutano a riconoscerlo e prevenirlo prima che diventi irreversibile.',
    toolLabel: 'Apri il test burn-in OLED',
    toolDescription: 'Scorri rosso, magenta, ciano e grigio scuro per vedere i contorni deboli degli elementi fissi.',
    sections: [
      {
        title: 'Ritenzione temporanea o burn-in permanente',
        content: [
          'È fondamentale distinguere la ritenzione temporanea dell’immagine dal burn-in permanente.',
          'La ritenzione temporanea è un fenomeno elettrico: dopo 15–30 minuti con un’immagine molto contrastata resta una carica residua nello strato dei transistor. Un leggero fantasma della finestra resta visibile per qualche minuto e poi sparisce da solo o durante un ciclo automatico di refresh dei pixel.',
          'Il burn-in permanente è un’usura accumulata e disuguale dei subpixel. Se i subpixel rossi o blu nella zona della barra delle applicazioni hanno brillato al massimo per migliaia di ore, emettono meno luce dei vicini e lasciano una sagoma scura permanente visibile sulle schermate a tinta unita.',
        ],
        tips: [
          'La ritenzione temporanea sparisce in pochi minuti o dopo un breve refresh dei pixel di 5 minuti.',
          'Il burn-in permanente si vede su rosso, magenta e grigio 5% e non sparisce mai.',
        ],
      },
      {
        title: 'Come testare il tuo schermo OLED',
        content: ['Segui questi passaggi con le nostre schermate a colori a tutto schermo per notare i primi segni di usura.'],
        steps: [
          'Apri WhiteScreen.vip a tutto schermo per nascondere intestazioni del browser e barra delle applicazioni.',
          'Scegli il rosso pieno: i subpixel rossi si consumano prima di quelli verdi. Esamina con attenzione la zona della barra delle applicazioni, della barra degli indirizzi e gli angoli dell’HUD cercando fantasmi scuri.',
          'Scegli magenta e ciano pieni: i colori composti mostrano differenze di usura tra i canali.',
          'Scegli grigio scuro 5% e grigio 10%: questi grigi quasi neri rivelano bande verticali e usura irregolare invisibili sul bianco puro.',
          'Guarda dalla distanza normale: se vedi contorni netti di icone o barre degli strumenti, il pannello ha un burn-in permanente.',
        ],
      },
      {
        title: 'Regole essenziali per evitare il burn-in OLED',
        content: [
          'I monitor OLED moderni hanno protezioni automatiche, ma alcune semplici abitudini nel sistema sono la difesa migliore contro l’usura precoce.',
        ],
        checklist: [
          'Attiva «Nascondi automaticamente la barra delle applicazioni» su Windows (o nascondi il Dock su macOS).',
          'Usa la modalità scura su Windows, macOS e nel browser: i pixel neri OLED non consumano energia e non si usurano.',
          'Imposta lo spegnimento dello schermo dopo 3–5 minuti di inattività, così il desktop non resta acceso quando ti allontani.',
          'Usa un salvaschermo a tutto schermo, come il nostro orologio a palette o la schermata nera, quando lasci la scrivania.',
          'Non staccare il monitor OLED dalla presa subito dopo averlo spento: in standby esegue un ciclo automatico di pulizia dei pixel.',
          'Attiva le protezioni del menu del monitor: spostamento dei pixel, limitatore di luminosità dei loghi e gestione termica.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Gli esercitatori di pixel lampeggianti riparano il burn-in OLED?',
        answer:
          'No. Le immagini lampeggianti non rigenerano il materiale organico consumato. Anzi, schemi aggressivi alla massima luminosità aggiungono stress termico inutile al pannello.',
      },
      {
        question: 'Ogni quanto devo avviare il refresh profondo dei pixel?',
        answer:
          'Solo quando lo chiede il produttore (di solito ogni 500–1.500 ore d’uso) o se una ritenzione forte non sparisce. Usarlo troppo spesso accelera l’usura del pannello.',
      },
    ],
  },
  'monitor-test': {
    slug: 'test-del-monitor',
    navLabel: 'Test del monitor',
    title: 'Guida completa al test del monitor: difetti, colori e velocità',
    metaTitle: 'Come testare un monitor nuovo, passo dopo passo',
    metaDescription:
      'Guida completa per testare un monitor nuovo o usato: pixel morti, nitidezza, gamma, contrasto, backlight bleeding e tempo di risposta.',
    readingTime: '6 min di lettura',
    category: 'Diagnostica dello schermo',
    intro:
      'Spacchettare un monitor nuovo è emozionante, ma difetti di fabbrica come subpixel morti, backlight bleeding eccessivo, colori non uniformi o gamma errato sfuggono spesso al controllo qualità. Poiché la maggior parte dei negozi offre 14–30 giorni per il reso, un test completo di 15 minuti appena arriva è il modo migliore per assicurarti un pannello perfetto.',
    toolLabel: 'Apri il test completo del monitor',
    toolDescription: 'Pattern di test completi: gradienti, tabelle gamma, griglie di nitidezza e barre di colore.',
    sections: [
      {
        title: 'La checklist in 6 passi per un monitor nuovo',
        content: ['Prima di buttare la scatola o registrare la garanzia, fai questa valutazione del pannello in 6 fasi.'],
        steps: [
          '1. Controllo fisico e cavi: verifica che il cavo DisplayPort o HDMI supporti risoluzione nativa, frequenza (es. 144–240 Hz) e colore a 10 bit del monitor.',
          '2. Pixel morti: apri bianco, nero, rosso, verde e blu a tutto schermo e controlla ogni quadrante cercando subpixel bloccati o morti.',
          '3. Uniformità e bleeding: in una stanza poco illuminata, guarda una schermata nera per le fughe di luce ai bordi e un grigio 50% per l’effetto schermo sporco.',
          '4. Gamma e contrasto: usa la nostra scala di grigi per verificare che i gradini quasi neri (1–5%) e quasi bianchi (95–99%) restino distinguibili.',
          '5. Nitidezza e scalatura: esamina linee alternate di 1 pixel bianche e nere per avere testo nitido, senza frange colorate né moiré.',
          '6. Nitidezza in movimento e ghosting: usa i pattern di movimento per controllare il tempo di risposta e regola l’Overdrive per evitare il ghosting inverso.',
        ],
      },
      {
        title: 'Cosa è normale per ogni tipo di pannello',
        content: [
          'Conoscere la tecnologia del pannello evita di restituire un monitor per caratteristiche che sono normali compromessi.',
          'Pannelli IPS: ottimi per precisione dei colori e angoli di visione ampi (178°). Compromesso normale: contrasto più basso (1.000:1) e leggero IPS glow visto di lato.',
          'Pannelli VA: contrasto elevato (da 3.000:1 a 5.000:1) e neri profondi. Compromesso normale: scie scure nelle scene veloci e angoli di visione più stretti.',
          'Pannelli OLED / QD-OLED: contrasto infinito, neri reali e risposta di 0,03 ms. Compromesso normale: possibile ritenzione d’immagine e minore luminosità sostenuta a tutto schermo.',
          'Pannelli TN: vecchi monitor da esport ad alta frequenza. Compromesso normale: colori slavati e forte variazione di colore verticale guardando un po’ dall’alto o dal basso.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Devo testare il monitor con l’HDR attivo o disattivo?',
        answer:
          'Fai i test di base su colore e uniformità con l’HDR di Windows disattivato, perché può introdurre errori di tone mapping sugli schermi senza local dimming. Confermato l’SDR, attiva l’HDR per controllare la luminosità di picco e le zone di dimming.',
      },
      {
        question: 'Cos’è l’Overdrive e come va impostato?',
        answer:
          'L’Overdrive applica più tensione ai subpixel per accelerare le transizioni e ridurre la sfocatura in movimento. Troppo alto crea il «ghosting inverso» (aloni chiari dietro gli oggetti in movimento). L’impostazione «Normale» o «Veloce» di solito è la migliore; «Estrema» esagera quasi sempre.',
      },
    ],
  },
  'white-screen-for-video-calls-and-zoom': {
    slug: 'schermo-bianco-per-videochiamate',
    navLabel: 'Luce per Zoom',
    title: 'Come usare uno schermo bianco come luce morbida per videochiamate e Zoom',
    metaTitle: 'Schermo bianco come luce morbida in videochiamata',
    metaDescription:
      'Trasforma il monitor o il portatile in una luce chiara e lusinghiera, alternativa al ring light, per Zoom, Google Meet e videoconferenze senza comprare nulla.',
    readingTime: '5 min di lettura',
    category: 'Luce e immagine',
    intro:
      'Un buon video da webcam dipende molto più dalla luce che da una costosa fotocamera 4K. Con poca luce il sensore alza il guadagno digitale (ISO) e compaiono rumore e grana. Aprendo WhiteScreen.vip su un secondo monitor o accanto alla finestra della chiamata, trasformi subito lo schermo in un grande softbox di luce diffusa.',
    toolLabel: 'Apri la luce per videochiamate',
    toolDescription: 'Luce bianca morbida regolabile da calda a fredda, pensata per illuminare la webcam.',
    sections: [
      {
        title: 'Perché uno schermo grande illumina meglio di un piccolo ring light',
        content: [
          'In fotografia, più la sorgente di luce è grande rispetto al viso, più le ombre sono morbide e lusinghiere. Un ring light da 25 cm crea riflessi duri negli occhiali e ombre marcate sul viso.',
          'Un monitor da 24 o 27 pollici con una schermata bianca diventa una grande superficie luminosa che schiarisce la zona degli occhi, ammorbidisce la pelle e crea riflessi naturali nello sguardo.',
        ],
      },
      {
        title: 'Come posizionare lo schermo bianco come luce',
        content: ['Ottieni un’illuminazione del viso più bella con questi accorgimenti.'],
        steps: [
          'Con due monitor: metti lo schermo bianco su quello subito dietro o accanto alla webcam.',
          'Con un monitor: dividi lo schermo a metà, con Zoom o Teams da una parte e WhiteScreen.vip dall’altra.',
          'Regola la temperatura colore: un bianco caldo (circa 5000–5500 K) valorizza l’incarnato; un bianco luce diurna (6500 K) va bene se la stanza riceve sole.',
          'Regola la luminosità: tra il 70% e il 90% per non strizzare gli occhi.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Tenere aperto uno schermo bianco in riunioni lunghe danneggia il monitor?',
        answer:
          'Sui pannelli LCD/LED uno schermo bianco non causa danni e quasi nessuna usura. Sugli OLED tieni una luminosità moderata (50–70%) per limitare il calore.',
      },
    ],
  },
  'fullscreen-white-screen-for-drawing-and-tracing': {
    slug: 'schermo-bianco-per-ricalcare-e-disegnare',
    navLabel: 'Disegno e ricalco',
    title: 'Come usare tablet o monitor come tavolo luminoso digitale per ricalcare e disegnare',
    metaTitle: 'Tablet o monitor come tavolo luminoso per ricalcare',
    metaDescription:
      'Scopri come trasformare iPad, tablet Android o portatile in un tavolo luminoso digitale per ricalcare schizzi, calligrafia e negativi.',
    readingTime: '5 min di lettura',
    category: 'Luce e immagine',
    intro:
      'I tavoli luminosi e le scatole da ricalco tradizionali possono costare più di 60 € e occupano spazio. Se hai già un iPad, un tablet Android o un portatile, puoi trasformarlo con un clic in un tavolo luminoso digitale molto chiaro e senza sfarfallio.',
    toolLabel: 'Apri lo schermo bianco come tavolo luminoso',
    toolDescription: 'Luce bianca a tutto schermo ideale per ricalcare su carta, fare stencil e osservare negativi.',
    sections: [
      {
        title: 'Come preparare il ricalco passo passo',
        content: ['Segui questi consigli per ricalcare senza attivare tocchi indesiderati sul touchscreen.'],
        steps: [
          'Apri WhiteScreen.vip a tutto schermo e porta la luminosità del dispositivo al 100%.',
          'Blocca il touch: su iPad attiva Accesso Guidato (Impostazioni > Accessibilità > Accesso Guidato) per disattivare il tocco mentre disegni.',
          'Su Android: usa il blocco su schermo o un’app di blocco per evitare tocchi accidentali.',
          'Appoggia il disegno di riferimento sullo schermo e sopra un foglio di carta da lucido o carta leggera (sotto i 90 g/m²).',
          'Usa una matita morbida (da 2B a 4B) o un fineliner con poca pressione per seguire i contorni con facilità.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Disegnare a matita sullo schermo può danneggiare il vetro?',
        answer:
          'Il vetro dei tablet (come il Gorilla Glass) è molto più duro della grafite e non si graffia con l’uso normale. Evita comunque di premere forte e assicurati che sotto il foglio non ci sia sabbia o sporco.',
      },
    ],
  },
  'best-monitor-settings-for-eye-strain': {
    slug: 'impostazioni-monitor-affaticamento-visivo',
    navLabel: 'Impostazioni contro l’affaticamento',
    title: 'Le migliori impostazioni del monitor contro affaticamento visivo, mal di testa e lettura serale',
    metaTitle: 'Migliori impostazioni del monitor per gli occhi',
    metaDescription:
      'Ottimizza luminosità, contrasto, temperatura colore e luce della stanza per eliminare l’affaticamento visivo digitale e la sindrome da visione al computer.',
    readingTime: '6 min di lettura',
    category: 'Manutenzione dello schermo',
    intro:
      'Fissare un monitor troppo luminoso e mal regolato per 8–10 ore al giorno provoca la sindrome da visione al computer: occhi secchi, vista offuscata, mal di testa e collo rigido. Adattare la luminosità dello schermo alla luce della stanza è il miglioramento ergonomico più efficace che puoi fare.',
    toolLabel: 'Apri lo schermo bianco',
    toolDescription: 'Confronta la luminosità dello schermo con un foglio di carta alla luce ambiente per trovare un livello comodo.',
    sections: [
      {
        title: 'Regolazioni fondamentali per il comfort visivo',
        content: ['Applica queste regole di ergonomia visiva basate sulla ricerca per ridurre subito l’affaticamento.'],
        steps: [
          'Confronto con la carta bianca: tieni un foglio bianco accanto al monitor e regola la luminosità finché una finestra bianca a tutto schermo è chiara quanto il foglio.',
          'Temperatura colore: passa da un blu freddo di 7500 K a un tono caldo di 5000–6500 K.',
          'Evita lo sfarfallio PWM: verifica che il monitor sia «Flicker-Free» (regolazione in corrente continua anziché modulazione a bassa frequenza).',
          'Segui la regola 20-20-20: ogni 20 minuti guarda un oggetto a 6 metri per almeno 20 secondi per rilassare i muscoli degli occhi.',
        ],
      },
    ],
    faqs: [
      {
        question: 'La modalità scura previene l’affaticamento meglio di quella chiara?',
        answer:
          'In una stanza buia la modalità scura riduce la luce totale e quindi l’abbagliamento. Ma per leggere testi lunghi in ambienti ben illuminati, il testo nero su uno sfondo bianco morbido offre più contrasto e una lettura più rapida.',
      },
    ],
  },
  'common-monitor-display-problems-diagnostics': {
    slug: 'problemi-comuni-del-monitor',
    navLabel: 'Diagnostica dello schermo',
    title: 'Problemi comuni del monitor: come diagnosticare e risolvere i difetti di visualizzazione',
    metaTitle: 'Problemi comuni del monitor e come diagnosticarli',
    metaDescription:
      'Guida alla diagnosi dei problemi comuni del monitor: sfarfallio, banding, ghosting, pixel bloccati e testo sfocato, con soluzioni rapide.',
    readingTime: '6 min di lettura',
    category: 'Diagnostica dello schermo',
    intro:
      'Da un misterioso microsfarfallio al testo sfocato o a un’improvvisa dominante di colore, i difetti dello schermo possono dipendere da bug dei driver, cavi difettosi, frequenze errate o guasti del pannello. Questa guida ti aiuta a isolare passo dopo passo l’origine di ogni anomalia.',
    toolLabel: 'Apri il test del monitor',
    toolDescription: 'Usa i pattern diagnostici per distinguere i difetti hardware dai problemi di cavo o driver.',
    sections: [
      {
        title: 'Procedura di diagnosi dei difetti dello schermo',
        content: ['Segui questa sequenza ogni volta che lo schermo mostra anomalie visive.'],
        steps: [
          'Controlla il cavo: cavi HDMI o DisplayPort allentati o non certificati causano blackout intermittenti, scintille verdi e sfarfallio.',
          'Verifica risoluzione nativa e frequenza: usare uno schermo 4K a 1080p senza scalatura intera rende il testo sfocato.',
          'Prova con un altro dispositivo: collega un portatile o una console allo stesso ingresso per capire se il difetto viene dalla scheda video del PC o dal pannello.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Perché il monitor ogni tanto diventa nero per 2 secondi?',
        answer:
          'I blackout brevi di 1–2 secondi sono quasi sempre dovuti alla rinegoziazione della banda della compressione DSC, a interferenze elettromagnetiche (un frigorifero o un ventilatore che si accende vicino) o a un cavo HDMI/DP scadente che cede alle frequenze alte.',
      },
    ],
  },
}
