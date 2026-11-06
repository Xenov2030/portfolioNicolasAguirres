# Mejora comercial del portfolio · 6 de noviembre de 2026

Propuesta en la rama `mejora-comercial-portfolio`. No se integra a main ni se publica automáticamente. Se conserva Nicolas Aguirres, identidad NA, negro/violeta y tipografía existente.

## Diagnóstico y decisiones

Problemas comprobados en el código y la versión de partida:

- Cinco acciones competían en la portada. Ahora hay dos: **Consultar mi proyecto** (WhatsApp con mensaje preparado) y **Ver trabajos**.
- El recorrido técnico precedía a los trabajos: la sección empezaba a 3893 px en móvil y 2809 px en escritorio. Ahora empieza a 1095 y 930 px respectivamente, además de una muestra funcional en la portada.
- Había varias presentaciones del stack. Se reemplazaron por una sección resumida, relacionada con proyectos y con aprendizaje separado.
- Las fichas mezclaban presentación comercial y detalles extensos. Ahora muestran problema, participación, funciones y estado; arquitectura y límites completos permanecen en desplegables nativos accesibles.
- Las capturas principales de aplicaciones no demostraban suficientemente su uso. Se sustituyeron por registros/panel de JornadApp y un presupuesto de TrabajoClaro con datos ficticios.
- El carrusel no ofrecía una pausa explícita. Ahora tiene una casilla de avance automático, sin icono de play; se pausa con foco, puntero y pestaña oculta. El movimiento reducido desactiva el avance automático.

La hipótesis es que esta jerarquía facilite comprender la oferta y consultar. No hay una medición de conversiones que permita afirmar una mejora comercial o de posiciones en Google.

## Resultado implementado

Secuencia: presentación → trabajos → servicios → proceso → sobre mí → capacidades → contacto. Las oportunidades laborales y los dos CV siguen disponibles en una ubicación secundaria de Sobre mí. WhatsApp es el contacto principal y correo la alternativa; ambos tienen asunto/mensaje identificable. No se enviaron mensajes.

Se mantienen las dos páginas de servicios existentes, con párrafos más breves, entregables concretos, ejemplos, preguntas frecuentes, proceso y contacto. No se crean páginas duplicadas ni se prometen precios, plazos o soporte indefinidos.

### Proyectos y evidencia

| Proyecto | Evidencia y participación | Presentación |
| --- | --- | --- |
| Musashi | Autoría completa confirmada por Nicolas. Sitio público en musashiweb.netlify.app: presentación, carta filtrable y enlaces de contacto/reservas. | Destacado como sitio para negocio. La carta estacional es una muestra en revisión; no se presenta un sistema de reservas probado ni resultados comerciales. |
| TrabajoClaro | Repositorio y demo pública; relaciones entre clientes, presupuestos y trabajos. | Destacado de gestión, con presupuesto ficticio real de ARS 210.000 guardado como borrador en una demo aislada. No se publicó ni compartió con terceros. |
| JornadApp | Código público ejecutado localmente; registro, métricas e historial. | Destacado como producto propio, panel con cinco jornadas ficticias. Sin conexión a cuentas reales. |
| Aetherfall / CampaignForge | Se conservan por su evidencia técnica diferente y sus límites existentes. | Proyectos adicionales, sin competir ambos por el primer bloque comercial. |

Limbo, Gentleman e Infinity conservan sus fichas y capturas existentes dentro de proyectos adicionales. Los filtros permiten acceder a los ocho proyectos. La ampliación abre la captura original en otra pestaña con nombre accesible; no se simulan interfaces.

Musashi todavía tiene un repositorio público con solo README y el sitio responde con `noindex,nofollow`. Esto no bloquea mostrarlo como evidencia visual, pero impide afirmar que su implementación pública o indexación estén completas. No se modificó ese sitio ni se probó enviar reservas.

## Diseño y skills

Se leyeron instrucciones reales de **Impeccable** y sus guías de distill, audit, optimize y craft-floor. Se aplicaron jerarquía, reducción de repetición, foco, objetivos táctiles, movimiento reducido y evidencia visual. El lanzador local de contexto no existe: se inspeccionaron directamente los archivos; **no se ejecutó un detector de Impeccable**. La skill independiente `audit` contiene únicamente “Not pinned.”, sin procedimiento útil; no se le atribuye una auditoría ejecutada. No se usaron skills ajenas al encargo.

Se documentó la dirección en [DESIGN.md](../DESIGN.md). Permanecen selectores heredados de las hojas base; se retiraron los componentes y hojas exclusivos del recorrido técnico y efectos eliminados. No se agregaron dependencias ni efectos de vidrio, degradados o esperas de entrada.

## SEO

Se conserva la generación estática de las tres rutas, contenido significativo sin JavaScript, metadatos únicos, canonical, datos estructurados, enlaces rastreables, sitemap, robots y verificación de Google. El control estático verifica también dos acciones en portada, orden de secciones y ocho proyectos.

La comprobación pública de partida registró 200 en las tres páginas y en robots/sitemap; HTTP y www redirigen al dominio HTTPS sin www, `/index.html` redirige a portada y una URL inventada devuelve 404 real. No se encontró bloqueo accidental de indexación en el portfolio. [Respuestas públicas](evidencias/mejora-integral/http-publicado.json).

Intenciones: marca personal en portada; desarrollo/diseño web en Mendoza en `/desarrollo-web-mendoza/`; aplicaciones y sistemas a medida en `/aplicaciones-web-a-medida/`. Las fichas ampliadas son anclas y desplegables de proyectos, no rutas adicionales ni entradas artificiales del sitemap.

Las capturas que aportó Nicolas mostraban las tres URLs indexadas. No se dispone de acceso directo actual a Search Console; indexación no implica una posición destacada para búsquedas comerciales.

