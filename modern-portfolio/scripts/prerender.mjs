import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { render } from "../.ssr/entry-server.js";
import { pages, origin, structuredData } from "../src/data/seo.js";
const dist = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", dist), "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error("Missing root placeholder");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
// Optional real URL-prefix verification only. Domain-property verification uses DNS,
// requires the exact TXT issued by Google, and does not require a page token.
const verification = JSON.parse(
  await readFile(new URL("../site-verification.json", import.meta.url), "utf8"),
);
if (
  typeof verification.google !== "string" ||
  (verification.google && !/^[A-Za-z0-9_-]+$/.test(verification.google))
)
  throw new Error("Invalid Google verification token");
function documentFor(page, { notFound = false } = {}) {
  let html = template.replace(
    /<title>.*?<\/title>/s,
    `<title>${escape(page.title)}</title>`,
  );
  const metas = {
    description: page.description,
    "og:title": page.title,
    "og:description": page.description,
    "twitter:title": page.title,
    "twitter:description": page.description,
    "og:type": page.path === "/" ? "profile" : "website",
    "og:url": `${origin}${page.path}`,
  };
  for (const [name, value] of Object.entries(metas)) {
    const pattern = new RegExp(
      `((?:name|property)="${name}"\\s+content=")[^"]*`,
    );
    if (!pattern.test(html)) throw new Error(`Missing metadata slot ${name}`);
    html = html.replace(pattern, (_, prefix) => prefix + escape(value));
  }
  html = html.replace(
    /<link rel="canonical"[^>]*>/,
    notFound ? "" : `<link rel="canonical" href="${origin}${page.path}" />`,
  );
  html = html.replace(
    /<script type="application\/ld\+json">.*?<\/script>/s,
    notFound
      ? ""
      : `<script type="application/ld+json">${JSON.stringify(structuredData(page)).replaceAll("<", "\\u003c")}</script>`,
  );
  if (notFound)
    html = html.replace(
      "</head>",
      '<meta name="robots" content="noindex" />\n</head>',
    );
  if (verification.google)
    html = html.replace(
      "</head>",
      `<meta name="google-site-verification" content="${escape(verification.google)}" />\n</head>`,
    );
  const content = render(notFound ? "/404.html/" : page.path);
  if (!content.includes("<h1"))
    throw new Error(`Missing initial content ${page.path}`);
  return html.replace(marker, () => `<div id="root">${content}</div>`);
}
for (const page of pages) {
  const directory = new URL(`.${page.path}`, dist);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), documentFor(page));
}
await writeFile(
  new URL("404.html", dist),
  documentFor(
    {
      path: "/404.html",
      title: "Página no encontrada | Nicolas Aguirres",
      description:
        "Esta dirección no corresponde a una página del portfolio de Nicolas Aguirres.",
    },
    { notFound: true },
  ),
);
await writeFile(
  new URL("sitemap.xml", dist),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${origin}${p.path}</loc></url>`).join("\n")}\n</urlset>\n`,
);
await rm(new URL("../.ssr", import.meta.url), { recursive: true, force: true });
console.log(
  `Generated ${pages.length} complete static pages, individual metadata, sitemap and a 404 document.`,
);
