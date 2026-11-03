import type { TopicTranslation } from './types'

export const es: TopicTranslation = {
  hubs: {
    '/color-screens': {
      intro:
        'Las pantallas de colores llenan toda la pantalla con un único color sólido. Elige un color, pulsa F para pantalla completa y cada píxel mostrará exactamente ese color. Sirven para encontrar píxeles muertos y atascados, como luz suave, como fondo de croma y como pantalla tranquila y sin distracciones.',
      details: [
        {
          heading: '¿Qué color debo usar?',
          text: 'Usa el blanco para iluminar y limpiar, el negro para ocultar la pantalla o ver fugas de luz, y el rojo, verde y azul puros para probar cada subpíxel. El gris revela un brillo desigual, y el naranja o el rosa cálidos sirven de luz nocturna o para selfis.',
        },
        {
          heading: 'Valores de color exactos',
          text: 'Cada pantalla usa un valor hexadecimal exacto (por ejemplo #FF0000 para el rojo), así las pruebas son fiables. Aun así puedes escribir cualquier código y descargar cualquier color en PNG hasta 8K.',
        },
      ],
      faqs: [
        { question: '¿Cómo pongo toda la pantalla de un color?', answer: 'Abre la página del color y pulsa F o Pantalla completa. El navegador oculta sus barras y solo se ve el color. Pulsa Esc para salir.' },
        { question: '¿Funcionan en móviles y televisores?', answer: 'Sí. Funcionan en cualquier navegador moderno, incluidos Android, iPhone, Smart TV y consolas. En Safari de iPhone el color llena la ventana del navegador.' },
        { question: '¿Puedo descargar una imagen de color sólido?', answer: 'Sí. Cada página de color tiene un PNG gratis de ese color, y el panel de descarga crea cualquier tamaño de 720p a 8K.' },
      ],
    },
    '/screen-tests': {
      intro:
        'Las pruebas de pantalla son patrones y mediciones a pantalla completa que muestran si tu pantalla funciona bien. Úsalas para encontrar píxeles muertos, medir la frecuencia real en Hz, ver ghosting, fugas de luz y quemado, revisar zonas muertas en una pantalla táctil y valorar el color, todo en el navegador y sin instalar nada.',
      details: [
        {
          heading: '¿Qué prueba hago primero?',
          text: 'En una pantalla nueva o usada, empieza por la prueba de píxeles muertos y la de uniformidad: detectan los fallos que más a menudo cubre una devolución o garantía. Los jugadores deberían añadir la frecuencia de actualización y el ghosting; quien tenga móvil o tableta, la prueba táctil; y en OLED, las pruebas de quemado.',
        },
        {
          heading: '¿Son precisas las pruebas en el navegador?',
          text: 'Los patrones usan valores de píxel exactos y el tiempo sale del reloj de fotogramas del navegador, así que el resultado coincide con lo que muestra tu pantalla. No sustituyen a un colorímetro para una calibración profesional.',
        },
      ],
      faqs: [
        { question: '¿Cómo compruebo si mi monitor tiene fallos?', answer: 'Limpia la pantalla y haz la prueba de píxeles muertos, la de uniformidad en una habitación oscura y la de frecuencia. En total, unos cinco minutos.' },
        { question: '¿Sirven para televisores y móviles?', answer: 'Sí. Abre la página en el navegador del dispositivo y pon pantalla completa. La prueba táctil está pensada para móviles y tabletas.' },
        { question: '¿Son gratis?', answer: 'Sí. Todas las pruebas son gratis, sin registro, y funcionan solo en tu dispositivo.' },
      ],
    },
    '/screensavers': {
      intro:
        'Los salvapantallas online funcionan en el navegador en lugar de instalarse en el ordenador. Abre uno, ponlo a pantalla completa y se reproduce en cualquier dispositivo: PC, Mac, Chromebook, Smart TV o una tableta vieja en el escritorio. Elige la lluvia digital de Matrix, el logo de DVD que rebota, un reloj retro de tarjetas o frases motivadoras.',
      details: [
        {
          heading: '¿Por qué un salvapantallas en el navegador?',
          text: 'Funciona en dispositivos sin ajustes de salvapantallas, como Smart TV y Chromebooks, no necesita instalación y mantiene la pantalla encendida mientras está activo, ideal para recepciones, escritorios y directos.',
        },
      ],
      faqs: [
        { question: '¿Un salvapantallas online evita que el ordenador se suspenda?', answer: 'A pantalla completa, los navegadores compatibles mantienen la pantalla encendida con la API Screen Wake Lock, así que sigue activo hasta que salgas.' },
        { question: '¿Puedo usarlos en una Smart TV?', answer: 'Sí. Abre la página en el navegador de la TV y pulsa el botón de pantalla completa.' },
      ],
    },
    '/prank-screens': {
      intro:
        'Las pantallas de broma son pantallas falsas, realistas e inofensivas que funcionan en el navegador: actualizaciones de Windows, macOS, ChromeOS y Android, la pantalla azul de la muerte, una pantalla hackeada y reuniones falsas. Abre una, ponla a pantalla completa y pulsa Esc cuando acabe la broma. No se instala ni se cambia nada.',
      details: [
        {
          heading: 'Bromas con responsabilidad',
          text: 'Que sea breve y revela la broma. Nunca uses una actualización o un error falso para asustar a alguien y que pague o dé acceso a un dispositivo: eso es una estafa, no una broma.',
        },
        {
          heading: 'También como atrezo',
          text: 'Cineastas, streamers, profesores y salas de escape las usan como atrezo creíble, porque se ven bien en cámara sin tocar un sistema real.',
        },
      ],
      faqs: [
        { question: '¿Son seguras?', answer: 'Sí. Son imágenes y animaciones en una pestaña del navegador. No pueden instalar nada, leer archivos ni cambiar ajustes.' },
        { question: '¿Cómo salgo de una pantalla de broma?', answer: 'Pulsa Esc, o mueve el ratón o toca la pantalla para que aparezca el botón de cerrar. Cerrar la pestaña también sirve.' },
      ],
    },
    '/visual-effects': {
      intro:
        'Los efectos visuales convierten tu pantalla en algo más que una imagen: un generador de ruido con estática de TV, un aro de luz o luz para videollamadas, una pantalla rota, un terminal hacker, ruido animado, degradados y ciclos de color. Todos funcionan a pantalla completa en el navegador, en móviles, ordenadores y televisores.',
      details: [
        {
          heading: 'Luz, sonido y diversión en un solo sitio',
          text: 'Usa el aro de luz y la luz para Zoom para iluminarte la cara, los generadores de ruido para concentrarte o dormir, y la pantalla rota y el Hacker Typer para bromas y vídeos.',
        },
      ],
      faqs: [
        { question: '¿Son seguros los efectos con parpadeo?', answer: 'El parpadeo rápido puede provocar crisis en personas con epilepsia fotosensible. Baja la velocidad o elige un efecto tranquilo si eres sensible.' },
        { question: '¿Los generadores de ruido gastan datos?', answer: 'No. El sonido se genera en tu dispositivo, así que no se transmite nada.' },
      ],
    },
    '/online-timers': {
      intro:
        'Los temporizadores online muestran números grandes a pantalla completa que se leen desde el otro lado de la sala. Usa la cuenta atrás para clases, reuniones y exámenes, el Pomodoro para trabajar en bloques de 25 minutos y el cronómetro con vueltas para entrenar o competir. Mantienen la hora exacta incluso en pestañas de fondo.',
      details: [
        {
          heading: 'Precisos en segundo plano',
          text: 'Cada temporizador cuenta con el reloj del dispositivo en lugar de contar pasos, así sigue exacto aunque el navegador ralentice las pestañas ocultas, y el título de la pestaña muestra el tiempo que queda.',
        },
      ],
      faqs: [
        { question: '¿Suena si la pestaña está en segundo plano?', answer: 'Sí, mientras la pestaña siga abierta. El aviso suena cuando se acaba el tiempo, si lo tienes activado.' },
        { question: '¿Puedo mostrarlo en un proyector o TV?', answer: 'Sí. Ábrelo en el navegador y pulsa F para pantalla completa.' },
      ],
    },
  },
  colorAnswer: {
    template: '{subject} llena toda tu pantalla de {word} puro ({hex}). Pulsa Pantalla completa o la tecla F y cada píxel muestra el mismo color, sin barras ni distracciones. {tail}',
    features: ['{word} puro {hex}, o cualquier color hexadecimal', 'Pantalla completa con un clic y control de brillo', 'Descarga PNG gratis de 720p hasta 8K'],
    benefits: ['Funciona al instante en móviles, portátiles, monitores y Smart TV', 'Sin app, sin registro y sin instalar nada'],
  },
  colors: {
    red: { subject: 'Una pantalla roja', word: 'rojo', tail: 'Solo se encienden los subpíxeles rojos, así se ven fácilmente los subpíxeles verdes o azules muertos o atascados. También sirve de luz nocturna roja que conserva la visión en la oscuridad.', feature: 'Las flechas cambian entre rojo, verde y azul', benefit: 'Encuentra subpíxeles verdes o azules atascados en segundos' },
    green: { subject: 'Una pantalla verde', word: 'verde', tail: 'Los creadores la usan como fondo de croma rápido, y como solo enciende los subpíxeles verdes, los rojos o azules defectuosos destacan en una prueba de píxeles.', feature: 'Verde croma brillante para OBS, Premiere o CapCut', benefit: 'Un fondo de croma gratis cuando no tienes tela verde' },
    blue: { subject: 'Una pantalla azul', word: 'azul', tail: 'Enciende solo los subpíxeles azules para probar píxeles, y además sirve de fondo de croma azul o de luz fría y tranquila para fotos.', feature: 'Azul puro para probar subpíxeles y fondos de croma azul', benefit: 'Revisa el canal azul y deja ver los píxeles atascados' },
    yellow: { subject: 'Una pantalla amarilla', word: 'amarillo', tail: 'El amarillo enciende a la vez los subpíxeles rojos y verdes, así se ve con claridad un subpíxel azul muerto o una zona con tono raro. También es una luz cálida y alegre para fotos.', feature: 'Amarillo exacto con rojo y verde al máximo', benefit: 'Detecta subpíxeles azules muertos y tonos desiguales' },
    orange: { subject: 'Una pantalla naranja', word: 'naranja', tail: 'Su tono cálido tiene menos luz azul que el blanco, por eso mucha gente la usa como luz nocturna suave, luz ambiental de atardecer o luz cálida de relleno para vídeo.', feature: 'Control de brillo para una luz nocturna tenue y cálida', benefit: 'Una luz cálida con mucho menos azul que una pantalla blanca' },
    pink: { subject: 'Una pantalla rosa', word: 'rosa', tail: 'El rosa intenso da una luz suave y favorecedora para selfis y maquillaje, y crea ambiente para fiestas, directos y habitaciones.', feature: 'Rosa intenso por defecto, con tonos más claros u oscuros', benefit: 'Luz suave y favorecedora para selfis y maquillaje' },
    purple: { subject: 'Una pantalla morada', word: 'morado', tail: 'El morado mezcla luz roja y azul: es una luz ambiental llamativa para directos, setups gaming y fiestas, y una forma rápida de comprobar que el canal verde está apagado.', feature: 'Morado intenso con tonos de lavanda a violeta', benefit: 'Luz ambiental al instante para directos y fiestas' },
    cyan: { subject: 'Una pantalla cian', word: 'cian', tail: 'El cian enciende a la vez verde y azul, así se ve fácilmente un subpíxel rojo atascado o un canal que falta. También es una luz de acento fría y nítida.', feature: 'Cian puro para revisar los canales verde y azul', benefit: 'Muestra subpíxeles rojos defectuosos y tonos raros' },
    magenta: { subject: 'Una pantalla magenta', word: 'magenta', tail: 'El magenta enciende rojo y azul con el verde apagado, así los subpíxeles verdes atascados y los tonos verdosos son evidentes en las pruebas de pantalla.', feature: 'Magenta puro para los canales rojo y azul', benefit: 'Muestra subpíxeles verdes atascados y tonos verdosos' },
    gray: { subject: 'Una pantalla gris', word: 'gris', tail: 'Un gris medio es la forma estándar de detectar el efecto de pantalla sucia, las nubes, el viñeteado y las bandas de color que los colores brillantes ocultan.', feature: 'Cambia entre gris claro, medio y oscuro', benefit: 'Revela problemas de uniformidad y pantalla sucia' },
  },
}
