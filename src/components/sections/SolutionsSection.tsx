import React from 'react';
import { motion } from 'motion/react';
import GlassCard from '../GlassCard';
import { Code, Smartphone, Palette, Search, Users, Headphones } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Aplicações web completas usando tecnologias modernas como React, Node.js, Python e bancos de dados escaláveis.',
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Apps nativos e cross-platform para iOS e Android com performance otimizada e UX excepcional.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces intuitivas e experiências de usuário que convertem visitantes em clientes satisfeitos.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing']
    },
    {
      icon: Search,
      title: 'SEO & Marketing Digital',
      description: 'Otimização para motores de busca e estratégias digitais para aumentar sua visibilidade online.',
      technologies: ['SEO', 'Google Ads', 'Analytics', 'Social Media', 'Content Marketing']
    },
    {
      icon: Users,
      title: 'Consultoria Tech',
      description: 'Consultoria especializada em arquitetura de software, migração para nuvem e transformação digital.',
      technologies: ['Architecture', 'Cloud Migration', 'DevOps', 'Agile', 'Tech Strategy']
    },
    {
      icon: Headphones,
      title: 'Suporte & Manutenção',
      description: 'Suporte técnico e manutenção preventiva para garantir que seus sistemas funcionem perfeitamente.',
      technologies: ['Support', 'Monitoring', 'Updates', 'Security', 'Backup']
    }
  ];

  return (
    <section id="solutions" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-4">
            Nossas Soluções
          </h2>
          <p className="text-xl text-cyan-300 font-mono">
            Tecnologias avançadas para impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <GlassCard key={solution.title} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-4"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-mono text-white mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {solution.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs font-mono text-cyan-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;