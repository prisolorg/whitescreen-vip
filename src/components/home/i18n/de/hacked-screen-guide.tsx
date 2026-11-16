import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Gehackter Bildschirm Simulator (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * gehackter Bildschirm / Hacker-Streich → was der Streich zeigt → Regeln → echte Warnmeldungen (Betrug).
 * Schaltflächen und Bildschirmtexte heißen so wie in der deutschen Oberfläche des Tools.
 */
export function HackedScreenGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Gehackter Bildschirm Simulator: So richtest du den Streich ein">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Wähle einen Stil: „Rot-Alarm“ oder „Grünes Terminal“.</li>
          <li>Öffne „Mehr“, um deine eigene Überschrift einzugeben (standardmäßig SYSTEM GEHACKT) oder den Hinweis „War nur Spaß“ auszublenden.</li>
          <li>Schalte „Sirene“ ein, wenn du einen Alarm willst.</li>
          <li>Tippe doppelt oder drück F für Vollbild und lass den Computer dann stehen, bis dein Freund ihn findet.</li>
        </ol>
        <p className={p}>Drück Esc, um das Vollbild zu verlassen und den Streich mit dem gehackten Bildschirm zu beenden.</p>
      </Section>

      <Section wide id="shows-heading" title="Was der Gehackter Bildschirm Simulator zeigt">
        <ul className={ul}>
          <li>Eine blinkende Warnung „SICHERHEITSVERLETZUNG ERKANNT“ und eine flackernde Überschrift.</li>
          <li>Falsche Hacking-Schritte wie „Firewall wird umgangen“ und „Passwort-Tresor wird entschlüsselt“.</li>
          <li>Einen Fortschrittsbalken und einen 59-Sekunden-Countdown, die beide von vorn beginnen, so wird der falsche gehackte Bildschirm nie wirklich fertig.</li>
          <li>Scrollende falsche Logs, Scanlines und ein pulsierendes rotes oder grünes Leuchten.</li>
        </ul>
        <p className={p}>Es wird nichts installiert und am Computer nichts angerührt. Der Streich ist nur eine Webseite.</p>
      </Section>

      <Section wide id="rules-heading" title="Gehackter Bildschirm Simulator: Halte es lustig">
        <ul className={ul}>
          <li>Leg Leute rein, die darüber lachen, und lös den Scherz innerhalb einer Minute auf.</li>
          <li>Lass Arbeitscomputer aus, wo es die IT-Abteilung alarmieren könnte, und alle, die sich leicht erschrecken.</li>
          <li>Lass den Hinweis „War nur Spaß“ an, wenn du nicht sicher bist, wie jemand reagiert.</li>
        </ul>
        <p className={p}>
          Weitere Bildschirm-Streiche: die <Link href="/hacker-typer" className={link}>Hacker-Tippsimulation</Link>, der{' '}
          <Link href="/broken-screen" className={link}>Displayschaden-Effekt</Link> und der{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>Fake Bluescreen</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="Kein Gehackter Bildschirm Simulator? Echte Warnmeldungen">
        <p className={p}>
          Ein Bildschirm „Du wurdest gehackt“, den du nicht selbst geöffnet hast und der dich auffordert, eine Nummer anzurufen oder zu zahlen, ist
          fast immer Betrug:
        </p>
        <ul className={ul}>
          <li>Ruf die Nummer nicht an, zahl nichts und lass niemanden auf deinen Computer zugreifen.</li>
          <li>Schließ den Browser; lässt er sich nicht schließen, nutze den Task-Manager (Strg + Umschalt + Esc) oder „Sofort beenden“ am Mac.</li>
          <li>Lass deinen Virenscanner laufen und ändere Passwörter von einem anderen Gerät aus, falls du welche eingegeben hast.</li>
        </ul>
      </Section>
    </div>
  )
}
