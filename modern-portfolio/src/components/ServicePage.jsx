import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export default function ServicePage({ service }) {
  return (
    <>
      <section id="home" className="service-hero">
        <div className="container">
          <nav className="service-breadcrumb" aria-label="Ruta de navegación">
            <ol>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li aria-current="page">{service.name}</li>
            </ol>
          </nav>
          <h1>{service.name}</h1>
          <p className="service-intro">{service.intro}</p>
          <p className="service-lead">{service.lead}</p>
          <div className="service-actions">
            <a className="service-primary" href="#contact">
              Hablemos de tu proyecto <ArrowUpRight size={18} />
            </a>
            <a href="#related-projects">Ver ejemplos de desarrollo</a>
          </div>
        </div>
      </section>
      <section
        className="section service-content"
        aria-labelledby="audience-title"
      >
        <div className="container">
          <h2 id="audience-title">{service.audienceTitle}</h2>
          <p>{service.audience}</p>
          <div className="services-grid">
            {service.needs.map((need) => (
              <article key={need.title}>
                <h3>{need.title}</h3>
                <p>{need.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="section service-content service-tint"
        aria-labelledby="scope-title"
      >
        <div className="container service-two-columns">
          <div>
            <h2 id="scope-title">{service.scopeTitle}</h2>
            <p>{service.scope}</p>
          </div>
          <div>
            <h3>Qué se puede incluir</h3>
            <ul className="service-deliverables">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{service.boundaries}</p>
          </div>
        </div>
      </section>
      <section
        className="section service-content"
        aria-labelledby="process-title"
      >
        <div className="container">
          <h2 id="process-title">Cómo podemos trabajar</h2>
          <ol className="service-process">
            {service.process.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        id="related-projects"
        className="section service-content service-tint"
        aria-labelledby="related-title"
      >
        <div className="container">
          <h2 id="related-title">Proyectos para conocer mi trabajo</h2>
          <div className="service-two-columns">
            {service.related.map((item) => {
              const project = projects.find((p) => p.id === item.id);
              return (
                <article className="service-example" key={item.id}>
                  <h3>{project.title}</h3>
                  <p className="service-example-state">{project.label}</p>
                  <p>{item.reason}</p>
                  <a href={`/#${project.id}`}>
                    Ver ficha y alcance de {project.title}{" "}
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section service-content" aria-labelledby="faq-title">
        <div className="container service-faq">
          <h2 id="faq-title">Preguntas frecuentes</h2>
          {service.faqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
          <a
            className="inline-link service-related-link"
            href={service.otherPath}
          >
            {service.otherLabel} <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
