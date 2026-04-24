import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layout, Smartphone, ShoppingBag } from 'lucide-react';

const projects = [
  {
    title: "Lady Barbershop",
    description: "Sistema de gestión y booking para salón de estética premium. Optimización 100% Mobile-First.",
    impact: "Aumento del 40% en reservas digitales vía WhatsApp.",
    tech: ["HTML5", "Tailwind", "JS ES6+"],
    link: "https://ladybarbershop.netlify.app/",
    icon: <Smartphone className="text-primary" />,
    image: "/assets/Ladybabershop.png"
  },
  {
    title: "Limbo Hamburguesas",
    description: "Menú digital interactivo con estética urbana y branding agresivo para captación de público joven.",
    impact: "Reducción de tiempos de espera en pedido mediante interfaz fluida.",
    tech: ["CSS Moderno", "Responsive Design", "IA Asset Generation"],
    link: "https://limbohamburguesas.netlify.app/",
    icon: <ShoppingBag className="text-primary" />,
    image: "/assets/Limboburgers.png"
  },
  {
    title: "Infinity Geeks",
    description: "Portal de comunidad tecnológica con enfoque en accesibilidad y performance.",
    impact: "Consolidación de identidad de marca para comunidad IT.",
    tech: ["Git Workflow", "SEO Optimization", "Clean Code"],
    link: "https://infinitygeeks.netlify.app/",
    icon: <Layout className="text-primary" />,
    image: "/assets/infinitygeek.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-display text-6xl text-white tracking-widest uppercase italic mb-4">Desarrollos</h2>
            <p className="text-gray-400 max-w-md font-light">Proyectos reales con impacto medible en el negocio.</p>
          </div>
          <div className="text-primary font-mono text-xs tracking-widest uppercase">
            [ Scroll para explorar ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-secondary border border-white/5 p-10 rounded-[2.5rem] hover:border-primary/30 transition-all flex flex-col h-full overflow-hidden"
            >
              {/* Background Image Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              <div className="relative z-10">
                <div className="mb-8 p-4 glass rounded-2xl w-fit">
                  {project.icon}
                </div>
                <h3 className="font-display text-3xl mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                
                <div className="bg-white/5 p-4 rounded-xl mb-6 border-l-2 border-primary">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Impacto:</p>
                  <p className="text-xs text-gray-300">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-[8px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded text-gray-500">{t}</span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  className="flex items-center gap-2 text-white font-bold uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all"
                >
                  Explorar Proyecto <ExternalLink size={14} className="text-primary" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
