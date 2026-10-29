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
        <div className="skills-grid">
          {skills.map(({ icon: Icon, title, label, items, detail }) => (
            <article className="skill-card" key={label}>
              <Icon size={25} strokeWidth={1.5} />
              <span className="eyebrow">{label}</span>
              <h3>{title}</h3>
              <div className="skill-items">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
