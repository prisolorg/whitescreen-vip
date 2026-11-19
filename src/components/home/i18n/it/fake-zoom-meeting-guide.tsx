import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schermata finta di riunione Zoom (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * finta riunione Zoom / schermata Zoom finta → videochiamata Zoom finta per video, lezioni e scherzi →
 * versioni Teams e Google Meet. I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function FakeZoomMeetingGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="setup-heading" title="Schermata finta di riunione Zoom: come configurarla">
        <p className={p}>
          La schermata finta di riunione Zoom mostra una galleria in stile Zoom con cinque partecipanti con nome, un contorno verde che si
          sposta su chi sta «parlando», il badge «Registrazione in corso…» e la classica barra degli strumenti con il pulsante rosso
          «Termina».
        </p>
        <ul className={ul}>
          <li>Apri «Altro» per scrivere il tuo «Titolo della riunione».</li>
          <li>Attiva «Attiva anteprima fotocamera» per mettere la tua fotocamera nel riquadro «Tu». Il video resta sul tuo dispositivo.</li>
          <li>Premi F o tocca «Schermo intero», così la finta riunione riempie tutto lo schermo.</li>
        </ul>
      </Section>

      <Section wide id="uses-heading" title="Finta riunione Zoom per video, lezioni e scherzi">
        <p className={p}>Una videochiamata Zoom finta è utile ogni volta che ti serve una riunione credibile sullo schermo senza farne una vera:</p>
        <Table
          caption="Modi di usare la schermata finta di riunione Zoom"
          head={['Uso', 'Consiglio']}
          rows={[
            ['Oggetti di scena per film, TikTok e YouTube', 'Registra lo schermo a schermo intero per un video di una finta riunione'],
            ['Sembrare impegnato in una chiamata', 'Lascia aperta la finta riunione con la fotocamera spenta'],
            ['Lezione Zoom finta o prova', 'Prova una lezione o una presentazione con la fotocamera accesa'],
            ['Screenshot e mockup', 'Imposta un titolo della riunione, poi fai uno screenshot'],
            ['Scherzo innocuo', 'Mostra a un amico una «riunione» a cui ha dimenticato di partecipare, poi svela lo scherzo'],
          ]}
        />
        <p className={p}>È una schermata, non una chiamata: non c’è audio, nessuno può partecipare e niente si collega a Zoom.</p>
      </Section>

      <Section wide id="other-heading" title="Finta riunione Zoom, Teams o Google Meet?">
        <p className={p}>Ti serve un’altra app? Ognuna ha la sua schermata:</p>
        <ul className={ul}>
          <li>
            <Link href="/fake-teams-meeting" className={link}>Schermata finta di riunione Teams</Link>: comandi e un pulsante rosso «Esci»
            nella barra in alto, con un timer che scorre.
          </li>
          <li>
            <Link href="/fake-google-meet" className={link}>Schermata finta di Google Meet</Link>: riquadri arrotondati, iniziali per le
            fotocamere spente e un codice riunione.
          </li>
          <li>
            <Link href="/fake-slack-huddle" className={link}>Simulazione Slack Huddle</Link>: una piccola finestra di huddle con avatar.
          </li>
        </ul>
      </Section>
    </div>
  )
}
