import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import GlassCard from "../GlassCard";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { translations, type Language } from "../../i18n/translations";

interface PortfolioSectionProps {
  language?: Language;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  language = "pt",
}) => {
  const t = translations[language];
  const [activeStack, setActiveStack] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "DevXP",
      stacks: ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
      description: t.portfolio.projects.devxp.description,
      image:
       "https://images.unsplash.com/photo-1750056393349-dfaf647f7400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU4Mjg1NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "TypeScript",
        "Docker",
        "JWT",
        "websockets",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/cosmicnodestudio/devxp",
    },
    {
      id: 2,
      title: "TaskList",
      stacks: ["C#", ".Net", "Angular", "MySQL", "JWT", "TailwindCSS", "TypeScript", "Docker"],
      description: "Full-stack task management application with authentication, Clean Architecture backend, and modern Angular frontend.",
      image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4Mjc5NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["C#", ".Net", "Angular", "MySQL", "JWT", "TailwindCSS", "TypeScript", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/cosmicnodestudio/tasklist",
    },
    {
      id: 3,
      title: "Leads Management System",
      stacks: ["Vue.js", "MySQL", "JWT", "Python", "Flask", "TailwindCSS", "JavaScript", "Docker"],
      description: "CRM-style system to manage leads, track interactions, and monitor conversion metrics in a real-world business flow.",
      image:
        "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODIzMTMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Vue.js", "MySQL", "JWT", "Python", "Flask", "TailwindCSS", "JavaScript", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/cosmicnodestudio/leadsmanagement",
    },
    // {
    //   id: 4,
    //   title: t.portfolio.projects.saas.title,
    //   stacks: ["Next.js", "Prisma", "TypeScript"],
    //   description: t.portfolio.projects.saas.description,
    //   image:
    //     "https://images.unsplash.com/photo-1653933686802-86d21b59b03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwc29mdHdhcmV8ZW58MXx8fHwxNzU4MjkzOTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   technologies: ["Next.js", "Prisma", "Supabase", "TailwindCSS"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   id: 5,
    //   title: t.portfolio.projects.food.title,
    //   stacks: ["Flutter", "Dart", "Firebase"],
    //   description: t.portfolio.projects.food.description,
    //   image:
    //     "https://images.unsplash.com/photo-1748007476853-d2ced6339f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBtb2JpbGV8ZW58MXx8fHwxNzU4MjkzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   technologies: ["Flutter", "Dart", "Google Maps", "Firebase"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
  ];

  // Get all unique stacks
  const allStacks = Array.from(new Set(projects.flatMap((p) => p.stacks)));

  const filteredProjects =
    activeStack === null
      ? projects
      : projects.filter((project) => project.stacks.includes(activeStack));

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono text-white mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-xl text-cyan-300 font-mono mb-8">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Stack Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12 px-4"
        >
          <motion.button
            onClick={() => setActiveStack(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-6 py-2 rounded-full font-mono transition-all duration-300
              ${
                activeStack === null
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/20"
              }
            `}
          >
            {t.portfolio.allProjects}
          </motion.button>
          {allStacks.map((stack) => (
            <motion.button
              key={stack}
              onClick={() => setActiveStack(stack)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-6 py-2 rounded-full font-mono transition-all duration-300
                ${
                  activeStack === stack
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/20"
                }
              `}
            >
              {stack}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={scrollLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -left-11 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={scrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 px3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="flex-shrink-0 w-80">
                <GlassCard delay={index * 0.1}>
                  <div className="group">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Project Links */}
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>

                    <h3 className="text-xl font-mono text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
