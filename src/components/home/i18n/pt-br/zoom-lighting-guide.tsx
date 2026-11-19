import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Luz para Videochamadas (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * luz para Zoom / iluminação na tela → iluminação para reuniões, chamadas e webcam → ring light.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function ZoomLightingGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Luz para Videochamadas: transforme sua tela em uma luz">
        <p className={p}>
          Esta ferramenta transforma uma tela livre em uma luz suave e uniforme para o seu rosto. Funciona melhor em um segundo monitor,
          tablet ou celular posicionado atrás da webcam, para a luz bater em você de frente.
        </p>
        <ul className={ul}>
          <li>Coloque o Brilho em 100% para uma luz branca forte ou diminua para um brilho mais suave.</li>
          <li>Escolha Quente (3000 K), Neutra (4500 K) ou Luz do dia (6500 K).</li>
          <li>Abra Mais para uma temperatura de cor exata, uma cor da luz personalizada ou o modo Moldura.</li>
          <li>Toque duas vezes na tela ou pressione F para a luz ocupar a tela inteira.</li>
        </ul>
      </Section>

      <Section wide id="setup-heading" title="Como montar a Luz para Videochamadas em reuniões no Zoom">
        <Table
          caption="Configurações de luz para videochamadas"
          head={['Situação', 'Experimente']}
          rows={[
            ['Reunião de dia perto de uma janela', 'Luz do dia, para a tela combinar com a luz do sol'],
            ['Videochamada à noite', 'Quente, com 60–80% de brilho'],
            ['Escritório com luz no teto', 'Neutra, com a tela de luz logo acima da webcam'],
            ['Sombra em um lado do rosto', 'Adicione uma segunda tela de luz desse lado'],
          ]}
        />
        <p className={p}>
          A melhor luz para videochamadas vem da frente: deixe janelas claras atrás da câmera, não atrás de você, e erga a luz até mais ou
          menos a altura dos olhos. O modo Moldura ilumina só as bordas da tela, para uma luz de webcam mais suave.
        </p>
      </Section>

      <Section wide id="ring-heading" title="Luz para Videochamadas ou ring light?">
        <p className={p}>
          A luz para videochamadas ilumina o rosto com uma luz plana e uniforme. Para o reflexo redondo nos olhos que os criadores adoram,
          experimente o <Link href="/ring-light" className={link}>ring light online</Link>. Para uma luz branca simples, a{' '}
          <Link href="/" className={link}>tela branca</Link> também serve.
        </p>
      </Section>
    </div>
  )
}
