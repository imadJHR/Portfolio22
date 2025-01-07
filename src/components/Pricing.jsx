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
    icon: FaRocket,
    color: "from-emerald-400 to-teal-600",
    description:
      "Idéal pour les petites entreprises ou les indépendants qui souhaitent un site simple et professionnel pour se présenter en ligne.",
  },
  {
    title: "Site E-commerce - Forfait de base",
    price: "4000 Dhs",
    features: [
      "Design personnalisé ou thème e-commerce",
      "Catalogue produit jusqu'à 20 produits",
      "Paiements en ligne",
      "Design mobile responsive",
      "Hébergement et nom de domaine pendant 1 an",
      "SEO e-commerce de base",
    ],
    icon: FaCrown,
    color: "from-amber-400 to-orange-600",
    popular: true,
    description:
      "Parfait pour les entreprises souhaitant vendre des produits en ligne avec des fonctionnalités de base de commerce électronique.",
  },
  {
    title: "Landing Page - Forfait de base",
    price: "1000 Dhs",
    features: [
      "Design professionnel et percutant",
      "Optimisation pour la conversion (CTA)",
      "Design mobile responsive",
      "Hébergement et nom de domaine pendant 1 an",
      "SEO de base",
    ],
    icon: FaDesktop,
    color: "from-indigo-400 to-purple-600",
    description:
      "Idéal pour promouvoir un événement, un produit ou une campagne spécifique avec une page unique et optimisée pour la conversion.",
  },
];


const PricingPlans = () => {
  return (
    <section
      id="pricing"
      className="py-20 px-4 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"
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
            className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto"
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
                className={`h-full flex flex-col relative overflow-hidden bg-white/10 backdrop-blur-lg ${
                  plan.popular ? "border-2 border-amber-400" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-amber-400 text-gray-900">
                    Populaire
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
                <CardContent className="mt-6 flex-grow text-white">
                  <p className="text-gray-300 mb-4">{plan.description}</p>
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
                          className="w-5 h-5 text-green-400 flex-shrink-0"
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
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-amber-400 to-orange-600 hover:from-amber-500 hover:to-orange-700 text-gray-900 font-semibold transition-all duration-300 transform hover:scale-105">
                    <a
                      target="_blank"
                      href="https://wa.me/212645288216"
                      className="hover:text-white"
                    >
                      Commencer
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
