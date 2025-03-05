import { motion } from "framer-motion";
import logo from "../assets/Logo.2.png"
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-20 bg-gray-50 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img
            src={logo}
            alt="About Us"
            className="w-full rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-purple-400 mb-6">
            À propos de <span className="text-purple-600">Nemsi Media</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Nous sommes une agence de marketing digital spécialisée dans la création de stratégies
            innovantes pour propulser votre entreprise en ligne. Grâce à notre expertise en SEO,
            publicité digitale et branding, nous vous aidons à atteindre vos objectifs.
          </p>
          <div className="flex gap-4">
            <Link
              to="/devis"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 transition rounded-lg text-white font-medium"
            >
              Travaillons ensemble
            </Link>
            <a
              href="#offers"
              className="px-6 py-3 border bg-white text-purple-500 border-purple-600 hover:bg-purple-600 transition rounded-lg hover:text-white font-medium"
            >
              Nos services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
