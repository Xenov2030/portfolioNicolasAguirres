# Auditoría y actualización del portfolio

Revisión del 5 de noviembre de 2026. Marca: **Nicolas Aguirres / NA**. Propuesta para revisión; no publicada ni integrada a main.

## Problemas encontrados y cambios

| Evidencia del sitio vigente | Cambio implementado |
| --- | --- |
| HTML inicial con `<div id="root"></div>` vacío | Generación estática desde el mismo App React; hidratación con hydrateRoot. La compilación entrega los siete proyectos, servicios y contacto en HTML. |
| Título genérico y H1 «Ideas que se sienten» | Título «Nicolas Aguirres \| Desarrollador Web en Mendoza», H1 con nombre y especialidad; presentación orientada a negocios. |
| Faltaban JornadApp, TrabajoClaro y Aetherfall | Casos destacados con problema, participación, funciones, stack y límites explícitos. |
| LinkedIn anterior en datos y schema; README con dominio antiguo | Enlaces actualizados al dominio y perfil aportados. LinkedIn devuelve 999 a solicitudes automáticas: no se confirma su disponibilidad en una sesión humana. |
| Solo Person y mensajes sociales inconsistentes | Grafo Person/ProfilePage con identidad, ubicación y enlaces coherentes; títulos y descripciones sociales alineados. JSON analizado sin errores; no se ejecutó un validador externo de resultados enriquecidos. |
| Controles de galería ocultos salvo foco por teclado | Controles visibles para pausar y recorrer desde teclado, mouse y táctil; enlace al archivo completo. |
| Introducción con desenfoque y retraso | Se retira la animación del encabezado principal, presentación y acciones. Retrato con prioridad alta, sin lazy loading. |
| www responde 200 sin redirigir | .htaccess preparado para 301 a la versión sin www. Requiere verificación después del despliegue. HTTP ya redirige a HTTPS. |

Se mantiene la identidad visual NA, la paleta y la estructura del sitio. No se crearon páginas artificiales ni rutas de proyectos: todos los casos están en la página principal. Las anclas son navegación interna, no URLs independientes del sitemap. Robots y sitemap existentes son correctos para esta estructura y se conservan. No se detectó noindex en el HTML examinado; esto no demuestra indexación en Google.

El PR #1 y su rama `seo-proyectos-destacados` se revisaron como referencia. Se contrastaron sus afirmaciones y se amplió la solución para cubrir HTML inicial, servicios, imágenes y pruebas; no se integró a main.

## Proyectos y selección

| Proyecto | Evidencia revisada y criterio | Estado y límites |
| --- | --- | --- |
| JornadApp | README, package.json y app/page.js de ControldeHorasTrabajadas. Next.js/React/Supabase; registros, horarios, varios trabajos y estimaciones. Resuelve una necesidad personal concreta. | Producto propio, beta 0.1. No es liquidación laboral oficial. WhatsApp/Premium previstos. No se probaron cuentas reales ni sincronización. |
| TrabajoClaro | README, package.json, árbol del código y entrada de aplicación. Next.js/React/Supabase/PostgreSQL; documentación de migración desde Laravel/MySQL. Aporta un caso cercano a clientes de servicios. | Producto propio, beta 0.2. Registro manual de cobros, sin procesamiento de dinero ni comprobantes fiscales. No se acreditan usuarios ni ventas. |
| Aetherfall | README, package.json, lib/policy.ts y árbol/migraciones. Archivo de campaña, permisos por personaje, versiones y almacenamiento privado. Aporta profundidad de datos/autorización. | Proyecto propio en desarrollo; sin producción verificada. PostgreSQL/Auth.js/Drive, no Supabase. Capturas públicas con datos ficticios. |
| CampaignForge | README, package.json, prisma/schema.prisma y árbol de rutas. Campañas, personajes, misiones, chat e integración de Gemini. Aporta variedad técnica. | En desarrollo; servicios externos y demo pública sin verificar. README declara v3.0 mientras package.json indica 0.4.0. No se presenta como estable ni se da por terminado todo el roadmap. |
| Gentleman Barber Shop, Limbo Hamburguesas, Infinity Geeks | Sitios previos con capturas y código enlazados; variedad de diseño y fundamentos HTML/CSS/JS. Limbo e Infinity respondieron 200. | Presentados como muestras/práctica, sin afirmar contratos de clientes. No se verificó un dominio público de Gentleman. |
| MusashiPaginaWeb | Árbol remoto HEAD f52a5b8: únicamente README.md de 45 bytes. | No seleccionado: no hay implementación pública suficiente para evaluar calidad o funciones. |

Commits examinados: JornadApp `29ea710`, TrabajoClaro `25565a1`, Aetherfall `865e730`, CampaignForge `890feca`. Las comprobaciones de código no equivalen a una auditoría funcional completa de esas aplicaciones.

Capturas: JornadApp y TrabajoClaro, pantallas públicas reales de escritorio y móvil sin sesión. Aetherfall, imágenes del repositorio con campaña ficticia inspeccionadas visualmente. Seis WebP: 230 KB frente a unos 1 MB en PNG, aproximadamente 77% menos. Las pantallas públicas se cargaron transportando recursos con curl y TLS verificado por limitaciones de certificados de Chromium; esto no acredita autenticación ni backend. CampaignForge conserva una ilustración temática: sus capturas reales de escritorio/móvil quedan pendientes y no se sustituyeron por imágenes inventadas.

