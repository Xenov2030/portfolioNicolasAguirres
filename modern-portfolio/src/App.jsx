import JourneyMotion from "./components/JourneyMotion";
import {
  PortfolioMotionProvider,
  usePortfolioMotion,
} from "./components/PortfolioMotion";
import ServicePage from "./components/ServicePage";
import { getService } from "./data/services";
import Process from "./components/Process";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App({ path = "/" }) {
  return (
    <PortfolioMotionProvider>
      <Portfolio path={path} />
    </PortfolioMotionProvider>
  );
}
function Portfolio({ path }) {
  const { continuous } = usePortfolioMotion();
  const service = getService(path);
  const isHome = path === "/";
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Navbar isSubpage={!isHome} />
      <main
        id="main"
        data-continuous={continuous ? "on" : "off"}
        className={isHome ? "home-scene" : undefined}
        tabIndex={-1}
      >
        {isHome ? (
          <>
            <Hero />
            <Projects />
            <Services />
            <Process />
            <About />
            <Skills />
          </>
        ) : service ? (
          <ServicePage service={service} />
        ) : (
          <section id="home" className="service-hero">
            <div className="container">
              <h1>Página no encontrada</h1>
              <p>La dirección no corresponde a una página de este portfolio.</p>
              <a className="inline-link" href="/">
                Volver al inicio
              </a>
            </div>
          </section>
        )}
        <Contact />
        {isHome && <JourneyMotion />}
      </main>
      <Footer />
    </>
  );
}
