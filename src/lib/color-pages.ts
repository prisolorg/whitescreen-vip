import type { LanguageCode } from './locale-routing'

export type ColorUse = { title: string; description: string }

export type ColorPageContent = {
  intro: string
  description: string
  uses: ColorUse[]
}

export const colorPagesEn: Record<string, ColorPageContent> = {
  white: {
    intro:
      'Turn your display into a clean, bright white screen in one click. Use it as a light source, to test for dead pixels, or to clean your monitor — or switch to any other color.',
    description:
      'A clean fullscreen white screen for lighting, cleaning your monitor, tracing and spotting dead pixels.',
    uses: [
      { title: 'Video calls and lighting', description: 'Use a bright white screen as a soft fill light for webcam calls, selfies, or product photos.' },
      { title: 'Dead pixel testing', description: 'Dark, dead pixels stand out clearly as black dots on a solid white background.' },
      { title: 'Cleaning your display', description: 'A white screen shows streaks and smudges after wiping, so you know when you are done.' },
      { title: 'Tracing and drawing', description: 'Turn a tablet into a makeshift lightbox for tracing sketches or reading film negatives.' },
    ],
  },
  black: {
    intro:
      'Turn your display into a pure, fullscreen black screen. Great for spotting bright stuck pixels, checking backlight bleed, or dimming a screen without turning it off.',
    description:
      'Free fullscreen black screen tool. Check for stuck pixels and backlight bleed, test OLED contrast, or keep a display dark without sleeping. No sign-up.',
    uses: [
      { title: 'Backlight bleed & IPS glow', description: 'In a dark room, a black screen shows any light leaking around the edges of an LCD panel.' },
      { title: 'Stuck pixel detection', description: 'Stuck pixels that stay lit show up clearly as bright dots on a solid black background.' },
      { title: 'OLED contrast check', description: 'OLED pixels switch fully off on true black, so you can check for uniformity and true black levels.' },
      { title: 'Dim without sleeping', description: 'Keep a computer awake during a download or presentation while the screen stays dark.' },
    ],
  },
  red: {
    intro:
      'Fill your display with a solid, fullscreen red screen. Useful for testing red subpixels, as a soft night light, or as a simple color backdrop.',
    description:
      'Free fullscreen red screen tool. Test red subpixels and dead pixels, use a soft red light at night, or create a red backdrop. Works on any device.',
    uses: [
      { title: 'Red subpixel test', description: 'Dead or stuck pixels in the red channel show up as dark or off-colored dots.' },
      { title: 'Night vision–friendly light', description: 'Red light has less impact on dark-adapted eyes, which is handy for stargazing or reading at night.' },
      { title: 'Mood & ambient lighting', description: 'Use a phone or tablet as a quick red ambient light for photos or video calls.' },
      { title: 'Color calibration check', description: 'Compare how pure red looks across different screens and settings.' },
    ],
  },
  green: {
    intro:
      'Show a bright, fullscreen green screen. Use it for chroma key backdrops, testing green subpixels, or checking how evenly your display lights up.',
    description:
      'Free fullscreen green screen tool. Use as a chroma key background, test green subpixels and dead pixels, or check screen uniformity. No download needed.',
    uses: [
      { title: 'Chroma key background', description: 'Use a monitor or tablet as a small green screen for keying out objects in video.' },
      { title: 'Green subpixel test', description: 'Spot dead or stuck pixels in the green channel against a solid green fill.' },
      { title: 'Uniformity check', description: 'Green is where the eye is most sensitive, making uneven brightness easier to see.' },
      { title: 'Signal & status indicator', description: 'Show a clear "go" or "available" signal on an idle screen.' },
    ],
  },
  blue: {
    intro:
      'Display a solid, fullscreen blue screen. Handy for testing blue subpixels, creating a cool-toned backdrop, or checking how your display handles saturated color.',
    description:
      'Free fullscreen blue screen tool. Test blue subpixels and dead pixels, check color accuracy, or use a blue backdrop or ambient light on any device.',
    uses: [
      { title: 'Blue subpixel test', description: 'Spot dead or stuck pixels in the blue channel against a solid blue fill.' },
      { title: 'Chroma key alternative', description: 'Blue works as a keying background color when your subject contains green clothing.' },
      { title: 'Cool ambient light', description: 'Add a calm blue glow to a desk setup, video background, or dark room.' },
      { title: 'Color calibration check', description: 'Compare how deep blue renders across different panels and color profiles.' },
    ],
  },
  yellow: {
    intro:
      'Fill your screen with a bright, fullscreen yellow. Useful for testing red and green subpixels at once, as a warm light source, or as a cheerful backdrop.',
    description:
      'Free fullscreen yellow screen tool. Test red and green subpixels together, use a warm light source, or create a yellow backdrop. Works on any device.',
    uses: [
      { title: 'Combined subpixel test', description: 'Yellow lights red and green subpixels together, so a failure in either channel stands out.' },
      { title: 'Warm fill light', description: 'Use a tablet or secondary monitor as a warm, cozy light for video calls.' },
      { title: 'Caution & status screen', description: 'Show a clear "standby" or "caution" status on a spare screen.' },
      { title: 'Creative backdrop', description: 'Use a monitor as a vibrant yellow background for product photography.' },
    ],
  },
  orange: {
    intro:
      'Fill your screen with a warm, fullscreen orange. Perfect as cozy ambient light, a sunset-toned photo backdrop, or a quick check of how your display mixes red and green.',
    description: 'A warm fullscreen orange screen for cozy ambient light, sunset-toned photos and color comparisons.',
    uses: [
      { title: 'Cozy ambient light', description: 'A warm orange glow is relaxing in the evening and easy on the eyes.' },
      { title: 'Sunset photo tones', description: 'Cast a golden-hour style light on a subject for webcam calls or photography.' },
      { title: 'Color mixing check', description: 'Orange requires full red and half green, showing any color balance imbalance.' },
      { title: 'Themed lighting', description: 'Use a spare screen as a seasonal accent light or warm backdrop.' },
    ],
  },
  pink: {
    intro:
      'Show a soft, fullscreen pink screen. Many people use it as a flattering selfie light, a pastel backdrop for content, or gentle mood lighting in a dark room.',
    description: 'A soft fullscreen pink screen for flattering selfie light, mood lighting and pastel backdrops.',
    uses: [
      { title: 'Flattering selfie light', description: 'Pink light warms skin tones and softens harsh shadows on webcams.' },
      { title: 'Pastel backdrop', description: 'A large monitor makes a quick pastel backdrop for product or craft photos.' },
      { title: 'Mood lighting', description: 'Add a soft, gentle glow to a bedroom, party, or stream setup.' },
      { title: 'Tint comparison', description: 'Compare how warm pinks render across phones, tablets, and monitors.' },
    ],
  },
  purple: {
    intro:
      'Fill your display with a rich, fullscreen purple. Use it as ambient room light, a streaming or gaming backdrop, or to compare how screens handle deep saturated color.',
    description: 'A rich fullscreen purple screen for ambient room light, streaming backdrops and color checks.',
    uses: [
      { title: 'Streaming backdrop', description: 'Give a stream, video, or call a recognizable neon-purple accent.' },
      { title: 'Ambient room light', description: 'A deep purple glow sets a calm, focused mood for gaming or music.' },
      { title: 'Saturation check', description: 'Deep purple reveals whether a panel crushes or over-saturates blues and reds.' },
      { title: 'Party & mood lighting', description: 'Use a phone or tablet as an instant purple accent light.' },
    ],
  },
  cyan: {
    intro:
      'Display a bright, fullscreen cyan screen. Cyan lights the green and blue subpixels together, which makes it handy for channel checks and cool, clean ambient light.',
    description: 'A fullscreen cyan screen that lights green and blue subpixels together to reveal channel defects.',
    uses: [
      { title: 'Green + blue subpixel test', description: 'A failed green or blue subpixel stands out clearly against cyan.' },
      { title: 'Cool ambient light', description: 'An aqua glow gives a fresh, modern aesthetic to a desk setup.' },
      { title: 'Red channel isolation', description: 'Cyan has no red at all, so any red glow indicates a stuck red subpixel.' },
      { title: 'Calibration comparison', description: 'Check whether cyan leans overly greenish or bluish on different screens.' },
    ],
  },
  magenta: {
    intro:
      'Show a vivid, fullscreen magenta screen. Magenta lights red and blue subpixels with no green, making it great for spotting stuck green pixels and color tints.',
    description: 'A fullscreen magenta screen that lights red and blue subpixels together, ideal for spotting tints.',
    uses: [
      { title: 'Red + blue subpixel test', description: 'A failed red or blue subpixel turns into a colored dot on magenta.' },
      { title: 'Stuck green detection', description: 'Magenta contains no green, so a stuck green subpixel appears as a white dot.' },
      { title: 'Neon-style lighting', description: 'Add a bold neon magenta glow to photos, videos, or workspace backgrounds.' },
      { title: 'Tint check', description: 'Compare how pinkish or purplish magenta looks across different displays.' },
    ],
  },
  gray: {
    intro:
      'Show a neutral, fullscreen gray screen. Ideal for checking panel uniformity, clouding, banding, and dirty-screen effect on TVs and monitors.',
    description: 'A neutral fullscreen gray screen for spotting clouding, banding and dirty screen effect on panels.',
    uses: [
      { title: 'Dirty screen effect (DSE)', description: 'Mid-gray reveals blotchy patches and vertical bands across the panel.' },
      { title: 'Uniformity & clouding', description: 'Uneven backlighting and vignetting are easiest to see on a neutral gray.' },
      { title: 'Color tint check', description: 'True gray should look neutral; any pink or green tint indicates calibration drift.' },
      { title: 'Screen cleaning', description: 'Mid-gray shows both dark smudges and light dust while wiping your display.' },
    ],
  },
}

