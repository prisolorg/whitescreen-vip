import type { LocalizedSubtitles } from './types'

/** Spanish subtitles: one actionable line under each H1 (see src/lib/subtitles.ts for the English set). */
export const es: LocalizedSubtitles = {
  tools: {
    // Pantallas de color (también la página de inicio, que es la pantalla blanca)
    'white-screen': 'Pon tu pantalla en blanco brillante para iluminar, limpiar o buscar píxeles muertos.',
    'black-screen': 'Pasa a negro puro para ver píxeles atascados, fugas de luz o atenuar una pantalla.',
    'red-screen': 'Llena tu pantalla de rojo para revisar los subpíxeles rojos o crear una luz ambiental.',
    'green-screen': 'Usa una pantalla verde brillante como fondo de croma o para revisar píxeles.',
    'blue-screen': 'Llena tu pantalla de azul para hacer croma o revisar los subpíxeles azules.',
    'yellow-screen': 'Pon tu pantalla amarilla para una luz cálida o revisar píxeles rojos y verdes.',
    'orange-screen': 'Llena la habitación de luz naranja cálida o úsala como fondo para fotos.',
    'pink-screen': 'Ilumina tu cara con rosa suave para selfies, llamadas o ambiente.',
    'purple-screen': 'Crea un brillo morado para ambientar la habitación o como fondo de streaming.',
    'cyan-screen': 'Muestra cian para revisar a la vez los subpíxeles verdes y azules.',
    'magenta-screen': 'Muestra magenta para revisar los subpíxeles rojos y azules y detectar tintes.',
    'gray-screen': 'Muestra gris neutro para ver manchas, bandas y el efecto de pantalla sucia.',

    // Pruebas de pantalla
    'dead-pixel-test': 'Pasa por 9 colores para encontrar píxeles muertos, atascados o calientes.',
    'screen-uniformity-test': 'Revisa fondos grises uniformes en busca de manchas, viñeteado y fugas de luz.',
    'monitor-test': 'Recorre 7 patrones de prueba para revisar el color, la gamma y la nitidez.',
    'oled-gray-test': 'Recorre grises casi negros para ver bandas y mura en tu OLED.',
    'oled-burn-in-test': 'Alterna colores sólidos para detectar quemado y retención de imagen en OLED.',
    'screen-burn-in-test': 'Busca imágenes fantasma y luego usa el reparador para eliminar la retención.',
    'touch-screen-test': 'Desliza el dedo por la cuadrícula para encontrar zonas muertas y contar toques.',
    'screen-refresh-rate-test': 'Ve tu frecuencia de actualización en Hz nada más cargar la página.',
    'monitor-ghosting-test': 'Sube la velocidad hasta que aparezcan estelas para valorar el ghosting y el overdrive.',
    'frame-rate-test': 'Compara 15, 24, 30 y 60 FPS con el máximo de tu pantalla, lado a lado.',
    'screen-color-test': 'Recorre barras de color y rampas RGB para revisar tintes y bandas.',
    'screen-resolution-test': 'Ve tu resolución de pantalla y la proporción de píxeles al instante, sin clics.',

    // Efectos y sonido
    'no-signal-screen': 'Elige barras de color, rebote o azul y ponla a pantalla completa en una tele.',
    'white-noise-generator': 'Pon un ruido blanco constante y programa un temporizador para dormir.',
    'brown-noise-generator': 'Pon un ruido marrón profundo para concentrarte o dormir, con temporizador.',
    'pink-noise-generator': 'Pon un ruido rosa como de lluvia y moldéalo con filtros y volumen.',
    'broken-screen': 'Toca en cualquier punto para romper el cristal y luego pasa el dispositivo.',
    'hacker-typer': 'Aporrea cualquier tecla y mira cómo aparece código hacker de película.',
    'hacked-screen': 'Elige rojo o verde, ponla a pantalla completa y deja que un amigo la encuentre.',
    'visual-noise': 'Llena la pantalla de grano de píxeles animado en mono, color o tinte.',
    'color-cycle': 'Deja que tu pantalla pase por todos los colores o recórrelos tú mismo.',
    'gradient-screen': 'Elige colores y un ángulo para crear un degradado en movimiento a pantalla completa.',

    // Iluminación
    'zoom-lighting': 'Convierte tu pantalla en una luz suave para tu próxima videollamada.',
    'ring-light': 'Ilumina tu cara con un aro de luz en pantalla; ajusta el tamaño y la calidez.',

    // Salvapantallas
    'matrix-screensaver': 'Pon la lluvia digital y ajusta su velocidad, color y caracteres.',
    'flip-clock-screensaver': 'Convierte cualquier pantalla libre en un gran reloj flip en directo.',
    'dvd-screensaver': 'Mira cómo rebota el logo de DVD y espera el golpe perfecto en la esquina.',
    'motivational-quote-screensaver': 'Muestra frases motivadoras rotativas en letra grande en una pantalla libre.',

    // Temporizadores y utilidades
    'countdown-timer': 'Elige un ajuste rápido o pon tu propio tiempo y pulsa Iniciar.',
    'pomodoro-timer': 'Pulsa Iniciar para 25 minutos de concentración y luego descansa 5 minutos.',
    stopwatch: 'Pulsa la barra espaciadora para empezar a cronometrar y L para registrar una vuelta.',

    // Pantallas falsas
    'fake-windows-10-update': 'Pon a pantalla completa una actualización falsa de Windows 10 para engañar a un amigo.',
    'fake-windows-11-update': 'Muestra la pantalla oscura de actualización de Windows 11 a pantalla completa como broma.',
    'fake-blue-screen-of-death': 'Pon a pantalla completa una pantalla de error falsa y luego revela la broma.',
    'fake-mac-update': 'Muestra una actualización falsa de macOS con una barra de progreso fina a pantalla completa.',
    'fake-android-update': 'Ábrela en un móvil para mostrar una actualización falsa del sistema Android.',
    'fake-windows-xp-update': 'Vuelve a los 2000 con una pantalla de instalación falsa de Windows XP.',
    'fake-windows-xp-boot': 'Reproduce la clásica pantalla de arranque de Windows XP a pantalla completa.',
    'fake-chrome-os-update': 'Muestra una actualización falsa de Chromebook con pasos de estado que cambian.',
    'fake-ubuntu-update': 'Mira cómo se desplazan registros falsos de paquetes de Ubuntu en un terminal.',
    'fake-zoom-meeting': 'Prepara una pantalla falsa de llamada estilo Zoom para una broma o un vídeo.',
    'fake-teams-meeting': 'Muestra una pantalla de reunión estilo Teams con recuadros de participantes.',
    'fake-google-meet': 'Muestra una llamada estilo Meet con recuadros y contorno al hablar.',
    'fake-slack-huddle': 'Muestra un huddle estilo Slack con aros al hablar y un contador en directo.',
    'fake-radar-screen': 'Pon un barrido de radar de ciencia ficción con señales como atrezo o fondo.',
  },
  backgrounds: {
    'white-background': 'Descarga un fondo blanco puro en 4K, tamaño de móvil o personalizado.',
    'black-background': 'Consigue un fondo negro puro en PNG o como CSS, en cualquier tamaño.',
    'orange-background': 'Descarga un fondo naranja cálido para el móvil o el escritorio.',
    'gradient-background': 'Descarga este degradado suave en PNG o cópialo como CSS.',
    'neon-background': 'Guarda este brillo neón como fondo 4K o fondo para el móvil.',
    'red-background': 'Descarga un fondo rojo intenso en cualquier tamaño o copia el CSS.',
    'yellow-background': 'Descarga un fondo amarillo brillante para diapositivas, móviles o escritorios.',
    'blue-background': 'Descarga un fondo azul limpio en PNG en 4K o tamaño de móvil.',
    'green-screen-background': 'Muestra esta pantalla verde a pantalla completa como croma, o descárgala.',
    'virtual-office': 'Descarga un fondo de oficina virtual para tu próxima videollamada.',
    'graph-paper': 'Descarga una cuadrícula de papel milimetrado en PNG o cópiala como CSS.',
    'pink-background': 'Descarga un fondo rosa para el móvil, el escritorio o tus historias.',
    'light-pink-background': 'Descarga un fondo rosa claro y suave en el tamaño que necesites.',
    'green-background': 'Descarga un fondo verde fresco en PNG o copia el CSS.',
    'purple-background': 'Descarga un fondo morado intenso para el móvil o el escritorio.',
    'dark-background': 'Descarga un fondo oscuro que no cansa la vista, en cualquier tamaño.',
    'gold-background': 'Descarga un fondo degradado dorado para invitaciones, diapositivas o móviles.',
    'aesthetic-background': 'Descarga un fondo estético y suave para el móvil o el escritorio.',
    'beige-background': 'Descarga un fondo beige cálido en PNG o copia el CSS.',
    'pastel-background': 'Descarga un fondo degradado pastel para móviles, diapositivas o publicaciones.',
  },
}
