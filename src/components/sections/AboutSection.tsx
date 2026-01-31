import React from "react";
import { motion } from "motion/react";
import GlassCard from "../GlassCard";
import { translations, type Language } from "../../i18n/translations";

interface AboutSectionProps {
  language?: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ language = "pt" }) => {
  const t = translations[language];
  // const values = [
  //   {
  //     icon: Rocket,
  //     title: 'Inovação',
  //     description: 'Sempre em busca das tecnologias mais avançadas para entregar soluções de ponta.'
  //   },
  //   {
  //     icon: Target,
  //     title: 'Precisão',
  //     description: 'Cada linha de código é escrita com propósito, garantindo performance e qualidade.'
  //   },
  //   {
  //     icon: Users2,
  //     title: 'Colaboração',
  //     description: 'Trabalhamos em parceria com nossos clientes para alcançar resultados excepcionais.'
  //   },
  //   {
  //     icon: Trophy,
  //     title: 'Excelência',
  //     description: 'Comprometidos em entregar apenas o melhor, superando expectativas constantemente.'
  //   }
  // ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-cyan-300 font-mono"></p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          <GlassCard>
            {/* <h3 className="text-2xl font-mono text-white mb-6">Nossa História</h3> */}
            <div className="space-y-4 text-gray-300 whitespace-pre-line">
              {t.about.description}
            </div>
          </GlassCard>

          {/* <GlassCard>
            <h3 className="text-2xl font-mono text-white mb-6">Nossos Valores</h3>
            <div className="grid grid-cols-2 gap-4">
              {values.slice(0, 4).map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-3"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="text-lg font-mono text-cyan-400 mb-1">
                      {value.title}
                    </div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {value.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
