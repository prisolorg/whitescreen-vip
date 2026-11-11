import type { GuideTranslation } from './types'

export const ptBr: Record<string, GuideTranslation> = {
  'dead-pixel-test': {
    slug: 'teste-de-dead-pixel',
    navLabel: 'Teste de dead pixel',
    title: 'Teste de dead pixel: como encontrar pixels mortos, presos e quentes em qualquer tela',
    metaTitle: 'Teste de dead pixel: encontre pixels mortos e presos',
    metaDescription:
      'Aprenda a fazer um teste de dead pixel no Windows, Mac, iPhone e Android. Encontre pixels mortos, presos e quentes com cores primárias em tela cheia, passo a passo.',
    readingTime: '6 min de leitura',
    category: 'Diagnóstico de tela',
    intro:
      'Todo painel moderno (LCD, IPS, VA ou OLED) é formado por milhões de minúsculos subpixels vermelhos, verdes e azuis controlados por microtransistores. Quando um transistor falha ou trava, surge um defeito incômodo que atrapalha a leitura, a edição de fotos e os jogos. Testar a tela com cores primárias em tela cheia é o método mais rápido e confiável para encontrar falhas de pixel dentro do prazo de devolução ou antes do fim da garantia.',
    toolLabel: 'Abrir o teste de dead pixel',
    toolDescription: 'Alterne telas vermelha, verde, azul, preta e branca em tela cheia para encontrar falhas.',
    sections: [
      {
        title: 'Pixel morto, preso ou quente: como diferenciar',
        content: [
          'Nem todo defeito de pixel tem a mesma aparência ou comportamento. Identificar o tipo exato ajuda a saber se um ciclo de software pode destravá-lo ou se é preciso trocar o painel pela garantia.',
          'Um pixel morto acontece quando o transistor que o controla fica totalmente desligado. Em telas LCD com retroiluminação, ele aparece como um ponto preto permanente, qualquer que seja a cor ao redor.',
          'Um pixel preso acontece quando um ou dois subpixels (vermelho, verde ou azul) ficam sempre acesos enquanto os outros funcionam normalmente. Ele aparece como um ponto colorido brilhante e fixo sobre fundos escuros ou contrastantes.',
          'Um pixel quente surge quando os três subpixels ficam acesos no máximo ao mesmo tempo, criando um ponto branco permanente que se destaca muito sobre o preto e conteúdos escuros.',
        ],
        tips: [
          'Pixels mortos são pontos pretos visíveis em telas branca, vermelha, verde ou azul.',
          'Pixels presos são pontos coloridos (vermelho, verde ou azul) visíveis sobre fundos escuros.',
          'Pixels quentes aparecem como pontinhos brancos permanentes sobre fundos escuros.',
        ],
      },
      {
        title: 'Primeiro passo essencial: limpe antes de diagnosticar',
        content: [
          'Uma quantidade surpreendente de supostos "pixels mortos" acaba sendo poeira microscópica, gotículas secas de um espirro ou pequenos respingos de gordura presos no vidro.',
          'Antes de concluir que o painel tem defeito, limpe a tela com cuidado usando um pano de microfibra óptica limpo e seco, com o monitor desligado. Nunca raspe com as unhas: isso pode riscar para sempre os filtros polarizadores antirreflexo.',
        ],
      },
      {
        title: 'Guia de teste passo a passo para todos os aparelhos',
        content: ['Siga estas instruções para testar a fundo monitores, notebooks, tablets e celulares.'],
        steps: [
          'Abra o teste de dead pixel do WhiteScreen.vip e entre em tela cheia para remover barras de endereço, barras de tarefas e outros elementos.',
          'Comece pela tela branca: percorra o painel devagar do canto superior esquerdo ao inferior direito procurando pontos pretos fixos (pixels mortos).',
          'Mude para preto: procure pontos brancos brilhantes (pixels quentes) ou pontinhos coloridos (pixels presos).',
          'Alterne vermelho, verde e azul puros: cada cor primária testa um canal de subpixel. Um subpixel com falha aparece como um ponto escurecido ou de outra cor.',
          'No Windows ou macOS: deixe o brilho em 80–100% e olhe a tela de frente, em ângulo reto, para evitar difração óptica.',
          'No iPhone ou Android: garanta que não sobrem margens do navegador ou salve as amostras na galeria para ver em tela cheia.',
        ],
      },
      {
        title: 'Limites do teste no navegador e a verdade sobre a garantia',
        content: [
          'Ferramentas de teste no navegador dão um diagnóstico visual imediato e preciso, porque acendem cada pixel com 100% de saturação, sem artefatos de compressão de vídeo.',
          'Desconfie, porém, de sites que prometem que cores piscando ou vídeos em loop consertam pixels mortos permanentes. Um exercitador rápido de subpixels às vezes destrava um transistor lento, mas um circuito rompido ou um transistor queimado não se corrige com software.',
          'Confira a classificação de defeitos de pixel do fabricante (ISO 9241-307 / ISO 13406-2). A maioria das garantias de monitores exige de 3 a 5 subpixels mortos, ou pelo menos um pixel morto na área central, para aprovar a troca gratuita.',
        ],
        checklist: [
          'Compare a quantidade de defeitos com a política de garantia do fabricante dentro do prazo de 14 a 30 dias.',
          'Tire uma foto macro do defeito com o celular como prova para o suporte.',
          'Verifique se a loja oferece garantia de "zero pixels mortos" no período inicial da compra.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Um teste no navegador consegue consertar um pixel morto?',
        answer:
          'Não. Se o transistor estiver quebrado ou queimado, o software não conserta. Utilitários que piscam rápido às vezes destravam subpixels presos, mas pixels mortos permanentes exigem troca do painel.',
      },
      {
        question: 'Por que pixels presos às vezes somem sozinhos?',
        answer:
          'Em painéis de cristal líquido, pixels presos costumam vir de desequilíbrio de carga elétrica ou de uma leve tensão física. Quando a tela esquenta ou esfria, a dilatação térmica e os ciclos de tensão às vezes devolvem a orientação normal do cristal líquido.',
      },
      {
        question: 'Como diferenciar poeira na tela de um pixel morto?',
        answer:
          'Mude o ângulo de visão movendo a cabeça uns 15 cm para os lados. Como o vidro tem espessura, a poeira na superfície se desloca um pouco em relação à camada de luz (efeito paralaxe), enquanto o pixel morto fica fixo na grade de pixels.',
      },
    ],
  },
  'screen-color-test': {
    slug: 'teste-de-cores-da-tela',
    navLabel: 'Teste de cores da tela',
    title: 'Teste de cores da tela: como avaliar a precisão e o equilíbrio de cores do monitor',
    metaTitle: 'Teste de cores da tela: confira precisão e equilíbrio',
    metaDescription:
      'Teste seu monitor para dominantes de cor, banding, desvios de gama e contraste. Guia passo a passo de teste de cores para PC, Mac e celular.',
    readingTime: '6 min de leitura',
    category: 'Calibração de tela',
    intro:
      'Seja para editar fotos, corrigir cor de vídeos, criar sites ou combinar dois monitores na mesma mesa, a reprodução de cor precisa é essencial. Dominantes sutis, rampas de gama irregulares e faixas de cor podem distorcer seu trabalho sem você perceber. Um teste de cores sistemático com campos de referência em tela cheia mostra dominantes, desvio do balanço de branco e saturação cortada sem equipamentos caros.',
    toolLabel: 'Abrir o teste de cores da tela',
    toolDescription: 'Teste cinzas neutros, cores primárias e equilíbrio de saturação em toda a tela.',
    sections: [
      {
        title: 'Por que testar a cor visualmente antes de calibrar',
        content: [
          'Muitos monitores saem de fábrica com tons azulados exagerados, verdes supersaturados e pretos esmagados para chamar a atenção na loja, não para serem precisos.',
          'Antes de investir num colorímetro, um teste visual estruturado mostra se a tela tem uma dominante geral (por exemplo, verde ou magenta nos meios-tons), pretos esmagados ou muita mudança de cor conforme o ângulo.',
        ],
        tips: [
          'Deixe o monitor aquecer pelo menos 30 minutos antes de avaliar as cores; a temperatura da retroiluminação muda durante o aquecimento.',
          'Apague luzes do ambiente que criem reflexos coloridos no vidro.',
        ],
      },
      {
        title: 'Procedimento de teste de cor passo a passo',
        content: ['Siga estas etapas no Windows, macOS e em estações com vários monitores.'],
        steps: [
          'Desative filtros de cor por software: Luz noturna no Windows, True Tone e Night Shift no macOS e o conforto visual no celular.',
          'Abra o teste de cores do WhiteScreen.vip em tela cheia e escolha a amostra de cinza neutro a 50%.',
          'Avalie o cinza: um cinza neutro puro não deve parecer rosado, esverdeado nem azulado. Qualquer dominante indica desvio do ponto branco.',
          'Alterne as amostras vermelha, verde e azul: confira se as cores ficam uniformes de canto a canto, sem escurecer ou mudar de tom nas bordas.',
          'Confira as cores secundárias (ciano, magenta e amarelo): elas usam vários canais ao mesmo tempo e revelam desequilíbrios.',
          'Verifique o alinhamento entre monitores: arraste a janela do navegador sobre a divisa entre duas telas para ver diferenças de ponto branco.',
        ],
      },
      {
        title: 'Como detectar faixas de cor e limites de profundidade de bits',
        content: [
          'Telas padrão de 8 bits mostram 16,7 milhões de cores, enquanto painéis modernos de 10 bits (8 bits + FRC ou 10 bits reais) passam de 1 bilhão de tons. Quando o monitor ou o driver lida mal com as gradações, degradês suaves viram degraus visíveis (banding).',
          'Observe as transições de degradê na nossa página de teste de monitor. Se aparecerem degraus ou halos de cor falsos, confira se o painel da placa de vídeo (NVIDIA, AMD Radeon ou Intel) está em RGB completo (0–255), e não no intervalo limitado de vídeo (16–235).',
        ],
        checklist: [
          'Defina a faixa dinâmica de saída como "Completa" (0–255) nas configurações da GPU.',
          'Escolha o modo sRGB ou D65 no menu do monitor (OSD) para precisão padrão na web.',
          'Iguale taxas de atualização e profundidade de cor em configurações com dois monitores.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Por que minha tela branca parece meio amarela perto do celular?',
        answer:
          'Celulares costumam usar brancos frios de 7000–7500 K, então um monitor calibrado em 6500 K (D65) parece quente ou amarelado ao lado. D65 é a temperatura de cor padrão para web e vídeo.',
      },
      {
        question: 'Qual a diferença entre os modos sRGB e DCI-P3?',
        answer:
          'sRGB é o espaço de cor padrão para conteúdo web e escritório. DCI-P3 cobre um espectro 25% maior e é usado em cinema HDR e celulares modernos. Para trabalho web, travar o monitor em sRGB evita supersaturação.',
      },
    ],
  },
  'screen-uniformity-test': {
    slug: 'teste-de-uniformidade-da-tela',
    navLabel: 'Uniformidade da tela',
    title: 'Teste de uniformidade da tela: como verificar vazamento de luz, IPS glow e nuvens',
    metaTitle: 'Teste de uniformidade: vazamento de luz e IPS glow',
    metaDescription:
      'Verifique vazamento de luz, IPS glow, nuvens, vinheta e efeito de tela suja (DSE) no seu monitor com telas de teste cinza e preta.',
    readingTime: '6 min de leitura',
    category: 'Diagnóstico de tela',
    intro:
      'Nenhuma tela plana distribui o brilho de forma perfeita por toda a superfície. Mas vazamentos de luz fortes, IPS glow excessivo, cantos escurecidos ou o "efeito de tela suja" (DSE) podem estragar cenas escuras e criar sombras incômodas em sites de fundo claro. Um teste de uniformidade estruturado, com iluminação controlada, ajuda a localizar falhas do painel e conferir se estão dentro da tolerância de fabricação.',
    toolLabel: 'Abrir o teste de uniformidade',
    toolDescription: 'Inspecione campos cinza 5%, cinza 50%, preto e branco, com grades opcionais.',
    sections: [
      {
        title: 'Vazamento de luz, IPS glow e nuvens: a diferença essencial',
        content: [
          'Antes de devolver um monitor, é fundamental separar um defeito real de fabricação das características próprias da tecnologia do painel.',
          'O vazamento de luz (backlight bleed) é uma falha de montagem: o painel fica pressionado ou mal encaixado na moldura e a luz do LED escapa pelas bordas. Aparece como focos amarelados ou brancos fixos nas bordas, que não mudam conforme onde você senta.',
          'O IPS glow é uma característica óptica natural de todos os painéis IPS. Como os cristais IPS não bloqueiam totalmente a luz em ângulo, surge um brilho âmbar ou prateado fraco nos cantos quando se olha de perto. Se você mexer a cabeça ou se afastar meio metro, o glow muda e diminui.',
          'Nuvens e efeito de tela suja (DSE) descrevem uma difusão desigual da retroiluminação, que cria manchas cinzentas visíveis ao percorrer fundos lisos, como o gramado de um jogo ou o céu num game.',
        ],
        tips: [
          'O vazamento de luz fica no mesmo lugar e com o mesmo brilho em qualquer ângulo de visão.',
          'O IPS glow muda de intensidade e posição quando você move a cabeça para os lados.',
          'O efeito de tela suja (DSE) aparece melhor numa tela cinza lisa a 20% ou 50%.',
        ],
      },
      {
        title: 'Como preparar o ambiente de teste',
        content: [
          'Testar a uniformidade num escritório claro esconde o vazamento de luz, enquanto uma foto de celular no escuro com modo noturno exagera o glow dez vezes.',
        ],
        steps: [
          'Diminua a luz do ambiente para um nível confortável de fim de tarde (não escuridão total).',
          'Desative contraste dinâmico, equalizador de preto ou escurecimento local no menu do monitor.',
          'Deixe o brilho no seu nível normal de trabalho (cerca de 120–150 nits, normalmente 30% a 50% no menu).',
          'Abra a tela preta do WhiteScreen.vip em tela cheia e sente na sua distância habitual (pelo menos um braço).',
          'Observe os cantos: se saírem fachos de luz das bordas que não mudam ao mover a cabeça, é vazamento de luz.',
          'Mude para as telas cinza 5% e cinza 50% para procurar efeito de tela suja e vinheta do centro para as bordas.',
        ],
      },
      {
        title: 'Formas práticas de reduzir problemas de uniformidade',
        content: [
          'Se a tela tem vazamento de luz ou IPS glow leves que não justificam a devolução, alguns ajustes simples melhoram muito a experiência.',
        ],
        checklist: [
          'Instale luz de fundo (uma fita LED de 6500 K atrás do monitor). Ela ajuda o olho a se adaptar e faz os pretos parecerem bem mais profundos.',
          'Reduza o brilho: usar 100% num quarto escuro destaca todas as imperfeições da retroiluminação.',
          'Confira os parafusos do suporte VESA: apertar demais pode deformar a carcaça e causar vazamento por pressão.',
        ],
      },
    ],
    faqs: [
      {
        question: 'A garantia cobre vazamento de luz?',
        answer:
          'Os fabricantes consideram normais vazamentos leves e IPS glow. Vazamentos fortes, com pontos brancos nítidos visíveis em uso normal de escritório com luz do dia, costumam ter direito a troca pela garantia.',
      },
      {
        question: 'Telas OLED têm vazamento de luz?',
        answer:
          'Não. Telas OLED têm subpixels que emitem a própria luz e não usam retroiluminação. Pixels pretos apagam totalmente, com contraste infinito e sem vazamento de luz ou IPS glow.',
      },
    ],
  },
  'clean-laptop-screen': {
    slug: 'como-limpar-tela-do-notebook',
    navLabel: 'Limpar tela do notebook',
    title: 'Como limpar a tela do notebook com segurança, sem riscos nem manchas',
    metaTitle: 'Como limpar a tela do notebook com segurança',
    metaDescription:
      'Guia seguro passo a passo para limpar a tela do notebook ou MacBook com inspeção em tela branca, microfibra óptica e sem produtos agressivos.',
    readingTime: '5 min de leitura',
    category: 'Limpeza e manutenção',
    intro:
      'Telas de notebooks, MacBooks e monitores modernos têm revestimentos antirreflexo, filmes polarizadores e camadas oleofóbicas muito delicados. Limpa-vidros domésticos, papel-toalha ou pressão demais podem remover essas camadas para sempre ou danificar o cristal líquido. Usando uma tela branca em tela cheia como luz de inspeção, você enxerga cada mancha, poeira e marca do teclado antes de limpar com a técnica certa.',
    warning:
      'INSTRUÇÕES DE SEGURANÇA: sempre desligue e tire da tomada o notebook ou monitor antes de usar pano ou líquido. Nunca borrife água ou produto direto na tela, nas dobradiças ou nas bordas. Líquido que escorre para a borda inferior pode destruir a retroiluminação.',
    toolLabel: 'Abrir a tela branca para inspeção',
    toolDescription: 'Use luz branca em tela cheia para ver poeira, digitais e manchas antes de limpar.',
    sections: [
      {
        title: 'Por que a tela branca é a melhor ferramenta de inspeção',
        content: [
          'Com a tela desligada ou mostrando um fundo escuro, a gordura dos dedos, as marcas do teclado e a poeira fina se misturam ao preto do painel.',
          'Abrir o WhiteScreen.vip em tela cheia ilumina o painel com uma luz uniforme e de alto contraste. Poeira e manchas de gordura viram silhuetas escuras sobre o fundo claro, e você ganha um mapa preciso de onde limpar.',
        ],
      },
      {
        title: 'Limpeza segura passo a passo',
        content: ['Siga estes passos, aprovados pelos fabricantes, para notebooks foscos, telas brilhantes e telas Retina de MacBook.'],
        steps: [
          'Inspecione a tela com o WhiteScreen.vip em tela cheia e brilho em 100% para mapear sujeira, gordura do teclado e marcas de gotas secas.',
          'Desligue o notebook completamente e desconecte carregador e cabos USB. Espere 5 minutos para a tela esfriar (numa tela quente a umidade evapora de repente e deixa marcas).',
          'Use um pano de microfibra óptica limpo e denso (como os de óculos e lentes de câmera). Nunca papel-toalha, lenço de papel ou camiseta.',
          'Passe o pano de leve em movimentos circulares ou horizontais sobrepostos. Deixe as fibras levantarem a poeira sem pressionar o painel.',
          'Para digitais gordurosas difíceis: umedeça uma ponta do pano com um pouco de água destilada. Deve ficar só úmida, nunca pingando.',
          'Esfregue a mancha com a ponta úmida e seque logo em seguida com a parte seca do pano.',
          'Espere 3 minutos para a umidade restante evaporar antes de fechar a tampa ou ligar o aparelho.',
        ],
      },
      {
        title: 'Erros comuns que estragam telas',
        content: ['Muitas dicas de limpeza populares na internet causam danos irreversíveis às telas modernas.'],
        checklist: [
          'Nunca use limpa-vidros doméstico: amônia e vinagre removem o antirreflexo.',
          'Nunca use acetona, removedor de esmalte ou thinner: solventes dissolvem na hora revestimentos plásticos e molduras.',
          'Nunca borrife líquido direto na tela: as gotas descem até a borda inferior, onde ficam os cabos flexíveis da tela.',
          'Nunca use papel-toalha ou guardanapo: as fibras de celulose causam riscos microscópicos permanentes.',
          'Nunca aperte com os dedos: a pressão deixa manchas brancas permanentes no painel LCD.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Posso usar álcool isopropílico 70% na tela do MacBook?',
        answer:
          'A Apple permite lenços com álcool isopropílico 70% no exterior e nas superfícies de vidro de alguns MacBooks, mas recomenda passar de leve. Para a manutenção do dia a dia, água destilada numa microfibra é muito mais segura e não arrisca dissolver o antirreflexo.',
      },
      {
        question: 'Por que água destilada e não da torneira?',
        answer:
          'A água da torneira tem minerais dissolvidos, como cálcio, magnésio e cloro. Ao evaporar, deixa marcas calcárias que podem riscar os filmes ópticos ao passar o pano.',
      },
    ],
  },
  'oled-burn-in-prevention': {
    slug: 'prevenir-burn-in-oled',
    navLabel: 'Burn-in OLED',
    title: 'Como prevenir o burn-in OLED: testar, prevenir e proteger telas OLED',
    metaTitle: 'Guia para prevenir e testar o burn-in OLED',
    metaDescription:
      'Entenda a diferença entre burn-in OLED e retenção temporária. Teste seu monitor ou TV OLED com telas coloridas e siga dicas práticas para prolongar a vida útil.',
    readingTime: '7 min de leitura',
    category: 'Manutenção de tela',
    intro:
      'Monitores OLED e QD-OLED oferecem contraste incomparável, pretos profundos e resposta quase instantânea. Mas como cada subpixel é um diodo orgânico que se desgasta aos poucos com a luz emitida, elementos fixos (barra de tarefas do Windows, barra de endereço, HUD de jogos) podem causar desgaste desigual com o tempo. Entender como o burn-in surge, como testar e como configurar o sistema protege seu investimento por anos.',
    warning:
      'AVISO HONESTO: cuidado com ferramentas enganosas. Nenhum programa, cores piscando ou vídeo reverte o burn-in OLED permanente. Quando os subpixels orgânicos perdem brilho, o dano é definitivo. Nossas ferramentas ajudam a diagnosticar e prevenir antes que fique irreversível.',
    toolLabel: 'Abrir o teste de burn-in OLED',
    toolDescription: 'Alterne campos vermelho, magenta, ciano e cinza escuro para ver contornos fracos de elementos fixos.',
    sections: [
      {
        title: 'Retenção temporária x burn-in permanente',
        content: [
          'É essencial entender a diferença entre retenção temporária de imagem e burn-in permanente.',
          'A retenção temporária é um fenômeno elétrico: sobra carga residual na camada de transistores depois de exibir uma imagem de alto contraste por 15–30 minutos. Um fantasma fraco da janela fica visível por alguns minutos e depois some sozinho ou durante um ciclo automático de atualização de pixels.',
          'O burn-in permanente é um desgaste acumulado e desigual dos subpixels. Se os subpixels vermelhos ou azuis na área da barra de tarefas brilharam no máximo por milhares de horas, eles emitem menos luz que os vizinhos e deixam uma silhueta escura permanente visível em telas de cor lisa.',
        ],
        tips: [
          'A retenção temporária some em minutos ou após uma atualização curta de pixels de 5 minutos.',
          'O burn-in permanente aparece em telas vermelha, magenta e cinza 5% e nunca some.',
        ],
      },
      {
        title: 'Como testar sua tela OLED para burn-in',
        content: ['Siga estes passos com nossas telas coloridas em tela cheia para notar os primeiros sinais de desgaste.'],
        steps: [
          'Abra o WhiteScreen.vip em tela cheia para tirar cabeçalhos do navegador e barras de tarefas.',
          'Escolha o vermelho liso: subpixels vermelhos se desgastam antes dos verdes. Observe com atenção a área da barra de tarefas, da barra de endereço e os cantos do HUD em busca de fantasmas escuros.',
          'Escolha magenta e ciano lisos: cores compostas mostram desgastes diferentes entre os canais.',
          'Escolha cinza escuro 5% e cinza 10%: cinzas quase pretos revelam faixas verticais e desgaste desigual que não aparecem no branco puro.',
          'Olhe na distância normal: se vir contornos nítidos de ícones ou barras de ferramentas, o painel tem burn-in permanente.',
        ],
      },
      {
        title: 'Regras essenciais para prevenir o burn-in OLED',
        content: [
          'Monitores OLED modernos têm proteções automáticas, mas hábitos simples no sistema são a melhor defesa contra o desgaste precoce.',
        ],
        checklist: [
          'Ative "Ocultar automaticamente a barra de tarefas" no Windows (ou ocultar o Dock no macOS).',
          'Use o modo escuro no Windows, macOS e navegador: pixels pretos no OLED não gastam energia nem se desgastam.',
          'Defina a suspensão da tela para 3–5 minutos de inatividade para a área de trabalho não ficar acesa quando você sai.',
          'Use um protetor de tela em tela cheia, como nosso relógio flip ou a tela preta, ao sair da mesa.',
          'Não tire o monitor OLED da tomada logo depois de desligar: em espera ele faz um ciclo automático de limpeza de pixels.',
          'Ative as proteções do menu do monitor: deslocamento de pixels, limitador de brilho de logotipos e controle térmico.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Exercitadores de pixels que piscam corrigem burn-in OLED?',
        answer:
          'Não. Telas piscando não recuperam o material orgânico desgastado. Na verdade, usar padrões agressivos no brilho máximo adiciona estresse térmico desnecessário ao painel.',
      },
      {
        question: 'Com que frequência devo usar a atualização profunda de pixels?',
        answer:
          'Só quando o fabricante pedir (normalmente a cada 500 a 1.500 horas de uso) ou se uma retenção forte não sumir. Usar demais acelera o desgaste do painel.',
      },
    ],
  },
  'monitor-test': {
    slug: 'teste-de-monitor',
    navLabel: 'Teste de monitor',
    title: 'Guia completo de teste de monitor: defeitos, cores e velocidade',
    metaTitle: 'Guia para testar um monitor novo passo a passo',
    metaDescription:
      'Guia completo para testar um monitor novo ou usado: dead pixels, nitidez, gama, contraste, vazamento de luz e tempo de resposta.',
    readingTime: '6 min de leitura',
    category: 'Diagnóstico de tela',
    intro:
      'Abrir a caixa de um monitor novo é empolgante, mas defeitos de fábrica como subpixels mortos, vazamento de luz excessivo, cores desiguais e gama incorreta escapam com frequência do controle de qualidade. Como a maioria das lojas oferece de 14 a 30 dias para devolução, fazer um teste completo de 15 minutos assim que ele chega é a melhor forma de garantir um painel perfeito.',
    toolLabel: 'Abrir o teste de monitor completo',
    toolDescription: 'Padrões completos: degradês, cartas de gama, grades de nitidez e barras de cor.',
    sections: [
      {
        title: 'Checklist de 6 passos para um monitor novo',
        content: ['Antes de jogar a caixa fora ou registrar a garantia, faça esta avaliação do painel em 6 etapas.'],
        steps: [
          '1. Inspeção física e de cabos: confira se o cabo DisplayPort ou HDMI suporta a resolução nativa, a taxa de atualização (ex.: 144–240 Hz) e a cor de 10 bits do monitor.',
          '2. Dead pixels: abra telas branca, preta, vermelha, verde e azul em tela cheia e examine cada quadrante em busca de subpixels presos ou mortos.',
          '3. Uniformidade e vazamento de luz: num ambiente com pouca luz, veja uma tela preta para vazamentos nas bordas e uma cinza 50% para o efeito de tela suja.',
          '4. Gama e contraste: veja nossa rampa de cinzas para conferir se os degraus quase pretos (1–5%) e quase brancos (95–99%) aparecem sem ficar esmagados ou cortados.',
          '5. Nitidez e escala: examine linhas alternadas de 1 pixel brancas e pretas para garantir texto nítido, sem franjas coloridas nem moiré.',
          '6. Nitidez em movimento e ghosting: use padrões de movimento para checar o tempo de resposta e ajuste o Overdrive do monitor para evitar ghosting inverso.',
        ],
      },
      {
        title: 'O que é normal para cada tipo de painel',
        content: [
          'Conhecer a tecnologia do painel evita devolver um monitor por características que são escolhas normais de projeto.',
          'Painéis IPS: ótimos em precisão de cor e ângulos de visão amplos (178°). Contrapartida normal: contraste menor (1.000:1) e um IPS glow leve visto de lado.',
          'Painéis VA: contraste alto (3.000:1 a 5.000:1) e pretos profundos. Contrapartida normal: rastros escuros em cenas rápidas e ângulos de visão mais estreitos.',
          'Painéis OLED / QD-OLED: contraste infinito, pretos reais e resposta de 0,03 ms. Contrapartida normal: possível retenção de imagem e menor brilho sustentado em tela cheia.',
          'Painéis TN: telas antigas de esports com taxas altas. Contrapartida normal: cores lavadas e forte mudança de cor vertical ao olhar um pouco de cima ou de baixo.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Devo testar o monitor com HDR ligado ou desligado?',
        answer:
          'Faça os testes básicos de cor e uniformidade com o HDR do Windows desligado, porque ele pode causar erros de mapeamento de tons em telas sem escurecimento local. Depois de confirmar o SDR, ligue o HDR para checar o brilho máximo e as zonas de escurecimento local.',
      },
      {
        question: 'O que é Overdrive e como devo ajustar?',
        answer:
          'O Overdrive aplica mais tensão aos subpixels para acelerar as transições e reduzir o borrão de movimento. Alto demais, ele causa "ghosting inverso" (halos claros atrás de objetos em movimento). O ajuste "Normal" ou "Rápido" costuma ser o melhor; "Extremo" quase sempre exagera.',
      },
    ],
  },
  'white-screen-for-video-calls-and-zoom': {
    slug: 'tela-branca-para-videochamadas',
    navLabel: 'Luz para Zoom',
    title: 'Como usar uma tela branca como luz suave em videochamadas e no Zoom',
    metaTitle: 'Tela branca como luz suave para videochamadas',
    metaDescription:
      'Transforme seu monitor ou notebook numa luz clara e favorável, alternativa ao ring light, para Zoom, Google Meet e videoconferências sem comprar nada.',
    readingTime: '5 min de leitura',
    category: 'Iluminação e visual',
    intro:
      'Um bom vídeo de webcam depende muito mais da iluminação do que de uma câmera 4K cara. Com pouca luz, o sensor aumenta o ganho digital (ISO) e aparecem ruído e granulação. Abrindo o WhiteScreen.vip num segundo monitor ou ao lado da janela da chamada, você transforma a tela numa grande caixa de luz difusa na hora.',
    toolLabel: 'Abrir a luz para videochamadas',
    toolDescription: 'Luz branca suave ajustável do quente ao frio, feita para iluminar a webcam.',
    sections: [
      {
        title: 'Por que uma tela grande ilumina melhor que um ring light pequeno',
        content: [
          'Na fotografia, quanto maior a fonte de luz em relação ao rosto, mais suaves e favoráveis são as sombras. Um ring light de 25 cm cria reflexos duros nos óculos e sombras marcadas no rosto.',
          'Um monitor de 24 ou 27 polegadas com tela branca vira um grande emissor de luz que preenche a área dos olhos, suaviza a pele e cria reflexos naturais no olhar.',
        ],
      },
      {
        title: 'Como posicionar sua tela branca como luz',
        content: ['Consiga uma iluminação facial mais bonita com estes ajustes.'],
        steps: [
          'Com dois monitores: coloque a tela branca no monitor logo atrás ou ao lado da webcam.',
          'Com um monitor: divida a tela ao meio. Deixe o Zoom ou o Teams numa metade e o WhiteScreen.vip na outra.',
          'Ajuste a temperatura de cor: use branco quente (cerca de 5000–5500 K) para tons de pele favoráveis, ou branco luz do dia (6500 K) se o ambiente tiver luz solar.',
          'Ajuste o brilho: entre 70% e 90% para não forçar a vista.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Deixar uma tela branca aberta em reuniões longas danifica o monitor?',
        answer:
          'Em painéis LCD/LED, a tela branca não causa nenhum dano e quase nenhum desgaste. Em OLED, mantenha o brilho moderado (50–70%) para reduzir o calor acumulado.',
      },
    ],
  },
  'fullscreen-white-screen-for-drawing-and-tracing': {
    slug: 'tela-branca-para-decalcar-e-desenhar',
    navLabel: 'Desenho e decalque',
    title: 'Como usar o tablet ou monitor como mesa de luz digital para decalcar e desenhar',
    metaTitle: 'Use o tablet ou monitor como mesa de luz para decalque',
    metaDescription:
      'Aprenda a transformar seu iPad, tablet Android ou notebook numa mesa de luz digital clara para decalcar esboços, caligrafia e negativos.',
    readingTime: '5 min de leitura',
    category: 'Iluminação e visual',
    intro:
      'Mesas de luz e caixas de decalque tradicionais podem custar mais de R$ 300 e ocupar espaço na mesa. Se você já tem um iPad, tablet Android ou notebook, pode transformá-lo numa mesa de luz digital muito clara e sem cintilação com um clique.',
    toolLabel: 'Abrir a tela branca como mesa de luz',
    toolDescription: 'Luz branca em tela cheia ideal para decalque em papel, estênceis e ver negativos.',
    sections: [
      {
        title: 'Como preparar o decalque passo a passo',
        content: ['Siga estas dicas para decalcar sem provocar toques indesejados na tela sensível ao toque.'],
        steps: [
          'Abra o WhiteScreen.vip em tela cheia e aumente o brilho do aparelho para 100%.',
          'Bloqueie o toque: no iPad, ative o Acesso Guiado (Ajustes > Acessibilidade > Acesso Guiado) para desligar o toque enquanto desenha.',
          'No Android: use a fixação de tela ou um app de bloqueio para evitar toques acidentais.',
          'Coloque o desenho de referência sobre a tela e, por cima, uma folha de papel vegetal ou papel leve (até 90 g/m²).',
          'Use um lápis macio (2B a 4B) ou caneta fina com pouca pressão para seguir os contornos com facilidade.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Desenhar com lápis sobre a tela pode danificar o vidro?',
        answer:
          'O vidro de tablets (como o Gorilla Glass) é muito mais duro que o grafite e não risca com o uso normal. Mesmo assim, evite pressão forte e confira se não há areia ou sujeira sob o papel.',
      },
    ],
  },
  'best-monitor-settings-for-eye-strain': {
    slug: 'configuracoes-do-monitor-para-cansaco-visual',
    navLabel: 'Ajustes contra cansaço visual',
    title: 'Melhores configurações do monitor contra cansaço visual, dor de cabeça e leitura noturna',
    metaTitle: 'Melhores configurações do monitor contra cansaço visual',
    metaDescription:
      'Ajuste brilho, contraste, temperatura de cor e iluminação do ambiente para acabar com o cansaço visual digital e a síndrome da visão do computador.',
    readingTime: '6 min de leitura',
    category: 'Manutenção de tela',
    intro:
      'Olhar para um monitor mal configurado e forte demais por 8 a 10 horas por dia causa a síndrome da visão do computador: olhos secos, visão embaçada, dor de cabeça tensional e rigidez no pescoço. Ajustar o brilho da tela à luz do ambiente é a melhoria ergonômica mais eficaz que você pode fazer.',
    toolLabel: 'Abrir a tela branca',
    toolDescription: 'Compare o brilho da tela com um papel sob a luz ambiente para encontrar um brilho confortável.',
    sections: [
      {
        title: 'Ajustes básicos do monitor para conforto visual',
        content: ['Aplique estas práticas de ergonomia visual baseadas em pesquisas para reduzir o cansaço na hora.'],
        steps: [
          'Iguale com papel branco: coloque uma folha branca ao lado do monitor e ajuste o brilho até uma janela branca em tela cheia ficar tão clara quanto o papel.',
          'Temperatura de cor: reduza de um azul frio de 7500 K para um tom quente de 5000–6500 K.',
          'Evite cintilação PWM: confira se o monitor é "Flicker-Free" (escurecimento por corrente contínua, não por modulação de baixa frequência).',
          'Siga a regra 20-20-20: a cada 20 minutos, olhe para algo a 6 metros por pelo menos 20 segundos para relaxar os músculos dos olhos.',
        ],
      },
    ],
    faqs: [
      {
        question: 'O modo escuro previne cansaço visual melhor que o claro?',
        answer:
          'O modo escuro reduz a luz total em ambientes escuros, o que ajuda contra o ofuscamento. Mas para ler textos longos em ambientes bem iluminados, texto preto sobre um fundo branco suave dá mais contraste e uma leitura mais rápida.',
      },
    ],
  },
  'common-monitor-display-problems-diagnostics': {
    slug: 'problemas-comuns-de-monitor',
    navLabel: 'Diagnóstico de tela',
    title: 'Problemas comuns de monitor: como diagnosticar e resolver falhas de tela',
    metaTitle: 'Problemas comuns de monitor e como diagnosticar',
    metaDescription:
      'Guia para diagnosticar problemas comuns de monitor: cintilação, faixas de cor, ghosting, pixels presos e texto borrado, com passos rápidos de solução.',
    readingTime: '6 min de leitura',
    category: 'Diagnóstico de tela',
    intro:
      'De uma microcintilação misteriosa a texto borrado ou uma dominante de cor repentina, as falhas de tela podem vir de bugs de driver, cabos ruins, taxas de atualização erradas ou defeitos do painel. Este guia ajuda a isolar, passo a passo, a origem de qualquer anomalia.',
    toolLabel: 'Abrir o teste de monitor',
    toolDescription: 'Use padrões de diagnóstico para separar defeitos de hardware de problemas de cabo ou driver.',
    sections: [
      {
        title: 'Procedimento para diagnosticar falhas de tela',
        content: ['Siga esta sequência sempre que a tela mostrar anomalias visuais.'],
        steps: [
          'Confira o cabo: cabos HDMI ou DisplayPort soltos ou sem certificação causam apagões intermitentes, faíscas verdes e cintilação.',
          'Verifique a resolução nativa e a taxa de atualização: usar uma tela 4K em 1080p sem escala inteira deixa o texto borrado.',
          'Teste com outro aparelho: ligue um notebook ou console na mesma entrada para saber se a falha vem da placa de vídeo do PC ou do painel do monitor.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Por que meu monitor fica preto por 2 segundos às vezes?',
        answer:
          'Apagões rápidos de 1–2 segundos quase sempre vêm da renegociação de banda da compressão DSC, de interferência eletromagnética (como uma geladeira ou ventilador ligando perto) ou de um cabo HDMI/DP ruim falhando em taxas altas.',
      },
    ],
  },
}
