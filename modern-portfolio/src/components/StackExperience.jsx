import { useState } from "react";
import { Code2, Workflow, Database, Sparkles } from "lucide-react";
import useVisibleCycle from "../hooks/useVisibleCycle";
const stages = [
  {
    label: "Interfaz",
    Icon: Code2,
    tools: "HTML · CSS · React",
    code: "<Idea>\n  <Interfaz clara />\n  <Experiencia responsive />\n</Idea>",
    description: "Una idea toma forma: estructura, diseño e interacción.",
  },
  {
    label: "Lógica",
    Icon: Workflow,
    tools: "JavaScript · PHP · Next.js",
    code: "async function conectar(idea) {\n  const respuesta = await API(idea);\n  return transformar(respuesta);\n}",
    description: "Las acciones de la interfaz se conectan con la aplicación.",
  },
  {
    label: "Datos",
    Icon: Database,
    tools: "MySQL · PostgreSQL · Prisma",
    code: "SELECT ideas, proyectos\nFROM aprendizaje\nWHERE proposito IS NOT NULL;\n// Datos que cuentan una historia",
    description:
      "Los datos se organizan para dar continuidad a la experiencia.",
  },
  {
    label: "IA + entrega",
    Icon: Sparkles,
    tools: "Gemini · Git · GitHub Actions",
    code: "idea → explorar → construir\n     → revisar → mejorar\n     → publicar\n// La curiosidad sigue.",
    description:
      "Exploración con IA, revisión y despliegue: un ciclo que continúa.",
  },
];
export default function StackExperience() {
  const [paused, setPaused] = useState(false);
  const { ref, index, setIndex } = useVisibleCycle(4, paused, 4000);
  const stage = stages[index];
  return (
    <div
      ref={ref}
      className="stack-experience"
      role="region"
      aria-label="De la idea a la aplicación: recorrido de mi stack"
      onFocusCapture={() => setPaused(true)}
    >
      <div className="experience-heading">
        <span>ASÍ CONECTO MIS HERRAMIENTAS</span>
        <span>UNA IDEA → CUATRO CAPAS</span>
      </div>
      <div
        className="experience-route"
        role="group"
        aria-label="Explorar las capas de desarrollo"
      >
        {stages.map(({ label, Icon }, i) => (
          <button
            type="button"
            key={label}
            aria-pressed={i === index}
            onClick={() => {
              setPaused(true);
              setIndex(i);
            }}
          >
            <Icon size={22} />
            <span>{label}</span>
            <i aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="experience-console">
        <div className="console-copy">
          <span className="eyebrow">
            0{index + 1} / {stage.tools}
          </span>
          <p>{stage.description}</p>
          <span className="console-note">
            Representación visual del proceso · Explorá cada capa
          </span>
        </div>
        <pre key={index}>
          <code>{stage.code}</code>
        </pre>
      </div>
      <button
        className="experience-pause"
        type="button"
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? "Reanudar recorrido" : "Pausar recorrido"}
      </button>
    </div>
  );
}
