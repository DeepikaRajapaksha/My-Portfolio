import React, { useState, useEffect } from 'react';
import profilePic from '../assets/img/deepika.png'; // Adjust the path accordingly

const Header = () => {
  const [currentText, setCurrentText] = useState('');
  const texts = [
    'UI/UX Designer',
    'Front-End Developer',
    'Software Developer',
    'Passionate Designer',
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
    <header className="header w-full min-h-screen flex items-center justify-between px-40 sm:px-80">
      
      {/* Left side content */}
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold dark:text-white">Hi! I'm Deepika Sewwandi</h1>
        
        {/* Typing Effect */}
        <h2 className="text-2xl dark:text-white">
          {currentText}
        </h2>
        
        <h3 className="text-2xl dark:text-white">I specialize in creating seamless, user-friendly digital experiences while building robust applications with modern technologies.</h3>
        
        <div className="flex gap-4 mt-4">
          <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Me</a>
          {/* Download CV Button */}
          <a 
            href="/assets/Deepika Sewwandi CV.pdf"  // Path to the PDF in the public folder
            download="Deepika Sewwandi CV.pdf"  // Specify the download file name
            className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex-shrink-0">
        <img src={profilePic} alt="Profile" className="rounded-full w-1000 sm:w-1000 lg:w-1000" />
      </div>
    </header>
  );
};

export default Header;




