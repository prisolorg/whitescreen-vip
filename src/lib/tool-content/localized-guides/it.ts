import type { LanguageGuides } from './types'
import { DvdScreensaverGuideIt } from '@/components/home/i18n/it/dvd-screensaver-guide'
import { BrokenScreenGuideIt } from '@/components/home/i18n/it/broken-screen-guide'
import { FakeZoomMeetingGuideIt } from '@/components/home/i18n/it/fake-zoom-meeting-guide'
import { FakeWindowsUpdateGuideIt } from '@/components/home/i18n/it/fake-windows-update-guide'
import { FakeWindows11UpdateGuideIt } from '@/components/home/i18n/it/fake-windows-11-update-guide'
import { FakeBsodGuideIt } from '@/components/home/i18n/it/fake-bsod-guide'
import { FakeMacUpdateGuideIt } from '@/components/home/i18n/it/fake-mac-update-guide'
import { PomodoroTimerGuideIt } from '@/components/home/i18n/it/pomodoro-timer-guide'
import { FlipClockGuideIt } from '@/components/home/i18n/it/flip-clock-guide'
import { ZoomLightingGuideIt } from '@/components/home/i18n/it/zoom-lighting-guide'
import { CountdownTimerGuideIt } from '@/components/home/i18n/it/countdown-timer-guide'
import { RingLightGuideIt } from '@/components/home/i18n/it/ring-light-guide'
import { StopwatchGuideIt } from '@/components/home/i18n/it/stopwatch-guide'
import { RefreshRateGuideIt } from '@/components/home/i18n/it/refresh-rate-guide'
import { DeadPixelGuideIt } from '@/components/home/i18n/it/dead-pixel-guide'
import { TouchScreenGuideIt } from '@/components/home/i18n/it/touch-screen-guide'
import { MonitorGhostingGuideIt } from '@/components/home/i18n/it/monitor-ghosting-guide'
import { MonitorTestGuideIt } from '@/components/home/i18n/it/monitor-test-guide'
import { ScreenBurnInGuideIt } from '@/components/home/i18n/it/screen-burn-in-guide'
import { ScreenResolutionGuideIt } from '@/components/home/i18n/it/screen-resolution-guide'
import { ScreenColorGuideIt } from '@/components/home/i18n/it/screen-color-guide'
import { FrameRateGuideIt } from '@/components/home/i18n/it/frame-rate-guide'
import { OledGrayGuideIt } from '@/components/home/i18n/it/oled-gray-guide'
import { HackedScreenGuideIt } from '@/components/home/i18n/it/hacked-screen-guide'
import { NoSignalGuideIt } from '@/components/home/i18n/it/no-signal-guide'
import { BlackScreenGuideIt } from '@/components/home/i18n/it/black-screen-guide'
import { YellowScreenGuideIt } from '@/components/home/i18n/it/yellow-screen-guide'
import { GreenScreenGuideIt } from '@/components/home/i18n/it/green-screen-guide'
import { BlueScreenGuideIt } from '@/components/home/i18n/it/blue-screen-guide'
import { RedScreenGuideIt } from '@/components/home/i18n/it/red-screen-guide'
import { PinkScreenGuideIt } from '@/components/home/i18n/it/pink-screen-guide'
import { WhiteScreenGuideIt } from '@/components/home/i18n/it/white-screen-guide'

