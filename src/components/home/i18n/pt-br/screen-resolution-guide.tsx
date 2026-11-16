import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de Resolução (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * qual é a resolução da minha tela → como ver a resolução no Windows e no Mac → resolução do celular →
 * resoluções comuns, 4K. Os nomes das leituras são os mesmos da interface em português da ferramenta.
 */
export function ScreenResolutionGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="read-heading" title="Teste de Resolução: o que cada número significa">
        <p className={p}>
          Qual é a resolução da minha tela? Esta página responde sozinha, sem botão para apertar. Veja o que cada leitura mostra:
        </p>
        <Table
          caption="Leituras do teste de resolução"
          head={['Leitura', 'O que significa']}
          rows={[
            ['Resolução da tela', 'O tamanho da tela em pixels CSS, depois da escala da tela'],
            ['Pixels físicos', 'A contagem real de pixels: resolução da tela × proporção de pixels. Normalmente é a resolução nativa do monitor'],
            ['Área visível do navegador', 'O espaço dentro da janela do navegador'],
            ['Área disponível', 'A tela menos a barra de tarefas ou o Dock'],
            ['Proporção de pixels', 'Quantos pixels físicos formam um pixel CSS (1 = sem escala)'],
            ['Profundidade de cor', 'Bits por pixel que o navegador informa, geralmente 24 bits'],
          ]}
        />
        <p className={p}>
          Os valores se atualizam na hora quando você redimensiona a janela ou gira o celular. Mantenha o zoom do navegador em 100%, porque o
          zoom muda a proporção de pixels e a contagem de pixels físicos.
        </p>
      </Section>

      <Section wide id="check-heading" title="Teste de Resolução ou configurações da tela?">
        <p className={p}>
          O teste de resolução lê o que o seu navegador vê. Para ver a resolução do monitor nas configurações do sistema, ou mudá-la:
        </p>
        <Table
          caption="Onde fica a configuração de resolução da tela"
          head={['Aparelho', 'Onde procurar']}
          rows={[
            ['Windows 11 / 10', 'Configurações → Sistema → Tela → Resolução da tela (a marcada como Recomendável é a nativa)'],
            ['Mac', 'Ajustes do Sistema → Telas (uma opção em escala pode fazer os Pixels físicos diferirem do tamanho nativo do painel)'],
            ['iPhone / iPad', 'Definida pelo modelo; use a leitura de pixels físicos acima'],
            ['Android', 'Configurações → Tela → Resolução da tela (só em alguns celulares)'],
          ]}
        />
        <p className={p}>
          Se o teste de resolução mostrar menos pixels físicos do que a especificação do monitor, a tela não está na resolução nativa e o texto
          pode parecer borrado.
        </p>
      </Section>

      <Section wide id="phone-heading" title="Teste de Resolução no celular: qual é a resolução da minha tela?">
        <p className={p}>
          Celulares informam uma resolução pequena, como 390 × 844, porque ampliam tudo para deixar o texto nítido. A resolução real do seu
          celular é a leitura de Pixels físicos: por exemplo, 390 × 844 com proporção de pixels 3 dá 1170 × 2532.
        </p>
      </Section>

      <Section wide id="common-heading" title="Resoluções comuns no Teste de Resolução: de HD a 4K">
        <Table
          caption="Resoluções de tela comuns"
          head={['Nome', 'Resolução', 'Telas típicas']}
          rows={[
            ['HD', '1280 × 720', 'Notebooks e TVs mais antigos'],
            ['Full HD (1080p)', '1920 × 1080', 'A maioria dos monitores e notebooks'],
            ['QHD (1440p)', '2560 × 1440', 'Monitores gamer e de escritório'],
            ['4K UHD', '3840 × 2160', 'Monitores e TVs 4K'],
          ]}
        />
        <ul className={ul}>
          <li>Meu monitor é 4K? É, se Pixels físicos mostrar 3840 × 2160 com o zoom do navegador em 100%.</li>
          <li>Um navegador não consegue ler o tamanho da tela em polegadas; esta página mostra o tamanho só em pixels.</li>
          <li>
            Confira a nitidez na sua resolução com as linhas finas do <Link href="/monitor-test" className={link}>teste de monitor</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
