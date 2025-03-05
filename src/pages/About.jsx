import { motion } from "framer-motion";
import {
  FiMonitor,
  FiTrendingUp,
  FiInstagram,
  FiCreditCard,
  FiAward,
  FiUsers,
  FiClock,
  FiGlobe,
  FiHeart,
  FiSmile,
  FiThumbsUp,
} from "react-icons/fi";

const services = [
  {
    icon: FiMonitor,
    title: "Création de Site Web",
    description: "Des sites web modernes et responsifs adaptés à vos besoins.",
  },
  {
    icon: FiTrendingUp,
    title: "Marketing Digital",
    description:
      "Stratégies de marketing digital pour booster votre présence en ligne.",
  },
  {
    icon: FiInstagram,
    title: "Gestion Compte Instagram",
    description: "Gestion professionnelle de votre présence sur Instagram.",
  },
  {
    icon: FiCreditCard,
    title: "Conception Carte NFC",
    description: "Cartes NFC innovantes pour votre entreprise ou événement.",
  },
];

const stats = [
  { icon: FiAward, value: "50+", label: "Projets Réussis" },
  { icon: FiUsers, value: "30+", label: "Clients Satisfaits" },
  { icon: FiClock, value: "3+", label: "Années d'Expérience" },
  { icon: FiGlobe, value: "5+", label: "Villes Servies" },
];

const testimonials = [
  {
    name: "Karim Bensaid",
    company: "CEO de KBM Tech",
    quote:
      "Nemsi Media a transformé notre présence en ligne. Leur équipe est professionnelle et créative.",
    icon: FiThumbsUp,
  },
  {
    name: "Amina El Fassi",
    company: "Fondatrice de Amina Cosmetics",
    quote:
      "Leur gestion de nos réseaux sociaux a augmenté notre engagement de 200% en seulement 3 mois.",
    icon: FiHeart,
  },
  {
    name: "Omar Zekri",
    company: "Directeur de Zekri Logistics",
    quote:
      "Le site web qu'ils ont créé pour nous est à la fois beau et fonctionnel. Je recommande vivement Nemsi Media.",
    icon: FiSmile,
  },
];

const partners = [
  { name: "Google", logo: "/partners/google.png" },
  { name: "Facebook", logo: "/partners/facebook.png" },
  { name: "Shopify", logo: "/partners/shopify.png" },
  { name: "HubSpot", logo: "/partners/hubspot.png" },
];

export default function About() {
  return (
    <div className="min-h-screen py-36 bg-gradient-to-br from-blue-50 to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section: Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            À Propos de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Nemsi Media
            </span>
          </h1>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>{" "}
          {/* Signal Design */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nemsi Media est une agence digitale innovante basée à Casablanca,
            dédiée à propulser votre entreprise vers de nouveaux sommets dans
            l'ère numérique.
          </p>
        </motion.div>

        {/* Section: Notre Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            Notre Mission
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>{" "}
          {/* Signal Design */}
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
            Chez Nemsi Media, notre mission est de démocratiser l'accès aux
            solutions digitales de haute qualité pour les entreprises
            marocaines. Nous nous engageons à fournir des services sur mesure
            qui allient créativité, technologie et stratégie pour aider nos
            clients à se démarquer dans un monde numérique en constante
            évolution.
          </p>
        </motion.section>

        {/* Section: Nos Valeurs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            Nos Valeurs
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>{" "}
          {/* Signal Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Nous restons à la pointe des dernières tendances digitales pour offrir des solutions avant-gardistes.",
              },
              {
                title: "Intégrité",
                description:
                  "Nous privilégions la transparence et l'honnêteté dans toutes nos interactions avec nos clients.",
              },
              {
                title: "Excellence",
                description:
                  "Nous visons l'excellence dans chaque projet, en dépassant systématiquement les attentes de nos clients.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section: Notre Histoire */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            Notre Histoire
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>{" "}
          {/* Signal Design */}
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
            Fondée en 2020 par une équipe de passionnés du digital, Nemsi Media
            est née de la volonté de combler un manque sur le marché marocain :
            une agence capable de fournir des solutions digitales complètes et
            accessibles aux PME. Depuis, nous avons accompagné avec succès plus
            de 30 entreprises dans leur transformation digitale, en leur offrant
            des services sur mesure et un accompagnement personnalisé.
          </p>
        </motion.section>

        {/* Section: Nos Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            Nos Services
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>{" "}
          {/* Signal Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section: Notre Équipe */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            Notre Équipe
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>{" "}
          {/* Signal Design */}
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-8">
            Notre équipe est composée de professionnels passionnés et
            expérimentés, prêts à transformer vos idées en réalité.
          </p>
        </motion.section>

        {/* Section: Témoignages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>{" "}
          {/* Signal Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <testimonial.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section: Partenaires */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            Nos Partenaires
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>{" "}
          {/* Signal Design */}
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="h-12"
              />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
