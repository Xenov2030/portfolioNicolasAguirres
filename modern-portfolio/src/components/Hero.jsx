import { ArrowDown, MessageCircle } from "lucide-react";
import { projects } from "../data/portfolio";
import { contactLinks } from "../data/contact";

export default function Hero() {
  const preview = projects.find((project) => project.id === "musashi").preview;
  return (
    <section id="home" className="commercial-hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title">
            Nicolas Aguirres.{" "}
            <span>
              Desarrollador web <br />
              en Mendoza.
            </span>
          </h1>
          <p>
            Creo páginas para presentar tu negocio y recibir consultas, y
            aplicaciones para organizar tu trabajo. Desde Mendoza, Argentina,
            para proyectos locales y remotos.
          </p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a
              className="button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Consultar mi proyecto
            </a>
            <a className="button-text" href="#projects">
              Ver trabajos <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <a
          className="work-preview"
          href="#musashi"
          aria-label="Conocer el proyecto Musashi"
        >
          <img
            src={preview.src}
            srcSet={preview.srcSet}
            sizes="(max-width: 700px) calc(100vw - 40px), 44vw"
            width="1440"
            height="900"
            alt="Sitio de Musashi: presentación de la cafetería en Mendoza"
            fetchPriority="high"
          />
          <span>
            <strong>Musashi</strong>
            <span>
              Una web para descubrir una cafetería.
              <ArrowDown size={16} aria-hidden="true" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
