import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Temporizador de Cuenta Atrás (español). Búsquedas en español: temporizador / cuenta atrás / cuenta regresiva →
 * cuenta atrás para una fecha (días que faltan) → temporizador online gratis → usos → otros temporizadores.
 * Los botones se llaman como en la interfaz española: Temporizador, Iniciar, Cuenta regresiva hasta una fecha, Cambiar fecha, Más.
 */
export function CountdownTimerGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Temporizador de cuenta atrás: cómo usarlo">
        <ul className={ul}>
          <li>Elige una duración en el menú Temporizador: 1, 5, 10, 15, 25, 45 o 60 minutos.</li>
          <li>¿Necesitas otra duración? Haz clic o toca las horas, los minutos o los segundos en la pantalla y escribe cualquier tiempo, hasta 99 horas.</li>
          <li>Pulsa Iniciar, o la barra espaciadora en un teclado, y empieza la cuenta atrás.</li>
          <li>Pausa y sigue donde lo dejaste, o pulsa R para reiniciar.</li>
          <li>Cuando se acaba el tiempo, la pantalla parpadea en rojo y suena un aviso. Desactiva el sonido en Más.</li>
        </ul>
        <p className={p}>Pulsa F o toca Pantalla completa para un temporizador enorme que se lee desde el otro lado de la sala.</p>
      </Section>

      <Section wide id="date-heading" title="Temporizador de cuenta atrás para una fecha: días, horas y minutos">
        <p className={p}>
          ¿Cuentas los días que faltan para un cumpleaños, una boda, unas vacaciones, un examen o un lanzamiento? Elige{' '}
          <strong className="text-foreground">Cuenta regresiva hasta una fecha</strong> en el menú Temporizador, escoge la fecha y la hora en
          el calendario, ponle un nombre al evento si quieres y pulsa Iniciar. La cuenta atrás muestra los días, horas, minutos y segundos que
          faltan, y el aviso suena cuando llega el momento.
        </p>
        <ul className={ul}>
          <li>Usa el reloj y la zona horaria de tu dispositivo, así que medianoche es medianoche donde estés.</li>
          <li>La cuenta atrás se guarda en este navegador: cierra la pestaña y seguirá contando cuando vuelvas.</li>
          <li>Ponla a pantalla completa para mostrar los días que faltan en una tele, un proyector o un monitor libre.</li>
          <li>Toca Cambiar fecha para elegir un evento nuevo cuando quieras.</li>
        </ul>
      </Section>

      <Section wide id="online-heading" title="Temporizador de cuenta atrás online: gratis y sin app">
        <p className={p}>
          Este temporizador de cuenta atrás online funciona en cualquier navegador de ordenador, tableta, móvil o smart TV. Es gratis, sin
          registro y sin nada que instalar. En un ordenador puedes cambiar a otra pestaña mientras corre: el tiempo restante aparece en el
          título de la pestaña y el aviso sigue sonando al llegar a cero. Deja la pestaña abierta y el sonido activado. Los móviles pausan las
          páginas que dejas de ver, así que allí mantén el temporizador en pantalla; si un dispositivo entra en reposo, la cuenta atrás se pone
          al día y el aviso suena cuando se despierta.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ideas para usar el temporizador de cuenta atrás">
        <Table
          caption="Formas de usar el temporizador de cuenta atrás"
          head={['Uso', 'Duración']}
          rows={[
            ['Actividades y exámenes en clase', '10, 15 o 45 minutos en el proyector'],
            ['Presentaciones y charlas', '5 o 10 minutos, a pantalla completa donde lo vea quien habla'],
            ['Cocina y té', '1, 5 o 10 minutos'],
            ['Descansos y entrenamientos', '1, 5 o 15 minutos'],
            ['Sesiones de concentración', '25 minutos y luego un descanso corto'],
            ['Repostería, colada o un examen largo', 'Un tiempo personalizado, como 1 hora y 30 minutos'],
            ['Cumpleaños, vacaciones, viajes y lanzamientos', 'Cuenta atrás hasta la fecha'],
          ]}
        />
      </Section>

      <Section wide id="more-heading" title="¿Temporizador de cuenta atrás, cronómetro o Pomodoro?">
        <ul className={ul}>
          <li>
            ¿Contar hacia arriba en lugar de hacia atrás? Usa el <Link href="/stopwatch" className={link}>cronómetro</Link>.
          </li>
          <li>
            ¿Trabajas o estudias por bloques? El <Link href="/pomodoro-timer" className={link}>temporizador Pomodoro</Link> repite sesiones de
            concentración de 25 minutos con descansos.
          </li>
          <li>
            ¿Solo quieres la hora en pantalla? Prueba el <Link href="/flip-clock-screensaver" className={link}>reloj flip</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
