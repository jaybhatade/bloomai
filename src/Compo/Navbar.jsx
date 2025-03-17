import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Always show nav on mobile, only check scroll on desktop
      if (window.innerWidth > 768) {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(true); // Always visible on mobile
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: 'easeInOut' } }
  };

  const linkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navVariants}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Company Name */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-white text-xl font-bold"
              >
                WealthAI
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6">
                <motion.a
                  href="#home"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </motion.a>
                <motion.a
                  href="#about"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </motion.a>
              </div>

              {/* Get Started Button */}
              <motion.a 
                href="#get-started" 
                variants={linkVariants}
                whileHover="hover"
                className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button 
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
              >
                {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="md:hidden overflow-hidden"
                >
                  <motion.a 
                    href="#home" 
                    variants={linkVariants}
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Home
                  </motion.a>
                  <motion.a 
                    href="#about" 
                    variants={linkVariants}
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    About
                  </motion.a>
                  <motion.a 
                    href="#get-started" 
                    variants={linkVariants}
                    className="block px-4 py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Get Started
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
