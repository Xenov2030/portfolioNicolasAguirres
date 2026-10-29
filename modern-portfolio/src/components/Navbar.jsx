import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Proyectos", "#projects"],
  ["Sobre mí", "#about"],
  ["Stack", "#skills"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const navigation = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          toggle.current,
          ...navigation.current.querySelectorAll("a"),
        ];
        if (event.shiftKey && document.activeElement === items[0]) {
          event.preventDefault();
          items.at(-1).focus();
        } else if (!event.shiftKey && document.activeElement === items.at(-1)) {
          event.preventDefault();
          items[0].focus();
        }
      }
    };
    const media = window.matchMedia("(min-width: 801px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a
          href="#home"
          className="brand"
          aria-label="Nicolas Aguirres, inicio"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            n<span>.</span>a
          </span>
          <span className="brand-name">
            NICOLAS
            <br />
            <b>AGUIRRES</b>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav
          ref={navigation}
          id="main-navigation"
          aria-label="Navegación principal"
          className={`navigation ${open ? "is-open" : ""}`}
        >
          {links.map(([name, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Hablemos <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
