import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function ProjectGallery({ project }) {
  const slides = project.gallery || [{ src: project.image, alt: project.alt }];
  const [index, setIndex] = useState(0);
  const start = useRef(null);
  const container = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(media.matches);
    change();
    media.addEventListener("change", change);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(container.current);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", change);
    };
  }, []);
  useEffect(() => {
    if (!visible || reduced || slides.length < 2) return;
    let disposed = false;
    const timer = setInterval(async () => {
      if (document.hidden) return;
      const next = (index + 1) % slides.length;
      const image = new Image();
      image.src = slides[next].src;
      try {
        await image.decode();
        if (!disposed) setIndex(next);
      } catch {}
    }, 4500);
    return () => {
      disposed = true;
      clearInterval(timer);
    };
  }, [index, visible, reduced, slides]);
  const move = (delta) =>
    setIndex((i) => (i + delta + slides.length) % slides.length);
  return (
    <div
      className={`project-image project-gallery project-image-${project.id}`}
      ref={container}
      role="region"
      aria-label={`Galería de ${project.title}`}
      aria-roledescription="carrusel"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          move(1);
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          move(-1);
        }
      }}
      onTouchStart={(e) => {
        start.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (start.current !== null) {
          const dx = e.changedTouches[0].clientX - start.current;
          if (Math.abs(dx) > 50) move(dx < 0 ? 1 : -1);
          start.current = null;
        }
      }}
    >
      <div className="image-window">
        <div className="mini-toolbar">
          <i />
          <i />
          <i />
        </div>
        <div className="gallery-frames">
          {slides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={i === index ? slide.alt : ""}
              aria-hidden={i !== index}
              className={
                i === index ? "gallery-frame is-current" : "gallery-frame"
              }
              loading="lazy"
              width={slide.width || 1440}
              height={slide.height || 820}
            />
          ))}
        </div>
      </div>
      <a className="capture-link" href={slides[index].src} target="_blank" rel="noopener noreferrer">Abrir captura de {project.title} ↗</a>
      {slides.length > 1 && (
        <div className="gallery-controls keyboard-only-controls">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={`Imagen anterior de ${project.title}`}
          >
            <ChevronLeft size={19} />
          </button>
          <span role="status" aria-live={reduced ? "polite" : "off"}>
            {index + 1} / {slides.length}
          </span>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={`Imagen siguiente de ${project.title}`}
          >
            <ChevronRight size={19} />
          </button>
        </div>
      )}
    </div>
  );
}
