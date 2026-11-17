import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla Negra (español). Búsquedas en español: pantalla negra / pantalla negra completa → imagen negra (PNG) y vídeo →
 * negro puro (#000000) → pantalla en blanco para ocultar → segundo monitor → test de fugas de luz.
 * Los botones se llaman como en la interfaz española: Mantener la pantalla encendida, Descargar.
 */
export function BlackScreenGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="howto-heading" title="Cómo poner una pantalla negra a pantalla completa">
        <ul className={ul}>
          <li>Toca dos veces la vista previa o pulsa F para una pantalla negra lisa, de borde a borde.</li>
          <li>En el móvil, toca el icono de pantalla completa en la esquina de la vista previa.</li>
          <li>Activa Mantener la pantalla encendida para que la pantalla no se atenúe ni entre en reposo.</li>
          <li>Pulsa Esc o vuelve a tocar dos veces para salir. El cursor se oculta solo mientras no te muevas.</li>
        </ul>
      </Section>

      <Section wide id="image-heading" title="Imagen de pantalla negra: descarga una foto negra o un PNG">
        <p className={p}>
          ¿Necesitas una imagen de pantalla negra en lugar de una pantalla en vivo? Usa Descargar debajo de la vista previa para guardar un PNG
          negro puro (#000000) del tamaño exacto que necesitas. Es un archivo sin pérdida, así que el negro se mantiene sólido, sin ruido de
          compresión.
        </p>
        <Table
          caption="Tamaños de imagen de pantalla negra que puedes descargar"
          head={['Tamaño', 'Píxeles', 'Ideal para']}
          rows={[
            ['1080p', '1920 × 1080', 'Vídeos de YouTube, diapositivas, la mayoría de monitores'],
            ['2K', '2560 × 1440', 'Monitores gaming y portátiles'],
            ['4K', '3840 × 2160', 'Líneas de tiempo de vídeo 4K y televisores'],
            ['Teléfono', '1080 × 2400', 'Fondo del móvil, pantalla de inicio y de bloqueo'],
            ['Personalizado', 'Cualquier tamaño, p. ej. 1080 × 1920', 'Vídeo vertical para Stories, Reels y Shorts'],
          ]}
        />
        <h3 className={h3}>Vídeo de pantalla negra y edición</h3>
        <p className={p}>
          Arrastra el PNG de 1080p o 4K a cualquier editor de vídeo y estíralo hasta la duración que necesites. Sirve como fotograma negro
          para intros, fundidos y huecos entre clips, y te ahorra renderizar un clip aparte.
        </p>
        <p className={p}>
          ¿Quieres negros más profundos o con textura? Mira la colección de{' '}
          <Link href="/backgrounds/black-background" className={link}>
            fondos negros
          </Link>
          .
        </p>
      </Section>

      <Section wide id="pure-heading" title="Pantalla negra total: negro puro (#000000)">
        <p className={p}>
          Esta página muestra negro puro, RGB 0, 0, 0, el valor más oscuro que se le puede pedir a una pantalla. Lo negro que se vea de verdad
          depende de tu panel.
        </p>
        <Table
          caption="Cómo se ve una pantalla negra pura en cada tipo de pantalla"
          head={['Pantalla', 'Lo que ves', 'Por qué']}
          rows={[
            ['OLED / AMOLED', 'Negro total, sin brillo', 'Cada píxel genera su propia luz y se apaga en negro'],
            ['Mini-LED', 'Negro muy profundo', 'Las zonas de atenuación local bajan la retroiluminación'],
            ['LCD (IPS, VA, TN)', 'Gris muy oscuro en una habitación oscura', 'La retroiluminación sigue encendida detrás del panel'],
          ]}
        />
        <p className={p}>
          ¿No sabes cuál tienes? <Link href="/glossary/oled-vs-lcd" className={link}>OLED frente a LCD</Link> explica la diferencia.
        </p>
      </Section>

      <Section wide id="blank-heading" title="Pantalla negra como pantalla en blanco: oculta lo que hay en pantalla">
        <p className={p}>
          Una pantalla negra vacía oculta todo lo que hay en tu pantalla sin apagarla, así que las aplicaciones, descargas y llamadas siguen
          funcionando.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Presentaciones y proyectores:</strong> deja la pantalla en negro entre diapositivas o mientras
            habla la gente.
          </li>
          <li>
            <strong className="text-foreground">Privacidad:</strong> tapa tu trabajo con un toque cuando te levantas.
          </li>
          <li>
            <strong className="text-foreground">Concentración:</strong> despeja un segundo monitor que te distrae.
          </li>
        </ul>
        <h3 className={h3}>Web de pantalla negra: una página negra en tu navegador</h3>
        <p className={p}>
          Guarda esta web de pantalla negra en marcadores para abrir una página negra siempre que la necesites. No se carga nada más, no hay
          registro y puedes arrastrar la ventana a cualquier monitor antes de ponerla a pantalla completa.
        </p>
      </Section>

      <Section wide id="dark-heading" title="Pantalla negra para un segundo monitor: oscuridad total">
        <p className={p}>
          ¿Ves una película o juegas en una pantalla? Pon una pantalla oscura en la otra para que deje de iluminar la habitación. Mueve esta
          ventana al segundo monitor, ponla a pantalla completa y activa Mantener la pantalla encendida.
        </p>
        <ul className={ul}>
          <li>Funciona como pantalla de oscurecimiento o salvapantallas negro sin cambiar tus ajustes de energía.</li>
          <li>En OLED, los píxeles negros están apagados, así que el negro puro no desgasta el panel como una imagen clara fija.</li>
          <li>En LCD, baja también el brillo del monitor para el resultado más oscuro.</li>
        </ul>
      </Section>

      <Section wide id="check-heading" title="Test de pantalla negra: fugas de luz, brillo y píxeles atascados">
        <p className={p}>
          En una habitación oscura, una pantalla negra completa hace que algunos fallos habituales sean fáciles de ver. Para píxeles muertos y
          polvo, revisa también la <Link href="/" className={link}>pantalla blanca</Link>:
        </p>
        <Table
          caption="Problemas de pantalla que revela una pantalla negra"
          head={['Lo que ves', 'Qué es', 'Más información']}
          rows={[
            ['Luz que se escapa por los bordes', 'Fuga de luz de retroiluminación', <Link key="b" href="/screen-problems/backlight-bleed" className={link}>Fugas de luz</Link>],
            ['Un brillo que cambia al moverte', 'IPS glow', <Link key="g" href="/screen-problems/ips-glow" className={link}>IPS glow</Link>],
            ['Un punto que sigue encendido', 'Píxel atascado o caliente', <Link key="d" href="/dead-pixel-test" className={link}>Prueba de píxeles muertos</Link>],
            ['Bandas o tintes cerca del negro', 'Uniformidad OLED', <Link key="o" href="/oled-gray-test" className={link}>Prueba gris para OLED</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
