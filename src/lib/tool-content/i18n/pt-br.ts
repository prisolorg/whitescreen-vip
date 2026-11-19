import type { ToolTranslations } from './types'

export const ptBr: ToolTranslations = {
  'white-screen': {
    glance: {
      answer:
        'Uma tela branca preenche todo o seu display com branco puro (#FFFFFF). Clique em Tela cheia ou aperte F e cada pixel mostra a mesma cor, sem barras nem distrações. No brilho máximo é a luz mais forte que sua tela consegue gerar: serve como luz para chamadas de vídeo e fotos, para limpar o monitor, decalcar desenhos e achar pixels mortos.',
      features: [
        'Branco puro #FFFFFF ou qualquer cor hexadecimal',
        'Tela cheia com um clique e controle de brilho',
        'Temperatura de cor de 2700 K (quente) a 9300 K (fria)',
        'Download grátis em PNG de 720p até 8K',
      ],
      benefits: [
        'Luz suave na hora para chamadas, selfies e decalque',
        'Funciona em celulares, notebooks, monitores e Smart TVs',
        'Sem app, sem cadastro e sem instalar nada',
      ],
    },
  },
  'black-screen': {
    glance: {
      answer:
        'Uma tela preta deixa todo o display em preto puro (#000000) com um clique. Em telas OLED os pixels se apagam totalmente, então é o jeito mais rápido de esconder o que está na tela, verificar vazamento de luz ou economizar bateria.',
      features: [
        'Preto puro #000000 ou qualquer cor personalizada',
        'Tela cheia com um clique e controle de brilho',
        'Mantém a tela acesa no modo tela cheia',
        'Download grátis em PNG de 720p até 8K',
      ],
      benefits: ['Revela vazamento de luz, brilho IPS e pixels presos', 'Economiza energia em telas OLED', 'Grátis e sem instalar nada'],
    },
  },
  'dead-pixel-test': {
    glance: {
      answer:
        'Um teste de pixel morto preenche a tela com cores sólidas, uma após a outra, para que os pixels com defeito apareçam. Um pixel morto fica preto em todas as cores, um pixel preso fica de uma cor brilhante e um pixel quente fica branco. A verificação completa leva cerca de um minuto em qualquer monitor, notebook, TV ou celular.',
      features: [
        'Fundos em tela cheia: branco, preto, vermelho, verde, azul e cinza',
        'Troca automática ou pelas setas do teclado',
        'Funciona em painéis LCD, IPS, VA, OLED e mini-LED',
        'Dicas para diferenciar pixel morto, preso e quente',
      ],
      benefits: [
        'Encontre defeitos antes do fim do prazo de devolução',
        'Confira um monitor ou celular usado antes de pagar',
        'Grátis, privado e sem instalar nada',
      ],
    },
    steps: [
      'Limpe a tela primeiro para não confundir poeira com pixel defeituoso.',
      'Aperte F para tela cheia e use as setas, clique na tela ou ative a troca automática para mudar de cor.',
      'Observe todo o painel com calma em cada cor. Uma lupa ou o zoom da câmera do celular ajudam.',
      'Pontos escuros em cores claras indicam pixels mortos; pontos claros ou coloridos no preto indicam pixels presos ou quentes.',
    ],
    useCases: [
      { title: 'Monitor novo', description: 'Verifique um monitor, notebook ou TV novo dentro do prazo de devolução.' },
      { title: 'Compra de usado', description: 'Teste um celular ou notebook usado antes de pagar.' },
      { title: 'Prova para garantia', description: 'Fotografe o defeito em uma cor sólida para sua reclamação.' },
      { title: 'Inspeção periódica', description: 'Confirme de tempos em tempos que não surgiram novos defeitos.' },
    ],
    faqs: [
      {
        question: 'Qual a diferença entre pixel morto e pixel preso?',
        answer:
          'Um pixel morto fica escuro em todas as cores. Um preso fica aceso em uma cor, como um ponto vermelho no preto. Um quente fica branco. Pixels presos às vezes voltam ao normal; mortos quase nunca.',
      },
      {
        question: 'Esta ferramenta conserta pixels mortos?',
        answer:
          'Não. O teste só ajuda a ver os defeitos. Alternar cores rapidamente às vezes é sugerido para pixels presos, mas sem garantia, e um pixel morto é falha de hardware.',
      },
      {
        question: 'Como reclamo de um pixel morto?',
        answer:
          'Tire uma foto nítida do defeito na cor em que ele aparece melhor, anote a posição e fale com o fabricante ou a loja com a nota fiscal.',
      },
    ],
  },
  'screen-refresh-rate-test': {
    glance: {
      answer:
        'Um teste de taxa de atualização mede quantas vezes por segundo sua tela redesenha a imagem, em hertz (Hz). Ele cronometra os quadros do navegador e informa 60, 75, 120, 144, 165 ou 240 Hz, para você confirmar que o monitor de alta taxa está mesmo na velocidade anunciada.',
      features: [
        'Medição ao vivo em Hz com a taxa padrão mais próxima',
        'Tempo médio, mínimo e máximo dos quadros',
        'Meça de novo após mudar as configurações',
        'Funciona em monitores, notebooks, celulares e tablets',
      ],
      benefits: [
        'Confirme que seu monitor de 144 ou 240 Hz não está em 60 Hz',
        'Verifique cabo, porta e configuração do Windows ou macOS',
        'Resultado em segundos, sem download',
      ],
    },
    steps: [
      'Abra a página e espere um ou dois segundos até a leitura estabilizar.',
      'Leia o valor em Hz e a taxa padrão mais próxima.',
      'Se aparecer 60 Hz em um monitor de alta taxa, confira as configurações de tela e o cabo e teste de novo.',
      'Aperte F ou toque duas vezes para tela cheia, e Esc para sair.',
    ],
    useCases: [
      { title: 'Monitor novo', description: 'Confirme que um monitor de 144 ou 240 Hz roda mesmo nessa taxa.' },
      { title: 'Cabo e porta', description: 'Cabos ou portas HDMI antigos podem limitar a 60 Hz.' },
      { title: 'Notebook na bateria', description: 'Muitos notebooks caem para 60 Hz fora da tomada.' },
      { title: 'Celulares e tablets', description: 'Veja se os modos adaptativos de 90/120 Hz estão ativos.' },
    ],
    faqs: [
      {
        question: 'Por que aparece 60 Hz no meu monitor de 144 Hz?',
        answer:
          'A taxa é definida nas configurações de tela do sistema, e o cabo precisa suportá-la (DisplayPort ou HDMI 2.0 ou superior). Veja também se a janela do navegador está no monitor certo.',
      },
      {
        question: 'Por que o número oscila?',
        answer:
          'Abas pesadas, economia de energia e taxa variável (FreeSync, G-Sync, ProMotion) mudam o tempo dos quadros. A leitura usa a mediana dos quadros recentes para suavizar.',
      },
      {
        question: 'Taxa de atualização é o mesmo que FPS?',
        answer:
          'Não. A taxa é quantas vezes a tela se atualiza; FPS é quantos quadros novos um jogo ou vídeo entrega. Você só vê tantos quadros quanto a taxa permite.',
      },
    ],
  },
  'touch-screen-test': {
    glance: {
      answer:
        'Um teste de tela touch verifica se todas as partes da tela respondem ao toque. Toque cada quadrado de uma grade para achar zonas mortas, desenhe linhas para ver falhas ou saltos e coloque vários dedos ao mesmo tempo para saber quantos pontos de toque seu celular ou tablet suporta.',
      features: [
        'Grade que marca cada quadrado tocado, com cobertura em %',
        'Modo desenho para achar falhas, saltos e toques fantasmas',
        'Modo multitoque que conta dedos simultâneos',
        'Funciona com dedos, caneta e mouse',
      ],
      benefits: ['Ache zonas mortas após queda ou troca de tela', 'Teste um celular ou tablet usado antes de comprar', 'Sem instalar app'],
    },
    steps: [
      'Escolha a grade de zonas mortas e deslize o dedo devagar por cada quadrado até a cobertura chegar a 100%.',
      'Quadrados que não preenchem depois de várias tentativas indicam uma zona morta.',
      'Mude para Desenhar e trace linhas devagar; falhas ou saltos indicam toques perdidos.',
      'Use Multitoque e apoie vários dedos para ver quantos são detectados de uma vez.',
    ],
    useCases: [
      { title: 'Pontos sem resposta', description: 'Descubra exatamente onde o celular ou tablet ignora toques.' },
      { title: 'Depois do conserto', description: 'Teste o novo digitalizador antes de retirar o aparelho.' },
      { title: 'Compra de usado', description: 'Teste toda a superfície em um minuto.' },
      { title: 'Toques fantasmas', description: 'Veja se surgem toques sem nenhum dedo na tela.' },
    ],
    faqs: [
      {
        question: 'Quantos pontos de toque minha tela deve suportar?',
        answer: 'A maioria dos celulares e tablets detecta de 5 a 10 dedos. A página mostra o número informado pelo navegador e o máximo visto de uma vez.',
      },
      {
        question: 'Funciona com mouse ou caneta?',
        answer: 'Sim. Mouse e caneta também desenham, então você pode testar uma stylus do mesmo jeito.',
      },
      {
        question: 'O que causa zonas mortas?',
        answer: 'Vidro trincado, cabo do digitalizador danificado, umidade ou película com bolhas de ar. Retire a película e teste de novo primeiro.',
      },
    ],
  },
  'white-noise-generator': {
    glance: {
      answer:
        'Um gerador de ruído branco toca um chiado constante com todas as frequências audíveis na mesma intensidade. Esse som uniforme encobre vozes, trânsito e barulhos repentinos, por isso é usado para foco, estudo, acalmar bebês e dormir. Use volume baixo e um timer na hora de dormir.',
      features: [
        'Ruído branco, rosa e marrom no mesmo player',
        'Filtro de tom e volume em decibéis',
        'Timer de sono com desligamento suave',
        'Visuais opcionais: chuvisco de TV ou forma de onda',
      ],
      benefits: ['Encobre distrações no escritório e em casa', 'Ajuda muita gente a dormir mais rápido', 'Grátis, sem fim e sem app'],
    },
    steps: [
      'Aperte Iniciar. Nada toca antes disso, e começa em volume moderado.',
      'Use os botões Branco, Rosa e Marrom para abrir cada gerador; volume, filtro e visual continuam iguais.',
      'Use um filtro passa-baixa para suavizar o chiado ou passa-alta para tirar o grave, e ajuste o corte.',
      'Escolha um visual (onda, chuvisco de TV ou tela escura) e um timer de sono opcional.',
      'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.',
    ],
    useCases: [
      { title: 'Dormir', description: 'Encubra trânsito, vizinhos e roncos com um som constante.' },
      { title: 'Foco', description: 'Abafe conversas e barulho de casa enquanto trabalha ou estuda.' },
      { title: 'Bebês', description: 'Muitos pais usam ruído branco suave para acalmar o bebê. Mantenha baixo e longe do berço.' },
      { title: 'Chuvisco de TV retrô', description: 'Mude o visual para chuvisco em vídeos, cenários ou festas temáticas.' },
    ],
    faqs: [
      {
        question: 'O que é ruído branco?',
        answer: 'Ruído branco tem a mesma potência em todas as frequências. Ao ouvido soa como um chiado claro e uniforme, como rádio ou TV fora de sintonia.',
      },
      {
        question: 'O que fazem os filtros passa-baixa e passa-alta?',
        answer:
          'O passa-baixa mantém as frequências abaixo do corte, deixando o ruído mais grave e suave. O passa-alta mantém as de cima, tira o ronco e deixa o som mais arejado.',
      },
      {
        question: 'Consome dados?',
        answer: 'Não. O ruído é gerado no seu aparelho com a Web Audio API, nada é transmitido e continua funcionando offline depois de carregado.',
      },
      {
        question: 'É seguro olhar o chuvisco de TV?',
        answer: 'O pisca-pisca rápido pode incomodar e desencadear epilepsia fotossensível. Se for sensível, use o visual de onda ou o escuro.',
      },
    ],
  },
  'fake-blue-screen-of-death': {
    glance: {
      answer:
        'Uma tela azul da morte falsa (BSOD) imita a tela de erro do Windows: a carinha triste, “Seu PC encontrou um problema”, um código de parada e um contador de progresso. É só visual: nada trava e você sai com Esc. Escolha Windows 10, Windows 11, a nova tela preta ou o clássico XP.',
      features: ['Estilos Windows 10, 11, preto e XP clássico', 'Códigos reais como CRITICAL_PROCESS_DIED', 'Porcentagem subindo e bloco estilo QR', 'Tela cheia com cursor oculto'],
      benefits: ['A pegadinha de computador mais convincente', 'Cenário realista para vídeos e tutoriais', 'Totalmente inofensiva'],
    },
    steps: [
      'Escolha um estilo: Windows 10, Windows 11, a nova tela preta ou o clássico XP/7.',
      'Defina o código de parada e quanto tempo o contador leva até 100%.',
      'Toque duas vezes ou aperte F para tela cheia. O cursor some logo.',
      'Aperte Esc, ou mexa o mouse e clique em fechar, para sair.',
    ],
    useCases: [
      { title: 'Pegadinha no escritório', description: 'Deixe na tela de um colega por alguns segundos e revele a brincadeira.' },
      { title: 'Vídeos e lives', description: 'Mostre uma falha na câmera sem travar um computador de verdade.' },
      { title: 'Treinamento de TI', description: 'Mostre como é um erro de parada e o que o código significa.' },
      { title: 'Cinema e teatro', description: 'Uma tela de erro convincente para uma cena, em qualquer aparelho.' },
    ],
    faqs: [
      {
        question: 'O que é a tela azul da morte?',
        answer:
          'É o erro em tela cheia que o Windows mostra quando encontra um problema do qual não consegue se recuperar, como um driver com falha ou erro de memória. Ele mostra um código de parada, salva informações e reinicia.',
      },
      {
        question: 'O que significam os códigos de parada?',
        answer:
          'Cada um indica o tipo de falha: CRITICAL_PROCESS_DIED significa que um processo do sistema parou, IRQL_NOT_LESS_OR_EQUAL costuma apontar para um driver e MEMORY_MANAGEMENT muitas vezes para a RAM. Aqui são só texto.',
      },
      {
        question: 'Isso pode danificar meu computador?',
        answer: 'Não. É uma imagem em uma aba do navegador. Não trava o Windows, não muda configurações nem instala nada.',
      },
      {
        question: 'Por que a nova tela de erro é preta?',
        answer: 'Em 2025 a Microsoft trocou a tela azul do Windows 11 por uma preta mais simples. Escolha “Preto (novo)” para esse visual.',
      },
      {
        question: 'Tem ligação com a Microsoft?',
        answer: 'Não. É uma recriação independente para entretenimento, sem vínculo ou patrocínio da Microsoft.',
      },
    ],
  },
  'pomodoro-timer': {
    glance: {
      answer:
        'Um timer Pomodoro divide o trabalho em blocos de 25 minutos de foco com pausas de 5 minutos, e uma pausa longa a cada quatro blocos. O método, criado por Francesco Cirillo no fim dos anos 1980, ajuda a começar tarefas, evitar o esgotamento e contar quantos blocos você concluiu.',
      features: ['Ciclo 25/5 com pausas longas', 'Durações ajustáveis e início automático', 'Aviso sonoro e contagem na aba', 'Contador de sessões e anel de progresso'],
      benefits: ['Vença a procrastinação com metas curtas', 'Pausas reduzem o cansaço', 'Grátis, sem conta'],
    },
    steps: [
      'Aperte Iniciar para começar uma sessão de foco de 25 minutos.',
      'Mude, se quiser, a duração do foco e das pausas (por exemplo 50/10).',
      'Ao fim de cada fase toca um aviso e a próxima começa; desligue o início automático para começar cada uma você mesmo.',
      'Use Pular para avançar ou Reiniciar para recomeçar. A barra de espaço inicia e pausa.',
      'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.',
    ],
    useCases: [
      { title: 'Estudos', description: 'Divida a revisão em blocos curtos com pausas de verdade.' },
      { title: 'Trabalho focado', description: 'Proteja 25 minutos seguidos de e-mail e chat.' },
      { title: 'Sala de aula', description: 'Projete o timer para atividades e pausas cronometradas.' },
      { title: 'Criar hábitos', description: 'Conte as sessões para ver quanto tempo de foco você acumula.' },
    ],
    faqs: [
      {
        question: 'O que é a técnica Pomodoro?',
        answer:
          'Um método de gestão do tempo do fim dos anos 1980: trabalhe em blocos focados (tradicionalmente 25 minutos), faça uma pausa curta depois de cada um e uma longa a cada quatro.',
      },
      {
        question: 'O timer continua em uma aba em segundo plano?',
        answer: 'Sim. Ele conta pelo relógio real, então continua preciso mesmo se o navegador desacelerar abas ocultas, e o título da aba mostra o tempo restante.',
      },
      {
        question: 'Posso mudar as durações?',
        answer: 'Sim. Defina em minutos o foco, a pausa curta e a longa, e quantas sessões vêm antes da pausa longa.',
      },
    ],
  },
}
