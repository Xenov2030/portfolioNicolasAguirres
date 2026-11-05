import { profile } from "../data/portfolio";
export default function Services() {
  return <section id="services" className="section services-section" aria-labelledby="services-title">
    <div className="container">
      <span className="eyebrow">DESARROLLO WEB EN MENDOZA · ARGENTINA</span>
      <h2 id="services-title">Una web para tu negocio. Un sistema para tu forma de trabajar.</h2>
      <p>Como desarrollador web freelance en Mendoza, trabajo en proyectos locales y remotos. Primero conversamos sobre tu negocio, tus usuarios y lo que necesitás resolver; después definimos el alcance.</p>
      <div className="services-grid">
        <article><h3>Diseño y desarrollo de páginas web</h3><p>Sitios para negocios que necesitan explicar sus servicios, mostrar su trabajo y facilitar consultas. Diseño adaptable a celular, contenido claro y navegación accesible.</p></article>
        <article><h3>Aplicaciones web a medida</h3><p>Interfaces con React y Next.js y lógica de aplicación para organizar procesos. JornadApp muestra mi trabajo con registros, horarios y estimaciones.</p><a href="#jornadapp">Conocer JornadApp →</a></article>
        <article><h3>Sistemas de gestión para negocios</h3><p>Clientes, presupuestos, trabajos y seguimiento de cobros según el alcance acordado. TrabajoClaro es mi beta propia para explorar estas necesidades.</p><a href="#trabajoclaro">Conocer TrabajoClaro →</a></article>
      </div>
      <a className="inline-link" href={`mailto:${profile.email}?subject=Consulta%20por%20desarrollo%20web`}>Contame qué necesitás desarrollar →</a>
    </div>
  </section>;
}
