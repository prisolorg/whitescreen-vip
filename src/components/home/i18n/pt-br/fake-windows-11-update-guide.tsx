import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Atualização Falsa Windows 11 (português do Brasil). Traduzido do guia em inglês: foca nos termos de Windows 11;
 * os termos genéricos de "tela de atualização falsa do Windows" ficam com /fake-windows-10-update, com link abaixo.
 */
export function FakeWindows11UpdateGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Atualização Falsa Windows 11: como a tela funciona">
        <p className={p}>
          A tela de atualização falsa do Windows 11 copia o visual moderno: tela preta, um anel girando, &quot;Trabalhando nas
          atualizações&quot;, uma porcentagem que sobe e &quot;Mantenha o computador ligado e conectado à tomada.&quot;
        </p>
        <ul className={ul}>
          <li>A porcentagem continua subindo e recomeça depois de 100%, então a atualização nunca acaba.</li>
          <li>Toque em Pausar para congelá-la e fazer a atualização parecer travada.</li>
          <li>Abra Mais para deixá-la mais rápida ou mais lenta.</li>
          <li>Pressione F ou toque em Tela cheia para esconder o navegador e a barra de tarefas.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Pegadinha com a Atualização Falsa Windows 11: como montar">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Abra esta tela de atualização falsa no PC com Windows 11 que você quer usar na pegadinha.</li>
          <li>Pressione F ou toque em Tela cheia para ocupar a tela.</li>
          <li>Deixe rodando. O anel gira e a porcentagem vai subindo aos poucos.</li>
          <li>Para uma reviravolta, toque em Ativar pegadinha de BSOD para a atualização &quot;travar&quot;.</li>
          <li>Pressione Esc para encerrar. Nada muda no PC.</li>
        </ol>
      </Section>

      <Section wide id="compare-heading" title="Atualização Falsa Windows 11, Windows 10 ou XP?">
        <Table
          caption="Qual tela de atualização falsa do Windows usar"
          head={['Tela', 'Parece', 'Página']}
          rows={[
            ['Windows 11', 'Tela preta, anel girando, porcentagem simples', 'Esta página'],
            ['Windows 10', 'Pontos girando e "Trabalhando nas atualizações. 14% concluído"', <Link key="w10" href="/fake-windows-10-update" className={link}>Atualização falsa Windows 10</Link>],
            ['Windows XP', 'Instalador retrô com barra de progresso', <Link key="xp" href="/fake-windows-xp-update" className={link}>Instalação falsa Windows XP</Link>],
            ['Tela de erro', 'A tela azul da morte', <Link key="bsod" href="/fake-blue-screen-of-death" className={link}>Tela azul da morte falsa</Link>],
          ]}
        />
        <p className={p}>
          Uma tela real de carregamento ou de atualização do Windows 11 pode ficar muito tempo no mesmo número. Se a sua parece travada, dê
          tempo e mantenha na tomada antes de reiniciar.
        </p>
      </Section>
    </div>
  )
}
