import React from 'react'
import { icons } from 'react-icons'
import './navbar.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { FaCode } from "react-icons/fa"
// import { HiCodeBracketSquare } from "react-icons/hi"
import { BiMessageSquareDetail } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav>
      <a href='#' className='active'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BiBook/></a>
      <a href='#portfolio'><FaCode/></a>
      <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar