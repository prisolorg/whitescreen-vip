import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Scherm Kleurentest (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * kleurentest / scherm kleuren testen / kleurtest monitor → uitvoeren → monitor, tv en telefoon → grenzen en verkleuring.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function ScreenColorGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Scherm kleurentest: testpatronen en waar je op let">
        <p className={p}>Deze kleurentest heeft zeven patronen op volledig scherm, en elk testbeeld controleert iets anders:</p>
        <Table
          caption="Testpatronen van de scherm kleurentest"
          head={['Patroon', 'Wat het controleert', 'Een goed scherm toont']}
          rows={[
            ['Kleurbalken', 'Basiskleurweergave', 'Acht duidelijke, gescheiden kleuren zonder zweem'],
            ['RGB-verlopen', 'Verlopen en clipping', 'Vloeiende overgangen vanuit zwart zonder stappen; het lichte uiteinde vlakt niet te vroeg af'],
            ['Tintspectrum', 'Elke tint daartussen', 'Een vloeiende regenboog zonder banden of sprongen'],
            ['Verzadigingsstappen', 'Kleurintensiteit', 'Tien stappen van grijs naar vol rood, elk anders'],
            ['Rood, Groen, Blauw', 'Elke subpixelkleur apart', 'Eén gelijkmatige kleur van rand tot rand, zonder donkere plekken'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Zo doe je een scherm kleurentest">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Zet de nachtmodus, blauwlichtfilters en automatische helderheid uit, zodat de schermkleur niet verschuift.</li>
          <li>Dubbeltik op de scherm kleurentest voor volledig scherm, zodat alleen het kleurenscherm zichtbaar is.</li>
          <li>Tik op het scherm, gebruik de pijltjestoetsen of kies een patroon op naam. Automatisch wisselen doorloopt ze voor je.</li>
          <li>Kijk recht van voren en daarna van opzij: bij sommige panelen verschuift de kleur onder een hoek.</li>
        </ol>
        <p className={p}>
          Liever één effen kleurenscherm? Open het <Link href="/" className={link}>witte scherm</Link>, het{' '}
          <Link href="/red-screen" className={link}>rode scherm</Link> of een pagina bij de{' '}
          <Link href="/color-screens" className={link}>kleurschermen</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Scherm kleurentest op een monitor, tv of telefoon">
        <ul className={ul}>
          <li>Monitor: gebruik de RGB-verlopen als kleurentest voor je monitor en pas daarna de kleurtemperatuur of beeldmodus aan in het menu.</li>
          <li>Tv: open de scherm kleurentest in de browser van de tv of cast een laptoptabblad. De modus Film of Filmmaker toont meestal de meest getrouwe kleur.</li>
          <li>Telefoon: zet de helderheid hoog en vergelijk de kleurmodi Natuurlijk en Levendig, als je telefoon die heeft.</li>
          <li>De vlakken Rood, Groen en Blauw werken ook als RGB-test voor vastzittende subpixels.</li>
        </ul>
      </Section>

      <Section wide id="accuracy-heading" title="Grenzen van de scherm kleurentest: nauwkeurigheid en verkleuring">
        <p className={p}>
          Een scherm kleurentest is een controle met het oog: hij vindt zweem, banding en dode kleuren, maar echte kleurnauwkeurigheid vraagt
          om een hardwarematige colorimeter; geen enkele website kan die meten. Kies je tekstkleuren voor een website? Gebruik de{' '}
          <Link href="/contrast-checker" className={link}>kleurcontrastchecker</Link>.
        </p>
        <Table
          caption="Wat een kleurprobleem kan betekenen"
          head={['Wat je ziet', 'Probeer']}
          rows={[
            ['Overal een gele of blauwe zweem', <Link key="y" href="/screen-problems/yellow-tint-on-screen" className={link}>Gids over een gele zweem</Link>],
            ['Stappen of banden in de verlopen', <Link key="b" href="/screen-problems/color-banding" className={link}>Gids over kleurbanding</Link>],
            ['Vlekken of ongelijke plekken (verkleuring van het scherm)', <Link key="u" href="/screen-uniformity-test" className={link}>Scherm uniformiteitstest</Link>],
            ['Vervaagde logo’s of spookbeelden', <Link key="bi" href="/screen-burn-in-test" className={link}>Scherm inbrand test</Link>],
            ['Scherpte, gamma en meer (volledige controle)', <Link key="m" href="/monitor-test" className={link}>Monitortest</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
