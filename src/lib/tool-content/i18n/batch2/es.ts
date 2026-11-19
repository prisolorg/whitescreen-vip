import type { ToolTranslations } from '../types'

export const es: ToolTranslations = {
  'monitor-test': {
    glance: {
      answer:
        'Un test de monitor es un conjunto de patrones a pantalla completa que comprueba cómo muestra tu pantalla el color, el contraste, la nitidez y la gamma. Recorre degradados, niveles de negro y blanco, nitidez del texto y patrones de geometría para encontrar fallos o ajustar bien la imagen.',
      features: ['Patrones de degradado, gamma, contraste y nitidez', 'Escalas de nivel de negro y de blanco', 'Pruebas de geometría y claridad del texto', 'Atajos de teclado para pasar por todos los patrones'],
      benefits: ['Ajusta bien el brillo, el contraste y la nitidez', 'Revisa un monitor nuevo o usado en minutos', 'Funciona en cualquier navegador, también en TV'],
    },
    steps: [
      'Pon el monitor en su resolución nativa y quita el zoom del navegador (Ctrl/Cmd + 0).',
      'Pulsa F para pantalla completa y usa los botones de patrón o las flechas para cambiar.',
      'Busca bandas en los degradados, líneas rectas en las cuadrículas y nitidez o efecto moiré en los patrones finos.',
      'Ajusta el brillo, el contraste y la nitidez del monitor mientras miras cada patrón.',
    ],
    useCases: [
      { title: 'Primera configuración', description: 'Ajusta brillo, contraste y nitidez al estrenar un monitor.' },
      { title: 'Bandas de color', description: 'Los degradados suaves revelan saltos por poca profundidad de color.' },
      { title: 'Geometría y escalado', description: 'Las cuadrículas muestran imágenes estiradas, recortadas o borrosas.' },
      { title: 'Cable y entrada', description: 'Los patrones finos muestran si un cable o adaptador suaviza la imagen.' },
    ],
    faqs: [
      { question: '¿Un test de monitor online es tan bueno como un calibrador?', answer: 'No. Los patrones ayudan a juzgar y ajustar a ojo, pero una calibración de color precisa necesita un colorímetro.' },
      {
        question: '¿Por qué los patrones finos parpadean o muestran moiré?',
        answer: 'El zoom del navegador, el escalado del sistema o una resolución no nativa redimensionan los patrones de 1 píxel. Usa zoom al 100 % y la resolución nativa.',
      },
      {
        question: '¿Cómo debe verse el patrón de gamma?',
        answer: 'De lejos, las zonas rayadas y las lisas deberían tener un brillo parecido. Una gran diferencia indica que tu gamma se aleja del estándar 2,2.',
      },
    ],
  },
  'screen-resolution-test': {
    glance: {
      answer:
        'Un test de resolución de pantalla muestra la resolución en píxeles, el área visible del navegador, la proporción de píxeles y la profundidad de color. La resolución física es el tamaño CSS por la proporción de píxeles: un portátil 1920 × 1080 al 125 % de escala indica 1536 × 864 píxeles CSS.',
      features: ['Resolución de pantalla, de ventana y física', 'Proporción de píxeles y escala', 'Profundidad de color y orientación', 'Se actualiza al cambiar el tamaño o girar'],
      benefits: ['Confirma si de verdad usas 1080p, 1440p o 4K', 'Comprueba la escala de Windows o macOS', 'Al instante, sin instalar nada'],
    },
    steps: [
      'Abre la página en la pantalla que quieres comprobar: los datos se actualizan en vivo.',
      'Cambia el tamaño de la ventana o gira el dispositivo para ver cómo cambian los valores.',
      'Pulsa F para pantalla completa y ver el área visible completa.',
      'Mira el patrón de 1 píxel: con resolución nativa y zoom al 100 % debe verse como un gris fino y uniforme.',
    ],
    useCases: [
      { title: 'Conocer tu resolución', description: 'Encuentra rápido la resolución para fondos de pantalla o ajustes de juegos.' },
      { title: 'Diseño responsive', description: 'Los desarrolladores pueden ver el área visible y la proporción en dispositivos reales.' },
      { title: 'Problemas de escala', description: 'Confirma si la escala del sistema cambia la resolución efectiva.' },
      { title: 'Soporte técnico', description: 'Comparte datos exactos de la pantalla al informar de un error.' },
    ],
    faqs: [
      {
        question: '¿Por qué el tamaño es menor que la resolución de mi monitor?',
        answer: 'Los navegadores usan píxeles CSS. Con escala al 150 %, una pantalla de 3840 píxeles de ancho indica 2560. Multiplica por la proporción de píxeles para obtener los físicos.',
      },
      { question: '¿Qué es la proporción de píxeles?', answer: 'Es el número de píxeles físicos por píxel CSS. Un valor de 2 indica una pantalla de alta densidad, tipo Retina.' },
      { question: '¿El zoom del navegador cambia los valores?', answer: 'Sí. El zoom cambia el área visible y la proporción. Vuelve al 100 % para datos exactos.' },
    ],
  },
  'brown-noise-generator': {
    glance: {
      answer:
        'Un generador de ruido marrón reproduce un sonido grave y profundo cuya potencia baja mucho en las frecuencias altas, como una cascada o un viento fuerte. Es más suave que el ruido blanco, por eso muchas personas lo prefieren para dormir, concentrarse con TDAH y tapar ruidos graves como el tráfico o los ronquidos.',
      features: ['Ruido marrón (browniano) real, generado al momento', 'Filtros paso bajo y paso alto para el tono', 'Control de volumen y temporizador de sueño', 'Cambia a ruido blanco o rosa con un clic'],
      benefits: ['Sonido suave y grave para sesiones largas', 'Muy usado para concentrarse', 'Gratis y funciona sin conexión una vez cargado'],
    },
    steps: [
      'Pulsa Iniciar. No suena nada hasta que lo hagas.',
      'Ajusta el volumen; el ruido marrón parece más bajo que el blanco al mismo nivel, así que sube poco a poco.',
      'Añade un filtro paso bajo para un retumbo aún más grave, o uno paso alto para quitar los graves en altavoces pequeños.',
      'Elige un temporizador de sueño y un visual si quieres.',
      'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.',
    ],
    useCases: [
      { title: 'Concentración profunda', description: 'Muchas personas, también con TDAH, dicen que el ruido marrón les ayuda a centrarse.' },
      { title: 'Dormir', description: 'Su tono grave y suave se puede dejar puesto durante horas.' },
      { title: 'Tapar ruidos graves', description: 'Cubre el retumbo del tráfico, los pasos y el aire acondicionado.' },
      { title: 'Desconectar', description: 'Combínalo con una pantalla oscura por la noche.' },
    ],
    faqs: [
      {
        question: '¿En qué se diferencia del ruido blanco y rosa?',
        answer: 'El ruido marrón pierde potencia rápido al subir la frecuencia (unos 6 dB por octava), así que es el más grave de los tres. El rosa está en medio y el blanco es el más brillante.',
      },
      { question: '¿Por qué se llama ruido marrón?', answer: 'Por el movimiento browniano, el movimiento aleatorio de partículas, no por el color. También se llama ruido rojo.' },
      { question: '¿Por qué apenas lo oigo en el móvil?', answer: 'Los altavoces pequeños no reproducen bien los graves. Usa auriculares o altavoces más grandes, o añade un filtro paso alto y sube un poco el volumen.' },
    ],
  },
  'pink-noise-generator': {
    glance: {
      answer:
        'Un generador de ruido rosa reproduce un sonido cuya potencia baja por igual en cada octava, así suena equilibrado y más suave que el ruido blanco, como lluvia constante. Se usa para dormir, relajarse y estudiar, y los técnicos de sonido lo usan para comprobar el equilibrio de los altavoces.',
      features: ['Ruido rosa real generado en tu navegador', 'Filtro de tono, volumen en decibelios y temporizador', 'Onda o espectro en vivo', 'Control con teclado: espacio para reproducir o pausar'],
      benefits: ['Sonido natural, como lluvia, fácil para dormir', 'Señal de referencia para revisar altavoces', 'Gratis y con poca publicidad'],
    },
    steps: [
      'Pulsa Iniciar. El audio nunca empieza solo.',
      'Ajusta el volumen en decibelios.',
      'Usa el filtro paso bajo o paso alto y el control de corte para afinar el tono.',
      'Elige un temporizador de sueño y un visual si quieres.',
      'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.',
    ],
    useCases: [
      { title: 'Dormir', description: 'Una alternativa popular y menos áspera que el ruido blanco para toda la noche.' },
      { title: 'Estudiar', description: 'Un sonido de fondo equilibrado para largas sesiones de lectura.' },
      { title: 'Revisar altavoces', description: 'El ruido rosa es la señal estándar para escuchar el equilibrio de los altavoces.' },
      { title: 'Espacios tranquilos', description: 'Sonido de fondo suave para salas de espera y estudios.' },
    ],
    faqs: [
      { question: '¿Qué es el ruido rosa?', answer: 'El ruido rosa tiene la misma energía en cada octava, así que cada paso hacia los agudos suena algo más bajo que en el blanco. Suena más natural, como la lluvia.' },
      { question: '¿El ruido rosa ayuda a dormir?', answer: 'A muchas personas les relaja y algunos estudios pequeños sugieren que puede favorecer el sueño profundo, aunque los resultados varían.' },
      { question: '¿Sirve para probar altavoces?', answer: 'Sí, para una escucha rápida. Para medir una sala con precisión usa software de medición y un micrófono calibrado.' },
    ],
  },
  'broken-screen': {
    glance: {
      answer:
        'La broma de pantalla rota llena tu pantalla con una imagen realista de cristal roto: punto de impacto, grietas que se extienden y, si quieres, manchas de tinta del LCD, con sonido de cristal. Déjala en el móvil u ordenador de un amigo y revela la broma tocando cerrar o pulsando Esc.',
      features: ['Grietas realistas, distintas cada vez', 'Toca o haz clic para añadir más impactos', 'Efecto de daño del LCD y sonido de rotura', 'Fondos: fondo de pantalla, bloqueo o negro'],
      benefits: ['Una broma clásica e inofensiva que parece real', 'Funciona en móviles, tabletas y ordenadores', 'Sin apps, no cambia nada en el dispositivo'],
    },
    steps: [
      'Elige un fondo: fondo de pantalla, pantalla de bloqueo o negro.',
      'Toca o haz clic en cualquier punto para romper el cristal ahí. Cada toque añade otro impacto.',
      'Deja el sonido de rotura para más realismo, o desactívalo.',
      'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.',
    ],
    useCases: [
      { title: 'Bromas inofensivas', description: 'Un susto rápido a un amigo y luego la revelación.' },
      { title: 'Atrezo para vídeos', description: 'Muestra un móvil o monitor roto en un corto sin romper nada.' },
      { title: 'Día de los Inocentes', description: 'Una broma clásica de oficina, totalmente reversible.' },
      { title: 'Referencia de diseño', description: 'Estudia cómo se extienden las grietas para ilustración y efectos.' },
    ],
    faqs: [
      { question: '¿Puede dañar mi pantalla?', answer: 'No. Es solo una imagen dibujada en el navegador. Pulsa Esc, toca Borrar o cierra la pestaña para quitarla.' },
      {
        question: '¿Por qué parece cristal de verdad?',
        answer: 'Un impacto real deja un centro triturado, grietas largas en forma de rayos y anillos de grietas cortas entre ellas. El efecto dibuja las tres cosas, con brillos y sombras en cada grieta.',
      },
      { question: '¿Cómo hacer la broma con responsabilidad?', answer: 'Que sea breve, con alguien que se vaya a reír, nunca para conseguir dinero o datos, y revela la broma enseguida.' },
    ],
  },
  'countdown-timer': {
    glance: {
      answer:
        'Un temporizador de cuenta atrás cuenta desde el tiempo que elijas hasta cero con números grandes a pantalla completa y te avisa con un destello suave y un sonido opcional. Pon horas, minutos y segundos para clases, exámenes, reuniones, presentaciones, entrenamientos o cocina, y léelo desde el otro lado de la sala.',
      features: ['Números grandes a pantalla completa', 'Horas, minutos y segundos con atajos', 'Destello y sonido opcional al llegar a cero', 'Mantiene la hora exacta en pestañas de fondo'],
      benefits: ['Mantiene reuniones y clases a tiempo', 'Se lee desde el fondo de la sala', 'Gratis, sin app'],
    },
    steps: [
      'Elige un atajo como 1, 5 o 25 minutos, o escribe horas, minutos y segundos.',
      'Pulsa Iniciar o la barra espaciadora. Vuelve a pulsarla para pausar, o R para reiniciar.',
      'Activa el sonido si lo quieres: viene desactivado.',
      'Pulsa F para pantalla completa y que toda la sala lo vea. Pulsa Esc para salir.',
    ],
    useCases: [
      { title: 'En clase', description: 'Controla exámenes, actividades y descansos en el proyector.' },
      { title: 'Presentaciones', description: 'Mantén a los ponentes en horario con un temporizador visible.' },
      { title: 'Pomodoro', description: 'Haz sesiones de concentración de 25 minutos con descansos cortos.' },
      { title: 'Deporte y cocina', description: 'Un temporizador grande que se lee desde lejos.' },
    ],
    faqs: [
      { question: '¿Sigue funcionando en una pestaña de fondo?', answer: 'Sí. Se basa en la hora real, así que es preciso aunque el navegador ralentice las pestañas en segundo plano.' },
      { question: '¿Suena al terminar?', answer: 'Solo si activas el sonido. Si no, la pantalla destella suavemente cuando se acaba el tiempo.' },
      { question: '¿Cuál es la duración máxima?', answer: 'Puedes poner hasta 99 horas, 59 minutos y 59 segundos.' },
    ],
  },
}
