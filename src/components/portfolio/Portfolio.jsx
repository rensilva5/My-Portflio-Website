import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.png";
import img2 from "../../assets/portfolio2.png";
import img3 from "../../assets/portfolio3.png";
import img7 from "../../assets/portfolio7.png";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "My Personal Portfolio",
    description: "Personal project",
    github: "https://github.com/rensilva5/My-Portflio-Website",
    // demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-finantial-data-visualication'
  },
  {
    id: 2,
    image: img2,
    title: "Europe Planner",
    description: "Personal project",
    github: "https://github.com/rensilva5/front-end-your-o-planner",
    demo: "https://your-o-planner.web.app/",
  },
  {
    id: 3,
    image: img3,
    title: "Blog-Website",
    description: "Personal project",
    github: "https://github.com/rensilva5/blog-website",
    // demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: img7,
    title: "Personal Todo App",
    description: "Personal project",
    github: "https://github.com/rensilva5/three-do-web",
    demo: "https://three-do-rs.web.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Patient List",
    description: "Personal project",
    github: "https://github.com/rensilva5/create-patients-list-app",
    // demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-finantial-data-visualication'
  },
  {
    id: 6,
    image: img6,
    title: "Ticket Tracker",
    description: "Personal project",
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
            <a href={demo} target="_blank">
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{description}</h5>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
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
