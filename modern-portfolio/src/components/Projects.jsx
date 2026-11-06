import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectGallery from "./ProjectGallery";
import { projects } from "../data/portfolio";

function ProjectLinks({ project }) {
  return (
    <div className="work-links">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          {project.id === "musashi" ? "Visitar la web" : "Probar el proyecto"}
          <ArrowUpRight size={16} />
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          Ver código
          <ArrowUpRight size={16} />
        </a>
      )}
    </div>
  );
}
function Work({ project, secondary = false }) {
  return (
    <article
      id={project.id}
      className={`work-item${secondary ? " work-secondary" : ""}`}
      data-project
    >
      <ProjectGallery project={project} />
      <div className="work-copy">
        <span className="work-state">{project.label}</span>
        <h3>{project.title}</h3>
        <p>{project.summary || project.description}</p>
        <p className="work-role">
          {project.role || "Diseño e implementación de la interfaz web."}
        </p>
        {project.features && (
          <ul className="work-features">
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {project.tryNote && <p className="work-note">{project.tryNote}</p>}
        <ProjectLinks project={project} />
        <details className="project-case" id={`${project.id}-detalles`}>
          <summary>Ver ficha de {project.title}</summary>
          <div>
            <h4>Desarrollo y alcance</h4>
            <p>{project.detail || project.description}</p>
            <h4>Tecnologías</h4>
            <p>{project.tech.join(" · ")}</p>
            {project.limits && (
              <>
                <h4>Estado y límites</h4>
                <p>{project.limits}</p>
              </>
            )}
            {project.captureNote && (
              <p className="capture-note">{project.captureNote}</p>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}
export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const chosen = projects.filter(
    (p) => p.primary && (filter === "Todos" || p.category === filter),
  );
  const rest = projects.filter(
    (p) => !p.primary && (filter === "Todos" || p.category === filter),
  );
  return (
    <section
      id="projects"
      className="section work-section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="commercial-heading">
          <h2 id="projects-title">
            Una cafetería, presupuestos
            <br />y jornadas de trabajo.
          </h2>
          <p>
            Sitios para negocios y productos propios. Cada ficha explica qué
            desarrollé y qué se puede probar.
          </p>
        </div>
        <div
          className="work-filters"
          role="group"
          aria-label="Filtrar proyectos"
        >
          {["Todos", "Aplicaciones", "Sitios web"].map((category) => (
            <button
              type="button"
              key={category}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="selected-work">
          {chosen.map((p) => (
            <Work key={p.id} project={p} />
          ))}
        </div>
        {rest.length > 0 && (
          <details className="more-work">
            <summary>
              Más proyectos y exploración técnica <span>({rest.length})</span>
            </summary>
            <div>
              {rest.map((p) => (
                <Work key={p.id} project={p} secondary />
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
