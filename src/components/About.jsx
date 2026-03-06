import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg'; // Hero Photo
import aboutPhoto from '../assets/about-photo.jpg'; // Bio Photo (Vertical)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <>
      {/* SECTION 1: HERO / HOME */}
      <section id="home" className="hero-section">
        <div className="hero-left">
          <h1 className="name-title">
            <span className="bracket">&lt;</span>Parkavi<span className="bracket">/&gt;</span>
          </h1>
          <p className="subtitle">Software Developer.</p>
          <div className="social-icons">
            <a href="https://github.com/Parkavi-B" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/parkavi-bhuvanendran" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <div className="blob-bg"></div>
            <div className="image-blob">
              <img src={profileImg} alt="Parkavi Profile" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DETAILED ABOUT ME (Beatriz Style) */}
      <section id="about" className="about-me-section">
        <div className="about-me-container">
          <div className="about-me-left">
            <h2 className="about-title">
              <span className="bracket">&lt;</span>about<span className="bracket">/&gt;</span>
            </h2>
            <div className="about-bio">
              <p>I am a <strong>Junior Software Developer</strong> currently working on Unity-based applications and backend development. I have experience building interactive systems, developing scalable solutions, and working on real-time application features.</p>
              <p>I completed my Bachelor of Technology in Information Technology from <strong>Sri Ramakrishna Institute of Technology</strong>.</p>
              
              <p className="skills-intro">Technologies I am familiar with:</p>
              <div className="skills-list">
                <div className="skill-col">
                  <span>➤ Unity</span><span>➤ C#</span><span>➤ Node.js</span><span>➤ REST APIs</span>
                </div>
                <div className="skill-col">
                  <span>➤ MySQL</span><span>➤ AWS</span><span>➤ Python</span><span>➤ SQL</span>
                </div>
                <div className="skill-col">
                  <span>➤ JavaScript</span><span>➤ Database Design</span><span>➤ RBAC</span><span>➤ JSON</span>
                </div>
              </div>
              <div className="cv-box">
                <a href="/your-cv.pdf" download className="cv-btn">
                  <FontAwesomeIcon icon={faFilePdf} /> Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="about-me-right">
            <div className="vertical-image-frame">
              <img src={aboutPhoto} alt="Parkavi bio" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}