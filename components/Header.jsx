'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'boxicons/css/boxicons.min.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  }

  // --- NEW: Scroll Handler ---
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for fixed header (approx 60px-80px)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu after clicking
      setIsOpen(false);
    }
  };

  return (
    <header className="py-1 px-7 flex justify-between items-center fixed 
    top-0 z-50 w-full border-b-[0.3px] border-[#babaff] bg-black">

      {/* left section */}
      <div className="flex lg:gap-14 gap-4 items-center">
        <img className="md:w-16 w-12 cursor-pointer" src="/images/logo.png" alt="logo-img" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

        <div className="hidden md:flex gap-5 items-center">
          <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600
          rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
            View Poster
          </button>

          <button className="h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-400
          rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
            View Rules
          </button>
        </div>
      </div>

      {/* right section */}
      <nav className='hidden md:flex lg:gap-8 gap-4'>
        <button
          onClick={() => scrollToSection('avatar-section')}
          className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 
          after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i className='bx bxs-user-circle'></i> Avatar
        </button>
        <button
          onClick={() => scrollToSection('arena-section')}
          className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 
          after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i className='bx  bxs-diamond'  ></i>  Arena
        </button>
        <button
          onClick={() => scrollToSection('beyond-section')}
          className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 
          after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i className='bx  bxs-chevrons-up'  ></i>  Beyond
        </button>
        <button
          onClick={() => scrollToSection('shop-section')}
          className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 
          after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i className='bx  bxs-store'  ></i>  Shop
        </button>
      </nav>

      {/* mobile menu buttons */}
      <button onClick={toggleMobileMenu} className='text-3xl p-2 md:hidden relative z-50 flex items-center justify-center'>
        <AnimatePresence mode="wait">
          <motion.i
            key={isOpen ? 'close' : 'menu'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}
          />
        </AnimatePresence>
      </button>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
            className='fixed top-14 right-0 left-0 bg-black p-5 md:hidden border-b-[0.3px] border-[#babaff]'
          >
            <nav className='flex flex-col gap-4 items-center'>
              <button onClick={() => scrollToSection('avatar-section')} className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 
          after:bottom-0 after:transition-all hover:after:w-full text-nowrap"><i className='bx bxs-user-circle'></i>
                Avatar</button>
              <button onClick={() => scrollToSection('arena-section')} className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 
          after:bottom-0 after:transition-all hover:after:w-full text-nowrap"><i className='bx bxs-diamond'></i> Arena</button>
              <button onClick={() => scrollToSection('beyond-section')} className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 
          after:bottom-0 after:transition-all hover:after:w-full text-nowrap"><i className='bx bxs-chevrons-up'></i> Beyond</button>
              <button onClick={() => scrollToSection('shop-section')} className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 
          after:bottom-0 after:transition-all hover:after:w-full text-nowrap"><i className='bx bxs-store'></i> Shop</button>
            </nav>
            <div className='flex flex-col gap-3 w-full mt-4'>
              <button className='h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600
          rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>Shop NOW</button>
              <button className='h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-400
          rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>View Rules</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header;