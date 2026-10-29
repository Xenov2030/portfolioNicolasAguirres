import { useEffect } from 'react';

export default function usePortfolioMotion() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    let stop = () => {};
    function setup() {
      stop();
      if (preference.matches) return;
      const root = document.documentElement;
      const seen = new Set();
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
      }), { threshold: 0.08 });
      function discover() {
        document.querySelectorAll('.section-heading, .project-grid article, .about-portrait, .about-copy, .skill-card, .contact-heading, .contact-bottom').forEach((element, index) => {
          if (seen.has(element)) return;
          seen.add(element);
          element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`);
          element.classList.add('motion-reveal');
          observer.observe(element);
        });
      }
      discover();
      const mutations = new MutationObserver(discover);
      mutations.observe(document.querySelector('main'), { childList: true, subtree: true });
      let scrollFrame = 0, pointerFrame = 0, activeCard = null;
      function progress() {
        scrollFrame = 0;
        const range = root.scrollHeight - innerHeight;
        root.style.setProperty('--reading-progress', range > 0 ? Math.min(scrollY / range, 1) : 0);
      }
      function onScroll() { if (!scrollFrame) scrollFrame = requestAnimationFrame(progress); }
      function resetCard() {
        if (!activeCard) return;
        activeCard.style.removeProperty('--tilt-x'); activeCard.style.removeProperty('--tilt-y');
        activeCard.classList.remove('is-pointed'); activeCard = null;
      }
      function onPointer(event) {
        if (!finePointer.matches || event.pointerType !== 'mouse') return;
        const card = event.target.closest('.cosmic-profile, .cosmic-skill, .skill-card');
        if (card !== activeCard) { resetCard(); activeCard = card; }
        if (!card || pointerFrame) return;
        const { clientX, clientY } = event;
        pointerFrame = requestAnimationFrame(() => {
          pointerFrame = 0;
          if (activeCard !== card) return;
          const rect = card.getBoundingClientRect();
          const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
          card.style.setProperty('--tilt-x', `${(0.5-y)*4}deg`);
          card.style.setProperty('--tilt-y', `${(x-0.5)*4}deg`);
          card.style.setProperty('--spot-x', `${x*100}%`); card.style.setProperty('--spot-y', `${y*100}%`);
          card.classList.add('is-pointed');
        });
      }
      function onFocus(event) { event.target.closest('.motion-reveal')?.classList.add('is-revealed'); }
      progress(); root.classList.add('motion-enabled');
      addEventListener('scroll', onScroll, { passive: true });
      document.addEventListener('pointermove', onPointer, { passive: true });
      document.addEventListener('pointerleave', resetCard);
      document.addEventListener('focusin', onFocus);
      stop = () => {
        observer.disconnect(); mutations.disconnect(); cancelAnimationFrame(scrollFrame); cancelAnimationFrame(pointerFrame); resetCard();
        removeEventListener('scroll', onScroll); document.removeEventListener('pointermove', onPointer); document.removeEventListener('pointerleave', resetCard); document.removeEventListener('focusin', onFocus);
        root.classList.remove('motion-enabled'); root.style.removeProperty('--reading-progress');
        seen.forEach(element => { element.classList.remove('motion-reveal', 'is-revealed'); element.style.removeProperty('--reveal-delay'); });
      };
    }
    setup(); preference.addEventListener('change', setup);
    return () => { stop(); preference.removeEventListener('change', setup); };
  }, []);
}
