# Portfolio React + Vite con HTML estático

Sitio de Nicolas Aguirres: https://nicolasaguirrescode.com/

## Comandos (Node.js 24)

```sh
npm ci
npm run dev
npm run build
npm run check:static
npm run preview
```

`build` compila el cliente, crea temporalmente un bundle SSR y genera `dist/index.html` con el árbol React completo. Borra `.ssr/` al terminar. `main.jsx` usa `hydrateRoot` para habilitar interacciones sin reemplazar el contenido. No requiere backend, claves ni consultas a GitHub durante build o navegación.

## Contenido y mantenimiento

- `src/data/portfolio.js`: proyectos, límites, capturas y contacto.
- `src/components/Services.jsx`: servicios y enlaces internos.
- `index.html`: metadatos y grafo Person/ProfilePage.
- `src/entry-server.jsx`, `scripts/prerender.mjs`: HTML inicial generado desde App.
- `scripts/check-static.mjs`: comprobación de contenido inicial, encabezado, canonical, JSON estructurado, anclas, archivos y sitemap.
- `public/.htaccess`: redirección www al dominio canónico, pendiente de comprobar en el hosting después de publicar.
- `public/robots.txt`, `public/sitemap.xml`: una única página real, sin fragmentos.

Para actualizar contenido, modificar los componentes/datos y volver a compilar. No editar manualmente dist. Si se agregan rutas en el futuro, generar cada documento con contenido propio y metadatos específicos y probar la respuesta directa; no basta un fallback SPA.

## Imágenes y procedencia

JornadApp y TrabajoClaro: capturas reales de sus pantallas públicas en 1440×900 y 390×844, obtenidas el 05/11/2026 sin iniciar sesión ni usar datos privados. Se transportaron los recursos mediante curl con TLS verificado para que Chromium pudiera inspeccionarlos en este entorno. No acreditan los flujos autenticados ni el funcionamiento de cuentas.

Aetherfall: capturas públicas del repositorio, commit `865e7306188498eba470af09da124a1e90742abd`, `docs/capturas/master.png` y `jugador-movil.png`. Se inspeccionaron visualmente: muestran una campaña ficticia. No son capturas nuevas de producción.

Las seis capturas nuevas se convirtieron a WebP (230 KB aproximadamente, frente a 1 MB de PNG). Dimensiones explícitas y carga diferida en galerías; el retrato de portada mantiene prioridad alta y no usa lazy loading.

CampaignForge conserva una ilustración temática, no una captura real: faltan capturas verificadas de escritorio y celular. No se inventan pantallas. Sus versiones declaradas difieren entre README y package.json y no se publica como versión estable.

Se conservan las capturas anteriores de Limbo e Infinity obtenidas de los sitios públicos. Gentleman procede del HTML/CSS del repositorio, con fuentes y recursos externos de respaldo según la documentación anterior. Los CV aportados en español e inglés se conservan sin modificar.

La identidad NA y la paleta vigente se mantienen. Los controles de galería ahora son visibles para permitir pausar y recorrer también con mouse y tacto. Se retiraron los efectos de entrada del título para no retrasar el contenido principal.

La auditoría y las limitaciones de las pruebas están en [docs/seo-audit.md](../docs/seo-audit.md).
