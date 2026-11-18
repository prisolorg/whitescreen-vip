import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela Verde (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * cor da tela verde / verde chroma key → computador, notebook ou celular como tela verde → YouTube, vídeo e edição /
 * fundo verde → teste de subpixels. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function GreenScreenGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="color-heading" title="Cor da Tela Verde: qual verde funciona melhor?">
        <p className={p}>
          Esta página mostra verde puro, #00FF00 (RGB 0, 255, 0). Os programas de chroma key removem qualquer verde uniforme e saturado, mas
          um verde muito forte pode refletir no que você está filmando. Use o controle de Brilho para chegar ao tom que precisa e deixe o Tom
          em Neutra.
        </p>
        <Table
          caption="Cores de tela verde e como obtê-las nesta página"
          head={['Tom', 'Hex', 'Como obter', 'Melhor para']}
          rows={[
            ['Verde vivo', '#00FF00', 'Brilho 100%', 'Testes de pixel, o fundo mais vibrante'],
            ['Verde chroma key', '#00B300 (perto do padrão #00B140)', 'Brilho 70%', 'Chroma key em vídeo com menos reflexo de cor'],
            ['Verde-escuro', '#008000', 'Brilho 50%', 'Um fundo mais suave em ambientes escuros'],
          ]}
        />
        <p className={p}>
          Procurando verde-claro ou tons pastel? Veja a coleção de <Link href="/backgrounds/green-background" className={link}>fundo verde</Link>.
        </p>
      </Section>

      <Section wide id="computer-heading" title="Tela Verde no computador: notebook, monitor ou celular">
        <p className={p}>Uma tela de computador verde vira um fundo rápido para cenas pequenas: produtos, mãos, brinquedos e closes.</p>
        <ul className={ul}>
          <li>Abra esta página em um monitor, notebook, tablet ou celular e toque duas vezes para abrir em tela cheia.</li>
          <li>Ligue Manter a tela ligada para o verde não apagar no meio da gravação.</li>
          <li>Coloque o Brilho em cerca de 70% para um verde uniforme, sem pontos de luz.</li>
          <li>Deixe o objeto a 20–30 cm na frente da tela para a luz verde não refletir nele.</li>
          <li>Filme de frente. O ângulo de visão pode fazer a tela parecer mais escura nas bordas.</li>
        </ul>
        <p className={p}>
          Uma tela é pequena demais para ficar atrás de uma pessoa. Para cenas de corpo inteiro ou de rosto na câmera, pendure um tecido
          verde atrás de você ou adicione um fundo verde no editor.
        </p>
      </Section>

      <Section wide id="video-heading" title="Tela Verde para YouTube, vídeo e edição">
        <p className={p}>
          Precisa de uma tela verde online para a edição, e não em uma tela? Use Baixar, abaixo da prévia, para salvar um PNG verde em 1080p,
          4K, tamanho de celular ou qualquer tamanho personalizado e coloque na sua linha do tempo.
        </p>
        <Table
          caption="Onde remover uma tela verde"
          head={['Programa', 'Ferramenta']}
          rows={[
            ['OBS Studio', 'Filtro Chroma Key na fonte da câmera'],
            ['CapCut', 'Remover fundo → Chroma key'],
            ['Premiere Pro', 'Efeito Ultra Key'],
            ['DaVinci Resolve', '3D Keyer ou Delta Keyer'],
          ]}
        />
        <h3 className={h3}>Fundos de tela verde para Zoom e Teams</h3>
        <p className={p}>
          O Zoom e o Teams oferecem um efeito de tela verde virtual, mas um tecido verde de verdade atrás de você dá bordas mais limpas. Para
          imagens prontas para chroma key, veja o conjunto de{' '}
          <Link href="/backgrounds/green-screen-background" className={link}>fundo de tela verde</Link>.{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma key</Link> explica como a técnica funciona.
        </p>
      </Section>

      <Section wide id="check-heading" title="Teste com a Tela Verde: subpixels e uniformidade">
        <p className={p}>
          O verde carrega a maior parte do brilho que enxergamos, então cantos mais escuros ou manchas nubladas se destacam nele. Um ponto
          escuro é um subpixel verde morto, e um ponto amarelo ou ciano indica um subpixel vermelho ou azul preso aceso. Faça o{' '}
          <Link href="/gray-screen" className={link}>teste de uniformidade</Link> ou leia o{' '}
          <Link href="/screen-problems/stuck-pixel" className={link}>guia de pixel preso</Link> para os próximos passos. Um ponto preto que
          aparece também na <Link href="/" className={link}>tela branca</Link> é um pixel totalmente morto.
        </p>
      </Section>
    </div>
  )
}
