import React from 'react';
import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      id: 'item-1',
      question: 'Quanto tempo leva para desenvolver um projeto?',
      answer: 'O tempo varia conforme a complexidade do projeto. Um site simples pode levar 2-3 semanas, enquanto aplicações mais complexas podem levar de 2-6 meses. Fornecemos um cronograma detalhado após a análise inicial do seu projeto.'
    },
    {
      id: 'item-2',
      question: 'Vocês oferecem suporte após o lançamento?',
      answer: 'Sim! Oferecemos suporte técnico, manutenção preventiva, atualizações de segurança e novos recursos. Temos planos flexíveis de suporte que se adequam às necessidades do seu negócio.'
    },
    {
      id: 'item-3',
      question: 'Quais tecnologias vocês utilizam?',
      answer: 'Trabalhamos com as tecnologias mais modernas do mercado: React, Node.js, Python, React Native, Flutter, PostgreSQL, MongoDB, AWS, Azure e muitas outras. Escolhemos a stack ideal para cada projeto.'
    },
    {
      id: 'item-4',
      question: 'Como funciona o processo de desenvolvimento?',
      answer: 'Seguimos metodologias ágeis: 1) Análise e planejamento, 2) Design e prototipação, 3) Desenvolvimento iterativo, 4) Testes e QA, 5) Deploy e lançamento, 6) Suporte contínuo. Você acompanha todo o progresso.'
    },
    {
      id: 'item-5',
      question: 'Vocês trabalham com pequenas empresas?',
      answer: 'Absolutamente! Atendemos desde startups até grandes corporações. Temos soluções e planos de pagamento flexíveis para empresas de todos os tamanhos. Cada projeto é único e importante para nós.'
    },
    {
      id: 'item-6',
      question: 'Como é definido o orçamento do projeto?',
      answer: 'O orçamento é baseado no escopo, complexidade, tecnologias utilizadas e prazo desejado. Após uma reunião inicial, fornecemos uma proposta detalhada com valores transparentes e sem custos ocultos.'
    },
    {
      id: 'item-7',
      question: 'Vocês fazem redesign de sistemas existentes?',
      answer: 'Sim! Especialistas em modernização e migração de sistemas legados. Analisamos sua aplicação atual e criamos um plano de migração seguro para tecnologias modernas, mantendo seus dados e funcionalidades.'
    },
    {
      id: 'item-8',
      question: 'Como garantem a segurança dos projetos?',
      answer: 'Seguimos as melhores práticas de segurança: criptografia, autenticação robusta, HTTPS, backups automáticos, testes de penetração e conformidade com LGPD. Segurança é prioridade em todos os nossos projetos.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-cyan-300 font-mono">
            Esclarecemos suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={faq.id}
                  className="border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 px-6"
                >
                  <AccordionTrigger className="text-white font-mono hover:text-cyan-400 transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="backdrop-blur-md bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/20 rounded-xl p-8">
            <h3 className="text-2xl font-mono text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre seu projeto.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg font-mono text-white transition-all duration-300"
            >
              Fale Conosco
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;