import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de Dead Pixel (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * teste de dead pixel / pixel morto / teste de pixel → tipos de defeito → celular, notebook, monitor e TV → conserto.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function DeadPixelGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Teste de Dead Pixel: como verificar sua tela">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Limpe a tela para não confundir poeira com um pixel.</li>
          <li>Toque duas vezes ou pressione F para abrir em tela cheia, para que todos os pixels sejam testados.</li>
          <li>Toque na tela ou use as setas para passar por 9 cores: preto, branco, vermelho, verde, azul, ciano, magenta, amarelo e cinza.</li>
          <li>Observe cada cor com atenção, de ponta a ponta. Ou toque em Ciclo automático para trocar de cor a cada poucos segundos.</li>
        </ol>
        <p className={p}>
          Funciona como teste de pixel e teste de LCD em qualquer monitor, notebook, celular, tablet ou TV com navegador. Para olhar uma cor
          por mais tempo, abra a <Link href="/black-screen" className={link}>tela preta</Link> ou a{' '}
          <Link href="/" className={link}>tela branca</Link>.
        </p>
      </Section>

      <Section wide id="types-heading" title="Resultado do Teste de Dead Pixel: morto, preso ou quente?">
        <p className={p}>O que é um dead pixel? É um pixel morto, que não acende mais. Veja como diferenciá-lo dos outros:</p>
        <Table
          caption="Como um defeito de pixel aparece"
          head={['O que você vê', 'Mais visível em', 'O que é']}
          rows={[
            ['Um ponto preto que nunca acende', 'Branco e cores claras', 'Pixel morto (dead pixel)'],
            ['Um ponto preso em vermelho, verde ou azul', 'Preto e outras cores', 'Pixel preso (stuck pixel)'],
            ['Um ponto que está sempre branco', 'Preto', 'Pixel quente (hot pixel)'],
            ['Pontinhos que se mexem quando você passa o pano', 'Qualquer cor', 'Poeira, não um pixel'],
          ]}
        />
        <p className={p}>
          Saiba mais nos guias de <Link href="/screen-problems/stuck-pixel" className={link}>pixel preso</Link> e de{' '}
          <Link href="/screen-problems/hot-pixel" className={link}>pixel quente</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Teste de Dead Pixel no celular, notebook, monitor ou TV">
        <ul className={ul}>
          <li>Celular e iPhone: aumente o brilho, toque no ícone de tela cheia e vá tocando para passar pelas cores.</li>
          <li>Notebook e monitor: coloque a tela na resolução nativa, para que um pixel apareça como um pixel.</li>
          <li>TV: abra a página no navegador da TV, ou espelhe uma aba do notebook, e confira de perto.</li>
          <li>Aparelho novo? Faça o teste de dead pixel logo, enquanto ainda dá para devolver.</li>
        </ul>
      </Section>

      <Section wide id="fix-heading" title="Depois do Teste de Dead Pixel: dá para consertar?">
        <p className={p}>
          Procurando como consertar um dead pixel? Um pixel realmente morto quase nunca volta, porque não recebe mais energia. Um pixel preso
          às vezes volta: cores piscando rápido sobre ele por 10 a 20 minutos podem destravá-lo. O{' '}
          <Link href="/screen-burn-in-test" className={link}>teste de burn-in de tela</Link> tem uma correção com ciclo de cores que você pode
          usar para isso; pule essa parte se luz piscando incomoda você.
        </p>
        <p className={p}>
          Se a tela estiver na garantia, confira a política de dead pixels do fabricante. Para uma checagem completa de cores e uniformidade
          também, faça o <Link href="/monitor-test" className={link}>teste de monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
