import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Timer Pomodoro (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * técnica Pomodoro / método Pomodoro → timer para estudar → configurações 25/5, 50/10 e personalizada →
 * Pomodoro online. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function PomodoroTimerGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="technique-heading" title="Timer Pomodoro e a técnica Pomodoro">
        <p className={p}>
          A técnica Pomodoro, também chamada de método Pomodoro, é um método simples de gestão do tempo criado por Francesco Cirillo no fim
          dos anos 1980. Você trabalha em blocos curtos e focados, chamados pomodoros, e descansa entre eles. Este timer Pomodoro roda o
          ciclo inteiro para você:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Escolha uma tarefa.</li>
          <li>Concentre-se nela por 25 minutos.</li>
          <li>Faça uma pausa curta de 5 minutos.</li>
          <li>Repita. Depois de quatro pomodoros, faça uma pausa longa de 15 minutos.</li>
        </ol>
        <p className={p}>O timer passa do foco para a pausa sozinho, toca um som no fim de cada fase e conta as sessões que você conclui.</p>
        <h3 className={h3}>Por que se chama &quot;timer de tomate&quot;?</h3>
        <p className={p}>
          &quot;Pomodoro&quot; significa tomate em italiano. Cirillo cronometrava suas primeiras sessões com um timer de cozinha em formato de
          tomate, e por isso o método também é conhecido como técnica do timer de tomate ou do relógio de tomate.
        </p>
      </Section>

      <Section wide id="study-heading" title="Timer Pomodoro para estudar">
        <p className={p}>
          Usar a técnica Pomodoro para estudar transforma esta ferramenta em um ótimo timer de estudos: blocos curtos são mais fáceis de
          começar, e as pausas mantêm o foco em dia durante uma longa sessão de revisão.
        </p>
        <ul className={ul}>
          <li>Dê a cada pomodoro um objetivo claro, como um capítulo, uma lista de exercícios ou 20 flashcards.</li>
          <li>Guarde o celular até a pausa.</li>
          <li>Anote pensamentos soltos e resolva-os na pausa, não no meio da sessão.</li>
          <li>Use a pausa longa para se mexer, beber água ou tomar um ar.</li>
          <li>Conte as sessões concluídas para ver como o método Pomodoro de estudo funciona para você.</li>
        </ul>
      </Section>

      <Section wide id="settings-heading" title="Configurações do Timer Pomodoro: 25/5, 50/10 e personalizado">
        <p className={p}>Abra Mais para definir a duração do foco, das duas pausas e quantas sessões vêm antes da pausa longa.</p>
        <Table
          caption="Configurações populares do timer Pomodoro"
          head={['Configuração', 'Foco', 'Pausa curta', 'Pausa longa', 'Bom para']}
          rows={[
            ['Clássico 25/5', '25 min', '5 min', '15 min depois de 4', 'A maioria dos trabalhos e estudos'],
            ['Trabalho profundo 50/10', '50 min', '10 min', '20–30 min depois de 3', 'Escrever, programar, leituras longas'],
            ['Blocos curtos 15/3', '15 min', '3 min', '15 min depois de 4', 'Começar tarefas difíceis'],
          ]}
        />
        <ul className={ul}>
          <li>O foco pode ter de 5 a 90 minutos, as pausas curtas de 1 a 20 e as pausas longas de 5 a 45.</li>
          <li>Desligue Iniciar o próximo automaticamente para começar cada fase você mesmo.</li>
          <li>Desligue o som para ter um timer Pomodoro silencioso na biblioteca ou no escritório.</li>
        </ul>
        <p className={p}>
          Precisa só de um timer de 25 minutos? O <Link href="/countdown-timer" className={link}>temporizador de contagem regressiva</Link>{' '}
          tem predefinições com um toque, e o <Link href="/stopwatch" className={link}>cronômetro</Link> mostra quanto tempo uma tarefa
          realmente leva.
        </p>
      </Section>

      <Section wide id="online-heading" title="Timer Pomodoro online: sem precisar de app">
        <p className={p}>
          Este Pomodoro online roda no navegador do PC, Mac, Chromebook, tablet ou celular, sem app ou extensão de Pomodoro para instalar e
          sem cadastro.
        </p>
        <ul className={ul}>
          <li>A contagem aparece na aba do navegador, então você pode continuar trabalhando em outra aba.</li>
          <li>O tempo continua certo mesmo com a aba em segundo plano.</li>
          <li>Aperte a barra de espaço para iniciar ou pausar e F para um relógio Pomodoro grande em tela cheia.</li>
        </ul>
        <p className={p}>Funciona igualmente bem como timer de foco, de trabalho ou de produtividade para qualquer tarefa que você queira dividir em blocos.</p>
      </Section>
    </div>
  )
}
