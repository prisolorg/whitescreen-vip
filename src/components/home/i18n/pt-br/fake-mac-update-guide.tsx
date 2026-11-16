import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Atualização Falsa Mac (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * tela de atualização do Mac / da Apple → pegadinha → iPad, iPhone e outros sistemas.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function FakeMacUpdateGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Atualização Falsa Mac: como a tela funciona">
        <p className={p}>
          A tela de atualização falsa do Mac recria a tela de instalação do macOS: o logo acima de uma barra de progresso fina e uma linha
          como &quot;Faltam cerca de 30 minutos&quot;. Quando a barra enche, a tela escurece, mostra o logo como uma tela de carregamento
          real da Apple e a atualização recomeça.
        </p>
        <ul className={ul}>
          <li>Escolha uma tela preta ou branca para combinar com o Mac.</li>
          <li>Abra Mais para definir quanto tempo a atualização leva (5 a 120 minutos) e onde a barra começa.</li>
          <li>Desligue Tempo restante para uma barra que não entrega nada.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Pegadinha com a Atualização Falsa Mac: como montar">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Abra esta página no MacBook ou iMac que você quer usar na pegadinha.</li>
          <li>Defina uma duração longa, como 120 minutos, para a barra quase não andar.</li>
          <li>Pressione F ou toque em Tela cheia para esconder a barra de menus e o Dock.</li>
          <li>Saia de perto e depois pressione Esc para encerrar a brincadeira. Nada muda no Mac.</li>
        </ol>
      </Section>

      <Section wide id="devices-heading" title="Atualização Falsa Mac no iPad, iPhone ou outro computador">
        <p className={p}>
          Funciona em qualquer navegador, então a mesma tela de atualização da Apple também serve como tela de atualização falsa do iPad
          ou no iPhone pelo Safari. Toque em Tela cheia e ela ocupa a tela.
        </p>
        <p className={p}>
          A pegadinha é em outro computador? Use a <Link href="/fake-windows-10-update" className={link}>atualização falsa Windows 10</Link>,
          a <Link href="/fake-chrome-os-update" className={link}>atualização falsa Chrome OS</Link> para Chromebooks ou a{' '}
          <Link href="/fake-ubuntu-update" className={link}>atualização falsa Ubuntu</Link>. Para celulares, experimente o{' '}
          <Link href="/broken-screen" className={link}>efeito tela quebrada</Link>.
        </p>
      </Section>
    </div>
  )
}
