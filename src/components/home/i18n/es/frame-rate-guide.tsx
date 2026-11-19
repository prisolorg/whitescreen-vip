import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba de FPS (español). Búsquedas en español: test de FPS / prueba de FPS / fotogramas por segundo →
 * qué aspecto tiene cada tasa → FPS frente a Hz → FPS en juegos.
 * Los controles se llaman como en la interfaz española: Tu pantalla, Velocidad, Pausa.
 */
export function FrameRateGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Prueba de FPS: compara tasas de fotogramas lado a lado">
        <p className={p}>
          Esta prueba de FPS, o test de fotogramas por segundo, mueve el mismo bloque por cinco carriles, cada uno a una tasa distinta, para que
          veas la diferencia con tus propios ojos:
        </p>
        <ul className={ul}>
          <li>Carriles a 15, 24, 30 y 60 FPS, cada uno moviéndose solo en sus fotogramas, como un vídeo a esa tasa.</li>
          <li>Un carril máximo que se mueve en cada fotograma que muestra tu pantalla, etiquetado con tus FPS reales.</li>
          <li>&ldquo;Tu pantalla&rdquo; indica los FPS más altos que pueden mostrar tu pantalla y tu navegador, medidos en directo.</li>
        </ul>
        <p className={p}>
          Usa Velocidad (de 120 a 1.800 px/s) para acelerar el movimiento, pulsa Pausa para congelarlo y toca dos veces para la pantalla
          completa. Haz esta prueba de FPS online en cualquier navegador, sin instalar nada.
        </p>
      </Section>

      <Section wide id="results-heading" title="Resultados de la prueba de FPS: cómo se ve cada tasa">
        <Table
          caption="Tasas de fotogramas habituales"
          head={['Tasa', 'Tiempo por fotograma', 'Dónde la ves']}
          rows={[
            ['15 FPS', '66,7 ms', 'A saltos; videollamadas lentas, webcams antiguas'],
            ['24 FPS', '41,7 ms', 'Películas y la mayoría de series en streaming'],
            ['30 FPS', '33,3 ms', 'TV, YouTube, juegos de consola'],
            ['60 FPS', '16,7 ms', 'Juegos fluidos y vídeos de deporte'],
            ['120+ FPS', '8,3 ms o menos', 'Monitores y móviles de alta frecuencia'],
          ]}
        />
        <p className={p}>Comprobación rápida: si el carril máximo no se ve más fluido que el de 60, tu pantalla probablemente funciona a 60 Hz.</p>
      </Section>

      <Section wide id="hz-heading" title="Prueba de FPS frente a prueba de frecuencia de actualización">
        <p className={p}>
          La tasa de fotogramas (FPS) es cuántos fotogramas se dibujan por segundo; la frecuencia de actualización (Hz) es cada cuánto puede tu
          monitor mostrar uno nuevo. Una pantalla no puede mostrar más FPS que sus Hz, así que en la prueba de FPS el carril máximo está
          limitado por tu frecuencia de actualización.
        </p>
        <p className={p}>
          Para comprobar la frecuencia exacta, con tiempos de fotograma y fotogramas tardíos, haz la{' '}
          <Link href="/screen-refresh-rate-test" className={link}>prueba de frecuencia de actualización</Link>. Para las estelas detrás de los
          objetos en movimiento, prueba la <Link href="/monitor-ghosting-test" className={link}>prueba de ghosting del monitor</Link>.
        </p>
      </Section>

      <Section wide id="games-heading" title="Prueba de FPS para juegos">
        <p className={p}>
          Las herramientas online miden el navegador, no tus juegos, y esta prueba de FPS no puede ver dentro de ellos. Para ver los FPS dentro
          del juego, usa una superposición:
        </p>
        <ul className={ul}>
          <li>Windows: pulsa Win + G y abre el widget Rendimiento de Xbox Game Bar.</li>
          <li>Steam: activa el contador de FPS en los ajustes En la partida de Steam.</li>
          <li>NVIDIA o AMD: la superposición de rendimiento de la aplicación del controlador gráfico.</li>
        </ul>
      </Section>
    </div>
  )
}
