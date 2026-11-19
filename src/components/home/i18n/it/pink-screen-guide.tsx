import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Schermo rosa (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * luce rosa per selfie, foto e TikTok → tonalità: rosa shocking, rosa acceso → sfondo rosa.
 * I pulsanti hanno i nomi dell'interfaccia italiana.
 */
export function PinkScreenGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Schermo rosa come luce per selfie, foto e TikTok">
        <p className={p}>
          Uno schermo rosa è una luce rosa semplice e lusinghiera: ammorbidisce la pelle e aggiunge un bagliore caldo senza LED rosa o altra
          attrezzatura. Tocca due volte l’anteprima per lo schermo intero e attiva «Mantieni lo schermo acceso». Per una luce neutra e
          fedele, usa invece lo <Link href="/" className={link}>schermo bianco</Link>.
        </p>
        <Table
          caption="Modi di usare lo schermo rosa come luce"
          head={['Uso', 'Impostazioni', 'Consiglio']}
          rows={[
            ['Selfie e foto', 'Luminosità 100%', 'Tieni un secondo telefono o tablet appena di lato al viso'],
            ['FaceTime e videochiamate', 'Luminosità 70–100%', 'Metti lo schermo dietro la fotocamera, rivolto verso di te'],
            ['Video TikTok e lip sync', 'Luminosità 100%, Caldo', 'Spegni le luci della stanza, così la luce rosa risalta'],
            ['Luci per la stanza e d’atmosfera', 'Luminosità 40–70%', 'Rivolgi lo schermo verso una parete per diffondere il bagliore'],
          ]}
        />
      </Section>

      <Section wide id="shade-heading" title="Colori dello schermo rosa: rosa shocking, rosa acceso e tonalità più scure">
        <p className={p}>
          Questo schermo rosa shocking mostra #FF69B4 (RGB 255, 105, 180), un rosa acceso con un po’ di blu. Cambia la tonalità con i comandi
          sotto l’anteprima.
        </p>
        <Table
          caption="Tonalità di rosa e come ottenerle"
          head={['Tonalità', 'Come ottenerla', 'Aspetto']}
          rows={[
            ['Rosa shocking / rosa acceso', 'Neutro, Luminosità 100%', 'Vivace e giocoso (#FF69B4)'],
            ['Rosa corallo', 'Caldo', 'Un rosa più caldo, color pesca (#FF4F64)'],
            ['Rosa antico', 'Freddo', 'Più freddo, leggermente più magenta (#DD5FB4)'],
            ['Rosa scuro', 'Luminosità 50–70%', 'Un rosa più profondo e smorzato (#80355A–#B34A7E)'],
            ['Rosa chiaro / rosa confetto', <Link key="lp" href="/backgrounds/light-pink-background" className={link}>Sfondo rosa chiaro</Link>, 'Morbido e pallido (#FFB6C1)'],
          ]}
        />
        <p className={p}>
          Vuoi un rosa neon più forte? Prova lo <Link href="/magenta-screen" className={link}>schermo magenta</Link>.
        </p>
      </Section>

      <Section wide id="background-heading" title="Sfondo e wallpaper con lo schermo rosa">
        <p className={p}>
          Ti serve uno sfondo rosa shocking come file? Usa «Scarica» sotto l’anteprima. Luminosità e calore vengono applicati all’immagine.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Portatile e desktop:</strong> 1080p, 2K o 4K.
          </li>
          <li>
            <strong className="text-foreground">Sfondo del telefono:</strong> Telefono (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Tutto il resto:</strong> larghezza e altezza personalizzate, come 1080×1920 per TikTok e Reel.
          </li>
        </ul>
        <p className={p}>
          Lo vuoi più tenue? Usa lo <Link href="/backgrounds/light-pink-background" className={link}>sfondo rosa chiaro</Link> (#FFB6C1), o
          guarda la raccolta di <Link href="/backgrounds/pink-background" className={link}>sfondi rosa</Link>.
        </p>
      </Section>
    </div>
  )
}
