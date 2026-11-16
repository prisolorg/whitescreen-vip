import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela Falsa de Reunião do Zoom (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * reunião falsa do Zoom → chamada falsa para vídeos, aulas e pegadinhas → versões de Teams e Google Meet.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function FakeZoomMeetingGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="setup-heading" title="Tela Falsa de Reunião do Zoom: como configurar">
        <p className={p}>
          A tela falsa de reunião do Zoom mostra uma galeria no estilo Zoom com cinco participantes com nome, um contorno verde que passa
          para quem está &quot;falando&quot;, um selo de Gravando e a barra de ferramentas conhecida com o botão vermelho Encerrar.
        </p>
        <ul className={ul}>
          <li>Abra Mais para digitar o seu próprio título da reunião.</li>
          <li>Ligue Ativar prévia da câmera para colocar sua câmera no bloco &quot;Você&quot;. A imagem fica no seu aparelho.</li>
          <li>Pressione F ou toque em Tela cheia para a reunião falsa ocupar a tela inteira.</li>
        </ul>
      </Section>

      <Section wide id="uses-heading" title="Tela Falsa de Reunião do Zoom para vídeos, aulas e pegadinhas">
        <p className={p}>Uma chamada falsa no Zoom ajuda sempre que você precisa de uma reunião convincente na tela sem uma de verdade:</p>
        <Table
          caption="Formas de usar a tela falsa de reunião do Zoom"
          head={['Uso', 'Dica']}
          rows={[
            ['Cenas de filme, TikTok e YouTube', 'Grave a tela em tela cheia para ter um vídeo de reunião falsa'],
            ['Parecer ocupado em uma chamada', 'Deixe a tela de reunião falsa aberta com a câmera desligada'],
            ['Aula falsa no Zoom ou ensaio', 'Ensaie uma aula ou apresentação com a câmera ligada'],
            ['Capturas de tela e mockups', 'Defina um título da reunião e faça uma captura de tela'],
            ['Pegadinha inofensiva', 'Mostre a um amigo uma "reunião" que ele esqueceu de entrar e depois revele'],
          ]}
        />
        <p className={p}>É uma tela, não uma chamada: não tem áudio, ninguém pode entrar e nada se conecta ao Zoom.</p>
      </Section>

      <Section wide id="other-heading" title="Tela Falsa de Reunião do Zoom, Teams ou Google Meet?">
        <p className={p}>Precisa de outro aplicativo? Cada um tem a sua tela:</p>
        <ul className={ul}>
          <li>
            <Link href="/fake-teams-meeting" className={link}>Tela falsa de reunião do Teams</Link>: controles e um botão vermelho Sair na
            barra superior, com um cronômetro rodando.
          </li>
          <li>
            <Link href="/fake-google-meet" className={link}>Tela falsa do Google Meet</Link>: blocos arredondados, iniciais para câmeras
            desligadas e um código da reunião.
          </li>
          <li>
            <Link href="/fake-slack-huddle" className={link}>Slack Huddle simulado</Link>: uma pequena janela de huddle com avatares.
          </li>
        </ul>
      </Section>
    </div>
  )
}
