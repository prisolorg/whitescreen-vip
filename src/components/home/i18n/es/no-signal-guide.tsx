import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla Sin Señal (español). Búsquedas en español: pantalla sin señal / carta de ajuste / barras de color de TV →
 * qué significan las barras → ideas → "sin señal" en tu tele real.
 * Los estilos se llaman como en la interfaz española: Barras de color, Rebotando, Entrada azul, Más.
 * El botón del tono aún se muestra en inglés en la herramienta ("1 kHz tone").
 */
export function NoSignalGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Pantalla sin señal y barras de color de TV: tres estilos">
        <Table
          caption="Estilos de la pantalla sin señal"
          head={['Estilo', 'Qué muestra']}
          rows={[
            ['Barras de color', 'Barras de color de TV con un recuadro SIN SEÑAL en el centro'],
            ['Rebotando', 'Un recuadro SIN SEÑAL que se desplaza y rebota en los bordes, como una tele en reposo'],
            ['Entrada azul', 'Una pantalla azul lisa con el mensaje, como muestran muchas teles sin entrada'],
          ]}
        />
        <ul className={ul}>
          <li>Abre Más para cambiar el mensaje y el nombre de la entrada (HDMI 1 por defecto).</li>
          <li>Activa el tono de 1 kHz para el clásico pitido de señal de prueba.</li>
          <li>Pulsa F o toca Pantalla completa para que la pantalla sin señal llene una tele, un monitor o un portátil.</li>
        </ul>
      </Section>

      <Section wide id="bars-heading" title="Barras de color de la pantalla sin señal: qué significan">
        <p className={p}>
          Las barras de color de TV son la carta de ajuste a rayas que usaban las cadenas para ajustar la imagen. Esta pantalla sin señal dibuja
          una versión estilo SMPTE en tres filas:
        </p>
        <ul className={ul}>
          <li>Arriba: siete barras gris, amarilla, cian, verde, magenta, roja y azul.</li>
          <li>En medio: una franja fina de azul, magenta, cian y gris, alternando con negro.</li>
          <li>Abajo: bloques azul oscuro, blanco, morado y negro.</li>
        </ul>
        <p className={p}>
          Las barras de color se adaptan a cualquier pantalla, incluidas las teles 1080p y 4K. Son por estética, no para calibrar; para revisar
          los colores, usa la <Link href="/screen-color-test" className={link}>prueba de color de pantalla</Link>.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ideas para la pantalla sin señal y las barras de color">
        <ul className={ul}>
          <li>Broma: pon las barras de color o la pantalla sin señal a pantalla completa y mira cómo alguien revisa todos los cables.</li>
          <li>Atrezo para cine y fotos: las barras de color crean una tele creíble al fondo sin emisión real.</li>
          <li>Directos y eventos: una pantalla de &ldquo;volvemos enseguida&rdquo; con tu propio mensaje.</li>
        </ul>
        <p className={p}>
          Más bromas de pantalla: el <Link href="/hacked-screen" className={link}>simulador de pantalla hackeada</Link> y la{' '}
          <Link href="/fake-windows-10-update" className={link}>actualización falsa de Windows 10</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="¿Pantalla sin señal en tu tele de verdad? Soluciones rápidas">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pulsa Input o Source en el mando y elige el puerto al que está conectado tu dispositivo.</li>
          <li>Comprueba que el dispositivo (consola, portátil, descodificador) está encendido y no en reposo.</li>
          <li>Desconecta el cable HDMI por ambos extremos y vuelve a conectarlo, o prueba otro puerto u otro cable.</li>
          <li>Reinicia la tele y el dispositivo.</li>
        </ol>
      </Section>
    </div>
  )
}
