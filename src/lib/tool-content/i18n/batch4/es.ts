import type { LocalizedToolContent, ToolTranslations } from '../types'
import type { ToolFaq } from '../../types'

const EXIT: ToolFaq = { question: '¿Cómo salgo de la pantalla falsa?', answer: 'Pulsa Esc, o mueve el ratón o toca la pantalla para que aparezca el botón de cerrar. Cerrar la pestaña también sirve.' }
const brandFaq = (brand: string): ToolFaq => ({ question: `¿Está relacionada con ${brand}?`, answer: `No. Es una recreación independiente con fines de entretenimiento, sin relación ni patrocinio de ${brand}. Los nombres de productos pertenecen a sus dueños.` })

function update(name: string, brand: string, glance: LocalizedToolContent['glance'], extra: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Elige con el control de velocidad lo rápido que sube el porcentaje.',
      'Pulsa Pantalla completa o F para que la simulación llene la pantalla y oculte el navegador.',
      'Aléjate y deja que avance. Pulsa Pausa para que parezca atascada.',
      'Pulsa Esc para salir y revelar la broma.',
    ],
    useCases: [
      { title: 'Bromas en la oficina', description: 'Haz creer a un compañero que su equipo se está actualizando y luego cuéntaselo.' },
      { title: 'Tomarte un descanso', description: 'Parece que estás ocupado cuando te levantas de la mesa.' },
      { title: 'Atrezo para cine y vídeo', description: `Muestra una actualización de ${name} creíble en el rodaje.` },
      { title: 'Nostalgia', description: 'Recupera una pantalla clásica del sistema por diversión.' },
    ],
    faqs: [
      { question: '¿Es una actualización real o algo dañino?', answer: 'No. Es una simulación visual inofensiva en una pestaña normal. No cambia tu dispositivo, no instala nada ni pide datos. Pulsa Esc para salir cuando quieras.' },
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
      'Edita el título de la reunión que aparece arriba.',
      'Si quieres, activa la vista previa de tu cámara: se queda en tu dispositivo y nunca se graba ni se envía.',
      'Pulsa F o Pantalla completa para una llamada convincente a toda pantalla.',
      'Pulsa Esc para salir cuando quieras.',
    ],
    useCases: [
      { title: 'Atrezo para vídeo', description: 'Graba una escena con una reunión sin una llamada real.' },
      { title: 'Maquetas de interfaz', description: 'Usa la disposición de una llamada en presentaciones o tutoriales.' },
      { title: 'Bromas inofensivas', description: 'Finge que estás «en una reunión» para reírte un rato.' },
      { title: 'Practicar', description: 'Ensaya cómo sales en cámara antes de una llamada real.' },
    ],
    faqs: [
      { question: '¿Es una llamada real o algo dañino?', answer: 'No. Es una simulación visual inofensiva en una pestaña normal. No se conecta a ningún servicio, no instala nada ni pide datos.' },
      brandFaq(brand),
      { question: '¿Usa mi cámara o micrófono?', answer: 'Solo si activas la vista previa de la cámara. El vídeo se queda en tu dispositivo y nunca se graba ni se sube. El micrófono nunca se usa.' },
      EXIT,
      ...(extra ? [extra] : []),
    ],
  }
}

