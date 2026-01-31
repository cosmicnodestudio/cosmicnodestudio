import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "sonner";
import type { Language } from "./i18n/translations";

// Components
import LoadingScreen from "./components/LoadingScreen";
import CosmicBackground from "./components/CosmicBackground";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
// import SolutionsSection from './components/sections/SolutionsSection';
import PortfolioSection from "./components/sections/PortfolioSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState<Language>("en");

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "solutions",
        "portfolio",
        "about",
        "contact",
        "faq",
      ];
      const currentScrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && currentScrollY >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Load custom fonts
  useEffect(() => {
    // Add Titillium Web font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ fontFamily: '"Titillium Web", "JetBrains Mono", monospace' }}
    >
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Cosmic Background */}
          <CosmicBackground />

          {/* Navigation */}
          <Navigation
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
            language={language}
            onLanguageChange={setLanguage}
          />

          {/* Main Content */}
          <main className="relative z-10">
            <HeroSection language={language} />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* <SolutionsSection /> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <PortfolioSection language={language} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <AboutSection language={language} />
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ProcessSection />
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ContactSection language={language} />
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <FAQSection />
            </motion.div> */}
          </main>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Footer />
          </motion.div>

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "rgba(0, 0, 0, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "white",
                backdropFilter: "blur(10px)",
              },
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
