import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg' 
        : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/Public/financify-logo.png" 
              alt="Financify Logo" 
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-900 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="pages/about-us.html" 
              className="text-gray-900 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="pages/our-services.html" 
              className="text-gray-900 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="pages/mortgage-calculator.html" 
              className="text-gray-900 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
            >
              Calculator
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="pages/FAQS.html" 
              className="text-gray-900 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
            >
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="pages/career.html" 
              className="text-gray-900 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
            >
              Career
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="pages/contatct-us.html" 
              className="btn-primary"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-primary-500 focus:outline-none focus:text-primary-500 transition-colors duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
            <a 
              href="#home" 
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-900 hover:text-primary-500 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="pages/about-us.html" 
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-900 hover:text-primary-500 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
            >
              About Us
            </a>
            <a 
              href="pages/our-services.html" 
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-900 hover:text-primary-500 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
            >
              Services
            </a>
            <a 
              href="pages/mortgage-calculator.html" 
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-900 hover:text-primary-500 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
            >
              Calculator
            </a>
            <a 
              href="pages/FAQS.html" 
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-900 hover:text-primary-500 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
            >
              FAQs
            </a>
            <a 
              href="pages/career.html" 
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-900 hover:text-primary-500 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
            >
              Career
            </a>
            <a 
              href="pages/contatct-us.html" 
              onClick={closeMenu}
              className="block mx-3 my-2 btn-primary text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;