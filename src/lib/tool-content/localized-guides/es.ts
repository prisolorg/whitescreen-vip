import type { LanguageGuides } from './types'
import { DvdScreensaverGuideEs } from '@/components/home/i18n/es/dvd-screensaver-guide'
import { BrokenScreenGuideEs } from '@/components/home/i18n/es/broken-screen-guide'
import { FakeZoomMeetingGuideEs } from '@/components/home/i18n/es/fake-zoom-meeting-guide'
import { FakeWindowsUpdateGuideEs } from '@/components/home/i18n/es/fake-windows-update-guide'
import { FakeWindows11UpdateGuideEs } from '@/components/home/i18n/es/fake-windows-11-update-guide'
import { FakeBsodGuideEs } from '@/components/home/i18n/es/fake-bsod-guide'
import { FakeMacUpdateGuideEs } from '@/components/home/i18n/es/fake-mac-update-guide'
import { PomodoroTimerGuideEs } from '@/components/home/i18n/es/pomodoro-timer-guide'
import { FlipClockGuideEs } from '@/components/home/i18n/es/flip-clock-guide'
import { ZoomLightingGuideEs } from '@/components/home/i18n/es/zoom-lighting-guide'
import { CountdownTimerGuideEs } from '@/components/home/i18n/es/countdown-timer-guide'
import { RingLightGuideEs } from '@/components/home/i18n/es/ring-light-guide'
import { StopwatchGuideEs } from '@/components/home/i18n/es/stopwatch-guide'
import { RefreshRateGuideEs } from '@/components/home/i18n/es/refresh-rate-guide'
import { DeadPixelGuideEs } from '@/components/home/i18n/es/dead-pixel-guide'
import { TouchScreenGuideEs } from '@/components/home/i18n/es/touch-screen-guide'
import { MonitorGhostingGuideEs } from '@/components/home/i18n/es/monitor-ghosting-guide'
import { MonitorTestGuideEs } from '@/components/home/i18n/es/monitor-test-guide'
import { ScreenBurnInGuideEs } from '@/components/home/i18n/es/screen-burn-in-guide'
import { ScreenResolutionGuideEs } from '@/components/home/i18n/es/screen-resolution-guide'
import { ScreenColorGuideEs } from '@/components/home/i18n/es/screen-color-guide'
import { FrameRateGuideEs } from '@/components/home/i18n/es/frame-rate-guide'
import { OledGrayGuideEs } from '@/components/home/i18n/es/oled-gray-guide'
import { HackedScreenGuideEs } from '@/components/home/i18n/es/hacked-screen-guide'
import { NoSignalGuideEs } from '@/components/home/i18n/es/no-signal-guide'
import { WhiteScreenGuideEs } from '@/components/home/i18n/es/white-screen-guide'
import { BlackScreenGuideEs } from '@/components/home/i18n/es/black-screen-guide'
import { YellowScreenGuideEs } from '@/components/home/i18n/es/yellow-screen-guide'
import { GreenScreenGuideEs } from '@/components/home/i18n/es/green-screen-guide'
import { BlueScreenGuideEs } from '@/components/home/i18n/es/blue-screen-guide'
import { RedScreenGuideEs } from '@/components/home/i18n/es/red-screen-guide'
import { PinkScreenGuideEs } from '@/components/home/i18n/es/pink-screen-guide'

