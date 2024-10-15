import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  };

  return (
    <nav className={`fixed top-0 w-full z-50 ${scroll ? 'bg-white shadow-lg' : ''}`}>
      <div className="flex justify-between items-center px-6 py-4">
        <img src="/assets/img/logo_b.png" className="w-40" alt="Logo" />
        <ul className="hidden md:flex items-center gap-6">
          <li><a href="#top">Home</a></li>
          <li><a href="#aboutme">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
