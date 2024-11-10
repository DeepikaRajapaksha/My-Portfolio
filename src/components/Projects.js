import React, { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Track selected category

  const projects = [
    {
      id: 1,
      title: "Deepika's Portfolio",
      image: require('../assets/img/portfolio.png'),
      description: "A personal portfolio showcasing my work and skills in web development.",
      category: 'Website',
    },
    {
      id: 2,
      title: "E-commerce Website",
      image: require('../assets/img/ecommerce.png'),
      description: "An e-commerce platform with full shopping cart functionality and payment integration.",
      category: 'Figma Design',
    },
    {
      id: 3,
      title: "Mobile App",
      image: '/assets/img/mobile_app.png',
      description: "A mobile application designed to enhance user experience with a streamlined UI.",
      category: 'App',
    },
    {
      id: 4,
      title: "Learning Platform",
      image:'/assets/img/learning_platform.png',
      description: "An educational platform offering courses and resources to learners worldwide.",
      category: 'Website',
    },
    {
      id: 5,
      title: "Figma Design Portfolio",
      image: '/assets/img/figma_design.png',
      description: "A collection of design prototypes created using Figma.",
      category: 'Figma Design',
    },
  ];

  // Filtered projects based on selected category
  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  // Limit displayed projects unless "Show More" is clicked
  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-10">
      <h2 className="text-4xl font-bold text-center font-Ovo text-blue-900 dark:text-white">Projects</h2>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mt-4">
        {['All', 'Figma Design', 'Website', 'App'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-gray-100 bg-opacity-70 shadow-md rounded-lg dark:bg-darkHover cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-center text-blue-900 dark:text-white">
              {project.title}
            </h3>
          </div>
        ))}
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 float-right"
            >
              Close
            </button>
            <h3 className="text-2xl font-semibold text-center text-blue-900 dark:text-white mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject.description}
            </p>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
