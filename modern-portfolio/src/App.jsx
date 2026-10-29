import usePortfolioMotion from "./hooks/usePortfolioMotion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  usePortfolioMotion();
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <div className="stack-strip" aria-label="Tecnologías principales">
          <div className="container">
            <span>DISEÑO ↗ DESARROLLO</span>
            <span>React</span>
            <i aria-hidden="true">✦</i>
            <span>JavaScript</span>
            <i aria-hidden="true">✦</i>
            <span>Next.js</span>
            <i aria-hidden="true">✦</i>
            <span>TypeScript</span>
            <i aria-hidden="true">✦</i>
            <span>PostgreSQL</span>
          </div>
        </div>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
