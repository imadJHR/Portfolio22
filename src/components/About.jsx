import React from "react";
import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiShadcnui,
  SiVite,
} from "react-icons/si";

const technologies = [
  { icon: SiVite, name: "Vite.js", color: "#646CFF" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express.js", color: "#000000" },
  { icon: SiShadcnui, name: "Shadcn UI", color: "#000000" },
];

const AboutMe = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex items-center justify-center text-white"
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            A propos de moi
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </h2>
          <motion.div
            className="w-16 h-16 mx-auto"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <svg
              className="w-full h-full text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p
              className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Bonjour ! Je suis <span className="text-xl sm:text-2xl font-semibold text-blue-400">Imad Johar</span>, un développeur Web passionné spécialisé dans le développement de stacks MERN. Avec une base solide en intégration Web et un sens aigu du détail, je crée des applications Web dynamiques, conviviales et réactives.
            </motion.p>
            <motion.p
              className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Je détiens des certifications de GoMyCode et j'ai de l'expérience avec des outils modernes comme Tailwind CSS et ShadCN, assurant un code propre et évolutif. À seulement 20 ans, je suis diplômé du baccalauréat avec une volonté d'innover et de fournir des solutions de haute qualité.
            </motion.p>
            <motion.p
              className="text-gray-300 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Actuellement, je me concentre sur la création de plateformes e-commerce élégantes, l'intégration de tableaux de bord intuitifs et l'amélioration des expériences utilisateur. Que ce soit pour construire des solutions full-stack ou résoudre des défis web complexes, j'apporte créativité, dévouement et expertise technique à chaque projet. Construisons quelque chose d'incroyable ensemble ! 🚀
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-blue-400">Technologies et Stack Technique</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="mb-3 sm:mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <tech.icon className="text-3xl sm:text-4xl md:text-5xl" style={{ color: tech.color }} />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

