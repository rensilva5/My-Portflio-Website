import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.png";
import img2 from "../../assets/portfolio2.png";
import img3 from "../../assets/portfolio3.png";
import img4 from "../../assets/portfolio4.png";
import img7 from "../../assets/portfolio7.png";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.png";
// import { Card } from "@mui/material";

const data = [
  {
    id: 1,
    image: img1,
    title: "My Personal Portfolio",
    description: "As a personal portfolio website, it showcases my professional work, achievements, and skills. It serves as an online portfolio that demonstrates my expertise and capabilities in my field of work display in several sections about me, my work experience, education, and skills.",
    github: "https://github.com/rensilva5/My-Portflio-Website",
    demo: 'https://renzosilva.dev/'
  },
  {
    id: 7,
    image: img7,  
    title: "Chat App",
    description: "This software application is designed for real-time communication between individuals. My Chat app allows users to exchange text messages; it can be accessed on smartphones, tablets, desktop computers, and other internet-enabled devices. My chat app requires users to create an account, which is linked to their email address.",
    github: "https://github.com/rensilva5/chat-app-firebase",
    demo: 'https://chat-app-firebase-topaz.vercel.app/'
  },
  {
    id: 2,
    image: img2,
    title: "Europe Planner",
    description: "A Europe trip planner is a practical tool that helps travelers plan their itinerary for a trip to Europe. It typically includes features such as destination recommendations.",
    github: "https://github.com/rensilva5/front-end-your-o-planner",
    demo: "https://your-o-planner.web.app/",
  },
  {
    id: 3,
    image: img3,
    title: "Blog-Website",
    description: "My blog website hosts regularly updated posts or articles in a chronological order. These posts are typically written by an individual or a group of authors on various topics of interest.",
    github: "https://github.com/rensilva5/blog-website",
    // demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: img4,
    title: "Personal Todo App",
    description: "My personal to-do app has been designed to help individuals manage their tasks, goals, and responsibilities. I provide a user-friendly interface that allows you to create a list of tasks or projects, set due dates, and track your progress towards completion.",
    github: "https://github.com/rensilva5/three-do-web",
    demo: "https://three-do-rs.web.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Patient List",
    description: "The Patient List app's primary goal is to help healthcare professionals manage their patient information efficiently. I provide a user-friendly interface that allows users to create and view patient profiles, manage patient data, and keep track of appointments and medical histories.",
    github: "https://github.com/rensilva5/create-patients-list-app",
    // demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-finantial-data-visualication'
  },
  {
    id: 6,
    image: img6,
    title: "Ticket Tracker",
    description: "Ticket Tracker app helps teams manage their tasks and projects efficiently, manage ticket data, and keep track of project progress. Teams can create tickets that include relevant information such as title, description, priority level, deadline, and any other relevant notes.",
    github: "https://github.com/rensilva5/Hackathon-2022",
    // demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-finantial-data-visualication'
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo`}>
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                {/* <Card className="descriptionText"> */}

                <h5>{description}</h5>
            
                {/* </Card> */}
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code on Github`}>
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo`}>
                    Demo
                  </a>
                </div>
              </article>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
