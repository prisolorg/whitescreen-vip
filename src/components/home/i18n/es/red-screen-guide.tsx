import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla Roja (español). Búsquedas en español: pantalla roja / luz roja para dormir → fotos y reels con luz roja →
 * tonos de rojo → test de subpíxeles rojos.
 * Los ajustes se llaman como en la interfaz española: Brillo, Neutro, Mantener la pantalla encendida, Descargar.
 */
export function RedScreenGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="night-heading" title="Luz de pantalla roja para la noche y para dormir">
        <p className={p}>
          La luz roja tenue es la que menos afecta a la visión nocturna. Las células de tus ojos para poca luz apenas reaccionan al rojo
          intenso, por eso la usan astrónomos y pilotos. Baja el control de Brillo, toca dos veces para la pantalla completa y activa Mantener
          la pantalla encendida.
        </p>
        <Table
          caption="Ajustes recomendados para usar la pantalla roja de noche"
          head={['Uso', 'Brillo', 'Consejo']}
          rows={[
            ['Luz nocturna', '20–40 %', 'Orienta la pantalla hacia una pared para un brillo suave'],
            ['Leer notas a oscuras', '30–50 %', 'Sujeta el móvil cerca y por debajo de la altura de los ojos'],
            ['Observar las estrellas', 'Lo más bajo posible', 'Mantiene tus ojos adaptados al cielo oscuro'],
            ['Luz roja intensa', '100 %', 'Para señales, efectos y fotos, no para relajarte'],
          ]}
        />
        <h3 className={h3}>¿Es buena una pantalla roja para dormir?</h3>
        <p className={p}>
          Una luz roja tenue es más suave antes de dormir que una <Link href="/" className={link}>pantalla blanca</Link> brillante o una azul,
          porque no tiene luz azul. Sigue siendo una luz, así que mantenla baja y apágala cuando vayas a dormir. Una pantalla no es un aparato de
          terapia de luz roja: esos usan longitudes de onda concretas y mucha más potencia.
        </p>
      </Section>

      <Section wide id="photo-heading" title="Pantalla roja para fotos, reels y selfies">
        <p className={p}>Una pantalla roja da a tus selfies y reels un brillo rojo con ambiente usando solo un móvil o un portátil.</p>
        <ul className={ul}>
          <li>Apaga las luces de la habitación para que la luz roja sea la única que te ilumine la cara.</li>
          <li>Abre esta pantalla roja en un segundo móvil, tableta o portátil, pon el Brillo al 100 % y ponla a pantalla completa.</li>
          <li>Sujeta la pantalla a 20–40 cm de tu cara, un poco de lado, para dar sombras y profundidad.</li>
          <li>Baja el brillo o aleja la pantalla si la piel se ve quemada.</li>
        </ul>
        <p className={p}>Funciona igual en iPhone, Android y portátiles. Cuanto más grande es la pantalla, más suave es la luz.</p>
      </Section>

      <Section wide id="shade-heading" title="Colores de pantalla roja: rojo brillante, oscuro y claro">
        <p className={p}>
          Esta página muestra rojo puro, #FF0000 (RGB 255, 0, 0): una pantalla roja lisa sin nada más. Usa el control de Brillo para oscurecerla,
          con la calidez en Neutro.
        </p>
        <Table
          caption="Tonos de rojo y cómo conseguirlos"
          head={['Tono', 'Hex', 'Cómo conseguirlo']}
          rows={[
            ['Rojo brillante', '#FF0000', 'Brillo 100 %'],
            ['Rojo oscuro', '#B30000', 'Brillo 70 %'],
            ['Rojo intenso / granate', '#800000', 'Brillo 50 %'],
            ['Rojo claro / rosa', '#FF69B4', <Link key="p" href="/pink-screen" className={link}>Abre la pantalla rosa</Link>],
          ]}
        />
        <p className={p}>
          ¿Necesitas un archivo? Descargar guarda un PNG rojo de 1080p a 8K, o en tamaños de móvil y personalizados. Hay más tonos en la
          colección de <Link href="/backgrounds/red-background" className={link}>fondos rojos</Link>.
        </p>
      </Section>

      <Section wide id="test-heading" title="Test de pantalla roja: subpíxeles rojos y precisión del color">
        <p className={p}>
          El rojo puro enciende solo los subpíxeles rojos. Un punto oscuro es un subpíxel rojo muerto, mientras que un punto amarillo o magenta
          indica un subpíxel verde o azul atascado encendido. El rojo es también donde los monitores más baratos suelen verse anaranjados o
          rosados; compáralo con otro dispositivo, o haz la <Link href="/screen-color-test" className={link}>prueba de color de pantalla</Link> y
          la <Link href="/dead-pixel-test" className={link}>prueba de píxeles muertos</Link>.
        </p>
      </Section>
    </div>
  )
}
