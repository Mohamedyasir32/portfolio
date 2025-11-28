import React from "react";
import Footer from '../Components/Footer'
import image from '../images/jumbatron-img.png'
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
   const navigate = useNavigate();

const handleclick = () => {
    navigate("/project"); 
};

  const projects = [
    {
      title: "Stationery Multi-Page Website",
      desc: "A multi-page stationery e-commerce site with cart, checkout forms, and PDF invoice generation.",
      tech: "React, Router, jsPDF",
      link: "#",
    },
    {
      title: "Task Manager App",
      desc: "Add, edit, delete, and reorder tasks using drag-and-drop. Clean UI and saved locally.",
      tech: "React, LocalStorage",
      link: "#",
    },
    {
      title: "Weather App",
      desc: "Real-time weather updates, dynamic icons, and responsive UI using OpenWeather API.",
      tech: "React, API",
      link: "#",
    },
    {
      title: "Scientific Calculator",
      desc: "A fully functional scientific calculator with advanced operations including trigonometry, logarithms, exponent calculations, and memory features.",
      tech: "HTML, CSS, JavaScript (Vanilla)",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with animations, router navigation, and smooth UI.",
      tech: "React, CSS",
      link: "#",
    },
    
  ];

    const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js (basic)", "Express.js (basic)", "REST API Integration", "Git & GitHub", "Axios / Fetch", "JSON"]
    },
    {
      title: "UI / UX & Design",
      skills: ["Modern UI Layouts", "Figma (Basic)", "CSS Animations", "Framer Motion"]
    },
    {
      title: "DataBase",
      skills: ["MySQL", "MangoDB"]
    },
    {
      title: "Additional Skills",
      skills: ["jsPDF", "LocalStorage", "Routing", "Optimization", "Problem Solving"]
    }
  ];

  return (
    <div>
    <section className="home">
      <div className="content">

        <h1 className="title">
          Hi, I'm <span className="typing"> Mohamed Yasir</span>
        </h1>

        <h2 className="role">Frontend / Full-Stack Developer</h2>

        <p className="description">
          I build clean, responsive and dynamic web applications using
          React, JavaScript, and modern UI frameworks. Passionate about 
          creating smooth user experiences and solving real-world problems 
          through code.
        </p>

        <div className="buttons">
          <a href="/Project" className="btn-project">View Projects</a>
          <a href="/Contact" className="btn-project">Contact Me</a>
        </div>

      </div>

      <div className="profile-img">
        <img src={image} alt="Yasir" />
      </div>
    </section>
    <section className="about">
  <h1 className="heading">About <span>Me</span></h1>

  <p className="about-text">
    I'm <strong>Mohamed Yasir</strong>, a passionate <strong>Frontend / Full-Stack Developer</strong> 
    who loves turning ideas into clean, responsive, and high-performance web applications.
    I focus on writing modular, maintainable code and building smooth user experiences 
    using modern JavaScript, React, and backend logic when needed.
  </p>

  <p className="about-text">
    I enjoy creating intuitive UI designs, optimizing performance, and solving real-world 
    problems through code. My goal is to build applications that are not only functional, 
    but also visually meaningful and enjoyable to use.
  </p>

  <div className="about-info">
    <div>
      <h3>🎯 Experience</h3>
      <p>6+ months building frontend & full-stack projects</p>
    </div>

    <div>
      <h3>🛠 Skills</h3>
      <p>React, JavaScript, HTML, CSS, Node.js, Git, API integrations</p>
    </div>

    <div>
      <h3>🚀 Interests</h3>
      <p>UI/UX design, animations, performance optimization, problem-solving</p>
    </div>
  </div>
</section>
  <section className="projects">
      <h1 className="projects-heading">My <span>Projects</span></h1>

      <div className="project-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <p className="tech">Technologies: {p.tech}</p>
            <a href={p.link} className="btn-project" onClick={handleclick}>View Project</a>
          </div>
        ))}
      </div>
    </section>
     <section className="skills">
      <h1 className="skills-heading">My <span>Skills</span></h1>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h2>{category.title}</h2>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
     <section className="contact">
      <h1 className="contact-heading">
        Contact <span>Me</span>
      </h1>

      <p className="contact-text">
        I'm open to freelance work, internships, collaborations, or any project
        ideas you have. Feel free to reach out and I'll get back to you soon!
      </p>

      <div className="contact-info">
        <div className="info-box">
          <h3>Email</h3>
          <p>yasirmohamed326@gmail.com</p>
        </div>

        <div className="info-box">
          <h3>Phone</h3>
          <p>+91 8072364306</p>
        </div>

        <div className="info-box">
          <h3>Location</h3>
          <p>Tamil Nadu, India</p>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>
    </section>
    <Footer/>
</div>

  );
};

export default Home;
