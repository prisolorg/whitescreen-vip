import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Nep Zoom-vergaderscherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * nep Zoom-vergadering / fake Zoom meeting → video's, lessen en grappen → Teams of Google Meet.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function FakeZoomMeetingGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="setup-heading" title="Nep Zoom-vergaderscherm: zo stel je het in">
        <p className={p}>
          Het nep Zoom-vergaderscherm toont een galerij in Zoom-stijl met vijf deelnemers met naam, een groene rand die meegaat naar wie er
          “praat”, een opnamelabel en de bekende werkbalk met een rode knop Beëindigen.
        </p>
        <ul className={ul}>
          <li>Open Meer om je eigen Vergadertitel te typen.</li>
          <li>Zet Cameravoorbeeld inschakelen aan om je eigen camera in de tegel “Jij” te zetten. Het beeld blijft op je apparaat.</li>
          <li>Druk op F of tik op Volledig scherm, zodat de nepvergadering het hele scherm vult.</li>
        </ul>
      </Section>

      <Section wide id="uses-heading" title="Nep Zoom-vergadering voor video’s, lessen en grappen">
        <p className={p}>Een nep Zoom-gesprek is handig als je een geloofwaardige vergadering op je scherm wilt zonder echte vergadering:</p>
        <Table
          caption="Manieren om het nep Zoom-vergaderscherm te gebruiken"
          head={['Gebruik', 'Tip']}
          rows={[
            ['Rekwisiet voor film, TikTok en YouTube', 'Neem je scherm op volledig scherm op voor een nepvergadering-video'],
            ['Druk lijken in een gesprek', 'Laat het nep vergaderscherm openstaan met je camera uit'],
            ['Nep Zoom-les of oefenen', 'Oefen een les of presentatie met je camera aan'],
            ['Screenshots en mockups', 'Stel een vergadertitel in en maak een screenshot'],
            ['Onschuldige grap', 'Laat een vriend een “vergadering” zien die hij vergeten is en onthul het dan'],
          ]}
        />
        <p className={p}>Het is een scherm, geen gesprek: er is geen geluid, niemand kan deelnemen en er wordt geen verbinding met Zoom gemaakt.</p>
      </Section>

      <Section wide id="other-heading" title="Nep Zoom-vergadering, Teams of Google Meet?">
        <p className={p}>Een andere app nodig? Elke app heeft een eigen scherm:</p>
        <ul className={ul}>
          <li>
            <Link href="/fake-teams-meeting" className={link}>Nep Teams-vergaderscherm</Link>: bediening en een rode knop Verlaten in de
            bovenbalk, met een lopende timer.
          </li>
          <li>
            <Link href="/fake-google-meet" className={link}>Nep Google Meet-scherm</Link>: afgeronde tegels, initialen voor camera’s die uit
            staan en een vergadercode.
          </li>
          <li>
            <Link href="/fake-slack-huddle" className={link}>Nep Slack Huddle</Link>: een klein huddle-venster met avatars.
          </li>
        </ul>
      </Section>
    </div>
  )
}
