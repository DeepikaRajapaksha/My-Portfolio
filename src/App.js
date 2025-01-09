import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EducationAndVolunteering from './components/EducationAndVolunteering';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThankYou from './components/ThankYou';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for SideMenu visibility

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDarkTheme(isDarkMode);

    const particleSettings = isDarkMode
      ? {
          particles: {
            number: { value: 200, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 1 },
            size: { value: 2, random: true },
            move: { enable: true, speed: 0.5, direction: 'none' },
          },
          retina_detect: true,
        }
      : {
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.7, random: true },
            size: { value: 5, random: true },
            move: { enable: true, speed: 1, direction: 'bottom' },
          },
          retina_detect: true,
        };

    window.particlesJS('particles-js', particleSettings);
  }, [isDarkTheme]);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Particle background */}
                <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '-1' }}></div>

                {/* Show Navbar and SideMenu only on the main page */}
                <Navbar toggleMenu={openMenu} />
                <SideMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
                <Header />
                <AboutMe />
                <EducationAndVolunteering />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

