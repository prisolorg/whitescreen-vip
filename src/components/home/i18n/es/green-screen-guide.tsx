import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla Verde (español). Búsquedas en español: pantalla verde / color de pantalla verde / croma →
 * pantalla verde en el ordenador → para YouTube y edición (chroma key) → test de subpíxeles.
 * Los ajustes se llaman como en la interfaz española: Brillo, Neutro, Mantener la pantalla encendida, Descargar.
 */
export function GreenScreenGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="color-heading" title="Color de pantalla verde: ¿qué verde funciona mejor?">
        <p className={p}>
          Esta página muestra verde puro, #00FF00 (RGB 0, 255, 0). El software de croma elimina cualquier verde uniforme y saturado, pero un
          verde muy brillante puede reflejarse en lo que grabas. Usa el control de Brillo para conseguir el tono que necesitas y deja la
          calidez en Neutro.
        </p>
        <Table
          caption="Colores de pantalla verde y cómo conseguirlos en esta página"
          head={['Tono', 'Hex', 'Cómo conseguirlo', 'Ideal para']}
          rows={[
            ['Verde brillante', '#00FF00', 'Brillo 100 %', 'Pruebas de píxeles, el fondo más vivo'],
            ['Verde croma', '#00B300 (cercano al estándar #00B140)', 'Brillo 70 %', 'Croma en vídeo con menos reflejo de color'],
            ['Verde oscuro', '#008000', 'Brillo 50 %', 'Un fondo más suave en habitaciones con poca luz'],
          ]}
        />
        <p className={p}>
          ¿Buscas verde claro o tonos pastel? Mira la colección de <Link href="/backgrounds/green-background" className={link}>fondos verdes</Link>.
        </p>
      </Section>

      <Section wide id="computer-heading" title="Pantalla verde en el ordenador: portátil, monitor o móvil">
        <p className={p}>
          Una pantalla verde en el ordenador es un fondo rápido para tomas pequeñas: productos, manos, juguetes y primeros planos.
        </p>
        <ul className={ul}>
          <li>Abre esta página en un monitor, portátil, tableta o móvil y toca dos veces para la pantalla completa.</li>
          <li>Activa Mantener la pantalla encendida para que el verde no se apague en mitad de la toma.</li>
          <li>Pon el Brillo en torno al 70 % para un verde uniforme sin puntos calientes.</li>
          <li>Deja lo que grabas a 20–30 cm delante de la pantalla para que la luz verde no se refleje en ello.</li>
          <li>Graba de frente. Los ángulos de visión pueden hacer que la pantalla se vea más oscura en los bordes.</li>
        </ul>
        <p className={p}>
          Una pantalla es demasiado pequeña para ponerla detrás de una persona. Para planos de cuerpo entero o de cámara frontal, cuelga una tela
          verde detrás de ti o añade un fondo verde en tu editor.
        </p>
      </Section>

      <Section wide id="video-heading" title="Pantalla verde para YouTube, vídeo y edición">
        <p className={p}>
          ¿Necesitas una pantalla verde online para tu edición y no en una pantalla física? Usa Descargar debajo de la vista previa para guardar
          un PNG verde en 1080p, 4K, tamaño de móvil o cualquier tamaño personalizado, y arrástralo a tu línea de tiempo.
        </p>
        <Table
          caption="Dónde quitar una pantalla verde"
          head={['Software', 'Herramienta']}
          rows={[
            ['OBS Studio', 'Filtro Chroma Key en la fuente de la cámara'],
            ['CapCut', 'Quitar fondo → Clave de croma'],
            ['Premiere Pro', 'Efecto Ultra Key'],
            ['DaVinci Resolve', '3D Keyer o Delta Keyer'],
          ]}
        />
        <h3 className={h3}>Fondos de pantalla verde para Zoom y Teams</h3>
        <p className={p}>
          Zoom y Teams ofrecen un efecto de pantalla verde virtual, pero una tela verde real detrás de ti da bordes más limpios. Para imágenes
          listas para croma, mira la colección de <Link href="/backgrounds/green-screen-background" className={link}>fondos de pantalla verde</Link>.{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma key</Link> explica cómo funciona el croma.
        </p>
      </Section>

      <Section wide id="check-heading" title="Test de pantalla verde: subpíxeles y uniformidad">
        <p className={p}>
          El verde aporta la mayor parte del brillo que percibimos, así que las esquinas más oscuras o las manchas nubosas destacan sobre él. Un
          punto oscuro es un subpíxel verde muerto, mientras que un punto amarillo o cian indica un subpíxel rojo o azul atascado encendido. Haz
          la <Link href="/screen-uniformity-test" className={link}>prueba de uniformidad</Link> o lee la{' '}
          <Link href="/screen-problems/stuck-pixel" className={link}>guía del píxel atascado</Link> para los siguientes pasos. Un punto negro
          que también aparece en la <Link href="/" className={link}>pantalla blanca</Link> es un píxel completamente muerto.
        </p>
      </Section>
    </div>
  )
}
