import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Efecto Pantalla Rota (español). Búsquedas en español: pantalla rota / pantalla rajada / pantalla agrietada →
 * ordenador, portátil, Chromebook y TV + móvil → broma de pantalla rota → imagen y fondo → daño real.
 * Los nombres de estilos y botones son los de la interfaz española del efecto.
 */
export function BrokenScreenGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Efecto pantalla rota: estilos rajada, hecha añicos y LCD dañado">
        <p className={p}>
          Elige un tipo de grieta debajo de la vista previa y toca o haz clic en cualquier punto para romper el cristal justo ahí. Cada toque
          añade otra grieta, así que la pantalla rota se extiende igual que el cristal de verdad.
        </p>
        <Table
          caption="Estilos de pantalla rota y su aspecto"
          head={['Estilo', 'Parece']}
          rows={[
            ['Telaraña', 'La clásica pantalla rajada: grietas largas que salen de un solo impacto'],
            ['Golpe en la esquina', 'Un móvil que se cayó y aterrizó de esquina'],
            ['Hecha añicos', 'Una pantalla destrozada, con cristal machacado por todas partes'],
            ['Fisura fina', 'Una grieta fina y realista que al principio pasa desapercibida'],
            ['LCD sangrando', 'Manchas negras y de colores, como tinta, de un panel dañado'],
            ['Líneas muertas', 'Líneas verticales brillantes, como una pantalla rota que pierde columnas'],
          ]}
        />
      </Section>

      <Section wide id="computer-heading" title="Broma de pantalla rota en el ordenador, el portátil o un Chromebook">
        <ul className={ul}>
          <li>Para simular la pantalla rota de un ordenador, abre esta página en el portátil, PC, Chromebook o smart TV al que quieras gastar la broma.</li>
          <li>Elige Pantalla apagada o Fondo de pantalla en Más para que la pantalla rota parezca el escritorio real.</li>
          <li>Pulsa F o toca Pantalla completa y añade un par de grietas donde la pantalla recibiría el golpe.</li>
          <li>Apártate y espera. El cursor se oculta solo cuando nadie mueve el ratón.</li>
        </ul>
        <h3 className={h3}>Broma de pantalla rota en el móvil: iPhone, Android o iPad</h3>
        <p className={p}>
          Abre la página en el navegador del móvil, elige Pantalla de bloqueo, toca Pantalla completa y rompe el cristal cerca de una esquina,
          que es donde suelen caer los golpes de verdad. Activa el Sonido de rotura para un efecto completo.
        </p>
      </Section>

      <Section wide id="prank-heading" title="Consejos para la broma de la pantalla rota">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Que sea corta.</strong> Las mejores bromas de pantalla rota terminan con una revelación rápida y
            unas risas.
          </li>
          <li>
            <strong className="text-foreground">Elige bien a quién.</strong> Evita a quien se disgustaría de verdad por un dispositivo roto.
          </li>
          <li>
            <strong className="text-foreground">Revélala pronto.</strong> Pulsa Esc o cierra la pestaña y la pantalla vuelve a la normalidad.
            Nada cambia en el dispositivo.
          </li>
        </ul>
        <p className={p}>
          ¿Quieres otra? Prueba el <Link href="/hacked-screen" className={link}>simulador de pantalla hackeada</Link> o la{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>pantalla azul de la muerte falsa</Link>.
        </p>
      </Section>

      <Section wide id="image-heading" title="Imagen y fondo de pantalla rota">
        <p className={p}>
          ¿Prefieres una foto de pantalla rota en lugar de un efecto en vivo? Rompe el cristal a tu gusto, abre Más y usa Descargar PNG. Pon la
          imagen como pantalla de bloqueo del móvil o como fondo de pantalla del ordenador para una broma que dure todo el día.
        </p>
      </Section>

      <Section wide id="real-heading" title="¿Pantalla rota de verdad? Cómo comprobar los daños">
        <p className={p}>¿No vienes a gastar una broma? Estas comprobaciones rápidas te ayudan a distinguir un daño real de un problema de software:</p>
        <Table
          caption="Señales de una pantalla rota de verdad"
          head={['Lo que ves', 'Compruébalo con']}
          rows={[
            ['Grietas que notas al tacto o ves con la pantalla apagada', <Link key="w" href="/" className={link}>Pantalla blanca</Link>],
            ['Manchas negras o tinta que se extiende', <Link key="d" href="/dead-pixel-test" className={link}>Prueba de píxeles muertos</Link>],
            ['Zonas de la pantalla que no responden al tacto', <Link key="t" href="/touch-screen-test" className={link}>Prueba de pantalla táctil</Link>],
            ['Líneas, parpadeo o colores raros', <Link key="s" href="/screen-problems" className={link}>Guía de problemas de pantalla</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
