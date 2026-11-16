import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela Preta (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * tela preta em tela cheia → imagem de tela preta / fundo preto PNG → preto puro → tela em branco / página preta →
 * tela escura → testes da tela. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function BlackScreenGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="howto-heading" title="Como abrir uma Tela Preta em tela cheia">
        <ul className={ul}>
          <li>Toque duas vezes na prévia ou pressione F para uma tela preta lisa, de ponta a ponta.</li>
          <li>No celular, toque no ícone de tela cheia no canto da prévia.</li>
          <li>Ligue Manter a tela ligada para a tela não escurecer nem entrar em repouso.</li>
          <li>Pressione Esc ou toque duas vezes de novo para sair. O cursor some sozinho enquanto você fica parado.</li>
        </ul>
      </Section>

      <Section wide id="image-heading" title="Imagem de Tela Preta: baixe uma imagem preta ou PNG">
        <p className={p}>
          Precisa de uma imagem de tela preta em vez da tela ao vivo? Use Baixar, abaixo da prévia, para salvar um PNG preto puro (#000000)
          no tamanho exato que você precisa. É um arquivo sem perdas, então o preto continua sólido, sem ruído de compressão.
        </p>
        <Table
          caption="Tamanhos de imagem de tela preta para baixar"
          head={['Tamanho', 'Pixels', 'Bom para']}
          rows={[
            ['Full HD 1080p', '1920 × 1080', 'Vídeos do YouTube, slides, a maioria dos monitores'],
            ['QHD 1440p', '2560 × 1440', 'Monitores gamer e notebooks'],
            ['4K UHD', '3840 × 2160', 'Linhas do tempo de vídeo 4K e TVs'],
            ['8K UHD', '7680 × 4320', 'Projetos 8K e telas muito grandes'],
            ['iPhone / Android', '1179 × 2556 / 1080 × 2400', 'Papel de parede do celular, tela inicial e de bloqueio'],
            ['iPad', '2048 × 2732', 'Papel de parede do tablet'],
            ['Personalizado', 'Qualquer tamanho, por ex. 1080 × 1920', 'Vídeo vertical para Stories, Reels e Shorts'],
          ]}
        />
        <h3 className={h3}>Vídeo de tela preta e edição</h3>
        <p className={p}>
          Coloque o PNG em 1080p ou 4K em qualquer editor de vídeo e estique até a duração que precisar. Funciona como quadro preto para
          aberturas, fades e intervalos entre clipes, e evita renderizar um clipe separado.
        </p>
        <p className={p}>
          Quer pretos mais profundos ou com textura? Veja a coleção de{' '}
          <Link href="/backgrounds/black-background" className={link}>
            fundo preto
          </Link>
          .
        </p>
      </Section>

      <Section wide id="pure-heading" title="Tela Preta total: preto puro (#000000)">
        <p className={p}>
          Esta página mostra preto puro, RGB 0, 0, 0, o valor mais escuro que se pode pedir a uma tela. O quão preto ele realmente parece
          depende do seu painel.
        </p>
        <Table
          caption="Como uma tela preta pura aparece em cada tipo de tela"
          head={['Tela', 'O que você vê', 'Por quê']}
          rows={[
            ['OLED / AMOLED', 'Preto absoluto, sem brilho', 'Cada pixel gera a própria luz e se desliga no preto'],
            ['Mini-LED', 'Preto muito profundo', 'As zonas de escurecimento local diminuem a luz de fundo'],
            ['LCD (IPS, VA, TN)', 'Cinza muito escuro em um ambiente escuro', 'A luz de fundo continua acesa atrás do painel'],
          ]}
        />
        <p className={p}>
          Não sabe qual é a sua? <Link href="/glossary/oled-vs-lcd" className={link}>OLED vs LCD</Link> explica a diferença.
        </p>
      </Section>

      <Section wide id="blank-heading" title="Tela Preta como tela em branco: esconda sua tela">
        <p className={p}>
          Uma tela preta vazia esconde tudo o que está na tela sem desligá-la, então apps, downloads e chamadas continuam rodando.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Apresentações e projetores:</strong> apague a tela entre os slides ou enquanto as pessoas
            falam.
          </li>
          <li>
            <strong className="text-foreground">Privacidade:</strong> cubra o que você está fazendo com um toque quando se afastar.
          </li>
          <li>
            <strong className="text-foreground">Foco:</strong> limpe um segundo monitor que distrai.
          </li>
        </ul>
        <h3 className={h3}>Site de tela preta: uma página preta no navegador</h3>
        <p className={p}>
          Salve este site de tela preta nos favoritos para abrir uma página preta sempre que precisar. Nada mais carrega, não tem cadastro, e
          você pode arrastar a janela para qualquer monitor antes de abrir em tela cheia.
        </p>
      </Section>

      <Section wide id="dark-heading" title="Tela Preta no segundo monitor: tela escura e blackout">
        <p className={p}>
          Assistindo a um filme ou jogando em uma tela? Coloque uma tela escura na outra para ela parar de iluminar o ambiente. Mova esta
          janela para o segundo monitor, abra em tela cheia e ligue Manter a tela ligada.
        </p>
        <ul className={ul}>
          <li>Funciona como tela de blackout ou protetor de tela preto sem mudar suas configurações de energia.</li>
          <li>No OLED, os pixels pretos ficam desligados, então o preto puro não desgasta o painel como uma imagem clara e estática.</li>
          <li>No LCD, diminua também o brilho do monitor para o resultado mais escuro.</li>
        </ul>
      </Section>

      <Section wide id="check-heading" title="Teste com a Tela Preta: vazamento de luz, brilho e pixels presos">
        <p className={p}>
          Em um ambiente escuro, uma tela preta inteira facilita achar alguns defeitos comuns. Para dead pixels e poeira, confira também a{' '}
          <Link href="/" className={link}>tela branca</Link>:
        </p>
        <Table
          caption="Problemas que uma tela preta revela"
          head={['O que você vê', 'O que é', 'Saiba mais']}
          rows={[
            ['Luz vazando nas bordas', 'Vazamento de luz (backlight bleed)', <Link key="b" href="/screen-problems/backlight-bleed" className={link}>Backlight bleed</Link>],
            ['Brilho que muda quando você se mexe', 'IPS glow', <Link key="g" href="/screen-problems/ips-glow" className={link}>IPS glow</Link>],
            ['Um ponto que continua aceso', 'Pixel preso ou quente', <Link key="d" href="/dead-pixel-test" className={link}>Teste de dead pixel</Link>],
            ['Faixas ou tons perto do preto', 'Uniformidade do OLED', <Link key="o" href="/oled-gray-test" className={link}>Teste de cinza OLED</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
