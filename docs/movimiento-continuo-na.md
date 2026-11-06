# Movimiento continuo del taller NA

6 de noviembre de 2026. Se conserva el diseño aprobado por Nicolas y se añade movimiento visible, sin entradas de secciones ni desplazamiento de textos y datos.

## Movimiento implementado

- Flotación de la vista principal: hasta 12 px en escritorio y 7 px en móvil, ciclo de 7 s. La reacción al puntero está en un elemento hijo separado para no competir con esa transformación.
- Vista móvil con desplazamiento de fase distinto: refuerza los planos superpuestos sin inclinar ni deformar capturas.
- Pulso que sigue el trazo de la idea hacia la interfaz, en un ciclo de 4,8 s. El trazo base permanece visible. El selector sigue conservando su transición de construcción; `path:not(.idea-flow)` separa ambas animaciones.
- Galerías de los tres proyectos destacados: desplazamiento de hasta 7 px en 8 s, con fases diferentes. Solo se ejecuta cuando la galería está a la vista y no tiene foco ni puntero sobre ella. No se desplazan los controles o el texto de cada proyecto.

## Control y preferencias

El control **Animaciones activas**, en el pie de la portada, pausa/reanuda el movimiento continuo y el avance automático de las galerías. Recuerda la elección en `localStorage` bajo `na-continuous-motion`. Los controles manuales siguen funcionando. No usa iconos de play.

El movimiento reducido del sistema elimina los bucles por CSS desde el primer instante, mantiene contenido visible e identifica la preferencia con el control deshabilitado. La página también pausa al ocultarse la pestaña; las escenas y galerías fuera de pantalla permanecen pausadas. La vista principal se detiene al enfocar el enlace o colocar el puntero sobre ella.

Los ejemplos de presupuesto y jornadas conservan sus cálculos y selección. Sus datos no reciben bucles decorativos.

## Validación

Compilación, check:static y check:http correctos. Tres páginas a 320, 390, 768 y 1440 px sin desbordamiento ni errores de ejecución. Cero incidencias axe A/AA en las seis vistas de 390/1440 y con proyectos adicionales abiertos.

Pruebas de movimiento en Chromium:

- Muestras reales de transformaciones distintas a lo largo del tiempo y avance del trazo, también después de cambiar de proyecto.
- Pausa: tiempo de animación congelado y preferencia conservada al recargar.
- Foco: vista principal y galería permanecen pausadas; la portada se pausa al quedar fuera de pantalla.
- Movimiento reducido: bucles eliminados y control deshabilitado.
- Se repitieron teclado, filtros, galerías, pausa/reanudación del avance, contacto sin enviar y los ejemplos de presupuesto/jornadas.

Se investigó una comprobación demasiado inmediata del cambio de preferencias: Chromium ya aplicaba `animation-name: none`, mientras React aún actualizaba el control. Se reprodujo en cuatro cambios de preferencia y la prueba ahora espera el estado del control, en lugar de asumir una actualización sincrónica. No se añadió una demora al producto.

La revisión independiente de código, CSS, captura móvil y resultados devolvió **ship**, sin hallazgos materiales dentro de ese alcance. No observó la grabación ni midió FPS en un dispositivo físico.

[Grabación de la comprobación](evidencias/movimiento-na/movimiento.webm), [captura escritorio](evidencias/movimiento-na/home-escritorio.webp), [captura móvil](evidencias/movimiento-na/home-movil.webp), [pruebas de movimiento](evidencias/movimiento-na/motion.json), [revisión de vistas](evidencias/movimiento-na/review.json).

## Rendimiento y skills

La flotación utiliza transformaciones CSS. El pulso repinta un trazo SVG acotado; no hay una animación de fondo de pantalla completa. Los bucles se pausan fuera de vista y en pestañas ocultas; no hay actualizaciones de React por fotograma, dependencias de producción nuevas ni `will-change` indiscriminado. No se garantiza una tasa de FPS en teléfonos que no se probaron.

Se aplicaron las guías reales de animate y animation-performance, y systematic-debugging para investigar la sincronización de la prueba. Se leyó la nueva skill frontend-design: se conserva su disciplina de contenido, pero no se adopta una paleta/ancla incompatible con la identidad que Nicolas ya aprobó. No se afirma haber ejecutado sus ocho estilos ni un checker ausente.
