import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de Ghosting do Monitor (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * teste de ghosting → ghosting no monitor / o que é ghosting → como corrigir → ghosting em notebook, TV e outras telas.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function MonitorGhostingGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Teste de Ghosting do Monitor: como fazer">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Coloque o monitor na taxa de atualização mais alta e toque duas vezes no teste de ghosting para abrir em tela cheia.</li>
          <li>Observe o alvo atravessar as faixas escura, cinza médio e clara. Acompanhe-o com os olhos, sem fixar um só ponto.</li>
          <li>Aumente a Velocidade (240 a 2.400 px/s) até aparecerem rastros e toque em Pausar para ver um quadro congelado.</li>
          <li>Mude a configuração de overdrive do monitor e faça o teste de novo para comparar.</li>
        </ol>
        <p className={p}>
          No teste de ghosting do monitor, a Grade de referência vertical (em Mais) ajuda a avaliar o tamanho de um rastro. Cada faixa usa um
          fundo diferente porque o ghosting costuma ser pior no escuro ou no cinza médio.
        </p>
      </Section>

      <Section wide id="results-heading" title="Resultados do Teste de Ghosting do Monitor: o que os rastros significam">
        <p className={p}>
          O que é ghosting no monitor? Pixels que mudam de cor devagar demais deixam uma cópia fraca atrás de tudo o que se move. Veja como
          ler o teste de ghosting do monitor:
        </p>
        <Table
          caption="Ghosting, smearing e overshoot"
          head={['O que você vê atrás do alvo', 'O que é', 'Causa comum']}
          rows={[
            ['Uma cópia ou rastro fraco e mais escuro', 'Ghosting', 'Tempo de resposta lento, overdrive desligado ou baixo demais'],
            ['Uma mancha escura, pior na faixa escura', 'Black smearing', 'Painéis VA, transições lentas do escuro para o claro'],
            ['Um halo claro ou invertido', 'Overshoot (ghosting inverso)', 'Overdrive alto demais'],
            ['Uma borda suave e borrada, sem cópia', 'Motion blur', 'Normal em 60 Hz; menor em taxas de atualização mais altas'],
          ]}
        />
      </Section>

      <Section wide id="fix-heading" title="Como corrigir o que o Teste de Ghosting do Monitor mostra">
        <p className={p}>Um monitor com ghosting raramente precisa de conserto; as configurações certas costumam encurtar os rastros.</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Overdrive:</strong> também chamado de Response Time, Trace Free ou OD no menu do monitor.
            Escolha a opção com o rastro mais curto e sem halo claro, geralmente a do meio.
          </li>
          <li>
            <strong className="text-foreground">Taxa de atualização:</strong> confira se está no máximo com o{' '}
            <Link href="/screen-refresh-rate-test" className={link}>teste de taxa de atualização</Link>. Mais Hz significa menos borrão.
          </li>
          <li>
            <strong className="text-foreground">Cabo e porta:</strong> use DisplayPort ou um cabo que suporte a taxa de atualização máxima do
            monitor.
          </li>
          <li>
            <strong className="text-foreground">Modos de imagem:</strong> processamentos extras, como redução de ruído, podem criar rastros;
            desligue-os.
          </li>
        </ul>
      </Section>

      <Section wide id="screen-heading" title="Teste de Ghosting do Monitor no notebook, na TV ou em outra tela">
        <p className={p}>
          O ghosting é igual em qualquer tela LCD ou OLED: abra o teste de ghosting do monitor no notebook, TV ou tablet que você quer
          verificar e rode em tela cheia. As TVs costumam ter um modo jogo que reduz o processamento e diminui o ghosting.
        </p>
        <p className={p}>
          &ldquo;Tela fantasma&rdquo; também pode significar uma imagem fraca que fica na tela quando nada se move. Isso é retenção de imagem
          ou burn-in, não ghosting de movimento; verifique com o{' '}
          <Link href="/screen-burn-in-test" className={link}>teste de burn-in de tela</Link>. Mais detalhes no{' '}
          <Link href="/screen-problems/ghosting" className={link}>guia de ghosting</Link>.
        </p>
      </Section>
    </div>
  )
}
