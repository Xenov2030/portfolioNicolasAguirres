import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
import { contactLinks } from "../data/contact";

export default function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <figure className="profile-photo">
          <img
            src="/assets/nicolas-aguirres.jpg"
            alt="Nicolas Aguirres, desarrollador web en Mendoza"
            width="400"
            height="400"
            loading="lazy"
          />
          <figcaption>Nicolas Aguirres · Mendoza, Argentina</figcaption>
        </figure>
        <div className="about-copy">
          <h2 id="about-title">
            Una persona detrás
            <br />
            de tu próximo proyecto.
          </h2>
          <p>
            Me interesa entender cómo funciona tu negocio y construir algo que
            te resulte útil. Trabajo en sitios y aplicaciones web con una
            navegación clara, una identidad propia y atención al uso desde el
            celular.
          </p>
          <p>
            Mi camino en desarrollo combina los fundamentos de la web con
            proyectos propios en los que sigo aprendiendo y comprobando lo que
            construyo.
          </p>
          <a
            className="inline-link"
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos de tu proyecto <ArrowUpRight size={17} />
          </a>
          <div className="recruiter-panel" id="opportunities">
            <h3>¿Una oportunidad laboral?</h3>
            <p>Conocé mis proyectos y mi perfil profesional.</p>
            <div className="professional-links">
              <a href={profile.cv} download>
                CV en español <ArrowDownToLine size={16} />
              </a>
              <a href={profile.cvEn} download lang="en">
                CV in English <ArrowDownToLine size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
              <a href={contactLinks.email}>Proponer una oportunidad</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
