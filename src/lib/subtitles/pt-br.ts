import type { LocalizedSubtitles } from './types'

/** Brazilian Portuguese subtitles: one actionable line under each H1 (see src/lib/subtitles.ts for the English set). */
export const ptbr: LocalizedSubtitles = {
  tools: {
    // Telas coloridas (inclui a página inicial, que é a tela branca)
    'white-screen': 'Deixe sua tela branca para iluminar, limpar ou procurar dead pixels.',
    'black-screen': 'Deixe a tela preta para achar pixels presos, vazamento de luz ou escurecer a tela.',
    'red-screen': 'Encha a tela de vermelho para checar subpixels vermelhos ou criar uma luz ambiente.',
    'green-screen': 'Use uma tela verde brilhante como fundo de chroma key ou para checar pixels.',
    'blue-screen': 'Encha a tela de azul para chroma key ou para checar subpixels azuis.',
    'yellow-screen': 'Deixe a tela amarela para uma luz quente ou para checar pixels vermelhos e verdes.',
    'orange-screen': 'Encha o ambiente de luz laranja quente ou use como fundo para fotos.',
    'pink-screen': 'Ilumine o rosto com um rosa suave para selfies, chamadas ou luz ambiente.',
    'purple-screen': 'Crie um brilho roxo para o ambiente ou como fundo de transmissão.',
    'cyan-screen': 'Mostre ciano para checar subpixels verdes e azuis ao mesmo tempo.',
    'magenta-screen': 'Mostre magenta para checar subpixels vermelhos e azuis e achar tons de cor.',
    'gray-screen': 'Mostre um cinza neutro para revelar manchas, faixas e dirty screen effect.',

    // Testes de tela
    'dead-pixel-test': 'Toque para passar por 9 cores e achar pixels mortos, presos ou quentes.',
    'screen-uniformity-test': 'Confira campos de cinza uniformes para achar manchas, vinheta e vazamento de luz.',
    'monitor-test': 'Passe por 7 padrões de teste para checar cor, gama e nitidez.',
    'oled-gray-test': 'Passe por cinzas quase pretos para achar faixas e mura na tela OLED.',
    'oled-burn-in-test': 'Alterne cores sólidas para achar burn-in e retenção de imagem no OLED.',
    'screen-burn-in-test': 'Procure imagens fantasma e depois rode a correção para limpar a retenção.',
    'touch-screen-test': 'Deslize o dedo na grade para achar zonas mortas e contar os toques simultâneos.',
    'screen-refresh-rate-test': 'Veja a taxa de atualização da sua tela em Hz assim que a página carrega.',
    'monitor-ghosting-test': 'Aumente a velocidade até aparecerem rastros para avaliar ghosting e overdrive.',
    'frame-rate-test': 'Compare 15, 24, 30 e 60 FPS com o máximo da sua tela, lado a lado.',
    'screen-color-test': 'Passe por barras de cor e rampas RGB para checar tons e faixas.',
    'screen-resolution-test': 'Veja a resolução da tela e a proporção de pixels na hora, sem cliques.',

    // Efeitos e som
    'no-signal-screen': 'Escolha barras de cor, quicando ou azul e coloque em tela cheia na TV.',
    'white-noise-generator': 'Ligue um ruído branco constante e defina um timer de sono para a noite.',
    'brown-noise-generator': 'Ligue um ruído marrom grave para focar ou dormir, com timer de sono.',
    'pink-noise-generator': 'Ligue um ruído rosa parecido com chuva e ajuste com filtros e volume.',
    'broken-screen': 'Toque em qualquer lugar para quebrar o vidro e depois entregue o aparelho.',
    'hacker-typer': 'Aperte qualquer tecla e veja surgir código hacker de filme.',
    'hacked-screen': 'Escolha vermelho ou verde, abra em tela cheia e deixe para um amigo encontrar.',
    'visual-noise': 'Encha a tela de granulado animado em mono, colorido ou com tom.',
    'color-cycle': 'Deixe a tela passar suavemente por todas as cores ou troque você mesmo.',
    'gradient-screen': 'Escolha as cores e um ângulo para criar um degradê animado em tela cheia.',

    // Iluminação
    'zoom-lighting': 'Transforme sua tela em uma luz suave para a próxima chamada de vídeo.',
    'ring-light': 'Ilumine o rosto com um anel de luz na tela; ajuste o tamanho e o tom.',

    // Protetores de tela
    'matrix-screensaver': 'Rode a chuva digital e ajuste a velocidade, a cor e os caracteres.',
    'flip-clock-screensaver': 'Transforme qualquer tela livre em um grande relógio flip ao vivo.',
    'dvd-screensaver': 'Veja o logo do DVD quicar e espere a batida perfeita no canto.',
    'motivational-quote-screensaver': 'Mostre frases motivacionais em letras grandes em uma tela livre.',

    // Timers e utilitários
    'countdown-timer': 'Escolha uma predefinição ou defina seu tempo e toque em Iniciar.',
    'pomodoro-timer': 'Toque em Iniciar para 25 minutos de foco e depois faça uma pausa de 5 minutos.',
    stopwatch: 'Aperte a barra de espaço para começar a cronometrar e L para marcar uma volta.',

    // Telas falsas
    'fake-windows-10-update': 'Abra em tela cheia uma atualização falsa do Windows 10 para enganar um amigo.',
    'fake-windows-11-update': 'Mostre a tela escura de atualização do Windows 11 em tela cheia como pegadinha.',
    'fake-blue-screen-of-death': 'Abra em tela cheia uma tela de erro falsa e depois revele a brincadeira.',
    'fake-mac-update': 'Mostre uma atualização falsa do macOS com barra de progresso fina em tela cheia.',
    'fake-android-update': 'Abra no celular para mostrar uma atualização falsa do sistema Android.',
    'fake-windows-xp-update': 'Volte aos anos 2000 com uma tela falsa de instalação do Windows XP.',
    'fake-windows-xp-boot': 'Mostre a clássica tela de inicialização do Windows XP em tela cheia.',
    'fake-chrome-os-update': 'Mostre uma tela falsa de atualização do Chromebook com etapas que mudam.',
    'fake-ubuntu-update': 'Veja logs falsos de pacotes do Ubuntu rolando em uma atualização no terminal.',
    'fake-zoom-meeting': 'Monte uma tela falsa de chamada estilo Zoom para pegadinha ou vídeo.',
    'fake-teams-meeting': 'Mostre uma tela de reunião estilo Teams com blocos de participantes.',
    'fake-google-meet': 'Mostre uma chamada estilo Meet com blocos e contorno de quem fala.',
    'fake-slack-huddle': 'Mostre um huddle estilo Slack com anéis de fala e timer ao vivo.',
    'fake-radar-screen': 'Rode uma varredura de radar de ficção científica com pontos, para cena ou fundo.',
  },
  backgrounds: {
    'white-background': 'Baixe um fundo branco puro em 4K, tamanho de celular ou personalizado.',
    'black-background': 'Pegue um fundo preto de verdade em PNG ou CSS, em qualquer tamanho.',
    'orange-background': 'Baixe um fundo laranja quente para o celular ou o computador.',
    'gradient-background': 'Baixe este degradê suave em PNG ou copie como CSS.',
    'neon-background': 'Salve este brilho neon como papel de parede 4K ou fundo de celular.',
    'red-background': 'Baixe um fundo vermelho forte em qualquer tamanho ou copie o CSS.',
    'yellow-background': 'Baixe um fundo amarelo vivo para slides, celular ou computador.',
    'blue-background': 'Baixe um fundo azul limpo em PNG, em 4K ou tamanho de celular.',
    'green-screen-background': 'Mostre esta tela verde em tela cheia como chroma key ou baixe a imagem.',
    'virtual-office': 'Baixe um fundo de escritório virtual para a próxima chamada de vídeo.',
    'graph-paper': 'Baixe uma grade de papel milimetrado em PNG ou copie como CSS.',
    'pink-background': 'Baixe um fundo rosa para o celular, o computador ou os stories.',
    'light-pink-background': 'Baixe um fundo rosa-claro suave no tamanho que precisar.',
    'green-background': 'Baixe um fundo verde fresco em PNG ou copie o CSS.',
    'purple-background': 'Baixe um fundo roxo intenso para o celular ou o computador.',
    'dark-background': 'Baixe um fundo escuro que descansa a vista, em qualquer tamanho.',
    'gold-background': 'Baixe um fundo degradê dourado para convites, slides ou celular.',
    'aesthetic-background': 'Baixe um fundo aesthetic suave para o celular ou o computador.',
    'beige-background': 'Baixe um fundo bege quente em PNG ou copie o CSS.',
    'pastel-background': 'Baixe um fundo degradê pastel para celular, slides ou posts.',
  },
}
