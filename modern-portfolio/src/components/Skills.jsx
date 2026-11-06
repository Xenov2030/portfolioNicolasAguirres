import { profile } from "../data/portfolio";
export default function Skills() {
  return (
    <section
      data-journey-section
      id="skills"
      className="section capabilities-section"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="commercial-heading">
          <h2 id="skills-title">
            Capacidad técnica,
            <br />
            con ejemplos a la vista.
          </h2>
          <p>
            Las herramientas están al servicio de lo que necesita cada proyecto.
          </p>
        </div>
        <dl className="capability-list">
          <div>
            <dt>Interfaces adaptables</dt>
            <dd>
              HTML, CSS, JavaScript y React. Navegación y contenido para celular
              y escritorio. <a href="#musashi">Ver Musashi</a>.
              <span
                className="capability-reading-line"
                data-reading-line
                aria-hidden="true"
              />
            </dd>
          </div>
          <div>
            <dt>Aplicaciones y datos</dt>
            <dd>
              Next.js, React, Supabase y PostgreSQL aplicados a registros,
              presupuestos y estados.{" "}
              <a href="#trabajoclaro">Ver TrabajoClaro</a> y{" "}
              <a href="#jornadapp">JornadApp</a>.
              <span
                className="capability-reading-line"
                data-reading-line
                aria-hidden="true"
              />
            </dd>
          </div>
          <div>
            <dt>Desarrollo y entrega</dt>
            <dd>
              Git, GitHub, Vite y GitHub Actions: código versionado, compilación
              y publicación. Este portfolio entrega contenido HTML antes de
              ejecutar JavaScript.
              <span
                className="capability-reading-line"
                data-reading-line
                aria-hidden="true"
              />
            </dd>
          </div>
          <div>
            <dt>En aprendizaje</dt>
            <dd>
              Sigo profundizando en PHP, MySQL e integraciones de IA. En las
              fichas de cada proyecto distingo las tecnologías utilizadas y sus
              límites.
              <span
                className="capability-reading-line"
                data-reading-line
                aria-hidden="true"
              />
            </dd>
          </div>
        </dl>
        <a
          className="inline-link"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explorar mi código en GitHub
        </a>
      </div>
    </section>
  );
}
