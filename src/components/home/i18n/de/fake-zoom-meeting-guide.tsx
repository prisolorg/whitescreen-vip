import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Fake-Zoom-Meeting-Bildschirm (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Fake Zoom Meeting / falsches Zoom-Meeting → Fake-Zoom-Call für Videos, Unterricht und Streiche → Teams und Google Meet.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function FakeZoomMeetingGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="setup-heading" title="Fake-Zoom-Meeting-Bildschirm: So richtest du ihn ein">
        <p className={p}>
          Der Fake-Zoom-Meeting-Bildschirm zeigt eine Galerie im Zoom-Stil mit fünf benannten Teilnehmern, einem grünen Rahmen, der zu der
          Person wandert, die gerade „spricht“, einem Aufnahme-Hinweis und der bekannten Leiste mit rotem Beenden-Knopf.
        </p>
        <ul className={ul}>
          <li>Öffne „Mehr“, um deinen eigenen Meeting-Titel einzugeben.</li>
          <li>Schalte „Kameravorschau aktivieren“ ein, um deine eigene Kamera in die Kachel „Du“ zu holen. Sie bleibt auf deinem Gerät.</li>
          <li>Drück F oder tippe auf „Vollbild“, damit das falsche Meeting den ganzen Bildschirm füllt.</li>
        </ul>
      </Section>

      <Section wide id="uses-heading" title="Fake-Zoom-Meeting-Bildschirm für Videos, Unterricht und Streiche">
        <p className={p}>Ein Fake-Zoom-Call ist praktisch, wenn du ein glaubwürdiges Meeting auf dem Bildschirm brauchst, ohne dass es ein echtes gibt:</p>
        <Table
          caption="So kannst du den Fake-Zoom-Meeting-Bildschirm nutzen"
          head={['Einsatz', 'Tipp']}
          rows={[
            ['Requisite für Film, TikTok und YouTube', 'Nimm den Bildschirm im Vollbild auf, dann hast du ein falsches Meeting-Video'],
            ['Im Call beschäftigt wirken', 'Lass den Fake-Meeting-Bildschirm mit ausgeschalteter Kamera offen'],
            ['Fake-Zoom-Unterricht oder Übung', 'Probe eine Stunde oder Präsentation mit eingeschalteter Kamera'],
            ['Screenshots und Mockups', 'Leg einen Meeting-Titel fest und mach dann einen Screenshot'],
            ['Harmloser Streich', 'Zeig einem Freund ein „Meeting“, das er verpasst hat, und lös es dann auf'],
          ]}
        />
        <p className={p}>Es ist ein Bildschirm, kein Anruf: Es gibt keinen Ton, niemand kann beitreten, und nichts verbindet sich mit Zoom.</p>
      </Section>

      <Section wide id="other-heading" title="Fake-Zoom-Meeting-Bildschirm, Teams oder Google Meet?">
        <p className={p}>Brauchst du eine andere App? Jede hat ihren eigenen Bildschirm:</p>
        <ul className={ul}>
          <li>
            <Link href="/fake-teams-meeting" className={link}>Fake-Teams-Meeting-Bildschirm</Link>: Steuerung und ein roter Verlassen-Knopf in der
            oberen Leiste, mit laufendem Timer.
          </li>
          <li>
            <Link href="/fake-google-meet" className={link}>Fake-Google-Meet-Bildschirm</Link>: abgerundete Kacheln, Initialen bei ausgeschalteten
            Kameras und ein Meeting-Code.
          </li>
          <li>
            <Link href="/fake-slack-huddle" className={link}>Slack Huddle Simulation</Link>: ein kleines Huddle-Fenster mit Avataren.
          </li>
        </ul>
      </Section>
    </div>
  )
}
