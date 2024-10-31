import React, { useState, useEffect } from 'react';
import { toggleTheme, initializeTheme } from '../utils/themeUtils';

const Navbar = ({ toggleMenu }) => {
  const [scroll, setScroll] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const themeInitialized = initializeTheme(); 
    setIsDarkTheme(themeInitialized); 

    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleTheme = () => {
    toggleTheme(); 
    setIsDarkTheme(!isDarkTheme); 
  };

  return (
    <nav className={`fixed top-0 w-full z-50 ${scroll ? 'bg-white shadow-lg dark:bg-spaceDark' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-6 py-4">
        <img src={require('../assets/img/logo (2).png')} className="w-40" alt="Logo" />
        
        <ul className="hidden md:flex items-center gap-7 text-lg"> {/* Navigation links */}
          <li><a href="#top" className="hover:text-blue-500">Home</a></li>
          <li><a href="#aboutme" className="hover:text-blue-500">About Me</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact Me</a></li>
        </ul>

        <div className="flex items-center space-x-7">
          {/* Theme Toggle Button */}
          <button onClick={handleToggleTheme} className="ml-3">
            <img 
              src={isDarkTheme ? require('../assets/img/moon.png') : require('../assets/img/sun.png')} 
              alt="Toggle Theme" className="w-10" 
            />
          </button>

          {/* Download CV Button */}
          <a 
            href="/assets/Deepika Sewwandi CV.pdf"  // Path to the PDF in the public folder
            download="Deepika Sewwandi CV.pdf"  // Specify the download file name
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <img src={require('../assets/img/menu.png')} className="w-10" alt="Menu Icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
