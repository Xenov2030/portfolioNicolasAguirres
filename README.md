# Nicolas Aguirres · Portfolio

Desarrollador web full stack en Mendoza, Argentina.

- Portfolio: https://nicolasaguirrescode.com/
- GitHub: https://github.com/Xenov2030
- LinkedIn: https://www.linkedin.com/in/nicolas-aguirres/
- Contacto: nicolas.f.aguirres@gmail.com

## Proyectos destacados

- [JornadApp](https://controldehorastrabajadas.vercel.app/): beta de registro personal de jornadas e ingresos.
- [TrabajoClaro](https://trabajo-claro-orpin.vercel.app/): beta de clientes, presupuestos, trabajos y registro manual de cobros.
- [Aetherfall](https://github.com/Xenov2030/Aetherfall): archivo de campaña de rol en desarrollo.
- [CampaignForge](https://github.com/Xenov2030/campaign-forge): plataforma de campañas de rol.

Las funciones y estados se contrastan con los README de cada repositorio. No se declaran métricas comerciales ni clientes sin evidencia.

## Desarrollo

El sitio vigente está en `modern-portfolio/` (React y Vite). La carpeta `portfolio/` conserva una versión anterior.

```sh
cd modern-portfolio
npm ci
npm run build
npm run dev
```

Los pushes a `main` ejecutan el despliegue FTP existente a Hostinger. Revisar los cambios antes de integrar.

## Visibilidad en buscadores

Se conservan canonical, robots.txt y sitemap; se mejora el título, la descripción, el encabezado principal y los datos estructurados de persona y perfil.

Pendiente tras publicar: verificar el dominio en Google Search Console, enviar `/sitemap.xml`, inspeccionar la URL principal y medir consultas por nombre y especialidad. No hay acceso a Search Console desde este repositorio ni garantía de posición.

La aplicación se renderiza en el navegador. Evaluar prerenderizado o SSR como una mejora posterior; no se implementa en esta actualización.
