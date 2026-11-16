import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de Cinza OLED (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * teste OLED / teste de escala de cinza → resultados (banding, mura, black crush) → burn-in → tela cinza.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function OledGrayGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Teste de Cinza OLED: como verificar os tons quase pretos">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Escureça o ambiente e coloque a tela em cerca de 50% de brilho.</li>
          <li>Toque duas vezes para abrir em tela cheia, para o teste OLED cobrir o painel inteiro.</li>
          <li>Passe pelos níveis de cinza escuro: 1%, 2%, 3%, 5%, 10%, 15% e 20%. Toque na tela ou use as setas.</li>
          <li>Termine na Rampa quase preta, que mostra de 0% a 20% de cinza lado a lado em 12 degraus.</li>
        </ol>
        <p className={p}>
          Cada imagem do teste de cinza OLED deve parecer lisa e uniforme, e cada degrau da rampa deve ser só um pouco diferente do próximo.
          Este teste OLED funciona como teste de escala de cinza em qualquer celular, TV, notebook ou monitor.
        </p>
      </Section>

      <Section wide id="results-heading" title="Resultados do Teste de Cinza OLED: o que observar">
        <Table
          caption="Defeitos comuns de tons quase pretos em OLED"
          head={['O que você vê', 'O que é', 'É comum?']}
          rows={[
            ['Manchas irregulares e nubladas no cinza escuro', 'Mura (painel desigual)', 'Um pouco é normal em 1–5%'],
            ['Faixas ou tons de cor ao longo da rampa', 'Banding perto do preto', 'Varia com o painel e o modo de imagem'],
            ['Os primeiros degraus da rampa parecem todos pretos', 'Black crush', 'Confira o brilho e o modo de imagem'],
            ['Um tom verde ou magenta no cinza escuro', 'Tom puxado perto do preto', 'Varia com o painel'],
          ]}
        />
        <p className={p}>
          Avalie da sua distância normal de uso. No teste de cinza OLED, um mura fraco no fundo de 1% é comum; o que importa mais são os
          problemas que você vê em filmes ou jogos de verdade.
        </p>
      </Section>

      <Section wide id="burn-heading" title="Teste de Cinza OLED ou teste de burn-in?">
        <p className={p}>
          Este teste de cinza OLED verifica tons escuros, não burn-in. O burn-in aparece melhor em fundos mais claros, como cinza 50%,
          vermelho e azul:
        </p>
        <ul className={ul}>
          <li>
            Para verificar burn-in em OLED, use o <Link href="/oled-burn-in-test" className={link}>teste de burn-in OLED</Link>.
          </li>
          <li>
            Para verificar, e tentar limpar, a retenção de imagem em qualquer tela, use o{' '}
            <Link href="/screen-burn-in-test" className={link}>teste de burn-in de tela</Link>.
          </li>
        </ul>
      </Section>

      <Section wide id="gray-heading" title="Teste de Cinza OLED ou uma tela cinza simples?">
        <p className={p}>
          Precisa de uma tela cinza sólida em vez de níveis de teste? Abra a <Link href="/gray-screen" className={link}>tela cinza</Link> ou a{' '}
          <Link href="/black-screen" className={link}>tela preta</Link> para ver o preto real do OLED. Para uma checagem completa de cor,
          nitidez e gama, faça o <Link href="/monitor-test" className={link}>teste de monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
