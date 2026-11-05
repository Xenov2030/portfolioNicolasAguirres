import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <>
    <nav className="container service-links" aria-label="Servicios de desarrollo"><a href="/desarrollo-web-mendoza/">Diseño y desarrollo web en Mendoza</a><a href="/aplicaciones-web-a-medida/">Aplicaciones web a medida</a></nav>
    <footer className="container site-footer">
      <a className="footer-brand" href="#home">
        nicolas aguirres<span>.</span>
      </a>
      <span>© {new Date().getFullYear()} · Hecho con curiosidad y React.</span>
      <a className="back-top" href="#home">
        Volver arriba <ArrowUp size={15} />
      </a>
    </footer>
    </>
  );
}
