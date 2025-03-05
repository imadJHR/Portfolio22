"use client";
import img from "../assets/creationSiteWeb.png";
import { useState, useRef, useEffect } from "react";
import {
  Laptop,
  Palette,
  Code,
  Zap,
  Layout,
  Smartphone,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowDown,
  Database,
  Server,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import MyProjects from "../components/Projects";
import { Link } from "react-router-dom";

const WebDesignServices = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [isMobile, setIsMobile] = useState(false);
  const processRef = useRef(null);
  const [activeTab, setActiveTab] = useState("mern");

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const services = [
    {
      icon: <Layout className="h-8 w-8 md:h-10 md:w-10 text-blue-500" />,
      title: "Design UI/UX",
      description:
        "Création d'interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.",
    },
    {
      icon: <Code className="h-8 w-8 md:h-10 md:w-10 text-purple-500" />,
      title: "Développement Front-end",
      description:
        "Intégration de designs avec les dernières technologies web pour des sites rapides et réactifs.",
    },
    {
      icon: <Zap className="h-8 w-8 md:h-10 md:w-10 text-orange-500" />,
      title: "Développement Back-end",
      description:
        "Création de fonctionnalités avancées et de systèmes de gestion de contenu sur mesure.",
    },
    {
      icon: <Smartphone className="h-8 w-8 md:h-10 md:w-10 text-green-500" />,
      title: "Design Responsive",
      description:
        "Assurance que votre site s'affiche parfaitement sur tous les appareils, du desktop au mobile.",
    },
    {
      icon: <Palette className="h-8 w-8 md:h-10 md:w-10 text-pink-500" />,
      title: "Refonte de Site Web",
      description:
        "Modernisation de sites existants pour améliorer leur apparence et leurs performances.",
    },
    {
      icon: <Laptop className="h-8 w-8 md:h-10 md:w-10 text-indigo-500" />,
      title: "Maintenance et Support",
      description:
        "Services continus pour garder votre site à jour, sécurisé et performant.",
    },
  ];

  const mernStack = [
    {
      icon: <Database className="h-8 w-8 md:h-10 md:w-10 text-green-500" />,
      title: "MongoDB",
      description:
        "Base de données NoSQL flexible et évolutive pour stocker vos données de manière efficace et sécurisée.",
    },
    {
      icon: <Server className="h-8 w-8 md:h-10 md:w-10 text-gray-600" />,
      title: "Express.js",
      description:
        "Framework backend minimaliste et rapide pour créer des API robustes et des applications web performantes.",
    },
    {
      icon: <Code className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />,
      title: "React",
      description:
        "Bibliothèque JavaScript pour créer des interfaces utilisateur interactives et dynamiques avec une approche par composants.",
    },
    {
      icon: <Globe className="h-8 w-8 md:h-10 md:w-10 text-green-600" />,
      title: "Node.js",
      description:
        "Environnement d'exécution JavaScript côté serveur pour développer des applications rapides et évolutives.",
    },
  ];

  const portfolioItems = [
    {
      title: "E-commerce Mode",
      image: "/placeholder.svg?height=400&width=600",
      description: "Site e-commerce moderne avec une expérience d'achat fluide",
    },
    {
      title: "Blog Culinaire",
      image: "/placeholder.svg?height=400&width=600",
      description: "Design élégant mettant en valeur les recettes et photos",
    },
    {
      title: "Site Vitrine Entreprise",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Présentation professionnelle reflétant l'identité de la marque",
    },
    {
      title: "Application Web SaaS",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Interface utilisateur intuitive pour une plateforme SaaS complexe",
    },
  ];

  const pricingPlans = [
    {
      name: "Site Vitrine",
      price: "à partir de 2500 DH",
      features: [
        "Design personnalisé",
        "Jusqu'à 5 pages",
        "Responsive design",
        "Formulaire de contact",
        "Intégration des réseaux sociaux",
        "Optimisation SEO de base",
      ],
      popular: false,
    },
    {
      name: "Site E-commerce",
      price: "à partir de 5000 DH",
      features: [
        "Design personnalisé",
        "Jusqu'à 50 produits",
        "Système de paiement sécurisé",
        "Gestion des stocks",
        "Panel d'administration",
        "Optimisation SEO avancée",
        "Formation utilisation",
      ],
      popular: true,
    },
    {
      name: "Application Web",
      price: "Sur devis",
      features: [
        "Analyse des besoins détaillée",
        "Design UX/UI sur mesure",
        "Développement front-end et back-end",
        "Fonctionnalités personnalisées",
        "Tests et déploiement",
        "Support et maintenance",
        "Évolutions futures",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer:
        "La durée de création d'un site web varie en fonction de sa complexité. Un site vitrine simple peut être réalisé en 4 à 6 semaines, tandis qu'un site e-commerce ou une application web plus complexe peut prendre de 8 à 12 semaines ou plus. Nous établissons un calendrier détaillé au début du projet et vous tenons informé de l'avancement à chaque étape.",
    },
    {
      question:
        "Puis-je mettre à jour mon site moi-même une fois qu'il est terminé ?",
      answer:
        "Absolument ! Nous développons la plupart de nos sites avec des systèmes de gestion de contenu (CMS) conviviaux qui vous permettent de mettre à jour facilement le contenu vous-même. Nous fournissons également une formation pour vous assurer que vous êtes à l'aise avec la gestion de votre site. Pour des modifications plus complexes, notre équipe de support est toujours disponible pour vous aider.",
    },
    {
      question:
        "Votre service inclut-il l'hébergement et la maintenance du site ?",
      answer:
        "Nous proposons des services d'hébergement et de maintenance en option. Notre hébergement est optimisé pour la performance et la sécurité. Quant à la maintenance, nous offrons différents forfaits qui incluent les mises à jour régulières, les sauvegardes, la sécurité et le support technique. Cela vous permet de vous concentrer sur votre activité pendant que nous nous assurons que votre site reste performant et sécurisé.",
    },
    {
      question:
        "Comment assurez-vous que mon site sera bien référencé sur les moteurs de recherche ?",
      answer:
        "L'optimisation pour les moteurs de recherche (SEO) est intégrée à chaque site que nous créons. Cela inclut une structure de site optimisée, des URL conviviales pour le SEO, un code propre et rapide, et une optimisation des images. De plus, nous vous fournissons des conseils sur les meilleures pratiques en matière de contenu pour le SEO. Pour une stratégie SEO plus approfondie, nous proposons également des services de référencement avancés en complément.",
    },
    {
      question:
        "Proposez-vous des designs personnalisés ou utilisez-vous des templates ?",
      answer:
        "Nous créons des designs entièrement personnalisés pour chaque client. Bien que nous puissions nous inspirer de templates pour certains éléments de base, chaque site que nous développons est unique et conçu spécifiquement pour répondre à vos besoins et refléter l'identité de votre marque. Cela garantit que votre site se démarque de la concurrence et offre une expérience utilisateur optimale à vos visiteurs.",
    },
    {
      question: "Utilisez-vous WordPress pour développer vos sites web ?",
      answer:
        "Non, nous n'utilisons pas WordPress. Nous privilégions le stack MERN (MongoDB, Express.js, React, Node.js) qui offre une flexibilité supérieure, de meilleures performances et une sécurité renforcée. Cette approche nous permet de créer des applications web entièrement personnalisées, évolutives et modernes qui répondent précisément à vos besoins spécifiques, sans les limitations des CMS traditionnels.",
    },
    {
      question:
        "Quels sont les avantages du stack MERN par rapport à WordPress ?",
      answer:
        "Le stack MERN offre plusieurs avantages : une performance supérieure avec des temps de chargement plus rapides, une meilleure sécurité, une flexibilité totale pour créer des fonctionnalités sur mesure, une expérience utilisateur plus fluide avec des applications à page unique (SPA), et une meilleure évolutivité pour gérer la croissance de votre site. Contrairement à WordPress, le MERN stack permet de développer des applications web modernes sans les contraintes d'un CMS préfabriqué.",
    },
  ];

  const heroImages = ["/image1.jpg"];

  // Process steps with vertical layout for mobile
  const ProcessItem = ({ number, title, description, isLast }) => (
    <div className="flex flex-col md:flex-row items-center md:items-center w-full">
      <div className="flex flex-row md:flex-col items-center mb-4 md:mb-0">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
          <span className="text-xl md:text-2xl font-bold">{number}</span>
        </div>
        {!isLast && (
          <>
            <div className="hidden md:block h-16 w-px bg-gray-300 mx-auto my-2"></div>
            <ArrowDown className="md:hidden h-10 w-10 text-gray-400 mx-2" />
          </>
        )}
      </div>
      <div className="flex-1 ml-4 md:ml-0 md:text-center">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-white w-full overflow-hidden">
      {/* Hero Section with Carousel - Responsive */}
      <section className="relative bg-gradient-to-r from-purple-800 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-24 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            >
              Créez un Site Web qui Fait la Différence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl mb-6 md:mb-8"
            >
              Des applications web modernes et performantes avec le stack MERN -
              MongoDB, Express.js, React et Node.js.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to={"/devis"}>
                <Button
                  size={isMobile ? "sm" : "default"}
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  Commencer votre projet
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-sm md:max-w-md overflow-hidden rounded-xl shadow-2xl">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {heroImages.map((src, index) => (
                    <div className="embla__slide" key={index}>
                      <img
                        src={img || "/placeholder.svg?height=400&width=600"}
                        alt={`Site web exemple ${index + 1}`}
                        className="w-full h-48 md:h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MERN Stack Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              Notre Stack Technologique
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Nous utilisons le stack MERN pour développer des applications web
              modernes, performantes et évolutives
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {mernStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-3 md:mb-4">{tech.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {tech.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setActiveTab("mern")}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "mern"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Avantages MERN
              </button>
              <button
                onClick={() => setActiveTab("wordpress")}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "wordpress"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                MERN vs WordPress
              </button>
            </div>

            <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
              {activeTab === "mern" ? (
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Pourquoi choisir le stack MERN ?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Performance supérieure</p>
                        <p className="text-sm text-gray-600">
                          Temps de chargement rapides et expérience utilisateur
                          fluide
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Applications sur mesure</p>
                        <p className="text-sm text-gray-600">
                          Fonctionnalités entièrement personnalisées selon vos
                          besoins
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Évolutivité</p>
                        <p className="text-sm text-gray-600">
                          Capacité à gérer la croissance et le trafic important
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Sécurité renforcée</p>
                        <p className="text-sm text-gray-600">
                          Architecture moderne avec meilleures pratiques de
                          sécurité
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold mb-4">MERN vs WordPress</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Critère
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            MERN Stack
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            WordPress
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            Performance
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Excellente
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Moyenne à faible
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            Personnalisation
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Illimitée
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Limitée par les thèmes/plugins
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            Sécurité
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Élevée
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Vulnérable aux attaques
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            Évolutivité
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Excellente
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Limitée
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Responsive Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              Nos Services de Création Web
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              De la conception à la mise en ligne, nous créons des sites web qui
              captent l'attention et convertissent les visiteurs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-3 md:mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Vertical on Mobile */}
      <section ref={processRef} className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              Notre Processus de Création
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour transformer votre vision en réalité
              digitale
            </p>
          </div>

          <div className="flex flex-col space-y-6 md:space-y-0 md:hidden">
            <ProcessItem
              number="1"
              title="Découverte"
              description="Analyse de vos besoins et objectifs"
            />
            <ProcessItem
              number="2"
              title="Design"
              description="Création de maquettes et prototypes interactifs"
            />
            <ProcessItem
              number="3"
              title="Développement"
              description="Intégration et programmation avec le stack MERN"
            />
            <ProcessItem
              number="4"
              title="Lancement"
              description="Tests, optimisation et mise en ligne"
              isLast={true}
            />
          </div>

          {/* Horizontal process for tablets and desktop */}
          <div className="hidden md:flex md:flex-row justify-between items-start">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Découverte</h3>
              <p className="text-center text-gray-600 max-w-xs">
                Analyse de vos besoins et objectifs
              </p>
            </div>
            <ArrowRight className="hidden md:block h-8 w-8 text-gray-400 mx-4 self-center" />
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-center text-gray-600 max-w-xs">
                Création de maquettes et prototypes interactifs
              </p>
            </div>
            <ArrowRight className="hidden md:block h-8 w-8 text-gray-400 mx-4 self-center" />
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Développement</h3>
              <p className="text-center text-gray-600 max-w-xs">
                Intégration et programmation avec le stack MERN
              </p>
            </div>
            <ArrowRight className="hidden md:block h-8 w-8 text-gray-400 mx-4 self-center" />
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lancement</h3>
              <p className="text-center text-gray-600 max-w-xs">
                Tests, optimisation et mise en ligne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Responsive */}
      <section className="py-12 md:py-20">
        <div className="w-full ">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              Notre Portfolio
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations récentes avec le stack
              MERN
            </p>
          </div>
          <MyProjects />
        </div>
      </section>

      {/* Pricing - Stacked on Mobile */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              Nos Forfaits
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les projets et budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-sm sm:max-w-none mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                  plan.popular ? "ring-2 ring-purple-500 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-xs md:text-sm font-medium">
                    Populaire
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-4 md:mb-6">
                    <span className="text-2xl md:text-4xl font-bold">
                      {plan.price}
                    </span>
                  </div>
                  <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size={isMobile ? "sm" : "default"}
                    className={`w-full ${
                      plan.popular
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    Choisir ce forfait
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Responsive */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos services de création de
              sites web
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-3 md:p-4 text-left bg-white hover:bg-gray-50"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium text-base md:text-lg pr-2">
                    {faq.question}
                  </span>
                  {activeQuestion === index ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500" />
                  )}
                </button>
                {activeQuestion === index && (
                  <div className="p-3 md:p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm md:text-base text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Responsive */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
          >
            Prêt à lancer votre projet web avec le stack MERN ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto"
          >
            Que vous ayez besoin d'un site vitrine élégant, d'une boutique en
            ligne performante ou d'une application web sur mesure, notre
            expertise en MERN stack vous garantit une solution moderne, rapide
            et évolutive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
          >
            <Link to={"/devis"}>
              <Button
                size={isMobile ? "sm" : "default"}
                className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto"
              >
                Démarrer mon projet
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignServices;
