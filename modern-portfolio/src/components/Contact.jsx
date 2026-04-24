import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Link, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white text-black p-12 md:p-20 rounded-[3rem] flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-display text-6xl md:text-8xl mb-8 tracking-tighter leading-none italic uppercase">
              ¿Listo para <br /> <span className="text-primary">escalar?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Estoy disponible para proyectos freelance, colaboraciones en Vex Studio o nuevas oportunidades profesionales en equipos de alto rendimiento.
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:nicolas.f.aguirres@gmail.com" 
                className="flex items-center gap-4 group"
              >
                <div className="bg-black text-white p-3 rounded-full group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-bold text-sm uppercase tracking-widest">nicolas.f.aguirres@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/nicolas-aguirres-a4a586303/" 
                target="_blank" 
                className="flex items-center gap-4 group"
              >
                <div className="bg-black text-white p-3 rounded-full group-hover:bg-primary group-hover:text-black transition-colors">
                  <Link size={20} />
                </div>
                <span className="font-bold text-sm uppercase tracking-widest">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="flex-1 w-full">
            <a 
              href="https://wa.me/5492615349682" 
              target="_blank"
              className="block group relative"
            >
              <div className="absolute -inset-4 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-black text-white p-12 rounded-[2.5rem] flex flex-col justify-between aspect-square md:aspect-auto md:h-80">
                <div className="flex justify-between items-start">
                  <MessageSquare size={40} className="text-primary" />
                  <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div>
                  <h3 className="font-display text-4xl mb-2">WHATSAPP DIRECTO</h3>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Respuesta inmediata</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
