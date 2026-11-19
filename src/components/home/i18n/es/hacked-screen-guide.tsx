import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Simulador de Pantalla Hackeada (español). Búsquedas en español: pantalla hackeada / broma de hackeo / simulador de hackeo →
 * qué muestra → consejos → avisos reales de "te han hackeado".
 * Los ajustes se llaman como en la interfaz española: Alerta roja, Terminal verde, Más, Titular, Sonido de sirena,
 * Mostrar nota de «es broma».
 */
export function HackedScreenGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Simulador de pantalla hackeada: cómo preparar la broma">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Elige un estilo: Alerta roja o Terminal verde.</li>
          <li>Abre Más para escribir tu propio titular (SISTEMA HACKEADO por defecto) u ocultar la nota de &ldquo;es broma&rdquo;.</li>
          <li>Activa Sonido de sirena si quieres una alarma.</li>
          <li>Toca dos veces o pulsa F para la pantalla completa y deja el ordenador para que tu amigo lo encuentre.</li>
        </ol>
        <p className={p}>Pulsa Esc para salir de la pantalla completa y terminar la broma de la pantalla hackeada.</p>
      </Section>

      <Section wide id="shows-heading" title="Qué muestra el simulador de pantalla hackeada">
        <ul className={ul}>
          <li>Un aviso parpadeante de &ldquo;brecha de seguridad detectada&rdquo; y un titular con fallos visuales.</li>
          <li>Pasos de hackeo falsos como &ldquo;Evadiendo el firewall&rdquo; y &ldquo;Descifrando el almacén de contraseñas&rdquo;.</li>
          <li>Una barra de progreso y una cuenta atrás de 59 segundos que se repiten, así que la pantalla hackeada falsa nunca termina del todo.</li>
          <li>Registros falsos que se desplazan, líneas de escaneo y un brillo rojo o verde que palpita.</li>
        </ul>
        <p className={p}>No se instala nada y no se toca nada del ordenador. El simulador de pantalla hackeada es solo una página web.</p>
      </Section>

      <Section wide id="rules-heading" title="Simulador de pantalla hackeada: que siga siendo divertido">
        <ul className={ul}>
          <li>Gasta la broma a quien se vaya a reír y revélala en menos de un minuto.</li>
          <li>Evita los ordenadores del trabajo, donde podría alarmar al equipo de informática, y a quien se asuste con facilidad.</li>
          <li>Deja la nota de &ldquo;es broma&rdquo; activada si no sabes cómo va a reaccionar.</li>
        </ul>
        <p className={p}>
          Más bromas de pantalla: la <Link href="/hacker-typer" className={link}>escritura hacker</Link>, el{' '}
          <Link href="/broken-screen" className={link}>efecto pantalla rota</Link> y la{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>pantalla azul de la muerte falsa</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="¿No es el simulador de pantalla hackeada? Avisos emergentes reales">
        <p className={p}>
          Una pantalla de &ldquo;te han hackeado&rdquo; que no has abierto tú y que te pide llamar a un número o pagar es casi siempre una
          estafa:
        </p>
        <ul className={ul}>
          <li>No llames al número, no pagues y no dejes que nadie se conecte a tu ordenador.</li>
          <li>Cierra el navegador; si no se cierra, usa el Administrador de tareas (Ctrl + Mayús + Esc) o Forzar salida en un Mac.</li>
          <li>Pasa el antivirus y, si escribiste alguna contraseña, cámbiala desde otro dispositivo.</li>
        </ul>
      </Section>
    </div>
  )
}
