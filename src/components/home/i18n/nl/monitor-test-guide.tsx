import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Monitortest (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * monitortest / schermtest / beeldscherm testen → online uitvoeren → kleur en kalibratie → andere fouten.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function MonitorTestGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Monitortest: testpatronen en wat elk patroon controleert">
        <p className={p}>
          Deze monitortest, ook wel schermtest genoemd, heeft zeven patronen op volledig scherm, en elk testbeeld controleert iets anders. Voor
          één effen vlak om stof en dode pixels te zien, open je het <Link href="/" className={link}>witte scherm</Link>:
        </p>
        <Table
          caption="Testpatronen van de monitortest"
          head={['Patroon', 'Wat het controleert', 'Een goed scherm toont']}
          rows={[
            ['Grijsverloop', 'Vloeiende tinten, kleurbanding', 'Eén vloeiende overgang zonder stappen of kleurzweem'],
            ['Grijsstappen', 'Zwart- en witniveaus', 'Elke stap zichtbaar anders, ook de donkerste en lichtste'],
            ['Raster', 'Geometrie en schaling', 'Rechte lijnen op gelijke afstand, van rand tot rand'],
            ['Gamma 2,2', 'Gamma-instelling', 'Het middenvlak gaat van een afstand op in de strepen'],
            ['Fijne lijnen', 'Scherpte, native resolutie', 'Scherpe lijnen van 1 pixel zonder flikkering of moiré'],
            ['Dambord', 'Contrast en strakke randen', 'Scherpe vakjes zonder gloed of vegen'],
            ['Kleurbalken', 'Kleurweergave', 'Acht duidelijk gescheiden, verzadigde kleuren'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Zo doe je een monitortest online">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Zet het scherm op de native resolutie en de zoom van de browser op 100%.</li>
          <li>Dubbeltik op de monitortest voor volledig scherm, zodat er niets anders in beeld is.</li>
          <li>Tik op het scherm, gebruik de pijltjestoetsen of kies een patroon op naam. Automatisch wisselen doorloopt ze voor je.</li>
          <li>Bekijk elk patroon recht van voren en daarna van opzij, om verschuivingen in kijkhoek te zien.</li>
        </ol>
        <p className={p}>
          Deze monitortest draait in elke browser, dus hij werkt als beeldschermcontrole, online schermtest, laptopschermtest, monitortest voor
          een nieuw of tweedehands pc-scherm of een snelle check van je tv.
        </p>
      </Section>

      <Section wide id="color-heading" title="Monitortest voor kleur en kalibratie">
        <p className={p}>
          In de monitortest laten de kleurbalken en het gammapatroon duidelijke kleur- en gammaproblemen met het blote oog zien. Voor een
          volledige kleurentest met effen kleuren en RGB-verlopen gebruik je de{' '}
          <Link href="/screen-color-test" className={link}>scherm kleurentest</Link>.
        </p>
        <p className={p}>
          Echte kleurnauwkeurigheid vraagt om een hardwarematige colorimeter; geen enkele website kan die meten. Voor eenvoudige kleurkalibratie
          van je monitor gebruik je de tool die in je systeem zit:
        </p>
        <ul className={ul}>
          <li>Windows: zoek in Start naar “Kleurenweergave kalibreren”.</li>
          <li>Mac: Systeeminstellingen → Beeldschermen → Kleurprofiel → Pas aan → Kalibreer.</li>
        </ul>
      </Section>

      <Section wide id="more-heading" title="Monitortest voor dode pixels, Hz en andere fouten">
        <Table
          caption="Welke test je daarna doet"
          head={['Als je wilt controleren', 'Doe']}
          rows={[
            ['Dode of vastzittende pixels (lcd-test)', <Link key="dp" href="/dead-pixel-test" className={link}>Dode pixel test</Link>],
            ['Verversingssnelheid (Hz)', <Link key="hz" href="/screen-refresh-rate-test" className={link}>Verversingssnelheid test</Link>],
            ['Reactietijd en sporen', <Link key="gh" href="/monitor-ghosting-test" className={link}>Monitor ghosting test</Link>],
            ['Backlight bleed en uniformiteit van zwart', <Link key="un" href="/gray-screen" className={link}>Scherm uniformiteitstest</Link>],
            ['Spookbeelden die op het scherm blijven', <Link key="bi" href="/screen-burn-in-test" className={link}>Scherm inbrand test</Link>],
            ['Je schermresolutie', <Link key="rs" href="/screen-resolution-test" className={link}>Wat is mijn schermresolutie?</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
