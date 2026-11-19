import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Cronómetro Pantalla Completa (español). Búsquedas en español: cronómetro / cronómetro online →
 * cronómetro con vueltas / contar hacia arriba → cronómetro digital a pantalla completa, para clase → cronómetro de Google.
 * Los botones se llaman como en la interfaz española: Iniciar, Pausa, Vuelta, Reiniciar, Copiar vueltas.
 */
export function StopwatchGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Cronómetro online: iniciar, vuelta y reiniciar">
        <p className={p}>Este cronómetro online mide hasta la centésima de segundo y guarda una lista de vueltas.</p>
        <Table
          caption="Controles del cronómetro"
          head={['Acción', 'Botón', 'Tecla']}
          rows={[
            ['Iniciar o pausar', 'Iniciar / Pausa', 'Barra espaciadora'],
            ['Registrar una vuelta', 'Vuelta', 'L'],
            ['Volver a cero', 'Reiniciar', 'R'],
            ['Copiar todas las vueltas', 'Copiar vueltas', '—'],
          ]}
        />
        <p className={p}>
          Cada vuelta muestra su tiempo parcial y el total acumulado, así que comparas vueltas de un vistazo. Copiar vueltas las pasa al
          portapapeles para una hoja de cálculo o un mensaje.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Cronómetro que cuenta hacia arriba desde cero">
        <p className={p}>
          Cuenta hacia arriba desde cero hasta que lo detienes, así que es el temporizador online que necesitas cuando no sabes cuánto va a
          durar algo. Sirve para entrenamientos, discursos, experimentos y tareas.
        </p>
        <p className={p}>
          ¿Necesitas contar hacia atrás desde un tiempo fijo, como 10 o 30 minutos? Usa el{' '}
          <Link href="/countdown-timer" className={link}>temporizador de cuenta atrás</Link>, o el{' '}
          <Link href="/pomodoro-timer" className={link}>temporizador Pomodoro</Link> para sesiones de concentración con descansos.
        </p>
      </Section>

      <Section wide id="fullscreen-heading" title="Cronómetro digital a pantalla completa">
        <p className={p}>
          Pulsa F o toca Pantalla completa para un cronómetro digital enorme que toda la sala puede leer. Funciona bien como cronómetro para
          clase en un proyector o una pizarra digital.
        </p>
        <ul className={ul}>
          <li>En clase: cronometra pruebas, trabajos en grupo y concursos de lectura.</li>
          <li>Estudio: mide cuánto tardas de verdad en cada tema.</li>
          <li>Deporte y juegos: cronometra sprints, planchas, rondas y puzles.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="¿Cronómetro online o cronómetro de Google?">
        <p className={p}>
          Los resultados de búsqueda de Google incluyen un pequeño temporizador integrado. Este añade una lista completa de vueltas con tiempos
          parciales, Copiar vueltas con un clic, atajos de teclado y vista a pantalla completa, y puedes guardarlo en marcadores para abrirlo al
          instante.
        </p>
      </Section>
    </div>
  )
}
