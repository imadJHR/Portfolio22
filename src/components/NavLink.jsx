import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function NavLink({ href, icon: Icon, label, isMobile }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsActive(rect.top <= 100 && rect.bottom >= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);

  return (
    <motion.a
      href={href}
      className={`relative group ${
        isMobile ? 'flex flex-col items-center p-2' : 'px-4 py-2'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isMobile ? (
        <>
          <Icon className={`text-2xl ${isActive ? 'text-primary' : 'text-gray-600'} group-hover:text-primary transition-colors`} />
          <span className={`text-xs mt-1 ${isActive ? 'text-primary' : 'text-gray-600'} group-hover:text-primary transition-colors`}>
            {label}
          </span>
        </>
      ) : (
        <>
          <span className={`${isActive ? 'text-primary' : 'text-gray-600'} group-hover:text-primary transition-colors`}>
            {label}
          </span>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isActive ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}
    </motion.a>
  );
}

export default NavLink;