import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      title: "Herbário",
      description: "Herbário is a mobile application focused on documenting herbs, including technical sheets, traditional uses, and spiritual practices associated with plants. The project brings together content from different religious and cultural traditions.",
      tech: ["React Native", "Firebase"],
      github: "https://github.com/Parkavi-B",
      bgText: "Herbário"
    },
    {
      id: 2,
      title: "Unity Game",
      description: "An interactive real-time application developed in Unity using C# and backend integration.",
      tech: ["Unity", "C#", "MySQL"],
      github: "https://github.com/Parkavi-B",
      bgText: "Unity"
    }
  ];

  return (
    <section id="projects" className="section-wrapper">
      <h2 className="common-title">
        <span className="bracket">&lt;</span>projects<span className="bracket">/&gt;</span>
      </h2>
      <div className="title-underline"></div>

      <p className="projects-intro">
        Projects are important ways to improve your skills. Here are some of my most recent works. 
        Click on the card to find out more.
      </p>

      {/* 2-COLUMN GRID */}
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
            <div className="card-inner">
              <h1 className="card-bg-text">{project.bgText}</h1>
            </div>
            <div className="card-footer">
              <span>{project.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECT POPUP MODAL */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <h3>{selectedProject.title}</h3>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-underline"></div>

            <p className="modal-desc">{selectedProject.description}</p>

            <div className="modal-tech">
              <p>Technologies:</p>
              <div className="tech-tags">
                {selectedProject.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
            </div>

            <div className="modal-links">
              <p>Learn more:</p>
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="github-btn">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}