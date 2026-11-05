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

## Proyectos seleccionados

- [JornadApp](https://github.com/Xenov2030/ControldeHorasTrabajadas): producto propio beta de jornadas e ingresos.
- [TrabajoClaro](https://github.com/Xenov2030/TrabajoClaro): producto propio beta de gestión para pequeños negocios.
- [Aetherfall](https://github.com/Xenov2030/Aetherfall): archivo privado de una campaña presencial, en desarrollo.
- [CampaignForge](https://github.com/Xenov2030/campaign-forge): plataforma multijugador con integración de IA, en desarrollo.
- Gentleman Barber Shop, Limbo Hamburguesas e Infinity Geeks: variedad de diseño y fundamentos web. No se atribuyen contratos comerciales sin evidencia.

Las tecnologías y límites se contrastaron con el código y documentación públicos. MusashiPaginaWeb solo contiene README y no se destaca. No se declaran usuarios, ventas, testimonios ni nivel de inglés.

## Publicación y SEO

El workflow de despliegue publica por FTP cuando se integra a `main`. Revisar el PR antes de integrar. El workflow de PR solo compila y comprueba el HTML estático.

Se generan tres páginas reales: portada, `/desarrollo-web-mendoza/` y `/aplicaciones-web-a-medida/`. Cada una entrega HTML y metadatos propios; el sitemap solo incluye esas tres URLs canónicas. Las anclas no son páginas independientes. Los datos de contacto y proyectos siguen en `src/data/portfolio.js`; el contenido de servicios está en `src/data/services.js` y los metadatos/esquemas en `src/data/seo.js`.

Ver el [diagnóstico actual de indexación y páginas de servicios](docs/seo-indexacion.md). La [auditoría inicial](docs/seo-audit.md) conserva las evidencias de la actualización anterior. Después de publicar: verificar propiedad en Search Console, enviar sitemap, inspeccionar URL y medir impresiones, clics, CTR y posición por consulta. Las mejoras técnicas no garantizan posiciones.
