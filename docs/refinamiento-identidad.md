# Refinamiento de identidad NA

6 de noviembre de 2026. Continúa la mejora comercial después de la auditoría de la versión publicada. Conserva identidad NA, negro/violeta, estructura comercial y contactos.

## Cambios

- Títulos en **Manrope variable**, alojada en el propio sitio con licencia OFL; una única fuente WOFF2 de 24.532 bytes, precargada. El cuerpo conserva Arial/Helvetica. Ajustes de peso, escala, interlineado y espaciado para diferenciar nombre, proyectos y secciones. No se añade conexión a Google Fonts en producción.
- El perfil explica decisiones y recorridos reales de TrabajoClaro, JornadApp y Musashi. Se retiran frases intercambiables del cierre y los títulos de trabajos/proceso nombran contextos y entregables.
- Musashi conserva su presentación en portada, pero la ficha muestra una **captura real de su carta filtrada por Café frío**, en escritorio y celular. Se comprobó el cambio de tres a dos propuestas al seleccionar el filtro. Las imágenes mantienen las indicaciones de muestra ilustrativa y precios por confirmar; no se presenta la carta como definitiva.
- Las fichas se redactan en primera persona, con estados y límites que sirven al visitante. Las notas internas de validación, autoría y repositorio se conservan en el informe anterior, sin convertirlas en el discurso público del proyecto.
- Se conserva la paleta y sus contrastes medidos. El cambio de personalidad se apoya en la tipografía, el contenido y la evidencia de proyectos.
- Microinteracción de flechas de 180 ms solo con puntero y sin preferencia de movimiento reducido. No se agregan entradas por scroll, esperas ni contenido oculto.

## Validación

Compilación, `check:static` y `check:http` correctos. Se mantienen contenido HTML inicial, tres páginas, canonical, metadatos, sitemap, 404 y archivo de Google.

Revisión de las tres rutas a 320, 390, 768 y 1440 px: sin desbordamiento horizontal. Cero incidencias axe en las seis combinaciones de 390/1440 px y con proyectos adicionales abiertos. Navegación por teclado, filtros, fichas, ampliación, menú móvil, pausa/reanudación y movimiento reducido comprobados. Contactos y mensajes preparados validados sin enviar. CSS zoom 200 % sin desbordamiento; zoom físico y dispositivos reales no probados.

Capturas actuales: [móvil](evidencias/refinamiento-na/home-movil.webp), [escritorio](evidencias/refinamiento-na/home-escritorio.webp). Resultados: [revisión](evidencias/refinamiento-na/review.json), [teclado](evidencias/refinamiento-na/keyboard.json), [interacciones](evidencias/refinamiento-na/interactions.json).

Bundle final: JS 74,68 kB gzip, CSS 12,46 kB gzip, más la fuente local de 24,53 kB y las capturas responsive. No se midió una nueva mejora de rendimiento en usuarios reales ni se atribuyen conversiones o posiciones de búsqueda a estos cambios.

## Alcance y límites

La estructura convencional facilita la navegación. La diferenciación se apoya en los proyectos propios y en explicar cómo se conectan sus funciones; no se afirma originalidad absoluta. Continúan los límites reales de las betas y de la muestra de Musashi. No se añadieron reseñas, resultados comerciales ni prestaciones inventadas.

Se usaron las instrucciones reales de Impeccable ya revisadas y su craft-floor antes de editar. El detector no está instalado; los resultados de accesibilidad provienen de axe y los de interacción de Chromium/Playwright, no de un escaneo de Impeccable.
