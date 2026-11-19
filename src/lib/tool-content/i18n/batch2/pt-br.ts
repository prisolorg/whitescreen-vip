import type { ToolTranslations } from '../types'

export const ptBr: ToolTranslations = {
  'monitor-test': {
    glance: {
      answer:
        'Um teste de monitor é um conjunto de padrões em tela cheia que verifica como sua tela mostra cor, contraste, nitidez e gama. Passe por degradês, níveis de preto e branco, nitidez de texto e padrões de geometria para achar falhas ou acertar as configurações de imagem.',
      features: ['Padrões de degradê, gama, contraste e nitidez', 'Escalas de nível de preto e de branco', 'Testes de geometria e clareza de texto', 'Atalhos de teclado para passar por todos os padrões'],
      benefits: ['Ajuste brilho, contraste e nitidez do jeito certo', 'Verifique um monitor novo ou usado em minutos', 'Funciona em qualquer navegador, inclusive em TVs'],
    },
    steps: [
      'Deixe o monitor na resolução nativa e tire o zoom do navegador (Ctrl/Cmd + 0).',
      'Aperte F para tela cheia e use os botões de padrão ou as setas para trocar.',
      'Procure faixas nos degradês, linhas retas nas grades e nitidez ou efeito moiré nos padrões finos.',
      'Ajuste brilho, contraste e nitidez do monitor enquanto olha cada padrão.',
    ],
    useCases: [
      { title: 'Primeira configuração', description: 'Ajuste brilho, contraste e nitidez ao tirar o monitor da caixa.' },
      { title: 'Faixas de cor', description: 'Degradês suaves revelam saltos por pouca profundidade de cor.' },
      { title: 'Geometria e escala', description: 'Grades mostram imagem esticada, cortada ou borrada.' },
      { title: 'Cabo e entrada', description: 'Padrões finos mostram se um cabo ou adaptador está suavizando a imagem.' },
    ],
    faqs: [
      { question: 'Um teste de monitor online é tão bom quanto um calibrador?', answer: 'Não. Os padrões ajudam a julgar e ajustar a olho, mas uma calibração de cor precisa exige um colorímetro.' },
      {
        question: 'Por que os padrões finos piscam ou mostram moiré?',
        answer: 'Zoom do navegador, escala do sistema ou resolução não nativa redimensionam os padrões de 1 pixel. Use zoom de 100% e a resolução nativa.',
      },
      { question: 'Como deve ficar o padrão de gama?', answer: 'De longe, as áreas listradas e as lisas devem ter brilho parecido. Uma grande diferença indica que sua gama foge do padrão 2,2.' },
    ],
  },
  'screen-resolution-test': {
    glance: {
      answer:
        'Um teste de resolução de tela mostra a resolução em pixels, a área visível do navegador, a proporção de pixels e a profundidade de cor. A resolução física é o tamanho CSS vezes a proporção de pixels: um notebook 1920 × 1080 com escala de 125% informa 1536 × 864 pixels CSS.',
      features: ['Resolução da tela, da janela e física', 'Proporção de pixels e escala', 'Profundidade de cor e orientação', 'Atualiza ao redimensionar ou girar'],
      benefits: ['Confirme se você está mesmo em 1080p, 1440p ou 4K', 'Verifique a escala do Windows ou macOS', 'Na hora, sem instalar nada'],
    },
    steps: [
      'Abra a página na tela que quer verificar: os dados atualizam ao vivo.',
      'Redimensione a janela ou gire o aparelho para ver os valores mudarem.',
      'Aperte F para tela cheia e ver a área visível completa.',
      'Olhe o padrão de 1 pixel: na resolução nativa e com zoom de 100% ele deve parecer um cinza fino e uniforme.',
    ],
    useCases: [
      { title: 'Saber sua resolução', description: 'Descubra rápido a resolução para escolher papéis de parede ou ajustes de jogos.' },
      { title: 'Design responsivo', description: 'Desenvolvedores podem ver a área visível e a proporção em aparelhos reais.' },
      { title: 'Problemas de escala', description: 'Confirme se a escala do sistema muda a resolução efetiva.' },
      { title: 'Suporte técnico', description: 'Envie dados exatos da tela ao relatar um erro em um site.' },
    ],
    faqs: [
      {
        question: 'Por que o tamanho é menor que a resolução do meu monitor?',
        answer: 'Os navegadores usam pixels CSS. Com escala de 150%, uma tela de 3840 pixels de largura informa 2560. Multiplique pela proporção de pixels para ter os pixels físicos.',
      },
      { question: 'O que é proporção de pixels?', answer: 'É o número de pixels físicos por pixel CSS. Um valor 2 indica tela de alta densidade, tipo Retina.' },
      { question: 'O zoom do navegador muda os valores?', answer: 'Sim. O zoom muda a área visível e a proporção. Volte para 100% para ter dados exatos.' },
    ],
  },
  'brown-noise-generator': {
    glance: {
      answer:
        'Um gerador de ruído marrom toca um som grave e profundo, cuja potência cai bastante nas frequências altas, como uma cachoeira ou vento forte. É mais suave que o ruído branco, por isso muita gente prefere para dormir, focar com TDAH e encobrir ruídos graves como trânsito ou ronco.',
      features: ['Ruído marrom (browniano) de verdade, gerado na hora', 'Filtros passa-baixa e passa-alta para o tom', 'Controle de volume e timer de sono', 'Troque para ruído branco ou rosa com um clique'],
      benefits: ['Som suave e grave para longas sessões', 'Muito usado para foco e trabalho profundo', 'Grátis e funciona offline depois de carregado'],
    },
    steps: [
      'Aperte Iniciar. Nada toca antes disso.',
      'Ajuste o volume; o ruído marrom parece mais baixo que o branco no mesmo nível, então suba devagar.',
      'Use um filtro passa-baixa para um ronco ainda mais grave, ou passa-alta para tirar o grave em alto-falantes pequenos.',
      'Escolha um timer de sono e um visual, se quiser.',
      'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.',
    ],
    useCases: [
      { title: 'Foco profundo', description: 'Muita gente, inclusive pessoas com TDAH, diz que o ruído marrom ajuda a se concentrar.' },
      { title: 'Dormir', description: 'O tom grave e suave pode ficar ligado por horas.' },
      { title: 'Encobrir sons graves', description: 'Abafa o ronco do trânsito, passos e o zumbido do ar-condicionado.' },
      { title: 'Relaxar', description: 'Combine com uma tela escura à noite.' },
    ],
    faqs: [
      {
        question: 'Qual a diferença para o ruído branco e rosa?',
        answer: 'O ruído marrom perde potência rápido com a frequência (cerca de 6 dB por oitava), então é o mais grave dos três. O rosa fica no meio e o branco é o mais agudo.',
      },
      { question: 'Por que se chama ruído marrom?', answer: 'Por causa do movimento browniano, o movimento aleatório de partículas, e não da cor. Também é chamado de ruído vermelho.' },
      { question: 'Por que quase não ouço no celular?', answer: 'Alto-falantes pequenos não reproduzem graves. Use fones ou caixas maiores, ou aplique um filtro passa-alta e aumente um pouco o volume.' },
    ],
  },
  'pink-noise-generator': {
    glance: {
      answer:
        'Um gerador de ruído rosa toca um som cuja potência cai por igual a cada oitava, por isso soa equilibrado e mais suave que o ruído branco, como chuva constante. É usado para dormir, relaxar e estudar, e técnicos de áudio usam ruído rosa para verificar o equilíbrio das caixas de som.',
      features: ['Ruído rosa real gerado no navegador', 'Filtro de tom, volume em decibéis e timer de sono', 'Forma de onda ou espectro ao vivo', 'Controle pelo teclado: espaço para tocar ou pausar'],
      benefits: ['Som natural, como chuva, fácil de dormir', 'Sinal de referência para testar caixas de som', 'Grátis e com pouca publicidade'],
    },
    steps: [
      'Aperte Iniciar. O áudio nunca começa sozinho.',
      'Ajuste o volume em decibéis.',
      'Use o filtro passa-baixa ou passa-alta e o controle de corte para refinar o tom.',
      'Escolha um timer de sono e um visual, se quiser.',
      'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.',
    ],
    useCases: [
      { title: 'Dormir', description: 'Uma alternativa popular e menos áspera que o ruído branco para a noite toda.' },
      { title: 'Estudar', description: 'Um som de fundo equilibrado para longas leituras.' },
      { title: 'Testar caixas de som', description: 'Ruído rosa é o sinal padrão para ouvir o equilíbrio das caixas.' },
      { title: 'Ambientes calmos', description: 'Som de fundo suave para salas de espera e estúdios.' },
    ],
    faqs: [
      { question: 'O que é ruído rosa?', answer: 'Ruído rosa tem a mesma energia em cada oitava, então cada passo para o agudo soa um pouco mais baixo que no branco. Soa mais natural, como chuva.' },
      { question: 'Ruído rosa ajuda a dormir?', answer: 'Muita gente acha relaxante, e alguns estudos pequenos sugerem que pode favorecer o sono profundo, mas o efeito varia de pessoa para pessoa.' },
      { question: 'Posso usar para testar caixas de som?', answer: 'Sim, para uma escuta rápida. Para medir uma sala com precisão, use software de medição e um microfone calibrado.' },
    ],
  },
  'broken-screen': {
    glance: {
      answer:
        'A pegadinha de tela quebrada enche o display com uma imagem realista de vidro trincado: ponto de impacto, rachaduras se espalhando e, se quiser, manchas de tinta no LCD, com som de vidro. Deixe no celular ou computador de um amigo e revele a brincadeira tocando em fechar ou apertando Esc.',
      features: ['Rachaduras realistas, diferentes a cada vez', 'Toque ou clique para adicionar mais impactos', 'Efeito de dano no LCD e som de vidro', 'Fundos: papel de parede, tela de bloqueio ou preto'],
      benefits: ['Pegadinha clássica e inofensiva que parece real', 'Funciona em celulares, tablets e PCs', 'Sem app, nada muda no aparelho'],
    },
    steps: [
      'Escolha um fundo: papel de parede, tela de bloqueio ou preto.',
      'Toque ou clique em qualquer ponto para trincar o vidro ali. Cada toque adiciona outro impacto.',
      'Deixe o som de vidro ligado para mais realismo, ou desligue.',
      'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.',
    ],
    useCases: [
      { title: 'Pegadinhas inofensivas', description: 'Um susto rápido em um amigo, seguido da revelação.' },
      { title: 'Cenário para vídeos', description: 'Mostre um celular ou monitor quebrado em um curta sem quebrar nada.' },
      { title: '1º de abril', description: 'Uma brincadeira clássica de escritório, totalmente reversível.' },
      { title: 'Referência de design', description: 'Estude como as rachaduras se espalham para ilustração e efeitos visuais.' },
    ],
    faqs: [
      { question: 'Isso pode danificar minha tela?', answer: 'Não. É só uma imagem desenhada no navegador. Aperte Esc, toque em Limpar ou feche a aba para tirar.' },
      {
        question: 'Por que parece vidro de verdade?',
        answer: 'Um impacto real deixa o centro esmigalhado, rachaduras longas em raios e anéis de trincas curtas entre elas. O efeito desenha as três coisas, com brilho e sombra em cada trinca.',
      },
      { question: 'Como fazer a pegadinha com responsabilidade?', answer: 'Seja rápido, escolha alguém que vai rir, nunca use para conseguir dinheiro ou dados e revele a brincadeira logo.' },
    ],
  },
  'countdown-timer': {
    glance: {
      answer:
        'Um timer de contagem regressiva conta do tempo escolhido até zero com números grandes em tela cheia e avisa com um piscar suave e um som opcional. Defina horas, minutos e segundos para aulas, provas, reuniões, apresentações, treinos ou cozinha, e leia de qualquer canto da sala.',
      features: ['Números grandes em tela cheia', 'Horas, minutos e segundos com atalhos', 'Piscar da tela e som opcional no zero', 'Tempo preciso mesmo em abas de fundo'],
      benefits: ['Mantém reuniões e aulas no horário', 'Dá para ler do fundo da sala', 'Grátis, sem app'],
    },
    steps: [
      'Escolha um atalho como 1, 5 ou 25 minutos, ou digite horas, minutos e segundos.',
      'Aperte Iniciar ou a barra de espaço. Aperte de novo para pausar, ou R para zerar.',
      'Ligue o som se quiser: ele vem desligado.',
      'Aperte F para tela cheia e toda a sala ver. Aperte Esc para sair.',
    ],
    useCases: [
      { title: 'Sala de aula', description: 'Cronometre provas, atividades e intervalos no projetor.' },
      { title: 'Apresentações', description: 'Mantenha os palestrantes no horário com um timer visível.' },
      { title: 'Pomodoro', description: 'Faça sessões de foco de 25 minutos com pausas curtas.' },
      { title: 'Treinos e cozinha', description: 'Um timer grande para ler de longe.' },
    ],
    faqs: [
      { question: 'O timer continua em uma aba de fundo?', answer: 'Sim. Ele se baseia no relógio real, então continua preciso mesmo se o navegador desacelerar abas em segundo plano.' },
      { question: 'Ele toca um som?', answer: 'Só se você ligar o som. Caso contrário, a tela pisca suavemente quando o tempo acaba.' },
      { question: 'Qual a duração máxima?', answer: 'Você pode definir até 99 horas, 59 minutos e 59 segundos.' },
    ],
  },
}
