import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Temporizador Pomodoro (español). Búsquedas en español: temporizador Pomodoro / técnica Pomodoro / método Pomodoro →
 * Pomodoro para estudiar → ajustes 25/5 y 50/10 → Pomodoro online sin app.
 * Los ajustes se llaman como en la interfaz española: Más, Iniciar el siguiente automáticamente.
 */
export function PomodoroTimerGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="technique-heading" title="Temporizador Pomodoro y la técnica Pomodoro">
        <p className={p}>
          La técnica Pomodoro, también llamada método Pomodoro, es un método sencillo de gestión del tiempo creado por Francesco Cirillo a
          finales de los años 80. Trabajas en tramos cortos y concentrados llamados pomodoros y descansas entre ellos. Este temporizador
          Pomodoro gestiona el ciclo completo por ti:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Elige una tarea.</li>
          <li>Concéntrate en ella durante 25 minutos.</li>
          <li>Haz un descanso corto de 5 minutos.</li>
          <li>Repite. Después de cuatro pomodoros, haz un descanso largo de 15 minutos.</li>
        </ol>
        <p className={p}>
          El temporizador pasa solo de la concentración al descanso, suena un aviso al final de cada fase y cuenta las sesiones que completas.
        </p>
        <h3 className={h3}>¿Por qué se llama temporizador tomate?</h3>
        <p className={p}>
          &quot;Pomodoro&quot; significa tomate en italiano. Cirillo cronometró sus primeras sesiones con un temporizador de cocina con forma de
          tomate, por eso el método también se conoce como técnica del temporizador tomate o del reloj tomate.
        </p>
      </Section>

      <Section wide id="study-heading" title="Temporizador Pomodoro para estudiar">
        <p className={p}>
          Usar la técnica Pomodoro para estudiar convierte esta herramienta en un gran temporizador de estudio: los bloques cortos cuestan
          menos de empezar y los descansos mantienen la concentración durante una larga sesión de repaso.
        </p>
        <ul className={ul}>
          <li>Da a cada pomodoro un objetivo claro, como un capítulo, una serie de ejercicios o 20 tarjetas de memoria.</li>
          <li>Guarda el móvil hasta el descanso.</li>
          <li>Apunta las ideas que te distraigan y ocúpate de ellas en el descanso, no a mitad de sesión.</li>
          <li>Aprovecha el descanso largo para moverte, beber agua o tomar el aire.</li>
          <li>Cuenta las sesiones completadas para ver qué tal te funciona el método Pomodoro para estudiar.</li>
        </ul>
      </Section>

      <Section wide id="settings-heading" title="Ajustes del temporizador Pomodoro: 25/5, 50/10 y personalizado">
        <p className={p}>Abre Más para fijar la duración de la concentración, de los dos descansos y cuántas sesiones van antes de un descanso largo.</p>
        <Table
          caption="Ajustes populares del temporizador Pomodoro"
          head={['Configuración', 'Concentración', 'Descanso corto', 'Descanso largo', 'Ideal para']}
          rows={[
            ['Clásico 25/5', '25 min', '5 min', '15 min tras 4', 'La mayoría de trabajos y el estudio'],
            ['Trabajo profundo 50/10', '50 min', '10 min', '20–30 min tras 3', 'Escribir, programar, lecturas largas'],
            ['Ráfagas cortas 15/3', '15 min', '3 min', '15 min tras 4', 'Arrancar con tareas difíciles'],
          ]}
        />
        <ul className={ul}>
          <li>La concentración puede durar de 5 a 90 minutos, los descansos cortos de 1 a 20 y los largos de 5 a 45.</li>
          <li>Desactiva Iniciar el siguiente automáticamente para empezar cada fase tú mismo.</li>
          <li>Desactiva el sonido para tener un temporizador Pomodoro silencioso en una biblioteca u oficina.</li>
        </ul>
        <p className={p}>
          ¿Solo necesitas un temporizador de 25 minutos? El <Link href="/countdown-timer" className={link}>temporizador de cuenta atrás</Link>{' '}
          tiene ajustes rápidos de un toque, y el <Link href="/stopwatch" className={link}>cronómetro</Link> te muestra cuánto dura de verdad
          una tarea.
        </p>
      </Section>

      <Section wide id="online-heading" title="Temporizador Pomodoro online: sin instalar ninguna app">
        <p className={p}>
          Este temporizador Pomodoro online funciona en el navegador de un PC, Mac, Chromebook, tableta o móvil, sin app ni extensión que
          instalar y sin cuenta.
        </p>
        <ul className={ul}>
          <li>La cuenta atrás aparece en la pestaña del navegador, así que puedes seguir trabajando en otra pestaña.</li>
          <li>Mantiene la hora exacta aunque la pestaña esté en segundo plano.</li>
          <li>Pulsa la barra espaciadora para iniciar o pausar, y F para un gran reloj Pomodoro a pantalla completa.</li>
        </ul>
        <p className={p}>
          Funciona igual de bien como temporizador de concentración, de trabajo o de productividad para cualquier tarea que quieras dividir en
          tramos.
        </p>
      </Section>
    </div>
  )
}
