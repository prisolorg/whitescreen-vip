import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Framerate Test (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * FPS test / framerate test → uitkomsten per framerate → verschil met verversingssnelheid → games.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function FrameRateGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Framerate test: vergelijk FPS naast elkaar">
        <p className={p}>
          Deze framerate test, of FPS-test, beweegt hetzelfde blok over vijf banen, elk met een andere framerate, zodat je het verschil zelf
          ziet:
        </p>
        <ul className={ul}>
          <li>Banen voor 15, 24, 30 en 60 FPS, die elk alleen op hun eigen frames bewegen, zoals een video met die framerate.</li>
          <li>Een max-baan die beweegt op elk frame dat je scherm toont, met je echte FPS erbij.</li>
          <li>“Jouw scherm:” geeft de hoogste FPS die je scherm en browser kunnen tonen, live gemeten.</li>
        </ul>
        <p className={p}>
          Gebruik Snelheid (120 tot 1.800 px/s) om de beweging sneller te maken, druk op Pauze om hem stil te zetten en dubbeltik voor
          volledig scherm. Doe deze FPS-test online in elke browser, zonder iets te installeren.
        </p>
      </Section>

      <Section wide id="results-heading" title="Uitkomsten van de framerate test: zo ziet elke FPS eruit">
        <Table
          caption="Gangbare framerates"
          head={['Framerate', 'Tijd per frame', 'Waar je het ziet']}
          rows={[
            ['15 FPS', '66,7 ms', 'Schokkerig; trage videogesprekken, oude webcams'],
            ['24 FPS', '41,7 ms', 'Films en de meeste streamingseries'],
            ['30 FPS', '33,3 ms', 'Tv, YouTube, consolegames'],
            ['60 FPS', '16,7 ms', 'Vloeiend gamen en sportbeelden'],
            ['120+ FPS', '8,3 ms of minder', 'Monitoren en telefoons met hoge verversingssnelheid'],
          ]}
        />
        <p className={p}>Snelle FPS-check: ziet de max-baan er niet vloeiender uit dan 60, dan draait je scherm waarschijnlijk op 60 Hz.</p>
      </Section>

      <Section wide id="hz-heading" title="Framerate test vs. verversingssnelheid test">
        <p className={p}>
          De framerate (FPS) is hoeveel frames er per seconde worden getekend; de verversingssnelheid (Hz) is hoe vaak je monitor een nieuw
          frame kan tonen. Een scherm kan niet meer FPS tonen dan zijn Hz, dus in de framerate test wordt de max-baan begrensd door je
          verversingssnelheid.
        </p>
        <p className={p}>
          Om de verversingssnelheid precies te controleren, met frametijden en late frames, doe je de{' '}
          <Link href="/screen-refresh-rate-test" className={link}>verversingssnelheid test</Link>. Voor sporen achter bewegende objecten probeer
          je de <Link href="/monitor-ghosting-test" className={link}>monitor ghosting test</Link>.
        </p>
      </Section>

      <Section wide id="games-heading" title="Framerate test voor games">
        <p className={p}>
          Online tools meten de browser, niet je games, en deze FPS-tester kan er niet in kijken. Om de FPS in een game te zien, gebruik je een
          overlay:
        </p>
        <ul className={ul}>
          <li>Windows: druk op Win + G en open de widget Prestaties in de Xbox Game Bar.</li>
          <li>Steam: zet de FPS-teller aan in de In-game-instellingen van Steam.</li>
          <li>NVIDIA of AMD: de prestatie-overlay in de app van het grafische stuurprogramma.</li>
        </ul>
      </Section>
    </div>
  )
}
