import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela Vermelha (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * luz vermelha para a noite e para dormir → fotos, reels e selfies → tons: vermelho vivo, escuro e claro →
 * teste de subpixels. Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function RedScreenGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="night-heading" title="Luz de Tela Vermelha para a noite e para dormir">
        <p className={p}>
          Uma luz vermelha fraca é a que menos atrapalha a visão noturna. As células dos olhos que trabalham com pouca luz quase não reagem ao
          vermelho profundo, e por isso astrônomos e pilotos a usam. Diminua o controle de Brilho, toque duas vezes para abrir em tela cheia e
          ligue Manter a tela ligada.
        </p>
        <Table
          caption="Configurações sugeridas para usar a tela vermelha à noite"
          head={['Uso', 'Brilho', 'Dica']}
          rows={[
            ['Luz noturna', '20–40%', 'Vire a tela para uma parede para um brilho suave'],
            ['Ler anotações no escuro', '30–50%', 'Segure o celular perto e abaixo da altura dos olhos'],
            ['Observar as estrelas', 'O mínimo possível', 'Mantém seus olhos adaptados ao céu escuro'],
            ['Luz vermelha forte', '100%', 'Para sinais, efeitos e fotos, não para relaxar'],
          ]}
        />
        <h3 className={h3}>Tela vermelha é boa para dormir?</h3>
        <p className={p}>
          Uma tela vermelha fraca é mais suave antes de dormir do que uma <Link href="/" className={link}>tela branca</Link> forte ou uma azul,
          porque não tem luz azul. Mesmo assim é uma luz, então mantenha o brilho baixo e desligue quando for dormir. Uma tela não é um
          aparelho de terapia de luz vermelha: esses usam comprimentos de onda específicos e uma potência muito maior.
        </p>
      </Section>

      <Section wide id="photo-heading" title="Tela Vermelha para fotos, reels e selfies">
        <p className={p}>Uma tela vermelha dá às selfies e aos reels um brilho vermelho dramático usando só um celular ou notebook.</p>
        <ul className={ul}>
          <li>Apague as luzes do ambiente para a luz vermelha ser a única no seu rosto.</li>
          <li>Abra esta tela toda vermelha em um segundo celular, tablet ou notebook, coloque o Brilho em 100% e abra em tela cheia.</li>
          <li>Segure a tela a 20–40 cm do rosto, um pouco de lado, para ter sombras e profundidade.</li>
          <li>Diminua o brilho ou afaste a tela se a pele parecer estourada.</li>
        </ul>
        <p className={p}>Funciona do mesmo jeito no iPhone, no Android e em notebooks. Quanto maior a tela, mais suave a luz.</p>
      </Section>

      <Section wide id="shade-heading" title="Cores da Tela Vermelha: vermelho vivo, escuro e claro">
        <p className={p}>
          Esta página mostra vermelho puro, #FF0000 (RGB 255, 0, 0): uma tela vermelha lisa, sem mais nada. Use o controle de Brilho para
          escurecer, com o Tom em Neutra.
        </p>
        <Table
          caption="Tons de vermelho e como obtê-los"
          head={['Tom', 'Hex', 'Como obter']}
          rows={[
            ['Vermelho vivo', '#FF0000', 'Brilho 100%'],
            ['Vermelho-escuro', '#B30000', 'Brilho 70%'],
            ['Vermelho profundo / bordô', '#800000', 'Brilho 50%'],
            ['Vermelho-claro / rosa', '#FF69B4', <Link key="p" href="/pink-screen" className={link}>Abra a tela rosa</Link>],
          ]}
        />
        <p className={p}>
          Precisa de um arquivo? Baixar salva um PNG vermelho em 1080p, 2K, 4K ou tamanho de celular, ou em qualquer tamanho personalizado até 8K. Há mais tons na
          coleção de <Link href="/backgrounds/red-background" className={link}>fundo vermelho</Link>.
        </p>
      </Section>

      <Section wide id="test-heading" title="Teste com a Tela Vermelha: subpixels vermelhos e fidelidade de cor">
        <p className={p}>
          O vermelho puro acende só os subpixels vermelhos. Um ponto escuro é um subpixel vermelho morto, e um ponto amarelo ou magenta indica
          um subpixel verde ou azul preso aceso. O vermelho também é onde monitores mais baratos costumam puxar para o laranja ou o rosado;
          compare com outro aparelho ou faça o <Link href="/screen-color-test" className={link}>teste de cores do monitor</Link> e o{' '}
          <Link href="/dead-pixel-test" className={link}>teste de dead pixel</Link>.
        </p>
      </Section>
    </div>
  )
}
