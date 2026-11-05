import { services } from "./services.js";
export const origin = "https://nicolasaguirrescode.com";
export const home = {
  path: "/",
  title: "Nicolas Aguirres | Desarrollador Web en Mendoza",
  description:
    "Desarrollo sitios y aplicaciones web para negocios desde Mendoza, Argentina. Conocé mis proyectos con React y Next.js y contactame por tu próxima idea.",
  name: "Nicolas Aguirres",
};
export const pages = [home, ...services];
export function normalizePath(path) {
  if (path.endsWith("/index.html")) path = path.slice(0, -10);
  if (path === "") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}
export function structuredData(page) {
  const person = {
    "@type": "Person",
    "@id": `${origin}/#person`,
    name: "Nicolas Aguirres",
    alternateName: "Nicolas Fabian Aguirres",
    url: `${origin}/`,
    jobTitle: "Desarrollador web full stack",
    homeLocation: { "@type": "Place", name: "Mendoza, Argentina" },
    sameAs: [
      "https://github.com/Xenov2030",
      "https://www.linkedin.com/in/nicolas-aguirres/",
    ],
    knowsAbout: ["JavaScript", "React", "Next.js", "Desarrollo web"],
  };
  if (page.path === "/")
    return {
      "@context": "https://schema.org",
      "@graph": [
        person,
        {
          "@type": "ProfilePage",
          "@id": `${origin}/#profile`,
          url: `${origin}/`,
          name: page.title,
          inLanguage: "es-AR",
          mainEntity: { "@id": person["@id"] },
        },
      ],
    };
  const url = `${origin}${page.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "es-AR",
        mainEntity: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.name,
        url,
        description: page.description,
        provider: { "@id": person["@id"] },
        areaServed: { "@type": "Country", name: "Argentina" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: `${origin}/`,
          },
          { "@type": "ListItem", position: 2, name: page.name, item: url },
        ],
      },
    ],
  };
}
