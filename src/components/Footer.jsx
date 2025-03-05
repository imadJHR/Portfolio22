import { motion } from "framer-motion";
import { Github, Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Logo.2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/imadJHR",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:imadjohar4@gmail.com",
      label: "Email",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/dev.option/",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.link/kfat6c",
      label: "WhatsApp",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-purple-600 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <img
              src={logo}
              alt="Logo Semsi Media"
              width={120}
              height={50}
              className="bg-white rounded-full p-2"
            />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/nfc"
                  className="text-white hover:text-purple-300 transition-colors duration-300"
                >
                  Conception de Cartes NFC
                </Link>
              </li>
              <li>
                <Link
                  to="/gestion-instagram"
                  className="text-white hover:text-purple-300 transition-colors duration-300"
                >
                  Gestion de Comptes Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="/marketing-digital"
                  className="text-white hover:text-purple-300 transition-colors duration-300"
                >
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link
                  to="/site-web"
                  className="text-white hover:text-purple-300 transition-colors duration-300"
                >
                  Création de Site Web
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex space-x-6 justify-center md:justify-start">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#9b87f5" }}
                  className="text-white hover:text-purple-300 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/20 text-center"
        >
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Semsi Media. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;