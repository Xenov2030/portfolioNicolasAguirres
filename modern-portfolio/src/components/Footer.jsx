import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display text-2xl tracking-widest text-white">
          NICOLAS<span className="text-primary">.AGUIRRES</span>
        </div>
        
        <div className="text-[10px] uppercase tracking-[0.5em] text-gray-700">
          © 2026 Nicolas Aguirres. Built with React & AI.
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          <a href="https://github.com/Xenov2030" target="_blank" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/nicolas-aguirres-a4a586303/" target="_blank" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://vexstudio.online" target="_blank" className="hover:text-primary transition-colors">Vex Studio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
