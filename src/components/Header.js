import React from 'react';
import profilePic from '../assets/img/deepika.png'; // Adjust the path accordingly

const Header = () => {
  return (
    <header className="header w-full text-center min-h-screen flex flex-col items-center justify-center gap-4">
      <img src={profilePic} alt="Profile" className="rounded-full w-24 sm:w-32" />
      <h1 className="text-3xl font-bold dark:text-white">Hi! I'm Deepika Sewwandi</h1>
      <h2 className="text-2xl dark:text-white">Software Developer. Passionate Designer. Lifelong Learner.</h2>
      <div className="flex gap-4 mt-4">
        <a href="#contact" className="contact-btn">Contact Me</a>
        <a href="#downloadcv" className="contact-btn">Download CV</a>
      </div>
    </header>
  );
};

export default Header;

