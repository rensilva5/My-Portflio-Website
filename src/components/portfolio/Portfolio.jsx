import React from "react";
import "./portfolio.css";
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio2.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.png'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'My Personal Portfolio',
    github: 'https://github.com/rensilva5',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-finantial-data-visualication'
  },
  {
    id: 2,
    image: img2,
    title: 'Europe Planner',
    github: 'https://github.com/rensilva5',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-template-infographics-in-Figma'
  },
  {
    id: 3,
    image: img3,
    title: 'Blog-Website',
    github: 'https://github.com/rensilva5',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: img4,
    title: 'Personal Todo App',
    github: 'https://github.com/rensilva5',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-task-and-tracking-progress'
  },
  {
    id: 5,
    image: img5,
    title: 'Patient List',
    github: 'https://github.com/rensilva5',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-finantial-data-visualication'
  },
  {
    id: 6,
    image: img6,
    title: 'Ticket Tracker',
    github: 'https://github.com/rensilva5',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-finantial-data-visualication'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
        <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target='_blank'
              >
                Live Demo
              </a>
            </div>
        </article>      
            )       
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
