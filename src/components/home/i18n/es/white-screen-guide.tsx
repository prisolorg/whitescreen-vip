import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla blanca (español, página de inicio). Búsquedas en español: pantalla blanca brillante → pantalla en blanco /
 * blanco puro → pantalla blanca como luz → fondo e imagen blanca → test de pantalla blanca.
 * Los ajustes se llaman como en la interfaz española: Brillo, Cálido, Neutro, Frío, Mantener la pantalla encendida, Descargar.
 */
export function WhiteScreenGuideEs() {
  return (
    <>
      <Section id="bright-heading" title="Pantalla blanca brillante: el blanco más intenso que puede mostrar tu pantalla">
        <p className={p}>
          La pantalla blanca brillante de arriba es blanco puro (#FFFFFF) al 100 %, el color más brillante que puede mostrar cualquier pantalla.
          Lo brillante que se vea en realidad depende del ajuste de brillo de tu dispositivo, porque una web no puede subir la retroiluminación
          del hardware por ti.
        </p>

        <h3 className={h3}>Cómo hacer que la pantalla blanca brille más</h3>
        <ul className={ul}>
          <li>Deja el control de Brillo debajo de la pantalla al 100 % y elige Neutro o Frío.</li>
          <li>Sube el brillo de tu dispositivo al máximo (tabla de abajo).</li>
          <li>Desactiva todo lo que tiña o atenúe el blanco: Luz nocturna, Night Shift, True Tone, modos de confort visual y de ahorro de batería.</li>
          <li>Toca dos veces la pantalla para la pantalla completa, así ninguna barra del navegador oscurece los bordes.</li>
        </ul>

        <Table
          caption="Dónde está el brillo máximo en cada dispositivo"
          head={['Dispositivo', 'Brillo máximo', 'Desactivar para un blanco puro']}
          rows={[
            ['Windows 10/11', 'Control de brillo de la Configuración rápida (Win + A)', 'Luz nocturna, ahorro de batería, brillo adaptable al contenido'],
            ['Mac', 'Teclas de brillo o Centro de control → Pantalla', 'Night Shift, True Tone, brillo automático'],
            ['iPhone / iPad', 'Control del Centro de control', 'Night Shift, True Tone, modo de bajo consumo'],
            ['Android', 'Control de los Ajustes rápidos', 'Brillo adaptable, confort visual / luz nocturna'],
            ['Smart TV', 'Modo de imagen Intenso o Estándar, retroiluminación al máximo', 'Modos de imagen eco / de ahorro de energía'],
          ]}
        />

        <h3 className={h3}>¿Es segura para los ojos una pantalla muy brillante?</h3>
        <p className={p}>
          Una pantalla blanca fija no parpadea ni destella, pero el brillo máximo en una habitación oscura puede resultar molesto. Baja el control
          o elige Cálido cuando solo necesites una luz suave, y aparta la vista un momento cada 20 minutos si la usas durante mucho tiempo.
        </p>
      </Section>

      <Section id="blank-heading" title="Pantalla blanca en blanco: una pantalla lisa de blanco puro, sin nada más">
        <p className={p}>
          Una pantalla en blanco es exactamente eso: una pantalla totalmente blanca sin texto, iconos ni cursor. Una pantalla blanca lisa como
          esta sirve como fondo limpio, como panel de luz o para despejar tu pantalla con un toque.
        </p>
        <ul className={ul}>
          <li>Toca dos veces la vista previa (o pulsa F) para una pantalla completamente blanca de borde a borde.</li>
          <li>El cursor se oculta tras un momento sin movimiento, así que nada interrumpe el blanco.</li>
          <li>Pulsa Esc o vuelve a tocar dos veces para salir de la pantalla completa.</li>
        </ul>

        <h3 className={h3}>Blanco puro frente a blanco cálido, suave o hueso</h3>
        <Table
          caption="Tonos de blanco que puedes conseguir con los botones Frío, Neutro y Cálido"
          head={['Tono', 'Cómo conseguirlo', 'Ideal para']}
          rows={[
            ['Blanco puro (#FFFFFF)', 'Neutro, Brillo 100 %', 'Pruebas, limpieza, la luz más brillante'],
            ['Blanco frío', 'Frío, Brillo 100 %', 'Aspecto nítido de luz de día, fotos de producto'],
            ['Blanco cálido', 'Cálido', 'Videollamadas, maquillaje, lectura por la noche'],
            ['Blanco suave / hueso', 'Cálido + Brillo 60–80 %', 'Luz de fondo suave en una habitación oscura'],
          ]}
        />
      </Section>

      <Section id="light-heading" title="Pantalla blanca como luz: usa tu pantalla como lámpara">
        <p className={p}>
          Tu pantalla es una fuente de luz suave y uniforme, y al brillo máximo da una luz blanca sorprendentemente intensa. Sube el control de
          Brillo y el brillo del dispositivo, elige una calidez y activa Mantener la pantalla encendida para que la luz no se apague en mitad de
          una llamada.
        </p>
        <Table
          caption="Ajustes recomendados para usar la pantalla blanca como luz"
          head={['Uso', 'Calidez', 'Consejo']}
          rows={[
            ['Videollamadas (Zoom, Teams, Meet)', 'Cálido o Neutro', 'Coloca la pantalla justo detrás de la webcam, un poco por encima de los ojos'],
            ['Maquillaje y selfies', 'Neutro', 'Ponte justo de frente a la pantalla para una luz uniforme y sin sombras'],
            ['Luz de lectura', 'Cálido', 'Baja el control al 60–80 % para reducir el deslumbramiento'],
            ['Fotos de producto', 'Frío', 'Usa un segundo dispositivo como luz de relleno desde un lado'],
            ['Linterna rápida', 'Neutro', 'Pantalla completa en el móvil con el brillo al máximo'],
          ]}
        />
        <h3 className={h3}>Usa el móvil o el portátil como linterna</h3>
        <p className={p}>
          Abre esta pantalla blanca en el móvil, sube el brillo al máximo y toca dos veces para la pantalla completa. Esta luz es más suave que
          el flash de la cámara, así que viene bien para buscar cosas en una habitación oscura sin despertar a nadie.
        </p>
        <p className={p}>
          ¿Quieres más control? Prueba el <Link href="/ring-light" className={link}>aro de luz online</Link> para un reflejo circular en los
          ojos o la <Link href="/zoom-lighting" className={link}>luz para videollamadas</Link> para una temperatura de color exacta.
        </p>
      </Section>

      <Section id="background-heading" title="Fondo de pantalla blanca e imágenes para descargar">
        <p className={p}>
          ¿Necesitas una pantalla blanca como archivo? Usa Descargar debajo de la pantalla para guardar un PNG blanco puro del tamaño que
          necesites. El brillo y la calidez que elijas se aplican a la imagen.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Tu pantalla:</strong> igual que este dispositivo.
          </li>
          <li>
            <strong className="text-foreground">Escritorio y TV:</strong> 1080p, 1440p, 4K y 8K.
          </li>
          <li>
            <strong className="text-foreground">Móvil y tableta:</strong> iPhone (1179×2556), Android (1080×2400) y iPad (2048×2732).
          </li>
          <li>
            <strong className="text-foreground">Personalizado:</strong> cualquier ancho y alto.
          </li>
        </ul>
        <p className={p}>
          ¿Buscas más fondos y tonos de blanco? Mira la colección de{' '}
          <Link href="/backgrounds/white-background" className={link}>
            fondos blancos
          </Link>
          .
        </p>
      </Section>

      <Section id="test-heading" title="Test de pantalla blanca: qué buscar">
        <p className={p}>
          Una pantalla blanca completa es la forma más rápida de revisar una pantalla. Ponla a pantalla completa con el brillo al máximo y mira
          todo el panel.
        </p>
        <Table
          caption="Qué puede revelar un test de pantalla blanca"
          head={['Lo que ves', 'Qué puede significar', 'Siguiente paso']}
          rows={[
            ['Puntos negros u oscuros', 'Píxeles muertos', <Link key="d" href="/dead-pixel-test" className={link}>Prueba de píxeles muertos</Link>],
            ['Manchas, esquinas oscuras o nubes', 'Retroiluminación desigual', <Link key="u" href="/screen-uniformity-test" className={link}>Prueba de uniformidad</Link>],
            ['El blanco se ve amarillo, azul o rosa', 'Ajustes de color o tinte del panel', <Link key="c" href="/screen-color-test" className={link}>Prueba de color de pantalla</Link>],
            ['Formas tenues de imágenes anteriores', 'Quemado o retención de imagen', <Link key="b" href="/screen-burn-in-test" className={link}>Prueba de quemado de pantalla</Link>],
            ['Motas que se mueven al limpiar', 'Polvo o manchas, no píxeles', 'Limpia la pantalla y vuelve a revisarla'],
          ]}
        />
        <p className={p}>
          Después cambia a la <Link href="/black-screen" className={link}>pantalla negra</Link>: los píxeles atascados y las fugas de luz se ven
          mejor sobre negro.
        </p>
      </Section>
    </>
  )
}
