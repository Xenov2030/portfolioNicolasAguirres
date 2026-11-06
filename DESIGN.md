# Identidad y criterios de interfaz

Nicolas Aguirres / NA. Esta mejora conserva la identidad del sitio publicado: negro, violeta, títulos Manrope, cuerpo sans y un cierre de contacto lavanda. Es una revisión de jerarquía y contenido, no una identidad nueva.

## Fundamentos

Los tokens de la composición actual están en `modern-portfolio/src/commercial.css`:

- Fondo `--ink: #080809`; superficie secundaria `--surface: #151219`.
- Texto `--paper: #f2eff8`; secundario `--text-soft: #c4b9d0`.
- Acento `--accent: #c6afff`; contacto lavanda `#c4ade9`.
- Separadores finos, grupos relacionados y espacio entre secciones. No se agregan vidrio, degradados o tarjetas decorativas.
- Títulos en Manrope variable (400–800), alojada localmente, con licencia OFL. Cuerpo Arial/Helvetica para conservar la lectura existente. Escala fluida, tracking mínimo −0,04 em y pesos diferenciados; párrafos de longitud contenida.

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

## Refinamiento de identidad

La portada conserva la presentación de Musashi; su ficha muestra ahora la carta con un filtro activo, evitando repetir la misma evidencia. Los títulos de trabajos nombran los proyectos por su contexto y el perfil explica recorridos reales de TrabajoClaro, JornadApp y Musashi. Los detalles públicos hablan en primera persona; la trazabilidad de la revisión queda en documentación.

La única microanimación añadida desplaza flechas al pasar el puntero (180 ms); no afecta la carga ni oculta contenido. Solo funciona con puntero fino y sin preferencia de movimiento reducido. El violeta mantiene el contraste medido existente.

## Dirección vigente: mesa de proyectos

La evolución visual reemplaza el ritmo sobrio uniforme por una firma tipográfica de dos líneas, una vitrina interactiva manual y composiciones diferenciadas para los tres trabajos. Esta sección prevalece sobre los criterios de composición anteriores; conserva NA, negro/violeta, Manrope, dos acciones comerciales y la evidencia real.

Tokens de la escena en `src/scene.css`: violeta `#b995f5`, tinta sobre violeta `#17101f`, banda de TrabajoClaro `#d0b8f3`, superficie clara de servicios `#f1edf6`, tinta de servicios `#201829`. El marco del retrato es una superficie real; no una sombra dura. El cuerpo y las páginas de servicios existentes se conservan.

El selector no es un carrusel automático. Las capturas cambian solo al pedirlo. La reacción al puntero usa transformación acotada y se desactiva con movimiento reducido. No se oculta contenido durante la carga ni al hacer scroll. El proceso cambia a una secuencia vertical; el panel de capacidades reduce escala.

Ver `docs/identidad-escena-na.md` para alcance, skills aplicadas y validación. Los checkers de las skills siguen sin estar disponibles; no se les atribuyen resultados.

## Dirección vigente: taller digital de ideas que cobran vida

Esta dirección, definida expresamente por Nicolas, prevalece sobre las composiciones anteriores. No se añade una capa de animación ambiental. Tres momentos relacionan una pregunta con un artefacto: trazo/interfaz de portada, presupuesto que responde y lectura del día dentro de la semana.

`src/workshop.css` desarrolla bordes continuos, superposiciones y profundidad. El acento de Musashi es `#ebc9b8` sobre `#261e20`; TrabajoClaro usa `#d9c6f1` con papel `#f5f0fa` y tinta `#2c1b3c`; JornadApp mantiene violeta oscuro con selección `#c2a1f4`. Las capturas no se deforman; los ejemplos se identifican como ficticios e independientes del producto.

El trazo explicativo dura 380 ms y el revelado 260 ms con comienzo a los 340 ms. Solo se activa tras seleccionar con puntero; teclado y reduced motion son instantáneos. El cursor temporal usa transformación de 240 ms. Nada importante espera una animación inicial ni el scroll.

Ver PRODUCT.md y docs/taller-digital-na.md para personalidad, alcance y pruebas. Las capacidades y el contacto conservan el funcionamiento previo.
