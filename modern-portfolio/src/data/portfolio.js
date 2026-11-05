// Public project information checked against each repository README.
// Keep this static: visitors should not need GitHub API access to view the portfolio.
export const profile = {
  github: "https://github.com/Xenov2030",
  linkedin: "https://www.linkedin.com/in/nicolas-aguirres",
  email: "nicolas.f.aguirres@gmail.com",
  whatsapp: "https://wa.me/5492615349682",
  cv: "/Nicolas_Aguirres_CV.pdf",
  cvEn: "/Nicolas_Aguirres_CV_EN.pdf",
};

export const projects = [
{
  "id": "jornadapp",
  "title": "JornadApp",
  "category": "Aplicaciones",
  "label": "Producto propio · Beta",
  "description": "Registro personal de jornadas, horas extra, faltas y pagos para entender el tiempo trabajado y los ingresos esperados.",
  "detail": "Primera beta con cuentas y varios trabajos. Una herramienta de seguimiento personal, con funciones premium todavía previstas.",
  "tech": [
    "Next.js",
    "React",
    "Supabase"
  ],
  "repo": "https://github.com/Xenov2030/ControldeHorasTrabajadas",
  "demo": "https://controldehorastrabajadas.vercel.app/",
  "featured": true,
  "tagline": "Tu tiempo bien contado."
},
{
  "id": "trabajoclaro",
  "title": "TrabajoClaro",
  "category": "Aplicaciones",
  "label": "Gestión de negocios · Beta",
  "description": "Clientes, presupuestos, aprobación, trabajos y registro manual de cobros en una aplicación para pequeños negocios de servicios y fabricación por encargo.",
  "detail": "Beta pública con Next.js y Supabase. Incluye saldos y pagos parciales; no procesa dinero ni emite comprobantes fiscales.",
  "tech": [
    "Next.js",
    "React",
    "PostgreSQL",
    "Supabase"
  ],
  "repo": "https://github.com/Xenov2030/TrabajoClaro",
  "demo": "https://trabajo-claro-orpin.vercel.app/",
  "featured": true,
  "tagline": "Cada trabajo en orden. Cada cobro, claro."
},
{
  "id": "aetherfall",
  "title": "Aetherfall",
  "category": "Aplicaciones",
  "label": "Aplicación full stack · En desarrollo",
  "description": "Archivo y memoria de una campaña presencial de rol, con sesiones, personajes, inventarios y contenido privado para el máster y los jugadores.",
  "detail": "Next.js, TypeScript, PostgreSQL y Auth.js, con integración de almacenamiento privado en Google Drive. Configuración de producción pendiente según su documentación.",
  "tech": [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Auth.js"
  ],
  "repo": "https://github.com/Xenov2030/Aetherfall",
  "featured": true,
  "tagline": "La memoria de cada aventura."
},
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
    gallery: [
      {
        src: "/assets/gentleman-barber.png",
        alt: "Portada de Gentleman Barber Shop",
      },
      {
        src: "/assets/gentleman-detail-1.png",
        alt: "Servicios de Gentleman Barber Shop",
      },
      {
        src: "/assets/gentleman-detail-2.png",
        alt: "Testimonios de Gentleman Barber Shop",
      },
    ],
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
    gallery: [
      { src: "/assets/limbo-live.png", alt: "Vista principal del proyecto" },
      {
        src: "/assets/limbo-detail-1.png",
        alt: "Sección interna del proyecto",
      },
      { src: "/assets/limbo-detail-2.png", alt: "Más contenido del proyecto" },
    ],
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
    gallery: [
      {
        src: "/assets/infinity-geeks-live.png",
        alt: "Vista principal del proyecto",
      },
      {
        src: "/assets/infinity-detail-1.png",
        alt: "Sección interna del proyecto",
      },
      {
        src: "/assets/infinity-detail-2.png",
        alt: "Más contenido del proyecto",
      },
    ],
    alt: "Captura de Infinity Geeks, un sitio para una comunidad de tecnología y cultura geek",
  },
];
