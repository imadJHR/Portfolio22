import prj1 from "../assets/Capture d'écran 2024-12-20 154028.png"
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Site Spa & Massage Reservation",
    description: "Firdaous Spa - Site Web de relaxation et de bien-être
J'ai développé le site Web de Firdaous Spa, un centre de relaxation et de bien-être haut de gamme, garantissant une expérience utilisateur fluide. Le site met en valeur les services luxueux du spa, notamment les thérapies de massage, les soins de beauté et les forfaits bien-être, avec un design élégant et moderne.

Principales caractéristiques :

Conception réactive : optimisée pour les utilisateurs de bureau et mobiles, garantissant l'accessibilité sur tous les appareils.
Visuels attrayants : images de haute qualité et palettes de couleurs apaisantes pour refléter l'atmosphère sereine du spa.
Navigation conviviale : sections faciles à explorer pour les services, les tarifs et les coordonnées.
Vitesse de chargement rapide : conçu pour des performances optimales et un accès rapide.
Ce projet met en valeur ma capacité à créer des sites Web visuellement attrayants et fonctionnels qui répondent aux besoins des clients tout en se concentrant sur la satisfaction des utilisateurs.",
    image: prj1,
    liveUrl: "https://firdaousspa.netlify.app/",
  },
  
];

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 min-h-screen bg-gray-100" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <Button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto w-full"
                >
                  View Live
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 aspect-video w-full">
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
