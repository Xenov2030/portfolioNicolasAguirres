import { useState, useRef, useEffect } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import { projects } from "../data/portfolio";
import { contactLinks } from "../data/contact";

const selection = ["musashi", "trabajoclaro", "jornadapp"].map((id) =>
  projects.find((p) => p.id === id),
);

export default function Hero() {
  const [active, setActive] = useState(0);
  const [pointerChange, setPointerChange] = useState(false);
  const stage = useRef(null);
  const project = selection[active];
  const preview = project.preview || project.gallery[0];
  useEffect(() => {
    const node = stage.current;
    const media = matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame;
    const reset = () => {
      cancelAnimationFrame(frame);
      node.style.transform = "";
    };
    const move = (event) => {
      if (!media.matches) return;
      const bounds = node.parentElement.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      });
    };
    const parent = node.parentElement;
    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerleave", reset);
    media.addEventListener("change", reset);
    return () => {
      reset();
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", reset);
      media.removeEventListener("change", reset);
    };
  }, [active]);
  return (
    <section
      id="home"
      className="commercial-hero scene-hero workshop-hero"
      data-assembly={pointerChange ? "on" : "off"}
      aria-labelledby="hero-title"
    >
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title">
            Nicolas <br />
            <span className="signature-surname">
              Aguirres<span className="signature-dot">.</span>
            </span>
          </h1>
          <p className="hero-specialty">Desarrollador web en Mendoza.</p>
          <p>
            Me gusta inventar cosas que sirvan. Desarrollo sitios y aplicaciones
            web para conectar lo que imaginás con algo que tus clientes puedan
            usar.
          </p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a
              className="button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              <span className="cta-copy">
                Consultar mi proyecto<small>Por WhatsApp</small>
              </span>
            </a>
            <a className="button-text" href="#projects">
              Ver trabajos <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="project-stage">
          <div className="idea-note" key={`idea-${project.id}`}>
            <span className="idea-sign" aria-hidden="true">
              n.a
            </span>
            <p>
              {active === 0
                ? "Un lugar con identidad. Una carta por descubrir."
                : active === 1
                  ? "¿Qué sigue con este encargo y cuánto falta cobrar?"
                  : "¿Cuánto trabajé esta semana?"}
            </p>
          </div>
          <svg
            className="idea-connection"
            viewBox="0 0 600 130"
            aria-hidden="true"
            key={`trace-${project.id}`}
          >
            <path d="M55 10 C42 92 170 4 222 61 S370 136 510 98" />
            <path d="m498 86 14 12-18 7" />
          </svg>
          <a
            ref={stage}
            className="stage-preview"
            key={project.id}
            href={`#${project.id}`}
            aria-label={`Conocer el proyecto ${project.title}`}
          >
            <img
              src={preview.src}
              srcSet={preview.srcSet}
              sizes="(max-width: 700px) calc(100vw - 40px), 54vw"
              width={preview.width || 1440}
              height={preview.height || 900}
              alt={
                active === 0
                  ? "Musashi: presentación de la cafetería en Mendoza"
                  : project.alt
              }
              fetchPriority="high"
            />
            <span className="stage-project-name">
              {project.title}
              <ArrowUpRight size={22} aria-hidden="true" />
            </span>
          </a>
          <img
            className="stage-mobile-proof"
            src={project.gallery[1].src}
            alt=""
            aria-hidden="true"
            width="390"
            height="844"
            loading="lazy"
          />
          <div
            className="stage-selector"
            role="group"
            aria-label="Elegir proyecto para la vista previa"
          >
            {selection.map((p, i) => (
              <button
                key={p.id}
                type="button"
                aria-pressed={active === i}
                onClick={(event) => {
                  setPointerChange(event.detail > 0);
                  setActive(i);
                }}
              >
                {p.title}
              </button>
            ))}
          </div>
          <p className="stage-description" aria-live="polite">
            {project.summary}
          </p>
        </div>
      </div>
      <div className="container hero-footnote">
        <span>
          Imaginación para encontrar la idea. Desarrollo para hacerla funcionar.
        </span>
        <a href="#projects">
          Explorá lo que desarrollo <ArrowDown size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
