# Diagnóstico de indexación y páginas de servicios

Revisión: 5 de noviembre de 2026. Base revisada: `main` en `95c838a`. Propuesta en `seo-servicios-indexacion`, sin publicar ni integrar.

## Qué podemos concluir

**No se comprobó un bloqueo público de indexación en la portada.** El sitio responde correctamente y ya entrega contenido completo sin JavaScript. Eso no prueba que Google lo haya indexado ni que deba mostrarlo en una consulta de servicios. Sin Inspección de URLs y datos de rendimiento de Search Console no se puede distinguir de forma concluyente entre descubrimiento/rastreo pendiente, exclusión del índice, canonical alternativa o falta de visibilidad para una consulta concreta.

La portada actual reúne marca, servicios, perfil técnico y proyectos en una única URL. Las búsquedas de contratación revisadas muestran proveedores con páginas específicas de servicios: ampliar esa información puede mejorar la relevancia, pero **no demuestra que la causa actual sea el contenido ni permite calcular una posición futura**. Las mejoras de la versión anterior se publicaron el mismo día de esta revisión; no se conoce si Google ya las rastreó. No se modificaron protecciones del hosting.

## Evidencia pública comprobada

| Comprobación | Resultado antes de esta propuesta |
| --- | --- |
| `https://nicolasaguirrescode.com/` | 200, HTML completo de 56.581 bytes. Nombre, presentación, servicios, siete proyectos y contacto presentes. |
| HTTP sin www | 301 a HTTPS y 200 final. |
| HTTPS con www | 301 al dominio sin www y 200 final. |
| HTTP con www | Dos redirecciones y 200 final; sin bucle. Se conserva este comportamiento válido. |
| Canonical de la portada | Una, `https://nicolasaguirrescode.com/`. Sin meta noindex ni X-Robots-Tag bloqueante en la respuesta examinada. |
| robots y sitemap | 200. Robots permite rastreo e indica el sitemap. El sitemap publicado contiene únicamente la portada. |
| JS, CSS, retrato y captura de proyecto muestreados | 200 y tipos de contenido correspondientes. Robots no los bloquea. |
| URL inventada `/seo-comprobacion-no-existe-20261105/` | 404 real, no portada con 200. No se observó soft 404 en esta prueba. |
| Las dos rutas de servicios propuestas | 404: todavía no existen en producción. Es correcto hasta que se publiquen. |
| `/index.html` | 200 con el mismo contenido y canonical a la raíz. Copia técnica consolidable; no prueba una exclusión del índice. |
| Repositorio frente a lo publicado | Compilación de main y HTML público idénticos byte a byte, SHA-256 `3974a8ab88c72a8c3e450ac2683ec2a76d7e02550763c25ab26328db6adcf73d`. |
| Comparación con/sin JavaScript | Mismo texto en presentación, servicios, proyectos, perfil y contacto; siete proyectos en ambos casos. Sin errores de ejecución en esa comprobación. |
| User-agent Googlebot | Mismo HTML al cambiar únicamente el user-agent. No equivale a una petición desde una IP auténtica de Google ni descarta bloqueos selectivos no observados. |

Evidencia: [respuestas HTTP](evidencias/seo-indexacion/http-before.json), [comparación con main](evidencias/seo-indexacion/repo-live.json), [recursos](evidencias/seo-indexacion/resources.json) y [comparación de renderizado](evidencias/seo-indexacion/production-render.json). Los recursos del navegador público se transportaron mediante curl con TLS verificado debido a la confianza de certificados del Chromium del entorno; esta adaptación no modificó el sitio ni sus protecciones.

## Cambios implementados

