import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
        >
          <div>
            <h2 className="font-display text-5xl text-primary mb-8 tracking-widest uppercase italic">Perfil</h2>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-secondary p-8 rounded-[2.5rem] border border-white/5">
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Mi trayectoria no es convencional, y eso es mi mayor fortaleza. Vengo de sectores donde la resolución de problemas y la eficiencia son críticas, lo que hoy traduzco en código sólido y funcional.
                </p>
                <a 
                  href="/Nicolas_Aguirres_CV.pdf" 
                  download 
                  className="flex items-center gap-2 text-primary font-bold uppercase text-[10px] tracking-widest hover:text-white transition-colors"
                >
                  <Download size={14} /> Descargar CV
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Desarrollador enfocado en el valor comercial y la excelencia técnica.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              No solo escribo código; diseño soluciones que resuelven cuellos de botella. Mi experiencia como co-fundador en <span className="text-white">Vex Studio</span> me ha dado una visión 360° del ciclo de vida de un producto: desde la concepción del negocio hasta el despliegue técnico.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Mentalidad de resolución de problemas",
                "Desarrollo asistido por IA",
                "Enfoque en Mobile-First",
                "Liderazgo técnico en Vex Studio"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
