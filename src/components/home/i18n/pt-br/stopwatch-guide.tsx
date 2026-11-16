import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Cronômetro em Tela Cheia (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * cronômetro online → cronômetro progressivo → cronômetro digital em tela cheia / para sala de aula →
 * comparação com o cronômetro do Google. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function StopwatchGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Cronômetro online: iniciar, marcar voltas e zerar">
        <p className={p}>Este cronômetro online marca o tempo até o centésimo de segundo e guarda uma lista de voltas.</p>
        <Table
          caption="Controles do cronômetro"
          head={['Ação', 'Botão', 'Tecla']}
          rows={[
            ['Iniciar ou pausar', 'Iniciar / Pausar', 'Espaço'],
            ['Marcar uma volta', 'Volta', 'L'],
            ['Zerar', 'Reiniciar', 'R'],
            ['Copiar todas as voltas', 'Copiar voltas', '—'],
          ]}
        />
        <p className={p}>
          Cada volta mostra o seu tempo parcial e o total acumulado, para você comparar as voltas de relance. Copiar voltas coloca todas na
          área de transferência para uma planilha ou mensagem.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Cronômetro progressivo: conte a partir do zero">
        <p className={p}>
          Ele conta a partir do zero até você parar, então é o timer online certo quando você não sabe quanto tempo algo vai levar. Funciona
          como contador progressivo para treinos, discursos, experimentos e tarefas.
        </p>
        <p className={p}>
          Precisa contar para trás a partir de um tempo definido, como 10 ou 30 minutos? Use o{' '}
          <Link href="/countdown-timer" className={link}>temporizador de contagem regressiva</Link> ou o{' '}
          <Link href="/pomodoro-timer" className={link}>timer Pomodoro</Link> para sessões de foco com pausas.
        </p>
      </Section>

      <Section wide id="fullscreen-heading" title="Cronômetro digital em tela cheia">
        <p className={p}>
          Pressione F ou toque em Tela cheia para um cronômetro digital enorme que a sala inteira consegue ler. Funciona bem como timer de
          sala de aula em um projetor ou lousa digital.
        </p>
        <ul className={ul}>
          <li>Sala de aula: cronometre quizzes, trabalhos em grupo e desafios de leitura.</li>
          <li>Estudos: acompanhe quanto tempo cada assunto realmente leva.</li>
          <li>Esportes e jogos: cronometre tiros de corrida, pranchas, rodadas e quebra-cabeças.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Cronômetro online ou cronômetro do Google?">
        <p className={p}>
          Os resultados de busca do Google incluem um pequeno timer embutido. Este aqui adiciona uma lista completa de voltas com tempos
          parciais, Copiar voltas com um clique, atalhos de teclado e exibição em tela cheia, e você pode salvá-lo nos favoritos para abrir
          direto.
        </p>
      </Section>
    </div>
  )
}