- Dos páginas de servicios con contenido distinto: destinatarios, problemas, alcance orientativo, entregables, proceso, ejemplos, seis preguntas frecuentes visibles por página y contacto. Sin inventar precios, plazos, contratos o resultados.
- Se amplía la generación estática existente de React/Vite: tres documentos HTML completos con hidratación del mismo árbol, sin migrar de framework ni exigir Node.js en Hostinger.
- Títulos, descripciones, canonical y tarjetas sociales específicos. Person/ProfilePage en la portada; Person/WebPage/Service/BreadcrumbList en servicios, con una jerarquía visible de dos niveles. Sin LocalBusiness, dirección ficticia o reseñas.
- Enlaces reales desde las tarjetas de servicios y el pie de página; navegación de las páginas internas hacia las secciones correctas de la portada. No se crean rutas con fragmentos como documentos independientes.
- Sitemap generado desde la lista de páginas canónicas; sin lastmod inventado. El sitemap con tres URLs solo debe publicarse junto con sus documentos.
- Redirección preparada de las solicitudes explícitas de `index.html` al directorio correspondiente. Conserva la redirección www y el HTTPS existente. Documento propio de error con noindex, sin canonical a la portada y sin fallback SPA; las reglas de Apache requieren comprobación en hosting.
- Método opcional de verificación por etiqueta preparado en `site-verification.json`, vacío por defecto. Solo admite un token real de Google; no se creó ni envió ninguno. La propiedad de dominio usa DNS y no necesita ese archivo.
- Controles estáticos y HTTP incorporados al workflow de PR, además de la compilación.

Se conserva el texto aprobado de “Detrás del código”, la identidad NA, el retrato, los CV, los siete proyectos y los carruseles automáticos sin botón de reproducción. JornadApp y TrabajoClaro siguen identificados como betas propias; Aetherfall y CampaignForge mantienen fichas y alcances distintos. MusashiPaginaWeb continúa teniendo únicamente un README de 45 bytes en HEAD `f52a5b8`; no alcanza para confirmar implementación ni participación comercial y no se publicó como cliente. Para incorporarlo hacen falta el código o enlace funcional y la descripción verificable de tu rol.

## Mapeo de intención y palabras

| Página | Intención principal | Expresión principal | Variantes y apoyo |
| --- | --- | --- | --- |
| `/` | Conocer a la persona y evaluar sus trabajos | Nicolas Aguirres | Nicolas Aguirres desarrollador web / portfolio; React y Next.js en perfil y proyectos. Mantiene la referencia local en la presentación. |
| `/desarrollo-web-mendoza/` | Contratar un sitio para presentar un negocio | diseño de páginas web en Mendoza | desarrollo web Mendoza; desarrollador web en Mendoza; páginas web para negocios y emprendedores. Programador freelance se trata como variante de intención, sin forzar la frase literal. |
| `/aplicaciones-web-a-medida/` | Evaluar una herramienta para organizar procesos | desarrollo de aplicaciones web a medida | sistemas de gestión para pequeños negocios; desarrollo freelance desde Argentina; clientes, presupuestos y tareas como casos de uso. |

La portada funciona como perfil y puerta de entrada; la primera página desarrolla presencia y contacto, y la segunda gestión de información y acciones. No se crean páginas por localidad ni copias del mismo servicio para variantes de palabras clave.

