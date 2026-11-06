import { useState, useRef, useEffect } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import { projects } from "../data/portfolio";
import { contactLinks } from "../data/contact";

const selection = ["musashi", "trabajoclaro", "jornadapp"].map((id) =>
  projects.find((p) => p.id === id),
);

export default function Hero() {
  const [active, setActive] = useState(0);
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
  }, []);
  return (
    <section
      id="home"
      className="commercial-hero scene-hero"
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
            Tu negocio tiene su forma de hacer las cosas. Desarrollo sitios y
            aplicaciones web que la lleven a la pantalla.
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
          <a
            ref={stage}
            className="stage-preview"
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
                onClick={() => setActive(i)}
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
        <span>Sitios para negocios. Aplicaciones para trabajar.</span>
        <a href="#projects">
          Explorá lo que desarrollo <ArrowDown size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
