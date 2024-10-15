import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-4xl font-bold text-center">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        <img src="/assets/img/html.png" alt="HTML" />
        <img src="/assets/img/css.png" alt="CSS" />
        <img src="/assets/img/js.png" alt="JavaScript" />
        <img src="/assets/img/reactjs.png" alt="React" />
        {/* Add more icons as needed */}
      </div>
    </section>
  );
};

export default Skills;
