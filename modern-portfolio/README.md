# Portfolio de Nicolas Aguirres

React/Vite, generación estática y despliegue FTP existente a Hostinger. Node.js 24.

```sh
npm ci
npm run dev
npm run build
npm run check:static
npm run check:http
npm run preview
```

El build genera la portada, las dos páginas de servicios, sitemap y documento 404. React hidrata el mismo árbol. En desarrollo monta el contenido de la plantilla vacía; para revisar SEO se usa build + preview. Las rutas falsas de preview responden 404. Las reglas de Apache se verifican en hosting después de una publicación autorizada.

## Contenido

- `src/data/portfolio.js`: perfil, proyectos, capturas y procedencia resumida.
- `src/data/contact.js`: destinatarios y mensaje/asunto preparados, sin enviar comunicaciones.
- `src/data/services.js`: las dos páginas de servicios, con alcance, proceso y FAQ visibles.
- `src/data/seo.js`: títulos, descripciones y datos estructurados; una URL canónica por documento.
- `src/components/Projects.jsx`: tres casos principales y cinco secundarios; filtros y fichas con details nativo.
- `src/components/ProjectGallery.jsx`: carrusel, pausa por checkbox, teclado, gesto horizontal y ampliación al archivo real. El movimiento reducido desactiva autoplay.
- `src/commercial.css`: composición y tokens de esta mejora; los estilos base se conservan.
- `public/assets/`: capturas WebP, con variantes responsivas en los trabajos principales. Al actualizar una captura, conservar dimensiones correctas y generar las variantes referenciadas en srcSet.

No editar dist. El sitemap se genera a partir de las tres páginas reales; las fichas desplegables y anclas no son páginas independientes. Se conserva sin modificar el archivo real `google4b22b9fa65bb2325.html`. El token opcional de verificación por etiqueta sigue vacío; no se modifica DNS.

## Evidencias y publicación

[Informe de la mejora integral](../docs/mejora-integral.md): diagnóstico, capturas, pruebas, mediciones, fuentes y límites. [Identidad de interfaz](../DESIGN.md).

Las capturas funcionales de JornadApp proceden de código local con datos ficticios y sin cuenta; las de TrabajoClaro de una demo anónima aislada con un presupuesto ficticio en borrador; las de Musashi del sitio público aportado por Nicolas, quien confirmó su autoría completa. No se usaron cuentas reales ni se enviaron presupuestos o mensajes.

El flujo existente publica solo al integrar en main. Esta propuesta se entrega en una rama y un PR en borrador; no se publica automáticamente. Las comprobaciones del PR compilan, revisan el HTML y prueban HTTP local. La revisión de navegador y sus límites están documentados en el informe.
