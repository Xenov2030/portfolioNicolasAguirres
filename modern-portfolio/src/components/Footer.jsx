import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="closing-footer">
      <div className="container">
        <div className="footer-composition">
          <a
            className="footer-signature"
            href="#home"
            aria-label="Nicolas Aguirres, volver al inicio"
          >
            <span className="footer-monogram" aria-hidden="true">
              n<span>.</span>a
            </span>
            <span className="footer-author">Nicolas Aguirres</span>
            <span className="footer-location">
              Desarrollo web desde Mendoza, Argentina.
            </span>
          </a>
          <nav className="footer-services" aria-label="Servicios de desarrollo">
            <a href="/desarrollo-web-mendoza/">
              <span>
                <span className="footer-service-title">
                  Diseño y desarrollo web en Mendoza
                </span>
                <span className="footer-service-description">
                  Una web para presentar tu negocio.
                </span>
              </span>
              <span className="footer-service-arrow">
                <ArrowUpRight size={24} aria-hidden="true" />
              </span>
            </a>
            <a href="/aplicaciones-web-a-medida/">
              <span>
                <span className="footer-service-title">
                  Aplicaciones web a medida
                </span>
                <span className="footer-service-description">
                  Una herramienta para organizar tu trabajo.
                </span>
              </span>
              <span className="footer-service-arrow">
                <ArrowUpRight size={24} aria-hidden="true" />
              </span>
            </a>
          </nav>
        </div>
        <div className="footer-baseline">
          <p>© {new Date().getFullYear()} Nicolas Aguirres</p>
          <nav className="footer-profiles" aria-label="Perfiles profesionales">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
          <a className="footer-return" href="#home">
            Volver arriba{" "}
            <span>
              <ArrowUp size={18} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
