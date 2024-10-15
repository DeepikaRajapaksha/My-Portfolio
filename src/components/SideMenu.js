import React from 'react';

const SideMenu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`fixed right-0 top-0 h-full bg-gray-100 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <button onClick={closeMenu} className="absolute top-6 right-6">
        <img src="/assets/img/close.png" alt="Close" />
      </button>
      <ul className="flex flex-col items-center justify-center h-full">
        <li><a href="#top" onClick={closeMenu}>Home</a></li>
        <li><a href="#aboutme" onClick={closeMenu}>About Me</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
      </ul>
    </div>
  );
};

export default SideMenu;
