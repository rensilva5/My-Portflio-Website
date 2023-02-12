import React from "react";
import "./about.css";
// import { icons } from 'react-icons'
// import ME from "../../assets/me-about.jpg";
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
            {/* <img src={ME} alt="Me in about" /> */}
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
              <small>100+ US</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            explicabo totam sit mollitia, obcaecati quidem nisi at illo laborum,
            eos qui quibusdam! Obcaecati sunt enim, ratione nulla delectus
            accusantium minus.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
