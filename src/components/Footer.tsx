import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  // const quickLinks = [
  //   { name: 'Home', href: '#home' },
  //   { name: 'Soluções', href: '#solutions' },
  //   { name: 'Portfolio', href: '#portfolio' },
  //   { name: 'Sobre', href: '#about' },
  //   { name: 'Contato', href: '#contact' },
  //   { name: 'FAQ', href: '#faq' }
  // ];

  // const services = [
  //   'Full-Stack Development',
  //   'Mobile Development',
  //   'UI/UX Design',
  //   'SEO & Marketing',
  //   'Consultoria Tech',
  //   'Suporte'
  // ];

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Company Info */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-mono text-cyan-400 mb-3">
              &lt; Cosmic Node Studio /&gt;
            </h3>
            {/* <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Transformando ideias em realidades digitais.
            </p> * /}
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">São Paulo, SP - Brasil</span>
            </div>
          </motion.div> */}

          {/* Quick Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-white mb-3">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Services */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-white mb-3">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Contact & Social */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-white mb-3">Conecte-se</h4>
            <p className="text-gray-300 text-sm mb-3">
              Siga-nos nas redes sociais.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 border border-white/20 hover:border-transparent"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div> */}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-mono">
              © {currentYear} Cosmic Node Studio. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 text-cyan-400/20 text-4xl font-mono animate-pulse">
          &lt;/&gt;
        </div>
        <div className="absolute bottom-10 left-10 text-purple-400/20 text-3xl font-mono animate-pulse">
          {'{'}  {'}'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;