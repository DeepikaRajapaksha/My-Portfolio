import React from 'react';
import htmlIcon from '../assets/img/html.png';
import cssIcon from '../assets/img/css.png';
import jsIcon from '../assets/img/js.png';
import reactIcon from '../assets/img/reactjs.png';
import nodeIcon from '../assets/img/node.png';
import mysqlIcon from '../assets/img/mysql.png';
import gitIcon from '../assets/img/git.png';
import firebaseIcon from '../assets/img/firebase.png';

const Skills = () => {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      
      {/* Grid layout for 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Programming Languages Box */}
        <div className="p-6 bg-white bg-opacity-70 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">Programming Languages</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src={htmlIcon} alt="HTML" className="w-16 h-16" />
            <img src={cssIcon} alt="CSS" className="w-16 h-16" />
            <img src={jsIcon} alt="JavaScript" className="w-16 h-16" />
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Backend Box */}
        <div className="p-6 bg-white bg-opacity-70 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">Backend Technologies</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src={nodeIcon} alt="Node.js" className="w-16 h-16" />
            <img src={mysqlIcon} alt="MySQL" className="w-16 h-16" />
            <img src={firebaseIcon} alt="Firebase" className="w-16 h-16" />
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Tools and Frameworks Box */}
        <div className="p-6 bg-white bg-opacity-70 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">Tools and Frameworks</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src={reactIcon} alt="React" className="w-16 h-16" />
            <img src={gitIcon} alt="Git" className="w-16 h-16" />
            {/* Add more icons as needed */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
