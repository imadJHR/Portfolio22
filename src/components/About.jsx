import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiShadcnui,
  SiVite,
} from "react-icons/si";

const technologies = [
  { icon: SiVite, name: "Vite.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiShadcnui, name: "Shacdn UI" },
];

const AboutMe = () => {
  return (
    <section
      className="py-20 bg-gray-900 min-h-screen items-center justify-center flex text-white"
      id="about"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col gap-6 md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm Imad Johar</h3>
            <p className="text-gray-300 mb-4">
              Hello! I’m Imad Johar, a passionate Web Developer specialized in
              MERN stack development. With a solid foundation in web integration
              and a keen eye for detail, I craft dynamic, user-friendly, and
              responsive web applications. I hold certifications from GoMyCode
              and have experience working with modern tools like Tailwind CSS
              and ShadCN, ensuring clean and scalable code. At just 20 years
              old, I’m a baccalaureate graduate with a drive to innovate and
              deliver high-quality solutions. Currently, I’m focused on creating
              sleek e-commerce platforms, integrating intuitive dashboards, and
              enhancing user experiences. Whether it's building full-stack
              solutions or solving complex web challenges, I bring creativity,
              dedication, and technical expertise to every project. Let’s build
              something amazing together! 🚀
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              My Tech Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <tech.icon className="text-4xl mb-2 text-blue-400" />
                  <span className="text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
