import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Klapklok Screensaver (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * klapklok / flip klok online → aesthetic klok → studeren → timer en stopwatch.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function FlipClockGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="online-heading" title="Klapklok screensaver online: volledig scherm op elk scherm">
        <p className={p}>
          Deze online klapklok, ook wel flip klok genoemd, toont de tijd in grote klapcijfers die omslaan als de minuten veranderen, net als
          een retro wekker naast het bed.
        </p>
        <ul className={ul}>
          <li>Dubbeltik op de klok of druk op F voor volledig scherm.</li>
          <li>Op volledig scherm blijft het scherm aan in browsers die dat ondersteunen, dus hij werkt als bureauklok of screensaver.</li>
          <li>Laat hem draaien op een laptop, een tweede monitor, een oude tablet of de browser van een smart-tv.</li>
        </ul>
      </Section>

      <Section wide id="style-heading" title="Aesthetic klapklok: donker, licht en minimalistisch">
        <p className={p}>Geef hem de look die je wilt met de knoppen onder de klok:</p>
        <Table
          caption="Instellingen van de klapklok"
          head={['Instelling', 'Wat het doet']}
          rows={[
            ['Thema', 'Donker voor een strakke zwarte klok, Licht voor een heldere, luchtige look'],
            ['24-uursnotatie', 'Wissel tussen 24-uurstijd en 12-uurstijd met AM/PM'],
            ['Seconden tonen', 'Een digitale klapklok met seconden, of alleen uren en minuten (onder Meer)'],
            ['Datum tonen', 'Zet de weekdag en datum onder de klok (onder Meer)'],
          ]}
        />
        <p className={p}>Verberg de seconden en de datum voor de meest minimalistische, aesthetic flipklok-look.</p>
      </Section>

      <Section wide id="study-heading" title="Klapklok om te studeren">
        <p className={p}>
          Groot op een tweede scherm wordt het een rustige studieklok: je ziet de tijd in één blik zonder je telefoon te pakken. Combineer hem
          met de <Link href="/pomodoro-timer" className={link}>Pomodoro timer</Link> om in geconcentreerde blokken met pauzes te werken.
        </p>
        <p className={p}>
          Liever iets speels op het vrije scherm? Start de <Link href="/dvd-screensaver" className={link}>DVD screensaver</Link>.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Klapklok als timer en stopwatch">
        <p className={p}>Zoek je een flip timer? Deze klok toont altijd de huidige tijd, dus om iets te timen gebruik je een van deze:</p>
        <ul className={ul}>
          <li>
            <Link href="/countdown-timer" className={link}>Aftelklok</Link>: tel af vanaf elke duur, met voorinstellingen zoals 5, 10 en 25
            minuten.
          </li>
          <li>
            <Link href="/stopwatch" className={link}>Stopwatch</Link>: tel op en sla rondes op.
          </li>
          <li>
            <Link href="/pomodoro-timer" className={link}>Pomodoro timer</Link>: focus- en pauzesessies om te studeren of te werken.
          </li>
        </ul>
      </Section>
    </div>
  )
}
