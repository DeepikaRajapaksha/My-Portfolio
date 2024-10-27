import React, { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-10">
      <h2 className="text-4xl font-bold text-center font-Ovo text-blue-900 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        
        {/* Project Cards */}
        <div className="p-6 bg-gray-100 bg-opacity-70 shadow-md rounded-lg dark:bg-darkHover">
          <h3 className="text-2xl font-semibold text-center text-blue-900 dark:text-white">Project 1 - Deepika's Portfolio</h3>
        </div>

        <div className="p-6 bg-gray-100 bg-opacity-70 shadow-md rounded-lg dark:bg-darkHover">
          <h3 className="text-2xl font-semibold text-center text-blue-900 dark:text-white">Project 2 - E-commerce Website</h3>
        </div>

        <div className="p-6 bg-gray-100 bg-opacity-70 shadow-md rounded-lg dark:bg-darkHover">
          <h3 className="text-2xl font-semibold text-center text-blue-900 dark:text-white">Project 2 - E-commerce Website</h3>
        </div>

        {showMore && (
          <>
            <div className="p-6 bg-gray-100 bg-opacity-70 shadow-md rounded-lg dark:bg-darkHover">
              <h3 className="text-2xl font-semibold text-center text-blue-900 dark:text-white">Project 3 - Mobile App</h3>
            </div>
            <div className="p-6 bg-gray-100 bg-opacity-70 shadow-md rounded-lg dark:bg-darkHover">
              <h3 className="text-2xl font-semibold text-center text-blue-900 dark:text-white">Project 4 - Learning Platform</h3>
            </div>
          </>
        )}
      </div>
      
      {/* Show More/Less Button */}
      <div className="flex justify-center">
        <button 
          onClick={() => setShowMore(!showMore)} 
          className="mt-6 px-4 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black dark:border-white"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default Projects;
