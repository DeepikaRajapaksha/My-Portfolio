import React from 'react';
import htmlIcon from '../assets/img/html.png';
import cssIcon from '../assets/img/css.png';
import jsIcon from '../assets/img/js.png';
import reactIcon from '../assets/img/reactjs.png';
import nodeIcon from '../assets/img/node.png';
import mysqlIcon from '../assets/img/mysql.png';
import gitIcon from '../assets/img/git.png';
import firebaseIcon from '../assets/img/firebase.png';
import cIcon from '../assets/img/c.png';
import ccIcon from '../assets/img/cc.png';
import tpIcon from '../assets/img/tp.png';
import javaIcon from '../assets/img/java.png';
import phpIcon from '../assets/img/php.png';
import pythonIcon from '../assets/img/python.png';
import mongodbIcon from '../assets/img/mongodb.png';
import laravelIcon from '../assets/img/laravel.png';
import seleniumIcon from '../assets/img/selenium.png';
import postmanIcon from '../assets/img/postman.png';
import jnutIcon from '../assets/img/junit.png';
import phpunitIcon from '../assets/img/phpunit.png';
import vscodeIcon from '../assets/img/vscode.png';
import trelloIcon from '../assets/img/trello.png';
import figmaIcon from '../assets/img/figma.png';
import flutterIcon from '../assets/img/flutter.png';
import dartIcon from '../assets/img/dart.png';

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
            <img src={htmlIcon} alt="HTML" className="w-10 h-10" />
            <img src={cssIcon} alt="CSS" className="w-10 h-10" />
            <img src={jsIcon} alt="JavaScript" className="w-10 h-10" />
            <img src={cIcon} alt="C" className="w-10 h-10" />
            <img src={ccIcon} alt="C++" className="w-10 h-10" />
            <img src={tpIcon} alt="TypeScript" className="w-10 h-10" />
            <img src={javaIcon} alt="Java" className="w-10 h-10" />
            <img src={phpIcon} alt="PHP" className="w-10 h-10" />
            <img src={pythonIcon} alt="Python" className="w-10 h-10" />
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Database Box */}
        <div className="p-6 bg-white bg-opacity-70 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">Database Technologies</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src={mysqlIcon} alt="MySQL" className="w-12 h-12" />
            <img src={firebaseIcon} alt="Firebase" className="w-12 h-12" />
            <img src={mongodbIcon} alt="Firebase" className="w-12 h-12" />
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Backend technology and Frameworks Box */}
        <div className="p-6 bg-white bg-opacity-70 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">Backend Technologies & Frameworks</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src={nodeIcon} alt="Node.js" className="w-12 h-12" />
            <img src={reactIcon} alt="React" className="w-12 h-12" />
            <img src={laravelIcon} alt="Laravel" className="w-12 h-12" />
            {/* Add more icons as needed */}
          </div>
        </div>

         {/* Automation & Testing Box */}
         <div className="p-6 bg-white bg-opacity-70 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">Automation & Testing Tools</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src={seleniumIcon} alt="Selenium" className="w-12 h-12" />
            <img src={postmanIcon} alt="Postman" className="w-12 h-12" />
            <img src={jnutIcon} alt="JUnit" className="w-12 h-12" />
            <img src={phpunitIcon} alt="PHPUnit" className="w-12 h-12" />
            {/* Add more icons as needed */}
          </div>
        </div>

         {/* Tools and Platform Box */}
         <div className="p-6 bg-white bg-opacity-70 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">Tools & Platform</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src={vscodeIcon} alt="VS Code" className="w-12 h-12" />
            <img src={gitIcon} alt="Git" className="w-12 h-12" />
            <img src={figmaIcon} alt="Figma" className="w-12 h-12" />
            <img src={trelloIcon} alt="Trello" className="w-12 h-12" />
            {/* Add more icons as needed */}
          </div>
        </div>

         {/* Mobile app development Box */}
         <div className="p-6 bg-white bg-opacity-70 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-4">Mobile App Development</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <img src={flutterIcon} alt="Flutter" className="w-16 h-16" />
            <img src={dartIcon} alt="Dart" className="w-20 h-16" />
            {/* Add more icons as needed */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
