import React, { useState } from 'react'
import './navbar.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
// import { FaCode } from "react-icons/fa"
// import { HiCodeBracketSquare } from "react-icons/hi"
import { BiMessageSquareDetail } from "react-icons/bi"
// import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' : '' }><AiOutlineHome/></a>
      <div>
      </div>
      <a href='#about-me-section' onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : '' }><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : ''} ><BiBook/></a>
      {/* <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active' : '' }><FaCode/></a> */}
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar;