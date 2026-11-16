import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Stopwatch Volledig Scherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * online stopwatch / stopwatch met rondetijden → optellen vanaf nul → digitale stopwatch op volledig scherm → Google stopwatch.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function StopwatchGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Online stopwatch: starten, rondes en resetten">
        <p className={p}>Deze online stopwatch meet tot op een honderdste seconde en houdt een lijst met rondes bij.</p>
        <Table
          caption="Bediening van de stopwatch"
          head={['Actie', 'Knop', 'Toets']}
          rows={[
            ['Starten of pauzeren', 'Start / Pauze', 'Spatiebalk'],
            ['Een ronde opslaan', 'Ronde', 'L'],
            ['Terug naar nul', 'Resetten', 'R'],
            ['Alle rondes kopiëren', 'Rondes kopiëren', '—'],
          ]}
        />
        <p className={p}>
          Elke ronde toont zijn eigen tussentijd en het lopende totaal, zodat je rondes in één oogopslag vergelijkt. Rondes kopiëren zet ze op
          je klembord voor een spreadsheet of bericht.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Stopwatch als timer: optellen vanaf nul">
        <p className={p}>
          Hij telt op vanaf nul tot je hem stopt, dus dit is de online timer als je niet weet hoe lang iets gaat duren. Hij werkt als
          optellende timer voor workouts, toespraken, experimenten en taken.
        </p>
        <p className={p}>
          Wil je juist aftellen vanaf een vaste tijd, zoals 10 of 30 minuten? Gebruik de{' '}
          <Link href="/countdown-timer" className={link}>aftelklok</Link>, of de{' '}
          <Link href="/pomodoro-timer" className={link}>Pomodoro timer</Link> voor focussessies met pauzes.
        </p>
      </Section>

      <Section wide id="fullscreen-heading" title="Digitale stopwatch op volledig scherm">
        <p className={p}>
          Druk op F of tik op Volledig scherm voor een enorme digitale stopwatch die de hele ruimte kan lezen. Hij werkt goed als klassentimer
          op een projector of digibord.
        </p>
        <ul className={ul}>
          <li>Klas: time quizzen, groepswerk en leeswedstrijden.</li>
          <li>Studeren: houd bij hoe lang elk onderwerp echt kost.</li>
          <li>Sport en spellen: time sprints, planks, rondes en puzzels.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Online stopwatch of Google stopwatch?">
        <p className={p}>
          De zoekresultaten van Google bevatten een kleine ingebouwde timer. Deze stopwatch voegt een volledige rondelijst met tussentijden toe,
          Rondes kopiëren met één klik, sneltoetsen en een weergave op volledig scherm, en je kunt hem als bladwijzer opslaan om hem meteen te
          openen.
        </p>
      </Section>
    </div>
  )
}
