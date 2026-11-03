import type { ToolTranslations } from './types'

export const es: ToolTranslations = {
  'white-screen': {
    glance: {
      answer:
        'Una pantalla blanca llena toda tu pantalla de blanco puro (#FFFFFF). Pulsa Pantalla completa o la tecla F y cada píxel muestra el mismo color, sin barras ni distracciones. Al máximo brillo es la luz más intensa que puede dar tu pantalla: sirve como luz para videollamadas y fotos, para limpiar el monitor, calcar dibujos y encontrar píxeles muertos.',
      features: [
        'Blanco puro #FFFFFF o cualquier color hexadecimal',
        'Pantalla completa con un clic y control de brillo',
        'Temperatura de color de 2700 K (cálido) a 9300 K (frío)',
        'Descarga PNG gratis de 720p hasta 8K',
      ],
      benefits: [
        'Luz suave al instante para llamadas, selfis y calcar',
        'Funciona en móviles, portátiles, monitores y Smart TV',
        'Sin app, sin registro y sin instalar nada',
      ],
    },
  },
  'black-screen': {
    glance: {
      answer:
        'Una pantalla negra llena toda tu pantalla de negro puro (#000000) con un clic. En pantallas OLED los píxeles se apagan por completo, así que es la forma más rápida de ocultar lo que hay en pantalla, comprobar fugas de luz o ahorrar batería.',
      features: [
        'Negro puro #000000 o cualquier color personalizado',
        'Pantalla completa con un clic y control de brillo',
        'Mantiene la pantalla encendida en modo completo',
        'Descarga PNG gratis de 720p hasta 8K',
      ],
      benefits: [
        'Revela fugas de luz, brillo IPS y píxeles atascados',
        'Ahorra energía en pantallas OLED',
        'Gratis y sin instalar nada',
      ],
    },
  },
  'dead-pixel-test': {
    glance: {
      answer:
        'Una prueba de píxeles muertos llena la pantalla con colores sólidos, uno tras otro, para que los píxeles defectuosos destaquen. Un píxel muerto se queda negro en todos los colores, un píxel atascado se queda de un color brillante y un píxel caliente se queda blanco. La revisión completa tarda un minuto en cualquier monitor, portátil, TV o móvil.',
      features: [
        'Fondos completos en blanco, negro, rojo, verde, azul y gris',
        'Cambio automático o con las flechas del teclado',
        'Funciona en paneles LCD, IPS, VA, OLED y mini-LED',
        'Consejos para distinguir píxeles muertos, atascados y calientes',
      ],
      benefits: [
        'Detecta defectos antes de que termine el plazo de devolución',
        'Revisa un monitor o móvil usado antes de pagarlo',
        'Gratis, privado y sin instalar nada',
      ],
    },
    steps: [
      'Limpia primero la pantalla para no confundir el polvo con un píxel defectuoso.',
      'Pulsa F para pantalla completa y usa las flechas, haz clic o activa el cambio automático para pasar de color.',
      'Revisa con calma todo el panel en cada color. Una lupa o el zoom de la cámara del móvil ayudan.',
      'Los puntos oscuros sobre colores claros indican píxeles muertos; los puntos brillantes o de color sobre negro indican píxeles atascados o calientes.',
    ],
    useCases: [
      { title: 'Monitor nuevo', description: 'Revisa un monitor, portátil o TV nuevo dentro del plazo de devolución.' },
      { title: 'Compra de segunda mano', description: 'Comprueba un móvil o portátil usado antes de pagar.' },
      { title: 'Prueba para la garantía', description: 'Fotografía el defecto sobre un color sólido para tu reclamación.' },
      { title: 'Revisión periódica', description: 'Confirma de vez en cuando que no han aparecido defectos nuevos.' },
    ],
    faqs: [
      {
        question: '¿Qué diferencia hay entre un píxel muerto y uno atascado?',
        answer:
          'Un píxel muerto se queda oscuro en todos los colores. Uno atascado se queda encendido en un color, como un punto rojo sobre negro. Uno caliente se queda blanco. Los atascados a veces se recuperan; los muertos casi nunca.',
      },
      {
        question: '¿Esta herramienta arregla píxeles muertos?',
        answer:
          'No. La prueba solo te ayuda a ver los defectos. A veces se recomienda alternar colores rápidamente para píxeles atascados, pero no hay garantías y un píxel muerto es un fallo de hardware.',
      },
      {
        question: '¿Cómo reclamo un píxel muerto?',
        answer:
          'Haz una foto nítida del defecto sobre el color donde más se ve, anota su posición y contacta con el fabricante o la tienda con tu prueba de compra.',
      },
    ],
  },
  'screen-refresh-rate-test': {
    glance: {
      answer:
        'Una prueba de frecuencia de actualización mide cuántas veces por segundo tu pantalla redibuja la imagen, en hercios (Hz). Cronometra los fotogramas del navegador e indica 60, 75, 120, 144, 165 o 240 Hz, para que confirmes que tu monitor de alta frecuencia funciona a la velocidad prometida.',
      features: [
        'Medición en vivo de Hz con la frecuencia estándar más cercana',
        'Tiempos de fotograma medio, mínimo y máximo',
        'Vuelve a medir tras cambiar la configuración',
        'Funciona en monitores, portátiles, móviles y tabletas',
      ],
      benefits: [
        'Comprueba que tu monitor de 144 o 240 Hz no está a 60 Hz',
        'Verifica el cable, el puerto y la configuración de Windows o macOS',
        'Resultado en segundos, sin descargas',
      ],
    },
    steps: [
      'Abre la página y espera uno o dos segundos a que la lectura se estabilice.',
      'Lee el valor en Hz y la frecuencia estándar más cercana.',
      'Si marca 60 Hz en un monitor de alta frecuencia, revisa la configuración de pantalla y el cable y vuelve a probar.',
      'Pulsa F o toca dos veces para pantalla completa, y Esc para salir.',
    ],
    useCases: [
      { title: 'Monitor nuevo', description: 'Confirma que un monitor de 144 o 240 Hz funciona realmente a esa frecuencia.' },
      { title: 'Cable y puerto', description: 'Los cables o puertos HDMI antiguos pueden limitarte a 60 Hz.' },
      { title: 'Portátiles con batería', description: 'Muchos portátiles bajan a 60 Hz cuando no están enchufados.' },
      { title: 'Móviles y tabletas', description: 'Comprueba si los modos adaptativos de 90/120 Hz están activos.' },
    ],
    faqs: [
      {
        question: '¿Por qué marca 60 Hz en mi monitor de 144 Hz?',
        answer:
          'La frecuencia se elige en la configuración de pantalla del sistema, y el cable debe soportarla (DisplayPort o HDMI 2.0 o superior). Comprueba también que la ventana del navegador está en el monitor correcto.',
      },
      {
        question: '¿Por qué el número varía?',
        answer:
          'Las pestañas con mucha carga, el ahorro de energía y la frecuencia variable (FreeSync, G-Sync, ProMotion) cambian el tiempo de los fotogramas. La lectura usa la mediana de los últimos fotogramas para suavizarlo.',
      },
      {
        question: '¿La frecuencia de actualización es lo mismo que los FPS?',
        answer:
          'No. La frecuencia es cuántas veces se actualiza la pantalla; los FPS son cuántos fotogramas nuevos genera un juego o vídeo. Solo ves tantos fotogramas como permite tu frecuencia.',
      },
    ],
  },
  'touch-screen-test': {
    glance: {
      answer:
        'Una prueba de pantalla táctil comprueba que todas las zonas de tu pantalla responden. Toca cada casilla de una cuadrícula para encontrar zonas muertas, dibuja líneas para detectar cortes o saltos y apoya varios dedos a la vez para ver cuántos puntos táctiles admite tu móvil o tableta.',
      features: [
        'Cuadrícula que marca cada casilla tocada, con porcentaje de cobertura',
        'Modo dibujo para encontrar huecos, saltos y toques fantasma',
        'Modo multitáctil que cuenta los dedos simultáneos',
        'Funciona con dedos, lápiz óptico y ratón',
      ],
      benefits: [
        'Encuentra zonas muertas tras una caída o reparación',
        'Prueba un móvil o tableta usados antes de comprar',
        'Sin instalar ninguna app',
      ],
    },
    steps: [
      'Elige la cuadrícula de zonas muertas y desliza el dedo despacio por cada casilla hasta llegar al 100 %.',
      'Las casillas que no se rellenan tras varios intentos señalan una zona muerta.',
      'Cambia a Dibujar y traza líneas lentas; los cortes o saltos indican toques perdidos.',
      'Usa Multitáctil y apoya varios dedos para ver cuántos detecta a la vez.',
    ],
    useCases: [
      { title: 'Zonas que no responden', description: 'Localiza exactamente dónde el móvil o la tableta ignora los toques.' },
      { title: 'Tras una reparación', description: 'Revisa el digitalizador nuevo antes de recoger el equipo.' },
      { title: 'Compra de segunda mano', description: 'Prueba toda la superficie en un minuto.' },
      { title: 'Toques fantasma', description: 'Observa si aparecen toques sin que haya un dedo.' },
    ],
    faqs: [
      {
        question: '¿Cuántos puntos táctiles debería admitir mi pantalla?',
        answer: 'La mayoría de móviles y tabletas detectan de 5 a 10 dedos. La página muestra el número que indica tu navegador y el máximo detectado a la vez.',
      },
      {
        question: '¿Funciona con ratón o lápiz?',
        answer: 'Sí. También se dibujan el ratón y el lápiz, así que puedes probar un stylus igual que con el dedo.',
      },
      {
        question: '¿Qué causa las zonas muertas?',
        answer: 'Cristal roto, un cable del digitalizador dañado, humedad o un protector con burbujas de aire. Quita primero el protector y vuelve a probar.',
      },
    ],
  },
  'white-noise-generator': {
    glance: {
      answer:
        'Un generador de ruido blanco reproduce un siseo constante que contiene todas las frecuencias audibles con la misma intensidad. Ese sonido uniforme tapa voces, tráfico y ruidos repentinos, por eso se usa para concentrarse, estudiar, calmar a bebés y dormir. Ponlo a volumen bajo y añade un temporizador para la noche.',
      features: [
        'Ruido blanco, rosa y marrón en un solo reproductor',
        'Filtro de tono y volumen en decibelios',
        'Temporizador de sueño con desvanecimiento suave',
        'Visuales opcionales: estática de TV u onda',
      ],
      benefits: [
        'Tapa las distracciones en oficinas y pisos compartidos',
        'Ayuda a muchas personas a dormirse antes',
        'Gratis, sin fin y sin app',
      ],
    },
    steps: [
      'Pulsa Iniciar. No suena nada hasta que lo hagas y empieza a volumen moderado.',
      'Usa los botones Blanco, Rosa y Marrón para abrir cada generador; tu volumen, filtro y visual se mantienen.',
      'Usa un filtro paso bajo para suavizar el siseo o uno paso alto para quitar los graves, y ajusta el corte.',
      'Elige un visual (onda, estática de TV o pantalla oscura) y un temporizador de sueño opcional.',
      'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.',
    ],
    useCases: [
      { title: 'Dormir', description: 'Tapa el tráfico, los vecinos y los ronquidos con un sonido constante.' },
      { title: 'Concentración', description: 'Cubre las conversaciones y el ruido de casa mientras trabajas o estudias.' },
      { title: 'Bebés', description: 'Muchos padres usan ruido blanco suave para calmar al bebé. Mantenlo bajo y lejos de la cuna.' },
      { title: 'Estática de TV retro', description: 'Cambia el visual a estática para vídeos, atrezo o una fiesta temática.' },
    ],
    faqs: [
      {
        question: '¿Qué es el ruido blanco?',
        answer: 'El ruido blanco tiene la misma potencia en todas las frecuencias. Al oído suena como un siseo brillante y uniforme, como una radio o TV sin sintonizar.',
      },
      {
        question: '¿Qué hacen los filtros paso bajo y paso alto?',
        answer:
          'El paso bajo conserva las frecuencias por debajo del corte, así el ruido suena más grave y suave. El paso alto conserva las de arriba, quita los retumbos y lo hace más aireado.',
      },
      {
        question: '¿Consume datos?',
        answer: 'No. El ruido se genera en tu dispositivo con la Web Audio API, así que no se transmite nada y sigue funcionando sin conexión una vez cargado.',
      },
      {
        question: '¿Es seguro mirar la estática de TV?',
        answer: 'El parpadeo rápido puede resultar molesto y desencadenar epilepsia fotosensible. Si eres sensible, usa el visual de onda u oscuro.',
      },
    ],
  },
  'fake-blue-screen-of-death': {
    glance: {
      answer:
        'Una pantalla azul de la muerte falsa (BSOD) imita la pantalla de error de Windows: la carita triste, «Tu PC tuvo un problema», un código de detención y un contador de progreso. Es solo una imagen: nada se bloquea y sales con Esc. Elige Windows 10, Windows 11, la nueva pantalla negra o el clásico XP.',
      features: [
        'Estilos Windows 10, 11, negro y XP clásico',
        'Códigos reales como CRITICAL_PROCESS_DIED',
        'Porcentaje que sube y bloque tipo QR',
        'Pantalla completa con el cursor oculto',
      ],
      benefits: ['La broma informática más convincente', 'Atrezo realista para vídeos y tutoriales', 'Totalmente inofensiva'],
    },
    steps: [
      'Elige un estilo: Windows 10, Windows 11, la nueva pantalla negra o el clásico XP/7.',
      'Escoge un código de detención y cuánto tarda el contador en llegar al 100 %.',
      'Toca dos veces o pulsa F para pantalla completa. El cursor se oculta enseguida.',
      'Pulsa Esc, o mueve el ratón y haz clic en cerrar, para salir.',
    ],
    useCases: [
      { title: 'Bromas en la oficina', description: 'Déjala en la pantalla de un compañero unos segundos y luego revela la broma.' },
      { title: 'Vídeos y directos', description: 'Muestra un fallo en cámara sin bloquear un ordenador real.' },
      { title: 'Formación de TI', description: 'Enseña cómo es un error de detención y qué significa su código.' },
      { title: 'Cine y teatro', description: 'Una pantalla de error creíble para una escena, en cualquier dispositivo.' },
    ],
    faqs: [
      {
        question: '¿Qué es la pantalla azul de la muerte?',
        answer:
          'Es el error a pantalla completa que muestra Windows cuando encuentra un problema del que no puede recuperarse, como un controlador defectuoso o un fallo de memoria. Indica un código de detención, guarda información y reinicia.',
      },
      {
        question: '¿Qué significan los códigos de detención?',
        answer:
          'Cada uno nombra el tipo de fallo: CRITICAL_PROCESS_DIED indica que se detuvo un proceso del sistema, IRQL_NOT_LESS_OR_EQUAL suele apuntar a un controlador y MEMORY_MANAGEMENT a menudo a la RAM. Aquí solo son texto.',
      },
      {
        question: '¿Puede dañar mi ordenador?',
        answer: 'No. Es una imagen en una pestaña del navegador. No bloquea Windows, no cambia ajustes ni instala nada.',
      },
      {
        question: '¿Por qué la nueva pantalla de error es negra?',
        answer: 'En 2025 Microsoft sustituyó la pantalla azul de Windows 11 por una negra más sencilla. Elige «Negro (nuevo)» para ese aspecto.',
      },
      {
        question: '¿Está relacionada con Microsoft?',
        answer: 'No. Es una recreación independiente con fines de entretenimiento, sin relación ni patrocinio de Microsoft.',
      },
    ],
  },
  'pomodoro-timer': {
    glance: {
      answer:
        'Un temporizador Pomodoro divide el trabajo en bloques de 25 minutos de concentración separados por descansos de 5 minutos, con un descanso largo cada cuatro bloques. El método, creado por Francesco Cirillo a finales de los años 80, ayuda a empezar las tareas, evitar el agotamiento y contar los bloques completados.',
      features: [
        'Ciclo 25/5 con descansos largos',
        'Duraciones ajustables e inicio automático',
        'Aviso sonoro y cuenta atrás en la pestaña',
        'Contador de sesiones y anillo de progreso',
      ],
      benefits: ['Vence la procrastinación con metas cortas', 'Los descansos reducen el cansancio', 'Gratis y sin cuenta'],
    },
    steps: [
      'Pulsa Iniciar para empezar una sesión de 25 minutos.',
      'Cambia si quieres la duración de la concentración y de los descansos (por ejemplo 50/10).',
      'Al terminar cada fase suena un aviso y empieza la siguiente; desactiva el inicio automático para empezarlas tú.',
      'Usa Saltar para avanzar o Reiniciar para volver a empezar. La barra espaciadora inicia y pausa.',
      'Pulsa F o Pantalla completa para llenar la pantalla, y Esc para salir.',
    ],
    useCases: [
      { title: 'Estudiar', description: 'Divide el repaso en bloques cortos con descansos reales.' },
      { title: 'Trabajo profundo', description: 'Protege 25 minutos seguidos del correo y el chat.' },
      { title: 'En clase', description: 'Proyecta el temporizador para trabajos y descansos cronometrados.' },
      { title: 'Crear hábitos', description: 'Cuenta sesiones para ver cuánto tiempo de concentración acumulas.' },
    ],
    faqs: [
      {
        question: '¿Qué es la técnica Pomodoro?',
        answer:
          'Un método de gestión del tiempo de finales de los 80: trabaja en bloques concentrados (tradicionalmente 25 minutos), haz un descanso corto tras cada uno y uno largo cada cuatro.',
      },
      {
        question: '¿Sigue funcionando en una pestaña en segundo plano?',
        answer: 'Sí. Cuenta con el reloj real, así que es preciso aunque el navegador ralentice las pestañas ocultas, y el título de la pestaña muestra el tiempo restante.',
      },
      {
        question: '¿Puedo cambiar las duraciones?',
        answer: 'Sí. Ajusta en minutos la concentración, el descanso corto y el largo, y cuántas sesiones hay antes del descanso largo.',
      },
    ],
  },
}
