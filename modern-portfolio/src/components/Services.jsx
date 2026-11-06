import ServiceSketch from "./ServiceSketch";
import { ArrowUpRight } from "lucide-react";
export default function Services() {
  return (
    <section
      data-journey-section
      id="services"
      className="section services-section"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="commercial-heading">
          <h2 id="services-title">
            Qué podemos desarrollar
            <br />
            para tu negocio.
          </h2>
          <p>
            Una presencia clara para tus clientes o una herramienta para
            organizar lo que pasa puertas adentro.
          </p>
        </div>
        <div className="service-offers">
          <article>
            <h3>Una web para presentar tus servicios</h3>
            <p>
              Contá qué ofrecés, mostrá tu trabajo y facilitá que te consulten
              desde cualquier dispositivo.
            </p>
            <ServiceSketch kind="site" />
            <a href="/desarrollo-web-mendoza/">
              Diseño y desarrollo web en Mendoza <ArrowUpRight size={17} />
            </a>
          </article>
          <article>
            <h3>Una aplicación para organizar tu trabajo</h3>
            <p>
              Relacioná clientes, presupuestos, trabajos o registros en un
              recorrido pensado para tu proceso.
            </p>
            <ServiceSketch kind="system" />
            <a href="/aplicaciones-web-a-medida/">
              Aplicaciones y sistemas a medida <ArrowUpRight size={17} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