La muestra de búsquedas públicas incluyó marca, `site:`, dominio exacto, desarrollo web en Mendoza, programador freelance y aplicaciones a medida. Mostró páginas de proveedores y, en algunas variantes, ofertas laborales: por eso se priorizan servicios y necesidades de negocios sobre la frase ambigua “programador freelance”. Referencias de intención: [servicios locales](https://webtranqui.com/) y [aplicaciones a medida](https://mikant.com.ar/desarrollo-web-medida.html). No se copiaron sus compromisos comerciales. No se dispone de volúmenes, dificultad, ranking personalizado de Google ni métricas de autoridad; tampoco se interpreta la ausencia en la muestra como prueba de desindexación.

## Validación y límites

- Compilación de producción y `check:static`: contenido inicial, H1 único, títulos distintos, canonical propia, JSON de schema, FAQ visibles, anclas locales y entre páginas, archivos y sitemap de tres URLs. Conservación de siete proyectos y ausencia del botón de reproducción.
- `check:http`: inicia y detiene preview en un puerto propio; prueba las tres rutas con solicitudes directas y repetidas, metadatos, recursos y 404 real para dirección desconocida. Vite está en modo multipágina, sin devolver la portada en rutas falsas.
- Chromium a 390 y 1440 px: acceso directo y recarga de las tres páginas, sin desborde horizontal, sin errores de ejecución/hidratación. Menú móvil, Escape/restauración de foco, navegación a la portada y filtros 7/4/3 comprobados.
- Sin JavaScript: tres encabezados de página presentes y las doce respuestas FAQ accesibles. axe WCAG 2/2.1 A/AA: cero infracciones detectadas en las seis combinaciones de página/tamaño. Esto no sustituye una revisión manual con lector de pantalla.
- Laboratorio local, una carga sin limitación de red/CPU por página a 390×844: LCP portada 432 ms, sitios web 224 ms, aplicaciones 276 ms; CLS 0 en las tres. **No son datos de usuarios reales, no se midió INP y no se acredita una mejora de Core Web Vitals en producción.** Se conservaron dimensiones de imágenes, lazy secundario y prioridad del retrato; no se introdujeron cambios de rendimiento sin una causa medida. El bundle común aumenta unos 5 KB gzip al incorporar servicios; deberá reevaluarse con datos reales si se vuelve un cuello de botella.
- Las rutas y el sitemap nuevos no están publicados. El servidor local no ejecuta .htaccess: la redirección de index.html, la respuesta del error personalizado y las cabeceras definitivas quedan para la comprobación posterior en Hostinger. No se dispone de logs de Googlebot, Search Console ni acceso operativo al hosting en esta revisión.

Evidencia: [pruebas de navegador](evidencias/seo-indexacion/browser-results.json), [mediciones locales](evidencias/seo-indexacion/performance.json), [web móvil](evidencias/seo-indexacion/desarrollo-web-mendoza-390.webp), [web escritorio](evidencias/seo-indexacion/desarrollo-web-mendoza-1440.webp), [aplicaciones móvil](evidencias/seo-indexacion/aplicaciones-web-a-medida-390.webp), [aplicaciones escritorio](evidencias/seo-indexacion/aplicaciones-web-a-medida-1440.webp).

## Search Console: qué hacer y qué información compartir

1. Entrar a [Search Console](https://search.google.com/search-console/) con tu cuenta. Revisar el selector superior izquierdo. Si el dominio o el prefijo aparecen, seleccionarlo y consultar **Configuración → Verificación de la propiedad**. Si no aparecen, esa cuenta no tiene acceso; puede existir otra propiedad en otra cuenta. No hay que verificar de nuevo si ya se cuenta con acceso válido.
2. Si falta, añadir una propiedad de **Dominio** con `nicolasaguirrescode.com`, sin protocolo ni rutas. Google mostrará un valor TXT propio de esa propiedad. Añadir **exactamente** ese valor en el administrador DNS autoritativo, como registro adicional en la raíz (normalmente `@`). No borrar TXT existentes, SPF, DKIM, DMARC ni cambiar nameservers. Verificar después en Google y conservar el TXT.
3. Si necesitás ayuda, compartir el valor TXT real y confirmar quién administra el DNS. No compartir contraseñas. Esta propuesta no inventó el token ni modificó registros. Como alternativa, una propiedad de prefijo de URL puede usar la etiqueta HTML que emita Google: copiar solo su token en `modern-portfolio/site-verification.json`, compilar y publicar; no sirve como verificación DNS de la propiedad de dominio.
4. Con acceso, inspeccionar la portada actual. Copiar: estado/motivo de indexación, fecha del último rastreo, si se permitió rastreo, resultado de recuperación, canonical declarada y **canonical seleccionada por Google**. Revisar también informe de páginas, errores del sitemap y, si existen, acciones manuales y problemas de seguridad; no se afirma que los haya.
5. Después de publicar las tres páginas, enviar `https://nicolasaguirrescode.com/sitemap.xml`. Inspeccionar cada URL canónica y probar URL publicada para ver el HTML y recursos que Google recibe. No enviar anclas. Solicitar indexación tras confirmar que el contenido corregido está publicado; la solicitud no garantiza inclusión ni posición.
6. Para continuar el diagnóstico, compartir esos campos de Inspección de URLs y una exportación de rendimiento por consulta/página/país/dispositivo del período disponible. Con esos datos se puede separar exclusión, rastreo pendiente y falta de impresiones para servicios. Sin ellos la causa concreta sigue abierta.

No se envió ningún sitemap ni se solicitó indexación desde este trabajo.

## Publicación y comprobación posterior

Revisar la rama y el PR; no se integran automáticamente. Para una revisión local: Node 24, `npm ci`, `npm run build`, `npm run check:static`, `npm run check:http` y `npm run preview` dentro de `modern-portfolio/`.

Cuando autorices publicar, el workflow existente de main compila y sincroniza `modern-portfolio/dist/` por FTP. Revisar antes que se publiquen los dos directorios de servicios, sitemap, .htaccess y 404.html como una sola entrega. No reemplazar reglas adicionales de hosting que no estén en el repositorio sin revisar su finalidad.

Comprobar en el dominio real:

- GET de las tres URLs: 200, un H1, contenido en HTML inicial, canonical a sí mismas, títulos distintos y CSS/JS/imágenes accesibles.
- Acceso directo y recarga, navegación móvil, enlaces a proyectos, contacto, CV y carruseles de la portada.
- HTTP/HTTPS y www sin bucles; `/index.html` y `/desarrollo-web-mendoza/index.html` redirigen 301 al directorio conservando query. Directorios de servicios sin barra final resuelven a la URL con barra.
- Una ruta inventada devuelve 404 con la página de error, no 200 ni canonical a la portada. Robots no bloquea los directorios y sitemap contiene exactamente las tres URLs accesibles.
- Comparar los recursos y HTML publicados con la compilación; después hacer la inspección real de Google. Si aparecen errores de rastreo persistentes, revisar logs en el hosting antes de tocar protecciones.

## Cómo medir consultas sin tu nombre

Registrar la fecha efectiva del despliegue. En **Rendimiento → Resultados de búsqueda**, seleccionar búsqueda Web y comparar 28 días antes/después, o períodos equivalentes con datos suficientes. Mantener país/dispositivo y usar también el filtro por cada página de servicio.

En Consultas, elegir filtro personalizado de expresión regular **que no coincida** con `(?i)(nicol[aá]s|aguirres|nicolasaguirrescode)` para separar marca de búsquedas de servicios. Guardar también una vista de marca para no mezclar ambos objetivos. Revisar las consultas reales antes de ampliar contenido: la lista inicial no demuestra demanda.

Seguir impresiones, clics, CTR (clics/impresiones) y posición media por consulta y página. La posición media no es una ubicación fija y los datos de consultas pueden ocultar búsquedas de bajo volumen. No promediar CTR diarios para un total: usar clics e impresiones agregados. Contabilizar consultas comerciales recibidas por correo/WhatsApp aparte; no se instaló analítica de conversión ni se enviaron eventos. Volver a revisar después del primer rastreo de la nueva versión; que una página sea rastreable no significa que ya posicione.

Guías oficiales: [JavaScript y renderizado](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [diagnóstico de rastreo](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors), [límites del operador site:](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site), [Inspección de URLs](https://support.google.com/webmasters/answer/9012289), [verificación de propiedad](https://support.google.com/webmasters/answer/9008080) e [informe de rendimiento](https://support.google.com/webmasters/answer/7576553).

## Archivo real de verificación aportado

Google proporcionó `google4b22b9fa65bb2325.html`. Se incorporó sin modificar a `modern-portfolio/public/` para que la compilación lo copie a la raíz del sitio. Es el método de archivo HTML de una propiedad de prefijo de URL, no un TXT para una propiedad de dominio. No requiere cambiar DNS ni completar `site-verification.json`.

Después de una publicación autorizada, abrir `https://nicolasaguirrescode.com/google4b22b9fa65bb2325.html` y comprobar que devuelve 200 y el contenido exacto `google-site-verification: google4b22b9fa65bb2325.html`. Luego volver al asistente de Search Console y pulsar **Verificar**. Confirmar que la propiedad sea `https://nicolasaguirrescode.com/`. Conservar el archivo publicado después de verificar. Agregarlo al repositorio no acredita que Google haya verificado la propiedad.
