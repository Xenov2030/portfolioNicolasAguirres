export default function ServiceSketch({ kind }) {
  return kind === "site" ? (
    <svg
      className="service-sketch sketch-site"
      viewBox="0 0 320 132"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="16" y="12" width="204" height="108" rx="12" />
      <path d="M16 37h204" />
      <circle cx="31" cy="25" r="2" />
      <circle cx="41" cy="25" r="2" />
      <path className="sketch-content" d="M38 58h118M38 77h154M38 96h78" />
      <path className="sketch-link" d="M232 67c20 0 20 25 37 25" />
      <path
        className="sketch-message"
        d="M272 72h27a7 7 0 0 1 7 7v18a7 7 0 0 1-7 7h-15l-10 9v-11a7 7 0 0 1-6-7V79a7 7 0 0 1 4-7Z"
      />
    </svg>
  ) : (
    <svg
      className="service-sketch sketch-system"
      viewBox="0 0 320 132"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="sketch-structure"
        d="M54 67h77m58 0h77M160 39V17h106M160 94v22H54"
      />
      <rect
        className="sketch-node node-one"
        x="18"
        y="44"
        width="44"
        height="44"
        rx="12"
      />
      <rect
        className="sketch-node node-two"
        x="132"
        y="39"
        width="56"
        height="56"
        rx="16"
      />
      <rect
        className="sketch-node node-three"
        x="266"
        y="44"
        width="36"
        height="44"
        rx="12"
      />
      <circle cx="278" cy="17" r="10" />
      <circle cx="42" cy="116" r="10" />
      <path d="m148 67 8 8 16-17" />
    </svg>
  );
}
