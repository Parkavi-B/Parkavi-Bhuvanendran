import React from 'react';
import './Skills.css';

export default function Skills() {
  const softSkills = [
    { id: "01", title: "non-stop learning", color: "#915eff", desc: "Technology never stops updating..." },
    { id: "02", title: "communicative", color: "#ff4d94", desc: "Communication is a need in any field." },
    { id: "03", title: "open-minded", color: "#5e5eff", desc: "Accepting new ideas is key." }
  ];

  return (
    <section id="skills" className="section-wrapper">
      <h2 className="common-title">
        <span className="bracket">&lt;</span>skills<span className="bracket">/&gt;</span>
      </h2>
      
      <p className="skills-intro-text">
        Since the beginning of my journey as a developer, I've improved my soft skills, 
        always seeking to be a better professional.
      </p>

      <div className="skills-grid-layout">
        {softSkills.map((skill) => (
          <div key={skill.id} className="skill-item-card">
            <div className="skill-top-row">
              <span className="num">{skill.id}</span>
              <div className="progress-bar" style={{ background: skill.color }}></div>
            </div>
            <h3 className="skill-label">{skill.title}</h3>
            <p className="skill-detail">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}