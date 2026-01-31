import React from "react";
import { motion } from "motion/react";
import GlassCard from "../GlassCard";
import { Mail, MapPin, Github, } from "lucide-react";
import { translations, type Language } from "../../i18n/translations";

interface ContactSectionProps {
  language?: Language;
}

const ContactSection: React.FC<ContactSectionProps> = ({ language = "pt" }) => {
  const t = translations[language];
  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.email,
      content: "dpff.work@gmail.com",
      action: "mailto:dpff.work@gmail.com?subject=contact&body=Olá",
    },
    {
      icon: Github,
      title: t.contact.github,
      content: "@cosmicnodestudio",
      action: "https://github.com/cosmicnodestudio",
    },
    // {
    //   icon: Linkedin,
    //   title: t.contact.linkedin,
    //   content: t.contact.linkedinValue,
    //   action: "https://linkedin.com",
    // },
    // {
    //   icon: Twitter,
    //   title: t.contact.twitter,
    //   content: "@cosmicnodestudio",
    //   action: "https://twitter.com/cosmicnodestudio",
    // },
    {
      icon: MapPin,
      title: t.contact.location,
      content: t.contact.locationValue,
      action: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-4xl md:text-5xl font-mono text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-cyan-300 font-mono">
            Pronto para transformar sua ideia em realidade digital?
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Info - Full Width */}
          <div className="space-y-6">
            <GlassCard>
              <h3 className="text-2xl font-mono text-white mb-8 text-center">
                {t.contact.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.action}
                      target={
                        info.action.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, translateY: -8 }}
                      className="flex flex-col items-center justify-center p-6 rounded-lg bg-white/5 hover:bg-white/15 transition-all border border-white/10 hover:border-cyan-400/60 cursor-pointer h-full"
                    >
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <h4 className="font-mono text-white text-center text-sm font-semibold">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 text-xs text-center mt-3 break-words leading-relaxed">
                        {info.content}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
