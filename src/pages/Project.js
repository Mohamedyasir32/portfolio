import React from "react";
import project1 from '../images/project-img1.png';
import project2 from '../images/Product-img2.png';
import project3 from '../images/Project-img3.png';
import project4 from '../images/Project_img4.png';
import project5 from '../images/Product-img5.png'; 
import "./Project.css";

const projects = [
    {
    id: 1,
    title: "E-commerce Website",
    description: "A multi-page online store with cart and checkout functionality.",
    tech: "React, Stripe API, Node.js",
    image: project1,
    github: "https://github.com/Mohamedyasir32/Simple-E-Commerce-Website",
    live: "https://apsshop.netlify.app/",
    details: "/",
  },
    
    
    {
    id: 2,
    title: "Task Manager App",
    description: "A task management app with add, edit, delete, and drag-and-drop features.",
    tech: "React, Node.js, MongoDB",
    image: project2,
    github: "https://github.com/Mohamedyasir32/To-doList",
    live: "https://todo-listyasir.netlify.app/",
    details: "/",
  },
  
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather app using OpenWeather API.",
    tech: "React, API, CSS",
    image: project4,
    github: "https://github.com/Mohamedyasir32/WeatherWeb",
    live: "https://weather-web-66b8.vercel.app/",
    details: "/",
  },
  {
    id: 4,
    title: "Scientific Calculator",
    description: "A web-based scientific calculator supporting basic and advanced math operations.",
    tech: "HTML, CSS, JavaScript",
    image: project3,
    github: "https://github.com/Mohamedyasir32/web-scientific-calculator",
    live: "https://webscientific-calculator.netlify.app/",
    details: "/",
  },
    {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and CSS.",
    tech: "React, CSS, JavaScript",
    image: project5,
    github: "#",
    live: "https://portfolio-pink-rho-79.vercel.app/",
    details: "/",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      
      <h1 className="projects-heading">My <span>Projects</span></h1>
      <p className="projects-intro">
        Here are some of the projects I have worked on, demonstrating my skills in frontend and full-stack development. Each project is designed with clean code, responsive layouts, and modern UI/UX practices.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>
            <div className="project-buttons">
              <a href={project.github} className="btn-project" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} className="btn-project" target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.details} className="btn-project" target="_blank" rel="noreferrer">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
