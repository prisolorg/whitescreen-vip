import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Aro de Luz Online (español). Búsquedas en español: aro de luz online / aro de luz virtual / ring light →
 * efecto aro de luz para selfies → aro de luz para maquillaje → colores.
 * Los ajustes se llaman como en la interfaz española: Brillo, Blanco, Rosa, Azul, Morado, Más, Rellenar el centro.
 */
export function RingLightGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Aro de luz online: cómo usarlo">
        <p className={p}>
          Este aro de luz online dibuja un anillo luminoso en tu pantalla, así que un móvil, una tableta o un segundo monitor se convierte en un
          aro de luz virtual. Colócalo delante de ti, justo detrás de la cámara.
        </p>
        <ul className={ul}>
          <li>Ajusta el Brillo y elige un color: Blanco, Rosa, Azul o Morado.</li>
          <li>Abre Más para cambiar el tamaño y el grosor del aro, la temperatura de color del blanco, Rellenar el centro y el fondo.</li>
          <li>Toca dos veces la pantalla o pulsa F para que el aro ocupe toda la pantalla.</li>
        </ul>
      </Section>

      <Section wide id="effect-heading" title="Efecto aro de luz para selfies, fotos y vídeo">
        <p className={p}>
          El efecto aro de luz es ese reflejo redondo que ves en los ojos de la gente, junto con una luz suave y uniforme con pocas sombras.
          Para conseguirlo:
        </p>
        <ul className={ul}>
          <li>Sujeta la pantalla justo delante de tu cara, con la cámara en el centro del aro.</li>
          <li>Deja Rellenar el centro desactivado para que la forma del aro se refleje en tus ojos.</li>
          <li>Usa un aro más grande y grueso para selfies más luminosos.</li>
        </ul>
      </Section>

      <Section wide id="makeup-heading" title="Aro de luz para maquillaje y espejos">
        <p className={p}>
          La luz blanca al máximo brillo muestra los colores reales, lo que la convierte en una luz práctica para maquillarse. Apoya la pantalla
          junto al espejo a la altura de los ojos para que tu cara quede iluminada de frente y de forma uniforme. Ilumina tu cara; no muestra un
          espejo con la cámara.
        </p>
      </Section>

      <Section wide id="colors-heading" title="Colores del aro de luz: blanco, rosa, azul y morado">
        <Table
          caption="Colores del aro de luz y cuándo usarlos"
          head={['Color', 'Ideal para']}
          rows={[
            ['Blanco', 'Maquillaje, videollamadas y fotos de aspecto natural; ajusta la calidez en Más'],
            ['Rosa', 'Selfies suaves y favorecedores'],
            ['Azul', 'Fotos y directos fríos y con ambiente'],
            ['Morado', 'Fiestas e iluminación creativa'],
          ]}
        />
        <p className={p}>
          ¿Necesitas una luz plana en lugar de un aro? Prueba la <Link href="/zoom-lighting" className={link}>luz para videollamadas</Link> o la
          sencilla <Link href="/" className={link}>pantalla blanca</Link>.
        </p>
      </Section>
    </div>
  )
}
