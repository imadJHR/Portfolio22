import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FishIcon as Fly } from "lucide-react";
import TechMarquee from "./TechMarquee";

const DeveloperHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
      id="home"
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-blue-500 pointer-events-none z-50 hidden md:block"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Background Fly Icon */}
      <motion.div
        className="absolute text-gray-700 opacity-10"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 40, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Fly size={48} />
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 flex flex-col justify-center items-center min-h-screen relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm {"<IMAD JOHAR/>"}
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl mb-8 text-blue-400 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Web Developer & UI/UX Enthusiast
        </motion.h2>

        <motion.p
          className="text-xl mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting beautiful and functional web experiences with cutting-edge
          technologies.
        </motion.p>

        {/* Stats */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          
          <div className="text-center">
            <CountUp
              end={2}
              duration={2.5}
              decimals={1}
              className="text-4xl font-bold text-blue-400"
            />
            <p className="text-sm uppercase">Years Experience</p>
          </div>
          <div className="text-center">
            <CountUp
              end={100}
              duration={2.5}
              suffix="%"
              className="text-4xl font-bold text-blue-400"
            />
            <p className="text-sm uppercase">Client Satisfaction</p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects"> View My Work</a>
        </motion.button>
        {/* Tech Marquee */}
        <motion.div
          className="w-full mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <TechMarquee />
        </motion.div>
      </div>
    </div>
  );
};

export default DeveloperHero;
