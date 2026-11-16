import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba de Píxeles Muertos (español). Búsquedas en español: test de píxeles muertos / píxeles muertos / test de pantalla LCD →
 * tipos de píxel (muerto, atascado, caliente) → móvil, portátil, monitor y TV → reparar píxeles muertos.
 * Los botones se llaman como en la interfaz española: Cambio automático, Pantalla completa.
 */
export function DeadPixelGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Prueba de píxeles muertos: cómo revisar tu pantalla">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Limpia la pantalla para no confundir el polvo con un píxel.</li>
          <li>Toca dos veces o pulsa F para la pantalla completa, así se prueba cada píxel.</li>
          <li>Toca la pantalla o usa las flechas para pasar por 9 colores: negro, blanco, rojo, verde, azul, cian, magenta, amarillo y gris.</li>
          <li>Mira cada color con atención, de borde a borde. O pulsa Cambio automático para cambiar de color cada pocos segundos.</li>
        </ol>
        <p className={p}>
          Sirve como test de píxeles y test de pantalla LCD en cualquier monitor, portátil, móvil, tableta o televisor con navegador. Para revisar
          un color durante más tiempo, abre la <Link href="/black-screen" className={link}>pantalla negra</Link> o la{' '}
          <Link href="/" className={link}>pantalla blanca</Link>.
        </p>
      </Section>

      <Section wide id="types-heading" title="Resultados de la prueba de píxeles muertos: ¿muerto, atascado o caliente?">
        <p className={p}>¿Qué es un píxel muerto? Un píxel que ya no se enciende en absoluto. Así se distingue de los demás:</p>
        <Table
          caption="Cómo se ve un fallo de píxel"
          head={['Lo que ves', 'Se ve mejor sobre', 'Qué es']}
          rows={[
            ['Un punto negro que nunca se enciende', 'Blanco y colores claros', 'Píxel muerto'],
            ['Un punto fijo en rojo, verde o azul', 'Negro y otros colores', 'Píxel atascado'],
            ['Un punto que siempre está blanco', 'Negro', 'Píxel caliente'],
            ['Motas que se mueven al limpiar', 'Cualquier color', 'Polvo, no un píxel'],
          ]}
        />
        <p className={p}>
          Más información en las guías del <Link href="/screen-problems/stuck-pixel" className={link}>píxel atascado</Link> y del{' '}
          <Link href="/screen-problems/hot-pixel" className={link}>píxel caliente</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Prueba de píxeles muertos en el móvil, el portátil, el monitor o la tele">
        <ul className={ul}>
          <li>Móvil e iPhone: sube el brillo, toca el icono de pantalla completa y ve tocando para pasar los colores.</li>
          <li>Portátil y monitor: pon la pantalla en su resolución nativa para que un píxel se vea como un píxel.</li>
          <li>Tele: abre la página en el navegador de la tele, o envía una pestaña del portátil, y revísala de cerca.</li>
          <li>¿Dispositivo nuevo? Haz la prueba de píxeles muertos enseguida, mientras aún puedes devolverlo.</li>
        </ul>
      </Section>

      <Section wide id="fix-heading" title="Después de la prueba de píxeles muertos: ¿tiene arreglo?">
        <p className={p}>
          ¿Buscas cómo arreglar un píxel muerto? Un píxel muerto de verdad casi nunca vuelve, porque no recibe corriente. Un píxel atascado a
          veces sí: hacer parpadear colores rápidamente sobre él durante 10 a 20 minutos puede despertarlo. La{' '}
          <Link href="/screen-burn-in-test" className={link}>prueba de quemado de pantalla</Link> tiene un reparador con ciclo de colores que
          puedes usar para esto; sáltatelo si te molestan las luces parpadeantes.
        </p>
        <p className={p}>
          Si la pantalla está en garantía, consulta la política de píxeles muertos del fabricante. Para revisar también los colores y la
          uniformidad, haz la <Link href="/monitor-test" className={link}>prueba de monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
