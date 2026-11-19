import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de Taxa de Atualização (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * teste de Hz / taxa de atualização do monitor → como ver a taxa no Windows, Mac e celular → 60, 120 e 144 Hz →
 * teste de FPS. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function RefreshRateGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Teste de Taxa de Atualização: como funciona">
        <p className={p}>
          Os navegadores desenham um quadro novo a cada atualização da tela, então medir esses quadros revela a sua taxa de atualização. Este
          teste de Hz começa sozinho e mostra:
        </p>
        <ul className={ul}>
          <li>Sua taxa de atualização em Hz, arredondada para a taxa comum mais próxima (60, 120, 144 Hz e assim por diante).</li>
          <li>Quanto tempo cada quadro leva em milissegundos e a porcentagem de quadros atrasados.</li>
          <li>A menor e a maior taxa vistas, além de um bloco em movimento que fica mais fluido com mais Hz.</li>
        </ul>
        <p className={p}>
          Ele serve para ver a taxa de atualização de monitores, notebooks e celulares. Toque em Medir de novo depois de mudar uma
          configuração e toque duas vezes para abrir em tela cheia na tela que você quer testar.
        </p>
      </Section>

      <Section wide id="check-heading" title="Teste de Taxa de Atualização ou configurações da tela?">
        <p className={p}>O teste mostra a taxa em que sua tela está rodando agora. Para ver ou mudar a configuração de Hz do monitor:</p>
        <Table
          caption="Onde fica a configuração da taxa de atualização"
          head={['Aparelho', 'Onde procurar']}
          rows={[
            ['Windows 11 / 10', 'Configurações → Sistema → Tela → Configurações avançadas de tela → Escolher uma taxa de atualização'],
            ['Mac', 'Ajustes do Sistema → Telas → Taxa de Atualização'],
            ['iPhone / iPad', 'Definida pelo modelo; modelos com ProMotion chegam a 120 Hz automaticamente'],
            ['Android', 'Configurações → Tela → Taxa de atualização da tela (ou Suavidade de movimento)'],
          ]}
        />
        <h3 className={h3}>Por que o resultado pode ser menor que o esperado</h3>
        <ul className={ul}>
          <li>A tela está configurada em 60 Hz, ou o cabo ou a porta não suporta a taxa mais alta.</li>
          <li>Um notebook na bateria ou um celular no modo de economia de energia reduz a taxa para poupar bateria.</li>
          <li>Abas ou programas pesados fazem o navegador pular quadros. Feche-os e meça de novo.</li>
        </ul>
      </Section>

      <Section wide id="rates-heading" title="Resultados do Teste de Taxa de Atualização: 60, 120 e 144 Hz">
        <Table
          caption="Taxas de atualização comuns"
          head={['Taxa', 'Tempo por quadro', 'Telas típicas']}
          rows={[
            ['60 Hz', '16,7 ms', 'A maioria dos monitores de escritório, notebooks e TVs mais antigos'],
            ['90 Hz', '11,1 ms', 'Muitos celulares intermediários'],
            ['120 Hz', '8,3 ms', 'Celulares gamer, iPhone Pro, TVs e notebooks mais novos'],
            ['144 Hz', '6,9 ms', 'Monitores gamer'],
            ['240 Hz', '4,2 ms', 'Monitores para e-sports'],
          ]}
        />
      </Section>

      <Section wide id="fps-heading" title="Teste de Taxa de Atualização ou teste de FPS?">
        <p className={p}>
          A taxa de atualização (Hz) é quantas vezes a tela redesenha a imagem; a taxa de quadros (FPS) é quantos quadros o navegador ou o
          jogo produz. Para checar movimento e FPS, faça o <Link href="/frame-rate-test" className={link}>teste de FPS</Link> e, para borrões
          e rastros, experimente o <Link href="/monitor-ghosting-test" className={link}>teste de ghosting do monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
