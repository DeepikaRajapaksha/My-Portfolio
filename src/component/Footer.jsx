import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="footer">
      {/* Background effects */}
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="footer-container">

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <button
              className="footer-logo"
              onClick={() => scrollToSection('top')}
            >
              <span>&lt;</span>
              <span className="logo-name"> Deepika Sewwandi</span>
              <span>/&gt;</span>
            </button>

            <p className="footer-description">
              Building modern digital experiences with creativity,
              technology, and a passion for continuous learning.
            </p>

            <div className="footer-status">
              <span className="status-dot"></span>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Navigation</h3>

            <button onClick={() => scrollToSection('top')}>
              Home
            </button>

            <button onClick={() => scrollToSection('aboutme')}>
              About
            </button>

            <button onClick={() => scrollToSection('skills')}>
              Skills
            </button>

            <button onClick={() => scrollToSection('experience')}>
              Experience
            </button>

            <button onClick={() => scrollToSection('projects')}>
              Projects
            </button>

            <button onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </div>

          {/* Connect */}
          <div className="footer-column footer-connect">
            <h3>Let's Connect</h3>

            <a
              href="mailto:deepikasrajapaksha03@gmail.com"
              className="footer-contact-link"
            >
              <span className="footer-icon">✉</span>
              <span>deepikasrajapaksha03@gmail.com</span>
            </a>

            <div className="footer-socials">

              <a
                href="https://github.com/DeepikaSRajapaksha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482
                    0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.463-1.11-1.463
                    -.908-.62.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
                    2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943
                    0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647
                    0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337
                    c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647
                    .64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935
                    .359.309.678.919.678 1.852 0 1.336-.012 2.414-.012 2.741
                    0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/deepika-sewwandi-rajapaksha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
                    -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046
                    c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337
                    7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119
                    20.452H3.555V8.999h3.564v11.453Z"
                  />
                </svg>
              </a>

              <a
                href="mailto:deepikasrajapaksha03@gmail.com"
                aria-label="Email"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16
                    a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5
                    8-5v2Z"
                  />
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p>
            © {currentYear} <span> Deepika Sewwandi</span>. All rights reserved.
          </p>

          <p className="footer-made">
            Designed & developed with
            <span className="heart">♥</span>
            and code.
          </p>

          <button
            className="back-to-top"
            onClick={() => scrollToSection('top')}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="arrow">↑</span>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer; 