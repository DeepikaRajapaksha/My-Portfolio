import React from 'react';
import profilePic from '../assets/img/about me.jpg'; // Adjust the path to your profile picture

const AboutMe = () => {
  return (
    <section id="aboutme" className="py-10">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      
      {/* Flex container to align the image and description */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 max-w-5xl mx-auto">
        
        {/* Left side: Profile picture */}
        <div className="flex-shrink-0">
          <img 
            src={profilePic} 
            alt="Deepika Sewwandi" 
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg"
          />
        </div>
        
        {/* Right side: Description */}
        <div className="text-center lg:text-left max-w-xl">
          <p>
          Hello! I'm Deepika Sewwandi, passionate about crafting seamless and engaging digital experiences. With a strong focus on 
          user-centered design and efficient development, I enjoy transforming ideas into functional and visually appealing solutions.
          </p>
          <br />
          <p>
          Currently pursuing a Bachelor's degree in Computing and Information at the Faculty of Computing, Sabaragamuwa University, 
          I continuously expand my knowledge in web development, software design, and technology-driven problem-solving. 
          My academic journey, combined with hands-on experience, helps me stay updated with industry trends and sharpen my technical expertise.
          </p>
          <br />
          <p>
          I thrive on innovation, creativity, and attention to detail, always eager to explore new possibilities 
          and contribute to meaningful digital solutions.
          </p>

          {/* Download CV Button */}
          <div className="mt-6">
            <a 
              href="/assets/Deepika Sewwandi CV.pdf"  // Path to the PDF in the public folder
              download="Deepika Sewwandi CV.pdf"  // Specify the download file name
              className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
