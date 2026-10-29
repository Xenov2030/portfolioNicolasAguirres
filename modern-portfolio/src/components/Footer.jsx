import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="container site-footer">
      <a className="footer-brand" href="#home">
        nicolas aguirres<span>.</span>
      </a>
      <span>© {new Date().getFullYear()} · Hecho con curiosidad y React.</span>
      <a className="back-top" href="#home">
        Volver arriba <ArrowUp size={15} />
      </a>
    </footer>
  );
}