export const es: ToolTranslations = {
  'oled-gray-test': {
    glance: {
      answer: 'Una prueba de gris OLED muestra grises muy oscuros cerca del negro, donde los paneles OLED suelen fallar. Revela bandas cerca del negro, mura (manchas), líneas verticales y sombreado desigual que el contenido brillante oculta en televisores, monitores y móviles OLED.',
      features: ['Grises casi negros del 1 % al 20 %, más una rampa', 'Fondos a pantalla completa sin superposiciones', 'Paso manual para comparar niveles con calma', 'Funciona en móviles, TV y monitores OLED'],
      benefits: ['Revisa un OLED nuevo dentro del plazo de devolución', 'Encuentra bandas antes de calibrar', 'Gratis y rápido'],
    },
    steps: ['Apaga las luces y pon la pantalla a su brillo habitual.', 'Pulsa F para pantalla completa y empieza por el 5 %.', 'Baja al 1–3 % para ver dónde el panel empieza a aplastar los negros o a mancharse.', 'Prueba la rampa de grises para buscar saltos visibles entre tonos vecinos.'],
    useCases: [
      { title: 'Uniformidad cerca del negro', description: 'Los grises muy oscuros muestran manchas y líneas verticales en paneles OLED.' },
      { title: 'Negros aplastados', description: 'Comprueba si los tonos más bajos se ven o se funden con el negro.' },
      { title: 'Parpadeo con poco brillo', description: 'Algunos paneles parpadean con grises muy bajos y poco brillo.' },
      { title: 'Comparar unidades', description: 'Compara dos móviles o TV lado a lado con los mismos ajustes.' },
    ],
    faqs: [
      { question: '¿Por qué los grises casi negros se ven con manchas en OLED?', answer: 'Cada píxel OLED se controla por separado y pequeñas diferencias se notan con muy poca luz. Cierta irregularidad es normal en todos los OLED.' },
      { question: '¿Sirve para pantallas LCD?', answer: 'Sí, pero en LCD los problemas cerca del negro suelen ser fugas de luz o nubes. Para eso usa la prueba de uniformidad.' },
      { question: '¿Por qué no veo el paso del 1 %?', answer: 'Muchas pantallas y modos de imagen aplastan los tonos más oscuros. Sube un poco el brillo o prueba otro modo de imagen.' },
    ],
  },
  'oled-burn-in-test': {
    glance: {
      answer: 'Una prueba de quemado OLED muestra colores sólidos a pantalla completa para que se vean logos, barras de estado, botones o marcadores de juegos marcados por el desgaste desigual de los píxeles. El quemado es permanente; la retención de imagen es temporal y se borra. Ambos se ven mejor en gris, rojo y azul.',
      features: ['Fondos gris, rojo, verde, azul y blanco', 'Flechas para cambiar de color rápido', 'Consejos para distinguir quemado y retención', 'Pensado para móviles, TV y monitores OLED'],
      benefits: ['Revisa un móvil o TV OLED usado antes de comprar', 'Detecta la retención a tiempo', 'Sin app ni descargas'],
    },
    steps: ['Pulsa F para pantalla completa y empieza con un gris medio; luego prueba rojo, verde, azul y blanco.', 'Busca formas tenues como barras de tareas, logos, teclados o logos de canales.', 'Usa el cambio automático para rotar colores si buscas retención temporal.', 'Si las formas se borran en unos minutos, era retención temporal y no quemado.'],
    useCases: [
      { title: 'Comprar un OLED usado', description: 'Revisa un móvil o TV de segunda mano en busca de imágenes fantasma.' },
      { title: 'Marcadores de juegos', description: 'Busca barras de vida o minimapas tras sesiones largas.' },
      { title: 'Retención o quemado', description: 'Ayuda a distinguir la retención temporal del quemado permanente.' },
      { title: 'Garantía', description: 'Fotografía el quemado sobre un color sólido para el soporte técnico.' },
    ],
    faqs: [
      { question: '¿Esta herramienta arregla el quemado?', answer: 'No. El quemado permanente es desgaste desigual de los píxeles y una web no puede revertirlo. Usa la función de refresco de píxeles de tu pantalla y sigue las indicaciones del fabricante.' },
      { question: '¿Qué diferencia hay entre retención y quemado?', answer: 'La retención es temporal y desaparece tras mostrar otro contenido. El quemado es permanente y sigue visible en colores sólidos.' },
      { question: '¿Qué color muestra mejor el quemado?', answer: 'El gris medio y el rojo suelen mostrarlo con más claridad, pero revisa todos los colores porque el desgaste varía por subpíxel.' },
    ],
  },
  'screen-burn-in-test': {
    glance: {
      answer: 'Una prueba de quemado de pantalla te deja revisar cualquier pantalla en busca de imágenes fantasma y luego ejecutar un reparador que recorre colores y ruido. La retención temporal suele desaparecer tras 10 a 30 minutos de reparador; el quemado permanente por píxeles desgastados no se arregla con software.',
      features: ['Modo revisión con colores sólidos y flechas', 'Modo reparador: barrido, ciclo de colores y ruido', 'Temporizador que detiene el reparador', 'Para pantallas OLED, plasma y LCD'],
      benefits: ['Borra la retención temporal sin apps', 'Distingue retención de quemado', 'Gratis y seguro para tu pantalla'],
    },
    steps: ['Sube el brillo y pon pantalla completa en una habitación con poca luz.', 'En modo revisión, usa las flechas o los botones para pasar cada color. El gris al 50 % muestra mejor el quemado.', 'Si ves formas, cambia al reparador, elige el barrido blanco (o un patrón con destellos si no te molestan) y déjalo 10–30 minutos.', 'Vuelve a revisar. Las formas que siguen tras varias pasadas suelen ser quemado permanente.'],
    useCases: [
      { title: 'Comprar una pantalla usada', description: 'Detecta logos o barras quemadas antes de pagar.' },
      { title: 'Tras uso estático', description: 'Revisa monitores que mostraron paneles, rótulos o juegos durante horas.' },
      { title: 'Borrar la retención', description: 'Usa el reparador cuando queda una imagen fantasma.' },
      { title: 'Garantía', description: 'Fotografía el quemado sobre gris para el soporte.' },
    ],
    faqs: [
      { question: '¿Qué diferencia hay entre retención y quemado?', answer: 'La retención es temporal y se borra tras minutos u horas de contenido variado. El quemado es desgaste permanente de los píxeles.' },
      { question: '¿El reparador arregla el quemado?', answer: 'Ayuda con la retención temporal. El quemado permanente en OLED es desgaste desigual que ningún patrón deshace; el refresco de píxeles de tu TV o monitor es la mejor opción.' },
      { question: '¿Qué color muestra mejor el quemado?', answer: 'Un gris medio u oscuro suele mostrarlo mejor, seguido del rojo, verde y azul.' },
    ],
  },
  'monitor-ghosting-test': {
    glance: {
      answer: 'Una prueba de ghosting mueve objetos por la pantalla para ver las estelas que deja una respuesta lenta de los píxeles. Las copias tenues detrás del objeto son ghosting; los halos brillantes o invertidos son exceso de overdrive. Úsala para elegir el mejor ajuste de overdrive.',
      features: ['Tres carriles en movimiento con velocidad ajustable', 'Fondos claros y oscuros para distintas transiciones', 'Cuadrícula de referencia para medir la estela', 'Se adapta a la frecuencia real de tu pantalla'],
      benefits: ['Elige el mejor overdrive para jugar', 'Compara monitores antes de comprar o devolver', 'Alternativa gratis a las pruebas con cámara'],
    },
    steps: ['Pon el monitor a su frecuencia más alta y activa la pantalla completa.', 'Sigue el objetivo con la vista. Busca estelas detrás y halos alrededor de los bordes.', 'Cambia la velocidad y prueba cada ajuste de overdrive o tiempo de respuesta del menú del monitor.', 'Pausa para ver un fotograma fijo; el objetivo debe verse nítido.'],
    useCases: [
      { title: 'Ajustar el overdrive', description: 'Elige el ajuste con la estela más corta y sin ghosting inverso.' },
      { title: 'Manchas negras en VA', description: 'El carril oscuro muestra la estela morada típica de los paneles VA.' },
      { title: 'Comparar monitores', description: 'Usa la misma velocidad en dos pantallas lado a lado.' },
      { title: 'Revisar una compra', description: 'Comprueba que el movimiento se ve como prometen.' },
    ],
    faqs: [
      { question: '¿Qué es el ghosting?', answer: 'Una estela tenue detrás de objetos en movimiento, porque los píxeles no cambian de color a tiempo para el siguiente fotograma.' },
      { question: '¿Qué es el ghosting inverso?', answer: 'Un halo brillante o de color alrededor del objeto, porque el overdrive empuja los píxeles más allá de su color. Baja el overdrive para corregirlo.' },
      { question: '¿Por qué el objetivo se ve borroso sin ghosting?', answer: 'Es el desenfoque de retención: tus ojos siguen el objeto mientras cada fotograma está quieto. Más hercios o un modo de luz estroboscópica lo reducen.' },
    ],
  },
  'frame-rate-test': {
    glance: {
      answer: 'Una prueba de FPS muestra el mismo movimiento a distintos fotogramas por segundo, lado a lado: 15, 24, 30, 60 y el máximo de tu pantalla. Hace visible la diferencia entre movimiento a saltos y fluido, y explica por qué las películas a 24 FPS y los juegos a 60 FPS se sienten tan distintos.',
      features: ['Cinco carriles a 15, 24, 30, 60 FPS y máximo', 'Velocidad ajustable para exagerar o suavizar', 'Muestra tu frecuencia máxima medida', 'Pausa y pantalla completa'],
      benefits: ['Ve lo que aporta un monitor de alta frecuencia', 'Explica los FPS a alumnos o espectadores', 'Funciona en cualquier navegador moderno'],
    },
    steps: ['Mira cada carril; todos se mueven a la misma velocidad.', 'Sube la velocidad para ver mejor los tirones.', 'Compara el carril de 60 FPS con el máximo en una pantalla de alta frecuencia.', 'Pulsa F o toca dos veces para pantalla completa, y Esc para salir.'],
    useCases: [
      { title: 'Ajustes de juegos', description: 'Decide si compensa más FPS a cambio de menos gráficos.' },
      { title: 'Producción de vídeo', description: 'Entiende por qué el cine usa 24 FPS y el deporte 50 o 60.' },
      { title: 'Enseñar a amigos', description: 'Zanja el debate de «el ojo no ve más de 30 FPS».' },
      { title: 'Comprar pantalla', description: 'Ve lo que añade una pantalla de 120 o 144 Hz.' },
    ],
    faqs: [
      { question: '¿Por qué el carril máximo parece de 60 FPS?', answer: 'Tu pantalla muestra como mucho un fotograma por refresco. En una pantalla de 60 Hz, el carril de 60 y el máximo se ven iguales.' },
      { question: '¿Por qué 24 FPS se ve a saltos aquí y bien en el cine?', answer: 'Las cámaras de cine graban desenfoque de movimiento en cada fotograma, que suaviza el movimiento. Esta prueba usa fotogramas nítidos.' },
      { question: '¿Cuántos FPS necesito para jugar?', answer: 'Al menos 60 FPS se sienten fluidos en la mayoría de juegos; los competitivos buscan igualar un monitor de 144 Hz o más.' },
    ],
  },
  'screen-color-test': {
    glance: {
      answer: 'Una prueba de color de pantalla muestra barras de color, rampas RGB y patrones de saturación para valorar si tu pantalla reproduce bien el color. Busca bandas en los degradados, altas luces recortadas, tonos que faltan y dominantes de color para decidir si debes ajustar la imagen.',
      features: ['Barras de color tipo SMPTE', 'Rampas de rojo, verde, azul y gris', 'Patrones de saturación y tonos de piel', 'Pantalla completa con cambio por teclado'],
      benefits: ['Detecta bandas y dominantes rápido', 'Compara modos de imagen', 'Gratis, sin colorímetro'],
    },
    steps: ['Usa el modo de imagen por defecto o calibrado.', 'Pulsa F para pantalla completa y cambia de patrón con los botones o las flechas.', 'En las rampas, busca transiciones suaves sin saltos ni recortes en la zona brillante.', 'Compara el mismo patrón en otra pantalla para valorar la precisión.'],
    useCases: [
      { title: 'Detectar dominantes', description: 'Los grises y blancos deben verse neutros, sin tono rosa ni verde.' },
      { title: 'Recorte de altas luces', description: 'Comprueba si los pasos más brillantes de cada canal se distinguen.' },
      { title: 'Bandas', description: 'Las rampas revelan escalones de paneles de 6 bits o procesado fuerte.' },
      { title: 'Comparación', description: 'Compara un portátil y un monitor externo.' },
    ],
    faqs: [
      { question: '¿Puedo calibrar mi monitor con esto?', answer: 'Puedes hacer ajustes aproximados a ojo, pero una calibración real necesita un colorímetro y su software.' },
      { question: '¿Por qué mis rampas muestran escalones?', answer: 'Suelen indicar poca profundidad de color en el panel o su procesado. Los modos nocturnos y algunos modos de imagen también causan bandas.' },
      { question: '¿Por qué el color cambia entre mi móvil y mi monitor?', answer: 'Las pantallas difieren en gama, punto blanco y procesado. Algunas además ajustan el color según la luz ambiente.' },
    ],
  },
  'no-signal-screen': {
    glance: {
      answer: 'Una pantalla «Sin señal» muestra el mensaje típico de un televisor o monitor que no recibe nada por HDMI o cable. A pantalla completa, con barras de color y un recuadro que se mueve, es una broma convincente, un atrezo para rodajes o una pantalla de espera.',
      features: ['Barras de color clásicas o fondo azul', 'Recuadro «Sin señal» que se desplaza como en una TV real', 'Tono de prueba de 1 kHz opcional y nombre de entrada editable', 'Pantalla completa con el cursor oculto'],
      benefits: ['Broma fácil e inofensiva', 'Atrezo para cine, salas de escape y decorados', 'Funciona en Smart TV desde el navegador'],
    },
    steps: ['Elige un estilo: barras de color, pantalla negra con mensaje que rebota o pantalla azul de entrada.', 'Edita el mensaje y el nombre de la entrada, como «HDMI 1».', 'Activa si quieres el tono de prueba de 1 kHz: empieza silenciado y solo suena tras hacer clic.', 'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.'],
    useCases: [
      { title: 'Atrezo de cine y foto', description: 'Ambienta un decorado con una TV desconectada creíble.' },
      { title: 'Pausas en directo', description: 'Usa una carta de «sin señal» mientras descansas.' },
      { title: 'Estética retro', description: 'Añade un aire de televisión antigua a vídeos o presentaciones.' },
      { title: 'Bromas inofensivas', description: 'Haz que una pantalla parezca desconectada y revélalo después.' },
    ],
    faqs: [
      { question: '¿Cómo se llaman las barras de colores?', answer: 'Son las barras de color SMPTE, una carta de ajuste usada para calibrar color y brillo en televisores y equipos de vídeo.' },
      { question: '¿Mi monitor perderá la señal de verdad?', answer: 'No. Es una página web que solo parece una pantalla sin señal. Tu pantalla sigue funcionando con normalidad.' },
      { question: '¿Cómo salgo?', answer: 'Pulsa Esc, o mueve el ratón y haz clic en el botón de cerrar de la esquina.' },
    ],
  },
  'hacker-typer': {
    glance: {
      answer: 'Hacker Typer convierte cualquier tecleo en código realista en pantalla, así cualquiera parece un hacker de película. Pulsa teclas al azar y aparecen líneas de código; activa avisos de «Acceso concedido» o «Acceso denegado» para completar la escena en bromas, vídeos o para reírte.',
      features: ['Código real que sale al aporrear teclas', 'Avisos de acceso concedido y denegado', 'Velocidad y color del texto ajustables', 'Aspecto de terminal a pantalla completa'],
      benefits: ['Escena hacker al instante para vídeos y bromas', 'Una forma divertida de acercar a los niños al código', 'Gratis, sin instalar nada'],
    },
    steps: ['Haz clic en el terminal y escribe lo que sea, o toca la pantalla en el móvil.', 'Cambia la velocidad para decidir cuántos caracteres salen por tecla.', 'Pulsa Alt tres veces para «ACCESS GRANTED» o Bloq Mayús tres veces para «ACCESS DENIED».', 'Usa el botón Pantalla completa o F11 para el efecto completo, y Esc para salir.'],
    useCases: [
      { title: 'Impresionar a amigos', description: 'Parece un genio mientras tecleas sin sentido.' },
      { title: 'Cine y streaming', description: 'Genera imágenes de «hackeo» convincentes para vídeos.' },
      { title: 'En clase', description: 'Una forma divertida de despertar interés por la programación.' },
      { title: 'Fondo para fiestas', description: 'Déjalo en una pantalla libre en un evento tecnológico.' },
    ],
    faqs: [
      { question: '¿Hacker Typer hackea algo de verdad?', answer: 'No. Solo muestra texto escrito de antemano e inofensivo. No ejecuta comandos, no accede a redes ni toca tus archivos.' },
      { question: '¿Por qué la tecla F no activa la pantalla completa aquí?', answer: 'En esta herramienta cada tecla escribe código, así que usa el botón de pantalla completa.' },
      { question: '¿Funciona en el móvil?', answer: 'Sí. Toca el terminal repetidamente para que salga más código.' },
    ],
  },
  'hacked-screen': {
    glance: {
      answer: 'El simulador de pantalla hackeada muestra un falso aviso de «tu sistema ha sido hackeado» con texto con fallos, registros que corren, una barra de progreso y una cuenta atrás. Es una broma inofensiva: no se accede ni se cambia nada, y al acabar la cuenta un mensaje revela que era broma.',
      features: ['Estilos alerta roja y terminal verde', 'Titular, registros y cuenta atrás personalizables', 'Sirena opcional', 'Termina con un mensaje claro de «es broma»'],
      benefits: ['Broma inofensiva que parece dramática', 'Atrezo para cine, directos y salas de escape', 'Funciona sin conexión en el navegador'],
    },
    steps: ['Elige un estilo (alerta roja o terminal verde) y el texto a mostrar.', 'Activa o desactiva la sirena; solo suena cuando la inicias.', 'Pon pantalla completa y deja el dispositivo para que tu amigo lo encuentre.', 'Pulsa Esc o mueve el ratón para mostrar el botón de cerrar.'],
    useCases: [
      { title: 'Bromas', description: 'Un susto corto para un amigo que luego se reirá.' },
      { title: 'Cine y salas de escape', description: 'Una pantalla de atrezo de «te han hackeado» convincente.' },
      { title: 'Concienciación de seguridad', description: 'Enseña cómo es el scareware para que la gente aprenda a ignorarlo.' },
      { title: 'Directos y vídeos', description: 'Un interludio dramático o momento de reacción.' },
    ],
    faqs: [
      { question: '¿Hackea o daña mi dispositivo?', answer: 'No. Es texto y animación en una pestaña normal. No ejecuta comandos, no lee archivos ni se conecta a nada.' },
      { question: '¿Qué hago si una web real dice que me han hackeado?', answer: 'Cierra la pestaña. Las herramientas de seguridad reales nunca piden llamar a un número ni pagar para desbloquear el dispositivo; esas ventanas son estafas.' },
      { question: '¿Cómo salgo?', answer: 'Pulsa Esc, o mueve el ratón o toca la pantalla para mostrar el botón de cerrar. Cerrar la pestaña también sirve.' },
    ],
  },
  'zoom-lighting': {
    glance: {
      answer: 'La luz para Zoom convierte tu pantalla en una fuente de luz suave para videollamadas. Elige una temperatura de color de cálida (unos 2700 K) a luz de día (6500 K), ajusta el brillo y llena la pantalla o usa un marco de luz alrededor de tu ventana de Zoom, Google Meet o Microsoft Teams.',
      features: ['Temperatura de color en Kelvin con ajustes rápidos', 'Pantalla completa o marco alrededor de la llamada', 'Brillo y color personalizado', 'Funciona en un segundo monitor o tableta'],
      benefits: ['Cara más iluminada y uniforme sin comprar un foco', 'Luz cálida que favorece la piel', 'Gratis y al instante'],
    },
    steps: ['Abre esta página en un segundo monitor o junto a la ventana de la llamada.', 'Ajusta la temperatura de color y el brillo. Sube el brillo de la pantalla para más luz.', 'Elige luz completa para el máximo brillo, o marco para dejar una ventana oscura en el centro para la llamada.', 'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.'],
    useCases: [
      { title: 'Videollamadas', description: 'Ilumina y empareja tu cara en habitaciones oscuras.' },
      { title: 'Streaming', description: 'Una luz principal suave desde un monitor o tableta libre.' },
      { title: 'Selfis', description: 'Usa un portátil o tableta como luz rápida y uniforme.' },
      { title: 'Maquillaje', description: 'Revisa el maquillaje con luz cálida de tarde o de día.' },
    ],
    faqs: [
      { question: '¿Qué temperatura de color uso?', answer: 'La de la habitación. Unos 3000 K para estancias con lámparas por la noche, 4000–4500 K es neutra y 5500–6500 K iguala la luz de una ventana.' },
      { question: '¿Cambia mi cámara?', answer: 'No. Solo te ilumina la cara. Puedes seguir usando el ajuste de poca luz de tu app de reuniones.' },
      { question: '¿Pondrá mi pantalla más brillante de lo normal?', answer: 'No. Usa tu brillo actual; sube el brillo de la pantalla para tener más luz.' },
    ],
  },
  'visual-noise': {
    glance: {
      answer: 'El ruido visual llena la pantalla de patrones animados que fluyen con suavidad: niebla suave, plasma de colores y grano fino. Se usa como fondo para vídeos y directos, como referencia de texturas de diseño y como imagen tranquila para relajarse.',
      features: ['Estilos niebla, plasma y grano fino', 'Escala, velocidad y paleta de color', 'Pausa para congelar un fotograma', 'Empieza en pausa si prefieres menos movimiento'],
      benefits: ['Fondos en movimiento tranquilos para vídeos y directos', 'Referencia de texturas para diseño', 'Gratis y ligero'],
    },
    steps: ['Elige un estilo como niebla, plasma o grano fino.', 'Ajusta escala, velocidad y paleta de color.', 'Pausa la animación para congelar un fotograma que te guste.', 'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.'],
    useCases: [
      { title: 'Imagen ambiental', description: 'Movimiento suave en una TV o monitor de fondo.' },
      { title: 'Texturas de diseño', description: 'Referencia para texturas de grano y degradado.' },
      { title: 'Fondos para VJ', description: 'Visuales generativos sencillos para eventos.' },
      { title: 'Relajación', description: 'Niebla lenta para desconectar.' },
    ],
    faqs: [
      { question: '¿Es lo mismo que la estática de TV?', answer: 'No. La estática es aleatoria en cada píxel y fotograma. Estos patrones usan ruido suavizado que fluye despacio.' },
      { question: '¿Gasta mucha batería?', answer: 'Funciona con la gráfica. Baja la velocidad o páusalo para ahorrar energía en portátiles.' },
      { question: '¿Respeta la preferencia de menos movimiento?', answer: 'Sí. Si tu sistema prefiere reducir el movimiento, la animación empieza en pausa.' },
    ],
  },
  'color-cycle': {
    glance: {
      answer: 'Una pantalla que cambia de color recorre suavemente los colores del arcoíris. Ajusta la velocidad y el brillo para luces de fiesta, luz ambiental, relajarte o comprobar rápido que tu pantalla muestra cada tono sin bandas.',
      features: ['Arcoíris suave o modo por pasos', 'Control de velocidad y brillo', 'Pantalla completa con el cursor oculto', 'Respeta la preferencia de menos movimiento'],
      benefits: ['Luz de fiesta o ambiente al instante', 'Comprueba transiciones de color suaves', 'Gratis en cualquier dispositivo'],
    },
    steps: ['Elige el arcoíris suave o un ciclo por pasos entre colores.', 'Ajusta la velocidad con el control.', 'Pulsa la barra espaciadora para pausar y seguir.', 'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.'],
    useCases: [
      { title: 'Luz ambiental', description: 'Un brillo que cambia despacio para fiestas o relajarte.' },
      { title: 'Píxeles atascados', description: 'A veces se recomienda alternar colores rápido para píxeles atascados, sin garantías.' },
      { title: 'Ambiente en directo', description: 'Una luz de fondo cambiante detrás de ti en cámara.' },
      { title: 'Luz nocturna infantil', description: 'Una luz suave que cambia despacio con poco brillo.' },
    ],
    faqs: [
      { question: '¿El ciclo de colores arregla píxeles atascados?', answer: 'A veces cambiar de color rápido ayuda a que un subpíxel atascado vuelva a responder, pero no está garantizado y no arregla píxeles muertos.' },
      { question: '¿Es seguro el ciclo rápido?', answer: 'Los destellos rápidos pueden afectar a personas con epilepsia fotosensible. La velocidad está limitada, empieza despacio y se respeta la preferencia de menos movimiento.' },
      { question: '¿Puedo pausar en un color que me guste?', answer: 'Sí. Pulsa la barra espaciadora o el botón de pausa.' },
    ],
  },
  'gradient-screen': {
    glance: {
      answer: 'Una pantalla de degradado llena tu pantalla con una mezcla suave entre los colores que elijas. Ajusta colores, ángulo y tipo, úsala como luz ambiental o fondo de pantalla, revisa si tu pantalla muestra bandas y descarga el degradado como imagen.',
      features: ['Degradados lineales y radiales', 'Cualquier color y ángulo', 'Descarga en PNG de alta resolución', 'Pantalla completa'],
      benefits: ['Fondos de pantalla en segundos', 'Buena prueba de bandas para monitores', 'Gratis, sin programas de diseño'],
    },
    steps: ['Elige un ajuste predefinido o tus propios colores.', 'Cambia entre lineal y radial y ajusta el ángulo.', 'Activa la animación para un degradado que se mueve despacio.', 'Pulsa F para pantalla completa o descarga el degradado en PNG.'],
    useCases: [
      { title: 'Fondos de pantalla', description: 'Crea un fondo de degradado a cualquier resolución.' },
      { title: 'Luz ambiental', description: 'Un brillo suave de dos tonos cansa menos que un color sólido.' },
      { title: 'Prueba de bandas', description: 'Los degradados suaves revelan bandas en paneles de poca profundidad.' },
      { title: 'Fondos', description: 'Fondos rápidos para presentaciones y vídeos.' },
    ],
    faqs: [
      { question: '¿Por qué mi degradado muestra rayas?', answer: 'Son bandas, causadas por la poca profundidad de color del panel o la compresión. Es un límite de la pantalla, no un fallo del degradado.' },
      { question: '¿Puedo descargarlo?', answer: 'Sí. Elige una resolución y descarga un PNG creado en tu navegador.' },
      { question: '¿Puedo usar tres colores?', answer: 'Sí. Activa el color central para añadir un tercer tono.' },
    ],
  },
  'flip-clock-screensaver': {
    glance: {
      answer: 'Un salvapantallas de reloj de tarjetas muestra la hora en grandes dígitos que se voltean al pasar cada minuto, como un despertador retro. Elige formato de 12 o 24 horas, muestra segundos y fecha, y ponlo a pantalla completa en un monitor libre, una tableta o una TV.',
      features: ['Dígitos animados de tarjetas', 'Formato 12 y 24 horas con segundos y fecha', 'Temas claro y oscuro', 'Mantiene la pantalla encendida a pantalla completa'],
      benefits: ['Convierte una tableta vieja en reloj de escritorio', 'Hora grande y legible desde lejos', 'Gratis, sin app'],
    },
    steps: ['Tu hora local aparece automáticamente.', 'Cambia el formato 12/24 h, los segundos y la fecha. Cada dígito se voltea como un reloj de tarjetas real.', 'Elige el tema que mejor quede en tu habitación.', 'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.'],
    useCases: [
      { title: 'Reloj de escritorio', description: 'Convierte una tableta o monitor en reloj de mesa o mesilla.' },
      { title: 'Presentaciones', description: 'Muestra la hora con claridad en eventos y pausas.' },
      { title: 'Concentración', description: 'Un reloj sencillo y tranquilo a la vista mientras trabajas.' },
      { title: 'Streaming', description: 'Un fondo elegante de «empezamos pronto».' },
    ],
    faqs: [
      { question: '¿De dónde sale la hora?', answer: 'Del reloj y la zona horaria de tu dispositivo, así que funciona sin conexión una vez cargado.' },
      { question: '¿Se quedará encendida la pantalla?', answer: 'A pantalla completa, en navegadores compatibles, un bloqueo de suspensión mantiene la pantalla encendida.' },
      { question: '¿Puedo quitar la animación?', answer: 'Sí. Si tu sistema prefiere menos movimiento, los dígitos cambian sin voltearse.' },
    ],
  },
  'motivational-quote-screensaver': {
    glance: {
      answer: 'Un salvapantallas de frases motivadoras muestra una cita inspiradora nueva cada pocos segundos en letra grande y legible, con reloj opcional. Va bien en recepciones, aulas, gimnasios y pantallas de casa donde la gente mira de pasada.',
      features: ['Citas de Séneca, Marco Aurelio, Emerson y más', 'Velocidad, fondos y orden aleatorio', 'Reloj opcional', 'Pantalla completa sin que se apague'],
      benefits: ['Una pantalla positiva para espacios compartidos', 'Sin configuración en Smart TV', 'Gratis'],
    },
    steps: ['Aparece una cita al azar al momento.', 'Elige un fondo y cuántos segundos dura cada cita.', 'Usa las flechas o las teclas ← → para cambiar de cita; la barra espaciadora pausa.', 'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.'],
    useCases: [
      { title: 'Oficinas y recepciones', description: 'Un bucle tranquilo y positivo para pantallas de recepción y equipos.' },
      { title: 'Aulas', description: 'Muestra la frase del día cuando llegan los alumnos.' },
      { title: 'Gimnasios y estudios', description: 'Frases cortas que se leen desde el otro lado de la sala.' },
      { title: 'Escritorio en casa', description: 'Aprovecha un segundo monitor o una tableta vieja mientras trabajas.' },
    ],
    faqs: [
      { question: '¿De dónde salen las citas?', answer: 'Son frases breves de autores y refranes clásicos, como Séneca, Marco Aurelio, Confucio, Benjamin Franklin o Mark Twain. Vienen en la página, así que no se descarga nada mientras funciona.' },
      { question: '¿Puedo dejar una cita fija?', answer: 'Sí. Pulsa Pausa (o la barra espaciadora) y la cita se queda hasta que sigas o pulses una flecha.' },
      { question: '¿Mantiene la pantalla encendida?', answer: 'A pantalla completa, en navegadores compatibles, un bloqueo de suspensión evita que la pantalla se apague.' },
    ],
  },
  'fake-windows-11-update': update('Windows 11', 'Microsoft', {
    answer: 'Una pantalla falsa de actualización de Windows 11 muestra la pantalla oscura «Trabajando en las actualizaciones» con el indicador giratorio y un porcentaje que sube despacio. Ponla a pantalla completa para que el equipo parezca ocupado actualizándose, como broma o atrezo, y pulsa Esc para volver.',
    features: ['Indicador y texto al estilo de Windows 11', 'Velocidad ajustable y pausa', 'Pantalla completa con el cursor oculto', 'Esc para salir'],
    benefits: ['Broma realista e inofensiva', 'Atrezo limpio para grabaciones de pantalla', 'Gratis'],
  }, { question: '¿En qué se diferencia de la versión de Windows 10?', answer: 'Usa el fondo más oscuro y el diseño más simple de los sistemas recientes.' }),
  'fake-mac-update': update('macOS', 'Apple', {
    answer: 'Una pantalla falsa de actualización de Mac muestra la pantalla negra de actualización de macOS con una barra de progreso y el tiempo restante. A pantalla completa parece que el Mac instala una actualización, para una broma inofensiva o un atrezo de vídeo. Pulsa Esc para salir.',
    features: ['Barra de progreso y tiempo restante al estilo macOS', 'Velocidad de actualización ajustable', 'Pantalla completa con el cursor oculto', 'Esc para salir'],
    benefits: ['Broma inofensiva para usuarios de Mac', 'Atrezo limpio para vídeos', 'Gratis'],
  }, { question: '¿Usa el logo real de Apple?', answer: 'No. Usa una marca genérica neutra para no hacer mal uso de la marca, manteniendo el diseño conocido.' }),
  'fake-android-update': update('Android', 'Google', {
    answer: 'Una pantalla falsa de actualización de Android muestra una actualización del sistema en curso con barra de progreso. Ábrela a pantalla completa en un móvil o tableta para que parezca que se actualiza y toca el botón de cerrar para revelar la broma.',
    features: ['Pantalla de actualización y progreso al estilo Android', 'Velocidad ajustable', 'Pantalla completa en móviles y tabletas', 'Toca para salir'],
    benefits: ['Broma que funciona en cualquier móvil', 'Sin instalar apps', 'Gratis'],
  }, { question: '¿Funciona en móviles?', answer: 'Sí. En la mayoría de navegadores de Android la pantalla completa oculta la barra de direcciones. En Safari del iPhone llena la ventana del navegador.' }),
  'fake-windows-xp-update': update('Windows XP', 'Microsoft', {
    answer: 'Una pantalla falsa de actualización de Windows XP recrea la clásica pantalla azul de «Instalando actualizaciones» de principios de los 2000 con su barra de progreso. Úsala para bromas nostálgicas, vídeos retro y rodajes ambientados en esa época. Pulsa Esc para salir.',
    features: ['Aspecto clásico de la época de XP', 'Barra de progreso y texto de estado', 'Pantalla completa con el cursor oculto', 'Esc para salir'],
    benefits: ['Nostalgia al instante', 'Atrezo fiel a la época', 'Gratis'],
  }, { question: '¿Por qué se ve tan retro?', answer: 'Imita el estilo de los diálogos de principios de los 2000 para un aspecto nostálgico y reconocible.' }),
  'fake-chrome-os-update': update('ChromeOS', 'Google', {
    answer: 'Una pantalla falsa de actualización de ChromeOS muestra una actualización al estilo Chromebook en curso. Ponla a pantalla completa en un Chromebook o cualquier ordenador para que parezca que el sistema se actualiza, como broma inofensiva o atrezo, y pulsa Esc para salir.',
    features: ['Pantalla de actualización al estilo ChromeOS', 'Velocidad del progreso ajustable', 'Pantalla completa con el cursor oculto', 'Esc para salir'],
    benefits: ['Funciona en Chromebooks del cole o del trabajo', 'Broma inofensiva', 'Gratis'],
  }, { question: '¿Funciona en un Chromebook?', answer: 'Sí. Pulsa la tecla de pantalla completa o el botón Pantalla completa para el efecto completo.' }),
  'fake-ubuntu-update': update('Ubuntu', 'Canonical', {
    answer: 'Una pantalla falsa de actualización de Ubuntu muestra actualizaciones de paquetes de Linux pasando por un terminal con líneas de progreso. Parece una actualización real del sistema: una broma divertida para desarrolladores y un atrezo creíble para vídeos sobre Linux.',
    features: ['Salida de actualización estilo apt', 'Colores de terminal al estilo Ubuntu', 'Pantalla completa', 'Esc para salir'],
    benefits: ['Broma para desarrolladores', 'Atrezo de terminal realista', 'Gratis'],
  }, { question: '¿Las líneas del registro son comandos reales?', answer: 'No. Son texto escrito de antemano y no se ejecuta nada en tu ordenador.' }),
  'fake-windows-xp-boot': {
    glance: {
      answer: 'Una pantalla falsa de arranque de Windows XP reproduce la clásica pantalla de inicio con la barra de carga azul en movimiento sobre negro. Es un atrezo retro rápido para vídeos, rodajes y bromas, y un salvapantallas nostálgico para los fans del sistema de 2001.',
      features: ['Pantalla de arranque clásica con barra animada', 'Se repite el tiempo que quieras', 'Pantalla completa con el cursor oculto', 'Esc para salir'],
      benefits: ['Atrezo retro en un clic', 'Salvapantallas nostálgico', 'Gratis'],
    },
    steps: ['La pantalla de arranque empieza enseguida, con los bloques azules recorriendo la barra de carga.', 'Pulsa F o Pantalla completa para llenar la pantalla y ocultar el navegador.', 'Déjala en marcha: la barra de carga se repite el tiempo que quieras.', 'Pulsa Esc para salir.'],
    useCases: [
      { title: 'Nostalgia', description: 'Recuerda el arranque de un PC de principios de los 2000.' },
      { title: 'Atrezo retro', description: 'Ambienta un ordenador de época para fotos o cine.' },
      { title: 'Bromas inofensivas', description: 'Haz que un PC moderno parezca arrancar XP.' },
      { title: 'Intros de directos', description: 'Una intro retro de «arrancando» para tus directos.' },
    ],
    faqs: [
      { question: '¿Es algo real o dañino?', answer: 'No. Es una simulación visual inofensiva en una pestaña normal. No cambia tu dispositivo ni instala nada.' },
      brandFaq('Microsoft'),
      { question: '¿Reproduce el sonido de inicio?', answer: 'No. Por respeto a tus oídos y a los derechos de autor, no hay sonido de inicio.' },
      EXIT,
    ],
  },
  'fake-zoom-meeting': call('Zoom Video Communications', {
    answer: 'Una pantalla falsa de reunión de Zoom muestra una videollamada al estilo Zoom con una cuadrícula de participantes, una barra de herramientas y la vista previa de tu cámara. Sirve para bromas, atrezo, capturas y practicar ante la cámara. Tu imagen se queda en tu dispositivo y nunca se graba ni se sube.',
    features: ['Cuadrícula de participantes con nombres e iconos de silencio', 'Tu cámara en vivo, también a pantalla completa', 'Temporizador de reunión y barra de herramientas', 'Título de reunión editable'],
    benefits: ['Atrezo realista de llamada para vídeos', 'Practica presentaciones ante la cámara', 'Privado: nada sale de tu dispositivo'],
  }, { question: '¿En qué se diferencia de la pantalla de Teams?', answer: 'Esta sigue el estilo de Zoom: una galería de mosaicos con los controles abajo. La de Teams pone los controles y un botón rojo de salir en una barra superior con temporizador.' }),
  'fake-teams-meeting': call('Microsoft', {
    answer: 'Una pantalla falsa de reunión de Microsoft Teams muestra una llamada al estilo Teams con mosaicos de participantes, la barra de la reunión y la vista previa de tu cámara. Úsala para bromas, atrezo o ensayar una presentación. La vista previa se queda en el navegador y nunca se graba.',
    features: ['Mosaicos y controles al estilo Teams', 'Cámara en vivo a pantalla completa', 'Temporizador de reunión', 'Título de reunión editable'],
    benefits: ['Atrezo de oficina creíble', 'Ensaya llamadas con tranquilidad', 'Privado y gratis'],
  }, { question: '¿Puedo cambiar el nombre de la reunión?', answer: 'Sí. Escribe un nombre nuevo en el campo del título bajo la pantalla. Aparece arriba al instante y no se guarda ni se envía nada.' }),
  'fake-google-meet': call('Google', {
    answer: 'Una pantalla falsa de Google Meet muestra una videollamada al estilo Meet con mosaicos de participantes, la barra de controles inferior y la vista previa de tu cámara. Sirve para bromas, vídeos y practicar presentaciones, y tu imagen nunca sale de tu dispositivo.',
    features: ['Mosaicos y barra de controles al estilo Meet', 'Cámara en vivo a pantalla completa', 'Temporizador y título de reunión editable', 'Sin iniciar sesión en Google'],
    benefits: ['Atrezo realista para cine y tutoriales', 'Practica ante la cámara', 'Privado y gratis'],
  }, { question: '¿Es real el código de la reunión?', answer: 'No. «abc-defg-hij» es un texto de ejemplo. Nadie puede unirse y la página nunca se conecta a Google Meet ni a otro servicio.' }),
  'fake-slack-huddle': call('Slack Technologies', {
    answer: 'Una pantalla falsa de huddle de Slack muestra una llamada de audio y vídeo al estilo Slack con participantes y controles. Úsala como broma, atrezo para capturas en presentaciones o fondo para un rodaje, sin conexión con ningún espacio de trabajo real de Slack.',
    features: ['Vista de participantes al estilo huddle', 'Indicadores de quién habla y controles', 'Pantalla completa', 'Título editable'],
    benefits: ['Atrezo rápido para vídeos de teletrabajo', 'Broma inofensiva', 'Gratis'],
  }),
  'fake-radar-screen': {
    glance: {
      answer: 'Una pantalla de radar falsa muestra un radar circular clásico, llamado indicador de posición en plano, con una línea de barrido que gira, contactos que se desvanecen y anillos de distancia. Las lecturas y el ping opcional la convierten en un atrezo convincente para cine, salas de escape, juegos y bromas de ciencia ficción.',
      features: ['Barrido giratorio con estela', 'Contactos en movimiento y anillos de distancia', 'Lecturas de rumbo y distancia', 'Ping tipo sonar opcional'],
      benefits: ['Atrezo de ciencia ficción o militar al instante', 'Ideal para salas de escape y escenarios', 'Gratis y funciona sin conexión'],
    },
    steps: ['El radar empieza a barrer al momento.', 'Elige un color (verde, ámbar o azul), la velocidad de barrido y el número de contactos.', 'Activa el ping si quieres; solo suena después de activarlo.', 'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.'],
    useCases: [
      { title: 'Atrezo de cine y teatro', description: 'Una pantalla de sala de control convincente sin equipos reales.' },
      { title: 'Salas de escape y juegos', description: 'Ambienta temáticas de submarinos, espacio o espías.' },
      { title: 'Fiestas y directos', description: 'Un fondo de ciencia ficción en movimiento en una TV o segundo monitor.' },
      { title: 'Salvapantallas', description: 'Una animación tranquila en bucle para una pantalla inactiva.' },
    ],
    faqs: [
      { question: '¿Muestra datos reales de radar o aviones?', answer: 'No. Cada contacto se genera al azar en tu navegador. Es solo para entretenimiento y atrezo.' },
      { question: '¿Por qué se desvanecen los puntos?', answer: 'Los radares clásicos usaban fósforo que seguía brillando tras pasar el haz y luego se apagaba. El desvanecimiento imita ese resplandor.' },
      { question: '¿Cómo salgo?', answer: 'Pulsa Esc, o mueve el ratón o toca la pantalla para mostrar el botón de cerrar. Cerrar la pestaña también sirve.' },
    ],
  },
}
