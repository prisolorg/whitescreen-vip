import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Protetor Relógio Flip (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * relógio flip online / tela cheia → relógio flip aesthetic, digital, com segundos → relógio para estudar →
 * timer e cronômetro. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function FlipClockGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="online-heading" title="Protetor Relógio Flip online: tela cheia em qualquer tela">
        <p className={p}>
          Este relógio flip online mostra a hora em dígitos grandes de placas que viram quando os minutos mudam, como um relógio de cabeceira
          retrô.
        </p>
        <ul className={ul}>
          <li>Toque duas vezes no relógio ou pressione F para abrir em tela cheia.</li>
          <li>Em tela cheia, a tela fica ligada nos navegadores compatíveis, então ele funciona como relógio de mesa ou protetor de tela.</li>
          <li>Use no notebook, em um segundo monitor, em um tablet antigo ou no navegador de uma smart TV.</li>
        </ul>
      </Section>

      <Section wide id="style-heading" title="Protetor Relógio Flip aesthetic: escuro, claro e minimalista">
        <p className={p}>Deixe do seu jeito com os controles abaixo do relógio:</p>
        <Table
          caption="Configurações do relógio flip"
          head={['Configuração', 'O que faz']}
          rows={[
            ['Tema', 'Escuro para um relógio preto e limpo, Claro para um visual leve e iluminado'],
            ['Formato 24 horas', 'Alterna entre o formato 24 horas e o formato 12 horas com AM/PM'],
            ['Mostrar segundos', 'Um relógio flip digital com segundos, ou só horas e minutos (em Mais)'],
            ['Mostrar data', 'Adiciona o dia da semana e a data abaixo do relógio (em Mais)'],
          ]}
        />
        <p className={p}>Esconda os segundos e a data para o visual de relógio flip mais minimalista e aesthetic.</p>
      </Section>

      <Section wide id="study-heading" title="Protetor Relógio Flip para estudar">
        <p className={p}>
          Grande em uma segunda tela, ele vira um relógio tranquilo para estudar: você vê a hora sem pegar o celular. Combine com o{' '}
          <Link href="/pomodoro-timer" className={link}>timer Pomodoro</Link> para trabalhar em blocos focados com pausas.
        </p>
        <p className={p}>
          Prefere algo divertido na tela livre? Rode o <Link href="/dvd-screensaver" className={link}>protetor de tela DVD</Link>.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Protetor Relógio Flip como timer e cronômetro?">
        <p className={p}>Procurando um timer flip? Este relógio sempre mostra a hora atual, então, para cronometrar algo, use uma destas ferramentas:</p>
        <ul className={ul}>
          <li>
            <Link href="/countdown-timer" className={link}>Temporizador de contagem regressiva</Link>: conta para trás a partir de qualquer
            duração, com predefinições como 5, 10 e 25 minutos.
          </li>
          <li>
            <Link href="/stopwatch" className={link}>Cronômetro</Link>: conta para a frente e marca voltas.
          </li>
          <li>
            <Link href="/pomodoro-timer" className={link}>Timer Pomodoro</Link>: sessões de foco e pausa para estudo ou trabalho.
          </li>
        </ul>
      </Section>
    </div>
  )
}
