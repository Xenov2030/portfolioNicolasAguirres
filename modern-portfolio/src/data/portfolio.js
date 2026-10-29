// Public project information checked against each repository README.
// Keep this static: visitors should not need GitHub API access to view the portfolio.
export const profile = {
  github: "https://github.com/Xenov2030",
  linkedin: "https://www.linkedin.com/in/nicolas-aguirres-a4a586303/",
  email: "nicolas.f.aguirres@gmail.com",
  whatsapp: "https://wa.me/5492615349682",
  cv: "/Nicolas_Aguirres_CV.pdf",
  cvEn: "/Nicolas_Aguirres_CV_EN.pdf",
};

export const projects = [
  {
    id: "campaign-forge",
    title: "CampaignForge",
    category: "Aplicaciones",
    label: "Aplicación full stack",
    description:
      "Un lugar para construir mundos y jugar en equipo. Plataforma de campañas de rol con personajes, misiones, chat e integración de IA.",
    detail:
      "Next.js en la interfaz, PostgreSQL y Prisma para los datos, y Gemini como asistente para crear historias.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini"],
    repo: "https://github.com/Xenov2030/campaign-forge",
    featured: true,
  },
  {
    id: "gentleman-barber",
    title: "Gentleman Barber Shop",
    category: "Sitios web",
    label: "Servicios · Reservas",
    description:
      "Una web de barbería con estética clásica en negro y dorado. Presentación de servicios, experiencia del local y acceso a reservas por WhatsApp.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Xenov2030/gentlemanbaber",
    image: "/assets/gentleman-barber.png",
    alt: "Captura de Gentleman Barber Shop con diseño negro y dorado y su presentación de servicios",
  },
  {
    id: "limbo",
    title: "Limbo Hamburguesas",
    category: "Sitios web",
    label: "Gastronomía · Identidad digital",
    description:
      "Un sitio comercial de estética urbana: identidad de marca, información del negocio y una experiencia adaptable a cada pantalla.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://limbohamburguesas.netlify.app/",
    repo: "https://github.com/Xenov2030/limbohamburguesas",
    image: "/assets/limbo-live.png",
    alt: "Captura de la página de Limbo Hamburguesas con su identidad visual urbana",
  },
  {
    id: "infinity-geeks",
    title: "Infinity Geeks",
    category: "Sitios web",
    label: "Comunidad · Tecnología",
    description:
      "Un espacio para la cultura geek y la tecnología. Estructura clara, navegación fluida y diseño responsive construido desde cero.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://infinitygeeks.netlify.app/",
    repo: "https://github.com/Xenov2030/infinitygeek",
    image: "/assets/infinity-geeks-live.png",
    alt: "Captura de Infinity Geeks, un sitio para una comunidad de tecnología y cultura geek",
  },
];
