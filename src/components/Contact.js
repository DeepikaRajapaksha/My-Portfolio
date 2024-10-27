import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <form 
        method="POST" 
        action="https://api.web3forms.com/submit"
        className="max-w-2xl mx-auto p-6 bg-white bg-opacity-70 shadow-md rounded-lg dark:bg-darkHover"
      >
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />

        {/* Name Input */}
        <label htmlFor="name" className="block text-lg font-semibold mb-2 text-gray-700 dark:text-white">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />

        {/* Email Input */}
        <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gray-700 dark:text-white">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />

        {/* Message Input */}
        <label htmlFor="message" className="block text-lg font-semibold mb-2 text-gray-700 dark:text-white">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
          required
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 h-32 resize-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
