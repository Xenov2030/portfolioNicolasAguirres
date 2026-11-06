# Taller digital de ideas que cobran vida

Dirección definida por Nicolas el 6 de noviembre de 2026. Sustituye el enfoque anterior de «mesa de proyectos»: el portfolio debe comunicar imaginación y construcción útil mediante exploración, no mediante animación ambiental.

## Tres interacciones

1. **Pregunta → conexión → interfaz.** La portada permite elegir Musashi, TrabajoClaro o JornadApp. La pregunta cambia con el proyecto, el trazo se dibuja en 380 ms y la captura real se revela durante 260 ms, comenzando a los 340 ms. La superposición de una captura móvil muestra otro formato del mismo trabajo. La carga inicial nunca espera esa secuencia; teclado y movimiento reducido actualizan instantáneamente. La captura responde al puntero de forma acotada.
2. **TrabajoClaro: un presupuesto que responde.** Ejemplo creado para este portfolio: cantidades de 1–5, instalación, seña y saldo. Registrar una seña fija el importe en ese momento; cambiar cantidades modifica el total y el saldo, no altera retroactivamente un pago. Los sobrepagos se identifican como saldo a favor. Todo es ficticio, local al estado del navegador y sin guardar ni procesar dinero.
3. **JornadApp: el día dentro de la semana.** Cinco jornadas ficticias suman 38,5 h. Seleccionar un día relaciona horas, barra, resumen y segmento proporcional dentro del total semanal. Un cursor se desplaza al centro temporal del día elegido. La transición dura 240 ms con movimiento permitido; el texto conserva la lectura sin depender del movimiento.

Los dos ejemplos son interacciones del portfolio, **no una reproducción acreditada de las interfaces originales**. Las capturas reales y los enlaces a los productos se mantienen por separado. Sus estados de muestra/beta no cambian.

## Composición

Se conserva NA, Manrope y negro/violeta. La portada conecta una nota de idea con un artefacto real; hay curvas, profundidades y superposición de formatos. Musashi toma un acento cálido y un marco más sensible; TrabajoClaro tiene una superficie clara y un ejemplo de datos ordenados; JornadApp usa una lectura de tiempo sin otra tarjeta alrededor de su instrumento.

Las secciones claras y oscuras tienen uniones curvas. El proceso conecta sus pasos verticalmente. Los textos de lectura y las capacidades finales permanecen tranquilos; no todo se anima. No hay fondo animado, partículas, entradas por scroll ni una escultura de marca flotante. No se añadió ninguna dependencia o fuente externa.

## Revisión independiente

La primera revisión señaló tres problemas materiales: seña que se recalculaba con el total, simultaneidad entre conexión e interfaz y una relación día/semana demasiado elemental. Se corrigieron en una sola tanda.

El revisor examinó código y capturas actualizadas y devolvió **ship respecto de esas tres correcciones**, todas puntuadas como resueltas. Esto no es una garantía de originalidad absoluta, conversión o conformidad integral de accesibilidad.

## Validación

- Compilación, `check:static` y `check:http` correctos: se mantienen tres rutas, canonical, metadatos, sitemap, archivo de Google y 404 real.
- Tres rutas a 320, 390, 768 y 1440 px: sin desbordamiento ni errores de ejecución. Axe A/AA sin incidencias en las seis vistas de 390/1440 y con proyectos adicionales abiertos.
- Ejemplos y portada a 320, 390, 768, 1024 y 1440 px: cantidades, tope, seña fija, saldo a favor, selección del día, total semanal y fuentes de las capturas comprobados.
- Caso de regresión: seña de $84.000, cantidad de una a dos unidades → presupuesto de $390.000, seña permanece $84.000 y saldo $306.000. Otro caso comprueba saldo a favor de $162.000 al reducir cantidad después de una seña mayor.
- Teclado, foco, filtros, galerías, pausa/reanudación, menú móvil, ampliación y contactos sin enviar comprobados. La secuencia de portada es instantánea con teclado y movimiento reducido.
- CSS zoom 200 % sin desbordamiento; no equivale a zoom físico. No se probaron lectores de pantalla ni dispositivos físicos.

JS final: 76,82 kB gzip; CSS: 16,64 kB gzip. Se reutilizan las capturas y la fuente local existentes. La vista móvil superpuesta añade la descarga de esa captura en portada. No se midió una mejora de rendimiento de usuarios ni FPS en teléfono real.

Capturas: [escritorio](evidencias/taller-na/home-escritorio.webp), [móvil](evidencias/taller-na/home-movil.webp). Resultados: [revisión](evidencias/taller-na/review.json), [interacciones nuevas](evidencias/taller-na/experiments.json), [teclado](evidencias/taller-na/keyboard.json), [galerías y contacto](evidencias/taller-na/interactions.json).

## Skills

Se mantienen las guías reales de Impeccable, animate y animation-performance para composición, propósito, propiedades y movimiento reducido, con revisión independiente de acabado. No hay lanzadores de Impeccable/tasteskill en el repositorio y no se les atribuye un escaneo. Las verificaciones ejecutadas son las del proyecto, Chromium/Playwright y axe.
