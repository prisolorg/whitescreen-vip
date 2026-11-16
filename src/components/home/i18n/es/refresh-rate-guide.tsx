import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba de Frecuencia de Actualización (español). Búsquedas en español: test de Hz / frecuencia de actualización /
 * hercios del monitor → ajustes de pantalla → 60, 120 y 144 Hz → frecuencia frente a FPS.
 * Los botones se llaman como en la interfaz española: Medir de nuevo.
 */
export function RefreshRateGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Prueba de frecuencia de actualización: cómo funciona">
        <p className={p}>
          Los navegadores dibujan un fotograma nuevo en cada refresco de la pantalla, así que medir esos fotogramas revela tu frecuencia de
          actualización. Este test de Hz empieza solo y muestra:
        </p>
        <ul className={ul}>
          <li>Tu frecuencia de actualización en Hz, redondeada a la frecuencia común más cercana (60, 120, 144 Hz, etc.).</li>
          <li>Cuánto tarda cada fotograma en milisegundos y el porcentaje de fotogramas tardíos.</li>
          <li>Las frecuencias más baja y más alta detectadas, y un bloque en movimiento que se ve más fluido con más Hz.</li>
        </ul>
        <p className={p}>
          Sirve para comprobar los hercios de monitores, portátiles y móviles. Pulsa Medir de nuevo después de cambiar un ajuste y toca dos
          veces para verla a pantalla completa en la pantalla que quieres probar.
        </p>
      </Section>

      <Section wide id="check-heading" title="Prueba de frecuencia de actualización frente a los ajustes de pantalla">
        <p className={p}>La prueba muestra a qué frecuencia funciona tu pantalla ahora mismo. Para ver o cambiar la frecuencia del monitor:</p>
        <Table
          caption="Dónde está el ajuste de frecuencia de actualización"
          head={['Dispositivo', 'Dónde mirar']}
          rows={[
            ['Windows 11 / 10', 'Configuración → Sistema → Pantalla → Pantalla avanzada → Elegir una frecuencia de actualización'],
            ['Mac', 'Ajustes del Sistema → Pantallas → Frecuencia de actualización'],
            ['iPhone / iPad', 'Depende del modelo; los modelos ProMotion suben hasta 120 Hz automáticamente'],
            ['Android', 'Ajustes → Pantalla → Frecuencia de actualización de pantalla (o Fluidez de movimientos)'],
          ]}
        />
        <h3 className={h3}>Por qué el resultado puede ser menor de lo esperado</h3>
        <ul className={ul}>
          <li>La pantalla está a 60 Hz en los ajustes, o el cable o el puerto no admiten la frecuencia más alta.</li>
          <li>Un portátil con batería o un móvil en modo de ahorro de energía baja la frecuencia para ahorrar.</li>
          <li>Las pestañas o aplicaciones pesadas hacen que el navegador se salte fotogramas. Ciérralas y vuelve a medir.</li>
        </ul>
      </Section>

      <Section wide id="rates-heading" title="Resultados de la prueba de frecuencia de actualización: 60, 120 y 144 Hz">
        <Table
          caption="Frecuencias de actualización habituales"
          head={['Frecuencia', 'Tiempo por fotograma', 'Pantallas típicas']}
          rows={[
            ['60 Hz', '16,7 ms', 'La mayoría de monitores de oficina, portátiles antiguos y televisores'],
            ['90 Hz', '11,1 ms', 'Muchos móviles de gama media'],
            ['120 Hz', '8,3 ms', 'Móviles gaming, iPhone Pro, televisores y portátiles recientes'],
            ['144 Hz', '6,9 ms', 'Monitores gaming'],
            ['240 Hz', '4,2 ms', 'Monitores para esports'],
          ]}
        />
      </Section>

      <Section wide id="fps-heading" title="¿Prueba de frecuencia de actualización o prueba de FPS?">
        <p className={p}>
          La frecuencia de actualización (Hz) es cuántas veces se redibuja la pantalla; la tasa de fotogramas (FPS) es cuántos fotogramas
          produce tu navegador o juego. Para comprobar el movimiento y los FPS, haz la <Link href="/frame-rate-test" className={link}>prueba de FPS</Link>,
          y para el desenfoque y las estelas prueba la <Link href="/monitor-ghosting-test" className={link}>prueba de ghosting del monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
