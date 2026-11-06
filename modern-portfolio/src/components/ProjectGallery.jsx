import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

export default function ProjectGallery({ project }) {
  const slides = project.gallery || [
    { src: project.image, alt: project.alt, width: 1440, height: 900 },
  ];
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const container = useRef(null);
  const start = useRef(null);
  const slide = slides[index];
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
    if (!auto || !visible || reduced || focused || hovered || slides.length < 2)
      return;
    let cancelled = false;
    const timer = setInterval(async () => {
      if (document.hidden) return;
      const next = (index + 1) % slides.length;
      const img = new Image();
      img.src = slides[next].src;
      try {
        await img.decode();
        if (!cancelled) setIndex(next);
      } catch {}
    }, 5000);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [auto, visible, reduced, focused, hovered, index, slides]);
  function move(delta) {
    setAuto(false);
    setIndex((i) => (i + delta + slides.length) % slides.length);
  }
  return (
    <div
      ref={container}
      className="work-gallery"
      role="region"
      aria-label={`Galería de ${project.title}`}
      aria-roledescription="carrusel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          move(e.key === "ArrowRight" ? 1 : -1);
        }
      }}
      onTouchStart={(e) => {
        start.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }}
      onTouchCancel={() => {
        start.current = null;
      }}
      onTouchEnd={(e) => {
        if (start.current) {
          const dx = e.changedTouches[0].clientX - start.current.x;
          const dy = e.changedTouches[0].clientY - start.current.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy))
            move(dx < 0 ? 1 : -1);
          start.current = null;
        }
      }}
    >
      <a
        className="gallery-image-link"
        href={slide.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ampliar captura de ${project.title}: ${slide.alt} (nueva pestaña)`}
      >
        <img
          src={slide.src}
          srcSet={slide.srcSet}
          sizes={slide.sizes}
          alt={slide.alt}
          width={slide.width || 1440}
          height={slide.height || 900}
          loading="lazy"
        />
        <span>
          <Expand size={16} aria-hidden="true" />
          Ampliar captura
        </span>
      </a>
      {slides.length > 1 && (
        <div className="gallery-toolbar">
          <div className="gallery-navigation">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label={`Imagen anterior de ${project.title}`}
            >
              <ChevronLeft size={20} />
            </button>
            <span role="status" aria-live={auto && !reduced ? "off" : "polite"}>
              {index + 1} / {slides.length}
            </span>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label={`Imagen siguiente de ${project.title}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <label className="gallery-auto">
            <input
              type="checkbox"
              checked={auto && !reduced}
              disabled={reduced}
              onChange={(e) => setAuto(e.target.checked)}
              aria-label={`Avance automático de ${project.title}`}
            />
            {reduced ? "Avance manual" : "Avance automático"}
          </label>
        </div>
      )}
    </div>
  );
}
