import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/imadJHR",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:imadjohar4@gmail.com",
      label: "Email",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/dev.option/",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.link/kfat6c",
      label: "whatsapp",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1A1F2C] text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">A propos de moi</h3>
            <p className="text-[#C8C8C9] text-sm leading-relaxed">
              Passionate developer crafting beautiful and functional web experiences.
              Always learning and exploring new technologies to create better solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-[#C8C8C9] hover:text-white transition-colors duration-300">
                  Projets
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#C8C8C9] hover:text-white transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#C8C8C9] hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#9b87f5" }}
                  className="text-[#C8C8C9] hover:text-white transition-colors duration-300"
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
          className="mt-8 pt-8 border-t border-[#8E9196]/20 text-center"
        >
          <p className="text-[#8E9196] text-sm">
            © {new Date().getFullYear()} Your Imad Johar . Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;