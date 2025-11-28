import React from "react";
import "./Skills.css";

const skillsData = [
  {
    id: 1,
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: 2,
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "API Development"],
  },
  {
    id: 3,
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase"],
  },

  {
    id: 4,
    category: "Database",
    skills: ["MySQL", "SQL","MangoDB"],
  },
  
  {
    id: 5,
    category: "Other Skills",
    skills: ["UI/UX Design", "Problem Solving", "Performance Optimization", "Debugging"],
  },
];

const Skill = () => {
  return (
    <section className="skills">
      <h1 className="skills-heading">My <span>Skills</span></h1>
      <p className="skills-intro">
        These are the skills and technologies I have experience with, used to build modern,
        responsive, and high-performance web applications.
      </p>

      <div className="skills-grid">
        {skillsData.map((item) => (
          <div key={item.id} className="skill-card">
            <h2>{item.category}</h2>
            <ul>
              {item.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
