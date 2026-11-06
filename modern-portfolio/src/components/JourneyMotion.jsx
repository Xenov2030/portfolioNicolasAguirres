import { useEffect } from "react";
import { usePortfolioMotion } from "./PortfolioMotion";

const clamp = (value) => Math.max(0, Math.min(1, value));
// Una lectura por frame; las escrituras afectan solo piezas decorativas, no el árbol de texto.
export default function JourneyMotion() {
  const { continuous } = usePortfolioMotion();
  useEffect(() => {
    const sections = [
      ...document.querySelectorAll(".home-scene [data-journey-section]"),
    ];
    const lines = [
      ...document.querySelectorAll(".home-scene [data-reading-line]"),
    ];
    const progress = document.querySelector(".home-scene .process-progress");
    const steps = [
      ...document.querySelectorAll(".home-scene .process-list li"),
    ];
    const portrait = document.querySelector(
      ".home-scene [data-portrait-motion]",
    );
    const reset = () => {
      sections.forEach((section) =>
        section.removeAttribute("data-journey-visible"),
      );
      lines.forEach((line) => (line.style.transform = ""));
      if (progress) progress.style.transform = "";
      if (portrait) portrait.style.transform = "";
      steps.forEach((step) => step.removeAttribute("data-reading-active"));
    };
    if (!continuous) {
      reset();
      return;
    }
    let frame = 0;
    const visible = new Set();
    function update() {
      frame = 0;
      const height = innerHeight;
      const records = sections
        .filter((section) => visible.has(section))
        .map((section) => ({ section, rect: section.getBoundingClientRect() }));
      const lineRecords = lines
        .filter((line) => visible.has(line.closest("[data-journey-section]")))
        .map((line) => ({
          line,
          rect: line.closest("dd").getBoundingClientRect(),
        }));
      const processVisible =
        progress && visible.has(progress.closest("[data-journey-section]"));
      const track = processVisible
        ? progress.parentElement.getBoundingClientRect()
        : null;
      const stepRects = processVisible
        ? steps.map((step) => step.getBoundingClientRect())
        : [];
      // Escrituras después de agrupar las lecturas de geometría.
      records.forEach(({ section, rect }) => {
        if (portrait && section.id === "about") {
          const position = clamp((height - rect.top) / (height + rect.height));
          portrait.style.transform = `translateY(${(position - 0.5) * 18}px) scale(1.045)`;
        }
      });
      lineRecords.forEach(({ line, rect }) => {
        line.style.transform = `scaleX(${clamp((height * 0.86 - rect.top) / (height * 0.55 + rect.height))})`;
      });
      if (track) {
        const value = clamp(
          (height * 0.57 - track.top - 18) / Math.max(1, track.height - 60),
        );
        progress.style.transform = `scaleY(${value})`;
        let active = 0;
        stepRects.forEach((rect, index) => {
          if (rect.top < height * 0.57) active = index;
        });
        steps.forEach((step, index) => {
          step.dataset.readingActive = index === active ? "true" : "false";
        });
      }
    }
    const schedule = () => {
      if (!frame && visible.size) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.dataset.journeyVisible = entry.isIntersecting
            ? "true"
            : "false";
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        schedule();
      },
      { threshold: 0, rootMargin: "40px 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      reset();
    };
  }, [continuous]);
  return null;
}
