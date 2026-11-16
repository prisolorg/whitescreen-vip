import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de Monitor (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * teste de tela / testar monitor / teste de monitor online → padrões de teste → teste de cor e calibração →
 * dead pixel, Hz e resolução. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function MonitorTestGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Padrões do Teste de Monitor e o que cada um verifica">
        <p className={p}>
          Este teste de monitor e teste de tela tem sete padrões em tela cheia, e cada imagem de teste verifica algo diferente. Para um campo
          liso e simples para achar poeira e dead pixels, abra a <Link href="/" className={link}>tela branca</Link>:
        </p>
        <Table
          caption="Padrões do teste de monitor"
          head={['Padrão', 'O que verifica', 'Uma tela boa mostra']}
          rows={[
            ['Degradê de cinza', 'Tons suaves, faixas de cor (banding)', 'Uma transição suave, sem degraus nem tom de cor'],
            ['Degraus de cinza', 'Níveis de preto e branco', 'Cada degrau visivelmente diferente, incluindo o mais escuro e o mais claro'],
            ['Grade', 'Geometria e escala', 'Linhas retas e igualmente espaçadas de ponta a ponta'],
            ['Gama 2.2', 'Configuração de gama', 'O bloco central se mistura às listras de longe'],
            ['Linhas finas', 'Nitidez, resolução nativa', 'Linhas de 1 pixel nítidas, sem tremulação nem moiré'],
            ['Xadrez', 'Contraste e bordas limpas', 'Quadrados nítidos, sem brilho em volta nem borrões'],
            ['Barras de cor', 'Reprodução de cores', 'Oito cores saturadas e bem separadas'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Como fazer o Teste de Monitor online">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Coloque a tela na resolução nativa e o zoom do navegador em 100%.</li>
          <li>Toque duas vezes no teste para abrir em tela cheia, sem mais nada na tela.</li>
          <li>Toque na tela, use as setas ou escolha um padrão pelo nome. O Ciclo automático passa por eles para você.</li>
          <li>Veja cada padrão de frente e depois de lado, para notar mudanças no ângulo de visão.</li>
        </ol>
        <p className={p}>
          Este teste de monitor roda em qualquer navegador, então serve como verificação de tela, teste de tela online, teste de tela de
          notebook, teste de monitor para um PC novo ou usado ou uma checagem rápida da tela de uma TV.
        </p>
      </Section>

      <Section wide id="color-heading" title="Teste de Monitor para cores e calibração">
        <p className={p}>
          No teste de monitor, as barras de cor e o padrão de gama mostram a olho nu problemas evidentes de cor e de gama. Para um teste de
          cor completo com cores sólidas e rampas RGB, use o <Link href="/screen-color-test" className={link}>teste de cores do monitor</Link>.
        </p>
        <p className={p}>
          A precisão real de cor exige um colorímetro; nenhum site consegue medir isso. Para uma calibração básica de cores do monitor, use a
          ferramenta do próprio sistema:
        </p>
        <ul className={ul}>
          <li>Windows: pesquise &ldquo;Calibrar a cor da tela&rdquo; no menu Iniciar.</li>
          <li>Mac: Ajustes do Sistema → Telas → Perfil de Cor → Personalizar → Calibrar.</li>
        </ul>
      </Section>

      <Section wide id="more-heading" title="Teste de Monitor para dead pixels, Hz e outros defeitos">
        <Table
          caption="Qual teste fazer em seguida"
          head={['Se você quer verificar', 'Faça o']}
          rows={[
            ['Pixels mortos ou presos (teste de LCD)', <Link key="dp" href="/dead-pixel-test" className={link}>Teste de dead pixel</Link>],
            ['Taxa de atualização (Hz)', <Link key="hz" href="/screen-refresh-rate-test" className={link}>Teste de taxa de atualização</Link>],
            ['Tempo de resposta e rastros', <Link key="gh" href="/monitor-ghosting-test" className={link}>Teste de ghosting do monitor</Link>],
            ['Vazamento de luz e uniformidade do preto', <Link key="un" href="/screen-uniformity-test" className={link}>Teste de uniformidade</Link>],
            ['Imagens fantasma que ficam na tela', <Link key="bi" href="/screen-burn-in-test" className={link}>Teste de burn-in de tela</Link>],
            ['A resolução da sua tela', <Link key="rs" href="/screen-resolution-test" className={link}>Teste de resolução</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
