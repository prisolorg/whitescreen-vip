import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela Rosa (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * luz rosa para selfies, fotos e TikTok → tons: rosa choque, rosa vivo e mais escuros → fundo rosa e papel de parede.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function PinkScreenGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Luz de Tela Rosa para selfies, fotos e TikTok">
        <p className={p}>
          Uma tela rosa é uma luz rosa fácil e favorável: suaviza a pele e dá um brilho quente sem LED rosa nem equipamento extra. Toque duas
          vezes na prévia para abrir em tela cheia e ligue Manter a tela ligada. Para uma luz neutra e fiel, use a{' '}
          <Link href="/" className={link}>tela branca</Link>.
        </p>
        <Table
          caption="Formas de usar a tela rosa como luz"
          head={['Uso', 'Configurações', 'Dica']}
          rows={[
            ['Selfies e fotos', 'Brilho 100%', 'Segure um segundo celular ou tablet um pouco ao lado do rosto'],
            ['FaceTime e videochamadas', 'Brilho 70–100%', 'Coloque a tela atrás da câmera, virada para você'],
            ['Vídeos de TikTok e dublagem', 'Brilho 100%, Quente', 'Apague as luzes do ambiente para a luz rosa se destacar'],
            ['Luz ambiente', 'Brilho 40–70%', 'Aponte a tela para uma parede para espalhar o brilho'],
          ]}
        />
      </Section>

      <Section wide id="shade-heading" title="Cores da Tela Rosa: rosa choque, rosa vivo e tons mais escuros">
        <p className={p}>
          Esta tela rosa choque mostra #FF69B4 (RGB 255, 105, 180), um rosa vivo com um pouco de azul. Mude o tom com os controles abaixo da
          prévia.
        </p>
        <Table
          caption="Tons de rosa e como obtê-los"
          head={['Tom', 'Como obter', 'Aparência']}
          rows={[
            ['Rosa choque / rosa vivo', 'Neutra, Brilho 100%', 'Vibrante e divertido (#FF69B4)'],
            ['Rosa coral', 'Quente', 'Um rosa mais quente, pêssego (#FF4F64)'],
            ['Rosa antigo', 'Frio', 'Mais frio, um pouco mais magenta (#DD5FB4)'],
            ['Rosa-escuro', 'Brilho 50–70%', 'Um rosa mais profundo e fechado (#80355A–#B34A7E)'],
            ['Rosa-claro / rosa bebê', <Link key="lp" href="/backgrounds/light-pink-background" className={link}>Fundo rosa-claro</Link>, 'Suave e pálido (#FFB6C1)'],
          ]}
        />
        <p className={p}>
          Quer um rosa neon mais forte? Experimente a <Link href="/magenta-screen" className={link}>tela magenta</Link>.
        </p>
      </Section>

      <Section wide id="background-heading" title="Fundo e papel de parede de Tela Rosa">
        <p className={p}>
          Precisa de um fundo rosa choque como arquivo? Use Baixar, abaixo da prévia. O brilho e o tom que você escolheu são aplicados à
          imagem.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Notebook e computador:</strong> 1080p, 1440p, 4K ou 8K.
          </li>
          <li>
            <strong className="text-foreground">Papel de parede do celular:</strong> iPhone (1179×2556) ou Android (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Qualquer outro:</strong> largura e altura personalizadas, como 1080×1920 para TikTok e Reels.
          </li>
        </ul>
        <p className={p}>
          Quer algo mais suave? Use o <Link href="/backgrounds/light-pink-background" className={link}>fundo rosa-claro</Link> (#FFB6C1) ou veja
          a coleção de <Link href="/backgrounds/pink-background" className={link}>fundo rosa</Link>.
        </p>
      </Section>
    </div>
  )
}
