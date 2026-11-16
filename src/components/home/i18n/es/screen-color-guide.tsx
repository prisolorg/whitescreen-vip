import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba de Color de Pantalla (español). Búsquedas en español: test de colores / prueba de color de pantalla →
 * cómo hacerla → monitor, TV y móvil → límites (precisión y decoloración).
 * Los patrones se llaman como en la interfaz española: Barras de color, Rampas RGB, Espectro de tonos, Escalones de saturación,
 * Rojo, Verde, Azul, Cambio automático.
 */
export function ScreenColorGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Patrones de la prueba de color de pantalla y qué buscar">
        <p className={p}>
          Este test de colores tiene siete patrones a pantalla completa, y cada imagen de prueba de color revisa algo distinto:
        </p>
        <Table
          caption="Patrones de la prueba de color de pantalla"
          head={['Patrón', 'Qué revisa', 'Una buena pantalla muestra']}
          rows={[
            ['Barras de color', 'Reproducción básica del color', 'Ocho colores claros y separados, sin tinte'],
            ['Rampas RGB', 'Degradados y recorte', 'Degradados suaves desde el negro sin escalones; el extremo claro no se aplana antes de tiempo'],
            ['Espectro de tonos', 'Todos los tonos intermedios', 'Un arcoíris suave sin bandas ni saltos'],
            ['Escalones de saturación', 'Intensidad del color', 'Diez escalones del gris al rojo puro, todos distintos'],
            ['Rojo, Verde, Azul', 'Cada color de subpíxel por separado', 'Un color uniforme de borde a borde, sin puntos oscuros'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Cómo hacer la prueba de color de pantalla">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Desactiva el modo nocturno, los filtros de luz azul y el brillo automático, para que el color de la pantalla no se altere.</li>
          <li>Toca dos veces la prueba de color de pantalla para la pantalla completa, de modo que solo se vea el color.</li>
          <li>Toca la pantalla, usa las flechas o elige un patrón por su nombre. Cambio automático los recorre por ti.</li>
          <li>Mira de frente y luego de lado: en algunos paneles, el color cambia según el ángulo.</li>
        </ol>
        <p className={p}>
          ¿Necesitas solo una pantalla de un color sólido? Abre la <Link href="/" className={link}>pantalla blanca</Link>, la{' '}
          <Link href="/red-screen" className={link}>pantalla roja</Link> o cualquier página de{' '}
          <Link href="/color-screens" className={link}>pantallas de color</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Prueba de color de pantalla en un monitor, una tele o el móvil">
        <ul className={ul}>
          <li>Monitor: usa las Rampas RGB como test de color del monitor y luego ajusta la temperatura de color o el modo de imagen en su menú.</li>
          <li>Tele: abre la prueba de color de pantalla en el navegador de la tele o envía una pestaña del portátil. Los modos Cine o Filmmaker suelen mostrar el color más fiel.</li>
          <li>Móvil: sube el brillo y compara los modos de color Natural e Intenso, si tu móvil los tiene.</li>
          <li>Los fondos Rojo, Verde y Azul sirven también como test RGB para subpíxeles atascados.</li>
        </ul>
      </Section>

      <Section wide id="accuracy-heading" title="Límites de la prueba de color de pantalla: precisión y decoloración">
        <p className={p}>
          Una prueba de color de pantalla es una revisión a ojo: encuentra tintes, bandas y colores muertos, pero la precisión de color real
          necesita un colorímetro de hardware; ninguna web puede medirla. ¿Eliges colores de texto para una web? Usa el{' '}
          <Link href="/contrast-checker" className={link}>comprobador de contraste de color</Link>.
        </p>
        <Table
          caption="Qué puede significar un problema de color"
          head={['Lo que ves', 'Prueba']}
          rows={[
            ['Tinte amarillo o azul en toda la pantalla', <Link key="y" href="/screen-problems/yellow-tint-on-screen" className={link}>Guía del tinte amarillo</Link>],
            ['Escalones o bandas en las rampas', <Link key="b" href="/screen-problems/color-banding" className={link}>Guía de las bandas de color</Link>],
            ['Manchas o zonas desiguales (decoloración de la pantalla)', <Link key="u" href="/screen-uniformity-test" className={link}>Prueba de uniformidad</Link>],
            ['Logos desvaídos o imágenes fantasma', <Link key="bi" href="/screen-burn-in-test" className={link}>Prueba de quemado de pantalla</Link>],
            ['Nitidez, gamma y más (revisión completa)', <Link key="m" href="/monitor-test" className={link}>Prueba de monitor</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