Después de publicar:

1. En Search Console, seleccionar `https://nicolasaguirrescode.com/` e inspeccionar cada una de las tres URLs. Abrir “Indexación de páginas”: comprobar último rastreo, canonical declarada y seleccionada por Google. Usar “Probar URL publicada” si aparece un problema.
2. Si interesa que Google revise los cambios, solicitar indexación una vez por URL. No es una garantía de inclusión o posición ni hace falta repetirlo diariamente.
3. En Sitemaps, comprobar `https://nicolasaguirrescode.com/sitemap.xml`. El sitemap existente conserva tres URLs; si ya figura correcto, no hace falta borrarlo o reenviarlo reiteradamente.
4. En Rendimiento, esperar a que se procesen los datos. Comparar períodos de 28 días, páginas y consultas. Excluir consultas que coincidan con la expresión `(nicol[aá]s|aguirres|nicolasaguirrescode)` para evaluar búsquedas sin marca; revisar también variantes que queden fuera. Registrar impresiones, clics, CTR y posición por página, país y dispositivo. No atribuir una variación a una sola modificación sin suficiente evidencia.

## Verificaciones

| Prueba | Resultado y alcance |
| --- | --- |
| Compilación + check:static + check:http | Correctos. Prerenderizado, enlaces locales, canonical, sitemap, esquema, archivo de verificación y 404. |
| 320, 390, 768 y 1440 px | Tres rutas, navegación directa y recarga, sin desbordamiento horizontal. |
| Teclado | Recorrido Tab completo, foco visible, filtros, desplegables, galería y contacto; menú móvil cierra al navegar y con Escape devuelve foco. |
| axe WCAG A/AA | Cero incidencias automáticas en las tres rutas a 390/1440 y proyectos adicionales abiertos. No equivale a certificación de accesibilidad. |
| Contraste | Texto principal 17,61:1, secundario 9,89:1, violeta sobre fondo 10,46:1; texto atenuado 8,36:1. Pares medidos en [contrast.json](evidencias/mejora-integral/contrast.json); axe revisó los elementos visibles. |
| Galerías | Flechas, teclado, ampliación, avance real, pausa/reanudación, movimiento reducido y gesto horizontal sintético de Chromium. |
| Contacto | Número WhatsApp +5492615349682, mensaje preparado, correo nicolas.f.aguirres@gmail.com, asunto y copia verificados sin enviar. |
| Sin JavaScript | Encabezados, contenido, ocho proyectos y desplegables nativos disponibles. |
| Zoom | CSS zoom 200 % en Chromium a 1440 px, sin desbordamiento. No se probó zoom físico del navegador. |
| Errores | Sin errores de ejecución o hidratación en el recorrido automatizado. |

Resultados: [revisión](evidencias/mejora-integral/review.json), [teclado](evidencias/mejora-integral/keyboard.json), [interacciones](evidencias/mejora-integral/interactions.json). Las pruebas en sitios públicos se hicieron con transporte TLS verificado; no se deshabilitó la validación de certificados.

### Rendimiento disponible

Comparación local con el mismo servidor HTTP estático, Chromium, tres contextos nuevos por variante, sin limitar CPU/red y con movimiento reducido. Mediana LCP, máximo CLS. **No son métricas de usuarios reales ni predicen tiempos en producción; no se midió INP.**

| Ancho | LCP antes → después | CLS | Transferencia inicial antes → después |
| --- | --- | --- | --- |
| 390 px | 352 → 312 ms | 0 → 0 | 336.907 → 316.656 bytes |
| 1440 px | 448 → 260 ms | 0 → 0 | 336.907 → 386.768 bytes |

La muestra de trabajo aparece antes, por lo que en escritorio se descargan más imágenes inicialmente. Se generaron variantes responsive de 480/960 px y originales WebP. JS gzip baja de 77,94 a 74,65 kB; CSS gzip de 13,74 a 12,16 kB. [Mediciones y contexto](evidencias/mejora-integral/performance.json).

## Capturas

| Vista | Antes | Propuesta |
| --- | --- | --- |
| Móvil | [Portada](evidencias/mejora-integral/antes-movil.webp) | [Portada completa](evidencias/mejora-integral/home-movil.webp) |
| Escritorio | [Portada](evidencias/mejora-integral/antes-escritorio.webp) | [Portada completa](evidencias/mejora-integral/home-escritorio.webp) |

También: [servicio web móvil](evidencias/mejora-integral/servicios-web-movil.webp) y [aplicaciones escritorio](evidencias/mejora-integral/aplicaciones-escritorio.webp).

## Pendientes y publicación

- Confirmar código público actualizado y estado definitivo de Musashi antes de ampliar afirmaciones sobre entrega, reservas o indexación. No se inventaron ventas, usuarios ni testimonios.
- Validar en dispositivos físicos, Safari y lector de pantalla; la prueba táctil fue sintética y la de zoom usa CSS.
- Medir consultas y conversiones reales después de publicar; Search Console no estuvo accesible directamente.

Para revisar localmente: `cd modern-portfolio`, `npm ci`, `npm run build`, `npm run check:static`, `npm run check:http`, `npm run preview -- --host 0.0.0.0`. La comprobación HTTP requiere permiso para abrir un puerto local.

Para publicar, revisar el diff y las capturas del PR, aprobarlo y **recién entonces** integrarlo a main. El workflow de despliegue existente se ejecuta sobre main; esta rama no se integra ni despliega como parte del encargo. Después comprobar portada, dos servicios, canonical, redirecciones, 404, archivo `google4b22b9fa65bb2325.html` y enlaces de contacto sin enviar mensajes. Se conserva exactamente el archivo de verificación existente.
