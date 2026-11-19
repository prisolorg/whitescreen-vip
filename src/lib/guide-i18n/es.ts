import type { GuideTranslation } from './types'

export const es: Record<string, GuideTranslation> = {
  'dead-pixel-test': {
    slug: 'prueba-de-pixeles-muertos',
    navLabel: 'Prueba de píxeles muertos',
    title: 'Prueba de píxeles muertos: cómo detectar píxeles muertos, atascados y calientes en cualquier pantalla',
    metaTitle: 'Prueba de píxeles muertos: detecta píxeles muertos y atascados',
    metaDescription:
      'Aprende a hacer una prueba de píxeles muertos en Windows, Mac, iPhone y Android. Detecta píxeles muertos, atascados y calientes con colores primarios a pantalla completa, paso a paso.',
    readingTime: '6 min de lectura',
    category: 'Diagnóstico de pantalla',
    intro:
      'Todos los paneles modernos (LCD, IPS, VA u OLED) están formados por millones de diminutos subpíxeles rojos, verdes y azules controlados por microtransistores. Cuando un transistor falla o se queda atascado, aparece un defecto molesto que puede estorbar al leer, editar fotos o jugar. Probar la pantalla con colores primarios a pantalla completa es el método más rápido y fiable para detectar anomalías de píxeles dentro del plazo de devolución o antes de que caduque la garantía.',
    toolLabel: 'Abrir la prueba de píxeles muertos',
    toolDescription: 'Recorre pantallas rojas, verdes, azules, negras y blancas a pantalla completa para detectar anomalías.',
    sections: [
      {
        title: 'Píxeles muertos, atascados y calientes: cómo distinguirlos',
        content: [
          'No todos los defectos de píxel se ven ni se comportan igual. Identificar su naturaleza exacta te ayuda a saber si un ciclo de software podría desbloquearlo o si hace falta cambiar el panel por garantía.',
          'Un píxel muerto aparece cuando el transistor que lo controla se queda completamente apagado. En las pantallas LCD con retroiluminación, se ve como un punto negro permanente, sea cual sea el color que muestre el resto de la pantalla.',
          'Un píxel atascado aparece cuando uno o dos subpíxeles (rojo, verde o azul) se quedan encendidos de forma permanente mientras los demás funcionan con normalidad. Se ve como un punto de color brillante y fijo sobre fondos oscuros o contrastados.',
          'Un píxel caliente se produce cuando los tres subpíxeles se quedan encendidos al máximo a la vez, creando un punto blanco permanente que destaca mucho sobre el negro y el contenido oscuro.',
        ],
        tips: [
          'Los píxeles muertos son puntos negros visibles sobre pantallas blancas, rojas, verdes o azules.',
          'Los píxeles atascados son puntos de color (rojo, verde o azul) visibles sobre fondos oscuros.',
          'Los píxeles calientes aparecen como puntitos blancos permanentes sobre fondos oscuros.',
        ],
      },
      {
        title: 'Primer paso clave: limpia antes de diagnosticar',
        content: [
          'Un número sorprendente de supuestos «píxeles muertos» resultan ser motas de polvo microscópicas, gotitas secas de un estornudo o pequeñas salpicaduras de grasa atrapadas en el cristal.',
          'Antes de concluir que el panel tiene un defecto de hardware, limpia la pantalla con suavidad con un paño de microfibra óptica limpio y seco, con el monitor apagado. No rasques nunca con las uñas: puedes rayar para siempre los filtros polarizadores antirreflejo.',
        ],
      },
      {
        title: 'Guía de prueba paso a paso para todos los dispositivos',
        content: ['Sigue estas instrucciones para probar a fondo monitores de escritorio, portátiles, tabletas y móviles.'],
        steps: [
          'Abre la prueba de píxeles muertos de WhiteScreen.vip y pasa a pantalla completa para quitar barras de dirección, barras de tareas y demás elementos.',
          'Revisa primero la pantalla blanca: recorre el panel despacio de la esquina superior izquierda a la inferior derecha buscando puntos negros fijos (píxeles muertos).',
          'Cambia a negro: busca puntos blancos brillantes (píxeles calientes) o puntitos de color (píxeles atascados).',
          'Recorre rojo, verde y azul puros: cada color primario prueba un canal de subpíxel concreto. Un subpíxel que falla mostrará un punto oscurecido o de otro color.',
          'En Windows o macOS: pon el brillo del monitor al 80–100 % y mira la pantalla de frente, en perpendicular, para evitar la difracción óptica.',
          'En iPhone o Android: asegúrate de que no queden márgenes del navegador o guarda las muestras en la galería para verlas a pantalla completa.',
        ],
      },
      {
        title: 'Límites de las pruebas en el navegador y la verdad sobre la garantía',
        content: [
          'Las herramientas de prueba en el navegador ofrecen un diagnóstico visual inmediato y preciso, porque encienden cada píxel al 100 % de saturación sin artefactos de compresión de vídeo.',
          'Desconfía, eso sí, de las webs que aseguran que los destellos de color o los vídeos en bucle reparan por arte de magia los píxeles muertos permanentes. Un ejercitador rápido de subpíxeles puede desbloquear a veces un transistor de cristal líquido perezoso, pero un circuito cortado o un transistor quemado no se arreglan con software.',
          'Consulta la clasificación de defectos de píxel de tu fabricante (ISO 9241-307 / ISO 13406-2). La mayoría de garantías de monitores de consumo exigen entre 3 y 5 subpíxeles muertos, o al menos un píxel muerto en la zona central, para aceptar un cambio gratuito.',
        ],
        checklist: [
          'Comprueba el número de defectos según la política de garantía del fabricante dentro del plazo de devolución de 14 a 30 días.',
          'Haz una foto macro del defecto con el móvil como prueba para el servicio de atención al cliente.',
          'Pregunta si tu tienda ofrece garantía de «cero píxeles muertos» durante el periodo inicial de compra.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Puede una prueba en el navegador arreglar un píxel muerto?',
        answer:
          'No. Si un transistor está roto o quemado, el software no puede repararlo. Las utilidades de destellos rápidos a veces liberan subpíxeles atascados, pero los píxeles muertos permanentes requieren cambiar el panel.',
      },
      {
        question: '¿Por qué los píxeles atascados a veces desaparecen solos?',
        answer:
          'En los paneles de cristal líquido, los píxeles atascados suelen deberse a un desequilibrio de carga eléctrica o a una ligera tensión física. Al calentarse o enfriarse la pantalla, la dilatación térmica y los ciclos de voltaje pueden devolver a veces la orientación normal del cristal líquido.',
      },
      {
        question: '¿Cómo distingo el polvo en la pantalla de un píxel muerto?',
        answer:
          'Cambia el ángulo de visión moviendo la cabeza unos 15 cm a izquierda o derecha. Como el cristal tiene grosor, el polvo de la superficie se desplaza ligeramente respecto a la capa de luz (efecto paralaje), mientras que un píxel muerto se queda fijo en la cuadrícula de píxeles.',
      },
    ],
  },
  'screen-color-test': {
    slug: 'prueba-de-color-de-pantalla',
    navLabel: 'Prueba de color de pantalla',
    title: 'Prueba de color de pantalla: cómo evaluar la precisión y el equilibrio de color de tu monitor',
    metaTitle: 'Prueba de color de pantalla: comprueba precisión y equilibrio',
    metaDescription:
      'Comprueba si tu monitor tiene dominantes de color, bandas, desvíos de gamma o mal contraste. Guía paso a paso de prueba de color para PC, Mac y móviles.',
    readingTime: '6 min de lectura',
    category: 'Calibración de pantalla',
    intro:
      'Tanto si editas fotos, etalonas vídeo, diseñas webs o igualas dos monitores en el mismo escritorio, una reproducción de color precisa es vital. Las dominantes sutiles, las rampas de gamma irregulares y las bandas de color pueden distorsionar tu trabajo sin que te des cuenta. Una prueba de color sistemática con campos de referencia a pantalla completa te permite detectar dominantes, desvíos del balance de blancos y saturación recortada sin herramientas caras.',
    toolLabel: 'Abrir la prueba de color de pantalla',
    toolDescription: 'Comprueba grises neutros, colores primarios y equilibrio de saturación en toda la pantalla.',
    sections: [
      {
        title: 'Por qué probar el color a simple vista antes de calibrar',
        content: [
          'Muchos monitores salen de fábrica con tonos azulados exagerados, verdes hipersaturados y negros aplastados para lucir vistosos en la tienda, no para ser precisos.',
          'Antes de invertir en un colorímetro, una prueba visual estructurada te ayuda a ver si tu pantalla tiene una dominante general (por ejemplo, verde o magenta en los medios tonos), negros aplastados o mucho cambio de color según el ángulo.',
        ],
        tips: [
          'Deja que el monitor se caliente al menos 30 minutos antes de evaluar colores: la temperatura de la retroiluminación cambia mientras se calienta.',
          'Apaga las luces de la habitación que proyecten reflejos de color sobre el cristal.',
        ],
      },
      {
        title: 'Procedimiento de prueba de color paso a paso',
        content: ['Sigue estos pasos de verificación en Windows, macOS y puestos con varios monitores.'],
        steps: [
          'Desactiva los filtros de color por software: Luz nocturna en Windows, True Tone y Night Shift en macOS y el escudo de confort visual en el móvil.',
          'Abre la prueba de color de WhiteScreen.vip a pantalla completa y elige la muestra de gris neutro al 50 %.',
          'Evalúa el gris: un gris neutro puro no debe verse rosado, verdoso ni azulado. Cualquier dominante visible indica que el punto blanco se ha desviado.',
          'Recorre las muestras de rojo, verde y azul: comprueba que los colores se ven uniformes de esquina a esquina, sin oscurecerse ni cambiar de tono en los bordes.',
          'Comprueba los colores secundarios (cian, magenta y amarillo): combinan varios canales de subpíxel a la vez y dejan ver desequilibrios entre canales.',
          'Revisa la alineación entre monitores: arrastra la ventana del navegador sobre la junta entre dos pantallas para ver diferencias de punto blanco entre paneles.',
        ],
      },
      {
        title: 'Cómo detectar bandas de color y límites de profundidad de bits',
        content: [
          'Las pantallas estándar de 8 bits muestran 16,7 millones de colores, mientras que los paneles modernos de 10 bits (8 bits + FRC o 10 bits reales) superan los mil millones de tonos. Cuando un monitor o el controlador gestionan mal las gradaciones, los degradados suaves se convierten en escalones visibles (bandas de color).',
          'Observa las transiciones de degradado en nuestra página de prueba de monitor. Si se ven escalonadas o con halos de color falsos, comprueba que el panel de control de tu tarjeta gráfica (NVIDIA, AMD Radeon o Intel) usa el rango RGB completo (0–255) y no el rango limitado de vídeo (16–235).',
        ],
        checklist: [
          'Pon el rango dinámico de salida en «Completo» (0–255) en los ajustes de la GPU.',
          'Elige el modo sRGB o D65 en el menú en pantalla (OSD) del monitor para una precisión web estándar.',
          'Iguala frecuencias de refresco y profundidad de color en configuraciones de dos monitores.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Por qué mi pantalla blanca se ve algo amarilla comparada con mi móvil?',
        answer:
          'Los móviles suelen usar puntos blancos fríos de 7000–7500 K, así que un monitor calibrado a 6500 K (D65) parece cálido o amarillento al lado. D65 es la temperatura de color estándar para web y vídeo.',
      },
      {
        question: '¿Qué diferencia hay entre los modos de color sRGB y DCI-P3?',
        answer:
          'sRGB es el espacio de color estándar para contenido web y ofimática. DCI-P3 abarca un espectro un 25 % más amplio y se usa en cine HDR y pantallas de móvil modernas. Para trabajo web general, fijar el monitor en sRGB evita la sobresaturación.',
      },
    ],
  },
  'screen-uniformity-test': {
    slug: 'prueba-de-uniformidad-de-pantalla',
    navLabel: 'Uniformidad de pantalla',
    title: 'Prueba de uniformidad de pantalla: cómo detectar fugas de luz, IPS glow y nubes',
    metaTitle: 'Prueba de uniformidad: fugas de luz e IPS glow',
    metaDescription:
      'Comprueba si tu monitor tiene fugas de luz, IPS glow, nubes, viñeteado o efecto de pantalla sucia (DSE) con pantallas de prueba grises y negras.',
    readingTime: '6 min de lectura',
    category: 'Diagnóstico de pantalla',
    intro:
      'Ninguna pantalla plana reparte el brillo de forma perfecta por toda su superficie. Pero las fugas de luz fuertes, un IPS glow excesivo, el viñeteado oscuro en las esquinas o el «efecto de pantalla sucia» (DSE) pueden arruinar las escenas oscuras y crear sombras molestas al navegar por webs con fondo claro. Una prueba de uniformidad estructurada con una iluminación controlada te ayuda a localizar los defectos del panel y comprobar si están dentro de las tolerancias de fabricación.',
    toolLabel: 'Abrir la prueba de uniformidad',
    toolDescription: 'Revisa campos de gris oscuro al 5 %, gris neutro al 50 %, negro y blanco con rejillas opcionales.',
    sections: [
      {
        title: 'Fugas de luz, IPS glow y nubes: la diferencia clave',
        content: [
          'Antes de devolver un monitor, es esencial distinguir un defecto real de fabricación de las características propias de la tecnología del panel.',
          'Las fugas de luz (backlight bleed) son un fallo de montaje: el panel de cristal líquido queda presionado o mal asentado en el marco y la luz LED se escapa por los bordes. Se ven como focos amarillentos o blancos fijos en los bordes, que no cambian según dónde te sientes.',
          'El IPS glow es una característica óptica natural de todos los paneles IPS. Como los cristales IPS no bloquean del todo la luz que llega en ángulo, aparece un brillo ámbar o plateado tenue en las esquinas al mirar de cerca. Si mueves la cabeza o te alejas medio metro, el glow cambia y disminuye.',
          'Las nubes y el efecto de pantalla sucia (DSE) describen una difusión desigual de la retroiluminación, que produce manchas grises visibles al desplazarse por fondos lisos, como el césped de un partido o el cielo en un videojuego.',
        ],
        tips: [
          'Las fugas de luz se quedan en el mismo sitio y con el mismo brillo sea cual sea el ángulo de visión.',
          'El IPS glow cambia de intensidad y posición al mover la cabeza de izquierda a derecha.',
          'El efecto de pantalla sucia (DSE) se ve mejor en una pantalla gris lisa al 20 % o al 50 %.',
        ],
      },
      {
        title: 'Cómo preparar bien el entorno de prueba',
        content: [
          'Probar la uniformidad en una oficina luminosa disimula las fugas de luz, mientras que hacer una foto con el móvil a oscuras y en modo nocturno exagera el glow diez veces.',
        ],
        steps: [
          'Baja la luz de la habitación a un nivel cómodo de tarde (no oscuridad total).',
          'Desactiva el contraste dinámico, el ecualizador de negros o la atenuación local en el menú del monitor.',
          'Pon el brillo a tu nivel habitual de trabajo (unos 120–150 nits, normalmente entre el 30 % y el 50 % en el menú).',
          'Abre la pantalla negra de WhiteScreen.vip a pantalla completa y siéntate a tu distancia normal (al menos un brazo).',
          'Observa las esquinas: si salen haces de luz de los bordes y no cambian al mover la cabeza, son fugas de luz.',
          'Cambia a nuestras pantallas gris 5 % y gris 50 % para buscar efecto de pantalla sucia y viñeteado del centro a los bordes.',
        ],
      },
      {
        title: 'Formas prácticas de reducir los problemas de uniformidad',
        content: [
          'Si tu pantalla tiene fugas de luz o IPS glow leves que no justifican devolverla, algunos ajustes sencillos mejoran mucho la experiencia.',
        ],
        checklist: [
          'Instala luz ambiental trasera (una tira LED de 6500 K detrás del monitor). Ayuda a que el ojo se adapte y hace que los negros parezcan mucho más profundos.',
          'Baja el brillo: usar el 100 % en una habitación oscura acentúa todas las imperfecciones de la retroiluminación.',
          'Revisa los tornillos del soporte VESA: apretarlos demasiado puede deformar la carcasa y provocar fugas por presión.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿La garantía cubre las fugas de luz?',
        answer:
          'Los fabricantes consideran normales unas fugas leves y el IPS glow. Las fugas graves, con zonas blancas claras visibles en uso normal de oficina con luz de día, suelen dar derecho a cambio por garantía.',
      },
      {
        question: '¿Las pantallas OLED tienen fugas de luz?',
        answer:
          'No. Las pantallas OLED tienen subpíxeles que emiten su propia luz y no usan retroiluminación. Los píxeles negros se apagan por completo, con contraste infinito y sin fugas de luz ni IPS glow.',
      },
    ],
  },
  'clean-laptop-screen': {
    slug: 'limpiar-pantalla-portatil',
    navLabel: 'Limpiar la pantalla del portátil',
    title: 'Cómo limpiar la pantalla del portátil sin rayas ni marcas',
    metaTitle: 'Cómo limpiar la pantalla del portátil de forma segura',
    metaDescription:
      'Guía segura paso a paso para limpiar la pantalla del portátil o del MacBook con una inspección en pantalla blanca, microfibra óptica y sin productos dañinos.',
    readingTime: '5 min de lectura',
    category: 'Limpieza y mantenimiento',
    intro:
      'Las pantallas de los portátiles, MacBook y monitores modernos tienen recubrimientos antirreflejo, películas polarizadoras y capas oleófobas muy delicadas. Los limpiacristales domésticos, el papel de cocina o apretar demasiado pueden quitar esas capas para siempre o dañar la matriz de cristal líquido. Si usas una pantalla blanca a pantalla completa como luz de inspección, verás cada mancha, mota de polvo y marca del teclado antes de limpiar con la técnica adecuada.',
    warning:
      'INSTRUCCIONES DE SEGURIDAD: apaga siempre el portátil o el monitor y desenchúfalo antes de usar un paño o un líquido. No pulverices nunca agua ni limpiador directamente sobre la pantalla, las bisagras o los bordes. Si el líquido se cuela en el borde inferior, puede destruir la retroiluminación.',
    toolLabel: 'Abrir la pantalla blanca para inspeccionar',
    toolDescription: 'Usa luz blanca a pantalla completa para ver con claridad polvo, huellas y manchas antes de limpiar.',
    sections: [
      {
        title: 'Por qué una pantalla blanca es la mejor herramienta de inspección',
        content: [
          'Cuando la pantalla está apagada o muestra un fondo oscuro, la grasa de los dedos, las marcas del teclado y el polvo fino se confunden con el negro del panel.',
          'Abrir WhiteScreen.vip a pantalla completa ilumina el panel con una luz uniforme y de alto contraste. Las motas y las manchas de grasa se ven como siluetas oscuras sobre el fondo brillante, y obtienes un mapa preciso de dónde hay que limpiar.',
        ],
      },
      {
        title: 'Limpieza segura paso a paso',
        content: ['Sigue estos pasos, aprobados por los fabricantes, para limpiar portátiles mate, pantallas brillantes y pantallas Retina de MacBook.'],
        steps: [
          'Inspecciona la pantalla con WhiteScreen.vip a pantalla completa y al 100 % de brillo para localizar suciedad, marcas de grasa del teclado y gotas secas.',
          'Apaga el portátil por completo y desconecta el cargador y los cables USB. Deja que la pantalla se enfríe 5 minutos (en una pantalla caliente la humedad se evapora de golpe y deja marcas).',
          'Usa un paño de microfibra óptica limpio y denso (como los de las gafas o los objetivos de cámara). Nunca papel de cocina, pañuelos ni camisetas.',
          'Pasa el paño con suavidad en movimientos circulares u horizontales que se solapen. Deja que las fibras levanten el polvo sin apretar el panel.',
          'Para huellas grasientas difíciles: humedece una esquina del paño con un poco de agua destilada. Debe quedar apenas húmeda, nunca goteando.',
          'Frota la mancha con la esquina húmeda y seca enseguida la zona con la parte seca del paño.',
          'Espera 3 minutos a que se evapore la humedad restante antes de cerrar la tapa o encender el equipo.',
        ],
      },
      {
        title: 'Errores comunes que estropean las pantallas',
        content: ['Muchos trucos de limpieza populares en internet causan daños irreversibles a las pantallas modernas.'],
        checklist: [
          'No uses limpiacristales domésticos: el amoniaco y el vinagre eliminan los recubrimientos antirreflejo.',
          'No uses acetona, quitaesmalte ni disolventes: deshacen al instante los recubrimientos plásticos y los marcos.',
          'No pulverices líquido directamente en la pantalla: las gotas bajan hasta el borde inferior, donde están los cables flexibles de la pantalla.',
          'No uses papel de cocina ni servilletas: las fibras de celulosa producen arañazos microscópicos permanentes.',
          'No aprietes con los dedos: la presión excesiva deja manchas blancas permanentes en el panel LCD.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Puedo usar alcohol isopropílico al 70 % en la pantalla de mi MacBook?',
        answer:
          'Apple permite toallitas de alcohol isopropílico al 70 % en el exterior y en superficies de cristal de algunos MacBook, pero recomienda frotar con suavidad. Para el mantenimiento habitual, el agua destilada en una microfibra es mucho más segura y no corre el riesgo de disolver el antirreflejo.',
      },
      {
        question: '¿Por qué agua destilada y no del grifo?',
        answer:
          'El agua del grifo lleva minerales disueltos como calcio, magnesio y cloro. Al evaporarse deja marcas calcáreas que pueden rayar las películas ópticas al frotar.',
      },
    ],
  },
  'oled-burn-in-prevention': {
    slug: 'prevenir-quemado-oled',
    navLabel: 'Quemado OLED',
    title: 'Prevenir el quemado OLED: cómo probar, prevenir y proteger las pantallas OLED',
    metaTitle: 'Guía para prevenir y detectar el quemado OLED',
    metaDescription:
      'Entiende la diferencia entre el quemado OLED y la retención temporal. Prueba tu monitor o TV OLED con pantallas de color y sigue consejos prácticos para alargar su vida.',
    readingTime: '7 min de lectura',
    category: 'Mantenimiento de pantalla',
    intro:
      'Los monitores OLED y QD-OLED ofrecen un contraste inigualable, negros profundos y tiempos de respuesta casi instantáneos. Pero como cada subpíxel es un diodo orgánico que se desgasta poco a poco con la luz emitida, los elementos estáticos (la barra de tareas de Windows, la barra de direcciones o el HUD de un juego) pueden causar un desgaste desigual con el tiempo. Entender cómo aparece el quemado, cómo detectarlo y cómo configurar el sistema protege tu inversión durante años.',
    warning:
      'AVISO HONESTO: desconfía de las herramientas engañosas. Ningún programa, destello de colores ni vídeo puede revertir el quemado OLED permanente. Cuando los subpíxeles orgánicos han perdido brillo, el daño es definitivo. Nuestras herramientas te ayudan a diagnosticarlo y prevenirlo antes de que sea irreversible.',
    toolLabel: 'Abrir la prueba de quemado OLED',
    toolDescription: 'Recorre campos rojos, magenta, cian y gris oscuro para ver siluetas tenues de elementos estáticos.',
    sections: [
      {
        title: 'Retención temporal frente a quemado permanente',
        content: [
          'Es fundamental distinguir la retención temporal de imagen del quemado permanente.',
          'La retención temporal es un fenómeno eléctrico: queda carga residual en la capa de transistores después de mostrar una imagen de alto contraste durante 15–30 minutos. Un fantasma tenue de la ventana se ve unos minutos y luego desaparece solo o durante un ciclo automático de refresco de píxeles.',
          'El quemado permanente es un desgaste acumulado y desigual de los subpíxeles. Si los subpíxeles rojos o azules de la zona de la barra de tareas han brillado al máximo durante miles de horas, emitirán menos luz que los de alrededor y dejarán una silueta oscura permanente visible en pantallas de color liso.',
        ],
        tips: [
          'La retención temporal se va en minutos o tras un refresco corto de píxeles de 5 minutos.',
          'El quemado permanente se ve en pantallas rojas, magenta y gris al 5 %, y no desaparece.',
        ],
      },
      {
        title: 'Cómo comprobar si tu pantalla OLED tiene quemado',
        content: ['Sigue estos pasos con nuestras pantallas de color a pantalla completa para detectar los primeros signos de desgaste.'],
        steps: [
          'Abre WhiteScreen.vip a pantalla completa para quitar cabeceras del navegador y barras de tareas.',
          'Elige el rojo liso: los subpíxeles rojos se desgastan antes que los verdes. Revisa con atención la zona de la barra de tareas, la barra de direcciones y las esquinas del HUD en busca de fantasmas oscuros.',
          'Elige magenta y cian lisos: los colores compuestos muestran desgastes distintos entre canales.',
          'Elige gris oscuro al 5 % y gris al 10 %: los grises casi negros revelan bandas verticales y desgaste desigual que no se ve en blanco puro.',
          'Mira a tu distancia normal: si ves contornos nítidos de iconos o barras de herramientas, el panel tiene quemado permanente.',
        ],
      },
      {
        title: 'Pautas esenciales para prevenir el quemado OLED',
        content: [
          'Los monitores OLED modernos incluyen protecciones automáticas, pero unos hábitos sencillos en el sistema son la mejor defensa contra el desgaste prematuro.',
        ],
        checklist: [
          'Activa «Ocultar automáticamente la barra de tareas» en Windows (u ocultar el Dock en macOS).',
          'Usa el modo oscuro en Windows, macOS y el navegador: los píxeles negros en OLED no consumen energía ni se desgastan.',
          'Pon la suspensión de pantalla a 3–5 minutos de inactividad para que el escritorio no quede encendido al levantarte.',
          'Usa un salvapantallas a pantalla completa, como nuestro reloj flip o la pantalla negra, cuando te alejes del escritorio.',
          'No desenchufes el monitor OLED justo después de apagarlo: en reposo hace un ciclo automático de limpieza de píxeles.',
          'Activa las protecciones del menú del monitor: desplazamiento de píxeles, limitador de brillo de logotipos y gestión térmica.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Los ejercitadores de píxeles con destellos arreglan el quemado OLED?',
        answer:
          'No. Los destellos rápidos no recuperan el material orgánico desgastado. De hecho, usar patrones de destellos agresivos al máximo brillo añade estrés térmico innecesario al panel.',
      },
      {
        question: '¿Cada cuánto debo usar el refresco profundo de píxeles?',
        answer:
          'Solo cuando el fabricante lo indique (normalmente cada 500 a 1500 horas de uso) o si una retención fuerte no desaparece. Usarlo en exceso acelera el desgaste del panel.',
      },
    ],
  },
  'monitor-test': {
    slug: 'prueba-de-monitor',
    navLabel: 'Prueba de monitor',
    title: 'Guía completa para probar un monitor: defectos, color y velocidad',
    metaTitle: 'Guía para probar un monitor nuevo paso a paso',
    metaDescription:
      'Guía completa para probar un monitor nuevo o usado: píxeles muertos, nitidez, gamma, contraste, fugas de luz y tiempo de respuesta.',
    readingTime: '6 min de lectura',
    category: 'Diagnóstico de pantalla',
    intro:
      'Estrenar monitor es emocionante, pero defectos de fabricación como subpíxeles muertos, fugas de luz excesivas, falta de uniformidad de color o una gamma incorrecta se escapan a menudo del control de calidad. Como la mayoría de tiendas ofrecen un plazo de devolución de 14 a 30 días, hacer una prueba completa de 15 minutos en cuanto llega es la mejor forma de asegurarte de que el panel está perfecto.',
    toolLabel: 'Abrir la prueba de monitor completa',
    toolDescription: 'Patrones de prueba completos: degradados, cartas de gamma, rejillas de nitidez y barras de color.',
    sections: [
      {
        title: 'Lista de comprobación de 6 pasos para un monitor nuevo',
        content: ['Antes de tirar la caja o registrar la garantía, haz esta evaluación del panel en 6 fases.'],
        steps: [
          '1. Inspección física y de cables: asegúrate de que el cable DisplayPort o HDMI admite la resolución nativa, la frecuencia de refresco (p. ej., 144–240 Hz) y la profundidad de color de 10 bits del monitor.',
          '2. Píxeles muertos: abre pantallas blanca, negra, roja, verde y azul a pantalla completa y revisa cada cuadrante en busca de subpíxeles atascados o muertos.',
          '3. Uniformidad y fugas de luz: en una habitación con poca luz, revisa una pantalla negra para ver fugas en los bordes y una gris al 50 % para el efecto de pantalla sucia.',
          '4. Gamma y contraste: mira nuestra rampa de grises para comprobar que los pasos casi negros (1–5 %) y casi blancos (95–99 %) se distinguen sin aplastarse ni recortarse.',
          '5. Nitidez y escalado: revisa líneas alternas de 1 píxel blancas y negras para comprobar que el texto se ve nítido y sin franjas de color ni moiré.',
          '6. Claridad de movimiento y ghosting: usa patrones de movimiento para comprobar el tiempo de respuesta y ajusta el Overdrive del monitor para evitar el ghosting inverso.',
        ],
      },
      {
        title: 'Qué es normal según el tipo de panel',
        content: [
          'Conocer la tecnología de tu panel evita devolver un monitor por características que son compromisos normales de diseño.',
          'Paneles IPS: destacan en precisión de color y ángulos de visión amplios (178°). Compromiso normal: menor contraste (1000:1) y un IPS glow leve visto en ángulo.',
          'Paneles VA: ofrecen contrastes altos (3000:1 a 5000:1) y negros profundos. Compromiso normal: estelas oscuras en escenas rápidas y ángulos de visión más estrechos.',
          'Paneles OLED / QD-OLED: contraste infinito, negros reales y respuesta de 0,03 ms. Compromiso normal: posible retención de imagen y menor brillo sostenido a pantalla completa.',
          'Paneles TN: pantallas de esports antiguas con refrescos altos. Compromiso normal: colores apagados y gran cambio de color vertical al mirar un poco desde arriba o abajo.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Debo probar el monitor con HDR activado o desactivado?',
        answer:
          'Haz las pruebas básicas de color y uniformidad con el HDR de Windows desactivado, porque puede introducir errores de mapeo de tonos en pantallas sin atenuación local. Cuando confirmes que el SDR es correcto, activa el HDR para revisar el brillo máximo y las zonas de atenuación local.',
      },
      {
        question: '¿Qué es el Overdrive del monitor y cómo debo ajustarlo?',
        answer:
          'El Overdrive aplica más voltaje a los subpíxeles para acelerar las transiciones y reducir el desenfoque de movimiento. Si lo subes demasiado aparece el «ghosting inverso» (halos brillantes detrás de los objetos en movimiento). El ajuste «Normal» o «Rápido» suele ser el mejor; «Extremo» casi siempre produce sobreimpulso.',
      },
    ],
  },
  'white-screen-for-video-calls-and-zoom': {
    slug: 'pantalla-blanca-para-videollamadas',
    navLabel: 'Luz para Zoom',
    title: 'Cómo usar una pantalla blanca como luz suave para videollamadas y Zoom',
    metaTitle: 'Pantalla blanca como luz suave para videollamadas',
    metaDescription:
      'Convierte tu monitor o portátil en una luz brillante y favorecedora, alternativa al aro de luz, para Zoom, Google Meet y videoconferencias sin comprar nada.',
    readingTime: '5 min de lectura',
    category: 'Iluminación y visuales',
    intro:
      'Un buen vídeo de webcam depende mucho más de la iluminación que de comprar una cámara 4K cara. Con poca luz, el sensor sube la ganancia digital (ISO) y aparecen ruido y grano. Si abres WhiteScreen.vip en un segundo monitor o junto a la ventana de la videollamada, conviertes al instante la pantalla en una gran caja de luz difusa.',
    toolLabel: 'Abrir la luz para videollamadas',
    toolDescription: 'Luz blanca suave ajustable de cálida a fría, pensada para iluminar la webcam.',
    sections: [
      {
        title: 'Por qué una pantalla grande ilumina mejor que un aro de luz pequeño',
        content: [
          'En fotografía, cuanto más grande es la fuente de luz respecto al sujeto, más suaves y favorecedoras son las sombras. Un aro de luz de 25 cm produce reflejos duros en las gafas y sombras marcadas en la cara.',
          'Un monitor de 24 o 27 pulgadas con una pantalla blanca crea un emisor de luz amplio que rellena las cuencas de los ojos, suaviza la piel y crea reflejos naturales en la mirada.',
        ],
      },
      {
        title: 'Cómo colocar tu pantalla blanca como luz',
        content: ['Consigue una iluminación facial más favorecedora con estos ajustes.'],
        steps: [
          'Con dos monitores: pon la pantalla blanca en el monitor que está justo detrás o al lado de la webcam.',
          'Con un monitor: divide la pantalla por la mitad. Pon Zoom o Teams en una mitad y WhiteScreen.vip en la otra.',
          'Ajusta la temperatura de color: usa un blanco cálido (unos 5000–5500 K) para tonos de piel favorecedores, o blanco luz de día (6500 K) si la habitación recibe luz solar.',
          'Ajusta el brillo: entre el 70 % y el 90 % para no entrecerrar los ojos.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Dejar una pantalla blanca abierta en reuniones largas daña el monitor?',
        answer:
          'En paneles LCD/LED, una pantalla blanca no causa ningún daño y apenas desgaste. En OLED, mantén un brillo moderado (50–70 %) para reducir el calor acumulado.',
      },
    ],
  },
  'fullscreen-white-screen-for-drawing-and-tracing': {
    slug: 'pantalla-blanca-para-calcar-y-dibujar',
    navLabel: 'Dibujo y calco',
    title: 'Cómo usar tu tableta o monitor como mesa de luz digital para calcar y dibujar',
    metaTitle: 'Usa tu tableta o monitor como mesa de luz para calcar',
    metaDescription:
      'Aprende a convertir tu iPad, tableta Android o portátil en una mesa de luz digital brillante para calcar bocetos, caligrafía y negativos.',
    readingTime: '5 min de lectura',
    category: 'Iluminación y visuales',
    intro:
      'Las mesas de luz y cajas de calco tradicionales pueden costar más de 60 € y ocupar sitio en el escritorio. Si ya tienes un iPad, una tableta Android o un portátil, puedes convertirlo en una mesa de luz digital muy brillante y sin parpadeo con un solo clic.',
    toolLabel: 'Abrir la pantalla blanca como mesa de luz',
    toolDescription: 'Luz blanca a pantalla completa ideal para calcar en papel, plantillas y revisar negativos.',
    sections: [
      {
        title: 'Cómo preparar el calco paso a paso',
        content: ['Sigue estos consejos para calcar sin provocar toques no deseados en la pantalla táctil.'],
        steps: [
          'Abre WhiteScreen.vip a pantalla completa y sube el brillo del dispositivo al 100 %.',
          'Bloquea el táctil: en iPad, activa el Acceso guiado (Ajustes > Accesibilidad > Acceso guiado) para desactivar la respuesta táctil mientras dibujas.',
          'En Android: usa la fijación de pantalla o una app de bloqueo para evitar toques accidentales.',
          'Coloca el dibujo de referencia sobre la pantalla y encima una hoja de papel de calco o papel ligero (menos de 90 g/m²).',
          'Usa un lápiz blando (2B a 4B) o un rotulador fino con poca presión para seguir los contornos con facilidad.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Dibujar con lápiz sobre la pantalla puede dañar el cristal?',
        answer:
          'El cristal de las tabletas (como Gorilla Glass) es mucho más duro que la mina de grafito y no se raya con un uso normal. Eso sí, evita presionar fuerte y asegúrate de que no haya arenilla bajo el papel.',
      },
    ],
  },
  'best-monitor-settings-for-eye-strain': {
    slug: 'ajustes-de-monitor-para-la-fatiga-visual',
    navLabel: 'Ajustes contra la fatiga visual',
    title: 'Los mejores ajustes del monitor contra la fatiga visual, los dolores de cabeza y la lectura nocturna',
    metaTitle: 'Mejores ajustes del monitor contra la fatiga visual',
    metaDescription:
      'Ajusta brillo, contraste, temperatura de color e iluminación de la habitación para eliminar la fatiga visual digital y el síndrome visual informático.',
    readingTime: '6 min de lectura',
    category: 'Mantenimiento de pantalla',
    intro:
      'Mirar un monitor mal configurado y demasiado brillante durante 8 o 10 horas al día provoca el síndrome visual informático: ojos secos, visión borrosa, dolor de cabeza tensional y rigidez de cuello. Ajustar el brillo de la pantalla a la luz de la habitación es la mejora ergonómica más eficaz que puedes hacer.',
    toolLabel: 'Abrir la pantalla blanca',
    toolDescription: 'Compara el brillo de la pantalla con un papel bajo la luz ambiente para fijar un brillo cómodo.',
    sections: [
      {
        title: 'Ajustes básicos del monitor para la comodidad visual',
        content: ['Aplica estas pautas de ergonomía visual basadas en estudios para reducir la fatiga al instante.'],
        steps: [
          'Igualar con un papel blanco: pon una hoja blanca junto al monitor y ajusta el brillo hasta que una ventana blanca a pantalla completa brille igual que el papel.',
          'Temperatura de color: baja la temperatura de un azul frío de 7500 K a un tono cálido de 5000–6500 K.',
          'Evita el parpadeo PWM: comprueba que el monitor es «Flicker-Free» (atenuación por corriente continua y no por modulación de baja frecuencia).',
          'Sigue la regla 20-20-20: cada 20 minutos, mira algo a 6 metros durante al menos 20 segundos para relajar los músculos del ojo.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿El modo oscuro previene la fatiga visual mejor que el modo claro?',
        answer:
          'El modo oscuro reduce la luz total en habitaciones con poca luz, lo que ayuda contra el deslumbramiento. Pero para leer textos largos en habitaciones bien iluminadas, el texto negro sobre un fondo blanco suave da más contraste y una lectura más rápida.',
      },
    ],
  },
  'common-monitor-display-problems-diagnostics': {
    slug: 'problemas-comunes-del-monitor',
    navLabel: 'Diagnóstico de pantalla',
    title: 'Problemas comunes del monitor: cómo diagnosticar y solucionar fallos de pantalla',
    metaTitle: 'Problemas comunes del monitor y cómo diagnosticarlos',
    metaDescription:
      'Guía para diagnosticar problemas comunes del monitor: parpadeo, bandas de color, ghosting, píxeles atascados y texto borroso, con pasos rápidos de solución.',
    readingTime: '6 min de lectura',
    category: 'Diagnóstico de pantalla',
    intro:
      'Desde un microparpadeo misterioso hasta texto borroso o una dominante de color repentina, los fallos de pantalla pueden venir de errores del controlador, cables defectuosos, frecuencias de refresco incorrectas o averías del panel. Esta guía te ayuda a aislar paso a paso el origen de cualquier anomalía.',
    toolLabel: 'Abrir la prueba de monitor',
    toolDescription: 'Usa patrones de diagnóstico para separar defectos de hardware de problemas de cable o controlador.',
    sections: [
      {
        title: 'Procedimiento de diagnóstico de fallos de pantalla',
        content: ['Sigue esta secuencia siempre que la pantalla muestre anomalías visuales.'],
        steps: [
          'Revisa el cable: los cables HDMI o DisplayPort sueltos o sin certificar causan apagones intermitentes, destellos verdes y parpadeo.',
          'Comprueba la resolución nativa y la frecuencia: usar una pantalla 4K a 1080p sin escalado entero da un texto borroso y poco definido.',
          'Prueba con otro dispositivo: conecta un portátil o una consola a la misma entrada para saber si el fallo viene de la tarjeta gráfica del PC o del panel del monitor.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Por qué mi monitor se queda en negro 2 segundos de vez en cuando?',
        answer:
          'Los apagones breves de 1–2 segundos casi siempre se deben a la renegociación del ancho de banda de la compresión DSC, a interferencias electromagnéticas (como una nevera o un ventilador que se enciende cerca) o a un cable HDMI/DP de baja calidad que falla a frecuencias altas.',
      },
    ],
  },
}
