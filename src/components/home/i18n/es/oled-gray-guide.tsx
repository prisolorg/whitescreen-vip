import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba Gris para OLED (español). Búsquedas en español: test OLED / prueba de gris OLED / escala de grises →
 * qué buscar (mura, bandas) → frente al test de quemado → pantalla gris.
 * Los controles se llaman como en la interfaz española: Rampa casi negra.
 */
export function OledGrayGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Prueba gris para OLED: cómo revisar los tonos casi negros">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Oscurece la habitación y pon la pantalla a un brillo de alrededor del 50 %.</li>
          <li>Toca dos veces para la pantalla completa, así la prueba cubre todo el panel OLED.</li>
          <li>Recorre los niveles de gris oscuro: 1 %, 2 %, 3 %, 5 %, 10 %, 15 % y 20 %. Toca la pantalla o usa las flechas.</li>
          <li>Termina con la Rampa casi negra, que muestra del 0 al 20 % de gris lado a lado en 12 escalones.</li>
        </ol>
        <p className={p}>
          Cada imagen de la prueba OLED debe verse plana y uniforme, y cada escalón de la rampa debe distinguirse apenas del siguiente. Esta
          prueba gris para OLED sirve como test de escala de grises en cualquier móvil, tele, portátil o monitor.
        </p>
      </Section>

      <Section wide id="results-heading" title="Resultados de la prueba gris para OLED: qué buscar">
        <Table
          caption="Fallos OLED habituales en tonos casi negros"
          head={['Lo que ves', 'Qué es', '¿Es habitual?']}
          rows={[
            ['Manchas irregulares o nubes sobre el gris oscuro', 'Mura (panel desigual)', 'Algo es normal al 1–5 %'],
            ['Bandas o tintes de color a lo largo de la rampa', 'Bandas cerca del negro', 'Depende del panel y del modo de imagen'],
            ['Los primeros escalones de la rampa se ven todos negros', 'Negros aplastados (black crush)', 'Revisa el brillo y el modo de imagen'],
            ['Un tono verde o magenta sobre el gris oscuro', 'Tinte cerca del negro', 'Depende del panel'],
          ]}
        />
        <p className={p}>
          Juzga desde tu distancia de visión normal. En una prueba gris para OLED, un mura tenue en el fondo del 1 % es habitual; importan más los
          problemas que ves en películas o juegos reales.
        </p>
      </Section>

      <Section wide id="burn-heading" title="Prueba gris para OLED frente a prueba de quemado">
        <p className={p}>
          Esta prueba OLED revisa los tonos oscuros, no el quemado. El quemado se ve mejor en fondos más claros, como el gris al 50 %, el rojo y el
          azul:
        </p>
        <ul className={ul}>
          <li>
            Para revisar el quemado en OLED, usa la <Link href="/oled-burn-in-test" className={link}>prueba de quemado OLED</Link>.
          </li>
          <li>
            Para revisar e intentar eliminar la retención de imagen en cualquier pantalla, usa la{' '}
            <Link href="/screen-burn-in-test" className={link}>prueba de quemado de pantalla</Link>.
          </li>
        </ul>
      </Section>

      <Section wide id="gray-heading" title="¿Prueba gris para OLED o pantalla gris lisa?">
        <p className={p}>
          ¿Necesitas una pantalla gris sólida en lugar de niveles de prueba? Abre la <Link href="/gray-screen" className={link}>pantalla gris</Link>,
          o la <Link href="/black-screen" className={link}>pantalla negra</Link> para ver el negro real del OLED. Para revisar a fondo el color, la
          nitidez y la gamma, haz la <Link href="/monitor-test" className={link}>prueba de monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
