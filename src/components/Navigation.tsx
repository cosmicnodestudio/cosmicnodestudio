import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { translations, type Language } from "../i18n/translations";

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  language?: Language;
  onLanguageChange?: (language: Language) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionClick,
  language = "en",
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  const sections = [
    { id: "home", label: t.nav.home },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${
          isScrolled
            ? "backdrop-blur-md bg-black/20 border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-mono text-cyan-400"
            whileHover={{ scale: 1.05 }}
          >
            &lt; Cosmic Node Studio /&gt;
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                className={`
                  font-mono transition-colors duration-300 relative
                  ${
                    activeSection === section.id
                      ? "text-cyan-400"
                      : "text-white/70 hover:text-white"
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                    layoutId="activeSection"
                  />
                )}
              </motion.button>
            ))}

            {/* Language Switcher */}
            <motion.div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
              <Globe className="w-4 h-4 text-white/70" />
              <motion.button
                onClick={() => onLanguageChange?.("en")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded font-mono text-sm transition-all ${
                  language === "en"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/50"
                    : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </motion.button>
              <span className="text-white/40">/</span>
              <motion.button
                onClick={() => onLanguageChange?.("pt")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded font-mono text-sm transition-all ${
                  language === "pt"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/50"
                    : "text-white/70 hover:text-white"
                }`}
              >
                PT
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white/70 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
