import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
      <section id='experience'>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>
        <div className="container experience">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React-Native</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
            </div>
          </div>

          <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Mongo.db</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>basic</small>
              </div>
              </article>
            </div>
          </div>
        </div>
        </section>
  )
}

export default Experience
