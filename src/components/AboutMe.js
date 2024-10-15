import React from 'react';

const AboutMe = () => {
  return (
    <section id="aboutme" className="py-10">
      <h2 className="text-4xl font-bold text-center">About Me</h2>
      <p className="text-center max-w-xl mx-auto">
        Hello! I'm Deepika Sewwandi, a software developer with a passion for creating intuitive user experiences and solving real-world problems. Currently pursuing my degree in Computing and Information Systems, I am excited about the opportunities to grow as a developer and contribute to innovative projects.
      </p>
      <div className="flex justify-center mt-4">
        <a href="#downloadcv" className="px-6 py-3 border-2 border-black">Download CV</a>
      </div>
    </section>
  );
};

export default AboutMe;
