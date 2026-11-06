# Cierre y navegación de servicios

6 de noviembre de 2026. Sustituye los dos enlaces sueltos y el footer pequeño por un cierre con identidad NA.

- Firma tipográfica n.a con nombre y ubicación legibles.
- Dos accesos de servicios dentro de una navegación coherente: título, descripción breve y flecha. Conservan las URLs existentes y siguen presentes en el HTML inicial.
- Línea final con crédito, GitHub, LinkedIn y regreso al inicio. Se retira el texto diminuto sobre React.
- En móvil los grupos se apilan; los enlaces mantienen área de interacción y foco visibles. El hover actúa en línea y flechas, sin bucles nuevos ni efectos de entrada. Respeta movimiento reducido.

La mejora está aislada en Footer.jsx y Footer.css y se aplica a portada y páginas de servicios. Conserva el contacto anterior y las demás secciones.

Validación: compilación, check:static y check:http correctos. Se revisó el footer de las tres rutas a 320/390/768/1440 px, sin desbordamiento. Seis enlaces por footer, todos con foco visible y altura mínima de 44 px. Axe A/AA sin incidencias en las seis vistas de 390/1440. Regreso al inicio comprobado sin enviar mensajes ni abrir perfiles externos.

Capturas: [escritorio](evidencias/footer-na/escritorio.webp), [móvil](evidencias/footer-na/movil.webp). [Resultados](evidencias/footer-na/results.json). Pruebas en Chromium y tamaños emulados; sin prueba física o lector de pantalla.
