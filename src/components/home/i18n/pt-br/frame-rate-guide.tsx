import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de FPS (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * teste de FPS / testar FPS → taxa de quadros → FPS do monitor e taxa de atualização → FPS em jogos.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function FrameRateGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Teste de FPS: compare taxas de quadros lado a lado">
        <p className={p}>
          Este teste de FPS, ou teste de taxa de quadros, move o mesmo bloco em cinco faixas, cada uma com uma taxa de quadros diferente, para
          você ver a diferença com os próprios olhos:
        </p>
        <ul className={ul}>
          <li>Faixas de 15, 24, 30 e 60 FPS, cada uma se movendo só nos seus próprios quadros, como um vídeo nessa taxa.</li>
          <li>Uma faixa máxima que se move a cada quadro que sua tela mostra, marcada com o seu FPS real.</li>
          <li>&ldquo;Sua tela&rdquo; mostra o maior FPS que sua tela e seu navegador conseguem exibir, medido ao vivo.</li>
        </ul>
        <p className={p}>
          Use a Velocidade (120 a 1.800 px/s) para acelerar o movimento, toque em Pausar para congelar e toque duas vezes para abrir em tela
          cheia. Faça este teste de FPS online em qualquer navegador, sem nada para instalar.
        </p>
      </Section>

      <Section wide id="results-heading" title="Resultados do Teste de FPS: como cada taxa de quadros fica">
        <Table
          caption="Taxas de quadros comuns"
          head={['Taxa de quadros', 'Tempo por quadro', 'Onde você vê']}
          rows={[
            ['15 FPS', '66,7 ms', 'Travado; videochamadas lentas, webcams antigas'],
            ['24 FPS', '41,7 ms', 'Filmes e a maioria das séries em streaming'],
            ['30 FPS', '33,3 ms', 'TV, YouTube, jogos de console'],
            ['60 FPS', '16,7 ms', 'Jogos fluidos e vídeos de esporte'],
            ['120+ FPS', '8,3 ms ou menos', 'Monitores e celulares com alta taxa de atualização'],
          ]}
        />
        <p className={p}>Checagem rápida de FPS: se a faixa máxima não parecer mais fluida que a de 60, sua tela provavelmente está rodando em 60 Hz.</p>
      </Section>

      <Section wide id="hz-heading" title="Teste de FPS ou teste de taxa de atualização?">
        <p className={p}>
          A taxa de quadros (FPS) é quantos quadros são desenhados por segundo; a taxa de atualização (Hz) é quantas vezes o monitor consegue
          mostrar um novo. Uma tela não mostra mais FPS do que os seus Hz, então no teste de FPS a faixa máxima é limitada pela sua taxa de
          atualização.
        </p>
        <p className={p}>
          Para checar a taxa de atualização com precisão, com tempos de quadro e quadros atrasados, faça o{' '}
          <Link href="/screen-refresh-rate-test" className={link}>teste de taxa de atualização</Link>. Para rastros atrás de objetos em
          movimento, experimente o <Link href="/monitor-ghosting-test" className={link}>teste de ghosting do monitor</Link>.
        </p>
      </Section>

      <Section wide id="games-heading" title="Teste de FPS em jogos">
        <p className={p}>
          Ferramentas online medem o navegador, não os seus jogos, e este teste de FPS não enxerga dentro deles. Para ver o FPS no jogo, use
          uma sobreposição:
        </p>
        <ul className={ul}>
          <li>Windows: pressione Win + G e abra o widget Desempenho na Xbox Game Bar.</li>
          <li>Steam: ligue o contador de FPS nas configurações Em jogo da Steam.</li>
          <li>NVIDIA ou AMD: a sobreposição de desempenho no app do driver de vídeo.</li>
        </ul>
      </Section>
    </div>
  )
}
