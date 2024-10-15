import React from 'react';

const Header = () => {
  return (
    <header className="header w-full text-center min-h-screen flex flex-col items-center justify-center gap-4">
      <img src="/assets/img/profile-pic-deepika.png" alt="Profile" className="rounded-full w-24 sm:w-32" />
      <h1 className="text-3xl font-Ovo dark:text-white">Hi! I'm Deepika Sewwandi</h1>
      <h2 className="text-2xl font-Ovo dark:text-white">Software Developer. Passionate Designer. Lifelong Learner.</h2>
      <div className="flex gap-4 mt-4">
        <a href="#contact" className="contact-btn">Contact Me</a>
        <a href="#downloadcv" className="contact-btn">Download CV</a>
      </div>
    </header>
  );
};

export default Header;
