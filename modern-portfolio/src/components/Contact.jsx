import { Github, Linkedin } from "./SocialIcons";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Copy, Check, MessageCircle, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { contactLinks } from "../data/contact";
import "./Contact.css";

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
      data-journey-section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-heading contact-heading-whatsapp">
          <h2 id="contact-title">
            ¿Qué necesitás
            <br />
            <span>resolver en tu negocio?</span>
          </h2>
          <div className="contact-choices">
            <p>Elegí cómo contactarme.</p>
            <div
              className="contact-options"
              role="group"
              aria-label="Opciones de contacto"
            >
              <a
                className="contact-whatsapp"
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={22} aria-hidden="true" />
                Hablemos por WhatsApp
              </a>
              <a className="contact-email" href={contactLinks.email}>
                <Mail size={22} aria-hidden="true" />
                Enviar correo
              </a>
            </div>
          </div>
        </div>
        <div className="contact-bottom">
          <div>
            <p>
              Contame qué ofrecés o cómo trabajás hoy.
              <br />
              Con eso podemos empezar a definir tu proyecto.
            </p>
            <div className="email-row">
              <a href={contactLinks.email}>{profile.email}</a>
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
