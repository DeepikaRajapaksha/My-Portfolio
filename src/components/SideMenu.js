import React, { useState } from 'react';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed right-0 top-0 h-full w-64 bg-gray-200 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      <div className="flex flex-col items-center justify-center h-full">
        <a href="#top">Home</a>
        <a href="#aboutme">About me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact me</a>
      </div>
    </div>
  );
};

export default SideMenu;
