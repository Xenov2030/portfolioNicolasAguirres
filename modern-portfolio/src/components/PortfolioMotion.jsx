import { createContext, useContext, useEffect, useMemo, useState } from "react";
const MotionContext = createContext(null);
export function PortfolioMotionProvider({ children }) {
  const [enabled, setEnabled] = useState(true);
  const [reduced, setReduced] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const preference = () => setReduced(media.matches);
    const visibility = () => setPageVisible(!document.hidden);
    try {
      setEnabled(localStorage.getItem("na-continuous-motion") !== "paused");
    } catch {}
    preference();
    visibility();
    media.addEventListener("change", preference);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      media.removeEventListener("change", preference);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  const value = useMemo(
    () => ({
      enabled,
      setEnabled,
      reduced,
      pageVisible,
      continuous: enabled && !reduced && pageVisible,
    }),
    [enabled, reduced, pageVisible],
  );
  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}
export function usePortfolioMotion() {
  return useContext(MotionContext);
}
export function MotionControl() {
  const { enabled, setEnabled, reduced } = usePortfolioMotion();
  return (
    <label className="motion-control">
      <input
        type="checkbox"
        checked={enabled && !reduced}
        disabled={reduced}
        onChange={(event) => {
          setEnabled(event.target.checked);
          try {
            localStorage.setItem(
              "na-continuous-motion",
              event.target.checked ? "enabled" : "paused",
            );
          } catch {}
        }}
      />
      {reduced ? "Movimiento reducido" : "Animaciones activas"}
    </label>
  );
}
