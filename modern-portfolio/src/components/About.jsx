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
            Del presupuesto al cobro. Del registro al resumen.
          </h2>
          <p>
            Soy Nicolas Aguirres, desarrollador web en Mendoza. Me interesa
            conectar las partes de un trabajo: qué necesita una persona, qué
            información tiene y cuál es su próximo paso.
          </p>
          <p>
            En TrabajoClaro conecté clientes, presupuestos, trabajos y saldos
            para seguir un encargo. En JornadApp reuní jornadas e ingresos
            estimados en un resumen que permite revisar los registros. En
            Musashi, el recorrido presenta el local y acerca su carta.
          </p>
          <p>
            Esos proyectos muestran cómo encaro una idea: definir un recorrido
            concreto, construirlo y revisar si se entiende al usarlo desde el
            celular.
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
