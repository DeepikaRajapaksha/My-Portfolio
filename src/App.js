import React, { useEffect, useState } from 'react';
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
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for SideMenu visibility

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Check if the theme is dark or light, then apply the particle effect accordingly
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDarkTheme(isDarkMode);

    const particleSettings = isDarkMode
      ? { // Dark theme particle settings (space/star-like)
          particles: {
            number: {
              value: 200, // More particles for stars
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff', // White particles (stars)
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 1, // Bright stars
              random: false,
            },
            size: {
              value: 2, // Smaller size for stars
              random: true,
            },
            move: {
              enable: true,
              speed: 0.5, // Slow star movement
              direction: 'none',
              straight: false,
            },
          },
          retina_detect: true,
        }
      : { // Light theme particle settings (snow)
          particles: {
            number: {
              value: 100, // Fewer particles for snow
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff', // White snowflakes
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.7, // Slightly transparent snowflakes
              random: true,
            },
            size: {
              value: 5, // Larger size for snowflakes
              random: true,
            },
            move: {
              enable: true,
              speed: 1, // Slower falling snowflakes
              direction: 'bottom', // Snow falls down
              straight: false,
            },
          },
          retina_detect: true,
        };

    // Initialize particles.js using the chosen settings
    window.particlesJS('particles-js', particleSettings);
  }, [isDarkTheme]); // Re-run effect when the theme changes

  // Toggle menu visibility
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="App">
      {/* Particle background */}
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '-1' }}></div>

      {/* Main Content */}
      <Navbar openMenu={openMenu} /> {/* Pass openMenu to Navbar to trigger menu opening */}
      <SideMenu isOpen={isMenuOpen} closeMenu={closeMenu} /> {/* Pass isOpen and closeMenu props to SideMenu */}
      <Header />
      <AboutMe />
      <EducationAndVolunteering />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
