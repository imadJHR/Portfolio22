import { motion } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineDollar,
  AiOutlineMail,
} from "react-icons/ai";
import NavLink from "./NavLink";
import logo from "../assets/Logo.2.png"

function Navbar() {
  const navItems = [
    { label: "Acceuil", icon: AiOutlineHome, href: "#home" },
    { label: "À propos", icon: AiOutlineUser, href: "#about" },
    { label: "Projets", icon: AiOutlineFolderOpen, href: "#projects" },
    { label: "Contact", icon: AiOutlineMail, href: "#contact" },
    { label: "Tarifs", icon: AiOutlineDollar, href: "#pricing" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed max-w-7xl mx-auto top-0 left-0 right-0 hidden md:block rounded-full mt-6 bg-white/80 backdrop-blur-md shadow-lg z-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.span
              className="text-xl font-bold text-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={logo}
                className="w-16 h-16 object-cover mx-auto mb-2"
              />
            </motion.span>
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  isMobile={false}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 md:hidden bg-white/80 backdrop-blur-md shadow-lg z-50"
      >
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isMobile={true}
            />
          ))}
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
