import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.6 }; // 60% of section must be visible

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="bracket">&lt;</span>Parkavi<span className="bracket">/&gt;</span>
      </div>
      <ul className="nav-menu">
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>about</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>skills</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>projects</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>contact</a></li>
      </ul>
    </nav>
  );
}