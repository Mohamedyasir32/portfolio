import React from "react";
import image from '../images/jumbatron-img.png'
import "./About.css"; 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        <div className="about-img">
          <img src={image} alt="Mohamed Yasir" />
        </div>

        <div className="about-content">
          <h1 className="heading">About <span>Me</span></h1>

          <p className="about-text">
            I'm <strong>Mohamed Yasir</strong>, a passionate <strong>Frontend / Full-Stack Developer </strong> 
            who loves turning ideas into clean, responsive, and high-performance web applications.
          </p>

          <p className="about-text">
            I enjoy creating intuitive UI designs, optimizing performance, and solving real-world 
            problems through code. My goal is to build applications that are not only functional, 
            but also visually meaningful and enjoyable to use.
          </p>

          <div className="work-experience">
            <h2 className="heading">Work <span>Experience</span></h2>

            <div className="experience-info">
              <div>
                <h3>FullStack Developer</h3>
                <p><strong>Synapsepark Software Pvt Ltd</strong> | 2025-Present</p>
                <p>Built a full-stack task management app using ReactJS, Node.js, and MongoDB.</p>
                
              </div>

              <div>
                <h3>Intern / Front-End Developer</h3>
                <p><strong>LayerCodes Technologies</strong> | 3 months</p>
                <p>Developed responsive web apps with ReactJS and reusable components.</p>
              </div>
            </div>
          </div>

         
          <div className="about-info">
            <div>
              <h3>🛠 Skills</h3>
              <p>React, JavaScript, HTML, CSS, Node.js, Git, API integrations</p>
            </div>

            <div>
              <h3>🚀 Interests</h3>
              <p>UI/UX design, animations, performance optimization, problem-solving</p>
            </div>
          </div>

          
          <div className="cv-btn-container">
            <a href="Mohamed-Yasir-M-S-Resume.pdf" className="btn" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
