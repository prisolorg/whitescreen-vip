import type { LanguageGuides } from './types'
import { DvdScreensaverGuidePtBr } from '@/components/home/i18n/pt-br/dvd-screensaver-guide'
import { BrokenScreenGuidePtBr } from '@/components/home/i18n/pt-br/broken-screen-guide'
import { FakeZoomMeetingGuidePtBr } from '@/components/home/i18n/pt-br/fake-zoom-meeting-guide'
import { FakeWindowsUpdateGuidePtBr } from '@/components/home/i18n/pt-br/fake-windows-update-guide'
import { FakeWindows11UpdateGuidePtBr } from '@/components/home/i18n/pt-br/fake-windows-11-update-guide'
import { FakeBsodGuidePtBr } from '@/components/home/i18n/pt-br/fake-bsod-guide'
import { FakeMacUpdateGuidePtBr } from '@/components/home/i18n/pt-br/fake-mac-update-guide'
import { PomodoroTimerGuidePtBr } from '@/components/home/i18n/pt-br/pomodoro-timer-guide'
import { FlipClockGuidePtBr } from '@/components/home/i18n/pt-br/flip-clock-guide'
import { ZoomLightingGuidePtBr } from '@/components/home/i18n/pt-br/zoom-lighting-guide'
import { CountdownTimerGuidePtBr } from '@/components/home/i18n/pt-br/countdown-timer-guide'
import { RingLightGuidePtBr } from '@/components/home/i18n/pt-br/ring-light-guide'
import { StopwatchGuidePtBr } from '@/components/home/i18n/pt-br/stopwatch-guide'
import { RefreshRateGuidePtBr } from '@/components/home/i18n/pt-br/refresh-rate-guide'
import { DeadPixelGuidePtBr } from '@/components/home/i18n/pt-br/dead-pixel-guide'
import { TouchScreenGuidePtBr } from '@/components/home/i18n/pt-br/touch-screen-guide'
import { MonitorGhostingGuidePtBr } from '@/components/home/i18n/pt-br/monitor-ghosting-guide'
import { MonitorTestGuidePtBr } from '@/components/home/i18n/pt-br/monitor-test-guide'
import { ScreenBurnInGuidePtBr } from '@/components/home/i18n/pt-br/screen-burn-in-guide'
import { ScreenResolutionGuidePtBr } from '@/components/home/i18n/pt-br/screen-resolution-guide'
import { ScreenColorGuidePtBr } from '@/components/home/i18n/pt-br/screen-color-guide'
import { FrameRateGuidePtBr } from '@/components/home/i18n/pt-br/frame-rate-guide'
import { OledGrayGuidePtBr } from '@/components/home/i18n/pt-br/oled-gray-guide'
import { HackedScreenGuidePtBr } from '@/components/home/i18n/pt-br/hacked-screen-guide'
import { NoSignalGuidePtBr } from '@/components/home/i18n/pt-br/no-signal-guide'
import { BlackScreenGuidePtBr } from '@/components/home/i18n/pt-br/black-screen-guide'
import { YellowScreenGuidePtBr } from '@/components/home/i18n/pt-br/yellow-screen-guide'
import { GreenScreenGuidePtBr } from '@/components/home/i18n/pt-br/green-screen-guide'
import { BlueScreenGuidePtBr } from '@/components/home/i18n/pt-br/blue-screen-guide'
import { RedScreenGuidePtBr } from '@/components/home/i18n/pt-br/red-screen-guide'
import { PinkScreenGuidePtBr } from '@/components/home/i18n/pt-br/pink-screen-guide'
import { WhiteScreenGuidePtBr } from '@/components/home/i18n/pt-br/white-screen-guide'

