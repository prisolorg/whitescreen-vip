import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela Sem Sinal (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * TV sem sinal / tela sem sinal → barras de cores da TV → ideias de uso → "sem sinal" de verdade na TV.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function NoSignalGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Tela Sem Sinal: três estilos">
        <Table
          caption="Estilos da tela sem sinal"
          head={['Estilo', 'O que mostra']}
          rows={[
            ['Barras de cor', 'Barras de cores de TV com uma caixa SEM SINAL no meio'],
            ['Quicando', 'Uma caixa SEM SINAL que flutua e quica nas bordas, como uma TV parada'],
            ['Entrada azul', 'Uma tela azul simples com a mensagem, como muitas TVs mostram sem entrada'],
          ]}
        />
        <ul className={ul}>
          <li>Abra Mais para mudar a Mensagem e o Nome da entrada (HDMI 1 por padrão).</li>
          <li>Ligue o tom de 1 kHz para o clássico bipe de sinal de teste.</li>
          <li>Pressione F ou toque em Tela cheia para a tela sem sinal ocupar a TV, o monitor ou o notebook.</li>
        </ul>
      </Section>

      <Section wide id="bars-heading" title="Barras de cores da Tela Sem Sinal: o que as listras significam">
        <p className={p}>
          As barras de cores da TV são o padrão de teste listrado que as emissoras usavam para alinhar a imagem. Esta tela sem sinal desenha
          uma versão no estilo SMPTE em três fileiras:
        </p>
        <ul className={ul}>
          <li>Em cima: sete barras de cinza, amarelo, ciano, verde, magenta, vermelho e azul.</li>
          <li>No meio: uma faixa fina de azul, magenta, ciano e cinza, alternando com preto.</li>
          <li>Embaixo: blocos azul-escuro, branco, roxo e preto.</li>
        </ul>
        <p className={p}>
          As barras de cores se ajustam a qualquer tela, inclusive TVs 1080p e 4K. Elas são para o visual, não para calibração; para checar
          as cores, use o <Link href="/screen-color-test" className={link}>teste de cores do monitor</Link>.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ideias para usar a Tela Sem Sinal e as barras de cores">
        <ul className={ul}>
          <li>Pegadinha: coloque as barras de cores ou a tela de TV sem sinal em tela cheia e veja alguém conferir todos os cabos.</li>
          <li>Cenas de filme e fotos: as barras de cores criam uma TV convincente ao fundo, sem transmissão de verdade.</li>
          <li>Lives e eventos: uma tela de &ldquo;já volto&rdquo; com a sua própria mensagem.</li>
        </ul>
        <p className={p}>
          Mais pegadinhas de tela: o <Link href="/hacked-screen" className={link}>simulador de tela hackeada</Link> e a{' '}
          <Link href="/fake-windows-10-update" className={link}>atualização falsa Windows 10</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Tela Sem Sinal na sua TV de verdade? Soluções rápidas">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Aperte Input ou Source (Entrada/Fonte) no controle remoto e escolha a porta em que o aparelho está conectado.</li>
          <li>Confira se o aparelho (console, notebook, decodificador) está ligado e não em repouso.</li>
          <li>Desconecte o cabo HDMI nas duas pontas e conecte de novo, ou experimente outra porta ou cabo.</li>
          <li>Reinicie a TV e o aparelho.</li>
        </ol>
      </Section>
    </div>
  )
}
