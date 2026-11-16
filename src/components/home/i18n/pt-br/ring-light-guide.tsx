import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ring Light Online (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * ring light online / virtual → efeito ring light para selfies → luz para maquiagem e espelho → cores.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function RingLightGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Ring Light Online: como usar">
        <p className={p}>
          Este ring light online desenha um anel de luz na sua tela, e assim um celular, tablet ou segundo monitor vira um ring light
          virtual. Coloque-o na sua frente, logo atrás da câmera.
        </p>
        <ul className={ul}>
          <li>Ajuste o Brilho e escolha uma cor: Branco, Rosa, Azul ou Roxo.</li>
          <li>Abra Mais para mudar o tamanho do anel e a espessura, a temperatura de cor do branco, Preencher o centro e o fundo.</li>
          <li>Toque duas vezes na tela ou pressione F para o anel ocupar a tela.</li>
        </ul>
      </Section>

      <Section wide id="effect-heading" title="Efeito Ring Light Online para selfies, fotos e vídeos">
        <p className={p}>
          O efeito ring light é aquele reflexo redondo que aparece nos olhos das pessoas, mais uma luz suave e uniforme com poucas sombras.
          Para conseguir:
        </p>
        <ul className={ul}>
          <li>Segure a tela bem na frente do rosto, com a câmera no meio do anel.</li>
          <li>Deixe Preencher o centro desligado para o formato do anel aparecer como reflexo nos olhos.</li>
          <li>Use um anel maior e mais grosso para selfies mais iluminadas.</li>
        </ul>
      </Section>

      <Section wide id="makeup-heading" title="Ring Light Online para maquiagem e espelho">
        <p className={p}>
          A luz branca no brilho máximo mostra as cores reais, o que a torna uma boa luz para maquiagem. Apoie a tela ao lado do espelho, na
          altura dos olhos, para o rosto ficar iluminado por igual de frente. Ela ilumina o rosto; não mostra a imagem da câmera como
          espelho.
        </p>
      </Section>

      <Section wide id="colors-heading" title="Cores do Ring Light Online: branco, rosa, azul e roxo">
        <Table
          caption="Cores do ring light e quando usar"
          head={['Cor', 'Melhor para']}
          rows={[
            ['Branco', 'Maquiagem, videochamadas e fotos com aparência natural; ajuste o tom em Mais'],
            ['Rosa', 'Selfies suaves e favoráveis'],
            ['Azul', 'Fotos e lives com clima frio'],
            ['Roxo', 'Iluminação de festa e criativa'],
          ]}
        />
        <p className={p}>
          Precisa de uma luz plana em vez de um anel? Experimente a <Link href="/zoom-lighting" className={link}>luz para videochamadas</Link>{' '}
          ou a simples <Link href="/" className={link}>tela branca</Link>.
        </p>
      </Section>
    </div>
  )
}
