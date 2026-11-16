import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Aftelklok Volledig Scherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * aftelklok / afteltimer / aftellen tot een datum → online zonder app → ideeën → stopwatch of pomodoro.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function CountdownTimerGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Aftelklok op volledig scherm: zo gebruik je hem">
        <ul className={ul}>
          <li>Kies een duur in het menu Timer: 1, 5, 10, 15, 25, 45 of 60 minuten.</li>
          <li>Andere duur nodig? Klik of tik op de uren, minuten of seconden op het scherm en typ elke tijd, tot 99 uur.</li>
          <li>Druk op Start, of op de spatiebalk van een toetsenbord, en de aftelklok begint.</li>
          <li>Pauzeer en ga verder waar je was, of druk op R om te resetten.</li>
          <li>Als de tijd om is, knippert het scherm rood en klinkt een geluidssignaal. Zet het geluid uit onder Meer.</li>
        </ul>
        <p className={p}>Druk op F of tik op Volledig scherm voor een enorme afteltimer die je van de andere kant van de kamer kunt lezen.</p>
      </Section>

      <Section wide id="date-heading" title="Aftelklok tot een datum: dagen, uren, minuten">
        <p className={p}>
          Tel je de dagen af tot een verjaardag, bruiloft, vakantie, examen of lancering? Kies{' '}
          <strong className="text-foreground">Aftellen tot een datum</strong> in het menu Timer, kies de datum en tijd in de kalender, geef het
          evenement eventueel een naam en druk op Start. Het aftellen toont de resterende dagen, uren, minuten en seconden, en het
          geluidssignaal klinkt als het moment daar is.
        </p>
        <ul className={ul}>
          <li>Hij gebruikt de klok en tijdzone van je apparaat, dus middernacht betekent middernacht waar jij bent.</li>
          <li>Je aftelling wordt in deze browser bewaard: sluit het tabblad en hij telt nog steeds af als je terugkomt.</li>
          <li>Ga naar volledig scherm om de dagen tot het evenement op een tv, projector of extra monitor te zetten.</li>
          <li>Tik op Datum wijzigen om op elk moment een nieuw evenement te kiezen.</li>
        </ul>
      </Section>

      <Section wide id="online-heading" title="Online aftelklok: gratis, geen app">
        <p className={p}>
          Deze online aftelklok draait in elke browser op een computer, tablet, telefoon of smart-tv. Het is een gratis afteltimer zonder
          account en zonder iets te installeren. Op een computer kun je tijdens het aftellen naar een ander tabblad gaan: de resterende tijd
          staat in de tabbladtitel en het geluidssignaal klinkt nog steeds bij nul. Houd het tabblad open en je geluid aan. Telefoons pauzeren
          pagina’s die je verlaat, dus houd de timer daar in beeld; als een apparaat in slaap valt, haalt het aftellen de tijd in en klinkt het
          signaal zodra het wakker wordt.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ideeën voor de aftelklok">
        <Table
          caption="Manieren om de aftelklok te gebruiken"
          head={['Gebruik', 'Duur']}
          rows={[
            ['Activiteiten en toetsen in de klas', '10, 15 of 45 minuten op de projector'],
            ['Presentaties en lezingen', '5 of 10 minuten, op volledig scherm waar de spreker het ziet'],
            ['Koken en thee', '1, 5 of 10 minuten'],
            ['Pauzes en workouts', '1, 5 of 15 minuten'],
            ['Focussessies', '25 minuten, daarna een korte pauze'],
            ['Bakken, de was of een lang examen', 'Een eigen tijd zoals 1 uur en 30 minuten'],
            ['Verjaardagen, vakanties, reizen en lanceringen', 'Aftellen tot de datum'],
          ]}
        />
      </Section>

      <Section wide id="more-heading" title="Aftelklok, stopwatch of pomodoro?">
        <ul className={ul}>
          <li>
            Wil je optellen in plaats van aftellen? Gebruik de <Link href="/stopwatch" className={link}>stopwatch</Link>.
          </li>
          <li>
            Werk of studeer je in blokken? De <Link href="/pomodoro-timer" className={link}>Pomodoro timer</Link> herhaalt focussessies van 25
            minuten met pauzes.
          </li>
          <li>
            Wil je alleen de tijd op je scherm? Probeer de <Link href="/flip-clock-screensaver" className={link}>klapklok</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
