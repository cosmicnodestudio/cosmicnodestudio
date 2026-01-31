import React from "react";
import { motion } from "motion/react";
import GlassCard from "../GlassCard";
import { Lightbulb, Rocket, CheckCircle } from "lucide-react";

const ProcessSection: React.FC = () => {
  const process = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Descoberta & Planejamento",
      description:
        "Entendemos profundamente suas necessidades, objetivos e desafios para criar uma estratégia personalizada.",
      details: [
        "Análise de requisitos",
        "Pesquisa de mercado",
        "Definição de escopo",
        "Cronograma detalhado",
      ],
    },
    {
      number: "02",
      icon: Rocket,
      title: "Desenvolvimento & Design",
      description:
        "Colocamos a mão na massa para transformar ideias em soluções concretas usando as melhores práticas.",
      details: [
        "Prototipagem inicial",
        "Design de interfaces",
        "Desenvolvimento ágil",
        "Testes contínuos",
      ],
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Entrega & Suporte",
      description:
        "Finalizamos o projeto com qualidade máxima e oferecemos suporte contínuo para garantir o sucesso.",
      details: [
        "Testes finais",
        "Deploy seguro",
        "Treinamento da equipe",
        "Suporte pós-entrega",
      ],
    },
  ];

  return (
    <section id="process" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-4">
            Processo
          </h2>
          <p className="text-xl text-cyan-300 font-mono">
            Um processo estruturado e transparente para garantir resultados
            excepcionais em cada projeto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((process, index) => {
            const Icon = process.icon;
            return (
              <GlassCard key={process.title} delay={index * 0.1}>
                <section id="process" className="">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#2E4BFF]/10 rounded-full flex items-center justify-center border border-[#2E4BFF]/20">
                    <span className="text-2xl font-bold text-[#2E4BFF]">
                      {process.number}
                    </span>
                  </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>

                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-4"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-mono text-white mb-3">
                    {process.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {process.description}
                  </p>

                  {/* <div className="flex flex-wrap gap-2 justify-center">
                    {process.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs font-mono text-cyan-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
