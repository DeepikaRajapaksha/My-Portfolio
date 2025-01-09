import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBehance, FaFacebook } from 'react-icons/fa'; // Import social icons
import profilePic from '../assets/img/deepika.png'; // Adjust the path accordingly

const Header = () => {
  const [currentText, setCurrentText] = useState('');
  const texts = [
    'UI/UX Designer',
    'Front-End Developer',
    'Software Developer',
    'QA Enthusiast',
    'Project Management Enthusiast',
    'Lifelong Learner',
  ];

  const typingSpeed = 100; // Typing speed in milliseconds
  const delayBetweenTexts = 2000; // Delay before showing the next text

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let currentTimeout;

    const typeNextText = () => {
      if (charIndex < texts[textIndex].length) {
        setCurrentText((prev) => prev + texts[textIndex].charAt(charIndex));
        charIndex++;
        currentTimeout = setTimeout(typeNextText, typingSpeed);
      } else {
        setTimeout(() => {
          setCurrentText('');
          charIndex = 0;
          textIndex = (textIndex + 1) % texts.length;
          typeNextText();
        }, delayBetweenTexts);
      }
    };

    typeNextText();

    return () => clearTimeout(currentTimeout); // Cleanup the timeout
  }, []);

  return (
    <header className="header w-full min-h-screen flex flex-col items-center justify-center md:flex-row md:justify-center p-6 md:p-12 lg:p-20">
      {/* Content section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white">
          Hi! I'm Deepika Sewwandi
        </h1>
        
        {/* Typing Effect */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200">
          {currentText}
        </h2>
        
        <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-md">
          I specialize in creating seamless, user-friendly digital experiences while building robust applications with modern technologies.
        </h3>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-4 text-2xl text-gray-600 dark:text-gray-300"> {/* Increased gap to 6 */}
          <a 
            href="https://www.linkedin.com/in/deepika-sewwandi-799aa6343/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/DeepikaRajapaksha" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-800 dark:hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.behance.net/deepika_sewwandi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500"
          >
            <FaBehance />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=100083802640181&mibextid=ZbWKwL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600"
          >
            <FaFacebook />
          </a>
        </div>

        <div className="flex gap-4 mt-6">
          <a href="#contact" className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600">
            Contact Me
          </a>
          {/* Download CV Button */}
          <a 
            href="/assets/Deepika Sewwandi CV.pdf"
            download="Deepika Sewwandi CV.pdf"
            className="border border-blue-500 text-blue-500 px-5 py-2 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Image section */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 lg:mr-12">
        <img src={profilePic} alt="Profile" className="rounded-full w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80" />
      </div>
    </header>
  );
};

export default Header;

