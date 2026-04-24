import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-mono text-xs tracking-[0.4em] uppercase mb-4 block">
            Fullstack Developer & Co-founder
          </span>
          <h1 className="font-display text-6xl md:text-9xl mb-6 leading-tight tracking-tighter">
            NICOLAS <span className="stroke-text">AGUIRRES</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
            Transformo problemas complejos en experiencias digitales de alto impacto. 
            Especialista en desarrollo <span className="text-white font-medium">AI-Driven</span> y escalabilidad web.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="group bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-primary transition-colors"
            >
              Ver Proyectos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="border border-white/20 hover:border-primary px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-colors"
            >
              Hablemos
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all"
        >
          {/* Subtle tech stack indicators */}
          <div className="flex flex-col items-center gap-2">
            <Code size={20} />
            <span className="text-[10px] uppercase tracking-widest">Fullstack</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Brain size={20} />
            <span className="text-[10px] uppercase tracking-widest">AI Optimized</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Rocket size={20} />
            <span className="text-[10px] uppercase tracking-widest">Scalable</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Code size={20} />
            <span className="text-[10px] uppercase tracking-widest">Modern UI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
