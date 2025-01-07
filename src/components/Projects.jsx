import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Zap } from 'lucide-react';
import prj1 from "../assets/Capture d'écran 2024-12-20 154028.png"
import prj2 from "../assets/Capture d'écran 2025-01-06 022010.png"
import prj3 from "../assets/Capture d'écran 2025-01-07 015848.png"

const projects = [
  {
    id: 1,
    title: "Firdaouse Spa",
    description:
      "J'ai conçu un site Web élégant et réactif pour Firdaous Spa, mettant en avant ses services haut de gamme tels que massages, soins de beauté et forfaits bien-être. Principales caractéristiques : Design réactif : Adapté à tous les appareils. Visuels attrayants : Images de qualité et couleurs apaisantes. Navigation intuitive : Accès facile aux services, tarifs et coordonnées. Performance optimale : Chargement rapide pour une expérience fluide. Ce projet reflète mon expertise en création de sites web esthétiques et fonctionnels, axés sur la satisfaction client.",
    image: prj1,
    liveUrl: "https://firdaousspa.netlify.app/",
    icon: Palette,
  },
  {
    id: 2,
    title: "Laboratoire Burrataine",
    description:
      "Site vitrine moderne et responsive conçu pour mettre en valeur une marque culinaire. Il offre une navigation intuitive et une présentation élégante des menus, services et valeurs du groupe. Rôle : Intégration web et design responsive. Optimisation des performances et SEO. Ajout de fonctionnalités interactives. Technologies : HTML, CSS, JavaScript.",
    image: prj2,
    liveUrl: "https://laburratinagroupe.com/",
    icon: Code,
  },
  {
    id: 3,
    title: "Sou9 Maghrib",
    description:
      "Souq Maghrib est une plateforme e-commerce moderne et conviviale développée pour offrir une expérience d'achat fluide et intuitive. Ce site présente une large gamme de produits avec une gestion dynamique des catégories, des détails clairs pour chaque article, et un design responsive adapté à tous les appareils. Caractéristiques principales : Catalogue de produits : Une présentation claire et attrayante des produits avec des images, descriptions détaillées, et informations de prix. Système de gestion : Les produits peuvent être facilement ajoutés, mis à jour ou supprimés via un tableau de bord dédié. Performance optimale : Développé en utilisant les meilleures pratiques pour garantir une navigation rapide et sans bug. Design responsive : Une interface qui s'adapte parfaitement aux smartphones, tablettes et ordinateurs. Technologies utilisées : MERN Stack (MongoDB, Express.js, React.js, Node.js) pour le backend et le frontend, ainsi que Tailwind CSS pour un style moderne et épuré. Souq Maghrib démontre ma capacité à créer une plateforme e-commerce professionnelle, intégrant des fonctionnalités modernes et une gestion simplifiée des produits. Ce projet reflète également ma maîtrise de la stack MERN et de principes de développement web axés sur l'utilisateur.",
    image: prj3,
    liveUrl: "https://sou9maghrib.netlify.app/",
    icon: Code,
  },
];

const MyProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.5,
      },
    },
  };

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800 relative inline-block">
            Mes projets
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </h2>
          <motion.div
            className="w-16 h-16 mx-auto mt-4"
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300 px-4 py-2 rounded"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-4">
                  {project.description}
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300 text-center py-2 rounded"
                >
                  View Live
                </a>
              </div>
              <motion.div
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                variants={iconVariants}
              >
                <project.icon className="w-6 h-6 text-blue-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;

