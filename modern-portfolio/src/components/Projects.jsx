import ProjectGallery from "./ProjectGallery";
import { Github } from "./SocialIcons";
import { useState } from "react";
import { ArrowUpRight, Layers, Dices, Sparkles } from "lucide-react";
import { projects, profile } from "../data/portfolio";

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.demo && (
        <a
          href={project.demo || project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver sitio de ${project.title}`}
        >
          Ver sitio <ArrowUpRight size={16} />
        </a>
      )}
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver código de ${project.title} en GitHub`}
      >
        <Github size={16} /> {project.demo ? "Código" : "Explorar el código"}
        {!project.demo && <ArrowUpRight size={16} />}
      </a>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const visible = projects.filter(
    (project) => filter === "Todos" || project.category === filter,
  );
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow section-index">
              01 / TRABAJO SELECCIONADO
            </span>
            <h2 id="projects-title">
              Menos palabras.
              <br />
              <span className="muted">Más proyectos.</span>
            </h2>
          </div>
          <p>
            De sitios para negocios a mundos de rol.
            <br />
            Cada proyecto, un desafío distinto.
          </p>
        </div>
        <div className="projects-toolbar">
          <div
            className="filter-group"
            role="group"
            aria-label="Filtrar proyectos"
          >
            {["Todos", "Aplicaciones", "Sitios web"].map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
                <span>
                  {category === "Todos"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length}
                </span>
              </button>
            ))}
          </div>
          <span className="project-count" role="status" aria-live="polite">
            {visible.length} proyectos para explorar
          </span>
        </div>
        <div className="project-grid">
          {visible.map((project) =>
            project.featured ? (
              <article className="featured-project" key={project.id}>
                <div className="forge-art" aria-hidden="true">
                  <div className="forge-grid" />
                  <span className="forge-top">
                    <Sparkles size={12} /> DONDE EMPIEZA LA AVENTURA
                  </span>
                  <div className="forge-emblem">
                    <Dices size={72} strokeWidth={1} />
                  </div>
                  <div className="forge-wordmark">
                    CAMPAIGN<span>FORGE</span>
                  </div>
                  <span className="forge-bottom">
                    CONSTRUYE MUNDOS. CREA HISTORIAS.
                  </span>
                </div>
                <div className="featured-copy">
                  <div className="project-label">
                    <Layers size={14} /> {project.label}
                    <span className="project-badge">DESTACADO</span>
                  </div>
                  <h3>
                    {project.title}
                    <span>Una aventura full stack.</span>
                  </h3>
                  <p>{project.description}</p>
                  <p className="project-detail">{project.detail}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </article>
            ) : (
              <article className="project-card" key={project.id}>
                <ProjectGallery project={project} />
                <div className="project-card-copy">
                  <span className="project-label">{project.label}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </article>
            ),
          )}
        </div>
        <a
          className="github-more"
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
          <span>
            El proceso también se comparte.
            <b>Más código, ideas y experimentos en GitHub.</b>
          </span>
          <ArrowUpRight size={21} />
        </a>
      </div>
    </section>
  );
}