/** Spanish (tú, Spanish UI button names, Spanish search terms). */
export const es: LanguageGuides = {
  tools: {
    'dvd-screensaver': {
      Guide: DvdScreensaverGuideEs,
      faqs: [
        {
          question: '¿Es el logo oficial de DVD?',
          answer:
            'No. El salvapantallas DVD dibuja en tu navegador un logo estilo DVD y no está afiliado a DVD Format/Logo Licensing Corporation, propietaria del logo de DVD Video.',
        },
        {
          question: '¿Por qué cambia de color el logo del salvapantallas DVD?',
          answer:
            'Como en el clásico salvapantallas de los reproductores de DVD, el logo elige un color nuevo cada vez que toca un borde y nunca repite el mismo color dos veces seguidas.',
        },
        {
          question: '¿Puedo usar el salvapantallas DVD como salvapantallas real en Windows o Mac?',
          answer:
            'Funciona en tu navegador en lugar de instalarse como salvapantallas del sistema. Ábrelo a pantalla completa cuando el ordenador esté inactivo; el salvapantallas y los ajustes de reposo de tu sistema siguen aplicándose.',
        },
      ],
    },
    'broken-screen': {
      Guide: BrokenScreenGuideEs,
      faqs: [
        {
          question: '¿Puede la broma de la pantalla rota dañar mi pantalla?',
          answer: 'No. Es solo una imagen dibujada en tu navegador. Pulsa Esc o cierra la pestaña y la pantalla vuelve a la normalidad.',
        },
        {
          question: '¿Funciona la broma de la pantalla rota en un Chromebook?',
          answer:
            'Sí. Funciona en cualquier navegador moderno, incluidos Chromebooks, ordenadores Windows y Mac, móviles, tabletas y navegadores de smart TV. No se instala nada.',
        },
        {
          question: '¿Cómo uso la broma de la pantalla rajada de forma responsable?',
          answer: 'Que sea corta, elige a alguien que se vaya a reír, no la uses nunca para conseguir dinero o información y revela la broma enseguida.',
        },
      ],
    },
    'fake-zoom-meeting': {
      Guide: FakeZoomMeetingGuideEs,
      faqs: [
        {
          question: '¿Esta reunión falsa de Zoom está conectada a Zoom?',
          answer:
            'No. Es una simulación independiente estilo Zoom y no está afiliada a Zoom Video Communications. Nadie puede unirse y no se envía nada a ninguna parte.',
        },
        {
          question: '¿La reunión falsa de Zoom usa mi cámara?',
          answer:
            'Solo si activas Activar vista previa de la cámara. Tu vídeo aparece en tu propio recuadro y nunca sale de tu dispositivo; no se graba ni se sube nada. El micrófono no se usa nunca.',
        },
        {
          question: '¿La reunión falsa de Zoom tiene audio?',
          answer: 'No, es silenciosa. Para un vídeo de reunión falsa, añade sonido o conversación en tu editor de vídeo.',
        },
      ],
    },
    'fake-windows-10-update': {
      Guide: FakeWindowsUpdateGuideEs,
      faqs: [
        {
          question: '¿Puede una actualización falsa de Windows dañar mi ordenador?',
          answer: 'No. Es solo una página en tu navegador. No se instala ni se cambia nada, y al pulsar Esc o cerrar la pestaña se termina.',
        },
        {
          question: '¿Puedo hacer que la actualización falsa de Windows parezca atascada?',
          answer: 'Sí. Pulsa Pausa y el porcentaje se detiene donde está. Abre Más para cambiar lo rápido que sube.',
        },
        {
          question: '¿Funciona la actualización falsa de Windows en un Mac o un Chromebook?',
          answer: 'Sí. Funciona en cualquier navegador moderno, así que también puedes mostrar una actualización falsa de Windows en un Mac, un Chromebook o una tableta.',
        },
      ],
    },
    'fake-blue-screen-of-death': {
      Guide: FakeBsodGuideEs,
      faqs: [
        {
          question: '¿Puede una pantalla azul de la muerte falsa dañar mi ordenador?',
          answer: 'No. Es una imagen en tu navegador. El ordenador sigue funcionando con normalidad, y al pulsar Esc o cerrar la pestaña se termina.',
        },
        {
          question: '¿Por qué ahora la pantalla azul de la muerte es negra?',
          answer: 'Las versiones más recientes de Windows 11 muestran la pantalla de error en negro en lugar de azul. Elige Negro (nuevo) en el menú Estilo para ese aspecto.',
        },
        {
          question: '¿Puedo cambiar el código de detención de la pantalla azul de la muerte?',
          answer: 'Sí. Abre Más y elige un código de detención, como CRITICAL_PROCESS_DIED o MEMORY_MANAGEMENT. Se actualiza en la pantalla al instante.',
        },
      ],
    },
    'fake-windows-11-update': {
      Guide: FakeWindows11UpdateGuideEs,
      faqs: [
        {
          question: '¿Es real la actualización falsa de Windows 11?',
          answer: 'No. Es una página en tu navegador que se parece a la pantalla de actualización de Windows 11. No se instala nada, y Esc o cerrar la pestaña la termina.',
        },
        {
          question: '¿Cuánto dura la actualización falsa de Windows 11?',
          answer: 'Nunca termina: el porcentaje vuelve a empezar después del 100 %. Usa Pausa para dejarlo fijo en un número, o abre Más para cambiar la velocidad.',
        },
        {
          question: '¿Puedo usar la actualización falsa de Windows 11 en un Mac o un Chromebook?',
          answer: 'Sí. Funciona en cualquier navegador moderno, así que la pantalla de actualización de Windows 11 también va en Macs, Chromebooks, tabletas y móviles.',
        },
      ],
    },
    'fake-mac-update': {
      Guide: FakeMacUpdateGuideEs,
      faqs: [
        {
          question: '¿Esta actualización falsa de Mac la ha hecho Apple?',
          answer: 'No. Es una simulación independiente de una pantalla de actualización estilo macOS y no está afiliada a Apple. No se instala ni se cambia nada en tu Mac.',
        },
        {
          question: '¿Puedo hacer que la actualización falsa de Mac dure horas?',
          answer:
            'Pon la duración de la actualización en 120 minutos en Más. Cuando la barra se llena, la pantalla se reinicia y la actualización empieza de nuevo, así que puede durar todo lo que quieras.',
        },
      ],
    },
    'pomodoro-timer': {
      Guide: PomodoroTimerGuideEs,
      faqs: [
        {
          question: '¿Qué es un temporizador Pomodoro?',
          answer:
            'Un temporizador Pomodoro divide el trabajo en bloques de concentración, normalmente de 25 minutos, con un descanso corto después de cada uno y uno más largo después de cuatro. Sigue la técnica Pomodoro de Francesco Cirillo.',
        },
        {
          question: '¿Cuánto dura un pomodoro?',
          answer: 'Tradicionalmente, 25 minutos de concentración seguidos de un descanso de 5 minutos. Puedes cambiar ambos, por ejemplo a 50 y 10 minutos, en Más.',
        },
        {
          question: '¿El temporizador Pomodoro funciona en el móvil?',
          answer: 'Sí. Ábrelo en el navegador del móvil y pulsa Iniciar. Deja la pestaña abierta para oír el aviso cuando termine cada fase.',
        },
        {
          question: '¿Este temporizador Pomodoro es gratis?',
          answer: 'Sí. Es totalmente gratis, sin registro, sin app y sin anuncios en el propio temporizador.',
        },
      ],
    },
    'flip-clock-screensaver': {
      Guide: FlipClockGuideEs,
      faqs: [
        {
          question: '¿El reloj flip mantiene la pantalla encendida?',
          answer: 'Sí, a pantalla completa. Los navegadores compatibles mantienen la pantalla encendida mientras está a pantalla completa, así que puede funcionar todo el día como reloj de escritorio.',
        },
        {
          question: '¿Puedo ver la hora en formato de 12 horas?',
          answer: 'Sí. Desactiva Formato de 24 horas y el reloj pasa al formato de 12 horas con la etiqueta AM o PM.',
        },
        {
          question: '¿Puedo usarlo como salvapantallas en Windows o Mac?',
          answer: 'Funciona en tu navegador en lugar de instalarse como salvapantallas del sistema. Ábrelo a pantalla completa en una pantalla libre o cuando el ordenador esté inactivo.',
        },
      ],
    },
    'zoom-lighting': {
      Guide: ZoomLightingGuideEs,
      faqs: [
        {
          question: '¿Puedo usar la luz para videollamadas en el mismo portátil de la llamada?',
          answer:
            'Funciona mejor en una segunda pantalla, tableta o móvil colocado detrás de la webcam, para que la llamada siga visible. En un solo portátil, la luz a pantalla completa taparía la ventana de Zoom.',
        },
        {
          question: '¿Cuál es la mejor temperatura de color para la luz de videollamadas?',
          answer: 'Neutra (4500 K) va bien en la mayoría de habitaciones. Elige Luz de día (6500 K) para igualar la luz de la ventana, o Cálida (3000 K) para un aspecto más suave por la noche.',
        },
        {
          question: '¿Es gratis?',
          answer: 'Sí. Es gratis en cualquier navegador, sin app ni registro, y funciona con Zoom, Teams, Google Meet y cualquier otra videollamada.',
        },
      ],
    },
    'countdown-timer': {
      Guide: CountdownTimerGuideEs,
      faqs: [
        {
          question: '¿Qué duraciones puedo poner en la cuenta atrás?',
          answer:
            'Cualquier duración hasta 99 horas, 59 minutos y 59 segundos. Elige 1, 5, 10, 15, 25, 45 o 60 minutos en el menú Temporizador, o haz clic en las horas, minutos y segundos de la pantalla y escribe tu propio tiempo; luego pulsa Iniciar.',
        },
        {
          question: '¿Suena algo cuando se acaba el tiempo?',
          answer: 'Sí. Suena un aviso y la pantalla parpadea en rojo cuando se acaba el tiempo. Desactiva el sonido en Más para una cuenta atrás silenciosa.',
        },
        {
          question: '¿Puede el temporizador de cuenta atrás contar hasta una fecha?',
          answer:
            'Sí. Elige Cuenta regresiva hasta una fecha en el menú Temporizador, escoge la fecha y la hora, añade un nombre del evento si quieres y pulsa Iniciar. Muestra los días, horas, minutos y segundos que faltan, y recuerda tu cuenta atrás en este navegador cuando vuelves.',
        },
      ],
    },
    'ring-light': {
      Guide: RingLightGuideEs,
      faqs: [
        {
          question: '¿Puede una pantalla sustituir a un aro de luz de verdad?',
          answer:
            'Para videollamadas, selfies y maquillaje, una pantalla brillante funciona sorprendentemente bien. Una luz LED real es más potente y mejor para grabar en una habitación oscura o desde lejos.',
        },
        {
          question: '¿Funciona en el móvil?',
          answer: 'Sí. Ábrelo en un móvil o una tableta, sube el brillo y toca dos veces para la pantalla completa; luego orienta la pantalla hacia tu cara.',
        },
        {
          question: '¿Qué color es mejor para maquillarse?',
          answer: 'Blanco al máximo brillo, para que los colores se vean fieles. Abre Más para hacer el blanco más cálido o más frío según tu habitación.',
        },
      ],
    },
    stopwatch: {
      Guide: StopwatchGuideEs,
      faqs: [
        {
          question: '¿Qué precisión tiene el cronómetro?',
          answer:
            'Usa el reloj de alta precisión de tu navegador y muestra el tiempo hasta la centésima de segundo. Si la pestaña pasa a segundo plano, el tiempo sigue siendo correcto cuando vuelves.',
        },
        {
          question: '¿Qué atajos de teclado tiene?',
          answer: 'La barra espaciadora inicia y pausa, L registra una vuelta y R vuelve a cero.',
        },
        {
          question: '¿Puedo guardar mis vueltas?',
          answer: 'Sí. Pulsa Copiar vueltas para copiar todas las vueltas con su tiempo parcial y total, y pégalas en una hoja de cálculo, una nota o un mensaje.',
        },
      ],
    },
    'screen-refresh-rate-test': {
      Guide: RefreshRateGuideEs,
      faqs: [
        {
          question: '¿Qué precisión tiene la prueba de frecuencia de actualización?',
          answer:
            'Muy cercana en la mayoría de pantallas. Mide cientos de fotogramas y redondea a la frecuencia común más cercana. Las pestañas cargadas, el ahorro de batería o un ordenador lento pueden dar una lectura menor, así que cierra otras apps y pulsa Medir de nuevo.',
        },
        {
          question: '¿Por qué mi monitor de 144 Hz marca 60 Hz?',
          answer:
            'Probablemente la pantalla está configurada a 60 Hz. Elige la frecuencia más alta en los ajustes de pantalla y usa un cable y un puerto que la admitan, como DisplayPort o un cable HDMI de alta velocidad.',
        },
        {
          question: '¿La prueba de frecuencia de actualización funciona en móviles?',
          answer: 'Sí. Ábrela en el navegador del móvil. Desactiva antes el modo de ahorro de energía, porque a menudo limita la pantalla a 60 Hz.',
        },
      ],
    },
    'dead-pixel-test': {
      Guide: DeadPixelGuideEs,
      faqs: [
        {
          question: '¿Cuánto dura una prueba de píxeles muertos?',
          answer: 'Alrededor de un minuto. Pasa por los 9 colores a pantalla completa y revisa toda la pantalla con cada uno.',
        },
        {
          question: '¿Es normal tener un píxel muerto?',
          answer:
            'Pasa, y muchos fabricantes solo cambian una pantalla a partir de cierto número de píxeles defectuosos. Consulta la política de garantía de tu monitor, portátil o móvil.',
        },
        {
          question: '¿Qué diferencia hay entre un píxel muerto y un píxel atascado?',
          answer:
            'Un píxel muerto nunca se enciende y se ve negro. Un píxel atascado se queda fijo en un color, como rojo, verde o azul, y a veces se puede arreglar haciendo parpadear colores sobre él.',
        },
      ],
    },
    'touch-screen-test': {
      Guide: TouchScreenGuideEs,
      faqs: [
        {
          question: '¿Cómo pruebo si mi pantalla táctil tiene zonas muertas?',
          answer: 'Elige Cuadrícula de zonas muertas y desliza el dedo por todas las casillas. Las casillas que siguen oscuras después de tocarlas son zonas muertas.',
        },
        {
          question: '¿La prueba de pantalla táctil funciona en iPhone?',
          answer: 'Sí. Funciona en Safari y otros navegadores del iPhone, y también en móviles Android, tabletas y portátiles con pantalla táctil.',
        },
        {
          question: '¿Cuántos puntos táctiles debería admitir mi móvil?',
          answer: 'La mayoría de móviles y tabletas detectan de 5 a 10 a la vez. Usa Multitáctil y fíjate en Máx. para ver cuántos admite el tuyo.',
        },
      ],
    },
    'monitor-ghosting-test': {
      Guide: MonitorGhostingGuideEs,
      faqs: [
        {
          question: '¿Todos los monitores tienen algo de ghosting?',
          answer:
            'La mayoría de monitores LCD muestran un poco a velocidades altas. Es un problema cuando la estela es larga a velocidades normales o aparece un halo brillante. Entonces ajusta el overdrive y vuelve a hacer la prueba de ghosting del monitor.',
        },
        {
          question: '¿El ghosting es lo mismo que el input lag?',
          answer: 'No. El ghosting es una estela visual por píxeles lentos; el input lag es un retraso entre el ratón o el mando y la pantalla. Esta prueba solo muestra el ghosting.',
        },
        {
          question: '¿Es una prueba de anti-ghosting para teclados?',
          answer:
            'No. El anti-ghosting de teclado consiste en registrar muchas teclas pulsadas a la vez. Esta prueba de ghosting del monitor revisa las estelas de movimiento en tu pantalla.',
        },
      ],
    },
    'monitor-test': {
      Guide: MonitorTestGuideEs,
      faqs: [
        {
          question: '¿La prueba de monitor es gratis y online?',
          answer: 'Sí. Funciona en tu navegador en cualquier monitor, portátil, tele o móvil, sin descargas ni registro.',
        },
        {
          question: '¿Cómo pruebo un monitor nuevo?',
          answer:
            'Pasa los patrones de prueba de monitor a pantalla completa en la resolución nativa y luego la [prueba de píxeles muertos](/dead-pixel-test) y la [prueba de uniformidad](/screen-uniformity-test). El mejor momento es mientras aún puedes devolverlo.',
        },
        {
          question: '¿Una prueba de monitor puede calibrar mi pantalla?',
          answer:
            'Te ayuda a ajustar a ojo el brillo, el contraste y la gamma. Una calibración precisa necesita un colorímetro de hardware o la herramienta de calibración de tu sistema.',
        },
      ],
    },
    'screen-burn-in-test': {
      Guide: ScreenBurnInGuideEs,
      faqs: [
        {
          question: '¿Cuánto tarda una pantalla en quemarse?',
          answer:
            'Normalmente cientos o miles de horas con la misma imagen fija, a menudo con el brillo alto. La retención de imagen en LCD puede aparecer tras unas horas, pero se desvanece.',
        },
        {
          question: '¿Cuánto tiempo debo usar el reparador de quemado?',
          answer: 'Empieza con 10 a 30 minutos y luego vuelve a hacer la prueba de quemado de pantalla. Repite varias veces; si no cambia nada, el quemado probablemente es permanente.',
        },
        {
          question: '¿La prueba de quemado de pantalla funciona en móviles?',
          answer:
            'Sí. Ábrela en el navegador del móvil, sube el brillo y toca dos veces para la pantalla completa. En móviles OLED y AMOLED, prueba también la [prueba de quemado OLED](/oled-burn-in-test).',
        },
      ],
    },
    'screen-resolution-test': {
      Guide: ScreenResolutionGuideEs,
      faqs: [
        {
          question: '¿Por qué mi resolución de pantalla es menor que la de mi monitor?',
          answer:
            'Por el escalado de pantalla. Con un escalado del 150 %, un monitor de 2560 × 1440 indica 1707 × 960 al navegador. La lectura Píxeles físicos multiplica por la proporción de píxeles para mostrar el número real.',
        },
        {
          question: '¿Es precisa la prueba de resolución?',
          answer: 'Muestra exactamente lo que indica tu navegador. Mantén el zoom al 100 % para que el número de píxeles físicos coincida con tu pantalla.',
        },
        {
          question: '¿Qué resolución debería tener?',
          answer: 'La resolución nativa de tu monitor, marcada como Recomendado en la configuración de pantalla de Windows. Cualquier otra puede verse borrosa.',
        },
      ],
    },
    'screen-color-test': {
      Guide: ScreenColorGuideEs,
      faqs: [
        {
          question: '¿La prueba de color de pantalla es gratis?',
          answer: 'Sí. Funciona en tu navegador en cualquier monitor, portátil, tele o móvil, sin descargas ni registro.',
        },
        {
          question: '¿Por qué los colores se ven distintos en mi móvil y en mi monitor?',
          answer:
            'Las pantallas difieren en tipo de panel, modo de color y calibración. Haz la prueba de color de pantalla en ambos con el modo nocturno desactivado y compara las rampas RGB.',
        },
        {
          question: '¿Un test de colores puede arreglar los colores de mi pantalla?',
          answer: 'No, muestra los problemas. Corrige los tintes con la temperatura de color o el modo de imagen de tu pantalla, o con la herramienta de calibración de tu sistema.',
        },
      ],
    },
    'frame-rate-test': {
      Guide: FrameRateGuideEs,
      faqs: [
        {
          question: '¿Por qué la prueba de FPS marca 60 en mi monitor de 144 Hz?',
          answer:
            'Probablemente el monitor está configurado a 60 Hz, el cable no admite más o el portátil está ahorrando energía. Revisa los ajustes de pantalla y vuelve a hacer la prueba de FPS.',
        },
        {
          question: '¿El ojo humano puede ver más de 60 FPS?',
          answer: 'Sí. La mayoría de la gente nota un movimiento más fluido a 120 FPS y más. Compara el carril de 60 FPS con el carril máximo en una pantalla de alta frecuencia.',
        },
        {
          question: '¿La prueba de FPS funciona en móviles?',
          answer: 'Sí. Ábrela en el navegador del móvil y toca dos veces para la pantalla completa. Los móviles con pantallas de 90 o 120 Hz muestran un carril máximo más fluido.',
        },
      ],
    },
    'oled-gray-test': {
      Guide: OledGrayGuideEs,
      faqs: [
        {
          question: '¿Es normal algo de mura en un OLED?',
          answer: 'Sí. Las manchas tenues en los fondos del 1 % al 5 % son habituales. Solo es un problema si las notas en películas y juegos normales.',
        },
        {
          question: '¿La prueba gris para OLED funciona en pantallas LCD?',
          answer: 'Sí, pero las LCD muestran en el gris oscuro el brillo y las fugas de la retroiluminación. Para ellas encaja mejor la [prueba de uniformidad](/screen-uniformity-test).',
        },
        {
          question: '¿Qué brillo debo usar?',
          answer: 'Un brillo medio en una habitación oscura. Un brillo muy alto puede ocultar problemas cerca del negro, y uno muy bajo puede exagerarlos.',
        },
      ],
    },
    'hacked-screen': {
      Guide: HackedScreenGuideEs,
      faqs: [
        {
          question: '¿Es segura la broma de la pantalla hackeada?',
          answer: 'Sí. Es una página web que solo muestra animaciones. No instala nada y no toca archivos, la webcam ni la red.',
        },
        {
          question: '¿Cómo cierro la pantalla hackeada?',
          answer: 'Pulsa Esc para salir de la pantalla completa y luego cierra la pestaña.',
        },
        {
          question: '¿Funciona en móviles?',
          answer: 'Sí. Ábrela en el navegador del móvil y toca dos veces para la pantalla completa. La sirena necesita un toque primero, porque los móviles bloquean el sonido hasta que interactúas.',
        },
      ],
    },
    'no-signal-screen': {
      Guide: NoSignalGuideEs,
      faqs: [
        {
          question: '¿Cómo muestro la pantalla sin señal en mi tele?',
          answer: 'Abre la página en el navegador de la tele, o envía la pantalla o conecta un portátil, y luego pulsa F o toca Pantalla completa.',
        },
        {
          question: '¿Puedo cambiar el texto SIN SEÑAL?',
          answer: 'Sí. Abre Más para escribir tu propio mensaje (hasta 24 caracteres) y el nombre de la entrada, como HDMI 2 o AV.',
        },
        {
          question: '¿Qué es el pitido de las barras de color de la tele?',
          answer: 'Un tono de prueba constante de 1 kHz que las cadenas emitían con las barras de color para ajustar los niveles de audio. Actívalo con el botón del tono de 1 kHz.',
        },
      ],
    },
  },
  colors: {
    white: {
      Guide: WhiteScreenGuideEs,
      faqs: [
        {
          question: '¿Cómo pongo mi pantalla completamente blanca?',
          answer: 'Abre WhiteScreen.vip, elige el blanco y activa la pantalla completa si tu navegador lo permite.',
        },
        {
          question: '¿La pantalla blanca funciona en el móvil?',
          answer: 'Sí. Puedes abrir la herramienta en un navegador móvil compatible. La pantalla completa disponible depende de tu dispositivo y tu navegador.',
        },
        {
          question: '¿Una pantalla blanca sirve para detectar píxeles muertos?',
          answer:
            'Un fondo blanco puede revelar píxeles oscuros, mientras que los fondos negro y de colores primarios ayudan a descubrir otros defectos de píxel visibles. Es una revisión visual, no un diagnóstico completo del hardware.',
        },
        {
          question: '¿Por qué se me apaga la pantalla?',
          answer:
            'El temporizador de reposo del dispositivo, los ajustes de ahorro de batería o las restricciones del navegador pueden apagar la pantalla. Revisa los ajustes de energía y usa una función para mantener la pantalla encendida si la web y el navegador la admiten.',
        },
        {
          question: '¿Es segura una pantalla blanca brillante para las pantallas OLED?',
          answer:
            'Evita dejar una imagen fija y brillante en una pantalla OLED durante periodos largos. Sigue las recomendaciones del fabricante sobre el brillo y el uso de la pantalla. Ninguna función del navegador puede garantizar que se evite el quemado.',
        },
        {
          question: '¿WhiteScreen.vip es gratis?',
          answer:
            'WhiteScreen.vip es totalmente gratis online en tu navegador. Todos los colores de pantalla, pruebas y descargas de imágenes están disponibles sin registro, sin crear una cuenta y sin instalar software.',
        },
        {
          question: '¿Qué diferencia hay entre una pantalla en blanco y una pantalla de blanco puro?',
          answer:
            'Aquí son lo mismo: una pantalla llena de blanco puro (#FFFFFF) y nada más. Elige Cálido o baja el brillo si quieres un aspecto más suave, color hueso.',
        },
        {
          question: '¿Puedo usar una pantalla blanca para calcar?',
          answer:
            'Sí. Una tableta o un monitor al brillo máximo funciona como una mesa de luz sencilla. Sujeta el papel con cinta y calca con suavidad sin apretar la pantalla.',
        },
        {
          question: '¿Una pantalla blanca ayuda a limpiar el monitor?',
          answer:
            'Una pantalla blanca hace que el polvo, las huellas y las marcas sean fáciles de ver. Apaga la pantalla antes de limpiarla y luego vuelve a abrir la pantalla blanca para buscar las manchas que se te hayan escapado.',
        },
      ],
    },
    black: {
      Guide: BlackScreenGuideEs,
      faqs: [
        {
          question: '¿Una pantalla negra ahorra batería?',
          answer:
            'En móviles, tabletas y portátiles OLED, sí: los píxeles negros están apagados. En pantallas LCD la retroiluminación sigue encendida, así que ahorra muy poco. En LCD ahorras más bajando el brillo.',
        },
        {
          question: '¿Una pantalla negra mantiene despierto mi ordenador?',
          answer:
            'Sí, mientras la página esté abierta con Mantener la pantalla encendida activado, en los navegadores compatibles. Tus ajustes de reposo normales vuelven cuando cierras la página o desactivas la opción.',
        },
        {
          question: '¿Una pantalla negra es lo mismo que apagar el monitor?',
          answer:
            'No. El monitor sigue encendido y el ordenador sigue funcionando; la pantalla solo muestra negro puro. En OLED parece apagada porque los píxeles están oscuros, mientras que una LCD sigue con la retroiluminación encendida.',
        },
        {
          question: '¿Puedo poner una pantalla de inicio o de bloqueo negra en el móvil?',
          answer: 'Sí. Descarga el tamaño de iPhone o Android desde el menú Descargar y ponlo como fondo de la pantalla de inicio o de bloqueo.',
        },
        {
          question: '¿Cómo hago un vídeo de pantalla negra?',
          answer: 'Descarga un PNG negro en 1080p o 4K, colócalo en la línea de tiempo de tu editor de vídeo y estíralo hasta la duración que necesites.',
        },
        {
          question: '¿Es mejor el negro o el blanco para limpiar un monitor?',
          answer:
            'El negro muestra claramente las huellas, marcas y manchas, sobre todo con una luz de lado. Para el polvo funciona mejor una [pantalla blanca](/). Apaga la pantalla antes de limpiarla.',
        },
      ],
    },
    yellow: {
      Guide: YellowScreenGuideEs,
      faqs: [
        {
          question: '¿Una pantalla amarilla cansa menos la vista?',
          answer:
            'El amarillo no tiene luz azul, y a mucha gente le resulta más relajante por la noche. Aun así, el amarillo al máximo brillo es intenso, así que baja el control de Brillo para una luz cálida más suave.',
        },
        {
          question: '¿Puedo hacer la pantalla amarilla más cálida o más suave?',
          answer: 'Sí. Elige Cálido para un amarillo dorado y baja el control de Brillo para una luz más tenue y suave.',
        },
        {
          question: '¿Puedo descargar una imagen de pantalla amarilla?',
          answer:
            'Sí. Usa Descargar debajo de la vista previa para guardar un PNG amarillo en 1080p, 1440p, 4K u 8K, en tamaños de móvil y tableta o en un tamaño personalizado.',
        },
      ],
    },
    green: {
      Guide: GreenScreenGuideEs,
      faqs: [
        {
          question: '¿Qué es la pantalla verde de la muerte?',
          answer:
            'Es la versión verde de la pantalla azul de la muerte de Windows, que aparece cuando falla una compilación de Windows Insider Preview. Las consolas Xbox también pueden quedarse atascadas en una pantalla de carga verde. ¿Quieres mostrar una por diversión? Prueba la [pantalla azul de la muerte falsa](/fake-blue-screen-of-death).',
        },
        {
          question: '¿Puedo usar una pantalla verde en el móvil?',
          answer:
            'Sí, para objetos pequeños y primeros planos. Abre esta página, sube el brillo, ponla a pantalla completa y activa Mantener la pantalla encendida. Para algo más grande que el móvil, usa una tela verde o un fondo en tu editor.',
        },
        {
          question: '¿Esta web de pantalla verde quita mi fondo?',
          answer:
            'No. Esta página muestra verde sólido y te permite descargar imágenes verdes. El fondo se elimina en tu app de vídeo o de streaming, como OBS, CapCut, Zoom o Teams.',
        },
      ],
    },
    blue: {
      Guide: BlueScreenGuideEs,
      faqs: [
        {
          question: '¿Esta pantalla azul es la pantalla azul de la muerte de Windows?',
          answer:
            'No. Es una pantalla de color azul liso para iluminar, hacer pruebas y editar. No muestra ningún error ni afecta a tu ordenador. ¿Buscas la pantalla de error para una broma? Prueba la [pantalla azul de la muerte falsa](/fake-blue-screen-of-death).',
        },
        {
          question: '¿Puedo usar una pantalla azul en el portátil, el PC o el móvil?',
          answer: 'Sí. Funciona en cualquier navegador moderno. Toca dos veces para la pantalla completa, activa Mantener la pantalla encendida y usa el control de Brillo para ajustar el tono.',
        },
        {
          question: '¿Por qué una pantalla azul pura se ve tan oscura?',
          answer:
            'Nuestros ojos son menos sensibles al azul, así que el azul puro se ve mucho más oscuro que el verde o el rojo con el mismo brillo. Es normal y no es un fallo.',
        },
      ],
    },
    red: {
      Guide: RedScreenGuideEs,
      faqs: [
        {
          question: '¿Puedo usar una pantalla roja en mi iPhone o móvil Android?',
          answer:
            'Sí. Abre esta página en el navegador del móvil, toca el icono de pantalla completa y activa Mantener la pantalla encendida. Baja el control de Brillo para una luz nocturna tenue.',
        },
        {
          question: '¿Por qué mi pantalla roja se ve naranja?',
          answer:
            'Normalmente la culpa es del modo de color de la pantalla o de un filtro nocturno cálido (Night Shift, Luz nocturna). Desactívalos, usa el modo estándar o sRGB y vuelve a comprobarlo.',
        },
        {
          question: '¿Puede una pantalla roja servir como luz de seguridad de cuarto oscuro?',
          answer:
            'No. Su rojo no está filtrado de forma lo bastante estrecha y es demasiado brillante para película o papel fotográfico. Usa una luz de seguridad adecuada para materiales sensibles a la luz.',
        },
      ],
    },
    pink: {
      Guide: PinkScreenGuideEs,
      faqs: [
        {
          question: '¿Qué código de color tiene este rosa?',
          answer:
            'Es #FF69B4 (RGB 255, 105, 180), a menudo llamado rosa fuerte (hot pink). Elige Cálido para un rosa coral, Frío para un rosa palo intenso o baja el control de Brillo para un rosa más oscuro.',
        },
        {
          question: '¿Puedo dejar una pantalla rosa encendida 10 horas?',
          answer:
            'Sí. Activa Mantener la pantalla encendida y la pantalla seguirá encendida mientras la página esté abierta, en los navegadores compatibles. Enchufa el portátil o el móvil para sesiones largas.',
        },
        {
          question: '¿Por qué mi pantalla rosa se ve morada?',
          answer:
            'La pantalla está dando demasiado azul. Elige Cálido debajo de la vista previa, o pon tu pantalla en una temperatura de color más cálida o en el modo sRGB.',
        },
      ],
    },
  },
  glanceHeadings: {
    'dvd-screensaver': '¿Qué es el salvapantallas DVD?',
    'broken-screen': '¿Qué es el efecto pantalla rota?',
    'fake-zoom-meeting': '¿Qué es una pantalla falsa de reunión de Zoom?',
    'fake-windows-10-update': '¿Qué es una actualización falsa de Windows 10?',
    'fake-windows-11-update': '¿Qué es una actualización falsa de Windows 11?',
    'fake-blue-screen-of-death': '¿Qué es una pantalla azul de la muerte falsa?',
    'fake-mac-update': '¿Qué es una actualización falsa de Mac?',
    'pomodoro-timer': '¿Qué es un temporizador Pomodoro?',
    'flip-clock-screensaver': '¿Qué es un reloj flip?',
    'zoom-lighting': '¿Qué es una luz para videollamadas?',
    'countdown-timer': '¿Qué es un temporizador de cuenta atrás?',
    'ring-light': '¿Qué es un aro de luz online?',
    stopwatch: '¿Qué es un cronómetro a pantalla completa?',
    'screen-refresh-rate-test': '¿Qué es una prueba de frecuencia de actualización?',
    'dead-pixel-test': '¿Qué es una prueba de píxeles muertos?',
    'touch-screen-test': '¿Qué es una prueba de pantalla táctil?',
    'monitor-ghosting-test': '¿Qué es una prueba de ghosting del monitor?',
    'monitor-test': '¿Qué es una prueba de monitor?',
    'screen-burn-in-test': '¿Qué es una prueba de quemado de pantalla?',
    'screen-resolution-test': '¿Qué es una prueba de resolución de pantalla?',
    'screen-color-test': '¿Qué es una prueba de color de pantalla?',
    'frame-rate-test': '¿Qué es una prueba de FPS?',
    'oled-gray-test': '¿Qué es una prueba gris para OLED?',
    'hacked-screen': '¿Qué es un simulador de pantalla hackeada?',
    'no-signal-screen': '¿Qué es una pantalla sin señal?',
    'white-screen': '¿Qué es una pantalla blanca?',
    'black-screen': '¿Qué es una pantalla negra?',
    'yellow-screen': '¿Qué es una pantalla amarilla?',
    'green-screen': '¿Qué es una pantalla verde?',
    'blue-screen': '¿Qué es una pantalla azul?',
    'red-screen': '¿Qué es una pantalla roja?',
    'pink-screen': '¿Qué es una pantalla rosa?',
  },
}
