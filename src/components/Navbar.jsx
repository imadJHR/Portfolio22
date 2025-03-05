"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/Logo.2.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Blog", href: "/blogs" },
  ];

  const serviceLinks = [
    { label: "Conception de Cartes NFC", href: "/nfc" },
    { label: "Gestion de Comptes Instagram", href: "/gestion-instagram" },
    { label: "Marketing Digital", href: "/marketing-digital" },
    { label: "Création de Site Web", href: "/site-web" },
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      style={{ minHeight: "80px" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <img src={logo || "/placeholder.svg"} alt="logo" className="w-12 h-12 object-contain" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled ? "text-gray-800 hover:text-purple-600" : "text-white hover:text-purple-400"
              } hover:bg-white/10 backdrop-blur-sm`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <motion.button
              onClick={() => toggleDropdown("services")}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled ? "text-gray-800 hover:text-purple-600" : "text-white hover:text-purple-400"
              } hover:bg-white/10 backdrop-blur-sm`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
              />
            </motion.button>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
                >
                  {serviceLinks.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 transition-colors flex items-center justify-between group"
                    >
                      {service.label}
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/devis">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                scrolled
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-white text-purple-600 hover:bg-purple-600 hover:text-white"
              } shadow-md`}
            >
              Démarrer mon projet
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden bg-purple-600 relative h-10 w-10 flex items-center justify-center p-2 rounded-full shadow-md"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full overflow-y-auto">
                <div className="flex justify-end p-4">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-purple-100 text-purple-600"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                <nav className="flex flex-col px-4 py-8 space-y-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div>
                    <button
                      onClick={() => toggleDropdown("mobileServices")}
                      className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors flex items-center justify-between w-full"
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${activeDropdown === "mobileServices" ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobileServices" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 pl-4 space-y-2"
                        >
                          {serviceLinks.map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-gray-600 hover:text-purple-600 transition-colors py-2"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </nav>
                <div className="mt-auto p-4">
                  <Link to="/devis" onClick={() => setMobileMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 rounded-full text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-md"
                    >
                      Démarrer mon projet
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;