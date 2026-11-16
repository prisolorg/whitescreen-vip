import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Rosa Bildschirm (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * rosa / pinkes Licht für Selfies, FaceTime, TikTok → Pinktöne (Hot Pink, Knallpink) → pinker Hintergrund und Hintergrundbild.
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function PinkScreenGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Rosa Bildschirm als Licht für Selfies, Fotos und TikTok">
        <p className={p}>
          Ein rosa Bildschirm ist ein einfaches, schmeichelndes pinkes Licht: Es macht die Haut weicher und gibt einen warmen Schimmer, ganz ohne
          pinke LED oder zusätzliche Ausrüstung. Tippe doppelt auf die Vorschau für Vollbild und schalte „Bildschirm wach halten“ ein. Für neutrales,
          naturgetreues Licht nimm stattdessen den <Link href="/" className={link}>weißen Bildschirm</Link>.
        </p>
        <Table
          caption="So kannst du den rosa Bildschirm als Licht nutzen"
          head={['Einsatz', 'Einstellungen', 'Tipp']}
          rows={[
            ['Selfies und Fotos', 'Helligkeit 100 %', 'Halte ein zweites Handy oder Tablet knapp seitlich neben dein Gesicht'],
            ['FaceTime und Videocalls', 'Helligkeit 70–100 %', 'Stell den Bildschirm hinter deine Kamera, zu dir gerichtet'],
            ['TikTok- und Lip-Sync-Videos', 'Helligkeit 100 %, Warm', 'Schalte das Raumlicht aus, damit das pinke Licht heraussticht'],
            ['Raum- und Stimmungslicht', 'Helligkeit 40–70 %', 'Richte den Bildschirm auf eine Wand, um das Leuchten zu verteilen'],
          ]}
        />
      </Section>

      <Section wide id="shade-heading" title="Rosa Bildschirm in Hot Pink, Knallpink und dunkleren Tönen">
        <p className={p}>
          Dieser Bildschirm zeigt Hot Pink, #FF69B4 (RGB 255, 105, 180), ein helles Pink mit etwas Blau darin. Verschiebe den Ton mit den Reglern
          unter der Vorschau.
        </p>
        <Table
          caption="Pinktöne und wie du sie bekommst"
          head={['Ton', 'So bekommst du ihn', 'Wirkung']}
          rows={[
            ['Hot Pink / Knallpink', 'Neutral, Helligkeit 100 %', 'Kräftig und verspielt (#FF69B4)'],
            ['Korallrosa', 'Warm', 'Wärmeres, pfirsichfarbenes Pink (#FF4F64)'],
            ['Altrosa-Pink', 'Kühl', 'Kühler, etwas mehr Magenta (#DD5FB4)'],
            ['Dunkelpink', 'Helligkeit 50–70 %', 'Tieferes, gedämpftes Pink (#80355A–#B34A7E)'],
            ['Hellrosa / Babyrosa', <Link key="lp" href="/backgrounds/light-pink-background" className={link}>Hellrosa Hintergrund</Link>, 'Weich und blass (#FFB6C1)'],
          ]}
        />
        <p className={p}>
          Willst du ein stärkeres Neonpink? Probier den <Link href="/magenta-screen" className={link}>Magenta Bildschirm</Link>.
        </p>
      </Section>

      <Section wide id="background-heading" title="Rosa Bildschirm als Hintergrund und Hintergrundbild">
        <p className={p}>
          Brauchst du einen pinken Hintergrund als Datei? Nutze „Herunterladen“ unter der Vorschau. Deine Helligkeit und Wärme werden auf das Bild
          übernommen.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Laptop und Desktop:</strong> 1080p, 1440p, 4K oder 8K.
          </li>
          <li>
            <strong className="text-foreground">Handy-Hintergrund:</strong> iPhone (1179×2556) oder Android (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Alles andere:</strong> eine eigene Breite und Höhe, etwa 1080×1920 für TikTok und Reels.
          </li>
        </ul>
        <p className={p}>
          Lieber sanfter? Nimm den <Link href="/backgrounds/light-pink-background" className={link}>hellrosa Hintergrund</Link> (#FFB6C1) oder
          sieh dir die Sammlung <Link href="/backgrounds/pink-background" className={link}>rosa Hintergrund</Link> an.
        </p>
      </Section>
    </div>
  )
}
