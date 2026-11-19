import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla Falsa de Reunión de Zoom (español). Búsquedas en español: reunión falsa de Zoom / pantalla falsa de Zoom →
 * videollamada falsa para vídeos, clases y bromas → versiones de Teams y Google Meet.
 * Los botones se llaman como en la interfaz española: Más, Activar vista previa de la cámara, Finalizar.
 */
export function FakeZoomMeetingGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="setup-heading" title="Pantalla falsa de reunión de Zoom: cómo prepararla">
        <p className={p}>
          La pantalla falsa de reunión de Zoom muestra una galería estilo Zoom con cinco participantes con nombre, un contorno verde que pasa a
          quien esté &quot;hablando&quot;, la etiqueta Grabando y la conocida barra de herramientas con el botón rojo Finalizar.
        </p>
        <ul className={ul}>
          <li>Abre Más para escribir tu propio título de la reunión.</li>
          <li>Activa Activar vista previa de la cámara para ver tu propia cámara en el recuadro &quot;Tú&quot;. No sale de tu dispositivo.</li>
          <li>Pulsa F o toca Pantalla completa para que la reunión falsa ocupe toda la pantalla.</li>
        </ul>
      </Section>

      <Section wide id="uses-heading" title="Reunión falsa de Zoom para vídeos, clases y bromas">
        <p className={p}>Una videollamada falsa de Zoom viene bien siempre que necesites una reunión creíble en pantalla sin una real:</p>
        <Table
          caption="Formas de usar la pantalla falsa de reunión de Zoom"
          head={['Uso', 'Consejo']}
          rows={[
            ['Atrezo para cine, TikTok y YouTube', 'Graba la pantalla a pantalla completa para un vídeo de reunión falsa'],
            ['Parecer ocupado en una llamada', 'Deja la pantalla de reunión falsa abierta con la cámara apagada'],
            ['Clase falsa de Zoom o ensayo', 'Ensaya una clase o presentación con la cámara encendida'],
            ['Capturas y maquetas', 'Pon un título de la reunión y haz una captura de pantalla'],
            ['Broma inofensiva', 'Enséñale a un amigo una "reunión" a la que olvidó unirse y luego revela la broma'],
          ]}
        />
        <p className={p}>Es una pantalla, no una llamada: no hay audio, nadie puede unirse y nada se conecta a Zoom.</p>
      </Section>

      <Section wide id="other-heading" title="¿Reunión falsa de Zoom, Teams o Google Meet?">
        <p className={p}>¿Necesitas otra aplicación? Cada una tiene su propia pantalla:</p>
        <ul className={ul}>
          <li>
            <Link href="/fake-teams-meeting" className={link}>Pantalla falsa de reunión de Teams</Link>: controles y un botón rojo Salir en la
            barra superior, con un temporizador en marcha.
          </li>
          <li>
            <Link href="/fake-google-meet" className={link}>Pantalla falsa de Google Meet</Link>: recuadros redondeados, iniciales para las
            cámaras apagadas y un código de reunión.
          </li>
          <li>
            <Link href="/fake-slack-huddle" className={link}>Simulación Slack Huddle</Link>: una pequeña ventana de huddle con avatares.
          </li>
        </ul>
      </Section>
    </div>
  )
}
