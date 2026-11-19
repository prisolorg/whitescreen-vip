import type { LocalizedToolContent, ToolTranslations } from '../types'
import type { ToolFaq } from '../../types'

const EXIT: ToolFaq = { question: 'Como saio da tela falsa?', answer: 'Aperte Esc, ou mexa o mouse ou toque na tela para mostrar o botão de fechar. Fechar a aba também funciona.' }
const brandFaq = (brand: string): ToolFaq => ({ question: `Tem ligação com a ${brand}?`, answer: `Não. É uma recriação independente para entretenimento, sem vínculo, endosso ou patrocínio da ${brand}. Os nomes de produtos pertencem aos seus donos.` })

function update(name: string, brand: string, glance: LocalizedToolContent['glance'], extra: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Defina no controle de velocidade o quão rápido a porcentagem sobe.',
      'Clique em Tela cheia ou aperte F para a simulação ocupar a tela e esconder o navegador.',
      'Saia de perto e deixe avançar. Aperte Pausar para parecer travada.',
      'Aperte Esc para sair e revelar a brincadeira.',
    ],
    useCases: [
      { title: 'Pegadinhas no escritório', description: 'Faça um colega achar que o computador está atualizando e depois conte a verdade.' },
      { title: 'Fazer uma pausa', description: 'Pareça ocupado quando sair da mesa.' },
      { title: 'Cenário para filmes e vídeos', description: `Mostre uma atualização do ${name} convincente no set.` },
      { title: 'Nostalgia', description: 'Reveja uma tela clássica do sistema por diversão.' },
    ],
    faqs: [
      { question: 'É uma atualização real ou algo perigoso?', answer: 'Não. É uma simulação visual inofensiva em uma aba comum. Não muda seu aparelho, não instala nada nem pede dados. Aperte Esc para sair a qualquer momento.' },
      brandFaq(brand),
      extra,
      EXIT,
    ],
  }
}

function call(brand: string, glance: LocalizedToolContent['glance'], extra?: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Edite o título da reunião que aparece no topo.',
      'Se quiser, ligue a prévia da câmera: ela fica no seu aparelho e nunca é gravada nem enviada.',
      'Aperte F ou Tela cheia para uma chamada convincente em tela cheia.',
      'Aperte Esc para sair quando quiser.',
    ],
    useCases: [
      { title: 'Cenário para vídeo', description: 'Grave uma cena com uma reunião sem uma chamada real.' },
      { title: 'Mockups de interface', description: 'Use o layout de uma chamada em apresentações ou tutoriais.' },
      { title: 'Brincadeiras inofensivas', description: 'Finja estar “em reunião” para dar risada.' },
      { title: 'Praticar', description: 'Ensaie como você aparece na câmera antes de uma chamada real.' },
    ],
    faqs: [
      { question: 'É uma chamada real ou algo perigoso?', answer: 'Não. É uma simulação visual inofensiva em uma aba comum. Não se conecta a nenhum serviço, não instala nada nem pede dados.' },
      brandFaq(brand),
      { question: 'Usa minha câmera ou microfone?', answer: 'Só se você ligar a prévia da câmera. O vídeo fica no seu aparelho e nunca é gravado nem enviado. O microfone nunca é usado.' },
      EXIT,
      ...(extra ? [extra] : []),
    ],
  }
}

