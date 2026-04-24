import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend Core",
    icon: <Globe size={20} />,
    items: ["React.js", "JavaScript ES6+", "Tailwind CSS", "HTML5 / CSS3 Semantic"]
  },
  {
    category: "AI-Driven Dev",
    icon: <Cpu size={20} />,
    items: ["Advanced Prompting", "AI Code Optimization", "Workflow Automation", "Copilot / Cursor Expert"]
  },
  {
    category: "Backend & DB",
    icon: <Database size={20} />,
    items: ["Introducción a SQL", "PHP Fundamentals", "REST APIs", "Vite / Node environment"]
  },
  {
    category: "Professional Tools",
    icon: <Terminal size={20} />,
    items: ["Git / GitHub Flow", "Netlify Deployment", "Figma to Code", "Agile Methodologies"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl text-white mb-16 tracking-widest uppercase italic text-center md:text-left">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                {skill.icon}
              </div>
              <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-200">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map(item => (
                  <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
