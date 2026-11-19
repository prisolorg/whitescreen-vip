import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Protetor de Tela DVD (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * logo do DVD quicando → easter egg do Google → TV, live e segundo monitor → logo e GIF → batida no canto.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function DvdScreensaverGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="bounce-heading" title="Protetor de Tela DVD: o logo do DVD quicando">
        <p className={p}>
          O protetor de tela DVD é o logo do DVD quicando que os aparelhos de DVD antigos mostravam quando ficavam parados. O logo se move
          na diagonal em velocidade constante e muda de cor sempre que encosta em uma borda, passando por 10 cores sem repetir a anterior.
        </p>
        <ul className={ul}>
          <li>Toque duas vezes na tela ou pressione F para abrir em tela cheia.</li>
          <li>Abra Mais para mudar a velocidade e o tamanho do logo.</li>
          <li>Os contadores registram cada quique e cada batida exata no canto.</li>
          <li>Use Pausar para congelar o logo e Continuar para seguir.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Easter egg do Protetor de Tela DVD no Google">
        <p className={p}>
          Pesquisar &quot;DVD screensaver&quot; no Google já transformou, em algumas épocas, o logo do Google em um logo quicando no estilo
          DVD na página de resultados. Easter eggs assim vêm e vão, e não rodam em tela cheia.
        </p>
        <p className={p}>
          Esta página oferece o mesmo logo quicando a qualquer hora, em qualquer navegador, com tela cheia, contador de cantos e controles
          de velocidade e tamanho.
        </p>
      </Section>

      <Section wide id="tv-heading" title="Protetor de Tela DVD na TV, em live ou no segundo monitor">
        <Table
          caption="Onde usar o protetor de tela DVD"
          head={['Uso', 'Como']}
          rows={[
            ['Smart TV', 'Abra esta página no navegador da TV ou espelhe uma aba do navegador e coloque em tela cheia'],
            ['Pausa na live ou tela de "já volto"', 'Adicione esta janela como captura de janela no OBS enquanto você se ausenta'],
            ['Segundo monitor', 'Arraste a janela para a tela parada e coloque em tela cheia'],
            ['Sala de espera ou escritório', 'Deixe rodando em uma tela livre para dar um toque de nostalgia'],
          ]}
        />
      </Section>

      <Section wide id="logo-heading" title="Logo e GIF do Protetor de Tela DVD">
        <p className={p}>
          O logo daqui é desenhado ao vivo no seu navegador: um &quot;DVD&quot; em negrito sobre um disco com &quot;VIDEO&quot; vazado,
          recolorido a cada quique. O logo oficial DVD Video é marca registrada da DVD Format/Logo Licensing Corporation, por isso não é
          oferecido para download em PNG.
        </p>
        <h3 className={h3}>Como fazer um GIF do protetor de tela DVD</h3>
        <p className={p}>
          Rode o protetor em tela cheia e grave a tela com um gravador nativo (Ferramenta de Captura do Windows, barra de Captura de Tela do
          Mac ou o gravador de tela do celular) e depois converta o vídeo em um GIF do DVD. Grave até uma batida no canto para ter o loop
          perfeito.
        </p>
      </Section>

      <Section wide id="corner-heading" title="O Protetor de Tela DVD vai bater no canto?">
        <p className={p}>
          Sim, mas a frequência depende do formato da tela, do tamanho do logo e de onde ele começa. Uma batida no canto só acontece quando o
          logo chega a uma lateral e ao topo ou à base no mesmo instante. Em alguns tamanhos de tela isso acontece com frequência; em outros
          pode demorar bastante. Mudar o tamanho do logo ou redimensionar a janela gera um novo trajeto.
        </p>
        <p className={p}>
          Isso vira um jogo perfeito: todo mundo chuta quando vai ser a próxima batida no canto, e o contador decide. Para outras telas de
          descanso, experimente o <Link href="/flip-clock-screensaver" className={link}>protetor relógio flip</Link> ou o{' '}
          <Link href="/matrix-screensaver" className={link}>protetor de tela Matrix</Link>.
        </p>
      </Section>
    </div>
  )
}
