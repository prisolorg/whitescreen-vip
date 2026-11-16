import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pantalla Azul de la Muerte Falsa (español). Búsquedas en español: pantalla azul de Windows / pantallazo azul /
 * BSOD → pantalla de error y códigos de detención → broma de pantalla azul → pantalla azul real.
 * Los nombres de estilos y botones son los de la interfaz española: Estilo, Negro (nuevo), Clásico (XP/7), Más.
 */
export function FakeBsodGuideEs() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Pantalla azul de la muerte falsa: Windows 10, 11 y clásica">
        <p className={p}>
          Elige un estilo de BSOD falso en el menú Estilo, debajo de la vista previa. Cada uno reproduce un pantallazo azul real de Windows:
        </p>
        <Table
          caption="Estilos de la pantalla azul de la muerte falsa"
          head={['Estilo', 'Qué muestra']}
          rows={[
            ['Windows 10', 'La pantalla de error azul brillante con la cara triste :(, un contador de porcentaje, un código QR y un código de detención'],
            ['Windows 11', 'El mismo diseño en el azul más oscuro de Windows 11'],
            ['Negro (nuevo)', 'La versión negra que usan las versiones recientes de Windows 11 en lugar de la azul'],
            ['Clásico (XP/7)', 'La pantalla azul de la muerte de toda la vida, azul intenso con texto técnico blanco'],
          ]}
        />
      </Section>

      <Section wide id="error-heading" title="Pantalla azul de la muerte: mensaje de error y códigos de detención">
        <p className={p}>
          La pantalla de error moderna de Windows dice &quot;Tu PC tuvo un problema y necesita reiniciarse. Solo estamos recopilando información
          sobre el error y, a continuación, se reiniciará automáticamente.&quot; Debajo, un contador sube hasta el 100 % y un código de detención
          nombra el error.
        </p>
        <p className={p}>Abre Más para elegir uno de estos códigos de detención reales:</p>
        <ul className={ul}>
          <li>CRITICAL_PROCESS_DIED y SYSTEM_SERVICE_EXCEPTION</li>
          <li>IRQL_NOT_LESS_OR_EQUAL y PAGE_FAULT_IN_NONPAGED_AREA</li>
          <li>KMODE_EXCEPTION_NOT_HANDLED y MEMORY_MANAGEMENT</li>
          <li>DPC_WATCHDOG_VIOLATION y VIDEO_TDR_FAILURE</li>
        </ul>
        <p className={p}>El control &quot;Llegar al 100 % en&quot; fija cuánto tarda el contador, desde unos 10 segundos hasta 2 minutos.</p>
      </Section>

      <Section wide id="prank-heading" title="Broma de la pantalla azul de la muerte: cómo prepararla">
        <ul className={ul}>
          <li>Abre esta pantalla de error falsa en el PC al que quieras gastar la broma y elige el estilo que le corresponda.</li>
          <li>Toca dos veces la pantalla o pulsa F para ponerla a pantalla completa.</li>
          <li>Apártate. El contador sube y el cursor se oculta cuando el ratón está quieto.</li>
          <li>Usa Reiniciar contador para repetirla y pulsa Esc para terminar la broma. No cambia nada en el ordenador.</li>
        </ul>
        <h3 className={h3}>Empieza con una actualización falsa</h3>
        <p className={p}>
          Para una reacción mayor, abre primero la <Link href="/fake-windows-10-update" className={link}>actualización falsa de Windows 10</Link>{' '}
          y toca Activar broma de BSOD para que la actualización &quot;se cuelgue&quot; con una pantalla de error de Windows. En un móvil o tableta
          funciona mejor el <Link href="/broken-screen" className={link}>efecto pantalla rota</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="¿Te ha salido una pantalla azul de la muerte de verdad?">
        <p className={p}>Una pantalla azul real significa que Windows se detuvo para protegerse. Casi siempre, estos pasos lo solucionan:</p>
        <ul className={ul}>
          <li>Apunta el código de detención que aparece en la parte inferior de la pantalla.</li>
          <li>Reinicia e instala las últimas actualizaciones de Windows y de los controladores.</li>
          <li>Deshaz lo último que hayas añadido: una aplicación, un controlador o un componente de hardware.</li>
          <li>Si sigue pasando, busca ese código de detención en el soporte de Microsoft.</li>
        </ul>
      </Section>
    </div>
  )
}
