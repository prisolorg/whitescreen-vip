import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Windows 11 Update Simulation (Deutsch). Zielt auf die Windows-11-Suchbegriffe; das allgemeine „Fake Windows Update“
 * gehört zu /fake-windows-10-update (unten verlinkt). Schaltflächen und Bildschirmtexte wie in der deutschen Oberfläche.
 */
export function FakeWindows11UpdateGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Windows 11 Update Simulation: So funktioniert sie">
        <p className={p}>
          Die Windows 11 Update Simulation übernimmt den modernen Look: schwarzer Bildschirm, drehender Ring, „Updates werden bearbeitet“, eine
          steigende Prozentzahl und „Lassen Sie den Computer eingeschaltet und angeschlossen.“
        </p>
        <ul className={ul}>
          <li>Die Prozentzahl steigt immer weiter und beginnt nach 100 % von vorn, so endet das Update nie.</li>
          <li>Drück „Pause“, um sie anzuhalten, dann sieht das Update aus, als würde es hängen.</li>
          <li>Öffne „Mehr“, um es schneller oder langsamer zu machen.</li>
          <li>Drück F oder tippe auf „Vollbild“, um Browser und Taskleiste auszublenden.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Streich mit der Windows 11 Update Simulation: So richtest du ihn ein">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Öffne diesen falschen Update-Bildschirm auf dem Windows-11-PC, den du reinlegen willst.</li>
          <li>Drück F oder tippe auf „Vollbild“, damit er das Display füllt.</li>
          <li>Lass ihn laufen. Der Ring dreht sich und die Prozentzahl kriecht nach oben.</li>
          <li>Für eine Wendung tippst du auf „BSOD-Streich auslösen“, dann „stürzt“ das Update ab.</li>
          <li>Drück Esc, um es zu beenden. Am PC ändert sich nichts.</li>
        </ol>
      </Section>

      <Section wide id="compare-heading" title="Windows 11 Update Simulation im Vergleich zu Windows 10 und XP">
        <Table
          caption="Welchen falschen Windows-Update-Bildschirm du nehmen solltest"
          head={['Bildschirm', 'Sieht aus wie', 'Seite']}
          rows={[
            ['Windows 11', 'Schwarzer Bildschirm, drehender Ring, schlichte Prozentzahl', 'Diese Seite'],
            ['Windows 10', 'Drehende Punkte und „Updates werden bearbeitet 14 % abgeschlossen“', <Link key="w10" href="/fake-windows-10-update" className={link}>Windows 10 Update Simulation</Link>],
            ['Windows XP', 'Retro-Installationsprogramm mit Fortschrittsbalken', <Link key="xp" href="/fake-windows-xp-update" className={link}>Windows XP Setup Simulation</Link>],
            ['Absturzbildschirm', 'Der Bluescreen (Blue Screen of Death)', <Link key="bsod" href="/fake-blue-screen-of-death" className={link}>Fake Bluescreen</Link>],
          ]}
        />
        <p className={p}>
          Ein echter Windows-11-Ladebildschirm oder Upgrade-Bildschirm kann lange auf einer Zahl stehen bleiben. Wenn deiner zu hängen scheint,
          gib ihm Zeit und lass ihn am Strom, bevor du neu startest.
        </p>
      </Section>
    </div>
  )
}
