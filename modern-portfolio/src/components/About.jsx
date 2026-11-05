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
          <figure className="about-portrait">
            <img src="/assets/nicolas-aguirres.jpg" alt="Nicolas Aguirres, desarrollador web" width="400" height="400" loading="lazy" />
            <figcaption>NICOLAS AGUIRRES <span>DESARROLLADOR WEB</span></figcaption>
          </figure>
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
            Una web que represente tu negocio.
            <br />
            <span className="muted">Una herramienta que simplifique tu trabajo.</span>
          </h2>
          <p className="about-lead">
            Soy Nicolas Aguirres, desarrollador web en Mendoza, Argentina. Creo sitios y aplicaciones web para que tus clientes conozcan lo que ofrecés, encuentren lo que necesitan y puedan contactarte fácilmente desde cualquier dispositivo.
          </p>
          <p>
            Cada proyecto empieza por entender tu negocio: qué querés conseguir, quién va a usarlo y qué conviene resolver primero. Con esa base, desarrollo una solución con identidad propia, navegación clara y una experiencia cuidada en celulares y computadoras.
          </p>
          <p>
            Desde una página para presentar tus servicios hasta una aplicación para organizar presupuestos, turnos o tareas, mi enfoque es combinar diseño y funcionalidad para darle una utilidad concreta a tu idea.
          </p>
          <div className="about-principles">
            <span><b>01</b> <strong>Entender tu negocio</strong></span>
            <span><b>02</b> <strong>Crear con un objetivo claro</strong></span>
            <span><b>03</b> <strong>Cuidar cada detalle</strong></span>
          </div>
          <p>
            ¿Tenés un proyecto en mente? Contame qué necesitás y veamos cómo hacerlo realidad.
          </p>
          <a className="inline-link" href="#contact">
            <strong>Hablemos de tu proyecto</strong> <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
