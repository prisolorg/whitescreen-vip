import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Gebroken Scherm Effect (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * gebarsten scherm / kapot scherm → computer, laptop, Chromebook en telefoon → grap-tips →
 * afbeelding en achtergrond → echte schade controleren. Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function BrokenScreenGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Gebroken scherm effect: gebarsten, verbrijzeld en lcd-schade">
        <p className={p}>
          Kies een Soort barst onder het voorbeeld en tik of klik ergens om het glas op die plek te laten barsten. Elke tik voegt een nieuwe
          barst toe, zodat het gebarsten scherm zich uitbreidt zoals echt glas.
        </p>
        <Table
          caption="Stijlen van het gebroken scherm effect en hoe ze eruitzien"
          head={['Stijl', 'Ziet eruit als']}
          rows={[
            ['Spinnenweb', 'Het klassieke gebarsten scherm: lange barsten vanuit één inslag'],
            ['Klap in de hoek', 'Een gevallen telefoon die op de hoek terechtkwam'],
            ['Verbrijzeld', 'Een kapot, verbrijzeld scherm met overal verpulverd glas'],
            ['Haarscheur', 'Een dunne, realistische barst die je eerst makkelijk mist'],
            ['Lekkend lcd', 'Inktachtige zwarte en gekleurde vlekken van een beschadigd paneel'],
            ['Dode lijnen', 'Felle verticale lijnen, alsof een gebarsten scherm kolommen verliest'],
          ]}
        />
      </Section>

      <Section wide id="computer-heading" title="Gebroken scherm grap op een computer, laptop of Chromebook">
        <ul className={ul}>
          <li>Voor een nep kapot computerscherm open je deze pagina op de laptop, pc, Chromebook of smart-tv die je wilt foppen.</li>
          <li>Kies Scherm uit of Achtergrond onder Meer, zodat het gebarsten computerscherm op het echte bureaublad lijkt.</li>
          <li>Druk op F of tik op Volledig scherm en voeg een paar barsten toe waar het scherm een klap zou krijgen.</li>
          <li>Stap terug en wacht af. De cursor verdwijnt vanzelf als niemand de muis beweegt.</li>
        </ul>
        <h3 className={h3}>Gebroken telefoonscherm als grap op iPhone, Android of iPad</h3>
        <p className={p}>
          Open de pagina in de browser van de telefoon, kies Vergrendelscherm, tik op Volledig scherm en laat het glas barsten bij een hoek,
          waar echte vallen meestal terechtkomen. Zet het Glasgeluid aan voor het volle effect.
        </p>
      </Section>

      <Section wide id="prank-heading" title="Tips voor een gebroken scherm of gebarsten scherm grap">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Houd het kort.</strong> De beste nep kapot scherm-grappen eindigen met een snelle onthulling en
            een lach.
          </li>
          <li>
            <strong className="text-foreground">Kies de juiste persoon.</strong> Sla iedereen over die echt van slag zou raken van een kapot
            apparaat.
          </li>
          <li>
            <strong className="text-foreground">Onthul het snel.</strong> Druk op Esc of sluit het tabblad en het scherm is weer normaal. Er
            verandert niets aan het apparaat.
          </li>
        </ul>
        <p className={p}>
          Zin in nog een? Probeer de <Link href="/hacked-screen" className={link}>gehackt scherm-grap</Link> of de{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>nep blue screen of death</Link>.
        </p>
      </Section>

      <Section wide id="image-heading" title="Gebroken scherm als afbeelding en achtergrond">
        <p className={p}>
          Liever een afbeelding van een gebroken scherm dan een live effect? Laat het glas barsten zoals je wilt, open Meer en gebruik PNG
          downloaden. Stel de afbeelding in als vergrendelscherm van je telefoon of als achtergrond van je computer voor een grap die de hele
          dag duurt.
        </p>
      </Section>

      <Section wide id="real-heading" title="Echt een gebroken scherm? Zo controleer je de schade">
        <p className={p}>Niet hier voor een grap? Met deze snelle checks onderscheid je echte schade van een softwareprobleem:</p>
        <Table
          caption="Tekenen van een echt kapot scherm"
          head={['Wat je ziet', 'Controleer met']}
          rows={[
            ['Barsten die je voelt of ziet als het scherm uit staat', <Link key="w" href="/" className={link}>Wit scherm</Link>],
            ['Zwarte vlekken of uitlopende inkt', <Link key="d" href="/dead-pixel-test" className={link}>Dode pixel test</Link>],
            ['Delen van het scherm reageren niet op aanraking', <Link key="t" href="/touch-screen-test" className={link}>Touchscreen test</Link>],
            ['Lijnen, flikkering of vreemde kleuren', <Link key="s" href="/screen-problems" className={link}>Gids voor schermproblemen</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
