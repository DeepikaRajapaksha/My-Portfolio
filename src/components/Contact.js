import React, { useState } from 'react';

const Contact = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowThankYou(true); // Show Thank You message
        e.target.reset(); // Reset form fields
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error submitting the form. Please check your connection.');
    }
  };

  return (
    <section id="contact" className="py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

      {showThankYou ? (
        <div className="thank-you-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-2xl mx-auto text-center">
          <strong className="font-bold">Thank you!</strong>
          <p>Your message has been successfully sent. Have a Nice day!</p>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto p-6 bg-white bg-opacity-70 shadow-md rounded-lg dark:bg-darkHover"
        >
          {/* Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="fd611f79-4266-4250-b478-586c55338ec3" />

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
      )}
    </section>
  );
};

export default Contact;
