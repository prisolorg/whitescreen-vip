import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Simulador de Tela Hackeada (português do Brasil). Traduzido do guia em inglês, com termos de busca brasileiros:
 * tela hackeada / computador hackeado → pegadinha de tela hackeada → tela "você foi hackeado" (com aviso de golpe).
 * Os botões têm os mesmos nomes da interface em português da ferramenta.
 */
export function HackedScreenGuidePtBr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Simulador de Tela Hackeada: como montar a pegadinha">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Escolha um estilo: Alerta vermelho ou Terminal verde.</li>
          <li>Abra Mais para digitar seu próprio título (SISTEMA INVADIDO por padrão) ou esconder o aviso de &ldquo;é brincadeira&rdquo;.</li>
          <li>Ligue o Som de sirene se quiser um alarme.</li>
          <li>Toque duas vezes ou pressione F para abrir em tela cheia e deixe o computador para o seu amigo encontrar.</li>
        </ol>
        <p className={p}>Pressione Esc para sair da tela cheia e encerrar a pegadinha da tela hackeada.</p>
      </Section>

      <Section wide id="shows-heading" title="O que o Simulador de Tela Hackeada mostra">
        <ul className={ul}>
          <li>Um alerta piscando de &ldquo;violação de segurança detectada&rdquo; e um título com falhas na imagem.</li>
          <li>Etapas falsas de invasão, como &ldquo;Contornando o firewall&rdquo; e &ldquo;Descriptografando o cofre de senhas&rdquo;.</li>
          <li>Uma barra de progresso e uma contagem regressiva de 59 segundos que se repetem, então a tela hackeada falsa nunca termina de verdade.</li>
          <li>Logs falsos rolando, linhas de varredura e um brilho vermelho ou verde pulsante.</li>
        </ul>
        <p className={p}>Nada é instalado e nada no computador é tocado. O simulador de tela hackeada é só uma página da web.</p>
      </Section>

      <Section wide id="rules-heading" title="Simulador de Tela Hackeada: mantenha a graça">
        <ul className={ul}>
          <li>Faça a pegadinha com quem vai rir e revele a brincadeira em até um minuto.</li>
          <li>Evite computadores do trabalho, onde a equipe de TI pode se assustar, e pessoas que se assustam fácil.</li>
          <li>Deixe o aviso de &ldquo;é brincadeira&rdquo; ligado se não tiver certeza de como a pessoa vai reagir.</li>
        </ul>
        <p className={p}>
          Mais pegadinhas de tela: a <Link href="/hacker-typer" className={link}>digitação hacker</Link>, o{' '}
          <Link href="/broken-screen" className={link}>efeito tela quebrada</Link> e a{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>tela azul da morte falsa</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="Não é o Simulador de Tela Hackeada? Alertas reais na tela">
        <p className={p}>
          Uma tela de &ldquo;você foi hackeado&rdquo; que você não abriu, pedindo para ligar para um número ou pagar, quase sempre é golpe:
        </p>
        <ul className={ul}>
          <li>Não ligue para o número, não pague e não deixe ninguém se conectar ao seu computador.</li>
          <li>Feche o navegador; se ele não fechar, use o Gerenciador de Tarefas (Ctrl + Shift + Esc) ou Forçar Encerrar no Mac.</li>
          <li>Rode o antivírus e troque as senhas a partir de outro aparelho, se tiver digitado alguma.</li>
        </ul>
      </Section>
    </div>
  )
}
