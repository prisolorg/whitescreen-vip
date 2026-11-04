import type { ToolTranslations } from '../types'

export const es: ToolTranslations = {
  'screen-uniformity-test': {
    glance: {
      answer:
        'Una prueba de uniformidad de pantalla muestra fondos oscuros y grises a pantalla completa para ver si el brillo y el color son iguales en todo el panel. Revela fugas de luz en los bordes, nubes en pantallas LCD e IPS, el brillo IPS, el viñeteado y el efecto de pantalla sucia en televisores grandes.',
      features: ['Fondos negro, gris oscuro y gris medio', 'Niveles de brillo para ver nubes en una habitación oscura', 'Guía para distinguir brillo IPS de fugas de luz', 'Pantalla completa sin barras del navegador'],
      benefits: ['Detecta fallos del panel cubiertos por la garantía', 'Compara dos monitores o una sustitución con criterio', 'Unos dos minutos en una habitación oscura'],
    },
    steps: [
      'Baja la luz de la habitación y deja que la pantalla se caliente unos minutos.',
      'Pulsa F para pantalla completa y empieza por el gris más oscuro para buscar fugas en los bordes.',
      'Pasa por grises más claros y busca manchas, bandas o esquinas más oscuras.',
      'Activa la cuadrícula para comparar zonas concretas de la pantalla.',
    ],
    useCases: [
      { title: 'Fugas de luz', description: 'Los fondos casi negros revelan la luz que se escapa por los bordes de los paneles LCD.' },
      { title: 'Pantalla sucia', description: 'Los grises medios muestran bandas verticales o manchas en televisores al mover la cámara.' },
      { title: 'Viñeteado', description: 'Compara las esquinas con el centro para ver bordes más oscuros.' },
      { title: 'Lotería de paneles', description: 'Compara dos unidades del mismo modelo antes de quedarte con una.' },
    ],
    faqs: [
      { question: '¿Por qué mi pantalla se ve desigual en gris?', answer: 'Ningún panel es perfectamente uniforme. Pequeñas diferencias son normales; manchas grandes, bandas fuertes o esquinas brillantes pueden merecer una reclamación si el equipo es nuevo.' },
      { question: '¿Debo hacer la prueba a oscuras?', answer: 'Sí. La luz ambiente oculta las fugas y nubes sutiles, así que una habitación oscura hace la prueba mucho más reveladora.' },
      { question: '¿La cámara muestra lo que veo?', answer: 'Las cámaras de móvil suelen exagerar las fugas y nubes. Juzga con tus ojos y usa las fotos solo como referencia.' },
    ],
  },
  stopwatch: {
    glance: {
      answer:
        'Un cronómetro online mide el tiempo transcurrido entre el inicio y la parada, hasta la centésima de segundo, con números grandes a pantalla completa. Registra vueltas para correr, nadar, entrenar o hacer experimentos; el tiempo es preciso porque se mide con el reloj de tu dispositivo.',
      features: ['Iniciar, parar, vuelta y reiniciar', 'Precisión de centésimas de segundo', 'Lista de vueltas con tiempos parciales', 'Barra espaciadora y atajos de teclado'],
      benefits: ['Pantalla grande para gimnasios y aulas', 'Tiempos de vuelta precisos', 'Gratis, funciona sin conexión'],
    },
    steps: [
      'Pulsa Iniciar o la barra espaciadora para empezar.',
      'Pulsa Vuelta o L para guardar un parcial mientras sigue contando.',
      'Pulsa la barra espaciadora para pausar y R para reiniciar.',
      'Pulsa F para pantalla completa y Esc para salir.',
    ],
    useCases: [
      { title: 'Deporte y running', description: 'Controla tiempos por vuelta e intervalos.' },
      { title: 'Discursos', description: 'Cronometra charlas y ensayos con precisión.' },
      { title: 'Juegos y concursos', description: 'Mide las rondas en clase o en noches de juegos.' },
      { title: 'Laboratorio y cocina', description: 'Mide reacciones, tiempos de infusión o reposo.' },
    ],
    faqs: [
      { question: '¿Qué precisión tiene?', answer: 'Usa el reloj de alta resolución del navegador y muestra centésimas de segundo. La frecuencia de la pantalla puede retrasar unos milisegundos lo que ves.' },
      { question: '¿Se guardan las vueltas?', answer: 'Las vueltas siguen en la página hasta que reinicies o la cierres. Puedes copiarlas al portapapeles.' },
      { question: '¿Funciona sin conexión?', answer: 'Sí. Una vez cargada la página, el cronómetro funciona sin conexión.' },
    ],
  },
  'matrix-screensaver': {
    glance: {
      answer:
        'El salvapantallas Matrix muestra columnas de caracteres verdes que caen, la «lluvia digital» que hizo famosa la película The Matrix (1999). Funciona en el navegador a pantalla completa y puedes cambiar el color, la velocidad y el tamaño de los caracteres para un escritorio, una TV o un directo.',
      features: ['Katakana, números y símbolos que caen', 'Control de color, velocidad y tamaño', 'Pantalla completa con el cursor oculto', 'Fluido en pantallas de alta frecuencia'],
      benefits: ['Un aspecto icónico para pantallas en reposo y directos', 'Sin instalar salvapantallas en Windows o macOS', 'Gratis'],
    },
    steps: [
      'La lluvia empieza al momento en la vista previa.',
      'Ajusta velocidad, densidad y tamaño de letra, o elige otro color.',
      'Elige caracteres katakana, binarios o de estilo cyber.',
      'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.',
    ],
    useCases: [
      { title: 'Salvapantallas', description: 'Déjalo funcionando en un monitor inactivo.' },
      { title: 'Ambiente tecnológico', description: 'Fondo visual para directos, oficinas o eventos.' },
      { title: 'Fondos para vídeo', description: 'Graba un fondo «cyber» para tus vídeos.' },
      { title: 'Fiestas de disfraces', description: 'Ambienta una noche de ciencia ficción.' },
    ],
    faqs: [
      { question: '¿Qué caracteres usa la lluvia de Matrix?', answer: 'El efecto original usaba katakana de media anchura en espejo mezclado con números. Aquí puedes elegir ese estilo, binario o caracteres cyber.' },
      { question: '¿Puedo usarlo como salvapantallas real?', answer: 'Los navegadores no pueden instalar salvapantallas del sistema, pero puedes abrirlo a pantalla completa al levantarte. El bloqueo de suspensión mantiene la pantalla encendida.' },
      { question: '¿Ralentiza el ordenador?', answer: 'Es ligero. En equipos antiguos baja la densidad para una animación más fluida.' },
    ],
  },
  'dvd-screensaver': {
    glance: {
      answer:
        'El salvapantallas DVD es el clásico logo que rebota de los reproductores de DVD: cruza la pantalla, cambia de color cada vez que toca un borde y, de vez en cuando, entra justo en una esquina. Esta versión cuenta los golpes en esquina y te deja cambiar la velocidad y el tamaño del logo.',
      features: ['Cambio de color en cada rebote', 'Contador de esquinas con celebración', 'Control de velocidad y tamaño del logo', 'Pantalla completa en cualquier pantalla'],
      benefits: ['Nostálgico y extrañamente satisfactorio', 'Fondo genial para directos y salas de espera', 'Gratis'],
    },
    steps: [
      'El logo empieza a rebotar enseguida.',
      'Ajusta la velocidad y el tamaño del logo con los controles.',
      'Mira el contador de esquinas: cada esquina exacta se celebra.',
      'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.',
    ],
    useCases: [
      { title: 'Nostalgia', description: 'Revive el clásico de la sala de espera.' },
      { title: 'Pantalla en reposo', description: 'Un salvapantallas divertido para la TV o el monitor de la oficina.' },
      { title: 'Pausas en directo', description: 'Al público le encanta esperar el golpe en la esquina.' },
      { title: 'Ver en grupo', description: 'Apuesta con tus amigos cuándo dará en la esquina.' },
    ],
    faqs: [
      { question: '¿Llega a dar exactamente en la esquina?', answer: 'Sí. Cuándo y cada cuánto depende del tamaño de la pantalla, del logo y de la velocidad. El contador registra cada golpe exacto.' },
      { question: '¿Es el logo oficial de DVD?', answer: 'No. Usa una insignia genérica con el mismo espíritu y no está relacionada con DVD Format/Logo Licensing Corporation.' },
      { question: '¿Por qué cambia de color?', answer: 'Como el salvapantallas clásico, el logo elige un color nuevo cada vez que toca un borde y nunca repite el mismo dos veces seguidas.' },
    ],
  },
  'fake-windows-10-update': {
    glance: {
      answer:
        'Una pantalla falsa de actualización de Windows 10 imita la pantalla azul «Trabajando en las actualizaciones» con los puntos girando y un porcentaje que sube despacio. A pantalla completa parece que el PC se está actualizando: una broma clásica e inofensiva. Pulsa Esc para salir.',
      features: ['Puntos girando y porcentaje que sube', 'Velocidad de actualización ajustable', 'Pantalla completa con el cursor oculto', 'Sal en cualquier momento con Esc'],
      benefits: ['Broma de oficina convincente e inofensiva', 'Atrezo para vídeos y tutoriales', 'No se instala ni cambia nada'],
    },
    steps: [
      'Elige con el control de velocidad lo rápido que sube el porcentaje.',
      'Pulsa Pantalla completa o F para que la simulación llene la pantalla y oculte el navegador.',
      'Aléjate y deja que avance. Pulsa Pausa para que parezca atascada.',
      'Pulsa Esc para salir y revelar la broma.',
    ],
    useCases: [
      { title: 'Bromas en la oficina', description: 'Haz creer a un compañero que su PC se está actualizando y luego cuéntaselo.' },
      { title: 'Tomarte un descanso', description: 'Parece que estás ocupado cuando te levantas de la mesa.' },
      { title: 'Atrezo para cine y vídeo', description: 'Muestra una actualización de Windows 10 creíble en el rodaje.' },
      { title: 'Nostalgia', description: 'Recupera una pantalla clásica del sistema por diversión.' },
    ],
    faqs: [
      { question: '¿Es una actualización real o algo dañino?', answer: 'No. Es una simulación visual inofensiva en una pestaña normal. No cambia tu dispositivo, no instala nada ni pide datos. Pulsa Esc para salir cuando quieras.' },
      { question: '¿Está relacionada con Microsoft?', answer: 'No. Es una recreación independiente con fines de entretenimiento, sin relación ni patrocinio de Microsoft.' },
      { question: '¿Puedo controlar lo rápido que avanza?', answer: 'Sí. El control de velocidad marca lo rápido que sube el porcentaje, y Pausa lo detiene para que parezca atascada.' },
      { question: '¿Cómo salgo de la pantalla falsa?', answer: 'Pulsa Esc, o mueve el ratón o toca la pantalla para que aparezca el botón de cerrar. Cerrar la pestaña también sirve.' },
    ],
  },
  'ring-light': {
    glance: {
      answer:
        'Un aro de luz online muestra un anillo brillante en tu pantalla que ilumina tu cara de frente de forma uniforme, como el aro de luz de un fotógrafo. Ajusta el tamaño, el grosor, la calidez y el brillo del anillo y ponlo a pantalla completa para selfis, videollamadas, maquillaje o fotos de producto.',
      features: ['Tamaño y grosor del anillo ajustables', 'Temperatura de color de cálida a fría', 'Control de brillo y pantalla completa', 'Funciona en móviles, tabletas y portátiles'],
      benefits: ['Luz uniforme y sin sombras, gratis', 'Reflejos en los ojos como con un aro real', 'Usa cualquier pantalla libre como luz'],
    },
    steps: [
      'Abre la página en la pantalla que tienes delante (portátil, monitor o tableta) y sube su brillo.',
      'Ajusta el tamaño y el grosor del anillo; uno más grueso da más luz.',
      'Elige la temperatura de color o un tono para looks creativos.',
      'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.',
    ],
    useCases: [
      { title: 'Videollamadas', description: 'Luz uniforme y favorecedora sin comprar un aro de luz.' },
      { title: 'Selfis y retratos', description: 'Consigue el reflejo redondo clásico en los ojos.' },
      { title: 'Maquillaje', description: 'Mírate bien con luz cálida o de tipo día.' },
      { title: 'Streaming', description: 'Luz principal suave desde un monitor o tableta libre.' },
    ],
    faqs: [
      { question: '¿Una pantalla da tanta luz como un aro de verdad?', answer: 'No. Un aro LED real es mucho más potente. El de pantalla funciona mejor en una habitación con poca luz, con el brillo al máximo y cerca de la cara.' },
      { question: '¿Por qué un anillo y no toda la pantalla?', answer: 'Un anillo te ilumina desde todos los lados, reduce sombras bajo la nariz y los ojos y crea el reflejo redondo en los ojos. Activa la opción de rellenar el centro si necesitas toda la luz posible.' },
      { question: '¿Qué temperatura de color queda mejor?', answer: 'Entre 4500 y 5500 K se ve natural en casi todos los tonos de piel. Más cálida (3000 K) por la noche, más fría (6500 K) para igualar la luz del día.' },
    ],
  },
}
