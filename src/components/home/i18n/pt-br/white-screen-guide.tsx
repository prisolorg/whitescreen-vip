import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela branca (português do Brasil), página inicial. Traduzido do guia em inglês, com termos de busca brasileiros:
 * tela branca brilhante → tela branca em branco / branco puro → tela branca como luz / lanterna → fundo e imagem →
 * teste de tela branca. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function WhiteScreenGuidePtBr() {
  return (
    <>
      <Section id="bright-heading" title="Tela branca brilhante: o branco mais forte que sua tela consegue mostrar">
        <p className={p}>
          A tela branca brilhante acima é branco puro (#FFFFFF) a 100%, a cor mais clara que qualquer tela consegue mostrar. O quanto ela
          parece brilhante depende da configuração de brilho do seu próprio aparelho, porque um site não consegue aumentar a luz de fundo do
          hardware por você.
        </p>

        <h3 className={h3}>Como deixar a tela branca mais clara</h3>
        <ul className={ul}>
          <li>Mantenha o controle de Brilho abaixo da tela em 100% e escolha Neutra ou Frio.</li>
          <li>Aumente o brilho do aparelho até o máximo (tabela abaixo).</li>
          <li>Desligue tudo o que tinge ou escurece o branco: Luz noturna, Night Shift, True Tone, modos de conforto visual e de economia de bateria.</li>
          <li>Toque duas vezes na tela para abrir em tela cheia, sem barras do navegador escurecendo as bordas.</li>
        </ul>

        <Table
          caption="Onde encontrar o brilho máximo em cada aparelho"
          head={['Aparelho', 'Brilho máximo', 'Desligue para ter branco puro']}
          rows={[
            ['Windows 10/11', 'Controle de brilho nas Configurações rápidas (Win + A)', 'Luz noturna, economia de bateria, brilho adaptável ao conteúdo'],
            ['Mac', 'Teclas de brilho ou Central de Controle → Tela', 'Night Shift, True Tone, brilho automático'],
            ['iPhone / iPad', 'Controle na Central de Controle', 'Night Shift, True Tone, Modo de Pouca Energia'],
            ['Android', 'Controle nas Configurações rápidas', 'Brilho adaptável, conforto visual / luz noturna'],
            ['Smart TV', 'Modo de imagem Vívido ou Padrão, luz de fundo no máximo', 'Modos de imagem Eco / economia de energia'],
          ]}
        />

        <h3 className={h3}>Uma tela muito brilhante faz mal para os olhos?</h3>
        <p className={p}>
          Uma tela branca fixa não cintila nem pisca, mas o brilho máximo em um ambiente escuro pode incomodar. Diminua o controle ou escolha
          Quente quando só precisar de uma luz suave, e desvie o olhar por um instante a cada 20 minutos se for usar por muito tempo.
        </p>
      </Section>

      <Section id="blank-heading" title="Tela branca em branco: uma tela branca pura, sem nada nela">
        <p className={p}>
          Uma tela branca em branco é exatamente isso: uma tela toda branca, sem texto, ícones nem cursor. Uma tela branca lisa assim
          funciona como fundo limpo, painel de luz ou forma de limpar a tela com um toque.
        </p>
        <ul className={ul}>
          <li>Toque duas vezes na prévia (ou pressione F) para uma tela completamente branca de ponta a ponta.</li>
          <li>O cursor some depois de um momento sem movimento, então nada interrompe o branco.</li>
          <li>Pressione Esc ou toque duas vezes de novo para sair da tela cheia.</li>
        </ul>

        <h3 className={h3}>Branco puro ou telas brancas quentes, suaves e off-white</h3>
        <Table
          caption="Tons de branco que você consegue com os botões Frio, Neutra e Quente"
          head={['Tom', 'Como obter', 'Melhor para']}
          rows={[
            ['Branco puro (#FFFFFF)', 'Neutra, Brilho 100%', 'Testes, limpeza, a luz mais forte'],
            ['Branco frio', 'Frio, Brilho 100%', 'Visual nítido de luz do dia, fotos de produto'],
            ['Branco quente', 'Quente', 'Videochamadas, maquiagem, leitura à noite'],
            ['Branco suave / off-white', 'Quente + Brilho 60–80%', 'Luz de fundo suave em um ambiente escuro'],
          ]}
        />
      </Section>

      <Section id="light-heading" title="Tela branca como luz: use sua tela como luminária">
        <p className={p}>
          Sua tela é uma fonte de luz suave e uniforme e, no brilho máximo, emite uma luz branca surpreendentemente forte. Aumente o controle de
          Brilho e o brilho do aparelho, escolha um tom e ligue Manter a tela ligada para a luz não apagar no meio da chamada.
        </p>
        <Table
          caption="Configurações sugeridas para usar a tela branca como luz"
          head={['Uso', 'Tom', 'Dica']}
          rows={[
            ['Videochamadas (Zoom, Teams, Meet)', 'Quente ou Neutra', 'Coloque a tela logo atrás da webcam, um pouco acima da altura dos olhos'],
            ['Maquiagem e selfies', 'Neutra', 'Fique bem de frente para a tela para uma luz uniforme e sem sombras'],
            ['Luz de leitura', 'Quente', 'Baixe o controle para 60–80% para reduzir o ofuscamento'],
            ['Fotos de produto', 'Frio', 'Use um segundo aparelho como luz de preenchimento de lado'],
            ['Lanterna rápida', 'Neutra', 'Tela cheia no celular com brilho máximo'],
          ]}
        />
        <h3 className={h3}>Use o celular ou o notebook como lanterna</h3>
        <p className={p}>
          Abra esta tela branca no celular, coloque o brilho no máximo e toque duas vezes para abrir em tela cheia. Essa luz é mais suave que o
          flash da câmera, o que ajuda a achar coisas em um quarto escuro sem acordar ninguém.
        </p>
        <p className={p}>
          Quer mais controle? Experimente o <Link href="/ring-light" className={link}>ring light online</Link> para um reflexo circular nos
          olhos ou a <Link href="/zoom-lighting" className={link}>luz para videochamadas</Link> para uma temperatura de cor exata.
        </p>
      </Section>

      <Section id="background-heading" title="Fundo e imagens de tela branca para baixar">
        <p className={p}>
          Precisa de uma tela branca como arquivo? Use Baixar, abaixo da tela, para salvar um PNG branco puro no tamanho que precisar. O
          brilho e o tom que você escolheu são aplicados à imagem.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Sua tela:</strong> igual a este aparelho.
          </li>
          <li>
            <strong className="text-foreground">Computador e TV:</strong> 1080p, 1440p, 4K e 8K.
          </li>
          <li>
            <strong className="text-foreground">Celular e tablet:</strong> iPhone (1179×2556), Android (1080×2400) e iPad (2048×2732).
          </li>
          <li>
            <strong className="text-foreground">Personalizado:</strong> qualquer largura e altura.
          </li>
        </ul>
        <p className={p}>
          Procurando mais papéis de parede e tons de branco? Veja a coleção de{' '}
          <Link href="/backgrounds/white-background" className={link}>
            fundo branco
          </Link>
          .
        </p>
      </Section>

      <Section id="test-heading" title="Teste de tela branca: o que observar">
        <p className={p}>
          Uma tela branca inteira é a checagem de tela mais rápida. Abra em tela cheia com brilho máximo e olhe o painel inteiro.
        </p>
        <Table
          caption="O que um teste de tela branca pode revelar"
          head={['O que você vê', 'O que pode significar', 'Próximo passo']}
          rows={[
            ['Pontos pretos ou escuros', 'Dead pixels', <Link key="d" href="/dead-pixel-test" className={link}>Teste de dead pixel</Link>],
            ['Manchas, cantos escuros ou nuvens', 'Luz de fundo desigual', <Link key="u" href="/screen-uniformity-test" className={link}>Teste de uniformidade</Link>],
            ['Branco parece amarelado, azulado ou rosado', 'Configurações de cor ou tom do painel', <Link key="c" href="/screen-color-test" className={link}>Teste de cores do monitor</Link>],
            ['Formas fracas de imagens antigas', 'Burn-in ou retenção de imagem', <Link key="b" href="/screen-burn-in-test" className={link}>Teste de burn-in de tela</Link>],
            ['Pontinhos que se mexem quando você passa o pano', 'Poeira ou manchas, não pixels', 'Limpe a tela e confira de novo'],
          ]}
        />
        <p className={p}>
          Depois passe para a <Link href="/black-screen" className={link}>tela preta</Link>: pixels presos e vazamento de luz aparecem melhor no
          preto.
        </p>
      </Section>
    </>
  )
}
