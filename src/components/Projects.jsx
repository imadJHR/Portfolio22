import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Code, Palette, Zap } from 'lucide-react';
import prj1 from "../assets/Capture d'écran 2024-12-20 154028.png"
import prj2 from "../assets/Capture d'écran 2025-01-06 022010.png"

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
];

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const controls = useAnimation();
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
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-gray-800 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         Mes projets
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 mt-4"></span>
        </motion.h2>

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
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  >
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-4">
                  {project.description}
                </p>
                <Button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
                >
                  View Live
                </Button>
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

      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            {selectedProject && (
              <iframe
                src={selectedProject.liveUrl}
                title={selectedProject.title}
                className="w-full h-full border-0"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MyProjects;

