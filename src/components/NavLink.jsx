"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function NavLink({ href, icon: Icon, label, isMobile }) {
  // For desktop navigation
  if (!isMobile) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
        <Link to={href} className="relative group flex flex-col items-center">
          <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors duration-300">
            {label}
          </span>
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
            whileHover={{ width: "100%" }}
          />
        </Link>
      </motion.div>
    )
  }

  // For mobile navigation
  return (
    <Link
      to={href}
      className="flex flex-col items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
    >
      <Icon size={20} />
      <span className="text-xs mt-1">{label}</span>
    </Link>
  )
}

export default NavLink

