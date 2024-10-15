import React, { useState, useEffect } from 'react';
import { toggleTheme, initializeTheme } from '../utils/themeUtils';  // Import functions

const Navbar = ({ toggleMenu }) => {  // Accept toggleMenu as prop
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    initializeTheme();  // Initialize the theme on page load
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 ${scroll ? 'bg-white shadow-lg dark:bg-darkTheme' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-6 py-4">
        <img src="/assets/img/logo_b.png" className="w-40" alt="Logo" />
        <ul className="hidden md:flex items-center gap-6">
          <li><a href="#top">Home</a></li>
          <li><a href="#aboutme">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
        <div className="flex items-center">
          <button onClick={toggleTheme} className="ml-4">
            <img src={scroll ? '/assets/img/sun.png' : '/assets/img/moon.png'} alt="Toggle Theme" />
          </button>
          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <img src="/assets/img/menu.png" alt="Menu Icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
