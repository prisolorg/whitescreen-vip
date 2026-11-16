import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla Rosa (español). Búsquedas en español: pantalla rosa / luz rosa para selfies y TikTok → tonos de rosa
 * (rosa chicle, rosa fuerte) → fondo y fondo de pantalla rosa.
 * Los ajustes se llaman como en la interfaz española: Mantener la pantalla encendida, Brillo, Cálido, Neutro, Frío, Descargar.
 */
export function PinkScreenGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Luz de pantalla rosa para selfies, fotos y TikTok">
        <p className={p}>
          Una pantalla rosa es una luz rosa fácil y favorecedora: suaviza la piel y añade un brillo cálido sin necesidad de un LED rosa ni otro
          equipo. Toca dos veces la vista previa para la pantalla completa y activa Mantener la pantalla encendida. Para una luz neutra y fiel,
          usa la <Link href="/" className={link}>pantalla blanca</Link>.
        </p>
        <Table
          caption="Formas de usar la pantalla rosa como luz"
          head={['Uso', 'Ajustes', 'Consejo']}
          rows={[
            ['Selfies y fotos', 'Brillo 100 %', 'Sujeta un segundo móvil o tableta justo a un lado de tu cara'],
            ['FaceTime y videollamadas', 'Brillo 70–100 %', 'Coloca la pantalla detrás de la cámara, mirando hacia ti'],
            ['Vídeos de TikTok y playback', 'Brillo 100 %, Cálido', 'Apaga las luces de la habitación para que la luz rosa destaque'],
            ['Iluminación ambiental', 'Brillo 40–70 %', 'Apunta la pantalla a una pared para repartir el brillo'],
          ]}
        />
      </Section>

      <Section wide id="shade-heading" title="Colores de pantalla rosa: rosa fuerte, rosa brillante y tonos más intensos">
        <p className={p}>
          Esta pantalla rosa fuerte muestra #FF69B4 (RGB 255, 105, 180), un rosa brillante con un toque de azul. Cambia el tono con los
          controles que hay debajo de la vista previa.
        </p>
        <Table
          caption="Tonos de rosa y cómo conseguirlos"
          head={['Tono', 'Cómo conseguirlo', 'Aspecto']}
          rows={[
            ['Rosa fuerte / rosa brillante', 'Neutro, Brillo 100 %', 'Vivo y divertido (#FF69B4)'],
            ['Rosa coral', 'Cálido', 'Un rosa más cálido, tirando a melocotón (#FF4F64)'],
            ['Rosa palo intenso', 'Frío', 'Más frío, algo más magenta (#DD5FB4)'],
            ['Rosa oscuro', 'Brillo 50–70 %', 'Un rosa más profundo y apagado (#80355A–#B34A7E)'],
            ['Rosa claro / rosa bebé', <Link key="lp" href="/backgrounds/light-pink-background" className={link}>Fondo rosa claro</Link>, 'Suave y pálido (#FFB6C1)'],
          ]}
        />
        <p className={p}>
          ¿Quieres un rosa neón más intenso? Prueba la <Link href="/magenta-screen" className={link}>pantalla magenta</Link>.
        </p>
      </Section>

      <Section wide id="background-heading" title="Fondo y fondo de pantalla rosa">
        <p className={p}>
          ¿Necesitas un fondo rosa fuerte como archivo? Usa Descargar debajo de la vista previa. Tu brillo y tu calidez se aplican a la imagen.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Portátil y escritorio:</strong> 1080p, 1440p, 4K u 8K.
          </li>
          <li>
            <strong className="text-foreground">Fondo del móvil:</strong> iPhone (1179×2556) o Android (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Cualquier otro:</strong> un ancho y alto personalizados, como 1080×1920 para TikTok y Reels.
          </li>
        </ul>
        <p className={p}>
          ¿Lo prefieres más suave? Usa el <Link href="/backgrounds/light-pink-background" className={link}>fondo rosa claro</Link> (#FFB6C1), o
          mira la colección de <Link href="/backgrounds/pink-background" className={link}>fondos rosas</Link>.
        </p>
      </Section>
    </div>
  )
}
