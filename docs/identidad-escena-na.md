# NA: de portfolio informativo a carta de presentación

6 de noviembre de 2026. Dirección: **mesa de proyectos**. La identidad nace del nombre de Nicolas, el violeta y los artefactos reales que desarrolla; se abandona el ritmo uniforme de títulos, texto y separadores de la versión anterior.

## Decisiones implementadas

- Firma tipográfica de gran escala: Nicolas / Aguirres, con contraste de pesos en Manrope y punto violeta. Especialidad y ubicación permanecen visibles.
- Portada con selección manual entre Musashi, TrabajoClaro y JornadApp. Cada botón cambia captura, descripción y enlace al proyecto correspondiente. No rota automáticamente ni requiere recorrer una presentación para contactar.
- Reacción suave de la captura al puntero: desplazamiento máximo de 5 px por eje, con `requestAnimationFrame` y escritura directa en el elemento, sin renderizar React en cada movimiento. Desactivada con movimiento reducido y en dispositivos sin puntero fino. Al salir se restablece la posición.
- Proyectos con tratamientos distintos: Musashi en un marco oscuro amplio; TrabajoClaro sobre violeta con texto e imagen invertidos en escritorio; JornadApp con su panel sobre una superficie oscura propia. En móvil JornadApp cambia el orden para romper la sucesión repetida de captura y ficha.
- Servicios sobre un fondo claro, proceso como recorrido vertical y retrato con marco violeta abierto. Capacidades permanecen al final, sin protagonismo de curriculum.
- Contacto y los dos CV se conservan. El botón principal mantiene “Consultar mi proyecto” e identifica explícitamente WhatsApp. No se enviaron mensajes.

Las capturas son evidencia real reutilizada, con datos ficticios donde corresponde. No se generaron interfaces, testimonios ni resultados comerciales. Musashi sigue siendo una muestra en revisión; TrabajoClaro y JornadApp conservan sus estados beta.

## Skills y límites de aplicación

Se leyeron instrucciones reales de **Impeccable** (dirección visual y craft-floor), **design-taste-frontend** (artefactos propios, variedad de composición y sistema coherente), **animate** (propósito, respuesta y movimiento reducido) y **animation-performance** (propiedades y coste de la interacción). Se realizó además una revisión independiente de acabado.

Se aplicaron las partes compatibles con el encargo, no se ejecutaron todos los plugins instalados: vídeo, seguridad ofensiva, herramientas de juegos, archivos de oficina y servicios externos no contribuyen a esta página. Las recetas que obligan a eliminar el violeta, usar contactos ficticios, retirar carruseles pedidos por Nicolas o reemplazar el proyecto por un starter no prevalecen sobre su identidad y requisitos.

Los paquetes cloud contienen instrucciones, pero sus lanzadores y assets no están instalados en el repositorio. No se atribuye una ejecución a los checkers de Impeccable ni de tasteskill. La skill independiente `audit` previamente revisada solo contenía “Not pinned.”. Las comprobaciones reales son compilación, scripts del proyecto, Playwright/Chromium y axe.

## Validación y alcance

- Compilación, check:static y check:http: tres páginas estáticas, metadatos, canonical, sitemap, 404 y verificación de Google preservados.
- Tres rutas a 320, 390, 768 y 1440 px; axe A/AA a 390/1440 y proyectos adicionales abiertos. Sin desbordamiento ni errores de ejecución en el recorrido.
- Selector de portada a 320, 390, 768, 1024 y 1440: tres selecciones correctas, una única selección activa, enlace correspondiente y altura estable. Movimiento reducido, reacción al puntero y retorno a reposo comprobados.
- Filtros, galerías, fichas nativas, ampliación, menú móvil, teclado, foco y mensajes de contacto sin enviar. Carruseles pausables; sin reproducción automática bajo reduced motion.
- Zoom mediante CSS al 200 %, sin desbordamiento. No sustituye una prueba física de zoom ni de dispositivos reales.

La revisión independiente examinó las capturas a 1440/390 y el código de portada/estilos. Encontró una dirección coherente para revisión del usuario y tres ajustes puntuales: canal WhatsApp explícito, ritmo móvil y monograma poco visible. Se atendieron en una única tanda y se reenviaron las capturas al revisor. El veredicto final fue **ship** para los tres ajustes, puntuados como resueltos. No se afirma originalidad absoluta ni una mejora de conversión medida.

Bundle: JS 75,19 kB gzip, CSS 14,16 kB gzip; se reutiliza la fuente local de 24,53 kB. Sin dependencias nuevas, WebGL, vídeos pesados, entradas por scroll o esperas. No se midieron FPS en un teléfono real ni nuevas métricas de usuarios.

Capturas: [escritorio](evidencias/escena-na/home-escritorio.webp), [móvil](evidencias/escena-na/home-movil.webp). Resultados y límites de pruebas en los JSON de la misma carpeta.
