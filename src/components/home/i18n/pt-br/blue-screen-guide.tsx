import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela Azul (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * luz azul / iluminação azul → tons: azul-claro, azul-escuro, azul-marinho → chroma key, fotografia e edição →
 * óculos de luz azul e teste de subpixels. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function BlueScreenGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Luz de Tela Azul: use sua tela para iluminar de azul">
        <p className={p}>
          Uma tela azul inteira transforma qualquer monitor, notebook ou celular em uma luz azul suave. Toque duas vezes na prévia para abrir
          em tela cheia, ligue Manter a tela ligada e ajuste o brilho que precisar.
        </p>
        <Table
          caption="Formas de usar a tela azul como luz"
          head={['Uso', 'Configurações', 'Dica']}
          rows={[
            ['Brilho de fundo para lives e vídeos', 'Brilho 70–100%', 'Coloque uma segunda tela atrás de você, fora do enquadramento'],
            ['Luz de destaque em fotos e vídeos', 'Brilho 100%', 'Ilumine de lado para um contorno frio no seu objeto'],
            ['Luz ambiente e de festa', 'Brilho 40–70%', 'Vire a tela para uma parede para espalhar a luz azul'],
            ['Flash azul forte', 'Brilho 100%, tela cheia', 'Celulares dão a luz mais forte no brilho máximo'],
          ]}
        />
        <h3 className={h3}>Luz azul das telas e o sono</h3>
        <p className={p}>
          Luz azul forte à noite pode dificultar pegar no sono. Use a iluminação azul durante o dia ou em cenas criativas e, à noite, passe
          para a tela <Link href="/red-screen" className={link}>vermelha</Link> ou{' '}
          <Link href="/orange-screen" className={link}>laranja</Link> com pouco brilho.
        </p>
      </Section>

      <Section wide id="shade-heading" title="Cores da Tela Azul: azul vivo, escuro, marinho e claro">
        <p className={p}>
          Esta página mostra azul puro, #0000FF (RGB 0, 0, 255). Use o controle de Brilho para escurecer, com o Tom em Neutra.
        </p>
        <Table
          caption="Tons de azul e como obtê-los"
          head={['Tom', 'Hex', 'Como obter']}
          rows={[
            ['Azul vivo', '#0000FF', 'Brilho 100%'],
            ['Azul-escuro', '#0000B3', 'Brilho 70%'],
            ['Azul-marinho', '#000080', 'Brilho 50%'],
            ['Azul-claro', '#00FFFF', <Link key="c" href="/cyan-screen" className={link}>Abra a tela ciano</Link>],
          ]}
        />
        <p className={p}>
          Precisa de um arquivo? Baixar salva um PNG azul de 1080p a 8K, ou em tamanhos de celular e personalizados. Há mais opções na
          coleção de <Link href="/backgrounds/blue-background" className={link}>fundo azul</Link>.
        </p>
      </Section>

      <Section wide id="chroma-heading" title="Tela Azul para chroma key, fotografia e edição">
        <p className={p}>Uma tela azul funciona como uma tela verde, e é a melhor escolha em alguns casos:</p>
        <ul className={ul}>
          <li>O que você filma está de roupa verde ou segura objetos verdes.</li>
          <li>Você quer menos reflexo de cor visível. O reflexo azul é mais fácil de esconder, embora o azul precise de mais luz para um recorte limpo.</li>
        </ul>
        <p className={p}>
          Para produtos pequenos e closes, abra esta página em um notebook, monitor ou celular, coloque o Brilho em cerca de 70% e deixe o
          objeto a 20–30 cm na frente da tela. Na edição, baixe um PNG azul e faça o recorte com as mesmas ferramentas que usaria para o
          verde: Chroma Key do OBS, Chroma key do CapCut, Ultra Key do Premiere ou o 3D Keyer do DaVinci Resolve. Veja{' '}
          <Link href="/glossary/chroma-key" className={link}>chroma key</Link> para entender como funciona.
        </p>
      </Section>

      <Section wide id="test-heading" title="Teste com a Tela Azul: óculos de luz azul e subpixels">
        <p className={p}>
          Quer um teste rápido de luz azul para os seus óculos? Olhe para esta página no brilho máximo com e sem eles. Lentes bem tingidas
          deixam o azul visivelmente mais escuro; lentes transparentes que bloqueiam pouco azul quase não fazem diferença. Faça o mesmo com a{' '}
          <Link href="/" className={link}>tela branca</Link> para ver o quanto as lentes tingem tudo. É uma checagem visual rápida, não uma
          medição de laboratório.
        </p>
        <p className={p}>
          O azul puro também acende só os subpixels azuis. Um ponto preto é um subpixel azul morto, e um ponto magenta ou ciano indica um
          subpixel vermelho ou verde preso aceso. Para uma checagem completa, faça o{' '}
          <Link href="/dead-pixel-test" className={link}>teste de dead pixel</Link>.
        </p>
      </Section>
    </div>
  )
}