/** Brazilian Portuguese (forma "você", nomes de botões da interface em português, termos de busca brasileiros). */
export const ptbr: LanguageGuides = {
  tools: {
    'dvd-screensaver': {
      Guide: DvdScreensaverGuidePtBr,
      faqs: [
        {
          question: 'Este é o logo oficial do DVD?',
          answer:
            'Não. O protetor de tela DVD desenha um logo no estilo DVD no seu navegador e não tem ligação com a DVD Format/Logo Licensing Corporation, dona do logo DVD Video.',
        },
        {
          question: 'Por que o logo do protetor de tela DVD muda de cor?',
          answer:
            'Como no clássico protetor de tela dos aparelhos de DVD, o logo escolhe uma cor nova sempre que encosta em uma borda e nunca repete a mesma cor duas vezes seguidas.',
        },
        {
          question: 'Posso usar o protetor de tela DVD como protetor de tela de verdade no Windows ou no Mac?',
          answer:
            'Ele roda no navegador em vez de ser instalado como protetor de tela do sistema. Abra em tela cheia sempre que o computador estiver parado; o protetor de tela e as configurações de repouso do sistema continuam valendo.',
        },
      ],
    },
    'broken-screen': {
      Guide: BrokenScreenGuidePtBr,
      faqs: [
        {
          question: 'O efeito tela quebrada pode danificar minha tela?',
          answer: 'Não. É só uma imagem desenhada no navegador. Pressione Esc ou feche a aba e a tela volta ao normal.',
        },
        {
          question: 'O efeito tela quebrada funciona no Chromebook?',
          answer:
            'Sim. Funciona em qualquer navegador moderno, inclusive em Chromebooks, computadores Windows e Mac, celulares, tablets e navegadores de smart TV. Nada é instalado.',
        },
        {
          question: 'Como fazer a pegadinha da tela trincada com responsabilidade?',
          answer:
            'Seja rápido, escolha alguém que vai rir, nunca use para conseguir dinheiro ou informações e revele a brincadeira logo em seguida.',
        },
      ],
    },
    'fake-zoom-meeting': {
      Guide: FakeZoomMeetingGuidePtBr,
      faqs: [
        {
          question: 'Esta tela falsa de reunião do Zoom se conecta ao Zoom?',
          answer:
            'Não. É uma simulação independente no estilo Zoom, sem ligação com a Zoom Video Communications. Ninguém pode entrar e nada é enviado para lugar nenhum.',
        },
        {
          question: 'A reunião falsa do Zoom usa minha câmera?',
          answer:
            'Só se você ligar Ativar prévia da câmera. Seu vídeo aparece no seu próprio bloco e nunca sai do seu aparelho; nada é gravado nem enviado. O microfone nunca é usado.',
        },
        {
          question: 'A reunião falsa do Zoom tem áudio?',
          answer: 'Não, ela é silenciosa. Para um vídeo de reunião falsa, adicione som ou conversa no seu editor de vídeo.',
        },
      ],
    },
    'fake-windows-10-update': {
      Guide: FakeWindowsUpdateGuidePtBr,
      faqs: [
        {
          question: 'Uma tela de atualização falsa do Windows pode prejudicar meu computador?',
          answer: 'Não. É só uma página no navegador. Nada é instalado ou alterado, e pressionar Esc ou fechar a aba encerra tudo.',
        },
        {
          question: 'Posso fazer a atualização falsa do Windows parecer travada?',
          answer: 'Sim. Toque em Pausar e a porcentagem para onde está. Abra Mais para mudar a velocidade com que ela sobe.',
        },
        {
          question: 'A atualização falsa do Windows funciona no Mac ou no Chromebook?',
          answer:
            'Sim. Ela roda em qualquer navegador moderno, então você também pode mostrar uma atualização falsa do Windows em um Mac, Chromebook ou tablet.',
        },
      ],
    },
    'fake-windows-11-update': {
      Guide: FakeWindows11UpdateGuidePtBr,
      faqs: [
        {
          question: 'A atualização falsa do Windows 11 é real?',
          answer:
            'Não. É uma página no navegador que parece a tela de atualização do Windows 11. Nada é instalado, e Esc ou fechar a aba encerra tudo.',
        },
        {
          question: 'Quanto tempo leva a atualização falsa do Windows 11?',
          answer: 'Ela nunca termina: a porcentagem recomeça depois de 100%. Use Pausar para segurar em um número ou abra Mais para mudar a velocidade.',
        },
        {
          question: 'Posso rodar a atualização falsa do Windows 11 no Mac ou no Chromebook?',
          answer:
            'Sim. Ela roda em qualquer navegador moderno, então a tela de atualização do Windows 11 funciona também em Macs, Chromebooks, tablets e celulares.',
        },
      ],
    },
    'fake-blue-screen-of-death': {
      Guide: FakeBsodGuidePtBr,
      faqs: [
        {
          question: 'Uma tela azul da morte falsa pode prejudicar meu computador?',
          answer: 'Não. É uma imagem no navegador. O computador continua funcionando normalmente, e pressionar Esc ou fechar a aba encerra tudo.',
        },
        {
          question: 'Por que a tela azul da morte agora é preta?',
          answer: 'As versões mais novas do Windows 11 mostram a tela de erro em preto em vez de azul. Escolha Preto (novo) no menu Estilo para esse visual.',
        },
        {
          question: 'Posso mudar o código de parada da tela azul da morte?',
          answer:
            'Sim. Abra Mais e escolha um código de parada, como CRITICAL_PROCESS_DIED ou MEMORY_MANAGEMENT. Ele muda na tela na mesma hora.',
        },
      ],
    },
    'fake-mac-update': {
      Guide: FakeMacUpdateGuidePtBr,
      faqs: [
        {
          question: 'Esta atualização falsa do Mac é feita pela Apple?',
          answer:
            'Não. É uma simulação independente de uma tela de atualização no estilo macOS, sem ligação com a Apple. Nada é instalado ou alterado no seu Mac.',
        },
        {
          question: 'Posso fazer a atualização falsa do Mac durar horas?',
          answer:
            'Defina a Duração da atualização em 120 minutos em Mais. Quando a barra enche, a tela reinicia e a atualização começa de novo, então ela pode rodar o tempo que você quiser.',
        },
      ],
    },
    'pomodoro-timer': {
      Guide: PomodoroTimerGuidePtBr,
      faqs: [
        {
          question: 'O que é um timer Pomodoro?',
          answer:
            'Um timer Pomodoro divide o trabalho em blocos de foco, geralmente de 25 minutos, com uma pausa curta depois de cada um e uma pausa mais longa depois de quatro. Ele segue a técnica Pomodoro de Francesco Cirillo.',
        },
        {
          question: 'Quanto tempo dura um pomodoro?',
          answer:
            'Tradicionalmente, 25 minutos de foco seguidos de uma pausa de 5 minutos. Você pode mudar os dois, por exemplo para 50 e 10 minutos, em Mais.',
        },
        {
          question: 'O timer Pomodoro funciona no celular?',
          answer: 'Sim. Abra no navegador do celular e toque em Iniciar. Mantenha a aba aberta para ouvir o som quando uma fase terminar.',
        },
        {
          question: 'Este timer Pomodoro é grátis?',
          answer: 'Sim. É totalmente grátis, sem cadastro, sem app e sem anúncios no próprio timer.',
        },
      ],
    },
    'flip-clock-screensaver': {
      Guide: FlipClockGuidePtBr,
      faqs: [
        {
          question: 'O relógio flip mantém minha tela ligada?',
          answer:
            'Sim, em tela cheia. Os navegadores compatíveis mantêm a tela ligada enquanto ele está em tela cheia, então ele pode rodar o dia todo como relógio de mesa.',
        },
        {
          question: 'Posso mostrar a hora no formato 12 horas?',
          answer: 'Sim. Desligue Formato 24 horas e o relógio passa para o formato 12 horas com AM ou PM.',
        },
        {
          question: 'Posso usar como protetor de tela no Windows ou no Mac?',
          answer:
            'Ele roda no navegador em vez de ser instalado como protetor de tela do sistema. Abra em tela cheia em uma tela livre ou sempre que o computador estiver parado.',
        },
      ],
    },
    'zoom-lighting': {
      Guide: ZoomLightingGuidePtBr,
      faqs: [
        {
          question: 'Posso usar a luz para videochamadas no mesmo notebook da chamada?',
          answer:
            'Funciona melhor em uma segunda tela, tablet ou celular atrás da webcam, para a chamada continuar visível. Em um único notebook, a luz em tela cheia cobriria a janela do Zoom.',
        },
        {
          question: 'Qual a melhor temperatura de cor para a luz em videochamadas?',
          answer:
            'Neutra (4500 K) combina com a maioria dos ambientes. Escolha Luz do dia (6500 K) para combinar com a luz da janela ou Quente (3000 K) para um visual mais suave à noite.',
        },
        {
          question: 'É grátis?',
          answer:
            'Sim. É grátis em qualquer navegador, sem app nem cadastro, e funciona com Zoom, Teams, Google Meet e qualquer outra videochamada.',
        },
      ],
    },
    'countdown-timer': {
      Guide: CountdownTimerGuidePtBr,
      faqs: [
        {
          question: 'Quais durações posso usar na contagem regressiva?',
          answer:
            'Qualquer duração até 99 horas, 59 minutos e 59 segundos. Escolha 1, 5, 10, 15, 25, 45 ou 60 minutos no menu Timer, ou clique nas horas, minutos e segundos na tela e digite o seu tempo, depois toque em Iniciar.',
        },
        {
          question: 'Ele toca um som quando o tempo acaba?',
          answer:
            'Sim. Um alerta sonoro toca e a tela pisca em vermelho quando o tempo acaba. Desligue o som em Mais para uma contagem regressiva silenciosa.',
        },
        {
          question: 'O temporizador faz contagem regressiva para uma data?',
          answer:
            'Sim. Escolha Contagem regressiva até uma data no menu Timer, selecione a data e a hora, adicione um nome do evento se quiser e toque em Iniciar. Ele mostra os dias, horas, minutos e segundos que faltam e lembra da sua contagem neste navegador quando você voltar.',
        },
      ],
    },
    'ring-light': {
      Guide: RingLightGuidePtBr,
      faqs: [
        {
          question: 'Uma tela pode substituir um ring light de verdade?',
          answer:
            'Para videochamadas, selfies e maquiagem, uma tela clara funciona surpreendentemente bem. Uma luz de LED de verdade é mais forte e melhor para filmar em um ambiente escuro ou de longe.',
        },
        {
          question: 'Funciona no celular?',
          answer:
            'Sim. Abra em um celular ou tablet, aumente o brilho e toque duas vezes para abrir em tela cheia, depois aponte a tela para o seu rosto.',
        },
        {
          question: 'Qual cor é melhor para maquiagem?',
          answer: 'Branco no brilho máximo, para as cores parecerem reais. Abra Mais para deixar o branco mais quente ou mais frio, conforme o ambiente.',
        },
      ],
    },
    stopwatch: {
      Guide: StopwatchGuidePtBr,
      faqs: [
        {
          question: 'Qual é a precisão do cronômetro?',
          answer:
            'Ele usa o relógio de alta precisão do navegador e mostra o tempo até o centésimo de segundo. Se a aba for para segundo plano, o tempo continua certo quando você voltar.',
        },
        {
          question: 'Quais são os atalhos de teclado?',
          answer: 'A barra de espaço inicia e pausa, L marca uma volta e R zera o cronômetro.',
        },
        {
          question: 'Posso salvar minhas voltas?',
          answer:
            'Sim. Toque em Copiar voltas para copiar todas as voltas com o tempo parcial e o total e cole em uma planilha, nas notas ou em uma mensagem.',
        },
      ],
    },
    'screen-refresh-rate-test': {
      Guide: RefreshRateGuidePtBr,
      faqs: [
        {
          question: 'Qual é a precisão do teste de taxa de atualização?',
          answer:
            'Muito próxima na maioria das telas. Ele mede centenas de quadros e arredonda para a taxa comum mais próxima. Abas pesadas, economia de bateria ou um computador lento podem baixar o resultado, então feche outros apps e toque em Medir de novo.',
        },
        {
          question: 'Por que meu monitor de 144 Hz mostra 60 Hz?',
          answer:
            'Provavelmente a tela está configurada em 60 Hz. Escolha a taxa mais alta nas configurações de tela e use um cabo e uma porta que a suportem, como DisplayPort ou um cabo HDMI de alta velocidade.',
        },
        {
          question: 'O teste de taxa de atualização funciona no celular?',
          answer: 'Sim. Abra no navegador do celular. Desligue antes o modo de economia de energia, porque ele costuma limitar a tela a 60 Hz.',
        },
      ],
    },
    'dead-pixel-test': {
      Guide: DeadPixelGuidePtBr,
      faqs: [
        {
          question: 'Quanto tempo leva um teste de dead pixel?',
          answer: 'Cerca de um minuto. Passe pelas 9 cores em tela cheia e olhe a tela inteira em cada uma.',
        },
        {
          question: 'Um dead pixel é normal?',
          answer:
            'Acontece, e muitos fabricantes só trocam uma tela a partir de um certo número de pixels com defeito. Confira a política de garantia do seu monitor, notebook ou celular.',
        },
        {
          question: 'Qual a diferença entre um pixel morto e um pixel preso?',
          answer:
            'Um pixel morto nunca acende e parece preto. Um pixel preso fica em uma cor, como vermelho, verde ou azul, e às vezes pode ser destravado com cores piscando sobre ele.',
        },
      ],
    },
    'touch-screen-test': {
      Guide: TouchScreenGuidePtBr,
      faqs: [
        {
          question: 'Como testar zonas mortas na tela touch?',
          answer:
            'Escolha Grade de zonas mortas e deslize o dedo sobre todos os quadrados. Os quadrados que continuam escuros depois do toque são zonas mortas.',
        },
        {
          question: 'O teste de tela touch funciona no iPhone?',
          answer: 'Sim. Funciona no Safari e em outros navegadores do iPhone, além de celulares Android, tablets e notebooks com tela touch.',
        },
        {
          question: 'Quantos pontos de toque meu celular deve suportar?',
          answer: 'A maioria dos celulares e tablets reconhece de 5 a 10 ao mesmo tempo. Use Multitoque e observe o Máx. para ver quantos o seu aguenta.',
        },
      ],
    },
    'monitor-ghosting-test': {
      Guide: MonitorGhostingGuidePtBr,
      faqs: [
        {
          question: 'Todo monitor tem um pouco de ghosting?',
          answer:
            'A maioria dos monitores LCD mostra um pouco em velocidades altas. É um problema quando o rastro é longo em velocidades normais ou aparece um halo claro. Nesse caso, ajuste o overdrive e faça o teste de ghosting do monitor de novo.',
        },
        {
          question: 'Ghosting é o mesmo que input lag?',
          answer:
            'Não. Ghosting é um rastro visual causado por pixels lentos; input lag é um atraso entre o mouse ou o controle e a tela. Este teste mostra só o ghosting.',
        },
        {
          question: 'Este é um teste de anti-ghosting de teclado?',
          answer:
            'Não. O anti-ghosting de teclado trata de registrar várias teclas apertadas ao mesmo tempo. Este teste de ghosting do monitor verifica rastros de movimento na tela.',
        },
      ],
    },
    'monitor-test': {
      Guide: MonitorTestGuidePtBr,
      faqs: [
        {
          question: 'O teste de monitor é grátis e online?',
          answer: 'Sim. Ele roda no navegador em qualquer monitor, notebook, TV ou celular, sem download nem cadastro.',
        },
        {
          question: 'Como testar um monitor novo?',
          answer:
            'Rode os padrões do teste de monitor em tela cheia na resolução nativa e depois o [teste de dead pixel](/dead-pixel-test) e o [teste de uniformidade](/gray-screen). O melhor momento é enquanto você ainda pode devolver o monitor.',
        },
        {
          question: 'Um teste de monitor consegue calibrar minha tela?',
          answer:
            'Ele ajuda a ajustar brilho, contraste e gama a olho nu. Uma calibração precisa exige um colorímetro ou a ferramenta de calibração do sistema.',
        },
      ],
    },
    'screen-burn-in-test': {
      Guide: ScreenBurnInGuidePtBr,
      faqs: [
        {
          question: 'Quanto tempo leva para uma tela ficar queimada?',
          answer:
            'Normalmente centenas ou milhares de horas da mesma imagem estática, muitas vezes com brilho alto. A retenção de imagem no LCD pode aparecer depois de algumas horas, mas some.',
        },
        {
          question: 'Por quanto tempo devo rodar a correção de burn-in?',
          answer:
            'Comece com 10 a 30 minutos e depois faça o teste de burn-in de tela de novo. Repita algumas vezes; se nada mudar, o burn-in provavelmente é permanente.',
        },
        {
          question: 'O teste de burn-in de tela funciona no celular?',
          answer:
            'Sim. Abra no navegador do celular, aumente o brilho e toque duas vezes para abrir em tela cheia. Em celulares OLED e AMOLED, experimente também o [teste de burn-in OLED](/oled-burn-in-test).',
        },
      ],
    },
    'screen-resolution-test': {
      Guide: ScreenResolutionGuidePtBr,
      faqs: [
        {
          question: 'Por que a resolução da minha tela é menor que a do monitor?',
          answer:
            'Por causa da escala da tela. Com escala de 150%, um monitor de 2560 × 1440 informa 1707 × 960 ao navegador. A leitura de Pixels físicos multiplica pela proporção de pixels para mostrar a contagem real.',
        },
        {
          question: 'O teste de resolução é preciso?',
          answer: 'Ele mostra exatamente o que o navegador informa. Mantenha o zoom em 100% para a contagem de pixels físicos bater com a sua tela.',
        },
        {
          question: 'Qual deve ser a minha resolução?',
          answer: 'A resolução nativa do monitor, marcada como Recomendável nas configurações de tela do Windows. Qualquer outra pode parecer borrada.',
        },
      ],
    },
    'screen-color-test': {
      Guide: ScreenColorGuidePtBr,
      faqs: [
        {
          question: 'O teste de cores do monitor é grátis?',
          answer: 'Sim. Ele roda no navegador em qualquer monitor, notebook, TV ou celular, sem download nem cadastro.',
        },
        {
          question: 'Por que as cores ficam diferentes no celular e no monitor?',
          answer:
            'As telas diferem no tipo de painel, no modo de cor e na calibração. Faça o teste de cores nas duas com o modo noturno desligado e compare as rampas RGB.',
        },
        {
          question: 'Um teste de cores consegue corrigir as cores da minha tela?',
          answer:
            'Não, ele mostra os problemas. Corrija tons puxados pela temperatura de cor ou pelo modo de imagem da tela, ou pela ferramenta de calibração do sistema.',
        },
      ],
    },
    'frame-rate-test': {
      Guide: FrameRateGuidePtBr,
      faqs: [
        {
          question: 'Por que o teste de FPS mostra 60 no meu monitor de 144 Hz?',
          answer:
            'Provavelmente o monitor está configurado em 60 Hz, o cabo não suporta mais ou o notebook está economizando energia. Confira as configurações de tela e faça o teste de FPS de novo.',
        },
        {
          question: 'O olho humano consegue ver mais de 60 FPS?',
          answer:
            'Sim. A maioria das pessoas percebe um movimento mais fluido a partir de 120 FPS. Compare a faixa de 60 FPS com a faixa máxima em uma tela com alta taxa de atualização.',
        },
        {
          question: 'O teste de FPS funciona no celular?',
          answer:
            'Sim. Abra no navegador do celular e toque duas vezes para abrir em tela cheia. Celulares com telas de 90 ou 120 Hz mostram uma faixa máxima mais fluida.',
        },
      ],
    },
    'oled-gray-test': {
      Guide: OledGrayGuidePtBr,
      faqs: [
        {
          question: 'Um pouco de mura é normal em um OLED?',
          answer: 'Sim. Manchas fracas nos fundos de 1% a 5% são comuns. Só é um problema se você notar em filmes e jogos normais.',
        },
        {
          question: 'O teste de cinza OLED funciona em telas LCD?',
          answer:
            'Sim, mas os LCDs mostram brilho e vazamento da luz de fundo no cinza escuro. Para eles, o [teste de uniformidade](/gray-screen) é mais adequado.',
        },
        {
          question: 'Que brilho devo usar?',
          answer: 'Brilho médio em um ambiente escuro. Brilho muito alto pode esconder problemas perto do preto, e muito baixo pode exagerá-los.',
        },
      ],
    },
    'hacked-screen': {
      Guide: HackedScreenGuidePtBr,
      faqs: [
        {
          question: 'O simulador de tela hackeada é seguro?',
          answer: 'Sim. É uma página da web que só mostra animações. Não instala nada e não mexe em arquivos, na webcam nem na rede.',
        },
        {
          question: 'Como fecho a tela hackeada?',
          answer: 'Pressione Esc para sair da tela cheia e depois feche a aba.',
        },
        {
          question: 'Funciona no celular?',
          answer:
            'Sim. Abra em um navegador de celular e toque duas vezes para abrir em tela cheia. A sirene precisa de um toque antes, porque os celulares bloqueiam o som até você interagir.',
        },
      ],
    },
    'no-signal-screen': {
      Guide: NoSignalGuidePtBr,
      faqs: [
        {
          question: 'Como mostro a tela sem sinal na minha TV?',
          answer: 'Abra a página no navegador da TV, ou espelhe ou conecte um notebook, e pressione F ou toque em Tela cheia.',
        },
        {
          question: 'Posso mudar o texto SEM SINAL?',
          answer: 'Sim. Abra Mais para digitar sua própria mensagem (até 24 caracteres) e o nome da entrada, como HDMI 2 ou AV.',
        },
        {
          question: 'O que é o bipe das barras de cores da TV?',
          answer:
            'Um tom de teste constante de 1 kHz que as emissoras tocavam com as barras de cores para alinhar os níveis de áudio. Ligue com o botão do tom de 1 kHz.',
        },
      ],
    },
  },
  colors: {
    white: {
      Guide: WhiteScreenGuidePtBr,
      faqs: [
        {
          question: 'Como deixo minha tela totalmente branca?',
          answer: 'Abra o WhiteScreen.vip, selecione o branco e ative a tela cheia, se o seu navegador oferecer.',
        },
        {
          question: 'A tela branca funciona no celular?',
          answer:
            'Sim. Você pode abrir a ferramenta em um navegador de celular compatível. O comportamento da tela cheia depende do seu aparelho e do navegador.',
        },
        {
          question: 'Uma tela branca consegue detectar dead pixels?',
          answer:
            'Um fundo branco pode revelar pixels escuros, enquanto fundos pretos e de cores primárias ajudam a expor outros defeitos visíveis de pixel. É uma checagem visual, não um diagnóstico completo do hardware.',
        },
        {
          question: 'Por que minha tela fica desligando?',
          answer:
            'O timer de repouso do aparelho, as configurações de economia de bateria ou restrições do navegador podem desligar a tela. Confira as configurações de energia e use o recurso Manter a tela ligada, se o site e o navegador oferecerem.',
        },
        {
          question: 'Uma tela branca brilhante é segura para telas OLED?',
          answer:
            'Evite deixar uma imagem clara e estática em uma tela OLED por longos períodos. Siga as recomendações do fabricante sobre brilho e uso da tela. Nenhum recurso do navegador garante que o burn-in será evitado.',
        },
        {
          question: 'O WhiteScreen.vip é grátis?',
          answer:
            'O WhiteScreen.vip é totalmente grátis para usar online no navegador. Todas as cores de tela, testes e downloads de imagem estão disponíveis sem cadastro, sem criar conta e sem instalar programas.',
        },
        {
          question: 'Qual a diferença entre uma tela branca em branco e uma tela branca pura?',
          answer:
            'Aqui são a mesma coisa: uma tela preenchida com branco puro (#FFFFFF) e nada mais. Escolha Quente ou diminua o brilho se quiser um visual mais suave, off-white.',
        },
        {
          question: 'Posso usar uma tela branca para decalcar desenhos?',
          answer:
            'Sim. Um tablet ou monitor com brilho máximo funciona como uma mesa de luz simples. Prenda o papel com fita e decalque com cuidado, sem apertar a tela com força.',
        },
        {
          question: 'Uma tela branca ajuda a limpar o monitor?',
          answer:
            'Uma tela branca facilita ver poeira, marcas de dedo e manchas. Desligue a tela antes de limpar e depois abra a tela branca de novo para conferir os pontos que ficaram.',
        },
      ],
    },
    black: {
      Guide: BlackScreenGuidePtBr,
      faqs: [
        {
          question: 'Uma tela preta economiza bateria?',
          answer:
            'Em celulares, tablets e notebooks OLED, sim: os pixels pretos ficam desligados. Em telas LCD a luz de fundo continua acesa, então a economia é mínima. Diminuir o brilho economiza mais em LCD.',
        },
        {
          question: 'Uma tela preta mantém meu computador acordado?',
          answer:
            'Sim, enquanto a página estiver aberta com Manter a tela ligada ativado, nos navegadores compatíveis. Suas configurações normais de repouso voltam quando você fecha a página ou desliga a opção.',
        },
        {
          question: 'Uma tela preta é o mesmo que desligar o monitor?',
          answer:
            'Não. O monitor continua ligado e o computador continua funcionando; a tela só mostra preto puro. No OLED ela parece desligada porque os pixels ficam apagados, enquanto um LCD continua com a luz de fundo acesa.',
        },
        {
          question: 'Posso colocar uma tela inicial ou tela de bloqueio preta no celular?',
          answer: 'Sim. Escolha Celular no menu Baixar, ou digite o tamanho exato do seu celular em Tamanho personalizado, e defina como papel de parede da tela inicial ou de bloqueio.',
        },
        {
          question: 'Como faço um vídeo de tela preta?',
          answer: 'Baixe um PNG preto em 1080p ou 4K, coloque na linha do tempo do seu editor de vídeo e estique até a duração que precisar.',
        },
        {
          question: 'Preto ou branco: qual é melhor para limpar o monitor?',
          answer:
            'O preto mostra bem marcas de dedo, riscos e manchas, principalmente com uma luz vinda de lado. Para poeira, uma [tela branca](/) funciona melhor. Desligue a tela antes de limpar.',
        },
      ],
    },
    yellow: {
      Guide: YellowScreenGuidePtBr,
      faqs: [
        {
          question: 'Uma tela amarela cansa menos a vista?',
          answer:
            'O amarelo não tem luz azul, e muita gente acha isso mais relaxante à noite. No brilho máximo o amarelo continua forte, então diminua o controle de Brilho para uma luz quente mais suave.',
        },
        {
          question: 'Posso deixar a tela amarela mais quente ou mais suave?',
          answer: 'Sim. Escolha Quente para um amarelo dourado e diminua o controle de Brilho para uma luz mais fraca e suave.',
        },
        {
          question: 'Posso baixar uma imagem de tela amarela?',
          answer:
            'Sim. Use Baixar, abaixo da prévia, para salvar um PNG amarelo em 1080p, 2K, 4K ou tamanho de celular, ou em um tamanho personalizado até 8K.',
        },
      ],
    },
    green: {
      Guide: GreenScreenGuidePtBr,
      faqs: [
        {
          question: 'O que é a tela verde da morte?',
          answer:
            'É a versão verde da tela azul da morte do Windows, mostrada quando uma versão Windows Insider Preview trava. Consoles Xbox também podem ficar presos em uma tela verde de carregamento. Quer mostrar uma por diversão? Experimente a [tela azul da morte falsa](/fake-blue-screen-of-death).',
        },
        {
          question: 'Posso usar uma tela verde no celular?',
          answer:
            'Sim, para objetos pequenos e closes. Abra esta página, aumente o brilho, abra em tela cheia e ligue Manter a tela ligada. Para qualquer coisa maior que o celular, use um tecido verde ou um fundo no editor.',
        },
        {
          question: 'Este site de tela verde remove o meu fundo?',
          answer:
            'Não. Esta página mostra verde sólido e permite baixar imagens verdes. A remoção do fundo acontece no seu app de vídeo ou de transmissão, como OBS, CapCut, Zoom ou Teams.',
        },
      ],
    },
    blue: {
      Guide: BlueScreenGuidePtBr,
      faqs: [
        {
          question: 'Esta tela azul é a tela azul da morte do Windows?',
          answer:
            'Não. É uma tela de cor azul simples para iluminação, testes e edição. Não mostra erro nenhum e não afeta o computador. Procurando a tela de erro para uma pegadinha? Experimente a [tela azul da morte falsa](/fake-blue-screen-of-death).',
        },
        {
          question: 'Posso usar uma tela azul no notebook, PC ou celular?',
          answer:
            'Sim. Funciona em qualquer navegador moderno. Toque duas vezes para abrir em tela cheia, ligue Manter a tela ligada e use o controle de Brilho para ajustar o tom.',
        },
        {
          question: 'Por que uma tela azul pura parece tão escura?',
          answer:
            'Nossos olhos são menos sensíveis ao azul, então o azul puro parece bem mais escuro que o verde ou o vermelho com o mesmo brilho. Isso é normal e não é defeito.',
        },
      ],
    },
    red: {
      Guide: RedScreenGuidePtBr,
      faqs: [
        {
          question: 'Posso usar uma tela vermelha no iPhone ou no Android?',
          answer:
            'Sim. Abra esta página no navegador do celular, toque no ícone de tela cheia e ligue Manter a tela ligada. Diminua o controle de Brilho para uma luz noturna fraca.',
        },
        {
          question: 'Por que minha tela vermelha parece laranja?',
          answer:
            'Normalmente o modo de cor da tela ou um filtro noturno quente (Night Shift, Luz noturna) está alterando a cor. Desligue esses recursos, use o modo padrão ou sRGB e confira de novo.',
        },
        {
          question: 'Uma tela vermelha serve como luz de segurança de laboratório fotográfico?',
          answer:
            'Não. O vermelho dela não é filtrado de forma estreita o suficiente e é forte demais para filme ou papel fotográfico. Use uma luz de segurança adequada para materiais sensíveis à luz.',
        },
      ],
    },
    pink: {
      Guide: PinkScreenGuidePtBr,
      faqs: [
        {
          question: 'Qual é o código de cor deste rosa?',
          answer:
            'É #FF69B4 (RGB 255, 105, 180), muitas vezes chamado de rosa choque. Escolha Quente para um rosa coral, Frio para um rosa antigo ou diminua o controle de Brilho para um rosa mais escuro.',
        },
        {
          question: 'Posso deixar uma tela rosa ligada por 10 horas?',
          answer:
            'Sim. Ligue Manter a tela ligada e a tela fica acesa enquanto a página estiver aberta, nos navegadores compatíveis. Deixe o notebook ou o celular na tomada em sessões longas.',
        },
        {
          question: 'Por que minha tela rosa parece roxa?',
          answer:
            'A tela está puxando demais para o azul. Escolha Quente abaixo da prévia ou mude a tela para uma temperatura de cor mais quente ou para o modo sRGB.',
        },
      ],
    },
  },
  glanceHeadings: {
    'dvd-screensaver': 'O que é o protetor de tela DVD?',
    'broken-screen': 'O que é o efeito tela quebrada?',
    'fake-zoom-meeting': 'O que é a tela falsa de reunião do Zoom?',
    'fake-windows-10-update': 'O que é a atualização falsa do Windows 10?',
    'fake-windows-11-update': 'O que é a atualização falsa do Windows 11?',
    'fake-blue-screen-of-death': 'O que é a tela azul da morte falsa?',
    'fake-mac-update': 'O que é a atualização falsa do Mac?',
    'pomodoro-timer': 'O que é um timer Pomodoro?',
    'flip-clock-screensaver': 'O que é o protetor de tela relógio flip?',
    'zoom-lighting': 'O que é a luz para videochamadas?',
    'countdown-timer': 'O que é um temporizador de contagem regressiva?',
    'ring-light': 'O que é um ring light online?',
    stopwatch: 'O que é um cronômetro online?',
    'screen-refresh-rate-test': 'O que é um teste de taxa de atualização?',
    'dead-pixel-test': 'O que é um teste de dead pixel?',
    'touch-screen-test': 'O que é um teste de tela touch?',
    'monitor-ghosting-test': 'O que é um teste de ghosting do monitor?',
    'monitor-test': 'O que é um teste de monitor?',
    'screen-burn-in-test': 'O que é um teste de burn-in de tela?',
    'screen-resolution-test': 'O que é um teste de resolução?',
    'screen-color-test': 'O que é um teste de cores do monitor?',
    'frame-rate-test': 'O que é um teste de FPS?',
    'oled-gray-test': 'O que é um teste de cinza OLED?',
    'hacked-screen': 'O que é o simulador de tela hackeada?',
    'no-signal-screen': 'O que é uma tela sem sinal?',
    'white-screen': 'O que é uma tela branca?',
    'black-screen': 'O que é uma tela preta?',
    'yellow-screen': 'O que é uma tela amarela?',
    'green-screen': 'O que é uma tela verde?',
    'blue-screen': 'O que é uma tela azul?',
    'red-screen': 'O que é uma tela vermelha?',
    'pink-screen': 'O que é uma tela rosa?',
  },
}
