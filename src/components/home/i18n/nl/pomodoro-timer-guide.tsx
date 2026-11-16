import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pomodoro Timer (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * pomodoro timer / pomodoro techniek / tomaattimer → studeren → instellingen 25/5 en 50/10 → online zonder app.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function PomodoroTimerGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="technique-heading" title="Pomodoro timer en de pomodoro techniek">
        <p className={p}>
          De pomodoro techniek, ook wel pomodoromethode genoemd, is een eenvoudige methode voor timemanagement die Francesco Cirillo eind jaren
          tachtig bedacht. Je werkt in korte, geconcentreerde sprints die pomodoro’s heten en rust tussendoor. Deze Pomodoro timer doorloopt de
          hele cyclus voor je:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Kies één taak.</li>
          <li>Focus er 25 minuten op.</li>
          <li>Neem een korte pauze van 5 minuten.</li>
          <li>Herhaal. Na vier pomodoro’s neem je een langere pauze van 15 minuten.</li>
        </ol>
        <p className={p}>
          De timer gaat vanzelf van focus naar pauze, laat een geluidje horen als elke fase eindigt en telt de sessies die je afrondt.
        </p>
        <h3 className={h3}>Waarom heet het een tomaattimer?</h3>
        <p className={p}>
          “Pomodoro” is Italiaans voor tomaat. Cirillo timede zijn eerste sessies met een keukenwekker in de vorm van een tomaat. Daarom heet
          de methode ook wel de tomaattimer- of tomatenklok-techniek.
        </p>
      </Section>

      <Section wide id="study-heading" title="Pomodoro timer om te studeren">
        <p className={p}>
          Met de pomodoro techniek om te studeren wordt dit een prima studietimer: korte blokken zijn makkelijker om aan te beginnen, en de
          pauzes houden je focus fris tijdens een lange leersessie.
        </p>
        <ul className={ul}>
          <li>Geef elke pomodoro één duidelijk doel, zoals een hoofdstuk, een reeks opgaven of 20 flashcards.</li>
          <li>Leg je telefoon weg tot de pauze.</li>
          <li>Schrijf losse gedachten op en handel ze af in de pauze, niet midden in de sessie.</li>
          <li>Gebruik de lange pauze om te bewegen, water te drinken of een frisse neus te halen.</li>
          <li>Tel je afgeronde sessies om te zien hoe goed de pomodoro-studiemethode voor jou werkt.</li>
        </ul>
      </Section>

      <Section wide id="settings-heading" title="Instellingen van de Pomodoro timer: 25/5, 50/10 en eigen">
        <p className={p}>Open Meer om de focusduur, beide pauzes en het aantal Sessies voor de lange pauze in te stellen.</p>
        <Table
          caption="Populaire instellingen voor de Pomodoro timer"
          head={['Opzet', 'Focus', 'Korte pauze', 'Lange pauze', 'Goed voor']}
          rows={[
            ['Klassiek 25/5', '25 min', '5 min', '15 min na 4', 'Het meeste werk en studeren'],
            ['Diep werk 50/10', '50 min', '10 min', '20–30 min na 3', 'Schrijven, programmeren, lang lezen'],
            ['Korte sprints 15/3', '15 min', '3 min', '15 min na 4', 'Op gang komen met lastige taken'],
          ]}
        />
        <ul className={ul}>
          <li>Focus kan 5 tot 90 minuten zijn, korte pauzes 1 tot 20 en lange pauzes 5 tot 45.</li>
          <li>Zet Volgende automatisch starten uit om elke fase zelf te beginnen.</li>
          <li>Zet het geluid uit voor een stille Pomodoro timer in een bibliotheek of kantoor.</li>
        </ul>
        <p className={p}>
          Heb je alleen een timer van 25 minuten nodig? De <Link href="/countdown-timer" className={link}>aftelklok</Link> heeft voorinstellingen
          met één tik, en de <Link href="/stopwatch" className={link}>stopwatch</Link> laat zien hoe lang een taak echt duurt.
        </p>
      </Section>

      <Section wide id="online-heading" title="Pomodoro timer online: geen app nodig">
        <p className={p}>
          Deze online Pomodoro timer draait in je browser op een pc, Mac, Chromebook, tablet of telefoon, zonder pomodoro-app of extensie om te
          installeren en zonder account.
        </p>
        <ul className={ul}>
          <li>Het aftellen staat in het browsertabblad, zodat je in een ander tabblad kunt doorwerken.</li>
          <li>De tijd blijft nauwkeurig, ook als het tabblad op de achtergrond staat.</li>
          <li>Druk op de spatiebalk om te starten of te pauzeren en op F voor een grote pomodoroklok op volledig scherm.</li>
        </ul>
        <p className={p}>Hij werkt net zo goed als focustimer, werktimer of productiviteitstimer voor elke taak die je in sprints wilt verdelen.</p>
      </Section>
    </div>
  )
}
