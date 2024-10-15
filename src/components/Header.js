import React from 'react';

const Header = () => {
  return (
    <header className="w-full text-center min-h-screen flex flex-col items-center justify-center gap-4">
      <img src="/assets/img/profile-pic.png" alt="Profile" className="rounded-full w-24 sm:w-32" />
      <h1 className="text-3xl">Hi! I'm Deepika Sewwandi</h1>
      <h2 className="text-2xl">Software Developer. UI/UX Engineer. Lifelong Learner.</h2>
      <div className="flex gap-4">
        <a href="#contact" className="px-6 py-3 bg-black text-white">Contact Me</a>
        <a href="#downloadcv" className="px-6 py-3 border-2 border-black">Download CV</a>
      </div>
    </header>
  );
};

export default Header;
