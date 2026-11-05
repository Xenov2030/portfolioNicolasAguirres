# Portfolio React + Vite con HTML estático

Sitio de Nicolas Aguirres: https://nicolasaguirrescode.com/

## Comandos (Node.js 24)

```sh
npm ci
npm run dev
npm run build
npm run check:static
npm run check:http
npm run preview
```

`build` compila el cliente, crea temporalmente un bundle SSR y genera la portada, dos directorios de servicios con su `index.html`, un documento `404.html` y el sitemap. Cada página entrega el árbol React completo y metadatos específicos. Borra `.ssr/` al terminar. `main.jsx` usa `hydrateRoot` para habilitar interacciones sin reemplazar el contenido. No requiere backend, claves ni consultas a GitHub durante build o navegación.

## Contenido y mantenimiento

- `src/data/portfolio.js`: proyectos, límites, capturas y contacto.
- `src/components/Services.jsx`: servicios y enlaces internos.
- `index.html`: plantilla del documento; `src/data/seo.js` define metadatos y schema por página.
- `src/data/services.js` y `src/components/ServicePage.jsx`: contenido y vista de los dos servicios.
- `site-verification.json`: token opcional real de Google para una propiedad de prefijo de URL; vacío por defecto. La propiedad de dominio se verifica por DNS con el TXT emitido por Google.
- `src/entry-server.jsx`, `scripts/prerender.mjs`: HTML inicial generado desde App.
- `scripts/check-static.mjs`: comprobación de contenido inicial, encabezado, canonical, JSON estructurado, anclas, archivos y sitemap.
- `public/.htaccess`: conserva www → dominio canónico, agrega index.html → directorio y el documento de error 404. Las reglas nuevas requieren comprobarse en Hostinger tras publicar.
- `public/robots.txt`: permite rastreo e indica el sitemap. El build genera el sitemap de tres páginas a partir de `pages`, sin fragmentos ni fechas inventadas.
- `scripts/check-http.mjs`: inicia y detiene Vite preview en 4193, verifica acceso directo y repetido, recursos y 404. No prueba las reglas de Apache.

Para actualizar contenido, modificar los componentes/datos y volver a compilar. No editar manualmente dist. Vite usa modo multipágina: `preview` no devuelve la portada en direcciones inexistentes. En desarrollo se sirven solo las dos rutas de servicio conocidas mediante la plantilla fuente; React monta el contenido si el contenedor está vacío y lo hidrata en los documentos de producción. Para revisar SEO y metadatos definitivos, usar build + preview. Si se agregan rutas, ampliar `pages`/`services` y ejecutar ambos controles.

## Imágenes y procedencia

JornadApp y TrabajoClaro: capturas reales de sus pantallas públicas en 1440×900 y 390×844, obtenidas el 05/11/2026 sin iniciar sesión ni usar datos privados. Se transportaron los recursos mediante curl con TLS verificado para que Chromium pudiera inspeccionarlos en este entorno. No acreditan los flujos autenticados ni el funcionamiento de cuentas.

Aetherfall: capturas públicas del repositorio, commit `865e7306188498eba470af09da124a1e90742abd`, `docs/capturas/master.png` y `jugador-movil.png`. Se inspeccionaron visualmente: muestran una campaña ficticia. No son capturas nuevas de producción.

Las ocho capturas nuevas se convirtieron a WebP. Dimensiones explícitas y carga diferida en galerías; el retrato de portada mantiene prioridad alta y no usa lazy loading.

CampaignForge: capturas reales del modo local `MOCK_MODE=true`, commit `890feca`, con campaña y cuentas ficticias del seed. Se instaló el código sin modificarlo, se generó Prisma y se inició Next.js en desarrollo. Se ingresó en la cuenta ficticia local y se capturó el panel en escritorio y móvil. No se conectaron bases de producción, IA, Pusher ni LiveKit; las capturas no acreditan esos servicios. Sus versiones declaradas difieren entre README y package.json y no se publica como versión estable.

Se conservan las capturas anteriores de Limbo e Infinity obtenidas de los sitios públicos. Gentleman procede del HTML/CSS del repositorio, con fuentes y recursos externos de respaldo según la documentación anterior. Los CV aportados en español e inglés se conservan sin modificar.

La identidad NA y la paleta vigente se mantienen. Las galerías avanzan automáticamente cada 4,5 segundos cuando están visibles y la pestaña está activa, respetando movimiento reducido. No muestran botón de reproducción/pausa; las flechas, el teclado y los gestos permiten recorrer las capturas sin detener el avance automático. Se retiraron los efectos de entrada del título para no retrasar el contenido principal.

El diagnóstico actual, las pruebas y los pasos exactos de Search Console están en [docs/seo-indexacion.md](../docs/seo-indexacion.md). La auditoría anterior se conserva como referencia histórica.
