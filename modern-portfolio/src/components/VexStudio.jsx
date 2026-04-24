import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, Zap, Globe } from 'lucide-react';

const VexStudio = () => {
  return (
    <section id="vex" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-video glass rounded-[3rem] overflow-hidden flex items-center justify-center group">
              <div className="text-center">
                <h3 className="font-display text-7xl md:text-9xl tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity">VEX STUDIO</h3>
                <div className="absolute inset-0 flex items-center justify-center">
                   <img 
                    src="https://vexstudio.online/logo.png" 
                    alt="Vex Studio Logo" 
                    className="w-32 h-32 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                  <Globe className="text-primary w-20 h-20 animate-pulse" />
                </div>
              </div>
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <Users className="text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Rol</p>
                  <p className="font-bold">Co-Founder & Tech Lead</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 space-y-8 text-center md:text-left">
            <h2 className="font-display text-5xl text-white tracking-widest uppercase italic">Vex Studio</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Como co-fundador, lidero la visión técnica de nuestra agencia boutique. En Vex Studio no solo construimos sitios; diseñamos infraestructuras digitales para startups y empresas que buscan escalar rápido.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Zap size={20} className="text-primary" />
                <span className="text-gray-300">Metodología ágil y desarrollo iterativo.</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Users size={20} className="text-primary" />
                <span className="text-gray-300">Enfoque centrado en el usuario y conversión.</span>
              </div>
            </div>

            <a 
              href="https://vexstudio.online" 
              target="_blank" 
              className="inline-flex items-center gap-3 text-primary font-bold uppercase text-xs tracking-widest border-b border-primary/30 pb-2 hover:border-primary transition-all"
            >
              Explorar Vex Studio <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VexStudio;
