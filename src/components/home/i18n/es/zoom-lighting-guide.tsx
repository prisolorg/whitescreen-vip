import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Luz para Videollamadas (español). Búsquedas en español: luz para videollamadas / luz para Zoom / iluminación para
 * Zoom → configuración para reuniones → ¿luz de pantalla o aro de luz?
 * Los ajustes se llaman como en la interfaz española: Brillo, Cálida, Neutra, Luz de día, Más, Marco.
 */
export function ZoomLightingGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Luz para videollamadas: convierte tu pantalla en una lámpara">
        <p className={p}>
          Esta herramienta convierte una pantalla libre en una luz suave y uniforme para tu cara. Funciona mejor en un segundo monitor, tableta
          o móvil colocado detrás de la webcam, para que la luz te dé de frente.
        </p>
        <ul className={ul}>
          <li>Pon el Brillo al 100 % para una luz blanca intensa, o bájalo para un resplandor más suave.</li>
          <li>Elige Cálida (3000 K), Neutra (4500 K) o Luz de día (6500 K).</li>
          <li>Abre Más para una temperatura de color exacta, un color de luz personalizado o el modo Marco.</li>
          <li>Toca dos veces la pantalla o pulsa F para que la luz ocupe toda la pantalla.</li>
        </ul>
      </Section>

      <Section wide id="setup-heading" title="Luz para videollamadas de Zoom y reuniones: cómo colocarla">
        <Table
          caption="Configuraciones de luz para videollamadas"
          head={['Situación', 'Prueba esto']}
          rows={[
            ['Reunión de día junto a una ventana', 'Luz de día, para que la pantalla iguale la luz del sol'],
            ['Videollamada por la tarde-noche', 'Cálida, con un brillo del 60–80 %'],
            ['Oficina con luces de techo', 'Neutra, con la pantalla de luz justo encima de la webcam'],
            ['Sombras en un lado de la cara', 'Añade una segunda pantalla de luz en ese lado'],
          ]}
        />
        <p className={p}>
          La mejor luz para videollamadas llega de frente: deja las ventanas luminosas detrás de la cámara, no detrás de ti, y sube la luz más o
          menos a la altura de los ojos. El modo Marco ilumina solo los bordes de la pantalla para una luz de webcam más suave.
        </p>
      </Section>

      <Section wide id="ring-heading" title="¿Luz para videollamadas o aro de luz?">
        <p className={p}>
          La luz para videollamadas te ilumina la cara con una luz plana y uniforme. Para ese reflejo redondo en los ojos que tanto gusta a los
          creadores, prueba el <Link href="/ring-light" className={link}>aro de luz online</Link>. Para una luz brillante sin más, también sirve
          la <Link href="/" className={link}>pantalla blanca</Link>.
        </p>
      </Section>
    </div>
  )
}
