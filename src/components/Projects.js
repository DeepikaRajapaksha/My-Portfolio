import React, { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-10 bg-white dark:bg-darkTheme">
      <h2 className="text-4xl font-bold text-center font-Ovo dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="project-card p-4 bg-gray-100 dark:bg-darkHover">Project 1 - Deepika's Portfolio</div>
        <div className="project-card p-4 bg-gray-100 dark:bg-darkHover">Project 2 - E-commerce Website</div>
        {showMore && (
          <>
            <div className="project-card p-4 bg-gray-100 dark:bg-darkHover">Project 3 - Mobile App</div>
            <div className="project-card p-4 bg-gray-100 dark:bg-darkHover">Project 4 - Learning Platform</div>
          </>
        )}
      </div>
      <button 
        onClick={() => setShowMore(!showMore)} 
        className="mt-6 px-4 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black">
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default Projects;
