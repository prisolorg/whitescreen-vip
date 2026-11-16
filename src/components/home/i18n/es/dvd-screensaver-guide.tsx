import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Salvapantallas DVD (español). Búsquedas en español: salvapantallas DVD / logo de DVD rebotando →
 * easter egg de Google → TV, directo y segundo monitor → logo y GIF → golpe en la esquina.
 * Los botones se llaman como en la interfaz española: Más, Pausa, Reanudar, Pantalla completa.
 */
export function DvdScreensaverGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="bounce-heading" title="Salvapantallas DVD: el logo de DVD que rebota">
        <p className={p}>
          El salvapantallas DVD es el logo de DVD rebotando que mostraban los reproductores de DVD antiguos cuando se quedaban inactivos.
          El logo avanza en diagonal a velocidad constante y cambia de color cada vez que toca un borde, alternando entre 10 colores sin
          repetir el anterior.
        </p>
        <ul className={ul}>
          <li>Toca dos veces la pantalla o pulsa F para verlo a pantalla completa.</li>
          <li>Abre Más para cambiar la velocidad y el tamaño del logo.</li>
          <li>Los contadores registran cada rebote y cada golpe exacto en la esquina.</li>
          <li>Usa Pausa para congelar el logo y Reanudar para que siga rebotando.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="El salvapantallas DVD de Google (easter egg)">
        <p className={p}>
          Al buscar &quot;DVD screensaver&quot; en Google, a veces el logo de Google se ha convertido en un logo estilo DVD que rebota en la
          página de resultados. Estos easter eggs aparecen y desaparecen, y no funcionan a pantalla completa.
        </p>
        <p className={p}>
          Esta página te da el mismo logo rebotando cuando quieras, en cualquier navegador, con pantalla completa, contador de esquinas y
          controles de velocidad y tamaño.
        </p>
      </Section>

      <Section wide id="tv-heading" title="Salvapantallas DVD en la tele, en un directo o en un segundo monitor">
        <Table
          caption="Dónde usar el salvapantallas DVD"
          head={['Uso', 'Cómo']}
          rows={[
            ['Smart TV', 'Abre esta página en el navegador de la tele, o envía una pestaña del navegador, y ponla a pantalla completa'],
            ['Pausa en un directo o pantalla de «vuelvo enseguida»', 'Añade esta ventana como captura de ventana en OBS mientras te ausentas'],
            ['Segundo monitor', 'Arrastra la ventana a la pantalla libre y ponla a pantalla completa'],
            ['Sala de espera u oficina', 'Déjalo en marcha en una pantalla libre para un toque de nostalgia'],
          ]}
        />
      </Section>

      <Section wide id="logo-heading" title="Logo y GIF del salvapantallas DVD">
        <p className={p}>
          El logo se dibuja en directo en tu navegador: un &quot;DVD&quot; en negrita sobre un disco con &quot;VIDEO&quot; recortado, que cambia
          de color en cada rebote. El logo oficial de DVD Video es una marca registrada de DVD Format/Logo Licensing Corporation, así que no
          se ofrece como descarga PNG.
        </p>
        <h3 className={h3}>Crea un GIF del salvapantallas DVD</h3>
        <p className={p}>
          Ejecuta el salvapantallas a pantalla completa y graba la pantalla con una herramienta integrada (Recortes de Windows, la barra de
          Captura de pantalla del Mac o el grabador de pantalla del móvil) y luego convierte el clip en un GIF del DVD. Graba hasta un golpe en
          la esquina para conseguir el bucle perfecto.
        </p>
      </Section>

      <Section wide id="corner-heading" title="¿Llegará a la esquina el salvapantallas DVD?">
        <p className={p}>
          Sí, pero la frecuencia depende de la forma de la pantalla, del tamaño del logo y de dónde empieza. El golpe en la esquina solo ocurre
          cuando el logo llega a un lateral y al borde superior o inferior en el mismo instante. En algunos tamaños de pantalla pasa a menudo;
          en otros puede tardar mucho. Cambiar el tamaño del logo o de la ventana le da una trayectoria nueva.
        </p>
        <p className={p}>
          Eso lo convierte en el juego del DVD perfecto: todos apuestan cuándo llegará el siguiente golpe en la esquina y el contador lo decide.
          Para más pantallas en reposo, prueba el <Link href="/flip-clock-screensaver" className={link}>reloj flip screensaver</Link> o el{' '}
          <Link href="/matrix-screensaver" className={link}>salvapantallas Matrix</Link>.
        </p>
      </Section>
    </div>
  )
}
