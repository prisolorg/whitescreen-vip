import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba de Quemado de Pantalla (español). Búsquedas en español: pantalla quemada / test de quemado / burn-in →
 * quemado o retención de imagen → ¿se puede arreglar? → móvil, LCD y monitor.
 * Los botones se llaman como en la interfaz española: Revisar quemado, Gris 50 %, Gris 20 %, Más, Reparador de quemado,
 * Iniciar reparador, Barrido blanco, Ciclo de colores, Ruido de color.
 */
export function ScreenBurnInGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Prueba de quemado de pantalla: cómo revisar tu pantalla">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Elige Revisar quemado y toca dos veces para la pantalla completa. Sube el brillo.</li>
          <li>Empieza con Gris 50 %, el fondo en el que el quemado se ve más claro, y luego prueba Gris 20 %.</li>
          <li>
            Pasa a blanco, rojo, verde, azul y negro (una <Link href="/" className={link}>pantalla blanca</Link> completa también ayuda). O activa
            el cambio automático en Más para cambiar de fondo cada 4 segundos.
          </li>
          <li>Busca formas tenues que no deberían estar: una barra de tareas, un teclado, iconos de apps, un reloj o el logo de un canal.</li>
        </ol>
        <p className={p}>
          La prueba de quemado de pantalla es más fácil si sabes dónde mirar: el quemado suele coincidir con lo que más tiempo permanece en
          pantalla.
        </p>
      </Section>

      <Section wide id="results-heading" title="Resultados de la prueba de quemado de pantalla: ¿quemado o retención de imagen?">
        <p className={p}>
          ¿Qué es una pantalla quemada? Una imagen marcada en la pantalla tras mostrar la misma imagen durante mucho tiempo. La prueba de quemado
          de pantalla muestra los dos tipos, y el tiempo los distingue:
        </p>
        <Table
          caption="Quemado frente a retención de imagen"
          head={['', 'Retención de imagen', 'Quemado']}
          rows={[
            ['Qué es', 'Una imagen fantasma que se queda un rato', 'Píxeles desgastados de forma desigual, para siempre'],
            ['Cuánto dura', 'Desaparece en minutos u horas', 'No desaparece'],
            ['Habitual en', 'Monitores LCD, televisores, portátiles', 'Móviles, televisores y monitores OLED y AMOLED'],
            ['¿Ayuda el reparador?', 'A menudo, sí', 'No; solo puede hacerlo menos visible'],
          ]}
        />
        <p className={p}>
          Más información en las guías sobre el <Link href="/screen-problems/screen-burn-in" className={link}>quemado de pantalla</Link> y la{' '}
          <Link href="/screen-problems/image-retention" className={link}>retención de imagen</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Reparador de la prueba de quemado de pantalla: ¿se puede arreglar?">
        <p className={p}>
          Elige Reparador de quemado, pulsa Iniciar reparador y deja la pantalla en marcha. En Más puedes elegir el patrón y su duración, de 1 a
          60 minutos (10 por defecto):
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Barrido blanco:</strong> una barra blanca en movimiento, sin parpadeos.</li>
          <li><strong className="text-foreground">Ciclo de colores:</strong> colores a pantalla completa que cambian rápidamente.</li>
          <li><strong className="text-foreground">Ruido de color:</strong> píxeles de colores aleatorios.</li>
        </ul>
        <p className={p}>
          Ciclo de colores y Ruido de color parpadean; usa Barrido blanco si te molestan las luces parpadeantes. Después, vuelve a hacer la
          prueba de quemado de pantalla. Si la imagen sigue ahí tras varias pasadas, probablemente sea un quemado permanente. Para evitarlo, baja
          el brillo, oculta las barras fijas y usa un tiempo de apagado de pantalla.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Prueba de quemado de pantalla en el móvil, una LCD o un monitor">
        <ul className={ul}>
          <li>
            Móvil e iPhone: el quemado en el móvil aparece como el contorno del teclado o de la barra de estado. Abre la prueba de quemado de
            pantalla en el navegador y revisa los fondos grises con el brillo al máximo.
          </li>
          <li>Monitores LCD y portátiles: el quemado real en LCD es raro; una prueba en una LCD suele encontrar retención de imagen que el reparador puede borrar.</li>
          <li>
            Las pantallas OLED y AMOLED se desgastan más rápido. Para ellas, usa la{' '}
            <Link href="/oled-burn-in-test" className={link}>prueba de quemado OLED</Link>.
          </li>
        </ul>
        <p className={p}>
          ¿Ves puntos en lugar de formas? Prueba la <Link href="/dead-pixel-test" className={link}>prueba de píxeles muertos</Link>, o la{' '}
          <Link href="/screen-uniformity-test" className={link}>prueba de uniformidad</Link> para manchas y brillo desigual.
        </p>
      </Section>
    </div>
  )
}
