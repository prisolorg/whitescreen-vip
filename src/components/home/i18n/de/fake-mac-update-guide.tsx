import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Mac Update Simulation (Deutsch). Kleine Suchmenge: Mac-/Apple-Update- und Ladebildschirm → Streich einrichten →
 * iPad, iPhone und andere Systeme. Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function FakeMacUpdateGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Mac Update Simulation: So funktioniert sie">
        <p className={p}>
          Die Mac Update Simulation bildet den macOS-Installationsbildschirm nach: das Logo über einem schmalen Fortschrittsbalken und eine Zeile
          wie „Noch etwa 30 Minuten“. Ist der Balken voll, wird der Bildschirm dunkel, zeigt das Logo wie ein echter Apple-Ladebildschirm, und das
          Update beginnt von vorn.
        </p>
        <ul className={ul}>
          <li>Wähle einen schwarzen oder weißen Bildschirm, passend zum Mac.</li>
          <li>Öffne „Mehr“, um festzulegen, wie lange das Update dauert (5 bis 120 Minuten) und wo der Balken startet.</li>
          <li>Schalte „Restzeit“ aus, dann verrät der Balken nichts.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Mac-Update-Streich mit der Mac Update Simulation">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Öffne diese Seite auf dem MacBook oder iMac, den du reinlegen willst.</li>
          <li>Stell eine lange Update-Dauer ein, etwa 120 Minuten, damit sich der Balken kaum bewegt.</li>
          <li>Drück F oder tippe auf „Vollbild“, um Menüleiste und Dock auszublenden.</li>
          <li>Geh weg und drück dann Esc, um den Scherz zu beenden. Am Mac ändert sich nichts.</li>
        </ol>
      </Section>

      <Section wide id="devices-heading" title="Mac Update Simulation auf iPad, iPhone oder einem anderen Computer">
        <p className={p}>
          Sie läuft in jedem Browser, deshalb funktioniert derselbe Apple-Update-Bildschirm auch als falsches iPad-Update oder auf einem iPhone in
          Safari. Tippe auf „Vollbild“, und er füllt den Bildschirm.
        </p>
        <p className={p}>
          Willst du einen anderen Computer reinlegen? Nimm die <Link href="/fake-windows-10-update" className={link}>Windows 10 Update Simulation</Link>,
          die <Link href="/fake-chrome-os-update" className={link}>Chrome OS Update Simulation</Link> für Chromebooks oder das{' '}
          <Link href="/fake-ubuntu-update" className={link}>Ubuntu Terminal Update</Link>. Für Handys probier den{' '}
          <Link href="/broken-screen" className={link}>Displayschaden-Effekt</Link>.
        </p>
      </Section>
    </div>
  )
}
