import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useVisibleCycle from "../hooks/useVisibleCycle";
import { Braces, Database, GitBranch, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Braces,
    title: "Interfaces que se sienten bien.",
    label: "FRONTEND",
    items: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS"],
    detail: "Estructura, interacción y diseño adaptable.",
  },
  {
    icon: Database,
    title: "Lo que pasa detrás.",
    label: "FULL STACK",
    items: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    detail: "Tecnologías aplicadas en CampaignForge.",
  },
  {
    icon: GitBranch,
    title: "Del código a producción.",
    label: "HERRAMIENTAS",
    items: ["Git & GitHub", "Vite", "Netlify", "GitHub Actions"],
    detail: "Versionado, compilación y despliegue.",
  },
  {
    icon: Sparkles,
    title: "Aprender. Probar. Mejorar.",
    label: "EN EXPLORACIÓN",
    items: ["Integración de IA", "Gemini", "SQL", "PHP"],
    detail: "Nuevas herramientas, con bases y criterio.",
  },
];
export default function Skills() {
  const [paused, setPaused] = useState(false);
  const { ref, index, setIndex } = useVisibleCycle(skills.length, paused, 5000);

  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow section-index">
              03 / MI CAJA DE HERRAMIENTAS
            </span>
            <h2 id="skills-title">
              La idea primero.
              <br />
              <span className="muted">El stack, a su servicio.</span>
            </h2>
          </div>
          <p>
            Fundamentos sólidos y herramientas
            <br />
            que amplían lo que puedo construir.
          </p>
        </div>
        <div
          ref={ref}
          className="stack-carousel"
          role="region"
          aria-label="Carrusel de habilidades"
          aria-roledescription="carrusel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
        >
          <div
            className="stack-carousel-tabs"
            role="group"
            aria-label="Categorías del stack"
          >
            {skills.map((skill, i) => (
              <button
                key={skill.label}
                type="button"
                aria-pressed={i === index}
                onClick={() => {
                  setPaused(true);
                  setIndex(i);
                }}
              >
                {skill.label}
              </button>
            ))}
          </div>
          <div className="stack-slides">
            {skills.map(({ icon: Icon, title, label, items, detail }, i) => (
              <article
                key={label}
                className={`stack-slide ${index === i ? "is-current" : ""}`}
                aria-hidden={index !== i}
              >
                <div className="stack-slide-symbol" aria-hidden="true">
                  <Icon size={80} strokeWidth={1} />
                  <span>0{i + 1}</span>
                </div>
                <div>
                  <span className="eyebrow">{label}</span>
                  <h3>{title}</h3>
                  <div className="skill-items">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="stack-nav">
            <button
              type="button"
              aria-label="Stack anterior"
              onClick={() => {
                setPaused(true);
                setIndex((i) => (i + skills.length - 1) % skills.length);
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <span>
              {index + 1} / {skills.length}
            </span>
            <button
              type="button"
              aria-label="Stack siguiente"
              onClick={() => {
                setPaused(true);
                setIndex((i) => (i + 1) % skills.length);
              }}
            >
              <ChevronRight size={20} />
            </button>
            <button type="button" onClick={() => setPaused((p) => !p)}>
              {paused ? "Reanudar" : "Pausar"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
