# Portfolio de Nicolas Aguirres

Aplicación React + Vite que se despliega en https://nicolasaguirrescode.com/.
`../portfolio/` conserva la versión estática anterior; el workflow de Hostinger publica `modern-portfolio/dist/`.

## Desarrollo

Con Node.js 24 y npm 11, desde esta carpeta:

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 5173 --strictPort
```

```sh
npm run build
npm run preview -- --host 0.0.0.0 --port 4173 --strictPort
```

No requiere variables de entorno, backend ni consultas a la API de GitHub. Usa tipografías del sistema y recursos locales, sin depender de Google Fonts.

## Actualizar el contenido

- `src/data/portfolio.js`: contacto, CV en español e inglés, proyectos, tecnologías y enlaces.
- `src/components/`: secciones de presentación, navegación y contacto.
- `src/index.css` y `src/editorial.css`: estilos base, composición editorial y adaptaciones responsive; respetan movimiento reducido.
- `public/assets/`: capturas de los proyectos.
- `public/social-preview.svg`: fuente de la imagen social; `social-preview.png` es la versión compatible con plataformas sociales (1200 × 630). Al cambiarla, exportar nuevamente el PNG.
- `index.html`, `public/robots.txt` y `public/sitemap.xml`: metadatos e indexación del dominio.

Los filtros trabajan sobre los datos locales. El botón de copiar correo usa la Clipboard API cuando está disponible; el enlace de email siempre funciona como alternativa.

## Fuentes del contenido

Información del código y los README públicos de GitHub consultada durante la actualización del portfolio:

- https://github.com/Xenov2030/campaign-forge — stack y alcance de la plataforma de rol.
- https://github.com/Xenov2030/gentlemanbaber — diseño de barbería, servicios y reservas por WhatsApp.
- https://github.com/Xenov2030/limbohamburguesas — sitio comercial responsive.
- https://github.com/Xenov2030/infinitygeek — comunidad tecnológica y stack web.

No se presentan métricas comerciales sin evidencia ni niveles de experiencia no documentados. La ilustración de CampaignForge representa su temática; no es una captura de la aplicación. La presentación personal y los datos de contacto parten del contenido existente del repositorio.

## Comprobaciones para revisar cambios

Además de `npm run build`, comprobar en navegador:

- Renderizado sin errores de consola, con todas las imágenes cargadas.
- Filtros: Todos (4), Aplicaciones (1), Sitios web (3).
- Navegación por anclas, enlaces de código y PDF del CV.
- Menú móvil: abrir/cerrar, Escape y recorrido de foco con Tab.
- Copia del correo y alternativa cuando el navegador no permite el portapapeles.
- Sin desbordes horizontales en 320, 375, 390, 768, 1024 y 1440 px.
- Preferencia de movimiento reducido y navegación por teclado.

El workflow `.github/workflows/deploy.yml` instala con `npm ci`, compila con Node 24 y despliega por FTP al recibir un push en `main`. El desarrollo local no publica el sitio.

La captura de Gentleman Barber Shop se obtuvo del HTML y CSS del repositorio (commit `4a517be2c2affe676a369d53dff5b9ddf516cadd`). El entorno restringe Unsplash y Google Fonts, por lo que la captura usa los estilos de respaldo del sitio sin esas solicitudes externas. La ficha enlaza al código porque no se verificó un despliegue público.

Los PDF descargables corresponden a los archivos en español e inglés aportados por Nicolas, fechados el 27/10/2026. Se conservan sin modificar. La paleta usa carbón cálido, marfil, coral y un detalle lavanda.

La portada permite explorar tres proyectos con botones accesibles y sin reproducción automática. La propuesta editorial usa tipografía de gran escala, capturas amplias y superficies marfil, lavanda y coral; no afirma haber recibido premios.

Las capturas `limbo-live.png` e `infinity-geeks-live.png` provienen directamente de las páginas públicas de ambos proyectos, capturadas en Chromium el 29/10/2026.
