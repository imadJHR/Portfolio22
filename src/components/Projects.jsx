import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette } from "lucide-react";
import prj1 from "../assets/Capture d'écran 2024-12-20 154028.png";
import prj2 from "../assets/Capture d'écran 2025-01-06 022010.png";
import prj3 from "../assets/Capture d'écran 2025-01-07 015848.png";
import iptv from "../assets/iptv.png";
import tonka from "../assets/tonka.png";
import copine from "../assets/copine.png";
import bianca from "../assets/bianca.png";
import labrioche from "../assets/labrioche.png";

const projects = [
  {
    id: 1,
    title: "Firdaouse Spa",
    description:
      "J'ai conçu un site Web élégant et réactif pour Firdaous Spa, mettant en avant ses services haut de gamme tels que massages, soins de beauté et forfaits bien-être. Principales caractéristiques : Design réactif : Adapté à tous les appareils. Visuels attrayants : Images de qualité et couleurs apaisantes. Navigation intuitive : Accès facile aux services, tarifs et coordonnées. Performance optimale : Chargement rapide pour une expérience fluide. Ce projet reflète mon expertise en création de sites web esthétiques et fonctionnels, axés sur la satisfaction client.",
    image: prj1,
    liveUrl: "https://firdaousspa.netlify.app/",
    icon: Palette,
    status: null,
  },
  {
    id: 2,
    title: "Laboratoire Burrataine",
    description:
      "Site vitrine moderne et responsive conçu pour mettre en valeur une marque culinaire. Il offre une navigation intuitive et une présentation élégante des menus, services et valeurs du groupe. Rôle : Intégration web et design responsive. Optimisation des performances et SEO. Ajout de fonctionnalités interactives. Technologies : HTML, CSS, JavaScript.",
    image: prj2,
    liveUrl: "https://laburratinagroupe.com/",
    icon: Code,
    status: null,
  },
  {
    id: 3,
    title: "Sou9 Maghrib",
    description:
      "Souq Maghrib est une plateforme e-commerce moderne et conviviale développée pour offrir une expérience d'achat fluide et intuitive. Ce site présente une large gamme de produits avec une gestion dynamique des catégories, des détails clairs pour chaque article, et un design responsive adapté à tous les appareils. Caractéristiques principales : Catalogue de produits : Une présentation claire et attrayante des produits avec des images, descriptions détaillées, et informations de prix. Système de gestion : Les produits peuvent être facilement ajoutés, mis à jour ou supprimés via un tableau de bord dédié. Performance optimale : Développé en utilisant les meilleures pratiques pour garantir une navigation rapide et sans bug. Design responsive : Une interface qui s'adapte parfaitement aux smartphones, tablettes et ordinateurs. Technologies utilisées : MERN Stack (MongoDB, Express.js, React.js, Node.js) pour le backend et le frontend, ainsi que Tailwind CSS pour un style moderne et épuré. Souq Maghrib démontre ma capacité à créer une plateforme e-commerce professionnelle, intégrant des fonctionnalités modernes et une gestion simplifiée des produits. Ce projet reflète également ma maîtrise de la stack MERN et de principes de développement web axés sur l'utilisateur.",
    image: prj3,
    liveUrl: "https://sou9maghrib.netlify.app/",
    icon: Code,
    status: null,
  },
  {
    id: 8,
    title: "Cafe Bianca",
    description:
      "Café Bianca est un site web élégant et moderne dédié à l'univers du café. Avec une interface épurée et une navigation fluide, il invite les visiteurs à découvrir un large éventail de boissons artisanales, des pâtisseries savoureuses et une ambiance chaleureuse.Le design du site met en avant des images gourmandes et des couleurs douces, créant une expérience immersive pour les amateurs de café. Que ce soit pour explorer le menu, en savoir plus sur l'histoire du café ou simplement apprécier un design raffiné, Café Bianca incarne l'art du café avec passion et authenticité.",
    image: bianca,
    liveUrl: "https://demo-cafe-bianca.netlify.app/",
    icon: Code,
    status: null,
  },
  {
    id: 4,
    title: "RK Service",
    description:
      "RK Service est une application Web de pointe conçue pour fournir [service ou objectif spécifique]. La plateforme est conçue en mettant l'accent sur [fonctionnalités ou avantages clés], garantissant une expérience utilisateur fluide et efficace. L'application exploite les technologies Web modernes pour offrir une solution robuste et évolutive.Technologies utilisées :Frontend : Tailwind, React.js Contrôle de version : Git, GitHub Déploiement : Netlify Outils supplémentaires : Webpack, Babel, ESLint",
    image: iptv,
    liveUrl: "https://rk-service.netlify.app/",
    icon: Code,
    status: null,
  },
  {
    id: 5,
    title: "Atelier TONKA",
    description:
      "Atelier Tonka est un site vitrine élégant conçu pour présenter les services et le savoir-faire d'un atelier spécialisé dans la création et la rénovation. Ce site reflète une esthétique professionnelle et moderne, mettant en valeur l'expertise artisanale à travers une présentation soignée et intuitive.Points forts du site : Interface utilisateur : Design épuré et navigation fluide pour une expérience utilisateur optimale. Présentation visuelle : Mise en avant des projets réalisés, des services offerts, et des valeurs de l'atelier à travers des images de haute qualité. Accessibilité : Compatible avec tous les appareils (mobile, tablette, ordinateur). Contact simplifié : Une section dédiée pour faciliter la prise de contact avec l'atelier. Ce site vitrine offre à l'Atelier Tonka une plateforme numérique pour attirer de nouveaux clients, renforcer sa visibilité en ligne, et valoriser son savoir-faire unique.",
    image: tonka,
    liveUrl: "https://atelier-tonka.netlify.app/",
    icon: Code,
    status: null,
  },
  {
    id: 6,
    title: "Hello Copine",
    description:
      "Hello Les Copines est une plateforme en ligne dédiée à la communauté féminine, offrant un espace interactif pour le partage, la discussion et le soutien entre femmes. Le site propose divers contenus et fonctionnalités visant à renforcer les liens et à encourager les échanges au sein de cette communauté. Que vous souhaitiez partager vos expériences, poser des questions ou simplement interagir avec d'autres membres, Hello Les Copines est conçu pour être un espace convivial et inclusif pour toutes.",
    image: copine,
    liveUrl: "https://copine.netlify.app/",
    icon: Code,
    status: null,
  },

  {
    id: 8,
    title: "Restaurant La Brioche",
    description:
      "Développé en MERN stack, ce site e-commerce offre une expérience fluide avec gestion des produits, panier dynamique et tableau de bord admin. L'interface moderne, conçue avec Tailwind CSS et ShadCN, assure une navigation optimale. 🚀",
    image: labrioche,
    liveUrl: "https://labrioche.netlify.app/",
    icon: Code,
    status: "en cours",
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

  // Status badge variants
  const statusVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        delay: 0.7,
      },
    },
  };

  return (
    <section
      className="py-20 w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
      id="projects"
    >
      <div className=" px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
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

                {/* Status Badge */}
                {project.status && (
                  <motion.div
                    className="absolute top-4 left-4 z-10"
                    variants={statusVariants}
                  >
                    <span className="bg-yellow-400 text-yellow-900 font-medium text-xs px-3 py-1 rounded-full shadow-md flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-1.5 animate-pulse"></span>
                      {project.status}
                    </span>
                  </motion.div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
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
      </div>
    </section>
  );
};

export default MyProjects;
