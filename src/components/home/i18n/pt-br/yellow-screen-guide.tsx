import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela Amarela (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * luz quente / luz amarela → amarelo sólido → teste de subpixels.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function YellowScreenGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Tela Amarela como luz quente">
        <p className={p}>
          Uma tela amarela emite uma luz quente sem azul, o que a torna uma luz aconchegante para ler, fazer chamadas e usar à noite. Toque
          duas vezes na prévia para abrir em tela cheia e ligue Manter a tela ligada para a luz não apagar.
        </p>
        <Table
          caption="Configurações sugeridas para usar a tela amarela como luz"
          head={['Uso', 'Configurações', 'Dica']}
          rows={[
            ['Luz de leitura', 'Quente, Brilho 60–80%', 'Apoie um tablet ao lado do livro, virado para longe dos olhos'],
            ['Videochamadas', 'Neutra, Brilho 100%', 'Coloque a tela atrás da webcam para um brilho dourado'],
            ['Luz noturna', 'Quente, Brilho 30–50%', 'Menos brilho deixa a luz suave em um ambiente escuro'],
            ['Cor em fotos e vídeos', 'Neutra ou Quente', 'Use uma segunda tela como luz de destaque quente vinda de lado'],
          ]}
        />
        <h3 className={h3}>Lanterna amarela no celular</h3>
        <p className={p}>
          Abra esta página no celular, aumente o brilho e abra em tela cheia. A luz amarela quente é menos agressiva que uma lanterna branca
          forte no escuro, então ajuda para olhar as crianças ou achar o caminho à noite.
        </p>
      </Section>

      <Section wide id="solid-heading" title="Tela Amarela sólida (#FFFF00)">
        <p className={p}>
          Esta página mostra amarelo sólido: vermelho e verde na intensidade máxima, com o azul desligado (RGB 255, 255, 0). É uma tela
          amarela lisa, sem mais nada, e você pode mudar o tom com os controles abaixo da prévia.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Amarelo vivo:</strong> Neutra, Brilho 100%.
          </li>
          <li>
            <strong className="text-foreground">Amarelo dourado:</strong> escolha Quente.
          </li>
          <li>
            <strong className="text-foreground">Amarelo mostarda:</strong> diminua o controle de Brilho.
          </li>
        </ul>
        <p className={p}>
          Precisa de um arquivo? Baixar salva um PNG amarelo em 1080p, 2K, 4K ou tamanho de celular, ou em qualquer tamanho personalizado até 8K. Para tons pastel e
          amarelo-claro, veja a coleção de <Link href="/backgrounds/yellow-background" className={link}>fundo amarelo</Link>.
        </p>
      </Section>

      <Section wide id="check-heading" title="Teste com a Tela Amarela: subpixels vermelhos e verdes">
        <p className={p}>
          O amarelo acende os subpixels vermelhos e verdes juntos. Um ponto vermelho indica um subpixel verde morto, um ponto verde indica um
          vermelho morto, e um ponto branco indica um subpixel azul preso aceso. Descubra qual é com as telas{' '}
          <Link href="/red-screen" className={link}>vermelha</Link>, <Link href="/green-screen" className={link}>verde</Link> e{' '}
          <Link href="/blue-screen" className={link}>azul</Link>.
        </p>
        <p className={p}>
          Se a sua <Link href="/" className={link}>tela branca</Link> parece amarelada, veja o{' '}
          <Link href="/screen-problems/yellow-tint-on-screen" className={link}>
            guia de tela amarelada
          </Link>
          .
        </p>
      </Section>
    </div>
  )
}
