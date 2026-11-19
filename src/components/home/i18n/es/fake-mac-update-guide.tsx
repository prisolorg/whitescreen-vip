import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Actualización Falsa Mac (español). Búsquedas en español: actualización falsa de Mac / pantalla de actualización de
 * Apple → broma en el Mac → iPad, iPhone y otros ordenadores.
 * Los ajustes se llaman como en la interfaz española: Más, Duración de la actualización, Tiempo restante.
 */
export function FakeMacUpdateGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Actualización falsa de Mac: cómo funciona">
        <p className={p}>
          La pantalla de actualización falsa de Mac recrea la pantalla de instalación de macOS: el logo sobre una barra de progreso fina y una
          línea como &quot;Quedan unos 30 minutos&quot;. Cuando la barra se llena, la pantalla se oscurece, muestra el logo como una pantalla de
          carga real de Apple y la actualización empieza de nuevo.
        </p>
        <ul className={ul}>
          <li>Elige pantalla negra o blanca según el Mac.</li>
          <li>Abre Más para fijar cuánto dura la actualización (de 5 a 120 minutos) y dónde empieza la barra.</li>
          <li>Desactiva Tiempo restante para que la barra no dé ninguna pista.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Broma de la actualización falsa de Mac: cómo prepararla">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Abre esta página en el MacBook o iMac al que quieras gastar la broma.</li>
          <li>Pon una duración de la actualización larga, como 120 minutos, para que la barra apenas se mueva.</li>
          <li>Pulsa F o toca Pantalla completa para ocultar la barra de menús y el Dock.</li>
          <li>Vete y luego pulsa Esc para terminar la broma. No cambia nada en el Mac.</li>
        </ol>
      </Section>

      <Section wide id="devices-heading" title="Actualización falsa de Mac en un iPad, un iPhone u otro ordenador">
        <p className={p}>
          Funciona en cualquier navegador, así que la misma pantalla de actualización de Apple sirve como actualización falsa de iPad o en un
          iPhone con Safari. Toca Pantalla completa y ocupará toda la pantalla.
        </p>
        <p className={p}>
          ¿La broma es para otro ordenador? Usa la <Link href="/fake-windows-10-update" className={link}>actualización falsa de Windows 10</Link>,
          la <Link href="/fake-chrome-os-update" className={link}>actualización falsa de Chrome OS</Link> para Chromebooks o la{' '}
          <Link href="/fake-ubuntu-update" className={link}>actualización falsa de Ubuntu</Link>. Para móviles, prueba el{' '}
          <Link href="/broken-screen" className={link}>efecto pantalla rota</Link>.
        </p>
      </Section>
    </div>
  )
}
