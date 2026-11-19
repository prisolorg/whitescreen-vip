import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Prueba de Pantalla Táctil (español). Búsquedas en español: test de pantalla táctil / probar pantalla táctil →
 * toques fantasma y multitáctil → iPhone, Android y Samsung → siguientes pasos.
 * Los modos y botones se llaman como en la interfaz española: Cuadrícula de zonas muertas, Dibujar, Multitáctil, Cubierto, Toques, Máx., Borrar.
 */
export function TouchScreenGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="modes-heading" title="Prueba de pantalla táctil: tres formas de comprobarla">
        <Table
          caption="Modos de la prueba de pantalla táctil"
          head={['Modo', 'Qué comprueba', 'Cómo']}
          rows={[
            ['Cuadrícula de zonas muertas', 'Zonas que no responden al tacto', 'Desliza el dedo por cada casilla hasta que Cubierto marque 100 %; las casillas que siguen oscuras son zonas muertas'],
            ['Dibujar', 'Seguimiento fluido y sin cortes', 'Dibuja líneas lentas por la pantalla; los cortes o saltos indican zonas débiles'],
            ['Multitáctil', 'Cuántos dedos detecta', 'Apoya varios dedos; Toques y Máx. muestran el número'],
          ]}
        />
        <p className={p}>
          Pulsa Borrar para empezar de nuevo, y pulsa F o toca Pantalla completa para que la prueba de pantalla táctil cubra también los bordes.
        </p>
      </Section>

      <Section wide id="ghost-heading" title="Prueba de pantalla táctil para toques fantasma y multitáctil">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Toques fantasma:</strong> abre Dibujar, deja el móvil sobre la mesa y no lo toques. Las líneas o
            puntos que aparezcan solos son toques fantasma.
          </li>
          <li>
            <strong className="text-foreground">Multitáctil:</strong> la mayoría de móviles detectan de 5 a 10 dedos a la vez. La etiqueta
            muestra cuántos puntos de contacto indica tu dispositivo.
          </li>
          <li>
            <strong className="text-foreground">Sensibilidad:</strong> los deslizamientos rápidos y suaves en Dibujar muestran si se registran
            los toques ligeros.
          </li>
        </ul>
      </Section>

      <Section wide id="phone-heading" title="Prueba de pantalla táctil en iPhone, Android y Samsung">
        <p className={p}>
          La prueba de pantalla táctil funciona en Safari, Chrome o cualquier navegador del móvil, sin instalar nada. Quita una funda gruesa o
          un protector de pantalla si los toques fallan cerca de los bordes y vuelve a probar.
        </p>
        <p className={p}>
          En muchos Samsung Galaxy también puedes marcar *#0*#, un código de prueba de pantalla táctil que abre un menú de pruebas integrado.
          Estos códigos dependen de la marca y el modelo, y algunos móviles no tienen ninguno.
        </p>
      </Section>

      <Section wide id="next-heading" title="Después de la prueba de pantalla táctil">
        <p className={p}>
          Si el tacto va bien pero la imagen no, revisa la propia pantalla: haz la{' '}
          <Link href="/dead-pixel-test" className={link}>prueba de píxeles muertos</Link> para buscar puntos o la{' '}
          <Link href="/monitor-test" className={link}>prueba de monitor</Link> para el color y la uniformidad.
        </p>
      </Section>
    </div>
  )
}