export const ptBr: ToolTranslations = {
  'oled-gray-test': {
    glance: {
      answer: 'Um teste de cinza OLED mostra cinzas muito escuros perto do preto, onde os painéis OLED mais costumam falhar. Ele revela faixas perto do preto, mura (manchas), linhas verticais e sombreamento irregular que o conteúdo claro esconde em TVs, monitores e celulares OLED.',
      features: ['Cinzas quase pretos de 1% a 20%, mais uma rampa', 'Fundos em tela cheia sem sobreposições', 'Avanço manual para comparar níveis com calma', 'Funciona em celulares, TVs e monitores OLED'],
      benefits: ['Verifique um OLED novo no prazo de devolução', 'Ache faixas antes de calibrar', 'Grátis e rápido'],
    },
    steps: ['Apague as luzes e deixe a tela no brilho de costume.', 'Aperte F para tela cheia e comece pelo passo de 5%.', 'Desça para 1–3% para ver onde o painel começa a esmagar os pretos ou manchar.', 'Use a rampa de cinza para procurar saltos visíveis entre tons vizinhos.'],
    useCases: [
      { title: 'Uniformidade perto do preto', description: 'Cinzas bem escuros mostram manchas e linhas verticais em painéis OLED.' },
      { title: 'Pretos esmagados', description: 'Veja se os tons mais baixos aparecem ou se fundem com o preto.' },
      { title: 'Cintilação com pouco brilho', description: 'Alguns painéis piscam com cinzas e brilho muito baixos.' },
      { title: 'Comparar aparelhos', description: 'Compare dois celulares ou TVs lado a lado com os mesmos ajustes.' },
    ],
    faqs: [
      { question: 'Por que os cinzas quase pretos ficam manchados no OLED?', answer: 'Cada pixel OLED é controlado separadamente, e pequenas variações aparecem com pouquíssima luz. Alguma irregularidade é normal em todo OLED.' },
      { question: 'O teste serve para telas LCD?', answer: 'Serve, mas no LCD os problemas perto do preto aparecem como vazamento de luz ou manchas. Para isso, use o teste de uniformidade.' },
      { question: 'Por que não vejo o passo de 1%?', answer: 'Muitas telas e modos de imagem esmagam os tons mais escuros. Aumente um pouco o brilho ou tente outro modo de imagem.' },
    ],
  },
  'oled-burn-in-test': {
    glance: {
      answer: 'Um teste de burn-in OLED mostra cores sólidas em tela cheia para revelar logos, barras de status, botões ou HUDs de jogos marcados pelo desgaste irregular dos pixels. O burn-in é permanente; a retenção de imagem é temporária e some. Os dois aparecem melhor no cinza, vermelho e azul.',
      features: ['Fundos cinza, vermelho, verde, azul e branco', 'Setas para trocar de cor rápido', 'Dicas para diferenciar burn-in e retenção', 'Pensado para celulares, TVs e monitores OLED'],
      benefits: ['Verifique um celular ou TV OLED usado antes de comprar', 'Pegue a retenção cedo', 'Sem app nem download'],
    },
    steps: ['Aperte F para tela cheia e comece com um cinza médio; depois teste vermelho, verde, azul e branco.', 'Procure formas apagadas como barras de tarefas, logos, teclados ou selos de canal.', 'Use a troca automática para alternar cores se estiver procurando retenção temporária.', 'Se as formas sumirem em alguns minutos, era retenção temporária e não burn-in.'],
    useCases: [
      { title: 'Comprar OLED usado', description: 'Verifique um celular ou TV usado em busca de imagens fantasma.' },
      { title: 'HUD de jogos', description: 'Procure barras de vida ou minimapas depois de longas partidas.' },
      { title: 'Retenção ou burn-in', description: 'Ajuda a diferenciar retenção temporária de burn-in permanente.' },
      { title: 'Garantia', description: 'Fotografe o burn-in sobre uma cor sólida para o suporte.' },
    ],
    faqs: [
      { question: 'Esta ferramenta corrige burn-in?', answer: 'Não. O burn-in permanente é desgaste irregular dos pixels e nenhum site consegue reverter. Use a função de atualização de pixels da tela e siga o fabricante.' },
      { question: 'Qual a diferença entre retenção de imagem e burn-in?', answer: 'A retenção é temporária e some depois de mostrar outros conteúdos. O burn-in é permanente e continua visível em cores sólidas.' },
      { question: 'Qual cor mostra melhor o burn-in?', answer: 'Cinza médio e vermelho costumam mostrar com mais clareza, mas confira todas as cores, porque o desgaste varia por subpixel.' },
    ],
  },
  'screen-burn-in-test': {
    glance: {
      answer: 'Um teste de burn-in de tela permite procurar imagens fantasma em qualquer display e depois rodar um corretor que passa cores e ruído pela tela. A retenção temporária costuma sumir após 10 a 30 minutos de corretor; o burn-in permanente de pixels desgastados não tem conserto por software.',
      features: ['Modo verificação com cores sólidas e setas', 'Modo corretor: varredura, ciclo de cores e ruído', 'Timer que desliga o corretor sozinho', 'Para telas OLED, plasma e LCD'],
      benefits: ['Limpe a retenção temporária sem apps', 'Saiba se a marca é retenção ou burn-in', 'Grátis e seguro para a tela'],
    },
    steps: ['Aumente o brilho e coloque em tela cheia em um ambiente escuro.', 'No modo verificação, use as setas ou os botões para passar por cada cor. O cinza 50% mostra melhor o burn-in.', 'Se vir formas, mude para o corretor, escolha a varredura branca (ou um padrão piscante, se não incomodar) e deixe 10–30 minutos.', 'Verifique de novo. Formas que ficam após várias rodadas costumam ser burn-in permanente.'],
    useCases: [
      { title: 'Comprar tela usada', description: 'Ache logos ou barras marcadas antes de pagar.' },
      { title: 'Após uso estático', description: 'Verifique monitores que mostraram painéis, letreiros ou jogos por horas.' },
      { title: 'Limpar retenção', description: 'Rode o corretor quando sobrar uma imagem fantasma.' },
      { title: 'Garantia', description: 'Fotografe o burn-in sobre cinza para o suporte.' },
    ],
    faqs: [
      { question: 'Qual a diferença entre retenção de imagem e burn-in?', answer: 'A retenção é temporária e some após minutos ou horas de conteúdo variado. O burn-in é desgaste permanente dos pixels.' },
      { question: 'O corretor conserta burn-in?', answer: 'Ajuda com a retenção temporária. O burn-in permanente no OLED é desgaste irregular que nenhum padrão desfaz; a atualização de pixels da TV ou monitor é a melhor opção.' },
      { question: 'Qual cor mostra melhor o burn-in?', answer: 'Um cinza médio ou escuro costuma mostrar melhor, seguido de vermelho, verde e azul.' },
    ],
  },
  'monitor-ghosting-test': {
    glance: {
      answer: 'Um teste de ghosting move objetos pela tela para você ver os rastros deixados por pixels lentos. Cópias fracas atrás do objeto são ghosting; halos claros ou invertidos são excesso de overdrive. Use para escolher o melhor ajuste de overdrive.',
      features: ['Três faixas em movimento com velocidade ajustável', 'Fundos claros e escuros para transições diferentes', 'Grade de referência para medir o rastro', 'Acompanha a taxa real da sua tela'],
      benefits: ['Escolha o melhor overdrive para jogar', 'Compare monitores antes de comprar ou devolver', 'Alternativa grátis aos testes com câmera'],
    },
    steps: ['Coloque o monitor na maior taxa de atualização e ative a tela cheia.', 'Acompanhe o alvo com os olhos. Procure rastros atrás e halos nas bordas.', 'Mude a velocidade e teste cada ajuste de overdrive ou tempo de resposta do menu do monitor.', 'Pause para ver um quadro parado; o alvo deve ficar nítido.'],
    useCases: [
      { title: 'Ajustar o overdrive', description: 'Escolha o ajuste com o rastro mais curto e sem ghosting inverso.' },
      { title: 'Borrão preto no VA', description: 'A faixa escura mostra o rastro roxo comum em painéis VA.' },
      { title: 'Comparar monitores', description: 'Use a mesma velocidade em duas telas lado a lado.' },
      { title: 'Conferir uma compra', description: 'Veja se o movimento está como prometido.' },
    ],
    faqs: [
      { question: 'O que é ghosting?', answer: 'Um rastro fraco atrás de objetos em movimento, porque os pixels não mudam de cor rápido o bastante antes do próximo quadro.' },
      { question: 'O que é ghosting inverso?', answer: 'Um halo claro ou colorido em volta do objeto, porque o overdrive empurra os pixels além da cor certa. Diminua o overdrive para resolver.' },
      { question: 'Por que o alvo fica borrado mesmo sem ghosting?', answer: 'É o borrão de retenção: seus olhos seguem o objeto enquanto cada quadro fica parado. Taxas maiores ou um modo de backlight estroboscópico reduzem isso.' },
    ],
  },
  'frame-rate-test': {
    glance: {
      answer: 'Um teste de FPS mostra o mesmo movimento em diferentes quadros por segundo, lado a lado: 15, 24, 30, 60 e o máximo da sua tela. Ele deixa visível a diferença entre movimento travado e fluido e mostra por que filmes a 24 FPS e jogos a 60 FPS parecem tão diferentes.',
      features: ['Cinco faixas a 15, 24, 30, 60 FPS e máximo', 'Velocidade ajustável para exagerar ou suavizar', 'Mostra sua taxa máxima medida', 'Pausa e tela cheia'],
      benefits: ['Veja o que um monitor de alta taxa acrescenta', 'Explique FPS para alunos ou público', 'Roda em qualquer navegador moderno'],
    },
    steps: ['Observe cada faixa; todas andam na mesma velocidade.', 'Aumente a velocidade para ver melhor os engasgos.', 'Compare a faixa de 60 FPS com a máxima em uma tela de alta taxa.', 'Aperte F ou toque duas vezes para tela cheia, e Esc para sair.'],
    useCases: [
      { title: 'Configurações de jogos', description: 'Decida se vale trocar gráficos por mais FPS.' },
      { title: 'Produção de vídeo', description: 'Entenda por que o cinema usa 24 FPS e o esporte 50 ou 60.' },
      { title: 'Mostrar aos amigos', description: 'Encerre a discussão do “o olho não vê mais de 30 FPS”.' },
      { title: 'Comprar tela', description: 'Veja o que uma tela de 120 ou 144 Hz acrescenta.' },
    ],
    faqs: [
      { question: 'Por que a faixa máxima parece de 60 FPS?', answer: 'Sua tela mostra no máximo um quadro por atualização. Em uma tela de 60 Hz, as faixas de 60 e máxima ficam iguais.' },
      { question: 'Por que 24 FPS parece travado aqui e normal no cinema?', answer: 'Câmeras de cinema gravam desfoque de movimento em cada quadro, o que suaviza o movimento. Este teste usa quadros nítidos.' },
      { question: 'Quantos FPS preciso para jogar?', answer: 'Pelo menos 60 FPS já parece fluido na maioria dos jogos; jogadores competitivos buscam acompanhar um monitor de 144 Hz ou mais.' },
    ],
  },
  'screen-color-test': {
    glance: {
      answer: 'Um teste de cor de tela mostra barras de cor, rampas RGB e padrões de saturação para você avaliar se a tela reproduz bem as cores. Procure faixas nos degradês, realces estourados, tons faltando e dominantes de cor para decidir se precisa ajustar a imagem.',
      features: ['Barras de cor estilo SMPTE', 'Rampas de vermelho, verde, azul e cinza', 'Padrões de saturação e tons de pele', 'Tela cheia com troca pelo teclado'],
      benefits: ['Ache faixas e dominantes rápido', 'Compare modos de imagem', 'Grátis, sem colorímetro'],
    },
    steps: ['Use o modo de imagem padrão ou calibrado.', 'Aperte F para tela cheia e troque de padrão com os botões ou as setas.', 'Nas rampas, procure transições suaves, sem degraus nem estouro na parte clara.', 'Compare o mesmo padrão em outra tela para avaliar a precisão.'],
    useCases: [
      { title: 'Achar dominantes', description: 'Cinzas e brancos devem parecer neutros, sem tom rosado ou esverdeado.' },
      { title: 'Estouro de realces', description: 'Veja se os passos mais claros de cada canal continuam distintos.' },
      { title: 'Faixas', description: 'As rampas revelam degraus de painéis de 6 bits ou processamento pesado.' },
      { title: 'Comparação', description: 'Compare um notebook e um monitor externo.' },
    ],
    faqs: [
      { question: 'Posso calibrar meu monitor com isso?', answer: 'Dá para fazer ajustes aproximados a olho, mas a calibração de verdade exige um colorímetro e software próprio.' },
      { question: 'Por que minhas rampas mostram degraus?', answer: 'Geralmente indicam pouca profundidade de cor no painel ou no processamento. Modos noturnos e alguns modos de imagem também causam faixas.' },
      { question: 'Por que as cores mudam entre celular e monitor?', answer: 'As telas variam em gama de cores, ponto branco e processamento. Algumas ainda ajustam a cor pela luz ambiente.' },
    ],
  },
  'no-signal-screen': {
    glance: {
      answer: 'Uma tela “Sem sinal” mostra a mensagem conhecida de uma TV ou monitor que não recebe nada pelo HDMI ou cabo. Em tela cheia, com barras de cor e uma caixa de mensagem que se move, vira uma pegadinha convincente, cenário para filmagens ou tela de espera.',
      features: ['Barras de cor clássicas ou fundo azul', 'Caixa “Sem sinal” que se move como em uma TV real', 'Tom de teste de 1 kHz opcional e nome de entrada editável', 'Tela cheia com cursor oculto'],
      benefits: ['Pegadinha fácil e inofensiva', 'Cenário para filmes, salas de fuga e sets', 'Funciona em Smart TVs pelo navegador'],
    },
    steps: ['Escolha um estilo: barras de cor, tela preta com mensagem quicando ou tela azul de entrada.', 'Edite a mensagem e o nome da entrada, como “HDMI 1”.', 'Ligue, se quiser, o tom de teste de 1 kHz: começa mudo e só toca depois de um clique.', 'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.'],
    useCases: [
      { title: 'Cenário de filme e foto', description: 'Monte um set com uma TV desconectada convincente.' },
      { title: 'Intervalos de live', description: 'Use uma tela de “sem sinal” enquanto faz uma pausa.' },
      { title: 'Estética retrô', description: 'Dê um ar de TV antiga a vídeos e apresentações.' },
      { title: 'Pegadinhas inofensivas', description: 'Faça uma tela parecer desconectada e conte depois.' },
    ],
    faqs: [
      { question: 'Como se chamam as barras coloridas?', answer: 'São as barras de cor SMPTE, um padrão de teste usado para calibrar cor e brilho em TVs e equipamentos de vídeo.' },
      { question: 'Meu monitor vai perder o sinal de verdade?', answer: 'Não. É uma página da web que só parece uma tela sem sinal. A tela continua funcionando normalmente.' },
      { question: 'Como saio?', answer: 'Aperte Esc, ou mexa o mouse e clique no botão de fechar no canto.' },
    ],
  },
  'hacker-typer': {
    glance: {
      answer: 'O Hacker Typer transforma qualquer digitação em código realista na tela, então qualquer um parece um hacker de filme. Aperte teclas à toa e aparecem linhas de código; ative alertas de “Acesso concedido” ou “Acesso negado” para completar a cena em pegadinhas, vídeos ou só por diversão.',
      features: ['Código de verdade saindo enquanto você digita', 'Alertas de acesso concedido e negado', 'Velocidade e cor do texto ajustáveis', 'Visual de terminal em tela cheia'],
      benefits: ['Cena hacker na hora para vídeos e pegadinhas', 'Jeito divertido de apresentar código às crianças', 'Grátis, sem instalar nada'],
    },
    steps: ['Clique no terminal e digite qualquer coisa, ou toque na tela no celular.', 'Mude a velocidade para definir quantos caracteres saem por tecla.', 'Aperte Alt três vezes para “ACCESS GRANTED” ou Caps Lock três vezes para “ACCESS DENIED”.', 'Use o botão Tela cheia ou F11 para o efeito completo, e Esc para sair.'],
    useCases: [
      { title: 'Impressionar os amigos', description: 'Pareça um gênio digitando qualquer coisa.' },
      { title: 'Filmes e lives', description: 'Gere imagens de “hacking” convincentes para vídeos.' },
      { title: 'Em sala de aula', description: 'Um jeito divertido de despertar interesse por programação.' },
      { title: 'Fundo para festas', description: 'Deixe rodando em uma tela livre em um evento de tecnologia.' },
    ],
    faqs: [
      { question: 'O Hacker Typer hackeia alguma coisa?', answer: 'Não. Ele só mostra texto pronto e inofensivo. Não executa comandos, não acessa redes nem mexe nos seus arquivos.' },
      { question: 'Por que a tecla F não ativa a tela cheia aqui?', answer: 'Nesta ferramenta toda tecla digita código, então use o botão de tela cheia.' },
      { question: 'Funciona no celular?', answer: 'Sim. Toque no terminal várias vezes para gerar mais código.' },
    ],
  },
  'hacked-screen': {
    glance: {
      answer: 'O simulador de tela hackeada mostra um falso aviso de “seu sistema foi hackeado” com texto falhando, logs rolando, barra de progresso e contagem regressiva. É uma pegadinha inofensiva: nada é acessado nem alterado, e quando a contagem acaba uma mensagem revela que era brincadeira.',
      features: ['Estilos alerta vermelho e terminal verde', 'Título, logs e contagem personalizáveis', 'Sirene opcional', 'Termina com uma mensagem clara de “é brincadeira”'],
      benefits: ['Pegadinha inofensiva e dramática', 'Cenário para filmes, lives e salas de fuga', 'Funciona offline no navegador'],
    },
    steps: ['Escolha um estilo (alerta vermelho ou terminal verde) e o texto exibido.', 'Ligue ou desligue a sirene; ela só toca depois que você começa.', 'Coloque em tela cheia e deixe o aparelho para seu amigo encontrar.', 'Aperte Esc ou mexa o mouse para mostrar o botão de fechar.'],
    useCases: [
      { title: 'Pegadinhas', description: 'Um susto rápido em um amigo que vai rir depois.' },
      { title: 'Filmes e salas de fuga', description: 'Uma tela de cenário de “você foi hackeado” convincente.' },
      { title: 'Conscientização em segurança', description: 'Mostre como é um scareware para as pessoas aprenderem a ignorar.' },
      { title: 'Lives e vídeos', description: 'Um momento dramático ou de reação.' },
    ],
    faqs: [
      { question: 'Isso hackeia ou danifica meu aparelho?', answer: 'Não. É texto e animação em uma aba comum. Não executa comandos, não lê arquivos nem se conecta a nada.' },
      { question: 'O que faço se um site real disser que fui hackeado?', answer: 'Feche a aba. Ferramentas de segurança reais nunca pedem para ligar para um número ou pagar para desbloquear o aparelho; esses pop-ups são golpes.' },
      { question: 'Como saio?', answer: 'Aperte Esc, ou mexa o mouse ou toque para mostrar o botão de fechar. Fechar a aba também funciona.' },
    ],
  },
  'zoom-lighting': {
    glance: {
      answer: 'A luz para Zoom transforma sua tela em uma fonte de luz suave para chamadas de vídeo. Escolha uma temperatura de cor de quente (cerca de 2700 K) a luz do dia (6500 K), ajuste o brilho e preencha a tela ou use uma moldura de luz em volta da janela do Zoom, Google Meet ou Microsoft Teams.',
      features: ['Temperatura de cor em Kelvin com atalhos', 'Tela inteira ou moldura em volta da chamada', 'Brilho e cor personalizada', 'Funciona em um segundo monitor ou tablet'],
      benefits: ['Rosto mais iluminado sem comprar luz', 'Luz quente que favorece a pele', 'Grátis e na hora'],
    },
    steps: ['Abra esta página em um segundo monitor ou ao lado da janela da chamada.', 'Ajuste a temperatura de cor e o brilho. Aumente o brilho da tela para ter mais luz.', 'Escolha luz cheia para o máximo de brilho, ou moldura para deixar uma janela escura no meio para a chamada.', 'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.'],
    useCases: [
      { title: 'Chamadas de vídeo', description: 'Ilumine e uniformize o rosto em ambientes escuros.' },
      { title: 'Lives', description: 'Uma luz principal suave de um monitor ou tablet sobrando.' },
      { title: 'Selfies', description: 'Use um notebook ou tablet como luz rápida e uniforme.' },
      { title: 'Maquiagem', description: 'Confira a maquiagem com luz quente de fim de tarde ou de dia.' },
    ],
    faqs: [
      { question: 'Qual temperatura de cor devo usar?', answer: 'A do ambiente. Cerca de 3000 K para cômodos com abajur à noite, 4000–4500 K é neutra e 5500–6500 K combina com a luz de uma janela.' },
      { question: 'Isso muda minha câmera?', answer: 'Não. Só ilumina seu rosto. Você ainda pode usar o ajuste de pouca luz do app de reunião.' },
      { question: 'A tela vai ficar mais clara que o normal?', answer: 'Não. Usa o brilho atual; aumente o brilho da tela para ter mais luz.' },
    ],
  },
  'visual-noise': {
    glance: {
      answer: 'O ruído visual enche a tela de padrões animados que fluem com suavidade: névoa suave, plasma colorido e granulado fino. É usado como fundo para vídeos e lives, como referência de texturas de design e como imagem calma para relaxar.',
      features: ['Estilos névoa, plasma e granulado fino', 'Escala, velocidade e paleta de cores', 'Pausa para congelar um quadro', 'Começa pausado se você prefere menos movimento'],
      benefits: ['Fundos em movimento calmos para vídeos e lives', 'Referência de texturas para design', 'Grátis e leve'],
    },
    steps: ['Escolha um estilo como névoa, plasma ou granulado fino.', 'Ajuste escala, velocidade e paleta de cores.', 'Pause a animação para congelar um quadro que gostar.', 'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.'],
    useCases: [
      { title: 'Imagem ambiente', description: 'Movimento suave em uma TV ou monitor ao fundo.' },
      { title: 'Texturas de design', description: 'Referência para texturas de granulado e degradê.' },
      { title: 'Fundos para VJ', description: 'Visuais generativos simples para eventos.' },
      { title: 'Relaxar', description: 'Névoa lenta para desacelerar.' },
    ],
    faqs: [
      { question: 'É o mesmo que chuvisco de TV?', answer: 'Não. O chuvisco é aleatório em cada pixel e quadro. Estes padrões usam ruído suavizado que flui devagar.' },
      { question: 'Gasta muita bateria?', answer: 'Roda na placa de vídeo. Diminua a velocidade ou pause para economizar energia no notebook.' },
      { question: 'Respeita a preferência por menos movimento?', answer: 'Sim. Se o sistema preferir menos movimento, a animação começa pausada.' },
    ],
  },
  'color-cycle': {
    glance: {
      answer: 'Uma tela que muda de cor passa suavemente pelas cores do arco-íris. Ajuste a velocidade e o brilho para luz de festa, luz ambiente, relaxar ou conferir rápido se a tela mostra cada tom sem faixas.',
      features: ['Arco-íris suave ou modo em passos', 'Controle de velocidade e brilho', 'Tela cheia com cursor oculto', 'Respeita a preferência por menos movimento'],
      benefits: ['Luz de festa ou ambiente na hora', 'Confere transições de cor suaves', 'Grátis em qualquer aparelho'],
    },
    steps: ['Escolha o arco-íris suave ou um ciclo em passos entre cores.', 'Ajuste a velocidade no controle.', 'Aperte a barra de espaço para pausar e continuar.', 'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.'],
    useCases: [
      { title: 'Luz ambiente', description: 'Um brilho que muda devagar para festas ou relaxar.' },
      { title: 'Pixels presos', description: 'Alternar cores rápido às vezes é sugerido para pixels presos, sem garantia.' },
      { title: 'Clima na live', description: 'Uma luz de fundo que muda atrás de você na câmera.' },
      { title: 'Luz noturna infantil', description: 'Uma luz suave que muda devagar com pouco brilho.' },
    ],
    faqs: [
      { question: 'O ciclo de cores conserta pixels presos?', answer: 'Às vezes trocar de cor rápido ajuda um subpixel preso a voltar a responder, mas não há garantia e não conserta pixels mortos.' },
      { question: 'O ciclo rápido é seguro?', answer: 'Piscadas rápidas podem afetar pessoas com epilepsia fotossensível. A velocidade é limitada, começa devagar e a preferência por menos movimento é respeitada.' },
      { question: 'Posso pausar em uma cor que gostei?', answer: 'Sim. Aperte a barra de espaço ou o botão de pausa.' },
    ],
  },
  'gradient-screen': {
    glance: {
      answer: 'Uma tela de degradê enche o display com uma mistura suave entre as cores que você escolher. Defina cores, ângulo e tipo, use como luz ambiente ou papel de parede, verifique se a tela mostra faixas e baixe o degradê como imagem.',
      features: ['Degradês lineares e radiais', 'Qualquer cor e ângulo', 'Download em PNG de alta resolução', 'Tela cheia'],
      benefits: ['Papéis de parede em segundos', 'Bom teste de faixas para monitores', 'Grátis, sem programa de design'],
    },
    steps: ['Escolha uma predefinição ou suas próprias cores.', 'Alterne entre linear e radial e ajuste o ângulo.', 'Ative a animação para um degradê que se move devagar.', 'Aperte F para tela cheia ou baixe o degradê em PNG.'],
    useCases: [
      { title: 'Papéis de parede', description: 'Crie um papel de parede em degradê em qualquer resolução.' },
      { title: 'Luz ambiente', description: 'Um brilho suave de dois tons cansa menos que uma cor sólida.' },
      { title: 'Teste de faixas', description: 'Degradês suaves revelam faixas em painéis de pouca profundidade.' },
      { title: 'Fundos', description: 'Fundos rápidos para apresentações e vídeos.' },
    ],
    faqs: [
      { question: 'Por que meu degradê mostra listras?', answer: 'São faixas, causadas pela pouca profundidade de cor do painel ou pela compressão. É um limite da tela, não um defeito do degradê.' },
      { question: 'Posso baixar?', answer: 'Sim. Escolha uma resolução e baixe um PNG feito no navegador.' },
      { question: 'Posso usar três cores?', answer: 'Sim. Ative a cor do meio para acrescentar um terceiro tom.' },
    ],
  },
  'flip-clock-screensaver': {
    glance: {
      answer: 'Um protetor de tela de relógio flip mostra a hora em grandes dígitos que viram a cada minuto, como um despertador retrô. Escolha formato de 12 ou 24 horas, mostre segundos e data, e rode em tela cheia em um monitor sobrando, tablet ou TV.',
      features: ['Dígitos flip animados', 'Formato 12 e 24 horas com segundos e data', 'Temas claro e escuro', 'Mantém a tela ligada em tela cheia'],
      benefits: ['Transforma um tablet velho em relógio de mesa', 'Hora grande e legível de longe', 'Grátis, sem app'],
    },
    steps: ['A hora local aparece automaticamente.', 'Alterne o formato 12/24 h, os segundos e a data. Cada dígito vira como um relógio flip de verdade.', 'Escolha o tema que combina com o ambiente.', 'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.'],
    useCases: [
      { title: 'Relógio de mesa', description: 'Transforme um tablet ou monitor em relógio de mesa ou cabeceira.' },
      { title: 'Apresentações', description: 'Mostre a hora com clareza em eventos e intervalos.' },
      { title: 'Foco', description: 'Um relógio simples e calmo à vista enquanto trabalha.' },
      { title: 'Lives', description: 'Um fundo elegante de “começando em breve”.' },
    ],
    faqs: [
      { question: 'De onde vem a hora?', answer: 'Do relógio e do fuso horário do seu aparelho, então funciona offline depois de carregado.' },
      { question: 'A tela vai continuar ligada?', answer: 'Em tela cheia, nos navegadores compatíveis, um bloqueio de suspensão mantém a tela ligada.' },
      { question: 'Posso desligar a animação?', answer: 'Sim. Se o sistema preferir menos movimento, os dígitos mudam sem virar.' },
    ],
  },
  'motivational-quote-screensaver': {
    glance: {
      answer: 'Um protetor de tela de frases motivacionais mostra uma citação inspiradora nova a cada poucos segundos em letra grande e legível, com relógio opcional. Combina com recepções, salas de aula, academias e telas de casa onde as pessoas olham de passagem.',
      features: ['Citações de Sêneca, Marco Aurélio, Emerson e outros', 'Velocidade, fundos e ordem aleatória', 'Relógio opcional', 'Tela cheia sem desligar'],
      benefits: ['Uma tela positiva para espaços compartilhados', 'Sem configuração em Smart TVs', 'Grátis'],
    },
    steps: ['Uma citação aleatória aparece na hora.', 'Escolha um fundo e quantos segundos cada citação fica na tela.', 'Use as setas ou as teclas ← → para trocar de citação; a barra de espaço pausa.', 'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.'],
    useCases: [
      { title: 'Escritórios e recepções', description: 'Um loop calmo e positivo para TVs de recepção e equipes.' },
      { title: 'Salas de aula', description: 'Mostre a frase do dia quando os alunos chegam.' },
      { title: 'Academias e estúdios', description: 'Frases curtas que dá para ler do outro lado da sala.' },
      { title: 'Mesa em casa', description: 'Aproveite um segundo monitor ou tablet velho enquanto trabalha.' },
    ],
    faqs: [
      { question: 'De onde vêm as citações?', answer: 'São frases curtas de autores e provérbios consagrados, como Sêneca, Marco Aurélio, Confúcio, Benjamin Franklin e Mark Twain. Elas vêm na página, então nada é baixado durante o uso.' },
      { question: 'Posso deixar uma citação fixa?', answer: 'Sim. Aperte Pausar (ou espaço) e a citação fica até você continuar ou apertar uma seta.' },
      { question: 'Mantém a tela ligada?', answer: 'Em tela cheia, nos navegadores compatíveis, um bloqueio de suspensão impede a tela de apagar.' },
    ],
  },
  'fake-windows-11-update': update('Windows 11', 'Microsoft', {
    answer: 'Uma tela falsa de atualização do Windows 11 mostra a tela escura “Trabalhando nas atualizações” com o indicador girando e uma porcentagem que sobe devagar. Coloque em tela cheia para o computador parecer ocupado atualizando, como pegadinha ou cenário, e aperte Esc para voltar.',
    features: ['Indicador e texto no estilo do Windows 11', 'Velocidade ajustável e pausa', 'Tela cheia com cursor oculto', 'Esc para sair'],
    benefits: ['Pegadinha realista e inofensiva', 'Cenário limpo para gravações de tela', 'Grátis'],
  }, { question: 'Qual a diferença para a versão do Windows 10?', answer: 'Usa o fundo mais escuro e o layout mais simples dos sistemas recentes.' }),
  'fake-mac-update': update('macOS', 'Apple', {
    answer: 'Uma tela falsa de atualização do Mac mostra a tela preta de atualização do macOS com barra de progresso e tempo restante. Em tela cheia parece que o Mac está instalando uma atualização, para uma pegadinha inofensiva ou cenário de vídeo. Aperte Esc para sair.',
    features: ['Barra de progresso e tempo restante no estilo macOS', 'Velocidade de atualização ajustável', 'Tela cheia com cursor oculto', 'Esc para sair'],
    benefits: ['Pegadinha inofensiva para quem usa Mac', 'Cenário limpo para vídeos', 'Grátis'],
  }, { question: 'Usa o logo real da Apple?', answer: 'Não. Usa uma marca genérica neutra para evitar uso indevido da marca, mantendo o layout conhecido.' }),
  'fake-android-update': update('Android', 'Google', {
    answer: 'Uma tela falsa de atualização do Android mostra uma atualização do sistema em andamento com barra de progresso. Abra em tela cheia em um celular ou tablet para parecer que está atualizando e toque no botão de fechar para revelar a pegadinha.',
    features: ['Tela de atualização e progresso no estilo Android', 'Velocidade ajustável', 'Tela cheia em celulares e tablets', 'Toque para sair'],
    benefits: ['Pegadinha que funciona em qualquer celular', 'Sem instalar app', 'Grátis'],
  }, { question: 'Funciona no celular?', answer: 'Sim. Na maioria dos navegadores Android a tela cheia esconde a barra de endereço. No Safari do iPhone ela ocupa a janela do navegador.' }),
  'fake-windows-xp-update': update('Windows XP', 'Microsoft', {
    answer: 'Uma tela falsa de atualização do Windows XP recria a clássica tela azul de “Instalando atualizações” do início dos anos 2000 com sua barra de progresso. Use em pegadinhas nostálgicas, vídeos retrô e filmagens ambientadas na época. Aperte Esc para sair.',
    features: ['Visual clássico da era XP', 'Barra de progresso e texto de status', 'Tela cheia com cursor oculto', 'Esc para sair'],
    benefits: ['Nostalgia na hora', 'Cenário fiel à época', 'Grátis'],
  }, { question: 'Por que parece tão retrô?', answer: 'Imita o estilo das janelas do início dos anos 2000 para um visual nostálgico e reconhecível.' }),
  'fake-chrome-os-update': update('ChromeOS', 'Google', {
    answer: 'Uma tela falsa de atualização do ChromeOS mostra uma atualização no estilo Chromebook em andamento. Coloque em tela cheia em um Chromebook ou qualquer computador para parecer que o sistema está atualizando, como pegadinha inofensiva ou cenário, e aperte Esc para sair.',
    features: ['Tela de atualização no estilo ChromeOS', 'Velocidade do progresso ajustável', 'Tela cheia com cursor oculto', 'Esc para sair'],
    benefits: ['Funciona em Chromebooks da escola e do trabalho', 'Pegadinha inofensiva', 'Grátis'],
  }, { question: 'Funciona em um Chromebook?', answer: 'Sim. Aperte a tecla de tela cheia ou o botão Tela cheia para o efeito completo.' }),
  'fake-ubuntu-update': update('Ubuntu', 'Canonical', {
    answer: 'Uma tela falsa de atualização do Ubuntu mostra atualizações de pacotes Linux rolando em um terminal com linhas de progresso. Parece uma atualização real do sistema: uma pegadinha divertida para desenvolvedores e um cenário convincente para vídeos sobre Linux.',
    features: ['Saída de atualização no estilo apt', 'Cores de terminal no estilo Ubuntu', 'Tela cheia', 'Esc para sair'],
    benefits: ['Pegadinha para desenvolvedores', 'Cenário de terminal realista', 'Grátis'],
  }, { question: 'As linhas do log são comandos reais?', answer: 'Não. São textos prontos e nada é executado no seu computador.' }),
  'fake-windows-xp-boot': {
    glance: {
      answer: 'Uma tela falsa de inicialização do Windows XP reproduz a clássica tela de abertura com a barra de carregamento azul se movendo sobre o preto. É um cenário retrô rápido para vídeos, filmagens e pegadinhas, e um protetor de tela nostálgico para fãs do sistema de 2001.',
      features: ['Tela de inicialização clássica com barra animada', 'Repete pelo tempo que quiser', 'Tela cheia com cursor oculto', 'Esc para sair'],
      benefits: ['Cenário retrô em um clique', 'Protetor de tela nostálgico', 'Grátis'],
    },
    steps: ['A tela de inicialização começa na hora, com os blocos azuis correndo pela barra.', 'Aperte F ou Tela cheia para ocupar a tela e esconder o navegador.', 'Deixe rodando: a barra repete pelo tempo que quiser.', 'Aperte Esc para sair.'],
    useCases: [
      { title: 'Nostalgia', description: 'Lembre a inicialização de um PC do início dos anos 2000.' },
      { title: 'Cenário retrô', description: 'Monte um computador de época para fotos ou filmes.' },
      { title: 'Pegadinhas inofensivas', description: 'Faça um PC moderno parecer que está ligando o XP.' },
      { title: 'Abertura de lives', description: 'Uma abertura retrô de “iniciando” para suas lives.' },
    ],
    faqs: [
      { question: 'É algo real ou perigoso?', answer: 'Não. É uma simulação visual inofensiva em uma aba comum. Não muda seu aparelho nem instala nada.' },
      brandFaq('Microsoft'),
      { question: 'Toca o som de inicialização?', answer: 'Não. Por respeito aos seus ouvidos e aos direitos autorais, não há som de inicialização.' },
      EXIT,
    ],
  },
  'fake-zoom-meeting': call('Zoom Video Communications', {
    answer: 'Uma tela falsa de reunião do Zoom mostra uma chamada no estilo Zoom com grade de participantes, barra de ferramentas e a prévia da sua câmera. Serve para pegadinhas, cenários, capturas e praticar na câmera. Sua imagem fica no seu aparelho e nunca é gravada nem enviada.',
    features: ['Grade de participantes com nomes e ícones de mudo', 'Sua câmera ao vivo, também em tela cheia', 'Timer de reunião e barra de ferramentas', 'Título da reunião editável'],
    benefits: ['Cenário realista de chamada para vídeos', 'Pratique apresentações na câmera', 'Privado: nada sai do seu aparelho'],
  }, { question: 'Qual a diferença para a tela do Teams?', answer: 'Esta segue o layout do Zoom: uma galeria de blocos com os controles embaixo. A do Teams coloca os controles e um botão vermelho de sair em uma barra no topo com timer.' }),
  'fake-teams-meeting': call('Microsoft', {
    answer: 'Uma tela falsa de reunião do Microsoft Teams mostra uma chamada no estilo Teams com blocos de participantes, barra da reunião e a prévia da sua câmera. Use para pegadinhas, cenários ou para ensaiar uma apresentação. A prévia fica no navegador e nunca é gravada.',
    features: ['Blocos e controles no estilo Teams', 'Câmera ao vivo em tela cheia', 'Timer de reunião', 'Título da reunião editável'],
    benefits: ['Cenário de escritório convincente', 'Ensaie chamadas com tranquilidade', 'Privado e grátis'],
  }, { question: 'Posso mudar o nome da reunião?', answer: 'Sim. Digite um novo nome no campo de título abaixo da tela. Ele aparece no topo na hora, e nada é salvo nem enviado.' }),
  'fake-google-meet': call('Google', {
    answer: 'Uma tela falsa do Google Meet mostra uma chamada no estilo Meet com blocos de participantes, a barra de controles inferior e a prévia da sua câmera. Serve para pegadinhas, vídeos e praticar apresentações, e sua imagem nunca sai do seu aparelho.',
    features: ['Blocos e barra de controles no estilo Meet', 'Câmera ao vivo em tela cheia', 'Timer e título da reunião editável', 'Sem login no Google'],
    benefits: ['Cenário realista para filmes e tutoriais', 'Pratique na câmera', 'Privado e grátis'],
  }, { question: 'O código da reunião é real?', answer: 'Não. “abc-defg-hij” é um texto de exemplo. Ninguém pode entrar e a página nunca se conecta ao Google Meet nem a outro serviço.' }),
  'fake-slack-huddle': call('Slack Technologies', {
    answer: 'Uma tela falsa de huddle do Slack mostra uma chamada de áudio e vídeo no estilo Slack com participantes e controles. Use como pegadinha, cenário para capturas em apresentações ou fundo de filmagem, sem ligação com nenhum workspace real do Slack.',
    features: ['Visual de participantes no estilo huddle', 'Indicadores de quem fala e controles', 'Tela cheia', 'Título editável'],
    benefits: ['Cenário rápido para vídeos de trabalho remoto', 'Pegadinha inofensiva', 'Grátis'],
  }),
  'fake-radar-screen': {
    glance: {
      answer: 'Uma tela de radar falsa mostra um radar circular clássico, chamado indicador de posição em plano, com uma linha de varredura girando, contatos que somem aos poucos e anéis de distância. As leituras e o ping opcional fazem dela um cenário convincente para filmes, salas de fuga, jogos e pegadinhas de ficção científica.',
      features: ['Varredura giratória com rastro', 'Contatos em movimento e anéis de distância', 'Leituras de rumo e distância', 'Ping estilo sonar opcional'],
      benefits: ['Cenário de ficção científica ou militar na hora', 'Ótimo para salas de fuga e palcos', 'Grátis e funciona offline'],
    },
    steps: ['O radar começa a varrer na hora.', 'Escolha uma cor (verde, âmbar ou azul), a velocidade da varredura e o número de contatos.', 'Ligue o ping se quiser; ele só toca depois de ativado.', 'Aperte F ou Tela cheia para ocupar a tela, e Esc para sair.'],
    useCases: [
      { title: 'Cenário de cinema e teatro', description: 'Uma tela de sala de controle convincente sem equipamento real.' },
      { title: 'Salas de fuga e jogos', description: 'Crie o clima de submarino, espaço ou espionagem.' },
      { title: 'Festas e lives', description: 'Um fundo de ficção científica em movimento numa TV ou segundo monitor.' },
      { title: 'Protetor de tela', description: 'Uma animação calma em loop para uma tela parada.' },
    ],
    faqs: [
      { question: 'Mostra dados reais de radar ou aviões?', answer: 'Não. Cada contato é gerado ao acaso no navegador. É só para entretenimento e cenários.' },
      { question: 'Por que os pontos somem?', answer: 'Radares clássicos usavam fósforo que continuava brilhando depois que o feixe passava e depois apagava. O efeito imita esse brilho residual.' },
      { question: 'Como saio?', answer: 'Aperte Esc, ou mexa o mouse ou toque na tela para mostrar o botão de fechar. Fechar a aba também funciona.' },
    ],
  },
}
