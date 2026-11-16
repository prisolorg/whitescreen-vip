import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba de Monitor (español). Búsquedas en español: test de monitor / test de pantalla / patrones de prueba →
 * cómo hacer un test de pantalla online → color y calibración → píxeles muertos, Hz y otros fallos.
 * Los patrones se llaman como en la interfaz española: Degradado de grises, Escalones de gris, Cuadrícula, Gamma 2.2,
 * Líneas finas, Tablero de ajedrez, Barras de color, Cambio automático.
 */
export function MonitorTestGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Patrones de la prueba de monitor y qué revisa cada uno">
        <p className={p}>
          Esta prueba de monitor, o test de pantalla, tiene siete patrones a pantalla completa, y cada imagen de prueba revisa algo distinto.
          Para un fondo liso con el que detectar polvo y píxeles muertos, abre la <Link href="/" className={link}>pantalla blanca</Link>:
        </p>
        <Table
          caption="Patrones de prueba de monitor"
          head={['Patrón', 'Qué revisa', 'Una buena pantalla muestra']}
          rows={[
            ['Degradado de grises', 'Tonos suaves, bandas de color', 'Un único degradado suave, sin escalones ni tinte de color'],
            ['Escalones de gris', 'Niveles de negro y blanco', 'Cada escalón distinto a simple vista, incluidos el más oscuro y el más claro'],
            ['Cuadrícula', 'Geometría y escalado', 'Líneas rectas y equidistantes de borde a borde'],
            ['Gamma 2.2', 'Ajuste de gamma', 'El bloque central se funde con las rayas desde lejos'],
            ['Líneas finas', 'Nitidez, resolución nativa', 'Líneas nítidas de 1 píxel sin parpadeo ni moiré'],
            ['Tablero de ajedrez', 'Contraste y bordes limpios', 'Cuadros nítidos sin halo ni manchas'],
            ['Barras de color', 'Reproducción del color', 'Ocho colores saturados y claramente separados'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Cómo hacer la prueba de monitor online">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pon la pantalla en su resolución nativa y el zoom del navegador al 100 %.</li>
          <li>Toca dos veces la prueba para verla a pantalla completa, sin nada más en pantalla.</li>
          <li>Toca la pantalla, usa las flechas o elige un patrón por su nombre. Cambio automático los recorre por ti.</li>
          <li>Mira cada patrón de frente y luego de lado, para detectar cambios según el ángulo de visión.</li>
        </ol>
        <p className={p}>
          Esta prueba de monitor funciona en cualquier navegador, así que sirve como test de pantalla online, prueba de la pantalla del
          portátil, test de un monitor de PC nuevo o usado, o una comprobación rápida de una tele.
        </p>
      </Section>

      <Section wide id="color-heading" title="Prueba de monitor para el color y la calibración">
        <p className={p}>
          En la prueba de monitor, las barras de color y el patrón de gamma muestran a simple vista los problemas evidentes de color y gamma.
          Para un test de color completo con colores sólidos y rampas RGB, usa la{' '}
          <Link href="/screen-color-test" className={link}>prueba de color de pantalla</Link>.
        </p>
        <p className={p}>
          La precisión de color real necesita un colorímetro de hardware; ninguna web puede medirla. Para una calibración básica del color del
          monitor, usa la herramienta de tu sistema:
        </p>
        <ul className={ul}>
          <li>Windows: busca &ldquo;Calibrar el color de la pantalla&rdquo; en Inicio.</li>
          <li>Mac: Ajustes del Sistema → Pantallas → Perfil de color → Personalizar → Calibrar.</li>
        </ul>
      </Section>

      <Section wide id="more-heading" title="Prueba de monitor para píxeles muertos, Hz y otros fallos">
        <Table
          caption="Qué prueba hacer a continuación"
          head={['Si quieres revisar', 'Haz']}
          rows={[
            ['Píxeles muertos o atascados (test LCD)', <Link key="dp" href="/dead-pixel-test" className={link}>Prueba de píxeles muertos</Link>],
            ['Frecuencia de actualización (Hz)', <Link key="hz" href="/screen-refresh-rate-test" className={link}>Prueba de frecuencia de actualización</Link>],
            ['Tiempo de respuesta y estelas', <Link key="gh" href="/monitor-ghosting-test" className={link}>Prueba de ghosting del monitor</Link>],
            ['Fugas de luz y uniformidad del negro', <Link key="un" href="/screen-uniformity-test" className={link}>Prueba de uniformidad</Link>],
            ['Imágenes fantasma que se quedan en pantalla', <Link key="bi" href="/screen-burn-in-test" className={link}>Prueba de quemado de pantalla</Link>],
            ['Tu resolución de pantalla', <Link key="rs" href="/screen-resolution-test" className={link}>¿Cuál es mi resolución de pantalla?</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
