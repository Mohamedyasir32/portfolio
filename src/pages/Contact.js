import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_10xtkk9",
        "template_jssgudc",
        form.current,
        "J21oA8aAYOBxH5xU4"
      )
      .then(
        (result) => {
          setStatusMessage("✅ Message sent successfully!");
          e.target.reset();
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          setStatusMessage("❌ Failed to send message. Please try again.");
          setTimeout(() => setStatusMessage(""), 5000);
        }
      );
  };

  return (
    <section className="contact">
      <h1 className="contact-heading">
        Contact <span>Me</span>
      </h1>

      <p className="contact-text">
        I’m always open to discussing new projects, collaborations, or 
        opportunities. Feel free to reach out through the form below, or connect 
        with me via social media.
      </p>

      <div className="extra-info">
        <p>📌 Available for freelance or full-time projects</p>
        <br/>
        <p>💼 Working hours: Mon - Fri, 9 AM - 6 PM</p>
        <br/>
        <p> <a href="/Mohamed-Yasir-M-S-Resume.pdf" download className="cv-btn">Download CV</a></p>
      </div>

      <div className="contact-info">
        <div className="info-box">
          <h3>Email</h3>
          <p>yasirmohamed326@example.com</p>
        </div>
        <div className="info-box">
          <h3>Phone</h3>
          <p>+91 8072364306</p>
        </div>
        <div className="info-box">
          <h3>Location</h3>
          <p>Chennai, India</p>
        </div>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
        <button type="submit" className="send-btn">Send Message</button>
      </form>

      {statusMessage && <p className="status-message">{statusMessage}</p>}

      <div className="social-links">
        <a href="https://www.linkedin.com/in/mohamed-yasir-m-s-6aba782a0/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Mohamedyasir32" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://wa.me/918072364306?text=Hello%20Yasir." target="_blank"rel="noreferrer">WhatsApp</a>

      </div>
      <div className="map-container">
  <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9876989820754!2d80.22096677504247!3d13.028532887282269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52674d0c72e7df%3A0x5d83a5e0ac0e3b66!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </section>
  );
};

export default Contact;
