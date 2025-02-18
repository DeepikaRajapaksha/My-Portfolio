import React, { useState } from 'react';

const EducationAndVolunteering = () => {
  const [activeSection, setActiveSection] = useState('education'); // Default to education

  return (
    <section id="education-volunteering" className="py-10">
      {/* Toggle buttons */}
      <div className="flex justify-center gap-10 mb-8">
        <button
          onClick={() => setActiveSection('education')}
          className={`text-3xl px-8 py-2 border-b-4 ${activeSection === 'education' ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveSection('volunteering')}
          className={`text-3xl px-8 py-2 border-b-4 ${activeSection === 'volunteering' ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500`}
        >
          Volunteering
        </button>
      </div>

      {/* Conditionally render content based on active section */}
      {activeSection === 'education' ? (
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
            
            {/* Education Timeline Items */}
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-5/12 text-right pr-8">
                <h3 className="text-2xl font-bold">Bachelor's Degree in Computing and Information System</h3>
                <p className="italic">Sabaragamuwa University of Sri Lanka, Faculty of Computing</p>
                <p>2022 - Present</p>
                <p>Expanding skills in web development, software design, and technology-driven problem-solving.</p>
              </div>
              <div className="relative w-8 h-8 rounded-full bg-blue-500 z-10"></div>
              <div className="w-5/12"></div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-5/12"></div>
              <div className="relative w-8 h-8 rounded-full bg-blue-500 z-10"></div>
              <div className="w-5/12 text-left pl-8">
                <h3 className="text-2xl font-bold">Advanced Level in Physical Science Stream</h3>
                <p className="italic">Sujatha Balika Vidyalaya, Matara</p>
                <p>2017 - 2019</p>
                <p>Specialized in mathematics, physics, and chemistry, which laid a solid foundation for technical skills.</p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-5/12 text-right pr-8">
                <h3 className="text-2xl font-bold">Ordinary Level</h3>
                <p className="italic">MR/ Deniyaya Rajapaksha M.V, Deniyaya</p>
                <p>2006 - 2016</p>
                <p>Achieved outstanding results with 8As and 1C, showcasing a strong academic foundation and commitment to excellence.</p>
              </div>
              <div className="relative w-8 h-8 rounded-full bg-blue-500 z-10"></div>
              <div className="w-5/12"></div>
            </div>

          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

            {/* Volunteering Timeline Items */}
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-5/12 text-right pr-8">
                <h3 className="text-2xl font-bold">Let Me Hack | Programme Team Member</h3>
                <p>2024 - Present</p>
                <p>An Inter-University Hackathon Organized by FOC, SUSL</p>
              </div>
              <div className="relative w-8 h-8 rounded-full bg-green-500 z-10"></div>
              <div className="w-5/12"></div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-5/12"></div>
              <div className="relative w-8 h-8 rounded-full bg-green-500 z-10"></div>
              <div className="w-5/12 text-left pl-8">
                <h3 className="text-2xl font-bold">CodeQuest V1.0 | Programme Team Member</h3>
                <p>2024 - Present</p>
                <p>An Inter-University Coding Competition Organized by IEEE Student Branch, SUSL </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-5/12 text-right pr-8">
                <h3 className="text-2xl font-bold">INSL 2024 | Programme Team Leader</h3>
                <p>2024 - Present</p>
                <p>Provincial Competition Organized by IEEE Student Branch, SUSL</p>
              </div>
              <div className="relative w-8 h-8 rounded-full bg-green-500 z-10"></div>
              <div className="w-5/12"></div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-5/12"></div>
              <div className="relative w-8 h-8 rounded-full bg-green-500 z-10"></div>
              <div className="w-5/12 text-left pl-8">
                <h3 className="text-2xl font-bold">AURELIA V1.0 | Site Arrangement Team Member</h3>
                <p>2024</p>
                <p>WIE Day Celebration Organized by IEEE Student Branch, SUSL </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default EducationAndVolunteering;
