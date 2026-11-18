import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de Burn-in de Tela (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * teste de burn-in / tela queimada / tela marcada → burn-in ou retenção de imagem → como corrigir →
 * celular, LCD e monitor. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function ScreenBurnInGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Teste de Burn-in de Tela: como verificar sua tela">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Escolha Verificar burn-in e toque duas vezes para abrir em tela cheia. Aumente o brilho.</li>
          <li>Comece pelo Cinza 50%, o fundo em que a tela marcada aparece com mais clareza, e depois experimente o Cinza 20%.</li>
          <li>
            Passe para branco, vermelho, verde, azul e preto (uma <Link href="/" className={link}>tela branca</Link> inteira também ajuda). Ou
            ligue a Troca automática em Mais para mudar o fundo a cada 4 segundos.
          </li>
          <li>Procure formas fracas que não deveriam estar ali: uma barra de tarefas, um teclado, ícones de apps, um relógio ou o logo de um canal.</li>
        </ol>
        <p className={p}>
          O teste de burn-in de tela fica mais fácil quando você sabe onde olhar: o burn-in costuma corresponder ao que fica mais tempo na
          tela.
        </p>
      </Section>

      <Section wide id="results-heading" title="Resultados do Teste de Burn-in de Tela: burn-in ou retenção de imagem?">
        <p className={p}>
          O que é tela queimada? É uma imagem marcada na tela depois de mostrar a mesma imagem por muito tempo. O teste de burn-in de tela
          mostra os dois tipos, e o tempo diferencia um do outro:
        </p>
        <Table
          caption="Burn-in ou retenção de imagem"
          head={['', 'Retenção de imagem', 'Burn-in']}
          rows={[
            ['O que é', 'Uma imagem fantasma que fica por um tempo', 'Pixels desgastados de forma desigual, para sempre'],
            ['Quanto tempo', 'Some em minutos ou horas', 'Não some'],
            ['Comum em', 'Monitores LCD, TVs, notebooks', 'Celulares, TVs e monitores OLED e AMOLED'],
            ['A correção ajuda?', 'Muitas vezes, sim', 'Não; só consegue deixar menos visível'],
          ]}
        />
        <p className={p}>
          Saiba mais nos guias de <Link href="/screen-problems/screen-burn-in" className={link}>burn-in de tela</Link> e de{' '}
          <Link href="/screen-problems/image-retention" className={link}>retenção de imagem</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Correção do Teste de Burn-in de Tela: dá para consertar tela queimada?">
        <p className={p}>
          Escolha Correção de burn-in, toque em Iniciar correção e deixe a tela rodando. Em Mais você pode escolher o padrão e rodar por 1 a
          60 minutos (10 por padrão):
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Varredura branca:</strong> uma barra branca em movimento, sem piscar.</li>
          <li><strong className="text-foreground">Ciclo de cores:</strong> cores em tela cheia que mudam rápido.</li>
          <li><strong className="text-foreground">Ruído colorido:</strong> pixels coloridos aleatórios.</li>
        </ul>
        <p className={p}>
          O Ciclo de cores e o Ruído colorido piscam; use a Varredura branca se luz piscando incomoda você. Depois, faça o teste de burn-in de
          tela de novo. Se a imagem continuar ali depois de várias rodadas, provavelmente é burn-in permanente. Para evitar, diminua o
          brilho, esconda barras fixas e use o desligamento automático da tela.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Teste de Burn-in de Tela no celular, LCD ou monitor">
        <ul className={ul}>
          <li>
            Celular e iPhone: a tela queimada do celular aparece como o contorno do teclado ou da barra de status. Abra o teste de burn-in de
            tela no navegador e confira os fundos cinza com brilho máximo.
          </li>
          <li>Monitores LCD e notebooks: burn-in de verdade em LCD é raro; um teste de burn-in em LCD costuma encontrar retenção de imagem que a correção consegue limpar.</li>
          <li>
            Telas OLED e AMOLED se desgastam mais rápido. Para elas, use o{' '}
            <Link href="/oled-burn-in-test" className={link}>teste de burn-in OLED</Link>.
          </li>
        </ul>
        <p className={p}>
          Vê pontos em vez de formas? Experimente o <Link href="/dead-pixel-test" className={link}>teste de dead pixel</Link> ou o{' '}
          <Link href="/gray-screen" className={link}>teste de uniformidade</Link> para manchas e brilho desigual.
        </p>
      </Section>
    </div>
  )
}
