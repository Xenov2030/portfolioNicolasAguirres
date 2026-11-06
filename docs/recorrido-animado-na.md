# Movimiento a lo largo de la portada

6 de noviembre de 2026. Se conserva la dirección de taller digital y las animaciones de portada/proyectos. La ampliación responde al pedido de que el resto del recorrido también tenga movimiento.

## Secciones

- **Servicios:** esquemas vectoriales decorativos de una web con contacto y de un sistema conectado. Sus trazos y nodos varían mientras la sección está a la vista. Son ilustraciones de la oferta, no capturas inventadas de un producto.
- **Proceso:** una línea acompaña el scroll y un marcador identifica el paso que queda en la zona de lectura. No representa una tarea completada por el visitante ni un progreso comercial.
- **Perfil:** el retrato cambia suavemente de profundidad dentro de su marco; párrafos y enlaces permanecen quietos.
- **Capacidades:** las líneas bajo el contenido progresan con la lectura. No son porcentajes de dominio o experiencia. Al enfocar un enlace, la línea permanece completa.
- **Contacto:** el icono y un contorno del enlace WhatsApp dan una señal periódica de atención. El destino, texto y área de pulsación permanecen estables; el movimiento se pausa con foco o hover.

## Funcionamiento

`JourneyMotion` observa cinco secciones y programa como máximo un frame por evento de scroll/resize. Agrupa las lecturas de geometría antes de escribir transformaciones en las piezas decorativas. No actualiza estado React por fotograma ni mantiene un bucle JavaScript permanente. Las animaciones periódicas usan CSS y se detienen fuera de vista.

El control global existente, la preferencia persistida, la visibilidad de pestaña y movimiento reducido siguen vigentes. Al pausar se restablecen foto, líneas y marcador a un estado estático completo. Ningún título o párrafo empieza oculto ni requiere esperar una animación.

## Verificación

- Compilación, check:static y check:http correctos; tres rutas estáticas y archivo de Google conservados.
- Tres rutas a 320, 390, 768 y 1440 px. Cero incidencias axe A/AA en las seis vistas de 390/1440 y con proyectos adicionales abiertos; sin errores de ejecución.
- Prueba dinámica de las cinco secciones a 390/1440: transformación real de esquemas, progreso de proceso, desplazamiento del retrato, avance de líneas de lectura, animación de contacto y pausa por foco.
- Control global y movimiento reducido comprobados. Se repitieron teclado, filtros, galerías, ejemplos de presupuesto/jornadas y contacto sin enviar mensajes.
- Se comprobó el ancho durante el ciclo del contorno de contacto a 320/390. Se acotó su expansión para evitar un desbordamiento transitorio de 2 px detectado a 390.
- La revisión independiente no encontró bloqueos en su alcance: código, CSS, capturas móvil/escritorio y registros de pruebas. No observó una grabación ni midió FPS físicos.

Capturas: [escritorio](evidencias/recorrido-na/home-escritorio.webp), [móvil](evidencias/recorrido-na/home-movil.webp). Resultados: [recorrido](evidencias/recorrido-na/journey.json), [vistas](evidencias/recorrido-na/review.json), [teclado](evidencias/recorrido-na/keyboard.json), [galerías y contacto](evidencias/recorrido-na/interactions.json), [ejemplos](evidencias/recorrido-na/experiments.json).

El paquete queda en JS 78,64 kB gzip y CSS 17,71 kB gzip. No hay dependencias ni fuentes nuevas. No se midieron FPS en dispositivos físicos ni una mejora de conversiones; la prueba de zoom es CSS al 200 %, no zoom físico de navegador.
