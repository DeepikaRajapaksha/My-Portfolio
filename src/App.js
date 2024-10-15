import React, { useState } from 'react';
import Navbar from './components/Navbar';  // Import Navbar
import SideMenu from './components/SideMenu';  // Import SideMenu
import Header from './components/Header';  // Import Header
import AboutMe from './components/AboutMe';  // Import AboutMe
import Skills from './components/Skills';  // Import Skills
import Projects from './components/Projects';  // Import Projects
import Contact from './components/Contact';  // Import Contact
import Footer from './components/Footer';  // Import Footer
import AOS from 'aos';  // For animations
import 'aos/dist/aos.css';  // AOS styles

// Initialize AOS (Animate On Scroll) library for animations
AOS.init({ duration: 1000 });

function App() {
  const [menuOpen, setMenuOpen] = useState(false);  // Manage mobile menu state

  // Function to open/close the SideMenu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Navbar at the top */}
      <Navbar toggleMenu={toggleMenu} />  {/* Pass toggleMenu function */}
      
      {/* SideMenu, passed isOpen state */}
      <SideMenu isOpen={menuOpen} closeMenu={toggleMenu} />  {/* Pass state and close function */}
      
      {/* Main Content Sections */}
      <Header />        {/* Header section (profile intro, links) */}
      <AboutMe />       {/* About Me section */}
      <Skills />        {/* Skills section */}
      <Projects />      {/* Projects section */}
      <Contact />       {/* Contact form section */}
      
      {/* Footer at the bottom */}
      <Footer />        {/* Footer with social links */}
    </div>
  );
}

export default App;
