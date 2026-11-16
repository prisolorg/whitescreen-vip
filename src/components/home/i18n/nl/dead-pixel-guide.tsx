import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Dode Pixel Test (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * dode pixel test / dode pixels controleren / pixeltest → soorten pixelfouten → apparaten → repareren.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function DeadPixelGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Dode pixel test: zo controleer je je scherm">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Maak het scherm schoon, zodat je stof niet voor een pixel aanziet.</li>
          <li>Dubbeltik of druk op F voor volledig scherm, zodat elke pixel wordt getest.</li>
          <li>Tik op het scherm of gebruik de pijltjestoetsen om 9 kleuren te doorlopen: zwart, wit, rood, groen, blauw, cyaan, magenta, geel en grijs.</li>
          <li>Bekijk elke kleur goed, van rand tot rand. Of druk op Automatisch wisselen om elke paar seconden van kleur te veranderen.</li>
        </ol>
        <p className={p}>
          Zo werkt de dode pixel test als pixeltest en lcd-test op elke monitor, laptop, telefoon, tablet of tv met een browser. Wil je één
          kleur langer bekijken? Open het <Link href="/black-screen" className={link}>zwarte scherm</Link> of het{' '}
          <Link href="/" className={link}>witte scherm</Link>.
        </p>
      </Section>

      <Section wide id="types-heading" title="Uitkomst van de dode pixel test: dood, vastzittend of heet?">
        <p className={p}>Wat is een dode pixel? Een pixel die helemaal niet meer oplicht. Zo onderscheid je hem van de andere:</p>
        <Table
          caption="Hoe een pixelfout eruitziet"
          head={['Wat je ziet', 'Het best zichtbaar op', 'Wat het is']}
          rows={[
            ['Een zwart puntje dat nooit oplicht', 'Wit en lichte kleuren', 'Dode pixel'],
            ['Een puntje dat op rood, groen of blauw blijft hangen', 'Zwart en andere kleuren', 'Vastzittende pixel'],
            ['Een puntje dat altijd wit is', 'Zwart', 'Hete pixel'],
            ['Spikkels die bewegen als je veegt', 'Elke kleur', 'Stof, geen pixel'],
          ]}
        />
        <p className={p}>
          Lees meer in de gidsen over de <Link href="/screen-problems/stuck-pixel" className={link}>vastzittende pixel</Link> en de{' '}
          <Link href="/screen-problems/hot-pixel" className={link}>hete pixel</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Dode pixel test op een telefoon, laptop, monitor of tv">
        <ul className={ul}>
          <li>Telefoon en iPhone: zet de helderheid hoog, tik op het pictogram voor volledig scherm en tik door de kleuren.</li>
          <li>Laptop en monitor: zet het scherm op de native resolutie, zodat één pixel ook als één pixel wordt getoond.</li>
          <li>Tv: open de pagina in de browser van de tv of cast een laptoptabblad, en kijk van dichtbij.</li>
          <li>Nieuw apparaat? Doe de dode pixel test meteen, zolang je het nog kunt terugsturen.</li>
        </ul>
      </Section>

      <Section wide id="fix-heading" title="Na de dode pixel test: is het te repareren?">
        <p className={p}>
          Zoek je een manier om een dode pixel te repareren? Een echt dode pixel komt bijna nooit terug, omdat hij geen stroom meer krijgt. Een
          vastzittende pixel soms wel: snel knipperende kleuren op die plek gedurende 10 tot 20 minuten kunnen hem weer wakker maken. De{' '}
          <Link href="/screen-burn-in-test" className={link}>scherm inbrand test</Link> heeft daarvoor een kleurwissel-hersteller; sla die over
          als knipperend licht je stoort.
        </p>
        <p className={p}>
          Valt het scherm nog onder de garantie? Bekijk dan het dode-pixelbeleid van de fabrikant. Voor een volledige controle van kleuren en
          uniformiteit doe je de <Link href="/monitor-test" className={link}>monitortest</Link>.
        </p>
      </Section>
    </div>
  )
}
