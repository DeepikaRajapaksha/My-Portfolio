import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <form method="POST" action="https://api.web3forms.com/submit">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
