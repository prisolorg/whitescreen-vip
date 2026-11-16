import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de Cores do Monitor (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * teste de cor / teste de cores → tela colorida / cor da tela → teste RGB, monitor e TV → precisão de cor e
 * descoloração. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function ScreenColorGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Padrões do Teste de Cores do Monitor e o que observar">
        <p className={p}>Este teste de cores tem sete padrões em tela cheia, e cada imagem de teste de cor verifica algo diferente:</p>
        <Table
          caption="Padrões do teste de cores do monitor"
          head={['Padrão', 'O que verifica', 'Uma tela boa mostra']}
          rows={[
            ['Barras de cor', 'Reprodução básica de cores', 'Oito cores nítidas e separadas, sem tom puxado'],
            ['Rampas RGB', 'Degradês e estouro', 'Transições suaves a partir do preto, sem degraus; a ponta clara não fica chapada antes da hora'],
            ['Espectro de matizes', 'Todos os matizes intermediários', 'Um arco-íris suave, sem faixas nem saltos'],
            ['Degraus de saturação', 'Intensidade da cor', 'Dez degraus do cinza ao vermelho total, cada um diferente'],
            ['Vermelho, Verde, Azul', 'Cada cor de subpixel isolada', 'Uma cor uniforme de ponta a ponta, sem pontos escuros'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Como fazer o Teste de Cores do Monitor">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Desligue o modo noturno, os filtros de luz azul e o brilho automático, para a cor da tela não ficar alterada.</li>
          <li>Toque duas vezes no teste de cores para abrir em tela cheia, deixando só a tela colorida visível.</li>
          <li>Toque na tela, use as setas ou escolha um padrão pelo nome. O Ciclo automático passa por eles para você.</li>
          <li>Olhe de frente e depois de lado: em alguns painéis, a cor muda conforme o ângulo.</li>
        </ol>
        <p className={p}>
          Precisa de uma tela de uma cor só? Abra a <Link href="/" className={link}>tela branca</Link>, a{' '}
          <Link href="/red-screen" className={link}>tela vermelha</Link> ou qualquer página de{' '}
          <Link href="/color-screens" className={link}>telas coloridas</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Teste de Cores do Monitor, da TV ou do celular">
        <ul className={ul}>
          <li>Monitor: use as Rampas RGB como teste de cor do monitor e depois ajuste a temperatura de cor ou o modo de imagem no menu dele.</li>
          <li>TV: abra o teste de cores no navegador da TV ou espelhe uma aba do notebook. Os modos Cinema ou Filmmaker costumam mostrar as cores mais fiéis.</li>
          <li>Celular: aumente o brilho e compare os modos de cor Natural e Vívido, se o seu celular tiver.</li>
          <li>Os fundos Vermelho, Verde e Azul também servem como teste RGB para subpixels presos.</li>
        </ul>
      </Section>

      <Section wide id="accuracy-heading" title="Limites do Teste de Cores do Monitor: precisão e descoloração">
        <p className={p}>
          Um teste de cores é uma checagem a olho nu: ele encontra tons puxados, faixas e cores mortas, mas a precisão real de cor exige um
          colorímetro; nenhum site consegue medir isso. Escolhendo cores de texto para um site? Use o{' '}
          <Link href="/contrast-checker" className={link}>verificador de contraste de cores</Link>.
        </p>
        <Table
          caption="O que um problema de cor pode significar"
          head={['O que você vê', 'Experimente']}
          rows={[
            ['Tom amarelado ou azulado em tudo', <Link key="y" href="/screen-problems/yellow-tint-on-screen" className={link}>Guia de tela amarelada</Link>],
            ['Degraus ou faixas nas rampas', <Link key="b" href="/screen-problems/color-banding" className={link}>Guia de banding de cor</Link>],
            ['Manchas ou áreas desiguais (descoloração da tela)', <Link key="u" href="/screen-uniformity-test" className={link}>Teste de uniformidade</Link>],
            ['Logos apagados ou imagens fantasma', <Link key="bi" href="/screen-burn-in-test" className={link}>Teste de burn-in de tela</Link>],
            ['Nitidez, gama e mais (checagem completa da tela)', <Link key="m" href="/monitor-test" className={link}>Teste de monitor</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
