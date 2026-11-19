import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Actualización Falsa Windows 11 (español). Búsquedas en español: actualización falsa de Windows 11 / pantalla de
 * actualización de Windows 11 → broma en Windows 11 → comparación con Windows 10 y XP.
 * Los botones se llaman como en la interfaz española: Pausa, Más, Activar broma de BSOD.
 */
export function FakeWindows11UpdateGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Actualización falsa de Windows 11: cómo funciona">
        <p className={p}>
          La pantalla de actualización falsa de Windows 11 copia el aspecto moderno: pantalla negra, un anillo que gira, &quot;Trabajando en las
          actualizaciones&quot;, un porcentaje que sube y &quot;Mantén el equipo encendido y conectado.&quot;
        </p>
        <ul className={ul}>
          <li>El porcentaje sigue subiendo y vuelve a empezar después del 100 %, así que la actualización nunca termina.</li>
          <li>Pulsa Pausa para congelarlo y que la actualización parezca atascada.</li>
          <li>Abre Más para que vaya más rápida o más lenta.</li>
          <li>Pulsa F o toca Pantalla completa para ocultar el navegador y la barra de tareas.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Broma de la actualización falsa de Windows 11: cómo prepararla">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Abre esta pantalla de actualización falsa en el PC con Windows 11 al que quieras gastar la broma.</li>
          <li>Pulsa F o toca Pantalla completa para que llene la pantalla.</li>
          <li>Déjala en marcha. El anillo gira y el porcentaje sube poco a poco.</li>
          <li>Para darle un giro, toca Activar broma de BSOD y la actualización &quot;se cuelga&quot;.</li>
          <li>Pulsa Esc para terminar. No cambia nada en el PC.</li>
        </ol>
      </Section>

      <Section wide id="compare-heading" title="Actualización falsa de Windows 11 frente a Windows 10 y XP">
        <Table
          caption="Qué pantalla de actualización falsa de Windows usar"
          head={['Pantalla', 'Aspecto', 'Página']}
          rows={[
            ['Windows 11', 'Pantalla negra, anillo que gira, porcentaje simple', 'Esta página'],
            ['Windows 10', 'Puntos que giran y "Trabajando en las actualizaciones. 14 % completado"', <Link key="w10" href="/fake-windows-10-update" className={link}>Actualización falsa Windows 10</Link>],
            ['Windows XP', 'Instalador retro con barra de progreso', <Link key="xp" href="/fake-windows-xp-update" className={link}>Instalación falsa Windows XP</Link>],
            ['Pantalla de error', 'La pantalla azul de la muerte', <Link key="bsod" href="/fake-blue-screen-of-death" className={link}>Pantalla azul de la muerte falsa</Link>],
          ]}
        />
        <p className={p}>
          Una pantalla real de carga o de actualización de Windows 11 puede quedarse mucho rato en el mismo número. Si la tuya parece atascada,
          dale tiempo y mantenla enchufada antes de reiniciar.
        </p>
      </Section>
    </div>
  )
}
