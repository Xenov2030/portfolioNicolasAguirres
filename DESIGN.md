# Identidad y criterios de interfaz

Nicolas Aguirres / NA. Esta mejora conserva la identidad del sitio publicado: negro, violeta, tipografía sans y un cierre de contacto lavanda. Es una revisión de jerarquía y contenido, no una identidad nueva.

## Fundamentos

Los tokens de la composición actual están en `modern-portfolio/src/commercial.css`:

- Fondo `--ink: #080809`; superficie secundaria `--surface: #151219`.
- Texto `--paper: #f2eff8`; secundario `--text-soft: #c4b9d0`.
- Acento `--accent: #c6afff`; contacto lavanda `#c4ade9`.
- Separadores finos, grupos relacionados y espacio entre secciones. No se agregan vidrio, degradados o tarjetas decorativas.
- Se conserva la familia sans del sitio anterior. Títulos con escala fluida y espaciado moderado; párrafos de longitud contenida.

## Jerarquía

Presentación → trabajos → servicios → proceso → perfil → capacidades → contacto. Dos acciones en portada: consulta por WhatsApp y trabajos. CV, LinkedIn y oportunidades laborales viven en el perfil; el correo queda como alternativa en contacto.

Tres trabajos principales: Musashi, TrabajoClaro y JornadApp. Los restantes usan una divulgación nativa; cada proyecto conserva su ficha ampliable, tecnologías y límites. No se confunden demostración, beta, vista en revisión y producto terminado.

## Interacción

- Enlaces explícitos, controles con nombre y foco de tres píxeles.
- Las capturas mantienen proporciones; se amplían en una nueva pestaña del navegador, sin un modal innecesario.
- Carruseles con flechas, teclado y gestos horizontales. El control «Avance automático» permite pausar sin un botón de play; el avance se detiene con foco/hover y respeta movimiento reducido.
- El contenido existe antes de JavaScript. Los desplegables de fichas siguen funcionando sin él.
- Sin animación de entrada, espera o contenido oculto hasta hacer scroll.

Las reglas heredadas de `index.css` y `editorial.css` se conservan para las superficies compartidas; aún contienen colores y selectores de versiones anteriores. La consolidación completa de ese CSS queda fuera de esta mejora focalizada para evitar cambios visuales no solicitados.