## Palabras clave y destino

La prioridad se basa en intención y evidencia del portfolio. No se contó con herramientas de volúmenes, competencia o posiciones ni acceso a Search Console; no se inventan valores.

| Grupo de consultas | Ubicación en la única página `/` | Intención |
| --- | --- | --- |
| Nicolas Aguirres; Nicolas Aguirres desarrollador web; Nicolas Aguirres portfolio/programador | Título, H1, presentación, perfil y schema | Identificar a la persona y acceder a sus trabajos. Se usa «desarrollador» de forma natural, sin repetir todas las variantes. |
| desarrollador web en Mendoza; desarrollo web Mendoza; programador web en Mendoza | Título, presentación y #services | Servicios locales. No se crean páginas repetidas por localidad. |
| diseño y desarrollo de páginas web en Mendoza; páginas web para negocios | #services y sitios de muestra | Explicar alcance y facilitar una consulta. |
| desarrollador web freelance Argentina | Presentación y #services | Proyectos locales y remotos; ubicación explícita. |
| desarrollo de aplicaciones web a medida; sistemas de gestión para negocios | #services, #trabajoclaro y #jornadapp | Mostrar problemas, soluciones y límites de productos propios. |
| desarrollador full stack; frontend; React y Next.js; JavaScript; portfolio desarrollador web full stack | H1, #about, stack y casos | Evidencia técnica para recruiters y colaboradores. |
| programador PHP y MySQL | #about y herramientas, con carácter de aprendizaje | No se convierte en promesa principal de experiencia profesional. TrabajoClaro actual usa PostgreSQL, no se atribuye el stack antiguo a la beta vigente. |

## Validación ejecutada

- Node.js 24.19.0, dependencias existentes; compilación Vite cliente + SSR y generación de HTML completadas.
- `npm run check:static`: un H1, contenido inicial de siete proyectos, canonical, JSON Person/ProfilePage, anclas, recursos locales, robots y sitemap. Sin fragmentos en sitemap.
- Chromium sobre producción local: 320, 390, 768 y 1440 px sin desborde horizontal. Capturas de escritorio y móvil inspeccionadas.
- axe WCAG 2 A/AA y 2.1 AA en 390 y 1440 px: cero infracciones detectadas en la pasada final. No equivale a una certificación integral o prueba con lector de pantalla.
- Filtros Todos 7 / Aplicaciones 4 / Sitios web 3; anclas y recursos de imágenes sin roturas; ambos PDF, robots y sitemap con respuesta 200 local.
- Menú móvil, cierre al navegar, Escape y restauración de foco, portapapeles, controles y flechas de galería comprobados. Sin errores de ejecución ni hidratación en la pasada final.
- JavaScript deshabilitado: encabezado y siete proyectos presentes; navegación por enlaces y contacto permanecen disponibles.
- Medición orientativa de una carga local en Chromium 390×844, sin throttling: LCP 336 ms y CLS 0. No son resultados de campo, Lighthouse ni PageSpeed, ni pueden extrapolarse a teléfonos o producción. INP y Core Web Vitals reales quedan pendientes. JS transferido unos 72 KB y CSS 13 KB en esa carga local.
- Sitio vigente, robots, sitemap, JornadApp, TrabajoClaro, Limbo e Infinity: respuesta 200. HTTP raíz redirige una vez a HTTPS. www todavía responde 200 sin redirección; el nuevo .htaccess no se probó en Hostinger. No se introdujeron rutas nuevas cuyo acceso directo deba resolverse con una SPA.

Pendientes antes de dar por cerrada la publicación: verificar 301 de www conservando rutas/query, canonical de la respuesta final, cabeceras y disponibilidad del nuevo HTML en Hostinger, respuesta 404 para URL inexistente, pruebas reales de campo, revisión con lector de pantalla y capturas autenticadas de CampaignForge con datos de prueba. Sin acceso a métricas de Google no se acredita indexación ni ranking. La configuración de hosting existente no fue modificada.

## Search Console y medición después de publicar

1. Verificar propiedad de dominio `nicolasaguirrescode.com` mediante el TXT que indique Google; no inventar ni sustituir registros existentes. Si ya existe propiedad verificada, utilizarla.
2. Verificar la publicación de HTML completo y la redirección canónica; enviar `https://nicolasaguirrescode.com/sitemap.xml`.
3. Inspeccionar la URL raíz, probar URL publicada, revisar canonical elegida y solicitar indexación. Con una sola página, no enviar anclas como páginas separadas.
4. Guardar una línea base de los 28 días anteriores a publicar; comparar con los siguientes 28 días y revisar semanalmente. Registrar la fecha efectiva del despliegue.
5. Seguir impresiones, clics, CTR (clics/impresiones) y posición media por consulta, separando marca («Nicolas Aguirres») de servicios. Filtrar país/dispositivo y comparar periodos equivalentes. La posición media no es una posición fija garantizada.
6. Registrar consultas recibidas por correo/WhatsApp y oportunidades laborales de forma separada. No se instaló analítica ni se envían eventos de contacto en esta propuesta.

Los cambios mejoran la base técnica y la claridad comercial; la visibilidad orgánica deberá medirse después de publicar. No se promete primer puesto ni un plazo de posicionamiento.
