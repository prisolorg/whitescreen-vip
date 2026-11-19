import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * OLED-Grautest (Deutsch). Übersetzt aus dem englischen Leitfaden, mit deutschen Suchbegriffen:
 * OLED Test / OLED Testbild → Graustufentest → Einbrenntests (verlinkt) → grauer Bildschirm (verlinkt).
 * Schaltflächen heißen so wie in der deutschen Oberfläche des Tools.
 */
export function OledGrayGuideDe() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="OLED-Grautest: So prüfst du fast schwarze Töne">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Dunkle den Raum ab und stell den Bildschirm auf etwa 50 % Helligkeit.</li>
          <li>Tippe doppelt für Vollbild, damit der OLED-Grautest das ganze Panel abdeckt.</li>
          <li>Geh die dunklen Graustufen durch: 1 %, 2 %, 3 %, 5 %, 10 %, 15 % und 20 %. Tippe auf den Bildschirm oder nutze die Pfeiltasten.</li>
          <li>Hör mit dem Verlauf nahe Schwarz auf, der 0 % bis 20 % Grau in 12 Stufen nebeneinander zeigt.</li>
        </ol>
        <p className={p}>
          Jedes OLED-Testbild sollte flach und gleichmäßig aussehen, und jede Stufe im Verlauf sollte sich gerade sichtbar von der nächsten
          unterscheiden. Dieser OLED-Test funktioniert als Graustufentest auf jedem Handy, Fernseher, Laptop oder Monitor.
        </p>
      </Section>

      <Section wide id="results-heading" title="Ergebnisse im OLED-Grautest: Worauf du achtest">
        <Table
          caption="Häufige OLED-Fehler nahe Schwarz"
          head={['Was du siehst', 'Was es ist', 'Häufig?']}
          rows={[
            ['Fleckige, wolkige Bereiche auf Dunkelgrau', 'Mura (ungleichmäßiges Panel)', 'Etwas davon ist bei 1–5 % normal'],
            ['Streifen oder Farbstiche im Verlauf', 'Banding nahe Schwarz', 'Je nach Panel und Bildmodus'],
            ['Die ersten Verlaufsstufen sehen alle schwarz aus', 'Black Crush', 'Prüf Helligkeit und Bildmodus'],
            ['Ein Grün- oder Magentastich auf Dunkelgrau', 'Farbstich nahe Schwarz', 'Je nach Panel'],
          ]}
        />
        <p className={p}>
          Beurteile aus deinem normalen Sehabstand. Im OLED-Grautest ist leichtes Mura auf der 1-%-Fläche üblich; Probleme, die du in echten Filmen
          oder Spielen siehst, sind wichtiger.
        </p>
      </Section>

      <Section wide id="burn-heading" title="OLED-Grautest oder Einbrenntest?">
        <p className={p}>
          Dieser OLED-Grautest prüft dunkle Töne, kein Einbrennen. Einbrennen zeigt sich am besten auf helleren Flächen wie 50 % Grau, Rot und Blau:
        </p>
        <ul className={ul}>
          <li>
            Für einen OLED-Einbrenn-Check nimm den <Link href="/oled-burn-in-test" className={link}>OLED Burn-In Test</Link>.
          </li>
          <li>
            Um Image Retention auf jedem Bildschirm zu prüfen und zu entfernen zu versuchen, nimm den{' '}
            <Link href="/screen-burn-in-test" className={link}>Bildschirm-Einbrenn-Test</Link>.
          </li>
        </ul>
      </Section>

      <Section wide id="gray-heading" title="OLED-Grautest oder einfacher grauer Bildschirm?">
        <p className={p}>
          Brauchst du eine einfarbige graue Fläche statt Teststufen? Öffne den <Link href="/gray-screen" className={link}>grauen Bildschirm</Link>{' '}
          oder den <Link href="/black-screen" className={link}>schwarzen Bildschirm</Link>, um echtes OLED-Schwarz zu sehen. Für einen vollständigen
          Check von Farbe, Schärfe und Gamma mach den <Link href="/monitor-test" className={link}>Monitortest</Link>.
        </p>
      </Section>
    </div>
  )
}
