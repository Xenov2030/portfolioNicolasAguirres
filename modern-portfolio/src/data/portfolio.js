// Public project information checked against each repository README.
// Keep this static: visitors should not need GitHub API access to view the portfolio.
export const profile = {
  github: "https://github.com/Xenov2030",
  linkedin: "https://www.linkedin.com/in/nicolas-aguirres/",
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
  "label": "Producto propio · Beta 0.1",
  "description": "Control personal de horas trabajadas e ingresos para quienes necesitan registrar jornadas, horas extra, faltas y cobros.",
  "detail": "Desarrollé la interfaz y la lógica de jornadas, horarios y estimaciones, con varios trabajos por cuenta y copias de los registros. El acceso alojado utiliza Supabase y requiere configuración externa; la sincronización entre dispositivos sigue pendiente de verificación independiente.",
  "tech": [
    "Next.js",
    "React",
    "JavaScript",
    "Supabase"
  ],
  "repo": "https://github.com/Xenov2030/ControldeHorasTrabajadas",
  "demo": "https://controldehorastrabajadas.vercel.app/",
  "featured": true,
  "tagline": "Tu tiempo bien contado.",
  "limits": "Beta para seguimiento personal: los importes son estimaciones. WhatsApp y Premium todavía no están disponibles.",
  "image": "/assets/jornadapp-desktop.webp",
  "alt": "Acceso público de JornadApp en escritorio",
  "gallery": [
    {
      "src": "/assets/jornadapp-desktop.webp",
      "width": 1440,
      "height": 900,
      "alt": "Acceso público de JornadApp en escritorio"
    },
    {
      "src": "/assets/jornadapp-mobile.webp",
      "width": 390,
      "height": 844,
      "alt": "Acceso público de JornadApp en celular"
    }
  ]
},
{
  "id": "trabajoclaro",
  "title": "TrabajoClaro",
  "category": "Aplicaciones",
  "label": "Producto propio · Beta 0.2",
  "description": "Un sistema de gestión para pequeños negocios de servicios y fabricación por encargo: del cliente y presupuesto al trabajo y registro de cobros.",
  "detail": "Desarrollé el recorrido de clientes, presupuestos versionados, aprobación por enlace, trabajos y saldos con pagos parciales. Next.js y Supabase/PostgreSQL, con reglas de acceso por negocio. La versión Laravel/MySQL se conserva como antecedente.",
  "tech": [
    "Next.js",
    "React",
    "JavaScript",
    "PostgreSQL",
    "Supabase"
  ],
  "repo": "https://github.com/Xenov2030/TrabajoClaro",
  "demo": "https://trabajo-claro-orpin.vercel.app/",
  "featured": true,
  "tagline": "Cada trabajo en orden.",
  "limits": "Beta pública: registra cobros manualmente, no procesa dinero ni emite comprobantes fiscales. Acceso por correo y Google pendientes de comprobación completa.",
  "image": "/assets/trabajoclaro-desktop.webp",
  "alt": "Presentación pública de TrabajoClaro en escritorio",
  "gallery": [
    {
      "src": "/assets/trabajoclaro-desktop.webp",
      "width": 1440,
      "height": 900,
      "alt": "Presentación pública de TrabajoClaro en escritorio"
    },
    {
      "src": "/assets/trabajoclaro-mobile.webp",
      "width": 390,
      "height": 844,
      "alt": "Presentación pública de TrabajoClaro en celular"
    }
  ]
},
{
  "id": "aetherfall",
  "title": "Aetherfall",
  "category": "Aplicaciones",
  "label": "Proyecto propio · En desarrollo",
  "description": "Archivo privado para una campaña presencial de rol: reúne sesiones, personajes y documentos y permite al máster revelar información a cada jugador.",
  "detail": "Desarrollé el archivo de campaña, permisos por personaje, inventarios, versiones y respaldos. Next.js, TypeScript, PostgreSQL y Auth.js, con integración de Google Drive privado. Funciona en desarrollo con datos ficticios; el despliegue requiere servicios externos.",
  "tech": [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Auth.js"
  ],
  "repo": "https://github.com/Xenov2030/Aetherfall",
  "featured": true,
  "tagline": "La memoria de cada aventura.",
  "limits": "En desarrollo, sin demo pública verificada. No utiliza Supabase ni se presenta como un producto terminado.",
  "image": "/assets/aetherfall-desktop.webp",
  "alt": "Panel del máster de Aetherfall con datos ficticios",
  "gallery": [
    {
      "src": "/assets/aetherfall-desktop.webp",
      "width": 1440,
      "height": 1234,
      "alt": "Panel del máster de Aetherfall con datos ficticios"
    },
    {
      "src": "/assets/aetherfall-mobile.webp",
      "width": 390,
      "height": 1216,
      "alt": "Vista del jugador de Aetherfall en celular con datos ficticios"
    }
  ]
},
  {
    id: "campaign-forge",
    title: "CampaignForge",
    category: "Aplicaciones",
    label: "Proyecto propio · En desarrollo",
    description:
      "Un lugar para construir mundos y jugar en equipo. Plataforma de campañas de rol con personajes, misiones, chat e integración de IA.",
    detail:
      "Desarrollé interfaces y módulos de campañas, personajes y misiones. Next.js, TypeScript, PostgreSQL y Prisma, con integración de Gemini. El código incluye chat y voz con servicios externos; no hay demo pública verificada. La documentación y el paquete usan versiones distintas, por lo que no se anuncia como versión estable.",
    limits: "Requiere base de datos y credenciales externas. La IA y los servicios en tiempo real dependen de su configuración. Las capturas muestran el modo de demostración local con datos ficticios.",
    image: "/assets/campaign-forge-desktop.webp",
    alt: "CampaignForge en escritorio, demostración local con datos ficticios",
    gallery: [
      { src: "/assets/campaign-forge-desktop.webp", alt: "Panel de CampaignForge en escritorio con datos ficticios", width: 1440, height: 900 },
      { src: "/assets/campaign-forge-mobile.webp", alt: "Panel de CampaignForge en celular con datos ficticios", width: 390, height: 844 },
    ],
    tagline: "Mundos compartidos, historias conectadas.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini"],
    repo: "https://github.com/Xenov2030/campaign-forge",
    featured: true,
  },
  {
    id: "gentleman-barber",
    title: "Gentleman Barber Shop",
    category: "Sitios web",
    label: "Sitio de muestra · Barbería",
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
    label: "Sitio de muestra · Gastronomía",
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
    label: "Proyecto de práctica · Comunidad",
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
