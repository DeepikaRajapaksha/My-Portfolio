import React, { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-10">
      <h2 className="text-4xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        {showMore && (
          <div className="grid grid-cols-2 gap-4">
            <div className="project-card">Project 3</div>
            <div className="project-card">Project 4</div>
          </div>
        )}
      </div>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default Projects;
