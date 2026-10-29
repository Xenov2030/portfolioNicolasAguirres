import { Github, Linkedin } from "./SocialIcons";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Copy, Check, MessageCircle } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [message, setMessage] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setMessage("Correo copiado");
    } catch {
      setMessage("Podés seleccionar el correo o abrirlo con el enlace.");
    }
    timer.current = setTimeout(() => setMessage(""), 4000);
  }
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <span className="eyebrow">
          <span className="status-dot" /> CONECTEMOS IDEAS
        </span>
        <div className="contact-heading">
          <h2 id="contact-title">
            Tu próxima idea
            <br />
            puede empezar <span>acá.</span>
          </h2>
          <a
            className="contact-arrow"
            href={`mailto:${profile.email}`}
            aria-label="Escribir un correo a Nicolas Aguirres"
          >
            <ArrowUpRight strokeWidth={1} />
          </a>
        </div>
        <div className="contact-bottom">
          <div>
            <p>
              ¿Un proyecto, una colaboración o una oportunidad?
              <br />
              Me gustaría conocerla.
            </p>
            <div className="email-row">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copiar correo electrónico"
              >
                {message === "Correo copiado" ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
            <div className="copy-status" role="status" aria-live="polite">
              {message}
            </div>
          </div>
          <div className="social-links">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} /> WhatsApp <ArrowUpRight size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={19} /> LinkedIn <ArrowUpRight size={15} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={19} /> GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
