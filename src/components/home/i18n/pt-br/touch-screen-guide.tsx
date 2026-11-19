import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Teste de Tela Touch (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * teste de touch / testar tela touch → toque fantasma e multitoque → teste de tela do celular, iPhone, Android e
 * Samsung → código de teste. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function TouchScreenGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="modes-heading" title="Teste de Tela Touch: três formas de verificar">
        <Table
          caption="Modos do teste de tela touch"
          head={['Modo', 'O que verifica', 'Como']}
          rows={[
            ['Grade de zonas mortas', 'Pontos que ignoram o toque', 'Deslize o dedo sobre todos os quadrados até Coberto mostrar 100%; os quadrados que continuam escuros são zonas mortas'],
            ['Desenhar', 'Rastreamento suave e sem falhas', 'Desenhe linhas lentas pela tela; interrupções ou saltos mostram áreas fracas'],
            ['Multitoque', 'Quantos dedos ela reconhece', 'Encoste vários dedos; Toques e Máx. mostram a contagem'],
          ]}
        />
        <p className={p}>Toque em Limpar para recomeçar e pressione F ou toque em Tela cheia para o teste de touch cobrir também as bordas da tela.</p>
      </Section>

      <Section wide id="ghost-heading" title="Teste de Tela Touch para toque fantasma e multitoque">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Toque fantasma:</strong> abra Desenhar, deixe o celular parado e não toque nele. Linhas ou
            pontos que aparecem sozinhos são toques fantasma.
          </li>
          <li>
            <strong className="text-foreground">Multitoque:</strong> a maioria dos celulares reconhece de 5 a 10 dedos ao mesmo tempo. O selo
            mostra quantos pontos de toque o seu aparelho informa.
          </li>
          <li>
            <strong className="text-foreground">Sensibilidade:</strong> deslizes leves e rápidos em Desenhar mostram se os toques suaves são
            registrados.
          </li>
        </ul>
      </Section>

      <Section wide id="phone-heading" title="Teste de Tela Touch no iPhone, Android e Samsung">
        <p className={p}>
          O teste de tela touch roda no Safari, no Chrome ou em qualquer navegador de celular, sem nada para instalar. Tire uma capinha grossa
          ou película se os toques parecerem falhar perto das bordas e teste de novo.
        </p>
        <p className={p}>
          Em muitos celulares Samsung Galaxy você também pode discar *#0*#, um código de teste de touch que abre um menu de testes
          embutido. Códigos assim dependem da marca e do modelo, e alguns celulares não têm nenhum.
        </p>
      </Section>

      <Section wide id="next-heading" title="Depois do Teste de Tela Touch">
        <p className={p}>
          Se o toque está bom mas a imagem não, verifique a própria tela: faça o{' '}
          <Link href="/dead-pixel-test" className={link}>teste de dead pixel</Link> para pontos ou o{' '}
          <Link href="/monitor-test" className={link}>teste de monitor</Link> para cor e uniformidade.
        </p>
      </Section>
    </div>
  )
}
