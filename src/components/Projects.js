import React, { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "My Portfolio: Showcasing Innovation and Design",
      image: require('../assets/img/portfolio.png'),
      description: `Welcome to my portfolio, where I share my passion for UI/UX design, front-end development, and software development. As a Computing and Information Systems student, I specialize in creating user-centric digital experiences that seamlessly blend functionality with aesthetics.

Throughout my projects, I focus on delivering intuitive designs that not only meet user needs but also enhance the overall experience. From designing innovative platforms like BINVESTO to developing dynamic, interactive web applications, I aim to create solutions that drive growth and improve user satisfaction.

Explore my portfolio to discover my journey in web development and design, and how I continuously refine my skills to craft effective, beautiful digital products.`,
      category: 'Website',
      githubLink: 'https://github.com/DeepikaRajapaksha/My-Portfolio',
    },
    {
      id: 2,
      title: "BINVESTO: Bridging Businesses and Investors",
      image: require('../assets/img/ecommerce.png'),
      description: `BINVESTO is a digital platform designed to connect small-scale businesses in Sri Lanka with potential investors in a fast, secure, and efficient manner.

Key Features:

Simplified Investment Process: Businesses can create and publish investment ads, while investors can browse, filter, and respond seamlessly.
Comprehensive Support Services: Integrated tools like a Help Center and AI chatbot ensure smooth user experiences and satisfaction.
Empowering Growth: Focused on fostering economic development by bridging the gap between entrepreneurs and investors.
This project balances functionality and aesthetics to deliver an intuitive, visually engaging interface that supports both businesses and investors in achieving their goals.`,
      category: 'Figma Design',
      githubLink: 'https://www.behance.net/gallery/215612497/BINVESTO',
    },
    {
      id: 4,
      title: "Re-Design Mobitel Selfcare App",
      image: require('../assets/img/Mobitel.png'),
      description: `
Mobitel Selfcare App – Redesign
This project focuses on redesigning the Mobitel Selfcare App to improve usability and user experience. The previous design had issues with complex navigation, an overloaded dashboard, and lack of personalization. Through user research, wireframing, prototyping, and usability testing, I developed a cleaner, more intuitive interface.

Key Improvements:
✅ Simplified navigation for better accessibility
✅ Clean and modern UI for improved readability
✅ Dark mode for enhanced user comfort
✅ Personalized dashboard with quick access to essential features
`,
      category: 'Figma Design',
      githubLink: 'https://www.behance.net/gallery/219476403/Re-Design-Mobitel-Selfcare-App',
    },
    {
      id: 3,
      title: "AgriZone: Revolutionizing Agricultural Trade",
      image: require('../assets/img/mobile_app.png'),
      description: `
AgriZone is a Smart Agricultural Marketplace app designed to bridge the gap between farmers and buyers. By leveraging technology, this platform empowers farmers with real-time market data and predictive tools, enabling them to optimize crop sales and adopt sustainable practices.

Key Features:
  Market Insights & Predictions: Provides farmers with real-time data on crop prices and demand, helping them determine the best time to sell.
  Seamless Connections: Facilitates direct communication and transactions between farmers and buyers, fostering transparency and trust.
  Sustainability Support: Encourages environmentally friendly farming practices through accessible resources and recommendations.
My Role:
  Conducted comprehensive user research to understand the needs of farmers and buyers.
  Designed an intuitive and user-friendly UI/UX that ensures a seamless user experience.
  Focused on creating a visually appealing interface while maintaining functionality and clarity.
Impact:
  AgriZone aims to transform the agricultural landscape by promoting smarter trade practices, reducing market inefficiencies, and strengthening producer-consumer relationships. It reflects my commitment to driving innovation and sustainability in the agriculture sector.
`,
      category: 'App',
      githubLink: 'https://www.behance.net/gallery/215800165/AgriZone',
    },
    
  ];

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

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
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-5"
            />
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

      {/* Modal for Project Details */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-5xl w-full max-h-[80vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold text-blue-900 dark:text-white">{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-md mt-4 mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{selectedProject.description}</p>
            {selectedProject.githubLink && (
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline block mt-4"
              >
                View
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
