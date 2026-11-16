import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tela Azul da Morte Falsa (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * tela azul do Windows → tela de erro, códigos de parada e mensagem → pegadinha → o que fazer com uma tela azul real.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function FakeBsodGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Tela Azul da Morte Falsa: Windows 10, 11 e clássica">
        <p className={p}>Escolha um estilo de BSOD falso no menu Estilo, abaixo da prévia. Cada um corresponde a uma tela azul real do Windows:</p>
        <Table
          caption="Estilos da tela azul da morte falsa"
          head={['Estilo', 'O que mostra']}
          rows={[
            ['Windows 10', 'A tela de erro azul-clara com o rosto triste :(, um contador de porcentagem, um QR code e um código de parada'],
            ['Windows 11', 'O mesmo layout no azul mais escuro do Windows 11'],
            ['Preto (novo)', 'A versão preta que as versões mais novas do Windows 11 usam no lugar do azul'],
            ['Clássico (XP/7)', 'A tela azul da morte das antigas, azul-escura e com texto técnico branco'],
          ]}
        />
      </Section>

      <Section wide id="error-heading" title="Tela Azul da Morte Falsa: mensagem de erro e códigos de parada">
        <p className={p}>
          A tela de erro moderna do Windows diz &quot;Seu PC encontrou um problema e precisa ser reiniciado. Estamos coletando algumas
          informações sobre o erro e, em seguida, reiniciaremos para você.&quot; Abaixo, um contador sobe até 100% e um código de parada
          dá nome ao erro.
        </p>
        <p className={p}>Abra Mais para escolher um destes códigos de parada reais:</p>
        <ul className={ul}>
          <li>CRITICAL_PROCESS_DIED e SYSTEM_SERVICE_EXCEPTION</li>
          <li>IRQL_NOT_LESS_OR_EQUAL e PAGE_FAULT_IN_NONPAGED_AREA</li>
          <li>KMODE_EXCEPTION_NOT_HANDLED e MEMORY_MANAGEMENT</li>
          <li>DPC_WATCHDOG_VIOLATION e VIDEO_TDR_FAILURE</li>
        </ul>
        <p className={p}>O controle &quot;Chegar a 100% em&quot; define quanto tempo o contador leva, de cerca de 10 segundos a 2 minutos.</p>
      </Section>

      <Section wide id="prank-heading" title="Pegadinha com a Tela Azul da Morte Falsa: como montar">
        <ul className={ul}>
          <li>Abra esta tela de erro falsa no PC que você quer usar na pegadinha e escolha o estilo que combina com ele.</li>
          <li>Toque duas vezes na tela ou pressione F para abrir em tela cheia.</li>
          <li>Saia de perto. O contador sobe e o cursor some quando o mouse fica parado.</li>
          <li>Use Reiniciar contador para rodar de novo e pressione Esc para encerrar a pegadinha. Nada muda no computador.</li>
        </ul>
        <h3 className={h3}>Comece com uma atualização falsa</h3>
        <p className={p}>
          Para uma reação maior, abra primeiro a <Link href="/fake-windows-10-update" className={link}>atualização falsa Windows 10</Link>{' '}
          e toque em Ativar pegadinha de BSOD para a atualização &quot;travar&quot; em uma tela de erro do Windows. No celular ou tablet, o{' '}
          <Link href="/broken-screen" className={link}>efeito tela quebrada</Link> funciona melhor.
        </p>
      </Section>

      <Section wide id="real-heading" title="Não é a tela azul da morte falsa? O que fazer com uma real">
        <p className={p}>Uma tela azul real significa que o Windows parou para se proteger. Na maioria das vezes, estes passos resolvem:</p>
        <ul className={ul}>
          <li>Anote o código de parada mostrado na parte de baixo da tela.</li>
          <li>Reinicie e instale as atualizações mais recentes do Windows e dos drivers.</li>
          <li>Desfaça o que for novo: um aplicativo, driver ou hardware recente.</li>
          <li>Se continuar acontecendo, pesquise esse código de parada no suporte da Microsoft.</li>
        </ul>
      </Section>
    </div>
  )
}
