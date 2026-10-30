import { useEffect, useRef, useState } from "react";
export default function useVisibleCycle(count, paused = false, delay = 4500) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let timer,
      visible = false;
    const update = () => {
      clearInterval(timer);
      if (visible && !paused && !media.matches && !document.hidden && count > 1)
        timer = setInterval(() => setIndex((i) => (i + 1) % count), delay);
    };
    const observer = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        update();
      },
      { threshold: 0.2 },
    );
    observer.observe(ref.current);
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      clearInterval(timer);
      observer.disconnect();
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [count, paused, delay]);
  return { ref, index, setIndex };
}
