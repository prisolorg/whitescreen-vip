import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Reloj Flip Screensaver (español). Búsquedas en español: reloj flip / flip clock online / reloj de tarjetas →
 * reloj flip estético → reloj para estudiar → temporizador y cronómetro.
 * Los ajustes se llaman como en la interfaz española: Tema, Formato de 24 horas, Mostrar segundos, Mostrar fecha, Más.
 */
export function FlipClockGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="online-heading" title="Reloj flip online: a pantalla completa en cualquier pantalla">
        <p className={p}>
          Este reloj flip online muestra la hora con grandes dígitos de tarjetas que se voltean al cambiar los minutos, como un reloj de
          mesilla retro.
        </p>
        <ul className={ul}>
          <li>Toca dos veces el reloj o pulsa F para ponerlo a pantalla completa.</li>
          <li>A pantalla completa, la pantalla se mantiene encendida en los navegadores compatibles, así que sirve como reloj de escritorio o salvapantallas.</li>
          <li>Úsalo en un portátil, un segundo monitor, una tableta vieja o el navegador de una smart TV.</li>
        </ul>
      </Section>

      <Section wide id="style-heading" title="Reloj flip estético: oscuro, claro y minimalista">
        <p className={p}>Dale el aspecto que quieras con los controles que hay debajo del reloj:</p>
        <Table
          caption="Ajustes del reloj flip"
          head={['Ajuste', 'Qué hace']}
          rows={[
            ['Tema', 'Oscuro para un reloj negro y limpio, Claro para un aspecto luminoso y ligero'],
            ['Formato de 24 horas', 'Cambia entre el formato de 24 horas y el de 12 horas con AM/PM'],
            ['Mostrar segundos', 'Un reloj flip digital con segundos, o solo horas y minutos (en Más)'],
            ['Mostrar fecha', 'Añade el día de la semana y la fecha debajo del reloj (en Más)'],
          ]}
        />
        <p className={p}>Oculta los segundos y la fecha para el aspecto de reloj flip más minimalista y estético.</p>
      </Section>

      <Section wide id="study-heading" title="Reloj flip para estudiar">
        <p className={p}>
          En grande en una segunda pantalla, es un reloj de estudio tranquilo: miras la hora sin coger el móvil. Combínalo con el{' '}
          <Link href="/pomodoro-timer" className={link}>temporizador Pomodoro</Link> para trabajar en bloques concentrados con descansos.
        </p>
        <p className={p}>
          ¿Prefieres algo más divertido en la pantalla libre? Pon el <Link href="/dvd-screensaver" className={link}>salvapantallas DVD</Link>.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Reloj flip, temporizador y cronómetro">
        <p className={p}>¿Buscas un temporizador flip? Este reloj siempre muestra la hora actual; para cronometrar algo, usa uno de estos:</p>
        <ul className={ul}>
          <li>
            <Link href="/countdown-timer" className={link}>Temporizador de cuenta atrás</Link>: cuenta atrás desde cualquier duración, con
            ajustes rápidos como 5, 10 y 25 minutos.
          </li>
          <li>
            <Link href="/stopwatch" className={link}>Cronómetro</Link>: cuenta hacia arriba y registra vueltas.
          </li>
          <li>
            <Link href="/pomodoro-timer" className={link}>Temporizador Pomodoro</Link>: sesiones de concentración y descanso para estudiar o trabajar.
          </li>
        </ul>
      </Section>
    </div>
  )
}
