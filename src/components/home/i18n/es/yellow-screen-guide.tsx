import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla Amarilla (español). Búsquedas en español: pantalla amarilla / luz amarilla → amarillo sólido (#FFFF00) →
 * test de subpíxeles rojos y verdes.
 * Los ajustes se llaman como en la interfaz española: Mantener la pantalla encendida, Brillo, Cálido, Neutro, Descargar.
 */
export function YellowScreenGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Pantalla amarilla como luz cálida">
        <p className={p}>
          Una pantalla amarilla emite una luz cálida sin nada de azul, lo que la convierte en una acogedora luz cálida para leer, hacer
          videollamadas o por la noche. Toca dos veces la vista previa para la pantalla completa y activa Mantener la pantalla encendida para que
          la luz no se apague.
        </p>
        <Table
          caption="Ajustes recomendados para usar la pantalla amarilla como luz"
          head={['Uso', 'Ajustes', 'Consejo']}
          rows={[
            ['Luz de lectura', 'Cálido, Brillo 60–80 %', 'Apoya una tableta junto al libro, inclinada para que no te dé en los ojos'],
            ['Videollamadas', 'Neutro, Brillo 100 %', 'Coloca la pantalla detrás de la webcam para un brillo dorado'],
            ['Luz de tarde o de noche', 'Cálido, Brillo 30–50 %', 'Con menos brillo se mantiene suave en una habitación oscura'],
            ['Color en fotos y vídeo', 'Neutro o Cálido', 'Usa una segunda pantalla como luz de acento cálida desde un lado'],
          ]}
        />
        <h3 className={h3}>Linterna amarilla en el móvil</h3>
        <p className={p}>
          Abre esta página en el móvil, sube el brillo y ponla a pantalla completa. La luz amarilla cálida es menos agresiva que una linterna
          blanca en la oscuridad, así que viene bien para ver cómo están los niños o moverte por casa de noche.
        </p>
      </Section>

      <Section wide id="solid-heading" title="Pantalla amarilla sólida (#FFFF00)">
        <p className={p}>
          Esta página muestra amarillo sólido: rojo y verde al máximo con el azul apagado (RGB 255, 255, 0). Es una pantalla amarilla lisa sin
          nada más, y puedes cambiar el tono con los controles que hay debajo de la vista previa.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Amarillo brillante:</strong> Neutro, Brillo 100 %.
          </li>
          <li>
            <strong className="text-foreground">Amarillo dorado:</strong> elige Cálido.
          </li>
          <li>
            <strong className="text-foreground">Amarillo mostaza:</strong> baja el control de Brillo.
          </li>
        </ul>
        <p className={p}>
          ¿Necesitas un archivo? Descargar guarda un PNG amarillo de 1080p a 8K, o en tamaños de móvil y personalizados. Para tonos pastel y
          amarillo claro, mira la colección de <Link href="/backgrounds/yellow-background" className={link}>fondos amarillos</Link>.
        </p>
      </Section>

      <Section wide id="check-heading" title="Test de pantalla amarilla: subpíxeles rojos y verdes">
        <p className={p}>
          El amarillo enciende a la vez los subpíxeles rojos y verdes. Un punto rojo indica un subpíxel verde muerto, un punto verde uno rojo
          muerto, y un punto blanco indica un subpíxel azul atascado encendido. Acótalo con las pantallas{' '}
          <Link href="/red-screen" className={link}>roja</Link>, <Link href="/green-screen" className={link}>verde</Link> y{' '}
          <Link href="/blue-screen" className={link}>azul</Link>.
        </p>
        <p className={p}>
          Si lo que se ve amarilla es tu <Link href="/" className={link}>pantalla blanca</Link>, consulta la{' '}
          <Link href="/screen-problems/yellow-tint-on-screen" className={link}>
            guía del tinte amarillo
          </Link>
          .
        </p>
      </Section>
    </div>
  )
}