export const COLOR_TRANSLATED_INTROS: Record<LanguageCode, Record<string, { intro: string; description: string; uses: ColorUse[] }>> = {
  en: colorPagesEn,
  es: {
    white: {
      intro: 'Convierte tu pantalla en una superficie blanca, limpia y brillante con un solo clic. Ideal como fuente de luz, para detectar píxeles muertos o limpiar tu monitor.',
      description: 'Herramienta de pantalla blanca completa gratuita para iluminación, limpieza y prueba de píxeles.',
      uses: [
        { title: 'Videollamadas e iluminación', description: 'Úsala como luz de relleno suave para mejorar tu webcam en llamadas o selfies.' },
        { title: 'Prueba de píxeles muertos', description: 'Los píxeles muertos destacan de inmediato como puntos negros sobre fondo blanco.' },
        { title: 'Limpieza de tu pantalla', description: 'Revela manchas y marcas de huellas para limpiar tu monitor a fondo.' },
        { title: 'Calco y dibujo', description: 'Convierte tu tablet o pantalla en una caja de luz para calcar bocetos.' },
      ],
    },
    black: {
      intro: 'Convierte tu pantalla en un fondo negro puro a pantalla completa. Ideal para detectar píxeles atascados, revisar fugas de luz o descansar la vista.',
      description: 'Pantalla negra pura para encontrar píxeles atascados y fugas de luz.',
      uses: [
        { title: 'Fugas de luz y brillo IPS', description: 'En una habitación oscura, revela fugas de retroiluminación en los bordes del panel.' },
        { title: 'Detección de píxeles atascados', description: 'Los píxeles encendidos incorrectamente brillan sobre el fondo negro.' },
        { title: 'Contraste y negros OLED', description: 'En paneles OLED los píxeles se apagan por completo, ideal para contrastes reales.' },
        { title: 'Atenuación sin suspensión', description: 'Mantén el equipo activo sin que la luz de la pantalla moleste.' },
      ],
    },
    red: {
      intro: 'Llena tu pantalla con un color rojo sólido y uniforme. Útil para verificar subpíxeles rojos, como luz nocturna suave o fondo decorativo.',
      description: 'Pantalla roja completa para pruebas de subpíxeles y luz nocturna.',
      uses: [
        { title: 'Prueba de subpíxel rojo', description: 'Los subpíxeles rojos dañados aparecen como puntos apagados o de color erróneo.' },
        { title: 'Luz para visión nocturna', description: 'La luz roja preserva la adaptación de los ojos a la oscuridad.' },
        { title: 'Ambiente y fotografía', description: 'Crea una atmósfera cálida o un fondo de iluminación para fotos y vídeos.' },
        { title: 'Verificación de calibración', description: 'Compara la pureza del canal rojo en distintos monitores y ajustes.' },
      ],
    },
    green: {
      intro: 'Muestra una pantalla verde brillante a pantalla completa. Perfecta para fondos de chroma key, probar subpíxeles verdes y revisar la uniformidad.',
      description: 'Pantalla verde completa para fondos chroma key y pruebas de pantalla.',
      uses: [
        { title: 'Fondo Chroma Key', description: 'Usa tu monitor o tableta como croma verde para grabaciones de vídeo.' },
        { title: 'Prueba de subpíxel verde', description: 'Localiza fallos en el canal verde sobre un fondo uniforme y saturado.' },
        { title: 'Comprobación de uniformidad', description: 'El ojo humano es muy sensible al verde, facilitando ver diferencias de brillo.' },
        { title: 'Señalización y estado', description: 'Muestra una clara señal de disponible o activo en una pantalla secundaria.' },
      ],
    },
    blue: {
      intro: 'Despliega una pantalla azul intensa y sólida. Práctica para revisar subpíxeles azules, crear fondos fríos o comprobar la saturación de color.',
      description: 'Pantalla azul completa para pruebas de subpíxeles y luz ambiental fría.',
      uses: [
        { title: 'Prueba de subpíxel azul', description: 'Detecta píxeles dañados en el canal azul con total facilidad.' },
        { title: 'Fondo croma alternativo', description: 'Ideal para incrustaciones de vídeo cuando el sujeto viste ropa verde.' },
        { title: 'Luz ambiental relajante', description: 'Aporta una iluminación azul moderna y serena a tu espacio de trabajo.' },
        { title: 'Comprobación de calibración', description: 'Evalúa la profundidad de azules y transiciones tonales en tu monitor.' },
      ],
    },
    yellow: {
      intro: 'Llena tu pantalla con un amarillo luminoso. Excelente para probar subpíxeles rojos y verdes a la vez o como luz cálida de relleno.',
      description: 'Pantalla amarilla completa para pruebas de pantalla e iluminación cálida.',
      uses: [
        { title: 'Prueba combinada de subpíxeles', description: 'Enciende subpíxeles rojos y verdes al unísono, evidenciando cualquier fallo.' },
        { title: 'Fuente de luz cálida', description: 'Úsala como luz agradable y suave para videollamadas o lectura.' },
        { title: 'Señal de precaución', description: 'Muestra un estado de aviso o pausa en monitores auxiliares.' },
        { title: 'Fondo creativo', description: 'Fondo llamativo y alegre para fotografía de pequeños productos.' },
      ],
    },
    orange: {
      intro: 'Llena tu pantalla con un tono naranja cálido. Ideal como luz de ambiente acogedora, fotos estilo atardecer o pruebas de mezcla de color.',
      description: 'Pantalla naranja completa para luz cálida y fotos de atardecer.',
      uses: [
        { title: 'Luz ambiente acogedora', description: 'Un resplandor relajante por la noche que no cansa la vista.' },
        { title: 'Tonos dorados de atardecer', description: 'Proyecta luz estilo hora dorada sobre personas u objetos.' },
        { title: 'Control de mezcla de color', description: 'Verifica el balance equilibrado entre rojo y verde en tu pantalla.' },
        { title: 'Iluminación temática', description: 'Crea un ambiente estacional cálido en cualquier habitación.' },
      ],
    },
    pink: {
      intro: 'Disfruta de una pantalla rosa suave a pantalla completa. Muy utilizada como luz favorecedora para selfies, llamadas o fondos en tonos pastel.',
      description: 'Pantalla rosa completa para iluminación de selfies y fondos pastel.',
      uses: [
        { title: 'Luz favorecedora para selfies', description: 'Suaviza sombras y aporta un tono cálido a la piel ante la cámara.' },
        { title: 'Fondo en tonos pastel', description: 'Fondo rápido y estético para fotografía creativa y de productos.' },
        { title: 'Luz de ambiente', description: 'Aporta un toque dulce y relajado a dormitorios o transmisiones en vivo.' },
        { title: 'Comparativa de tintes', description: 'Compara cómo reproducen los rosas diferentes pantallas y dispositivos.' },
      ],
    },
    purple: {
      intro: 'Llena tu pantalla de un color púrpura profundo y vibrante. Úsala como luz ambiental gaming, fondo de streaming o para probar colores saturados.',
      description: 'Pantalla púrpura completa para luz ambiental y fondos de streaming.',
      uses: [
        { title: 'Fondo para streaming', description: 'Aporta un toque moderno y gamer a la iluminación de tu habitación.' },
        { title: 'Luz de concentración', description: 'El resplandor violeta crea un ambiente calmado para jugar o escuchar música.' },
        { title: 'Prueba de saturación', description: 'Comprueba si tu pantalla mantiene el detalle en tonos oscuros saturados.' },
        { title: 'Luz decorativa', description: 'Convierte un móvil o tablet en un foco de color decorativo instantáneo.' },
      ],
    },
    cyan: {
      intro: 'Muestra una pantalla cian luminosa. Activa los subpíxeles verdes y azules juntos, siendo perfecta para pruebas de canales y luz fría moderna.',
      description: 'Pantalla cian completa para pruebas de subpíxeles y luz limpia.',
      uses: [
        { title: 'Prueba de subpíxeles verde + azul', description: 'Cualquier fallo en verde o azul salta a la vista sobre el cian.' },
        { title: 'Luz fresca y moderna', description: 'Aporta un ambiente acuático y limpio a tu mesa de trabajo.' },
        { title: 'Aislamiento del canal rojo', description: 'El cian carece de rojo; cualquier resplandor rojizo indica un píxel dañado.' },
        { title: 'Comparación de calibración', description: 'Verifica si el tono vira excesivamente a verde o azul en tu pantalla.' },
      ],
    },
    magenta: {
      intro: 'Despliega una pantalla magenta viva a pantalla completa. Al encender subpíxeles rojos y azules sin verde, expone píxeles atascados con rapidez.',
      description: 'Pantalla magenta completa para detección de píxeles y luz neón.',
      uses: [
        { title: 'Prueba rojo + azul', description: 'Un subpíxel rojo o azul inactivo se manifiesta enseguida sobre magenta.' },
        { title: 'Detección de verde atascado', description: 'Como no contiene verde, un píxel verde atascado brillará en blanco.' },
        { title: 'Luz estilo neón', description: 'Crea efectos visuales llamativos para fotos, vídeos y fondos.' },
        { title: 'Comprobación de tintes', description: 'Examina si el color se muestra equilibrado entre fucsia y violeta.' },
      ],
    },
    gray: {
      intro: 'Muestra una pantalla gris neutra a pantalla completa. Ideal para comprobar uniformidad, banding, manchas y el efecto de pantalla sucia.',
      description: 'Pantalla gris completa para comprobar uniformidad y banding.',
      uses: [
        { title: 'Efecto pantalla sucia (DSE)', description: 'El gris medio expone franjas verticales y zonas con brillo irregular.' },
        { title: 'Uniformidad y viñeteado', description: 'Facilita la detección de esquinas oscurecidas o iluminación desigual.' },
        { title: 'Neutralidad del color', description: 'Un gris puro debe verse sin tintes rosados o verdosos en el panel.' },
        { title: 'Limpieza de pantalla', description: 'Muestra tanto polvo claro como huellas oscuras durante la limpieza.' },
      ],
    },
  },
  'pt-br': {
    white: {
      intro: 'Transforme sua tela em um fundo branco limpo e brilhante com apenas um clique. Use como fonte de luz, teste de pixels mortos ou limpeza de tela.',
      description: 'Tela branca completa gratuita para iluminação, limpeza e teste de dead pixel.',
      uses: [
        { title: 'Videochamadas e iluminação', description: 'Use como luz suave de preenchimento para melhorar a qualidade da sua webcam.' },
        { title: 'Teste de dead pixel', description: 'Pixels mortos aparecem claramente como pontos pretos no fundo branco.' },
        { title: 'Limpeza de tela', description: 'Revela marcas de dedos e poeira para facilitar uma limpeza perfeita.' },
        { title: 'Decalque e desenho', description: 'Transforme seu tablet em uma mesa de luz prática para ilustrações.' },
      ],
    },
    black: {
      intro: 'Transforme sua tela em um fundo preto puro. Excelente para identificar pixels travados, conferir vazamentos de backlight ou poupar a vista.',
      description: 'Tela preta pura para detecção de pixels travados e vazamento de luz.',
      uses: [
        { title: 'Vazamento de backlight', description: 'Em quarto escuro, revela luz escapando pelas bordas de telas LCD.' },
        { title: 'Detecção de pixels presos', description: 'Pixels que não apagam brilham com destaque sobre o fundo preto.' },
        { title: 'Contraste OLED', description: 'Telas OLED desligam os pixels no preto absoluto, exibindo contraste perfeito.' },
        { title: 'Descanso de tela', description: 'Mantenha o computador ativo sem incômodo de iluminação excessiva.' },
      ],
    },
    red: {
      intro: 'Preencha a tela com vermelho sólido. Ideal para testar subpixels vermelhos, luz noturna suave ou fundo para ensaios fotográficos.',
      description: 'Tela vermelha completa para testes de subpixels e iluminação noturna.',
      uses: [
        { title: 'Teste de subpixel vermelho', description: 'Subpixels defeituosos se destacam como pontos apagados no canal vermelho.' },
        { title: 'Luz amiga da visão noturna', description: 'A luz vermelha não agride a adaptação dos olhos no escuro.' },
        { title: 'Iluminação ambiente', description: 'Crie uma atmosfera acolhedora ou fundo temático para gravações.' },
        { title: 'Checagem de calibração', description: 'Compare a fidelidade e vivacidade do vermelho em telas diferentes.' },
      ],
    },
    green: {
      intro: 'Exiba uma tela verde vibrante. Perfeita para fundos de chroma key, checagem de subpixels verdes e avaliação de uniformidade.',
      description: 'Tela verde completa para chroma key e testes de tela.',
      uses: [
        { title: 'Fundo Chroma Key', description: 'Use o monitor ou tablet como fundo verde para recorte em vídeos.' },
        { title: 'Teste de subpixel verde', description: 'Encontre pontos defeituosos no canal verde sobre a cor homogênea.' },
        { title: 'Checagem de uniformidade', description: 'A visão humana é muito sensível ao verde, facilitando ver manchas de brilho.' },
        { title: 'Sinalização de status', description: 'Exiba um indicador claro de livre ou ativo em uma tela secundária.' },
      ],
    },
    blue: {
      intro: 'Exiba uma tela azul saturada. Prática para testes de subpixels azuis, chroma key alternativo ou iluminação ambiente fria.',
      description: 'Tela azul completa para testes de subpixels e iluminação fria.',
      uses: [
        { title: 'Teste de subpixel azul', description: 'Identifique com precisão pixels defeituosos no canal azul.' },
        { title: 'Chroma key para roupas verdes', description: 'Use azul como cor de recorte quando a pessoa estiver vestindo verde.' },
        { title: 'Luz ambiente relaxante', description: 'Adicione um brilho azul moderno ao seu setup ou quarto.' },
        { title: 'Calibração de cor', description: 'Verifique se os tons azuis são exibidos sem distorções no monitor.' },
      ],
    },
    yellow: {
      intro: 'Ilumine a tela com amarelo brilhante. Acende subpixels vermelhos e verdes ao mesmo tempo, servindo como ótima luz quente.',
      description: 'Tela amarela completa para testes e iluminação de preenchimento.',
      uses: [
        { title: 'Teste combinado de subpixels', description: 'Aciona vermelho e verde juntos, facilitando achar defeitos nos dois canais.' },
        { title: 'Luz de preenchimento suave', description: 'Excelente luz quente para melhorar sua imagem em reuniões online.' },
        { title: 'Tela de aviso', description: 'Mostre um sinal visível de espera ou atenção em uma tela de apoio.' },
        { title: 'Fundo para fotografia', description: 'Crie fotos vibrantes com fundo amarelo iluminado.' },
      ],
    },
    orange: {
      intro: 'Preencha a tela com laranja acolhedor. Ótimo como luz ambiente relaxante, fotos com tons de pôr do sol ou checagem de cores.',
      description: 'Tela laranja completa para iluminação aconchegante e fotos com tons quentes.',
      uses: [
        { title: 'Luz ambiente relaxante', description: 'Brilho confortável para uso noturno sem cansar os olhos.' },
        { title: 'Tons de pôr do sol', description: 'Ilumine objetos ou pessoas com a suave luz da golden hour.' },
        { title: 'Checagem de mistura de cores', description: 'Avalie o equilíbrio entre vermelho e verde no painel.' },
        { title: 'Iluminação sazonal', description: 'Crie uma atmosfera temática acolhedora em qualquer ambiente.' },
      ],
    },
    pink: {
      intro: 'Desfrute de uma tela rosa suave em tela cheia. Popular como luz para selfies, fundo pastel para vídeos ou iluminação delicada.',
      description: 'Tela rosa completa para iluminação de selfies e fundos delicados.',
      uses: [
        { title: 'Luz de selfie suave', description: 'Suaviza sombras e realça o tom natural da pele na câmera.' },
        { title: 'Fundo em tom pastel', description: 'Cenário rápido e bonito para fotos de pequenos produtos e artesanato.' },
        { title: 'Luz de clima aconchegante', description: 'Adicione um brilho romântico e sereno ao seu espaço.' },
        { title: 'Comparação de tonalidades', description: 'Verifique como o rosa é reproduzido em diferentes telas.' },
      ],
    },
    purple: {
      intro: 'Preencha seu display com roxo intenso. Use como luz gamer, cenário para lives ou para checar cores com alta saturação.',
      description: 'Tela roxa completa para iluminação gamer e testes de saturação.',
      uses: [
        { title: 'Cenário de transmissão', description: 'Adicione um toque moderno e estiloso ao fundo da sua live.' },
        { title: 'Luz para concentração', description: 'O tom roxo profundo cria um clima imersivo para jogos ou música.' },
        { title: 'Checagem de saturação', description: 'Veja se o monitor mantém nitidez e detalhes em cores saturadas.' },
        { title: 'Iluminação de destaque', description: 'Use celulares ou tablets como refletores coloridos para eventos.' },
      ],
    },
    cyan: {
      intro: 'Mostre uma tela ciano brilhante. Aciona subpixels verdes e azuis juntos para checar canais e criar luz ambiente limpa.',
      description: 'Tela ciano completa para checagem de canais e luz limpa.',
      uses: [
        { title: 'Teste verde + azul', description: 'Defeitos nos subpixels verde ou azul se tornam nítidos no ciano.' },
        { title: 'Luz moderna e fresca', description: 'Dá um visual aquático e limpo à sua bancada de trabalho.' },
        { title: 'Isolamento do canal vermelho', description: 'O ciano não tem vermelho; qualquer ponto avermelhado revela falha.' },
        { title: 'Checagem de calibração', description: 'Verifique se o ciano não pende excessivamente para azul ou verde.' },
      ],
    },
    magenta: {
      intro: 'Exiba magenta puro em tela cheia. Ilumina subpixels vermelhos e azuis sem verde, ideal para expor pixels verdes presos.',
      description: 'Tela magenta completa para detecção de pixels travados e luz neon.',
      uses: [
        { title: 'Teste vermelho + azul', description: 'Subpixels defeituosos nesses canais ficam imediatamente evidentes.' },
        { title: 'Detecção de verde preso', description: 'Como não há verde no magenta, um pixel verde preso brilha em branco.' },
        { title: 'Iluminação estilo neon', description: 'Destaque visual vibrante para fotos, vídeos e decoração.' },
        { title: 'Equilíbrio de tons', description: 'Avalie a consistência entre fúcsia e roxo em sua tela.' },
      ],
    },
    gray: {
      intro: 'Exiba cinza neutro em tela cheia. Ideal para checar uniformidade, banding, manchas e efeito de tela suja (DSE).',
      description: 'Tela cinza completa para checagem de uniformidade e efeito DSE.',
      uses: [
        { title: 'Efeito tela suja (DSE)', description: 'O cinza médio expõe faixas verticais e manchas de iluminação irregular.' },
        { title: 'Uniformidade e vinheta', description: 'Facilita notar cantos escurecidos ou variação de brilho no painel.' },
        { title: 'Neutralidade de cor', description: 'O cinza deve ser neutro; qualquer tom rosado ou esverdeado indica desvio.' },
        { title: 'Limpeza do monitor', description: 'Revela marcas de gordura escuras e poeira clara durante a limpeza.' },
      ],
    },
  },
  de: {
    white: {
      intro: 'Verwandeln Sie Ihren Bildschirm mit einem Klick in ein sauberes, helles Vollbild-Weiß. Nutzen Sie es als Lichtquelle, zum Testen von Pixelfehlern oder zur Bildschirmreinigung.',
      description: 'Kostenloser weißer Vollbildschirm für Beleuchtung, Monitorreinigung und Pixelfehlertests.',
      uses: [
        { title: 'Videoanrufe & Beleuchtung', description: 'Nutzen Sie helles Weiß als weiches Aufhelllicht für Webcam-Konferenzen und Selfies.' },
        { title: 'Pixelfehlertest', description: 'Dunkle, tote Pixel fallen als schwarze Punkte auf reinweißem Grund sofort auf.' },
        { title: 'Bildschirmreinigung', description: 'Ein weißer Hintergrund zeigt Streifen und Schlieren beim Abwischen des Displays.' },
        { title: 'Pause & Abpausen', description: 'Verwandeln Sie Tablets in Leuchtpulte zum Abpausen von Skizzen.' },
      ],
    },
    black: {
      intro: 'Schalten Sie Ihr Display auf reines Vollbild-Schwarz. Ideal zum Erkennen leuchtender Subpixel, zur Prüfung von Backlight-Bleeding oder zum Abdunkeln.',
      description: 'Kostenloser schwarzer Vollbildschirm für Kontrastprüfungen und Backlight-Bleed-Tests.',
      uses: [
        { title: 'Backlight-Bleed & IPS-Glow', description: 'Im abgedunkelten Raum zeigt Schwarz störendes Lichtlecken an den Monitorrändern.' },
        { title: 'Leuchtende Pixelfehler', description: 'Dauerhaft leuchtende Pixel heben sich als farbige Punkte von reinem Schwarz ab.' },
        { title: 'OLED-Kontrasttest', description: 'OLED-Pixel schalten bei Schwarz vollständig ab – ideal zur Prüfung von echtem Schwarz.' },
        { title: 'Abdunkeln ohne Ruhezustand', description: 'Halten Sie den Computer aktiv, während der Bildschirm dunkel bleibt.' },
      ],
    },
    red: {
      intro: 'Füllen Sie den Bildschirm mit reinem Rot. Nützlich zur Prüfung roter Subpixel, als augenschonendes Nachtlicht oder Farbkulisse.',
      description: 'Vollbildschirm in Rot für Subpixeltests und sanftes Nachtlicht.',
      uses: [
        { title: 'Roter Subpixeltest', description: 'Erkennen Sie defekte rote Subpixel auf einen Blick.' },
        { title: 'Augenfreundliches Nachtlicht', description: 'Rotes Licht schont die Nachtsicht und stört den Melatoninspiegel nicht.' },
        { title: 'Videokulisse', description: 'Warme rote Hintergrundbeleuchtung für Streams und Videos.' },
        { title: 'Farbabgleich', description: 'Prüfen Sie Farbreinheit und Sättigung auf Ihrem Panel.' },
      ],
    },
    green: {
      intro: 'Erzeugen Sie einen lebendigen grünen Vollbildschirm. Ideal als digitaler Greenscreen für Chroma-Keying oder zum Testen grüner Subpixel.',
      description: 'Grüner Vollbildschirm für Chroma-Keying und Bildschirmtests.',
      uses: [
        { title: 'Sofortiger Greenscreen', description: 'Nutzen Sie Monitore oder Tablets als sauberen Greenscreen für Videoeffekte.' },
        { title: 'Grüner Subpixeltest', description: 'Grüne Subpixel tragen am meisten zur wahrgenommenen Helligkeit bei.' },
        { title: 'Makrofotografie', description: 'Gleichmäßiger natürlicher Hintergrund für Nahaufnahmen.' },
        { title: 'Farbkalibrierung', description: 'Untersuchen Sie Farbstiche im grünen Kanal.' },
      ],
    },
    blue: {
      intro: 'Zeigen Sie sattes Blau auf dem gesamten Bildschirm. Ideal für blaue Subpixeltests, kühles Stimmungslicht oder Chroma-Key-Alternativen.',
      description: 'Blauer Vollbildschirm für Pixeltests und kühle Raumbeleuchtung.',
      uses: [
        { title: 'Blauer Subpixeltest', description: 'Prüfen Sie blaue Subpixel auf korrekte Funktion.' },
        { title: 'Bluescreen für Videos', description: 'Hervorragend geeignet, wenn Personen grüne Kleidung tragen.' },
        { title: 'Kühle Lichtstimmung', description: 'Schafft eine moderne, ruhige Atmosphäre am Arbeitsplatz.' },
        { title: 'Farbraumprüfung', description: 'Überprüfen Sie blaue Farbabstufungen auf Ihrem Monitor.' },
      ],
    },
    yellow: {
      intro: 'Heller gelber Vollbildschirm für kombinierte Rot-Grün-Tests und angenehme warme Beleuchtung.',
      description: 'Gelber Vollbildschirm für warme Beleuchtung und Displayinspektion.',
      uses: [
        { title: 'Subpixel-Kombinationstest', description: 'Aktiviert rote und grüne Subpixel gleichzeitig.' },
        { title: 'Warmes Leselicht', description: 'Angenehme Lichtquelle ohne kaltes Streulicht.' },
        { title: 'Kreativkulisse', description: 'Sonniger Fotohintergrund für Kleinteile.' },
        { title: 'Signalton', description: 'Deutliche Statusanzeige auf Zweitmonitoren.' },
      ],
    },
    orange: {
      intro: 'Warmes, stimmungsvolles Orange im Vollbild. Perfekt für Sonnenuntergangsstimmung und Gemütlichkeit.',
      description: 'Orangener Vollbildschirm für gemütliche Atmosphäre und warme Porträtbeleuchtung.',
      uses: [
        { title: 'Warme Abendbeleuchtung', description: 'Entspanntes Licht ohne blaues Spektrum.' },
        { title: 'Golden-Hour-Effekt', description: 'Erzeugt weiche, goldene Reflexe bei Aufnahmen.' },
        { title: 'Farbmischungstest', description: 'Überprüft die Balance zwischen Rot und Grün.' },
        { title: 'Herbstliche Stimmung', description: 'Wohlfühlatmosphäre für jeden Raum.' },
      ],
    },
    pink: {
      intro: 'Sanftes Vollbild-Rosa. Beliebt als schmeichelhaftes Beautylicht für Porträts oder pastellfarbene Kulisse.',
      description: 'Rosa Vollbildschirm für Selfie-Beleuchtung und Pastellhintergründe.',
      uses: [
        { title: 'Schmeichelhaftes Porträtlicht', description: 'Mildert Schatten und verleiht der Haut frische Wärme.' },
        { title: 'Pastellhintergrund', description: 'Ästhetischer Kulissenhintergrund für Lifestyle-Fotos.' },
        { title: 'Sanftes Ambientelicht', description: 'Dezenter, gemütlicher Farbakzent.' },
        { title: 'Farbtonvergleich', description: 'Prüft Magenta- und Rosatöne zwischen verschiedenen Displays.' },
      ],
    },
    purple: {
      intro: 'Intensives Lila für Gaming-Licht, Stream-Hintergründe und Prüfung hoher Farbsättigung.',
      description: 'Lila Vollbildschirm für Gaming-Atmosphäre und Farbtiefe.',
      uses: [
        { title: 'Gaming & Streaming', description: 'Kultige Neon-Beleuchtung für Setup-Videos.' },
        { title: 'Fokus & Musik', description: 'Entspannendes Licht für kreative Sessions.' },
        { title: 'Sättigungsprüfung', description: 'Zeigt Banding in dunklen Mischfarben.' },
        { title: 'Stimmungsakzent', description: 'Verwandelt Displays in Farbscheinwerfer.' },
      ],
    },
    cyan: {
      intro: 'Leuchtendes Cyan aktiviert grüne und blaue Subpixel für kühles, sauberes Raumlicht.',
      description: 'Cyanfarbener Vollbildschirm für Subpixelanalysen und kühles Licht.',
      uses: [
        { title: 'Grün + Blau Test', description: 'Defekte in diesen Farbkanälen werden sofort sichtbar.' },
        { title: 'Frisches Licht', description: 'Moderner Look für Arbeitsplatz und Foto.' },
        { title: 'Roter Pixeltester', description: 'Hängt ein roter Subpixel, fällt er auf Cyan sofort auf.' },
        { title: 'Kalibrierungscheck', description: 'Prüfung der Neutralität im Cyanbereich.' },
      ],
    },
    magenta: {
      intro: 'Reines Magenta ohne Grünanteil. Ideal zum Aufdecken festsitzender grüner Pixel.',
      description: 'Magenta Vollbildschirm zur Erkennung festsitzender grüner Pixel.',
      uses: [
        { title: 'Rot + Blau Kanal', description: 'Aktiviert beide Kanäle bei vollständig inaktivem Grün.' },
        { title: 'Grün-Pixel-Detektor', description: 'Grüne Pixelfehler heben sich weiß ab.' },
        { title: 'Neon-Beleuchtung', description: 'Kräftiges Neonlicht für Videoproduktionen.' },
        { title: 'Farbbalance', description: 'Testet die Ausgewogenheit extremer Farbtöne.' },
      ],
    },
    gray: {
      intro: 'Neutrales Vollbild-Grau zur Erkennung von Dirty-Screen-Effekten (DSE), Vignettierung und Banding.',
      description: 'Grauer Vollbildschirm für Homogenitäts- und DSE-Tests.',
      uses: [
        { title: 'Dirty Screen Effect (DSE)', description: 'Mittelgrau entlarvt vertikale Streifen und ungleichmäßige Ausleuchtung.' },
        { title: 'Vignettierung & Ecken', description: 'Zeigt dunklere Ränder oder Ausleuchtungsabfälle.' },
        { title: 'Farbneutralität', description: 'Grau darf weder rötlich noch grünlich wirken.' },
        { title: 'Panelreinigung', description: 'Macht Fingerabdrücke und Staub gleichmäßig sichtbar.' },
      ],
    },
  },
  fr: {
    white: {
      intro: 'Transformez votre écran en une surface blanche pure en un clic. Utilisez-la comme source lumineuse, pour chercher des pixels morts ou nettoyer votre moniteur.',
      description: 'Écran blanc plein écran gratuit pour l’éclairage, le nettoyage et le test de pixels morts.',
      uses: [
        { title: 'Appels vidéo & éclairage', description: 'Lumière douce d’appoint pour vos appels vidéo et selfies.' },
        { title: 'Test de pixels morts', description: 'Les pixels morts apparaissent immédiatement sous forme de points noirs.' },
        { title: 'Nettoyage d’écran', description: 'Permet de voir facilement les traces et poussières lors de l’essuyage.' },
        { title: 'Table lumineuse', description: 'Transforme une tablette en boîte lumineuse pour le calque ou dessin.' },
      ],
    },
    black: {
      intro: 'Affichez un écran noir pur plein écran. Idéal pour repérer les fuites de rétroéclairage et vérifier le contraste OLED.',
      description: 'Écran noir plein écran gratuit pour inspecter les fuites de lumière et pixels bloqués.',
      uses: [
        { title: 'Fuites de rétroéclairage', description: 'Dans l’obscurité, repérez les fuites lumineuses sur les bords de la dalle.' },
        { title: 'Pixels bloqués', description: 'Les pixels restés allumés ressortent vivement sur fond noir.' },
        { title: 'Contraste OLED', description: 'Vérifiez la profondeur du noir absolu sur panneau OLED.' },
        { title: 'Veille sans arrêt', description: 'Gardez l’ordinateur éveillé tout en conservant l’écran éteint visuellement.' },
      ],
    },
    red: {
      intro: 'Écran rouge uni plein écran pour tester les sous-pixels rouges, servir de veilleuse nocturne ou de fond coloré.',
      description: 'Écran rouge plein écran gratuit pour tests de sous-pixels et éclairage nocturne doux.',
      uses: [
        { title: 'Test sous-pixel rouge', description: 'Isolez le canal rouge pour contrôler chaque sous-pixel.' },
        { title: 'Lumière de nuit', description: 'Préserve la vision nocturne sans perturber le sommeil.' },
        { title: 'Fond de tournage', description: 'Ambiance visuelle chaleureuse pour vos vidéos.' },
        { title: 'Étalonnage couleur', description: 'Vérifiez la vivacité et la pureté des nuances rouges.' },
      ],
    },
    green: {
      intro: 'Affichez un vert pur plein écran. Parfait comme fond vert numérique pour vos incrustations vidéo.',
      description: 'Écran vert plein écran pour incrustation chroma key et tests de dalle.',
      uses: [
        { title: 'Fond vert immédiat', description: 'Utilisez un moniteur comme fond vert propre pour vos vidéos.' },
        { title: 'Test du sous-pixel vert', description: 'Le canal vert détermine l’essentiel de la clarté perçue.' },
        { title: 'Macro-photographie', description: 'Arrière-plan végétal uniforme pour photographier de petits objets.' },
        { title: 'Contrôle de teinte', description: 'Détecte les dérives colorimétriques.' },
      ],
    },
    blue: {
      intro: 'Écran bleu pur plein écran. Conçu pour tester les sous-pixels bleus ou instaurer une ambiance lumineuse fraîche.',
      description: 'Écran bleu plein écran pour tests de sous-pixels et éclairage moderne.',
      uses: [
        { title: 'Test sous-pixel bleu', description: 'Identifie immédiatement les défauts du canal bleu.' },
        { title: 'Fond bleu vidéo', description: 'Alternative idéale lorsque le sujet porte du vert.' },
        { title: 'Lumière d’ambiance', description: 'Apporte une tonalité sereine à votre espace de travail.' },
        { title: 'Dégradés et contraste', description: 'Vérifiez la tenue des tons bleus sur votre écran.' },
      ],
    },
    yellow: {
      intro: 'Écran jaune lumineux plein écran pour tests combinés rouge/vert et éclairage chaud.',
      description: 'Écran jaune plein écran pour éclairage chaleureux et vérification de dalle.',
      uses: [
        { title: 'Test combiné rouge + vert', description: 'Allume simultanément les sous-pixels rouges et verts.' },
        { title: 'Lumière de lecture', description: 'Éclairage doux et reposant pour les yeux en soirée.' },
        { title: 'Fond studio', description: 'Fond éclatant pour photographie d’objets.' },
        { title: 'Signalétique visuelle', description: 'Indicateur visuel d’attente sur écran secondaire.' },
      ],
    },
    orange: {
      intro: 'Écran orange chaud plein écran. Parfait pour une ambiance coucher de soleil.',
      description: 'Écran orange plein écran pour ambiance chaleureuse et éclairage portrait.',
      uses: [
        { title: 'Lumière d’ambiance', description: 'Lueur tamisée idéale pour la fin de journée.' },
        { title: 'Lumière dorée', description: 'Recrée l’effet doré des prises de vue au crépuscule.' },
        { title: 'Mélange de couleurs', description: 'Vérifie l’équilibre colorimétrique rouge-vert.' },
        { title: 'Confort visuel', description: 'Lumière sans pic bleu pour détendre les yeux.' },
      ],
    },
    pink: {
      intro: 'Écran rose doux plein écran. Très apprécié pour éclairer les selfies ou comme fond pastel.',
      description: 'Écran rose plein écran pour lumière flatteuse et arrière-plans pastel.',
      uses: [
        { title: 'Lumière beauté selfie', description: 'Adoucit les traits et réchauffe le teint devant la caméra.' },
        { title: 'Arrière-plan pastel', description: 'Décor esthétique pour photo et vidéo créative.' },
        { title: 'Ambiance feutrée', description: 'Touche colorée apaisante pour une pièce.' },
        { title: 'Comparatif d’écran', description: 'Compare la reproduction des teintes chair et pastel.' },
      ],
    },
    purple: {
      intro: 'Écran violet intense pour éclairage gaming, streaming ou vérification de saturation.',
      description: 'Écran violet plein écran pour ambiance gaming et contrôle de saturation.',
      uses: [
        { title: 'Éclairage streaming', description: 'Donne un look moderne et dynamique à vos diffusions.' },
        { title: 'Ambiance gaming', description: 'Atmosphère immersive pour vos sessions nocturnes.' },
        { title: 'Vérification de saturation', description: 'Vérifie l’absence de banding dans les tons sombres.' },
        { title: 'Projecteur de couleur', description: 'Utilisez un appareil portable comme spot coloré.' },
      ],
    },
    cyan: {
      intro: 'Écran cyan lumineux plein écran, sollicitant les sous-pixels verts et bleus.',
      description: 'Écran cyan plein écran pour tests de canaux et lumière épurée.',
      uses: [
        { title: 'Test vert + bleu', description: 'Toute anomalie sur ces deux canaux saute aux yeux.' },
        { title: 'Lumière fraîche', description: 'Style futuriste et épuré pour votre bureau.' },
        { title: 'Détecteur de rouge bloqué', description: 'Le rouge étant absent, un pixel rouge bloqué se voit de suite.' },
        { title: 'Vérification du blanc froid', description: 'Permet de juger de la justesse des tons froids.' },
      ],
    },
    magenta: {
      intro: 'Écran magenta pur sans composante verte, idéal pour détecter les pixels verts bloqués.',
      description: 'Écran magenta plein écran pour détecter les pixels coincés et lumière néon.',
      uses: [
        { title: 'Canaux rouge + bleu', description: 'Active ces deux sous-pixels sans réveiller le vert.' },
        { title: 'Détection de vert coincé', description: 'Un pixel vert bloqué ressort blanc sur le magenta.' },
        { title: 'Éclairage néon', description: 'Lumière puissante et originale pour tournages vidéo.' },
        { title: 'Uniformité chromatique', description: 'Vérifie l’homogénéité des teintes très vives.' },
      ],
    },
    gray: {
      intro: 'Écran gris neutre à 50% plein écran pour révéler le banding, vignettage et effet d’écran sale (DSE).',
      description: 'Écran gris plein écran pour test d’uniformité de dalle et DSE.',
      uses: [
        { title: 'Effet d’écran sale (DSE)', description: 'Le gris neutre met en évidence les bandes verticales et irrégularités.' },
        { title: 'Uniformité de rétroéclairage', description: 'Révèle les coins assombris ou chutes de luminosité.' },
        { title: 'Neutralité des teintes', description: 'Un bon écran doit restituer un gris parfaitement neutre.' },
        { title: 'Nettoyage minutieux', description: 'Rend visibles les traces de doigts et poussières.' },
      ],
    },
  },
  it: {
    white: {
      intro: 'Trasforma il tuo schermo in una schermata bianca pura con un solo clic. Usala come luce da tavolo, per cercare pixel bruciati o pulire il monitor.',
      description: 'Schermo bianco a tutto schermo gratuito per illuminazione, pulizia e verifica pixel.',
      uses: [
        { title: 'Videochiamate & illuminazione', description: 'Luce morbida diffusa per illuminare il volto in webcam o selfie.' },
        { title: 'Verifica pixel morti', description: 'I pixel difettosi risaltano chiaramente come punti neri su fondo bianco.' },
        { title: 'Pulizia del display', description: 'Permette di notare macchie e aloni durante la pulizia.' },
        { title: 'Tavolo luminoso', description: 'Usa un tablet come piano luminoso per ricalcare disegni e bozze.' },
      ],
    },
    black: {
      intro: 'Schermata nera pura a pieno schermo. Ideale per scoprire backlight bleeding, verificare il contrasto OLED o mantenere il PC attivo a schermo spento.',
      description: 'Schermo nero a tutto schermo gratuito per test di contrasto e pixel bloccati.',
      uses: [
        { title: 'Backlight bleeding & IPS glow', description: 'Al buio rivela infiltrazioni di luce dai bordi del pannello LCD.' },
        { title: 'Pixel bloccati accesi', description: 'I pixel bloccati su un colore risaltano nitidamente sul nero.' },
        { title: 'Nero assoluto OLED', description: 'Verifica lo spegnimento totale dei pixel sui pannelli OLED.' },
        { title: 'Attivo a schermo scuro', description: 'Evita lo standby durante download senza illuminare la stanza.' },
      ],
    },
    red: {
      intro: 'Schermata rossa uniforme per verificare i subpixel rossi, come luce notturna riposante o sfondo scenico.',
      description: 'Schermo rosso a tutto schermo per test subpixel e luce notturna rilassante.',
      uses: [
        { title: 'Test subpixel rosso', description: 'Isola e controlla singolarmente il funzionamento del canale rosso.' },
        { title: 'Luce notturna riposante', description: 'Non affatica gli occhi e preserva la visione notturna al buio.' },
        { title: 'Sfondo fotografico', description: 'Aggiunge un riflesso caldo e d’effetto a video e foto.' },
        { title: 'Verifica saturazione', description: 'Valuta la fedeltà cromatica sui toni rossi del pannello.' },
      ],
    },
    green: {
      intro: 'Schermo verde brillante a tutto schermo. Perfetto come green screen digitale per chroma key e verifiche di luminosità.',
      description: 'Schermo verde a tutto schermo per chroma key e calibrazione del display.',
      uses: [
        { title: 'Green screen rapido', description: 'Usa monitor o tablet come sfondo verde per montaggi video.' },
        { title: 'Test subpixel verde', description: 'I subpixel verdi determinano la maggior parte della luminosità percepita.' },
        { title: 'Macro fotografia', description: 'Sfondo neutro e pulito per scatti di piccoli oggetti.' },
        { title: 'Controllo bilanciamento', description: 'Rileva dominanti cromatiche indesiderate.' },
      ],
    },
    blue: {
      intro: 'Schermo blu a tutto schermo per testare i subpixel blu, luce d’atmosfera fredda o chroma key alternativo.',
      description: 'Schermo blu a tutto schermo per test subpixel e illuminazione fredda.',
      uses: [
        { title: 'Test subpixel blu', description: 'Riconosci subito eventuali problemi al canale blu.' },
        { title: 'Blue screen per video', description: 'Alternativa perfetta al verde quando i soggetti vestono di verde.' },
        { title: 'Luce rilassante', description: 'Crea un’atmosfera moderna e raccolta sulla scrivania.' },
        { title: 'Gradazioni di colore', description: 'Verifica la qualità delle sfumature fredde sul monitor.' },
      ],
    },
    yellow: {
      intro: 'Schermo giallo luminoso per test combinati e luce calda d’ambiente.',
      description: 'Schermo giallo a tutto schermo per luce calda e test di monitor.',
      uses: [
        { title: 'Test combinato rosso + verde', description: 'Attiva insieme entrambi i subpixel evidenziando difetti.' },
        { title: 'Luce da lettura', description: 'Fonte luminosa piacevole per non stancare la vista la sera.' },
        { title: 'Sfondo creativo', description: 'Tonalità solare per composizioni e foto di prodotto.' },
        { title: 'Segnalatore visivo', description: 'Schermata di stato o pausa su monitor secondari.' },
      ],
    },
    orange: {
      intro: 'Schermata arancione a tutto schermo per un’atmosfera calda e rilassante.',
      description: 'Schermo arancione a tutto schermo per illuminazione calda e ritratti.',
      uses: [
        { title: 'Luce da tramonto', description: 'Ricrea i riflessi dorati della golden hour.' },
        { title: 'Confort visivo serale', description: 'Luce priva di spettro blu per le ore notturne.' },
        { title: 'Miscelazione colore', description: 'Verifica l’equilibrio tra rosso e verde sullo schermo.' },
        { title: 'Atmosfera accogliente', description: 'Dona calore e morbidezza all’ambiente.' },
      ],
    },
    pink: {
      intro: 'Schermo rosa tenue a pieno schermo, ideale per illuminare selfie o come sfondo pastello.',
      description: 'Schermo rosa a tutto schermo per selfie e sfondi pastello.',
      uses: [
        { title: 'Luce selfie lusinghiera', description: 'Attenua le ombre ed esalta la naturale tonalità della pelle.' },
        { title: 'Sfondo pastello', description: 'Perfetto per contenuti social e fotografia creativa.' },
        { title: 'Luce d’atmosfera', description: 'Bagliore delicato e rilassante per la camera.' },
        { title: 'Confronto tonale', description: 'Controlla come diversi display gestiscono le tinte rosa.' },
      ],
    },
    purple: {
      intro: 'Schermo viola intenso per postazioni gaming, streaming e controllo della saturazione.',
      description: 'Schermo viola a tutto schermo per gaming e verifica saturazione.',
      uses: [
        { title: 'Illuminazione streaming', description: 'Effetto neon moderno per live e video.' },
        { title: 'Concentrazione & relax', description: 'Luce piacevole per ascoltare musica o lavorare al PC.' },
        { title: 'Controllo saturazione', description: 'Verifica l’assenza di banding nelle tonalità scure.' },
        { title: 'Faretto colorato', description: 'Usa un dispositivo mobile come punto luce scenico.' },
      ],
    },
    cyan: {
      intro: 'Schermo ciano a pieno schermo. Accende insieme subpixel verdi e blu per luce fresca e pulita.',
      description: 'Schermo ciano a tutto schermo per analisi canali e luce moderna.',
      uses: [
        { title: 'Test verde + blu', description: 'Rende visibile ogni imperfezione in questi canali.' },
        { title: 'Luce moderna e fresca', description: 'Dona un tocco pulito e tecnologico allo spazio di lavoro.' },
        { title: 'Pixel rosso bloccato', description: 'Un pixel rosso difettoso salta subito all’occhio sul ciano.' },
        { title: 'Accuratezza del punto di bianco', description: 'Utile per valutare le tonalità fredde del display.' },
      ],
    },
    magenta: {
      intro: 'Schermo magenta puro a pieno schermo senza verde, perfetto per scovare pixel verdi bloccati.',
      description: 'Schermo magenta a tutto schermo per individuare pixel verdi bloccati.',
      uses: [
        { title: 'Canali rosso + blu', description: 'Accende entrambi i canali escludendo il verde.' },
        { title: 'Individuazione verde bloccato', description: 'I pixel verdi bloccati appaiono bianchi su sfondo magenta.' },
        { title: 'Illuminazione al neon', description: 'Luce decisa e scenografica per riprese video.' },
        { title: 'Resa dei colori saturi', description: 'Verifica l’omogeneità cromatica sui toni più intensi.' },
      ],
    },
    gray: {
      intro: 'Schermo grigio neutro al 50% per verificare uniformità, banding ed effetto schermo sporco (DSE).',
      description: 'Schermo grigio a tutto schermo per test di uniformità e DSE.',
      uses: [
        { title: 'Dirty Screen Effect (DSE)', description: 'Il grigio medio espone strisce verticali e chiazze di retroilluminazione.' },
        { title: 'Vignettatura e bordi', description: 'Mostra cali di luminosità vicino alle cornici.' },
        { title: 'Neutralità cromatica', description: 'Il grigio deve risultare puro senza sfumature rosate o verdastre.' },
        { title: 'Pulizia monitor', description: 'Mette in evidenza polvere e impronte sulla superficie del display.' },
      ],
    },
  },
  nl: {
    white: {
      intro: 'Verander uw beeldscherm in één klik in een helder wit scherm. Gebruik het als lichtbron, voor dode-pixel-inspectie of om uw monitor schoon te maken.',
      description: 'Gratis wit scherm op volledig scherm voor verlichting, schermreiniging en dode pixel tests.',
      uses: [
        { title: 'Videogesprekken & verlichting', description: 'Zacht invullicht voor webcamgesprekken en selfies.' },
        { title: 'Dode pixel test', description: 'Donkere dode pixels vallen als zwarte stippen direct op tegen wit.' },
        { title: 'Schermreiniging', description: 'Maakt vegen en stofjes direct zichtbaar tijdens het poetsen.' },
        { title: 'Lichtbak voor tekenen', description: 'Maak van uw tablet een handige lichtbak voor overtrekken.' },
      ],
    },
    black: {
      intro: 'Toon een zuiver zwart scherm. Ideaal voor het opsporen van backlight bleed en het testen van OLED-contrast.',
      description: 'Gratis zwart scherm op volledig scherm voor backlight bleed en contrasttests.',
      uses: [
        { title: 'Backlight bleed & IPS glow', description: 'In het donker ziet u direct of er licht lekt langs de schermranden.' },
        { title: 'Vastzittende pixels', description: 'Lichtgevende vastzittende pixels lichten helder op tegen zwart.' },
        { title: 'OLED-contrasttest', description: 'OLED-pixels schakelen volledig uit op puur zwart.' },
        { title: 'Scherm donker houden', description: 'Laat de computer aanstaan tijdens downloads zonder storend licht.' },
      ],
    },
    red: {
      intro: 'Effen rood scherm op volledig scherm. Handig voor rode subpixeltests of als rustig nachtlampje.',
      description: 'Rood scherm op volledig scherm voor subpixeltests en zacht nachtlicht.',
      uses: [
        { title: 'Rode subpixeltest', description: 'Isoleer het rode kanaal om subpixeldefecten te vinden.' },
        { title: 'Oogvriendelijk nachtlicht', description: 'Behoudt uw nachtzicht zonder vermoeidheid.' },
        { title: 'Creatieve achtergrond', description: 'Warme sfeerverlichting voor video en foto.' },
        { title: 'Kleurbeoordeling', description: 'Beoordeel kleurverzadiging op uw scherm.' },
      ],
    },
    green: {
      intro: 'Helder groen scherm op volledig scherm. Perfect als digitaal groen scherm voor chroma keying.',
      description: 'Groen scherm op volledig scherm voor chroma keying en paneelcontrole.',
      uses: [
        { title: 'Digitaal groen scherm', description: 'Gebruik een beeldscherm direct als groen scherm voor video.' },
        { title: 'Groene subpixeltest', description: 'Het groene kanaal levert het leeuwendeel van de waargenomen helderheid.' },
        { title: 'Macrofotografie', description: 'Gelijkmatige neutrale achtergrond voor kleine objecten.' },
        { title: 'Kleurbalans', description: 'Controleer op kleurzweem in het groene kanaal.' },
      ],
    },
    blue: {
      intro: 'Diepblauw scherm op volledig scherm voor subpixeltests of koele sfeerverlichting.',
      description: 'Blauw scherm op volledig scherm voor subpixeltests en koele werkplekverlichting.',
      uses: [
        { title: 'Blauwe subpixeltest', description: 'Vind snel fouten in het blauwe kanaal.' },
        { title: 'Blauw scherm voor video', description: 'Ideaal chroma key alternatief als iemand groene kleding draagt.' },
        { title: 'Koele lichtsfeer', description: 'Zorgt voor een rustige en moderne uitstraling op uw bureau.' },
        { title: 'Kleurdiepte inspectie', description: 'Evalueer blauwe tinten en schaduwen op uw scherm.' },
      ],
    },
    yellow: {
      intro: 'Helder geel scherm voor gecombineerde rood/groen inspectie en zachte verlichting.',
      description: 'Geel scherm op volledig scherm voor warme verlichting en schermtests.',
      uses: [
        { title: 'Gecombineerde subpixeltest', description: 'Schakelt rode en groene subpixels gelijktijdig in.' },
        { title: 'Warm leeslicht', description: 'Aangenaam avondlicht zonder scherpe blauwe pieken.' },
        { title: 'Fotostudio achtergrond', description: 'Vrolijke achtergrond voor productfoto’s.' },
        { title: 'Statusindicatie', description: 'Opvallende pauzestatus op een tweede beeldscherm.' },
      ],
    },
    orange: {
      intro: 'Warm oranje scherm op volledig scherm voor een gezellige sfeer en zachte belichting.',
      description: 'Oranje scherm op volledig scherm voor warme sfeer en zonsondergangkleuren.',
      uses: [
        { title: 'Sfeervolle avondverlichting', description: 'Rustgevende gloed die de ogen niet vermoeit.' },
        { title: 'Gouden uur effect', description: 'Simuleert warme zonsondergangreflecties.' },
        { title: 'Kleurenmenging controleren', description: 'Bekijk de balans tussen rood en groen.' },
        { title: 'Gezellige werkruimte', description: 'Creëert een behaaglijke sfeer in elke kamer.' },
      ],
    },
    pink: {
      intro: 'Zachtroze scherm op volledig scherm. Populair als flatteus selfielicht of pastelachtergrond.',
      description: 'Roze scherm op volledig scherm voor zacht selfielicht en pastelkleuren.',
      uses: [
        { title: 'Flatteus selfielicht', description: 'Verzacht schaduwen en flatteert de natuurlijke huidskleur.' },
        { title: 'Pastel achtergrond', description: 'Stijlvolle achtergrond voor foto- en video-opnamen.' },
        { title: 'Zacht sfeerlicht', description: 'Brengt een kalme, warme gloed in de ruimte.' },
        { title: 'Kleurtoonvergelijking', description: 'Vergelijk hoe verschillende schermen rozetinten tonen.' },
      ],
    },
    purple: {
      intro: 'Dieppaars scherm voor gaming-verlichting, livestreams en controle van kleurverzadiging.',
      description: 'Paars scherm op volledig scherm voor gaming-sfeer en verzadigingscontrole.',
      uses: [
        { title: 'Streaming achtergrond', description: 'Trendy neonlook voor live uitzendingen.' },
        { title: 'Focus en sfeer', description: 'Rustgevend licht voor gamen of muziek luisteren.' },
        { title: 'Verzadigingstest', description: 'Controleer of donkere tinten zonder strepen worden getoond.' },
        { title: 'Kleuraccent', description: 'Maak van uw tablet of telefoon een draagbare kleurlamp.' },
      ],
    },
    cyan: {
      intro: 'Helder cyaan scherm dat groene en blauwe subpixels activeert voor fris, modern licht.',
      description: 'Cyaan scherm op volledig scherm voor subpixeltests en helder licht.',
      uses: [
        { title: 'Groen + blauw test', description: 'Foutjes in deze kanalen worden direct duidelijk.' },
        { title: 'Fris modern licht', description: 'Geeft een strakke, eigentijdse uitstraling aan uw werkplek.' },
        { title: 'Vastzittende rode pixel', description: 'Omdat cyaan geen rood bevat, valt een rode pixel direct op.' },
        { title: 'Kleurbalans koud wit', description: 'Evalueer hoe accuraat uw scherm koele tinten weergeeft.' },
      ],
    },
    magenta: {
      intro: 'Puur magenta scherm zonder groen. Ideaal om vastzittende groene pixels op te sporen.',
      description: 'Magenta scherm op volledig scherm om vastzittende groene pixels te vinden.',
      uses: [
        { title: 'Rood + blauw kanalen', description: 'Schakelt rood en blauw in terwijl groen volledig uit staat.' },
        { title: 'Groene pixel detector', description: 'Een vastzittende groene pixel licht wit op tegen magenta.' },
        { title: 'Neonverlichting', description: 'Opvallend neonlicht voor video- en filmopnames.' },
        { title: 'Verzadigde tinten', description: 'Controleert de kleurhomogeniteit over het hele beeldscherm.' },
      ],
    },
    gray: {
      intro: 'Neutraal 50% grijs scherm voor het controleren van uniformiteit, banding en Dirty Screen Effect (DSE).',
      description: 'Grijs scherm op volledig scherm voor uniformiteit en DSE-tests.',
      uses: [
        { title: 'Dirty Screen Effect (DSE)', description: 'Middengrijs legt verticale strepen en ongelijke verlichting bloot.' },
        { title: 'Vignettering & hoeken', description: 'Toont donkere schermhoeken of lichtafval aan de randen.' },
        { title: 'Kleurneutraliteit', description: 'Grijs moet puur zijn zonder roze of groenachtige tinten.' },
        { title: 'Scherm schoonmaken', description: 'Maakt vingerafdrukken en stofdeeltjes uitstekend zichtbaar.' },
      ],
    },
  },
  id: {
    white: {
      intro: 'Ubah layar monitor Anda menjadi layar putih terang dalam satu klik. Gunakan sebagai sumber cahaya, untuk tes piksel mati, atau membersihkan layar monitor.',
      description: 'Layar putih layar penuh gratis untuk pencahayaan, membersihkan monitor, dan tes piksel mati.',
      uses: [
        { title: 'Panggilan video & pencahayaan', description: 'Cahaya putih lembut untuk webcam, swafoto, atau foto produk.' },
        { title: 'Pengecekan piksel mati', description: 'Piksel mati tampak jelas sebagai titik hitam pada latar belakang putih.' },
        { title: 'Membersihkan layar', description: 'Memudahkan melihat debu dan bekas sidik jari saat mengelap monitor.' },
        { title: 'Alas jiplak gambar', description: 'Gunakan tablet sebagai meja lampu praktis untuk menjiplak sketsa.' },
      ],
    },
    black: {
      intro: 'Tampilkan layar hitam pekat layar penuh. Bagus untuk memeriksa kebocoran lampu latar (backlight bleed) dan kontras OLED.',
      description: 'Layar hitam layar penuh gratis untuk memeriksa kebocoran lampu latar dan kontras.',
      uses: [
        { title: 'Backlight bleed & IPS glow', description: 'Dalam ruangan gelap, periksa kebocoran cahaya di sudut layar LCD.' },
        { title: 'Deteksi piksel macet', description: 'Piksel yang macet menyala akan terlihat jelas sebagai titik terang.' },
        { title: 'Kontras OLED sejati', description: 'Piksel OLED mati sepenuhnya saat hitam pekat untuk kontras tak terbatas.' },
        { title: 'Layar gelap tanpa tidur', description: 'Biarkan komputer tetap aktif mengunduh berkas tanpa menyilaukan mata.' },
      ],
    },
    red: {
      intro: 'Penuhi layar dengan warna merah solid. Berguna untuk menguji subpiksel merah atau lampu malam yang ramah mata.',
      description: 'Layar merah layar penuh untuk pengujian subpiksel dan lampu malam lembut.',
      uses: [
        { title: 'Tes subpiksel merah', description: 'Isolasi kanal warna merah untuk menemukan subpiksel yang rusak.' },
        { title: 'Lampu malam ramah mata', description: 'Cahaya merah tidak merusak adaptasi malam mata Anda.' },
        { title: 'Latar video kreatif', description: 'Memberikan suasana hangat pada rekaman video Anda.' },
        { title: 'Pengecekan saturasi', description: 'Pastikan layar Anda menampilkan gradasi merah dengan baik.' },
      ],
    },
    green: {
      intro: 'Layar hijau terang layar penuh. Sempurna sebagai green screen digital instan untuk kebutuhan chroma key video.',
      description: 'Layar hijau layar penuh untuk chroma key dan kalibrasi layar.',
      uses: [
        { title: 'Green screen instan', description: 'Jadikan monitor Anda layar hijau untuk efek video tanpa kain hijau.' },
        { title: 'Tes subpiksel hijau', description: 'Subpiksel hijau menyumbang kecerahan paling besar bagi mata manusia.' },
        { title: 'Fotografi makro', description: 'Latar belakang bersih dan kontras untuk memotret objek kecil.' },
        { title: 'Keseimbangan warna', description: 'Periksa penyimpangan warna pada kanal hijau monitor.' },
      ],
    },
    blue: {
      intro: 'Layar biru pekat layar penuh untuk memeriksa subpiksel biru, pencahayaan dingin, atau alternatif blue screen.',
      description: 'Layar biru layar penuh untuk pengujian subpiksel dan suasana sejuk.',
      uses: [
        { title: 'Tes subpiksel biru', description: 'Deteksi kerusakan pada kanal warna biru secara akurat.' },
        { title: 'Blue screen video', description: 'Alternatif terbaik jika objek yang direkam memakai pakaian hijau.' },
        { title: 'Cahaya ruangan sejuk', description: 'Memberikan suasana modern dan tenang di meja kerja Anda.' },
        { title: 'Kedalaman warna', description: 'Evaluasi akurasi nuansa warna biru pada layar.' },
      ],
    },
    yellow: {
      intro: 'Layar kuning cerah untuk pengujian gabungan merah dan hijau serta pencahayaan hangat.',
      description: 'Layar kuning layar penuh untuk pencahayaan hangat dan tes layar.',
      uses: [
        { title: 'Tes gabungan subpiksel', description: 'Mengaktifkan subpiksel merah dan hijau secara bersamaan.' },
        { title: 'Lampu baca hangat', description: 'Pencahayaan yang nyaman untuk membaca di malam hari.' },
        { title: 'Latar studio ceria', description: 'Latar belakang menarik untuk foto produk kreatif.' },
        { title: 'Indikator status', description: 'Tampilan penanda status istirahat pada layar kedua.' },
      ],
    },
    orange: {
      intro: 'Layar oranye hangat layar penuh untuk suasana senja yang nyaman dan pencahayaan potret.',
      description: 'Layar oranye layar penuh untuk pencahayaan hangat dan suasana tenang.',
      uses: [
        { title: 'Pencahayaan senja', description: 'Menghasilkan efek keemasan golden hour pada foto.' },
        { title: 'Kenyamanan mata', description: 'Bebas dari cahaya biru berlebih saat malam hari.' },
        { title: 'Keseimbangan warna', description: 'Memeriksa proporsi pencampuran warna merah dan hijau.' },
        { title: 'Suasana ruang hangat', description: 'Menciptakan nuansa yang tenang dan menenangkan.' },
      ],
    },
    pink: {
      intro: 'Layar merah muda lembut layar penuh untuk pencahayaan selfie dan latar warna pastel.',
      description: 'Layar merah muda layar penuh untuk cahaya selfie dan latar pastel.',
      uses: [
        { title: 'Cahaya swafoto memikat', description: 'Melembutkan bayangan dan membuat warna kulit tampak segar.' },
        { title: 'Latar belakang pastel', description: 'Pilihan estetis untuk konten media sosial.' },
        { title: 'Lampu hias lembut', description: 'Memberikan sentuhan warna lembut yang menenangkan.' },
        { title: 'Perbandingan warna', description: 'Memeriksa bagaimana layar menampilkan warna merah muda.' },
      ],
    },
    purple: {
      intro: 'Layar ungu tua untuk pencahayaan gaming, latar siaran langsung, dan tes saturasi.',
      description: 'Layar ungu layar penuh untuk suasana gaming dan tes saturasi warna.',
      uses: [
        { title: 'Pencahayaan streaming', description: 'Gaya neon modern untuk latar siaran langsung game.' },
        { title: 'Fokus dan musik', description: 'Cahaya rileks saat bermain game atau mendengarkan musik.' },
        { title: 'Tes saturasi', description: 'Memastikan tidak ada garis warna kasar pada warna gelap.' },
        { title: 'Lampu warna portabel', description: 'Ubah ponsel atau tablet menjadi sumber lampu warna praktis.' },
      ],
    },
    cyan: {
      intro: 'Layar sian cerah yang menyalakan subpiksel hijau dan biru untuk cahaya modern dan bersih.',
      description: 'Layar sian layar penuh untuk uji subpiksel dan pencahayaan bersih.',
      uses: [
        { title: 'Tes hijau + biru', description: 'Kerusakan pada kedua subpiksel ini akan langsung terlihat.' },
        { title: 'Cahaya modern bersih', description: 'Memberikan nuansa futuristik pada meja kerja.' },
        { title: 'Deteksi piksel merah macet', description: 'Karena tidak ada merah di sian, piksel merah yang macet langsung tampak.' },
        { title: 'Akurasi warna dingin', description: 'Memeriksa netralitas warna dingin pada monitor.' },
      ],
    },
    magenta: {
      intro: 'Layar magenta murni tanpa komponen hijau untuk mengungkap piksel hijau yang macet.',
      description: 'Layar magenta layar penuh untuk deteksi piksel hijau macet dan lampu neon.',
      uses: [
        { title: 'Kanal merah + biru', description: 'Mengaktifkan merah dan biru dengan kanal hijau mati total.' },
        { title: 'Pendeteksi piksel hijau', description: 'Piksel hijau yang macet akan menyala putih pada layar magenta.' },
        { title: 'Pencahayaan neon', description: 'Lampu warna neon yang mencolok untuk produksi video.' },
        { title: 'Keseragaman warna', description: 'Memeriksa apakah warna merata di seluruh permukaan layar.' },
      ],
    },
    gray: {
      intro: 'Layar abu-abu netral 50% untuk memeriksa keseragaman, banding, dan efek layar kotor (DSE).',
      description: 'Layar abu-abu layar penuh untuk tes keseragaman layar dan DSE.',
      uses: [
        { title: 'Dirty Screen Effect (DSE)', description: 'Abu-abu sedang mengekspos garis vertikal dan pencahayaan tidak rata.' },
        { title: 'Vignette & sudut layar', description: 'Menunjukkan bagian sudut layar yang tampak lebih gelap.' },
        { title: 'Netralitas warna abu-abu', description: 'Abu-abu harus netral tanpa bias kemerahan atau kehijauan.' },
        { title: 'Pembersihan layar', description: 'Membuat bekas minyak dan debu terlihat jelas saat dibersihkan.' },
      ],
    },
  },
  tr: {
    white: {
      intro: 'Tek tıkla ekranınızı temiz, parlak ve tam ekran beyaz bir ekrana dönüştürün. Işık kaynağı, ölü piksel tespiti veya monitör temizliği için kullanın.',
      description: 'Aydınlatma, monitör temizliği ve ölü piksel kontrolü için ücretsiz tam ekran beyaz ekran.',
      uses: [
        { title: 'Görüntülü görüşme & aydınlatma', description: 'Web kamerası veya özçekimlerde yumuşak dolgu ışığı olarak kullanın.' },
        { title: 'Ölü piksel tespiti', description: 'Karanlık ölü pikseller beyaz zemin üzerinde siyah nokta olarak hemen fark edilir.' },
        { title: 'Ekran temizliği', description: 'Ekranı silerken leke ve tozların gözden kaçmasını engeller.' },
        { title: 'Çizim ve kopyalama', description: 'Tabletinizi çizim ve eskizleri kopyalamak için ışıklı masaya çevirin.' },
      ],
    },
    black: {
      intro: 'Ekranınızı saf siyah tam ekrana çevirin. Işık sızmasını (backlight bleed) görmek, OLED kontrastını test etmek veya ekranı kapatmadan karartmak için idealdir.',
      description: 'Işık sızması ve takılı pikselleri test etmek için ücretsiz tam ekran siyah ekran aracı.',
      uses: [
        { title: 'Işık sızması & IPS parlama', description: 'Karanlık odada LCD panel kenarlarındaki ışık kaçaklarını ortaya çıkarır.' },
        { title: 'Takılı piksel tespiti', description: 'Sürekli yanan takılı pikseller siyah zeminde parlak noktalar olarak parlar.' },
        { title: 'Gerçek OLED kontrastı', description: 'OLED pikselleri gerçek siyahta tamamen kapanarak sonsuz kontrast sunar.' },
        { title: 'Uykuya geçmeden karartma', description: 'İndirme sırasında bilgisayarı açık tutup ekranı karanlıkta bırakın.' },
      ],
    },
    red: {
      intro: 'Ekranınızı saf kırmızıyla kaplayın. Kırmızı alt pikselleri test etmek, gece lambası veya renkli arka plan olarak harikadır.',
      description: 'Kırmızı alt piksel testleri ve gece lambası için ücretsiz tam ekran kırmızı ekran.',
      uses: [
        { title: 'Kırmızı alt piksel testi', description: 'Kırmızı kanalı yalıtarak arızalı alt pikselleri hemen bulun.' },
        { title: 'Gözü yormayan gece ışığı', description: 'Gece görüşünü korur ve gözü yormayan sıcak bir ışık sağlar.' },
        { title: 'Çekim arka planı', description: 'Videolarınıza sıcak bir stüdyo tonu ekleyin.' },
        { title: 'Renk doygunluğu kontrolü', description: 'Ekranınızın kırmızı tonları doğru yansıtıp yansıtmadığını inceleyin.' },
      ],
    },
    green: {
      intro: 'Tam ekran parlak yeşil ekran. Video çekimlerinde chroma key veya yeşil alt piksel testi için ideal dijital yeşil perde.',
      description: 'Chroma key ve ekran kontrolü için ücretsiz tam ekran yeşil ekran.',
      uses: [
        { title: 'Dijital yeşil perde', description: 'Ekranınızı video çekimlerinde anında temiz bir yeşil perdeye çevirin.' },
        { title: 'Yeşil alt piksel testi', description: 'Yeşil pikseller insan gözünün algıladığı parlaklığın çoğunu oluşturur.' },
        { title: 'Makro fotoğrafçılık', description: 'Küçük nesneleri fotoğraflamak için homojen bir zemin sağlar.' },
        { title: 'Renk tonu dengesi', description: 'Ekranınızdaki yeşil kanal sapmalarını kontrol edin.' },
      ],
    },
    blue: {
      intro: 'Mavi alt pikselleri test etmek, serin ortam ışığı veya alternatif mavi perde için tam ekran mavi ekran.',
      description: 'Mavi alt piksel testleri ve serin aydınlatma için tam ekran mavi ekran.',
      uses: [
        { title: 'Mavi alt piksel testi', description: 'Mavi kanaldaki hataları ve ölü noktaları kolayca tespit edin.' },
        { title: 'Video için mavi perde', description: 'Kameradaki kişi yeşil kıyafet giydiğinde en iyi arka plan alternatifi.' },
        { title: 'Serin çalışma ışığı', description: 'Masanıza modern ve sakinleştirici bir hava katar.' },
        { title: 'Renk geçişi testi', description: 'Koyu mavi geçişlerde bantlanma olup olmadığını kontrol edin.' },
      ],
    },
    yellow: {
      intro: 'Kırmızı ve yeşil alt pikselleri birlikte sınamak ve sıcak bir aydınlatma sağlamak için tam ekran sarı ekran.',
      description: 'Sıcak aydınlatma ve ekran testleri için tam ekran sarı ekran.',
      uses: [
        { title: 'Birleşik alt piksel testi', description: 'Kırmızı ve yeşil alt pikselleri aynı anda yakarak test eder.' },
        { title: 'Sıcak okuma ışığı', description: 'Akşamları gözü dinlendiren hoş bir aydınlatma sunar.' },
        { title: 'Neşeli arka plan', description: 'Ürün çekimleri için parlak ve enerjik bir arka plan.' },
        { title: 'Durum göstergesi', description: 'İkinci monitörde dikkat çekici bir bekleme durumu gösterir.' },
      ],
    },
    orange: {
      intro: 'Sıcak gün batımı hissi veren tam ekran turuncu ekran.',
      description: 'Sıcak ortam ışığı ve portre çekimleri için tam ekran turuncu ekran.',
      uses: [
        { title: 'Sıcak akşam ışığı', description: 'Gece vakti gözleri dinlendiren mavi ışıksız loşluk.' },
        { title: 'Altın saat etkisi', description: 'Fotoğraflarda yumuşak gün batımı yansıması yaratır.' },
        { title: 'Renk karışımı kontrolü', description: 'Kırmızı ile yeşilin ekranınızdaki dengesini ölçün.' },
        { title: 'Huzurlu ortam', description: 'Odaya samimi ve rahatlatıcı bir hava katar.' },
      ],
    },
    pink: {
      intro: 'Özçekim aydınlatması ve pastel arka planlar için tam ekran yumuşak pembe ekran.',
      description: 'Özçekim aydınlatması ve pastel fonlar için tam ekran pembe ekran.',
      uses: [
        { title: 'Özçekim ışığı', description: 'Gölgeleri yumuşatır ve kamerada doğal cilt tonunu öne çıkarır.' },
        { title: 'Pastel arka plan', description: 'Fotoğraf ve video projeleri için estetik bir zemin.' },
        { title: 'Yumuşak oda ışığı', description: 'Mekana huzurlu ve hoş bir renk dokunuşu katar.' },
        { title: 'Ton karşılaştırması', description: 'Farklı ekranların pembe tonları nasıl yansıttığını inceleyin.' },
      ],
    },
    purple: {
      intro: 'Oyuncu aydınlatması, canlı yayınlar ve renk doygunluğu kontrolü için tam ekran mor ekran.',
      description: 'Oyuncu atmosferi ve renk doygunluğu için tam ekran mor ekran.',
      uses: [
        { title: 'Yayın arka planı', description: 'Canlı yayınlara modern neon bir ışık efekti katar.' },
        { title: 'Odaklanma & müzik', description: 'Oyun oynarken veya müzik dinlerken dinlendirici bir ışık.' },
        { title: 'Doygunluk kontrolü', description: 'Koyu tonlarda bantlanma ve detay kaybını kontrol edin.' },
        { title: 'Renkli spot ışık', description: 'Telefon veya tableti renkli bir spot lambaya dönüştürün.' },
      ],
    },
    cyan: {
      intro: 'Yeşil ve mavi alt pikselleri birlikte çalıştıran canlı, ferah ve modern tam ekran camgöbeği (cyan).',
      description: 'Alt piksel testleri ve ferah aydınlatma için tam ekran camgöbeği ekran.',
      uses: [
        { title: 'Yeşil + mavi testi', description: 'Bu iki kanaldaki alt piksel kusurları anında görünür hale gelir.' },
        { title: 'Ferah modern ışık', description: 'Çalışma alanına temiz ve fütüristik bir hava katar.' },
        { title: 'Takılı kırmızı piksel tespiti', description: 'İçinde kırmızı olmadığından takılı kırmızı pikseller hemen belli olur.' },
        { title: 'Soğuk ton kalibrasyonu', description: 'Monitörün soğuk ton doğruluğunu test etmek için faydalıdır.' },
      ],
    },
    magenta: {
      intro: 'Yeşil kanalı tamamen kapalı, saf macenta tam ekran. Takılı yeşil pikselleri bulmak için idealdir.',
      description: 'Takılı yeşil pikselleri bulmak için ücretsiz tam ekran macenta ekran.',
      uses: [
        { title: 'Kırmızı + mavi kanallar', description: 'Yeşili tamamen kapatıp kırmızı ve maviyi yakar.' },
        { title: 'Takılı yeşil piksel avcısı', description: 'Takılı kalan yeşil pikseller macenta zeminde beyaz parlar.' },
        { title: 'Neon video ışığı', description: 'Video projeleri için etkileyici neon renk kaynağı.' },
        { title: 'Renk homojenliği', description: 'Yüksek doygunlukta renk dağılımının dengesini kontrol eder.' },
      ],
    },
    gray: {
      intro: 'Homojenlik, bantlanma ve kirli ekran etkisini (DSE) kontrol etmek için nötr %50 tam ekran gri ekran.',
      description: 'Ekran homojenliği ve kirli ekran etkisi (DSE) için tam ekran gri ekran.',
      uses: [
        { title: 'Kirli ekran etkisi (DSE)', description: 'Orta gri, dikey çizgileri ve aydınlatma dalgalanmalarını ortaya serer.' },
        { title: 'Vinyet ve köşe kararması', description: 'Panel köşelerindeki ışık düşüşlerini açıkça gösterir.' },
        { title: 'Renk tarafsızlığı', description: 'İdeal bir monitörde gri ne kırmızıya ne de yeşile çalmalıdır.' },
        { title: 'Detaylı ekran temizliği', description: 'Parmak izlerini ve toz zerrelerini belirginleştirir.' },
      ],
    },
  },
}

export const colorPages = colorPagesEn

export function getColorPageContent(colorId: string, lang: LanguageCode): ColorPageContent {
  const langDict = COLOR_TRANSLATED_INTROS[lang]?.[colorId]
  if (langDict) return langDict
  return colorPagesEn[colorId] ?? {
    intro: `A solid fullscreen ${colorId} screen.`,
    description: `A fullscreen ${colorId} screen tool.`,
    uses: [
      { title: 'Screen testing', description: 'Inspect panel uniformity and subpixels with solid color.' },
      { title: 'Ambient lighting', description: 'Use as a soft colored light source for photos or calls.' },
      { title: 'Display inspection', description: 'Check for dust, smudges or backlight consistency.' },
    ],
  }
}
