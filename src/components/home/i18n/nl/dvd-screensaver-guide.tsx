import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * DVD Screensaver (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * dvd screensaver / stuiterend dvd-logo → Google easter egg → tv, stream, tweede monitor →
 * dvd-logo en gif → hoektreffer en dvd-spel. Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function DvdScreensaverGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="bounce-heading" title="DVD Screensaver: het stuiterende dvd-logo">
        <p className={p}>
          De DVD screensaver, ook wel dvd-schermbeveiliging genoemd, is het stuiterende dvd-logo dat oude dvd-spelers lieten zien als ze
          stilstonden. Het logo zweeft schuin met een vaste snelheid en krijgt een nieuwe kleur telkens als het een rand raakt. Het wisselt
          tussen 10 kleuren zonder de vorige te herhalen.
        </p>
        <ul className={ul}>
          <li>Dubbeltik op het scherm of druk op F om hem op volledig scherm te draaien.</li>
          <li>Open Meer om de Snelheid en de Logogrootte aan te passen.</li>
          <li>De tellers houden elke botsing en elke exacte hoektreffer bij.</li>
          <li>Met Pauze zet je het stuiterende logo stil en met Hervatten gaat het verder.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Google DVD screensaver easter egg">
        <p className={p}>
          Wie op Google naar “DVD screensaver” zocht, zag het Google-logo soms veranderen in een stuiterend logo in dvd-stijl op de
          resultatenpagina. Zulke easter eggs komen en gaan, en ze draaien niet op volledig scherm.
        </p>
        <p className={p}>
          Op deze pagina heb je hetzelfde stuiterende logo altijd en in elke browser, met volledig scherm, een hoekteller en knoppen voor
          snelheid en grootte.
        </p>
      </Section>

      <Section wide id="tv-heading" title="DVD screensaver op een tv, stream of tweede monitor">
        <Table
          caption="Waar je de DVD screensaver gebruikt"
          head={['Gebruik', 'Zo werkt het']}
          rows={[
            ['Smart-tv', 'Open deze pagina in de browser van de tv of cast een browsertabblad en ga naar volledig scherm'],
            ['Streampauze of BRB-scherm', 'Voeg dit venster toe als vensteropname in OBS terwijl je even weg bent'],
            ['Tweede monitor', 'Sleep het venster naar het ongebruikte scherm en ga naar volledig scherm'],
            ['Wachtruimte of kantoor', 'Laat het draaien op een vrij scherm voor een beetje nostalgie'],
          ]}
        />
      </Section>

      <Section wide id="logo-heading" title="DVD screensaver: logo en gif">
        <p className={p}>
          Het logo hier wordt live in je browser getekend: een vet “DVD” boven een schijf met “VIDEO” uitgespaard, met een nieuwe kleur bij
          elke botsing. Het officiële DVD Video-logo is een handelsmerk van de DVD Format/Logo Licensing Corporation, daarom bieden we het
          niet aan als PNG-download.
        </p>
        <h3 className={h3}>Zelf een DVD screensaver-gif maken</h3>
        <p className={p}>
          Laat de screensaver op volledig scherm draaien en neem je scherm op met een ingebouwde recorder (Knipprogramma op Windows, de
          Screenshot-balk op de Mac of de schermrecorder van je telefoon). Zet de opname daarna om in een dvd-gif. Neem op tot een
          hoektreffer voor de perfecte loop.
        </p>
      </Section>

      <Section wide id="corner-heading" title="Raakt de DVD screensaver de hoek?">
        <p className={p}>
          Ja, maar hoe vaak hangt af van de vorm van het scherm, de grootte van het logo en waar het begint. Een hoektreffer gebeurt alleen
          als het logo tegelijk een zijkant en de boven- of onderkant raakt. Op sommige schermformaten gebeurt dat vaak, op andere kan het
          lang duren. Verander de logogrootte of de grootte van het venster en je krijgt een nieuwe route.
        </p>
        <p className={p}>
          Zo wordt het een perfect dvd-spel: iedereen raadt wanneer de volgende hoektreffer komt en de teller beslist. Wil je meer
          schermen voor stille momenten? Probeer de <Link href="/flip-clock-screensaver" className={link}>klapklok screensaver</Link> of de{' '}
          <Link href="/matrix-screensaver" className={link}>Matrix screensaver</Link>.
        </p>
      </Section>
    </div>
  )
}
