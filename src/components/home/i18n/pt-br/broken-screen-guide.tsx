import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Efeito Tela Quebrada (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * tela trincada / tela rachada → computador, notebook, Chromebook e TV + celular → pegadinha → imagem e papel de parede →
 * dano real. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function BrokenScreenGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Estilos do Efeito Tela Quebrada: trincada, estilhaçada e LCD danificado">
        <p className={p}>
          Escolha um tipo de rachadura abaixo da prévia e toque ou clique em qualquer ponto para trincar o vidro ali. Cada toque adiciona
          mais uma rachadura, então a tela trincada se espalha como um vidro de verdade.
        </p>
        <Table
          caption="Estilos do efeito tela quebrada e como eles ficam"
          head={['Estilo', 'Parece']}
          rows={[
            ['Teia de aranha', 'A clássica tela trincada: rachaduras longas saindo de um único impacto'],
            ['Batida no canto', 'Um celular que caiu de quina'],
            ['Estilhaçada', 'Uma tela estilhaçada, com vidro esmigalhado por toda parte'],
            ['Trinca fina', 'Uma rachadura fina e realista, fácil de não notar de primeira'],
            ['LCD vazando', 'Manchas pretas e coloridas, como tinta, de um painel danificado'],
            ['Linhas mortas', 'Linhas verticais brilhantes, como uma tela rachada perdendo colunas'],
          ]}
        />
      </Section>

      <Section wide id="computer-heading" title="Efeito Tela Quebrada no computador, notebook ou Chromebook">
        <ul className={ul}>
          <li>Para simular uma tela de computador quebrada, abra esta página no notebook, PC, Chromebook ou smart TV que você quer usar na pegadinha.</li>
          <li>Escolha Tela desligada ou Papel de parede em Mais para que a tela trincada pareça a área de trabalho de verdade.</li>
          <li>Pressione F ou toque em Tela cheia e adicione algumas rachaduras onde a tela levaria uma pancada.</li>
          <li>Afaste-se e espere. O cursor some sozinho quando ninguém mexe no mouse.</li>
        </ul>
        <h3 className={h3}>Pegadinha de tela de celular quebrada no iPhone, Android ou iPad</h3>
        <p className={p}>
          Abra a página no navegador do celular, escolha Tela de bloqueio, toque em Tela cheia e trinque o vidro perto de um canto, onde as
          quedas de verdade costumam acertar. Ligue o Som de vidro quebrando para o efeito completo.
        </p>
      </Section>

      <Section wide id="prank-heading" title="Dicas de pegadinha com o Efeito Tela Quebrada">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Seja rápido.</strong> As melhores pegadinhas de tela quebrada falsa terminam com uma revelação
            rápida e uma risada.
          </li>
          <li>
            <strong className="text-foreground">Escolha bem a pessoa.</strong> Evite quem ficaria realmente chateado com um aparelho quebrado.
          </li>
          <li>
            <strong className="text-foreground">Revele logo.</strong> Pressione Esc ou feche a aba e a tela volta ao normal. Nada muda no
            aparelho.
          </li>
        </ul>
        <p className={p}>
          Quer outra? Experimente o <Link href="/hacked-screen" className={link}>simulador de tela hackeada</Link> ou a{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>tela azul da morte falsa</Link>.
        </p>
      </Section>

      <Section wide id="image-heading" title="Imagem e papel de parede do Efeito Tela Quebrada">
        <p className={p}>
          Prefere uma imagem de tela quebrada em vez do efeito ao vivo? Trinque o vidro do jeito que quiser, abra Mais e use Baixar PNG.
          Defina a imagem como tela de bloqueio do celular ou papel de parede do computador para uma pegadinha que dura o dia todo.
        </p>
      </Section>

      <Section wide id="real-heading" title="Tela quebrada de verdade, não o efeito? Como verificar o dano">
        <p className={p}>Não veio pela pegadinha? Estas verificações rápidas ajudam a diferenciar um dano real de um problema de software:</p>
        <Table
          caption="Sinais de uma tela realmente quebrada"
          head={['O que você vê', 'Verifique com']}
          rows={[
            ['Rachaduras que dá para sentir ou ver com a tela desligada', <Link key="w" href="/" className={link}>Tela branca</Link>],
            ['Manchas pretas ou tinta se espalhando', <Link key="d" href="/dead-pixel-test" className={link}>Teste de dead pixel</Link>],
            ['Partes da tela que ignoram o toque', <Link key="t" href="/touch-screen-test" className={link}>Teste de tela touch</Link>],
            ['Linhas, cintilação ou cores estranhas', <Link key="s" href="/screen-problems" className={link}>Guia de problemas de tela</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
