import React from "react";
import "./about.css";
import canterburyImage from "../../assets/canterbury.jpeg";
// import canterburyImage from "../../assets/HeadShot.png";
// import ME from "../../assets/me-aboutME.jpg";
import { BsAward } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about-me-section">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about-container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={canterburyImage} alt="Me in canterbury UK" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <BsAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about-card">
              <FaUsers className="about-icon" />
              <h5>Clients</h5>
              <small>150+ US</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article>
          </div>
          <p>
            A software developer seeking for a team work environment, and with
            passion for learning and creating.
          </p>
          <a href="#contact" className="btn btn-primary">
            {/* Needs routes to go to contact */}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
