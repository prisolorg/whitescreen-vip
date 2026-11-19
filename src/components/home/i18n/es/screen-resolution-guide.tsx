import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba de Resolución (español). Búsquedas en español: cuál es mi resolución de pantalla / resolución de pantalla →
 * ajustes de pantalla → resolución del móvil → resoluciones habituales (HD a 4K).
 * Las lecturas se llaman como en la interfaz española: Resolución de pantalla, Píxeles físicos, Área visible del navegador,
 * Área disponible, Proporción de píxeles, Profundidad de color.
 */
export function ScreenResolutionGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="read-heading" title="Prueba de resolución: qué significa cada número">
        <p className={p}>
          ¿Cuál es mi resolución de pantalla? Esta página responde sola, sin pulsar ningún botón. Esto es lo que muestra cada lectura:
        </p>
        <Table
          caption="Lecturas de la prueba de resolución"
          head={['Lectura', 'Qué significa']}
          rows={[
            ['Resolución de pantalla', 'El tamaño de tu pantalla en píxeles CSS, tras el escalado de pantalla'],
            ['Píxeles físicos', 'El número real de píxeles: resolución de pantalla × proporción de píxeles. Suele ser la resolución nativa de tu monitor'],
            ['Área visible del navegador', 'El espacio dentro de la ventana del navegador'],
            ['Área disponible', 'La pantalla menos la barra de tareas o el Dock'],
            ['Proporción de píxeles', 'Cuántos píxeles físicos forman un píxel CSS (1 = sin escalado)'],
            ['Profundidad de color', 'Los bits por píxel que indica el navegador, normalmente 24 bits'],
          ]}
        />
        <p className={p}>
          Los valores se actualizan al cambiar el tamaño de la ventana o girar el móvil. Mantén el zoom del navegador al 100 %, porque el zoom
          cambia la proporción de píxeles y el número de píxeles físicos.
        </p>
      </Section>

      <Section wide id="check-heading" title="Prueba de resolución frente a los ajustes de pantalla">
        <p className={p}>
          La prueba de resolución lee lo que ve tu navegador. Para consultar o cambiar la resolución del monitor en los ajustes del sistema:
        </p>
        <Table
          caption="Dónde está el ajuste de resolución de pantalla"
          head={['Dispositivo', 'Dónde mirar']}
          rows={[
            ['Windows 11 / 10', 'Configuración → Sistema → Pantalla → Resolución de pantalla (la marcada como Recomendado es la nativa)'],
            ['Mac', 'Ajustes del Sistema → Pantallas (un ajuste escalado puede hacer que los píxeles físicos difieran del tamaño nativo del panel)'],
            ['iPhone / iPad', 'Depende del modelo; usa la lectura de píxeles físicos de arriba'],
            ['Android', 'Ajustes → Pantalla → Resolución de pantalla (solo en algunos móviles)'],
          ]}
        />
        <p className={p}>
          Si la comprobación muestra menos píxeles físicos que las especificaciones de tu monitor, la pantalla no está en su resolución nativa y
          el texto puede verse borroso.
        </p>
      </Section>

      <Section wide id="phone-heading" title="Prueba de resolución en el móvil: ¿cuál es mi resolución?">
        <p className={p}>
          Los móviles indican una resolución pequeña, como 390 × 844, porque lo amplían todo para que el texto se vea nítido. La resolución real
          de tu móvil es la lectura de píxeles físicos: por ejemplo, 390 × 844 con una proporción de píxeles de 3 son 1170 × 2532.
        </p>
      </Section>

      <Section wide id="common-heading" title="Resoluciones habituales en la prueba de resolución: de HD a 4K">
        <Table
          caption="Resoluciones de pantalla habituales"
          head={['Nombre', 'Resolución', 'Pantallas típicas']}
          rows={[
            ['HD', '1280 × 720', 'Portátiles y televisores antiguos'],
            ['Full HD (1080p)', '1920 × 1080', 'La mayoría de monitores y portátiles'],
            ['QHD (1440p)', '2560 × 1440', 'Monitores gaming y de oficina'],
            ['4K UHD', '3840 × 2160', 'Monitores y televisores 4K'],
          ]}
        />
        <ul className={ul}>
          <li>¿Mi monitor es 4K? Lo es si Píxeles físicos marca 3840 × 2160 con el zoom del navegador al 100 %.</li>
          <li>Un navegador no puede leer el tamaño de la pantalla en pulgadas; esta página muestra el tamaño solo en píxeles.</li>
          <li>
            Comprueba la nitidez con tu resolución usando las líneas finas de la <Link href="/monitor-test" className={link}>prueba de monitor</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
