import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba de Ghosting del Monitor (español). Búsquedas en español: test de ghosting / ghosting monitor →
 * qué significan las estelas → cómo quitar el ghosting (overdrive) → portátil, TV y otras pantallas.
 * Los ajustes se llaman como en la interfaz española: Velocidad, Pausa, Más, Cuadrícula de referencia.
 */
export function MonitorGhostingGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Prueba de ghosting del monitor: cómo hacerla">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pon el monitor a su frecuencia de actualización más alta y toca dos veces la prueba de ghosting para verla a pantalla completa.</li>
          <li>Observa cómo el objeto cruza las franjas oscura, gris media y clara. Síguelo con la mirada, no te quedes mirando un punto fijo.</li>
          <li>Sube la Velocidad (de 240 a 2.400 px/s) hasta que aparezcan estelas y pulsa Pausa para ver un fotograma congelado.</li>
          <li>Cambia el ajuste de overdrive del monitor y vuelve a hacer la prueba de ghosting para comparar.</li>
        </ol>
        <p className={p}>
          En la prueba de ghosting del monitor, la cuadrícula de referencia vertical (en Más) te ayuda a juzgar lo larga que es una estela. Cada
          franja usa un fondo distinto porque el ghosting suele ser peor sobre oscuro o gris medio.
        </p>
      </Section>

      <Section wide id="results-heading" title="Resultados de la prueba de ghosting del monitor: qué significan las estelas">
        <p className={p}>
          ¿Qué es el ghosting en un monitor? Los píxeles que cambian de color demasiado despacio dejan una copia tenue detrás de todo lo que se
          mueve. Así se interpreta la prueba de ghosting del monitor:
        </p>
        <Table
          caption="Ghosting, manchas y overshoot"
          head={['Lo que ves detrás del objeto', 'Qué es', 'Causa habitual']}
          rows={[
            ['Una copia o estela tenue y más oscura', 'Ghosting', 'Respuesta de píxel lenta, overdrive desactivado o muy bajo'],
            ['Una mancha oscura, peor en la franja oscura', 'Black smearing (arrastre negro)', 'Paneles VA, cambios lentos de oscuro a claro'],
            ['Un halo brillante o invertido', 'Overshoot (ghosting inverso)', 'Overdrive demasiado alto'],
            ['Un borde suave y borroso sin copia', 'Desenfoque de movimiento', 'Normal a 60 Hz; menor con frecuencias más altas'],
          ]}
        />
      </Section>

      <Section wide id="fix-heading" title="Cómo corregir lo que muestra la prueba de ghosting del monitor">
        <p className={p}>Un monitor con ghosting rara vez necesita reparación; los ajustes adecuados suelen acortar las estelas.</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Overdrive:</strong> en el menú del monitor también se llama Response Time, Trace Free u OD.
            Elige el ajuste con la estela más corta y sin halo brillante, normalmente el intermedio.
          </li>
          <li>
            <strong className="text-foreground">Frecuencia de actualización:</strong> comprueba que está al máximo con la{' '}
            <Link href="/screen-refresh-rate-test" className={link}>prueba de frecuencia de actualización</Link>. Más Hz significa menos desenfoque.
          </li>
          <li>
            <strong className="text-foreground">Cable y puerto:</strong> usa DisplayPort o un cable que admita la frecuencia máxima de tu monitor.
          </li>
          <li>
            <strong className="text-foreground">Modos de imagen:</strong> el procesado extra, como la reducción de ruido, puede añadir estelas;
            desactívalo.
          </li>
        </ul>
      </Section>

      <Section wide id="screen-heading" title="Prueba de ghosting del monitor en un portátil, una tele u otra pantalla">
        <p className={p}>
          El ghosting es igual en cualquier pantalla LCD u OLED: abre la prueba de ghosting del monitor en el portátil, la tele o la tableta que
          quieras revisar y hazla a pantalla completa. Las teles suelen tener un modo juego que reduce el procesado y el ghosting.
        </p>
        <p className={p}>
          Una &ldquo;imagen fantasma&rdquo; también puede ser una imagen tenue que se queda en pantalla cuando nada se mueve. Eso es retención
          de imagen o quemado, no ghosting de movimiento; compruébalo con la{' '}
          <Link href="/screen-burn-in-test" className={link}>prueba de quemado de pantalla</Link>. Tienes más detalles en la{' '}
          <Link href="/screen-problems/ghosting" className={link}>guía sobre el ghosting</Link>.
        </p>
      </Section>
    </div>
  )
}
