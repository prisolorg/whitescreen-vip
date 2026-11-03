import type { ToolTranslations } from '../types'

export const ptBr: ToolTranslations = {
  'screen-uniformity-test': {
    glance: {
      answer:
        'Um teste de uniformidade de tela mostra fundos escuros e cinza em tela cheia para você ver se o brilho e a cor estão iguais em todo o painel. Ele revela vazamento de luz nas bordas, manchas em telas LCD e IPS, brilho IPS, vinheta e o efeito de tela suja em TVs grandes.',
      features: ['Fundos preto, cinza escuro e cinza médio', 'Níveis de brilho para ver manchas em um quarto escuro', 'Guia para diferenciar brilho IPS de vazamento de luz', 'Tela cheia sem as barras do navegador'],
      benefits: ['Encontre defeitos do painel cobertos pela garantia', 'Compare dois monitores ou uma troca com critério', 'Leva uns dois minutos em um quarto escuro'],
    },
    steps: [
      'Diminua as luzes do ambiente e deixe a tela aquecer alguns minutos.',
      'Aperte F para tela cheia e comece pelo cinza mais escuro para procurar vazamento nas bordas.',
      'Passe pelos cinzas mais claros e procure manchas, faixas ou cantos mais escuros.',
      'Ative a grade para comparar áreas específicas da tela.',
    ],
    useCases: [
      { title: 'Vazamento de luz', description: 'Fundos quase pretos revelam luz escapando pelas bordas de painéis LCD.' },
      { title: 'Efeito de tela suja', description: 'Cinzas médios mostram faixas verticais ou manchas em TVs durante movimentos de câmera.' },
      { title: 'Vinheta', description: 'Compare os cantos com o centro para ver bordas mais escuras.' },
      { title: 'Loteria de painel', description: 'Compare duas unidades do mesmo modelo antes de ficar com uma.' },
    ],
    faqs: [
      { question: 'Por que minha tela fica irregular no cinza?', answer: 'Nenhum painel é perfeitamente uniforme. Pequenas diferenças são normais; manchas grandes, faixas fortes ou cantos claros podem valer uma reclamação se o aparelho for novo.' },
      { question: 'Devo testar em um quarto escuro?', answer: 'Sim. A luz ambiente esconde vazamentos e manchas sutis, então um quarto escuro torna o teste bem mais revelador.' },
      { question: 'A câmera mostra o que eu vejo?', answer: 'Câmeras de celular costumam exagerar vazamentos e manchas. Julgue com seus olhos e use fotos só como referência.' },
    ],
  },
  stopwatch: {
    glance: {
      answer:
        'Um cronômetro online mede o tempo entre o início e a parada, até o centésimo de segundo, com números grandes em tela cheia. Registre voltas em corridas, natação, treinos e experimentos; o tempo é preciso porque é medido pelo relógio do seu aparelho.',
      features: ['Iniciar, parar, volta e zerar', 'Precisão de centésimos de segundo', 'Lista de voltas com tempos parciais', 'Barra de espaço e atalhos de teclado'],
      benefits: ['Tela grande para academias e salas de aula', 'Tempos de volta precisos', 'Grátis, funciona offline'],
    },
    steps: [
      'Aperte Iniciar ou a barra de espaço para começar.',
      'Aperte Volta ou L para registrar um parcial enquanto ele continua contando.',
      'Aperte a barra de espaço para pausar e R para zerar.',
      'Aperte F para tela cheia e Esc para sair.',
    ],
    useCases: [
      { title: 'Esporte e corrida', description: 'Acompanhe tempos de volta e intervalos.' },
      { title: 'Discursos', description: 'Cronometre palestras e ensaios com precisão.' },
      { title: 'Jogos e quizzes', description: 'Marque o tempo das rodadas na aula ou na noite de jogos.' },
      { title: 'Laboratório e cozinha', description: 'Meça reações e tempos de infusão.' },
    ],
    faqs: [
      { question: 'Qual a precisão do cronômetro?', answer: 'Ele usa o relógio de alta resolução do navegador e mostra centésimos de segundo. A taxa da tela pode atrasar a imagem em alguns milissegundos.' },
      { question: 'As voltas ficam salvas?', answer: 'As voltas ficam na página até você zerar ou fechar. Dá para copiá-las para a área de transferência.' },
      { question: 'Funciona offline?', answer: 'Sim. Depois que a página carrega, o cronômetro funciona sem conexão.' },
    ],
  },
  'matrix-screensaver': {
    glance: {
      answer:
        'O protetor de tela Matrix mostra colunas de caracteres verdes caindo, a “chuva digital” que ficou famosa com o filme Matrix (1999). Ele roda no navegador em tela cheia, e você pode mudar a cor, a velocidade e o tamanho dos caracteres para uma mesa, uma TV ou uma live.',
      features: ['Katakana, números e símbolos caindo', 'Controle de cor, velocidade e tamanho', 'Tela cheia com cursor oculto', 'Suave em telas de alta taxa'],
      benefits: ['Visual icônico para telas paradas e lives', 'Sem instalar protetor de tela no Windows ou macOS', 'Grátis'],
    },
    steps: [
      'A chuva começa na hora na prévia.',
      'Ajuste velocidade, densidade e tamanho da fonte, ou escolha outra cor.',
      'Escolha caracteres katakana, binários ou estilo cyber.',
      'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.',
    ],
    useCases: [
      { title: 'Protetor de tela', description: 'Deixe rodando em um monitor parado.' },
      { title: 'Clima tecnológico', description: 'Fundo visual para lives, escritórios ou eventos.' },
      { title: 'Fundos para vídeo', description: 'Grave um fundo “cyber” para seus vídeos.' },
      { title: 'Festas à fantasia', description: 'Monte o clima de uma noite de ficção científica.' },
    ],
    faqs: [
      { question: 'Que caracteres a chuva do Matrix usa?', answer: 'O efeito original usava katakana de meia largura espelhado com números. Aqui você escolhe esse estilo, binário ou caracteres cyber.' },
      { question: 'Posso usar como protetor de tela de verdade?', answer: 'Navegadores não instalam protetores de tela do sistema, mas você pode abrir em tela cheia quando se afastar. O bloqueio de suspensão mantém a tela ligada.' },
      { question: 'Deixa o computador lento?', answer: 'É leve. Em aparelhos antigos, diminua a densidade para uma animação mais suave.' },
    ],
  },
  'dvd-screensaver': {
    glance: {
      answer:
        'O protetor de tela DVD é o clássico logo quicando dos aparelhos de DVD: ele atravessa a tela, muda de cor cada vez que bate em uma borda e, de vez em quando, acerta o canto em cheio. Esta versão conta as batidas no canto e deixa você mudar a velocidade e o tamanho do logo.',
      features: ['Muda de cor a cada batida', 'Contador de cantos com comemoração', 'Controle de velocidade e tamanho do logo', 'Tela cheia em qualquer tela'],
      benefits: ['Nostálgico e estranhamente satisfatório', 'Ótimo fundo para lives e salas de espera', 'Grátis'],
    },
    steps: [
      'O logo começa a quicar na hora.',
      'Ajuste a velocidade e o tamanho do logo nos controles.',
      'Acompanhe o contador de cantos: cada canto exato é comemorado.',
      'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.',
    ],
    useCases: [
      { title: 'Nostalgia', description: 'Reviva o clássico da sala de espera.' },
      { title: 'Tela parada', description: 'Um protetor de tela divertido para a TV ou o monitor do escritório.' },
      { title: 'Pausas na live', description: 'O público adora esperar a batida no canto.' },
      { title: 'Assistir em grupo', description: 'Aposte com os amigos quando vai acertar o canto.' },
    ],
    faqs: [
      { question: 'Ele acerta o canto em cheio?', answer: 'Sim. Quando e com que frequência depende do tamanho da tela, do logo e da velocidade. O contador registra cada batida exata.' },
      { question: 'É o logo oficial do DVD?', answer: 'Não. É um selo genérico no mesmo espírito, sem vínculo com a DVD Format/Logo Licensing Corporation.' },
      { question: 'Por que o logo muda de cor?', answer: 'Como no protetor de tela clássico, o logo escolhe uma cor nova a cada batida e nunca repete a mesma cor duas vezes seguidas.' },
    ],
  },
  'fake-windows-10-update': {
    glance: {
      answer:
        'Uma tela falsa de atualização do Windows 10 copia a tela azul “Trabalhando nas atualizações” com os pontinhos girando e uma porcentagem que sobe devagar. Em tela cheia parece que o PC está atualizando: uma pegadinha clássica e inofensiva. Aperte Esc para sair.',
      features: ['Pontinhos girando e porcentagem subindo', 'Velocidade da atualização ajustável', 'Tela cheia com cursor oculto', 'Saia quando quiser com Esc'],
      benefits: ['Pegadinha de escritório convincente e inofensiva', 'Cenário para vídeos e tutoriais', 'Nada é instalado ou alterado'],
    },
    steps: [
      'Defina no controle de velocidade o quão rápido a porcentagem sobe.',
      'Clique em Tela cheia ou aperte F para a simulação ocupar a tela e esconder o navegador.',
      'Saia de perto e deixe avançar. Aperte Pausar para parecer travada.',
      'Aperte Esc para sair e revelar a brincadeira.',
    ],
    useCases: [
      { title: 'Pegadinhas no escritório', description: 'Faça um colega achar que o PC está atualizando e depois conte a verdade.' },
      { title: 'Fazer uma pausa', description: 'Pareça ocupado quando sair da mesa.' },
      { title: 'Cenário para filmes e vídeos', description: 'Mostre uma atualização do Windows 10 convincente no set.' },
      { title: 'Nostalgia', description: 'Reveja uma tela clássica do sistema por diversão.' },
    ],
    faqs: [
      { question: 'É uma atualização real ou algo perigoso?', answer: 'Não. É uma simulação visual inofensiva em uma aba comum. Não muda seu aparelho, não instala nada nem pede dados. Aperte Esc para sair a qualquer momento.' },
      { question: 'Tem ligação com a Microsoft?', answer: 'Não. É uma recriação independente para entretenimento, sem vínculo ou patrocínio da Microsoft.' },
      { question: 'Posso controlar a velocidade?', answer: 'Sim. O controle de velocidade define o quão rápido a porcentagem sobe, e Pausar segura a porcentagem para parecer travada.' },
      { question: 'Como saio da tela falsa?', answer: 'Aperte Esc, ou mexa o mouse ou toque na tela para mostrar o botão de fechar. Fechar a aba também funciona.' },
    ],
  },
  'ring-light': {
    glance: {
      answer:
        'Um ring light online mostra um anel brilhante na tela que ilumina seu rosto de frente e por igual, como o ring light de um fotógrafo. Ajuste o tamanho, a espessura, o tom e o brilho do anel e coloque em tela cheia para selfies, chamadas de vídeo, maquiagem ou fotos de produto.',
      features: ['Tamanho e espessura do anel ajustáveis', 'Temperatura de cor de quente a fria', 'Controle de brilho e tela cheia', 'Funciona em celulares, tablets e notebooks'],
      benefits: ['Luz uniforme e sem sombras, de graça', 'Reflexo nos olhos como um ring light de verdade', 'Use qualquer tela sobrando como luz'],
    },
    steps: [
      'Abra a página na tela à sua frente (notebook, monitor ou tablet) e aumente o brilho.',
      'Ajuste o tamanho e a espessura do anel; um anel mais grosso dá mais luz.',
      'Defina a temperatura de cor ou um tom para looks criativos.',
      'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.',
    ],
    useCases: [
      { title: 'Chamadas de vídeo', description: 'Luz uniforme e favorável no rosto sem comprar um ring light.' },
      { title: 'Selfies e retratos', description: 'Consiga o reflexo redondo clássico nos olhos.' },
      { title: 'Maquiagem', description: 'Veja bem o rosto com luz quente ou tipo luz do dia.' },
      { title: 'Lives', description: 'Luz principal suave de um monitor ou tablet sobrando.' },
    ],
    faqs: [
      { question: 'Uma tela é tão forte quanto um ring light de verdade?', answer: 'Não. Um ring light de LED é bem mais forte. O de tela funciona melhor em ambiente escuro, com brilho no máximo e perto do rosto.' },
      { question: 'Por que um anel e não a tela toda?', answer: 'Um anel ilumina de todos os lados, reduz sombras sob o nariz e os olhos e cria o reflexo redondo nos olhos. Ative a opção de preencher o centro se precisar de toda a luz.' },
      { question: 'Qual temperatura de cor fica melhor?', answer: 'Entre 4500 e 5500 K fica natural para a maioria dos tons de pele. Mais quente (3000 K) à noite, mais fria (6500 K) para combinar com a luz do dia.' },
    ],
  },
}
