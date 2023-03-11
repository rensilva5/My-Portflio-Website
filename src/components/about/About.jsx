import React from "react";
import "./about.css";
import ME from "../../assets/canterbury.jpeg";
// import ME from "../../assets/me-aboutME.jpg";
import { BsAward } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Me in about" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>150+ US</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
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