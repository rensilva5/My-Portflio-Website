import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
// import { FiInstagram } from 'react-icons/fi'
// import { GrTwitter } from 'react-icons/gr'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Renzo</a>

      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about-me-section">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target='_blank' rel="noopener noreferrer" aria-label="Facebook"><BsFacebook/></a>
        {/* instagram / I don't have instagram, but the link will be ready. */}
        {/* <a href="https://instagram.com" target='_blank'><FiInstagram/></a> */}
        {/* twitter / I don't have twitter, but the link will be ready below. */}
        {/* <a href="https://twitter.com" target='_blank'><GrTwitter/></a> */}
      </div>
      <div className="footer_copyright">
        <small>&copy; {currentYear} Created by Renzo Silva. All the rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer;