import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla Azul (español). Búsquedas en español: pantalla azul / luz azul → tonos de azul (marino, claro) →
 * croma azul → test de gafas de luz azul y subpíxeles.
 * Los ajustes se llaman como en la interfaz española: Mantener la pantalla encendida, Brillo, Neutro, Descargar.
 */
export function BlueScreenGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Luz de pantalla azul: usa tu pantalla como iluminación azul">
        <p className={p}>
          Una pantalla azul completa convierte cualquier monitor, portátil o móvil en una suave luz azul. Toca dos veces la vista previa para la
          pantalla completa, activa Mantener la pantalla encendida y ajusta el brillo que necesites.
        </p>
        <Table
          caption="Formas de usar la pantalla azul como luz"
          head={['Uso', 'Ajustes', 'Consejo']}
          rows={[
            ['Brillo de fondo para directos y vídeos', 'Brillo 70–100 %', 'Coloca una segunda pantalla detrás de ti, fuera de plano'],
            ['Luz de acento para fotos y vídeo', 'Brillo 100 %', 'Ilumina desde un lado para un contorno frío en lo que grabas'],
            ['Ambiente y luz de fiesta', 'Brillo 40–70 %', 'Orienta la pantalla hacia una pared para repartir la luz azul'],
            ['Destello azul intenso', 'Brillo 100 %, pantalla completa', 'Los móviles dan la luz más fuerte al brillo máximo'],
          ]}
        />
        <h3 className={h3}>La luz azul de las pantallas y el sueño</h3>
        <p className={p}>
          La luz azul intensa por la noche puede dificultar conciliar el sueño. Usa la iluminación azul de día o para tomas creativas, y por la
          noche cambia a la pantalla <Link href="/red-screen" className={link}>roja</Link> o{' '}
          <Link href="/orange-screen" className={link}>naranja</Link> con poco brillo.
        </p>
      </Section>

      <Section wide id="shade-heading" title="Colores de pantalla azul: brillante, oscuro, marino y azul claro">
        <p className={p}>
          Esta página muestra azul puro, #0000FF (RGB 0, 0, 255). Usa el control de Brillo para oscurecerlo, con la calidez en Neutro.
        </p>
        <Table
          caption="Tonos de azul y cómo conseguirlos"
          head={['Tono', 'Hex', 'Cómo conseguirlo']}
          rows={[
            ['Azul brillante', '#0000FF', 'Brillo 100 %'],
            ['Azul oscuro', '#0000B3', 'Brillo 70 %'],
            ['Azul marino', '#000080', 'Brillo 50 %'],
            ['Azul claro', '#00FFFF', <Link key="c" href="/cyan-screen" className={link}>Abre la pantalla cian</Link>],
          ]}
        />
        <p className={p}>
          ¿Necesitas un archivo? Descargar guarda un PNG azul de 1080p a 8K, o en tamaños de móvil y personalizados. Hay más opciones en la
          colección de <Link href="/backgrounds/blue-background" className={link}>fondos azules</Link>.
        </p>
      </Section>

      <Section wide id="chroma-heading" title="Pantalla azul para croma, fotografía y edición">
        <p className={p}>Una pantalla azul funciona como una pantalla verde, y en algunos casos es mejor opción:</p>
        <ul className={ul}>
          <li>Lo que grabas lleva ropa verde o sujeta objetos verdes.</li>
          <li>Quieres que el reflejo de color se note menos. El reflejo azul es más fácil de disimular, aunque el azul necesita más luz para un croma limpio.</li>
        </ul>
        <p className={p}>
          Para productos pequeños y primeros planos, abre esta página en un portátil, monitor o móvil, pon el Brillo en torno al 70 % y deja lo
          que grabas a 20–30 cm delante de la pantalla. Para editar, descarga un PNG azul y haz el croma con las mismas herramientas que usarías
          para el verde: Chroma Key de OBS, Clave de croma de CapCut, Ultra Key de Premiere o 3D Keyer de DaVinci Resolve. Consulta{' '}
          <Link href="/glossary/chroma-key" className={link}>chroma key</Link> para ver cómo funciona el croma.
        </p>
      </Section>

      <Section wide id="test-heading" title="Test de pantalla azul: gafas de luz azul y subpíxeles">
        <p className={p}>
          ¿Quieres un test rápido de luz azul para tus gafas? Mira esta página con el brillo al máximo con y sin ellas. Las lentes muy tintadas
          hacen que el azul se vea bastante más oscuro; las lentes transparentes que bloquean poco azul apenas cambian nada. Prueba lo mismo con
          la <Link href="/" className={link}>pantalla blanca</Link> para ver cuánto tiñen las lentes. Es una comprobación visual rápida, no una
          medición de laboratorio.
        </p>
        <p className={p}>
          El azul puro también enciende solo los subpíxeles azules. Un punto negro es un subpíxel azul muerto, mientras que un punto magenta o
          cian indica un subpíxel rojo o verde atascado encendido. Para una revisión completa, haz la{' '}
          <Link href="/dead-pixel-test" className={link}>prueba de píxeles muertos</Link>.
        </p>
      </Section>
    </div>
  )
}
