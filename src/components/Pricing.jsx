import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaLaptopCode,
  FaRocket,
  FaDesktop,
  FaLightbulb,
  FaCrown,
} from "react-icons/fa";

const pricingPlans = [
  {
    title: "Site Vitrine - Forfait de base",
    price: "2000 Dhs",
    features: [
      "Design personnalisé ou thème préexistant",
      "Pages de base (Accueil, À propos, Contact, Services)",
      "Design mobile responsive",
      "SEO de base",
      "Hébergement et nom de domaine pendant 1 an",
    ],
    icon: FaDesktop,
    color: "from-green-400 to-green-600",
    description:
      "Idéal pour les petites entreprises ou les indépendants qui souhaitent un site simple et professionnel pour se présenter en ligne.",
  },
  {
    title: "Site E-commerce - Forfait de base",
    price: "5,000 Dhs",
    features: [
      "Design personnalisé ou thème e-commerce",
      "Catalogue produit jusqu'à 25 produits",
      "Paiements en ligne",
      "Design mobile responsive",
      "Hébergement et nom de domaine pendant 1 an",
      "SEO e-commerce de base",
    ],
    icon: FaCrown,
    color: "from-blue-400 to-blue-600",
    popular: true,
    description:
      "Parfait pour les entreprises souhaitant vendre des produits en ligne avec des fonctionnalités de base de commerce électronique.",
  },
  {
    title: "Site Dynamique - Forfait de base",
    price: "3,500 Dhs",
    features: [
      "Développement de fonctionnalités dynamiques (bases de données, formulaires)",
      "Design mobile responsive et interactif",
      "Pages de contenu dynamique (Blog, Actualités)",
      "Fonctionnalité de recherche avancée",
      "Hébergement et nom de domaine pendant 1 an",
    ],
    icon: FaLaptopCode,
    color: "from-purple-400 to-purple-600",
    description:
      "Idéal pour les sites nécessitant des fonctionnalités dynamiques et une interaction avec les utilisateurs (Blog, Forum, Actualités).",
  },
];

const PricingPlans = () => {
  return (
    <section
      id="pricing"
      className="py-20 px-4 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choisissez votre forfait
          </h2>
          <motion.div
            className="h-1 w-24 bg-blue-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col relative overflow-hidden ${
                  plan.popular ? "border-2 border-purple-500" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-purple-500">
                    Popular
                  </Badge>
                )}
                <CardHeader
                  className={`bg-gradient-to-r ${plan.color} text-white`}
                >
                  <motion.div
                    className="absolute top-4 left-4 text-4xl"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <plan.icon />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-center mt-8">
                    {plan.title}
                  </CardTitle>
                  <div className="text-4xl font-bold text-center mt-4">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent className="mt-6 flex-grow">
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + idx * 0.1,
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-green-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300 transform hover:scale-105">
                    <a
                      href="https://wa.me/+212645288216"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
