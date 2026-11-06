import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { pages, origin } from "../src/data/seo.js";
const dist = new URL("../dist/", import.meta.url);
const documents = new Map();
for (const page of pages)
  documents.set(
    page.path,
    await readFile(new URL(`.${page.path}index.html`, dist), "utf8"),
  );
const titles = new Set();
for (const page of pages) {
  const html = documents.get(page.path);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.equal(title, page.title, `Title ${page.path}`);
  assert(!titles.has(title), "Unique titles");
  titles.add(title);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `One H1 ${page.path}`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert(html.includes(`rel="canonical" href="${origin}${page.path}"`));
  assert(
    !/<meta[^>]+(?:name="robots"[^>]+content="[^"]*noindex|content="[^"]*noindex[^>]+name="robots")/i.test(
      html,
    ),
  );
  assert(html.includes(page.description.replaceAll("&", "&amp;")));
  const schema = JSON.parse(
    html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1],
  );
  const types = schema["@graph"].map((x) => x["@type"]);
  assert.deepEqual(
    types,
    page.path === "/"
      ? ["Person", "ProfilePage"]
      : ["Person", "WebPage", "Service", "BreadcrumbList"],
  );
  assert(!types.includes("LocalBusiness"));
  if (page.path === "/") {
    for (const text of [
      "Nicolas Aguirres",
      "Mendoza",
      "JornadApp",
      "TrabajoClaro",
      "Aetherfall",
      "CampaignForge",
      'id="services"',
      "Consultar mi proyecto",
      "Ver trabajos",
      "Musashi",
    ])
      assert(html.includes(text), `Home missing ${text}`);
    assert.equal((html.match(/data-project=/g) || []).length, 8);
    const actions = html.match(/class="hero-actions"[^>]*>(.*?)<\/div>/s)?.[1];
    assert.equal((actions?.match(/<a /g) || []).length, 2, "Two primary hero actions");
    const order = ["projects", "services", "process", "about", "skills", "contact"].map(id => html.indexOf(`id="${id}"`));
    assert(order.every((offset, i) => offset > 0 && (i === 0 || offset > order[i-1])), "Commercial section order");
    assert(html.includes('id="opportunities"'), "Secondary recruiter information remains available");
    assert(
      !html.includes("data-playback"),
      "Keep project playback buttons removed",
    );
  } else {
    for (const faq of page.faqs)
      assert(html.includes(faq.answer), "Visible FAQ answer");
    assert(html.includes('id="related-projects"'));
    const breadcrumbs = schema["@graph"].find(
      (x) => x["@type"] === "BreadcrumbList",
    );
    assert.deepEqual(
      breadcrumbs.itemListElement.map((x) => x.item),
      [`${origin}/`, `${origin}${page.path}`],
    );
  }
  for (const [, raw] of html.matchAll(/(?:src|href)="([^\"]+)"/g)) {
    const value = raw.replaceAll("&amp;", "&");
    if (value.startsWith("#"))
      assert(
        html.includes(`id="${value.slice(1)}"`),
        `Anchor ${page.path}${value}`,
      );
    if (!value.startsWith("/") || value.startsWith("//")) continue;
    const url = new URL(value, origin);
    if (documents.has(url.pathname)) {
      if (url.hash)
        assert(
          documents.get(url.pathname).includes(`id="${url.hash.slice(1)}"`),
          `Cross-page anchor ${value}`,
        );
    } else await access(new URL("." + url.pathname, dist));
  }
}
const sitemap = await readFile(new URL("sitemap.xml", dist), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((x) => x[1]);
assert.deepEqual(
  urls,
  pages.map((x) => origin + x.path),
);
assert(!urls.some((x) => x.includes("#")));
assert(
  (await readFile(new URL("robots.txt", dist), "utf8")).includes(
    `Sitemap: ${origin}/sitemap.xml`,
  ),
);
assert.equal(await readFile(new URL("google4b22b9fa65bb2325.html", dist), "utf8"), "google-site-verification: google4b22b9fa65bb2325.html", "Keep Google verification file unchanged");
const notFound = await readFile(new URL("404.html", dist), "utf8");
assert(notFound.includes('content="noindex"'));
assert(!notFound.includes('rel="canonical"'));
assert(notFound.includes("Página no encontrada"));
const config = await readFile(new URL(".htaccess", dist), "utf8");
assert(config.includes("ErrorDocument 404 /404.html"));
assert(
  !config.includes("RewriteRule . /index.html"),
  "No SPA soft-404 fallback",
);
console.log(
  `Static checks passed for ${pages.length} canonical pages: initial content, unique metadata, schema, visible FAQs, internal links/assets, sitemap and 404 document.`,
);
