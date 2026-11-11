import type { TopicTranslation } from './types'

export const ptBr: TopicTranslation = {
  hubs: {
    '/color-screens': {
      intro:
        'Telas coloridas preenchem todo o display com uma única cor sólida. Escolha uma cor, aperte F para tela cheia e cada pixel mostra exatamente essa cor. Servem para achar pixels mortos e presos, como luz suave, como fundo de chroma key e como uma tela calma e sem distrações.',
      details: [
        {
          heading: 'Qual cor devo usar?',
          text: 'Use branco para iluminar e limpar, preto para esconder a tela ou ver vazamento de luz, e vermelho, verde e azul puros para testar cada subpixel. O cinza revela brilho irregular, e laranja ou rosa quentes viram luz noturna ou luz para selfies.',
        },
        {
          heading: 'Valores de cor exatos',
          text: 'Cada tela usa um valor hexadecimal exato (por exemplo #FF0000 para o vermelho), então os testes são confiáveis. Mesmo assim você pode digitar qualquer código e baixar qualquer cor em PNG até 8K.',
        },
      ],
      faqs: [
        { question: 'Como deixo a tela inteira de uma cor?', answer: 'Abra a página da cor e aperte F ou Tela cheia. O navegador esconde as barras e só aparece a cor. Aperte Esc para sair.' },
        { question: 'Funcionam em celulares e TVs?', answer: 'Sim. Funcionam em qualquer navegador moderno, incluindo Android, iPhone, Smart TVs e consoles. No Safari do iPhone a cor preenche a janela do navegador.' },
        { question: 'Posso baixar uma imagem de cor sólida?', answer: 'Sim. Cada página de cor tem um PNG grátis dessa cor, e o painel de download gera qualquer tamanho de 720p a 8K.' },
      ],
    },
    '/screen-tests': {
      intro:
        'Testes de tela são padrões e medições em tela cheia que mostram se o seu display funciona bem. Use para achar pixels mortos, medir a taxa real em Hz, ver ghosting, vazamento de luz e burn-in, checar zonas mortas na tela touch e avaliar as cores, tudo no navegador e sem instalar nada.',
      details: [
        {
          heading: 'Qual teste faço primeiro?',
          text: 'Em uma tela nova ou usada, comece pelo teste de pixel morto e pelo de uniformidade: eles pegam as falhas mais cobertas por devolução ou garantia. Gamers devem incluir taxa de atualização e ghosting; donos de celular e tablet, o teste touch; e em OLED, os testes de burn-in.',
        },
        {
          heading: 'Testes no navegador são precisos?',
          text: 'Os padrões usam valores de pixel exatos e o tempo vem do relógio de quadros do navegador, então o resultado corresponde ao que a tela mostra de verdade. Eles não substituem um colorímetro para calibração profissional.',
        },
      ],
      faqs: [
        { question: 'Como verifico se meu monitor tem problemas?', answer: 'Limpe a tela e faça o teste de pixel morto, o de uniformidade em um quarto escuro e o de taxa de atualização. Ao todo, uns cinco minutos.' },
        { question: 'Funcionam em TVs e celulares?', answer: 'Sim. Abra a página no navegador do aparelho e ative a tela cheia. O teste touch foi feito para celulares e tablets.' },
        { question: 'Os testes são grátis?', answer: 'Sim. Todos são grátis, sem cadastro, e rodam só no seu aparelho.' },
      ],
    },
    '/screensavers': {
      intro:
        'Protetores de tela online rodam no navegador em vez de serem instalados no computador. Abra um, coloque em tela cheia e ele funciona em qualquer aparelho: PC, Mac, Chromebook, Smart TV ou um tablet antigo na mesa. Escolha a chuva digital do Matrix, o logo de DVD quicando, um relógio retrô de flip ou frases motivacionais.',
      details: [
        {
          heading: 'Por que usar um protetor de tela no navegador?',
          text: 'Funciona em aparelhos sem opção de protetor de tela, como Smart TVs e Chromebooks, não precisa de instalação e mantém a tela ligada enquanto roda, ótimo para recepções, mesas e lives.',
        },
      ],
      faqs: [
        { question: 'Um protetor de tela online impede o computador de dormir?', answer: 'Em tela cheia, navegadores compatíveis mantêm a tela ligada com a API Screen Wake Lock, então ele continua até você sair.' },
        { question: 'Posso usar em uma Smart TV?', answer: 'Sim. Abra a página no navegador da TV e aperte o botão de tela cheia.' },
      ],
    },
    '/prank-screens': {
      intro:
        'Telas de pegadinha são telas falsas, realistas e inofensivas que rodam no navegador: atualizações do Windows, macOS, ChromeOS e Android, a tela azul da morte, uma tela hackeada e reuniões falsas. Abra uma, coloque em tela cheia e aperte Esc quando a brincadeira acabar. Nada é instalado nem alterado.',
      details: [
        {
          heading: 'Pegadinha com responsabilidade',
          text: 'Seja rápido e revele a brincadeira. Nunca use uma atualização ou erro falso para assustar alguém a pagar ou dar acesso a um aparelho: isso é golpe, não pegadinha.',
        },
        {
          heading: 'Também servem de cenário',
          text: 'Cineastas, streamers, professores e salas de fuga usam essas telas como cenário convincente, porque ficam certas na câmera sem mexer em um sistema real.',
        },
      ],
      faqs: [
        { question: 'São seguras?', answer: 'Sim. São imagens e animações em uma aba do navegador. Não instalam nada, não leem arquivos nem mudam configurações.' },
        { question: 'Como saio de uma tela de pegadinha?', answer: 'Aperte Esc, ou mexa o mouse ou toque na tela para mostrar o botão de fechar. Fechar a aba também funciona.' },
      ],
    },
    '/visual-effects': {
      intro:
        'Efeitos visuais transformam sua tela em algo além de uma imagem: um gerador de ruído com chuvisco de TV, um ring light ou luz para chamadas de vídeo, uma tela quebrada, um terminal hacker, ruído animado, degradês e ciclos de cor. Todos rodam em tela cheia no navegador, em celulares, computadores e TVs.',
      details: [
        {
          heading: 'Luz, som e diversão em um só lugar',
          text: 'Use o ring light e a luz para Zoom para iluminar o rosto, os geradores de ruído para focar ou dormir, e a tela quebrada e o Hacker Typer para pegadinhas e vídeos.',
        },
      ],
      faqs: [
        { question: 'Efeitos que piscam são seguros?', answer: 'Piscadas rápidas podem provocar crises em pessoas com epilepsia fotossensível. Diminua a velocidade ou escolha um efeito calmo se for sensível.' },
        { question: 'Os geradores de ruído gastam dados?', answer: 'Não. O som é gerado no seu aparelho, então nada é transmitido.' },
      ],
    },
    '/online-timers': {
      intro:
        'Temporizadores online mostram números grandes em tela cheia que dá para ler do outro lado da sala. Use a contagem regressiva em aulas, reuniões e provas, o Pomodoro para trabalhar em blocos de 25 minutos e o cronômetro com voltas para treinos e corridas. Eles mantêm o tempo certo mesmo em abas de fundo.',
      details: [
        {
          heading: 'Precisos em segundo plano',
          text: 'Cada timer conta pelo relógio do aparelho em vez de contar ciclos, então continua exato quando o navegador desacelera abas ocultas, e o título da aba mostra o tempo restante.',
        },
      ],
      faqs: [
        { question: 'O timer toca se a aba estiver em segundo plano?', answer: 'Sim, desde que a aba continue aberta. O aviso toca quando o tempo acaba, se estiver ligado.' },
        { question: 'Posso mostrar o timer em um projetor ou TV?', answer: 'Sim. Abra no navegador e aperte F para tela cheia.' },
      ],
    },
  },
  colorAnswer: {
    template: '{subject} preenche todo o seu display com {word} puro ({hex}). Clique em Tela cheia ou aperte F e cada pixel mostra a mesma cor, sem barras nem distrações. {tail}',
    features: ['{word} puro {hex}, ou qualquer cor hexadecimal', 'Tela cheia com um clique e controle de brilho', 'Download grátis em PNG de 720p até 8K'],
    benefits: ['Funciona na hora em celulares, notebooks, monitores e Smart TVs', 'Sem app, sem cadastro e sem instalar nada'],
  },
  colors: {
    red: { subject: 'Uma tela vermelha', word: 'vermelho', tail: 'Só os subpixels vermelhos acendem, então subpixels verdes ou azuis mortos ou presos aparecem fácil. Também serve como luz noturna vermelha que preserva a visão no escuro.', feature: 'As setas alternam entre vermelho, verde e azul', benefit: 'Acha subpixels verdes ou azuis presos em segundos' },
    green: { subject: 'Uma tela verde', word: 'verde', tail: 'Criadores usam como fundo de chroma key rápido, e como acende só os subpixels verdes, os vermelhos ou azuis com defeito se destacam em um teste de pixels.', feature: 'Verde chroma forte para OBS, Premiere ou CapCut', benefit: 'Um fundo de chroma key grátis quando você não tem pano verde' },
    blue: { subject: 'Uma tela azul', word: 'azul', tail: 'Acende só os subpixels azuis para testes de pixel e também serve de fundo de chroma azul ou de luz fria e calma para fotos.', feature: 'Azul puro para testar subpixels e fundos azuis', benefit: 'Confere o canal azul e deixa pixels presos à vista' },
    yellow: { subject: 'Uma tela amarela', word: 'amarelo', tail: 'O amarelo acende os subpixels vermelhos e verdes juntos, então um subpixel azul morto ou uma área com tom estranho aparece com clareza. Também é uma luz quente e alegre para fotos.', feature: 'Amarelo exato com vermelho e verde no máximo', benefit: 'Detecta subpixels azuis mortos e tons irregulares' },
    orange: { subject: 'Uma tela laranja', word: 'laranja', tail: 'O tom quente tem menos luz azul que o branco, por isso muita gente usa como luz noturna suave, luz ambiente de pôr do sol ou luz quente de preenchimento para vídeo.', feature: 'Controle de brilho para uma luz noturna fraca e quente', benefit: 'Luz quente com bem menos azul que uma tela branca' },
    pink: { subject: 'Uma tela rosa', word: 'rosa', tail: 'O rosa intenso dá uma luz suave e favorável para selfies e maquiagem e cria clima para festas, lives e quartos.', feature: 'Rosa intenso por padrão, com tons mais claros ou escuros', benefit: 'Luz suave e favorável para selfies e maquiagem' },
    purple: { subject: 'Uma tela roxa', word: 'roxo', tail: 'O roxo mistura luz vermelha e azul: é uma luz ambiente marcante para lives, setups gamer e festas, e um jeito rápido de ver se o canal verde está apagado.', feature: 'Roxo vivo com tons de lavanda a violeta', benefit: 'Luz ambiente na hora para lives e festas' },
    cyan: { subject: 'Uma tela ciano', word: 'ciano', tail: 'O ciano acende verde e azul juntos, então um subpixel vermelho preso ou um canal ausente aparece fácil. Também é uma luz de destaque fria e nítida.', feature: 'Ciano puro para conferir os canais verde e azul', benefit: 'Mostra subpixels vermelhos com defeito e tons estranhos' },
    magenta: { subject: 'Uma tela magenta', word: 'magenta', tail: 'O magenta acende vermelho e azul com o verde apagado, então subpixels verdes presos e tons esverdeados ficam evidentes nos testes de tela.', feature: 'Magenta puro para os canais vermelho e azul', benefit: 'Mostra subpixels verdes presos e tons esverdeados' },
    gray: { subject: 'Uma tela cinza', word: 'cinza', tail: 'Um cinza médio é o jeito padrão de achar efeito de tela suja, manchas, vinheta e faixas de cor que as cores fortes escondem.', feature: 'Alterne entre cinza claro, médio e escuro', benefit: 'Revela problemas de uniformidade e tela suja' },
  },
}
