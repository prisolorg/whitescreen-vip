import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Bildschirm-Auflösungstest (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * Bildschirmauflösung herausfinden / welche Auflösung hat mein Bildschirm → Auflösung in den Einstellungen prüfen →
 * Handy-Auflösung → übliche Auflösungen bis 4K. Anzeigen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function ScreenResolutionGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="read-heading" title="Bildschirm-Auflösungstest: Was jede Zahl bedeutet">
        <p className={p}>
          Welche Auflösung hat mein Bildschirm? Diese Seite antwortet von selbst, ohne dass du einen Knopf drücken musst. Das zeigt jeder Wert:
        </p>
        <Table
          caption="Werte im Bildschirm-Auflösungstest"
          head={['Wert', 'Was er bedeutet']}
          rows={[
            ['Bildschirmauflösung', 'Deine Bildschirmgröße in CSS-Pixeln, nach der Anzeigeskalierung'],
            ['Physische Pixel', 'Die echte Pixelzahl: Bildschirmauflösung × Pixelverhältnis. Das ist meist die native Auflösung deines Monitors'],
            ['Browser-Viewport', 'Der Platz im Browserfenster'],
            ['Verfügbare Fläche', 'Der Bildschirm ohne Taskleiste oder Dock'],
            ['Pixelverhältnis', 'Wie viele physische Pixel einen CSS-Pixel bilden (1 = keine Skalierung)'],
            ['Farbtiefe', 'Bits pro Pixel, die der Browser meldet, meist 24 Bit'],
          ]}
        />
        <p className={p}>
          Die Werte ändern sich live, wenn du die Fenstergröße änderst oder ein Handy drehst. Lass den Browser-Zoom auf 100 %, denn Zoom ändert
          das Pixelverhältnis und die Zahl der physischen Pixel.
        </p>
      </Section>

      <Section wide id="check-heading" title="Bildschirm-Auflösungstest und deine Anzeigeeinstellungen">
        <p className={p}>
          Der Bildschirm-Auflösungstest liest, was dein Browser sieht. So prüfst oder änderst du die Monitorauflösung in den Systemeinstellungen:
        </p>
        <Table
          caption="Wo du die Einstellung für die Bildschirmauflösung findest"
          head={['Gerät', 'Wo du schaust']}
          rows={[
            ['Windows 11 / 10', 'Einstellungen → System → Anzeige → Bildschirmauflösung (die als „Empfohlen“ markierte ist die native)'],
            ['Mac', 'Systemeinstellungen → Displays (eine skalierte Einstellung kann „Physische Pixel“ von der nativen Panelgröße abweichen lassen)'],
            ['iPhone / iPad', 'Vom Modell festgelegt; nutze den Wert „Physische Pixel“ oben'],
            ['Android', 'Einstellungen → Anzeige → Bildschirmauflösung (nur bei manchen Handys)'],
          ]}
        />
        <p className={p}>
          Zeigt der Test weniger physische Pixel als im Datenblatt deines Monitors, ist das Display nicht auf seine native Auflösung eingestellt,
          und Text kann unscharf wirken.
        </p>
      </Section>

      <Section wide id="phone-heading" title="Bildschirm-Auflösungstest am Handy: Welche Auflösung hat mein Handy?">
        <p className={p}>
          Handys melden eine kleine Auflösung wie 390 × 844, weil sie alles für scharfen Text hochskalieren. Die echte Auflösung deines Handys ist
          der Wert „Physische Pixel“: 390 × 844 bei einem Pixelverhältnis von 3 ergibt zum Beispiel 1170 × 2532.
        </p>
      </Section>

      <Section wide id="common-heading" title="Übliche Werte im Bildschirm-Auflösungstest: HD bis 4K">
        <Table
          caption="Übliche Bildschirmauflösungen"
          head={['Name', 'Auflösung', 'Typische Bildschirme']}
          rows={[
            ['HD', '1280 × 720', 'Ältere Laptops und Fernseher'],
            ['Full HD (1080p)', '1920 × 1080', 'Die meisten Monitore und Laptops'],
            ['QHD (1440p)', '2560 × 1440', 'Gaming- und Büromonitore'],
            ['4K UHD', '3840 × 2160', '4K-Monitore und -Fernseher'],
          ]}
        />
        <ul className={ul}>
          <li>Ist mein Monitor 4K? Ja, wenn „Physische Pixel“ bei 100 % Browser-Zoom 3840 × 2160 zeigt.</li>
          <li>Ein Browser kann die Bildschirmgröße nicht in Zoll lesen; diese Seite zeigt die Größe nur in Pixeln.</li>
          <li>
            Prüf die Schärfe bei deiner Auflösung mit den feinen Linien im <Link href="/monitor-test" className={link}>Monitortest</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