/** Italian (forma con il «tu», nomi dei pulsanti dell'interfaccia italiana, termini di ricerca italiani). */
export const it: LanguageGuides = {
  tools: {
    'dvd-screensaver': {
      Guide: DvdScreensaverGuideIt,
      faqs: [
        {
          question: 'È il logo DVD ufficiale?',
          answer:
            'No. Il salvaschermo DVD disegna nel browser un logo in stile DVD e non è affiliato a DVD Format/Logo Licensing Corporation, proprietaria del logo DVD Video.',
        },
        {
          question: 'Perché il logo del salvaschermo DVD cambia colore?',
          answer:
            'Come nel classico salvaschermo dei lettori DVD, il logo sceglie un nuovo colore ogni volta che tocca un bordo e non ripete mai lo stesso colore due volte di seguito.',
        },
        {
          question: 'Posso usare il salvaschermo DVD come vero salvaschermo su Windows o Mac?',
          answer:
            'Funziona nel browser invece di installarsi come salvaschermo di sistema. Aprilo a schermo intero quando il computer è inattivo; il salvaschermo e le impostazioni di standby del sistema restano validi.',
        },
      ],
    },
    'broken-screen': {
      Guide: BrokenScreenGuideIt,
      faqs: [
        {
          question: 'L’effetto schermo rotto può danneggiare lo schermo?',
          answer: 'No. È solo un’immagine disegnata nel browser. Premi Esc o chiudi la scheda e lo schermo torna normale.',
        },
        {
          question: 'L’effetto schermo rotto funziona su un Chromebook?',
          answer:
            'Sì. Funziona in qualsiasi browser moderno, compresi Chromebook, computer Windows e Mac, telefoni, tablet e browser delle smart TV. Non si installa nulla.',
        },
        {
          question: 'Come fare in modo responsabile lo scherzo dello schermo crepato?',
          answer: 'Fallo durare poco, scegli qualcuno che ne riderà, non usarlo mai per ottenere soldi o informazioni e svela subito lo scherzo.',
        },
      ],
    },
    'fake-zoom-meeting': {
      Guide: FakeZoomMeetingGuideIt,
      faqs: [
        {
          question: 'Questa finta riunione Zoom è collegata a Zoom?',
          answer:
            'No. È una simulazione indipendente in stile Zoom e non è affiliata a Zoom Video Communications. Nessuno può partecipare e non viene inviato nulla.',
        },
        {
          question: 'La finta riunione Zoom usa la mia fotocamera?',
          answer:
            'Solo se attivi «Attiva anteprima fotocamera». Il tuo video appare nel tuo riquadro e non lascia mai il dispositivo; nulla viene registrato o caricato. Il microfono non viene mai usato.',
        },
        {
          question: 'La finta riunione Zoom ha l’audio?',
          answer: 'No, è silenziosa. Per il video di una finta riunione, aggiungi suoni o voci nel programma di montaggio.',
        },
      ],
    },
    'fake-windows-10-update': {
      Guide: FakeWindowsUpdateGuideIt,
      faqs: [
        {
          question: 'Una finta schermata di aggiornamento di Windows può danneggiare il computer?',
          answer: 'No. È solo una pagina nel browser. Non si installa né si modifica nulla, e premendo Esc o chiudendo la scheda finisce.',
        },
        {
          question: 'Posso far sembrare bloccato l’aggiornamento falso di Windows?',
          answer: 'Sì. Premi «Pausa» e la percentuale si ferma dov’è. Apri «Altro» per cambiare la velocità con cui sale.',
        },
        {
          question: 'L’aggiornamento falso di Windows funziona su Mac o Chromebook?',
          answer: 'Sì. Funziona in qualsiasi browser moderno, quindi puoi mostrare un finto aggiornamento di Windows anche su Mac, Chromebook o tablet.',
        },
      ],
    },
    'fake-blue-screen-of-death': {
      Guide: FakeBsodGuideIt,
      faqs: [
        {
          question: 'Una finta schermata blu della morte può danneggiare il computer?',
          answer: 'No. È un’immagine nel browser. Il computer continua a funzionare normalmente, e premendo Esc o chiudendo la scheda finisce.',
        },
        {
          question: 'Perché ora la schermata blu della morte è nera?',
          answer: 'Le versioni più recenti di Windows 11 mostrano la schermata di crash in nero invece che in blu. Scegli «Nero (nuovo)» nel menu «Stile» per quell’aspetto.',
        },
        {
          question: 'Posso cambiare il codice di arresto della schermata blu della morte?',
          answer: 'Sì. Apri «Altro» e scegli un codice di arresto, come CRITICAL_PROCESS_DIED o MEMORY_MANAGEMENT. Si aggiorna subito sullo schermo.',
        },
      ],
    },
    'fake-windows-11-update': {
      Guide: FakeWindows11UpdateGuideIt,
      faqs: [
        {
          question: 'L’aggiornamento falso di Windows 11 è vero?',
          answer: 'No. È una pagina nel browser che assomiglia alla schermata di aggiornamento di Windows 11. Non si installa nulla, e con Esc o chiudendo la scheda finisce.',
        },
        {
          question: 'Quanto dura l’aggiornamento falso di Windows 11?',
          answer: 'Non finisce mai: la percentuale ricomincia dopo il 100%. Usa «Pausa» per tenerla ferma su un numero, o apri «Altro» per cambiare la velocità.',
        },
        {
          question: 'Posso usare l’aggiornamento falso di Windows 11 su Mac o Chromebook?',
          answer: 'Sì. Funziona in qualsiasi browser moderno, quindi la schermata di aggiornamento di Windows 11 va anche su Mac, Chromebook, tablet e telefoni.',
        },
      ],
    },
    'fake-mac-update': {
      Guide: FakeMacUpdateGuideIt,
      faqs: [
        {
          question: 'Questo aggiornamento falso del Mac è fatto da Apple?',
          answer: 'No. È una simulazione indipendente di una schermata di aggiornamento in stile macOS e non è affiliata ad Apple. Sul Mac non si installa né si modifica nulla.',
        },
        {
          question: 'Posso far durare ore l’aggiornamento falso del Mac?',
          answer: 'Imposta la durata dell’aggiornamento a 120 minuti in «Altro». Quando la barra si riempie, la schermata si riavvia e l’aggiornamento ricomincia, quindi può andare avanti quanto vuoi.',
        },
      ],
    },
    'pomodoro-timer': {
      Guide: PomodoroTimerGuideIt,
      faqs: [
        {
          question: 'Che cos’è un timer Pomodoro?',
          answer:
            'Un timer Pomodoro divide il lavoro in blocchi di concentrazione, di solito di 25 minuti, con una pausa breve dopo ognuno e una pausa più lunga dopo quattro. Segue la tecnica del pomodoro di Francesco Cirillo.',
        },
        {
          question: 'Quanto dura un pomodoro?',
          answer: 'Tradizionalmente 25 minuti di concentrazione seguiti da una pausa di 5 minuti. Puoi cambiare entrambi, ad esempio in 50 e 10 minuti, in «Altro».',
        },
        {
          question: 'Il timer Pomodoro funziona sul telefono?',
          answer: 'Sì. Aprilo nel browser del telefono e premi «Avvia». Tieni la scheda aperta per sentire il segnale alla fine di ogni fase.',
        },
        {
          question: 'Questo timer Pomodoro è gratuito?',
          answer: 'Sì. È completamente gratuito, senza registrazione, senza app e senza pubblicità nel timer.',
        },
      ],
    },
    'flip-clock-screensaver': {
      Guide: FlipClockGuideIt,
      faqs: [
        {
          question: 'L’orologio a palette tiene acceso lo schermo?',
          answer: 'Sì, a schermo intero. I browser supportati tengono lo schermo acceso mentre è a schermo intero, quindi può restare acceso tutto il giorno come orologio da scrivania.',
        },
        {
          question: 'Posso mostrare l’ora in formato 12 ore?',
          answer: 'Sì. Disattiva «Formato 24 ore» e l’orologio passa al formato 12 ore con l’indicazione AM o PM.',
        },
        {
          question: 'Posso usarlo come salvaschermo su Windows o Mac?',
          answer: 'Funziona nel browser invece di installarsi come salvaschermo di sistema. Aprilo a schermo intero su uno schermo libero o quando il computer è inattivo.',
        },
      ],
    },
    'zoom-lighting': {
      Guide: ZoomLightingGuideIt,
      faqs: [
        {
          question: 'Posso usare la luce per videochiamate sullo stesso portatile della chiamata?',
          answer:
            'Funziona meglio su un secondo schermo, tablet o telefono posizionato dietro la webcam, così la chiamata resta visibile. Su un solo portatile, la luce a schermo intero coprirebbe la finestra di Zoom.',
        },
        {
          question: 'Qual è la temperatura colore migliore per la luce per videochiamate?',
          answer: '«Neutra» (4500 K) va bene per la maggior parte delle stanze. Scegli «Luce diurna» (6500 K) per accordarti con la luce della finestra, o «Calda» (3000 K) per un aspetto serale più morbido.',
        },
        {
          question: 'È gratuita?',
          answer: 'Sì. È gratuita in qualsiasi browser, senza app né registrazione, e funziona con Zoom, Teams, Google Meet e qualsiasi altra videochiamata.',
        },
      ],
    },
    'countdown-timer': {
      Guide: CountdownTimerGuideIt,
      faqs: [
        {
          question: 'Quali durate posso impostare per il conto alla rovescia?',
          answer:
            'Qualsiasi durata fino a 99 ore, 59 minuti e 59 secondi. Scegli 1, 5, 10, 15, 25, 45 o 60 minuti dal menu «Timer», oppure fai clic su ore, minuti e secondi sullo schermo e scrivi il tuo tempo, poi premi «Avvia».',
        },
        {
          question: 'Suona quando il tempo è scaduto?',
          answer: 'Sì. Suona un segnale e lo schermo lampeggia di rosso quando il tempo finisce. Disattiva il suono in «Altro» per un conto alla rovescia silenzioso.',
        },
        {
          question: 'Il timer può fare il conto alla rovescia fino a una data?',
          answer:
            'Sì. Scegli «Conto alla rovescia fino a una data» nel menu «Timer», scegli data e ora, aggiungi il nome dell’evento se vuoi e premi «Avvia». Mostra i giorni, le ore, i minuti e i secondi che mancano, e ricorda il conto alla rovescia in questo browser quando torni.',
        },
      ],
    },
    'ring-light': {
      Guide: RingLightGuideIt,
      faqs: [
        {
          question: 'Uno schermo può sostituire un vero ring light?',
          answer:
            'Per videochiamate, selfie e trucco, uno schermo luminoso funziona sorprendentemente bene. Una vera luce LED è più intensa e migliore per riprendere in una stanza buia o da lontano.',
        },
        {
          question: 'Funziona sul telefono?',
          answer: 'Sì. Aprilo su un telefono o tablet, alza la luminosità e tocca due volte per lo schermo intero, poi rivolgi lo schermo verso il viso.',
        },
        {
          question: 'Qual è il colore migliore per il trucco?',
          answer: 'Il bianco alla massima luminosità, così i colori appaiono fedeli. Apri «Altro» per rendere il bianco più caldo o più freddo in base alla stanza.',
        },
      ],
    },
    stopwatch: {
      Guide: StopwatchGuideIt,
      faqs: [
        {
          question: 'Quanto è preciso il cronometro?',
          answer:
            'Usa l’orologio ad alta precisione del browser e mostra il tempo al centesimo di secondo. Se la scheda va in background, il tempo è comunque corretto quando torni.',
        },
        {
          question: 'Quali sono le scorciatoie da tastiera?',
          answer: 'La barra spaziatrice avvia e mette in pausa, L registra un giro e R azzera.',
        },
        {
          question: 'Posso salvare i miei giri?',
          answer: 'Sì. Premi «Copia giri» per copiare ogni giro con il tempo parziale e il totale, poi incollalo in un foglio di calcolo, nelle note o in un messaggio.',
        },
      ],
    },
    'screen-refresh-rate-test': {
      Guide: RefreshRateGuideIt,
      faqs: [
        {
          question: 'Quanto è preciso il test frequenza di aggiornamento?',
          answer:
            'Molto preciso per la maggior parte degli schermi. Misura centinaia di fotogrammi e arrotonda alla frequenza comune più vicina. Schede impegnate, risparmio batteria o un computer lento possono far leggere un valore più basso, quindi chiudi le altre app e premi «Misura di nuovo».',
        },
        {
          question: 'Perché il mio monitor da 144 Hz mostra 60 Hz?',
          answer:
            'Probabilmente lo schermo è impostato a 60 Hz. Scegli la frequenza più alta nelle impostazioni dello schermo e usa un cavo e una porta che la supportino, come DisplayPort o un cavo HDMI ad alta velocità.',
        },
        {
          question: 'Il test frequenza di aggiornamento funziona sui telefoni?',
          answer: 'Sì. Aprilo nel browser del telefono. Prima disattiva il risparmio energetico, perché spesso limita lo schermo a 60 Hz.',
        },
      ],
    },
    'dead-pixel-test': {
      Guide: DeadPixelGuideIt,
      faqs: [
        {
          question: 'Quanto dura un test pixel bruciati?',
          answer: 'Circa un minuto. Scorri tutti i 9 colori a schermo intero e osserva tutto lo schermo su ognuno.',
        },
        {
          question: 'Un solo pixel morto è normale?',
          answer:
            'Succede, e molti produttori sostituiscono lo schermo solo oltre un certo numero di pixel difettosi. Controlla la politica di garanzia del tuo monitor, portatile o telefono.',
        },
        {
          question: 'Qual è la differenza tra un pixel morto e un pixel bloccato?',
          answer:
            'Un pixel morto non si accende mai e appare nero. Un pixel bloccato resta fisso su un colore, come rosso, verde o blu, e a volte si può sbloccare facendo lampeggiare dei colori sopra di esso.',
        },
      ],
    },
    'touch-screen-test': {
      Guide: TouchScreenGuideIt,
      faqs: [
        {
          question: 'Come testo il touch screen per trovare zone morte?',
          answer: 'Scegli «Griglia zone morte» e scorri su ogni quadrato. I quadrati che restano scuri dopo averli toccati sono zone morte.',
        },
        {
          question: 'Il test touch screen funziona su iPhone?',
          answer: 'Sì. Funziona in Safari e negli altri browser per iPhone, oltre che su telefoni Android, tablet e portatili con touch screen.',
        },
        {
          question: 'Quanti punti di contatto dovrebbe supportare il mio telefono?',
          answer: 'La maggior parte di telefoni e tablet ne rileva da 5 a 10 insieme. Usa «Multitouch» e guarda il valore «Max» per vedere quanti ne gestisce il tuo.',
        },
      ],
    },
    'monitor-ghosting-test': {
      Guide: MonitorGhostingGuideIt,
      faqs: [
        {
          question: 'Ogni monitor mostra un po’ di ghosting?',
          answer:
            'La maggior parte dei monitor LCD ne mostra un po’ ad alte velocità. Diventa un problema quando la scia è lunga a velocità normali o compare un alone chiaro. In quel caso regola l’overdrive e ripeti il test ghosting monitor.',
        },
        {
          question: 'Il ghosting è la stessa cosa dell’input lag?',
          answer: 'No. Il ghosting è una scia visiva dovuta a pixel lenti; l’input lag è un ritardo tra mouse o controller e schermo. Questo test mostra solo il ghosting.',
        },
        {
          question: 'È un test anti-ghosting per tastiere?',
          answer:
            'No. L’anti-ghosting delle tastiere riguarda la registrazione di molti tasti premuti insieme. Questo test ghosting monitor controlla le scie di movimento sul display.',
        },
      ],
    },
    'monitor-test': {
      Guide: MonitorTestGuideIt,
      faqs: [
        {
          question: 'Il test calibrazione monitor è gratuito e online?',
          answer: 'Sì. Funziona nel browser su qualsiasi monitor, portatile, TV o telefono, senza download né registrazione.',
        },
        {
          question: 'Come si testa un monitor nuovo?',
          answer:
            'Fai le schermate di prova del monitor a schermo intero alla risoluzione nativa, poi il [test pixel bruciati](/dead-pixel-test) e il [test uniformità schermo](/screen-uniformity-test). Il momento migliore è finché puoi ancora restituirlo.',
        },
        {
          question: 'Un test del monitor può calibrare lo schermo?',
          answer:
            'Ti aiuta a regolare a occhio luminosità, contrasto e gamma. Una calibrazione precisa richiede un colorimetro hardware o lo strumento di calibrazione del tuo sistema.',
        },
      ],
    },
    'screen-burn-in-test': {
      Guide: ScreenBurnInGuideIt,
      faqs: [
        {
          question: 'Quanto tempo serve perché uno schermo subisca il burn-in?',
          answer:
            'Di solito centinaia o migliaia di ore della stessa immagine fissa, spesso ad alta luminosità. La ritenzione d’immagine sugli LCD può comparire dopo poche ore, ma svanisce.',
        },
        {
          question: 'Per quanto tempo devo usare il correttore di burn-in?',
          answer: 'Inizia con 10–30 minuti, poi ripeti il test burn-in schermo. Ripeti qualche volta; se non cambia nulla, il burn-in è probabilmente permanente.',
        },
        {
          question: 'Il test burn-in schermo funziona sui telefoni?',
          answer: 'Sì. Aprilo nel browser del telefono, alza la luminosità e tocca due volte per lo schermo intero. Per i telefoni OLED e AMOLED, prova anche il [test burn-in OLED](/oled-burn-in-test).',
        },
      ],
    },
    'screen-resolution-test': {
      Guide: ScreenResolutionGuideIt,
      faqs: [
        {
          question: 'Perché la risoluzione del mio schermo è più bassa di quella del monitor?',
          answer:
            'Per il ridimensionamento dello schermo. Con un ridimensionamento al 150%, un monitor 2560 × 1440 comunica al browser 1707 × 960. La lettura «Pixel fisici» moltiplica per il rapporto pixel per mostrare il numero reale.',
        },
        {
          question: 'Il test risoluzione schermo è preciso?',
          answer: 'Mostra esattamente ciò che indica il browser. Tieni lo zoom al 100%, così il numero di pixel fisici corrisponde al tuo display.',
        },
        {
          question: 'Quale risoluzione dovrei usare?',
          answer: 'La risoluzione nativa del monitor, indicata come Consigliata nelle impostazioni dello schermo di Windows. Qualsiasi altra può apparire sfocata.',
        },
      ],
    },
    'screen-color-test': {
      Guide: ScreenColorGuideIt,
      faqs: [
        {
          question: 'Il test colori schermo è gratuito?',
          answer: 'Sì. Funziona nel browser su qualsiasi monitor, portatile, TV o telefono, senza download né registrazione.',
        },
        {
          question: 'Perché i colori sono diversi sul telefono e sul monitor?',
          answer:
            'Gli schermi differiscono per tipo di pannello, modalità colore e calibrazione. Fai il test colori schermo su entrambi con la modalità notturna disattivata e confronta le rampe RGB.',
        },
        {
          question: 'Un test dei colori può correggere i colori dello schermo?',
          answer: 'No, mostra i problemi. Correggi le dominanti con la temperatura colore o la modalità immagine del display, o con lo strumento di calibrazione del sistema.',
        },
      ],
    },
    'frame-rate-test': {
      Guide: FrameRateGuideIt,
      faqs: [
        {
          question: 'Perché il test FPS mostra 60 sul mio monitor da 144 Hz?',
          answer:
            'Probabilmente il monitor è impostato a 60 Hz, il cavo non supporta di più o il portatile sta risparmiando energia. Controlla le impostazioni dello schermo e ripeti il test FPS.',
        },
        {
          question: 'L’occhio umano vede più di 60 FPS?',
          answer: 'Sì. La maggior parte delle persone nota un movimento più fluido a 120 FPS e oltre. Confronta la corsia a 60 FPS con la corsia max su uno schermo ad alta frequenza di aggiornamento.',
        },
        {
          question: 'Il test FPS funziona sui telefoni?',
          answer: 'Sì. Aprilo nel browser del telefono e tocca due volte per lo schermo intero. I telefoni con schermo a 90 o 120 Hz mostrano una corsia max più fluida.',
        },
      ],
    },
    'oled-gray-test': {
      Guide: OledGrayGuideIt,
      faqs: [
        {
          question: 'Un po’ di mura è normale su un OLED?',
          answer: 'Sì. Leggere macchie sui campi dall’1% al 5% sono comuni. È un problema solo se lo noti in film e giochi normali.',
        },
        {
          question: 'Il test grigi per OLED funziona sugli schermi LCD?',
          answer: 'Sì, ma sul grigio scuro gli LCD mostrano invece bagliore e fughe di retroilluminazione. Per quelli è più adatto il [test uniformità schermo](/screen-uniformity-test).',
        },
        {
          question: 'Che luminosità dovrei usare?',
          answer: 'Una luminosità media in una stanza buia. Una luminosità molto alta può nascondere i problemi sui quasi neri, e una molto bassa può esagerarli.',
        },
      ],
    },
    'hacked-screen': {
      Guide: HackedScreenGuideIt,
      faqs: [
        {
          question: 'Lo scherzo dello schermo hackerato è sicuro?',
          answer: 'Sì. È una pagina web che mostra solo animazioni. Non installa nulla e non tocca file, webcam o rete.',
        },
        {
          question: 'Come chiudo lo schermo hackerato?',
          answer: 'Premi Esc per uscire dallo schermo intero, poi chiudi la scheda.',
        },
        {
          question: 'Funziona sui telefoni?',
          answer: 'Sì. Aprilo nel browser di un telefono e tocca due volte per lo schermo intero. La sirena richiede prima un tocco, perché i telefoni bloccano l’audio finché non interagisci.',
        },
      ],
    },
    'no-signal-screen': {
      Guide: NoSignalGuideIt,
      faqs: [
        {
          question: 'Come mostro lo schermo nessun segnale sulla TV?',
          answer: 'Apri la pagina nel browser della TV, oppure trasmetti o collega un portatile, poi premi F o tocca «Schermo intero».',
        },
        {
          question: 'Posso cambiare il testo NESSUN SEGNALE?',
          answer: 'Sì. Apri «Altro» per scrivere il tuo messaggio (fino a 24 caratteri) e il nome dell’ingresso, come HDMI 2 o AV.',
        },
        {
          question: 'Cos’è il bip delle barre colorate TV?',
          answer: 'Un tono di prova costante a 1 kHz che le emittenti trasmettevano con le barre colorate per allineare i livelli audio. Attivalo con il pulsante del tono a 1 kHz.',
        },
      ],
    },
  },
  colors: {
    white: {
      Guide: WhiteScreenGuideIt,
      faqs: [
        {
          question: 'Come rendo lo schermo completamente bianco?',
          answer: 'Apri WhiteScreen.vip, seleziona il bianco e attiva lo schermo intero, se il browser lo supporta.',
        },
        {
          question: 'Lo schermo bianco funziona sul telefono?',
          answer: 'Sì. Puoi aprire lo strumento in un browser per cellulare compatibile. Il comportamento a schermo intero dipende dal dispositivo e dal browser.',
        },
        {
          question: 'Uno schermo bianco può rilevare i pixel morti?',
          answer:
            'Uno sfondo bianco può rivelare i pixel scuri, mentre gli sfondi neri e a colori primari aiutano a scoprire altri difetti visibili dei pixel. È un controllo visivo, non una diagnosi hardware completa.',
        },
        {
          question: 'Perché il mio schermo continua a spegnersi?',
          answer:
            'Il timer di standby del dispositivo, le impostazioni di risparmio batteria o le restrizioni del browser possono spegnere il display. Controlla le impostazioni di alimentazione e usa «Mantieni lo schermo acceso», se il sito e il browser lo supportano.',
        },
        {
          question: 'Uno schermo bianco luminoso è sicuro per i display OLED?',
          answer:
            'Evita di lasciare a lungo un’immagine fissa e luminosa su un display OLED. Segui le indicazioni del produttore su luminosità e utilizzo. Nessuna funzione del browser può garantire di prevenire il burn-in.',
        },
        {
          question: 'WhiteScreen.vip è gratuito?',
          answer:
            'WhiteScreen.vip è completamente gratuito online nel browser. Tutti i colori dello schermo, i test e i download delle immagini sono accessibili senza registrazione, account o installazione di software.',
        },
        {
          question: 'Qual è la differenza tra uno schermo bianco vuoto e uno schermo bianco puro?',
          answer:
            'Qui sono la stessa cosa: uno schermo pieno di bianco puro (#FFFFFF) e nient’altro. Scegli «Caldo» o abbassa la luminosità se vuoi un aspetto più morbido, color avorio.',
        },
        {
          question: 'Posso usare uno schermo bianco per ricalcare?',
          answer:
            'Sì. Un tablet o un monitor alla massima luminosità funziona come un semplice tavolo luminoso. Fissa il foglio con del nastro e ricalca delicatamente senza premere forte sullo schermo.',
        },
        {
          question: 'Uno schermo bianco aiuta a pulire il monitor?',
          answer:
            'Uno schermo bianco rende facili da vedere polvere, impronte e aloni. Spegni il display prima di pulirlo, poi riapri lo schermo bianco per controllare i punti che hai saltato.',
        },
      ],
    },
    black: {
      Guide: BlackScreenGuideIt,
      faqs: [
        {
          question: 'Uno schermo nero fa risparmiare batteria?',
          answer:
            'Su telefoni, tablet e portatili OLED sì: i pixel neri sono spenti. Sugli schermi LCD la retroilluminazione resta accesa, quindi si risparmia pochissimo. Sugli LCD conviene di più abbassare la luminosità.',
        },
        {
          question: 'Uno schermo nero tiene acceso il computer?',
          answer:
            'Sì, finché la pagina è aperta con «Mantieni lo schermo acceso» attivo, nei browser che lo supportano. Le normali impostazioni di standby tornano quando chiudi la pagina o disattivi l’opzione.',
        },
        {
          question: 'Uno schermo nero è come spegnere il monitor?',
          answer:
            'No. Il monitor resta acceso e il computer continua a funzionare; lo schermo mostra solo il nero puro. Sugli OLED sembra spento perché i pixel sono scuri, mentre un LCD tiene comunque accesa la retroilluminazione.',
        },
        {
          question: 'Posso impostare una schermata home o di blocco nera sul telefono?',
          answer: 'Sì. Scarica il formato iPhone o Android dal menu «Scarica» e impostalo come sfondo della schermata home o di blocco.',
        },
        {
          question: 'Come faccio un video con lo schermo nero?',
          answer: 'Scarica un PNG nero in 1080p o 4K, mettilo nella timeline del programma di montaggio e allungalo per la durata che ti serve.',
        },
        {
          question: 'Per pulire il monitor è meglio il nero o il bianco?',
          answer:
            'Il nero mostra chiaramente impronte, aloni e macchie, soprattutto con una luce angolata. Per la polvere funziona meglio uno [schermo bianco](/). Spegni il display prima di pulirlo.',
        },
      ],
    },
    red: {
      Guide: RedScreenGuideIt,
      faqs: [
        {
          question: 'Posso usare uno schermo rosso sul mio iPhone o telefono Android?',
          answer:
            'Sì. Apri questa pagina nel browser del telefono, tocca l’icona dello schermo intero e attiva «Mantieni lo schermo acceso». Abbassa il cursore «Luminosità» per una luce notturna tenue.',
        },
        {
          question: 'Perché il mio schermo rosso sembra arancione?',
          answer:
            'Di solito la causa è la modalità colore del display o un filtro notturno caldo (Night Shift, Luce notturna). Disattivali e usa la modalità standard o sRGB, poi ricontrolla.',
        },
        {
          question: 'Uno schermo rosso può fare da luce di sicurezza per la camera oscura?',
          answer:
            'No. Il suo rosso non è filtrato in modo abbastanza stretto ed è troppo luminoso per pellicole o carta fotografica. Usa una vera luce di sicurezza per i materiali fotosensibili.',
        },
      ],
    },
    green: {
      Guide: GreenScreenGuideIt,
      faqs: [
        {
          question: 'Che cos’è la schermata verde della morte?',
          answer:
            'È la versione verde della schermata blu della morte di Windows, mostrata quando va in crash una build Windows Insider Preview. Anche le console Xbox possono bloccarsi su una schermata di caricamento verde. Vuoi mostrarne una per gioco? Prova la [finta schermata blu della morte](/fake-blue-screen-of-death).',
        },
        {
          question: 'Posso usare uno schermo verde sul telefono?',
          answer:
            'Sì, per piccoli oggetti e primi piani. Apri questa pagina, alza la luminosità, passa a schermo intero e attiva «Mantieni lo schermo acceso». Per tutto ciò che è più grande del telefono, usa un telo verde o uno sfondo nel programma di montaggio.',
        },
        {
          question: 'Questo sito con lo schermo verde rimuove il mio sfondo?',
          answer:
            'No. Questa pagina mostra un verde pieno e ti permette di scaricare immagini verdi. La rimozione dello sfondo avviene nella tua app video o di streaming, come OBS, CapCut, Zoom o Teams.',
        },
      ],
    },
    blue: {
      Guide: BlueScreenGuideIt,
      faqs: [
        {
          question: 'Questo schermo blu è la schermata blu della morte di Windows?',
          answer:
            'No. È un semplice schermo di colore blu per illuminare, testare e montare video. Non mostra errori e non influisce sul computer. Cerchi la schermata di errore per uno scherzo? Prova la [finta schermata blu della morte](/fake-blue-screen-of-death).',
        },
        {
          question: 'Posso usare uno schermo blu sul portatile, sul PC o sul telefono?',
          answer:
            'Sì. Funziona in qualsiasi browser moderno. Tocca due volte per lo schermo intero, attiva «Mantieni lo schermo acceso» e usa il cursore «Luminosità» per impostare la tonalità.',
        },
        {
          question: 'Perché uno schermo blu puro sembra così scuro?',
          answer:
            'I nostri occhi sono meno sensibili al blu, quindi a parità di luminosità il blu puro appare molto più scuro del verde o del rosso. È normale, non un difetto.',
        },
      ],
    },
    yellow: {
      Guide: YellowScreenGuideIt,
      faqs: [
        {
          question: 'Uno schermo giallo affatica meno gli occhi?',
          answer:
            'Il giallo non contiene luce blu, e molte persone lo trovano più rilassante la sera. Il giallo alla massima luminosità resta comunque intenso, quindi abbassa il cursore «Luminosità» per una luce calda più morbida.',
        },
        {
          question: 'Posso rendere lo schermo giallo più caldo o più morbido?',
          answer: 'Sì. Scegli «Caldo» per un giallo oro e abbassa il cursore «Luminosità» per una luce più tenue e morbida.',
        },
        {
          question: 'Posso scaricare un’immagine dello schermo giallo?',
          answer:
            'Sì. Usa «Scarica» sotto l’anteprima per salvare un PNG giallo in 1080p, 1440p, 4K o 8K, in formati per telefono e tablet o in una dimensione personalizzata.',
        },
      ],
    },
    pink: {
      Guide: PinkScreenGuideIt,
      faqs: [
        {
          question: 'Qual è il codice colore di questo rosa?',
          answer:
            'È #FF69B4 (RGB 255, 105, 180), spesso chiamato rosa shocking. Scegli «Caldo» per un rosa corallo, «Freddo» per un rosa antico, o abbassa il cursore «Luminosità» per un rosa più scuro.',
        },
        {
          question: 'Posso tenere acceso uno schermo rosa per 10 ore?',
          answer:
            'Sì. Attiva «Mantieni lo schermo acceso» e il display resta acceso finché la pagina è aperta, nei browser che lo supportano. Per sessioni lunghe collega il portatile o il telefono alla corrente.',
        },
        {
          question: 'Perché il mio schermo rosa sembra viola?',
          answer:
            'Il display spinge troppo il blu. Scegli «Caldo» sotto l’anteprima, oppure imposta il display su una temperatura colore più calda o sulla modalità sRGB.',
        },
      ],
    },
  },
  glanceHeadings: {
    'dvd-screensaver': 'Che cos’è il salvaschermo DVD?',
    'broken-screen': 'Che cos’è l’effetto schermo rotto?',
    'fake-zoom-meeting': 'Che cos’è una schermata finta di riunione Zoom?',
    'fake-windows-10-update': 'Che cos’è l’aggiornamento falso di Windows 10?',
    'fake-windows-11-update': 'Che cos’è l’aggiornamento falso di Windows 11?',
    'fake-blue-screen-of-death': 'Che cos’è la finta schermata blu della morte?',
    'fake-mac-update': 'Che cos’è l’aggiornamento falso del Mac?',
    'pomodoro-timer': 'Che cos’è un timer Pomodoro?',
    'flip-clock-screensaver': 'Che cos’è il salvaschermo orologio a palette?',
    'zoom-lighting': 'Che cos’è la luce per videochiamate?',
    'countdown-timer': 'Che cos’è un timer conto alla rovescia?',
    'ring-light': 'Che cos’è un ring light online?',
    stopwatch: 'Che cos’è un cronometro a schermo intero?',
    'screen-refresh-rate-test': 'Che cos’è un test della frequenza di aggiornamento?',
    'dead-pixel-test': 'Che cos’è un test dei pixel bruciati?',
    'touch-screen-test': 'Che cos’è un test del touch screen?',
    'monitor-ghosting-test': 'Che cos’è un test di ghosting del monitor?',
    'monitor-test': 'Che cos’è un test di calibrazione del monitor?',
    'screen-burn-in-test': 'Che cos’è un test di burn-in dello schermo?',
    'screen-resolution-test': 'Che cos’è un test della risoluzione dello schermo?',
    'screen-color-test': 'Che cos’è un test dei colori dello schermo?',
    'frame-rate-test': 'Che cos’è un test FPS?',
    'oled-gray-test': 'Che cos’è un test dei grigi per OLED?',
    'hacked-screen': 'Che cos’è il simulatore di schermo hackerato?',
    'no-signal-screen': 'Che cos’è lo schermo nessun segnale?',
    'white-screen': 'Che cos’è uno schermo bianco?',
    'black-screen': 'Che cos’è uno schermo nero?',
    'yellow-screen': 'Che cos’è uno schermo giallo?',
    'green-screen': 'Che cos’è uno schermo verde?',
    'blue-screen': 'Che cos’è uno schermo blu?',
    'red-screen': 'Che cos’è uno schermo rosso?',
    'pink-screen': 'Che cos’è uno schermo rosa?',
  },
}
