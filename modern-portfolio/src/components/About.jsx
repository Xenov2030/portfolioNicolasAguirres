import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <div className="about-identity">
          <span className="eyebrow section-index">02 / DETRÁS DEL CÓDIGO</span>
          <div className="identity-art" aria-hidden="true">
            <span className="identity-cross cross-one">+</span>
            <span className="identity-cross cross-two">+</span>
            <span className="identity-initials">
              na<span>.</span>
            </span>
            <span className="identity-caption">
              CURIOSIDAD EN CONSTANTE DESARROLLO
            </span>
          </div>
          <div className="cv-downloads" aria-label="Descargar currículum">
            <a
              className="cv-link"
              href={profile.cv}
              download="Nicolas_Aguirres_CV_ES.pdf"
              hrefLang="es"
            >
              CV en español <ArrowDownToLine size={18} />
            </a>
            <a
              className="cv-link"
              href={profile.cvEn}
              download="Nicolas_Aguirres_CV_EN.pdf"
              hrefLang="en"
              lang="en"
            >
              CV in English <ArrowDownToLine size={18} />
            </a>
          </div>
        </div>
        <div className="about-copy">
          <h2 id="about-title">
            Siempre curioso.
            <br />
            <span className="muted">Siempre construyendo.</span>
          </h2>
          <p className="about-lead">
            Me interesa lo que pasa cuando una buena idea encuentra la forma de
            convertirse en algo útil.
          </p>
          <p>
            Mi camino hacia el desarrollo viene de la curiosidad y el
            aprendizaje constante. Empecé por los fundamentos de la web y hoy
            exploro aplicaciones full stack, sin perder el foco en una interfaz
            clara y una buena experiencia móvil.
          </p>
          <p>
            Trabajo con HTML, CSS, JavaScript y React. Uso la IA como una
            herramienta de apoyo para explorar, aprender e iterar, con criterio
            sobre lo que construyo.
          </p>
          <div className="about-principles">
            <span>
              <b>01</b> Entender antes de construir
            </span>
            <span>
              <b>02</b> Diseñar para quien lo usa
            </span>
            <span>
              <b>03</b> Aprender en cada entrega
            </span>
          </div>
          <a
            className="inline-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoceme en LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
