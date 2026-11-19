import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Atualização Falsa Windows 10 (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * tela de atualização falsa do Windows → pegadinha → outros sistemas → atualização real travada.
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function FakeWindowsUpdateGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Atualização Falsa Windows 10: como a tela funciona">
        <p className={p}>
          Esta tela de atualização falsa do Windows recria a tela &quot;Trabalhando nas atualizações&quot; do Windows 10: fundo escuro, um
          indicador girando, uma porcentagem que sobe devagar e o conhecido &quot;Não desligue o PC. Isso vai demorar um pouco.&quot;
        </p>
        <ul className={ul}>
          <li>A porcentagem sobe sozinha e recomeça depois de 100%, então esta tela de carregamento falsa nunca termina.</li>
          <li>Use Pausar para congelá-la e fazer a atualização parecer travada.</li>
          <li>Abra Mais para deixar a atualização mais rápida ou mais lenta.</li>
          <li>Pressione F ou toque em Tela cheia para esconder o navegador. O cursor some quando o mouse fica parado.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Pegadinha com a Atualização Falsa Windows 10: como montar">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Abra esta atualização falsa no computador que você quer usar na pegadinha.</li>
          <li>Pressione F ou toque em Tela cheia para cobrir a tela inteira.</li>
          <li>Saia de perto. A porcentagem continua subindo enquanto a pessoa espera.</li>
          <li>Para uma reviravolta, toque em Ativar pegadinha de BSOD e a atualização &quot;falha&quot; com uma tela azul.</li>
          <li>Pressione Esc para encerrar. Nada no computador é alterado.</li>
        </ol>
        <p className={p}>
          Quer só o travamento? Use a <Link href="/fake-blue-screen-of-death" className={link}>tela azul da morte falsa</Link> ou trinque o
          vidro com o <Link href="/broken-screen" className={link}>efeito tela quebrada</Link>.
        </p>
      </Section>

      <Section wide id="systems-heading" title="Além da Atualização Falsa Windows 10: Windows 11, XP e outros sistemas">
        <Table
          caption="Telas de atualização falsa para cada sistema"
          head={['Sistema', 'Tela de atualização falsa']}
          rows={[
            ['Windows 11', <Link key="w11" href="/fake-windows-11-update" className={link}>Atualização falsa Windows 11</Link>],
            ['Windows XP', <Link key="xp" href="/fake-windows-xp-update" className={link}>Instalação falsa Windows XP</Link>],
            ['Inicialização do Windows XP', <Link key="xpb" href="/fake-windows-xp-boot" className={link}>Inicialização falsa Windows XP</Link>],
            ['Mac', <Link key="mac" href="/fake-mac-update" className={link}>Atualização falsa Mac</Link>],
            ['Chromebook', <Link key="cros" href="/fake-chrome-os-update" className={link}>Atualização falsa Chrome OS</Link>],
            ['Ubuntu / Linux', <Link key="ub" href="/fake-ubuntu-update" className={link}>Atualização falsa Ubuntu</Link>],
            ['Android', <Link key="and" href="/fake-android-update" className={link}>Atualização falsa Android</Link>],
          ]}
        />
      </Section>

      <Section wide id="real-heading" title="Atualização Falsa Windows 10 ou uma real travada?">
        <p className={p}>
          Se uma tela real de atualização ou de carregamento do Windows parece travada, esta página não resolve, mas estes passos
          costumam ajudar:
        </p>
        <ul className={ul}>
          <li>Dê tempo. Atualizações grandes podem ficar muito tempo na mesma porcentagem.</li>
          <li>Observe a atividade do disco. Uma luz do disco piscando indica que ainda está trabalhando.</li>
          <li>Só em último caso, segure o botão de ligar para reiniciar. O Windows costuma desfazer sozinho uma atualização que falhou.</li>
        </ul>
      </Section>
    </div>
  )
}
