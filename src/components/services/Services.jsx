import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import './services.css'

const Services = () => {  
  return (
    <section id='services'>
      <h5>What we offer</h5>
      <h2>Services</h2>
      <div className="container services">
{/* Start UI/UX */}
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
          </ul>
        </article>

{/* Web development Start*/}
<article className='service'>
          <div className="service_head">
            <h3>Web development</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
          </ul>
        </article>

{/* Content Start */}
<article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
