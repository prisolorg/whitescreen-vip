import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Windows 10 Update Simulation (Deutsch). Diese Seite trägt „Fake Windows Update“ / „Windows Update Prank“.
 * Übersetzt aus dem englischen Leitfaden: Funktionsweise → Streich einrichten → andere Systeme → echtes Update hängt.
 * Schaltflächen und Bildschirmtexte heißen so wie in der deutschen Oberfläche des Tools.
 */
export function FakeWindowsUpdateGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Windows 10 Update Simulation: So funktioniert der Fake-Update-Bildschirm">
        <p className={p}>
          Diese Windows 10 Update Simulation bildet den Bildschirm „Updates werden bearbeitet“ von Windows 10 nach: dunkler Hintergrund,
          drehende Ladeanzeige, eine langsam steigende Prozentzahl und der bekannte Satz „Schalten Sie den PC nicht aus. Dies kann eine Weile
          dauern.“
        </p>
        <ul className={ul}>
          <li>Die Prozentzahl steigt von selbst und beginnt nach 100 % von vorn, so wird dieser falsche Ladebildschirm nie fertig.</li>
          <li>Mit „Pause“ hältst du sie an, dann sieht das Update aus, als würde es hängen.</li>
          <li>Öffne „Mehr“, um das Update schneller oder langsamer zu machen.</li>
          <li>Drück F oder tippe auf „Vollbild“, um den Browser auszublenden. Der Mauszeiger verschwindet, wenn die Maus stillsteht.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Windows-Update-Streich mit der Windows 10 Update Simulation">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Öffne dieses falsche Update auf dem Computer, den du reinlegen willst.</li>
          <li>Drück F oder tippe auf „Vollbild“, damit es den ganzen Bildschirm bedeckt.</li>
          <li>Geh weg. Die Prozentzahl steigt weiter, während gewartet wird.</li>
          <li>Für eine Wendung tippst du auf „BSOD-Streich auslösen“, und das Update „scheitert“ mit einem Bluescreen.</li>
          <li>Drück Esc, um es zu beenden. Am Computer wird nichts verändert.</li>
        </ol>
        <p className={p}>
          Willst du nur den Absturz? Nimm den <Link href="/fake-blue-screen-of-death" className={link}>Fake Bluescreen</Link> oder lass das Glas
          mit dem <Link href="/broken-screen" className={link}>Displayschaden-Effekt</Link> springen.
        </p>
      </Section>

      <Section wide id="systems-heading" title="Wie die Windows 10 Update Simulation: Fake-Updates für Windows 11, XP und andere Systeme">
        <Table
          caption="Falsche Update-Bildschirme für jedes System"
          head={['System', 'Fake-Update-Bildschirm']}
          rows={[
            ['Windows 11', <Link key="w11" href="/fake-windows-11-update" className={link}>Windows 11 Update Simulation</Link>],
            ['Windows XP', <Link key="xp" href="/fake-windows-xp-update" className={link}>Windows XP Setup Simulation</Link>],
            ['Windows-XP-Start', <Link key="xpb" href="/fake-windows-xp-boot" className={link}>Windows XP Boot Simulation</Link>],
            ['Mac', <Link key="mac" href="/fake-mac-update" className={link}>Mac Update Simulation</Link>],
            ['Chromebook', <Link key="cros" href="/fake-chrome-os-update" className={link}>Chrome OS Update Simulation</Link>],
            ['Ubuntu / Linux', <Link key="ub" href="/fake-ubuntu-update" className={link}>Ubuntu Terminal Update</Link>],
            ['Android', <Link key="and" href="/fake-android-update" className={link}>Android Update Simulation</Link>],
          ]}
        />
      </Section>

      <Section wide id="real-heading" title="Windows 10 Update Simulation oder hängt ein echtes Update?">
        <p className={p}>
          Wenn ein echter Windows-Update-Bildschirm oder Windows-Ladebildschirm zu hängen scheint, kann diese Seite das nicht beheben. Diese
          Schritte helfen aber meistens:
        </p>
        <ul className={ul}>
          <li>Gib ihm Zeit. Große Updates können lange auf einer Prozentzahl stehen bleiben.</li>
          <li>Achte auf Festplattenaktivität. Eine blinkende Laufwerksleuchte bedeutet, dass noch gearbeitet wird.</li>
          <li>Nur als letzter Ausweg: Halte den Ein-/Aus-Knopf gedrückt, um neu zu starten. Windows macht ein fehlgeschlagenes Update meistens von selbst rückgängig.</li>
        </ul>
      </Section>
    </div>
  )
}
