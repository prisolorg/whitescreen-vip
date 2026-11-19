import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Actualización Falsa Windows 10 (español). Búsquedas en español: actualización falsa de Windows / pantalla de
 * actualización falsa → broma de actualización de Windows → otros sistemas → actualización real atascada.
 * Los botones se llaman como en la interfaz española: Pausa, Más, Activar broma de BSOD.
 */
export function FakeWindowsUpdateGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Actualización falsa de Windows 10: cómo funciona">
        <p className={p}>
          Esta pantalla de actualización falsa de Windows 10 recrea la pantalla &quot;Trabajando en las actualizaciones&quot;: fondo oscuro, un
          indicador de carga girando, un porcentaje que sube despacio y el conocido &quot;No apagues el equipo. Esto tardará un rato.&quot;
        </p>
        <ul className={ul}>
          <li>El porcentaje sube solo y vuelve a empezar después del 100 %, así que esta pantalla de carga falsa nunca termina.</li>
          <li>Usa Pausa para congelarlo y que la actualización parezca atascada.</li>
          <li>Abre Más para que la actualización vaya más rápida o más lenta.</li>
          <li>Pulsa F o toca Pantalla completa para ocultar el navegador. El cursor se oculta cuando el ratón está quieto.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Broma de la actualización falsa de Windows 10: cómo prepararla">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Abre esta actualización falsa en el ordenador al que quieras gastar la broma.</li>
          <li>Pulsa F o toca Pantalla completa para que cubra toda la pantalla.</li>
          <li>Vete. El porcentaje sigue subiendo mientras esperan.</li>
          <li>Para darle un giro, toca Activar broma de BSOD y la actualización &quot;falla&quot; con una pantalla azul.</li>
          <li>Pulsa Esc para terminar. No se cambia nada en el ordenador.</li>
        </ol>
        <p className={p}>
          ¿Quieres solo el fallo? Usa la <Link href="/fake-blue-screen-of-death" className={link}>pantalla azul de la muerte falsa</Link>, o
          rompe el cristal con el <Link href="/broken-screen" className={link}>efecto pantalla rota</Link>.
        </p>
      </Section>

      <Section wide id="systems-heading" title="Actualización falsa de Windows 10, 11, XP y otros sistemas">
        <Table
          caption="Pantallas de actualización falsas para cada sistema"
          head={['Sistema', 'Pantalla de actualización falsa']}
          rows={[
            ['Windows 11', <Link key="w11" href="/fake-windows-11-update" className={link}>Actualización falsa Windows 11</Link>],
            ['Windows XP', <Link key="xp" href="/fake-windows-xp-update" className={link}>Instalación falsa Windows XP</Link>],
            ['Arranque de Windows XP', <Link key="xpb" href="/fake-windows-xp-boot" className={link}>Arranque falso Windows XP</Link>],
            ['Mac', <Link key="mac" href="/fake-mac-update" className={link}>Actualización falsa Mac</Link>],
            ['Chromebook', <Link key="cros" href="/fake-chrome-os-update" className={link}>Actualización falsa Chrome OS</Link>],
            ['Ubuntu / Linux', <Link key="ub" href="/fake-ubuntu-update" className={link}>Actualización falsa Ubuntu</Link>],
            ['Android', <Link key="and" href="/fake-android-update" className={link}>Actualización falsa Android</Link>],
          ]}
        />
      </Section>

      <Section wide id="real-heading" title="¿Actualización falsa de Windows 10 o una real atascada?">
        <p className={p}>
          Si una pantalla real de actualización o de carga de Windows parece atascada, esta página no puede arreglarlo, pero estos pasos suelen
          ayudar:
        </p>
        <ul className={ul}>
          <li>Dale tiempo. Las actualizaciones grandes pueden quedarse mucho rato en el mismo porcentaje.</li>
          <li>Fíjate en la actividad del disco. Si la luz del disco parpadea, sigue trabajando.</li>
          <li>Solo como último recurso, mantén pulsado el botón de encendido para reiniciar. Windows suele revertir por sí solo una actualización fallida.</li>
        </ul>
      </Section>
    </div>
  )
}
