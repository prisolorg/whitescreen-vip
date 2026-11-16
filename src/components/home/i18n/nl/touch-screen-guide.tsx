import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Touchscreen Test (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * touchscreen test / touchscreen testen → spookaanrakingen en multitouch → iPhone, Android en Samsung → vervolgstappen.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function TouchScreenGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="modes-heading" title="Touchscreen test: drie manieren om te controleren">
        <Table
          caption="Modi van de touchscreen test"
          head={['Modus', 'Wat het controleert', 'Zo werkt het']}
          rows={[
            ['Raster voor dode zones', 'Plekken die niet op aanraking reageren', 'Veeg over elk vakje tot Bedekt 100% aangeeft; vakjes die donker blijven zijn dode zones'],
            ['Tekenen', 'Vloeiende registratie zonder gaten', 'Teken langzame lijnen over het scherm; onderbrekingen of sprongen tonen zwakke plekken'],
            ['Multitouch', 'Hoeveel vingers hij herkent', 'Zet meerdere vingers neer; Aanrakingen en Max. tonen het aantal'],
          ]}
        />
        <p className={p}>
          Druk op Wissen om opnieuw te beginnen, en druk op F of tik op Volledig scherm, zodat de touchscreentest ook de randen van het scherm
          meeneemt.
        </p>
      </Section>

      <Section wide id="ghost-heading" title="Touchscreen test voor spookaanrakingen en multitouch">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Spookaanrakingen:</strong> open Tekenen, leg de telefoon neer en raak hem niet aan. Lijnen of
            puntjes die vanzelf verschijnen zijn spookaanrakingen (ghost touch).
          </li>
          <li>
            <strong className="text-foreground">Multitouch:</strong> de meeste telefoons herkennen 5 tot 10 vingers tegelijk. Het label toont
            hoeveel aanraakpunten je apparaat doorgeeft.
          </li>
          <li>
            <strong className="text-foreground">Gevoeligheid:</strong> lichte, snelle vegen in Tekenen laten zien of zachte aanrakingen worden
            geregistreerd.
          </li>
        </ul>
      </Section>

      <Section wide id="phone-heading" title="Touchscreen test op iPhone, Android en Samsung">
        <p className={p}>
          De touchscreen test draait in Safari, Chrome of elke andere telefoonbrowser, zonder iets te installeren. Haal een dik hoesje of
          screenprotector weg als aanrakingen bij de randen lijken te missen, en test opnieuw.
        </p>
        <p className={p}>
          Op veel Samsung Galaxy-telefoons kun je ook *#0*# bellen, een testcode die een ingebouwd testmenu opent. Zulke codes hangen af van
          merk en model, en sommige telefoons hebben er geen.
        </p>
      </Section>

      <Section wide id="next-heading" title="Na de touchscreen test">
        <p className={p}>
          Werkt aanraken goed maar het beeld niet? Controleer dan het scherm zelf: doe de{' '}
          <Link href="/dead-pixel-test" className={link}>dode pixel test</Link> voor puntjes of de{' '}
          <Link href="/monitor-test" className={link}>monitortest</Link> voor kleur en uniformiteit.
        </p>
      </Section>
    </div>
  )
}
