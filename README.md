# Nicolas Aguirres · Portfolio

Desarrollador web full stack en Mendoza, Argentina. Sitios para negocios, interfaces con React y aplicaciones web.

- Portfolio: https://nicolasaguirrescode.com/
- GitHub: https://github.com/Xenov2030
- LinkedIn: https://www.linkedin.com/in/nicolas-aguirres/
- Contacto: nicolas.f.aguirres@gmail.com

El sitio vigente está en `modern-portfolio/`. `portfolio/` conserva una versión anterior.

## Desarrollo y validación

Node.js 24 y npm:

```sh
cd modern-portfolio
npm ci
npm run dev
npm run build
npm run check:static
npm run check:http
npm run preview
```

La compilación genera HTML completo desde React con `renderToString`; el cliente hidrata el mismo árbol. El resultado es estático y compatible con el despliegue FTP existente: no necesita un servidor Node.js en hosting. Los filtros y carruseles necesitan JavaScript; contenido, contacto y proyectos permanecen disponibles sin él.

## Trabajos y contacto

La portada prioriza tres casos:

- [Musashi](https://musashiweb.netlify.app/): sitio para una cafetería; autoría completa confirmada por Nicolas. La carta publicada incluye material de revisión.
- [TrabajoClaro](https://github.com/Xenov2030/TrabajoClaro): aplicación propia beta para clientes, presupuestos, trabajos y registro de cobros.
- [JornadApp](https://github.com/Xenov2030/ControldeHorasTrabajadas): producto propio beta para jornadas e ingresos estimados.

Aetherfall, CampaignForge, Limbo, Gentleman e Infinity Geeks se conservan con fichas diferenciadas en «Más proyectos». No se inventan usuarios, ventas o resultados comerciales. Las capturas funcionales y sus fuentes se documentan en el informe.

La consulta principal abre WhatsApp con un mensaje editable. El correo conserva asunto y mensaje identificables. Los enlaces no envían mensajes automáticamente. Los CV y oportunidades laborales están en el perfil, después del trabajo y los servicios.

## Publicación y SEO

El workflow de despliegue publica por FTP cuando se integra a `main`. Revisar el PR antes de integrar. El workflow de PR solo compila y comprueba el HTML estático.

Se generan tres páginas reales: portada, `/desarrollo-web-mendoza/` y `/aplicaciones-web-a-medida/`. Cada una entrega HTML y metadatos propios; el sitemap solo incluye esas tres URLs canónicas. Las anclas no son páginas independientes. Los datos de contacto y proyectos siguen en `src/data/portfolio.js`; el contenido de servicios está en `src/data/services.js` y los metadatos/esquemas en `src/data/seo.js`.

Ver la [mejora integral actual](docs/mejora-integral.md) y el [diagnóstico previo de indexación y páginas de servicios](docs/seo-indexacion.md). La [auditoría inicial](docs/seo-audit.md) conserva las evidencias de la actualización anterior. Después de publicar: verificar propiedad en Search Console, enviar sitemap, inspeccionar URL y medir impresiones, clics, CTR y posición por consulta. Las mejoras técnicas no garantizan posiciones.
