import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Temporizador de Contagem Regressiva (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * contagem regressiva / timer → contagem regressiva para uma data / quantos dias faltam → timer online →
 * usos → outros timers. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function CountdownTimerGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Temporizador de Contagem Regressiva: como usar">
        <ul className={ul}>
          <li>Escolha uma duração no menu Timer: 1, 5, 10, 15, 25, 45 ou 60 minutos.</li>
          <li>Precisa de outra duração? Clique ou toque nas horas, minutos ou segundos na tela e digite qualquer tempo, até 99 horas.</li>
          <li>Toque em Iniciar, ou aperte a barra de espaço no teclado, e a contagem regressiva começa.</li>
          <li>Pause e continue de onde parou, ou pressione R para reiniciar.</li>
          <li>Quando o tempo acaba, a tela pisca em vermelho e toca um alerta sonoro. Desligue o som em Mais.</li>
        </ul>
        <p className={p}>Pressione F ou toque em Tela cheia para um timer enorme que dá para ler do outro lado da sala.</p>
      </Section>

      <Section wide id="date-heading" title="Temporizador de Contagem Regressiva para uma data: dias, horas e minutos">
        <p className={p}>
          Contando os dias para um aniversário, casamento, feriado, prova ou lançamento? Escolha{' '}
          <strong className="text-foreground">Contagem regressiva até uma data</strong> no menu Timer, selecione a data e a hora no
          calendário, dê um nome ao evento se quiser e toque em Iniciar. A contagem mostra os dias, horas, minutos e segundos que faltam, e o
          alerta sonoro toca quando o momento chega.
        </p>
        <ul className={ul}>
          <li>Ela usa o relógio e o fuso horário do seu aparelho, então meia-noite é meia-noite onde você está.</li>
          <li>Sua contagem fica salva neste navegador: feche a aba e ela continua contando quando você voltar.</li>
          <li>Abra em tela cheia para mostrar quantos dias faltam em uma TV, projetor ou monitor livre.</li>
          <li>Toque em Mudar data para escolher um novo evento a qualquer momento.</li>
        </ul>
      </Section>

      <Section wide id="online-heading" title="Temporizador de Contagem Regressiva online: grátis e sem app">
        <p className={p}>
          Este timer online roda em qualquer navegador de computador, tablet, celular ou smart TV. É um temporizador grátis, sem cadastro e
          sem nada para instalar. No computador, você pode mudar para outra aba enquanto ele roda: o tempo restante aparece no título da aba
          e o alerta sonoro toca mesmo assim no zero. Mantenha a aba aberta e o som ligado. Celulares pausam as páginas que você deixa em
          segundo plano, então mantenha o timer na tela; se o aparelho entrar em repouso, a contagem se atualiza e o alerta toca quando ele
          voltar.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ideias para usar o Temporizador de Contagem Regressiva">
        <Table
          caption="Formas de usar o temporizador de contagem regressiva"
          head={['Uso', 'Duração']}
          rows={[
            ['Atividades e provas em sala de aula', '10, 15 ou 45 minutos no projetor'],
            ['Apresentações e palestras', '5 ou 10 minutos, em tela cheia onde quem fala possa ver'],
            ['Cozinha e chá', '1, 5 ou 10 minutos'],
            ['Pausas e treinos', '1, 5 ou 15 minutos'],
            ['Sessões de foco', '25 minutos e depois uma pausa curta'],
            ['Forno, roupa na máquina ou uma prova longa', 'Um tempo personalizado, como 1 hora e 30 minutos'],
            ['Aniversários, feriados, viagens e lançamentos', 'Contagem regressiva até a data'],
          ]}
        />
      </Section>

      <Section wide id="more-heading" title="Temporizador de Contagem Regressiva, cronômetro ou Pomodoro?">
        <ul className={ul}>
          <li>
            Quer contar para a frente em vez de para trás? Use o <Link href="/stopwatch" className={link}>cronômetro</Link>.
          </li>
          <li>
            Trabalha ou estuda em blocos? O <Link href="/pomodoro-timer" className={link}>timer Pomodoro</Link> repete sessões de foco de 25
            minutos com pausas.
          </li>
          <li>
            Só quer a hora na tela? Experimente o <Link href="/flip-clock-screensaver" className={link}>protetor relógio flip</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
